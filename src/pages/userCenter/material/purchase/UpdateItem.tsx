import {
  ProFormInstance,
  BetaSchemaForm,
  ModalForm,
} from "@ant-design/pro-components";
import { message, } from "antd";

import { useRequest } from "@umijs/max";
import { getById, updateItem, } from "@/services/userCenter/material/purchase";

import { arr, } from '@/services/userCenter/material/material'

import { useRef, useState,  } from "react";

export default (props: any) => {

  const [optionsMaterialId, setOptionsMaterialId] = useState({})

  const formRef = useRef<ProFormInstance>?.();

  const onOpenChange = async () => {

    const options: any = await arr?.({}, {}, {}, )

    console.log(options?.data);

    setOptionsMaterialId?.(options?.data)

    if (id) {
      const data: any = await getById?.(id);

      if (data?.data) {
        return formRef?.current?.setFieldsValue?.({
          ...data?.data,
        });
      }

      return formRef?.current?.setFieldsValue?.({ id: id, orderId: orderId, });
    }
  };

  let initialValues = {
    id: "",
    title: "",
    orderId: '',
  };

  const { id, trigger, onOk, orderId, } = props;

  const { run, loading } = useRequest?.(updateItem, {
    manual: true,
    onSuccess: () => {
      message?.success?.("提交成功");
      onOk?.();
    },
    onError: () => {
      message?.error?.("提交失败, 请重试!");
    },
  });

  const onFinish = async (values: Record<string, any>) => {

    values = {
      ...values,
      id: id,
      orderId: orderId,
    };

    run?.(values);
    return true;
  };

  const valueEnum = {
    input: { text: '创建新物料', },
    radio: { text: '从已有物料中选择', },
  }
  
  let formItemsItem = [ // 采购单明细
    {
      valueType: 'group',
      columns: [{
        title: '数 量',
        dataIndex: 'quantity',
        sorter: true,
        valueType: 'digit',

        tooltip: '正数',
        formItemProps: {
          rules: [
            {
              required: true,
              message: '请输入数量',
            },
          ],
        },
        width: 'm',
        hideInSearch: true,
      },
      {
        title: '采购方式',
        dataIndex: 'type',
        sorter: true,
        valueType: 'select',
        valueEnum,

        formItemProps: {
          rules: [
            {
              required: true,
              message: '请选择采购方式',
            },
          ],
        },
        width: 'm',
        hideInSearch: true,
      }, {
        valueType: 'dependency',
        name: ['type'],
        columns: ({ type }) => {
          if (type === 'input') {
            return [
              {
                valueType: 'group',
                columns: [{
                  title: '物料名称',
                  dataIndex: 'name',
                  sorter: true,

                  formItemProps: {
                    rules: [
                      {
                        required: true,
                        message: '请输入物料名称',
                      },
                    ],
                  },
                  width: 'm',
                  hideInSearch: true,
                }, {
                  title: '规 格',
                  dataIndex: 'sku',
                  sorter: true,

                  formItemProps: {
                    rules: [
                      {
                        required: true,
                        message: '请输入规格',
                      },
                    ],
                  },
                  width: 'm',
                  hideInSearch: true,
                },]
              }
            ];
          }

          if (type === 'radio') {
            return [
              {
                title: '物料名称及规格',
                dataIndex: 'materialId',
                sorter: true,
                valueType: 'select',

                formItemProps: {
                  rules: [
                    {
                      required: true,
                      message: '请选择物料名称及规格',
                    },
                  ],
                },
                width: 'm',
                hideInSearch: true, 
                // 将动态数据作为选项

                valueEnum: optionsMaterialId,
              },
            ];
          }

          return [];
        },
      },

      ],
    },]

  return (
    <>
      <ModalForm formRef={formRef}
        onFinish={onFinish}
        modalProps={{
          destroyOnClose: true,
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
