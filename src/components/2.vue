<template>
  <Nav />
  <div>pinia(代替vuex)</div>
<button @click="pi_count.increment">{{pi_count.count}}</button>
<span>{{ pi_count.doubleCount }}</span>
<button @click="pi_count.increment">{{count}}</button>
<span>{{ doubleCount }}</span>
<el-button type="primary">Primary</el-button>
</template>
<script>
export default {
  name: 'item',
  data() {}
}
</script>
<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import { ref,onMounted } from 'vue'
import Nav from './nav/nav.vue'
import { getCategory } from '@/apis/api.js'
onMounted(() => {
  getCategory().then(res => {
    console.log(res);
  })
})
//公共数据要用（）引用出对象，用链式调用对象数据和方法
const pi_count = useCounterStore()
//解构法
//解构数据———会丢失响应式
// const { count, doubleCount } = pi_count
//不丢失响应式数据
const { count, doubleCount } =storeToRefs(pi_count) 
//方法要直接解构
const { increment } = pi_count








// import { useRoute } from 'vue-router'

// const route = useRoute()
// const id = route.params.id
// console.log(`Component 2.vue loaded with id: ${id}`)
</script>

<style scoped></style>
