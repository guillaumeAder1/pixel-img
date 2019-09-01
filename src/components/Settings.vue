<template>
  <div>
    Settings
    <div>
      <input 
        type="range" 
        min="1" 
        max="50"
        @input="updateValue" 
        v-model="value">
      {{ value * value }} cells
    </div>
    <input type="file" @change="processFile($event)">

    <div>
      <button @click="process">process</button>
    </div>
  </div>
</template>
<script>
import { 
  mapGetters, 
  mapMutations 
} from 'vuex'

import { processImg } from '@/helpers/processing'
export default {
  name: 'Settings',
  computed: {
    ...mapGetters([
      'numberCells',
      'cellWidth',
      'cellHeight'
    ])
  },
  data () {
    return {
      value: this.$store.getters.numberCells,
      filePath: ''
    }
  },
  methods: {
    processFile(event) {
      this.filePath = event.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e) => {
        this.setImageSource(e.target.result)
      }
      console.log(this.filePath)
    },
    updateValue () {
      this.update(this.value)
    },
    ...mapMutations({
      update: 'UPDATE_CELL_NUMBER',
      setColorData: 'SET_COLOR_DATA',
      setImageSource: 'SET_IMG_SOURCE'
    }),
    process() {
      const img = document.getElementById('sourceImg')
      const canvas = document.createElement('canvas');
      const { colors, res } = processImg( img, canvas,  this.cellHeight, this.cellWidth, this.numberCells)
      this.setColorData(colors)
     
      // for(let i in colors) {
      //   c.fillStyle = `rgb(${colors[i][0]}, ${colors[i][1]}, ${colors[i][2]})`
      //   c.fillRect(res[i].x, res[i].y, this.cellWidth, this.cellHeight)
      // }
    }
  }
}
</script>