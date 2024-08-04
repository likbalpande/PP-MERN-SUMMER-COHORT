const express = require("express");
const {
    getAllRecipes,
    createRecipes,
    removeRecipe,
    replaceRecipe,
    validateRecipeId,
} = require("../controllers/recipeControllers");

const recipeRouter = express.Router();

recipeRouter.route("/").get(getAllRecipes).post(createRecipes);
recipeRouter.route("/:recipeId").delete(validateRecipeId, removeRecipe).put(validateRecipeId, replaceRecipe);

module.exports = recipeRouter;
