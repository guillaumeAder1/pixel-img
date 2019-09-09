<template>
  <div class="container controls">
    <div>
      <canvas 
        v-if="canvasLoaded" 
        :width="canvasW"
        :height="canvasH"
        ref="filterCanvas" />
    </div>
    
    <div>
      <input type="file" ref="file" @change="loadImage" />
    </div>

    <div 
      class="slider-container"
      v-if="canvasLoaded">
      <template v-for="(filter) in filters">
        <div 
          class="slider"
          :key="filter.label">
          <div>
            <input 
              type="range"
              :min="filter.min"
              :max="filter.max"
              orient="vertical"
              v-model="dataFilter[filter.label]"
              @input="updateFilter(filter.label)"
              />
          </div>
          <div> 
            {{filter.label}}
          </div>
        </div>
      </template>
    </div>

  </div>
</template>
<script>
import { filters } from './filter'
const dataFilter = []
filters.forEach(e => {
  dataFilter[e.label] = e.default
})
export default {
  components: {
  },
  props: {
  },
  data () {
    return {
      canvasLoaded: false,
      canvasW: 200,
      canvasH: 186,
      img: null,
      filters: filters,
      dataFilter: dataFilter
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
          this.canvasLoaded = true  
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
          // document.body.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    },
    updateFilter (label) {
      this.$refs.filterCanvas.getContext('2d').clearRect(0, 0, this.img.width, this.img.height);
      const values = this.filters.map(e => {
        return {
          val: e.template.replace('{0}', this.dataFilter[e.label])
        }
      })
      // console.log(values.map(e => e.val).join(' '))
      this.$refs.filterCanvas.getContext('2d').filter = values.map(e => e.val).join(' ')
      this.$refs.filterCanvas.getContext('2d').drawImage(this.img, 0, 0, this.img.width, this.img.height)
    }
  },
  name: 'RenderContainer'
}
</script>
<style lang="scss">
.slider-container{
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  div.slider{
    flex: 0 0 120px;
    // border: 1px solid red;
    > div:nth-child(2) {
      // border: 1px solid blue;
      background: rgb(215, 215, 215);
    }
  }
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
  input[type=range][orient=vertical]{
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* WebKit */
    width: 8px;
    height: 175px;
    padding: 0 5px;
} 
}
  
</style>