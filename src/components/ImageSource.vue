<template>
  <div>
    <img
      ref="img"
      id="sourceImg"
      class="source-img"
      width="100%"
      height="100%"
      @load="loaded"
      :src="imgSource || '/img/icons/simple.jpg'" />
      <!-- <canvas ref="canvas-source" 
        width="100%"
        height="100%" /> -->

  </div>
  
</template>

<script>
export default {
  name: 'ImageSource',
  props: {
    imgSource: String
  },  
  data () {
    return {
      img: this.$refs.img,
      imgReady: false
    }
  },
  mounted() {
    const ctx = this.$refs['canvas-source'].getContext('2d')
    const img = this.$refs.img
    ctx.drawImage(img, 0, 0)
  },
  methods: {
    loaded() {
      this.$emit('onImageLoaded')
    }
  }
}
</script>

<style scoped lang="scss">
.source-img{
  object-fit: cover;
  // display: none;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
