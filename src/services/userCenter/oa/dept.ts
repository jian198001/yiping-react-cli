// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/**
 * 获取部门列表
 * @param {any} params - 查询参数
 * @param {any} sort - 排序参数
 * @param {any} filter - 过滤参数
 * @returns {Promise<any>} - 返回一个包含部门列表的Promise对象
 */
export async function page(params: any, sort: any, filter: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/oa/dept/page.json';

  // 发送GET请求获取部门列表
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
 * 更新部门信息
 * @param {any} data - 包含更新数据的对象
 * @returns {Promise<any>} - 返回一个包含更新结果的Promise对象
 */
export async function update(data: any) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/oa/dept/update.json';

  // 发送POST请求更新部门信息
  return request?.(url, {
    method: 'POST',
    data: data
  });
}

/**
 * 根据ID获取部门详情
 * @param {string} id - 部门的ID
 * @returns {Promise<any>} - 返回一个包含部门详情的Promise对象
 */
export async function getById(id: string) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/oa/dept/getById.json';

  // 发送GET请求获取部门详情
  return request?.(url, {
    method: 'GET',
    params: {
      id: id,
    },
  });
}

/**
 * 删除部门
 * @param {Object} [options] - 可选的删除选项
 * @param {string} [options.id] - 要删除的部门的ID
 * @returns {Promise<any>} - 返回一个包含删除结果的Promise对象
 */
export async function del(options?: { [key: string]: any }) {
  // 定义请求的URL
  const url = '/staff/web/userCenter/oa/dept/del.json';

  // 发送POST请求删除部门
  return request?.(url, {
    method: 'POST',
    data: {
      ...options,
    },
  })
}

/**
 * 获取所有部门
 * @returns {Promise<any>} - 返回一个包含所有部门的Promise对象
 */
export async function arr() {
  // 定义请求的URL
  const url = "/staff/web/userCenter/oa/dept/page.json";

  // 发送GET请求获取所有部门
  return request?.(url, {
    method: "GET",
    params: {
      pageNum: 1,
      pageSize: 0,
    },
  });
}
