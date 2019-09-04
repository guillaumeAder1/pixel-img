<template>
  <div>
    <canvas 
      :width="this.data.width"
      :height="this.data.height"
      ref="canvas" />
      <a ref="btn" @click="download" download="img.png">download</a>
  </div>
</template>
<script>
export default {
  name: 'Render',
  props: {
    data: Object
  },
  computed: {
    cellWidth() { return Math.floor(this.data.width / this.data.nbrCells)},
    cellHeight() { return Math.floor(this.data.height / this.data.nbrCells)}
  },
  mounted() {
    // this.refs.canvas.
    const ctx = this.$refs.canvas.getContext('2d')
    for(let i in this.data.colors) {
      ctx.fillStyle = `rgb(${this.data.colors[i][0]}, ${this.data.colors[i][1]}, ${this.data.colors[i][2]})`
      ctx.fillRect(this.data.colors[i].x, this.data.colors[i].y, this.cellWidth, this.cellHeight)
    }
  },
  methods: {
    download () {
      const data = this.$refs.canvas.toDataURL('image/jpg')
      this.$refs.btn.href = data
    }
  }
}
</script>
<style>
.btn{
  border: 1px solid grey;
}
</style>