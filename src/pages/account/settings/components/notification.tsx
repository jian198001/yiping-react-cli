// 从 antd 库中导入 List 和 Switch 组件
import { List, Switch } from 'antd';
// 从 React 库中导入 React 和 Fragment
import React, { Fragment } from 'react';

/**
 * 定义一个泛型类型 Unpacked，用于提取数组类型中的元素类型
 * @template T - 传入的类型
 * @typedef {T extends (infer U)[] ? U : T} Unpacked
 */
type Unpacked<T> = T extends (infer U)[] ? U : T;

/**
 * 通知视图组件
 * 显示通知设置列表，包括系统消息和待办任务的开关
 * @returns {JSX.Element} 通知视图组件的 JSX 元素
 */
const NotificationView: React.FC = () => {
  /**
   * 获取通知设置数据的函数
   * @returns {Array} 返回一个包含通知设置数据的数组
   */
  const getData = () => {
    // 创建一个 Switch 组件实例，用于切换通知状态
    const Action = <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />;
    return [
      {
        // 通知设置项的标题
        title: '系统消息',
        // 通知设置项的描述
        description: '系统消息将以站内信的形式通知',
        // 通知设置项的操作按钮，包含一个 Switch 组件
        actions: [Action],
      },
      {
        // 通知设置项的标题
        title: '待办任务',
        // 通知设置项的描述
        description: '待办任务将以站内信的形式通知',
        // 通知设置项的操作按钮，包含一个 Switch 组件
        actions: [Action],
      },
    ];
  };

  // 调用 getData 函数获取通知设置数据
  const data = getData();

  return (
    <Fragment>
      {/* 使用 antd 的 List 组件展示通知设置数据 */}
      <List<Unpacked<typeof data>>
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item actions={item.actions}>
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
    </Fragment>
  );
};

// 导出 NotificationView 组件作为默认导出
export default NotificationView;
