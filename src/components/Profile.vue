<template>
  <div class="admin-profile">

<h1> Welcome! {{ user_name}} </h1>
    <div>
      <form class="edit" @submit.prevent="updateUser(user)">


          <input type="text" v-model="user.name">


          <input type="email" v-model="user.email">

        <input type="text" v-model="user.theme">

        <button type="submit">Update</button>
      </form>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Profile',
  props: ["user_name"],
  data () {
    return {
    user: [],


    }
  },
  mounted(){

   axios.get("https://peaceful-dusk-59248.herokuapp.com/api/profile",
{
headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
})

   .then((response)  =>  {

     this.user = response.data;

   }, (error)  =>  {
     this.loading = false;
   })
 },

  methods: {
    updateUser: function (user) {

    var params = new URLSearchParams();
    params.append('name', user.name);
    params.append('email', user.email);

      this.loading = true;
      axios.put("http://peaceful-dusk-59248.herokuapp.com/api/profile",
            params,
        {
        headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
        })

      .then((response)  =>  {

       localStorage.setItem('user_id',response.data.id);
       localStorage.setItem('user_name',response.data.name);
       localStorage.setItem('user_theme',response.data.theme);
    this.$emit("change")

       //this.$router.push(this.$route.query.redirect || '/admin');

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
