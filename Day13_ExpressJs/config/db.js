const mongoose = require("mongoose");

const dbURL =
    "mongodb+srv://<username>:<password>@cluster0.tn2fkag.mongodb.net/<dbName>?retryWrites=true&w=majority&appName=Cluster0";

let newDbURL = dbURL.replace("<username>", process.env.DB_USER);
newDbURL = newDbURL.replace("<password>", process.env.DB_PASSWORD);
newDbURL = newDbURL.replace("<dbName>", process.env.DB_NAME);

mongoose
    .connect(newDbURL)
    .then(() => {
        console.log("----------- DB connected -------------");
    })
    .catch((err) => {
        console.log("- - - - - - - - - - - - - - - - - - - - -");
        console.log(err);
        console.log("- - - - - - - - - - - - - - - - - - - - -");
    });
