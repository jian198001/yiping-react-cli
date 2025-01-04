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
      },
      {
        /**
         * 字段标题为 "编 号"
         */
        title: '编 号',
        /**
         * 数据索引为 code
         */
        dataIndex: 'code',
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
         * 字段标题为 "订单数"
         */
        title: '订单数',
        /**
         * 数据索引为 orderCount
         */
        dataIndex: 'orderCount',
        /**
         * 开启排序功能
         */
        sorter: true,
        /**
         * 字段值类型为 digit
         */
        valueType: 'digit',
        /**
         * 设置提示信息
         */
        tooltip: '零或正整数',
        /**
         * 设置初始值为 0
         */
        initialValue: '0',
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
         * 字段标题为 "余额(元)"
         */
        title: '余额(元)',
        /**
         * 数据索引为 balance
         */
        dataIndex: 'balance',
        /**
         * 开启排序功能
         */
        sorter: true,
        /**
         * 字段值类型为 money
         */
        valueType: 'money',
        /**
         * 设置初始值为 0
         */
        initialValue: '0',
      },
      {
        /**
         * 字段标题为 "积 分"
         */
        title: '积 分',
        /**
         * 数据索引为 bonus
         */
        dataIndex: 'bonus',
        /**
         * 字段值类型为 digit
         */
        valueType: 'digit',
        /**
         * 设置提示信息
         */
        tooltip: '零或正整数',
        /**
         * 开启排序功能
         */
        sorter: true,
        /**
         * 设置初始值为 0
         */
        initialValue: '0',
      },
    ],
  },
];