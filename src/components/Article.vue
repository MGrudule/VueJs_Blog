<template>
  <div class="">

    <div v-if="loading">

      Loading.....
    </div>

  <div class="wrapper">
      <router-link tag="button" to="/">Back to Articles</router-link>
      <div class="row">

            <div class="col-m-8 cards">

              <div>
                <h1>{{ article.title }}</h1>
                <span>{{ article.created_at | moment("dddd, MMMM Do YYYY") }}</span>
                <div v-html="article.content"></div>



              </div>
              <div class="row">
                <ul class="tags">
                <li class="tag" v-for="category in article.articles_category" v-if="category.category !== null">



                  <span class="tag"> {{category.category.name}} </span>


              </li>
              </ul>
              </div>

              <transition-group name="list" tag="div" class="row">
                    <div class="col-md-offset-2 col-md-8 comment list-item" v-for="posted_comment in article.posted_comments" :key="posted_comment.id" >

                      <div class="header" >
                        <strong>  {{posted_comment.user.name}} </strong>
                        {{ posted_comment.created_at | moment("from", "now") }}

                      </div>

                       <div v-html="posted_comment.content"></div>

                     </div>
             </transition-group>
             <br>
            <div class="row">
              <form class="edit col-md-offset-2 col-md-8" @submit.prevent="postComment(comment)">
                <div class="textarea">

                  <textarea class="" required v-model="comment.content" type="text" placeholder="Post a Comment"> </textarea>

                </div>

                <button type="submit">Submit</button>
              </form>
            </div>
            </div>

        </div>
      </div>
  </div>
</template>

<script>


import axios from 'axios'
export default {
  name: 'Article',
  data () {
    return {
      article: [],
      posted_comments: [],
      response: [],
      comment: [],
      loading: false,
      content: '',
      user_id: localStorage.getItem('user_id'),
      user_name: localStorage.getItem('user_name'),
      user: {
        id: localStorage.getItem('user_id'),
        name: localStorage.getItem('user_name')
      }

    }
  },
  mounted(){

   axios.get("https://peaceful-dusk-59248.herokuapp.com/api/articles/"+ this.$route.params.id)

   .then((response)  =>  {

     this.article = response.data;
   }, (error)  =>  {
     this.loading = false;
   })
 },
  methods: {
    postComment: function (comment) {


      axios.post("https://peaceful-dusk-59248.herokuapp.com/api/articles/" + this.$route.params.id + "/comment",
    { id: this.$route.params.id,
     content: comment.content,
     user_id: this.user_id},{
    headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
    })

      .then((response)  =>  {

        response.data["user"] = this.user,

this.article.posted_comments.push(response.data),

        this.loading = false;

      }, (error)  =>  {
        this.loading = false;
      })
    },






    deleteArticle: function (value) {
      console.log(value);


      this.loading = true;
      axios.delete("https://peaceful-dusk-59248.herokuapp.com/api/auth/articles/" + value,
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
