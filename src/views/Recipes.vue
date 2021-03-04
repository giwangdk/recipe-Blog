<template>
    <div id="recipe">
        <Navbar />
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>
                        {{ recipes.strMeal }}
                    </h1>
                </div>
            </div>

            <div class="card-recipes">
                <div class="row">
                    <div class="col-5 mr-3">
                        <h5>Ingredients</h5>
                        <div class="row">
                            <div class="col-6">
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
                            <div class="col-12">
                                <iframe width="420" height="315" :src="recipes.strYoutube">
                                </iframe>
                            </div>

                        </div>
                    </div>
                    <div class="col-6">
                        <img :src="recipes.strMealThumb" class=" w-100" alt="">
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