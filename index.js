require('dotenv').config()
const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello------!')
})
app.get('/youtube',(req,res)=>{
    console.log("<h1>i'm youtube</h1>")
})
app.get('/login',(req,res)=>{
  res.send("shams Raza")
})

app.get('/code',(req,res)=>{
    res.send("<h1>codeMS</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})