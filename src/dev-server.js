const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, 'twitch-embedded')))

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`)
})
