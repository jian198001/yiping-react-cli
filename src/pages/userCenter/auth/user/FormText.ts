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
         * 字段标题为 "用户名"
         */
        title: '用户名',
        /**
         * 数据索引为 username
         */
        dataIndex: 'username',
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
              message: '请输入用户名',
            },
          ],
        },
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
         * 字段标题为 "密 码"
         */
        title: '密 码',
        /**
         * 数据索引为 password
         */
        dataIndex: 'password',
        /**
         * 开启排序功能
         */
        sorter: true,
        /**
         * 在表格中隐藏该字段
         */
        hideInTable: true,
        /**
         * 在搜索中隐藏该字段
         */
        hideInSearch: true,
        /**
         * 字段值类型为 password
         */
        valueType: 'password',
      },
      {
        /**
         * 字段标题为 "确认密码"
         */
        title: '确认密码',
        /**
         * 数据索引为 confirmPassword
         */
        dataIndex: 'confirmPassword',
        /**
         * 开启排序功能
         */
        sorter: true,
        /**
         * 在表格中隐藏该字段
         */
        hideInTable: true,
        /**
         * 在搜索中隐藏该字段
         */
        hideInSearch: true,
        /**
         * 字段值类型为 password
         */
        valueType: 'password',
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
         * 字段标题为 "角 色"
         */
        title: '角 色',
        /**
         * 数据索引为 roleIds
         */
        dataIndex: 'roleIds',
        /**
         * 开启排序功能
         */
        sorter: true,
        /**
         * 字段值类型为 select
         */
        valueType: 'select',
        /**
         * 在表格中隐藏该字段
         */
        hideInTable: true,
        /**
         * 在搜索中隐藏该字段
         */
        hideInSearch: true,
        /**
         * 设置表单字段的属性
         */
        formItemProps: {
          /**
           * 设置为多选模式
           */
          mode: 'multiple',
        },
        /**
         * 设置值枚举
         */
        valueEnum: {},
      },
    ],
  },
];    