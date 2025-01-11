// 从 @ant-design/pro-components 库中导入 ProFormInstance、BetaSchemaForm 和 ModalForm 组件
import {
  ProFormInstance,
  BetaSchemaForm,
  ModalForm,
} from "@ant-design/pro-components";

// 从 antd 库中导入 message 组件
import { message, } from "antd";

// 从 @/services/userCenter/auth/user 模块中导入 updatePwd 函数
import { updatePwd, } from "@/services/userCenter/auth/user";

// 从 react 库中导入 useRef 钩子
import { useRef, } from "react";

/**
 * UpdatePwd 组件用于修改用户密码
 * @param {Object} props - 组件的属性
 * @param {Function} props.trigger - 触发模态框显示的函数
 * @returns {JSX.Element} - 返回一个 ModalForm 组件
 */
export default (props: any) => {

  // 创建一个 ProFormInstance 的引用
  const formRef = useRef<ProFormInstance>?.()

  // 从 props 中解构 trigger
  const { trigger, } = props

  // 定义表单配置
  let formItems = [
    {
      // 字段值类型为 group，表示这是一个分组字段
      valueType: 'group',
      columns: [{
        // 字段标题为 "原密码"
        title: '原密码',
        // 字段值类型为 password
        valueType: 'password',
        // 数据索引为 password
        dataIndex: 'password',
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
              message: '请输入原密码',
            },
          ],
        },
      },],
    }, {
      // 字段值类型为 group，表示这是一个分组字段
      valueType: 'group',
      columns: [{
        // 字段标题为 "新密码"
        title: '新密码',
        // 数据索引为 passwordNew
        dataIndex: 'passwordNew',
        // 开启排序功能
        sorter: true,
        // 在表格中隐藏该字段
        hideInTable: true,
        // 在搜索中隐藏该字段
        hideInSearch: true,
        // 字段值类型为 password
        valueType: 'password',
        // 设置表单字段的属性
        formItemProps: {
          // 设置验证规则
          rules: [
            {
              // 设置为必填项
              required: true,
              // 设置错误提示信息
              message: '请输入',
            },
          ],
        },
      }, {
        // 字段标题为 "确认新密码"
        title: '确认新密码',
        // 数据索引为 confirmPassword
        dataIndex: 'confirmPassword',
        // 开启排序功能
        sorter: true,
        // 在表格中隐藏该字段
        hideInTable: true,
        // 在搜索中隐藏该字段
        hideInSearch: true,
        // 字段值类型为 password
        valueType: 'password',
        // 设置表单字段的属性
        formItemProps: {
          // 设置验证规则
          rules: [
            {
              // 设置为必填项
              required: true,
              // 设置错误提示信息
              message: '请输入',
            },
          ],
        },
      },],
    },]

  /**
   * 表单提交时的回调函数
   * @async
   * @param {Record<string, any>} values - 表单提交的值
   * @returns {Promise<boolean>}
   */
  const onFinish = async (values: Record<string, any>) => {

    // 检查新密码和确认密码是否一致
    if (values?.passwordNew !== values?.confirmPassword) {

      // 显示错误消息
      message?.error?.("新密码与确认密码不一致, 请重试!")

      // 返回 false，表示提交失败
      return false

    }

    // 调用 updatePwd 函数更新密码
    const res = await updatePwd?.(values, )

    // 检查更新结果
    if (res?.code !== 0) {

      // 显示错误消息
      message?.error?.(res?.message)

      // 返回 false，表示提交失败
      return false

    }

    // 显示成功消息
    message?.success?.("提交成功")

    // 返回 true，表示提交成功
    return true;

  }

  // 返回一个 ModalForm 组件
  return (
    <ModalForm formRef={formRef}
      onFinish={onFinish}
      modalProps={{
        // 关闭时销毁模态框
        destroyOnClose: true, 
      }}
      title="修改密码"
      trigger={trigger}
    >
      <BetaSchemaForm layoutType="Embed" columns={formItems} />
    </ModalForm>
  )
}
