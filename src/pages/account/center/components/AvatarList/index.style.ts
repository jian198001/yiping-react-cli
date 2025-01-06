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
    // 定义一个名为 avatarList 的样式类
    avatarList: {
      // 显示为内联块级元素
      display: 'inline-block',
      // 针对 ul 元素设置样式
      ul: {
        // 显示为内联块级元素
        display: 'inline-block',
        // 左边外边距为 8px
        marginLeft: '8px',
        // 字体大小为 0
        fontSize: '0',
      },
    },
    // 定义一个名为 avatarItem 的样式类
    avatarItem: {
      // 显示为内联块级元素
      display: 'inline-block',
      // 宽度使用 token 中的控制高度
      width: token.controlHeight,
      // 高度使用 token 中的控制高度
      height: token.controlHeight,
      // 左边外边距为 -8px
      marginLeft: '-8px',
      // 字体大小使用 token 中的字体大小
      fontSize: token.fontSize,
      // 针对 .ant-avatar 类设置样式
      '.ant-avatar': {
        // 边框宽度为 1px，颜色使用 token 中的边框颜色
        border: `1px solid ${token.colorBorder}`,
      },
    },
    // 定义一个名为 avatarItemLarge 的样式类
    avatarItemLarge: {
      // 宽度使用 token 中的大控制高度
      width: token.controlHeightLG,
      // 高度使用 token 中的大控制高度
      height: token.controlHeightLG,
    },
    // 定义一个名为 avatarItemSmall 的样式类
    avatarItemSmall: {
      // 宽度使用 token 中的小控制高度
      width: token.controlHeightSM,
      // 高度使用 token 中的小控制高度
      height: token.controlHeightSM,
    },
    // 定义一个名为 avatarItemMini 的样式类
    avatarItemMini: {
      // 宽度为 20px
      width: '20px',
      // 高度为 20px
      height: '20px',
      // 针对 .ant-avatar 类设置样式
      '.ant-avatar': {
        // 宽度为 20px
        width: '20px',
        // 高度为 20px
        height: '20px',
        // 行高为 20px
        lineHeight: '20px',
        // 针对 .ant-avatar-string 类设置样式
        '.ant-avatar-string': {
          // 字体大小为 12px
          fontSize: '12px',
          // 行高为 18px
          lineHeight: '18px',
        },
      },
    },
  };
});

// 导出 useStyles 钩子函数
export default useStyles;
