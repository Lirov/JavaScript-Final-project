const animals = [
    {
        "id":1,
        "word":"Which animal is that?",
        "options":['Kuh','Hai','Hase'],
        "img":'https://dev.petlandflorida.com/wp-content/uploads/2016/08/little-red-bunny-1372114-639x481.jpg',
        "rightAnswer":'Hase'
    },
    {
        "id":2,
        "word":"Which animal is that?",
        "options":['Löwin','Affe','Zebra'],
        "img":'https://www.onyxtruth.com/wp-content/uploads/2018/01/HM-monkey-onyx-truth-620x400.jpg',
        "rightAnswer":'Affe'
    },
    {
        "id":3,
        "word":"Which animal is that?",
        "options":['Tigerin','Wal','Pferd'],
        "img":'https://scx1.b-cdn.net/csz/news/800/2019/tiger.jpg',
        "rightAnswer":'Tigerin'
    },
    {
        "id":4,
        "word":"Which animal is that?",
        "options":['Hähnchen','Hund','Bär'],
        "img":'https://ichef.bbci.co.uk/news/976/cpsprodpb/9F73/production/_113091804_bear.jpg',
        "rightAnswer":'Bär'
    },
    {
        "id":5,
        "word":"Which animal is that?",
        "options":['Katze','Ente','Känguru'],
        "img":'https://www.thespruce.com/thmb/MugBBmymvyMPbcO7UGTjDH_NreA=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1146102607-b3491a355af94171aa8ac7b0aeec0616.jpg',
        "rightAnswer":'Ente'
    },
    {
        "id":6,
        "word":"Which animal is that?",
        "options":['Ameise','Delfin','Käfer'],
        "img":'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFbMGqMqV1iveYjYhGBCR3REJzkd_6Zy9YWA&usqp=CAU',
        "rightAnswer":'Delfin'
    },
    {
        "id":7,
        "word":"Which animal is that?",
        "options":['Krabbe','Fisch','Papagei'],
        "img":'http://t2.gstatic.com/images?q=tbn:ANd9GcSV42CFRdbHufkCZWzEfduj8DpslL2C4-LV9RvYOcpR8Y3sm9tl6TJli6K7XL5I-k8bZg5h41sZriRX06nJ8_U',
        "rightAnswer":'Papagei'
    },
    {
        "id":8,
        "word":"Which animal is that?",
        "options":['Hamster','Elefant','Hirsch'],
        "img":'https://c402277.ssl.cf1.rackcdn.com/photos/14206/images/hero_small/WW187785.jpg?1576774644',
        "rightAnswer":'Elefant'
    },
    {
        "id":9,
        "word":"Which animal is that?",
        "options":['Kamel','Panda','Giraph'],
        "img":'https://i.pinimg.com/originals/6b/0d/d1/6b0dd1787cdcc6441e671a6ae88d7ae9.jpg',
        "rightAnswer":'Giraph'
    },
    {
        "id":10,
        "word":"Which animal is that?",
        "options":['Pinguin','Schwein','Schildkröte'],
        "img":'https://pngriver.com/wp-content/uploads/2018/03/Download-Box-Turtle-PNG-File-For-Designing-Purpose-1000x642.png',
        "rightAnswer":'Schildkröte'
    },

]
const colors = [
    {
        "id":1,
        "word":"color",
        "options":['Rot','Blau','Grün'],
        "img":'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaKDSdIatRivdDrsTmXw0KjzQ167Yegx-jVg&usqp=CAU',
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
    }
    picture.src = catagory[index].img
    var i = 0;
    for (const answer of myAnswer) {
        answer.value = catagory[index].options[i];
        answer.innerHTML = catagory[index].options[i]
        i++
    }
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
    index++
    game();
}
function previousQustion(){
    index--
    game();
}

function myAnswer(userAnswer){
    console.log(catagory);
    if (userAnswer == catagory[index].rightAnswer) {
        rightAnswer()
    }
    else{
        wrongAnswer()
    }
    
}
    