<template>
  <div class="main">
    <img
      ref="img"
      id="sourceImg"
      class="source-img"
      width="100%"
      height="100%"
      @load="imgReady = true"
      :src="imgSource || '../img/simple.jpg'" />
    <ImageGrid v-if="imgReady"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ImageGrid from '@/components/ImageGrid'
export default {
  components: {
    ImageGrid
  },
  name: 'ImageSource',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters([
      'imgSource'
    ])
  },
  data () {
    return {
      img: this.$refs.img,
      imgReady: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
