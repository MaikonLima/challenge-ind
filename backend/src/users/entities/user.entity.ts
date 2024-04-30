import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({
        type: 'tinyint',
        comment: '0 = Inativo, 1 = Ativo'
    })
    users_status: boolean;

    @Column()
    users_name: string;

    @Column()
    users_surname: string;

    @Column()
    users_email: string;

    @Column()
    users_password: string;

    @Column()
    users_access_level: string;

    @Column()
    users_create_date: Date;

    @Column()
    user_profile_id: number;
}