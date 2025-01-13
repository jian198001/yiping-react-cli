

import {
  ProFormInstance,

  BetaSchemaForm,
  ModalForm,
  ProColumns,
  EditableProTable, 
} from '@ant-design/pro-components';
import { Button, message } from 'antd';
 
import { getById, update, pageItem, purchaseInstock, } from '@/services/userCenter/material/purchase'; 

import { useRef, } from 'react';

import { uuid, } from '@/utils';

export default (props: any,) => {
  const formRef = useRef<ProFormInstance>?.();
  
  const onOpenChange = async () => {

    if (id) {
      const data: any = await getById?.(id);

      return formRef?.current?.setFieldsValue?.({ id: id, title: '采购入库单' + uuid()})

    }
  };

  let initialValues = {
    id: '',
    title: '',
  };

  const { id, trigger, onOk, } = props;

  const onFinish = async (values: Record<string, any>) => {
 
    values = {
      ...values
      , id: id,
      item: itemData,
    }

    run?.(values);
    return true;
  }

  const tableChange=(val: any)=>{

    itemData = [...val,]
    
  }
 
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
    readonly: true,
  }, {
    title: '规 格',
    dataIndex: 'materialSku',
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
    readonly: true,
  }, {
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
    readonly: true,
  }, {
    title: '失效期',
    dataIndex: 'exp',
    sorter: true,
    valueType: 'date',

    tooltip: '日期',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '请选择失效期',
        },
      ],
    },
    width: 'm',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
    dataIndex: 'option',
    valueType: 'option',
    render: (_, record, _2, action,) => [
      <>
        <Button type='primary' onClick={() => {
          action.startEditable(record.id);
        }} >编 辑</Button>
      </>

    ],
  },
  ];

  let formItems = [
    {
      valueType: 'group',
      columns: [{
        title: '标 题',
        dataIndex: 'title',
        sorter: true,

        formItemProps: {
          rules: [
            {
              required: true,
              message: '请输入标题',
            },
          ],
        },
        width: 'm',
      },],
    },]

    let itemData: any[] = []

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
        title='物料入库单'
        trigger={trigger}>
        <BetaSchemaForm
        formRef={formRef}
          layoutType="Embed"
          columns={formItems}
        />
        <EditableProTable
          headerTitle="明细表格"
          rowKey="id"
          search={false}
          toolBarRender={() => [<> </>]}
          columns={columnsItem} 
          recordCreatorProps={false} 

          onChange={tableChange}

          editable={{
            type: 'multiple',   
            actionRender: (row, config, defaultDom) => [
              defaultDom.save,
              defaultDom.cancel,
            ],
          }}
          controlled={true}
          request={request}
        ></EditableProTable>

      </ModalForm>
    </>

  )

}
