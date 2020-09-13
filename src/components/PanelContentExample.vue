<template>
  <div class="ew--panel">
    <h5 class="ew--panel-header ew--panel-title">
      Ecosia Addon in Vue
    </h5>
    <h6 class="ew--panel-header ew--panel-subtitle">
      This is the panel component
    </h6>
    <p class="ew--panel-text"> 
      {{ query }} 
    </p>
  </div>
</template>

<script>
export default {
  name: "PanelContentExample",
  props: {
    query: String
  }
}
</script>