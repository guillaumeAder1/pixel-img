<template>
  <div class="imageGrid">
    <div 
      class="pixel"
      :style="{ 
        width: '100%', 
        height: (100 / parseInt(numberCells)) + '%' 
      }"
      v-for="index in parseInt(numberCells)" 
      :key="index">
        <div 
          :style="{ 
            width: (100 / parseInt(numberCells)) + '%', 
            height: '100%' 
          }"
          class="pixel-red"
          v-for="index in parseInt(numberCells)" 
        :key="index">
          <div class="cell"></div>
        </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ImageGrid',
  computed: {
    ...mapGetters([
      'numberCells'
    ]),
  },
  watch: {
    numberCells: {
      immediate: true,
      handler(val) {
        const img = document.getElementById('sourceImg')
        this.set_cellWidth(Math.floor(img.width / val))
        this.set_cellHeight(Math.floor(img.height / val))
      }
    }
  }, 
  methods: {
    ...mapMutations([
      'set_cellWidth',
      'set_cellHeight'
    ])
  }
}
</script>
<style lang="scss">
.imageGrid{
  .pixel{
    &-red{
      box-shadow:0px 0px 0px 0.1px black inset;
      float: left;
    }
  }
}
</style>