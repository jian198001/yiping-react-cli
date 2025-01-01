import Update from './Update';
import PurchaseInstock from '../instock/PurchaseInstock';
import { page, del, submit, } from '@/services/userCenter/material/purchase';
import type { ActionType, ProColumns, } from '@ant-design/pro-components';
import {
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl, useModel, useRequest } from '@umijs/max';
import { Button, message, Modal } from 'antd';
import { SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { uuid } from '@/utils'
export default () => {

  const [uid, setUid] = useState('')

  const [role, setRole] = useState('')

  const {
    initialState: {   // 初始化数据 

      currentUser = {}

    },
 } = useModel('@@initialState');

  const actionRef = useRef<ActionType>?.();
  const [selectedRowsState, setSelectedRows] = useState?.([])

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl?.();

  const [messageApi, contextHolder] = message?.useMessage?.();

  const { run: delRun, loading } = useRequest?.(del, {
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

  const columns: ProColumns<never, "text">[] = [{
    title: '标 题',
    dataIndex: 'title',
    sorter: true,

    width: 'm',
  },
  {
    title: '明细数',
    dataIndex: 'itemCount',
    sorter: true,
    hideInForm: true,
  }, {
    title: '状 态',
    dataIndex: 'tradeState',
    sorter: true, valueType: 'select',
    hideInForm: true,
    valueEnum: {
      edit: { text: '待提交' },
      submit: {
        text: '待入库',
      },
      stock: {
        text: '已采购完成',
      }
    },
  }, {
    title: '创建时间',
    dataIndex: 'create_date',
    sorter: true,
    hideInForm: true,
    valueType: 'date',
  }, {
    title: '操作者',
    dataIndex: 'username',
    sorter: true,
    hideInForm: true,
  },
  {
    title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
    dataIndex: 'option',
    valueType: 'option',
    render: (_, record) => [
      <>
        {(!record?.tradeState || record?.tradeState === 'edit') && (<Update key={record?.id} trigger={<Button type='primary'>编 辑</Button>} id={record?.id} onOk={onOk}></Update>)}

        {(!record?.tradeState || record?.tradeState === 'edit') && record?.itemCount > 0 && (<Button type='primary' onClick={() => {

          handleSubmit?.(record)

        }} onOk={onOk} >提 交</Button>)}
        {(record?.tradeState === 'submit' && <PurchaseInstock id={record?.id} trigger={<Button type='primary' >入 库</Button>} onOk={onOk} />)}
        {((!record?.tradeState || record?.tradeState === 'edit') && <Button onClick={() => {

          handleRemove?.(record,)

        }} danger onOk={onOk}>删 除</Button>)}
      </>

    ],
  },
  ];

  /**
   *  Delete node
   * @zh-CN 删除节点
   *
   * @param selectedRows
   */
  const handleRemove = useCallback(
    async (item: any) => {

      Modal?.confirm?.({
        title: '操作提示', content: `是否确定删除标题为${item.title}的信息?删除后将不可恢复`, onOk() {
          // 确认操作的回调函数

          (async () => {
            await delRun?.([item?.id])
          })?.()

        },
      })
    },
    [delRun],
  );

  const handleSubmit = useCallback(
    async (item: any) => {

      Modal?.confirm?.({
        title: '操作提示', content: `是否确定提交标题为${item?.title}的信息?提交后将不可再次编辑`, onOk() {
          // 确认操作的回调函数

          (async () => {

            await submit?.(item?.id,)

            actionRef?.current?.reload()

          })?.()

        },
      })
    },
    [delRun],
  );

  const isAdmin=()=>{
 
    if (currentUser?.roleIds?.includes("1")) {

      return true

    }

    return false

  }

  const onOk = () => { // 新增或编辑表单提交后,刷新分页列表

    console.log('onOk');

    actionRef?.current?.reload()

    setUid?.(uuid?.())

  }

  useEffect?.(() => {

    // 获取当前登陆用户的角色，只有admin角色才可以管理采购单

    setUid?.(uuid?.())

  }, [])

  return (
    <PageContainer >
      {contextHolder}
      <ProTable
        headerTitle={intl?.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: '查询表格',
        })}
        actionRef={actionRef}
        rowKey="id"

        toolBarRender={() => [<> <Update trigger={<Button type="primary" disabled={!isAdmin()} > 新建采购单 </Button>} id={uid} onOk={onOk} ></Update></>]}
        request={page}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows: SetStateAction<never[]>) => {
            setSelectedRows(selectedRows);
          },
        }}
      />

    </PageContainer>
  );
};
