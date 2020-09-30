// import de express
import express from 'express'

const app = express()

const PORT = 7777

const IP_LOOPBACK = 'localhost'
const IP_LOCAL = '127.0.0.1'

app.get('/', (req, res) => {
    res.send(
        `<h1 style="text-align:center; background-color:powderblue; 
        color:yellow;">Exercices express partie 1</h1>`
    )
})

app.get('/aboutme', (req, res) => {
    res.send("A propos de moi: J'aime le shit et les gonzesses")
})

app.get('/aboutyou', (req, res) => {
    let uA = req.headers['user-agent']
    res.send(`Ton ip est ${req.ip} et voici ton navigateur \n${uA}`)
})

app.get('/vote', (req, res) => {
    res.send(
        'Enter un âge valide après /vote/(num) pour savoir si vous pouvez voter!!'
    )
})

app.get('/vote/:age', (req, res) => {
    let age = req.params.age

    if (isNaN(age) || age > 120 || age < 0) {
        res.send('Usage : entrez une valeur numérique correcte entre 0 et 120')
    } else if (age < 18) {
        res.send('Navré vote impossible!')
    } else res.send('Vous pouvez voter ')
})

app.get('/palindrome/:word', (req, res) => {
    let word = req.params.word

    const isPalindrome = (str) => {
        str = str.toLowerCase()
        return str.split('').reverse().join('').toLowerCase() == str
    }
    res.send(`${isPalindrome(word)}`)
})

app.get('/oddtest/:num', (req, res) => {
    let num = req.params.num

    const isOdd = (number) => {
        return number % 2 === 1
    }

    res.send(`${isOdd(num)}`)
})

app.listen(PORT, () => {
    console.log(`Premier serveur express à l'adresse: http://localhost:${PORT}`)
})
