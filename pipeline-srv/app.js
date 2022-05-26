const express = require('express')
const cors = require('cors')
const axios = require('axios')

const dataParser = require('./lib/data-parser')

const app = express()
const port = 3000

const {
    parseXML,
    parseRace,
} = dataParser

app.use(cors())
app.use(express.json())

app.post('/', async (req, res) => {
    const { Patient } = parseXML(req.body.Patient)
    console.log('> Received Patient Data Source')
    
    const race = parseRace(Patient)

    const isRaceWhite = (race === 'white')
    const isRaceAsian = (race === 'asian')
    
    const input = {
        isRaceWhite,
        isRaceAsian,
    }

    console.log('> Pushing input variables to prediction server')
    const prediction = await axios.post('http://localhost:3001/', {
        input
    })

    res.send(prediction)
})

app.listen(port, () => {
    console.log(`Pipeline server listening on port ${port}...`)
})
