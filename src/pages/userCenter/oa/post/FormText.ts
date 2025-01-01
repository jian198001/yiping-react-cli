export { formItems, }
let formItems = [
    {
        valueType: 'group',
        columns: [
            {
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
            },],
    }, {
        valueType: 'group',
        columns: [{
            title: '组 织',
            dataIndex: 'orgName',
            sorter: true, valueType: 'select',
            width: 'md',
        },]
    }]