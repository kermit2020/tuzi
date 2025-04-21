import { defineStore } from "pinia";
import { ref } from "vue";
import { getDetail } from "@/apis/detail";

export const s_detail = defineStore("s_detail", () => {
  // 商品详情数据
  const detailList = ref([]);
  const getDetailList = async (id) => {
    const res = await getDetail(id);
    detailList.value = res.result;
    console.log('res_detail_goods',res);
    
  };
  return { detailList, getDetailList };
})