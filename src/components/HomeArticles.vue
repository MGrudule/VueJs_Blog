<template>
  <div class="section">




  <div v-if="loading" class="loading-spinner">

  <span></span>
    <span></span>
      <span></span>
        <span></span>
  </div>



  <transition-group name="list" tag="div" class="row">
        <div class="col-md-4 list-item" v-for="article in articles" :key="article.id">

          <h3><router-link v-bind:to="'/articles/'+ article.id">{{ article.title }} id {{article.id}}</router-link></h3>
          <span>{{ article.created_at | moment("dddd, MMMM Do YYYY") }}</span> by {{article.user.name}} <hr>

          <div>{{ article.content | readMore(150, '...') }} <router-link v-bind:to="'/articles/'+ article.id"> read more</router-link></div>
          <hr>

        <div class="row ">
          Comments:  {{article.posted_comments_count}}
          <ul class="tags col-xs-3">
            <li class="tag" v-for="category in article.articles_category" v-if="category.category !== null">

              <span class="tag"> {{category.category.name}} </span>

            </li>

          </ul>
        </div>



    </div>
  </transition-group>


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
.list-item {
  display: inline-block;

}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

</style>
