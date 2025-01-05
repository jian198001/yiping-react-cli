// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/**
 * 获取职位列表
 * @param {any} params - 查询参数
 * @param {any} sort - 排序参数
 * @param {any} filter - 过滤参数
 * @returns {Promise<any>} - 返回一个包含职位列表的Promise对象
 */
export async function page(params: any, sort: any, filter: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/oa/post/page.json';
  // 发送GET请求获取职位列表
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
 * 更新职位信息
 * @param {any} data - 包含更新数据的对象
 * @returns {Promise<any>} - 返回一个包含更新结果的Promise对象
 */
export async function update(data: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/oa/post/update.json';
  // 发送POST请求更新职位信息
  return request?.(url, {
    method: 'POST',
    data: data
  });
}

/**
 * 根据ID获取职位详情
 * @param {string} id - 职位的ID
 * @returns {Promise<any>} - 返回一个包含职位详情的Promise对象
 */
export async function getById(id: string) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/oa/post/getById.json';
  // 发送GET请求获取职位详情
  return request?.(url, {
    method: 'GET',
    params: {
      id: id,
    },
  });
}

/**
 * 删除职位
 * @param {Object} [options] - 可选的删除选项
 * @param {string} [options.id] - 要删除的职位的ID
 * @returns {Promise<any>} - 返回一个包含删除结果的Promise对象
 */
export async function del(options?: { [key: string]: any }) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/oa/post/del.json';
  // 发送POST请求删除职位
  return request?.(url, {
    method: 'POST',
    data: {
      ...options,
    },
  })
}

/**
 * 获取所有职位
 * @returns {Promise<any>} - 返回一个包含所有职位的Promise对象
 */
export async function arr() {
  // 定义请求的URL
  const url = "/staff/web/userCenter/oa/post/page.json";
  // 发送GET请求获取所有职位
  return request?.(url, {
    method: "GET",
    params: {
      pageNum: 1,
      pageSize: 0,
    },
  });
}
