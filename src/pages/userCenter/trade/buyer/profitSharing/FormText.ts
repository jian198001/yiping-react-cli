export { formItems, }
let formItems = [
    {
        valueType: 'group',
        columns: [{
            title: '名 称',
            dataIndex: 'name',
            sorter: true,
        },
        {
            title: '余额(元)',
            dataIndex: 'balance',
            sorter: true,
            valueType: 'money',
            tooltip: '零或正数',
        },
        {
            title: '积 分',
            dataIndex: 'bonus',
            sorter: true,
            valueType: 'digit',
            tooltip: '零或正整数',
        },],
    },]