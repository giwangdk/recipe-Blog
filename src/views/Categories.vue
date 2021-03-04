<template>
  <div class="categories">
    <Navbar />
      <div class="container">
      <div class="row">
          <div class="col-lg-4 col-sm-6 p-0 d-flex justify-content-center align-items-center" v-for="recipe in recipes" :key="recipe.id">
            <CardRecipe :recipe="recipe"/>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Navbar from "@/components/Navbar.vue";;
  import CardRecipe from "@/components/CardRecipe.vue";
  import axios from "axios";

  export default {
    name: "Categories",
    components: {
      Navbar,
      CardRecipe
    },
    data(){
      return{
        recipes:[]
      }
    },
    methods:{
      setRecipe(data){
        this.recipes = data
      }
    },
    mounted(){
      axios
      .get("http://localhost:3000/meals")
      .then((response)=>this.setRecipe(response.data))
      .catch((err)=>console.log(err))
    }
  };
</script>