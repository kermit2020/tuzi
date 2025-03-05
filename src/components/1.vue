<template>
  <div class="k01">
    <div>
      <!-- <Nav /> -->
      <div>js01数据类型</div>
      <div>
        <div>简单：string,number,boolean,undefined,null</div>
        <div>复杂：obj{object,function,array}</div>
        <div>特殊：symbol,bigint</div>
      </div>
      <div>
        <div>判断</div>
        <div>typeof</div>
        <div>instanceof:判断对象类型</div>
        <div>===</div>
      </div>
      <div>
        <div>判断封装_typeof</div>
        <input type="text" v-model="inputV1" /><button @click="handleType">检查类型</button>
      </div>
      <hr />
      <div>vue3常用api</div>
      <div>ref,reactive,computed,watch,defineProps,difineEmits,difineExpose(子组件暴露属性,ref获取)</div>
      <div>provide,inject(顶传递底数据,可传递方法_谁的数据谁负责修改)</div>
      <div>mock.js技术</div>
      <div>制作一个增删改查的mock接口</div>
      <div>
      

      <div>生命周期</div>
      <div>setup,mounted,updated,unmounted</div>
      <!-- son组件 -->
      <Son :count="count" :obj1="obj1" :arr1="arr1" :handleArr1="handleArr1" />
        <!--点击自加 -->
      <button @click="addCount">{{ count }}</button>
      </div>
      <button @click="handleMessage">{{ obj1.name }}</button>
      <div>{{ '原数组:' + JSON.stringify(arr1) }}</div>
      <div>原数组:{{ arr1 }}</div>
      <div>{{ '筛选数组:' + JSON.stringify(handleArr1) }}</div>
    </div>
  </div>
  <!-- <div class="nav">

    <template  v-for="id1 in [1, 2, 3, 4]" :key="id1" >
      <RouterLink :to="{ path: `/item/${id1}` }" class="page">{{ id1 }}</RouterLink>
    </template>
  </div> -->
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, reactive, computed } from 'vue'
//ref需要let.value的方式赋值
//reactive直接赋值,所以可以一组obj放一起
//setup可以做到模块的独立,因为数据和方法都在里面
import Nav from './nav/nav.vue'
import Son from './1/son.vue'

const route = useRoute()
const id = route.params.id
const count = ref(0)
// const inputV1 = ref('')
const arr1 = ref([1, 2, 3, 4, 5, 6, 7, 8])
const obj1 = reactive({
  name: '张三',
  age: 18
})
//methods
const handleArr1 = computed(() => {
  return arr1.value.filter(v => v > 2)
})
setTimeout(() => {
  arr1.value.push(9, 10)
}, 3000)
function addCount() {
  count.value++
}
</script>
<script>
export default {
  name: 'item',
  data() {
    return {
      inputV1: null
    }
  },
  watch: {
    inputV1: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal)
      },
      immediate: true,//立即执行
      deep: true//深度监听
      //由inputV1(newVal, oldVal){}改写
    }
  },
  // setup() {
  //   //运行在beforeCreate之前
  //   //和<script setup>一起使用冲突
  //   //vue3优势可以直接引用js代码
  //   const message = 'Hello Vue 3.0'
  //   const handleMessage = () => {
  //     console.log(message)
  //   }
  //   return{
  //     message,
  //     handleMessage
  //   }
  // },
  mounted() {
    // document.write(`<div>'这是一个输入文字'</div>`)
  },
  methods: {
    handleType() {

      try {
        let t = JSON.parse(JSON.stringify(eval('(' + this.inputV1 + ')')))
        console.log(t, this._typeof(t))
      } catch (error) {
        console.log(this.inputV1, this._typeof(JSON.parse(JSON.stringify(this.inputV1))))
      }
    },
    _typeof(data) {
      // return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
      return {}.toString.call(data).slice(8, -1)
      //call是绑定指向,且直接调用,apply是绑定但不调用
    }
  }
}
</script>
<!-- <script>
//vue2代码
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addCount() {
      this.count++;
    }
  },
  mounted() {
    // Any other mounted logic
  },
}
</script> -->
<style scoped>
body {
  background-color: pink;
  width: 100%;
  height: 90vh;
}
.k01 {
  color: #e04449;
}
</style>
