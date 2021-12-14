const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
})

// get data from database
app.get('/hanghoa', (req, res) => {
    db.query('select * from hanghoa', (err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.listen(process.env.PORT, () => console.log('Server listening on port ' + process.env.PORT))