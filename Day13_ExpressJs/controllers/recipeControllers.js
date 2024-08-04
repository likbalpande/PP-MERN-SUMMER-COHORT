const fsPromises = require("fs/promises");

const getAllRecipes = async (req, res) => {
    try {
        const data = await fsPromises.readFile("./data.json", { encoding: "utf8" });
        const arr = JSON.parse(data);
        res.json({
            status: "success",
            data: {
                recipes: arr,
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

        const oldRecipes = await fsPromises.readFile("./data.json", { encoding: "utf8" });
        const oldRecipesArr = JSON.parse(oldRecipes);
        const lastItemIndex = oldRecipesArr.length - 1;
        if (lastItemIndex != -1) {
            const lastItem = oldRecipesArr[lastItemIndex];
            const lastItemId = lastItem.id;
            data.id = lastItemId + 1;
        } else {
            data.id = 1;
        }

        oldRecipesArr.push(data);

        await fsPromises.writeFile("./data.json", JSON.stringify(oldRecipesArr));
        res.status(201);
        res.json({
            status: "success",
            data: {
                recipe: data,
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

const removeRecipe = async (req, res) => {
    try {
        const { recipeId } = req.params;
        const oldRecipes = await fsPromises.readFile("./data.json", { encoding: "utf8" });
        const oldRecipesArr = JSON.parse(oldRecipes);
        const foundRecipeIndex = oldRecipesArr.findIndex((elem) => elem.id == recipeId);
        if (foundRecipeIndex === -1) {
            res.status(400);
            res.json({
                status: "fail",
                message: "Invalid RecipeId",
            });
            return;
        }
        oldRecipesArr.splice(foundRecipeIndex, 1);
        await fsPromises.writeFile("./data.json", JSON.stringify(oldRecipesArr));
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

        const oldRecipes = await fsPromises.readFile("./data.json", { encoding: "utf8" });
        const oldRecipesArr = JSON.parse(oldRecipes);
        const foundRecipeIndex = oldRecipesArr.findIndex((elem) => elem.id == recipeId);
        if (foundRecipeIndex === -1) {
            res.status(400);
            res.json({
                status: "fail",
                message: "Invalid RecipeId",
            });
            return;
        }
        data.id = recipeId;
        oldRecipesArr[foundRecipeIndex] = data;

        await fsPromises.writeFile("./data.json", JSON.stringify(oldRecipesArr));
        res.status(200);
        res.json({
            status: "success",
            message: "Recipe replaced",
            data: {
                recipe: data,
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
};
