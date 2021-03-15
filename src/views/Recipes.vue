<template>
    <div id="recipe">
        <Navbar />
        <div class="container recipe-detail">
            <div class="button-back">
                <router-link to="/categories" class="btn btn-success button-back">Back </router-link>
            </div>
            <div class="row image-recipe mt-2">
                    <div class="col ">
                        <img :src="recipes.strMealThumb" class=" w-100" alt="">
                    </div>
                </div>

            <div class="card-recipes mt-4">
            <div class="row">
                <div class="col">
                    <h1 class="title">
                        {{ recipes.strMeal }}
                    </h1>
                </div>
            </div>
                <div class="row ingredient">
                    <div class="col-5 mr-3">
                        <h3>Ingredients</h3>
                        <div class="row text-muted">
                            <div class="col-6 ">
                                <ul>
                                    <li>{{recipes.strIngredient1}}</li>
                                    <li>{{recipes.strIngredient2}}</li>
                                    <li>{{recipes.strIngredient3}}</li>
                                    <li>{{recipes.strIngredient4}}</li>
                                    <li>{{recipes.strIngredient5}}</li>
                                    <li>{{recipes.strIngredient6}}</li>
                                    <li>{{recipes.strIngredient7}}</li>
                                    <li>{{recipes.strIngredient8}}</li>
                                    <li>{{recipes.strIngredient9}}</li>
                                </ul>
                            </div>
                            <div class="col-6">
                                <ul>
                                    <li>{{recipes.strMeasure1}}</li>
                                    <li>{{recipes.strMeasure2}}</li>
                                    <li>{{recipes.strMeasure3}}</li>
                                    <li>{{recipes.strMeasure4}}</li>
                                    <li>{{recipes.strMeasure5}}</li>
                                    <li>{{recipes.strMeasure6}}</li>
                                    <li>{{recipes.strMeasure7}}</li>
                                    <li>{{recipes.strMeasure8}}</li>
                                    <li>{{recipes.strMeasure9}}</li>
                                </ul>

                            </div>

                        </div>
                    </div>
                    <div class="col-6">
                        <h3 class="">Instructions</h3>
                        <p class="text-muted">{{recipes.strInstructions}}</p>
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
        name: "Recipe",
        components: {
            Navbar
        },
        data() {
            return {
                recipes: []
            }
        },
        methods: {
            setRecipe(data) {
                this.recipes = data
            }
        },
        mounted() {
            axios
                .get("http://localhost:3000/meals/" + this.$route.params.id)
                .then((response) => this.setRecipe(response.data))
                .catch((err) => console.log(err))
        }
    }
</script>

<style>

</style>