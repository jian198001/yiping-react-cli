// 从 @ant-design/icons 中导入 AlipayOutlined 和 TaobaoOutlined 图标组件
import { AlipayOutlined, TaobaoOutlined } from '@ant-design/icons';
// 从 antd 中导入 List 组件
import { List } from 'antd';
// 从 React 中导入 Fragment 组件
import React, { Fragment } from 'react';

/**
 * 绑定视图组件
 * 显示绑定支付宝的选项，并提供绑定操作
 * @returns {JSX.Element} 绑定视图组件的 JSX 元素
 */
const BindingView: React.FC = () => {
  /**
   * 获取绑定数据的函数
   * @returns {Array} 返回一个包含绑定数据的数组
   */
  const getData = () => [
    {
      // 绑定项的标题
      title: '绑定支付宝',
      // 绑定项的描述
      description: '当前未绑定支付宝账号',
      // 绑定项的操作按钮，包含一个绑定链接
      actions: [<a key="Bind">绑定</a>],
      // 绑定项的图标，使用 AlipayOutlined 图标组件
      avatar: <AlipayOutlined className="alipay" />,
    },
  ];

  return (
    <Fragment>
      {/* 使用 antd 的 List 组件展示绑定数据 */}
      <List
        itemLayout="horizontal"
        dataSource={getData()}
        renderItem={(item) => (
          <List.Item actions={item.actions}>
            <List.Item.Meta
              avatar={item.avatar}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </Fragment>
  );
};

// 导出 BindingView 组件作为默认导出
export default BindingView;
