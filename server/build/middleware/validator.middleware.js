"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaValition = void 0;
const zod_1 = require("zod");
const schemaValition = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
        });
        return next();
    }
    catch (error) {
        console.log(error);
        if (error instanceof zod_1.ZodError) {
            return res.status(400).json(error.issues.map((issue) => ({
                path: issue.path,
                message: issue.message,
            })));
        }
        return res.status(400).json({ message: "internal server error" });
    }
};
exports.schemaValition = schemaValition;
