/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * 访问控制函数，用于根据用户权限判断是否具有管理员权限
 * @param {Object} initialState - 包含当前用户信息的初始状态对象
 * @param {API.CurrentUser} initialState.currentUser - 当前用户信息对象
 * @returns {Object} - 返回一个对象，包含是否具有管理员权限的布尔值
 */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  // 从初始状态中解构出当前用户对象，如果不存在则默认为空对象
  const { currentUser } = initialState ?? {};
  // 返回一个对象，包含是否具有管理员权限的布尔值
  return {
    // 判断当前用户是否存在且其访问权限为 'admin'
    canAdmin: currentUser && currentUser.access === 'admin',
  };
}
