

export { formItems, }



let formItems = [
    {
        valueType: 'group',
        columns: [{
            title: '用户名',
            dataIndex: 'username',
            sorter: true,
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请输入标题',
                    },
                ],
            },
        },],
    }, {
        valueType: 'group',
        columns: [{
            title: '密 码',
            dataIndex: 'password',
            sorter: true,
            hideInTable: true,
            hideInSearch: true,
            valueType: 'password',
        }, {
            title: '确认密码',
            dataIndex: 'confirmPassword',
            sorter: true,
            hideInTable: true,
            hideInSearch: true,
            valueType: 'password',
        },],
    }, {
        valueType: 'group',
        columns: [{
            title: '角 色',
            dataIndex: 'roleIds',
            sorter: true,
            valueType: 'select',
            hideInTable: true,
            hideInSearch: true,
            formItemProps: {
                mode: 'multiple',
            },
            valueEnum: {},
        },],
    },]
    