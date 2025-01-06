// 导入组件的本地化字符串
import component from './en-US/component';
// 导入全局头部的本地化字符串
import globalHeader from './en-US/globalHeader';
// 导入菜单的本地化字符串
import menu from './en-US/menu';
// 导入页面的本地化字符串
import pages from './en-US/pages';
// 导入PWA相关的本地化字符串
import pwa from './en-US/pwa';
// 导入设置抽屉的本地化字符串
import settingDrawer from './en-US/settingDrawer';
// 导入设置相关的本地化字符串
import settings from './en-US/settings';

/**
 * 导出的默认对象，包含了应用程序的各种本地化字符串。
 * 这些字符串用于在用户界面中显示不同的文本内容，以支持多语言功能。
 */
export default {
  // 导航栏语言选择的标签
  'navBar.lang': 'Languages',
  // 用户布局链接中的帮助选项
  'layout.user.link.help': 'Help',
  // 用户布局链接中的隐私选项
  'layout.user.link.privacy': 'Privacy',
  // 用户布局链接中的条款选项
  'layout.user.link.terms': 'Terms',
  // 应用预览下载块的提示文本
  'app.preview.down.block': 'Download this page to your local project',
  // 应用欢迎链接中的获取全部区块选项
  'app.welcome.link.fetch-blocks': 'Get all block',
  // 应用欢迎链接中的基于区块开发的提示文本
  'app.welcome.link.block-list': 'Quickly build standard, pages based on `block` development',
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
  // 合并页面的本地化字符串
  ...pages,
};
