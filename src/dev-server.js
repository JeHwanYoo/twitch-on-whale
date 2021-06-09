const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.sendFile(path.resolve('src', 'twitch-embedded', 'index.html'))
})

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`)
})
