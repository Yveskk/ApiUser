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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const notification_entity_1 = require("./notification.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let NotificationService = exports.NotificationService = class NotificationService {
    constructor(userNotificationRepository) {
        this.userNotificationRepository = userNotificationRepository;
    }
    sendNotification(message) {
        console.log('Notification sent:', message);
    }
    async createNotification(user, message) {
        try {
            const notification = new notification_entity_1.NotifictionEntity();
            notification.action = message;
            notification.user = user;
            return this.userNotificationRepository.save(notification);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('notification n a pas été créer');
        }
    }
    async findAll() {
        try {
            const notif = await this.userNotificationRepository.find();
            return notif;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('notification n a pas été créer');
        }
    }
};
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(notification_entity_1.NotifictionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NotificationService);
//# sourceMappingURL=notification.service.js.map