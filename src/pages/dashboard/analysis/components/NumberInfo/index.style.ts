// 从 antd-style 库中导入 createStyles 函数
import { createStyles } from 'antd-style';

/**
 * 创建样式的自定义钩子
 * @param {Object} params - 包含 antd 主题 token 的参数对象
 * @returns {Object} - 包含样式类名的对象
 */
const useStyles = createStyles(({ token }) => {
  return {
    // 后缀样式
    suffix: {
      // 左边距为4px
      marginLeft: '4px',
      // 颜色为文本颜色
      color: token.colorText,
      // 字体大小为16px
      fontSize: '16px',
      // 字体样式为正常
      fontStyle: 'normal',
    },
    // 数字信息标题样式
    numberInfoTitle: {
      // 底部外边距为16px
      marginBottom: '16px',
      // 颜色为文本颜色
      color: token.colorText,
      // 字体大小为大字体
      fontSize: token['font-size-lg'],
      // 过渡效果为所有属性0.3秒
      transition: 'all 0.3s',
    },
    // 数字信息副标题样式
    numberInfoSubTitle: {
      // 高度为22px
      height: '22px',
      // 溢出隐藏
      overflow: 'hidden',
      // 颜色为次要文本颜色
      color: token.colorTextSecondary,
      // 字体大小为基础字体大小
      fontSize: token.fontSize,
      // 行高为22px
      lineHeight: '22px',
      // 不换行
      whiteSpace: 'nowrap',
      // 文本溢出显示省略号
      textOverflow: 'ellipsis',
      // 单词换行
      wordBreak: 'break-all',
    },
    // 数字信息值样式
    numberInfoValue: {
      // 顶部外边距为4px
      marginTop: '4px',
      // 溢出隐藏
      overflow: 'hidden',
      // 字体大小为0
      fontSize: '0',
      // 不换行
      whiteSpace: 'nowrap',
      // 文本溢出显示省略号
      textOverflow: 'ellipsis',
      // 单词换行
      wordBreak: 'break-all',
      // 内部 span 元素的样式
      '& > span': {
        // 颜色为文本颜色
        color: token.colorText,
      },
    },
    // 子总数样式
    subTotal: {
      // 右边距为0
      marginRight: '0',
      // 颜色为次要文本颜色
      color: token.colorTextSecondary,
      // 字体大小为大字体
      fontSize: token['font-size-lg'],
      // 垂直对齐方式为顶部对齐
      verticalAlign: 'top',
    },
    // 图标样式
    anticon: {
      // 左边距为4px
      marginLeft: '4px',
      // 字体大小为12px
      fontSize: '12px',
      // 缩放比例为0.82
      transform: 'scale(0.82)',
    },
    // 上升箭头图标样式
    'anticon-caret-up': {
      // 颜色为红色
      color: token['red-6'],
    },
    // 下降箭头图标样式
    'anticon-caret-down': {
      // 颜色为绿色
      color: token['green-6'],
    },
  };
});

// 导出 useStyles 钩子
export default useStyles;
