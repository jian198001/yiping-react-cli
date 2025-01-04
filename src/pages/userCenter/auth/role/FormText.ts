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
         * 字段标题为 "名 称"
         */
        title: '名 称',
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
        width: 'md',
      },
      {
        /**
         * 字段标题为 "权 限"
         */
        title: '权 限',
        /**
         * 数据索引为 permission
         */
        dataIndex: 'permission',
        /**
         * 开启排序功能
         */
        sorter: true,
        /**
         * 字段值类型为 select
         */
        valueType: 'select',
        /**
         * 设置列宽度为中等
         */
        width: 'md',
        /**
         * 设置表单字段的属性
         */
        formItemProps: {
          /**
           * 设置为多选模式
           */
          mode: 'multiple',
        },
      },
    ],
  },
];