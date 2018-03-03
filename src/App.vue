<template>

  <div id="app">
    <div>
      <router-link v-bind:to="'/'">Home</router-link>
      <router-link v-bind:to="'/admin'">Admin</router-link>
    </div>


<router-view></router-view>
  </div>
</template>


<script>

export default {
  name: 'app',



}


</script>
<!-- styling for the component -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:white;

}
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
.slideout-menu {
 position: fixed;
 top: 0;
 bottom: 0;
 width: 256px;
 height: 100vh;
 overflow-y: scroll;
 -webkit-overflow-scrolling: touch;
 z-index: 999;
 display: none;
 background-color: #fcfcfc;

}

.slideout-menu-left {
 left: 0;
}

.slideout-menu-right {
 right: 0;
}

.slideout-panel {

 position: relative;
 z-index: 1;
 will-change: transform;
 min-height: 100vh;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
 overflow: hidden;
}

.slideout-open .slideout-menu {
 display: block;
}

</style>
