const express = require('express')
const app=express()
const porta = process.env.PORT

app.get('/',(req,res)=>{
  res.send('Seja Bem Vindo')
})

app.get('/hosts',(req,res)=>{
  res.json({hosts:'ip 8.8.8.8'})

})


app.listen(porta || 3000,()=>{console.log('Servidor rodando')})
