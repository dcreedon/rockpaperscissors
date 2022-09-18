<template>
    <div class="game">
      <h1>Game View only available to logged in users</h1>
      <RockPaperScissors />
    </div>
  </template>


<script>
import RockPaperScissors from '@/components/RockPaperScissors.vue'

export default {
  name: 'GameView',
  components: {
    RockPaperScissors,

  }
}
</script>