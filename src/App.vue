<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <div v-if="loggedIn">
        <router-link to="/logout">Logout</router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

var loggedIn = false;

if (JSON.parse(localStorage.getItem('loggedIn')) == true) {
  alert("logged in");
  loggedIn = true;
  
}

export default {
  name: 'App',
    data() {
      return{
    loggedIn,

  }
},
watch: {
  loggedIn(){
    if (JSON.parse(localStorage.getItem('loggedIn')) == true) {
  alert("logged in");
  loggedIn = true;
  
}
  }
}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
