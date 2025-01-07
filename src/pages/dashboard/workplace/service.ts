// 导入 request 函数，用于发送 HTTP 请求
import { request } from '@umijs/max';
// 导入 ActivitiesType、AnalysisData、NoticeType 类型，用于定义活动、分析数据和通知的数据结构
import type { ActivitiesType, AnalysisData, NoticeType } from './data';

/**
 * 查询项目通知数据
 * @returns {Promise<{ data: NoticeType[] }>} 返回包含通知数据的 Promise 对象
 */
export async function queryProjectNotice(): Promise<{ data: NoticeType[] }> {
  // 发送 GET 请求到 /api/project/notice 端点
  return request('/api/project/notice');
}

/**
 * 查询活动数据
 * @returns {Promise<{ data: ActivitiesType[] }>} 返回包含活动数据的 Promise 对象
 */
export async function queryActivities(): Promise<{ data: ActivitiesType[] }> {
  // 发送 GET 请求到 /api/activities 端点
  return request('/api/activities');
}

/**
 * 获取假的图表数据
 * @returns {Promise<{ data: AnalysisData }>} 返回包含分析数据的 Promise 对象
 */
export async function fakeChartData(): Promise<{ data: AnalysisData }> {
  // 发送 GET 请求到 /api/fake_workplace_chart_data 端点
  return request('/api/fake_workplace_chart_data');
}
