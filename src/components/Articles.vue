<template>
  <div class="">

    <div v-if="loading">

      Loading.....
    </div>

  <div class="wrapper">
      <div class="row">
          <div v-for="article in articles" :key="article.id">
            <div class="col-md-4 cards">


              <div>
                <h3>{{ article.title }}</h3>
                <div v-html="article.content"></div>
                <p>{{ article.created_at }} {{article.id}}</p>
                <button  class="" v-on:click="deleteArticle(article.id)"> Delete Article</button>
                  <router-link tag="button" v-bind:to="'/admin/edit/'+ article.id">Edit</router-link>

              </div>
            </div>
        </div>
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

   axios.get("https://peaceful-dusk-59248.herokuapp.com/api/articles")

   .then((response)  =>  {

     this.articles = response.data;
   }, (error)  =>  {
     this.loading = false;
   })
 },
  methods: {







    deleteArticle: function (value) {
      console.log(value);


      this.loading = true;
      axios.delete("http://peaceful-dusk-59248.herokuapp.com/api/auth/articles/" + value,
    {
    headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
    })

      .then((response)  =>  {
      console.log(response)

      }, (error)  =>  {
        this.loading = false;
      })
    },



      }
}
</script>


<style >

</style>
