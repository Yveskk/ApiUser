"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const notification_service_1 = require("../Notification/notification.service");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity/user.entity");
const notification_dto_1 = require("../Notification/Dto/notification.dto");
const typeorm_2 = require("@nestjs/typeorm");
let UserService = exports.UserService = class UserService {
    constructor(notificationService, dataSource, connection) {
        this.notificationService = notificationService;
        this.dataSource = dataSource;
        this.connection = connection;
    }
    async createUser(createUserDto) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const user = new user_entity_1.UserEntity();
            user.firstname = createUserDto.firstname;
            user.lastname = createUserDto.lastname;
            user.age = createUserDto.age;
            await queryRunner.manager.save(user);
            const message = `${user.firstname} created `;
            const notif = new notification_dto_1.NotificationDto();
            notif.message = message;
            await this.notificationService.createNotification(queryRunner, notif, user);
            await queryRunner.commitTransaction();
            return { message: `  ${user.firstname} created` };
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
    async updateUser(id, updateUserDto) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const user = await queryRunner.manager.findOneOrFail(user_entity_1.UserEntity, {
                where: { id },
            });
            user.firstname = updateUserDto.firstname;
            user.lastname = updateUserDto.lastname;
            user.age = updateUserDto.age;
            await queryRunner.manager.save(user);
            const message = `updated ${user.firstname}`;
            const notif = new notification_dto_1.NotificationDto();
            notif.message = message;
            await this.notificationService.createNotification(queryRunner, notif, user);
            await queryRunner.commitTransaction();
            return { message: ` ${user.id} => ${user.firstname} updated` };
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            throw err;
        }
        finally {
            await queryRunner.release();
        }
    }
    async deleteUser(id) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const userdeleted = await queryRunner.manager.findOneOrFail(user_entity_1.UserEntity, {
                where: { id },
            });
            await queryRunner.manager.delete(user_entity_1.UserEntity, id);
            const message = `deleted ${userdeleted.firstname}`;
            const notif = new notification_dto_1.NotificationDto();
            notif.message = message;
            await this.notificationService.createNotification(queryRunner, notif, userdeleted);
            await queryRunner.commitTransaction();
            return {
                message: ` ${userdeleted.id} => ${userdeleted.firstname} deleted`,
            };
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            throw err;
        }
        finally {
            await queryRunner.release();
        }
    }
    async getAllUsers() {
        const user = new user_entity_1.UserEntity();
        const allUsers = await this.connection.manager.find(user_entity_1.UserEntity);
        return { message: 'Les utilisateurs : ', user: allUsers };
    }
    async getUser(id) {
        const userID = await this.connection.manager.findOne(user_entity_1.UserEntity, {
            where: { id },
        });
        return { message: `Utilisateur: ${userID.id} `, user: userID };
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_2.InjectConnection)()),
    __metadata("design:paramtypes", [notification_service_1.NotificationService,
        typeorm_1.DataSource,
        typeorm_1.Connection])
], UserService);
//# sourceMappingURL=user.service.js.map