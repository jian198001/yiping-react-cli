import { outLogin } from '@/services/ant-design-pro/api';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { history, useModel } from '@umijs/max';
import { Spin } from 'antd';
import { createStyles } from 'antd-style';
import { stringify } from 'querystring';
import React, { useCallback } from 'react';
import { flushSync } from 'react-dom';
import HeaderDropdown from '../HeaderDropdown';

/**
 * 全局头部右侧组件的属性类型
 * @typedef {Object} GlobalHeaderRightProps
 * @property {boolean} [menu] - 是否显示菜单
 * @property {React.ReactNode} [children] - 子组件
 */
export type GlobalHeaderRightProps = {
  // 是否显示菜单，可选
  menu?: boolean;
  // 子组件，可选
  children?: React.ReactNode;
};

/**
 * 显示当前用户名称的组件
 * @returns {JSX.Element} 包含用户名称的 span 元素
 */
export const AvatarName = () => {
  // 使用 useModel 钩子函数获取初始状态
  const { initialState } = useModel('@@initialState');
  // 从初始状态中获取当前用户
  const { currentUser } = initialState || {};
  // 返回包含用户名称的 span 元素
  return <span className="anticon">{currentUser?.name}</span>;
};

/**
 * 创建样式的钩子函数
 * @param {Object} params - 包含 Ant Design 主题 token 的对象
 * @param {Object} params.token - Ant Design 主题 token
 * @returns {Object} 包含样式的对象
 */
const useStyles = createStyles(({ token }) => {
  return {
    // 定义一个名为 action 的样式类
    action: {
      // 弹性布局
      display: 'flex',
      // 高度为 48px
      height: '48px',
      // 自动外边距，使其在父容器中靠右对齐
      marginLeft: 'auto',
      // 溢出隐藏
      overflow: 'hidden',
      // 垂直居中对齐
      alignItems: 'center',
      // 内边距为 0 8px
      padding: '0 8px',
      // 鼠标指针为指针样式
      cursor: 'pointer',
      // 边框半径使用 token 中的边框半径
      borderRadius: token.borderRadius,
      // 鼠标悬停时的背景颜色使用 token 中的背景文本悬停颜色
      '&:hover': {
        backgroundColor: token.colorBgTextHover,
      },
    },
  };
});

/**
 * 头像下拉菜单组件
 * @param {GlobalHeaderRightProps} props - 组件的属性
 * @returns {JSX.Element} 头像下拉菜单组件的 JSX 元素
 */
export const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu, children }) => {
  /**
   * 退出登录，并且将当前的 url 保存
   */
  const loginOut = async () => {
    // 调用 outLogin 函数退出登录
    await outLogin();
    // 获取当前页面的搜索参数和路径名
    const { search, pathname } = window.location;
    // 创建一个 URLSearchParams 对象，用于处理 URL 中的查询参数
    const urlParams = new URL(window.location.href).searchParams;
    /** 此方法会跳转到 redirect 参数所在的位置 */
    // 获取 redirect 参数的值
    const redirect = urlParams.get('redirect');
    // Note: There may be security issues, please note
    // 如果当前路径不是登录页面且没有 redirect 参数，则跳转到登录页面并保存当前路径
    if (window.location.pathname !== '/user/login' && !redirect) {
      history.replace({
        // 路径名为登录页面
        pathname: '/user/login',
        // 将当前路径和搜索参数转换为查询字符串，并作为 redirect 参数的值
        search: stringify({
          redirect: pathname + search,
        }),
      });
    }
  };

  // 使用 useStyles 钩子函数获取样式
  const { styles } = useStyles();

  // 使用 useModel 钩子函数获取初始状态和设置初始状态的函数
  const { initialState, setInitialState } = useModel('@@initialState');

  /**
   * 菜单点击事件处理函数
   * @param {Object} event - 点击事件对象
   */
  const onMenuClick = useCallback(
    (event: any) => {
      // 获取点击事件的 key 值
      const { key } = event;
      // 如果 key 值为 logout，则执行退出登录操作
      if (key === 'logout') {
        // 使用 flushSync 函数同步更新状态
        flushSync(() => {
          // 将当前用户设置为 undefined
          setInitialState((s) => ({ ...s, currentUser: undefined }));
        });
        // 调用 loginOut 函数退出登录
        loginOut();
        return;
      }
      // 否则跳转到对应的账户页面
      history.push(`/account/${key}`);
    },
    // 设置初始状态的函数作为依赖项
    [setInitialState],
  );

  // 定义一个加载状态的组件
  const loading = (
    <span className={styles.action}>
      <Spin
        size="small"
        style={{
          // 左边距为 8px
          marginLeft: 8,
          // 右边距为 8px
          marginRight: 8,
        }}
      />
    </span>
  );

  // 如果初始状态不存在，则返回加载状态的组件
  if (!initialState) {
    return loading;
  }

  // 从初始状态中获取当前用户
  const { currentUser } = initialState;

  // 如果当前用户不存在或用户名称不存在，则返回加载状态的组件
  if (!currentUser || !currentUser.name) {
    return loading;
  }

  // 定义菜单选项数组
  const menuItems = [
    // 如果 menu 属性为 true，则添加个人中心和个人设置选项
    ...(menu
      ? [
          {
            // 选项的 key 值
            key: 'center',
            // 选项的图标
            icon: <UserOutlined />,
            // 选项的标签
            label: '个人中心',
          },
          {
            // 选项的 key 值
            key: 'settings',
            // 选项的图标
            icon: <SettingOutlined />,
            // 选项的标签
            label: '个人设置',
          },
          {
            // 选项的类型为 divider
            type: 'divider' as const,
          },
        ]
      : []),
    {
      // 选项的 key 值
      key: 'logout',
      // 选项的图标
      icon: <LogoutOutlined />,
      // 选项的标签
      label: '退出登录',
    },
  ];

  // 返回 HeaderDropdown 组件，并传递菜单选项和点击事件处理函数
  return (
    <HeaderDropdown
      menu={{
        // 选中的 key 值为空数组
        selectedKeys: [],
        // 点击事件处理函数
        onClick: onMenuClick,
        // 菜单选项数组
        items: menuItems,
      }}
    >
      {children}
    </HeaderDropdown>
  );
};
