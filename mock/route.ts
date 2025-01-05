/**
 * 导出默认的路由配置对象
 * @description 定义了API路由的权限配置
 */
export default {
  // 定义API路由的基本路径
  '/api/auth_routes': {
    // 定义子路由路径
    '/form/advanced-form': {
      // 定义访问该路由所需的权限
      authority: ['admin', 'user'],
    },
  },
};
