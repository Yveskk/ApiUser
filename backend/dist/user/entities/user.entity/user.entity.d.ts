import { NotificationEntity } from 'src/Notification/entities/notification.entity/notification.entity';
export declare class UserEntity {
    id: number;
    firstname: string;
    lastname: string;
    age: number;
    createdAt: Date;
    updatedAt: Date;
    notifications: NotificationEntity[];
}
