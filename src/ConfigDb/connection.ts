import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { NotificationEntity } from "src/Notification/entities/notification.entity/notification.entity";
import { UserEntity } from "../user/entities/user.entity/user.entity";


export const typeOrmConfig: TypeOrmModuleOptions= {
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgress',
      password: 'postgres',
      database: 'api_utilisateur',
    entities: [NotificationEntity , UserEntity],
    synchronize : true,
}
