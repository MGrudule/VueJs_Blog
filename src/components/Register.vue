<template>
  <div id="main">
  <header>
      <span>One page blog</span>
      <span> Hello {{ user_name}} </span>
    </header>
<router-link to="/login" tag="button">Login</router-link> <router-link to="/register" tag="button">Register</router-link>
    <main>
      <div>
         <form class="register" @submit.prevent="register">
           <h1> Register</h1>
           <label>Name</label>
           <input required v-model="name" type="text" placeholder="Name"/>
           <label>Email</label>
           <input required v-model="email" type="email" placeholder="Email"/>
           <label>Password</label>
           <input required v-model="password" type="password" placeholder="Password"/>
           <input required v-model="password_c" type="password" placeholder="Password "/>
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
 self.$router.push('/admin');

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
