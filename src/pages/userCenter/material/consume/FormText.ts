/**
 * 导出 formItems 和 formItemsItem 常量
 */
export { formItems, formItemsItem, }

/**
 * 定义 formItems 数组，用于配置表单字段
 */
let formItems = [
    {
        /**
         * 字段值类型为 group，表示这是一个分组字段
         */
        valueType: 'group',
        /**
         * 定义分组内的列
         */
        columns: [{
            /**
             * 字段标题为 "物料名称"
             */
            title: '物料名称',
            /**
             * 数据索引为 materialName
             */
            dataIndex: 'materialName',
            /**
             * 开启排序功能
             */
            sorter: true,
            /**
             * 设置表单字段的属性
             */
            formItemProps: {
                /**
                 * 设置验证规则
                 */
                rules: [
                    {
                        /**
                         * 设置为必填项
                         */
                        required: true,
                        /**
                         * 设置错误提示信息
                         */
                        message: '请输入物料名称',
                    },
                ],
            },
            /**
             * 设置字段宽度为 m
             */
            width: 'm',
        }, {
            /**
             * 字段标题为 "规 格"
             */
            title: '规 格',
            /**
             * 数据索引为 materialSku
             */
            dataIndex: 'materialSku',
            /**
             * 开启排序功能
             */
            sorter: true,
            /**
             * 设置表单字段的属性
             */
            formItemProps: {
                /**
                 * 设置验证规则
                 */
                rules: [
                    {
                        /**
                         * 设置为必填项
                         */
                        required: true,
                        /**
                         * 设置错误提示信息
                         */
                        message: '请输入规格',
                    },
                ],
            },
            /**
             * 设置字段宽度为 m
             */
            width: 'm',
        },],
    }, {
        /**
         * 字段值类型为 group，表示这是一个分组字段
         */
        valueType: 'group',
        /**
         * 定义分组内的列
         */
        columns: [{
            /**
             * 字段标题为 "数 量"
             */
            title: '数 量',
            /**
             * 数据索引为 quantity
             */
            dataIndex: 'quantity',
            /**
             * 开启排序功能
             */
            sorter: true,
            /**
             * 字段值类型为 digit
             */
            valueType: 'digit',
            /**
             * 设置提示信息为 "正数"
             */
            tooltip: '正数',
            /**
             * 设置表单字段的属性
             */
            formItemProps: {
                /**
                 * 设置验证规则
                 */
                rules: [
                    {
                        /**
                         * 设置为必填项
                         */
                        required: true,
                        /**
                         * 设置错误提示信息
                         */
                        message: '请输入正数',
                    },
                ],
            },
            /**
             * 设置字段宽度为 m
             */
            width: 'm',
        }, {
            /**
             * 字段标题为 "领用时间"
             */
            title: '领用时间',
            /**
             * 数据索引为 createDate
             */
            dataIndex: 'createDate',
            /**
             * 开启排序功能
             */
            sorter: true,
            /**
             * 字段值类型为 datetime
             */
            valueType: 'datetime',
            /**
             * 设置提示信息为 "时间"
             */
            tooltip: '时间',
            /**
             * 设置表单字段的属性
             */
            formItemProps: {
                /**
                 * 设置验证规则
                 */
                rules: [
                    {
                        /**
                         * 设置为必填项
                         */
                        required: true,
                        /**
                         * 设置错误提示信息
                         */
                        message: '请选择时间',
                    },
                ],
            },
            /**
             * 设置字段宽度为 m
             */
            width: 'm',
        }, {
            /**
             * 字段标题为 "失效期"
             */
            title: '失效期',
            /**
             * 数据索引为 exp
             */
            dataIndex: 'exp',
            /**
             * 开启排序功能
             */
            sorter: true,
            /**
             * 字段值类型为 date
             */
            valueType: 'date',
            /**
             * 设置提示信息为 "日期"
             */
            tooltip: '日期',
            /**
             * 设置表单字段的属性
             */
            formItemProps: {
                /**
                 * 设置验证规则
                 */
                rules: [
                    {
                        /**
                         * 设置为必填项
                         */
                        required: true,
                        /**
                         * 设置错误提示信息
                         */
                        message: '请选择日期',
                    },
                ],
            },
            /**
             * 设置字段宽度为 m
             */
            width: 'm',
        },],
    },]

/**
 * 定义 formItemsItem 数组，用于配置采购单明细表单字段
 */
let formItemsItem = [ // 采购单明细
    {
        /**
         * 字段值类型为 group，表示这是一个分组字段
         */
        valueType: 'group',
        /**
         * 定义分组内的列
         */
        columns: [{
            /**
             * 字段标题为 "物料名称"
             */
            title: '物料名称',
            /**
             * 数据索引为 materialName
             */
            dataIndex: 'materialName',
            /**
             * 开启排序功能
             */
            sorter: true,
            /**
             * 设置表单字段的属性
             */
            formItemProps: {
                /**
                 * 设置验证规则
                 */
                rules: [
                    {
                        /**
                         * 设置为必填项
                         */
                        required: true,
                        /**
                         * 设置错误提示信息
                         */
                        message: '请输入物料名称',
                    },
                ],
            },
            /**
             * 设置字段宽度为 m
             */
            width: 'm',
            /**
             * 在搜索中隐藏该字段
             */
            hideInSearch: true,
            /**
             * 设置该字段为只读
             */
            readonly: true,
        }, {
            /**
             * 字段标题为 "规 格"
             */
            title: '规 格',
            /**
             * 数据索引为 materialSku
             */
            dataIndex: 'materialSku',
            /**
             * 开启排序功能
             */
            sorter: true,
            /**
             * 设置表单字段的属性
             */
            formItemProps: {
                /**
                 * 设置验证规则
                 */
                rules: [
                    {
                        /**
                         * 设置为必填项
                         */
                        required: true,
                        /**
                         * 设置错误提示信息
                         */
                        message: '请输入规格',
                    },
                ],
            },
            /**
             * 设置字段宽度为 m
             */
            width: 'm',
            /**
             * 在搜索中隐藏该字段
             */
            hideInSearch: true,
            /**
             * 设置该字段为只读
             */
            readonly: true,
        }, {
            /**
             * 字段标题为 "数 量"
             */
            title: '数 量',
            /**
             * 数据索引为 quantity
             */
            dataIndex: 'quantity',
            /**
             * 开启排序功能
             */
            sorter: true,
            /**
             * 字段值类型为 digit
             */
            valueType: 'digit',
            /**
             * 设置提示信息为 "正数"
             */
            tooltip: '正数',
            /**
             * 设置表单字段的属性
             */
            formItemProps: {
                /**
                 * 设置验证规则
                 */
                rules: [
                    {
                        /**
                         * 设置为必填项
                         */
                        required: true,
                        /**
                         * 设置错误提示信息
                         */
                        message: '请输入正数',
                    },
                ],
            },
            /**
             * 设置字段宽度为 m
             */
            width: 'm',
            /**
             * 在搜索中隐藏该字段
             */
            hideInSearch: true,
            /**
             * 设置该字段为只读
             */
            readonly: true,
        }, {
            /**
             * 字段标题为 "领用数量"
             */
            title: '领用数量',
            /**
             * 数据索引为 consumeQuantity
             */
            dataIndex: 'consumeQuantity',
            /**
             * 开启排序功能
             */
            sorter: true,
            /**
             * 字段值类型为 digit
             */
            valueType: 'digit',
            /**
             * 设置提示信息为 "正数"
             */
            tooltip: '正数',
            initialValue: 1,
            formItemProps: {
                /**
                 * 设置验证规则
                 */
                rules: [
                    {
                        /**
                         * 设置为必填项
                         */
                        required: true,
                        /**
                         * 设置错误提示信息
                         */
                        message: '请输入正数',
                    },
                    { type: 'number', min: 0, message: '请输入正数', },
                ],
            },
            /**
             * 设置字段宽度为 m
             */
            width: 'm',
            /**
             * 在搜索中隐藏该字段
             */
            hideInSearch: true,
        },],
    },]
