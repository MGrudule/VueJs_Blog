<template>
  <div class="">

    <div v-if="loading">

      Loading.....
    </div>

  <div class="wrapper">
      <div class="row">

            <div class="col-md-4 cards">

              <div>
                <h1>{{ article.title }}</h1>
                <span>{{ article.created_at | moment("dddd, MMMM Do YYYY") }}</span>
                <div v-html="article.content"></div>
                


              </div>
              <hr>

              <form class="edit" @submit.prevent="postComment(comment)">


                  <textarea required v-model="comment.content" type="text" placeholder="Post a Comment"> </textarea>

                </p>

                <button type="submit">Submit</button>
              </form>
              <hr>
              <h5> comments </h5>
              <div v-for="posted_comment in article.posted_comments" >

                <div  class="col-md-4 cards">


                  <div>
<span>{{ posted_comment.created_at | moment("from", "now") }}</span>
                <strong>  {{posted_comment.user.name}} </strong>  <div v-html="posted_comment.content"></div>


                  </div>
                  <hr>
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
