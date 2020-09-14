const animals = [
    {
        "id":1,
        "word":"What animal is that?",
        "options":['Kuh','Hai','Hase'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/e/ec/Rabbit_clipart.svg',
        "rightAnswer":'Hase'
    },
    {
        "id":2,
        "word":"What animal is that?",
        "options":['Löwin','Affe','Zebra'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Meuble_h%C3%A9raldique_singe_assis.svg/543px-Meuble_h%C3%A9raldique_singe_assis.svg.png',
        "rightAnswer":'Affe'
    },
    {
        "id":3,
        "word":"What animal is that?",
        "options":['Tigerin','Wal','Pferd'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/6/65/Tiger_clipart.svg',
        "rightAnswer":'Tigerin'
    },
    {
        "id":4,
        "word":"What animal is that?",
        "options":['Hähnchen','Hund','Bär'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/5/57/Bear_of_California_%28Black%29.svg',
        "rightAnswer":'Bär'
    },
    {
        "id":5,
        "word":"What animal is that?",
        "options":['Katze','Ente','Känguru'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/a/a4/Duck_Sotka1.svg',
        "rightAnswer":'Ente'
    },
    {
        "id":6,
        "word":"What animal is that?",
        "options":['Ameise','Delfin','Käfer'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/d/d1/Dolphin_mark.svg',
        "rightAnswer":'Delfin'
    },
    {
        "id":7,
        "word":"What animal is that?",
        "options":['Krabbe','Fisch','Papagei'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/7/7c/Parrot_%28PSF%29.svg',
        "rightAnswer":'Papagei'
    },
    {
        "id":8,
        "word":"What animal is that?",
        "options":['Hamster','Elefant','Hirsch'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/5/5e/CoA_elephant.svg',
        "rightAnswer":'Elefant'
    },
    {
        "id":9,
        "word":"What animal is that?",
        "options":['Kamel','Panda','Giraph'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/6/67/Giraffe_%28PSF%29.svg',
        "rightAnswer":'Giraph'
    },
    {
        "id":10,
        "word":"What animal is that?",
        "options":['Pinguin','Schwein','Schildkröte'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/1/19/Sea_Turtle_%281043476%29_-_The_Noun_Project.svg',
        "rightAnswer":'Schildkröte'
    },

]
const colors = [
    {
        "id":1,
        "word":"color",
        "options":['Rot','Blau','Grün'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/f/ff/Solid_blue.svg',
        "rightAnswer":'Blau'
    },
    {
        "id":2,
        "word":"color",
        "options":['Grün','Blau','Rot'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/2/25/Red.svg',
        "rightAnswer":'Rot'
    },
    {
        "id":3,
        "word":"color",
        "options":['Lila','Gelb','Rosa'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/9/94/Auto_Racing_Yellow.svg',
        "rightAnswer":'Gelb'
    },
    {
        "id":4,
        "word":"color",
        "options":['Grau','Schwarz','Weiß'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg',
        "rightAnswer":'Schwarz'
    },
    {
        "id":5,
        "word":"color",
        "options":['Orange','Braun','Grün'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/2/29/Solid_green.svg',
        "rightAnswer":'Grün'
    },
    {
        "id":6,
        "word":"color",
        "options":['Lila','Orange','Weiß'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/d/d6/Solid_orange.svg',
        "rightAnswer":'Orange'
    },
    {
        "id":7,
        "word":"color",
        "options":['Rosa','Schwarz','Blau'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/6/6d/Solid_pink.svg',
        "rightAnswer":'Rosa'
    },
    {
        "id":8,
        "word":"color",
        "options":['Rot','Grau','Weiß'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg',
        "rightAnswer":'Weiß'
    },
    {
        "id":9,
        "word":"color",
        "options":['Lila','Schwarz','Orange'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/2/24/Solid_purple.svg',
        "rightAnswer":'Lila'
    },
    {
        "id":10,
        "word":"color",
        "options":['Türkis','Braun','Rosa'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Cosmic_turquoise.svg/400px-Cosmic_turquoise.svg.png',
        "rightAnswer":'Türkis'
    },

]
const clothes = [
    {
        "id":1,
        "word":"Clothes",
        "options":['Hemd','Hose','Gürtel'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/c/c6/T-shirt_%28White%29.svg',
        "rightAnswer":'Hemd'
    },
    {
        "id":2,
        "word":"Clothes",
        "options":['Hut','Hose','Rock'],
        "img":'https://images.vexels.com/media/users/3/178163/isolated/preview/7d1dbdf18d7dd2f73730864647342cdb-trousers-pants-stroke-by-vexels.png',
        "rightAnswer":'Hose'
    },
    {
        "id":3,
        "word":"Clothes",
        "options":['Hut','Rock','Gürtel'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/d/d1/Hat_%28example%29.svg',
        "rightAnswer":'Hut'
    },
    {
        "id":4,
        "word":"Clothes",
        "options":['Hemd','Gürtel','Kleid'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/6/62/Dress_icon.svg',
        "rightAnswer":'Kleid'
    },
    {
        "id":5,
        "word":"Clothes",
        "options":['Schuhe','Mantel','Socken'],
        "img":'https://cdn.onlinewebfonts.com/svg/img_471925.png',
        "rightAnswer":'Mantel'
    },
    {
        "id":6,
        "word":"Clothes",
        "options":['Schuhe','Gürtel','Kleid'],
        "img":'https://cdn.onlinewebfonts.com/svg/img_426097.png',
        "rightAnswer":'Schuhe'
    },
    {
        "id":7,
        "word":"Clothes",
        "options":['Rock','Gürtel','Hut'],
        "img":'https://cdn.onlinewebfonts.com/svg/img_471919.png',
        "rightAnswer":'Gürtel'
    },
    {
        "id":8,
        "word":"Clothes",
        "options":['Rock','Hose','Unterwäsche'],
        "img":'https://cdn.onlinewebfonts.com/svg/img_472080.png',
        "rightAnswer":'Unterwäsche'
    },
    {
        "id":9,
        "word":"Clothes",
        "options":['Rock','Mantel','Krawatte'],
        "img":'https://cdn.onlinewebfonts.com/svg/img_471880.png',
        "rightAnswer":'Krawatte'
    },
    {
        "id":10,
        "word":"Clothes",
        "options":['Jacke','Gürtel','Hut'],
        "img":'https://cdn.onlinewebfonts.com/svg/img_380556.png',
        "rightAnswer":'Jacke'
    },
]
const furnitures = [
    {
        "id":1,
        "word":"What furnitures is that?",
        "options":['Stuhl','Couch','Lampe'],
        "img":'https://svgsilh.com/svg/2027234.svg',
        "rightAnswer":'Couch'
    },
    {
        "id":2,
        "word":"What furnitures is that?",
        "options":['Stuhl','Wandschrank','Tabelle'],
        "img":'https://svgsilh.com/svg/157788.svg',
        "rightAnswer":'Stuhl'
    },
    {
        "id":3,
        "word":"What furnitures is that?",
        "options":['Bücherregal','Couch','Tabelle'],
        "img":'https://svgsilh.com/svg/1300555.svg',
        "rightAnswer":'Tabelle'
    },
    {
        "id":4,
        "word":"What furnitures is that?",
        "options":['Lampe','Vorhang','Bücherregal'],
        "img":'https://upload.wikimedia.org/wikipedia/commons/8/85/Lamp%C5%9Dirmilo_.svg',
        "rightAnswer":'Lampe'
    },
    {
        "id":5,
        "word":"What furnitures is that?",
        "options":['Kommode','Bücherregal','Bett'],
        "img":'https://svgsilh.com/svg/575818.svg',
        "rightAnswer":'Bücherregal'
    },
    {
        "id":6,
        "word":"What furnitures is that?",
        "options":['Vorhang','Stuhl','Wandschrank'],
        "img":'https://svgsilh.com/svg/764792.svg',
        "rightAnswer":'Wandschrank'
    },
    {
        "id":7,
        "word":"What furnitures is that?",
        "options":['Bett','Lampe','Tabelle'],
        "img":'https://svgsilh.com/svg/2691891.svg',
        "rightAnswer":'Bett'
    },
    {
        "id":8,
        "word":"What furnitures is that?",
        "options":['Vorhang','Teppich','Stuhl'],
        "img":'https://svgsilh.com/svg/155315.svg',
        "rightAnswer":'Teppich'
    },
    {
        "id":9,
        "word":"What furnitures is that?",
        "options":['Spiegel','Tabelle','Vorhang'],
        "img":'https://svgsilh.com/svg/42858.svg',
        "rightAnswer":'Vorhang'
    },
    {
        "id":10,
        "word":"What furnitures is that?",
        "options":['Lampe','Vorhang','Spiegel'],
        "img":'https://svgsilh.com/svg/308791.svg',
        "rightAnswer":'Spiegel'
    },

]

var catagory
var index = 0;
var score = document.getElementById("scorecounter")

function game(){

    catagory = document.getElementById("catagory")
    score = document.getElementById("scorecounter")
    var myAnswer = document.getElementsByClassName("myAnswer")
    var picture = document.getElementById("picture")
    switch (catagory.innerHTML) {
        case "Animals":
            catagory = animals
            break;
        case "Colors":
            catagory = colors
            break; 
        case "Clothes":
            catagory = clothes
            break;
        case "Furnitures":
            catagory = furnitures
            break;             
    }
    picture.src = catagory[index].img
    var i = 0;
    for (const answer of myAnswer) {
        answer.value = catagory[index].options[i];
        answer.innerHTML = catagory[index].options[i]
        i++
    }
}

function gameOver(){
    alert("Congratulation! You've finished the quiz! Your score is: " + score.innerHTML)
}

function rightAnswer()
{
    console.log(score.innerHTML)
    score.innerHTML = 1 + Number(score.innerHTML);
    alert("Right answer!")
    nextQustion()
}

function wrongAnswer() {

    console.log(score.innerHTML)
    score.innerHTML = Number(score.innerHTML) - 0.5;
    alert("Wrong answer! please try again")
}

function nextQustion(){
    console.log(index)
    console.log(catagory.length)
    index++
    if (index < catagory.length) {
        game();
    }
    else{
        gameOver();
    }
}
function previousQustion(){
    index--
    game();
}

function myAnswer(userAnswer){
    if (userAnswer == catagory[index].rightAnswer) {
        rightAnswer()
    }
    else{
        wrongAnswer()
    }
    
}
    