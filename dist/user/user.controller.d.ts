import { UserService } from "./user.service";
import { User } from "./user.entity";
import { NotificationService } from "src/notification/notification.service";
export declare class UserController {
    private readonly userService;
    private readonly notificationService;
    constructor(userService: UserService, notificationService: NotificationService);
    create(user: User): Promise<{
        message: string;
        user: User;
    }>;
    findAll(): Promise<User[]>;
    findOneById(id: number): Promise<User | undefined>;
    udpate(id: number, user: User): Promise<{
        message: string;
        user: User;
    }>;
    remove(id: number): Promise<{
        message: string;
        userDeleted: void;
    }>;
}
