

import {
  ProFormInstance,

  BetaSchemaForm,
  ModalForm,
  ProTable,
  ProColumns,
  ActionType,
} from '@ant-design/pro-components';
import { Button, message, Modal } from 'antd';
import { pageItem, del } from '@/services/userCenter/material/purchase';

import { FormattedMessage, useRequest } from '@umijs/max';
import { getById, update } from '@/services/userCenter/material/purchase';

import { useCallback, useRef, useState } from 'react';

import { formItems, } from './FormText';

import UpdateItem from './UpdateItem';

import { uuid } from '@/utils';

export default (props: any,) => {
  const formRef = useRef<ProFormInstance>?.();

  const actionRef = useRef<ActionType>?.();

  const [selectedRowsState, setSelectedRows] = useState?.([]);

  const [messageApi, contextHolder] = message?.useMessage?.();

  const { run: delRun, _ } = useRequest?.(del, {
    manual: true,
    onSuccess: () => {
      setSelectedRows?.([]);
      actionRef?.current?.reload?.();

      messageApi?.success?.('删除操作成功');
    },
    onError: () => {
      messageApi?.error?.('删除操作失败,请重试');
    },
  });

  const onOpenChange = async () => {
 
    actionRef?.current?.reload()
 
    if (id) {
      const data: any = await getById?.(id);
 
      if (data?.data) {
 
        return formRef?.current?.setFieldsValue?.({
          ...data?.data,
        });
      }

      return formRef?.current?.setFieldsValue?.({ id: id, title: '采购单' + id, })

    }
  };

  let initialValues = {
    id: '',
    title: "",
  };

  const { id, trigger, onOk, } = props;

  const { run, loading } = useRequest?.(update, {
    manual: true,
    onSuccess: () => {
      message?.success?.('提交成功');
      onOk?.();
    }, onError: () => {
      message?.error?.('提交失败, 请重试!');
    },
  });

  const onFinish = async (values: Record<string, any>) => {

    values = {
      ...values
      , id: id,
    }

    run?.(values);
    return true;
  }

  const handleRemove = useCallback(
    async (selectedRows: any[]) => {

      Modal?.confirm?.({
        title: '操作提示', content: '是否确定删除这' + selectedRows?.length + '项信息?删除后将不可恢复', onOk() {
          // 确认操作的回调函数

          (async () => {
            await delRun?.(selectedRows?.map?.((row) => row?.id))
          })?.()

        },
      })
    },
    [delRun],
  );

  const columnsItem: ProColumns<never, "text">[] = [{
    title: '物料名称',
    dataIndex: 'materialName',
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
    dataIndex: 'materialSku',
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
  },
  {
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
  ];

  const onItemOk = () => {
 
    actionRef?.current?.reload()

  }

  const request=async (params: any)=>{
  
     const data = await pageItem?.(id, params, null, null, )
 
     return data

  }
 
  return (
    <>
      <ModalForm formRef={formRef} 
        onFinish={onFinish}
        modalProps={{
          destroyOnClose: true,
          okButtonProps: { loading, },
        }}
        onOpenChange={onOpenChange}
        initialValues={initialValues}
        title='编辑信息' 
        trigger={trigger}>
        <BetaSchemaForm
          layoutType="Embed"
          columns={formItems}
        />
        <ProTable
          headerTitle="明细表格"
          rowKey="id"
          search={false}
          actionRef={actionRef}
          toolBarRender={() => [<> <Button danger disabled={!selectedRowsState || !selectedRowsState.length} onClick={() => {
            handleRemove(selectedRowsState);
          }}  >删 除</Button><UpdateItem orderId={id} id={()=>{

            return uuid()

          }} onOk={onItemOk} trigger={<Button type="primary"> 新建明细 </Button>}></UpdateItem></>]}
          columns={columnsItem}
          request={request}
        ></ProTable>
      </ModalForm>
    </>

  )

}
