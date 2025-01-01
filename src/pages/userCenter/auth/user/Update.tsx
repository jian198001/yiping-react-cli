import {
  ProFormInstance,
  BetaSchemaForm,
  ModalForm,
} from "@ant-design/pro-components";

import { message, } from "antd";

import { useRequest, } from "@umijs/max";
import { update, getById, } from "@/services/userCenter/auth/user";

import { useRef, useState, } from "react";
import { arr, } from "@/services/userCenter/auth/role";

export default (props: any) => {

  const [roles, setRoles] = useState({})

  const formRef = useRef<ProFormInstance>?.()

  const onOpenChange = async () => {

    const { data } = await arr()

    setRoles(data)

    if (id) {
      const data: any = await getById?.(id)

      if (data?.data) {
        return formRef?.current?.setFieldsValue?.({
          ...data?.data,
        })
      }

      return formRef?.current?.setFieldsValue?.({ id: id })
    }

  }

  let initialValues = {
    id: "",
    title: "",
  }

  const { id, trigger, onOk } = props

  const { run, loading } = useRequest?.(update, {
    manual: true,
    onSuccess: () => {
      message?.success?.("提交成功")
      onOk?.()
    },
    onError: () => {
      message?.error?.("提交失败, 请重试!")
    },
  })

  let formItems = [
    {
      valueType: 'group',
      columns: [{
        title: '用户名',
        dataIndex: 'username',
        sorter: true,
        formItemProps: {
          rules: [
            {
              required: true,
              message: '请输入标题',
            },
          ],
        },
      },],
    }, {
      valueType: 'group',
      columns: [{
        title: '角 色',
        dataIndex: 'roleIds',
        sorter: true,
        valueType: 'select',
        hideInTable: true,
        hideInSearch: true,

        mode: 'multiple',
        formItemProps: {
          mode: 'multiple',
        },
        fieldProps: {
          mode: 'multiple',
        },
        valueEnum: roles,
      },],
    },]

  const onFinish = async (values: Record<string, any>) => {
    values = {
      ...values,
      id: id,
    }

    run?.(values)
    return true
  }

  return (
    <ModalForm formRef={formRef}
      onFinish={onFinish}
      modalProps={{
        destroyOnClose: true,
        okButtonProps: { loading },
      }}
      onOpenChange={onOpenChange}
      initialValues={initialValues}
      title="编辑信息"
      trigger={trigger}
    >
      <BetaSchemaForm layoutType="Embed" columns={formItems} />
    </ModalForm>
  )
}
