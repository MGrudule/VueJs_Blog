<template>

  <div id="app">
    <ais-index
   app-id="Y7YIBDZQC9"
   api-key="347f9eba674acdd2fa8548acdefed052"
   index-name="articles_index"

 >
   <ais-search-box></ais-search-box><ais-powered-by></ais-powered-by>
   <ais-results >
     <template slot-scope="{ result }">
       <h2>

         <ais-highlight :result="result" attribute-name="title"></ais-highlight>
       </h2>
     </template>
   </ais-results>
 </ais-index>
    <router-link v-bind:to="'/'">Home</router-link>
    <router-link v-bind:to="'/admin'">Admin</router-link>
  <!-- the router outlet, where all matched components would ber viewed -->
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
  margin-top: 60px;
}
</style>
