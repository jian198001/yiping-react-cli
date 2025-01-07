// 从 antd-style 库中导入 createStyles 函数
import { createStyles } from 'antd-style';

/**
 * 创建样式的自定义钩子
 * @param {Object} params - 包含 antd 主题 token 的参数对象
 * @returns {Object} - 包含样式类名的对象
 */
const useStyles = createStyles(({ token }) => {
  return {
    // 字段组件的样式
    field: {
      // 外边距为0
      margin: '0',
      // 溢出隐藏
      overflow: 'hidden',
      // 不换行
      whiteSpace: 'nowrap',
      // 文本溢出显示省略号
      textOverflow: 'ellipsis',
    },
    // 标签样式
    label: {
      // 字体大小为基础字体大小
      fontSize: token.fontSize,
      // 行高为22px
      lineHeight: '22px',
    },
    // 数字样式
    number: {
      // 左边距为8px
      marginLeft: '8px',
      // 颜色为标题颜色
      color: token.colorTextHeading,
    },
  };
});

// 导出 useStyles 钩子
export default useStyles;
