/**
 * Author : Gimenz
 * Created Date : 21/07/2021
 * Description : Learn scraping website using method POST \w axios
 */

const { default: axios } = require('axios');

async function fbDown(url) {
    try {
        const getToken = await axios.get('https://saveas.co/');
        let token = /id="token" value="(.*?)">/g.exec(getToken.data)[1];
        const post = await axios('https://saveas.co/system/action.php', {
            method: 'POST',
            data: 'url=' + encodeURIComponent(url) + 'token=' + token
        });
        return {
            status: true,
            result: post.data
        }
    } catch (error) {
        console.log(error);
        return {
            status: false,
            result: 'Video private / terjadi error'
        }
    }
}

fbDown('https://web.facebook.com/wood57/videos/865579154174112/')
    .then(data => console.log(data))
    .catch(e => console.log(e))