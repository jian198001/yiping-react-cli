// 导入 createStyles 函数，用于创建样式
import { createStyles } from 'antd-style';

/**
 * 使用 antd-style 创建样式
 * @returns 注册结果页面的样式对象
 */
const useStyles = createStyles(() => {
  return {
    // 注册结果容器的样式
    registerResult: {
      // 宽度为800px
      width: '800px',
      // 最小高度为400px
      minHeight: '400px',
      // 水平居中
      margin: 'auto',
      // 内边距为80px
      padding: '80px',
      // 背景为透明
      background: 'none',
    },
    // 图标样式
    anticon: {
      // 字体大小为64px
      fontSize: '64px',
    },
    // 标题样式
    title: {
      // 上外边距为32px
      marginTop: '32px',
      // 字体大小为20px
      fontSize: '20px',
      // 行高为28px
      lineHeight: '28px',
    },
    // 操作按钮容器样式
    actions: {
      // 上外边距为40px
      marginTop: '40px',
      // 相邻的a标签之间有8px的左外边距
      'a + a': { marginLeft: '8px' },
    },
  };
});
export default useStyles;
