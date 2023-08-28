import { CreateUserDto } from './Dto/create/create-user.dto';
import { UserEntity } from './entities/user.entity/user.entity';
import { UpdateUserDto } from './Dto/update/update-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<{
        message: string;
    }>;
    getAllUser(): Promise<{
        message: string;
        user: UserEntity[];
    }>;
    getUser(id: number): Promise<{
        message: string;
        user: UserEntity;
    }>;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<{
        message: string;
    }>;
    deleteUser(id: number): Promise<{
        message: string;
    }>;
}
