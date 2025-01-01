/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user/login',
        layout: false,
        name: 'login',
        component: './user/login',
      },
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        name: 'register-result',
        icon: 'smile',
        path: '/user/register-result',
        component: './user/register-result',
      },
      {
        name: 'register',
        icon: 'smile',
        path: '/user/register',
        component: './user/register',
      },
    ],
  },
  {
    path: '/',
    redirect: '/center/notice',
  },
  {
    name: 'center',
    icon: 'user',
    path: '/center',
    routes: [
      {
        name: 'user',
        icon: 'user',
        path: '/center/user',
        component: './userCenter/auth/user',
      }, 
      {
        name: 'role',
        icon: 'user',
        path: '/center/role',
        component: './userCenter/auth/role',
      },
      {
        name: 'menu',
        icon: 'user',
        path: '/center/menu',
        component: './userCenter/auth/menu',
      }, 
      {
        name: 'notice',
        icon: 'user',
        path: '/center/notice',
        component: './userCenter/notice',
      }, 
      {
        name: 'tag',
        icon: 'user',
        path: '/center/tag',
        component: './userCenter/tag',
      },
    ],
  },
  {
    name: 'oa',
    icon: 'user',
    path: '/oa',
    routes: [

      {
        name: 'staff',
        icon: 'user',
        path: '/oa/staff',
        component: './userCenter/oa/staff',
      },
      {
        name: 'org',
        icon: 'user',
        path: '/oa/org',
        component: './userCenter/oa/org',
      },
      {
        name: 'dept',
        icon: 'user',
        path: '/oa/dept',
        component: './userCenter/oa/dept',
      },
      {
        name: 'post',
        icon: 'user',
        path: '/oa/post',
        component: './userCenter/oa/post',
      },
    ],
  },

  {
    name: 'merchant',
    icon: 'user',
    path: '/merchant',
    routes: [
      {
        name: 'merchant',
        icon: 'user',
        path: '/merchant/merchant',
        component: './userCenter/trade/merchant',
      },
      {
        name: 'buyer',
        icon: 'user',
        path: '/merchant/buyer',
        component: './userCenter/trade/buyer/buyer',
      },
    ],
  },
  {
    name: 'goods',
    icon: 'user',
    path: '/goods',
    routes: [
      {
        name: 'goods',
        icon: 'user',
        path: '/goods/goods',
        component: './userCenter/trade/goods/goods',
      },
      {
        name: 'category',
        icon: 'user',
        path: '/goods/category',
        component: './userCenter/trade/goods/category',
      },
      {
        name: 'brand',
        icon: 'user',
        path: '/goods/brand',
        component: './userCenter/trade/goods/brand',
      },
    ],
  },
  {
    name: 'trade',
    icon: 'user',
    path: '/trade',
    routes: [
      {
        name: 'tradeOrder',
        icon: 'user',
        path: '/trade/tradeOrder',
        component: './userCenter/trade/tradeOrder',
      },
      {
        name: 'express',
        icon: 'user',
        path: '/trade/express',
        component: './userCenter/trade/express',
      },
 
    ],
  },
  {
    name: 'promotion',
    icon: 'user',
    path: '/promotion',
    routes: [
      {
        name: 'use',
        icon: 'user',
        path: '/promotion/use',
        component: './userCenter/promotion/use',
      },
      {
        name: 'couponTemplate',
        icon: 'user',
        path: '/promotion/couponTemplate',
        component: './userCenter/promotion/coupon',
      },
      {
        name: 'profitSharing',
        icon: 'user',
        path: '/promotion/profitSharing',
        component: './userCenter/trade/buyer/profitSharing',
      },
    ],
  },
  {
    name: 'content',
    icon: 'user',
    path: '/content',
    routes: [
      {
        name: 'article',
        icon: 'user',
        path: '/content/article',
        component: './userCenter/content/article',
      },
      {
        name: 'category',
        icon: 'user',
        path: '/content/category',
        component: './userCenter/content/category',
      },
 
    ],
  },
  {
    name: 'material',
    icon: 'user',
    path: '/material',
    routes: [
      {
        name: 'purchase',
        icon: 'user',
        path: '/material/purchase',
        component: './userCenter/material/purchase',
      },
      {
        name: 'stock',
        icon: 'user',
        path: '/material/stock',
        component: './userCenter/material/stock',
      },
      {
        name: 'consume',
        icon: 'user',
        path: '/material/consume',
        component: './userCenter/material/consume',
      },
      {
        name: 'instock',
        icon: 'user',
        path: '/material/instock',
        component: './userCenter/material/instock',
      },
      {
        name: 'form',
        icon: 'user',
        path: '/material/form',
        component: './userCenter/material/form',
      },
    ],
  },
  {
    name: 'account',
    icon: 'user',
    path: '/account',
    routes: [
      {
        path: '/account',
        redirect: '/account/center',
      },
      {
        name: 'center',
        icon: 'smile',
        path: '/account/center',
        component: './account/center',
      },
      {
        name: 'settings',
        icon: 'smile',
        path: '/account/settings',
        component: './account/settings',
      },
    ],
  },
];
