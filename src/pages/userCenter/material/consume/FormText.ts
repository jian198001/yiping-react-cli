
export { formItems, formItemsItem, }
let formItems = [
    {
        valueType: 'group',
        columns: [{
            title: '物料名称',
            dataIndex: 'materialName',
            sorter: true,

            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请输入物料名称',
                    },
                ],
            }, 
            width: 'm',
        }, {
            title: '规 格',
            dataIndex: 'materialSku',
            sorter: true,

            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请输入规格',
                    },
                ],
            },
            width: 'm',
        },],
    }, {
        valueType: 'group',
        columns: [{
            title: '数 量',
            dataIndex: 'quantity',
            sorter: true,
            valueType: 'digit',
            tooltip: '正数',

            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请输入正数',
                    },
                ],
            },
            width: 'm',
        }, {
            title: '领用时间',
            dataIndex: 'createDate',
            sorter: true,

            valueType: 'datetime',
            tooltip: '时间',

            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请选择时间',
                    },
                ],
            },
            width: 'm',
        },{
            title: '失效期',
            dataIndex: 'exp',
            sorter: true,

            valueType: 'date',

            tooltip: '日期',
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请选择日期',
                    },
                ],
            },
            width: 'm',
        },],
    },]

let formItemsItem = [ // 采购单明细
    {
        valueType: 'group',
        columns: [{
            title: '物料名称',
            dataIndex: 'materialName',
            sorter: true,

            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请输入物料名称',
                    },
                ],
            },
            width: 'm',
            hideInSearch: true,
            readonly: true,
        }, {
            title: '规 格',
            dataIndex: 'materialSku',
            sorter: true,

            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请输入规格',
                    },
                ],
            },
            width: 'm',
            hideInSearch: true,
            readonly: true,
        }, {
            title: '数 量',
            dataIndex: 'quantity',
            sorter: true,
            valueType: 'digit',

            tooltip: '正数',
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请输入正数',
                    },
                ],
            },
            width: 'm',
            hideInSearch: true,
            readonly: true,
        }, {
            title: '领用数量',
            dataIndex: 'consumeQuantity',
            sorter: true,
            valueType: 'digit',

            tooltip: '正数',
            initialValue: 1,
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请输入正数',
                    },
                    { type: 'number', min: 0, message: '请输入正数', },
                ],
            },
            width: 'm',
            hideInSearch: true,
        },],
    },]
