// 从 antd-style 库中导入 createStyles 函数
import { createStyles } from 'antd-style';

/**
 * 创建样式的自定义钩子
 * @param {Object} params - 包含 antd 主题 token 的参数对象
 * @returns {Object} - 包含样式类名的对象
 */
const useStyles = createStyles(({ token }) => {
  return {
    // 图表卡片的样式
    chartCard: {
      // 相对定位
      position: 'relative',
    },
    // 图表顶部区域的样式
    chartTop: {
      // 相对定位
      position: 'relative',
      // 宽度为100%
      width: '100%',
      // 溢出隐藏
      overflow: 'hidden',
    },
    // 图表顶部区域带有底部外边距的样式
    chartTopMargin: {
      // 底部外边距为12px
      marginBottom: '12px',
    },
    // 图表顶部区域带有更大底部外边距的样式
    chartTopHasMargin: {
      // 底部外边距为20px
      marginBottom: '20px',
    },
    // 元数据包装器的样式
    metaWrap: {
      // 左浮动
      float: 'left',
    },
    // 头像的样式
    avatar: {
      // 相对定位
      position: 'relative',
      // 顶部偏移量为4px
      top: '4px',
      // 左浮动
      float: 'left',
      // 右边距为20px
      marginRight: '20px',
      // 头像图片的样式
      img: {
        // 边框半径为100%，使其成为圆形
        borderRadius: '100%',
      },
    },
    // 元数据的样式
    meta: {
      // 高度为22px
      height: '22px',
      // 颜色为次要文本颜色
      color: token.colorTextSecondary,
      // 字体大小为基础字体大小
      fontSize: token.fontSize,
      // 行高为22px
      lineHeight: '22px',
    },
    // 操作按钮的样式
    action: {
      // 绝对定位
      position: 'absolute',
      // 顶部偏移量为4px
      top: '4px',
      // 右边距为0
      right: '0',
      // 行高为1
      lineHeight: '1',
      // 鼠标指针样式为指针
      cursor: 'pointer',
    },
    // 总数的样式
    total: {
      // 高度为38px
      height: '38px',
      // 顶部外边距为4px
      marginTop: '4px',
      // 底部外边距为0
      marginBottom: '0',
      // 溢出隐藏
      overflow: 'hidden',
      // 颜色为标题颜色
      color: token.colorTextHeading,
      // 字体大小为30px
      fontSize: '30px',
      // 行高为38px
      lineHeight: '38px',
      // 不换行
      whiteSpace: 'nowrap',
      // 文本溢出显示省略号
      textOverflow: 'ellipsis',
      // 单词换行
      wordBreak: 'break-all',
    },
    // 内容区域的样式
    content: {
      // 相对定位
      position: 'relative',
      // 宽度为100%
      width: '100%',
      // 底部外边距为12px
      marginBottom: '12px',
    },
    // 固定在底部的内容区域样式
    contentFixed: {
      // 绝对定位
      position: 'absolute',
      // 底部偏移量为0
      bottom: '0',
      // 左边偏移量为0
      left: '0',
      // 宽度为100%
      width: '100%',
    },
    // 页脚区域的样式
    footer: {
      // 顶部外边距为8px
      marginTop: '8px',
      // 上内边距为9px
      paddingTop: '9px',
      // 顶部边框为1px实线，颜色为分割线颜色
      borderTop: `1px solid ${token.colorSplit}`,
      // 页脚区域内的元素样式
      '& > *': {
        // 相对定位
        position: 'relative',
      },
    },
    // 带有更大顶部外边距的页脚区域样式
    footerMargin: {
      // 顶部外边距为20px
      marginTop: '20px',
    },
  };
});

// 导出 useStyles 钩子
export default useStyles;
