import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { NotifictionEntity } from "src/notification/notification.entity";
import { NotificationService } from "src/notification/notification.service";
import { NotificationModule } from "src/notification/notification.module";


@Module(
    {
        imports : [TypeOrmModule.forFeature([User, NotifictionEntity]) , NotificationModule],
        controllers: [UserController],
        providers: [UserService , NotificationService],
      

    }
)

export class UserModule {
  
}