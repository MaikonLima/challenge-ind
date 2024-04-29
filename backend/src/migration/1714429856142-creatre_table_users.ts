import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatreTableUsers1714429856142 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        CREATE TABLE users (
            user_id SERIAL PRIMARY KEY,
            users_name VARCHAR(100) NOT NULL,
            users_surname VARCHAR(100) NOT NULL,
            users_email VARCHAR(255) UNIQUE NOT NULL,
            users_password VARCHAR(255) NOT NULL,
            users_access_level VARCHAR(255) NOT NULL,
            users_status VARCHAR(100) NOT NULL,
            nivel_acesso INT NOT NULL
        );
        
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            drop table users;
        `);
    }

}
