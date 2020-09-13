<template>
  <div class="ew--card-container">
    <!-- replace me! -->
    <CardContentExample 
      :query="query"
    />
    <CardFooter />
  </div>
</template>

<script>
import CardContentExample from './CardContentExample'
import CardFooter from './CardFooter'
export default {
  name: "Card",
  components: {
    CardContentExample,
    CardFooter
  },
  props: {
    query: String
  }
}
</script>