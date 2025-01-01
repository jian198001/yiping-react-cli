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
    }, {
      title: '分 类',
      dataIndex: 'goodsCategoryName',
      sorter: true, valueType: 'select', width: 'sm',
    },],
  }, {
    valueType: 'group',
    columns: [{
      title: '货 号',
      dataIndex: 'goodsSn',
      sorter: true,
      tooltip: '如未填写,将自动生成',
    },],
  }, {
    valueType: 'group',
    columns: [{
      title: '起售数量',
      dataIndex: 'startSaleNum',
      sorter: true, valueType: 'digit',
      tooltip: '正数',
      initialValue: 1,
    },{
      title: '限 购',
      dataIndex: 'quota',
      sorter: true, valueType: 'digit',
      initialValue: 99999, 
      tooltip: '零或正数,零代表不限购',
    },],
  }, {
    valueType: 'group',
    columns: [{
      title: '计量单位',
      dataIndex: 'unit',
      sorter: true, valueType: 'select',
      valueEnum: {
        item: "件",
        mass: "质量(公斤kg)",
        volume: "体积(毫升ml)",
        time: "时间(分minute)",
        length: "距离(公里km)",
        area: "面积(平方米m2)",
      }, width: 'sm',
      initialValue: 'item',
    }, {
      title: '库存减少方式',
      dataIndex: 'subStock',
      sorter: true, valueType: 'select', valueEnum: {
        order: "下单减库存",
        pay: "付款减库存",
        delivery: "发货或核销减库存",
      }, width: 'sm',
      initialValue: 'order',
    },],
  }, {
    valueType: 'group',
    columns: [{
      title: '物 流',
      dataIndex: 'delivery',
      sorter: true, valueType: 'select',
      valueEnum: {
        delivery: "需要",
        eticket: "电子凭证不需要",
      }, width: 'sm',
      initialValue: 'eticket',
    }, {
      title: '运费承担方式',
      dataIndex: 'freightPayer',
      sorter: true, valueType: 'select',
      hideInTable: true,
      hideInSearch: true,
      valueEnum: {
        seller: "卖家承担(包邮)",
        buyer: "买家承担",
      }, width: 'sm',
      initialValue: 'seller',
    },],
  }, {
    valueType: 'group',
    columns: [{
      title: '质量(kg)',
      dataIndex: 'mass',
      sorter: true, valueType: 'digit',
      hideInTable: true,
      hideInSearch: true,
      tooltip: '零或正数',
    }, {
      title: '体积-长度(m)',
      dataIndex: 'length',
      sorter: true, valueType: 'digit',
      hideInTable: true,
      hideInSearch: true,
      tooltip: '零或正数',
    },],
  }, {
    valueType: 'group',
    columns: [{
      title: '体积-宽度(m)',
      dataIndex: 'breadth',
      sorter: true, valueType: 'digit',
      hideInTable: true,
      hideInSearch: true,
      tooltip: '零或正数',
    }, {
      title: '体积-高度(m)',
      dataIndex: 'height',
      sorter: true, valueType: 'digit',
      hideInTable: true,
      hideInSearch: true,
      tooltip: '零或正数',
    },],
  },]