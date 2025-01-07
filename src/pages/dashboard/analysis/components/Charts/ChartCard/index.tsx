/* eslint-disable @typescript-eslint/no-unused-vars */
// 从 antd 库中导入 Card 组件
import { Card } from 'antd';
// 从 antd/es/card 模块中导入 CardProps 类型
import type { CardProps } from 'antd/es/card';
// 导入 classNames 库，用于条件性地添加 CSS 类名
import classNames from 'classnames';
// 导入 React 库
import React from 'react';
// 导入自定义样式文件
import useStyles from './index.style';

/**
 * 用于渲染总数的类型
 * @typedef {() => React.ReactNode} totalType
 */
type totalType = () => React.ReactNode;

/**
 * ChartCard 组件的属性类型定义
 * @typedef {Object} ChartCardProps
 * @property {React.ReactNode} title - 卡片标题
 * @property {React.ReactNode} [action] - 卡片操作按钮
 * @property {React.ReactNode | number | (() => React.ReactNode | number)} [total] - 卡片总数
 * @property {React.ReactNode} [footer] - 卡片页脚内容
 * @property {number} [contentHeight] - 内容区域的高度
 * @property {React.ReactNode} [avatar] - 卡片头像
 * @property {React.CSSProperties} [style] - 自定义样式
 * @property {CardProps} [CardProps] - 继承自 antd 的 Card 组件的属性
 */
export type ChartCardProps = {
  title: React.ReactNode;
  action?: React.ReactNode;
  total?: React.ReactNode | number | (() => React.ReactNode | number);
  footer?: React.ReactNode;
  contentHeight?: number;
  avatar?: React.ReactNode;
  style?: React.CSSProperties;
} & CardProps;

/**
 * ChartCard 组件，用于显示带有图表的卡片
 * @param {ChartCardProps} props - 组件属性
 * @returns {JSX.Element} - 渲染的 ChartCard 组件
 */
const ChartCard: React.FC<ChartCardProps> = (props) => {
  // 使用自定义样式钩子获取样式
  const { styles } = useStyles();

  /**
   * 渲染总数的方法
   * @param {number | totalType | React.ReactNode} total - 总数
   * @returns {JSX.Element | null} - 渲染的总数节点或 null
   */
  const renderTotal = (total?: number | totalType | React.ReactNode) => {
    if (!total && total !== 0) {
      return null;
    }
    let totalDom;
    switch (typeof total) {
      case 'undefined':
        totalDom = null;
        break;
      case 'function':
        totalDom = <div className={styles.total}>{total()}</div>;
        break;
      default:
        totalDom = <div className={styles.total}>{total}</div>;
    }
    return totalDom;
  };

  /**
   * 渲染内容的方法
   * @returns {JSX.Element | false} - 渲染的内容节点或 false
   */
  const renderContent = () => {
    const { contentHeight, title, avatar, action, total, footer, children, loading } = props;
    if (loading) {
      return false;
    }
    return (
      <div className={styles.chartCard}>
        <div
          className={classNames(styles.chartTop, {
            [styles.chartTopMargin]: !children && !footer,
          })}
        >
          <div className={styles.avatar}>{avatar}</div>
          <div className={styles.metaWrap}>
            <div className={styles.meta}>
              <span>{title}</span>
              <span className={styles.action}>{action}</span>
            </div>
            {renderTotal(total)}
          </div>
        </div>
        {children && (
          <div
            className={styles.content}
            style={{
              height: contentHeight || 'auto',
            }}
          >
            <div className={contentHeight && styles.contentFixed}>{children}</div>
          </div>
        )}
        {footer && (
          <div
            className={classNames(styles.footer, {
              [styles.footerMargin]: !children,
            })}
          >
            {footer}
          </div>
        )}
      </div>
    );
  };

  const {
    loading = false,
    contentHeight,
    title,
    avatar,
    action,
    total,
    footer,
    children,
    ...rest
  } = props;
  return (
    <Card
      loading={loading}
      bodyStyle={{
        padding: '20px 24px 8px 24px',
      }}
      {...rest}
    >
      {renderContent()}
    </Card>
  );
};

// 导出 ChartCard 组件
export default ChartCard;
