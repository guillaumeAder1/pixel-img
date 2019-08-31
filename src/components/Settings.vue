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
      'cellWidth',
      'cellHeight'
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
      // document.body.appendChild(canvas)
      const res = []
      let c = document.createElement('canvas')
      c.width =  canvas.width
      c.height = canvas.height
      document.body.appendChild(c)
      c = c.getContext('2d')

      for (let i = 0 ; i < this.numberCells ; i ++) {
        for (let j = 0 ; j < this.numberCells ; j ++) {
          let x = this.cellWidth * i 
          let y = this.cellHeight * j
          let destx = x + this.cellWidth 
          let desty = y + this.cellHeight 
          // res.push(canvas.getContext('2d').getImageData(x, y, destx, desty).data)

          console.log(x,y,destx, desty)
         
          // c.getContext('2d').drawImage(img,x, y, destx, desty,x, y, destx, desty)
          let src = canvas.getContext('2d').getImageData(x, y, this.cellWidth, this.cellHeight)
          c.putImageData(src, x, y)

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
          obj.r += res[i][j]
          obj.g += res[i][j+1]
          obj.b += res[i][j+2]
          obj.a += res[i][j+3]
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