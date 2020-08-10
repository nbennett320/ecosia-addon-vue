<template>
  <div class="v-ecosia-component">
      <i> Ecosia Addon in Vue says: </i>
      <p class="v-component-content"> {{ query }} </p>
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

<style scoped>
.v-ecosia-component {
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #aaa;
}

.v-component-content {
  margin: 0;
  font-size: 24px;
  color: #4a4a4a;
}
</style>