const RecipeModel = require("../models/recipe.js");

const getAllRecipes = async (req, res) => {
    try {
        const recipes = await RecipeModel.find();
        res.json({
            status: "success",
            results: recipes.length,
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

const listRecipes = async (req, res) => {
    try {
        // query generation
        const {
            page,
            limit: limitValue = 4,
            sort: sortValue = "price",
            q = "",
            select = "name price",
            ...filters
        } = req.query;

        // applying filters / constraints
        let query = RecipeModel.find(filters);

        // search functionality
        const matchString = new RegExp(q, "i");
        query = query.where("name").regex(matchString);

        // sort items (we will get the query as "a_b_c" and convert it to "a b c")
        const sortParams = sortValue.split("_").join(" ");
        query = query.sort(sortParams);

        // count the number of total items that match the given format / filters / constraints
        const queryClone = query.clone();
        const totalItems = await queryClone.countDocuments();

        // ignoring the items on earlier page
        query = query.skip(limitValue * (page - 1));

        // limit the number of items
        query = query.limit(limitValue);

        // specify the required or not-required items
        const selectParams = select.split("_").join(" ");
        query = query.select(selectParams);

        const recipes = await query;

        res.json({
            status: "success",
            results: recipes.length,
            data: {
                recipes,
            },
            total: totalItems,
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
    listRecipes,
};
