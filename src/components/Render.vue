<template>
  <div>
    <canvas 
      :width="numberCells * cellWidth"
      :height="numberCells * cellHeight"
      ref="canvas" />
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
      'cellHeight',
      'numberCells'
    ])
  },
  mounted() {
    // this.refs.canvas.
    for(let i in this.colors) {
      this.$refs.canvas.getContext('2d').fillStyle = `rgba(${this.colors[i][0]}, ${this.colors[i][1]}, ${this.colors[i][2]},  ${this.colors[i][3]})`
      this.$refs.canvas.getContext('2d').fillRect(this.colors[i].x, this.colors[i].y, this.cellWidth, this.cellHeight)
    }
  }
}
</script>