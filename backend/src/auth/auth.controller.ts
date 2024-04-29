import {
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    UseGuards,
    Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guards';
import { AuthRequest } from './models/AuthRequest';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { IsPublic } from './decorators/router-public.decorator';

@Controller()
@ApiTags('login')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @IsPublic()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    // @UseGuards(LocalAuthGuard)
    @ApiParam({ name: 'password', type: 'string', required: true })
    @ApiParam({ name: 'email', type: 'string', required: true })
    login(@Request() req: AuthRequest) {
        return this.authService.login(req.users);
    }
}
