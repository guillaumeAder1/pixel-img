<template>
  <div>
    <canvas ref="canvas" />
  </div>
</template>
<script>
export default {
  name: 'Render',
  props: {
    colors: Array
  },
}
</script>