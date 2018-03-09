<template>
  <div class="section">




  <div v-if="loading" class="loading-spinner">

  <span></span>
    <span></span>
      <span></span>
        <span></span>
  </div>



  <transition-group name="list" tag="div" class="row around-md">
        <div class="col-md-4 list-item " v-for="article in articles" :key="article.id">
          <div class="header">
          <h3><router-link v-bind:to="'/articles/'+ article.id">{{ article.title }} </router-link></h3> </div>
            <div class="box-header">
              <span>{{ article.created_at | moment("dddd, MMMM Do YYYY") }}</span>
              by {{article.user.name}}
            </div>

            <div class="article">{{ article.content | readMore(170, '...') }}
              <router-link v-bind:to="'/articles/'+ article.id"> read more</router-link>
            </div>



        <div class="row ">

          <ul class="tags  col-md-12">
              <div class="row">
                <div class="col-xs-3 "> <span class="speech-bubble">{{article.posted_comments_count}} </span></div>
                <li class="tags col-xs-3" v-for="category in article.articles_category" v-if="category.category !== null">

                  <span class="tag"> {{category.category.name}} </span>

                </li>

            </div>
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
