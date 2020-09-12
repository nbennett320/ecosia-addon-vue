<template>
  <div class="ew--card">
      <h5 class="ew--card-header ew--card-title">
        Ecosia Addon in Vue
      </h5>
      <h6 class="ew--card-header ew--card-subtitle">
        An easier way to plant trees
      </h6>
      <p class="ew--card-text"> 
        {{ query }} 
      </p>
  </div>
</template>

<script>
export default {
  name: "ExampleComponent",
  props: {
    query: String
  }
}
</script>