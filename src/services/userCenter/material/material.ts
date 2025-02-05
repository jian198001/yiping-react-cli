// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取列表 GET */
export async function page(params: any, sort: any, filter: any) {
  const url = '/staff/web/userCenter/purchase/material/page.json';

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
 * 获取材料列表
 * @param {any} params - 查询参数
 * @param {any} sort - 排序参数
 * @param {any} filter - 过滤参数
 * @returns {Promise<any>} - 返回一个包含材料列表的Promise对象
 */
export async function arr(params: any, sort: any, filter: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/purchase/material/page.json';

  // 发送GET请求获取材料列表
  return request?.(url, {
    method: 'GET',
    params: {
      params: params,
      sort: sort,
      filter: filter,
      pageSize: 0,
    },
  });
}

/**
 * 更新材料信息
 * @param {any} data - 包含更新数据的对象
 * @returns {Promise<any>} - 返回一个包含更新结果的Promise对象
 */
export async function update(data: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/purchase/material/update.json';

  // 发送POST请求更新材料信息
  return request?.(url, {
    method: 'POST',
    data: data
  });
}

/**
 * 根据ID获取材料详情
 * @param {string} id - 材料的ID
 * @returns {Promise<any>} - 返回一个包含材料详情的Promise对象
 */
export async function getById(id: string) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/purchase/material/getById.json';

  // 发送GET请求获取材料详情
  return request?.(url, {
    method: 'GET',
    params: {
      id: id,
    },
  });
}

/**
 * 删除材料
 * @param {Object} [options] - 可选的删除选项
 * @param {string} [options.id] - 要删除的材料的ID
 * @returns {Promise<any>} - 返回一个包含删除结果的Promise对象
 */
export async function del(options?: { [key: string]: any }) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/purchase/material/del.json';

  // 发送POST请求删除材料
  return request?.(url, {
    method: 'POST',
    data: {
      ...options,
    },
  })
}

/**
 * 获取材料明细列表
 * @param {string} orderId - 订单ID
 * @param {any} params - 查询参数
 * @param {any} sort - 排序参数
 * @param {any} filter - 过滤参数
 * @returns {Promise<any>} - 返回一个包含材料明细列表的Promise对象
 */
export async function pageItem(orderId: string, params: any, sort: any, filter: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/purchase/materialItem/page.json?orderId=' + orderId;

  // 发送GET请求获取材料明细列表
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
 * 更新材料明细信息
 * @param {any} data - 包含更新数据的对象
 * @returns {Promise<any>} - 返回一个包含更新结果的Promise对象
 */
export async function updateItem(data: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/purchase/material/updateItem.json';

  // 发送POST请求更新材料明细信息
  return request?.(url, {
    method: 'POST',
    data: data
  });
}

/**
 * 提交材料订单
 * @param {string} id - 订单ID
 * @returns {Promise<any>} - 返回一个包含提交结果的Promise对象
 */
export async function submit(id: string) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/purchase/material/submit.json?id=' + id;

  // 发送POST请求提交材料订单
  return request?.(url, {
    method: 'POST',
  });
}

/**
 * 进行采购入库操作
 * @param {any} data - 包含入库数据的对象
 * @returns {Promise<any>} - 返回一个包含入库结果的Promise对象
 */
export async function purchaseInstock(data: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/inventory/inbill/purchaseInstock.json';

  // 发送POST请求进行采购入库
  return request?.(url, {
    method: 'POST',
    data: data
  });
}