// 从 antd-style 库中导入 createStyles 函数
import { createStyles } from 'antd-style';

/**
 * 创建样式的自定义钩子
 * @param {Object} params - 包含 antd 主题 token 的参数对象
 * @returns {Object} - 包含样式类名的对象
 */
const useStyles = createStyles(() => {
  return {
    // 迷你图表的样式
    miniChart: {
      // 相对定位
      position: 'relative',
      // 宽度为100%
      width: '100%',
    },
    // 图表内容的样式
    chartContent: {
      // 绝对定位
      position: 'absolute',
      // 底部偏移量为-28px
      bottom: '-28px',
      // 宽度为100%
      width: '100%',
      // 内部 div 元素的样式
      '> div': {
        // 左右外边距为-5px
        margin: '0 -5px',
        // 溢出隐藏
        overflow: 'hidden',
      },
    },
    // 图表加载状态的样式
    chartLoading: {
      // 绝对定位
      position: 'absolute',
      // 顶部偏移量为16px
      top: '16px',
      // 左边偏移量为50%
      left: '50%',
      // 左边距为-7px
      marginLeft: '-7px',
    },
  };
});

// 导出 useStyles 钩子
export default useStyles;
