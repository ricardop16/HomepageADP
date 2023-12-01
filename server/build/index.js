"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const usuario_routes_1 = __importDefault(require("./routes/usuario.routes"));
const miembro_routes_1 = __importDefault(require("./routes/miembro.routes"));
const nivel_routes_1 = __importDefault(require("./routes/nivel.routes"));
const asamblea_routes_1 = __importDefault(require("./routes/asamblea.routes"));
const asistencia_routes_1 = __importDefault(require("./routes/asistencia.routes"));
const area_routes_1 = __importDefault(require("./routes/area.routes"));
const traslado_routes_1 = __importDefault(require("./routes/traslado.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: 'http://localhost:5174',
    credentials: true
}));
app.use('/api', auth_routes_1.default);
app.use('/api', usuario_routes_1.default);
app.use('/api', miembro_routes_1.default);
app.use('/api', nivel_routes_1.default);
app.use('/api', asamblea_routes_1.default);
app.use('/api', asistencia_routes_1.default);
app.use('/api', area_routes_1.default);
app.use('/api', traslado_routes_1.default);
const por = 1232;
app.listen(por, () => {
    console.log('server listening on port Localhost: ${por}');
    console.log(por);
});
