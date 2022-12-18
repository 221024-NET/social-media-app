export class CommentClass {
    comment_id: number;
    comment: string;
    user_id: number;
    post_id: number;
    parent_comment_id? : number;

    constructor(cid:number,c:string,uid:number,pid:number,parcid?:number)
    {
        this.comment_id = cid;
        this.comment = c;
        this.user_id = uid;
        this.post_id = pid;
        this.parent_comment_id = parcid;
    }
}
