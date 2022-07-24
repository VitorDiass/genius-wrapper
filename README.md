# genius-wrapper
A js wrapper for [Genius](https://genius.com/) API

![Release](https://badgen.net/github/release/VitorDiass/genius-wrapper/stable)
---
### INSTALLATION

NPM
```
npm install genius-wrapper
```
YARN
```
yarn add genius-wrapper
```
---
### USAGE

Get your developer key [here](https://genius.com/developers)

Create a new object passing your developer key
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

getSongById - accepts a song ID and an optional text_format [see types and interface](#interfaces-and-types) (defaults to 'dom')

```js
const getSong = async() => {
  try{
    const song = await client.getSongById('378195', {text_format : ['html']});
  } catch(error){
    //handle errors here
  }
}
```



