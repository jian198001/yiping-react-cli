export { formItems, }
let formItems = [
    {
        valueType: 'group',
        columns: [{
            title: '姓 名',
            dataIndex: 'name',
            sorter: true,
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请输入标题',
                    },
                ],
            },
        }, {
            title: '手机号码',
            dataIndex: 'mobile',
            sorter: true,
        },],
    }, {
        valueType: 'group',
        columns: [{
            title: '邮 箱',
            dataIndex: 'email',
            sorter: true,
            width: 'md',
        },],
    }, {
        valueType: 'group',
        columns: [{
            title: '部 门',
            dataIndex: 'deptId',
            sorter: true, valueType: 'cascader',
            width: 'md',
            formItemProps: {
                mode: 'multiple',
            },
        }, {
            title: '岗 位',
            dataIndex: 'postId',
            sorter: true, valueType: 'select',
            width: 'md',
            formItemProps: {
                mode: 'multiple',
            },
        },],
    }, {
        valueType: 'group',
        columns: [{
            title: '备 注',
            dataIndex: 'remark',
            sorter: false,
            valueType: 'textarea',
            width: 'lg',
            hideInTable: true,
            hideInSearch: true,

        },],
    },]