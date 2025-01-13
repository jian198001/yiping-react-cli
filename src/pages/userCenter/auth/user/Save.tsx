// 从 @ant-design/pro-components 库中导入 ProFormInstance、BetaSchemaForm 和 ModalForm 组件
import {
  ProFormInstance,
  BetaSchemaForm,
  ModalForm,
} from "@ant-design/pro-components";

// 从 antd 库中导入 message 组件
import { message, } from "antd";
 
// 从 @/services/userCenter/auth/user 模块中导入 update 和 getById 函数
import { update, getById, } from "@/services/userCenter/auth/user";

// 从 react 库中导入 useRef 和 useState 钩子
import { useRef, useState, } from "react";
// 从 @/services/userCenter/auth/role 模块中导入 arr 函数
import { arr, } from "@/services/userCenter/auth/role";

/**
 * Save 组件用于创建或编辑用户信息
 * @param {Object} props - 组件的属性
 * @param {string} props.id - 要编辑的用户的 ID
 * @param {Function} props.trigger - 触发模态框显示的函数
 * @param {Function} props.onOk - 模态框确认按钮的回调函数
 * @returns {JSX.Element} - 返回一个 ModalForm 组件
 */
export default (props: any) => {
  // 创建一个 roles 状态，用于存储角色列表
  const [roles, setRoles] = useState({})
  
  // 定义 loading 状态
  const [loading, setLoading] = useState(false);

  // 创建一个 ProFormInstance 的引用
  const formRef = useRef<ProFormInstance>?.()

  /**
   * 模态框打开或关闭时的回调函数
   * @async
   * @returns {Promise<void>}
   */
  const onOpenChange = async () => {
    // 获取角色列表数据
    const { data } = await arr()

    // 打印角色列表数据
    console.log(data);

    // 更新 roles 状态
    setRoles(data)

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

  }

  // 定义初始值
  let initialValues = {
    id: "",
    title: "",
  }

  // 从 props 中解构 id、trigger、onOk
  const { id, trigger, onOk } = props
 
  // 定义表单配置
  let formItems = [
    {
      // 字段值类型为 group，表示这是一个分组字段
      valueType: 'group',
      columns: [{
        // 字段标题为 "用户名"
        title: '用户名',
        // 数据索引为 username
        dataIndex: 'username',
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
              message: '请输入标题',
            },
          ],
        },
      },],
    }, {
      // 字段值类型为 group，表示这是一个分组字段
      valueType: 'group',
      columns: [{
        // 字段标题为 "密 码"
        title: '密 码',
        // 数据索引为 password
        dataIndex: 'password',
        // 开启排序功能
        sorter: true,
        // 在表格中隐藏该字段
        hideInTable: true,
        // 在搜索中隐藏该字段
        hideInSearch: true,
        // 字段值类型为 password
        valueType: 'password',
      }, {
        // 字段标题为 "确认密码"
        title: '确认密码',
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
      },],
    }, {
      // 字段值类型为 group，表示这是一个分组字段
      valueType: 'group',
      columns: [{
        // 字段标题为 "角 色"
        title: '角 色',
        // 数据索引为 roleIds
        dataIndex: 'roleIds',
        // 开启排序功能
        sorter: true,
        // 字段值类型为 select
        valueType: 'select',
        // 在表格中隐藏该字段
        hideInTable: true,
        // 在搜索中隐藏该字段
        hideInSearch: true,
        // 设置为多选模式
        mode: 'multiple',
        // 设置表单字段的属性
        formItemProps: {
          // 设置为多选模式
          mode: 'multiple',
        },
        // 设置字段属性
        fieldProps: {
          // 设置为多选模式
          mode: 'multiple',
        },
        // 设置值枚举
        valueEnum: roles,
      },],
    },]

  /**
   * 表单提交时的回调函数
   * @async
   * @param {Record<string, any>} values - 表单提交的值
   * @returns {Promise<boolean>}
   */
  const onFinish = async (values: Record<string, any>) => {
    // 将 id 添加到 values 中
    values = {
      ...values,
      id: id,
    }

    const res = await update?.(values);

    // 检查更新结果
    if (res?.code !== 0) {
      // 显示错误消息
      message?.error?.(res?.message);

      setLoading(false);

      // 返回 false，表示提交失败
      return false;
    }

    // 显示成功消息
    message?.success?.("提交成功");

    onOk?.();

    setLoading(false);

    return true;

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
