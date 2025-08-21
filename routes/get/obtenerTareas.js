const db = require('../../config/database');
const express = require('express');
const router = express.Router();

router.get('/tareas', async(req, res)=> {

    try {
        //traer solo el primer elemento
        let [todasLasTareas] = await db.query(`
            SELECT 
                id,
                nombre,
                descripcion,
                estado_tarea,
                DATE_FORMAT(fecha_asignada, '%Y-%m-%d') AS fecha_asignada,
                DATE_FORMAT(fecha_entrega, '%Y-%m-%d') AS fecha_entrega,
                estado_artivado,
                usuario_id
            FROM tareas`);
        res.json(todasLasTareas);


    } catch (error) {
        console.error("ERROR: ", error);
    }

});

module.exports = router;