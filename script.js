// Définir un tableau d'objets avec des images et des prix associés
let items = [
    {
        image: "Image/arcade.webp",
        price: 539
    },
    {
        image: "Image/pelluche.jpeg",
        price: 22.69
    },
    {
        image: "Image/pc gamer.webp",
        price: 769
    },
    {
        image: "Image/cuisine.jpeg",
        price: 1.60
    },
    {
        image: "Image/batterie.jpeg",
        price: 208
    },
    {
        image: "Image/telecommande.jpeg",
        price: 12.79
    },
    {
        image: "Image/huile.webp",
        price: 41.90
    },
    {
        image: "Image/lego.webp",
        price: 40.49
    },
    {
        image: "Image/chips.webp",
        price: 1.15
    },
    {
        image: "Image/jouet pour chien.jpeg",
        price: 6.89
    },
    {
        image: "Image/brosse a dents.webp",
        price: 5.55
    },
    {
        image: "Image/skoda.webp",
        price: 37900
    },
    {
        image: "Image/moto.webp",
        price: 50000
    },
    {
        image: "Image/nokia.jpeg",
        price: 79.90
    },
    {
        image: "Image/canape.webp",
        price: 269.99
    },
];


// Définir une variable pour stocker le timer
var timer;


// Définir la durée du timer en millisecondes
let timeLimit = 60000;

// Sélectionner aléatoirement un objet
let randomItem = items[Math.floor(Math.random() * items.length)];

// Récupération des éléments de la page
let itemImg = document.getElementById("item-img");
let guess = document.getElementById("guess");
let submit = document.getElementById("submit");
let result = document.getElementById("result");
let playAgain = document.getElementById("playAgain");
let timeLeft = document.getElementById("time-left");

// Mettre à jour l'image de l'objet
itemImg.src = randomItem.image;



// Récupération des éléments de la page
let rulesButton = document.getElementById("rules-button");
let rulesDialog = document.getElementById("rules-dialog");

// Ajout d'un écouteur d'événement pour afficher la boîte de dialogue lorsque le bouton est cliqué
rulesButton.addEventListener("click", function() {
    rulesDialog.style.display = "block";
});



let closeButton = document.getElementById("close-button");

// Ajout d'un écouteur d'événement pour masquer la boîte de dialogue lorsque le bouton "Fermer" est cliqué
closeButton.addEventListener("click", function() {
    rulesDialog.style.display = "none";
});


// Démarrer le timer
startTimer();

function startTimer() {
    let timeRemaining = timeLimit / 1000;
    timeLeft.innerHTML = timeRemaining;
    timer = setInterval(function() {
        timeRemaining--;
        timeLeft.innerHTML = timeRemaining;
        if (timeRemaining == 0) {
            endGame();
        }
    }, 1000);
}


//Ajouter un écouteur d'événement pour soumettre le prix deviné
let form = document.getElementById("guess-form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    checkGuess();
});


//Ajouter un écouteur d'événement pour soumettre le prix deviné
submit.addEventListener("click", checkGuess);

//Ajouter un écouteur d'événement pour rejouer
playAgain.addEventListener("click", function(){
    location.reload();
});

//Vérifier le prix deviné
function checkGuess() {
    if (guess.value == randomItem.price) {
        result.innerHTML = "Félicitations, vous avez deviné le juste prix!";
        playAgain.style.display = "block";
        clearInterval(timer);
    } else if (guess.value > randomItem.price) {
        result.innerHTML = "Désolé, votre prix est trop élevé. Réessayez!";
    } else if (guess.value < randomItem.price) {
        result.innerHTML = "Désolé, votre prix est trop bas. Réessayez!";
    }
}

function endGame() {
    clearTimeout(timer);
    submit.disabled = true;
    result.innerHTML = "Désolé, vous avez épuisé le temps! Le prix correct était " + randomItem.price;
    playAgain.style.display = "block";
}
