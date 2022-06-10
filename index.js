// const http = require('http');
// const puerto= 8080;

// const server= http.createServer((request, response) =>{
//     response.end('Bienvenido a nuestro servidor http')
// })

// server.listen(puerto, ()=>{
//     console.log(`Servidor escuchando puerto: ${puerto}`)
// })

const express= require('express');
const app= express();

const puerto= 8080;

app.get('/', (req, res)=>{
    res.send('Hola soy home')
})

app.get('/user', (req, res)=>{ 
    res.send('Hola soy user')
})

app.get('/user/:id/:nombre', (req, res)=>{
    const{id, nombre} = req.params;
    console.log(req.params)
    res.send(`hola soy user: ${id} ${nombre}`)
})

app.listen(puerto, ()=>{
    console.log(`El servidor se inicio en el puerto: ${puerto}`)
})