/*  import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue' */

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/:id',
    component: () => import('../views/todo/todo.vue'),
    // props: (route) => ({id: route.name}),
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'app'
    }
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue'),
    name: 'login',
    meta: {
      title: 'this is login',
      description: 'login'
    }
  }

  /* {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id', // /app/xxx
    path: '/app',
    props: true,
    // props: (route) => ({ id: route.query.b }),
    component: () => import(/!* webpackChunkName: "todo-view" *!/ '../views/todo/todo.vue'),
    // component: Todo,
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'asdasd'
    },
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: () => import(/!* webpackChunkName: "login-view" *!/ '../views/login/login.vue')
    // component: Login
  } */
]
