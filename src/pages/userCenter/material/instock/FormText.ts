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
        },{
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
    },{
        valueType: 'group',
        columns: [{
            title: '数 量',
            dataIndex: 'quantity',
            sorter: true,
             
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请输入数量',
                    },
                ],
            },
            width: 'm',
        },{
            title: '操作时间',
            dataIndex: 'logTime',
            sorter: true,
            
            valueType: 'datetime',
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请选择操作时间',
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
                        message: '请输入物料名称',
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
                        message: '请输入数量',
                    },
                ],
            },
            width: 'm',
            hideInSearch: true,
            readonly: true,
        },{
            title: '归还数量',
            dataIndex: 'instockQuantity',
            sorter: true,
            valueType: 'digit',
             
            tooltip: '正数',
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请输入归还数量',
                    },
                ],
            },
            width: 'm',
            hideInSearch: true,
        },],
    },]
