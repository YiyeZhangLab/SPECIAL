const express = require('express')
const cors = require('cors')

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
    console.log('> Received input variables')
    const { input } = req.body
    console.log(input)

    /*
    Run model and predict
    */

    const result = {}
    res.send(result)
    console.log('Done')
})

app.listen(port, () => {
    console.log(`Prediction server listening on port ${port}...`)
})
