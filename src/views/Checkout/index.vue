<!-- 订单确认页 -->

<script setup>
import { ref, onMounted } from 'vue'
import { s_checkout } from '@/stores/checkout'
const curAddress = {} // 地址对象
const defaultAddress = ref({}) // 默认地址
const checkInfo = ref({}) // 订单信息
const d_checkout = s_checkout()
onMounted(async () => {
  await d_checkout.getCheckoutList()

  checkInfo.value = await d_checkout.checkoutList // 获取订单信息

  defaultAddress.value = await checkInfo.value.userAddresses.find(v => v.isDefault === 0) // 获取默认地址

  console.log('defaultAddress', defaultAddress.value)
})
</script>

<template>
  <div class="xtx-pay-checkout-page">
    <div class="container">
      <div class="wrapper">
        <!-- 收货地址 -->
        <h3 class="box-title">收货地址</h3>
        <div class="box-body">
          <div class="address">
            <div class="text">
              <div class="none" v-if="!defaultAddress">您需要先添加收货地址才可提交订单。</div>
              <ul v-else>
                <li>
                  <span>收<i />货<i />人：</span>{{ defaultAddress.receiver }}
                </li>
                <li><span>联系方式：</span>{{ defaultAddress.contact }}</li>
                <li><span>收货地址：</span>{{ defaultAddress.fullLocation }} {{ defaultAddress.address }}</li>
              </ul>
            </div>
            <div class="action">
              <el-button size="large" @click="toggleFlag = true" >切换地址</el-button>
              <el-button size="large" @click="addFlag = true">添加地址</el-button>
            </div>
          </div>
        </div>
        <!-- 商品信息 -->
        <h3 class="box-title ">商品信息</h3>


        <div class="box-body">
          <table class="goods">
            <thead>
              <tr>
                <th width="520">商品信息</th>
                <th width="170">单价</th>
                <th width="170">数量</th>
                <th width="170">小计</th>
                <th width="170">实付</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="v in d_checkout.checkoutList.goods" :key="v.id">
                <td>
                  <a href="javascript:;" class="info">
                    <img :src="v.picture" alt="" />
                    <div class="right">
                      <p>{{ v.name }}</p>
                      <p>{{ v.attrsText }}</p>
                    </div>
                  </a>
                </td>
                <td>&yen;{{ v.price }}</td>
                <td>{{ v.price }}</td>
                <td>&yen;{{ v.totalPrice }}</td>
                <td>&yen;{{ v.totalPayPrice }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 配送时间 -->
        <h3 class="box-title">配送时间</h3>
        <div class="box-body">
          <a class="my-btn active" href="javascript:;">不限送货时间：周一至周日</a>
          <a class="my-btn" href="javascript:;">工作日送货：周一至周五</a>
          <a class="my-btn" href="javascript:;">双休日、假日送货：周六至周日</a>
        </div>
        <!-- 支付方式 -->
        <h3 class="box-title">支付方式</h3>
        <div class="box-body">
          <a class="my-btn active" href="javascript:;">在线支付</a>
          <a class="my-btn" href="javascript:;">货到付款</a>
          <span style="color: #999">货到付款需付5元手续费</span>
        </div>
        <!-- 金额明细 -->
        <h3 class="box-title">金额明细</h3>
        <div class="box-body">
          <div class="total">
            <dl>
              <dt>商品件数：</dt>
              <dd>{{ checkInfo.summary?.goodsCount }}件</dd>
            </dl>
            <dl>
              <dt>商品总价：</dt>
              <dd>¥{{ checkInfo.summary?.totalPrice.toFixed(2) }}</dd>
            </dl>
            <dl>
              <dt>运<i></i>费：</dt>
              <dd>¥{{ checkInfo.summary?.postFee.toFixed(2) }}</dd>
            </dl>
            <dl>
              <dt>应付总额：</dt>
              <dd class="price">{{ checkInfo.summary?.totalPayPrice.toFixed(2) }}</dd>
            </dl>
          </div>
        </div>
        <!-- 提交订单 -->
        <div class="submit">
          <el-button type="primary" size="large">提交订单</el-button>
        </div>
      </div>
    </div>
  </div>
  <!-- 切换地址 -->
  <!-- 添加地址 -->
</template>

<style scoped lang="scss">
.xtx-pay-checkout-page {
  margin-top: 20px;

  .wrapper {
    background: #fff;
    padding: 0 20px;

    .box-title {
      @apply text-16px leading-70px font-normal pl-10px border-b-1px border-b-neutral-100;

      
      // font-size: 16px;
      // font-weight: normal;
      // padding-left: 10px;
      // line-height: 70px;
      // border-bottom: 1px solid #f5f5f5;
    }

    .box-body {
      // padding: 20px 0;
      @apply py-20px px-0;
    }
  }
}

.address {
  @apply border-neutral-100 flex items-center;
  // border: 1px solid #f5f5f5;
  // display: flex;
  // align-items: center;

  .text {
    @apply flex-1 items-center min-h-90px;
    // flex: 1;
    // min-height: 90px;
    // display: flex;
    // align-items: center;

    .none {
      @apply item-center leading-90px w-full;
      // line-height: 90px;
      color: #999;
      // text-align: center;
      // width: 100%;
    }

    > ul {
      @apply flex-1 p-20px;
      // flex: 1;
      // padding: 20px;

      li {
        @apply leading-30px;
        // line-height: 30px;

        span {
          color: #999;
          @apply mr-5px;
          // margin-right: 5px;

          > i {
            @apply w-0.5em inline-block;
            // width: 0.5em;
            // display: inline-block;
          }
        }
      }
    }

    > a {
      @apply w-160px h-90px text-center leading-90px border-r-1px border-r-neutral-100;
      color: $xtxColor;
      // width: 160px;
      // text-align: center;
      // height: 90px;
      // line-height: 90px;
      // border-right: 1px solid #f5f5f5;
    }
  }

  .action {
    @apply w-420px text-center;
    // width: 420px;
    // text-align: center;

    .btn {
      @apply w-140px h-46px leading-44px text-14px;
      // width: 140px;
      // height: 46px;
      // line-height: 44px;
      // font-size: 14px;

      &:first-child {
        margin-right: 10px;
      }
    }
  }
}

.goods {
  @apply w-full border-collapse border-spacing-0;
  // width: 100%;
  // border-collapse: collapse;
  // border-spacing: 0;

  .info {
    @apply flex items-center text-left;
    // display: flex;
    // text-align: left;

    img {
      width: 70px;
      height: 70px;
      margin-right: 20px;
    }

    .right {
      @apply leading-24px;
      // line-height: 24px;

      p {
        &:last-child {
          color: #999;
        }
      }
    }
  }

  tr {
    th {
      background: #f5f5f5;
      font-weight: normal;
    }

    td,
    th {
      text-align: center;
      padding: 20px;
      border-bottom: 1px solid #f5f5f5;

      &:first-child {
        border-left: 1px solid #f5f5f5;
      }

      &:last-child {
        border-right: 1px solid #f5f5f5;
      }
    }
  }
}

.my-btn {
  width: 228px;
  height: 50px;
  border: 1px solid #e4e4e4;
  text-align: center;
  line-height: 48px;
  margin-right: 25px;
  color: #666666;
  display: inline-block;

  &.active,
  &:hover {
    border-color: $xtxColor;
  }
}

.total {
  dl {
    display: flex;
    justify-content: flex-end;
    line-height: 50px;

    dt {
      i {
        display: inline-block;
        width: 2em;
      }
    }

    dd {
      width: 240px;
      text-align: right;
      padding-right: 70px;

      &.price {
        font-size: 20px;
        color: $priceColor;
      }
    }
  }
}

.submit {
  text-align: right;
  padding: 60px;
  border-top: 1px solid #f5f5f5;
}

.addressWrapper {
  max-height: 500px;
  overflow-y: auto;
}

.text {
  flex: 1;
  min-height: 90px;
  display: flex;
  align-items: center;

  &.item {
    border: 1px solid #f5f5f5;
    margin-bottom: 10px;
    cursor: pointer;

    &.active,
    &:hover {
      border-color: $xtxColor;
      background: lighten($xtxColor, 50%);
    }

    > ul {
      padding: 10px;
      font-size: 14px;
      line-height: 30px;
    }
  }
}
</style>
