<template>
  <div class="render">
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
import { mapGetters } from 'vuex'
export default {
  name: 'ImageRender',
  computed: {
    ...mapGetters([
      'numberCells'
    ]),
  },
  // watch: {
  //   numberCells(val, oldVal) {
  //     console.log(typeof val)
  //   }
  // }
}
</script>
<style lang="scss">
.render{
  .pixel{
    &-red{
      box-shadow:0px 0px 0px 0.1px black inset;
      float: left;
    }
  }
}
</style>