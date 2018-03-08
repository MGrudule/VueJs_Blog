<template>
  <div class="admin-new wrapper">
  <router-link tag="button" to="/admin">Back to Articles</router-link>
 <form class="edit" @submit.prevent="postArticle(article)">


     <input class="input" required v-model="article.title" type="text" placeholder="Article title">

<div class="textarea">
     <textarea class="" required v-model="article.content" type="text" placeholder="Article content"> </textarea>
   </div> <div class="row">
     <div v-for="(category, index) in categories" :key="category.id" class="checkbox col-sm-3 col-xs-4 ">
     <input type="checkbox" v-bind:id="category.id" v-bind:value="category.id" v-model="checkedNames" >
      <label v-bind:for="category.id"> {{category.name}} </label>
    </div>

  </div>


   <button type="submit">Submit</button>
 </form>

  </div>

</template>

<script>

import axios from 'axios'
export default {
  name: 'New',
  data () {
    return {
       checkedNames: [],
      categories: [],
      article: [],
      loading: false,
      title: '',
      content: '',
      user_id: localStorage.getItem('user_id'),
    }
  },
  mounted(){
this.loading = true;
   axios.get("https://peaceful-dusk-59248.herokuapp.com/api/categories")

   .then((response)  =>  {
     console.log(response)
this.loading = false;
     this.categories = response.data;
   }, (error)  =>  {
     this.loading = false;
   })
 },
  methods: {

    postArticle: function (article) {
console.log(this.checkedNames)

      axios.post("https://peaceful-dusk-59248.herokuapp.com/api/auth/articles",
    {title: article.title,
     content: article.content,
     user_id: this.user_id,
   categories: this.checkedNames},{
    headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
    })

      .then((response)  =>  {

        this.loading = false;
        this.articles = response.data;
        this.$router.push(this.$route.query.redirect || '/admin');
      }, (error)  =>  {
        this.loading = false;
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
