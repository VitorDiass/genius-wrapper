import { sort_order, text_format } from "./interfaces";
declare class Client {
    private bearerToken;
    constructor();
    /**
     * @description function to get the bearer token
     * @returns string
     */
    getBearerToken(): string;
    /**
     * @description function to set the bearer token
     * @param bearerToken string
     * return void
     */
    setBearerToken(bearerToken: string): void;
    /**
     * @description returns the songs given its id
     * @param songId string
     * @param text_format? 'plain' | 'html' | 'dom' @default 'dom'
     * @returns Promise<any>
     */
    getSongById(songId: string, text_format?: text_format): Promise<any>;
    /**
     * @description returns the artist given its id
     * @param artistId string
     * @param text_format? 'plain' | 'html' | 'dom' @default 'dom'
     * @returns Promise<any>
     */
    getArtistById(artistId: string, text_format?: text_format): Promise<any>;
    /**
    * @description retuns artist's songs given artist id
    * @param artistId string
    * @param sort? 'title' | 'popularity' @default 'title'
    * @param per_page? number @default 20
    * @param page? number
    * @returns Promise<any>
    */
    getArtistSongsById(artistId: string, sort?: sort_order, per_page?: number, page?: number): Promise<any>;
    /**
    * @description retuns an annotation given its id
    * @param annotationId string
    * @param text_format? 'plain' | 'html' | 'dom' @default 'dom'
    * @returns Promise<any>
    */
    getAnnotationsById(annotationId: string, text_format?: text_format): Promise<any>;
    /**
    * @description retuns a web page
    * (web page is a single, publicly accessible page to which annotation may be attached,Web pages map 1-to-1 with unique, canonical URLs.)
    * based on provided raw_annotatable_url, canonical_url, og_url
    * @param raw_annotatable_url string
    * @param canonical_url? string
    * @param og_url? string
    * @returns Promise<any>
    */
    getWebPageByURL(raw_annotatable_url: string, canonical_url?: string, og_url?: string): Promise<any>;
    /**
    * @description retuns referents given created_by_id, song_id or web_page_id(*)
    * @summary (*) provide at least one of the three parameters listed in @description.
    * If we want to provide only song_id or web_page_id, we just pass created_by_id as empty string.
    * If both song_id and web_page_id are provided, we will return references created by the song_id.
    * @param created_by_id string - ID of a user to get referents for
    * @param song_id? string - ID of a song to get referents for
    * @param web_page_id? string - ID of a web page to get referents for
    * @param text_format? 'plain' | 'html' | 'dom' @default 'dom' - 	Format for text bodies related to the document
    * @param per_page? number - 	Number of results to return per request
    * @param page? number - Paginated offset, (e.g., per_page=5&page=3 returns songs 11–15)
    * @returns Promise<any>
    */
    getReferents(created_by_id: string, song_id?: string, web_page_id?: string, text_format?: text_format, per_page?: number, page?: number): Promise<any>;
    search(query: string): Promise<any>;
}
export default Client;
