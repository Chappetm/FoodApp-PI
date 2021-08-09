const axios = require('axios');
const { Router } = require('express');
const { Recipe, Diet } = require('../db');
const { API_KEY, URL_RECIPES } = process.env

const router = Router();

router.get('/', async (req, res) => {  // GET /diet
    // Obtener todos los tipos de dieta posibles
    // En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular
    
    const allDiets = await Diet.findAll()
    if(allDiets.length === 0){
        const response = await axios.get(`${URL_RECIPES}${API_KEY}&addRecipeInformation=true&number=50`)
        const dietas = response.data.results.map(recipe => {
            return recipe.diets
        })

        const dietasUnidas = dietas.flat();

        const dietasFiltradas = dietasUnidas.filter((d, index) => { 
            return dietasUnidas.indexOf(d) === index   //busca el primer indice de la dieta 'd' en el arreglo dietasUnidas y se fija que coincida con el index para devolverlo
        }) //[9 dietas, falta vegetarian]

        console.log('AAAAAAAAAAAAAAAAAAAA', dietasFiltradas)

        dietasFiltradas.push('vegetarian');  //vegetarian no lo trae la api

        await dietasFiltradas.forEach(d => {
            Diet.create({
                name: d
            })
        }) 
    }

    const allDietsMap = allDiets.map((e) => {
        return e.dataValues.name
    })
    res.status(200).send(allDietsMap);
})


module.exports = router;