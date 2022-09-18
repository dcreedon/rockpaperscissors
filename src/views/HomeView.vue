<template>
  <div class="home">
    <LoginUser msg="Rock Paper Scissors Project 1"/>
  </div>
</template>

<script>
// @ is an alias to /src

import LoginUser from '@/components/LoginUser.vue'

export default {
  name: 'HomeView',
  components: {
    LoginUser,

  }
}
</script>
