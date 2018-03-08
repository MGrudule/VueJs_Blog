<template>

  <div >
<!-- mobile navigation -->
    <Slideout v-if="$mq === 'mobile'" menu="#navigation" panel="main" :toggleSelectors="['.toggle-button-nav', '.toggle-button-close-nav']" >

          <nav id="navigation">

          <button class="toggle-button-close-nav">X</button>
          <hr>
          <router-link to="/admin/profile">Profile</router-link>
          <hr>
          <router-link to="/admin">Manage Articles</router-link>
          <hr>
          <router-link to="/admin/new">New Article  ✏ </router-link>
          <hr>
          <router-link to="/admin/categories">Categories</router-link>

          </nav>

    </Slideout>


    <nav v-if="$mq === 'md'" id="navigation">

    <router-link tag="button" to="/admin/profile">Profile</router-link>

    <router-link tag="button" to="/admin">Manage Articles</router-link>

    <router-link tag="button" to="/admin/new">New Article</router-link>

    <router-link tag="button" to="/admin/categories">Categories</router-link>

    </nav>

    <button v-if="$mq === 'mobile'" class="toggle-button-nav">☰</button>
    <main>




            <!-- Outlet for children routes -->
                   <router-view  v-on:change="updateUser()"></router-view>

    </main>

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
      loading: false,
      user_name: localStorage.getItem('user_name'),

    }
  },

  methods: {
    updateUser: function () {

      this.user_name = localStorage.getItem('user_name')
    }
  }
}
</script>

<style>

</style>
