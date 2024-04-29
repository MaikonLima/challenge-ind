import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

export default class UserRepository {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepostitory: Repository<UserEntity>,
    ) { }

    public async create(user: UserEntity): Promise<UserEntity> {
        return await this.userRepostitory.create(user);
    }

    public async save(user: UserEntity): Promise<UserEntity> {
        return this.userRepostitory.save(user);
    }

    public async findById(id: number): Promise<UserEntity | null> {
        const findUser = this.userRepostitory.findOne({
            where: {
                user_id: id,
            },
        });
        return findUser;
    }

    public async findByEmail(email: string): Promise<UserEntity | null> {
        return this.userRepostitory.findOne({
            where: {
                users_email: email
            },
        });
    }

    public async remove(id: number): Promise<void> {
        await this.userRepostitory.delete(id);
    }
}
