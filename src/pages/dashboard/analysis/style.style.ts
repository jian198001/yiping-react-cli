// 从 antd-style 中导入 createStyles 函数
import { createStyles } from 'antd-style';

/**
 * 使用 antd-style 创建样式
 * @param {Object} params - 包含 token 对象的参数
 * @returns {Object} 分析页面的样式对象
 */
const useStyles = createStyles(({ token }) => {
  return {
    // 图标组样式
    iconGroup: {
      // 图标样式
      'span.anticon': {
        // 左外边距为16px
        marginLeft: '16px',
        // 颜色为次要文本颜色
        color: token.colorTextSecondary,
        // 鼠标指针为指针样式
        cursor: 'pointer',
        // 过渡效果为颜色变化，持续时间为0.32s
        transition: 'color 0.32s',
        // 鼠标悬停时的样式
        '&:hover': {
          // 颜色为主文本颜色
          color: token.colorText,
        },
      },
    },
    // 排名列表样式
    rankingList: {
      // 上外边距为25px，左右下外边距为0
      margin: '25px 0 0',
      // 内边距为0
      padding: '0',
      // 列表样式为无
      listStyle: 'none',
      // 列表项样式
      li: {
        // 弹性布局，垂直居中对齐
        display: 'flex',
        alignItems: 'center',
        // 上外边距为16px
        marginTop: '16px',
        // 缩放比例为1
        zoom: '1',
        // 清除浮动
        '&::before, &::after': {
          display: 'table',
          content: "' '",
        },
        '&::after': {
          clear: 'both',
          height: '0',
          fontSize: '0',
          visibility: 'hidden',
        },
      },
      // 媒体查询，当屏幕宽度小于等于 token.screenLG 时，应用以下样式
      [`@media screen and (max-width: ${token.screenLG}px)`]: {
        li: {
          // 第一个子元素的右外边距为8px
          'span:first-child': { marginRight: '8px' },
        },
      },
    },
    // 排名项数字样式
    rankingItemNumber: {
      // 内联块级显示
      display: 'inline-block',
      // 宽度为20px
      width: '20px',
      // 高度为20px
      height: '20px',
      // 上外边距为1.5px
      marginTop: '1.5px',
      // 右外边距为16px
      marginRight: '16px',
      // 字体粗细为600
      fontWeight: '600',
      // 字体大小为12px
      fontSize: '12px',
      // 行高为20px
      lineHeight: '20px',
      // 文本居中对齐
      textAlign: 'center',
      // 边框半径为20px
      borderRadius: '20px',
      // 背景颜色为禁用容器背景色
      backgroundColor: token.colorBgContainerDisabled,
    },
    // 排名项标题样式
    rankingItemTitle: {
      // 弹性布局，占据剩余空间
      flex: '1',
      // 右外边距为8px
      marginRight: '8px',
      // 溢出隐藏
      overflow: 'hidden',
      // 文本不换行
      whiteSpace: 'nowrap',
      // 文本溢出省略号显示
      textOverflow: 'ellipsis',
    },
    // 排名项数字激活样式
    rankingItemNumberActive: {
      // 内联块级显示
      display: 'inline-block',
      // 宽度为20px
      width: '20px',
      // 高度为20px
      height: '20px',
      // 上外边距为1.5px
      marginTop: '1.5px',
      // 右外边距为16px
      marginRight: '16px',
      // 字体粗细为600
      fontWeight: '600',
      // 字体大小为12px
      fontSize: '12px',
      // 行高为20px
      lineHeight: '20px',
      // 文本居中对齐
      textAlign: 'center',
      // 边框半径为20px
      borderRadius: '20px',
      // 颜色为白色
      color: '#fff',
      // 背景颜色为高亮背景色
      backgroundColor: token.colorBgSpotlight,
    },
    // 销售额外样式
    salesExtra: {
      // 内联块级显示
      display: 'inline-block',
      // 右外边距为24px
      marginRight: '24px',
      // 链接样式
      a: {
        // 左外边距为24px
        marginLeft: '24px',
        // 颜色为主文本颜色
        color: token.colorText,
        // 鼠标悬停时的样式
        '&:hover': {
          // 颜色为主题色
          color: token.colorPrimary,
        },
      },
      // 媒体查询，当屏幕宽度小于等于 token.screenLG 时，隐藏
      [`@media screen and (max-width: ${token.screenLG}px)`]: {
        display: 'none',
      },
    },
    // 当前日期样式
    currentDate: {
      // 颜色为主题色
      color: token.colorPrimary,
    },
    // 销售栏样式
    salesBar: {
      // 内边距为下32px，左32px，上下右0
      padding: '0 0 32px 32px',
      // 媒体查询，当屏幕宽度小于等于 token.screenMD 时，应用以下样式
      [`@media screen and (max-width: ${token.screenMD}px)`]: {
        // 内边距为16px
        padding: '16px',
      },
    },
    // 销售排名样式
    salesRank: {
      // 内边距为下32px，左72px，上下右0
      padding: '0 32px 32px 72px',
    },
    // 销售卡片样式
    salesCard: {
      // 选项卡栏样式
      '.ant-tabs-bar, .ant-tabs-nav-wrap': {
        // 左内边距为16px
        paddingLeft: '16px',
        // 选项卡样式
        '.ant-tabs-nav .ant-tabs-tab': {
          // 上内边距为16px
          paddingTop: '16px',
          // 下内边距为14px
          paddingBottom: '14px',
          // 行高为24px
          lineHeight: '24px',
        },
      },
      // 选项卡额外内容样式
      '.ant-tabs-extra-content': { paddingRight: '24px', lineHeight: '55px' },
      // 卡片头部样式
      '.ant-card-head': { position: 'relative' },
      // 卡片头部标题样式
      '.ant-card-head-title': { alignItems: 'normal' },
      // 媒体查询，当屏幕宽度小于等于 token.screenMD 时，应用以下样式
      [`@media screen and (max-width: ${token.screenMD}px)`]: {
        // 内边距为16px
        padding: '16px',
      },
      // 媒体查询，当屏幕宽度小于等于 token.screenSM 时，应用以下样式
      [`@media screen and (max-width: ${token.screenSM}px)`]: {
        // 选项卡内容样式
        '.ant-tabs-content': {
          // 上内边距为30px
          paddingTop: '30px',
        },
      },
    },
    // 销售卡片额外样式
    salesCardExtra: {
      // 高度继承父元素
      height: 'inherit',
    },
    // 销售类型单选框样式
    salesTypeRadio: {
      // 绝对定位
      position: 'absolute',
      // 右偏移
      right: '54px',
      bottom: '12px',
    },
    offlineCard: {
      '.ant-tabs-ink-bar': { bottom: 'auto' },
      '.ant-tabs-bar': { borderBottom: 'none' },
      '.ant-tabs-nav-container-scrolling': {
        paddingRight: '40px',
        paddingLeft: '40px',
      },
      '.ant-tabs-tab-prev-icon::before': { position: 'relative', left: '6px' },
      '.ant-tabs-tab-next-icon::before': { position: 'relative', right: '6px' },
      '.ant-tabs-tab-active h4': { color: token.colorPrimary },
    },
    trendText: {
      marginLeft: '8px',
      color: token.colorTextHeading,
    },
    rankingTitle: {
      [`@media screen and (max-width: ${token.screenMD}px)`]: {
        marginTop: '16px',
      },
    },
    salesExtraWrap: {
      [`@media screen and (max-width: ${token.screenSM}px)`]: {
        display: 'none',
      },
    },
  };
});

export default useStyles;
