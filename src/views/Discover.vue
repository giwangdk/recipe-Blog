<template>
  <div class="discover">
    <Navbar />
    <div class="container">
      <div class="card-category" v-for="category in categories" :key="category.id">
        <CardCategory :category="category"/>
        <CardRecipe :recipe="recipe" v-show="setRecipes"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  import CardCategory from "@/components/CardCategory.vue";
  import CardRecipe from "@/components/CardRecipe.vue";
  import axios from 'axios';
  export default {
    name: "Discover",
    components: {
      Navbar,
      CardCategory,
      CardRecipe
    },
    data() {
      return {
        categories: [],
        recipe:[]
      }
    },
    methods: {
      setCategory(data) {
        this.categories = data
      },
      setRecipe(){
        axios
      .get("http://localhost:3000/meals/?=" + this.categories.strCategory)
      .then((response)=>this.recipes(response.data))
      .catch((err)=>console.log(err))
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