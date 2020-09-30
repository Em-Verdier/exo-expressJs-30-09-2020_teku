// import de express
import express from 'express'

const app = express()

const PORT = 7777

const IP_LOOPBACK = 'localhost'
const IP_LOCAL = '127.0.0.1'
/*app.get('/', (req, res) => {
    res.send('Exercices express partie 1')
})
*/
app.get('/', (req, res) => {
    res.send('Exercices express partie 1')
})

app.get('/add/aboutme', (req, res) => {
    res.send("A propos de moi: J'aime le shit et les gonzesses")
})

app.get('/add/aboutyou', (req, res) => {
    res.send("A propos de toi: J'te veux fraîche et bien gaulée!!!")
})

app.listen(PORT, () => {
    console.log(`Premier serveur express à l'adresse: http://localhost:${PORT}`)
})
