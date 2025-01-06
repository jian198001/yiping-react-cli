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
    // 定义一个名为 card 的样式类
    card: {
      // 针对 .ant-card-meta-title 类设置样式
      '.ant-card-meta-title': {
        // 底部外边距为 4px
        marginBottom: '4px',
        // 针对直接子元素 a 设置样式
        '& > a': {
          // 显示为内联块级元素
          display: 'inline-block',
          // 最大宽度为 100%
          maxWidth: '100%',
          // 文字颜色使用 token 中的标题文字颜色
          color: token.colorTextHeading,
        },
      },
      // 针对 .ant-card-meta-description 类设置样式
      '.ant-card-meta-description': {
        // 高度为 44px
        height: '44px',
        // 溢出隐藏
        overflow: 'hidden',
        // 行高为 22px
        lineHeight: '22px',
      },
      // 鼠标悬停时的样式
      '&:hover': {
        // 针对 .ant-card-meta-title > a 类设置文字颜色为 token 中的主要颜色
        '.ant-card-meta-title > a': {
          color: token.colorPrimary,
        },
      },
    },
    // 定义一个名为 cardItemContent 的样式类
    cardItemContent: {
      // 弹性布局
      display: 'flex',
      // 高度为 20px
      height: '20px',
      // 顶部外边距为 16px
      marginTop: '16px',
      // 底部外边距为 -4px
      marginBottom: '-4px',
      // 行高为 20px
      lineHeight: '20px',
      // 针对直接子元素 span 设置样式
      '& > span': {
        // 伸缩比例为 1
        flex: '1',
        // 文字颜色使用 token 中的次要文字颜色
        color: token.colorTextSecondary',
        // 字体大小为 12px
        fontSize: '12px',
      },
    },
    // 定义一个名为 avatarList 的样式类
    avatarList: {
      // 伸缩比例为 0 1 auto
      flex: '0 1 auto',
    },
    // 定义一个名为 cardList 的样式类
    cardList: {
      // 顶部外边距为 24px
      marginTop: '24px',
    },
    // 定义一个名为 coverCardList 的样式类
    coverCardList: {
      // 针对 .ant-list .ant-list-item-content-single 类设置最大宽度为 100%
      '.ant-list .ant-list-item-content-single': { maxWidth: '100%' },
    },
  };
});

// 导出 useStyles 钩子函数
export default useStyles;
