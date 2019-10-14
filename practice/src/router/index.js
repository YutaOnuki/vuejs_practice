import Vue from 'vue'
import Router from 'vue-router'

// ルート用コンポーネントの読み込み
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Product from '@/components/Product'
import ProductList from '@/components/ProductList'

// ルーターをプラグインに登録
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // ホーム画面
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product',
      name: 'productList',
      component: ProductList
    },
    // 商品情報詳細
    {
      path: '/product/:id(\\d+)',
      name: 'product',
      component: Product,
      props: route => ({ id: Number(route.params.id) })
    }
  ]
})
