

import {
  ProFormInstance,

  BetaSchemaForm, 
  ModalForm, 
  ProColumns,
  EditableProTable,
} from '@ant-design/pro-components';
import { Button, message } from 'antd';

import {  FormattedMessage, useRequest } from '@umijs/max';
import { getById, update } from '@/services/userCenter/material/purchase';

import { useRef, useState } from 'react';

import {  formItemsItem,} from './FormText';

import { getColumns, } from '@/utils';
 
export default (props: any,) => {
  const formRef = useRef<ProFormInstance>?.();

  const [dataSource, setDataSource] = useState([])
 
  const onOpenChange = async () => {
    
    setDataSource(checks)
    
    setDataSource(prevItems=>{

      for (const item of prevItems) {
        
        item.instockQuantity = 1

      }

      return [...prevItems, ]

    })

    if (id) {
      const data: any = await getById?.(id);

      if (data?.data) {
        return formRef?.current?.setFieldsValue?.({
          ...data?.data,
        });
      }

      return formRef?.current?.setFieldsValue?.({ id: id, })

    }
  };

  let initialValues = {
    id: '',
    title: "",
  };

  const { id, trigger, onOk, checks, } = props;

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

  const tableChange=(value: any)=>{

    console.log(value);

  }
 
  const columnsItem: ProColumns<never, "text">[] = [...getColumns?.(formItemsItem),
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record, _2, action, ) => [
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
          }, ],
      }, ]
 
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
        <EditableProTable
        headerTitle="明细表格" 
        rowKey="id"
        search={false}
        toolBarRender={() => [<> </>]}
        columns={columnsItem}
        request={async () => ({
          data: dataSource,
          total: dataSource.length,
          success: true,
        })}
        recordCreatorProps={false} 

        onChange={tableChange}

        editable={{
          type: 'multiple', 
          // defaultDom = {save,cancel,delete} 可以酌情添加和使用
          actionRender: (row, config, defaultDom) => [
            defaultDom.save,
            defaultDom.cancel,
          ],
        }}
        controlled={true}
        ></EditableProTable>
      </ModalForm>
    </>

  )

}
