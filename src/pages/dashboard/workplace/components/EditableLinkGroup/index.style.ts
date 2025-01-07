// 从 antd-style 中导入 createStyles 函数
import { createStyles } from 'antd-style';

/**
 * 使用 antd-style 创建样式
 * @param {Object} params - 包含 token 对象的参数
 * @returns {Object} 可编辑链接组的样式对象
 */
const useStyles = createStyles(({ token }) => {
  return {
    // 链接组样式
    linkGroup: {
      // 上内边距为20px，右内边距为0，下内边距为8px，左内边距为24px
      padding: '20px 0 8px 24px',
      // 字体大小为0，用于去除默认的行内元素间距
      fontSize: '0',
      // 链接样式
      '& > a': {
        // 内联块级显示
        display: 'inline-block',
        // 宽度为25%
        width: '25%',
        // 下外边距为13px
        marginBottom: '13px',
        // 文本颜色
        color: token.colorText,
        // 字体大小
        fontSize: token.fontSize,
        // 鼠标悬停时的样式
        '&:hover': {
          // 颜色为主色
          color: token.colorPrimary,
        },
      },
    },
  };
});

// 导出 useStyles 钩子
export default useStyles;
