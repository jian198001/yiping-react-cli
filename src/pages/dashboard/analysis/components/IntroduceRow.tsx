// 从 @ant-design/icons 库中导入 InfoCircleOutlined 图标
import { InfoCircleOutlined } from '@ant-design/icons';
// 从 @ant-design/plots 库中导入 Area 和 Column 图表组件
import { Area, Column } from '@ant-design/plots';
// 从 antd 库中导入 Col、Progress、Row 和 Tooltip 组件
import { Col, Progress, Row, Tooltip } from 'antd';
// 导入 numeral 库，用于格式化数字
import numeral from 'numeral';
// 从 '../data.d' 文件中导入 DataItem 类型
import type { DataItem } from '../data.d';
// 从 '../style.style' 文件中导入 useStyles 钩子，用于获取样式
import useStyles from '../style.style';
// 从 '../utils/Yuan' 文件中导入 Yuan 组件
import Yuan from '../utils/Yuan';
// 从 './Charts' 文件中导入 ChartCard 和 Field 组件
import { ChartCard, Field } from './Charts';
// 从 './Trend' 文件中导入 Trend 组件
import Trend from './Trend';

/**
 * 顶部列的响应式属性
 */
const topColResponsiveProps = {
  // 超小屏幕时占 24 列
  xs: 24,
  // 小屏幕时占 12 列
  sm: 12,
  // 中屏幕时占 12 列
  md: 12,
  // 大屏幕时占 12 列
  lg: 12,
  // 超大屏幕时占 6 列
  xl: 6,
  // 样式
  style: {
    // 底部外边距
    marginBottom: 24,
  },
};

/**
 * 介绍行组件
 * @param {Object} props - 组件属性
 * @param {boolean} props.loading - 是否正在加载数据
 * @param {DataItem[]} props.visitData - 访问数据
 * @returns {JSX.Element} - 渲染的介绍行组件
 */
const IntroduceRow = ({ loading, visitData }: { loading: boolean; visitData: DataItem[] }) => {
  // 使用 useStyles 钩子获取样式
  const { styles } = useStyles();

  // 返回渲染的介绍行组件
  return (
    <Row gutter={24}>
      <Col {...topColResponsiveProps}>
        <ChartCard
          // 是否显示边框
          bordered={false}
          // 卡片标题
          title="总销售额"
          // 卡片右上角的额外内容
          action={
            <Tooltip title="指标说明">
              <InfoCircleOutlined />
            </Tooltip>
          }
          // 是否显示加载状态
          loading={loading}
          // 总数，使用 Yuan 组件渲染
          total={() => <Yuan>126560</Yuan>}
          // 卡片底部内容
          footer={<Field label="日销售额" value={`￥${numeral(12423).format('0,0')}`} />}
          // 内容高度
          contentHeight={46}
        >
          <Trend
            // 趋势标志，上升
            flag="up"
            // 样式
            style={{
              // 右边距
              marginRight: 16,
            }}
          >
            周同比
            <span className={styles.trendText}>12%</span>
          </Trend>
          <Trend
            // 趋势标志，下降
            flag="down"
          >
            日同比
            <span className={styles.trendText}>11%</span>
          </Trend>
        </ChartCard>
      </Col>

      <Col {...topColResponsiveProps}>
        <ChartCard
          // 是否显示边框
          bordered={false}
          // 是否显示加载状态
          loading={loading}
          // 卡片标题
          title="访问量"
          // 卡片右上角的额外内容
          action={
            <Tooltip title="指标说明">
              <InfoCircleOutlined />
            </Tooltip>
          }
          // 总数，使用 numeral 格式化
          total={numeral(8846).format('0,0')}
          // 卡片底部内容
          footer={<Field label="日访问量" value={numeral(1234).format('0,0')} />}
          // 内容高度
          contentHeight={46}
        >
          <Area
            // x 轴字段
            xField="x"
            // y 轴字段
            yField="y"
            // 形状字段
            shapeField="smooth"
            // 图表高度
            height={46}
            // 是否显示坐标轴
            axis={false}
            // 样式
            style={{
              // 填充颜色为线性渐变
              fill: 'linear-gradient(-90deg, white 0%, #975FE4 100%)',
              // 填充透明度
              fillOpacity: 0.6,
              // 宽度为100%
              width: '100%',
            }}
            // 内边距
            padding={-20}
            // 图表数据
            data={visitData}
          />
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          // 是否显示边框
          bordered={false}
          // 是否显示加载状态
          loading={loading}
          // 卡片标题
          title="支付笔数"
          // 卡片右上角的额外内容
          action={
            <Tooltip title="指标说明">
              <InfoCircleOutlined />
            </Tooltip>
          }
          // 总数，使用 numeral 格式化
          total={numeral(6560).format('0,0')}
          // 卡片底部内容
          footer={<Field label="转化率" value="60%" />}
          // 内容高度
          contentHeight={46}
        >
          <Column
            // x 轴字段
            xField="x"
            // y 轴字段
            yField="y"
            // 内边距
            padding={-20}
            // 是否显示坐标轴
            axis={false}
            // 图表高度
            height={46}
            // 图表数据
            data={visitData}
            // 缩放配置
            scale={{ x: { paddingInner: 0.4 } }}
          />
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          // 是否显示加载状态
          loading={loading}
          // 是否显示边框
          bordered={false}
          // 卡片标题
          title="运营活动效果"
          // 卡片右上角的额外内容
          action={
            <Tooltip title="指标说明">
              <InfoCircleOutlined />
            </Tooltip>
          }
          // 总数
          total="78%"
          // 卡片底部内容
          footer={
            <div
              // 样式
              style={{
                // 不换行
                whiteSpace: 'nowrap',
                // 超出部分隐藏
                overflow: 'hidden',
              }}
            >
              <Trend
                // 趋势标志，上升
                flag="up"
                // 样式
                style={{
                  // 右边距
                  marginRight: 16,
                }}
              >
                周同比
                <span className={styles.trendText}>12%</span>
              </Trend>
              <Trend
                // 趋势标志，下降
                flag="down"
              >
                日同比
                <span className={styles.trendText}>11%</span>
              </Trend>
            </div>
          }
          // 内容高度
          contentHeight={46}
        >
          <Progress
            // 进度百分比
            percent={78}
            // 进度条颜色
            strokeColor={{ from: '#108ee9', to: '#87d068' }}
            // 进度条状态
            status="active"
          />
        </ChartCard>
      </Col>
    </Row>
  );
};

// 导出 IntroduceRow 组件
export default IntroduceRow;
