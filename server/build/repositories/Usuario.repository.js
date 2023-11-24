"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
class UsuarioRepository {
    save(Usuario) {
        return new Promise((resolve, reject) => {
            database_1.pool.query("INSERT INTO Usuario (nombre, apellido, email, contrasena, nivel, fecha_registro) VALUES (?,?,?,?,?,?)", [Usuario.nombre, Usuario.apellido, Usuario.email, Usuario.contrasena, Usuario.nivel, Usuario.fecha_registro]),
                (err, res) => {
                    if (err)
                        reject(err);
                    else
                        this.retrieveById(res.insertId)
                            .then((Usuario) => resolve(Usuario))
                            .catch(reject);
                };
        });
    }
    retrieveAll(searchParams) {
        let query = "SELECT * FROM Usuario";
        let condition = "";
        if (searchParams === null || searchParams === void 0 ? void 0 : searchParams.email)
            condition += "email = TRUE";
        if (searchParams === null || searchParams === void 0 ? void 0 : searchParams.nombre)
            condition += `LOWER(nombre) LIKE '%${searchParams.nombre}%'`;
        if (searchParams === null || searchParams === void 0 ? void 0 : searchParams.apellido)
            condition += `LOWER(nombre) LIKE '%${searchParams.apellido}%'`;
        if (condition.length)
            query += " WHERE " + condition;
        return new Promise((resolve, reject) => {
            database_1.pool.query(query, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        });
    }
    retrieveById(id_user) {
        return new Promise((resolve, reject) => {
            database_1.pool.query("SELECT * FROM Usuario WHERE id_user = ?", [id_user]),
                (err, res) => {
                    if (err)
                        reject(err);
                    else
                        resolve(res === null || res === void 0 ? void 0 : res[0]);
                };
        });
    }
    update(Usuario) {
        return new Promise((resolve, reject) => {
            database_1.pool.query("UPDATE Usuario SET nombre = IFNULL(?,nombre), apellido  = IFNULL(?,apellido),  email = IFNULL(?,email), contrasena = IFNULL(?,contrasena), nivel = IFNULL(?,nivel) WHERE id_user = ?", [Usuario.nombre, Usuario.apellido, Usuario.email, Usuario.contrasena, Usuario.nivel, Usuario.id]),
                (err, res) => {
                    if (err)
                        reject(err);
                    else
                        resolve(res.affectedRows);
                };
        });
    }
    delete(id_user) {
        return new Promise((resolve, reject) => {
            database_1.pool.query("DELETE FROM Usuario WHERE id_user = ?", [id_user]),
                (err, res) => {
                    if (err)
                        reject(err);
                    else
                        resolve(res.affectedRows);
                };
        });
    }
}
exports.default = new UsuarioRepository();
