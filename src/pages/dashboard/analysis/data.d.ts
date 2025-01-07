// 从 @antv/g2plot/esm/interface/config 导入 DataItem 类型
import { DataItem } from '@antv/g2plot/esm/interface/config';

/**
 * 导出 DataItem 类型
 */
export { DataItem };

/**
 * 定义访问数据类型
 * @interface VisitDataType
 * @property {string} x - 访问数据的 x 轴值
 * @property {number} y - 访问数据的 y 轴值
 */
export interface VisitDataType {
  x: string;
  y: number;
}

/**
 * 定义搜索数据类型
 * @interface SearchDataType
 * @property {number} index - 搜索数据的索引
 * @property {string} keyword - 搜索的关键词
 * @property {number} count - 搜索结果的数量
 * @property {number} range - 搜索范围
 * @property {number} status - 搜索状态
 */
export type SearchDataType = {
  index: number;
  keyword: string;
  count: number;
  range: number;
  status: number;
};

/**
 * 定义离线数据类型
 * @interface OfflineDataType
 * @property {string} name - 离线数据的名称
 * @property {number} cvr - 转化率
 */
export type OfflineDataType = {
  name: string;
  cvr: number;
};

/**
 * 定义离线图表数据类型
 * @interface OfflineChartData
 * @property {number} date - 离线图表数据的日期
 * @property {number} type - 离线图表数据的类型
 * @property {number} value - 离线图表数据的值
 */
export interface OfflineChartData {
  date: number;
  type: number;
  value: number;
}

/**
 * 定义雷达数据类型
 * @interface RadarData
 * @property {string} name - 雷达数据的名称
 * @property {string} label - 雷达数据的标签
 * @property {number} value - 雷达数据的值
 */
export interface RadarData {
  name: string;
  label: string;
  value: number;
}

/**
 * 定义分析数据类型
 * @interface AnalysisData
 * @property {DataItem[]} visitData - 访问数据数组
 * @property {DataItem[]} visitData2 - 访问数据数组2
 * @property {DataItem[]} salesData - 销售数据数组
 * @property {SearchDataType[]} searchData - 搜索数据数组
 * @property {OfflineDataType[]} offlineData - 离线数据数组
 * @property {OfflineChartData[]} offlineChartData - 离线图表数据数组
 * @property {DataItem[]} salesTypeData - 销售类型数据数组
 * @property {DataItem[]} salesTypeDataOnline - 在线销售类型数据数组
 * @property {DataItem[]} salesTypeDataOffline - 离线销售类型数据数组
 * @property {RadarData[]} radarData - 雷达数据数组
 */
export interface AnalysisData {
  visitData: DataItem[];
  visitData2: DataItem[];
  salesData: DataItem[];
  searchData: SearchDataType[];
  offlineData: OfflineDataType[];
  offlineChartData: DataItem[];
  salesTypeData: DataItem[];
  salesTypeDataOnline: DataItem[];
  salesTypeDataOffline: DataItem[];
  radarData: RadarData[];
}
