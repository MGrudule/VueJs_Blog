<template>
  <div>


      <Slideout class="sidebar" side="right" menu="#search"  panel="main" :toggleSelectors="['.toggle-button-search','.toggle-button-close']"  >
          <nav id="search" >
                <div>

                   <ais-index
                app-id="Y7YIBDZQC9"
                api-key="347f9eba674acdd2fa8548acdefed052"
                index-name="articles_index"

                >

                        <header>
                            <div>
                                <button class="toggle-button-close">close</button>

                            </div>
                          </header>

                      <ais-search-box></ais-search-box>

                      <ais-results >
                           <template slot-scope="{ result }">
                             <router-link  v-bind:to="'/articles/'+ result.id">
                               <ais-highlight :result="result" attribute-name="title"></ais-highlight>
                             </router-link>

                              <hr>


                           </template>
                      </ais-results>
                      <ais-powered-by></ais-powered-by>
                </ais-index>

              </div>
          </nav>
    </Slideout>
<div class="align-button">
<button class="toggle-button-search ">🔍</button> </div>

    <main>

      <transition name="slide-fade">  <router-view ></router-view> </transition>
    </main>

</div>
</template>

<script>

import Slideout from 'vue-slideout'

import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Slideout
},

  data () {
    return {
      articles: [],

      user_name: localStorage.getItem('user_name'),
    }
  },
  mounted(){

   axios.get("https://peaceful-dusk-59248.herokuapp.com/api/articles")

   .then((response)  =>  {

     this.articles = response.data;
   }, (error)  =>  {
     this.loading = false;
   })
 }


}
</script>

<style>

</style>
