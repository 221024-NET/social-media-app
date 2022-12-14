export interface BaseUser {
    userId: number;
    username: string;
    password: string;
    first_name?: string;
    last_name?: string;
    phone_number?: number;
}
