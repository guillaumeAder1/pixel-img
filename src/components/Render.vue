<template>
  <div class="el">
    <canvas 
      :width="this.data.width"
      :height="this.data.height"
      ref="canvas" />
      <a class="download-btn" ref="btn" @click="download" download="img.png">download</a>
      <a class="remove-btn" @click="remove">delete</a>
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
    },
    remove() {
      this.$emit('delete')
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
a{
  cursor: pointer;
  display: none;
  position: absolute;
  bottom: 0;
  background: white;
  padding: 5px;
  &.download-btn{
    margin: 0 auto;
    right: 0;
  }
  &.remove-btn{margin: 0 auto;}
}

</style>