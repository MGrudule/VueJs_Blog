<template>
  <div id="main">


    <main>

      <div> Sign in or <router-link to="/register" tag="button">Register</router-link>
        <hr>
         <form class="login" @submit.prevent="login">

           <label>Email</label>
           <input required v-model="email" type="text" placeholder="Snoopy"/>
           <label>Password</label>
           <input required v-model="password" type="password" placeholder="Password"/>

           <button type="submit">Login</button>
         </form>

       </div>

    </main>
  </div>
</template>

<script>


import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {

      loading: false,
      password: '',
      email: '',
      user_name: localStorage.getItem('user_name'),
    }
  },
  methods: {



login(){


      axios.post('http://peaceful-dusk-59248.herokuapp.com/api/login',
        {email: this.email,
         password: this.password})

      .then(response => {
console.log(response)
        localStorage.setItem('api_token',response.data.data.api_token);
        localStorage.setItem('user_id',response.data.data.id);
        localStorage.setItem('user_name',response.data.data.name);
        localStorage.setItem('user_theme',response.data.data.theme);


        this.$router.push(this.$route.query.redirect || '/admin');

      })
      .catch(error => {



      });
    }

}
}
</script>

<style>

</style>
