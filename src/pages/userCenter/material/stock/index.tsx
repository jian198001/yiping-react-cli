import Consume from '../consume/Consume';
import { page, } from '@/services/userCenter/material/stock';
import type { ActionType, ProColumns, } from '@ant-design/pro-components';
import { 
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
import {  FormattedMessage, useIntl, } from '@umijs/max';
import { Button, message,  } from 'antd';
import { SetStateAction, useEffect, useRef, useState } from 'react';
 
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

  const columns: ProColumns<never, "text">[] = [ ...getColumns?.(formItems), 
 
       {
         title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
         dataIndex: 'option',
         valueType: 'option',
         render: (_, record) => [
           <>
           
             {(<Consume record={record} onOk={onOk} trigger={<Button type="primary" >领用出库</Button>}></Consume>)}
              
           </>
     
         ],
       },
  
  ];

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
         
        toolBarRender={() => []}
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
