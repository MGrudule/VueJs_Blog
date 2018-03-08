<template>
  <div class="row ">

    <div class="col-md-offset-4 col-md-4">
        Register or <router-link to="/login" tag="button">Login</router-link>
      </div>
         <form class="register input-group col-md-offset-4 col-md-4" @submit.prevent="register">

           <div class="input input-with-icon full-width">
           <input required v-model="name" type="text" placeholder="Name"/>
           <i class="input-icon fa fa-user"></i>
          </div>

           <div class="input input-with-icon full-width">
           <input required v-model="email" type="email" placeholder="Email"/>
           <i class="input-icon fa fa-envelope"></i>
         </div>
       
           <div class="input input-with-icon full-width">
           <input required v-model="password" type="password" placeholder="Password"/>
         <i class="input-icon fa fa-key"></i>
       </div>
           <div class="input input-with-icon full-width">
           <input required v-model="password_c" type="password" placeholder="Password "/>
         <i class="input-icon fa fa-key"></i></div>

           <button type="submit">Register</button>
         </form>

  </div>
</template>

<script>


import axios from 'axios'

export default {
  name: 'Register',
  data () {
    return {
      loading: false,
      password: '',
      password_c: '',
      email: '',
      name: '',
      user_name: localStorage.getItem('user_name'),
    }
  },
  methods: {



register(){
      axios.post('http://peaceful-dusk-59248.herokuapp.com/api/register',
        {email: this.email,
         name: this.name,
       password: this.password,
     password_confirmation: this.password_c})

      .then(response => {

        localStorage.setItem('api_token',response.data.data.api_token);
        localStorage.setItem('user_id',response.data.data.id);
        localStorage.setItem('user_name',response.data.data.name);
 this.$router.push(this.$route.query.redirect || '/admin');

      })
      .catch(error => {
        console.log(error.response);
        localStorage.removeItem('api_token')

      });
    }

}
}
</script>

<style>

</style>
