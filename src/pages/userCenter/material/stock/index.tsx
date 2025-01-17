// 导入 Consume 组件
import Consume from "../consume/Consume";
// 导入分页查询的函数
import { page } from "@/services/userCenter/material/stock";
// 导入 ProComponents 库中的类型
import type { ActionType, ProColumns } from "@ant-design/pro-components";
// 导入 ProComponents 库中的组件
import { PageContainer, ProTable } from "@ant-design/pro-components";
// 导入 UmiJS 中的组件和钩子
import { FormattedMessage, useIntl } from "@umijs/max";
// 导入 Ant Design 中的组件
import { Button, message } from "antd";
// 导入 React 中的钩子
import { SetStateAction, useEffect, useRef, useState } from "react";
// 导入表单配置
import { formItems } from "./FormText";
// 导入工具函数
import { getColumns } from "@/utils";
// 导入生成唯一ID的函数
import { uuid } from "@/utils";

/**
 * 页面组件
 * @returns {JSX.Element} - 返回页面组件
 */
export default () => {
  // 创建一个 uid 状态，用于存储唯一ID
  const [uid, setUid] = useState("");
  // 创建一个 ProTable 的 actionRef 引用
  const actionRef = useRef<ActionType>?.();
  // 创建一个 selectedRowsState 状态，用于存储选中的行
  const [selectedRowsState, setSelectedRows] = useState?.([]);
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl?.();
  // 创建一个 messageApi 和 contextHolder，用于显示消息
  const [messageApi, contextHolder] = message?.useMessage?.();
  // 定义表格列配置
  const columns: ProColumns<never, "text">[] = [
    ...getColumns?.(formItems),
    {
      // 标题为 "Operating"
      title: (
        <FormattedMessage
          id="pages.searchTable.titleOption"
          defaultMessage="Operating"
        />
      ),
      // 数据索引为 option
      dataIndex: "option",
      // 值类型为 option
      valueType: "option",
      // 渲染函数，返回一个领用出库按钮，点击按钮弹出相应模态框
      render: (_, record) => [
        <>
          {
            <Consume
              record={record}
              onOk={onOk}
              trigger={<Button type="primary">领用出库</Button>}
            ></Consume>
          }
        </>,
      ],
    },
  ];
  /**
   * 表单提交成功后的回调函数
   * @zh-CN 表单提交成功后的回调函数
   */
  const onOk = () => {
    // 新增或编辑表单提交后,刷新分页列表
    // 设置 uid 为新的唯一ID
    setUid?.(uuid?.());
    // 刷新表格
    actionRef?.current?.reload();
  };
  /**
   * 组件挂载后执行的副作用函数
   * @zh-CN 组件挂载后执行的副作用函数
   */
  useEffect?.(() => {
    // 设置 uid 为新的唯一ID
    setUid?.(uuid?.());
  }, []);
  // 返回页面组件
  return (
    <PageContainer>
      {contextHolder}
      <ProTable
        // 设置表格标题
        headerTitle={intl?.formatMessage({
          id: "pages.searchTable.title",
          defaultMessage: "查询表格",
        })}
        // 设置 actionRef
        actionRef={actionRef}
        // 设置行键
        rowKey="id"
        // 设置工具栏渲染函数
        toolBarRender={() => []}
        // 设置请求函数
        request={page}
        // 设置表格列
        columns={columns}
        // 设置行选择
        rowSelection={{
          onChange: (_, selectedRows: SetStateAction<never[]>) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
    </PageContainer>
  );
};
