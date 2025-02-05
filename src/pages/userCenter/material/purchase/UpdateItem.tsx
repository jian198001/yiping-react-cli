import {
  ProFormInstance,
  BetaSchemaForm,
  ModalForm,
} from "@ant-design/pro-components";
import { getById, updateItem } from "@/services/userCenter/material/purchase";

import { arr } from "@/services/userCenter/material/material";
import { useRef, useState } from "react";

/**
 * UpdateItem 组件用于编辑物料采购明细单
 * @param {Object} props - 组件的属性
 * @param {string} props.id - 要编辑的物料采购明细单的 ID
 * @param {string} props.orderId - 采购订单的 ID
 * @param {Function} props.trigger - 触发模态框显示的函数
 * @param {Function} props.onOk - 模态框确认按钮的回调函数
 * @returns {JSX.Element} - 返回一个 ModalForm 组件
 */
export default (props: any) => {
  // 创建一个状态变量 optionsMaterialId 和对应的更新函数 setOptionsMaterialId
  const [optionsMaterialId, setOptionsMaterialId] = useState({});

  // 定义 loading 状态变量
  const [loading, setLoading] = useState(false);

  // 创建一个 ProFormInstance 的引用
  const formRef = useRef<ProFormInstance>?.();

  /**
   * 模态框打开或关闭时的回调函数
   * @async
   * @returns {Promise<void>}
   */
  const onOpenChange = async () => {
    // 获取物料列表数据
    const options: any = await arr?.({}, {}, {});

    console.log(options?.data);
    
    // 更新 optionsMaterialId 状态变量
    setOptionsMaterialId?.(options?.data);

    // 如果 id 存在，获取物料采购明细单数据并设置表单字段值
    if (id) {
      const data: any = await getById?.(id);
      if (data?.data) {
        return formRef?.current?.setFieldsValue?.({
          ...data?.data,
        });
      }
      return formRef?.current?.setFieldsValue?.({ id: id, orderId: orderId });
    }
  };

  // 定义初始值
  let initialValues = {
    id: "",
    title: "",
    orderId: "",
  };

  // 从 props 中解构 id、trigger、onOk、orderId
  const { id, trigger, onOk, orderId } = props;

  /**
   * 表单提交时的回调函数
   * @async
   * @param {Record<string, any>} values - 表单提交的值
   * @returns {Promise<boolean>}
   */
  const onFinish = async (values: Record<string, any>) => {
    // 将 id 和 orderId 添加到 values 中
    values = {
      ...values,
      id: id,
      orderId: orderId,
    };
    // 调用 run 函数提交表单
    // 调用 updateItem 函数更新物料采购明细单
 
    const res = await updateItem?.(values);

    // 如果更新成功，调用 onOk 函数
    if (res?.data) {
      onOk();
    }

    // 返回 true 表示提交成功
    return true;
  };

  // 定义表单字段配置
  let formItemsItem = [
    // 采购单明细
    {
      valueType: "group",
      columns: [
        {
          // 数量字段
          title: "数 量",
          dataIndex: "quantity",
          sorter: true,
          valueType: "digit",
          tooltip: "正数",
          formItemProps: {
            rules: [
              {
                required: true,
                message: "请输入正数",
              },
            ],
          }, 
          hideInSearch: true,
        },
        {
          // 物料字段
          title: "物 料",
          dataIndex: "materialId",
          valueType: "select",
          formItemProps: {
            rules: [
              {
                required: true,
                message: "请选择物料",
              },
            ],
          },
          width: "m",
          hideInSearch: true,
          valueEnum: optionsMaterialId,
        },
      ],
    },
  ];
  // 返回一个 ModalForm 组件
  return (
    <>
      <ModalForm
        formRef={formRef}
        onFinish={onFinish}
        modalProps={{
          // 关闭时销毁模态框
          destroyOnClose: true,
          // 设置确认按钮的 loading 状态
          okButtonProps: { loading },
        }}
        onOpenChange={onOpenChange}
        initialValues={initialValues}
        title="编辑采购明细单"
        trigger={trigger}
      >
        <BetaSchemaForm layoutType="Embed" columns={formItemsItem} />
      </ModalForm>
    </>
  );
};
