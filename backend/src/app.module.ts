
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './config/database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from './config/enviroments/config.module';
import { SwaggerModule } from './config/swagger/swagger.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/shared/guards/jwt-auth.guard';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    SwaggerModule,
    AuthModule, 
    UsersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ]
})
export class AppModule { }