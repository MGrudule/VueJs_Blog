<template>
  <div class="admin-edit">


    <div>
      <form class="edit" @submit.prevent="updateArticle(article)">


          <input class="input" type="text" v-model="article.title">

      <div class="textarea">
          <textarea id="articleContent" type="text" v-model="article.content" rows="20"> </textarea>

        </div>

        <button type="submit">Update</button>
      </form>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Edit',
  data () {
    return {
    article: [],

    }
  },
  mounted(){

   axios.get("https://peaceful-dusk-59248.herokuapp.com/api/articles/" + this.$route.params.id)

   .then((response)  =>  {

     this.article = response.data;

   }, (error)  =>  {
     this.loading = false;
   })
 },

  methods: {
    updateArticle: function (article) {

    var params = new URLSearchParams();
    params.append('title', article.title);
    params.append('content', article.content);

      this.loading = true;
      axios.put("https://peaceful-dusk-59248.herokuapp.com/api/auth/articles/" + this.$route.params.id,
            params,
        {
        headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
        })

      .then((response)  =>  {
       this.$router.push(this.$route.query.redirect || '/admin');

      }, (error)  =>  {
        this.loading = false;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
