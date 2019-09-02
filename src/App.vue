<template>
  <div id="app">
    <div class="container controls">
      <ImageSource/>
      <Settings />
    </div>
    <div 
      class="container"
      v-for="(render, index) in renderers" 
      :key="index">
      <Render       
        :data="render"/>
    </div>
  </div>
</template>

<script>
import ImageSource from '@/components/ImageSource.vue'
import Settings from '@/components/Settings.vue'
import Render from '@/components/Render.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    ImageSource,
    Settings,
    Render
  },
  computed: {
    ...mapGetters([
      'renderers'
    ]),
    renderersReversed() {
      return this.renderers.reverse()
    }
  },
  data() {
    return {
      drawer: false,
      direction: 'rtl',
    };
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: auto;
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
        flex: 1;
      }
      div.imageSource{
        flex: 0 0 250px;
      }
    }
  } 
  canvas{
    border:1px solid  rgb(126, 126, 126);
  }
 
  

  // > div{
  //   &.main{ position:relative; }
  //   flex: 0 0 48%;
  //   border: 1px solid grey;
  //   margin: 0 auto;
  //   img#sourceImg{
  //     float: left;
  //   }
  //   div.render{
  //     position: absolute;
  //     height: 100%;
  //     width: 100%;
  //   }
  // }
}

</style>
