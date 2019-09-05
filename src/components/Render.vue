<template>
  <div class="el">
    <canvas 
<<<<<<< HEAD
      :width="numberCells * cellWidth"
      :height="numberCells * cellHeight"
=======
      :width="this.data.width"
      :height="this.data.height"
>>>>>>> b1682d91b6f3415e3bf14c056b2f835dcc864169
      ref="canvas" />
      <a class="download-btn" ref="btn" @click="download" download="img.png">download</a>
  </div>
</template>
<script>
export default {
  name: 'Render',
  props: {
    data: Object
  },
  computed: {
    cellWidth() { return this.data.width / this.data.nbrCells},
    cellHeight() { return this.data.height / this.data.nbrCells}
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
<style lang="scss">
.el{
  position: relative;
  &:hover{
    a {
      display: block;
    }
  }
}
a.download-btn{
  cursor: pointer;
  display: none;
  position: absolute;
  bottom: 0;
  background: white;
  padding: 5px;
  margin: 0 auto;
}

</style>