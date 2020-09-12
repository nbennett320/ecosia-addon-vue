<template>
  <div 
    id="ew--container" 
    class="ew--card-container"
  >
    <!-- replace me! -->
    <ExampleComponent 
      :query="query"
      
    />
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

<style>
@import '../assets/css/styles.css';
#ew--container {
  padding: 0;
}
</style>