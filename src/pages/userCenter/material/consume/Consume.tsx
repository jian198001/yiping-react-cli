// 从 @ant-design/pro-components 库中导入 ProFormInstance、BetaSchemaForm 和 ModalForm 组件
import {
  ProFormInstance,
  BetaSchemaForm, 
  ModalForm,  
} from '@ant-design/pro-components';
// 从 antd 库中导入 message 组件
import { message } from 'antd';
// 从 @umijs/max 库中导入 useRequest 钩子
import {  useRequest } from '@umijs/max';
// 从 @/services/userCenter/material/stock 模块中导入 getById 函数
import { getById,  } from '@/services/userCenter/material/stock';
// 从 @/services/userCenter/material/consume 模块中导入 consumeOutstock 函数
import { consumeOutstock, } from '@/services/userCenter/material/consume';
// 从 react 库中导入 useRef 钩子
import { useRef, } from 'react';

/**
 * Consume 组件用于处理物料领用出库的表单操作
 * @param {Object} props - 组件的属性
 * @param {Object} props.record - 当前物料记录
 * @param {Function} props.trigger - 触发模态框显示的函数
 * @param {Function} props.onOk - 模态框确认按钮的回调函数
 * @returns {JSX.Element} - 返回一个 ModalForm 组件
 */
export default (props: any,) => {
  // 创建一个 ProFormInstance 的引用
  const formRef = useRef<ProFormInstance>?.();

  // 定义一个变量 material，用于存储物料信息
  let material: any = {};
  
  /**
   * 模态框打开或关闭时的回调函数
   * @async
   * @returns {Promise<void>}
   */
  const onOpenChange = async () => {
    // 获取当前物料记录的 ID
    const id = record?.id;
 
    // 如果 ID 存在，调用 getById 获取物料数据
    if (id) {
      const data: any = await getById?.(id);

      // 如果数据存在，更新 material 变量并设置表单字段值
      if (data?.data) {
        material = {
          ...material,
          ...data?.data,
        };

        return formRef?.current?.setFieldsValue?.({
          ...data?.data,
        });
      }

      // 如果数据不存在，设置表单字段值为默认值
      return formRef?.current?.setFieldsValue?.({ id: id, consumeQuantity: 1,})
    }
  };

  // 定义表单的初始值
  let initialValues = {
    id: '',
    title: "",
  };

  // 从 props 中解构 record、trigger、onOk
  const { record, trigger, onOk, } = props;

  /**
   * 使用 useRequest 钩子来处理领用出库请求
   * @param {Function} consumeOutstock - 领用出库的函数
   * @param {Object} config - 请求配置
   * @param {boolean} config.manual - 是否手动触发请求
   * @param {Function} config.onSuccess - 请求成功的回调函数
   * @param {Function} config.onError - 请求失败的回调函数
   */
  const { run, loading } = useRequest?.(consumeOutstock, {
    manual: true,
    onSuccess: () => {
      // 请求成功时显示成功消息并调用 onOk 函数
      message?.success?.('提交成功');
      onOk?.();
    }, onError: () => {
      // 请求失败时显示错误消息
      message?.error?.('提交失败, 请重试!');
    },
  });

  /**
   * 表单提交时的回调函数
   * @async
   * @param {Record<string, any>} values - 表单提交的值
   * @returns {Promise<boolean>}
   */
  const onFinish = async (values: Record<string, any>) => {
    // 将 record 的值合并到 values 中
    values = {
      ...record,
      ...values,
    };

    // 检查领用数量是否小于等于0
    if (values?.consumeQuantity <= 0) {
      // 显示错误消息
      message?.error?.('领用数量需大于0, 请重试!');
      // 返回 false，表示提交失败
      return false;
    }

    // 检查领用数量是否大于库存数量
    if (values?.consumeQuantity > material?.quantity) {
      // 显示错误消息
      message?.error?.('领用数量需小于等于库存数量, 请重试!');
      // 返回 false，表示提交失败
      return false;
    }

    // 调用 run 函数提交表单
    run?.(values);
    // 返回 true，表示提交成功
    return true;
  };

  // 定义表单字段配置
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
    },
  ];

  // 返回一个 ModalForm 组件
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
  );
};