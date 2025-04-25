<template>
  <!-- 商品放大镜 -->
  <!-- <div>{{ elementX }},{{ elementY }},{{ isOutside }}</div> -->
  <div class="goods-image">
    <!-- 左侧大图-->
    <div class="middle" ref="targetRef">
      <img :src="imageList[target1]" alt="" />
      <!-- 蒙层小滑块 -->
      <div class="layer" :style="{ left: `${left}px`, top: `${top}px` }"></div>
    </div>
    <!-- 小图列表 -->
    <ul class="small">
      <li v-for="(img, i) in imageList" :key="i" @mouseenter="target1 = i" :class="{ active: target1 === i }">
        <img :src="img" alt="" />
      </li>
    </ul>
    <!-- 放大镜大图 -->
    <div
      class="large"
      :style="[
        {
          backgroundImage: `url(${imageList[target1]})`,
          backgroundPositionX: `${-left * 2}px`,
          backgroundPositionY: `${-top * 2}px`
        }
      ]"
      v-show="!isOutside"
    ></div>
  </div>
</template>

<script setup>
// 图片列表
import { ref, watch, defineProps } from 'vue'
import { useMouseInElement } from '@vueuse/core'
// 小图索引
const target1 = ref(0)
defineProps({
  imageList: {
    type: Array,
    default: () => [
      // 'https://yanxuan-item.nosdn.127.net/d917c92e663c5ed0bb577c7ded73e4ec.png',
      // 'https://yanxuan-item.nosdn.127.net/e801b9572f0b0c02a52952b01adab967.jpg',
      // 'https://yanxuan-item.nosdn.127.net/b52c447ad472d51adbdde1a83f550ac2.jpg',
      // 'https://yanxuan-item.nosdn.127.net/f93243224dc37674dfca5874fe089c60.jpg',
      // 'https://yanxuan-item.nosdn.127.net/f881cfe7de9a576aaeea6ee0d1d24823.jpg'
    ]
  }
})

// 鼠标坐标
const targetRef = ref(null)
let { elementX, elementY, isOutside } = useMouseInElement(targetRef)
const top = ref(0)
const left = ref(0)
watch([elementX, elementY, isOutside], ([x, y, z]) => {
  //[x,y,z]对应elementX, elementY, isOutside,且是响应式最新值,而原始elementX有延迟
  if (!z) {
    if (x < 300 && x > 100) {
      left.value = x - 100
    }
    if (y < 300 && y > 100) {
      top.value = y - 100
    }
    if (x > 300) {
      left.value = 200
    }
    if (y > 300) {
      top.value = 200
    }
    if (x < 100) {
      left.value = 0
    }
    if (y < 100) {
      top.value = 0
    }
  }
})
</script>

<style scoped lang="scss">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;

  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }

  .layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
    // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
    left: 0;
    top: 0;
    position: absolute;
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>
