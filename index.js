const ruuat = 'https://www.compass-group.fi/menuapi/feed/rss/current-week?costNumber=3060&language=fi' 
const express = require('express')
const app = express()
const cors = require('cors');


const { parse } = require('rss-to-json');

console.log("auki")

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  console.log("test")
  response.send('Oppari proju')
})


// ruokalista pitäisi saada rss


app.get('/menu', async (request, response) => {
  var rss = await parse(ruuat);
  console.log(rss)
  response.send(rss)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})




// async await
/* (async () => {

    var rss = await parse(ruuat);

    console.log(JSON.stringify(rss, null, 3));

    const app = http.createServer((request, response) => {
      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify(rss))
    })
    
    app.get('/', (req, res) => {
      res.send('<h1>Hello World!</h1>')
    })
    
    const PORT = 3001
    app.listen(PORT)
    console.log(`Server running on port ${PORT}`)
    
})(); */


