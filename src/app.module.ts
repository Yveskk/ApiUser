import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { NotificationModule } from './notification/notification.module';
import { NotifictionEntity } from './notification/notification.entity';


@Module({
  imports: [
    UserModule,
    NotificationModule, 
  //connexion a la base de donnée
  TypeOrmModule.forRoot({
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgress',
      password: 'postgres',
      database: 'api_utilisateur',
    entities: [User , NotifictionEntity], 
    synchronize: true, 
  }),

  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {
  
}
