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
         * 字段标题为 "标 题"
         */
        title: "名 称",
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
              message: "请输入名称",
            },
          ],
        },
      },
      {
        /**
         * 字段标题为 "规格"
         */
        title: "规 格",
        /**
         * 数据索引为 sku
         */
        dataIndex: "sku",
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
         * 字段标题为 "生产厂家"
         */
        title: "生产厂家",
        /**
         * 数据索引为 status
         */
        dataIndex: "factoryId",
        /**
         * 开启排序功能
         */
        sorter: true,
      },
    ],
  },
];
