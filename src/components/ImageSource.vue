<template>
  
  <img
    ref="img"
    id="sourceImg"
    class="source-img"
    width="100%"
    height="100%"
    @load="loaded"
    :src="imgSource || '/img/icons/simple.jpg'" />
  
</template>

<script>
import {mapGetters} from 'vuex'
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
