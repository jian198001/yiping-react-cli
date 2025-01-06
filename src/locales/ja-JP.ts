// 导入组件的本地化字符串
import component from './ja-JP/component';
// 导入全局头部的本地化字符串
import globalHeader from './ja-JP/globalHeader';
// 导入菜单的本地化字符串
import menu from './ja-JP/menu';
// 导入页面的本地化字符串
import pages from './ja-JP/pages';
// 导入PWA相关的本地化字符串
import pwa from './ja-JP/pwa';
// 导入设置抽屉的本地化字符串
import settingDrawer from './ja-JP/settingDrawer';
// 导入设置相关的本地化字符串
import settings from './ja-JP/settings';

/**
 * 导出的默认对象，包含了应用程序的各种本地化字符串。
 * 这些字符串用于在用户界面中显示不同的文本内容，以支持多语言功能。
 */
export default {
  // 导航栏语言选择的标签
  'navBar.lang': '言語',
  // 用户布局链接中的帮助选项
  'layout.user.link.help': 'ヘルプ',
  // 用户布局链接中的隐私选项
  'layout.user.link.privacy': 'プライバシー',
  // 用户布局链接中的条款选项
  'layout.user.link.terms': '利用規約',
  // 应用预览下载块的提示文本
  'app.preview.down.block': 'このページをローカルプロジェクトにダウンロードしてください',
  // 应用欢迎链接中的获取全部区块选项
  'app.welcome.link.fetch-blocks': '',
  // 应用欢迎链接中的基于区块开发的提示文本
  'app.welcome.link.block-list': '',
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
