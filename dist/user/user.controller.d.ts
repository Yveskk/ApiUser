import { UserService } from './user.service';
import { User } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, user: User): Promise<User>;
    remove(id: number): Promise<void>;
}
