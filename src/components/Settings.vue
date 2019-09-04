<template>
  <div class="settings">    
    <div>
      <input 
        type="range" 
        min="1" 
        max="50"
        @input="updateValue" 
        v-model="value">
      {{ value * value }} cells
    </div>
    <div>
      <input type="file" @change="processFile($event)">
    </div>
    <div>
      <button @click="process">process</button>
    </div>
  </div>
</template>
<script>
import { 
  mapGetters, 
  mapMutations,
  mapActions
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
      const filePath = event.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(filePath);
      reader.onload = e => this.$emit('onImageSourceUpdate', e.target.result)
    },
    updateValue () {
      this.$emit('onSliderUpdate', parseInt(this.value))
    },
    process() {
      const img = document.getElementById('sourceImg')
      const canvas = document.createElement('canvas');
      const { colors } = processImg(img, canvas, this.cellHeight, this.cellWidth, this.numberCells)
      this.ADD_NEW_RENDER(colors)
      this.setColorData({
        colors, 
        width: this.cellWidth * this.numberCells, 
        height: this.cellHeight * this.numberCells 
      })
    }
  }
}
</script>
<style lang="scss">
.settings{
  display: flex;
  flex: 0 0 25%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 20px;
  > div {
    padding: 5px 0;
  }

  input[type=range] {
    // transform-origin: left;
    // transform: rotate(90deg);
  }
}


</style>