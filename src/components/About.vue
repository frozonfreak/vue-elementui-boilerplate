<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <h2 v-if="$route.params.text">Data from URL Paramter {{$route.params.text}} </h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'About Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
</style>
