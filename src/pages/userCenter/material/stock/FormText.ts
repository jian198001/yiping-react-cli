export { formItems, }
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
            valueType: 'digit',
            tooltip: '正数',
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
            title: '失效期',
            dataIndex: 'exp',
            sorter: true,
            valueType: 'date',
            tooltip: '日期',
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请选择失效期',
                    },
                ],
            },
            width: 'm',
        },],
    },]