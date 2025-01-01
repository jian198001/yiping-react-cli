

import {
  ProFormInstance,
  BetaSchemaForm, 
  ModalForm,  
} from '@ant-design/pro-components';
import { message } from 'antd';

import {  useRequest } from '@umijs/max';
import { getById,  } from '@/services/userCenter/material/stock';

import { consumeOutstock, } from '@/services/userCenter/material/consume';

import { useRef, } from 'react';
 
export default (props: any,) => {

  const formRef = useRef<ProFormInstance>?.();

  let material: any = {}
  
  const onOpenChange = async () => {

    const id = record?.id
 
    if (id) {
      const data: any = await getById?.(id);

      if (data?.data) {

        material = {
          ...material,
          ...data?.data,
        }

        return formRef?.current?.setFieldsValue?.({
          ...data?.data,
        });
      }

      return formRef?.current?.setFieldsValue?.({ id: id, consumeQuantity: 1,})

    }
  };

  let initialValues = {
    id: '',
    title: "",
  };

  const { record, trigger, onOk, } = props;

  const { run, loading } = useRequest?.(consumeOutstock, {
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
      ...record,
      ...values,
    }

    if (values?.consumeQuantity <= 0) {

      message?.error?.('领用数量需大于0, 请重试!');

      return false
      
    }

    if (values?.consumeQuantity > material?.quantity) {
      
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
            title: '领用数量',
            dataIndex: 'consumeQuantity',
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
            initialValue: 1,
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
        title='领用出库单'
        trigger={trigger}>
        <BetaSchemaForm
          layoutType="Embed" 
          columns={formItems}
        /> 
      </ModalForm>
    </>

  )

}
