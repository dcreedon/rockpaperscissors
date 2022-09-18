<template>
  <div class="game">
    <RockPaperScissors />
    <GameScore />

  </div>
</template>


<script>
import GameScore from '@/components/GameScore.vue'
import RockPaperScissors from '@/components/RockPaperScissors.vue'


export default {
  name: 'GameView',
  components: {
    RockPaperScissors,
    GameScore

  }
}
</script>