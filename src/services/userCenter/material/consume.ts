// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/**
 * 获取消费记录列表
 * @param {any} params - 查询参数
 * @param {any} sort - 排序参数
 * @param {any} filter - 过滤参数
 * @returns {Promise<any>} - 返回一个包含消费记录列表的Promise对象
 */
export async function page(params: any, sort: any, filter: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/inventory/consume/page.json';

  // 发送GET请求获取消费记录列表
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
 * 更新消费记录信息
 * @param {any} data - 包含更新数据的对象
 * @returns {Promise<any>} - 返回一个包含更新结果的Promise对象
 */
export async function update(data: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/inventory/consume/update.json';

  // 发送POST请求更新消费记录信息
  return request?.(url, {
    method: 'POST',
    data: data
  });
}

/**
 * 根据ID获取消费记录详情
 * @param {string} id - 消费记录的ID
 * @returns {Promise<any>} - 返回一个包含消费记录详情的Promise对象
 */
export async function getById(id: string) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/inventory/consume/getById.json';

  // 发送GET请求获取消费记录详情
  return request?.(url, {
    method: 'GET',
    params: {
      id: id,
    },
  });
}

/**
 * 删除消费记录
 * @param {Object} [options] - 可选的删除选项
 * @param {string} [options.id] - 要删除的消费记录的ID
 * @returns {Promise<any>} - 返回一个包含删除结果的Promise对象
 */
export async function del(options?: { [key: string]: any }) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/inventory/consume/del.json';

  // 发送POST请求删除消费记录
  return request?.(url, {
    method: 'POST',
    data: {
      ...options,
    },
  })
}

/**
 * 获取所有消费记录
 * @returns {Promise<any>} - 返回一个包含所有消费记录的Promise对象
 */
export async function arr() {
  // 定义请求的URL
  const url = "/staff/web/userCenter/inventory/consume/page.json";
  // 发送GET请求获取所有消费记录
  return request?.(url, {
    method: "GET",
    params: {
      pageNum: 1,
      pageSize: 0,
    },
  });
}

/**
 * 进行消费出库操作
 * @param {any} data - 包含出库数据的对象
 * @returns {Promise<any>} - 返回一个包含出库结果的Promise对象
 */
export async function consumeOutstock(data: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/inventory/outbill/consumeOutstock.json';
  // 发送POST请求进行消费出库
  return request?.(url, {
    method: 'POST',
    data: data
  });
}
