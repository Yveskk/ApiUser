"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const notification_entity_1 = require("../Notification/entities/notification.entity/notification.entity");
const user_entity_1 = require("../user/entities/user.entity/user.entity");
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgress',
    password: 'postgres',
    database: 'api_utilisateur',
    entities: [notification_entity_1.NotificationEntity, user_entity_1.UserEntity],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map