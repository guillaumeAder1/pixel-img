<template>
  <div id="app">
  
    <ImageSource/>
    <ImageRender />
    <Settings />
  </div>
</template>

<script>
import ImageSource from './components/ImageSource.vue'
import ImageRender from './components/ImageRender.vue'
import Settings from './components/Settings.vue'


export default {
  name: 'app',
  components: {
    ImageSource,
    Settings,
    ImageRender
  },
  data() {
    return {
      drawer: false,
      direction: 'rtl',
    };
  },
  methods: {

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
  // flex: 0 0 100%;
  > div{
    flex: 0 0 32%;
    border: 1px solid grey;
    margin: 0 auto;
  }
}

</style>
