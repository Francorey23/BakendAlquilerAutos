const express = require('express')

const app = express()
require('dotenv').config()

const alquilerR = require('./routes/alquilerroutes')
const autosR = require('./routes/autosroutes')
const clientesR = require('./routes/clienteroutes')

const PORT = process.env.PORT

app.use(express.json())

app.use('/api',alquilerR)
app.use('/api',autosR)
app.use('/api',clientesR)

app.listen(PORT ,() => {
    console.log("servidor corriendo",PORT)
})