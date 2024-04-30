import { Controller, Get, Post, Put, Delete, Body, Param, ConflictException, HttpException, HttpStatus, Query, Patch, Res, UseGuards } from '@nestjs/common';
import { UsersService } from '../shared/users.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../dtos/create-user.dto';
import { FilterWorkstation } from 'src/utils/filter.dto';
import { QueryUserDto } from '../dtos/query-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { IgnoreJwtGuard } from 'src/common/common/decorators/ignore-jwt-auth.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
@ApiBearerAuth()
export class UsersController {
    constructor(private userService: UsersService) { }


    @Post()
    @IgnoreJwtGuard()
    async createUser(@Body() createUserDto: CreateUserDto) {
        const newUser = await this.userService.createUser(createUserDto);
        return { user: newUser };
    }

    @Put(':id')
    async updateUser(
        @Param('id') id: number,
        @Body() updateDto: UpdateUserDto
    ) {
        return this.userService.update(id, updateDto);
    }

    @Get()
    @IgnoreJwtGuard()
    async getAllUsers(
        @Query() search: QueryUserDto,
        @Query() paginationFilter: FilterWorkstation) {
        return this.userService.findAllUsers(paginationFilter, search);
    }

    @Get(':id')
    @IgnoreJwtGuard()
    async getOne(
        @Param('id') id: number,
    ) {
        return this.userService.getById(id);
    }

    @Delete('delete/:id')
    @IgnoreJwtGuard()
    remove(@Param('id') id: number): Promise<void> {
        return this.userService.remove(+id);
    }

    @Get('status-counts')
    @IgnoreJwtGuard()
    getStatusCounts() {
        return this.userService.getUserStatusCounts();
    }
}
