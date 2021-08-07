const axios = require('axios').default;

(async () => {
    try {
        let { data } = await axios.get('https://twitter-video-download.com/tweet/1420380966535589891');
        
        //let dom = new JSDOM(data).window.document;
        //let json = dom.getElementById('__NEXT_DATA__').innerHTML

        let dom = /<script id="__NEXT_DATA__" type="application\/json">[^\{]*?(.*?)[^\}]*?<\/script>/g.exec(data)[1]
        json = JSON.parse(dom)
        if (json.props.pageProps == undefined) {
            let {data} = await axios.get('')
        }
        //json = (json.props.pageProps.data.json);
        video = json.video
        console.log(video.variants.slice(-1)[0]);
    } catch (error) {
        console.log(error);
    }
})()