const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        default: 5,
    },
    tags: [],
    ingredients: [],
    prepTime: Number,
    difficulty: String,
    price: {
        type: Number,
        required: true,
    },
    servings: Number,
    size: String,
    level: {
        type: String,
        default: "medium",
    },
});

const RecipeModel = mongoose.model("recipes", recipeSchema);

module.exports = RecipeModel;
