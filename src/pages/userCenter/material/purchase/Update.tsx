import {
  ProFormInstance,
  BetaSchemaForm,
  ModalForm,
  ProTable,
  ProColumns,
  ActionType,
} from "@ant-design/pro-components";
import { Button, message, Modal } from "antd";
import { pageItem, del } from "@/services/userCenter/material/purchase";

import { getById, update } from "@/services/userCenter/material/purchase";

import { useCallback, useRef, useState } from "react";

import { formItems } from "./FormText";

import UpdateItem from "./UpdateItem";

import { uuid } from "@/utils";

export default (props: any) => {
  const formRef = useRef<ProFormInstance>?.();

  // 定义 loading 状态
  const [loading, setLoading] = useState?.(false);

  const actionRef = useRef<ActionType>?.();

  const [selectedRowsState, setSelectedRows] = useState?.([]);

  const [messageApi, contextHolder] = message?.useMessage?.();

  const onOpenChange = async () => {
    actionRef?.current?.reload();

    if (id) {
      const data: any = await getById?.(id);

      if (data?.data) {
        return formRef?.current?.setFieldsValue?.({
          ...data?.data,
        });
      }

      return formRef?.current?.setFieldsValue?.({
        id: id,
        title: "采购单" + id,
      });
    }
  };

  let initialValues = {
    id: "",
    title: "",
  };

  const { id, trigger, onOk } = props;

  const onFinish = async (values: Record<string, any>) => {
    values = {
      ...values,
      id: id,
    };

    const res = await update?.(values);

    // 检查更新结果
    if (res?.code !== 0) {
      // 显示错误消息
      message?.error?.(res?.message);

      setLoading?.(false);

      // 返回 false，表示提交失败
      return false;
    }

    // 显示成功消息
    message?.success?.("提交成功");

    onOk?.();

    setLoading?.(false);

    return true;
  };

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

  const columnsItem: ProColumns<never, "text">[] = [
    {
      title: "物料名称",
      dataIndex: "materialName",
      sorter: true,

      formItemProps: {
        rules: [
          {
            required: true,
            message: "请输入物料名称",
          },
        ],
      },
      width: "m",
      hideInSearch: true,
    },
    {
      title: "规 格",
      dataIndex: "materialSku",
      sorter: true,

      formItemProps: {
        rules: [
          {
            required: true,
            message: "请输入规格",
          },
        ],
      },
      width: "m",
      hideInSearch: true,
    },
    {
      title: "数 量",
      dataIndex: "quantity",
      sorter: true,
      valueType: "digit",

      tooltip: "正数",
      formItemProps: {
        rules: [
          {
            required: true,
            message: "请输入数量",
          },
        ],
      },
      width: "m",
      hideInSearch: true,
    },
  ];

  const onItemOk = () => {
    actionRef?.current?.reload();
  };

  const request = async (params: any) => {
    const data = await pageItem?.(id, params, null, null);

    return data;
  };

  return (
    <>
      <ModalForm
        formRef={formRef}
        onFinish={onFinish}
        modalProps={{
          destroyOnClose: true,
          okButtonProps: { loading },
        }}
        onOpenChange={onOpenChange}
        initialValues={initialValues}
        title="编辑信息"
        trigger={trigger}
      >
        <BetaSchemaForm layoutType="Embed" columns={formItems} />
        <ProTable
          headerTitle="明细表格"
          rowKey="id"
          search={false}
          actionRef={actionRef}
          toolBarRender={() => [
            <>
              {" "}
              <Button
                danger
                disabled={!selectedRowsState || !selectedRowsState.length}
                onClick={() => {
                  handleRemove(selectedRowsState);
                }}
              >
                删 除
              </Button>
              <UpdateItem
                orderId={id}
                id={() => {
                  return uuid();
                }}
                onOk={onItemOk}
                trigger={<Button type="primary"> 新建明细 </Button>}
              ></UpdateItem>
            </>,
          ]}
          columns={columnsItem}
          request={request}
        ></ProTable>
      </ModalForm>
    </>
  );
};
