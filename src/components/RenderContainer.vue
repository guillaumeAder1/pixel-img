<template>
  <div class="container controls">
    <ImageSource />
    <Settings />
    <Render />
  </div>
</template>
<script>
// import ImageGrid from '@/src/components/ImageGrid'
import ImageSource from '@/components/ImageSource'
import Settings from '@/components/Settings'
import Render from '@/components/Render'
export default {
  components: {
    // ImageGrid,
    Settings,
    ImageSource,
    Render
  },
  name: 'RenderContainer'
}
</script>
<style lang="scss">


.imageSource{ position: relative; }
  .imageGrid {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
  }
  div.container{
    // border: 1px solid red;
    margin: 15px;
    flex: 1;
    background: rgb(242, 242, 242);
    border:1px solid  rgb(223, 223, 223);
    padding: 15px;
    &.controls{
      display: flex;
      > div {
        // flex: 1;
      }
      div.imageSource{
        flex: 0 0 250px;
      }
    }
    canvas{
      border:1px solid  rgb(126, 126, 126);
    }
  } 
</style>