//Player Names
// var playerOne = "";
// var playerTwo = "";

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyClpJkeSCe7UYNtBpJ9jfwpngPuo4GmoIU",
    authDomain: "the-rock-v-paper-v-scissors.firebaseapp.com",
    databaseURL: "https://the-rock-v-paper-v-scissors.firebaseio.com",
    projectId: "the-rock-v-paper-v-scissors",
    storageBucket: "the-rock-v-paper-v-scissors.appspot.com",
    messagingSenderId: "297901841631"
  };
  firebase.initializeApp(config);

//checks for character selection
var oneSelected = false;
var twoSelected = false;

//Check to prevent selecting both player slots
var iHavePicked = false;

//Player I am THIS WILL REMAIN LOCAL!!!!!
var iAmPlayerOne = false;
var iAmPlayerTwo = false;

//Initial result values This will remain local and unchanged unless otherwise stated
var wins = 0;
var ties = 0;
var loss = 0;

//Player Ones results
var oneWins = 0;
var oneTies = 0;
var oneLoss = 0;

//Player Twos results
var twoWins = 0;
var twoTies = 0;
var twoLoss = 0;

//Players picks
var onesPick = "";
var twosPick = "";

//Function for names
// function nameMe(){
// 	//Data call to update 
// 	if (oneSelected === false) {
// 		playerOne = prompt("What do you want your username to be?");
// 		oneSelected === true;

// 		//Push to firebase

// 		//Call firebase to clone Username 1

// 	} else { 

// 		if (twoSelected === false) {
// 			playerTwo = prompt("");
// 			twoSelected === true;
// 		}
// 	}  
// 	 if ((oneSelected === true) && (twoSelected === true)) {
// 	 	alert("Sorry you are two late! The blood-bath has begun!")
// 	 }
// }


function doBattle(){
	if (onesPick === twosPick) {
		oneTies ++;
		twoTies ++;
	}else{
		if ((onesPick === "The Rock") && (twosPick === "The Scissors")) {
			oneWins ++;
			twoLoss ++;
		}
		if ((onesPick === "The Paper") && (twosPick === "The Rock")) {
			oneWins ++;
			twoLoss ++;
		}
		if ((onesPick === "The Scissors") && (twosPick === "The Paper")) {
			oneWins ++;
			twoLoss ++;
		} else {
			oneLoss ++;
			twoWins ++;
		}
	}
}

function initialscores(){
		$('#win-counter').text("Wins = " + wins)
		$('#tie-counter').text("Wins = " + ties)
		$('#loss-counter').text("Wins = " + loss)
}
initialscores();


function scapicks(){

}

function countItUP(){
	if (iAmPlayerOne === true) {
		$('#win-counter').text("Wins = " + oneWins)
		$('#tie-counter').text("Wins = " + oneTies)
		$('loss-counter').text("Wins = " + oneLoss)
	}else{
		if (iAmPlayerTwo === true) {}
		$('#win-counter').text("Wins = " + twoWins)
		$('#tie-counter').text("Wins = " + twoTies)
		$('loss-counter').text("Wins = " + twoLoss)
	}
}

$('#player-one').on("click", function(){
	if ((oneSelected === false) && (iAmPlayerTwo !== true)) {
		iAmPlayerOne = true;
		oneSelected = true;
		//nameMe();
		countItUP();
		
		console.log("I am one" + iAmPlayerOne);
		console.log("I am not two" + iAmPlayerTwo);
		console.log("Give me a sign!");
	}
});
$('#player-two').on("click", function(){
	if ((twoSelected === false) && (iAmPlayerOne !== true)) {
		iAmPlayerTwo = true;
		twoSelected = true;
		//nameMe();
		countItUP();	
		console.log("I am two" + iAmPlayerTwo);
		console.log("I am not one" + iAmPlayerOne);
		console.log("Give me a sign!");
	}
});




