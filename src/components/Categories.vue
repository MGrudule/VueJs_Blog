<template>
  <div class="admin-categories">
  <router-link to="/admin">Back to Articles</router-link>
 <form class="edit" @submit.prevent="postCategory(category)">

   <p>
     <input required v-model="category.name" type="text" placeholder="Category name">

   </p>
   <p>
     <textarea required v-model="category.description" type="text" placeholder="Category description"> </textarea>

   </p>

   <button type="submit">Submit</button>
 </form>
 <div class="row">
     <div v-for="category in categories" :key="category.id">
       <div class="col-md-4 cards">


         <div>
           <h3>{{ category.name }}</h3>
           <div v-html="category.description"></div>

           <button  class="" v-on:click="deleteCategory(category.id)"> Delete Category</button>
             <router-link tag="button" v-bind:to="'/admin/categories/edit/'+ category.id">Edit</router-link>

         </div>
       </div>
   </div>
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
    deleteCategory: function (value) {



      this.loading = true;
      axios.delete("http://peaceful-dusk-59248.herokuapp.com/api/categories/" + value,
    {
    headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
    })

      .then((response)  =>  {
      console.log(response),

       this.categories.splice(this.categories.indexOf(value), 1);
      //remove(article + "." + value);


      }, (error)  =>  {
        this.loading = false;
      })
    },

    postCategory: function (category) {
console.log({name: category.name,
 description: category.description}),

      axios.post("https://peaceful-dusk-59248.herokuapp.com/api/categories",
    {name: category.name,
     description: category.description},{
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

</style>
