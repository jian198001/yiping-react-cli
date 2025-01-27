
import { page, } from '@/services/userCenter/material/instock';
import type { ActionType, ProColumns, } from '@ant-design/pro-components';
import {
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl, } from '@umijs/max';
import { SetStateAction, useEffect, useRef, useState } from 'react';

import { formItems, } from './FormText';

import { getColumns, } from '@/utils';
import Update from './Update';
import { Button } from 'antd';
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

  const columns: ProColumns<never, "text">[] = [...getColumns?.(formItems),

    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <>
          {(<Update key={record?.id} trigger={<Button type='primary'>详 情</Button>} id={record?.id} onOk={actionRef?.current?.reload}></Update>)}
           
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
