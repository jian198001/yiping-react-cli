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
         * 设置字段宽度为 lg
         */
        width: 'lg',
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
         * 字段标题为 "栏 目"
         */
        title: '栏 目',
        /**
         * 数据索引为 categoryId
         */
        dataIndex: 'categoryId',
        /**
         * 开启排序功能
         */
        sorter: true,
        /**
         * 字段值类型为 select
         */
        valueType: 'select',
        /**
         * 设置字段宽度为 sm
         */
        width: 'sm',
        options: [ { label: '1', value: '1' }, { label: '2', value: '2' } ],
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
         * 字段标题为 "内 容"
         */
        title: '内 容',
        /**
         * 数据索引为 content
         */
        dataIndex: 'content',
        /**
         * 关闭排序功能
         */
        sorter: false,
        /**
         * 字段值类型为 textarea
         */
        valueType: 'textarea',
        /**
         * 在表格中隐藏该字段
         */
        hideInTable: true,
        /**
         * 在搜索中隐藏该字段
         */
        hideInSearch: true,
        /**
         * 设置字段宽度为 lg
         */
        width: 'lg',
      },
    ],
  },
];