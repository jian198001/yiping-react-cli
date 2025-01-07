// 导入 antd-style 中的 createStyles 函数
import { createStyles } from 'antd-style';

/**
 * 使用 antd-style 创建样式
 * @param {Object} params - 包含 token 对象的参数
 * @returns {Object} 监控页面的样式对象
 */
const useStyles = createStyles(({ token }) => {
  return {
    // 地图图表样式
    mapChart: {
      // 高度为452px
      height: '452px',
      // 上内边距为24px
      paddingTop: '24px',
      // 图片样式
      img: {
        // 内联块级显示
        display: 'inline-block',
        // 最大宽度为100%
        maxWidth: '100%',
        // 最大高度为437px
        maxHeight: '437px',
      },
      // 媒体查询，当屏幕宽度小于等于 token.screenLG 时，高度为自动
      [`@media screen and (max-width: ${token.screenLG}px)`]: {
        height: 'auto',
      },
    },
  };
});

// 导出样式钩子
export default useStyles;
