import Update from './Update';
import { page, del } from '@/services/userCenter/trade/goods/brand';
import type { ActionType, ProColumns,  } from '@ant-design/pro-components';
import { 
  PageContainer, 
  ProTable,
} from '@ant-design/pro-components';
import {  FormattedMessage, useIntl, useRequest } from '@umijs/max';
import { Button, message, Modal } from 'antd';
import { SetStateAction, useCallback,  useEffect,  useRef, useState } from 'react'; 
 
import { formItems,} from './FormText';

import { getColumns,} from '@/utils';
import {uuid} from '@/utils'
export default () => {

  const [uid, setUid] = useState('')

  const actionRef = useRef<ActionType>?.();
   const [selectedRowsState, setSelectedRows] = useState?.([]);

    

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

  const columns: ProColumns<never, "text">[] = [ ...getColumns?.(formItems), 
    
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        
            <Update key={record.id}   trigger={<Button>
              编 辑
            </Button>} id={record?.id}  onOk={actionRef?.current?.reload}></Update> 
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
         
        toolBarRender={() => [<> <Button danger  disabled={!selectedRowsState || !selectedRowsState.length} onClick={() => {
          handleRemove(selectedRowsState);
        }}  >删 除</Button><Update  trigger={<Button type="primary"> 新 建 </Button>}    id={uid}      onOk={onOk}  ></Update></> ]}
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

 