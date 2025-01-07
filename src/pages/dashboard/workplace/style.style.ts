// 导入 antd-style 中的 createStyles 函数
import { createStyles } from 'antd-style';

/**
 * 使用 antd-style 创建样式
 * @param {Object} params - 包含 token 对象的参数
 * @returns {Object} 工作区页面的样式对象
 */
const useStyles = createStyles(({ token }) => {
  return {
    // 活动列表样式
    activitiesList: {
      // 内边距
      padding: '0 24px 8px 24px',
    },
    // 用户名样式
    username: {
      // 文本颜色
      color: token.colorText,
    },
    // 事件样式
    event: {
      // 字体粗细
      fontWeight: 'normal',
    },
    // 页面头部内容样式
    pageHeaderContent: {
      // 弹性布局
      display: 'flex',
      // 媒体查询，当屏幕宽度小于等于 token.screenSM 时，显示为块级元素
      [`@media screen and (max-width: ${token.screenSM}px)`]: {
        display: 'block',
      },
    },
    // 头像样式
    avatar: {
      // 弹性布局，不伸缩，宽度为72px
      flex: '0 1 72px',
      // 头像内部样式
      '& > span': {
        // 块级显示
        display: 'block',
        // 宽度为72px
        width: '72px',
        // 高度为72px
        height: '72px',
        // 圆角半径为72px
        borderRadius: '72px',
      },
    },
    // 内容样式
    content: {
      // 相对定位
      position: 'relative',
      // 上偏移4px
      top: '4px',
      // 弹性布局，伸缩，自动宽度
      flex: '1 1 auto',
      // 左外边距为24px
      marginLeft: '24px',
      // 文本颜色
      color: token.colorTextSecondary,
      // 行高为22px
      lineHeight: '22px',
      // 媒体查询，当屏幕宽度小于等于 token.screenSM 时，左外边距为0
      [`@media screen and (max-width: ${token.screenSM}px)`]: {
        marginLeft: '0',
      },
    },
    // 内容标题样式
    contentTitle: {
      // 下外边距为12px
      marginBottom: '12px',
      // 文本颜色
      color: token.colorTextHeading,
      // 字体粗细为500
      fontWeight: '500',
      // 字体大小为20px
      fontSize: '20px',
      // 行高为28px
      lineHeight: '28px',
    },
    // 额外内容样式
    extraContent: {
      // 缩放
      zoom: '1',
      // 伪元素，清除浮动
      '&::before, &::after': { display: 'table', content: "' '" },
      '&::after': {
        clear: 'both',
        height: '0',
        fontSize: '0',
        visibility: 'hidden',
      },
      // 右浮动
      float: 'right',
      // 不换行
      whiteSpace: 'nowrap',
      // 媒体查询，当屏幕宽度在 token.screenXL 和 token.screenLG 之间时，左外边距为-44px
      [`@media screen and (max-width: ${token.screenXL}px) and (min-width: @screen-lg)`]: {
        marginLeft: '-44px',
      },
      // 媒体查询，当屏幕宽度小于等于 token.screenLG 时，不浮动，右外边距为0
      [`@media screen and (max-width: ${token.screenLG}px)`]: {
        float: 'none',
        marginRight: '0',
      },
      // 媒体查询，当屏幕宽度小于等于 token.screenMD 时，左外边距为-16px
      [`@media screen and (max-width: ${token.screenMD}px)`]: {
        marginLeft: '-16px',
      },
    },
    // 统计项样式
    statItem: {
      // 相对定位
      position: 'relative',
      // 内联块级显示
      display: 'inline-block',
      // 内边距
      padding: '0 32px',
      // 第一个段落样式
      '> p:first-child': {
        // 下外边距为4px
        marginBottom: '4px',
        // 文本颜色
        color: token.colorTextSecondary,
        // 字体大小
        fontSize: token.fontSize,
        // 行高为22px
        lineHeight: '22px',
      },
      // 段落样式
      '> p': {
        // 外边距为0
        margin: '0',
        // 文本颜色
        color: token.colorTextHeading,
        // 字体大小为30px
        fontSize: '30px',
        // 行高为38px
        lineHeight: '38px',
        // 子元素样式
        '> span': {
          // 文本颜色
          color: token.colorTextSecondary,
          // 字体大小为20px
          fontSize: '20px',
        },
      },
      // 伪元素，添加分割线
      '&::after': {
        // 绝对定位
        position: 'absolute',
        // 上偏移8px
        top: '8px',
        // 右对齐
        right: '0',
        // 宽度为1px
        width: '1px',
        // 高度为40px
        height: '40px',
        // 背景颜色
        backgroundColor: token.colorSplit,
        // 内容为空
        content: "''",
      },
      // 最后一个统计项样式
      '&:last-child': {
        // 右内边距为0
        paddingRight: '0',
        // 伪元素，隐藏分割线
        '&::after': {
          display: 'none',
        },
      },
      // 媒体查询，当屏幕宽度在 token.screenXL 和 token.screenLG 之间时，内边距为0 16px
      [`@media screen and (max-width: ${token.screenXL}px) and (min-width: @screen-lg)`]: {
        padding: '0 16px',
      },
      // 媒体查询，当屏幕宽度小于等于 token.screenLG 时，内边距为0 16px，文本左对齐，隐藏分割线
      [`@media screen and (max-width: ${token.screenLG}px)`]: {
        padding: '0 16px',
        textAlign: 'left',
        '&::after': {
          display: 'none',
        },
      },
      // 媒体查询，当屏幕宽度小于等于 token.screenSM 时，不浮动
      [`@media screen and (max-width: ${token.screenSM}px)`]: { float: 'none' },
    },
    // 成员样式
    members: {
      // 链接样式
      a: {
        // 块级显示
        display: 'block',
        // 高度为24px
        height: '24px',
        // 上下外边距为12px，左右外边距为0
        margin: '12px 0',
        // 文本颜色
        color: token.colorText,
        // 过渡效果
        transition: 'all 0.3s',
        // 溢出隐藏
        overflow: 'hidden',
        // 不换行
        whiteSpace: 'nowrap',
        // 文本溢出省略号
        textOverflow: 'ellipsis',
        // 单词换行
        wordBreak: 'break-all',
        // 鼠标悬停样式
        '&:hover': {
          color: token.colorPrimary,
        },
      },
      // 媒体查询，当屏幕宽度在 token.screenXL 和 token.screenLG 之间时，下外边距为0
      [`@media screen and (max-width: ${token.screenXL}px) and (min-width: @screen-lg)`
        marginBottom: '0',
      },
      [`@media screen and (max-width: ${token.screenLG}px)`]: {
        marginBottom: '0',
      },
    },
    member: {
      marginLeft: '12px',
      fontSize: token.fontSize,
      lineHeight: '24px',
      verticalAlign: 'top',
    },
    projectList: {
      '.ant-card-meta-description': {
        height: '44px',
        overflow: 'hidden',
        color: token.colorTextSecondary,
        lineHeight: '22px',
      },
    },
    cardTitle: {
      fontSize: '0',
      a: {
        display: 'inline-block',
        height: '24px',
        marginLeft: '12px',
        color: token.colorTextHeading,
        fontSize: token.fontSize,
        lineHeight: '24px',
        verticalAlign: 'top',
        '&:hover': {
          color: token.colorPrimary,
        },
      },
    },
    projectGrid: {
      width: '33.33%',
      [`@media screen and (max-width: ${token.screenMD}px)`]: { width: '50%' },
      [`@media screen and (max-width: ${token.screenXS}px)`]: { width: '100%' },
    },
    projectItemContent: {
      display: 'flex',
      height: '20px',
      marginTop: '8px',
      overflow: 'hidden',
      fontSize: '12px',
      gap: 'epx',
      lineHeight: '20px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      wordBreak: 'break-all',
      a: {
        display: 'inline-block',
        flex: '1 1 0',
        color: token.colorTextSecondary,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        wordBreak: 'break-all',
        '&:hover': {
          color: token.colorPrimary,
        },
      },
    },
    datetime: {
      flex: '0 0 auto',
      float: 'right',
      color: token.colorTextDisabled,
    },
    activeCard: {
      [`@media screen and (max-width: ${token.screenXL}px) and (min-width: @screen-lg)`]: {
        marginBottom: '24px',
      },
      [`@media screen and (max-width: ${token.screenLG}px)`]: {
        marginBottom: '24px',
      },
    },
  };
});

export default useStyles;
