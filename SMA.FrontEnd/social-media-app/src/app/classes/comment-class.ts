export class CommentClass {
    postid: number = 0;
    username: string = "Another User";
    user_selfie: string = "https://www.katherineannward.com/Images/Thumbnails/25thHourTarotThumb.png";
    date: string = "Nov 1, 1011";
    message: string = "this message";

    constructor(id:number, un:string, upic:string, d:string, m:string) {
        this.postid = id;
        this.username = un;
        this.user_selfie = upic;
        this.date = d;
        this.message = m;
    }
}
