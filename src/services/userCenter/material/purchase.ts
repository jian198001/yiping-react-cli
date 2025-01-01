// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取列表 GET */
export async function page(params: any, sort: any, filter: any) {
  const url = '/staff/web/userCenter/purchaseOrder/purchaseOrder/page.json';

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
  const url = '/staff/web/userCenter/purchaseOrder/purchaseOrder/update.json';

  return request?.(url, {
    method: 'POST',
    data: data
  });
}

export async function getById(id: string) {

    const url = '/staff/web/userCenter/purchaseOrder/purchaseOrder/getById.json'

    return request?.(url, {
        method: 'GET',
        params: {
          id: id,
        },
      });

}

export async function del(options?: { [key: string]: any }) {
  const url = '/staff/web/userCenter/purchaseOrder/purchaseOrder/del.json';

  return request?.(url, {
    method: 'POST',
    data: {
      ...options,
    },
  })
}

export async function arr() {
  const url = "/staff/web/userCenter/purchaseOrder/purchaseOrder/page.json";

  return request?.(url, {
    method: "GET",
    params: {
      pageNum: 1,
      pageSize: 0,
    },
  });
}

export async function pageItem(orderId: string, params: any, sort: any, filter: any) {
  const url = '/staff/web/userCenter/purchaseOrder/purchaseOrderItem/page.json?orderId=' + orderId;

  return request?.(url, {
    method: 'GET',
    params: {
      params: params,
      sort: sort,
      filter: filter,
    },
  });
}

export async function updateItem(data: any) {

  const url = '/staff/web/userCenter/purchaseOrder/purchaseOrder/updateItem.json';

  return request?.(url, {
    method: 'POST',
    data: data
  });
}

export async function delItem(options?: { [key: string]: any }) {
  const url = '/staff/web/userCenter/purchaseOrder/purchaseOrder/del.json';

  return request?.(url, {
    method: 'POST',
    data: {
      ...options,
    },
  })
}

export async function submit(id: string) {
  const url = '/staff/web/userCenter/purchaseOrder/purchaseOrder/submit.json?id=' + id;

  return request?.(url, {
    method: 'POST', 
  });
}

export async function purchaseInstock(data: any,) {
  
  const url = '/staff/web/userCenter/inventory/inbill/purchaseInstock.json';

  return request?.(url, {
    method: 'POST',
    data: data
  });

}