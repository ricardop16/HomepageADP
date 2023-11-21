"use strict";
/* import {DataSource} from 'typeorm'

export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3305,
    username: "root",
    password: "123456",
    database: "gestorasamblea",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = require("mysql2/promise");
exports.pool = (0, promise_1.createPool)({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3305,
    database: 'gestorasamblea'
});
