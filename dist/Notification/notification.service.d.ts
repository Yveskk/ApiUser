import { NotificationEntity } from './entities/notification.entity/notification.entity';
import { Connection, QueryRunner } from 'typeorm';
import { UserEntity } from 'src/user/entities/user.entity/user.entity';
import { NotificationDto } from './Dto/notification.dto';
export declare class NotificationService {
    private readonly connection;
    constructor(connection: Connection);
    createNotification(queryRunner: QueryRunner, dtoNotification: NotificationDto, user: UserEntity): Promise<void>;
    getNotifications(): Promise<NotificationEntity[]>;
    getNotification(id: number): Promise<UserEntity>;
}
