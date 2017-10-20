
var bluebird = require('bluebird');

function serveur() {
    let films;
    let categories;
    metier()
    .then((rows) => {
        films = rows;
        console.log(films);
        return metier();
    })
    .then((rows) => {
        categories = rows;
        console.log(categories);
        return metier();
    })
    .catch((err) => {
        console.log(err);
    })
}

function metier() {
    return persistance();
}

function persistance() {
    return new Promise((resolve, reject) => {
        // Requête SQL
        setTimeout(() => {
            let films = [];
            resolve(films);
            //reject("Impossible de se connecter à la BDD");
        }, 1000);
    });
}

serveur();