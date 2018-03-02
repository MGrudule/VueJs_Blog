<template>
  <div id="app">
  <header>
      <span>One page blog</span>
      <span> Hello {{ user_name}} </span>
    </header>
<router-link to="/login" tag="button">Login</router-link> <router-link to="/register" tag="button">Register</router-link>
<main>

    <button id="btn" class="" v-on:click="getArticles">Get Articles</button>
    <button id="btn" class="" v-on:click="postArticles">PostArticles</button>

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
</template>

<script>


import axios from 'axios'

export default {
  name: 'App',
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
      console.log(response)
        this.loading = false;
        this.articles = response.data;
      }, (error)  =>  {
        this.loading = false;
      })
    },


login(){


      axios.post('http://peaceful-dusk-59248.herokuapp.com/api/login',
        {email: this.email,
         password: this.password})

      .then(response => {

        localStorage.setItem('api_token',response.data.data.api_token);
        localStorage.setItem('user_id',response.data.data.id);
        localStorage.setItem('user_name',response.data.data.name);


      })
      .catch(error => {
        console.log(error.response);
        localStorage.removeItem('api_token')

      });
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
      console.log(response)
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
