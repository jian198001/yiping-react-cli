// 导出 formItems 常量
export { formItems, }

// 定义 formItems 数组，用于配置表单字段
let formItems = [
  {
    // 字段值类型为 group，表示这是一个分组字段
    valueType: 'group',
    // 定义分组内的列
    columns: [
      {
        // 字段标题为 "名 称"
        title: '名 称',
        // 数据索引为 name
        dataIndex: 'name',
        // 开启排序功能
        sorter: true, 
        // 定义表单项的属性
        formItemProps: {
          // 设置验证规则
          rules: [
            {
              // 设置为必填项
              required: true,
              // 设置错误提示信息
              message: '请输入标题',
            },
          ],
        },
      },
      {
        // 字段标题为 "编 号"
        title: '编 号',
        // 数据索引为 code
        dataIndex: 'code',
        // 开启排序功能
        sorter: true, 
      },
    ],
  },
  {
    // 字段值类型为 group，表示这是一个分组字段
    valueType: 'group',
    // 定义分组内的列
    columns: [
      {
        // 字段标题为 "地 区"
        title: '地 区',
        // 数据索引为 name
        dataIndex: 'name',
        // 开启排序功能
        sorter: true, 
        // 字段值类型为 cascader
        valueType: 'cascader',
        // 在表格中隐藏该字段
        hideInTable: true,
        // 在搜索栏中隐藏该字段
        hideInSearch: true,
      },
      {
        // 字段标题为 "详细地址"
        title: '详细地址',
        // 数据索引为 code
        dataIndex: 'code',
        // 开启排序功能
        sorter: true,
        // 设置宽度为大
        width: 'lg',
        // 在表格中隐藏该字段
        hideInTable: true,
        // 在搜索栏中隐藏该字段
        hideInSearch: true,
      },
    ],
  },
  {
    // 字段值类型为 group，表示这是一个分组字段
    valueType: 'group',
    // 定义分组内的列
    columns: [
      {
        // 字段标题为 "经 度"
        title: '经 度',
        // 数据索引为 lat
        dataIndex: 'lat',
        // 开启排序功能
        sorter: true,
        // 字段值类型为 digit
        valueType: 'digit', 
        // 在表格中隐藏该字段
        hideInTable: true,
        // 在搜索栏中隐藏该字段
        hideInSearch: true,
        // 设置提示信息
        tooltip: '数字',
      },
      {
        // 字段标题为 "纬 度"
        title: '纬 度',
        // 数据索引为 lng
        dataIndex: 'lng',
        // 开启排序功能
        sorter: true,
        // 字段值类型为 digit
        valueType: 'digit', 
        // 在表格中隐藏该字段
        hideInTable: true,
        // 在搜索栏中隐藏该字段
        hideInSearch: true,
        // 设置提示信息
        tooltip: '数字',
      },
    ],
  },
  {
    // 字段值类型为 group，表示这是一个分组字段
    valueType: 'group',
    // 定义分组内的列
    columns: [
      {
        // 字段标题为 "购物车"
        title: '购物车',
        // 数据索引为 cartStr
        dataIndex: 'cartStr',
        // 开启排序功能
        sorter: true,
        // 字段值类型为 select
        valueType: 'select',
        // 定义 select 的选项
        valueEnum: {
          1: '开启',
          0: '关闭',
        },
        // 设置初始值为 '0'
        initialValue: '0',
      },
    ],
  },
  {
    // 字段值类型为 group，表示这是一个分组字段
    valueType: 'group',
    // 定义分组内的列
    columns: [
      {
        // 字段标题为 "物流范围"
        title: '物流范围',
        // 数据索引为 deliveryAreaStr
        dataIndex: 'deliveryAreaStr',
        // 开启排序功能
        sorter: true,
        // 字段值类型为 select
        valueType: 'select',
        // 定义 select 的选项
        valueEnum: {
          locale: "仅支持同城",
          global: "支持全国",
        },
        // 设置宽度为小
        width: 'sm',
        // 设置初始值为 'global'
        initialValue: 'global',
      },
      {
        // 字段标题为 "门店自提"
        title: '门店自提',
        // 数据索引为 obsStr
        dataIndex: 'obsStr',
        // 开启排序功能
        sorter: true,
        // 字段值类型为 select
        valueType: 'select',
        // 定义 select 的选项
        valueEnum: {
          1: "支持",
          0: "不支持",
        },
        // 设置初始值为 '0'
        initialValue: '0',
      },
    ],
  },
  {
    // 字段值类型为 group，表示这是一个分组字段
    valueType: 'group',
    // 定义分组内的列
    columns: [
      {
        // 字段标题为 "订单退款选项"
        title: '订单退款选项',
        // 数据索引为 refundStr
        dataIndex: 'refundStr',
        // 开启排序功能
        sorter: true,
        // 字段值类型为 select
        valueType: 'select',
        // 定义 select 的选项
        valueEnum: {
          0: "所有订单均需人工审核后才可退款",
          1: '"已支付未发货"订单不需人工审核直接退款',
          2: '"已支付未核销"虚拟凭证订单不需人工审核直接退款',
        },
        // 设置初始值为 '0'
        initialValue: '0',
        // 设置宽度为大
        width: 'lg',
      },
    ],
  },
  {
    // 字段值类型为 group，表示这是一个分组字段
    valueType: 'group',
    // 定义分组内的列
    columns: [
      {
        // 字段标题为 "非营业时间操作"
        title: '非营业时间操作',
        // 数据索引为 nonBusinessHoursShowStr
        dataIndex: 'nonBusinessHoursShowStr',
        // 开启排序功能
        sorter: true,
        // 字段值类型为 select
        valueType: 'select',
        // 定义 select 的选项
        valueEnum: {
          order: "商品可下单,下次营业时间再配送",
          goods: "商品可展示,不可下单",
        },
        // 设置初始值为 'order'
        initialValue: 'order',
        // 设置宽度为中等
        width: 'md',
      },
    ],
  },
  {
    // 字段值类型为 group，表示这是一个分组字段
    valueType: 'group',
    // 定义分组内的列
    columns: [
      {
        // 字段标题为 "微信商户号"
        title: '微信商户号',
        // 数据索引为 appIdWxpay
        dataIndex: 'appIdWxpay',
        // 开启排序功能
        sorter: true,
        // 设置宽度为中等
        width: 'md',
      },
    ],
  },
  {
    // 字段值类型为 group，表示这是一个分组字段
    valueType: 'group',
    // 定义分组内
    columns: [
      {
        // 字段标题为 "微信AppId"
        title: '微信AppId',
        // 数据索引为 appIdWxpay
        dataIndex: 'appIdWxpay',
        // 开启排序功能
        sorter: false,
        // 设置宽度为中等
        width: 'md',
      }, {
        // 字段标题为 "微信appSecret"
        title: '微信appSecret',
        // 数据索引为 appSecret
        dataIndex: 'appSecret',
        // 开启排序功能
        sorter: false,
        // 设置宽度为中等
        width: 'md',
        // 在表格中隐藏该字段
        hideInTable: true,
        // 在搜索栏中隐藏该字段
        hideInSearch: true,
      },],
    }, {
        valueType: 'group',
        columns: [{
            title: '微信支付API密钥',
            dataIndex: 'mchKey',
            sorter: false,
            width: 'md',
            hideInTable: true,
            hideInSearch: true,
        }, {
            title: '微信API数字证书',
            dataIndex: 'keyFiles',
            sorter: false,
            width: 'md',
            hideInTable: true,
            hideInSearch: true,
        },{
            title: '微信API私钥文件',
            dataIndex: 'keyFiles',
            sorter: false,
            width: 'md',
            hideInTable: true,
            hideInSearch: true,
        },],
    }, {
        valueType: 'group',
        columns: [{
            title: '支付宝AppId',
            dataIndex: 'appIdAlipay',
            sorter: true,
            width: 'md',
        }, {
            title: '支付宝私钥',
            dataIndex: 'merchantPrivateKey',
            sorter: false,
            width: 'md',
            hideInTable: true,
            hideInSearch: true,
        }, {
            title: '支付宝证书',
            dataIndex: 'alipayFiles',
            sorter: false,
            width: 'md',
            hideInTable: true,
            hideInSearch: true,
        },],
    }, {
        valueType: 'group',
        columns: [{
            title: '备 注',
            dataIndex: 'remark',
            valueType: 'textarea',
            sorter: false,
            width: 'lg',
            hideInTable: true,
            hideInSearch: true,
        },  ],
    },]