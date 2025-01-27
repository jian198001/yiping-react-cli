// 导入 ProFormInstance, BetaSchemaForm, ModalForm 组件
import {
  ProFormInstance,
  BetaSchemaForm,
  ModalForm,
} from "@ant-design/pro-components";

// 导入 message 组件
import { message } from "antd";

// 导入 update, getById 函数
import { update, getById } from "@/services/userCenter/trade/goods/goods";

// 导入 useRef 钩子
import { useRef, useState } from "react";
import { arr } from "@/services/userCenter/trade/goods/category";

/**
 * Update 组件
 * @param {Object} props - 组件的属性
 * @param {string} props.id - 记录的 ID
 * @param {Function} props.trigger - 触发模态框的函数
 * @param {Function} props.onOk - 模态框确认按钮的回调函数
 * @returns {JSX.Element} - 返回 ModalForm 组件
 */
export default (props: any) => {
  // 使用 useRef 创建一个 ProFormInstance 的引用
  const formRef = useRef<ProFormInstance>?.();

  // 定义 loading 状态
  const [loading, setLoading] = useState(false);

  const [goodsCategoryOptions, setGoodsCategoryOptions] = useState({});

  /**
   * 模态框打开或关闭时的回调函数
   * @async
   * @returns {Promise<void>}
   */
  const onOpenChange = async () => {
    // 调用 arr 函数获取数据

    // get options arr
    const { data } = await arr?.();
    setGoodsCategoryOptions?.(data);
 
    if (id) {
      // 如果 id 存在，调用 getById 获取数据
      const data: any = await getById?.(id);

      console.log(data);

      if (data?.data) {
        // 如果数据存在，设置表单字段值
        return formRef?.current?.setFieldsValue?.({
          ...data?.data,
        });
      }

      // 如果数据不存在，设置表单字段值为 id
      return formRef?.current?.setFieldsValue?.({ id: id });
    }
    // get options arr
  };

  // 定义初始值
  let initialValues = {
    id: "",
    title: "",
  };

  // 从 props 中解构 id, trigger, onOk
  const { id, trigger, onOk } = props;

  let formItems = [
    {
      valueType: "group",
      columns: [
        {
          title: "名 称",
          dataIndex: "name",
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
        {
          title: "分 类",
          dataIndex: "goodsCategoryId",
          sorter: true,
          valueType: "select",
          width: "sm",
          valueEnum: goodsCategoryOptions,
        },
      ],
    },
    {
      valueType: "group",
      columns: [
        {
          title: "货 号",
          dataIndex: "goodsSn",
          sorter: true,
          tooltip: "如未填写,将自动生成",
        },
      ],
    },
    {
      valueType: "group",
      columns: [
        {
          title: "起售数量",
          dataIndex: "startSaleNum",
          sorter: true,
          valueType: "digit",
          tooltip: "正数",
          initialValue: 1,
        },
        {
          title: "限 购",
          dataIndex: "quota",
          sorter: true,
          valueType: "digit",
          initialValue: 99999,
          tooltip: "零或正数,零代表不限购",
        },
      ],
    },
    {
      valueType: "group",
      columns: [
        {
          title: "计量单位",
          dataIndex: "unit",
          sorter: true,
          valueType: "select",
          valueEnum: {
            item: "件",
            mass: "质量(公斤kg)",
            volume: "体积(毫升ml)",
            time: "时间(分minute)",
            length: "距离(公里km)",
            area: "面积(平方米m2)",
          },
          width: "sm",
          initialValue: "item",
        },
        {
          title: "库存减少方式",
          dataIndex: "subStock",
          sorter: true,
          valueType: "select",
          valueEnum: {
            order: "下单减库存",
            pay: "付款减库存",
            delivery: "发货或核销减库存",
          },
          width: "sm",
          initialValue: "order",
        },
      ],
    },
    {
      valueType: "group",
      columns: [
        {
          title: "物 流",
          dataIndex: "delivery",
          sorter: true,
          valueType: "select",
          valueEnum: {
            delivery: "需要",
            eticket: "电子凭证不需要",
          },
          width: "sm",
          initialValue: "eticket",
        },
        {
          title: "运费承担方式",
          dataIndex: "freightPayer",
          sorter: true,
          valueType: "select",
          hideInTable: true,
          hideInSearch: true,
          valueEnum: {
            seller: "卖家承担(包邮)",
            buyer: "买家承担",
          },
          width: "sm",
          initialValue: "seller",
        },
      ],
    },
    {
      valueType: "group",
      columns: [
        {
          title: "质量(kg)",
          dataIndex: "mass",
          sorter: true,
          valueType: "digit",
          hideInTable: true,
          hideInSearch: true,
          tooltip: "零或正数",
        },
        {
          title: "体积-长度(m)",
          dataIndex: "length",
          sorter: true,
          valueType: "digit",
          hideInTable: true,
          hideInSearch: true,
          tooltip: "零或正数",
        },
      ],
    },
    {
      valueType: "group",
      columns: [
        {
          title: "体积-宽度(m)",
          dataIndex: "breadth",
          sorter: true,
          valueType: "digit",
          hideInTable: true,
          hideInSearch: true,
          tooltip: "零或正数",
        },
        {
          title: "体积-高度(m)",
          dataIndex: "height",
          sorter: true,
          valueType: "digit",
          hideInTable: true,
          hideInSearch: true,
          tooltip: "零或正数",
        },
      ],
    },
  ];

  /**
   * 表单提交时的回调函数
   * @async
   * @param {Record<string, any>} values - 表单提交的值
   * @returns {Promise<boolean>}
   */
  const onFinish = async (values: Record<string, any>) => {
    setLoading?.(true); // 将 id 添加到 values 中
    values = {
      ...values,
      id: id,
    };

    const res = await update?.(values);

    // 检查更新结果
    if (res?.code !== 0) {
      // 显示错误消息
      message?.error?.(res?.message);

      setLoading?.(false);

      // 返回 false，表示提交失败
      return false;
    }

    // 显示成功消息
    message?.success?.("提交成功");

    onOk?.();

    setLoading?.(false);

    return true;
  };

  // 返回 ModalForm 组件
  return (
    <ModalForm
      formRef={formRef}
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
  );
};
