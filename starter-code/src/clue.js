
// ITERATION 1

// CHARACTERS

const charactersArray = [];

var mrGreen = {
    first_name: 'Jacob',
    last_name: 'Green', 
    color: 'green', 
    description: 'He has a lot of connections', 
    age: 45, 
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', 
    occupation: 'Entrepreneur'
};

var drOrchid = {
    first_name: 'Doctor', 
    last_name: 'Orchid', 
    color: 'white', 
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', 
    age: 26, 
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', 
    occupation: 'Scientist'
};

var profPlum = {
    first_name: 'Victor', 
    last_name: 'Plum', 
    color: 'purple', 
    description: 'Billionaire video game designer', 
    age: 22, 
    image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg', 
    occupation: 'Designer'
};

var missScarlet = {
    first_name: 'Kasandra', 
    last_name: 'Scarlet', 
    color: 'red', 
    description: 'She is an A-list movie star with a dark past', 
    age: 31, 
    image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg', 
    occupation: 'Actor'
};

var mrsPeacock = {
    first_name: 'Eleanor', 
    last_name: 'Peacock', 
    color: 'blue', 
    description: 'She is from a wealthy family and uses her status and money to earn popularity', 
    age: 36, 
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', 
    occupation: 'Socialite'
};

var mrMustard = {
    first_name: 'Jack', 
    last_name: 'Mustard', 
    color: 'yellow', 
    description: 'He is a former football player who tries to get by on his former glory', 
    age: 62, 
    image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg', 
    occupation: 'Retired Football player'
};

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);

// console.log(charactersArray);

// WEAPONS

const weaponsArray = [];

var rope = {name: 'rope', weight: 10};
var knife = {name: 'knife', weight: 8};
var candlestick = {name: 'candlestick', weight: 2};
var dumbell = {name: 'dumbell', weight: 30};
var poison = {name: 'poison', weight: 2};
var axe = {name: 'axe', weight: 15};
var bat = {name: 'bat', weight: 13};
var trophy = {name: 'trophy', weight: 25};
var pistol = {name: 'pistol', weight: 20};

weaponsArray.push(rope, knife, candlestick, dumbell, poison, axe, bat, trophy, pistol);

// console.log(weaponsArray);

// ROOMS

const roomsArray = [];

var diningroom = {name: 'Dining Room'};
var conservatory = {name: 'Conservatory'};
var kitchen = {name: 'Kitchen'};
var study = {name: 'Study'};
var library = {name: 'Library'};
var billardroom = {name: 'Billiard Room'};
var lounge = {name: 'Lounge'};
var ballroom = {name: 'Ballroom'};
var hall = {name: 'Hall'};
var spa = {name: 'Spa'};
var livingroom = {name: 'Living Room'};
var observatory = {name: 'Observatory'};
var theater = {name: 'Theater'};
var guesthouse = {name: 'Guest House'};
var patio = {name: 'Patio'};

roomsArray.push(diningroom, conservatory, kitchen, study, library, billardroom, lounge, ballroom, hall, spa, livingroom, observatory, theater, guesthouse, patio);

// console.log(roomsArray);

// ITERATION 2

function randomSelector(someArray){
    var randomNumber = Math.floor(Math.random() * someArray.length); // I get a random name of the array I wish to pass to it 
    return(randomNumber);
}

randomSelector(roomsArray);

var mistery; // where Im going to store the 3 values the function gives me

function pickMistery(character, room, weapon){

var chosenCharacter = character[randomSelector(character)]; // I change the number to the value inside of that index
var chosenRoom = room[randomSelector(room)];
var chosenWeapon = weapon[randomSelector(weapon)];


mistery = [chosenCharacter, chosenRoom, chosenWeapon]; // now the variable has the values
return mistery;
}

pickMistery(charactersArray, roomsArray, weaponsArray);

// ITERATION 3

function revealMistery(mistery){
    console.log(`${mistery[0].first_name} ${mistery[0].last_name} killed Mr.Boddy using the ${mistery[2].name} in the ${mistery[1].name}!!!!`);

}

revealMistery(mistery);
