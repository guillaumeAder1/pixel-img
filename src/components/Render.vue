<template>
  <div>
    <canvas 
      id='render-canvas' 
      :width="this.data.width"
      :height="this.data.height"
      ref="canvas" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Render',
  props: {
    data: Object
  },
  computed: {
    ...mapGetters([
      'cellWidth',
      'cellHeight',
      'numberCells'
    ])
  },
  mounted() {
    // this.refs.canvas.
    for(let i in this.data.colors) {
      this.$refs.canvas.getContext('2d').fillStyle = `rgb(${this.data.colors[i][0]}, ${this.data.colors[i][1]}, ${this.data.colors[i][2]})`
      this.$refs.canvas.getContext('2d').fillRect(this.data.colors[i].x, this.data.colors[i].y, this.cellWidth, this.cellHeight)
    }
  }
}
</script>