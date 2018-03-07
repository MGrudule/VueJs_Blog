<template>
  <div class="admin-categories">
    <router-link to="/admin">Back to Articles</router-link>

    <form class="edit" @submit.prevent="postCategory(category)">
<label class="label" for="name">Name</label>
<div class="input">
                          <input class="input" required v-model="category.name" type="text" placeholder="Category name">
                        </div>
<div class="row">
                        <div class="col-xs-12 col-md-6">
                                                    <label class="label" for="message">Description</label>



        <textarea class="textarea" required v-model="category.description" type="text" placeholder="Category description"> </textarea>

      </div>
</div>
      <button type="submit">Submit</button>
    </form>
<hr>

    <div  class="">

      <transition-group name="list" tag="p">

        <div v-for="(category, index) in categories" :key="category.id" class="list-item">
          <div class="col-md-6 ">
            <div>
              <h3>{{ category.name }} {{ category.id }}</h3>
              <div v-html="category.description"></div>

              <button  class="" v-on:click="deleteCategory(category.id, index)"> Delete Category </button>
              <router-link tag="button" v-bind:to="'/admin/categories/edit/'+ category.id">Edit</router-link>

            </div>
          </div>
        </div>

      </transition-group>

    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {

  name: 'Categories',

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

    deleteCategory: function (value, index) {
      this.loading = true;
      axios.delete("http://peaceful-dusk-59248.herokuapp.com/api/categories/" + value,
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
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 0.2s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
