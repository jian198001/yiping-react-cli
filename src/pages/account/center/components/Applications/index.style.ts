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
    // 定义一个名为 filterCardList 的样式类
    filterCardList: {
      // 底部外边距为 -24px
      marginBottom: '-24px',
      // 针对 .ant-card-meta-content 类设置顶部外边距为 0
      '.ant-card-meta-content': { marginTop: '0' },
      // 针对 .ant-card-meta-avatar 类设置字体大小为 0
      '.ant-card-meta-avatar': { fontSize: '0' },
      // 针对 .ant-list .ant-list-item-content-single 类设置最大宽度为 100%
      '.ant-list .ant-list-item-content-single': { maxWidth: '100%' },
    },
    // 定义一个名为 cardInfo 的样式类
    cardInfo: {
      // 顶部外边距为 16px
      marginTop: '16px',
      // 左边外边距为 40px
      marginLeft: '40px',
      // 设置缩放比例为 1
      zoom: '1',
      // 使用伪元素 ::before 和 ::after 清除浮动
      '&::before, &::after': { display: 'table', content: "' '" },
      '&::after': {
        // 清除浮动
        clear: 'both',
        // 高度为 0
        height: '0',
        // 字体大小为 0
        fontSize: '0',
        // 可见性为隐藏
        visibility: 'hidden',
      },
      // 针对直接子元素 div 设置样式
      '& > div': {
        // 相对定位
        position: 'relative',
        // 左浮动
        float: 'left',
        // 宽度为 50%
        width: '50%',
        // 文本左对齐
        textAlign: 'left',
        p: {
          // 外边距为 0
          margin: '0',
          // 字体大小为 24px
          fontSize: '24px',
          // 行高为 32px
          lineHeight: '32px',
        },
        // 针对第一个 p 元素设置样式
        'p:first-child': {
          // 底部外边距为 4px
          marginBottom: '4px',
          // 文字颜色使用 token 中的次要文字颜色
          color: token.colorTextSecondary,
          // 字体大小为 12px
          fontSize: '12px',
          // 行高为 20px
          lineHeight: '20px',
        },
      },
    },
  };
});

// 导出 useStyles 钩子函数
export default useStyles;
