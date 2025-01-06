/**
 * 定义一个名为 tabKeyType 的类型，它可以是 'articles'、'applications' 或 'projects' 中的一个
 */
export type tabKeyType = 'articles' | 'applications' | 'projects';

/**
 * 定义一个名为 TagType 的接口，它有两个属性：key 和 label，都是字符串类型
 */
export interface TagType {
  key: string;
  label: string;
}

/**
 * 定义一个名为 GeographicType 的类型，它有两个属性：province 和 city，都是对象类型，每个对象有两个属性：label 和 key，都是字符串类型
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
 * 定义一个名为 NoticeType 的接口，它有九个属性：id、title、logo、description、updatedAt、member、href、memberLink，都是字符串类型
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
 * 定义一个名为 CurrentUser 的接口，它有十四个属性：name、avatar、userid、notice、email、signature、title、group、tags、notifyCount、unreadCount、country、geographic、address、phone，分别是字符串、字符串、字符串、NoticeType 数组、字符串、字符串、字符串、字符串、TagType 数组、数字、数字、字符串、GeographicType、字符串、字符串类型
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
 * 定义一个名为 Member 的接口，它有三个属性：avatar、name、id，都是字符串类型
 */
export type Member = {
  avatar: string;
  name: string;
  id: string;
};

/**
 * 定义一个名为 ListItemDataType 的接口，它有二十个属性：id、owner、title、avatar、cover、status、percent、logo、href、body、updatedAt、createdAt、subDescription、description、activeUser、newUser、star、like、message、content、members，分别是字符串、字符串、字符串、字符串、字符串、'normal' | 'exception' | 'active' | 'success'、数字、字符串、字符串、any、数字、数字、字符串、字符串、数字、数字、数字、数字、字符串、Member 数组类型
 */
export type ListItemDataType = {
  id: string;
  owner: string;
  title: string;
  avatar: string;
  cover: string;
  status: 'normal' | 'exception' | 'active' | 'success';
  percent: number;
  logo: string;
  href: string;
  body?: any;
  updatedAt: number;
  createdAt: number;
  subDescription: string;
  description: string;
  activeUser: number;
  newUser: number;
  star: number;
  like: number;
  message: number;
  content: string;
  members: Member[];
};
