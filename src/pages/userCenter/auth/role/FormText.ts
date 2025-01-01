export { formItems, }
let formItems = [
    {
        valueType: 'group',
        columns: [{
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
        },{
            title: '权 限',
            dataIndex: 'permission',
            sorter: true, 
            valueType: 'select',
            width: 'md',
            formItemProps: {
                mode: 'multiple',
            },
        },],
    },]