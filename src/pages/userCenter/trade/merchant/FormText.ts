export { formItems, }
let formItems = [
    {
        valueType: 'group',
        columns: [{
            title: '名 称',
            dataIndex: 'name',
            sorter: true,
            width: 'md',
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请输入标题',
                    },
                ],
            },
        }, {
            title: '编 号',
            dataIndex: 'code',
            sorter: true,
            width: 'md',
        },],
    },{
        valueType: 'group',
        columns: [{
            title: '地 区',
            dataIndex: 'name',
            sorter: true,
            width: 'md',

            valueType: 'cascader',
            hideInTable: true,
            hideInSearch: true,
        }, {
            title: '详细地址',
            dataIndex: 'code',
            sorter: true,
            width: 'lg', 
            hideInTable: true,
            hideInSearch: true,
        },],
    }, {
        valueType: 'group',
        columns: [{
            title: '经 度',
            dataIndex: 'lat',
            sorter: true,
            valueType: 'digit',
            width: 'md',
            hideInTable: true,
            hideInSearch: true,
            tooltip: '数字',
        }, {
            title: '纬 度',
            dataIndex: 'lng',
            sorter: true,
            valueType: 'digit',
            width: 'md',
            hideInTable: true,
            hideInSearch: true,
            tooltip: '数字',
        },],
    },{
        valueType: 'group',
        columns: [{
            title: '购物车',
            dataIndex: 'cartStr',
            sorter: true, valueType: 'select',
            valueEnum: {
                1: '开启',
                0: '关闭',
            },
            initialValue: '0',
        },],
    }, {
        valueType: 'group',
        columns: [{
            title: '物流范围',
            dataIndex: 'deliveryAreaStr',
            sorter: true, valueType: 'select',
            valueEnum: {
                locale: "仅支持同城",
                global: "支持全国",
            },
            width: 'sm',
            initialValue: 'global',
        }, {
            title: '门店自提',
            dataIndex: 'obsStr',
            sorter: true, valueType: 'select',
            valueEnum: {
                1: "支持",
                0: "不支持",
            },
            initialValue: '0',
        },],
    }, {
        valueType: 'group',
        columns: [{
            title: '订单退款选项',
            dataIndex: 'refundStr',
            sorter: true, valueType: 'select',
            valueEnum: {
                0: "所有订单均需人工审核后才可退款",
                1: '"已支付未发货"订单不需人工审核直接退款',
                2: '"已支付未核销"虚拟凭证订单不需人工审核直接退款',
            },
            initialValue: '0',
            width: 'lg',
        },]
    }, {
        valueType: 'group',
        columns: [{
            title: '非营业时间操作',
            dataIndex: 'nonBusinessHoursShowStr',
            sorter: true, valueType: 'select',
            valueEnum: {
                order: "商品可下单,下次营业时间再配送",
                goods: "商品可展示,不可下单",
            },
            initialValue: 'order',
            width: 'md',
        },],
    }, {
        valueType: 'group',
        columns: [{
            title: '微信商户号',
            dataIndex: 'appIdWxpay',
            sorter: true,
            width: 'md',
        }, ],
    },{
        valueType: 'group',
        columns: [{
            title: '微信AppId',
            dataIndex: 'appIdWxpay',
            sorter: false,
            width: 'md',
        }, {
            title: '微信appSecret',
            dataIndex: 'appSecret',
            sorter: false,
            width: 'md',
            hideInTable: true,
            hideInSearch: true,
        },],
    },{
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
    },{
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
    },{
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