import Client from "./src/client";


const client = new Client();
client.setBearerToken("lQJp48VLcvV8Yoj7vHTg-Qb1gI6korwaP1i0EqwxgjDGyqFHj27aSkQhzJoeOCfh")
client.search('dua lipa').then((res : any) => console.log(res.response.hits));

export default Client;