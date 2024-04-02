<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <a href="https://example.org" target="_blank" rel="noopener">
      <button>Go to Vue.js</button>
    </a>
    <!-- Button to navigate to other page -->
    <a href="https://example.com" target="_blank" rel="noopener">
      <button>Others</button>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
button {
  background-color: #42b983;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 8px;
  border: 0px;
}
</style>
