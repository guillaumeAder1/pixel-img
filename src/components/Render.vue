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
  mounted() {
    // this.refs.canvas.
    for(let i in this.colors) {
      this.$refs.canvas.fillStyle = `rgb(${this.colors[i][0]}, ${this.colors[i][1]}, ${this.colors[i][2]})`
      this.$refs.canvas.fillRect(res[i].x, res[i].y, this.cellWidth, this.cellHeight)
    }
  }
}
</script>