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
    axios.get('http://localhost:7777/').then(() => 'Home'),
    axios.get('http://localhost:7777/aboutme').then(() => 'Aboutme'),
    axios.get('http://localhost:7777/aboutyou').then(() => 'Aboutyou'),
    axios.get('http://localhost:7777/vote').then(() => 'VoteCheckRules'),
    axios.get('http://localhost:7777/vote/:age').then(() => 'VoteEnterAge'),
    axios
        .get('http://localhost:7777/palindrome/:word')
        .then(() => 'IsPalindrome'),
    axios.get('http://localhost:7777/oddtest/:num').then(() => 'oddTest'),
]).catch((err) => {
    console.error(err)
})
console.log(data)
