// 导入 React 库
import React from 'react';
// 导入自定义样式文件
import useStyles from './index.style';

/**
 * Field 组件的属性类型定义
 */
export type FieldProps = {
  // 标签内容，可以是 React 节点
  label: React.ReactNode;
  // 值内容，可以是 React 节点
  value: React.ReactNode;
  // 自定义样式，可选
  style?: React.CSSProperties;
};

/**
 * Field 组件，用于显示带有标签和值的字段
 * @param {FieldProps} props - 组件属性
 * @returns {JSX.Element} - 渲染的 Field 组件
 */
const Field: React.FC<FieldProps> = ({ label, value, ...rest }) => {
  // 使用自定义样式钩子获取样式
  const { styles } = useStyles();
  // 返回渲染的 Field 组件
  return (
    <div className={styles.field} {...rest}>
      {/* 显示标签内容 */}
      <span className={styles.label}>{label}</span>
      {/* 显示值内容 */}
      <span className={styles.number}>{value}</span>
    </div>
  );
};

// 导出 Field 组件
export default Field;
