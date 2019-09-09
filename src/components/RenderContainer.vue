<template>
  <div class="container controls">
    <div class="imageSource">
      <ImageSource 
        :imgSource="srcImg"
        ref="srcCanvas"
        @onImageLoaded="onImageLoaded"
        />
      <ImageGrid 
        v-if="imgLoaded" 
        :nbrCells="nbrCells" 
        ref="grid"/>
    </div>
    <Settings  
      @onSliderUpdate="updateSlider" 
      @onImageSourceUpdate="updateImageSource"
      @onProcess="process"
      />
    <div class="render-container">
      <Render 
        v-for="(render, index) in renderList"
        :key="render.id"
        :data="render"
        @delete="deleteRender(render, index)"
      />
    </div>
  </div>
</template>
<script>
import { processImg } from '@/helpers/processing'
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
      srcImg: '',
      srcCanvas: '',
      imgLoaded: false,
      renderList: []
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
    },
    onImageLoaded () {
      this.imgLoaded = true
    },
    process () {
      const img = this.$refs.srcCanvas.$refs.img
      const canvas = document.createElement('canvas');
      const { colors } = processImg(img, canvas, this.nbrCells)
      this.renderList.push({
        colors,
        width: img.width, 
        height: img.height,
        nbrCells: this.nbrCells,
        id: this.nbrCells + Math.floor((Math.random()*10000))
      })
    },
    deleteRender(render, index) {
      // this.renderList.splice(index, 1)
      this.$delete(this.renderList, index)
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
      div.imageSource{
        flex: 0 0 250px;
      }
    }
   .render-container {   
      display: flex;
      flex-direction: row;
      
      div{
        display: flex;
        margin: 0 5px;
      }
    } 
  } 
</style>