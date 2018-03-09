<template>
  <div class="admin-categories section">

<router-link tag="button" to="/admin">Back to Articles</router-link>
    <form class="edit" @submit.prevent="postCategory(category)">

      <label class="label" for="name">Name</label>
      <div class="input">
        <input class="input" required v-model="category.name" type="text" placeholder="Category name">
      </div>


          <label class="label" for="message">Description</label>


        <div class="textarea">
        <textarea  required v-model="category.description" type="text" placeholder="Category description"> </textarea>
        </div>

      <button type="submit">Submit</button>
    </form>


    <hr>


      <transition-group name="list" tag="div" class="row">

        <div v-for="(category, index) in categories" :key="category.id" class="list-item col-md-3" >

              <h4>{{ category.name }} </h4>
              <p class="text-x-small" v-html="category.description"></p>

            <EditCategory :data="categories, category"  v-bind:index="index" v-on:deleted="deleteCategory(index)"></EditCategory>
        </div>

      </transition-group>


  </div>
</template>

<script>

import axios from 'axios'
import EditCategory from "./EditCategory.vue"


export default {

  name: 'Categories',
  components: {
     'EditCategory': EditCategory ,

   },

  data () {
    return {

      category: [],
      categories: [],
      loading: false,
      name: '',
      description: '',
      user_id: localStorage.getItem('user_id'),

    }
  },

  mounted(){

        axios.get("https://peaceful-dusk-59248.herokuapp.com/api/categories")

          .then((response)  =>  {

              this.categories = response.data;

            }, (error)  =>  {

              this.loading = false;
        })
      },


  methods: {




    postCategory: function (category) {
      this.loading = true;
        axios.post("https://peaceful-dusk-59248.herokuapp.com/api/categories",
            { name: category.name,
              description: category.description},
            {
                headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
          })

          .then((response)  =>  {

            this.loading = false;

            this.categories.push(response.data)
          }, (error)  =>  {
            this.loading = false;
          })
        },
        deleteCategory: function (index) {

          var category = this.categories[index];

          this.loading = true;
          axios.delete("https://peaceful-dusk-59248.herokuapp.com/api/categories/" + category.id,
          {
            headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
          })

          .then((response)  =>  {
            this.loading = false;

            this.$delete(this.categories, index)


          }, (error)  =>  {
            this.loading = false;
          })
        },
      },


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
