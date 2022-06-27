"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_1 = require("././fetch/fetch");
const consts_1 = require("./consts");
class Client {
    constructor() {
        this.bearerToken = "";
    }
    getBearerToken() {
        return this.bearerToken || "";
    }
    setBearerToken(bearerToken) {
        this.bearerToken = bearerToken;
    }
    getSong(songId) {
        return (0, fetch_1.GET_FETCH)(`${consts_1.GENIUS_API_BASE}/${consts_1.GENIUS_API_SONGS}/${songId}`, this.getBearerToken());
    }
}
exports.default = Client;
