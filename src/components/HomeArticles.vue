<template>
  <div>

<main>




  <div  class="wrapper">

  <div class="row">
      <div v-for="article in articles" :key="article.id">
      <div class="col-md-4 cards">


        <div>
          <h3><router-link v-bind:to="'/articles/'+ article.id">{{ article.title }} id {{article.id}}</router-link></h3>
          <div v-html="article.content"></div>
          <p>{{ article.created_at }} </p>
        Comments:  {{article.posted_comments_count}}
        Author: {{article.user.name}}

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
import isLoggedMixin from '../mixins/isLoggedMixin'
import axios from 'axios'

export default {
  name: 'HomeArticles',
   mixins:[isLoggedMixin],
  components: {
    Slideout
},

  data () {
    return {
      articles: [],

      user_name: localStorage.getItem('user_name'),
    }
  },
  created(){
       this.checkIfLogged()
           .then(response => {
             console.log("YAAAYYY");
                   this.user = response ? response : false;
               })
           .catch(error => console.log(error));
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

</style>
