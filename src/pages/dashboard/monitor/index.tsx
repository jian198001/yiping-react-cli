// 导入 Gauge、Liquid、WordCloud 组件，用于绘制仪表盘、液态图和词云图
import { Gauge, Liquid, WordCloud } from '@ant-design/plots';
// 导入 GridContent 组件，用于布局页面
import { GridContent } from '@ant-design/pro-components';
// 导入 useRequest 组件，用于处理请求
import { useRequest } from '@umijs/max';
// 导入 Card、Col、Progress、Row、Statistic 组件，用于布局和展示数据
import { Card, Col, Progress, Row, Statistic } from 'antd';
// 导入 numeral 库，用于格式化数字
import numeral from 'numeral';
// 导入 FC 类型，用于定义函数式组件
import type { FC } from 'react';
// 导入 ActiveChart 组件，用于展示活动图表
import ActiveChart from './components/ActiveChart';
// 导入 Map 组件，用于展示地图
import Map from './components/Map';
// 导入 queryTags 函数，用于查询标签数据
import { queryTags } from './service';
// 导入 useStyles 钩子，用于获取样式
import useStyles from './style.style';

// 从 Statistic 组件中解构出 Countdown 组件
const { Countdown } = Statistic;
// 设置倒计时的截止时间
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

/**
 * Monitor 组件
 * @returns {JSX.Element} 监控页面的 JSX 元素
 */
const Monitor: FC = () => {
  // 使用 useStyles 钩子获取样式
  const { styles } = useStyles();
  // 使用 useRequest 钩子获取标签数据
  const { loading, data } = useRequest(queryTags);
  // 将标签数据转换为词云图所需的数据格式
  const wordCloudData = (data?.list || []).map((item) => {
    return {
      id: +Date.now(),
      word: item.name,
      weight: item.value,
    };
  });
  // 返回监控页面的 JSX 元素
  return (
    <GridContent>
      <>
        <Row gutter={24}>
          <Col
            xl={18}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            style={{
              marginBottom: 24,
            }}
          >
            <Card title="活动实时交易情况" bordered={false}>
              <Row>
                <Col md={6} sm={12} xs={24}>
                  <Statistic
                    title="今日交易总额"
                    suffix="元"
                    value={numeral(124543233).format('0,0')}
                  />
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <Statistic title="销售目标完成率" value="92%" />
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <Countdown title="活动剩余时间" value={deadline} format="HH:mm:ss:SSS" />
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <Statistic title="每秒交易总额" suffix="元" value={numeral(234).format('0,0')} />
                </Col>
              </Row>
              <div className={styles.mapChart}>
                <Map />
              </div>
            </Card>
          </Col>
          <Col xl={6} lg={24} md={24} sm={24} xs={24}>
            <Card
              title="活动情况预测"
              style={{
                marginBottom: 24,
              }}
              bordered={false}
            >
              <ActiveChart />
            </Card>
            <Card
              title="券核效率"
              style={{
                marginBottom: 24,
              }}
              bodyStyle={{
                textAlign: 'center',
              }}
              bordered={false}
            >
              <Gauge
                height={180}
                data={
                  {
                    target: 80,
                    total: 100,
                    name: 'score',
                    thresholds: [20, 40, 60, 80, 100],
                  } as any
                }
                padding={-16}
                style={{
                  textContent: () => '优',
                }}
                meta={{
                  color: {
                    range: ['#6395FA', '#62DAAB', '#657798', '#F7C128', '#1F8718'],
                  },
                }}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col
            xl={12}
            lg={24}
            sm={24}
            xs={24}
            style={{
              marginBottom: 24,
            }}
          >
            <Card title="各品类占比" bordered={false}>
              <Row
                style={{
                  padding: '16px 0',
                }}
              >
                <Col span={8}>
                  <Progress type="dashboard" percent={75} />
                </Col>
                <Col span={8}>
                  <Progress type="dashboard" percent={48} />
                </Col>
                <Col span={8}>
                  <Progress type="dashboard" percent={33} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col
            xl={6}
            lg={12}
            sm={24}
            xs={24}
            style={{
              marginBottom: 24,
            }}
          >
            <Card
              title="热门搜索"
              loading={loading}
              bordered={false}
              bodyStyle={{
                overflow: 'hidden',
              }}
            >
              <WordCloud
                data={wordCloudData}
                height={162}
                textField="word"
                colorField="word"
                layout={{ spiral: 'rectangular', fontSize: [10, 20] }}
              />
            </Card>
          </Col>
          <Col
            xl={6}
            lg={12}
            sm={24}
            xs={24}
            style={{
              marginBottom: 24,
            }}
          >
            <Card
              title="资源剩余"
              bodyStyle={{
                textAlign: 'center',
                fontSize: 0,
              }}
              bordered={false}
            >
              <Liquid height={160} percent={0.35} />
            </Card>
          </Col>
        </Row>
      </>
    </GridContent>
  );
};
export default Monitor;
