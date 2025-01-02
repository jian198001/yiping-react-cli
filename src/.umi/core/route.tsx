// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/user","layout":false,"id":"1"},"2":{"path":"/user/login","layout":false,"name":"login","parentId":"1","id":"2"},"3":{"path":"/user","redirect":"/user/login","parentId":"1","id":"3"},"4":{"name":"register-result","icon":"smile","path":"/user/register-result","parentId":"1","id":"4"},"5":{"name":"register","icon":"smile","path":"/user/register","parentId":"1","id":"5"},"6":{"path":"/","redirect":"/center/notice","parentId":"max-tabs","id":"6"},"7":{"name":"center","icon":"user","path":"/center","parentId":"max-tabs","id":"7"},"8":{"name":"user","icon":"user","path":"/center/user","parentId":"7","id":"8"},"9":{"name":"role","icon":"user","path":"/center/role","parentId":"7","id":"9"},"10":{"name":"menu","icon":"user","path":"/center/menu","parentId":"7","id":"10"},"11":{"name":"notice","icon":"user","path":"/center/notice","parentId":"7","id":"11"},"12":{"name":"tag","icon":"user","path":"/center/tag","parentId":"7","id":"12"},"13":{"name":"oa","icon":"user","path":"/oa","parentId":"max-tabs","id":"13"},"14":{"name":"staff","icon":"user","path":"/oa/staff","parentId":"13","id":"14"},"15":{"name":"org","icon":"user","path":"/oa/org","parentId":"13","id":"15"},"16":{"name":"dept","icon":"user","path":"/oa/dept","parentId":"13","id":"16"},"17":{"name":"post","icon":"user","path":"/oa/post","parentId":"13","id":"17"},"18":{"name":"merchant","icon":"user","path":"/merchant","parentId":"max-tabs","id":"18"},"19":{"name":"merchant","icon":"user","path":"/merchant/merchant","parentId":"18","id":"19"},"20":{"name":"buyer","icon":"user","path":"/merchant/buyer","parentId":"18","id":"20"},"21":{"name":"goods","icon":"user","path":"/goods","parentId":"max-tabs","id":"21"},"22":{"name":"goods","icon":"user","path":"/goods/goods","parentId":"21","id":"22"},"23":{"name":"category","icon":"user","path":"/goods/category","parentId":"21","id":"23"},"24":{"name":"brand","icon":"user","path":"/goods/brand","parentId":"21","id":"24"},"25":{"name":"trade","icon":"user","path":"/trade","parentId":"max-tabs","id":"25"},"26":{"name":"tradeOrder","icon":"user","path":"/trade/tradeOrder","parentId":"25","id":"26"},"27":{"name":"express","icon":"user","path":"/trade/express","parentId":"25","id":"27"},"28":{"name":"promotion","icon":"user","path":"/promotion","parentId":"max-tabs","id":"28"},"29":{"name":"use","icon":"user","path":"/promotion/use","parentId":"28","id":"29"},"30":{"name":"couponTemplate","icon":"user","path":"/promotion/couponTemplate","parentId":"28","id":"30"},"31":{"name":"profitSharing","icon":"user","path":"/promotion/profitSharing","parentId":"28","id":"31"},"32":{"name":"content","icon":"user","path":"/content","parentId":"max-tabs","id":"32"},"33":{"name":"article","icon":"user","path":"/content/article","parentId":"32","id":"33"},"34":{"name":"category","icon":"user","path":"/content/category","parentId":"32","id":"34"},"35":{"name":"material","icon":"user","path":"/material","parentId":"max-tabs","id":"35"},"36":{"name":"purchase","icon":"user","path":"/material/purchase","parentId":"35","id":"36"},"37":{"name":"stock","icon":"user","path":"/material/stock","parentId":"35","id":"37"},"38":{"name":"consume","icon":"user","path":"/material/consume","parentId":"35","id":"38"},"39":{"name":"instock","icon":"user","path":"/material/instock","parentId":"35","id":"39"},"40":{"name":"form","icon":"user","path":"/material/form","parentId":"35","id":"40"},"41":{"name":"account","icon":"user","path":"/account","parentId":"max-tabs","id":"41"},"42":{"path":"/account","redirect":"/account/center","parentId":"41","id":"42"},"43":{"name":"center","icon":"smile","path":"/account/center","parentId":"41","id":"43"},"44":{"name":"settings","icon":"smile","path":"/account/settings","parentId":"41","id":"44"},"max-tabs":{"id":"max-tabs","path":"/","parentId":"ant-design-pro-layout","isLayout":true},"ant-design-pro-layout":{"id":"ant-design-pro-layout","path":"/","isLayout":true},"umi/plugin/openapi":{"path":"/umi/plugin/openapi","id":"umi/plugin/openapi"}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import('./EmptyRoute')),
'2': React.lazy(() => import(/* webpackChunkName: "p__user__login__index" */'@/pages/user/login/index.tsx')),
'3': React.lazy(() => import('./EmptyRoute')),
'4': React.lazy(() => import(/* webpackChunkName: "p__user__register-result__index" */'@/pages/user/register-result/index.tsx')),
'5': React.lazy(() => import(/* webpackChunkName: "p__user__register__index" */'@/pages/user/register/index.tsx')),
'6': React.lazy(() => import('./EmptyRoute')),
'7': React.lazy(() => import('./EmptyRoute')),
'8': React.lazy(() => import(/* webpackChunkName: "p__userCenter__auth__user__index" */'@/pages/userCenter/auth/user/index.tsx')),
'9': React.lazy(() => import(/* webpackChunkName: "p__userCenter__auth__role__index" */'@/pages/userCenter/auth/role/index.tsx')),
'10': React.lazy(() => import(/* webpackChunkName: "p__userCenter__auth__menu__index" */'@/pages/userCenter/auth/menu/index.tsx')),
'11': React.lazy(() => import(/* webpackChunkName: "p__userCenter__notice__index" */'@/pages/userCenter/notice/index.tsx')),
'12': React.lazy(() => import(/* webpackChunkName: "p__userCenter__tag__index" */'@/pages/userCenter/tag/index.tsx')),
'13': React.lazy(() => import('./EmptyRoute')),
'14': React.lazy(() => import(/* webpackChunkName: "p__userCenter__oa__staff__index" */'@/pages/userCenter/oa/staff/index.tsx')),
'15': React.lazy(() => import(/* webpackChunkName: "p__userCenter__oa__org__index" */'@/pages/userCenter/oa/org/index.tsx')),
'16': React.lazy(() => import(/* webpackChunkName: "p__userCenter__oa__dept__index" */'@/pages/userCenter/oa/dept/index.tsx')),
'17': React.lazy(() => import(/* webpackChunkName: "p__userCenter__oa__post__index" */'@/pages/userCenter/oa/post/index.tsx')),
'18': React.lazy(() => import('./EmptyRoute')),
'19': React.lazy(() => import(/* webpackChunkName: "p__userCenter__trade__merchant__index" */'@/pages/userCenter/trade/merchant/index.tsx')),
'20': React.lazy(() => import(/* webpackChunkName: "p__userCenter__trade__buyer__buyer__index" */'@/pages/userCenter/trade/buyer/buyer/index.tsx')),
'21': React.lazy(() => import('./EmptyRoute')),
'22': React.lazy(() => import(/* webpackChunkName: "p__userCenter__trade__goods__goods__index" */'@/pages/userCenter/trade/goods/goods/index.tsx')),
'23': React.lazy(() => import(/* webpackChunkName: "p__userCenter__trade__goods__category__index" */'@/pages/userCenter/trade/goods/category/index.tsx')),
'24': React.lazy(() => import(/* webpackChunkName: "p__userCenter__trade__goods__brand__index" */'@/pages/userCenter/trade/goods/brand/index.tsx')),
'25': React.lazy(() => import('./EmptyRoute')),
'26': React.lazy(() => import(/* webpackChunkName: "p__userCenter__trade__tradeOrder__index" */'@/pages/userCenter/trade/tradeOrder/index.tsx')),
'27': React.lazy(() => import(/* webpackChunkName: "p__userCenter__trade__express__index" */'@/pages/userCenter/trade/express/index.tsx')),
'28': React.lazy(() => import('./EmptyRoute')),
'29': React.lazy(() => import(/* webpackChunkName: "p__userCenter__promotion__use__index" */'@/pages/userCenter/promotion/use/index.tsx')),
'30': React.lazy(() => import(/* webpackChunkName: "p__userCenter__promotion__coupon__index" */'@/pages/userCenter/promotion/coupon/index.tsx')),
'31': React.lazy(() => import(/* webpackChunkName: "p__userCenter__trade__buyer__profitSharing__index" */'@/pages/userCenter/trade/buyer/profitSharing/index.tsx')),
'32': React.lazy(() => import('./EmptyRoute')),
'33': React.lazy(() => import(/* webpackChunkName: "p__userCenter__content__article__index" */'@/pages/userCenter/content/article/index.tsx')),
'34': React.lazy(() => import(/* webpackChunkName: "p__userCenter__content__category__index" */'@/pages/userCenter/content/category/index.tsx')),
'35': React.lazy(() => import('./EmptyRoute')),
'36': React.lazy(() => import(/* webpackChunkName: "p__userCenter__material__purchase__index" */'@/pages/userCenter/material/purchase/index.tsx')),
'37': React.lazy(() => import(/* webpackChunkName: "p__userCenter__material__stock__index" */'@/pages/userCenter/material/stock/index.tsx')),
'38': React.lazy(() => import(/* webpackChunkName: "p__userCenter__material__consume__index" */'@/pages/userCenter/material/consume/index.tsx')),
'39': React.lazy(() => import(/* webpackChunkName: "p__userCenter__material__instock__index" */'@/pages/userCenter/material/instock/index.tsx')),
'40': React.lazy(() => import(/* webpackChunkName: "p__userCenter__material__form__index" */'@/pages/userCenter/material/form/index.tsx')),
'41': React.lazy(() => import('./EmptyRoute')),
'42': React.lazy(() => import('./EmptyRoute')),
'43': React.lazy(() => import(/* webpackChunkName: "p__account__center__index" */'@/pages/account/center/index.tsx')),
'44': React.lazy(() => import(/* webpackChunkName: "p__account__settings__index" */'@/pages/account/settings/index.tsx')),
'max-tabs': React.lazy(() => import(/* webpackChunkName: "umi__plugin-maxtabs__Layout" */'E:/workSpace/gitee/yiping-react-cli/src/.umi/plugin-maxtabs/Layout.tsx')),
'ant-design-pro-layout': React.lazy(() => import(/* webpackChunkName: "umi__plugin-layout__Layout" */'E:/workSpace/gitee/yiping-react-cli/src/.umi/plugin-layout/Layout.tsx')),
'umi/plugin/openapi': React.lazy(() => import(/* webpackChunkName: "umi__plugin-openapi__openapi" */'E:/workSpace/gitee/yiping-react-cli/src/.umi/plugin-openapi/openapi.tsx')),
},
  };
}
