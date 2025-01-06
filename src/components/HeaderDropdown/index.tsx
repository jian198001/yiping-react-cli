// 引入 Ant Design 库中的 Dropdown 组件
import { Dropdown } from 'antd';
// 引入 Ant Design Style 库中的 createStyles 函数，用于创建样式
import { createStyles } from 'antd-style';
// 引入 Ant Design Dropdown 组件的类型定义
import type { DropDownProps } from 'antd/es/dropdown';
// 引入 classnames 库，用于合并类名
import classNames from 'classnames';
// 引入 React 库
import React from 'react';

/**
 * 创建样式的钩子函数
 * @param {Object} params - 包含 Ant Design 主题 token 的对象
 * @param {Object} params.token - Ant Design 主题 token
 * @returns {Object} 包含样式的对象
 */
const useStyles = createStyles(({ token }) => {
  return {
    // 定义一个名为 dropdown 的样式类
    dropdown: {
      // 使用媒体查询，当屏幕宽度小于等于 token.screenXS 时，设置宽度为 100%
      [`@media screen and (max-width: ${token.screenXS}px)`]: {
        width: '100%',
      },
    },
  };
});

/**
 * 自定义的 Dropdown 组件属性类型
 * @typedef {Object} HeaderDropdownProps
 * @property {string} [overlayClassName] - 覆盖层的类名
 * @property {('bottomLeft' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight' | 'bottomCenter')} [placement] - 下拉框的位置
 * @property {Object} [restProps] - 其他 Dropdown 组件的属性
 */
export type HeaderDropdownProps = {
  // 覆盖层的类名，可选
  overlayClassName?: string;
  // 下拉框的位置，可选
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight' | 'bottomCenter';
  // 其他 Dropdown 组件的属性
} & Omit<DropDownProps, 'overlay'>;

/**
 * 自定义的 Dropdown 组件
 * @param {HeaderDropdownProps} props - 组件的属性
 * @returns {JSX.Element} Dropdown 组件的 JSX 元素
 */
const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ overlayClassName: cls, ...restProps }) => {
  // 使用 useStyles 钩子函数获取样式
  const { styles } = useStyles();
  // 返回 Dropdown 组件，并传递样式和其他属性
  return <Dropdown overlayClassName={classNames(styles.dropdown, cls)} {...restProps} />;
};

// 导出 HeaderDropdown 组件作为默认导出
export default HeaderDropdown;
