export { formItems, }
let formItems = [
    {
        valueType: 'group',
        columns: [{
            title: '标 题',
            dataIndex: 'name',
            sorter: true,
            initialValue: '',
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请输入标题',
                    },
                ],
            },
            width: 'm',
        },],
    },]