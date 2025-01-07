// 从 @ant-design/icons 库中导入 CaretDownOutlined 和 CaretUpOutlined 图标
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
// 导入 classNames 库，用于动态设置 CSS 类名
import classNames from 'classnames';
// 导入 React 库
import React from 'react';
// 导入自定义样式文件
import useStyles from './index.style';

/**
 * Trend 组件的属性类型定义
 */
export type TrendProps = {
  // 是否显示彩色图标
  colorful?: boolean;
  // 趋势方向，可选值为 'up' 或 'down'
  flag: 'up' | 'down';
  // 自定义样式
  style?: React.CSSProperties;
  // 是否反转颜色
  reverseColor?: boolean;
  // 自定义类名
  className?: string;
  // 子组件
  children?: React.ReactNode;
};

/**
 * Trend 组件，用于显示带有趋势图标的文本
 * @param {TrendProps} props - 组件属性
 * @returns {JSX.Element} - 渲染的 Trend 组件
 */
const Trend: React.FC<TrendProps> = ({
  colorful = true,
  reverseColor = false,
  flag,
  children,
  className,
  ...rest
}) => {
  // 使用自定义样式钩子获取样式
  const { styles } = useStyles();
  // 根据属性动态设置类名
  const classString = classNames(
    styles.trendItem,
    {
      // 如果不显示彩色图标，则添加灰色样式
      [styles.trendItemGrey]: !colorful,
      // 如果需要反转颜色，则添加反转颜色样式
      [styles.reverseColor]: reverseColor && colorful,
    },
    className,
  );
  // 返回渲染的 Trend 组件
  return (
    <div {...rest} className={classString} title={typeof children === 'string' ? children : ''}>
      <span>{children}</span>
      {flag && (
        <span className={styles[flag]}>
          {/* 根据趋势方向显示相应的图标 */}
          {flag === 'up' ? <CaretUpOutlined /> : <CaretDownOutlined />}
        </span>
      )}
    </div>
  );
};

// 导出 Trend 组件
export default Trend;
