// 从 @ant-design/pro-components 中导入 GridContent 组件
import { GridContent } from '@ant-design/pro-components';
// 从 antd 中导入 Menu 组件
import { Menu } from 'antd';
// 从 react 中导入 useLayoutEffect、useRef 和 useState 钩子
import React, { useLayoutEffect, useRef, useState } from 'react';
// 导入 BaseView 组件
import BaseView from './components/base';
// 导入 BindingView 组件
import BindingView from './components/binding';
// 导入 NotificationView 组件
import NotificationView from './components/notification';
// 导入 SecurityView 组件
import SecurityView from './components/security';
// 导入 useStyles 钩子
import useStyles from './style.style';

// 定义 SettingsStateKeys 类型
type SettingsStateKeys = 'base' | 'security' | 'binding' | 'notification';
// 定义 SettingsState 类型
type SettingsState = {
  // 菜单模式，可选值为 'inline' 或 'horizontal'
  mode: 'inline' | 'horizontal';
  // 当前选中的菜单项键
  selectKey: SettingsStateKeys;
};

/**
 * 设置页面组件
 * @returns {JSX.Element} 设置页面的 JSX 元素
 */
const Settings: React.FC = () => {
  // 使用 useStyles 钩子获取样式
  const { styles } = useStyles();
  // 定义菜单映射，将菜单项键映射到显示名称
  const menuMap: Record<string, React.ReactNode> = {
    base: '基本设置',
    security: '安全设置',
    binding: '账号绑定',
    notification: '新消息通知',
  };
  // 使用 useState 钩子设置初始配置状态
  const [initConfig, setInitConfig] = useState<SettingsState>({
    // 初始菜单模式为 'inline'
    mode: 'inline',
    // 初始选中的菜单项键为 'base'
    selectKey: 'base',
  });
  // 使用 useRef 钩子创建一个 ref 用于引用 DOM 元素
  const dom = useRef<HTMLDivElement>();

  /**
   * 调整窗口大小时的处理函数
   */
  const resize = () => {
    // 使用 requestAnimationFrame 在下一帧执行回调函数
    requestAnimationFrame(() => {
      // 如果没有引用到 DOM 元素，则直接返回
      if (!dom.current) {
        return;
      }
      // 定义 mode 变量，初始值为 'inline'
      let mode: 'inline' | 'horizontal' = 'inline';
      // 获取 DOM 元素的宽度
      const { offsetWidth } = dom.current;
      // 如果 DOM 元素的宽度小于 641px 且大于 400px，则将 mode 设置为 'horizontal'
      if (dom.current.offsetWidth < 641 && offsetWidth > 400) {
        mode = 'horizontal';
      }
      // 如果窗口的宽度小于 768px 且 DOM 元素的宽度大于 400px，则将 mode 设置为 'horizontal'
      if (window.innerWidth < 768 && offsetWidth > 400) {
        mode = 'horizontal';
      }
      // 更新 initConfig 状态，设置 mode 属性
      setInitConfig({
        ...initConfig,
        mode: mode as SettingsState['mode'],
      });
    });
  };

  // 使用 useLayoutEffect 钩子在组件挂载和更新时添加和移除窗口大小调整事件监听器
  useLayoutEffect(() => {
    // 如果引用到了 DOM 元素，则添加窗口大小调整事件监听器
    if (dom.current) {
      window.addEventListener('resize', resize);
      // 调用 resize 函数
      resize();
    }
    // 在组件卸载时移除窗口大小调整事件监听器
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [dom.current]);

  /**
   * 获取菜单配置
   * @returns {MenuProps['items']} 菜单配置数组
   */
  const getMenu = () => {
    // 返回一个数组，其中包含根据 menuMap 生成的菜单项配置
    return Object.keys(menuMap).map((item) => ({ key: item, label: menuMap[item] }));
  };

  /**
   * 渲染子组件
   * @returns {JSX.Element} 根据当前选中的菜单项键渲染的子组件
   */
  const renderChildren = () => {
    // 获取当前选中的菜单项键
    const { selectKey } = initConfig;
    // 根据 selectKey 渲染不同的子组件
    switch (selectKey) {
      case 'base':
        return <BaseView />;
      case 'security':
        return <SecurityView />;
      case 'binding':
        return <BindingView />;
      case 'notification':
        return <NotificationView />;
      // 默认情况下返回 null
      default:
        return null;
    }
  };

  // 返回设置页面的 JSX 元素
  return (
    <GridContent>
      <div
        className={styles.main}
        ref={(ref) => {
          // 如果 ref 存在，则将其赋值给 dom.current
          if (ref) {
            dom.current = ref;
          }
        }}
      >
        <div className={styles.leftMenu}>
          <Menu
            // 设置菜单模式
            mode={initConfig.mode}
            // 设置选中的菜单项键
            selectedKeys={[initConfig.selectKey]}
            // 点击菜单项时的处理函数
            onClick={({ key }) => {
              setInitConfig({
                // 更新 initConfig 状态，设置 selectKey 属性
                ...initConfig,
                selectKey: key as SettingsStateKeys,
              });
            }}
            // 设置菜单配置
            items={getMenu()}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>{menuMap[initConfig.selectKey]}</div>
          {renderChildren()}
        </div>
      </div>
    </GridContent>
  );
};

// 导出 Settings 组件
export default Settings;
