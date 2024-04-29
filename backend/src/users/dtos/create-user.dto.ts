import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserEntity } from "../entities/user.entity";
import { ApiProperty, OmitType } from '@nestjs/swagger';

export class CreateUserDto extends OmitType(UserEntity, ['user_id']) {

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty()
  users_status: boolean;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  users_name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  users_surname: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @IsEmail()
  users_email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  users_password: string;

  @IsNotEmpty()
  @ApiProperty()
  users_access_level: string;
  
  @IsNotEmpty()
  @IsString()
  @IsDate()
  @ApiProperty()
  users_create_date: Date;
}
