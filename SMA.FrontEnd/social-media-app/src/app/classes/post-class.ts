export class PostClass {
    post_id: number;
    user_id: number;
    content: string;
    date: Date;
    image?: string;

    constructor(pid:number, uid:number, m:string, d:Date, img:string) {
        this.post_id = pid;
        this.user_id = uid;
        this.date = d;
        this.content = m;
        this.image = img;
    }

    timeNow() { this.date = new Date(); }
}
