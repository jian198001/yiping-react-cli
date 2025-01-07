// 从 antd-style 中导入 createStyles 函数
import { createStyles } from 'antd-style';

/**
 * 使用 antd-style 创建样式
 * @param {Object} params - 包含 token 对象的参数
 * @returns {Object} 活跃图表组件的样式对象
 */
const useStyles = createStyles(() => {
  return {
    // 活跃图表容器样式
    activeChart: {
      // 相对定位
      position: 'relative',
    },
    // 活跃图表网格样式
    activeChartGrid: {
      // 绝对定位的段落
      p: {
        // 绝对定位
        position: 'absolute',
        // 距离顶部80px
        top: '80px',
      },
      // 最后一个段落
      'p:last-child': {
        // 距离顶部115px
        top: '115px',
      },
    },
    // 活跃图表图例样式
    activeChartLegend: {
      // 相对定位
      position: 'relative',
      // 高度20px
      height: '20px',
      // 上外边距8px
      marginTop: '8px',
      // 字体大小0
      fontSize: '0',
      // 行高20px
      lineHeight: '20px',
      // 内联块级显示的 span 元素
      span: {
        // 内联块级显示
        display: 'inline-block',
        // 宽度33.33%
        width: '33.33%',
        // 字体大小12px
        fontSize: '12px',
        // 文本居中对齐
        textAlign: 'center',
      },
      // 第一个 span 元素
      'span:first-child': {
        // 文本左对齐
        textAlign: 'left',
      },
      // 最后一个 span 元素
      'span:last-child': {
        // 文本右对齐
        textAlign: 'right',
      },
    },
    // 虚线样式
    dashedLine: {
      // 相对定位
      position: 'relative',
      // 距离顶部-70px
      top: '-70px',
      // 距离左侧-3px
      left: '-3px',
      // 高度1px
      height: '1px',
    },
    // 线条样式
    line: {
      // 绝对定位
      position: 'absolute',
      // 距离顶部0
      top: '0',
      // 距离左侧0
      left: '0',
      // 宽度100%
      width: '100%',
      // 高度100%
      height: '100%',
      // 背景图像为线性渐变
      backgroundImage: 'linear-gradient(to right, transparent 50%, #e9e9e9 50%)',
      // 背景图像大小为6px
      backgroundSize: '6px',
    },
    // 最后一个虚线样式
    'dashedLine:last-child': {
      // 距离顶部-36px
      top: '-36px',
    },
  };
});

// 导出 useStyles 钩子
export default useStyles;
