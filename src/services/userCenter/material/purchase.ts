// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/**
 * 获取采购订单列表
 * @param {any} params - 查询参数
 * @param {any} sort - 排序参数
 * @param {any} filter - 过滤参数
 * @returns {Promise<any>} - 返回一个包含采购订单列表的Promise对象
 */
export async function page(params: any, sort: any, filter: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/purchaseOrder/purchaseOrder/page.json';
  // 发送GET请求获取采购订单列表
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
 * 更新采购订单信息
 * @param {any} data - 包含更新数据的对象
 * @returns {Promise<any>} - 返回一个包含更新结果的Promise对象
 */
export async function update(data: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/purchaseOrder/purchaseOrder/update.json';
  // 发送POST请求更新采购订单信息
  return request?.(url, {
    method: 'POST',
    data: data
  });
}

/**
 * 根据ID获取采购订单详情
 * @param {string} id - 采购订单的ID
 * @returns {Promise<any>} - 返回一个包含采购订单详情的Promise对象
 */
export async function getById(id: string) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/purchaseOrder/purchaseOrder/getById.json';
  // 发送GET请求获取采购订单详情
  return request?.(url, {
    method: 'GET',
    params: {
      id: id,
    },
  });
}

/**
 * 删除采购订单
 * @param {Object} [options] - 可选的删除选项
 * @param {string} [options.id] - 要删除的采购订单的ID
 * @returns {Promise<any>} - 返回一个包含删除结果的Promise对象
 */
export async function del(options?: { [key: string]: any }) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/purchaseOrder/purchaseOrder/del.json';
  // 发送POST请求删除采购订单
  return request?.(url, {
    method: 'POST',
    data: {
      ...options,
    },
  })
}

/**
 * 获取所有采购订单
 * @returns {Promise<any>} - 返回一个包含所有采购订单的Promise对象
 */
export async function arr() {
  // 定义请求的URL
  const url = "/staff/web/userCenter/purchaseOrder/purchaseOrder/page.json";
  // 发送GET请求获取所有采购订单
  return request?.(url, {
    method: "GET",
    params: {
      pageNum: 1,
      pageSize: 0,
    },
  });
}

/**
 * 获取采购订单明细列表
 * @param {string} orderId - 采购订单的ID
 * @param {any} params - 查询参数
 * @param {any} sort - 排序参数
 * @param {any} filter - 过滤参数
 * @returns {Promise<any>} - 返回一个包含采购订单明细列表的Promise对象
 */
export async function pageItem(orderId: string, params: any, sort: any, filter: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/purchaseOrder/purchaseOrderItem/page.json?orderId=' + orderId;
  // 发送GET请求获取采购订单明细列表
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
 * 更新采购订单明细信息
 * @param {any} data - 包含更新数据的对象
 * @returns {Promise<any>} - 返回一个包含更新结果的Promise对象
 */
export async function updateItem(data: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/purchaseOrder/purchaseOrder/updateItem.json';
  // 发送POST请求更新采购订单明细信息
  return request?.(url, {
    method: 'POST',
    data: data
  });
}

/**
 * 删除采购订单明细
 * @param {Object} [options] - 可选的删除选项
 * @param {string} [options.id] - 要删除的采购订单明细的ID
 * @returns {Promise<any>} - 返回一个包含删除结果的Promise对象
 */
export async function delItem(options?: { [key: string]: any }) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/purchaseOrder/purchaseOrder/del.json';
  // 发送POST请求删除采购订单明细
  return request?.(url, {
    method: 'POST',
    data: {
      ...options,
    },
  })
}

/**
 * 提交采购订单
 * @param {string} id - 采购订单的ID
 * @returns {Promise<any>} - 返回一个包含提交结果的Promise对象
 */
export async function submit(id: string) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/purchaseOrder/purchaseOrder/submit.json?id=' + id;
  // 发送POST请求提交采购订单
  return request?.(url, {
    method: 'POST', 
  });
}

/**
 * 采购入库
 * @param {any} data - 包含入库数据的对象
 * @returns {Promise<any>} - 返回一个包含入库结果的Promise对象
 */
export async function purchaseInstock(data: any,) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/inventory/inbill/purchaseInstock.json';
  // 发送POST请求进行采购入库
  return request?.(url, {
    method: 'POST',
    data: data
  });
}