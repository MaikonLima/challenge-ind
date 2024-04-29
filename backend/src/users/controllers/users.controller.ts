import { Controller, Get, Post, Put, Delete, Body, Param, ConflictException, HttpException, HttpStatus, Query, Patch, Res, UseGuards } from '@nestjs/common';
import { UsersService } from '../shared/users.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../dtos/create-user.dto';
import { FilterWorkstation } from 'src/utils/filter.dto';
import { QueryUserDto } from '../dtos/query-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { IsPublic } from 'src/auth/decorators/router-public.decorator';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guards';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @IsPublic()
    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        try {
            const newUser = await this.userService.createUser(createUserDto);
            return { user: newUser };
        } catch (error) {
            throw new HttpException('Erro ao criar usuário', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Put(':id')
    async updateUser(
        @Param('id') id: number,
        @Body() updateDto: UpdateUserDto
    ) {
        return this.userService.update(id, updateDto);
    }

    // @UseGuards(LocalAuthGuard)
    @Get()
    getAllUsers(
        @Query() search: QueryUserDto,
        @Query() paginationFilter: FilterWorkstation) {
        return this.userService.findAllUsers(paginationFilter, search);
    }

    @IsPublic()
    @Get(':id')
    async getOne(
        @Param('id') id: number,
    ) {
        return this.userService.getById(id);
    }

    @IsPublic()
    @Delete('delete/:id')
    remove(@Param('id') id: number): Promise<void> {
        return this.userService.remove(+id);
    }

    @IsPublic()
    @Get('status-counts')
    getStatusCounts() {
        return this.userService.getUserStatusCounts();
    }
}
