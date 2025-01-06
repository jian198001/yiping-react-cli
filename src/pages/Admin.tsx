// 引入Ant Design图标库中的HeartTwoTone和SmileTwoTone图标组件
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
// 引入Ant Design Pro Components库中的PageContainer组件
import { PageContainer } from '@ant-design/pro-components';
// 引入Umi框架中的useIntl钩子函数，用于国际化
import { useIntl } from '@umijs/max';
// 引入Ant Design库中的Alert、Card和Typography组件
import { Alert, Card, Typography } from 'antd';
// 引入React库
import React from 'react';

/**
 * 管理员页面组件
 * 仅管理员可查看，显示欢迎信息和提示信息
 */
const Admin: React.FC = () => {
  // 使用useIntl钩子函数获取国际化实例
  const intl = useIntl();

  return (
    // 使用PageContainer组件包裹页面内容，并设置content属性为国际化后的标题
    <PageContainer
      content={intl.formatMessage({
        id: 'pages.admin.subPage.title',
        defaultMessage: 'This page can only be viewed by admin',
      })}
    >
      {/* 使用Card组件包裹内容 */}
      <Card>
        {/* 使用Alert组件显示成功提示信息，国际化消息内容 */}
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: 'Faster and stronger heavy-duty components have been released.',
          })}
          type="success" // 设置提示类型为成功
          showIcon // 显示图标
          banner // 显示为横幅样式
          style={{
            margin: -12, // 设置外边距为-12px
            marginBottom: 48, // 设置底部外边距为48px
          }}
        />
        {/* 使用Typography组件显示标题，居中对齐，包含SmileTwoTone和HeartTwoTone图标 */}
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          <SmileTwoTone /> 一平管理系统 <HeartTwoTone twoToneColor="#eb2f96" /> You
        </Typography.Title>
      </Card>
      {/* 使用p标签显示提示信息，包含链接，居中对齐，顶部外边距为24px */}
      <p style={{ textAlign: 'center', marginTop: 24 }}>
        Want to add more pages? Please refer to{' '}
        <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
          use block
        </a>
        。
      </p>
    </PageContainer>
  );
};

// 导出Admin组件作为默认导出
export default Admin;
