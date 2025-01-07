// 从 @antv/g2plot/esm/interface/config 导入 DataItem 类型
import { DataItem } from '@antv/g2plot/esm/interface/config';

/**
 * 导出 DataItem 类型
 */
export { DataItem };

/**
 * 定义标签类型
 * @interface TagType
 * @property {string} key - 标签的唯一键
 * @property {string} label - 标签的显示文本
 */
export interface TagType {
  key: string;
  label: string;
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
 * @property {VisitDataType[]} visitData - 访问数据数组
 * @property {VisitDataType[]} visitData2 - 访问数据数组2
 * @property {VisitDataType[]} salesData - 销售数据数组
 * @property {SearchDataType[]} searchData - 搜索数据数组
 * @property {OfflineDataType[]} offlineData - 离线数据数组
 * @property {OfflineChartData[]} offlineChartData - 离线图表数据数组
 * @property {VisitDataType[]} salesTypeData - 销售类型数据数组
 * @property {VisitDataType[]} salesTypeDataOnline - 在线销售类型数据数组
 * @property {VisitDataType[]} salesTypeDataOffline - 离线销售类型数据数组
 * @property {DataItem[]} radarData - 雷达数据数组
 */
export type AnalysisData = {
  visitData: VisitDataType[];
  visitData2: VisitDataType[];
  salesData: VisitDataType[];
  searchData: SearchDataType[];
  offlineData: OfflineDataType[];
  offlineChartData: OfflineChartData[];
  salesTypeData: VisitDataType[];
  salesTypeDataOnline: VisitDataType[];
  salesTypeDataOffline: VisitDataType[];
  radarData: DataItem[];
};

/**
 * 定义地理类型
 * @interface GeographicType
 * @property {Object} province - 省份信息
 * @property {string} province.label - 省份的显示文本
 * @property {string} province.key - 省份的唯一键
 * @property {Object} city - 城市信息
 * @property {string} city.label - 城市的显示文本
 * @property {string} city.key - 城市的唯一键
 */
export type GeographicType = {
  province: {
    label: string;
    key: string;
  };
  city: {
    label: string;
    key: string;
  };
};

/**
 * 定义通知类型
 * @interface NoticeType
 * @property {string} id - 通知的唯一ID
 * @property {string} title - 通知的标题
 * @property {string} logo - 通知的图标
 * @property {string} description - 通知的描述
 * @property {string} updatedAt - 通知的更新时间
 * @property {string} member - 通知的成员
 * @property {string} href - 通知的链接
 * @property {string} memberLink - 成员链接
 */
export type NoticeType = {
  id: string;
  title: string;
  logo: string;
  description: string;
  updatedAt: string;
  member: string;
  href: string;
  memberLink: string;
};

/**
 * 定义当前用户类型
 * @interface CurrentUser
 * @property {string} name - 当前用户的姓名
 * @property {string} avatar - 当前用户的头像
 * @property {string} userid - 当前用户的ID
 * @property {NoticeType[]} notice - 当前用户的通知数组
 * @property {string} email - 当前用户的电子邮件
 * @property {string} signature - 当前用户的签名
 * @property {string} title - 当前用户的头衔
 * @property {string} group - 当前用户的组
 * @property {TagType[]} tags - 当前用户的标签数组
 * @property {number} notifyCount - 当前用户的通知数量
 * @property {number} unreadCount - 当前用户的未读通知数量
 * @property {string} country - 当前用户的国家
 * @property {GeographicType} geographic - 当前用户的地理信息
 * @property {string} address - 当前用户的地址
 * @property {string} phone - 当前用户的电话号码
 */
export type CurrentUser = {
  name: string;
  avatar: string;
  userid: string;
  notice: NoticeType[];
  email: string;
  signature: string;
  title: string;
  group: string;
  tags: TagType[];
  notifyCount: number;
  unreadCount: number;
  country: string;
  geographic: GeographicType;
  address: string;
  phone: string;
};

/**
 * 定义成员类型
 * @interface Member
 * @property {string} avatar - 成员的头像
 * @property {string} name - 成员的姓名
 * @property {string} id - 成员的ID
 */
export type Member = {
  avatar: string;
  name: string;
  id: string;
};

/**
 * 定义活动类型
 * @interface ActivitiesType
 * @property {string} id - 活动的唯一ID
 * @property {string} updatedAt - 活动的更新时间
 * @property {Object} user - 用户信息
 * @property {string} user.link - 用户链接
 * @property {string} user.name - 用户姓名
 * @property {string} user.avatar - 用户头像
 * @property {Object} group - 组信息
 * @property {string} group.name - 组名称
 * @property {string} group.link - 组链接
 * @property {Object} project - 项目信息
 * @property {string} project.name - 项目名称
 * @property {string} project.link - 项目链接
 * @property {string} template - 活动模板
 */
export type ActivitiesType = {
  id: string;
  updatedAt: string;
  user: {
    link?: string;
    name: string;
    avatar: string;
  };
  group: {
    name: string;
    link: string;
  };
  project: {
    name: string;
    link: string;
  };

  template: string;
};

/**
 * 定义雷达数据类型
 * @interface RadarDataType
 * @property {string} label - 雷达数据的标签
 * @property {string} name - 雷达数据的名称
 * @property {number} value - 雷达数据的值
 */
export type RadarDataType = {
  label: string;
  name: string;
  value: number;
};
