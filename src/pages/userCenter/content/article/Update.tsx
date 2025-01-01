import {
  ProFormInstance,
  BetaSchemaForm,
  ModalForm,
} from "@ant-design/pro-components";

import { message } from "antd";

import { useRequest } from "@umijs/max";
import { update, getById } from "@/services/userCenter/content/article";

import { useRef } from "react";

import { formItems } from "./FormText";

export default (props: any) => {
  const formRef = useRef<ProFormInstance>?.();

  const onOpenChange = async () => {
    if (id) {
      const data: any = await getById?.(id);

      if (data?.data) {
        return formRef?.current?.setFieldsValue?.({
          ...data?.data,
        });
      } else {
        return formRef?.current?.setFieldsValue?.({ id: id });
      }
    }

    // get options arr
  };

  let initialValues = {
    id: "",
    title: "",
  };

  const { id, trigger, onOk } = props;

  const { run, loading } = useRequest?.(update, {
    manual: true,
    onSuccess: () => {
      message?.success?.("提交成功");
      onOk?.();
    },
    onError: () => {
      message?.error?.("提交失败, 请重试!");
    },
  });

  const onFinish = async (values: Record<string, any>) => {
    values = {
      ...values,
      id: id,
    };

    run?.(values);
    return true;
  };

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
  );
};
