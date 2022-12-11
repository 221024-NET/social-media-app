import { BaseUser } from "../interfaces/base-user";

export class User implements BaseUser{
        userId: number;
        username: string;
        password: string;
        first_name?: string;
        last_name?: string;
        phone_number?: number;

    constructor(user: BaseUser) {
        this.userId = user.userId;
        this.username = user.username;
        this.password = user.password;
    }

}
