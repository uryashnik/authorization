import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true,  nullable: false })
    email: string;

    @Column({nullable: false})
    password: string;

    @Column({})
    firstName: string;

    @Column()
    lastName: string;

    @Column({default: true})
    isActive: boolean;
}