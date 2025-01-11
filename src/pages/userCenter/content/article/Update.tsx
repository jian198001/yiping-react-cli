// 从 @ant-design/pro-components 库中导入 ProFormInstance、BetaSchemaForm 和 ModalForm 组件
import {
  ProFormInstance,
  BetaSchemaForm,
  ModalForm,
} from "@ant-design/pro-components";

// 从 antd 库中导入 message 组件
import { message, } from "antd";

// 从 @umijs/max 库中导入 useRequest 钩子
import { useRequest, } from "@umijs/max";
// 从 @/services/userCenter/content/article 模块中导入 update 和 getById 函数
import { update, getById, } from "@/services/userCenter/content/article";

// 从 react 库中导入 useRef 钩子
import { useRef, useState, } from "react";

// 从 ./FormText 模块中导入 formItems 常量
import { formItems, } from "./FormText";

/**
 * Update 组件用于编辑文章信息
 * @param {Object} props - 组件的属性
 * @param {string} props.id - 要编辑的文章的 ID
 * @param {Function} props.trigger - 触发模态框显示的函数
 * @param {Function} props.onOk - 模态框确认按钮的回调函数
 * @returns {JSX.Element} - 返回一个 ModalForm 组件
 */
export default (props: any) => {
  // 创建一个 ProFormInstance 的引用
  const formRef = useRef<ProFormInstance>?.()

  // 定义 loading 状态
  const [loading, setLoading] = useState(false);

  /**
   * 模态框打开或关闭时的回调函数
   * @async
   * @returns {Promise<void>}
   */
  const onOpenChange = async () => {
    // 如果 id 存在，调用 getById 获取数据
    if (id) {
      const data: any = await getById?.(id)

      // 如果数据存在，设置表单字段值
      if (data?.data) {
        return formRef?.current?.setFieldsValue?.({
          ...data?.data,
        })
      }

      // 如果数据不存在，设置表单字段值为 id
      return formRef?.current?.setFieldsValue?.({ id: id })
    }

    // 获取选项数组
    // get options arr
  }

  // 定义初始值
  let initialValues = {
    id: "",
    title: "",
  }

  // 从 props 中解构 id、trigger、onOk
  const { id, trigger, onOk } = props

  /**
   * 表单提交时的回调函数
   * @async
   * @param {Record<string, any>} values - 表单提交的值
   * @returns {Promise<boolean>}
   */
  const onFinish = async (values: Record<string, any>) => {
 setLoading(true,)    // 将 id 添加到 values 中
    values = {
      ...values,
      id: id,
    }

    const res = await update?.(values, )

    // 检查更新结果
    if (res?.code !== 0) {

      // 显示错误消息
      message?.error?.(res?.message)

setLoading(false, )

      // 返回 false，表示提交失败
      return false

    }

    // 显示成功消息
    message?.success?.("提交成功")

    onOk?.()

setLoading(false, )


    return true
  }

  // 返回一个 ModalForm 组件
  return (
    <ModalForm formRef={formRef}
      onFinish={onFinish}
      modalProps={{
        // 关闭时销毁模态框
        destroyOnClose: true,
        // 设置确认按钮的 loading 状态
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