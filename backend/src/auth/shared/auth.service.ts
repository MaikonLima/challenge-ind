
import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from '../dto/login.dto';
import { ConfigService } from '@nestjs/config';
import Tokens from '../interfaces/tokens';
import { ErroResponse } from 'src/common/common/error-response';
import { CodeError, CodeObject, ValidType } from 'src/common/common/Enums';
import { Validations } from 'src/common/common/validations';
import { UsersService } from 'src/users/shared/users.service';
import { hash, isMatchHash } from 'src/utils/hash';
@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService,
        private readonly configService: ConfigService,
    ) { }

    async validateUser(email: string, password: string) {

        const user = await this.userService.findByEmail(email);

        if (!user) {
            throw new NotFoundException(new ErroResponse(CodeError.NOT_FOUND, 'Usuário não cadastrado!', CodeObject.USER));
        }

        const checkPass = await isMatchHash(password, user.users_password);

        if (user && checkPass) {
            return user;
        }

        return null;
    }

    async login(user: LoginDTO) {

        const userSaved = await this.userService.findByEmail(user.email);

        const { access_token, refresh_token } = await this.getTokens(userSaved.users_email, userSaved.users_name, userSaved.user_profile_id);


        await this.userService.updateRefreshToken(userSaved.user_id, await hash(refresh_token));

        return {
            name: userSaved.users_name,
            email: userSaved.users_email,
            access_token: access_token,
            refresh_token: refresh_token,
        };

    }

    async refreshToken(email: string, refreshToken: string) {
        const user = await this.userService.findByEmail(email);

        if (!user) {
            throw new HttpException('User with this enrollment does not exist', HttpStatus.NOT_FOUND);
        }

        const { access_token, refresh_token } = await this.getTokens(user.users_email, user.users_name, user.user_profile_id);

        const hashed_refresh_token = await hash(refresh_token);

        await this.userService.updateRefreshToken(user.user_id, hashed_refresh_token)

        return {
            access_token: access_token,
            refresh_token: refresh_token,
            name: user.users_name,
            expires_in: this.configService.get('auth.refresh_token_expires_in')
        }
    }


    async removeRefreshToken(id: number): Promise<any> {
        const user = await this.userService.getById(id);

        await this.userService.updateRefreshToken(user.user_id, null);
    }

    async getTokens(email: string, name: string, profile_id: number): Promise<Tokens> {

        const [access_token, refresh_token] = await Promise.all([
            this.jwtService.signAsync({
                email: email,
                name: name,
                profile_id: profile_id,
            },
                {
                    secret: this.configService.get('auth.token_secret'),
                    expiresIn: this.configService.get('auth.token_expires_in'),
                    algorithm: 'HS256'

                }),
            this.jwtService.signAsync({
                email: email,
            },
                {
                    secret: this.configService.get('auth.refresh_token_secret'),
                    expiresIn: this.configService.get('auth.refresh_token_expires_in'),
                    algorithm: 'HS256'
                })
        ]);

        return {
            access_token: access_token,
            refresh_token: refresh_token
        };
    }


}
