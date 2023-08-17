import { Repository, EntityManager } from "typeorm";
import { User } from "./user.entity";
import { NotificationService } from "src/notification/notification.service";
export declare class UserService {
    private userRepository;
    private notificationService;
    private readonly entityManager;
    private userService;
    constructor(userRepository: Repository<User>, notificationService: NotificationService, entityManager: EntityManager, userService: Repository<UserService>);
    create(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    IdFind(id: number): Promise<User>;
    update(id: number, user: User): Promise<User>;
    updatedNotification(id: number, updateData: Partial<User>): Promise<User>;
    remove(id: number): Promise<User>;
    deleteNotification(id: number): Promise<void>;
    createNotification(user: User): Promise<User>;
}
