<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header/header.vue'
import {urlParse} from './common/js/until'
const ERR_OK = 0

export default {
  data () {
    return {
      seller: {
        id:(() => {
          let queryParam = urlParse()
          // console.log(queryParam)
          return queryParam.id
        })()
      }
    }
  },
  created () {
    this.$http.get('/api/seller?id='+this.seller.id).then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        // 相当于extend方法 
        // es6语法vue推荐的给对象扩展属性方法的方式
        this.seller = Object.assign({},this.seller,response.data)
        // console.log(this.seller.id)
      }
    })
  },
  components: {
    'v-header': header
  }
}
</script>

<style rel="stylesheet/stylus" lang="stylus">
    
    @import "common/scss/_mixins"
    .tab 
        display: flex
        width: 100%
        height: 40px
        line-height: 40px
       

        .tab-item 
            flex: 1
            text-align: center

            & > a 
                display: block
                font-size: 14px
                color: rgb(77, 85, 93)

                &.active 
                    color: rgb(240, 20, 20)
 
</style>

