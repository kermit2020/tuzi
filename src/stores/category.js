import { defineStore } from "pinia";
import { ref } from "vue";
import { getCate } from "@/apis/category";

export const s_category = defineStore("s_category", (id) => {
  // 导航栏数据
  const cateList = ref({});
  const getCateList = async (id) => {
    const res = await getCate(id);
    cateList.value = res.result;
    console.log('res_category_id',res);
    
  };
  return { cateList, getCateList };
})