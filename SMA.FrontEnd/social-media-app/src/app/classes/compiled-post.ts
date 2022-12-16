
import { PostClass } from "./post-class";
import { User } from "./user";

export class CompiledPost {
    author: User;
    post: PostClass;

    constructor(u:User,p:PostClass)
    {
        this.author = u;
        this.post = p;
    } 
}
