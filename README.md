# GENIUS-WRAPPER
A js wrapper for [Genius](https://genius.com/) API

![Release](https://badgen.net/github/release/VitorDiass/genius-wrapper)
---


---
### INSTALLATION

NPM
```
npm install genius-js-wrapper
```
YARN
```
yarn add genius-js-wrapper
```
---
### USAGE

Get your developer key [here](https://genius.com/developers)

Create a new object passing down your developer key or just set the token after. 
```js
import Client from 'genius-wrapper';

const client = new Client(YOUR_DEVELOPER_KEY);
// or you can do
client.setBearerToken(YOUR_DEVELOPER_KEY);

//ready to request data from genius API
```
---

### INTERFACES AND TYPES

```ts
export type text_format_types = "dom" | "plain" | "html";

export interface text_format {
     text_format : [text_format_types?, text_format_types?, text_format_types?];
}

export type sort_order = 'title' | 'popularity' ;

```

---
### METHODS

`getSongById(songId : string, text_format?: text_format)` - text_format is totally optional, [see types and interface](#interfaces-and-types) (defaults to 'dom')

```js
const getSong = async() => {
  try{
    const song = await client.getSongById('378195', {text_format : ['html']});
    // song now has the response from genius API
  } catch(error){
    //handle errors here
  }
}
```

`getArtistById(artitsId : string, text_format?: text_format)` - text_format is totally optional, [see types and interface](#interfaces-and-types) (defaults to 'dom')

```js
const getArtist = async() => {
  try{
    const artist = await client.getArtisyById('16775');
    // artist now has the response from genius API
  } catch(error){
    //handle errors here
  }
}
```

`getArtistSongsById(artistId : string, sort?: sort_order, per_page?: number, page?: number)` - optional sort [see types and interface](#interfaces-and-types) defaults to 'title', per_page and page parameters. [more info](https://docs.genius.com/#artists-h2)


```js
const getArtistSongs = async() => {
  try{
    const artistSongs = await client.getArtistSongsById('16775','title', 5, 3);
    // artistSongs now has the response from genius API
  } catch(error){
    //handle errors here
  }
}
```

`getAnnotationsById(annotationId : string, text_format?: text_format)` - text_format is totally optional, [see types and interface](#interfaces-and-types) (defaults to 'dom')

```js
const getAnnotation = async() => {
  try{
    const annotation = await client.getAnnotationsById('10225840');
    // annotation now has the response from genius API
  } catch(error){
    //handle errors here
  }
}
```

`getWebPageByURL(raw_annotatable_url: string, canonical_url? : string, og_url?: string)` - [please refer here to know more](https://docs.genius.com/#web_pages-h2)


```js
const getWebPageByUrl = async() => {
  try{
    const webPage = await client.getWebPageByURL('10225840');
    // webPage now has the response from genius API
  } catch(error){
    //handle errors here
  }
}
```

`getReferents(created_by_id : string, song_id?: string, web_page_id?: string, text_format?: number, page?: number)` - [please refer here to know more](https://docs.genius.com/#referents-h2)

```js
const referents = async() => {
  try{
    const referents = await client.getReferents(USER_ID_TO_RETRIEVE_REFERENTS_FROM);
    // referents now has the response from genius API
  } catch(error){
    //handle errors here
  }
}
```

`search(query: string)` - search genius API for artists, songs, lyrics and more. 

```js
const search = async() => {
  try{
    const search = await client.search('arctic monkeys');
    // search now has the response from genius API
  } catch(error){
    //handle errors here
  }
}
```

---

### TO DO

- [ ] Add convenience methods to request specific information such as artist name, album name, release year, etc
- [ ] Implement a lyrics grabber
- [ ] Add meaninful error messages

---

### LICENSE
MIT



