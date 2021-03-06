const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(3000, () => {
  console.log('Example server started on port 3000')
})
