const db = require('../../config/database');
const express = require('express');
const router = express.Router();

// MI RUTA GET
router.get('/tablas', async (req, res)=>{

    try {

        let [resultadoTablas] = await db.query('SHOW TABLES');
        res.json(resultadoTablas);


        
    } catch (error) {
        console.log("ERROR: ",error);
    }


});

module.exports = router;