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

import {createPool} from 'mysql2/promise' 

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3305,
    database: 'gestorasamblea'
})