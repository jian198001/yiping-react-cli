/**
 * 导出 formItems 常量
 */
export { formItems };

/**
 * 定义 formItems 数组，用于配置表单字段
 */
let formItems = [
  {
    /**
     * 字段值类型为 group，表示这是一个分组字段
     */
    valueType: "group",
    /**
     * 定义分组内的列
     */
    columns: [
      {
        /**
         * 字段标题为 "姓 名"
         */
        title: "姓 名",
        /**
         * 数据索引为 name
         */
        dataIndex: "name",
        /**
         * 开启排序功能
         */
        sorter: true,
        /**
         * 设置表单字段的属性
         */
        formItemProps: {
          /**
           * 设置验证规则
           */
          rules: [
            {
              /**
               * 设置为必填项
               */
              required: true,
              /**
               * 设置错误提示信息
               */
              message: "请输入标题",
            },
          ],
        },
      },
      {
        /**
         * 字段标题为 "手机号码"
         */
        title: "手机号码",
        /**
         * 数据索引为 mobile
         */
        dataIndex: "mobile",
        /**
         * 开启排序功能
         */
        sorter: true,
      },
    ],
  },
  {
    /**
     * 字段值类型为 group，表示这是一个分组字段
     */
    valueType: "group",
    /**
     * 定义分组内的列
     */
    columns: [
      {
        /**
         * 字段标题为 "邮 箱"
         */
        title: "邮 箱",
        /**
         * 数据索引为 email
         */
        dataIndex: "email",
        /**
         * 开启排序功能
         */
        sorter: true,
      },
    ],
  },
  {
    /**
     * 字段值类型为 group，表示这是一个分组字段
     */
    valueType: "group",
    /**
     * 定义分组内的列
     */
    columns: [
      {
        /**
         * 字段标题为 "部 门"
         */
        title: "部 门",
        /**
         * 数据索引为 deptId
         */
        dataIndex: "deptId",
        /**
         * 开启排序功能
         */
        sorter: true,
        /**
         * 字段值类型为 cascader
         */
        valueType: "cascader",
        /**
         * 设置表单字段的属性
         */
        formItemProps: {
          /**
           * 设置为多选模式
           */
          mode: "multiple",
        },
        /**
         * 设置字段宽度为 sm
         */
        width: "sm",
      },
      {
        /**
         * 字段标题为 "岗 位"
         */
        title: "岗 位",
        /**
         * 数据索引为 postId
         */
        dataIndex: "postId",
        /**
         * 开启排序功能
         */
        sorter: true,
        /**
         * 字段值类型为 select
         */
        valueType: "select",
        /**
         * 设置表单字段的属性
         */
        formItemProps: {
          /**
           * 设置为多选模式
           */
          mode: "multiple",
        },
        /**
         * 设置字段宽度为 sm
         */
        width: "sm",
      },
    ],
  },
  {
    /**
     * 字段值类型为 group，表示这是一个分组字段
     */
    valueType: "group",
    /**
     * 定义分组内的列
     */
    columns: [
      {
        /**
         * 字段标题为 "备 注"
         */
        title: "备 注",
        /**
         * 数据索引为 remark
         */
        dataIndex: "remark",
        /**
         * 关闭排序功能
         */
        sorter: false,
        /**
         * 字段值类型为 textarea
         */
        valueType: "textarea",
        /**
         * 设置列宽度为大
         */
        width: "lg",
        /**
         * 在表格中隐藏该字段
         */
        hideInTable: true,
        /**
         * 在搜索中隐藏该字段
         */
        hideInSearch: true,
      },
    ],
  },
];
