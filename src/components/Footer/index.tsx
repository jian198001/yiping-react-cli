// 引入 Ant Design 图标库中的 GithubOutlined 图标组件
import { GithubOutlined } from '@ant-design/icons';
// 引入 Ant Design Pro Components 库中的 DefaultFooter 组件
import { DefaultFooter } from '@ant-design/pro-components';
// 引入 React 库
import React from 'react';

/**
 * 页脚组件
 * 显示版权信息和链接，背景透明
 */
const Footer: React.FC = () => {
  return (
    // 使用 DefaultFooter 组件显示页脚内容
    <DefaultFooter
      style={{
        // 设置背景为透明
        background: 'none',
      }}
      copyright="Powered by 一平软件" // 设置版权信息
      links={[ 
        // 可以在这里添加链接数组，例如：
        // { key: 'github', title: 'GitHub', href: 'https://github.com/your-repo', icon: <GithubOutlined /> },
      ]}
    />
  );
};

// 导出 Footer 组件作为默认导出
export default Footer;
