const axios = require('axios');
const { Router } = require('express');
const { Recipe, Diet } = require('../db');
const { API_KEY, URL_RECIPES, URL_ID } = process.env

const router = Router();

router.get('/', async (req, res) => {  // GET /types
    // Obtener todos los tipos de dieta posibles
    // En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular


    const response = await axios.get(`${URL_RECIPES}${API_KEY}&addRecipeInformation=true&number=50`)
    //https://api.spoonacular.com/recipes/complexSearch?apiKey=a6bb2dff483346a68449705a3725d34a&addRecipeInformation=true&number=100
    const dietas = response.data.results.map(recipe => {
        return recipe.diets
    })

    const dietasUnidas = dietas.flat();

    const dietasFiltradas = dietasUnidas.filter((d, index) => { 
        return dietasUnidas.indexOf(d) === index   //busca el primer indice de la dieta 'd' en el arreglo dietasUnidas y se fija que coincida con el index para devolverlo
    }) //[9 dietas, falta vegetarian]

    dietasFiltradas.push('vegetarian');  //vegetarian no lo trae la api

    dietasFiltradas.forEach(d => {
        Diet.create({
            name: d
        })
    })

    
    
    res.status(200).send('done');
})


module.exports = router;