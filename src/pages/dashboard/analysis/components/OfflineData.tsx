// 导入 Line 和 Tiny 组件，用于绘制折线图和环形图
import { Line, Tiny } from '@ant-design/plots';
// 导入 Card、Col、Row 和 Tabs 组件，用于布局和选项卡切换
import { Card, Col, Row, Tabs } from 'antd';
// 导入 type 类型定义，用于定义 DataItem 和 OfflineDataType 类型
import type { DataItem, OfflineDataType } from '../data.d';
// 导入 useStyles 自定义钩子，用于获取样式
import useStyles from '../style.style';
// 导入 NumberInfo 组件，用于显示数字信息
import NumberInfo from './NumberInfo';

/**
 * 自定义选项卡组件，用于显示转化率信息
 * @param {Object} props - 组件属性
 * @param {OfflineDataType} props.data - 离线数据类型
 * @param {string} props.currentTabKey - 当前选项卡的键
 * @returns {JSX.Element} - 渲染的选项卡组件
 */
const CustomTab = ({
  data,
  currentTabKey: currentKey,
}: {
  data: OfflineDataType;
  currentTabKey: string;
}) => (
  <Row
    gutter={8}
    style={{
      width: 138,
      margin: '8px 0',
    }}
  >
    <Col span={12}>
      <NumberInfo
        title={data.name}
        subTitle="转化率"
        gap={2}
        total={`${data.cvr * 100}%`}
        theme={currentKey !== data.name ? 'light' : undefined}
      />
    </Col>
    <Col
      span={12}
      style={{
        paddingTop: 36,
      }}
    >
      <Tiny.Ring height={60} width={60} percent={data.cvr} color={['#E8EEF4', '#5FABF4']} />
    </Col>
  </Row>
);

/**
 * 离线数据组件，用于显示离线数据的图表和选项卡
 * @param {Object} props - 组件属性
 * @param {string} props.activeKey - 当前激活的选项卡键
 * @param {boolean} props.loading - 是否正在加载数据
 * @param {OfflineDataType[]} props.offlineData - 离线数据数组
 * @param {DataItem[]} props.offlineChartData - 离线图表数据数组
 * @param {(activeKey: string) => void} props.handleTabChange - 选项卡切换时的回调函数
 * @returns {JSX.Element} - 渲染的离线数据组件
 */
const OfflineData = ({
  activeKey,
  loading,
  offlineData,
  offlineChartData,
  handleTabChange,
}: {
  activeKey: string;
  loading: boolean;
  offlineData: OfflineDataType[];
  offlineChartData: DataItem[];
  handleTabChange: (activeKey: string) => void;
}) => {
  // 使用 useStyles 自定义钩子获取样式
  const { styles } = useStyles();
  return (
    <Card
      loading={loading}
      className={styles.offlineCard}
      bordered={false}
      style={{
        marginTop: 32,
      }}
    >
      <Tabs
        activeKey={activeKey}
        onChange={handleTabChange}
        items={offlineData.map((shop) => ({
          key: shop.name,
          label: <CustomTab data={shop} currentTabKey={activeKey} />,
          children: (
            <div
              style={{
                padding: '0 24px',
              }}
            >
              <Line
                height={400}
                data={offlineChartData}
                xField="date"
                yField="value"
                colorField="type"
                slider={{ x: true }}
                axis={{
                  x: { title: false },
                  y: { title: false, gridLineDash: null, gridStroke: '#ccc', gridStrokeOpacity: 1 },
                }}
                legend={{
                  color: {
                    layout: { justifyContent: 'center' },
                  },
                }}
              />
            </div>
          ),
        }))}
      />
    </Card>
  );
};

// 导出 OfflineData 组件
export default OfflineData;
