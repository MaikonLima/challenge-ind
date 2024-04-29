import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserEntity } from "../entities/user.entity";
import { ApiProperty, OmitType } from '@nestjs/swagger';

export class UpdateUserDto extends OmitType(UserEntity, ['user_id']) {
  @ApiProperty()
  users_status: boolean;

  @ApiProperty()
  users_name: string;

  @ApiProperty()
  users_surname: string;

  @ApiProperty()
  users_email: string;

  @ApiProperty()
  users_password: string;

  @ApiProperty()
  users_access_level: string;
}
