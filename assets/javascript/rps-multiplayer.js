//Player Names
var playerOne = "";
var playerTwo = "";

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
  var dataRef = firebase.database();
  var pushDone = true;

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

//vars to lock choice buttons after use
var oneHasPicked = false;
var twoHasPicked = false;


//Setting base firebase settings
function intitailFirbasePush(){
dataRef.ref().set({
	playerOneName: playerOne,
	playerOneTaken: oneSelected,
	onePicked: onesPick,
	oneHasSelected: oneHasPicked,
	playerTwoName: playerTwo,
	playerTwoTaken: twoSelected,
	twoPicked: twosPick,
	twoHasSelected: twoHasPicked,
	dateAdded: firebase.database.ServerValue.TIMESTAMP
	})
};
//This will assign placements to people based on load order.
function initialLoading(){
	//Will check for if a push happens
	if (dataRef().) {}
	//If there is no player default to being player one
	if (oneSelected === false) {
		if ((oneSelected === false) && (iAmPlayerTwo !== true)) {
		iAmPlayerOne = true;
		oneSelected = true;
		intitailFirbasePush();
		dataRef.ref().update({
			playerOneTaken: oneSelected
		})
		$("#player-one-name").text("Player One has been selected. Please pick Player Two.");
		nameMe();
		countItUP();
		
		console.log("I am one " + iAmPlayerOne);
		console.log("I am two, " + iAmPlayerTwo);
		console.log("Give me a sign!");


		$("#player-one-name").text(playerOne);
		console.log(playerOne);
		oneReadyToFight();
	}
}


//Function for names
function nameMe(){
	//Data call to update 
	if (oneSelected === true) {
		playerOne = prompt("What do you want your username to be?");
		
		

		//Push to firebase

		//Call firebase to clone Username 1

	} else { 
		if (twoSelected === true) {
			playerTwo = prompt("");	
		}
	}  
	 if ((oneSelected === true) && (twoSelected === true)) {
	 	alert("Sorry you are two late! The blood-bath has begun!")
	 }
}


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


function oneReadyToFight(){
	dataRef.ref().push({
		playerOneName: playerOne,
		playerOneTaken: oneSelected,
		onePicked: onesPick

	});
}
function twoReadyToFight(){
	dataRef.ref().push({
		playerTwoName: playerTwo,
		playerTwoTaken: twoSelected,
		twoPicked: twosPick
	});
};


function countItUP(){
	if (iAmPlayerOne === true) {
		$('#win-counter').text("Wins = " + oneWins)
		$('#tie-counter').text("Wins = " + oneTies)
		$('#loss-counter').text("Wins = " + oneLoss)
		} else {
			if (iAmPlayerTwo === true) {
			$('#win-counter').text("Wins = " + twoWins)
			$('#tie-counter').text("Wins = " + twoTies)
			$('#loss-counter').text("Wins = " + twoLoss)
		}
	}
}

//If a player wishes to be player one
$('#player-one').on("click", function(){
	if ((oneSelected === false) && (iAmPlayerTwo !== true)) {
		iAmPlayerOne = true;
		oneSelected = true;
		dataRef.ref().push({
			playerOneTaken: oneSelected
		})
		$("#player-one-name").text("Player One has been selected. Please pick Player Two.");
		nameMe();
		countItUP();
		
		console.log("I am one " + iAmPlayerOne);
		console.log("I am two, " + iAmPlayerTwo);
		console.log("Give me a sign!");


		$("#player-one-name").text(playerOne);
		console.log(playerOne);
		oneReadyToFight();
	}
});
//If a player wishes to be player two
$('#player-two').on("click", function(){
	if ((twoSelected === false) && (iAmPlayerOne !== true)) {
		iAmPlayerTwo = true;
		twoSelected = true;
		nameMe();
		countItUP();	
		console.log("I am two " + iAmPlayerTwo);
		console.log("I am one, " + iAmPlayerOne);
		console.log("Give me a sign!");

		$("#player-two-name").text(playerTwo);
		console.log(playerTwo)
	}
});

//Picking Rock?
$('#rock').on("click", function(){
	if (iHavePicked === false) {
		if ((iAmPlayerOne === true) && (oneHasPicked !== true)) {
			onesPick = "The Rock";
			oneHasPicked = true;
			iHavePicked = true;
		} else { 
			if ((iAmPlayerTwo === true) && (twoHasPicked !== true)) {
				twosPick = "The Rock"
				twoHasPicked = true;
				iHavePicked = true;
			}
			
		}
	}	
});
//Picking Paper
$('#paper').on("click", function(){
	if (iHavePicked === false) {
		if ((iAmPlayerOne === true) && (oneHasPicked !== true)) {
			onesPick = "The Paper";
			oneHasPicked = true;
			iHavePicked = true;
		} else { 
			if ((iAmPlayerTwo === true) && (twoHasPicked !== true)) {
				twosPick = "The Paper";
				twoHasPicked = true;
				iHavePicked = true;
			}
			
		}
	}
});
//Picking Scissors
$('#scissors').on("click", function(){
	if ((iAmPlayerOne === true) && (oneHasPicked !== true)) {
		if (iHavePicked === false) {
			onesPick = "The Scissors";
			oneHasPicked = true;
			iHavePicked = true;
		}	
	} else { 
		if ((iAmPlayerTwo === true) && (twoHasPicked !== true)) {
			if (iHavePicked === false) {
				twosPick = "The Scissors";
				twoHasPicked = true;
				iHavePicked = true;
			}
		}
	}
});




