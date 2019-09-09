<template>
  <div ref="gridDom" class="imageGrid">
    <div 
      class="pixel"
      :style="{ 
        width: '100%', 
        height: (100 / nbrCells) + '%' 
      }"
      v-for="index in nbrCells" 
      :key="index">
        <div 
          :style="{ 
            width: (100 / nbrCells) + '%', 
            height: '100%' 
          }"
          class="pixel-red"
          v-for="index in nbrCells" 
        :key="index">
          <div class="cell"></div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ImageGrid',
  props: {
    nbrCells: {
      type: Number,
      required: true
    }
  },
  computed: {
    cellWidth() { return this.$refs.gridDom.clientWidth / this.nbrCells  },
    cellHeight() { return this.$refs.gridDom.clientHeight / this.nbrCells  }
  },
  mounted() {
    console.log(this.cellWidth)
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