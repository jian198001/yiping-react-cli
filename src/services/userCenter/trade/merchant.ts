// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/**
 * 获取商家列表
 * @param {any} params - 查询参数
 * @param {any} sort - 排序参数
 * @param {any} filter - 过滤参数
 * @returns {Promise<any>} - 返回一个包含商家列表的Promise对象
 */
export async function page(params: any, sort: any, filter: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/trade/merchant/page.json';

  // 发送GET请求获取商家列表
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
 * 更新商家信息
 * @param {any} data - 包含更新数据的对象
 * @returns {Promise<any>} - 返回一个包含更新结果的Promise对象
 */
export async function update(data: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/trade/merchant/update.json';

  // 发送POST请求更新商家信息
  return request?.(url, {
    method: 'POST',
    data: data
  });
}

/**
 * 根据ID获取商家详情
 * @param {string} id - 商家的ID
 * @returns {Promise<any>} - 返回一个包含商家详情的Promise对象
 */
export async function getById(id: string) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/trade/merchant/getById.json';

  // 发送GET请求获取商家详情
  return request?.(url, {
    method: 'GET',
    params: {
      id: id,
    },
  });
}

/**
 * 删除商家
 * @param {Object} [options] - 可选的删除选项
 * @param {string} [options.id] - 要删除的商家的ID
 * @returns {Promise<any>} - 返回一个包含删除结果的Promise对象
 */
export async function del(options?: { [key: string]: any }) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/trade/merchant/del.json';

  // 发送POST请求删除商家
  return request?.(url, {
    method: 'POST',
    data: {
      ...options,
    },
  })
}

/**
 * 获取所有商家
 * @returns {Promise<any>} - 返回一个包含所有商家的Promise对象
 */
export async function arr() {
  // 定义请求的URL
  const url = "/staff/web/userCenter/trade/merchant/page.json";

  // 发送GET请求获取所有商家
  return request?.(url, {
    method: "GET",
    params: {
      pageNum: 1,
      pageSize: 0,
    },
  });
}
