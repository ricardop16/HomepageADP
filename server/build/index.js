"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const usuario_routes_1 = __importDefault(require("./routes/usuario.routes"));
const miembro_routes_1 = __importDefault(require("./routes/miembro.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', usuario_routes_1.default);
app.use('/api', miembro_routes_1.default);
const por = 1235;
app.listen(por, () => {
    console.log('server listening on port Localhost: ${port}');
    console.log(por);
});
