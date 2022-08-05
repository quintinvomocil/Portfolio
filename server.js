const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getInterview,
    createInterview, 
} = require('./controller')

app.get(`/api/interview`, getInterview)
app.post(`/api/interview`, createInterview)

app.listen(1337, () => console.log(`Server is up and running on 1337`))