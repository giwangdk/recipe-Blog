<template>
  <div class="home">
    <Navbar />
    <Header />

    <main>
      <div class="container">
        <div class="discover-title">
          <div class="discover-header d-flex flex-column justify-content-center align-items-center">
            <h1>Discover Recipes</h1>
          </div>
        </div>
        <DiscoverMonth />

      <div class="best-cook mt-5">
        <div class="row">
          <div class="col">
            <h3>What do you want to cook?</h3>
          </div>
        </div>
        <div class="row ">
          <div class="col-lg-4 col-sm-6 p-0 d-flex justify-content-center align-items-center" v-for="recipe in recipes" :key="recipe.id">
            <CardRecipe :recipe="recipe"/>
          </div>
        </div>
      </div>
      
      </div>
    </main>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Navbar from "@/components/Navbar.vue";
  import Header from "@/components/Header.vue";
  import DiscoverMonth from "@/components/DiscoverMonth.vue";
  import CardRecipe from "@/components/CardRecipe.vue";
  import axios from "axios";

  export default {
    name: "Home",
    components: {
      Navbar,
      Header,
      DiscoverMonth,
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
      .get("http://localhost:3000/Bestmeals")
      .then((response)=>this.setRecipe(response.data))
      .catch((err)=>console.log(err))
    }
  };
</script>