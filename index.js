
const express = require("express");
// pour utiliser notre fichier .env
require('dotenv').config();

const router = require('./app/router');
const app = express();





// le port est planqué dans le .env, on le récupère 
const port = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.static("public"));


// app.use a pour objectif de déclencher des middlewares 
// ici on en trouve 2 : 
// - 1 routeur qui contient la majorité de la réaction aux routes requêtées
// - 2 le middleware permettant de gérer les erreurs
// Le routeur va être parcouru par la requête de l'utilisateur, si une route correspond à la requête de l'user, le process ira jusqu'à un res.send ou un res.render qui concluera le process de cette requête
// En revanche, si aucune route n'a été concluante, ou qu'une erreur a déclenché un next, on va sortir du premier middleware(routeur) pour aller au suivant (next), ce qui va là aussi déclencher la page 404)

app.use(express.urlencoded({extended: true}));

app.use(router);



app.use((req, res, next) => {
    res.status(404).send("404 - NOT FOUND", 404);
})

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
})

