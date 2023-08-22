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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const notification_entity_1 = require("./entities/notification.entity/notification.entity");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/entities/user.entity/user.entity");
let NotificationService = exports.NotificationService = class NotificationService {
    constructor(connection) {
        this.connection = connection;
    }
    async createNotification(queryRunner, dtoNotification, user) {
        try {
            const notification = new notification_entity_1.NotificationEntity();
            notification.message = dtoNotification.message;
            notification.user = user;
            queryRunner.manager.save(notification);
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to create notification');
            }
        }
    }
    async getNotifications() {
        return this.connection.manager.find(notification_entity_1.NotificationEntity);
    }
    async getNotification(id) {
        return this.connection.manager.findOne(user_entity_1.UserEntity, { where: { id } });
    }
};
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], NotificationService);
//# sourceMappingURL=notification.service.js.map