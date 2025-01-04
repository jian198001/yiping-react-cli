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

/**
 * ConsumeInstock 组件用于编辑物料采购信息
 * @param {Object} props - 组件的属性
 * @param {string} props.id - 要编辑的物料采购的 ID
 * @param {Function} props.trigger - 触发模态框显示的函数
 * @param {Function} props.onOk - 模态框确认按钮的回调函数
 * @param {Array} props.checks - 物料库存信息
 * @returns {JSX.Element} - 返回一个 ModalForm 组件
 */
export default (props: any,) => {
  // 创建一个 ProFormInstance 的引用
  const formRef = useRef<ProFormInstance>?.();
  // 创建一个 dataSource 状态，用于存储表格数据
  const [dataSource, setDataSource] = useState([])

  /**
   * 模态框打开或关闭时的回调函数
   * @async
   * @returns {Promise<void>}
   */
  const onOpenChange = async () => {
    // 设置 dataSource 为 checks
    setDataSource(checks)
    // 更新 dataSource 中的 instockQuantity 字段为 1
    setDataSource(prevItems => {
      for (const item of prevItems) {
        item.instockQuantity = 1
      }
      return [...prevItems, ]
    })
    // 如果 id 存在，调用 getById 获取数据
    if (id) {
      const data: any = await getById?.(id);
      // 如果数据存在，设置表单字段值
      if (data?.data) {
        return formRef?.current?.setFieldsValue?.({
          ...data?.data,
        });
      }
      // 如果数据不存在，设置表单字段值为 id
      return formRef?.current?.setFieldsValue?.({ id: id, })
    }
  };

  // 定义初始值
  let initialValues = {
    id: '',
    title: "",
  };

  // 从 props 中解构 id、trigger、onOk、checks
  const { id, trigger, onOk, checks, } = props;

  /**
   * 使用 useRequest 钩子来处理请求
   * @param {Function} update - 更新数据的函数
   * @param {Object} config - 请求配置
   * @param {boolean} config.manual - 是否手动触发请求
   * @param {Function} config.onSuccess - 请求成功的回调函数
   * @param {Function} config.onError - 请求失败的回调函数
   */
  const { run, loading } = useRequest?.(update, {
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
    // 将 id 添加到 values 中
    values = {
      ...values,
      id: id,
    }
    // 调用 run 函数提交表单
    run?.(values);
    // 返回 true 表示提交成功
    return true;
  }

  /**
   * 表格数据变化时的回调函数
   * @param {any} value - 变化后的值
   */
  const tableChange = (value: any) => {
    console.log(value);
  }

  // 定义表格列配置
  const columnsItem: ProColumns<never, "text">[] = [...getColumns?.(formItemsItem),
    {
      // 标题为 "Operating"
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
      // 数据索引为 option
      dataIndex: 'option',
      // 值类型为 option
      valueType: 'option',
      // 渲染函数，返回一个编辑按钮，点击按钮开始编辑行
      render: (_, record, _2, action, ) => [
        <>  
          <Button type='primary' onClick={() => {
            action.startEditable(record.id);
          }} >编 辑</Button>
        </>
      ],
    },
  ];

  // 定义表单配置
  let formItems = [
    {
      // 字段值类型为 group，表示这是一个分组字段
      valueType: 'group',
      // 定义分组内的列
      columns: [{
        // 字段标题为 "标 题"
        title: '标 题',
        // 数据索引为 title
        dataIndex: 'title',
        // 开启排序功能
        sorter: true,
        // 设置表单字段的属性
        formItemProps: {
          // 设置验证规则
          rules: [
            {
              // 设置为必填项
              required: true,
              // 设置错误提示信息
              message: '请输入标题',
            },
          ],
        },
        // 设置字段宽度为 m
        width: 'm',
      }, ],
    }, ]

  // 返回一个 ModalForm 组件
  return (
    <> 
      <ModalForm formRef={formRef} 
        onFinish={onFinish}
        modalProps={{
          // 关闭时销毁模态框
          destroyOnClose: true,
          // 设置确认按钮的 loading 状态
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
