require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

// CORS
//'http://localhost:5500'

app.use(cors({
    origin: "*", // permite acceso a cualquiera
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));



// RUTAS TIPO GET
const getTablas = require('./routes/get/obtenerTablas');
app.use(getTablas);

const getTareas = require('./routes/get/obtenerTareas');
app.use(getTareas);


// CONFIGURACIÓN DEL SERVIDOR
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Servidor: http://localhost:${PORT}`);
})
