// 导入 Update 组件
import Update from './Update';
// 导入 page, del 函数
import { page, del } from '@/services/userCenter/trade/tradeOrder';
// 导入 ActionType, ProColumns 类型
import type { ActionType, ProColumns, } from '@ant-design/pro-components';
// 导入 PageContainer, ProTable 组件
import { 
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
// 导入 FormattedMessage, useIntl, useRequest 组件
import { FormattedMessage, useIntl, useRequest } from '@umijs/max';
// 导入 Button, message, Modal 组件
import { Button, message, Modal } from 'antd';
// 导入 SetStateAction, useCallback, useEffect, useRef, useState 组件
import { SetStateAction, useCallback, useEffect, useRef, useState } from 'react';

// 导入 formItems
import { formItems,} from './FormText';

// 导入 getColumns 函数
import { getColumns,} from '@/utils';
// 导入 uuid 函数
import {uuid} from '@/utils'

/**
 * 页面组件
 * @returns {JSX.Element} - 返回页面组件
 */
export default () => {

  // 使用 useState 创建一个 uid 状态
  const [uid, setUid] = useState('')

  // 使用 useRef 创建一个 actionRef 引用
  const actionRef = useRef<ActionType>?.();

  // 使用 useState 创建一个 selectedRowsState 状态
  const [selectedRowsState, setSelectedRows] = useState?.([]);  

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl?.();

  // 使用 message.useMessage 创建一个 messageApi 和 contextHolder
  const [messageApi, contextHolder] = message?.useMessage?.();

  /**
   * 使用 useRequest 钩子来处理请求
   * @param {Function} del - 删除数据的函数
   * @param {Object} config - 请求配置
   * @param {boolean} config.manual - 是否手动触发请求
   * @param {Function} config.onSuccess - 请求成功的回调函数
   * @param {Function} config.onError - 请求失败的回调函数
   */
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

  // 定义 columns 数组
  const columns: ProColumns<never, "text">[] = [ ...getColumns?.(formItems), 
    
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [

        <>
          <a>
            详 情
          </a>
          <a>
            修改总金额
          </a>
          <a>
            退 款
          </a>
        </>
        ,
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
    async (selectedRows: any[]) => {
 

            Modal?.confirm?.({
        title: '操作提示', content: '是否确定删除这' + selectedRows?.length + '项信息?删除后将不可恢复', onOk() {
          // 确认操作的回调函数

          (async()=>{
            await delRun?.(selectedRows?.map?.((row) => row?.id))
          })?.()

        },
      })
    },
    [delRun],
  );


  const onOk = () => { // 新增或编辑表单提交后,刷新分页列表
    
    setUid?.(uuid?.())

    actionRef?.current?.reload()

  }
 
  
  useEffect?.(()=>{

    setUid?.(uuid?.())

  },[])

  return (
    <PageContainer>
      {contextHolder}
      <ProTable
        headerTitle={intl?.formatMessage({
          id: 'pages.searchTable.title',
           defaultMessage: '查询表格',
        })}
        actionRef={actionRef}
        rowKey="id"
         
        toolBarRender={() => [<> <Button danger  disabled={!selectedRowsState || !selectedRowsState.length}  onClick={() => {
          handleRemove(selectedRowsState);
        }}  >删 除</Button><Update  trigger={<Button type="primary"> 收 银 </Button>}    id={uid}      onOk={onOk}  ></Update></> ]}
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
