<template>
  <div id="v-ecosia-widget-container" class="widget-container">
    <!-- replace me! -->
    <ExampleComponent :query="query" />
    <Footer />
  </div>
</template>

<script>
import { ExampleComponent, Footer } from '../components'
export default {
  name: "Widget",
  components: {
    ExampleComponent,
    Footer
  },
  props: {
    query: String
  }
}
</script>

<style scoped>
#v-ecosia-widget-container {
  padding: 0;
}
</style>