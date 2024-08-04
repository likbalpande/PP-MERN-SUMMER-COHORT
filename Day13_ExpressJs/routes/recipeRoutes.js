const express = require("express");
const { getAllRecipes, createRecipes, removeRecipe, replaceRecipe } = require("../controllers/recipeControllers");

const recipeRouter = express.Router();

recipeRouter.route("/").get(getAllRecipes).post(createRecipes);
recipeRouter.route("/:recipeId").delete(removeRecipe).put(replaceRecipe);

module.exports = recipeRouter;
