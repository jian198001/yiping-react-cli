// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取列表 GET */
export async function page(params: any, sort: any, filter: any) {
  const url = '/staff/web/userCenter/trade/buyer/profitSharing/page.json';

  return request?.(url, {
    method: 'GET',
    params: {
      params: params,
      sort: sort,
      filter: filter,
    },
  });
}

export async function update(data: any) {
  const url = '/staff/web/userCenter/trade/buyer/profitSharing/update.json';

  return request?.(url, {
    method: 'POST',
    data: data
  });
}
export async function getById(id: string) {

    const url = '/staff/web/userCenter/trade/buyer/profitSharing/getById.json'

    return request?.(url, {
        method: 'GET',
        params: {
          id: id,
        },
      });

}

export async function del(options?: { [key: string]: any }) {
  const url = '/staff/web/userCenter/trade/buyer/profitSharing/del.json';

  return request?.(url, {
    method: 'POST',
    data: {
      ...options,
    },
  })
}
 