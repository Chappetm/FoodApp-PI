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
    //Version con query name
    if(name){
        const respDb = await Recipe.findAll({
            where: {
                title: {[Op.substring]: name}
            }, 
            include: [Diet]
        })
        
        const respApi = await axios.get(`${URL_RECIPES}${API_KEY}&query=${name}&addRecipeInformation=true`)
    }

})

router.get('/:id', async (req, res) => {  //GET /recipes/{idReceta}
    const { id } = req.params;

})  

router.post('/', async (req, res) => {    //POST /recipe

})

module.exports = router;