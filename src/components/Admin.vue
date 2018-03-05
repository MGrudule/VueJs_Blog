<template>

  <div >

    <Slideout menu="#navigation" panel="#main" :toggleSelectors="['.toggle-button-nav', '.toggle-button-close-nav']" >
            <nav id="navigation">
              <div>
<button class="toggle-button-close-nav">X</button>
<hr>
                <router-link to="/admin">Manage Articles</router-link>
<hr>
            <router-link to="/admin/new">New Article</router-link>
            <hr>
            <router-link to="/admin/categories">Categories</router-link>

              </div>
            </nav>

    </Slideout>


  <div id="main">


      <header>
          <button class="toggle-button-nav">☰</button>
          <span> Hello {{ user_name}} </span>

      </header>

      <main>
        <!-- Outlet for children routes -->
               <router-view></router-view>

      </main>
  </div>
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
      articles: [],
      loading: false,
      password: '',
      email: '',
      user_name: localStorage.getItem('user_name'),
    }
  }
}
</script>

<style>

</style>
