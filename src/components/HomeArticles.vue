<template>
  <div>

<main>


  <div v-if="loading" class="loading-spinner">

  <span></span>
    <span></span>
      <span></span>
        <span></span>
  </div>


  <div  class="wrapper">


  <div class="row">
      <div v-for="article in articles" :key="article.id">
      <div class="col-md-4 cards">


        <div>
          <h3><router-link v-bind:to="'/articles/'+ article.id">{{ article.title }} id {{article.id}}</router-link></h3>
<span>{{ article.created_at | moment("dddd, MMMM Do YYYY") }}</span> by {{article.user.name}}

          <div>{{ article.content | readMore(150, '...') }}</div>
<hr>
        Comments:  {{article.posted_comments_count}}


        </div>
      </div>
    </div>
    </div>
  </div>

</main>
  </div>

</template>

<script>

import Slideout from 'vue-slideout'

import axios from 'axios'

export default {
  name: 'HomeArticles',

  components: {
    Slideout
},

  data () {
    return {
      articles: [],
loading: false,

      user_name: localStorage.getItem('user_name'),
    }
  },

  mounted(){
this.loading = true;
   axios.get("https://peaceful-dusk-59248.herokuapp.com/api/articles")

   .then((response)  =>  {
this.loading = false;
     this.articles = response.data;
   }, (error)  =>  {
     this.loading = false;
   })
  }

}
</script>

<style>

</style>
