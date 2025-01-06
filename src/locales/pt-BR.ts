// 导入组件的本地化字符串
import component from './pt-BR/component';
// 导入全局头部的本地化字符串
import globalHeader from './pt-BR/globalHeader';
// 导入菜单的本地化字符串
import menu from './pt-BR/menu';
// 导入页面的本地化字符串
import pages from './pt-BR/pages';
// 导入PWA相关的本地化字符串
import pwa from './pt-BR/pwa';
// 导入设置抽屉的本地化字符串
import settingDrawer from './pt-BR/settingDrawer';
// 导入设置相关的本地化字符串
import settings from './pt-BR/settings';

/**
 * 导出的默认对象，包含了应用程序的各种本地化字符串。
 * 这些字符串用于在用户界面中显示不同的文本内容，以支持多语言功能。
 */
export default {
  // 导航栏语言选择的标签
  'navBar.lang': 'Idiomas',
  // 用户布局链接中的帮助选项
  'layout.user.link.help': 'ajuda',
  // 用户布局链接中的隐私选项
  'layout.user.link.privacy': 'política de privacidade',
  // 用户布局链接中的条款选项
  'layout.user.link.terms': 'termos de serviços',
  // 应用预览下载块的提示文本
  'app.preview.down.block': 'Download this page to your local project',
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
