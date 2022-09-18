<template>

     <div class="rockpaperscissors">
          <h2>Choose your weapon (click/tap an image) Round {{roundCount + 1}}</h2>
          <b-container class="bv-example-row text-center">
               <b-row>
                    <b-col sm>Rock <img src="../img/rock.png" @click="chooseWeapon('rock')"></b-col>
                    <div class="w-100"></div>
                    <b-col sm>Paper <img src="../img/paper.png" @click="chooseWeapon('paper')"></b-col>
                    <b-col sm>Scissors <img src="../img/scissors.png" @click="chooseWeapon('scissors')"></b-col>
               </b-row>
          </b-container>
     <div class="score">
          <b-container class="bv-example-row">
               <b-row>
                    <b-col>Human Score</b-col>
                    <b-col>Draws</b-col>
                    <b-col>Computer Score</b-col>                    
                    <div class="w-100"></div>
                    <b-col>{{roundScoreHuman}}</b-col>
                    <b-col>{{roundDrawCount}}</b-col>
                    <b-col>{{roundScoreComputer}}</b-col>
               </b-row>
               <b-row><b-col></b-col></b-row>
               <b-row>
                    <b-col>Games Won </b-col>
                    <b-col>Human</b-col>
                    <b-col>Computer</b-col>
                    <div class="w-100"></div>
                    <b-col>Column </b-col>
                    <b-col>Column</b-col>
                   
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
               roundScoreHuman: 0,
               roundScoreComputer: 0,
               roundDrawCount: 0,
               gameWinHuman: 0,
               gameWinComputer: 0,
               gameDraws: 0,
               winningNumberOfRoundsPerGame: 10,
               roundCount: 0,
          }
     },
     methods: {
          chooseWeapon(weapon) {

               this.updateRoundCount();

               var randomWeaponChosen = this.chooseRandomWeapon();
               var roundResult = this.checkRoundResult(weapon, randomWeaponChosen);

               if (roundResult == 'human') {
                    this.updateRoundScoreHuman();
               } else if (roundResult == 'computer') {
                    this.updateRoundScoreComputer();
               } else if (roundResult == 'draw') {
                    this.updateDrawCount();
               }

               if ((this.roundScoreHuman == this.winningNumberOfRoundsPerGame) || (this.roundScoreComputer == this.winningNumberOfRoundsPerGame)) {
                    var gameResult = this.checkGameWinner();

                    if (gameResult == 'human') {
                         this.updateGameWinHuman();
                    } else if (gameResult == 'computer') {
                         this.updateGameWinComputer();
                    } else if (gameResult == 'draw') {
                         this.updateGameDraw();
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
               } else if ((weapon == 'rock') && (randomWeaponChosen == 'scissors')) {
                    roundResult = 'human';
               } else if ((weapon == 'rock') && (randomWeaponChosen == 'paper')) {
                    roundResult = 'computer';
               } else if ((weapon == 'paper') && (randomWeaponChosen == 'scissors')) {
                    roundResult = 'computer';
               } else if ((weapon == 'paper') && (randomWeaponChosen == 'rock')) {
                    roundResult = 'human';
               } else if ((weapon == 'scissors') && (randomWeaponChosen == 'rock')) {
                    roundResult = 'computer';
               } else if ((weapon == 'scissors') && (randomWeaponChosen == 'paper')) {
                    roundResult = 'human';
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
                    gameResult = 'draw';
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
          }


     }
}


</script>
    
    
    
<style scoped>

</style>