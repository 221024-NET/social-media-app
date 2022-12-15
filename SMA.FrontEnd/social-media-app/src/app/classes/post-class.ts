export class PostClass {
    postid: number = 0;
    username: string = "ABCs User";
    user_selfie: string = "https://www.katherineannward.com/Images/Thumbnails/25thHourTarotThumb.png";
    date: string = "Oct 24, 2022";
    message: string = "this message";
    image_url?: string = "https://www.katherineannward.com/Images/Thumbnails/25thHourTarotThumb.png";
    likecount: number = 777;

    constructor(id:number, un:string, upic:string, d:string, m:string,img:string,l:number) {
        this.postid = id;
        this.username = un;
        this.user_selfie = upic;
        this.date = d;
        this.message = m;
        this.image_url = img;
        this.likecount = l;
    }
}
