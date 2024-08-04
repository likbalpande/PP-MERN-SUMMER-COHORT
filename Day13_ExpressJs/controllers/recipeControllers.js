const RecipeModel = require("../models/recipe.js");

const getAllRecipes = async (req, res) => {
    try {
        const recipes = await RecipeModel.find();
        res.json({
            status: "success",
            data: {
                recipes,
            },
        });
    } catch (err) {
        console.log("----------------------");
        console.log(err);
        console.log("----------------------");
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
        });
    }
};

const createRecipes = async (req, res) => {
    try {
        const data = req.body;
        let newRecipe;
        try {
            newRecipe = await RecipeModel.create(data);
        } catch (err) {
            res.status(400);
            res.json({
                status: "fail",
                message: err._message,
            });
            return;
        }

        res.status(201);
        res.json({
            status: "success",
            data: {
                recipe: newRecipe,
            },
        });
    } catch (err) {
        console.log("----------------------");
        console.log(err);
        console.log("----------------------");
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
        });
    }
};

const validateRecipeId = async (req, res, next) => {
    try {
        const { recipeId } = req.params;

        const isRecipePreset = await RecipeModel.findOne({ _id: recipeId });

        if (!isRecipePreset) {
            res.status(400);
            res.json({
                status: "fail",
                message: "Invalid Recipe Id",
            });
            return;
        }

        next();
    } catch (err) {
        console.log("----------------------");
        console.log(err);
        console.log("----------------------");
        res.status(400);
        res.json({
            status: "fail",
            message: "Recipe Id is not of type Object Id",
        });
    }
};

const removeRecipe = async (req, res) => {
    try {
        const { recipeId } = req.params;

        await RecipeModel.deleteOne({ _id: recipeId });

        res.status(204);
        res.json({
            status: "success",
            message: "Recipe Deleted",
        });
    } catch (err) {
        console.log("----------------------");
        console.log(err);
        console.log("----------------------");
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
        });
    }
};

const replaceRecipe = async (req, res) => {
    try {
        const data = req.body;
        const { recipeId } = req.params;

        const replacedRecipe = await RecipeModel.findOneAndReplace({ _id: recipeId }, data, {
            returnDocument: "after",
        });

        res.status(200);
        res.json({
            status: "success",
            message: "Recipe replaced",
            data: {
                recipe: replacedRecipe,
            },
        });
    } catch (err) {
        console.log("----------------------");
        console.log(err);
        console.log("----------------------");
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
        });
    }
};

module.exports = {
    getAllRecipes,
    createRecipes,
    removeRecipe,
    replaceRecipe,
    validateRecipeId,
};
