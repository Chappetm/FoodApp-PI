const { Router, request } = require('express');
const { Recipe, Diet } = require('../db');
const { Op } = require('sequelize');
const { API_KEY, URL_RECIPES, URL_ID } = process.env
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
            res.status(400).send('No existe receta relacionada')  //Devuelve error 
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
    if(id.length < 10){
        const response = await axios.get(`${URL_ID}${id}/information?${API_KEY}`)
        const finalResponse = response.data;
        console.log(response)
        
        const idRecipe = {
            id: finalResponse.id,
            title: finalResponse.title,
            image: finalResponse.image,
            diets: finalResponse.diets,
            dishTypes: finalResponse.dishTypes,
            summary: finalResponse.summary,
            healthScore: finalResponse.healthScore,
            spoonacularScore: finalResponse.spoonacularScore,
            analyzedInstructions: (finalResponse.analyzedInstructions.length > 0) ? finalResponse.analyzedInstructions[0].steps.map(e => e.step) : "No se encontraron datos"
            //Comprobamos si tiene instrucciones, si las tiene entramos al obj ([0]) y a la propiedad 'steps' para mapearla y conseguir todos los pasos ('step'). Si no las tiene se llena con 'no hay datos'
        }
        res.status(200).send(idRecipe)
    } else {
        const response = await Recipe.findAll({
            where: {
                id: id
            },
            include: Diet
        })

        res.status(200).send(response)
    }

})  

router.post('/', async (req, res) => {    //POST /recipe
    const { title, summary, spoonacularScore, healthScore, analyzedInstructions, diets } = req.body;

    if(title && summary){   //Posiblemente se pueda reemplazar con TRY CATCH
        const [newRecipe, success] = await Recipe.findOrCreate({
            where: {title},
            default: {
                title,
                summary,
                spoonacularScore,
                healthScore,
                analyzedInstructions,
                diets
            }
        })

        if(success){
            res.status(200).send(newRecipe)
        } else {
            res.status(400).send("Dieta existente")
        }
    } else { 
        res.status(404).send('Error') 
    }
})

module.exports = router;