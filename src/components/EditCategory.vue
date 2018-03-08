<template id="EditCategory">
  <div>

    <form  v-show="isActive" class="edit" @submit.prevent="updateCategory(category, index)">

<div>
        <input class="input" type="text" v-model="category.name">
</div>
    <div class="textarea">
        <textarea id="categoryDescription" type="text" v-model="category.description" > </textarea>

      </div>

      <button type="submit">Update</button>
    </form>
    <div class="button-group">

    <button class="button" @click="toggle()">{{buttonText}}</button>
    <button  class="button" v-on:click="deleteCategory(index)"> Delete Category </button> </div>
</div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'EditCategory',
   props: ['categories','category', 'index'],

   data() {
    return {
      isActive: false,
      buttonText: "Edit",
    }},
   methods: {
     toggle() {
       this.isActive = !this.isActive;
       this.buttonText = this.isActive ? 'Close' : 'Edit'
     },
     deleteCategory: function (value, index) {

       this.$emit("deleted", index);
     },

     updateCategory: function (category, index) {
       var params = new URLSearchParams();
     params.append('name', category.name);
     params.append('description', category.description);

       this.loading = true;
       axios.put("http://peaceful-dusk-59248.herokuapp.com/api/categories/" + category.id,
             params,
         {
         headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
         })

       .then((response)  =>  {
       this.loading = false;

       }, (error)  =>  {
         this.loading = false;
       })
     }
   }
}
</script>
