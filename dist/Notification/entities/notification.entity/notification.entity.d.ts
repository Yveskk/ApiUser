import { UserEntity } from 'src/user/entities/user.entity/user.entity';
export declare class NotificationEntity {
    id: number;
    message: string;
    createdAt: Date;
    user: UserEntity;
}
