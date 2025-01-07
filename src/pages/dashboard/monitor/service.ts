// 导入 request 函数，用于发送 HTTP 请求
import { request } from '@umijs/max';
// 导入 TagType 类型，用于定义标签的数据结构
import type { TagType } from './data';

/**
 * 查询标签数据
 * @returns {Promise<{ data: { list: TagType[] } }>} 返回包含标签数据的 Promise 对象
 */
export async function queryTags(): Promise<{ data: { list: TagType[] } }> {
  // 发送 GET 请求到 /api/tags 端点
  return request('/api/tags');
}
