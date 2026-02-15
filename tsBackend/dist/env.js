"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = __importDefault(require("zod"));
//schema of env
const envSchema = zod_1.default.object({
    PORT: zod_1.default.string(),
});
function createEnv(env) {
    var _a;
    const validationRes = envSchema.safeParse(env);
    if (!validationRes)
        throw new Error((_a = validationRes.error) === null || _a === void 0 ? void 0 : _a.message);
    return validationRes.data;
}
exports.env = createEnv(process.env);
