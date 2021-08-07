const { default: axios } = require('axios');
const { JSDOM } = require('jsdom');

/*(async () => {
    try {
        const { data } = await axios.get('https://nickfinder.com/aesthetic')
        let dom = new JSDOM(data).window.document;
        let list = [...dom.getElementById('variants_main').querySelectorAll('div.one_variant')]
        list = list.map(v => v.querySelector('div.copy_variant').textContent.trimEnd())
        console.log(list);
    } catch (error) {
        console.log(error);
    }
})()*/

(async () => {
    try {
        const { data } = await axios.get('https://name-fake.com/id_ID', {
            data: encodeURIComponent("con[]=id_ID&perc=100&miny=19&maxy=19")
        })
        let dom = new JSDOM(data).window.document;
        let prop = [...dom.querySelectorAll('div.from_div_45g45gg')].filter(x => x.textContent !== null)
        let res = {}
        for (let i = 0; i < prop.length; i++) {
            let a = prop.map(x => x.textContent.replace(/\s+/g, '_').toLowerCase())
            let val = dom.getElementById('copy' + (i + 1)).textContent
            res[`${a[i]}`] = val
        }
        console.log(res);
    } catch (error) {
        console.log(error);
    }
})()