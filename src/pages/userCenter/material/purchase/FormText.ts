export { formItems, }
let formItems = [
    {
        valueType: 'group',
        columns: [{
            title: '标 题',
            dataIndex: 'title',
            sorter: true,

            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '请输入标题',
                    },
                ],
            }, 
            width: "m",
        },],
    },]
