<template>
  <div id="app">
    <!-- <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
      open
    </el-button>
    <el-drawer
        title="I am the title"
        :visible.sync="drawer"
        direction="rtl"
        :before-close="handleClose">
      <span>Hi, there!</span>
    </el-drawer> -->
    <ImageSource/>
    <ImageRender />
    <Settings />
  </div>
</template>

<script>
import Vue from 'vue'
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
    handleClose(done) {
      done()
      this.$confirm('Are you sure you want to close this?')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
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
