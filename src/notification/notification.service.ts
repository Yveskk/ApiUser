import { Injectable , InternalServerErrorException } from "@nestjs/common";
import { NotifictionEntity } from "./notification.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/user/user.entity";


@Injectable()
export class NotificationService{
    constructor(
        @InjectRepository(NotifictionEntity)
        private userNotificationRepository: Repository<NotifictionEntity>,
    ){}

     sendNotification(message: string): void {
    console.log('Notification sent:', message);
  }
        async createNotification(user: User , message: string) : Promise<NotifictionEntity>{
       
        try {
            const notification = new NotifictionEntity();
            notification.action = message;
            notification.user = user;
            return  this.userNotificationRepository.save(notification);
        } catch (error) {
            throw new   InternalServerErrorException('notification n a pas été créer')  
        }
    }

    async findAll() : Promise<NotifictionEntity[]>{
        try {
            
             const notif = await this.userNotificationRepository.find();
             return notif;

        } catch (error) {
            throw new   InternalServerErrorException('notification n a pas été créer'); 
        }
    }
}