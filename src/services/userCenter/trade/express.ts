// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/**
 * 获取快递列表
 * @param {any} params - 查询参数
 * @param {any} sort - 排序参数
 * @param {any} filter - 过滤参数
 * @returns {Promise<any>} - 返回一个包含快递列表的Promise对象
 */
export async function page(params: any, sort: any, filter: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/trade/express/page.json';
  // 发送GET请求获取快递列表
  return request?.(url, {
    method: 'GET',
    params: {
      params: params,
      sort: sort,
      filter: filter,
    },
  });
}

/**
 * 更新快递信息
 * @param {any} data - 包含更新数据的对象
 * @returns {Promise<any>} - 返回一个包含更新结果的Promise对象
 */
export async function update(data: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/trade/express/update.json';
  // 发送POST请求更新快递信息
  return request?.(url, {
    method: 'POST',
    data: data
  });
}

/**
 * 根据ID获取快递详情
 * @param {string} id - 快递的ID
 * @returns {Promise<any>} - 返回一个包含快递详情的Promise对象
 */
export async function getById(id: string) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/trade/express/getById.json';
  // 发送GET请求获取快递详情
  return request?.(url, {
    method: 'GET',
    params: {
      id: id,
    },
  });
}

/**
 * 删除快递
 * @param {Object} [options] - 可选的删除选项
 * @param {string} [options.id] - 要删除的快递的ID
 * @returns {Promise<any>} - 返回一个包含删除结果的Promise对象
 */
export async function del(options?: { [key: string]: any }) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/trade/express/del.json';
  // 发送POST请求删除快递
  return request?.(url, {
    method: 'POST',
    data: {
      ...options,
    },
  })
}

/**
 * 获取所有快递
 * @returns {Promise<any>} - 返回一个包含所有快递的Promise对象
 */
export async function arr() {
  // 定义请求的URL
  const url = "/staff/web/userCenter/trade/express/page.json";
  // 发送GET请求获取所有快递
  return request?.(url, {
    method: "GET",
    params: {
      pageNum: 1,
      pageSize: 0,
    },
  });
}
