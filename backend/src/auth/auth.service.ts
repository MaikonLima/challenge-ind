import { Injectable } from '@nestjs/common';
import { UserToken } from './models/UserToken';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/shared/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserPayload } from './models/UserPayload';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
        private readonly jtwService: JwtService,
    ) { }

    login(user: any): UserToken {
        const payload: UserPayload = {
            sub: user.user_id,
            email: user.users_email,
            name: user.users_name,
        };
        const jwtToken = this.jtwService.sign(payload);

        return {
            access_token: jwtToken,
        };
    }

    async validateUser(email: string, password: string) {
        const user = await this.userService.findByEmail(email);
        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.users_password);
            if (isPasswordValid) {
                return {
                    ...user,
                    password: undefined,
                };
            }
        }
        throw new Error('Email address or password provided is incorrect.');
    }
}
