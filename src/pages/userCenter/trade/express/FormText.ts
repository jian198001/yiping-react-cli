export { formItems, }
let formItems = [
    {
        valueType: 'group',
        columns: [{
            title: '名 称',
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
        },],
    },]