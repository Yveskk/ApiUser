import { NotifictionEntity } from "./notification.entity";
import { Repository } from "typeorm";
import { User } from "src/user/user.entity";
export declare class NotificationService {
    private userNotificationRepository;
    constructor(userNotificationRepository: Repository<NotifictionEntity>);
    sendNotification(message: string): void;
    createNotification(user: User, message: string): Promise<NotifictionEntity>;
    findAll(): Promise<NotifictionEntity[]>;
}
