

import {
  ProFormInstance,

  BetaSchemaForm, 
  ModalForm,  
} from '@ant-design/pro-components';
import { message, } from 'antd';

import { consumeInstock, } from '@/services/userCenter/material/instock';
import { getById,  } from '@/services/userCenter/material/consume';

import { useRef,  } from 'react';
 
export default (props: any,) => {
  const formRef = useRef<ProFormInstance>?.();

  let consume: any = {}
 
  const onOpenChange = async () => {
     
    const id = record?.id
 
    if (id) {
      const data: any = await getById?.(id);

      if (data?.data) {

        consume = {
          ...consume,
          ...data?.data,
        }

        return formRef?.current?.setFieldsValue?.({
          ...data?.data,
        });
      }

      return formRef?.current?.setFieldsValue?.({ id: id, instockQuantity: 1, })

    }
  };

  let initialValues = {
    id: '',
    title: "",
  };

  const { record, trigger, onOk, } = props;

  const onFinish = async (values: Record<string, any>) => {

    values = {
      ...record,
      ...values,
    }

    if (values?.instockQuantity <= 0) {

      message?.error?.('领用数量需大于0, 请重试!');

      return false
      
    }

    if (values?.instockQuantity > consume?.quantity) {
      
      message?.error?.('领用数量需小于等于库存数量, 请重试!');

      return false
      
    }

    run?.(values);
    return true;
  }
  
    let formItems = [
      {
          valueType: 'group',
          columns: [{
            title: '归还数量',
            dataIndex: 'instockQuantity',
            valueType: 'digit',
            tooltip: '正数',
            sorter: true,
             
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请输入正数',
                    },
                    { type: 'number', min: 0, message: '请输入正数', },
                ],
            },
            width: 'm',
        },],
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
        title='归还入库单'
        trigger={trigger}>
        <BetaSchemaForm
          layoutType="Embed" 
          columns={formItems}
        />
      </ModalForm>
    </>

  )

}
