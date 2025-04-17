import { defineStore } from "pinia";
import { ref } from "vue";
import { getBanner,getNew,getHot, getProduct } from "@/apis/home";

export const s_home = defineStore("s_home", () => {
  // 导航栏数据
  const bannerList = ref([]);
  const newList = ref([]);
  const hotList = ref([]);
  const goodsList = ref([]);
  const getBannerList = async (parmas) => {
    const res = await getBanner(parmas);
    bannerList.value = res.result;
    // console.log('res_home_banner',res);
    
  };
  const getNewList = async () => {
    const res = await getNew();
    newList.value = res.result;
    // console.log('res_home_new',res);
    
  };
  const getHotList = async () => {
    const res = await getHot();
    hotList.value = res.result;
    // console.log('res_home_hot',res);
    
  };
  const getGoodsList = async () => {
    const res = await getProduct();
    goodsList.value = res.result;
    // console.log('res_home_goods',res);
    
  };
  return { bannerList,newList,hotList,goodsList, getBannerList,getNewList,getHotList,getGoodsList };
})