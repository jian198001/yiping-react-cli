import {
  ProFormInstance,
  BetaSchemaForm,
  ModalForm,
} from "@ant-design/pro-components";

import { message, } from "antd";

import { updatePwd, } from "@/services/userCenter/auth/user";

import { useRef, } from "react";

export default (props: any) => {

  const formRef = useRef<ProFormInstance>?.()

  const { trigger, } = props

  let formItems = [
    {
      valueType: 'group',
      columns: [{
        title: '原密码',
        valueType: 'password',
        dataIndex: 'password',
        sorter: true,
        formItemProps: {
          rules: [
            {
              required: true,
              message: '请输入原密码',
            },
          ],
        },
      },],
    }, {
      valueType: 'group',
      columns: [{
        title: '新密码',
        dataIndex: 'passwordNew',
        sorter: true,
        hideInTable: true,
        hideInSearch: true,
        valueType: 'password',
        formItemProps: {
          rules: [
            {
              required: true,
              message: '请输入',
            },
          ],
        },
      }, {
        title: '确认新密码',
        dataIndex: 'confirmPassword',
        sorter: true,
        hideInTable: true,
        hideInSearch: true,
        valueType: 'password',
        formItemProps: {
          rules: [
            {
              required: true,
              message: '请输入',
            },
          ],
        },
      },],
    },]

  const onFinish = async (values: Record<string, any>) => {

    if (values?.passwordNew !== values?.confirmPassword) {

      message?.error?.("新密码与确认密码不一致, 请重试!")

      return false

    }

    const res = await updatePwd(values)

    if (res?.code !== 0) {

      message?.error?.(res?.message)

      return false

    }

    message?.success?.("提交成功")

    return true;

  }

  return (
    <ModalForm formRef={formRef}
      onFinish={onFinish}
      modalProps={{
        destroyOnClose: true, 
      }}
      title="修改密码"
      trigger={trigger}
    >
      <BetaSchemaForm layoutType="Embed" columns={formItems} />
    </ModalForm>
  )
}
