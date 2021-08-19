const { Router } = require('express');
const { Recipe, Diet } = require('../db');
const { Op } = require('sequelize');
const { API_KEY, URL_RECIPES, URL_ID } = process.env
const axios = require('axios');

const router = Router();

// router.get('/', async (req, res) => {     //GET /recipes?name="..."
//     // Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
//     // Si no existe ninguna receta mostrar un mensaje adecuado
//     const { name } = req.query;
//     //-------------Version con query name--------------------------
//     if(name){
//         const respDb = await Recipe.findAll({    //Busca en el model 'Recipe'
//             where: {
//                 title: {[Op.substring]: name}    //En la columna name debe estar el 'name'
//             }, 
//             include: {                      //Join con el model 'Diet'
//                 model: Diet,
//                 attributes: ['name'],
//                 through: {
//                     attributes: []
//                 }
//             }
//         }) 
        
//         const respApi = await axios.get(`${URL_RECIPES}${API_KEY}&query=${name}&addRecipeInformation=true&number=10`) //Busca en la api con el query 'name'
        
//         const respTotal = respDb.concat(respApi.data.results)

//         if(respTotal.length){
//             res.status(200).json(respTotal);   //Devuelve los arreglos concatenados
//         } else{
//             res.status(400).send('No existe receta relacionada')  //Devuelve error 
//         }

//     } else {
//         const respApi = await axios.get(`${URL_RECIPES}${API_KEY}&addRecipeInformation=true&number=50`)
//         const result = respApi.data.results
//         res.status(200).send(result); //Si no pasan un 'name' por query, responde con las 10 primeras recetas
//     }
//     //---------------------------------------------------

// })

router.get('/', async (req, res) => {     //GET /recipes/{idReceta}
    const {name} = req.query;

    const respApi = await axios.get(`${URL_RECIPES}${API_KEY}&addRecipeInformation=true&number=50`)
    const finalApi = respApi.data.results
    const respDb = await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    }) 

    const finalResponse = await respDb.concat(finalApi)

    if(name){
        const filterName = finalResponse.filter(el => el.title.toLowerCase().includes(name.toLowerCase()))

        filterName.length 
        ? res.status(200).send(filterName)
        : res.status(200).send('No se encontro receta')

    } else {
        res.status(200).send(finalResponse)
    }
})

router.get('/:id', async (req, res) => {  //GET /recipes/{idReceta}
    // Obtener el detalle de una receta en particular
    // Debe traer solo los datos pedidos en la ruta de detalle de receta
    // Incluir los tipos de dieta asociados
    const { id } = req.params;
    if(id.length < 10){
        const response = await axios.get(`${URL_ID}${id}/information?${API_KEY}`)
        const finalResponse = response.data;
        
        const idRecipe = {
            id: finalResponse.id,
            title: finalResponse.title,
            image: finalResponse.image,
            diets: finalResponse.diets,
            dishTypes: finalResponse.dishTypes,
            summary: finalResponse.summary,
            readyInMinutes: finalResponse.readyInMinutes,
            servings: finalResponse.servings,
            cuisines: finalResponse.cuisines,
            healthScore: finalResponse.healthScore,
            spoonacularScore: finalResponse.spoonacularScore,
            analyzedInstructions: (finalResponse.analyzedInstructions.length > 0) ? finalResponse.analyzedInstructions[0].steps.map(e => e.step) : "No steps"
            //Comprobamos si tiene instrucciones, si las tiene entramos al obj ([0]) y a la propiedad 'steps' para mapearla y conseguir todos los pasos ('step'). Si no las tiene se llena con 'no hay datos'
        }
        res.status(200).send(idRecipe)
    } else {
        const response = await Recipe.findAll({
            where: {
                id: id
            },
            include: {                      //Join con el model 'Diet'
                model: Diet,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        res.status(200).send(response)
    }

})  

router.post('/', async (req, res) => {    //POST /recipe
    const { title, summary, spoonacularScore, healthScore, analyzedInstructions, readyInMinutes, servings, cuisines, image, diets } = req.body;

    if(title && summary){   //Posiblemente se pueda reemplazar con TRY CATCH
        
        const newRecipe = await Recipe.create({
                title,
                summary,
                spoonacularScore,
                healthScore,
                analyzedInstructions,
                readyInMinutes,
                servings,
                cuisines,
                image
        })
        
        const dietsDB = await Diet.findAll({ //adddiets con arreglo de id
            where: {name: diets}
        })

        await newRecipe.addDiet(dietsDB); 

       
        res.status(200).send(newRecipe)
        
    } else { 
        res.status(404).send('Error') 
    }
})

module.exports = router;