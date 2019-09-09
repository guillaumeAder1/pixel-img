<template>
  <div id="app">
    <RenderContainer 
      v-for="(img, index) in imgList"
      :itemid="index"
      :key="index" />
    <div>
      <button @click="NEW_IMG_LIST({id: index})">NEW PIXEL</button>
      <button>NEW FILTER</button>
    </div>  
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
      'list',
      'imgList'
    ])
  },
  methods: {
    ...mapMutations([
      'ADD_LIST',
      'UPDATE_NAME',
      'NEW_IMG_LIST'
    ]),
    ...mapActions([
      'UPDATE_LIST_ITEM'
    ]),
    getIdx() {
      this.idx += 1
      return this.idx
    }
  },
  mounted() {
    this.NEW_IMG_LIST({ id:1 })
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
