<template>
  <div class="card">
          <div class="row">
            <div class="col-5">
              <img :src="category.strCategoryThumb" alt="">
            </div>
            <div class="col-7">
              <h1>{{category.strCategory}}</h1>
              <p class="text-muted">{{category.strCategoryDescription}}</p>
            </div>
          </div>
  </div>
</template>

<script>
export default {
props:['category']
}
</script>

<style>

</style>