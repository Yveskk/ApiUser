import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, user: User): Promise<User>;
    remove(id: number): Promise<void>;
}
