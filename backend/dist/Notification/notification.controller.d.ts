import { NotificationService } from './notification.service';
export declare class NotificationController {
    private readonly notifcationService;
    constructor(notifcationService: NotificationService);
    GetNotification(id: number): Promise<import("../user/entities/user.entity/user.entity").UserEntity>;
    GetNotifications(): Promise<import("./entities/notification.entity/notification.entity").NotificationEntity[]>;
}
