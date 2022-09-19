<template>

     <div class="rockpaperscissors">

          <div class="game-start" v-show="showGame">
               <h2>Choose your weapon (click/tap an image) Round {{roundCount + 1}}</h2>
               <b-container class="bv-example-row text-center">
                    <b-row>
                         <b-col sm>Rock <img src="../img/rock.png" @click="chooseWeapon('rock')"></b-col>
                         <div class="w-100"></div>
                         <b-col sm>Paper <img src="../img/paper.png" @click="chooseWeapon('paper')"></b-col>
                         <b-col sm>Scissors <img src="../img/scissors.png" @click="chooseWeapon('scissors')"></b-col>
                    </b-row>
               </b-container>

          </div>
          <div class="round-result" v-show="showRoundResult">
               <h2>Round {{roundCount}} Result</h2>
               <b-container class="bv-example-row text-center">
                    <b-row>
                         <b-col sm>Human Chose <img v-bind:src="'../img/' + humanWeapon + '.png'"></b-col>
                         <b-col sm>Computer Chose <img v-bind:src="'../img/' + computerWeapon + '.png'"></b-col>
                         <div class="w-100"></div>
                         <b-col sm v-if="roundDraw">It's a<img v-bind:src="'../img/' + winningWeapon + '.png'"></b-col>
                         <b-col sm v-else>Winner is<img v-bind:src="'../img/' + winningWeapon + '.png'"></b-col>
                    </b-row>
               </b-container>
          </div>
          <div class="game-result" v-show="showGameResult">
               <h2>Game Over</h2>
               <b-container class="bv-example-row text-center">
                    <b-row>
                         <b-col sm v-if="gameWinner == 'human'">Well done Human!<img
                                   v-bind:src="'../img/' + gameWinner + '.png'"></b-col>
                         <b-col sm v-else>The end is nigh! Computer Wins<img
                                   v-bind:src="'../img/' + gameWinner + '.png'"></b-col>
                         <div class="w-100"></div>
                         <b-col sm><img src="../img/newgame.png" @click="startNewGame()"></b-col>
                    </b-row>
               </b-container>
          </div>
          <div class="score">
               

               <b-container class="bv-example-row">
                    <div v-show="showRoundScore">
                         <h2>First player to {{winningNumberOfRoundsPerGame}} wins!</h2>
                    <b-row>
                         <b-col>Human Score</b-col>
                         <b-col>Draws</b-col>
                         <b-col>Computer Score</b-col>
                         <div class="w-100"></div>
                         <b-col>{{roundScoreHuman}}</b-col>
                         <b-col>{{roundDrawCount}}</b-col>
                         <b-col>{{roundScoreComputer}}</b-col>
                    </b-row>
                    </div>
                    <b-row>
                         <b-col>Games Won</b-col>
                    </b-row>
                    <b-row>
                         <b-col>Human</b-col>
                         <b-col>Computer</b-col>
                         <div class="w-100"></div>
                         <b-col>{{gameWinHuman}} </b-col>
                         <b-col>{{gameWinComputer}}</b-col>

                    </b-row>
               </b-container>
          </div>
     </div>

</template>    
    
<script>

export default {

     data() {
          return {
               name: 'RockPaperScissors',
               humanWeapon: '',
               computerWeapon: '',
               winningWeapon: '',
               roundDraw: false,
               roundScoreHuman: 0,
               roundScoreComputer: 0,
               roundDrawCount: 0,
               gameWinHuman: 0,
               gameWinComputer: 0,
               gameDraws: 0,
               //winningNumberOfRoundsPerGame: 10,
               winningNumberOfRoundsPerGame: 2, //for testing or else you'll be RPS for a while
               roundCount: 0,
               showGameResult: false,
               showRoundResult: false,
               showGame: true,
               gameWinner: '',
               showRoundScore: true,
          }
     },
     methods: {
          chooseWeapon(weapon) {

               this.roundDraw = false;
               this.updateRoundCount();
               this.humanWeapon = weapon;
               var randomWeaponChosen = this.chooseRandomWeapon();
               this.computerWeapon = randomWeaponChosen;

               var roundResult = this.checkRoundResult(weapon, randomWeaponChosen);

               if (roundResult == 'human') {
                    this.updateRoundScoreHuman();
               } else if (roundResult == 'computer') {
                    this.updateRoundScoreComputer();
               } else if (roundResult == 'draw') {
                    this.updateDrawCount();
                    this.roundDraw = true;
               }

               this.displayRoundResult();

               if ((this.roundScoreHuman == this.winningNumberOfRoundsPerGame) || (this.roundScoreComputer == this.winningNumberOfRoundsPerGame)) {
                    var gameResult = this.checkGameWinner();

                    if (gameResult == 'human') {
                         this.updateGameWinHuman();
                         //this.displayGameResult(gameResult);
                         setTimeout(() => this.displayGameResult(gameResult), 3500);
                    } else if (gameResult == 'computer') {
                         this.updateGameWinComputer();
                         //this.displayGameResult(gameResult);
                         setTimeout(() => this.displayGameResult(gameResult), 3500);
                    } else if (gameResult == 'draw') {
                         this.updateGameDraw(); // will never happen
                    }

                    this.resetRound();

               }
          },
          chooseRandomWeapon() {

               var arrStr = ['rock', 'paper', 'scissors'];
               var randElement = arrStr[Math.floor(Math.random() * arrStr.length)];

               return randElement;

          },
          checkRoundResult(weapon, randomWeaponChosen) {

               var roundResult = null;

               if (weapon == randomWeaponChosen) {
                    roundResult = 'draw';
                    this.winningWeapon = 'draw';
               } else if ((weapon == 'rock') && (randomWeaponChosen == 'scissors')) {
                    roundResult = 'human';
                    this.winningWeapon = 'rock';
               } else if ((weapon == 'rock') && (randomWeaponChosen == 'paper')) {
                    roundResult = 'computer';
                    this.winningWeapon = 'paper';
               } else if ((weapon == 'paper') && (randomWeaponChosen == 'scissors')) {
                    roundResult = 'computer';
                    this.winningWeapon = 'scissors';
               } else if ((weapon == 'paper') && (randomWeaponChosen == 'rock')) {
                    roundResult = 'human';
                    this.winningWeapon = 'paper';
               } else if ((weapon == 'scissors') && (randomWeaponChosen == 'rock')) {
                    roundResult = 'computer';
                    this.winningWeapon = 'rock';
               } else if ((weapon == 'scissors') && (randomWeaponChosen == 'paper')) {
                    roundResult = 'human';
                    this.winningWeapon = 'scissors';
               }

               return roundResult;

          },
          updateRoundScoreHuman() {
               this.roundScoreHuman += 1;
          },
          updateRoundScoreComputer() {
               this.roundScoreComputer += 1;
          },
          updateDrawCount() {
               this.roundDrawCount += 1;
          },
          updateRoundCount() {
               this.roundCount += 1;
          },
          checkGameWinner() {

               var gameResult = null;
               if (this.roundScoreHuman == this.roundScoreComputer) {
                    gameResult = 'draw'; // will never happen unless computers rise up
               } else if (this.roundScoreHuman > this.roundScoreComputer) {
                    gameResult = 'human';
               } else if (this.roundScoreHuman < this.roundScoreComputer) {
                    gameResult = 'computer';
               }

               return gameResult;
          },
          updateGameWinHuman() {
               this.gameWinHuman += 1;
          },
          updateGameWinComputer() {
               this.gameWinComputer += 1;
          },
          updateGameDraw() {
               this.gameDraws += 1;
          },
          resetRound() {
               this.roundScoreComputer = 0;
               this.roundScoreHuman = 0;
               this.roundDrawCount = 0;
               this.roundCount = 0;
               this.roundDraw = false;
          },
          displayGameResult(gameResult) {
               this.toggleShowGame();
               this.toggleShowGameResult();
               this.gameWinner = gameResult;
               this.toggleShowRoundScore();
               //setTimeout(() => this.toggleShowGame(), 3500);               
          },
          displayRoundResult() {
               this.toggleShowGame();
               this.toggleShowRoundResult();
               setTimeout(() => this.toggleShowRoundResult(), 3500);
               setTimeout(() => this.toggleShowGame(), 3500);
          },
          toggleShowGameResult() {
               this.showGameResult = !this.showGameResult;
          },
          toggleShowRoundResult() {
               this.showRoundResult = !this.showRoundResult;
          },
          toggleShowGame() {
               this.showGame = !this.showGame;
          },
          toggleShowRoundScore(){
               this.showRoundScore = !this.showRoundScore;
          },
          startNewGame() {
               this.toggleShowGameResult();
               this.toggleShowGame();
               this.toggleShowRoundScore();
          }
     }
}


</script>
    
    
    
<style scoped>

</style>