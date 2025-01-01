export { formItems, }
let formItems = [
    {
        valueType: 'group',
        columns: [{
            title: '标 题',
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
            width: 'm',
        }, {
            title: '创建时间',
            dataIndex: 'createDate',
            sorter: true,
            hideInForm: true,
            valueType: 'datetime',
        },],
    }, {
        valueType: 'group',
        columns: [
            {
                title: '内 容',
                dataIndex: 'content',
                sorter: false,
                valueType: 'textarea',
                hideInTable: true,
                hideInSearch: true,
                width: 'lg',
            },]
    },]