import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FirstAccessDto } from './dto/first-access.dto';
import { LoginDTO } from './dto/login.dto';
import { AuthService } from './shared/auth.service';
import { JwtAuthGuard } from './shared/guards/jwt-auth.guard';
import { JwtFirstAccessAuthGuard } from './shared/guards/jwt-first-access.guard';
import { JwtRefreshAuthGuard } from './shared/guards/jwt-refresh-auth.guard';
import { LocalAuthGuard } from './shared/guards/local-auth.guard';
import { IgnoreJwtGuard } from 'src/common/common/decorators/ignore-jwt-auth.decorator';

@ApiTags('Login')
@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
    ) { }

    @Post('/login')
    @IgnoreJwtGuard()
    @UseGuards(LocalAuthGuard)
    async auth(@Body() auth: LoginDTO) {
        return this.authService.login(auth);
    }

    @Post('/logout')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    async logout(@Request() payload: any) {
        return this.authService.removeRefreshToken(payload.user.sub);
    }

    @Post('/refresh_token')
    @ApiBearerAuth()
    @IgnoreJwtGuard()
    @UseGuards(JwtRefreshAuthGuard)
    async refreshToken(@Request() payload: any) {
        return this.authService.refreshToken(payload.user.enrollment, payload.user.refresh_token);
    }
}
