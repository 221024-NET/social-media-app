
import { PostClass } from "./post-class";
import { User } from "./user";

export class CompiledPost {
    user: User;
    post: PostClass;

    constructor(u:User,p:PostClass)
    {
        this.user = u;
        this.post = p;
    } 
}
