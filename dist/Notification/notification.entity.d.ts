import { User } from "src/user/user.entity";
export declare class NotifictionEntity {
    id: number;
    action: string;
    user: User;
    createdAt: Date;
}
