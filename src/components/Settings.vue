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
    })
  }
}
</script>