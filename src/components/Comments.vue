<template>
  <div class="comments-new">
    Add comment

 <form class="edit" @submit.prevent="postComment(comment)">


     <textarea required v-model="content" type="text" placeholder="Article content"> </textarea>

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
      comments: [],
      loading: false,
      content: '',
      user_id: localStorage.getItem('user_id'),
    }
  },
  methods: {

    postComment: function (comment) {


      axios.post("https://peaceful-dusk-59248.herokuapp.com/api/articles/" + this.$route.params.id + "/comment",
    { article_id: this.$route.params.id,
     content: comment.content,
     user_id: this.user_id},{
    headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
    })

      .then((response)  =>  {

        this.loading = false;

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
