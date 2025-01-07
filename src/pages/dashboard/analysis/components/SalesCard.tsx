// 从 @ant-design/plots 库中导入 Column 图表组件
import { Column } from '@ant-design/plots';
// 从 antd 库中导入 Card、Col、DatePicker、Row、Tabs 组件
import { Card, Col, DatePicker, Row, Tabs } from 'antd';
// 从 antd/es/date-picker/generatePicker 模块中导入 RangePickerProps 类型
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';
// 从 dayjs 库中导入 dayjs 对象
import type dayjs from 'dayjs';
// 导入 numeral 库，用于格式化数字
import numeral from 'numeral';
// 从 '../data.d' 文件中导入 DataItem 类型
import type { DataItem } from '../data.d';
// 从 '../style.style' 文件中导入 useStyles 钩子，用于获取样式
import useStyles from '../style.style';

/**
 * 定义时间类型
 */
export type TimeType = 'today' | 'week' | 'month' | 'year';
// 从 DatePicker 中解构出 RangePicker
const { RangePicker } = DatePicker;

/**
 * 模拟的排名列表数据
 */
const rankingListData: {
  // 标题
  title: string;
  // 总数
  total: number;
}[] = [];

// 生成7条模拟数据
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    // 标题格式为 "工专路 {i} 号店"
    title: `工专路 ${i} 号店`,
    // 总数为323234
    total: 323234,
  });
}

/**
 * 销售卡片组件
 * @param {Object} props - 组件属性
 * @param {RangePickerProps<dayjs.Dayjs>['value']} props.rangePickerValue - 日期选择器的值
 * @param {DataItem[]} props.salesData - 销售数据
 * @param {Function} props.isActive - 判断当前时间类型是否激活的函数
 * @param {Function} props.handleRangePickerChange - 处理日期选择器变化的函数
 * @param {boolean} props.loading - 是否正在加载数据
 * @param {Function} props.selectDate - 选择日期的函数
 * @returns {JSX.Element} - 渲染的销售卡片组件
 */
const SalesCard = ({
  rangePickerValue,
  salesData,
  isActive,
  handleRangePickerChange,
  loading,
  selectDate,
}: {
  // 日期选择器的值
  rangePickerValue: RangePickerProps<dayjs.Dayjs>['value'];
  // 判断当前时间类型是否激活的函数
  isActive: (key: TimeType) => string;
  // 销售数据
  salesData: DataItem[];
  // 是否正在加载数据
  loading: boolean;
  // 处理日期选择器变化的函数
  handleRangePickerChange: RangePickerProps<dayjs.Dayjs>['onChange'];
  // 选择日期的函数
  selectDate: (key: TimeType) => void;
}) => {
  // 使用 useStyles 钩子获取样式
  const { styles } = useStyles();
  // 返回渲染的销售卡片组件
  return (
    <Card
      // 是否显示加载状态
      loading={loading}
      // 是否显示边框
      bordered={false}
      // 卡片主体样式
      bodyStyle={{
        // 内边距为0
        padding: 0,
      }}
    >
      <div className={styles.salesCard}>
        <Tabs
          // 选项卡栏的额外内容
          tabBarExtraContent={
            <div className={styles.salesExtraWrap}>
              <div className={styles.salesExtra}>
                {/* 今日按钮 */}
                <a className={isActive('today')} onClick={() => selectDate('today')}>
                  今日
                </a>
                {/* 本周按钮 */}
                <a className={isActive('week')} onClick={() => selectDate('week')}>
                  本周
                </a>
                {/* 本月按钮 */}
                <a className={isActive('month')} onClick={() => selectDate('month')}>
                  本月
                </a>
                {/* 本年按钮 */}
                <a className={isActive('year')} onClick={() => selectDate('year')}>
                  本年
                </a>
              </div>
              <RangePicker
                // 日期选择器的值
                value={rangePickerValue}
                // 处理日期选择器变化的函数
                onChange={handleRangePickerChange}
                // 样式
                style={{
                  // 宽度为256px
                  width: 256,
                }}
              />
            </div>
          }
          // 选项卡尺寸
          size="large"
          // 选项卡栏样式
          tabBarStyle={{
            // 底部外边距为24px
            marginBottom: 24,
          }}
          // 选项卡项
          items={[
            {
              // 选项卡键
              key: 'sales',
              // 选项卡标签
              label: '销售额',
              // 选项卡内容
              children: (
                <Row>
                  <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesBar}>
                      <Column
                        // 图表高度
                        height={300}
                        // 图表数据
                        data={salesData}
                        // x轴字段
                        xField="x"
                        // y轴字段
                        yField="y"
                        // 底部内边距
                        paddingBottom={12}
                        // 坐标轴配置
                        axis={{
                          x: {
                            // x轴标题
                            title: false,
                          },
                          y: {
                            // y轴标题
                            title: false,
                            // y轴网格线样式
                            gridLineDash: null,
                            // y轴网格线颜色
                            gridStroke: '#ccc',
                          },
                        }}
                        // 缩放配置
                        scale={{
                          x: { paddingInner: 0.4 },
                        }}
                        // 提示框配置
                        tooltip={{
                          // 提示框名称
                          name: '销售量',
                          // 提示框通道
                          channel: 'y',
                        }}
                      />
                    </div>
                  </Col>
                  <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesRank}>
                      <h4 className={styles.rankingTitle}>门店销售额排名</h4>
                      <ul className={styles.rankingList}>
                        {rankingListData.map((item, i) => (
                          <li key={item.title}>
                            <span
                              className={`${styles.rankingItemNumber} ${
                                i < 3 ? styles.rankingItemNumberActive : ''
                              }`}
                            >
                              {i + 1}
                            </span>
                            <span className={styles.rankingItemTitle} title={item.title}>
                              {item.title}
                            </span>
                            <span>{numeral(item.total).format('0,0')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
              ),
            },
            {
              // 选项卡键
              key: 'views',
              // 选项卡标签
              label: '访问量',
              // 选项卡内容
              children: (
                <Row>
                  <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesBar}>
                      <Column
                        // 图表高度
                        height={300}
                        // 图表数据
                        data={salesData}
                        // x轴字段
                        xField="x"
                        // y轴字段
                        yField="y"
                        // 底部内边距
                        paddingBottom={12}
                        // 坐标轴配置
                        axis={{
                          x: {
                            // x轴标题
                            title: false,
                          },
                          y: {
                            // y轴标题
                            title: false,
                          },
                        }}
                        // 缩放
                        scale={{
                          x: { paddingInner: 0.4 },
                        }}
                        tooltip={{
                          // 提示框名称
                          name: '访问量',
                          // 提示框通道
                          channel: 'y',
                        }}
                      />
                    </div>
                  </Col>
                  <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesRank}>
                      <h4 className={styles.rankingTitle}>门店访问量排名</h4>
                      <ul className={styles.rankingList}>
                        {rankingListData.map((item, i) => (
                          <li key={item.title}>
                            <span
                              className={`${
                                i < 3 ? styles.rankingItemNumberActive : styles.rankingItemNumber
                              }`}
                            >
                              {i + 1}
                            </span>
                            <span className={styles.rankingItemTitle} title={item.title}>
                              {item.title}
                            </span>
                            <span>{numeral(item.total).format('0,0')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
              ),
            },
          ]}
        />
      </div>
    </Card>
  );
};
export default SalesCard;
