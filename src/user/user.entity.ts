import { NotifictionEntity } from "src/notification/notification.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user')
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    firstname : string;

    @Column()
    lastname: string;

    @Column()
    age : number;

    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updatedAt : Date;

  @OneToMany(() => NotifictionEntity, notification => notification.user)
  notifications: Notification[];
}