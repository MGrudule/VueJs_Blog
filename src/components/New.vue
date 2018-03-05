<template>
  <div class="admin-new">
  <router-link to="/admin">Back to Articles</router-link>
 <form class="edit" @submit.prevent="postArticle(article)">

   <p>
     <input required v-model="article.title" type="text" placeholder="Article title">

   </p>
   <p>
     <textarea required v-model="article.content" type="text" placeholder="Article content"> </textarea>

   </p>

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
      article: [],
      loading: false,
      title: '',
      content: '',
      user_id: localStorage.getItem('user_id'),
    }
  },
  methods: {

    postArticle: function (article) {


      axios.post("https://peaceful-dusk-59248.herokuapp.com/api/auth/articles",
    {title: article.title,
     content: article.content,
     user_id: this.user_id},{
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
