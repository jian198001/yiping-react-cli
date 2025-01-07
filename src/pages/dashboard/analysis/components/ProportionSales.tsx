// 从 @ant-design/plots 库中导入 Pie 图表组件
import { Pie } from '@ant-design/plots';
// 从 antd 库中导入 Card、Radio、Typography 组件
import { Card, Radio, Typography } from 'antd';
// 从 antd/es/radio 模块中导入 RadioChangeEvent 类型
import type { RadioChangeEvent } from 'antd/es/radio';
// 导入 numeral 库，用于格式化数字
import numeral from 'numeral';
// 导入 React 库
import React from 'react';
// 从 '../data.d' 文件中导入 DataItem 类型
import type { DataItem } from '../data.d';
// 从 '../style.style' 文件中导入 useStyles 钩子，用于获取样式
import useStyles from '../style.style';
// 从 Typography 中解构出 Text 组件
const { Text } = Typography;

/**
 * 销售额类别占比组件
 * @param {Object} props - 组件属性
 * @param {React.ReactNode} props.dropdownGroup - 下拉菜单组
 * @param {'all' | 'online' | 'stores'} props.salesType - 销售额类型
 * @param {boolean} props.loading - 是否正在加载数据
 * @param {DataItem[]} props.salesPieData - 销售额饼图数据
 * @param {Function} [props.handleChangeSalesType] - 处理销售额类型变化的函数
 * @returns {JSX.Element} - 渲染的销售额类别占比组件
 */
const ProportionSales = ({
  dropdownGroup,
  salesType,
  loading,
  salesPieData,
  handleChangeSalesType,
}: {
  // 是否正在加载数据
  loading: boolean;
  // 下拉菜单组
  dropdownGroup: React.ReactNode;
  // 销售额类型
  salesType: 'all' | 'online' | 'stores';
  // 销售额饼图数据
  salesPieData: DataItem[];
  // 处理销售额类型变化的函数
  handleChangeSalesType?: (e: RadioChangeEvent) => void;
}) => {
  // 使用 useStyles 钩子获取样式
  const { styles } = useStyles();

  // 返回渲染的销售额类别占比组件
  return (
    <Card
      // 是否显示加载状态
      loading={loading}
      // 卡片样式
      className={styles.salesCard}
      // 是否显示边框
      bordered={false}
      // 卡片标题
      title="销售额类别占比"
      // 卡片样式
      style={{
        // 高度为100%
        height: '100%',
      }}
      // 卡片右上角的额外内容
      extra={
        <div className={styles.salesCardExtra}>
          {dropdownGroup}
          <div className={styles.salesTypeRadio}>
            <Radio.Group value={salesType} onChange={handleChangeSalesType}>
              <Radio.Button value="all">全部渠道</Radio.Button>
              <Radio.Button value="online">线上</Radio.Button>
              <Radio.Button value="stores">门店</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      }
    >
      <div>
        <Text>销售额</Text>
        <Pie
          // 图表高度
          height={340}
          // 图表半径
          radius={0.8}
          // 图表内半径
          innerRadius={0.5}
          // 角度字段
          angleField="y"
          // 颜色字段
          colorField="x"
          // 图表数据
          data={salesPieData as any}
          // 是否显示图例
          legend={false}
          // 标签配置
          label={{
            // 标签位置
            position: 'spider',
            // 标签文本
            text: (item: { x: number; y: number }) => {
              // 返回格式化后的标签文本
              return `${item.x}: ${numeral(item.y).format('0,0')}`;
            },
          }}
        />
      </div>
    </Card>
  );
};

// 导出 ProportionSales 组件
export default ProportionSales;
