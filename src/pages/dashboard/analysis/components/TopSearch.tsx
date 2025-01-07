// 从 @ant-design/icons 库中导入 InfoCircleOutlined 图标
import { InfoCircleOutlined } from '@ant-design/icons';
// 从 @ant-design/plots 库中导入 Area 图表组件
import { Area } from '@ant-design/plots';
// 从 antd 库中导入 Card、Col、Row、Table、Tooltip 组件
import { Card, Col, Row, Table, Tooltip } from 'antd';
// 从 numeral 库中导入 numeral 函数，用于格式化数字
import numeral from 'numeral';
// 导入 React 库
import React from 'react';
// 从 '../data.d' 文件中导入 DataItem 类型
import type { DataItem } from '../data.d';
// 从 '../style.style' 文件中导入 useStyles 钩子，用于获取样式
import useStyles from '../style.style';
// 从 './NumberInfo' 文件中导入 NumberInfo 组件
import NumberInfo from './NumberInfo';
// 从 './Trend' 文件中导入 Trend 组件
import Trend from './Trend';

/**
 * 热门搜索组件
 * @param {Object} props - 组件属性
 * @param {boolean} props.loading - 是否正在加载数据
 * @param {DataItem[]} props.visitData2 - 访问数据
 * @param {React.ReactNode} props.dropdownGroup - 下拉菜单组
 * @param {DataItem[]} props.searchData - 搜索数据
 * @returns {JSX.Element} - 渲染的热门搜索组件
 */
const TopSearch = ({
  loading,
  visitData2,
  dropdownGroup,
  searchData,
}: {
  loading: boolean;
  visitData2: DataItem[];
  dropdownGroup: React.ReactNode;
  searchData: DataItem[];
}) => {
  // 使用 useStyles 钩子获取样式
  const { styles } = useStyles();

  /**
   * 表格列配置
   * @type {Array}
   */
  const columns = [
    {
      // 列标题
      title: '排名',
      // 数据索引
      dataIndex: 'index',
      // 列键
      key: 'index',
    },
    {
      // 列标题
      title: '搜索关键词',
      // 数据索引
      dataIndex: 'keyword',
      // 列键
      key: 'keyword',
      // 渲染函数，将文本包装在 <a> 标签中
      render: (text: React.ReactNode) => <a href="/">{text}</a>,
    },
    {
      // 列标题
      title: '用户数',
      // 数据索引
      dataIndex: 'count',
      // 列键
      key: 'count',
      // 排序函数，根据用户数排序
      sorter: (
        a: {
          // 用户数
          count: number;
        },
        b: {
          // 用户数
          count: number;
        },
      ) => a.count - b.count,
    },
    {
      // 列标题
      title: '周涨幅',
      // 数据索引
      dataIndex: 'range',
      // 列键
      key: 'range',
      // 排序函数，根据周涨幅排序
      sorter: (
        a: {
          // 周涨幅
          range: number;
        },
        b: {
          // 周涨幅
          range: number;
        },
      ) => a.range - b.range,
      // 渲染函数，显示周涨幅百分比，并根据状态显示趋势图标
      render: (
        text: React.ReactNode,
        record: {
          // 状态，1 表示下降，其他表示上升
          status: number;
        },
      ) => (
        <Trend flag={record.status === 1 ? 'down' : 'up'}>
          <span
            style={{
              // 右边距
              marginRight: 4,
            }}
          >
            {text}%
          </span>
        </Trend>
      ),
    },
  ];

  // 返回渲染的热门搜索组件
  return (
    <Card
      // 是否显示加载状态
      loading={loading}
      // 是否显示边框
      bordered={false}
      // 卡片标题
      title="线上热门搜索"
      // 卡片右上角的额外内容
      extra={dropdownGroup}
      style={{
        // 卡片高度为 100%
        height: '100%',
      }}
    >
      <Row gutter={68}>
        <Col
          // 小屏幕及以上时占 12 列
          sm={12}
          // 超小屏幕时占 24 列
          xs={24}
          style={{
            // 底部外边距
            marginBottom: 24,
          }}
        >
          <NumberInfo
            // 副标题
            subTitle={
              <span>
                搜索用户数
                <Tooltip title="指标说明">
                  <InfoCircleOutlined
                    style={{
                      // 左边距
                      marginLeft: 8,
                    }}
                  />
                </Tooltip>
              </span>
            }
            // 间距
            gap={8}
            // 总数，使用 numeral 格式化
            total={numeral(12321).format('0,0')}
            // 状态，上升
            status="up"
            // 子总数
            subTotal={17.1}
          />
          <Area
            // x 轴字段
            xField="x"
            // y 轴字段
            yField="y"
            // 形状字段
            shapeField="smooth"
            // 图表高度
            height={45}
            // 是否显示坐标轴
            axis={false}
            // 内边距
            padding={-12}
            // 填充样式
            style={{ fill: 'linear-gradient(-90deg, white 0%, #6294FA 100%)', fillOpacity: 0.4 }}
            // 数据
            data={visitData2}
          />
        </Col>
        <Col
          // 小屏幕及以上时占 12 列
          sm={12}
          // 超小屏幕时占 24 列
          xs={24}
          style={{
            // 底部外边距
            marginBottom: 24,
          }}
        >
          <NumberInfo
            // 副标题
            subTitle={
              <span>
                人均搜索次数
                <Tooltip title="指标说明">
                  <InfoCircleOutlined
                    style={{
                      // 左边距
                      marginLeft: 8,
                    }}
                  />
                </Tooltip>
              </span>
            }
            // 总数
            total={2.7}
            // 状态，下降
            status="down"
            // 子总数
            subTotal={26.2}
            // 间距
            gap={8}
          />
          <Area
            // x 轴字段
            xField="x"
            // y 轴字段
            yField="y"
            // 形状字段
            shapeField="smooth"
            // 图表高度
            height={45}
            // 内边距
            padding={-12}
            // 填充样式
            style={{ fill: 'linear-gradient(-90deg, white 0%, #6294FA 100%)', fillOpacity: 0.4 }}
            // 数据
            data={visitData2}
            // 是否显示坐标轴
            axis={false}
          />
        </Col>
      </Row>
      <Table<any>
        // 行键，使用索引作为行键
        rowKey={(record) => record.index}
        // 表格尺寸
        size="small"
        // 表格列配置
        columns={columns}
        // 表格数据源
        dataSource={searchData}
        // 分页配置
        pagination={{
          style: {
            // 底部外边距
            marginBottom: 0,
          },
          // 每页显示的行数
          pageSize: 5,
        }}
      />
    </Card>
  );
};

// 导出 TopSearch 组件
export default TopSearch;
