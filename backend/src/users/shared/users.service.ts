import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { FilterWorkstation } from 'src/utils/filter.dto';
import { QueryUserDto } from '../dtos/query-user.dto';
import { paginate } from 'nestjs-typeorm-paginate';
import { EmailException } from 'src/utils/email-exist';
import { hash } from 'src/utils/hash';
import { converteBooleanToBit } from 'src/utils/boolean.bit';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { GenericException } from 'src/utils/notfound';
import { Validations } from 'src/common/common/validations';
import { ErroResponse } from 'src/common/common/error-response';
import { CodeError, CodeObject, ObjectSize } from 'src/common/common/Enums';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) { }

    async createUser(userDto: CreateUserDto): Promise<UserEntity> {
        const { users_email } = userDto;

        const user = this.userRepository.create(userDto);

        const userEmail = await this.userRepository.createQueryBuilder('users')
            .where('users.users_email = :users_email', { users_email })
            .getOne();

        user.users_create_date = new Date();
        user.users_name = user.users_name;
        user.users_surname = user.users_surname;
        user.users_access_level = user.users_access_level;
        user.users_password = user.users_password;
        user.users_email = user.users_email;
        user.users_status = !!converteBooleanToBit(user.users_status);
        user.users_password = await hash(user.users_password);
        user.user_profile_id = user.user_profile_id;

        if (userEmail) {
            throw new EmailException();
        }


        return this.userRepository.save(user);
    }

    async findAllUsers(PaginationFilter: FilterWorkstation, search: QueryUserDto) {
        const { search_name } = search


        const query = this.userRepository.createQueryBuilder('users')
        if (search_name) {
            query
                .andWhere(new Brackets(queryBuilderOne => {
                    queryBuilderOne
                        .where('users.users_name like :users_name', { users_name: `${search_name}%` })
                }));
        }

        return paginate<UserEntity>(query, PaginationFilter);
    }

    async getById(id: number): Promise<UserEntity | any> {
        const user = await this.userRepository
            .createQueryBuilder('users')
            .where('users.user_id = :id', { id })
            .getOne();

        return user ? user : null;
    }

    public async findByEmail(email: string): Promise<UserEntity | null> {
        return this.userRepository.findOne({
            where: {
                users_email: email
            },
        });
    }

    public async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }

    async getByLogin(login: string) {
        return this.userRepository.createQueryBuilder('users')
            .where('users.users_email = :login', { login })
            .getOne();
    }

    async update(id: number, updateDto: UpdateUserDto) {
        const user = await this.getById(id);
        if (!user) {
            throw new GenericException(
                'Id inválido!',
                HttpStatus.NOT_FOUND,
                'NOT FOUND'
            )
        }
        const email = updateDto.users_email
        const userEmail = await this.userRepository.createQueryBuilder('users')
            .where('users.users_email = :email AND users.user_id != :id', { email, id })
            .getOne();
        if (userEmail) {
            throw new BadRequestException('Email já cadastrado!')
        }

        user.users_name = updateDto.users_name;
        user.users_email = updateDto.users_email;
        user.users_update_data = new Date();
        user.users_status = updateDto.users_status;

        if (updateDto.users_password) {
            user.users_password = updateDto.users_password;
            user.users_password = await hash(updateDto.users_password)
        }
        user.users_login = updateDto.users_email;

        return this.userRepository.save(user);
    }


    async getUserStatusCounts(): Promise<{ labels: string[], data: number[] }> {
        const queryResult = await this.userRepository.createQueryBuilder("users")
            .select("users.users_status", "status")
            .addSelect("COUNT(users.user_id)", "count")
            .groupBy("users.users_status")
            .getRawMany();

        const labels = queryResult.map(item => item.status);
        const data = queryResult.map(item => parseInt(item.count, 10));

        return { labels, data };
    }

    async updateRefreshToken(id: number, refresh_token: string) {

        if (id > ObjectSize.INTEGER) {
            throw new BadRequestException(new ErroResponse(CodeError.INVALID_NUMBER, `Número de id inválido`, CodeObject.ID))
        }

        const user = await this.getById(id)

        if (!user) {
            throw new NotFoundException(new ErroResponse(CodeError.NOT_FOUND, `Usuario com id ${id} não existe`, CodeObject.USER))
        }

        user.user_refresh_token = refresh_token

        await this.userRepository.save(user)

    }
}