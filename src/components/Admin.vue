<template>

  <div >

    <Slideout menu="#navigation" panel="#main" :toggleSelectors="['.toggle-button-nav']" >
            <nav id="navigation">
              <div>
                <button id="btn" class="" v-on:click="getArticles">Get Articles</button>
                <button id="btn" class="" v-on:click="postArticles">PostArticles</button>
              </div>
            </nav>

    </Slideout>


  <div id="main">


      <header>
          <button class="toggle-button-nav">☰</button>
          <span> Hello {{ user_name}} </span>

      </header>

      <main>

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
                      <button  class="" v-on:click="updateArticle(article.id)"> Update Article</button>
                    </div>
                  </div>
              </div>
              </div>
            </div>
      </main>
  </div>
</div>
</template>

<script>

import Slideout from 'vue-slideout'
import axios from 'axios'

export default {
  name: 'Admin',
  components: {
    Slideout
},
  data () {
    return {
      articles: [],
      loading: false,
      password: '',
      email: '',
      user_name: localStorage.getItem('user_name'),
    }
  },
  methods: {
    getArticles: function () {

      this.loading = true;
      axios.get("https://peaceful-dusk-59248.herokuapp.com/api/articles")

      .then((response)  =>  {

        this.loading = false;
        this.articles = response.data;
      }, (error)  =>  {
        this.loading = false;
      })
    },




    postArticles: function () {

      this.loading = true;
      axios.post("https://peaceful-dusk-59248.herokuapp.com/api/auth/articles",
    {title: "Api Static Test",
     content: "lorem ipsum",
     user_id: "1",},{
    headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
    })

      .then((response)  =>  {

        this.loading = false;
        this.articles = response.data;
      }, (error)  =>  {
        this.loading = false;
      })
    },

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
//     updateArticle: function (value) {
//       console.log(value);
//
//
//       this.loading = true;
//       axios.put("http://peaceful-dusk-59248.herokuapp.com/api/auth/articles/" + value,{title: "Api Static Test Updated",
//        content: "lorem ipsum changed", user_id: "1"
//       },
//     {
//     headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
// })
//
//       .then((response)  =>  {
//       console.log(response)
//
//       }, (error)  =>  {
//         this.loading = false;
//       })
//     },
      updateArticle: function (value) {
      console.log(value);
      var params = new URLSearchParams();
      params.append('title', 'test update');
      params.append('content', 'test content');

        this.loading = true;
        axios.put("http://peaceful-dusk-59248.herokuapp.com/api/auth/articles/" + value,
              params,
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

<style>

</style>
