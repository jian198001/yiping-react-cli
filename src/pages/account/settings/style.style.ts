import { createStyles } from 'antd-style';

/**
 * 创建样式的钩子函数
 * @param {Object} params - 包含 Ant Design 主题 token 的对象
 * @param {Object} params.token - Ant Design 主题 token
 * @returns {Object} 包含样式的对象
 */
const useStyles = createStyles(({ token }) => {
  return {
    // 定义一个名为 main 的样式类
    main: {
      // 设置为弹性布局
      display: 'flex',
      // 宽度为 100%
      width: '100%',
      // 高度为 100%
      height: '100%',
      // 顶部内边距为 16px
      paddingTop: '16px',
      // 底部内边距为 16px
      paddingBottom: '16px',
      // 背景颜色使用 token 中的容器背景颜色
      backgroundColor: token.colorBgContainer,
      // 针对 .ant-list-split .ant-list-item:last-child 类设置样式
      '.ant-list-split .ant-list-item:last-child': {
        // 底部边框为 1px 实线，颜色使用 token 中的分割线颜色
        borderBottom: `1px solid ${token.colorSplit}`,
      },
      // 针对 .ant-list-item 类设置样式
      '.ant-list-item': {
        // 顶部内边距为 14px
        paddingTop: '14px',
        // 底部内边距为 14px
        paddingBottom: '14px',
      },
      // 针对屏幕宽度小于等于 token.screenMD 的设备设置样式
      [`@media screen and (max-width: ${token.screenMD}px)`]: {
        // 设置弹性布局方向为垂直方向
        flexDirection: 'column',
      },
    },
    // 定义一个名为 leftMenu 的样式类
    leftMenu: {
      // 宽度为 224px
      width: '224px',
      // 右边框为 token 中的边框宽度的实线，颜色使用 token 中的分割线颜色
      borderRight: `${token.lineWidth}px solid ${token.colorSplit}`,
      // 针对 .ant-menu-inline 类设置样式
      '.ant-menu-inline': {
        // 去除边框
        border: 'none',
      },
      // 针对 .ant-menu-horizontal 类设置样式
      '.ant-menu-horizontal': {
        // 设置字体加粗
        fontWeight: 'bold',
      },
      // 针对屏幕宽度小于等于 token.screenMD 的设备设置样式
      [`@media screen and (max-width: ${token.screenMD}px)`]: {
        // 宽度为 100%
        width: '100%',
        // 去除边框
        border: 'none',
      },
    },
    // 定义一个名为 right 的样式类
    right: {
      // 设置为弹性布局，且占据剩余空间
      flex: '1',
      // 内边距为 8px 40px
      padding: '8px 40px',
      // 针对屏幕宽度小于等于 token.screenMD 的设备设置样式
      [`@media screen and (max-width: ${token.screenMD}px)`]: {
        // 内边距为 40px
        padding: '40px',
      },
    },
    // 定义一个名为 title 的样式类
    title: {
      // 底部外边距为 12px
      marginBottom: '12px',
      // 文字颜色使用 token 中的标题文字颜色
      color: token.colorTextHeading,
      // 字体粗细为 500
      fontWeight: '500',
      // 字体大小为 20px
      fontSize: '20px',
      // 行高为 28px
      lineHeight: '28px',
    },
    // 定义一个名为 taobao 的样式类
    taobao: {
      // 设置为块级元素
      display: 'block',
      // 文字颜色为 #ff4000
      color: '#ff4000',
      // 字体大小为 48px
      fontSize: '48px',
      // 行高为 48px
      lineHeight: '48px',
      // 边框圆角使用 token 中的边框圆角值
      borderRadius: token.borderRadius,
    },
    // 定义一个名为 dingding 的样式类
    dingding: {
      // 外边距为 2px
      margin: '2px',
      // 内边距为 6px
      padding: '6px',
      // 文字颜色为 #fff
      color: '#fff',
      // 字体大小为 32px
      fontSize: '32px',
      // 行高为 32px
      lineHeight: '32px',
      // 背景颜色为 #2eabff
      backgroundColor: '#2eabff',
      // 边框圆角使用 token 中的边框圆角值
      borderRadius: token.borderRadius,
    },
    // 定义一个名为 alipay 的样式类
    alipay: {
      // 文字颜色为 #2eabff
      color: '#2eabff',
      // 字体大小为 48px
      fontSize: '48px',
      // 行高为 48px
      lineHeight: '48px',
      // 边框圆角使用 token 中的边框圆角值
      borderRadius: token.borderRadius,
    },
    // 定义一个全局样式类
    ':global': {
      // 针对 font.strong 类设置样式
      'font.strong': {
        // 文字颜色使用 token 中的成功颜色
        color: token.colorSuccess,
      },
      // 针对 font.medium 类设置样式
      'font.medium': {
        // 文字颜色使用 token 中的警告颜色
        color: token.colorWarning,
      },
      // 针对 font.weak 类设置样式
      'font.weak': {
        // 文字颜色使用 token 中的错误颜色
        color: token.colorError,
      },
    },
  };
});

// 导出 useStyles 钩子函数
export default useStyles;
