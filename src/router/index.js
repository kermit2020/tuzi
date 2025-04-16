import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// const id = route?.params.id||1
import app from '/src/App.vue'
import home from '../views/home.vue'
import Layout from '../views/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home', component: app },
    
    
    {
      path: '/Layout',
     
      component: Layout,
      children: [
        {
          path: '',

          component: () => {
            return import(`@/views/Home/index.vue`)
          }
        },
        {
          path: 'category/:id',
          component: () => {
            return import(`@/views/Category/index.vue`)
          }
        }
      ]
    },
    {
      path: '/login',

      component: () => {
        return import(`@/views/Login/index.vue`)
      }
    },{
      path: '/home',
      // name: 'home',
      component: home,
      children: [
        // {
        //   path: '/item/:id',
        //   // name: 'item',
        //   component: () => {

        //     // const id = window.location.pathname.split('/').pop() || 1

        // //     console.log(route);

        // // const id = route?.params.id||'1'
        // const route = useRoute() // 这里可以使用 useRoute
        // const id = route.params.id
        // return import(`../components/${id}.vue`)
        //     return import(`../components/${id}.vue`)
        //   }

        // }
        {
          path: '/item/1',
          name: 'item1',
          component: route => {
            return import(`../components/1.vue`)
          }
        },
        {
          path: '/item/2',
          name: 'item2',
          component: route => {
            return import(`../components/2.vue`)
          }
        },
        {
          path: '/item/3',
          name: 'item3',
          component: route => {
            return import(`../components/3.vue`)
          }
        },
        {
          path: '/item/4',
          name: 'item4',
          component: route => {
            return import(`../components/4.vue`)
          }
        },
        {
          path: '/item/5',

          redirect: '/Layout',
          // component: route => {
          //   return import(`@/views/Layout/index.vue`)
          // }
        }
      ]
    },
    // {
    //   path: '/item/:id',
    //   name: 'item',
    //   component: () => {
    //     const route = useRoute()
    //     console.log(route)

    //     const id = route?.params.id
    //     return import(`../components/${id}.vue`)
    //   }
    // }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ]
})

export default router
