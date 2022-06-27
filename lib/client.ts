import { GET_FETCH } from "././fetch/fetch";
import { GENIUS_API_BASE, GENIUS_API_SONGS } from "./consts";

class Client {
  private bearerToken: string = "";

  constructor() {}

  public getBearerToken(): string {
    return this.bearerToken || "";
  }

  public setBearerToken(bearerToken: string): void {
    this.bearerToken = bearerToken;
  }

  public getSong(songId: string): Promise<any> {
    console.log(this.bearerToken)
    return GET_FETCH(`${GENIUS_API_BASE}/${GENIUS_API_SONGS}/${songId}`, this.getBearerToken());
  }
}

export default Client;
