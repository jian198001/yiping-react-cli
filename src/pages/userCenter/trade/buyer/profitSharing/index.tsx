// 导入分页查询和删除数据的函数
import { page, del } from '@/services/userCenter/trade/buyer/profitSharing';
// 导入 ProComponents 库中的类型
import type { ActionType, ProColumns, } from '@ant-design/pro-components';
// 导入 ProComponents 库中的组件
import { 
  PageContainer, 
  ProTable,
} from '@ant-design/pro-components';
// 导入 UmiJS 中的组件和钩子
import {  FormattedMessage, useIntl, useRequest } from '@umijs/max';
// 导入 Ant Design 中的组件
import { Button, message, Modal } from 'antd';
// 导入 React 中的钩子
import { SetStateAction, useCallback,  useEffect,  useRef, useState } from 'react'; 
// 导入自定义的表单配置
import { formItems,} from './FormText';
// 导入工具函数
import { getColumns,} from '@/utils';

/**
 * 页面组件
 * @returns {JSX.Element} - 返回页面组件
 */
export default () => {
  // 使用 useState 创建一个 uid 状态
  const [uid, setUid] = useState('');
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
   * 使用 useRequest 钩子来处理删除请求
   * @param {Function} del - 删除数据的函数
   * @param {Object} config - 请求配置
   * @param {boolean} config.manual - 是否手动触发请求
   * @param {Function} config.onSuccess - 请求成功的回调函数
   * @param {Function} config.onError - 请求失败的回调函数
   */
  const { run: delRun, loading } = useRequest?.(del, {
    manual: true,
    onSuccess: () => {
      // 请求成功时，清空选中行，刷新表格，显示成功消息
      setSelectedRows?.([]);
      actionRef?.current?.reload?.();
      messageApi?.success?.('删除操作成功');
    },
    onError: () => {
      // 请求失败时，显示错误消息
      messageApi?.error?.('删除操作失败,请重试');
    },
  });

  // 定义表格列配置
  const columns: ProColumns<never, "text">[] = [
    ...getColumns?.(formItems),
    {
      // 标题为 "Operating"
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
      // 数据索引为 option
      dataIndex: 'option',
      // 值类型为 option
      valueType: 'option',
      // 渲染函数，返回一个详情链接
      render: (_, record) => [
        <a>
          详 情
        </a>,
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
    // 异步函数，用于处理删除操作
    async (selectedRows: any[]) => {
      // 弹出确认对话框，确认是否删除选中的行
      Modal?.confirm?.({
        title: '操作提示',
        content: '是否确定删除这' + selectedRows?.length + '项信息?删除后将不可恢复',
        onOk() {
          // 确认操作的回调函数
          // 异步调用 delRun 函数，传入选中行的 id 数组
          (async () => {
            await delRun?.(selectedRows?.map?.((row) => row?.id));
          })?.();
        },
      });
    },
    // delRun 函数作为依赖项，确保每次 delRun 函数变化时，useCallback 都会返回一个新的函数
    [delRun],
  );

  // 新增或编辑表单提交后的回调函数
  const onOk = () => {
    // 新增或编辑表单提交后,刷新分页列表
    // 生成一个新的 uuid 并设置为 uid 状态
    setUid?.(uuid?.());
    // 刷新表格
    actionRef?.current?.reload();
  };

  // 组件挂载时，生成一个新的 uuid 并设置为 uid 状态
  useEffect?.(() => {
    // 生成一个新的 uuid 并设置为 uid 状态
    setUid?.(uuid?.());
  }, []);

  // 返回页面组件
  return (
    <PageContainer>
      {contextHolder}
      <ProTable
        // 设置表格标题
        headerTitle={intl?.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: '查询表格',
        })}
        // 设置表格的 actionRef
        actionRef={actionRef}
        // 设置表格的行键为 id
        rowKey="id"
        // 自定义工具栏渲染函数，返回一个包含删除按钮的数组
        toolBarRender={() => [
          <>
            <Button
              danger
              disabled={!selectedRowsState || !selectedRowsState.length}
              onClick={() => {
                handleRemove(selectedRowsState);
              }}
            >
              删 除
            </Button>
          </>,
        ]}
        // 设置表格的请求函数为 page
        request={page}
        // 设置表格的列配置
        columns={columns}
        // 设置表格的行选择配置，当选中行变化时，更新 selectedRowsState 状态
        rowSelection={{
          onChange: (_, selectedRows: SetStateAction<never[]>) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
    </PageContainer>
  );
};

 