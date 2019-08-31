<template>
  <div id="app">
    <ImageSource/>
    <Settings />
    <Render 
      v-for="(render, index) in renderers" 
      :key="index"
      :colors="render" />
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
    ])
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
  margin: auto;
  > div{
    &.main{ position:relative; }
    flex: 0 0 48%;
    border: 1px solid grey;
    margin: 0 auto;
    img#sourceImg{
      float: left;
    }
    div.render{
      position: absolute;
      height: 100%;
      width: 100%;
    }
  }
}

</style>
