// 从 antd 库中导入 Tooltip 组件
import { Tooltip } from 'antd';
// 导入 React 库
import React from 'react';
// 导入自定义样式文件
import useStyles from './index.style';

/**
 * MiniProgress 组件的属性类型定义
 */
export type MiniProgressProps = {
  // 目标值
  target: number;
  // 目标标签，可选
  targetLabel?: string;
  // 颜色，默认为 'rgb(19, 194, 194)'
  color?: string;
  // 进度条的宽度，可选
  strokeWidth?: number;
  // 进度百分比，可选
  percent?: number;
  // 自定义样式，可选
  style?: React.CSSProperties;
};

/**
 * MiniProgress 组件，用于显示带有目标值和进度的迷你进度条
 * @param {MiniProgressProps} props - 组件属性
 * @returns {JSX.Element} - 渲染的 MiniProgress 组件
 */
const MiniProgress: React.FC<MiniProgressProps> = ({
  targetLabel,
  target,
  color = 'rgb(19, 194, 194)',
  strokeWidth,
  percent,
}) => {
  // 使用自定义样式钩子获取样式
  const { styles } = useStyles();
  // 返回渲染的 MiniProgress 组件
  return (
    <div className={styles.miniProgress}>
      {/* 使用 Tooltip 组件显示目标标签 */}
      <Tooltip title={targetLabel}>
        <div
          className={styles.target}
          style={{
            // 设置目标位置
            left: target ? `${target}%` : undefined,
          }}
        >
          <span
            style={{
              // 设置目标颜色
              backgroundColor: color || undefined,
            }}
          />
          <span
            style={{
              // 设置目标颜色
              backgroundColor: color || undefined,
            }}
          />
        </div>
      </Tooltip>
      <div className={styles.progressWrap}>
        <div
          className={styles.progress}
          style={{
            // 设置进度条颜色
            backgroundColor: color || undefined,
            // 设置进度条宽度
            width: percent ? `${percent}%` : undefined,
            // 设置进度条高度
            height: strokeWidth || undefined,
          }}
        />
      </div>
    </div>
  );
};

// 导出 MiniProgress 组件
export default MiniProgress;
