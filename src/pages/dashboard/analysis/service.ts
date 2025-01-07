// 导入 request 函数，用于发送 HTTP 请求
import { request } from '@umijs/max';
// 导入 AnalysisData 类型，用于定义分析数据的数据结构
import type { AnalysisData } from './data';

/**
 * 获取假的图表数据
 * @returns {Promise<{ data: AnalysisData }>} 返回包含分析数据的 Promise 对象
 */
export async function fakeChartData(): Promise<{ data: AnalysisData }> {
  // 发送 GET 请求到 /api/fake_analysis_chart_data 端点
  return request('/api/fake_analysis_chart_data');
}
