require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/youtube',(req,res)=>{
    console.log("<h1>i'm youtube</h1>")
})
app.get('/login',(req,res)=>{
  console.log("shams Raza")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})