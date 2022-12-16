export class PostClass {
    post_id: number = 0;
    user_id: number = 0;
    //username?: string = "ABCs User";
    //user_selfie?: string = "https://www.katherineannward.com/Images/Thumbnails/25thHourTarotThumb.png";
    content: string = "this message";
    date: any;
    //image?: string = "https://www.katherineannward.com/Images/Thumbnails/25thHourTarotThumb.png";
    //new PostClass(0,0,"name","","Oct","message","",0);
    constructor(pid:number, uid:number, m:string, d:string, img:string) {
        this.post_id = pid;
        this.user_id = uid;
        //this.username = un;
        //this.user_selfie = upic;
        this.date = "2022-10-24";
        this.content = m;
        //this.image = img;
        //this.likecount = l;
    }
}
