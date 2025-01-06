// 引入 @umijs/max 中的 request 函数，用于发送 HTTP 请求
import { request } from '@umijs/max';
// 引入自定义类型定义文件中的 CurrentUser 和 ListItemDataType 类型
import type { CurrentUser, ListItemDataType } from './data.d';

/**
 * 查询当前用户信息的异步函数
 * @returns {Promise<{ data: CurrentUser }>} 返回一个 Promise，解析为包含当前用户信息的对象
 */
export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  // 发送 GET 请求到指定的 API 端点，获取当前用户信息
  return request('/staff/web/userCenter/auth/user/detail.json');
}

/**
 * 查询假数据列表的异步函数
 * @param {Object} params - 请求参数对象
 * @param {number} params.count - 要查询的数据数量
 * @returns {Promise<{ data: { list: ListItemDataType[] } }>} 返回一个 Promise，解析为包含假数据列表的对象
 */
export async function queryFakeList(params: {
  count: number;
}): Promise<{ data: { list: ListItemDataType[] } }> {
  // 发送 GET 请求到指定的 API 端点，获取假数据列表，请求参数包含要查询的数据数量
  return request('/staff/web/userCenter/auth/user/center.json', {
    params,
  });
}
