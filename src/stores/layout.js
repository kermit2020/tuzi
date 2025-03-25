import { defineStore } from "pinia";
import { ref } from "vue";
import { getCategory } from "@/apis/layout";

export const s_layout = defineStore("s_layout", () => {
  // 导航栏数据
  const navList = ref([]);
  const getNavList = async () => {
    const res = await getCategory();
    navList.value = res.result;
    console.log('res',res);
    
  };
  return { navList, getNavList };
})