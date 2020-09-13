<template>
  <div class="ew--panel-container">
    <!-- replace me! -->
    <PanelContentExample 
      :query="query"
    />
    <PanelFooter />
  </div>
</template>

<script>
import PanelContentExample from './PanelContentExample'
import PanelFooter from './PanelFooter'
export default {
  name: "Panel",
  components: {
    PanelContentExample,
    PanelFooter
  },
  props: {
    query: String
  }
}
</script>