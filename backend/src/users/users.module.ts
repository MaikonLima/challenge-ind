import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './shared/users.service';
import { UsersController } from './controllers/users.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports:[UsersService]
})
export class UsersModule {}
