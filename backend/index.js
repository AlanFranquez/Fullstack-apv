import express from 'express';
import conectarDB from './config/db.js';
import dotenv from 'dotenv'

const app = express();
dotenv.config();

console.log(process.env.MONGO_URI)
conectarDB();


app.use('/', (req, res) =>{
    res.send('prueba')
});

const PORT = process.env.PORT || 4000

// Colocando el puerto
app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`)
});