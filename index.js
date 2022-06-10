const fs = require("fs");
const express = require("express");
const puerto= 3000;

const app = express();

class Contenedor {
    constructor(fileName) {
        this.fileName = fileName;
    }

    async getAll() {
        try {
            return fileToArray(this.fileName);
        } catch (error) {
            throw error;
        }
    }

    async getRandom() {
        let array = await productos.getAll();
        let randomProd = array[Math.floor(Math.random() * array.length)];
        return randomProd;
    }
}

let productos = new Contenedor("./products.txt");

app.get("/", async (req, res) => {
    res.send("<h1>Hola, estas en la home!</h1><p>selecciona las rutas /productos o /productoRandom para ver mas!</p>");
});

app.get("/productos", async (req, res) => {
    let array = await productos.getAll();
    res.send(array);
});

app.get("/productoRandom", async (req, res) => {
    let array = await productos.getAll();
    let randomProd = array[Math.floor(Math.random() * array.length)];
    res.send(randomProd);
});

app.listen(puerto, () => {
    console.log(`Escuchando en puerto ${puerto}`);
});

const fileToArray = async (fileName) => {
    try {
        return JSON.parse(await fs.promises.readFile(fileName));
    } catch (error) {
        console.log("Se produjo un error!");
        throw error;
    }
};

// const http = require('http');
// const puerto= 8080;

// const server= http.createServer((request, response) =>{
//     response.end('Bienvenido a nuestro servidor http')
// })

// server.listen(puerto, ()=>{
//     console.log(`Servidor escuchando puerto: ${puerto}`)
// })

// const express= require('express');
// const app= express();

// const puerto= 8080;

// app.get('/', (req, res)=>{
//     res.send('Hola soy home')
// })

// app.get('/user', (req, res)=>{ 
//     res.send('Hola soy user')
// })

// app.get('/user/:id/:nombre', (req, res)=>{
//     const{id, nombre} = req.params;
//     console.log(req.params)
//     res.send(`hola soy user: ${id} ${nombre}`)
// })

// app.listen(puerto, ()=>{
//     console.log(`El servidor se inicio en el puerto: ${puerto}`)
// })

