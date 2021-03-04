<template>
  <div class="discover">
    <Navbar/>
    <div class="container">
      <div class="card-category" v-for="category in categories" :key="category.id">
      <div class="row" >
        <div class="col-5">
          <img :src="category.strCategoryThumb" alt="">
        </div>
        <div class="col-7">
          <h1>{{category.strCategory}}</h1>
          <p class="text-muted">{{category.strCategoryDescription}}</p>
        </div>
      </div>

      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from 'axios';
export default {
name: "Discover",
components: {
            Navbar
        },
data(){
  return{
    categories: []
  }
},
methods: {
            setCategory(data) {
                this.categories = data
            }
},
mounted() {
            axios
                .get("http://localhost:3000/categories")
                .then((response) => this.setCategory(response.data))
                .catch((err) => console.log(err))
        }

}
</script>

<style>

</style>