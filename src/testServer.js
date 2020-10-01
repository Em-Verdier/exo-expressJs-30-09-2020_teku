import fs from 'fs/promises'
import axios from 'axios'

/*try {
    let response = await axios.get('http://localhost:7777/')

    let content = response.data
    await fs.writeFile('app.js', content)
    console.log(response.data)
} catch (e) {
    console.error(e)
}
*/
let data = await Promise.all([
    axios.get('http://localhost:7777/').then((dataHttp) => dataHttp.data),
    axios
        .get('http://localhost:7777/aboutme')
        .then((dataHttp) => dataHttp.data),
    axios
        .get('http://localhost:7777/aboutyou')
        .then((dataHttp) => dataHttp.data),
    axios.get('http://localhost:7777/vote').then((dataHttp) => dataHttp.data),
    axios
        .get('http://localhost:7777/vote/18')
        .then((dataHttp) => dataHttp.data),
    axios
        .get('http://localhost:7777/palindrome/tenet')
        .then((dataHttp) => dataHttp.data),
    axios
        .get('http://localhost:7777/oddtest/3')
        .then((dataHttp) => dataHttp.data),
]).catch((err) => {
    console.error(err)
})
console.log(data)
