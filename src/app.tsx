import { AvatarDropdown, AvatarName, Footer, SelectLang } from '@/components'; 
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RequestConfig, RunTimeLayoutConfig } from '@umijs/max';
import { history} from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';
import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * 获取初始状态的异步函数，返回包含布局设置和当前用户信息的对象
 * @returns {Promise<{settings?: Partial<LayoutSettings>, currentUser?: API.CurrentUser, loading?: boolean, fetchUserInfo?: () => Promise<API.CurrentUser | undefined>}>} - 包含布局设置和当前用户信息的对象
 */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {

  /**
   * 异步获取当前用户信息的函数
   * @returns {Promise<API.CurrentUser | undefined>} - 当前用户信息或undefined
   */
  const fetchUserInfo = async () => {
    try {
      // 调用查询当前用户的API
      let msg = await queryCurrentUser({
        skipErrorHandler: true,
      });
      // 打印查询结果
      console.log(msg);      
      // 返回查询到的用户数据
      return msg.data;
    } catch (error) {
      // 如果发生错误，重定向到登录页面
      history.push(loginPath);
    }
    return undefined;
  };
  // 如果不是登录页面，执行
  const { location } = history;
  if (![loginPath, '/user/register', '/user/register-result'].includes(location.pathname)) {
    // 获取当前用户信息
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings as Partial<LayoutSettings>,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    // 渲染动作栏的函数，返回一个包含语言选择组件的数组
    actionsRender: () => [<SelectLang key="SelectLang" />],
    // 头像属性，设置头像的源、标题和渲染函数
    avatarProps: {
      src: initialState?.currentUser?.avatar,
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    // 水印属性，设置水印的内容为当前用户的名称
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    // 页脚渲染函数，返回一个页脚组件
    footerRender: () => <Footer />,
    // 页面切换时的回调函数，用于处理未登录时的重定向
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        // return
        history.push(loginPath);
      }
    },
    // 背景布局图片列表，设置背景图片的源、位置和高度
    bgLayoutImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
    ],
    // 开发环境下的链接列表，用于调试
    links: isDev
      ? [
           
        ]
      : [],
    // 菜单头部渲染函数，未定义
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {isDev && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    // 右侧渲染函数，未实现
    rightRender: (initialState, setInitialState) => {
      // xxx
      return 'xxx';
    },
    // 扩展布局设置
    ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request: RequestConfig = {
  // 请求的基础URL
  baseURL: '/api',
  // 错误配置
  ...errorConfig,
};
