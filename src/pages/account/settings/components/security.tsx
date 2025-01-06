// 引入 UpdatePwd 组件，用于更新密码
import UpdatePwd from '@/pages/userCenter/auth/user/UpdatePwd';
// 引入 antd 中的 List 组件，用于展示列表
import { List } from 'antd';
// 引入 React 库
import React from 'react';

/**
 * 定义一个泛型类型 Unpacked，用于提取数组类型中的元素类型
 * @template T - 传入的类型
 * @typedef {T extends (infer U)[] ? U : T} Unpacked
 */
type Unpacked<T> = T extends (infer U)[] ? U : T;

/**
 * 定义一个对象 passwordStrength，包含不同强度的密码提示文本
 * @type {Object}
 * @property {JSX.Element} strong - 强密码提示文本
 * @property {JSX.Element} medium - 中密码提示文本
 * @property {JSX.Element} weak - 弱密码提示文本
 */
const passwordStrength = {
  strong: <span className="strong">强</span>,
  medium: <span className="medium">中</span>,
  weak: <span className="weak">弱 Weak</span>,
};

/**
 * 安全设置视图组件
 * 展示账户密码相关的安全设置信息
 * @returns {JSX.Element} 安全设置视图组件的 JSX 元素
 */
const SecurityView: React.FC = () => {
  /**
   * 获取安全设置数据的函数
   * @returns {Array} 返回一个包含安全设置数据的数组
   */
  const getData = () => [
    {
      // 安全设置项的标题
      title: '账户密码',
      // 安全设置项的描述，包含当前密码强度
      description: (
        <>
          当前密码强度：
          {passwordStrength?.strong}
        </>
      ),
      // 安全设置项的操作按钮，包含一个更新密码的按钮
      actions: [<UpdatePwd trigger={<a>修 改</a>}></UpdatePwd>],
    },
  ];

  // 调用 getData 函数获取安全设置数据
  const data = getData();

  return (
    <>
      {/* 使用 antd 的 List 组件展示安全设置数据 */}
      <List<Unpacked<typeof data>>
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item actions={item.actions}>
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
    </>
  );
};

// 导出 SecurityView 组件作为默认导出
export default SecurityView;