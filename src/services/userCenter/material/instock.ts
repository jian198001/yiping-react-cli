// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/**
 * 获取入库单列表
 * @param {any} params - 查询参数
 * @param {any} sort - 排序参数
 * @param {any} filter - 过滤参数
 * @returns {Promise<any>} - 返回一个包含入库单列表的Promise对象
 */
export async function page(params: any, sort: any, filter: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/inventory/inbill/page.json';
  // 发送GET请求获取入库单列表
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
 * 更新入库单信息
 * @param {any} data - 包含更新数据的对象
 * @returns {Promise<any>} - 返回一个包含更新结果的Promise对象
 */
export async function update(data: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/inventory/inbill/update.json';
  // 发送POST请求更新入库单信息
  return request?.(url, {
    method: 'POST',
    data: data
  });
}

/**
 * 根据ID获取入库单详情
 * @param {string} id - 入库单的ID
 * @returns {Promise<any>} - 返回一个包含入库单详情的Promise对象
 */
export async function getById(id: string) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/inventory/inbill/getById.json';
  // 发送GET请求获取入库单详情
  return request?.(url, {
    method: 'GET',
    params: {
      id: id,
    },
  });
}

/**
 * 删除入库单
 * @param {Object} [options] - 可选的删除选项
 * @param {string} [options.id] - 要删除的入库单的ID
 * @returns {Promise<any>} - 返回一个包含删除结果的Promise对象
 */
export async function del(options?: { [key: string]: any }) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/inventory/inbill/del.json';
  // 发送POST请求删除入库单
  return request?.(url, {
    method: 'POST',
    data: {
      ...options,
    },
  })
}

/**
 * 获取所有入库单
 * @returns {Promise<any>} - 返回一个包含所有入库单的Promise对象
 */
export async function arr() {
  // 定义请求的URL
  const url = "/staff/web/userCenter/inventory/inbill/page.json";
  // 发送GET请求获取所有入库单
  return request?.(url, {
    method: "GET",
    params: {
      pageNum: 1,
      pageSize: 0,
    },
  });
}

/**
 * 进行入库操作
 * @param {any} data - 包含入库数据的对象
 * @returns {Promise<any>} - 返回一个包含入库结果的Promise对象
 */
export async function consumeInstock(data: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/inventory/inbill/consumeInstock.json';
  // 发送POST请求进行入库
  return request?.(url, {
    method: 'POST',
    data: data
  });
}
