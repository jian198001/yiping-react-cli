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
    // 定义一个名为 description 的样式类
    description: {
      // 最大宽度为 720px
      maxWidth: '720px',
      // 行高为 22px
      lineHeight: '22px',
    },
    // 定义一个名为 extra 的样式类
    extra: {
      // 顶部外边距为 16px
      marginTop: '16px',
      // 文字颜色使用 token 中的次要文字颜色
      color: token.colorTextSecondary,
      // 行高为 22px
      lineHeight: '22px',
      // 针对直接子元素 em 设置样式
      '& > em': {
        // 左边外边距为 16px
        marginLeft: '16px',
        // 文字颜色使用 token 中的禁用文字颜色
        color: token.colorTextDisabled,
        // 字体样式为正常
        fontStyle: 'normal',
      },
      // 使用媒体查询，当屏幕宽度小于等于 token.screenXS 时，设置样式
      [`@media screen and (max-width: ${token.screenXS}px)`]: {
        // 针对直接子元素 em 设置样式
        '& > em': {
          // 显示为块级元素
          display: 'block',
          // 顶部外边距为 8px
          marginTop: '8px',
          // 左边外边距为 0
          marginLeft: '0',
        },
      },
    },
  };
});

// 导出 useStyles 钩子函数
export default useStyles;
