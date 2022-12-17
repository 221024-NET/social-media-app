import { CommentClass } from "./comment-class";
import { User } from "./user";

export class CompiledComment {
    user: User;
    comment: CommentClass;

    constructor(u:User,c:CommentClass)
    {
        this.user = u;
        this.comment = c;
    }
}
