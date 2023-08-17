import { NotifictionEntity } from "./notification.entity";
import { NotificationService } from "./notification.service";
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    findAll(): Promise<NotifictionEntity[]>;
}
