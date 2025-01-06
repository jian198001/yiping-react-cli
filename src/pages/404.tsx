// 引入 @umijs/max 中的 history 和 useIntl 钩子函数
import { history, useIntl } from '@umijs/max';
// 引入 antd 中的 Button 和 Result 组件
import { Button, Result } from 'antd';
// 引入 React 库
import React from 'react';

/**
 * 404 页面组件
 * 显示 404 状态和提示信息，提供返回首页的按钮
 */
const NoFoundPage: React.FC = () => (
  // 使用 Result 组件显示 404 状态和提示信息
  <Result
    status="404" // 设置状态为 404
    title="404" // 设置标题为 404
    // 使用 useIntl 钩子函数获取国际化实例，并格式化消息内容
    subTitle={useIntl().formatMessage({ id: 'pages.404.subTitle' })}
    extra={
      // 使用 Button 组件显示返回首页的按钮
      <Button type="primary" onClick={() => history.push('/')}>
        // 使用 useIntl 钩子函数获取国际化实例，并格式化消息内容
        {useIntl().formatMessage({ id: 'pages.404.buttonText' })}
      </Button>
    }
  />
);

// 导出 NoFoundPage 组件作为默认导出
export default NoFoundPage;
