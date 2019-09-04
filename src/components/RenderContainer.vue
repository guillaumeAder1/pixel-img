<template>
  <div class="container controls">
    <div class="imageSource">
      <ImageSource :imgSource="srcImg" />
      <ImageGrid  :nbrCells="nbrCells" />
    </div>
    <Settings  
      @onSliderUpdate="updateSlider" 
      @onImageSourceUpdate="updateImageSource"
      />
    <Render/>
  </div>
</template>
<script>
import ImageSource from '@/components/ImageSource'
import ImageGrid from '@/components/ImageGrid'
import Settings from '@/components/Settings'
import Render from '@/components/Render'
import { mapGetters } from 'vuex'
export default {
  components: {
    Settings,
    ImageSource,
    ImageGrid,
    Render
  },
  props: {
    itemid: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      nbrCells: 4,
      srcImg: ''
    }
  },
  computed: {
    ...mapGetters([
      'selectImg'
    ])
  },
  methods: {
    updateSlider (val) {
      this.nbrCells = val
    },
    updateImageSource (path) {
      this.srcImg = path
    }
  },
  name: 'RenderContainer'
}
</script>
<style lang="scss">


.imageSource{ position: relative; }
  .imageGrid {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
  }
  div.container{
    // border: 1px solid red;
    margin: 15px;
    flex: 1;
    background: rgb(242, 242, 242);
    border:1px solid  rgb(223, 223, 223);
    padding: 15px;
    &.controls{
      display: flex;
      > div {
        // flex: 1;
      }
      div.imageSource{
        flex: 0 0 250px;
      }
    }
    canvas{
      border:1px solid  rgb(126, 126, 126);
    }
  } 
</style>