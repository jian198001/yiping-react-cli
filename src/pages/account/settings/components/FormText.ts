/**
 * 导出 formItems 常量
 */
export { formItems };

/**
 * 定义一个数组 formItems，用于配置表单字段
 */
let formItems = [
  /**
   * 定义一个表单字段，类型为 group
   */
  {
    // 字段的值类型为 group
    valueType: 'group',
    // 定义字段的列配置
    columns: [
      /**
       * 定义一个列，标题为 '标 题'，数据索引为 'name'，可排序，初始值为空字符串，有表单项属性
       */
      {
        // 列的标题
        title: '标 题',
        // 列的数据索引
        dataIndex: 'name',
        // 列可排序
        sorter: true,
        // 列的初始值为空字符串
        initialValue: '',
        // 列的表单项属性
        formItemProps: {
          // 表单项的验证规则
          rules: [
            {
              // 该字段为必填项
              required: true,
              // 验证失败时的提示信息
              message: '请输入标题',
            },
          ],
        },
        // 列的宽度为 'm'
        width: 'm',
      },
    ],
  },
];