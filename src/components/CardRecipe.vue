<template>
    <router-link :to="'/recipes/'+recipe.id" class="card mt-3 mx-0" style="width: 18rem;">
        <img :src="recipe.strMealThumb" class="card-img-top w-100" alt="...">
        <div class="card-body p-0">
            <span class="badge rounded-pill bg-success text-white p-2 mt-3">{{ recipe.strCategory }}</span>
            <h5 class="card-title mt-3 ">{{recipe.strMeal }}</h5>
            <p class="card-icon"></p>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "CardRecipe",
        props:['recipe']
    }
</script>

<style>

</style>