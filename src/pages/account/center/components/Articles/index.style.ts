// 引入 antd-style 库中的 createStyles 函数，用于创建样式
import { createStyles } from 'antd-style';

/**
 * 创建样式的钩子函数
 * @param {Object} params - 包含 Ant Design 主题 token 的对象
 * @param {Object} params.token - Ant Design 主题 token
 * @returns {Object} 包含样式的对象
 */
const useStyles = createStyles(({ token }) => {
  return {
    // 定义一个名为 articleList 的样式类
    articleList: {
      // 针对 .ant-list-item:first-child 类设置顶部内边距为 0
      '.ant-list-item:first-child': { paddingTop: '0' },
    },
    // 定义一个名为 listItemMetaTitle 的样式类
    listItemMetaTitle: {
      // 文字颜色使用 token 中的标题文字颜色
      color: token.colorTextHeading,
    },
  };
});

// 导出 useStyles 钩子函数
export default useStyles;
