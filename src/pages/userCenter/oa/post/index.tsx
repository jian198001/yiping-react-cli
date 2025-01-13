// 导入 Update 组件
import Update from "./Update";
// 导入分页查询和删除数据的函数
import { page, del } from "@/services/userCenter/oa/post";
// 导入 ProComponents 库中的类型
import type { ActionType, ProColumns } from "@ant-design/pro-components";
// 导入 ProComponents 库中的组件
import { PageContainer, ProTable } from "@ant-design/pro-components";

// 导入 Ant Design 中的组件
import { Button, message, Modal } from "antd";
// 导入 React 中的钩子
import {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
// 导入自定义的表单配置
import { formItems } from "./FormText";
// 导入工具函数
import { getColumns } from "@/utils";
// 导入生成唯一ID的函数
import { uuid } from "@/utils";

// 导入 UmiJS 中的组件和钩子
import { FormattedMessage, useIntl } from "@umijs/max";
/**
 * 页面组件
 * @returns {JSX.Element} - 返回页面组件
 */
export default () => {
  // 使用 useState 创建一个 uid 状态
  const [uid, setUid] = useState("");
  // 使用 useRef 创建一个 actionRef 引用
  const actionRef = useRef<ActionType>?.();
  // 使用 useState 创建一个 selectedRowsState 状态
  const [selectedRowsState, setSelectedRows] = useState?.([]);

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl?.();
  // 使用 message.useMessage 创建一个 messageApi 和 contextHolder
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
      // 渲染函数，返回一个编辑按钮，点击按钮弹出编辑模态框
      render: (_, record) => [
        <Update
          key={record.id}
          trigger={<Button>编 辑</Button>}
          id={record?.id}
          onOk={actionRef?.current?.reload}
        ></Update>,
      ],
    },
  ];

  /**
   *  Delete node
   * @zh-CN 删除节点
   *
   * @param selectedRows
   */
  const handleRemove = async (selectedRows: any[]) => {
    // 异步函数，用于处理删除操作
    // 弹出确认对话框，确认是否删除选中的行
    Modal?.confirm?.({
      title: "操作提示",
      content:
        "是否确定删除这" + selectedRows?.length + "项信息?删除后将不可恢复",
      onOk() {
        // 确认操作的回调函数
        // 异步调用 del 函数，传入选中行的 id 数组
        (async () => {
          // 利用 await 调用 del 函数，并拿到响应结果
          const res = await del?.(selectedRows?.map?.((row) => row?.id));
          if (res?.code !== 0) {
            // 如果响应结果的 code 不为 0，则显示错误信息
            return messageApi?.error?.(res?.message || "删除操作失败,请重试");
          } else {
            setSelectedRows?.([]);
            actionRef?.current?.reload?.();
            // 如果 code 为 0，则显示成功信息，并重置表单已选中项
            messageApi?.success?.(res?.message || "删除操作成功");
          }
        })();
      },
    });
  };

  // 新增或编辑表单提交后的回调函数
  const onOk = () => {
    // 新增或编辑表单提交后,刷新分页列表
    // 生成一个新的 uuid 并设置为 uid 状态
    setUid?.(uuid?.());
    // 刷新表格
    actionRef?.current?.reload();
  };

  // 组件挂载时，生成一个新的 uuid 并设置为 uid 状态
  useEffect?.(() => {
    // 生成一个新的 uuid 并设置为 uid 状态
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
        // 设置表格的 actionRef
        actionRef={actionRef}
        // 设置表格的行键为 id
        rowKey="id"
        // 自定义工具栏渲染函数，返回一个包含删除按钮和新建按钮的数组
        toolBarRender={() => [
          <>
            <Button
              danger
              disabled={!selectedRowsState || !selectedRowsState.length}
              onClick={() => {
                handleRemove(selectedRowsState);
              }}
            >
              删 除
            </Button>
            <Update
              trigger={<Button type="primary"> 新 建 </Button>}
              id={uid}
              onOk={onOk}
            ></Update>
          </>,
        ]}
        // 设置表格的请求函数为 page
        request={page}
        // 设置表格的列配置
        columns={columns}
        // 设置表格的行选择配置，当选中行变化时，更新 selectedRowsState 状态
        rowSelection={{
          onChange: (_, selectedRows: SetStateAction<never[]>) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
    </PageContainer>
  );
};
