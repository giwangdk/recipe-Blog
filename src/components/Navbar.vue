<template>
<div class="nav">
      <div class="container p-0">
    <nav class="navbar navbar-expand-lg">
      <router-link to="/" class="navbar-brand">Cooking.</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse  " id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active ">
            <router-link to="/" class="nav-link ml-3">Home</router-link>
          </li>
          <li class="nav-item ">
            <router-link to="/discover" class="nav-link ">Discover</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/categories" class="nav-link ">Categories</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link ">About</router-link>
          </li>
        </ul>
      </div>

      <div class="search-recipe">
        <BIconSearch></BIconSearch>
        <input type="text" class="input w-75 p-1" placeholder="search recipes..">
      </div>
  </nav>
</div>
</div>

</template>

<script>
export default {
name: "Navbar"
}
</script>

<style>

</style>