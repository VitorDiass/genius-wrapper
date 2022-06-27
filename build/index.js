"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const client = new client_1.default();
client.setBearerToken("lQJp48VLcvV8Yoj7vHTg-Qb1gI6korwaP1i0EqwxgjDGyqFHj27aSkQhzJoeOCfh");
client.getSong("3039923").then((res) => console.log(res));
exports.default = client_1.default;
