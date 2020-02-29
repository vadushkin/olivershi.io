const express = require('express')
const path = require('path')
var cors = require('cors')
const spawn = require('child_process').spawn

spawn('python', ['sheets.py'])

const app = express()
app.use(cors())
const PORT = 3000

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname + '/docs/dev.html'))
})

app.use('/', express.static('docs'))

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname + '/docs/dev.html'))
})

console.log('*** \n\n\nRUNNING IN - ' + process.env.ENV + '\n\n\n***')
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))