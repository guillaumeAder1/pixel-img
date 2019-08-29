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
      'numberCells'
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
      const pixel = canvas.getContext('2d').getImageData(0, 0, 10, 10)
      console.log(pixel)

    }
  }
}
</script>