<template>
  <div id="app">
  <header>
      <span>One page blog</span>
      <span> Hello {{ user_name}} </span>
    </header>
<router-link to="/login" tag="button">Login</router-link> <router-link to="/register" tag="button">Register</router-link>
    <main>
      <div>
         <form class="login" @submit.prevent="login">
           <h1> Register</h1>
           <label>Email</label>
           <input required v-model="email" type="text" placeholder="Snoopy"/>
           <label>Password</label>
           <input required v-model="password" type="password" placeholder="Password"/>
           <hr/>
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

        localStorage.setItem('api_token',response.data.data.api_token);
        localStorage.setItem('user_id',response.data.data.id);
        localStorage.setItem('user_name',response.data.data.name);


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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
