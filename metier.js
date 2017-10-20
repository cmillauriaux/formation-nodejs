
// Déclarer le module
function testModule() {
    console.log("module");
}

class Animal {
    constructor(nom) {
        this.nom = nom;
    }

    afficher() {
        testModule();
    }
}

module.exports = {
    Animal: new Animal("Tom")
}

// Appeler le module
let metier = require('./metier');

let jerry = new metier.Animal();

// npm install readline-sync

var readlineSync = require('readline-sync');

var userName = readlineSync.question('Quel est votre prénom ? ');
console.log('Hi ' + userName + '!');