// 从 @ant-design/icons 库中导入 CaretDownOutlined 和 CaretUpOutlined 图标
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
// 导入 classNames 库，用于动态设置 CSS 类名
import classNames from 'classnames';
// 导入 React 库
import React from 'react';
// 导入自定义样式文件
import useStyles from './index.style';

/**
 * NumberInfo 组件的属性类型定义
 */
export type NumberInfoProps = {
  // 标题，可以是 React 节点或字符串
  title?: React.ReactNode | string;
  // 副标题，可以是 React 节点或字符串
  subTitle?: React.ReactNode | string;
  // 总数，可以是 React 节点或字符串
  total?: React.ReactNode | string;
  // 状态，可以是 'up' 或 'down'
  status?: 'up' | 'down';
  // 主题，用于应用特定的样式
  theme?: string;
  // 标题和副标题之间的间隔
  gap?: number;
  // 子总数，可选
  subTotal?: number;
  // 后缀，可选
  suffix?: string;
  // 自定义样式
  style?: React.CSSProperties;
};

/**
 * NumberInfo 组件，用于显示带有标题、副标题、总数和状态的信息
 * @param {NumberInfoProps} props - 组件属性
 * @returns {JSX.Element} - 渲染的 NumberInfo 组件
 */
const NumberInfo: React.FC<NumberInfoProps> = ({
  theme,
  title,
  subTitle,
  total,
  subTotal,
  status,
  suffix,
  gap,
  ...rest
}) => {
  // 使用自定义样式钩子获取样式
  const { styles } = useStyles();
  // 返回渲染的 NumberInfo 组件
  return (
    <div
      className={classNames(styles.numberInfo, {
        [styles[`numberInfo${theme}`]]: theme,
      })}
      {...rest}
    >
      {title && (
        <div className={styles.numberInfoTitle} title={typeof title === 'string' ? title : ''}>
          {title}
        </div>
      )}
      {subTitle && (
        <div
          className={styles.numberInfoSubTitle}
          title={typeof subTitle === 'string' ? subTitle : ''}
        >
          {subTitle}
        </div>
      )}
      <div
        className={styles.numberInfoValue}
        style={
          gap
            ? {
                marginTop: gap,
              }
            : {}
        }
      >
        <span>
          {total}
          {suffix && <em className={styles.suffix}>{suffix}</em>}
        </span>
        {(status || subTotal) && (
          <span className={styles.subTotal}>
            {subTotal}
            {status && status === 'up' ? <CaretUpOutlined /> : <CaretDownOutlined />}
          </span>
        )}
      </div>
    </div>
  );
};

// 导出 NumberInfo 组件
export default NumberInfo;
