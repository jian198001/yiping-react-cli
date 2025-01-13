import {
  ProFormInstance,
  BetaSchemaForm,
  ModalForm,
} from "@ant-design/pro-components";
import { message } from "antd";
 
import { getById, update } from "@/services/userCenter/material/purchase";

import { useRef, useState } from "react";

import { formItemsItem } from "./FormText";

export default (props: any) => {
  const formRef = useRef<ProFormInstance>?.();

  // 定义 loading 状态
  const [loading, setLoading] = useState(false);

  const onOpenChange = async () => {
    if (id) {
      const data: any = await getById?.(id);

      if (data?.data) {
        return formRef?.current?.setFieldsValue?.({
          ...data?.data,
        });
      }

      return formRef?.current?.setFieldsValue?.({ id: id });
    }
  };

  let initialValues = {
    id: "",
    title: "",
  };

  const { id, trigger, onOk } = props;

  const onFinish = async (values: Record<string, any>) => {
    values = {
      ...values,
      id: id,
    };

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
  };

  return (
    <>
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
        <BetaSchemaForm layoutType="Embed" columns={formItemsItem} />
      </ModalForm>
    </>
  );
};
