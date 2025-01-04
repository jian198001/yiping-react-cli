/**
 * 导出 formItems 常量
 */
export { formItems, }

/**
 * 定义 formItems 数组，用于配置表单字段
 */
let formItems = [
  {
    /**
     * 字段值类型为 group，表示这是一个分组字段
     */
    valueType: 'group',
    /**
     * 定义分组内的列
     */
    columns: [
      {
        /**
         * 字段标题为 "标 题"
         */
        title: '标 题',
        /**
         * 数据索引为 name
         */
        dataIndex: 'name',
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
              message: '请输入标题',
            },
          ],
        },
        /**
         * 设置列宽度为中等
         */
        width: 'm',
      },
      {
        /**
         * 字段标题为 "路 径"
         */
        title: '路 径',
        /**
         * 数据索引为 name
         */
        dataIndex: 'name',
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
    valueType: 'group',
    /**
     * 定义分组内的列
     */
    columns: [
      {
        /**
         * 字段标题为 "图 标"
         */
        title: '图 标',
        /**
         * 数据索引为 name
         */
        dataIndex: 'name',
        /**
         * 开启排序功能
         */
        sorter: true,
        /**
         * 字段值类型为 select
         */
        valueType: 'select',
      },
      {
        /**
         * 字段标题为 "组件路径"
         */
        title: '组件路径',
        /**
         * 数据索引为 name
         */
        dataIndex: 'name',
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
    valueType: 'group',
    /**
     * 定义分组内的列
     */
    columns: [
      {
        /**
         * 字段标题为 "直接跳转"
         */
        title: '直接跳转',
        /**
         * 数据索引为 name
         */
        dataIndex: 'name',
        /**
         * 开启排序功能
         */
        sorter: true,
        /**
         * 字段值类型为 select
         */
        valueType: 'select',
      },
    ],
  },
];