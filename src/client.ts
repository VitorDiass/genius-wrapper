import { GET_FETCH } from "./fetch/fetch";
import { GENIUS_API_ANNOTATIONS, GENIUS_API_ARTIST, GENIUS_API_BASE, GENIUS_API_REFERENTS, GENIUS_API_SEARCH, GENIUS_API_SONGS, GENIUS_API_WEB_PAGES } from "./consts";
import { format_text } from "./utils/utils";
import { sort_order, text_format, text_format_types } from "./interfaces";

class Client {
    private bearerToken: string = "";

    constructor(bearerToken : string) {
      this.setBearerToken(bearerToken)
    }

    
    
    /**
     * @description function to get the bearer token
     * @returns string
     */
    public getBearerToken(): string {
        return this.bearerToken || "";
    }


    /**
     * @description function to set the bearer token
     * @param bearerToken string
     * return void
     */
    public setBearerToken(bearerToken: string): void {
        this.bearerToken = bearerToken;
    }


    /**
     * @description returns the songs given its id
     * @param songId string
     * @param text_format? 'plain' | 'html' | 'dom' @default 'dom'
     * @returns Promise<any>
     */
    public getSongById(songId: string, text_format?: text_format): Promise<any> {
        const text_format_processed = "text_format=" + format_text(text_format);

        return GET_FETCH(`${GENIUS_API_BASE}/${GENIUS_API_SONGS}/${songId}`, this.getBearerToken(), text_format_processed);
    }


    /**
     * @description returns the artist given its id
     * @param artistId string
     * @param text_format? 'plain' | 'html' | 'dom' @default 'dom'
     * @returns Promise<any>
     */
    public getArtistById(artistId: string, text_format?: text_format): Promise<any> {
        const text_format_processed = "text_format=" + format_text(text_format);

        return GET_FETCH(`${GENIUS_API_BASE}/${GENIUS_API_ARTIST}/${artistId}`, this.getBearerToken(), text_format_processed);
    }


     /**
     * @description retuns artist's songs given artist id
     * @param artistId string
     * @param sort? 'title' | 'popularity' @default 'title'
     * @param per_page? number @default 20
     * @param page? number
     * @returns Promise<any>
     */
    public getArtistSongsById(artistId: string, sort?: sort_order, per_page?: number, page?: number) : Promise<any>{
        const sort_processed     = sort ? "sort=" + sort  : "";
        const per_page_processed = per_page ? "per_page=" + per_page : "";
        const page_processed     = page ? "page=" + page : "";

       /*  const queryString = new URLSearchParams({param1 : '', param2 : "ola"}).toString()
        console.log(queryString) */

        return GET_FETCH(`${GENIUS_API_BASE}/${GENIUS_API_ARTIST}/${artistId}/songs`, 
                          this.getBearerToken(),
                          `${sort_processed}${per_page_processed && ('&' + per_page_processed) }${page_processed && ('&' + page_processed)}`
                        );

    }


     /**
     * @description retuns an annotation given its id
     * @param annotationId string
     * @param text_format? 'plain' | 'html' | 'dom' @default 'dom'
     * @returns Promise<any>
     */
    public getAnnotationsById(annotationId : string, text_format? : text_format) : Promise<any> {
      const text_format_processed = "text_format=" + format_text(text_format);

      return GET_FETCH(`${GENIUS_API_BASE}/${GENIUS_API_ANNOTATIONS}/${annotationId}`, this.getBearerToken(), text_format_processed);
    }


     /**
     * @description retuns a web page 
     * (web page is a single, publicly accessible page to which annotation may be attached,Web pages map 1-to-1 with unique, canonical URLs.) 
     * based on provided raw_annotatable_url, canonical_url, og_url
     * @param raw_annotatable_url string 
     * @param canonical_url? string
     * @param og_url? string
     * @returns Promise<any>
     */
    public getWebPageByURL(raw_annotatable_url : string, canonical_url? : string, og_url? : string) : Promise<any> {
      const raw_annotabtable_url_processed = raw_annotatable_url ? "raw_annotatable_url=" + encodeURIComponent(raw_annotatable_url) : "";
      const canonical_url_processed        = canonical_url ? "canonical_url=" + encodeURIComponent(canonical_url) : "";
      const og_url_processed               = og_url ? "og_url=" + encodeURIComponent(og_url) : "";

      return GET_FETCH(`${GENIUS_API_BASE}/${GENIUS_API_WEB_PAGES}/lookup`,this.bearerToken, `${raw_annotabtable_url_processed}${canonical_url_processed && ('&' + canonical_url_processed)}${og_url_processed && ('&' + og_url_processed)}`);
    }



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
    public getReferents(created_by_id : string, song_id? : string, web_page_id? : string, text_format? : text_format, per_page? : number, page? : number) : Promise<any> {
      let song_or_webpage = song_id !== '' ? "song_id=" + song_id : (web_page_id !== '' ? "web_page_id=" + web_page_id : '');
      const text_format_processed = "text_format=" + format_text(text_format);
      const per_page_processed = per_page ? "per_page=" + per_page : "";
      const page_processed = page ? "page=" + page : "";

      return GET_FETCH(`${GENIUS_API_BASE}/${GENIUS_API_REFERENTS}`, this.getBearerToken(), 
                        `created_by_id=${created_by_id}
                        ${song_or_webpage && ('&' + song_or_webpage)}
                        ${text_format_processed && ('&' + text_format_processed)}
                        ${per_page_processed && ('&' + per_page_processed)}
                        ${page_processed && ('&' + page_processed)}`
                      );
    }

    public search(query : string) : Promise<any> {
      let improvedQuery = ''
      if(query){
        improvedQuery = encodeURIComponent(query.trim());
      }

      return GET_FETCH(`${GENIUS_API_BASE}/${GENIUS_API_SEARCH}`, this.getBearerToken(), `q=${improvedQuery}`);

    }

}

export default Client;
