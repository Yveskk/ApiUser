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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const notification_service_1 = require("../notification/notification.service");
let UserService = exports.UserService = class UserService {
    constructor(userRepository, notificationService, entityManager, userService) {
        this.userRepository = userRepository;
        this.notificationService = notificationService;
        this.entityManager = entityManager;
        this.userService = userService;
    }
    async create(user) {
        try {
            const createdUser = await this.userRepository.save(user);
            const notificationMessage = `${user.firstname} created`;
            this.notificationService.createNotification(createdUser, notificationMessage);
            return createdUser;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Could not create user");
        }
    }
    async findAll() {
        try {
            const users = await this.userRepository.find();
            return users;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Not found user");
        }
    }
    async IdFind(id) {
        try {
            const myId = await this.userRepository.findOneById(id);
            return myId;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Not found user by id: " + id);
        }
    }
    async update(id, user) {
        try {
            const userId = await this.IdFind(id);
            if (!user) {
                throw new Error('User not found');
            }
            if (userId.firstname) {
                userId.firstname = user.firstname;
            }
            if (userId.lastname) {
                userId.lastname = user.lastname;
            }
            if (userId.age) {
                userId.age = user.age;
            }
            return this.userRepository.save(userId);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("not updated user ");
        }
    }
    async updatedNotification(id, updateData) {
        try {
            return await this.entityManager.transaction(async (transactionalEntityManager) => {
                const userId = await transactionalEntityManager.findOneById(user_entity_1.User, id);
                if (!userId) {
                    throw new common_1.NotFoundException(`L'utilisateur avec l'ID ${id} n'a pas été trouvé`);
                }
                await transactionalEntityManager.merge(user_entity_1.User, userId, updateData);
                const result = await transactionalEntityManager.save(userId);
                const notificationMessage = `${userId.firstname} deleted`;
                await this.notificationService.createNotification(userId, notificationMessage);
                return result;
            });
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException('Une erreur est survenue lors de la suppression de l\'utilisateur');
        }
    }
    async remove(id) {
        const userId = await this.IdFind(id);
        if (!userId) {
            throw new Error('User not found');
        }
        try {
            return this.userRepository.remove(userId);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('not deleted user');
        }
    }
    async deleteNotification(id) {
        try {
            return await this.entityManager.transaction(async (transactionalEntityManager) => {
                const userToDelete = await transactionalEntityManager.findOneById(user_entity_1.User, id);
                if (!userToDelete) {
                    throw new common_1.NotFoundException(`L'utilisateur avec l'ID ${id} n'a pas été trouvé`);
                }
                await transactionalEntityManager.remove(userToDelete);
                const notificationMessage = `${userToDelete.firstname} deleted`;
                await this.notificationService.createNotification(userToDelete, notificationMessage);
            });
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException('Une erreur est survenue lors de la suppression de l\'utilisateur');
        }
    }
    async createNotification(user) {
        try {
            return await this.entityManager.transaction(async (transactionalEntityManager) => {
                const createdUser = await transactionalEntityManager.save(user_entity_1.User, user);
                const notificationMessage = `${user.firstname} created`;
                await this.notificationService.createNotification(createdUser, notificationMessage);
                return createdUser;
            });
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException('Une erreur est survenue lors de la suppression de l\'utilisateur');
        }
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(3, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        notification_service_1.NotificationService,
        typeorm_2.EntityManager,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map