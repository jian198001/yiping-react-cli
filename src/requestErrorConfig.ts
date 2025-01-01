import type { RequestOptions } from "@@/plugin-request/request";
import type { RequestConfig } from "@umijs/max";
import { message, notification } from "antd";

// 错误处理方案： 错误类型
enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}
// 与后端约定的响应数据格式
interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: number;
  errorMessage?: string;
  showType?: ErrorShowType;
}

/**
 * @name 错误处理
 * pro 自带的错误处理， 可以在这里做自己的改动
 * @doc https://umijs.org/docs/max/request#配置
 */
export const errorConfig: RequestConfig = {
  // 错误处理： umi@3 的错误处理方案。
  errorConfig: {
    // 错误抛出
    errorThrower: (res) => {
      // const { success, data, errorCode, errorMessage, showType } =
      //   res as unknown as ResponseStructure;
      // if (!success) {
      //   const error: any = new Error(errorMessage);
      //   error.name = "BizError";
      //   error.info = { errorCode, errorMessage, showType, data };
      //   throw error; // 抛出自制的错误
      // }
    },
    // 错误接收及处理
    errorHandler: (error: any, opts: any) => {
      if (opts?.skipErrorHandler) throw error;
      // 我们的 errorThrower 抛出的错误。
      if (error.name === "BizError") {
        const errorInfo: ResponseStructure | undefined = error.info;
        if (errorInfo) {
          const { errorMessage, errorCode } = errorInfo;
          switch (errorInfo.showType) {
            case ErrorShowType.SILENT:
              // do nothing
              break;
            case ErrorShowType.WARN_MESSAGE:
              message.warning(errorMessage);
              break;
            case ErrorShowType.ERROR_MESSAGE:
              message.error(errorMessage);
              break;
            case ErrorShowType.NOTIFICATION:
              notification.open({
                description: errorMessage,
                message: errorCode,
              });
              break;
            case ErrorShowType.REDIRECT:
              // TODO: redirect
              break;
            default:
              message.error(errorMessage);
          }
        }
      } else if (error.response) {
        // Axios 的错误
        // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
        message.error(`请求失败, 响应状态码:${error.response.status}`);
      } else if (error.request) {
        // 请求已经成功发起，但没有收到响应
        // \`error.request\` 在浏览器中是 XMLHttpRequest 的实例，
        // 而在node.js中是 http.ClientRequest 的实例
        message.error("没有收到响应. 请重试.");
      } else {
        // 发送请求时出了点问题
        message.error("请求异常, 请重试.");
      }
    },
  },

  // 请求拦截器
  requestInterceptors: [
    (config: RequestOptions) => {
      // yiping-code-start

      const authorization = localStorage.getItem("authorization");
 
      const headers: any = config.headers ? config.headers : [];

      if (authorization) {
        headers["Authorization"] = `Bearer ${authorization}`;
      }

      // // 将服请求数据进行格式转换

      // 将当前页current转换成pageNo

      config.params = config?.params || {};

      config.params.pageNum = 1;

      if (config?.params?.reqParam?.current) {
        config.params.pageNum = config?.params?.reqParam?.current;
      }

      if (config?.params?.current) {
        config.params.pageNum = config?.params?.current;
      }

      config.params.sortName = " orderNum ";

      config.params.sortOrder = " ASC ";

      if (config?.params?.sort) {
        const key = Object?.keys?.(config?.params?.sort)?.[0];

        if (key) {
          config.params.sortName = ` ${key} `;

          const val = config?.params?.sort?.[key];

          if (val === "descend") {
            config.params.sortOrder = " DESC ";
          }
        }
      }

      // yiping-code-end

      return { ...config };
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (response) => {
      // 拦截响应数据，进行个性化处理
      const { data, config } = response as unknown as ResponseStructure;

      // // yiping-code-start

      // // 将服务器返回的应答数据进行格式转换

      if (typeof data !== "object") {
        return response;
      }

      if (data?.code === 0 || data?.code === 200) {
        data.success = true;
      } else {
        data.success = false;
      }

      if (!data?.data) {
        return response;
      }

      const url = config?.url;

      if (url?.indexOf("arr.json") > -1) {
        response.data = data?.data;

        return response;
      }

      const page = data?.data;

      if (page?.pageNum) {
        data.pageNum = page?.pageNum;
      }

      if (page?.total) {
        data.total = page?.total;
      }
 
      data.pageSize = page?.pageSize;

      if (page?.current) {
        data.current = page?.current;
      }

      if (page?.total) {
        data.total = page?.total;
      }

      if (page?.list) {
        data.data = page?.list;
      }

      if (data?.success === false) {
        message.error(data?.message || data?.msg || "请求失败！");
      }

      // yiping-code-end

      return response;
    },
  ],
};
