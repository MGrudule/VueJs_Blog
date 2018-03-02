<template>
  <div id="app">

<router-link to="/login" tag="button">Login</router-link> <router-link to="/register" tag="button">Register</router-link>
<main>




  <div class="wrapper">
    
  <div class="row">
      <div v-for="article in articles" :key="article.id">
      <div class="col-md-4 cards">


        <div>
          <h3>{{ article.title }}</h3>
          <div v-html="article.content"></div>
          <p>{{ article.created_at }} {{article.id}}</p>

        </div>
      </div>
    </div>
    </div>
  </div>
</main>
  </div>
</template>

<script>


import axios from 'axios'

export default {
  name: 'Home',

  data () {
    return {
      articles: [],

      user_name: localStorage.getItem('user_name'),
    }
  },
  mounted(){

   axios.get("https://peaceful-dusk-59248.herokuapp.com/api/articles")

   .then((response)  =>  {

     this.articles = response.data;
   }, (error)  =>  {
     this.loading = false;
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
  margin-top: 60px;
}
</style>
