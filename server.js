const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! 2020.03.31 :)'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))