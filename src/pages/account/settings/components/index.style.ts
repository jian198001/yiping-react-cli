// 从 antd-style 库中导入 createStyles 函数，用于创建样式
import { createStyles } from 'antd-style';

/**
 * 创建样式的钩子函数
 * @param {Object} params - 包含 Ant Design 主题 token 的对象
 * @param {Object} params.token - Ant Design 主题 token
 * @returns {Object} 包含样式的对象
 */
const useStyles = createStyles(({ token }) => {
  return {
    // 定义一个名为 baseView 的样式类
    baseView: {
      // 设置为弹性布局
      display: 'flex',
      // 顶部内边距为 12px
      paddingTop: '12px',
      // 针对 .ant-legacy-form-item .ant-legacy-form-item-control-wrapper 类设置样式
      '.ant-legacy-form-item .ant-legacy-form-item-control-wrapper': {
        // 宽度为 100%
        width: '100%',
      },
      // 针对屏幕宽度小于等于 token.screenXL 的设备设置样式
      [`@media screen and (max-width: ${token.screenXL}px)`]: {
        // 设置弹性布局方向为垂直方向，且子元素顺序反转
        flexDirection: 'column-reverse',
      },
    },
    // 定义一个名为 left 的样式类
    left: {
      // 最小宽度为 224px
      minWidth: '224px',
      // 最大宽度为 448px
      maxWidth: '448px',
    },
    // 定义一个名为 right 的样式类
    right: {
      // 设置为弹性布局，且占据剩余空间
      flex: '1',
      // 左边内边距为 104px
      paddingLeft: '104px',
      // 针对屏幕宽度小于等于 token.screenXL 的设备设置样式
      [`@media screen and (max-width: ${token.screenXL}px)`]: {
        // 设置为弹性布局，方向为垂直方向
        display: 'flex',
        flexDirection: 'column',
        // 水平居中对齐
        alignItems: 'center',
        // 最大宽度为 448px
        maxWidth: '448px',
        // 内边距为 20px
        padding: '20px',
      },
    },
    // 定义一个名为 avatar_title 的样式类
    avatar_title: {
      // 高度为 22px
      height: '22px',
      // 底部外边距为 8px
      marginBottom: '8px',
      // 文字颜色使用 token 中的标题文字颜色
      color: token.colorTextHeading,
      // 字体大小使用 token 中的字体大小
      fontSize: token.fontSize,
      // 行高为 22px
      lineHeight: '22px',
      // 针对屏幕宽度小于等于 token.screenXL 的设备设置样式
      [`@media screen and (max-width: ${token.screenXL}px)`]: {
        // 隐藏该元素
        display: 'none',
      },
    },
    // 定义一个名为 avatar 的样式类
    avatar: {
      // 宽度为 144px
      width: '144px',
      // 高度为 144px
      height: '144px',
      // 底部外边距为 12px
      marginBottom: '12px',
      // 溢出隐藏
      overflow: 'hidden',
      // 针对直接子元素 img 设置样式
      img: {
        // 宽度为 100%
        width: '100%',
      },
    },
    // 定义一个名为 button_view 的样式类
    button_view: {
      // 宽度为 144px
      width: '144px',
      // 文本居中对齐
      textAlign: 'center',
    },
    // 定义一个名为 area_code 的样式类
    area_code: {
      // 宽度为 72px
      width: '72px',
    },
    // 定义一个名为 phone_number 的样式类
    phone_number: {
      // 宽度为 214px
      width: '214px',
    },
  };
});

// 导出 useStyles 钩子函数
export default useStyles;
