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
button, .router-link-active {
  display: inline-block;
  -ms-flex-item-align: center;
      align-self: center;
  background: white;
  padding: 0.2rem 0.2rem;
  margin: 0 0.2rem;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  color: #41403e;
  font-size: 1rem;
  letter-spacing: 1px;
  outline: none;
  -webkit-box-shadow: 20px 38px 34px -26px rgba(0, 0, 0, 0.2);
          box-shadow: 20px 38px 34px -26px rgba(0, 0, 0, 0.2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;

}
 button:hover, .router-link-active:hover {
  background: red;
  color: white;
  -webkit-box-shadow: 2px 8px 4px -6px rgba(0, 0, 0, 0.3);
          box-shadow: 2px 8px 4px -6px rgba(0, 0, 0, 0.3);
}
</style>
