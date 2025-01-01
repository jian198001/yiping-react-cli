import { request } from '@umijs/max';
import type { CurrentUser, GeographicItemType } from './data';

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  return request('/staff/web/userCenter/auth/user/setting.json');
}

export async function queryProvince(): Promise<{ data: GeographicItemType[] }> {
  return request('/staff/web/userCenter/region/region/region.json');
}

export async function queryCity(province: string): Promise<{ data: GeographicItemType[] }> {
  return request(`/staff/web/userCenter/region/region/city.json`);
}

export async function query() {
  return request('/api/users');
}
