export class Like {
    like_id: number;
    user_id: number;
    post_id: number;

    constructor(like_id: number, user_id: number, post_id: number) {
        this.like_id = like_id;
        this.user_id = user_id;
        this.post_id = post_id;
    }
}
