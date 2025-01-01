import { request } from '@umijs/max';
import type { CurrentUser, ListItemDataType } from './data.d';

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  return request('/staff/web/userCenter/auth/user/detail.json');
}

export async function queryFakeList(params: {
  count: number;
}): Promise<{ data: { list: ListItemDataType[] } }> {
  return request('/staff/web/userCenter/auth/user/center.json', {
    params,
  });
}
