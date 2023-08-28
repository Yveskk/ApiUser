import { NotificationService } from 'src/Notification/notification.service';
import { DataSource, Connection } from 'typeorm';
import { CreateUserDto } from './Dto/create/create-user.dto';
import { UpdateUserDto } from './Dto/update/update-user.dto';
import { UserEntity } from './entities/user.entity/user.entity';
export declare class UserService {
    private readonly notificationService;
    private readonly dataSource;
    private readonly connection;
    constructor(notificationService: NotificationService, dataSource: DataSource, connection: Connection);
    createUser(createUserDto: CreateUserDto): Promise<{
        message: string;
    }>;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<{
        message: string;
    }>;
    deleteUser(id: number): Promise<{
        message: string;
    }>;
    getAllUsers(): Promise<{
        message: string;
        user: UserEntity[];
    }>;
    getUser(id: number): Promise<{
        message: string;
        user: UserEntity;
    }>;
}
