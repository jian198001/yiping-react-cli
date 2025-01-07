// 从 antd-style 库中导入 createStyles 函数
import { createStyles } from 'antd-style';

/**
 * 创建样式的自定义钩子
 * @param {Object} params - 包含 antd 主题 token 的参数对象
 * @returns {Object} - 包含样式类名的对象
 */
const useStyles = createStyles(({ token }) => {
  return {
    // 趋势项的样式
    trendItem: {
      // 显示为内联块元素
      display: 'inline-block',
      // 设置字体大小
      fontSize: token.fontSize,
      // 设置行高
      lineHeight: '22px',
    },
    // 上升趋势的样式
    up: {
      // 设置颜色为红色
      color: token['red-6'],
    },
    // 下降趋势的样式
    down: {
      // 设置顶部偏移量
      top: '-1px',
      // 设置颜色为绿色
      color: token['green-6'],
    },
    // 灰色趋势项的样式
    trendItemGrey: {
      // 上升趋势的样式
      up: {
        // 设置颜色为文本颜色
        color: token.colorText,
      },
      // 下降趋势的样式
      down: {
        // 设置颜色为文本颜色
        color: token.colorText,
      },
    },
    // 反转颜色的样式
    reverseColor: {
      // 上升趋势的样式
      up: {
        // 设置颜色为绿色
        color: token['green-6'],
      },
      // 下降趋势的样式
      down: {
        // 设置颜色为红色
        color: token['red-6'],
      },
    },
  };
});

// 导出 useStyles 钩子
export default useStyles;
