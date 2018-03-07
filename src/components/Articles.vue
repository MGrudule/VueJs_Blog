<template>
  <div class="">

    <div v-if="loading" class="loading-spinner">

    <span></span>
      <span></span>
        <span></span>
          <span></span>
    </div>

  <div class="wrapper">
      <div class="row">
        <transition-group name="list" tag="p">
          <div v-for="(article, index) in articles" :key="article.id">
            <div class="col-md-4 list-item">


              <div>
                <h3>{{ article.title }}</h3>
                <span>{{ article.created_at | moment("dddd, MMMM Do YYYY") }}</span>
                <hr>
                <div v-html="article.content"></div>


<div class="button-group">
                <button  class="" v-on:click="deleteArticle(article.id, index)"> Delete Article</button>
                  <router-link tag="button" v-bind:to="'/admin/edit/'+ article.id">Edit</router-link>
</div>
              </div>
            </div>
        </div>
         </transition-group>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Articles',
  data () {
    return {
      articles: [],
      loading: false,
      password: '',
      email: '',
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
 },
  methods: {







    deleteArticle: function (value, index) {



      this.loading = true;
      axios.delete("http://peaceful-dusk-59248.herokuapp.com/api/auth/articles/" + value,
    {
    headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
    })

      .then((response)  =>  {
      this.loading = false;
this.$delete(this.articles, index)

      }, (error)  =>  {
        this.loading = false;
      })
    },



      }
}
</script>


<style >
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

</style>
