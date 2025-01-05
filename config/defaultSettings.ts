// 导入 ProLayoutProps 类型
import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name 默认设置
 * @description 定义应用的默认布局和主题设置
 */
const Settings: ProLayoutProps & {
  // 是否启用 PWA
  pwa?: boolean;
  // 应用的 logo 图标
  logo?: string;
} = {
  // 导航栏主题
  navTheme: 'light',
  // 主色调
  colorPrimary: '#1890ff',
  // 布局模式
  layout: 'mix',
  // 内容宽度
  contentWidth: 'Fluid',
  // 是否固定头部
  fixedHeader: false,
  // 是否固定侧边栏
  fixSiderbar: true,
  // 是否启用颜色弱化
  colorWeak: false,
  // 应用标题
  title: '一平管理系统',
  // 是否启用 PWA
  pwa: true,
  // logo 图标 URL
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  // iconfont URL
  iconfontUrl: '',
  // 样式令牌
  token: {
    // 参见 ts 声明，demo 见文档，通过 token 修改样式
    // https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
  },
};

export default Settings;
