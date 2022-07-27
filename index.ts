import Client from "./src/client";


const client = new Client();
client.setBearerToken("lQJp48VLcvV8Yoj7vHTg-Qb1gI6korwaP1i0EqwxgjDGyqFHj27aSkQhzJoeOCfh")


const getArtist = async () => {

    try {
        //successful request
        const artistRequest = await client.getArtistById('16775', { text_format: ['html']});
        console.log(artistRequest);
    } catch (error) {
        //error on request
        console.log(error)
    }

}


export default Client;