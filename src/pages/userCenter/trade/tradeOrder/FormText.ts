export { formItems, }
let formItems = [
    {
        valueType: 'group',
        columns: [{
            title: '编 号',
            dataIndex: 'outTradeNo',
            sorter: true,
            hideInForm: true,
        }, {
            title: '下单时间',
            dataIndex: 'createDate',
            valueType: 'datetime',
            sorter: true,
            hideInSearch: true,
            hideInForm: true,
        }, {
            title: '下单时间',
            dataIndex: 'createDate',
            valueType: 'dateRange',
            sorter: true,
            hideInTable: true,
            hideInForm: true,
        }, {
            title: '总金额(元)',
            dataIndex: 'totalAmount',
            sorter: true,
            valueType: 'digitRange',
            hideInTable: true,
            hideInForm: true,
        }, {
            title: '总金额(元)',
            dataIndex: 'totalAmount',
            sorter: true,
            valueType: 'money',
            hideInSearch: true,
        }, {
            title: '交易状态',
            dataIndex: 'tradeStateCn',
            sorter: true,
            valueType: 'select',
            valueEnum: {
                NOTPAY: { text: '待付款' },
                SUCCESS: {
                    text: '已付款',
                },
                DELIVERY: {
                    text: '已发货',
                },
            },
            hideInForm: true,
        }, {
            title: '类 型',
            dataIndex: 'countItem',
            sorter: true,
            valueType: 'select',
            valueEnum: {
                NOTPAY: { text: '待付款' },
                SUCCESS: {
                    text: '已付款',
                },
                DELIVERY: {
                    text: '已发货',
                },
            },
            hideInForm: true,
        }, {
            title: '商品总数量',
            dataIndex: 'sumQuantity',
            sorter: true,
            hideInSearch: true,
            valueType: 'digit',
            hideInForm: true,
            tooltip: '零或正数',
        }, {
            title: '商品总数量',
            dataIndex: 'sumQuantity',
            sorter: true,
            hideInTable: true,
            valueType: 'digitRange',
            hideInForm: true,
        }, {
            title: '支付方式',
            dataIndex: 'payType',
            sorter: true,
            valueType: 'select',
            valueEnum: {
                0: { text: '待付款' },
                alipay: {
                    text: '支付宝',
                },
                wxpay: {
                    text: '微信支付',
                },
                balance: {
                    text: '余额支付'
                }
            },
            hideInForm: true,
        },],
    },]