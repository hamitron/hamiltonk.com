var TTAPP = angular.module('TicTacToeApp', ['firebase']);

TTAPP.controller('gameCtrl', function($scope, $firebase) {


var TTTRef = new Firebase("https://tickitytackityt0.firebaseio.com") ;
$scope.fireBaseBoard = $firebase(new Firebase("https://tickitytackityt0.firebaseio.com" + "/testBoard"));
$scope.fireBoardArray = $firebase(new Firebase("https://tickitytackityt0.firebaseio.com" + "/boardArray"));
$scope.firePlayerNames = $firebase(new Firebase("https://tickitytackityt0.firebaseio.com" + "/playerNames"));

// use this instead of boardArray for firebase binding.  make a watch feature on this to change the boardArray.


$scope.createBoard = function(size) {
    // create a tic tac toe board using the argument size for width and height
    // if size is not set, use a 3 by 3 board
  if (size == null) {
      size = 3;
    }

$scope.boardArray = [
  {status: "A", idNum:0, idx:0, idy: 0, chosen: false}, 
  {status: "B", idNum:1, idx:1, idy: 0, chosen: false}, 
  {status: "C", idNum:2, idx:2, idy: 0, chosen: false}, 
  {status: "D", idNum:3, idx:0, idy: 1, chosen: false}, 
  {status: "E", idNum:4, idx:1, idy: 1, chosen: false}, 
  {status: "F", idNum:5, idx:2, idy: 1, chosen: false}, 
  {status: "G", idNum:6, idx:0, idy: 2, chosen: false}, 
  {status: "H", idNum:7, idx:1, idy: 2, chosen: false}, 
  {status: "I", idNum:8, idx:2, idy: 2, chosen: false}
  ];
};

  //These arrays hold the values of chosen cells
  //counts up after every space choice. except choices that are already occupied

$scope.boardReset= function() {
    $scope.oTurn = false;
    $scope.outcome = " ";
    for (var i = 0; i <= 8; i++){
    $scope.boardArray[i].chosen = false;
    $scope.boardArray[i].status = null;
    $scope.playcounter = 0;
    $scope.gameEnd = false;
  }
    $scope.testBoard = [
                    [" "," "," "],
                    [" "," "," "],
                    [" "," "," "]
            ];
}


$scope.whosTurn = function(){
//hides player turn container.  will replace with winning player.
   if ($scope.playcounter >= 8){
      $scope.gameEnd = true;
    } else {
      $scope.gameEnd = false;
    }
    // if ($scope.gameEnd == true) {

    // }
};

$scope.addNames = function(xName, yName){
  $scope.playerXName = xName;
  $scope.playerOName = yName;
  $scope.xyName = true; // this binds with nghide to hide the name box.
  //Firebase goodness
  $scope.firePlayerNames.$set({PlayerX: $scope.playerXName, PlayerO: $scope.playerOName});
  $scope.boardReset()

};


  $scope.playerPicks = function(thisCell) {
   // determines if space has already been chosen or not.  If chosen it adds 0 to the playcounter.
    
    if (thisCell.chosen == true){
      console.log("Can't pick that one, " + thisCell.status + " is already there.");
    } else if ($scope.playcounter % 2 == 0){
        $scope.whosTurn()
        $scope.oTurn = true;
        thisCell.status = "X" ;
        thisCell.chosen = true;
        $scope.outcome = "X Wins"
        $scope.testBoard[thisCell.idx][thisCell.idy] = "X";
        $scope.winScenario();
        // console.log("X pushed to " + thisCell.idx +" "+ thisCell.idy)
    } else if ($scope.playcounter % 2 == 1){
          $scope.whosTurn()
          $scope.oTurn = false;
          thisCell.status = "O";
          thisCell.chosen = true;
          $scope.outcome = "O Wins"
          $scope.testBoard[thisCell.idx][thisCell.idy] = "O";
          $scope.winScenario();
          // console.log("O pushed to " + thisCell.idx +" "+ thisCell.idy)
          
      }
      
      $scope.playcounter +=1;
  
  } ;

$scope.winScenario = function(x,y) {
  if (x == null) {
    var c = 0
  } else {
    x = c
  }
  if (y == null) {
    var r = 0;
  } else {
    y = r;
  };

 // if ($scope.playcounter >=2){

  var playerXWins = "XXX";
  var playerOWins = "OOO";

  //checks rows for winner
            if (($scope.testBoard[c][r] + $scope.testBoard[c+1][r] + $scope.testBoard[c+2][r]) == playerXWins ||
               ( $scope.testBoard[c][r] + $scope.testBoard[c+1][r] + $scope.testBoard[c+2][r]) == playerOWins)  {
                $scope.gameEnd = true;
               

      } else if (($scope.testBoard[c][r+1] + $scope.testBoard[c+1][r+1] + $scope.testBoard[c+2][r+1]) == playerXWins ||
                ( $scope.testBoard[c][r+1] + $scope.testBoard[c+1][r+1] + $scope.testBoard[c+2][r+1]) == playerOWins) {
                  console.log("we have a winner row 2");
                  $scope.gameEnd = true;
                 

      } else if (($scope.testBoard[c][r+2] + $scope.testBoard[c+1][r+2] + $scope.testBoard[c+2][r+2]) == playerXWins ||
                ( $scope.testBoard[c][r+2] + $scope.testBoard[c+1][r+2] + $scope.testBoard[c+2][r+2]) == playerOWins) {
                  console.log("we have a winner row 3");
                  $scope.gameEnd = true;
                 

  // checks columns for winner
      } else if (($scope.testBoard[c][r] + $scope.testBoard[c][r+1] + $scope.testBoard[c][r+2]) == playerXWins ||
                ( $scope.testBoard[c][r] + $scope.testBoard[c][r+1] + $scope.testBoard[c][r+2]) == playerOWins){
                  console.log("Veritcal winner"); 
                  $scope.gameEnd = true;
                 

      } else if (($scope.testBoard[c+1][r] + $scope.testBoard[c+1][r+1] + $scope.testBoard[c+1][r+2]) == playerXWins ||
                ( $scope.testBoard[c+1][r] + $scope.testBoard[c+1][r+1] + $scope.testBoard[c+1][r+2]) == playerOWins) {
                  console.log("Vertical winner column 2");
                  $scope.gameEnd = true;
                 


      } else if (($scope.testBoard[c+2][r] + $scope.testBoard[c+2][r+1] + $scope.testBoard[c+2][r+2]) == playerXWins ||
                ( $scope.testBoard[c+2][r] + $scope.testBoard[c+2][r+1] + $scope.testBoard[c+2][r+2]) == playerOWins) {
                  console.log("Vertical winner column 3");
                  $scope.gameEnd = true;
                 
                // checks diag for winner
      } else if (($scope.testBoard[c][r] + $scope.testBoard[c+1][r+1] + $scope.testBoard[c+2][r+2]) == playerXWins ||
                ( $scope.testBoard[c][r] + $scope.testBoard[c+1][r+1] + $scope.testBoard[c+2][r+2]) == playerOWins){ 
                  console.log("DIagWIN");
                  $scope.gameEnd = true;
                 

      } else if (($scope.testBoard[c+2][r] + $scope.testBoard[c+1][r+1] + $scope.testBoard[c][r+2]) == playerXWins ||
                ( $scope.testBoard[c+2][r] + $scope.testBoard[c+1][r+1] + $scope.testBoard[c][r+2]) == playerOWins){ 
                  console.log("Diag Win");
                  $scope.gameEnd = true;
                 

                  // cats game
      } else if ( $scope.playcounter == 8) {
                  $scope.gameEnd = true;
                  $scope.outcome = "Cats Game";
                  console.log("Cat's Game");
    };
    


  

}
// }






window.onload = $scope.createBoard(3);
  
});
