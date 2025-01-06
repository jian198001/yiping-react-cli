// 导入组件的本地化字符串
import component from './zh-CN/component';
// 导入全局头部的本地化字符串
import globalHeader from './zh-CN/globalHeader';
// 导入菜单的本地化字符串
import menu from './zh-CN/menu';
// 导入页面的本地化字符串
import pages from './zh-CN/pages';
// 导入PWA相关的本地化字符串
import pwa from './zh-CN/pwa';
// 导入设置抽屉的本地化字符串
import settingDrawer from './zh-CN/settingDrawer';
// 导入设置相关的本地化字符串
import settings from './zh-CN/settings';
// 导入标签的本地化字符串
import tabs from './zh-CN/tabs';

/**
 * 导出的默认对象，包含了应用程序的各种本地化字符串。
 * 这些字符串用于在用户界面中显示不同的文本内容，以支持多语言功能。
 */
export default {
  // 导航栏语言选择的标签
  'navBar.lang': '语言',
  // 用户布局链接中的帮助选项
  'layout.user.link.help': '帮助',
  // 用户布局链接中的隐私选项
  'layout.user.link.privacy': '隐私',
  // 用户布局链接中的条款选项
  'layout.user.link.terms': '条款',
  // 应用预览下载块的提示文本
  'app.preview.down.block': '下载此页面到本地项目',
  // 应用欢迎链接中的获取全部区块选项
  'app.welcome.link.fetch-blocks': '获取全部区块',
  // 应用欢迎链接中的基于区块开发的提示文本
  'app.welcome.link.block-list': '基于 block 开发，快速构建标准页面',
  // 合并页面的本地化字符串
  ...pages,
  // 合并全局头部的本地化字符串
  ...globalHeader,
  // 合并菜单的本地化字符串
  ...menu,
  // 合并设置抽屉的本地化字符串
  ...settingDrawer,
  // 合并设置相关的本地化字符串
  ...settings,
  // 合并PWA相关的本地化字符串
  ...pwa,
  // 合并组件的本地化字符串
  ...component,
  // 合并标签的本地化字符串
  ...tabs,
};
