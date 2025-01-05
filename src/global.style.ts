import { createStyles } from 'antd-style';

/**
 * 创建全局样式
 * @param {} - 空对象
 * @returns {Object} - 返回一个包含全局样式的对象
 */
const useStyles = createStyles(({}) => {
  return {
    /**
     * 颜色弱化样式
     * 将页面颜色反转80%，适用于颜色弱化模式
     */
    colorWeak: {
      // 使用滤镜将颜色反转80%
      filter: 'invert(80%)',
    },
    /**
     * Ant Design布局样式
     * 设置最小高度为100vh，确保布局填满整个视口
     */
    'ant-layout': {
      // 设置最小高度为100vh
      minHeight: '100vh',
    },
    /**
     * Ant Design侧边栏样式
     * 覆盖默认的左侧定位，使其不固定在左侧
     */
    'ant-pro-sider.ant-layout-sider.ant-pro-sider-fixed': {
      // 取消左侧定位
      left: 'unset',
    },
    /**
     * 画布样式
     * 将画布设置为块级元素，避免内联元素的默认行为
     */
    canvas: {
      // 将画布设置为块级元素
      display: 'block',
    },
    /**
     * 页面主体样式
     * 优化文本渲染，使其在不同平台上显示更清晰
     */
    body: {
      // 优化文本渲染，使其更清晰易读
      textRendering: 'optimizeLegibility',
      // 在WebKit浏览器中启用抗锯齿字体渲染
      WebkitFontSmoothing: 'antialiased',
      // 在Firefox浏览器中启用灰度字体渲染
      MozOsxFontSmoothing: 'grayscale',
    },
    /**
     * 无序列表和有序列表样式
     * 移除默认的列表样式
     */
    'ul,ol': {
      // 移除默认的列表样式
      listStyle: 'none',
    },
    /**
     * 媒体查询样式
     * 在屏幕宽度小于等于768px时，应用以下样式
     */
    '@media(max-width: 768px)': {
      /**
       * Ant Design表格样式
       * 设置表格宽度为100%，并在需要时显示水平滚动条
       */
      'ant-table': {
        // 设置表格宽度为100%
        width: '100%',
        // 在内容溢出时显示水平滚动条
        overflowX: 'auto',
        // 设置表头和表格行的样式
        '&-thead > tr,    &-tbody > tr': {
          '> th,      > td': {
            // 设置单元格内文本不换行
            whiteSpace: 'pre',
            // 设置单元格内的span元素为块级元素
            '> span': {
              display: 'block',
            },
          },
        },
      },
    },
  };
});

export default useStyles;
