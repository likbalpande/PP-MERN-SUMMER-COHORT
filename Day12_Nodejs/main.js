// thread pool --> extra threads or cores you want to utilize
// that will be made available to you using thread pool (except main thread)

// console.log("-->", req.url);
// if (req.url == "/") {
//     res.end("Home Page !");
// } else if (req.url == "/about") {
//     res.end("I am Likhilesh");
// } else if (req.url == "/recipes") {
//     res.end("There are several recipes");
// } else {
//     res.end("Oops! You landed at wrong destination...");
// }

const http = require("http");
const fsPromises = require("fs/promises");
const url = require("url");

const server = http.createServer(async (req, res) => {
    const recipesData = await fsPromises.readFile("./data.json", { encoding: "utf8" });
    const recipesObj = JSON.parse(recipesData);
    const recipesArray = recipesObj.recipes;

    const requestURL = url.parse(req.url, true);

    switch (requestURL.pathname) {
        case "/": {
            res.writeHead(200, { "Content-Type": "text/html" });
            const data = await fsPromises.readFile("./pages/homepage.html", { encoding: "utf8" });
            res.end(data);
            break;
        }
        case "/about": {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("I am Likhilesh");
            break;
        }
        case "/recipes": {
            res.writeHead(200, { "Content-Type": "text/html" });
            const data = await fsPromises.readFile("./pages/recipes.html", { encoding: "utf8" });

            let cardsStr = "";

            recipesArray.forEach((elem) => {
                cardsStr += `
                    <div class='recipe-card'>
                        <h3>${elem.name}</h3>
                        <img src="${elem.image}" width='150'>
                        <h4>${elem.cuisine}</h4>
                        <a href='/view'>Read More</a>
                    </div>
                `;
            });

            const result = data.replace("$card_container_here_$", cardsStr);

            res.end(result);
            break;
        }
        case "/view": {
            console.log(requestURL.query);
            res.end("hell0-1234");
            break;
        }
        default: {
            res.writeHead(501, { "Content-Type": "text/html" });
            res.end("Oops! You landed at wrong destination...");
            break;
        }
    }
});

server.listen(2500, () => {
    console.log("------------ Server started ------------");
});
