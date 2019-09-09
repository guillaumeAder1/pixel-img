<template>
  <div class="container controls">
    <canvas 
      v-if="canvasLoaded" 
      :width="canvasW"
      :height="canvasH"
      ref="filterCanvas" />
    <input type="file" ref="file" @change="loadImage" />
    <input 
      @input="blurFilter" 
      v-model="blur"
      type="range" 
      min="0" 
      max="100" 
      ref="blur" />
  </div>
</template>
<script>

export default {
  components: {
  },
  props: {
  },
  data () {
    return {
      canvasLoaded: true,
      canvasW: 200,
      canvasH: 186,
      blur: 0,
      img: null
    }    
  },
  computed: {
  },
  methods: {
    loadImage(e) {
      if (e.target.files[0]) {
        const file = e.target.files[0]
        var reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image(this.canvasW, this.canvasH)
          img.onload = () => {
            const canvas = this.$refs.filterCanvas
            const ctx = canvas.getContext('2d')
            img.style.objectFit = 'cover'
            canvas.width = img.width
            canvas.height = img.height
            ctx.drawImage(img, 0, 0, img.width, img.height)
          }
          img.src =  e.target.result
          this.img = img
          document.body.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    },
    blurFilter() {
      console.log(this.blur)
      this.$refs.filterCanvas.getContext('2d').clearRect(0, 0, this.img.width, this.img.height);
      this.$refs.filterCanvas.getContext('2d').filter = `blur(${this.blur}px)`
      this.$refs.filterCanvas.getContext('2d').drawImage(this.img, 0, 0, this.img.width, this.img.height)
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