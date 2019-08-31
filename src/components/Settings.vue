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

          // console.log(x,y,destx, desty)
        
          let src = canvas.getContext('2d').getImageData(x, y, this.cellWidth, this.cellHeight)
          res.push({
            src:src.data, 
            x, 
            y
          })
          // c.putImageData(src, x, y)
        }
      }
      // console.log(res)
      const colors = []

      const total = res[0].src.length
      for (let i = 0 ; i < res.length ; i ++) {
        const obj = { 
          r: 0, 
          g: 0,
          b: 0,
          a: 0
        }
        for (let j = 0 ; j < res[i].src.length; j += 4) {
          obj.r += res[i].src[j]
          obj.g += res[i].src[j+1]
          obj.b += res[i].src[j+2]
          obj.a += res[i].src[j+3]
        }
        const formated = Object.keys(obj).map(e => {
          return Math.floor(obj[e] / (total/4))
        })
        colors.push(formated)
      }
      for(let i in colors) {
        c.fillStyle = `rgb(${colors[i][0]}, ${colors[i][1]}, ${colors[i][1]})`
        c.fillRect(res[i].x, res[i].y, this.cellWidth, this.cellHeight)
      }
    }
  }
}
</script>