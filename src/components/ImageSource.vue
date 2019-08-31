<template>
  <div class="hello">
   
    <img
      ref="img"
      id="sourceImg"
      class="source-img"
      width="100%"
      height="100%"
      @load="ready"
      src="../assets/josh.jpg" />
    <ImageRender v-if="imgReady"/>

  </div>
</template>

<script>
import ImageRender from '@/components/ImageRender'
export default {
  components: {
    ImageRender
  },
  name: 'ImageSource',
  props: {
    msg: String
  },
  data () {
    return {
      img: this.$refs.img,
      imgReady: false
    }
  },
  methods: {
    ready(e) {
      console.log(e, 'ready')
      this.imgReady = true
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
