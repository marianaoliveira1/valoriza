import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";
import { v4 as uuid} from "uuid";
import { Exclude } from "class-transfor";

@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @Exclude()
    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    update_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { User };
