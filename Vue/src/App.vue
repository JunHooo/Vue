<template>
  <div>
  <div id="app">
   <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    if (window.localStorage.getItem("list") ) {
      this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(window.localStorage.getItem("list"))))
    }

    window.addEventListener("beforeunload",()=>{
      window.localStorage.setItem("list",JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
