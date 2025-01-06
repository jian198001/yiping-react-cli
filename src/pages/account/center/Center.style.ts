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
    // 定义一个名为 avatarHolder 的样式类
    avatarHolder: {
      // 底部外边距为 24px
      marginBottom: '24px',
      // 文本居中对齐
      textAlign: 'center',
      // 针对直接子元素 img 设置样式
      '& > img': {
        // 宽度为 104px
        width: '104px',
        // 高度为 104px
        height: '104px',
        // 底部外边距为 20px
        marginBottom: '20px',
      },
    },
    // 定义一个名为 name 的样式类
    name: {
      // 底部外边距为 4px
      marginBottom: '4px',
      // 文字颜色使用 token 中的标题文字颜色
      color: token.colorTextHeading,
      // 字体粗细为 500
      fontWeight: '500',
      // 字体大小为 20px
      fontSize: '20px',
      // 行高为 28px
      lineHeight: '28px',
    },
    // 定义一个名为 detail 的样式类
    detail: {
      // 针对直接子元素 p 设置样式
      p: {
        // 相对定位
        position: 'relative',
        // 底部外边距为 8px
        marginBottom: '8px',
        // 左边内边距为 26px
        paddingLeft: '26px',
        // 针对最后一个直接子元素 p 设置样式
        '&:last-child': {
          // 底部外边距为 0
          marginBottom: '0',
        },
      },
      // 针对直接子元素 i 设置样式
      i: {
        // 绝对定位
        position: 'absolute',
        // 顶部距离为 4px
        top: '4px',
        // 左边距离为 0
        left: '0',
        // 宽度为 14px
        width: '14px',
        // 高度为 14px
        height: '14px',
      },
    },
    // 定义一个名为 tagsTitle 的样式类
    tagsTitle: {
      // 底部外边距为 12px
      marginBottom: '12px',
      // 文字颜色使用 token 中的标题文字颜色
      color: token.colorTextHeading,
      // 字体粗细为 500
      fontWeight: '500',
    },
    // 定义一个名为 teamTitle 的样式类
    teamTitle: {
      // 底部外边距为 12px
      marginBottom: '12px',
      // 文字颜色使用 token 中的标题文字颜色
      color: token.colorTextHeading,
      // 字体粗细为 500
      fontWeight: '500',
    },
    // 定义一个名为 tags 的样式类
    tags: {
      // 针对 .ant-tag 类设置样式
      '.ant-tag': {
        // 底部外边距为 8px
        marginBottom: '8px',
      },
    },
    // 定义一个名为 team 的样式类
    team: {
      // 针对 .ant-avatar 类设置样式
      '.ant-avatar': {
        // 右边外边距为 12px
        marginRight: '12px',
      },
      // 针对直接子元素 a 设置样式
      a: {
        // 显示为块级元素
        display: 'block',
        // 底部外边距为 24px
        marginBottom: '24px',
        // 溢出隐藏
        overflow: 'hidden',
        // 文字颜色使用 token 中的文字颜色
        color: token.colorText,
        // 不换行
        whiteSpace: 'nowrap',
        // 文本溢出显示省略号
        textOverflow: 'ellipsis',
        // 单词断行
        wordBreak: 'break-all',
        // 过渡效果
        transition: 'color 0.3s',
        // 鼠标悬停时的样式
        '&:hover': {
          // 文字颜色使用 token 中的主要颜色
          color: token.colorPrimary,
        },
      },
    },
    // 定义一个名为 tabsCard 的样式类
    tabsCard: {
      // 针对 .ant-card-head 类设置样式
      '.ant-card-head': {
        // 内边距为 0 16px
        padding: '0 16px',
      },
    },
  };
});

// 导出 useStyles 钩子函数
export default useStyles;
