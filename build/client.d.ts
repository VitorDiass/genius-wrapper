declare class Client {
    private bearerToken;
    constructor();
    getBearerToken(): string;
    setBearerToken(bearerToken: string): void;
    getSong(songId: string): Promise<any>;
}
export default Client;
