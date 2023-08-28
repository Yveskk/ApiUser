import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationEntity } from 'src/Notification/entities/notification.entity/notification.entity';
import { UserEntity } from './entities/user.entity/user.entity';
import { NotificationModule } from 'src/Notification/notification.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { NotificationService } from 'src/Notification/notification.service';

@Module(
    {
        imports : [TypeOrmModule.forFeature([UserEntity, NotificationEntity]) , NotificationModule],
        controllers: [UserController],
        providers: [UserService , NotificationService], 

    }
)

export class UserModule {
    
}
