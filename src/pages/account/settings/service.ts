// 导入 request 函数，用于发送 HTTP 请求
import { request } from '@umijs/max';
// 导入 CurrentUser 和 GeographicItemType 类型
import type { CurrentUser, GeographicItemType } from './data';

/**
 * 查询当前用户信息
 * @returns {Promise<{ data: CurrentUser }>} 返回包含当前用户信息的 Promise 对象
 */
export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  // 发送 GET 请求到 /staff/web/userCenter/auth/user/setting.json 端点
  return request('/staff/web/userCenter/auth/user/setting.json');
}

/**
 * 查询省份信息
 * @returns {Promise<{ data: GeographicItemType[] }>} 返回包含省份信息的 Promise 对象
 */
export async function queryProvince(): Promise<{ data: GeographicItemType[] }> {
  // 发送 GET 请求到 /staff/web/userCenter/region/region/region.json 端点
  return request('/staff/web/userCenter/region/region/region.json');
}

/**
 * 查询城市信息
 * @param {string} province - 省份的 ID
 * @returns {Promise<{ data: GeographicItemType[] }>} 返回包含城市信息的 Promise 对象
 */
export async function queryCity(province: string): Promise<{ data: GeographicItemType[] }> {
  // 发送 GET 请求到 /staff/web/userCenter/region/region/city.json 端点，并传入省份的 ID 作为查询参数
  return request(`/staff/web/userCenter/region/region/city.json?parentId=${province}`);
}

/**
 * 查询用户信息
 * @returns {Promise<{ data: CurrentUser }>} 返回包含用户信息的 Promise 对象
 */
export async function query(): Promise<{ data: CurrentUser }> {
  // 发送 GET 请求到 /api/users 端点
  return request('/api/users');
}
