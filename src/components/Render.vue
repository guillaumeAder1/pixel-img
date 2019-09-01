<template>
  <div>
    <canvas id='render-canvas' ref="canvas" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Render',
  props: {
    colors: Array
  },
  computed: {
    ...mapGetters([
      'cellWidth',
      'cellHeight'
    ])
  },
  mounted() {
    // this.refs.canvas.
    for(let i in this.colors) {
      this.$refs.canvas.getContext('2d').fillStyle = `rgb(${this.colors[i][0]}, ${this.colors[i][1]}, ${this.colors[i][2]})`
      this.$refs.canvas.getContext('2d').fillRect(this.colors[i].x, this.colors[i].y, this.cellWidth, this.cellHeight)
    }
  }
}
</script>