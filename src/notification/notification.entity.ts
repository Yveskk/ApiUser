import { User } from "src/user/user.entity";
import {  Column, CreateDateColumn, Entity, ManyToMany , PrimaryGeneratedColumn } from "typeorm";



@Entity('notification')
export class NotifictionEntity{
    @PrimaryGeneratedColumn()
    id : number; 

    @Column()
    action : string; 
 
    @ManyToMany(() => User , user => user.notifications)
    user : User;

    @CreateDateColumn()
    createdAt : Date;

    

   



  
    


}