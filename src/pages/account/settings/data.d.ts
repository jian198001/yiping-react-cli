/**
 * 定义标签类型
 * @interface TagType
 * @property {string} key - 标签的唯一标识符
 * @property {string} label - 标签的显示名称
 */
export type TagType = {
  key: string;
  label: string;
};

/**
 * 定义地理项目类型
 * @interface GeographicItemType
 * @property {string} name - 地理项目的名称
 * @property {string} id - 地理项目的唯一标识符
 */
export type GeographicItemType = {
  name: string;
  id: string;
};

/**
 * 定义地理类型
 * @interface GeographicType
 * @property {GeographicItemType} province - 省份信息
 * @property {GeographicItemType} city - 城市信息
 */
export type GeographicType = {
  province: GeographicItemType;
  city: GeographicItemType;
};

/**
 * 定义通知类型
 * @interface NoticeType
 * @property {string} id - 通知的唯一标识符
 * @property {string} title - 通知的标题
 * @property {string} logo - 通知的图标
 * @property {string} description - 通知的描述
 * @property {string} updatedAt - 通知的更新时间
 * @property {string} member - 通知的成员
 * @property {string} href - 通知的链接
 * @property {string} memberLink - 成员的链接
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
 * @property {string} name - 用户的名称
 * @property {string} avatar - 用户的头像
 * @property {string} userid - 用户的唯一标识符
 * @property {NoticeType[]} notice - 用户的通知列表
 * @property {string} email - 用户的电子邮件
 * @property {string} signature - 用户的签名
 * @property {string} title - 用户的头衔
 * @property {string} group - 用户的组
 * @property {TagType[]} tags - 用户的标签列表
 * @property {number} notifyCount - 用户的通知数量
 * @property {number} unreadCount - 用户的未读通知数量
 * @property {string} country - 用户的国家
 * @property {GeographicType} geographic - 用户的地理信息
 * @property {string} address - 用户的地址
 * @property {string} phone - 用户的电话号码
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
