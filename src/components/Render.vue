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