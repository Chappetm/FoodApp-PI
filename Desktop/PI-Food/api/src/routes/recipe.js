const { Router, request } = require('express');
const { Recipe, Diet } = require('../db');
const { Op } = require('sequelize');
const { API_KEY, URL_RECIPES } = process.env
const axios = require('axios');

const router = Router();


router.get('/', async (req, res) => {     //GET /recipes?name="..."
    // Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
    // Si no existe ninguna receta mostrar un mensaje adecuado
    const { name } = req.query;
    //-------------Version con query name--------------------------
    if(name){
        const respDb = await Recipe.findAll({    //Busca en el model 'Recipe'
            where: {
                name: {[Op.substring]: name}    //En la columna name debe estar el 'name'
            }, 
            include: [Diet]                      //Join con el model 'Diet'
        })
        
        const respApi = await axios.get(`${URL_RECIPES}${API_KEY}&query=${name}&addRecipeInformation=true`) //Buena en la api con el query 'name'

        const respTotal = respDb.concat(respApi.data.results);
        if(respTotal.length){
            res.status(200).send(respTotal);   //Devuelve los arreglos concatenados
        } else{
            res.status(400).send('No existe receta relacionada')
        }

    } else {
        const respApi = await axios.get(`${URL_RECIPES}${API_KEY}&addRecipeInformation=true`)
        res.status(200).send(respApi.data.results); //Si no pasan un 'name' por query, responde con las 10 primeras recetas
    }
    //----------------------------------------------------

})

router.get('/:id', async (req, res) => {  //GET /recipes/{idReceta}
    // Obtener el detalle de una receta en particular
    // Debe traer solo los datos pedidos en la ruta de detalle de receta
    // Incluir los tipos de dieta asociados
    const { id } = req.params;

})  

router.post('/', async (req, res) => {    //POST /recipe

})

module.exports = router;