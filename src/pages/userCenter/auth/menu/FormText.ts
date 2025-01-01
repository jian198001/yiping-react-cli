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
            title: '路 径',
            dataIndex: 'name',
            sorter: true,
        },],
    }, {
        valueType: 'group',
        columns: [{
            title: '图 标',
            dataIndex: 'name',
            sorter: true,
            valueType: 'select',
        }, {
            title: '组件路径',
            dataIndex: 'name',
            sorter: true,
        },],
    }, {
        valueType: 'group',
        columns: [{
            title: '直接跳转',
            dataIndex: 'name',
            sorter: true,
            valueType: 'select',
        },],
    },]