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
        },
        {
            title: '上级部门',
            dataIndex: 'name',
            sorter: true, valueType: 'cascader',
            width: 'md',
        },
        {
            title: '组 织',
            dataIndex: 'name',
            sorter: true, valueType: 'select',
            width: 'md',
        },],
    },]