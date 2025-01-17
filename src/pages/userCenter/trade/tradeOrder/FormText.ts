// 导出 formItems 常量
export { formItems };

// 定义 formItems 数组，用于配置表单字段
let formItems = [
  {
    // 字段值类型为 group，表示这是一个分组字段
    valueType: "group",
    // 定义分组内的列
    columns: [
      {
        // 字段标题为 "编 号"
        title: "编 号",
        // 数据索引为 outTradeNo
        dataIndex: "outTradeNo",
        // 开启排序功能
        sorter: true,
        // 在表单中隐藏该字段
        hideInForm: true,
      },
      {
        // 字段标题为 "下单时间"
        title: "下单时间",
        // 数据索引为 createDate
        dataIndex: "createDate",
        // 字段值类型为 datetime
        valueType: "datetime",
        // 开启排序功能
        sorter: true,
        // 在搜索栏中隐藏该字段
        hideInSearch: true,
        // 在表单中隐藏该字段
        hideInForm: true,
      },
      {
        // 字段标题为 "下单时间"
        title: "下单时间",
        // 数据索引为 createDate
        dataIndex: "createDate",
        // 字段值类型为 dateRange
        valueType: "dateRange",
        // 开启排序功能
        sorter: true,
        // 在表格中隐藏该字段
        hideInTable: true,
        // 在表单中隐藏该字段
        hideInForm: true,
      },
      {
        // 字段标题为 "总金额(元)"
        title: "总金额(元)",
        // 数据索引为 totalAmount
        dataIndex: "totalAmount",
        // 开启排序功能
        sorter: true,
        // 字段值类型为 digitRange
        valueType: "digitRange",
        // 在表格中隐藏该字段
        hideInTable: true,
        // 在表单中隐藏该字段
        hideInForm: true,
      },
      {
        // 字段标题为 "总金额(元)"
        title: "总金额(元)",
        // 数据索引为 totalAmount
        dataIndex: "totalAmount",
        // 开启排序功能
        sorter: true,
        // 字段值类型为 money
        valueType: "money",
        // 在搜索栏中隐藏该字段
        hideInSearch: true,
      },
      {
        // 字段标题为 "交易状态"
        title: "交易状态",
        // 数据索引为 tradeStateCn
        dataIndex: "tradeStateCn",
        // 开启排序功能
        sorter: true,
        // 字段值类型为 select
        valueType: "select",
        // 定义 select 的选项
        valueEnum: {
          NOTPAY: { text: "待付款" },
          SUCCESS: { text: "已付款" },
          DELIVERY: { text: "已发货" },
        },
        // 在表单中隐藏该字段
        hideInForm: true,
      },
      {
        // 字段标题为 "类 型"
        title: "类 型",
        // 数据索引为 countItem
        dataIndex: "countItem",
        // 开启排序功能
        sorter: true,
        // 字段值类型为 select
        valueType: "select",
        // 定义 select 的选项
        valueEnum: {
          NOTPAY: { text: "待付款" },
          SUCCESS: { text: "已付款" },
          DELIVERY: { text: "已发货" },
        },
        // 在表单中隐藏该字段
        hideInForm: true,
      },
      {
        // 字段标题为 "商品总数量"
        title: "商品总数量",
        // 数据索引为 sumQuantity
        dataIndex: "sumQuantity",
        // 开启排序功能
        sorter: true,
        // 在搜索栏中隐藏该字段
        hideInSearch: true,
        // 字段值类型为 digit
        valueType: "digit",
        // 在表单中隐藏该字段
        hideInForm: true,
        // 设置提示信息
        tooltip: "零或正数",
      },
      {
        // 字段标题为 "商品总数量"
        title: "商品总数量",
        // 数据索引为 sumQuantity
        dataIndex: "sumQuantity",
        // 开启排序功能
        sorter: true,
        // 在表格中隐藏该字段
        hideInTable: true,
        // 字段值类型为 digitRange
        valueType: "digitRange",
        // 在表单中隐藏该字段
        hideInForm: true,
      },
      {
        // 字段标题为 "支付方式"
        title: "支付方式",
        // 数据索引为 payType
        dataIndex: "payType",
        // 开启排序功能
        sorter: true,
        // 字段值类型为 select
        valueType: "select",
        // 定义 select 的选项
        valueEnum: {
          0: { text: "待付款" },
          alipay: { text: "支付宝" },
          wxpay: { text: "微信支付" },
          balance: { text: "余额支付" },
        },
        // 在表单中隐藏该字段
        hideInForm: true,
      },
    ],
  },
];
