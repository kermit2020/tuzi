import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUser } from '@/apis/login'

export const s_login = defineStore(
  's_login',
  () => {
    // 导航栏数据
    const userList = ref({})

    const getUserList = async data => {
      const res = await getUser(data)
      userList.value = {}
      if (res.code === '1') {
        userList.value = res.result ? res.result : null
        console.log('res_login_user', res)
      } else {
        userList.value = {}
        return flase
      }
    }
    return { userList, getUserList }
  },
  //添加持久化设定__默认localStorage
  { persist: [
    {
      // pick: ['userList'],
      storage: sessionStorage,
    }
  
  ]}
)
