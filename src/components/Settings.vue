<template>
  <div>
    Settings
    <div>
      <input 
        type="range" 
        min="1" 
        max="30"
        @input="updateValue" 
        v-model="value">
      {{ value * value }} cells
    </div>
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
export default {
  name: 'Settings',
  computed: {
    ...mapGetters([
      'numberCells',
      // 'cellWidth',
      // 'cellHeight'
    ]),
    // value: {
    //   get() {
    //     return this.numberCells
    //   },
    //   set(value) {
    //     console.log(value)
    //   }
    // }
  },
  data () {
    return {
      value: this.$store.getters.numberCells
    }
  },
  methods: {
    updateValue () {
      this.update(this.value)
    },
    ...mapMutations({
      update: 'UPDATE_CELL_NUMBER'
    }),
    process() {
      const img = document.getElementById('sourceImg')
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
      document.body.appendChild(canvas)
      //process(canvas, )
      this.cellWidth = 75
      this.cellHeight = 75
      const res = []
      
      for (let i = 0 ; i < this.numberCells ; i ++) {
        for (let j = 0 ; j < this.numberCells ; j ++) {
          let x = this.cellWidth * i // 0 // 
          let y = this.cellHeight * j // 0
          let destx = x + this.cellWidth // 75
          let desty = y + this.cellHeight // 75
          res.push(canvas.getContext('2d').getImageData(x, y, destx, desty).data)
          // console.log(x,y,destx, desty)
        }
      }
      const colors = []
      for (let i = 0 ; i < res.length ; i ++) {
        const obj = { 
          r: 0, 
          g: 0,
          b: 0,
          a: 0
        }
        for (let j = 0 ; j < res[i].length; j += 4) {
          obj.r = (obj.r + res[i][j]) 
          obj.g = (obj.g + res[i][j+1])
          obj.b = (obj.b + res[i][j+2])
          obj.a = (obj.a + res[i][j+3])
        }
        colors.push(obj)
      }
      // const avg = res.map(el => {
      //   const sum = el.reduce((acc, val) => acc + val, 0) / el.length
      //   return sum
      // })
      const pixel = canvas.getContext('2d').getImageData(0, 0, 1, 1)
      console.log(pixel)

    }
  }
}
</script>