<template>
  <div id="app">
    <RenderContainer />
    <div v-for="(item, index) in list" :key="index">
      {{ item }}
      <button @click="UPDATE_LIST_ITEM({ val: 'ok', ...item })"> update </button>
    </div>
    <button @click="ADD_LIST({id: getIdx(), name: 'ajsdfha'})">ADD</button>
    <!-- <div class="container controls">
      <ImageSource/>
      <Settings />
    </div>
    <div 
      class="container"
      v-for="(render, index) in renderers" 
      :key="index">
      <Render       
        :data="render"/>
    </div> -->
  </div>
</template>

<script>
// import ImageSource from '@/components/ImageSource.vue'
// import Settings from '@/components/Settings.vue'
// import Render from '@/components/Render.vue'
import RenderContainer from '@/components/RenderContainer.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    RenderContainer
  },
  computed: {
    ...mapGetters([
      'renderers', 
      'list'
    ]),
    renderersReversed() {
      return this.renderers.reverse()
    }
  },
  methods: {
    ...mapMutations([
      'ADD_LIST',
      'UPDATE_NAME'
    ]),
    ...mapActions([
      'UPDATE_LIST_ITEM'
    ]),
    getIdx() {
      this.idx += 1
      return this.idx
    }
  },
  data() {
    return {
      drawer: false,
      direction: 'rtl',
      idx:1
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
