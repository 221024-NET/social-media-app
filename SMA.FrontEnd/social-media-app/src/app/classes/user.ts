
export class User {
    user_id: number;
    username: string;
    password: string;
    first_name?: string;
    last_name?: string;
    phone_number?: number;

    constructor(user_id: number, username: string, password: string, first_name?: string, last_name?: string, phone_number?: number) {
        this.user_id = user_id;
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone_number = phone_number;
    }
}
