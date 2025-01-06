// 导入组件的本地化字符串
import component from './bn-BD/component';
// 导入全局头部的本地化字符串
import globalHeader from './bn-BD/globalHeader';
// 导入菜单的本地化字符串
import menu from './bn-BD/menu';
// 导入页面的本地化字符串
import pages from './bn-BD/pages';
// 导入PWA相关的本地化字符串
import pwa from './bn-BD/pwa';
// 导入设置抽屉的本地化字符串
import settingDrawer from './bn-BD/settingDrawer';
// 导入设置相关的本地化字符串
import settings from './bn-BD/settings';

/**
 * 导出的默认对象，包含了应用程序的各种本地化字符串。
 * 这些字符串用于在用户界面中显示不同的文本内容，以支持多语言功能。
 */
export default {
  // 导航栏语言选择的标签
  'navBar.lang': 'ভাষা',
  // 用户布局链接中的帮助选项
  'layout.user.link.help': 'সহায়তা',
  // 用户布局链接中的隐私选项
  'layout.user.link.privacy': 'গোপনীয়তা',
  // 用户布局链接中的条款选项
  'layout.user.link.terms': 'শর্তাদি',
  // 应用预览下载块的提示文本
  'app.preview.down.block': 'আপনার স্থানীয় প্রকল্পে এই পৃষ্ঠাটি ডাউনলোড করুন',
  // 应用欢迎链接中的获取全部区块选项
  'app.welcome.link.fetch-blocks': 'সমস্ত ব্লক পান',
  // 应用欢迎链接中的基于区块开发的提示文本
  'app.welcome.link.block-list':
    '`block` ডেভেলপমেন্ট এর উপর ভিত্তি করে দ্র��uত স্ট্যান্ডার্ড, পৃষ্ঠাসমূহ তৈরি করুন।',
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
