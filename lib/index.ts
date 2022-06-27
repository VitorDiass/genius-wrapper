import Client from "./client";


const client = new Client();
client.setBearerToken("lQJp48VLcvV8Yoj7vHTg-Qb1gI6korwaP1i0EqwxgjDGyqFHj27aSkQhzJoeOCfh")
client.getSong("3039923").then((res) => console.log(res));

export default Client;

