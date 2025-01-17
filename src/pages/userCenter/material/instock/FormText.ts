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
            hideInSearch: true,
        },],
    },]
