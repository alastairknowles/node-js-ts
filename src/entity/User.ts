import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn({type: "bigint"})
    id: number;

    @Column({name: "first_name", length: 100,  nullable: false})
    firstName: string;

    @Column({name: "last_name", length: 100,  nullable: false})
    lastName: string;

    @Column({name: "email", length: 190, nullable: false})
    email: string;

}
