export { formItems, }
let formItems = [
    {
        valueType: 'group',
        columns: [{
            title: '名 称',
            dataIndex: 'name',
            sorter: true,
        }, {
            title: '编 号',
            dataIndex: 'code',
            sorter: true,
        },],
    }, {
        valueType: 'group',
        columns: [{
            title: '订单数',
            dataIndex: 'orderCount',
            sorter: true,
            valueType: 'digit',

            tooltip: '零或正整数',
            initialValue: '0',
        },],
    }, {
        valueType: 'group',
        columns: [{
            title: '余额(元)',
            dataIndex: 'balance',
            sorter: true,
            valueType: 'money',

            initialValue: '0',
        }, {
            title: '积 分',
            dataIndex: 'bonus',
            valueType: 'digit', 
            
            tooltip: '零或正整数',
            sorter: true,

            initialValue: '0',
        },],
    },]