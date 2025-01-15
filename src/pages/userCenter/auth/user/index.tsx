import Update from "./Update";
import { page, del, resetPwd } from "@/services/userCenter/auth/user";
import type { ActionType, ProColumns } from "@ant-design/pro-components";
import { PageContainer, ProTable } from "@ant-design/pro-components";
import {
  FormattedMessage,
  Helmet,
  SelectLang,
  useIntl,
  useModel,
} from "@umijs/max";
import { Button, message, Modal } from "antd";
import {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { getColumns } from "@/utils";
import { uuid } from "@/utils";

import { arr } from "@/services/userCenter/auth/role";
import Save from "./Save";

export default () => {
  const [role, setRole] = useState("");

  const {
    initialState: {
      // 初始化数据

      currentUser = {},
    },
  } = useModel("@@initialState");

  const [roles, setRoles] = useState({}); // 表格筛选栏对应的角色options

  const [uid, setUid] = useState("");

  const actionRef = useRef<ActionType>?.();
  const [selectedRowsState, setSelectedRows] = useState?.([]);

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl?.();

  const [messageApi, contextHolder] = message?.useMessage?.();

  let formItems = [
    {
      valueType: "group",
      columns: [
        {
          title: "用户名",
          dataIndex: "username",
          sorter: true,
          formItemProps: {
            rules: [
              {
                required: true,
                message: "请输入标题",
              },
            ],
          },
        },
      ],
    },
    {
      valueType: "group",
      columns: [
        {
          title: "密 码",
          dataIndex: "password",
          sorter: true,
          hideInTable: true,
          hideInSearch: true,
          valueType: "password",
        },
        {
          title: "确认密码",
          dataIndex: "confirmPassword",
          sorter: true,
          hideInTable: true,
          hideInSearch: true,
          valueType: "password",
        },
      ],
    },
    {
      valueType: "group",
      columns: [
        {
          title: "角 色",
          dataIndex: "roleIds",
          sorter: true,
          valueType: "select",
          hideInTable: true,
          hideInSearch: true,
          formItemProps: {
            mode: "multiple",
          },
          valueEnum: roles,
        },
      ],
    },
  ];

  const columns: ProColumns<never, "text">[] = [
    ...getColumns?.(formItems),

    {
      title: (
        <FormattedMessage
          id="pages.searchTable.titleOption"
          defaultMessage="Operating"
        />
      ),
      dataIndex: "option",
      valueType: "option",
      render: (_, record) => [
        <Update
          key={record?.id}
          trigger={
            <Button
              type="primary"
              disabled={record?.username === "admin" || !isAdmin()}
            >
              编 辑
            </Button>
          }
          id={record?.id}
          onOk={actionRef?.current?.reload}
        ></Update>,
        <Button
          disabled={record?.username === "admin" || !isAdmin()}
          onClick={() => {
            handleResetPwd(record);
          }}
        >
          密码重置
        </Button>,
        <Button
          danger
          onClick={() => {
            handleRemove(record);
          }}
          disabled={record?.username === "admin" || !isAdmin()}
        >
          删 除
        </Button>,
      ],
    },
  ];

  /**
   *  Delete node
   * @zh-CN 删除节点
   *
   * @param selectedRows
   */
  const handleRemove = async (item: any) => {
    Modal?.confirm?.({
      title: "操作提示",
      content: `是否确定删除用户名为${item.username}的信息?删除后将不可恢复`,
      onOk() {
        // 确认操作的回调函数

        (async () => {
          const res = await del?.([item?.id]);
          if (res?.code !== 0) {
            // 如果响应结果的 code 不为 0，则显示错误信息
            return messageApi?.error?.(res?.message || "删除操作失败,请重试");
          } else {
            setSelectedRows?.([]);
            actionRef?.current?.reload?.();
            // 如果 code 为 0，则显示成功信息，并重置表单已选中项
            messageApi?.success?.(res?.message || "删除操作成功");
          }
        })?.();
      },
    });
  };

  const handleResetPwd = async (item: any) => {
    Modal?.confirm?.({
      title: "操作提示",
      content: `是否确定重置用户名为${item.username}的密码?重置后此用户密码将为初始密码aaaa1111`,
      onOk() {
        // 确认操作的回调函数

        (async () => {
          await resetPwd?.(item?.id);
        })?.();

        message?.success?.("提交成功");
      },
    });
  };

  const onOk = () => {
    // 新增或编辑表单提交后,刷新分页列表

    setUid?.(uuid?.());

    actionRef?.current?.reload();
  };

  const isAdmin = () => {
    if (currentUser?.roleIds?.includes("1")) {

      return true;
    }

    return false;
  };

  useEffect?.(() => {
    setUid(uuid());

    (async () => {
      const { data } = await arr?.();
 
      setRoles(data);
    })();
  }, []);

  return (
    <PageContainer>
      {contextHolder}
      <ProTable
        headerTitle={intl?.formatMessage({
          id: "pages.searchTable.title",
          defaultMessage: "查询表格",
        })}
        actionRef={actionRef}
        rowKey="id"
        toolBarRender={() => [
          <>
            {" "}
            <Save
              trigger={
                <Button type="primary" disabled={!isAdmin()}>
                  {" "}
                  新 建{" "}
                </Button>
              }
              id={uid}
              onOk={onOk}
            ></Save>
          </>,
        ]}
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
