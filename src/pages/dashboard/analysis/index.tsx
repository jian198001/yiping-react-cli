// 从 @ant-design/icons 中导入 EllipsisOutlined 图标
import { EllipsisOutlined } from '@ant-design/icons';
// 从 @ant-design/pro-components 中导入 GridContent 组件
import { GridContent } from '@ant-design/pro-components';
// 从 @umijs/max 中导入 useRequest 钩子
import { useRequest } from '@umijs/max';
// 从 antd 中导入 Col、Dropdown、Row 组件
import { Col, Dropdown, Row } from 'antd';
// 从 antd/es/date-picker/generatePicker 中导入 RangePickerProps 类型
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';
// 从 antd/es/radio 中导入 RadioChangeEvent 类型
import type { RadioChangeEvent } from 'antd/es/radio';
// 从 dayjs 中导入 dayjs 库
import type dayjs from 'dayjs';
// 从 react 中导入 FC 类型
import type { FC } from 'react';
// 从 react 中导入 Suspense 和 useState 钩子
import { Suspense, useState } from 'react';
// 导入 IntroduceRow 组件
import IntroduceRow from './components/IntroduceRow';
// 导入 OfflineData 组件
import OfflineData from './components/OfflineData';
// 导入 PageLoading 组件
import PageLoading from './components/PageLoading';
// 导入 ProportionSales 组件
import ProportionSales from './components/ProportionSales';
// 从 ./components/SalesCard 中导入 TimeType 类型
import type { TimeType } from './components/SalesCard';
// 导入 SalesCard 组件
import SalesCard from './components/SalesCard';
// 导入 TopSearch 组件
import TopSearch from './components/TopSearch';
// 从 ./data.d 中导入 AnalysisData 类型
import type { AnalysisData } from './data.d';
// 从 ./service 中导入 fakeChartData 函数
import { fakeChartData } from './service';
// 导入 useStyles 钩子
import useStyles from './style.style';
// 从 ./utils/utils 中导入 getTimeDistance 函数
import { getTimeDistance } from './utils/utils';

// 定义 RangePickerValue 类型
type RangePickerValue = RangePickerProps<dayjs.Dayjs>['value'];
// 定义 AnalysisProps 类型
type AnalysisProps = {
  // 分析数据
  dashboardAndanalysis: AnalysisData;
  // 加载状态
  loading: boolean;
};
// 定义 SalesType 类型
type SalesType = 'all' | 'online' | 'stores';

/**
 * 分析页面组件
 * @param {AnalysisProps} props - 组件属性
 * @returns {JSX.Element} 分析页面的 JSX 元素
 */
const Analysis: FC<AnalysisProps> = () => {
  // 使用 useStyles 钩子获取样式
  const { styles } = useStyles();
  // 使用 useState 钩子设置销售类型的状态
  const [salesType, setSalesType] = useState<SalesType>('all');
  // 使用 useState 钩子设置当前选项卡的状态
  const [currentTabKey, setCurrentTabKey] = useState<string>('');
  // 使用 useState 钩子设置日期范围选择器的值
  const [rangePickerValue, setRangePickerValue] = useState<RangePickerValue>(
    // 获取一年的时间范围
    getTimeDistance('year'),
  );
  // 使用 useRequest 钩子获取图表数据
  const { loading, data } = useRequest(fakeChartData);

  /**
   * 选择日期
   * @param {TimeType} type - 时间类型
   */
  const selectDate = (type: TimeType) => {
    // 设置日期范围选择器的值
    setRangePickerValue(getTimeDistance(type));
  };

  /**
   * 处理日期范围选择器的变化
   * @param {RangePickerValue} value - 日期范围选择器的值
   */
  const handleRangePickerChange = (value: RangePickerValue) => {
    // 设置日期范围选择器的值
    setRangePickerValue(value);
  };

  /**
   * 判断是否为当前日期
   * @param {TimeType} type - 时间类型
   * @returns {string} 当前日期的样式类名
   */
  const isActive = (type: TimeType) => {
    // 如果日期范围选择器的值为空，则返回空字符串
    if (!rangePickerValue) {
      return '';
    }
    // 获取指定时间类型的时间范围
    const value = getTimeDistance(type);
    // 如果时间范围为空，则返回空字符串
    if (!value) {
      return '';
    }
    // 如果日期范围选择器的开始和结束日期为空，则返回空字符串
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }
    // 如果日期范围选择器的开始和结束日期与指定时间类型的时间范围相同，则返回当前日期的样式类名
    if (
      rangePickerValue[0].isSame(value[0] as dayjs.Dayjs, 'day') &&
      rangePickerValue[1].isSame(value[1] as dayjs.Dayjs, 'day')
    ) {
      return styles.currentDate;
    }
    // 否则返回空字符串
    return '';
  };

  // 声明销售饼图数据变量
  let salesPieData;

  // 根据销售类型设置销售饼图数据
  if (salesType === 'all') {
    salesPieData = data?.salesTypeData;
  } else {
    salesPieData = salesType === 'online' ? data?.salesTypeDataOnline : data?.salesTypeDataOffline;
  }

  // 定义下拉菜单组
  const dropdownGroup = (
    <span className={styles.iconGroup}>
      <Dropdown
        menu={{
          items: [
            {
              key: '1',
              label: '操作一',
            },
            {
              key: '2',
              label: '操作二',
            },
          ],
        }}
        placement="bottomRight"
      >
        <EllipsisOutlined />
      </Dropdown>
    </span>
  );

  /**
   * 处理销售类型的变化
   * @param {RadioChangeEvent} e - 单选框变化事件
   */
  const handleChangeSalesType = (e: RadioChangeEvent) => {
    // 设置销售类型的状态
    setSalesType(e.target.value);
  };

  /**
   * 处理选项卡的变化
   * @param {string} key - 选项卡的键
   */
  const handleTabChange = (key: string) => {
    // 设置当前选项卡的状态
    setCurrentTabKey(key);
  };

  // 获取当前激活的选项卡键
  const activeKey = currentTabKey || (data?.offlineData[0] && data?.offlineData[0].name) || '';

  // 返回分析页面的 JSX 元素
  return (
    <GridContent>
      <>
        <Suspense fallback={<PageLoading />}>
          <IntroduceRow loading={loading} visitData={data?.visitData || []} />
        </Suspense>

        <Suspense fallback={null}>
          <SalesCard
            rangePickerValue={rangePickerValue}
            salesData={data?.salesData || []}
            isActive={isActive}
            handleRangePickerChange={handleRangePickerChange}
            loading={loading}
            selectDate={selectDate}
          />
        </Suspense>

        <Row
          gutter={24}
          style={{
            marginTop: 24,
          }}
        >
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              <TopSearch
                loading={loading}
                visitData2={data?.visitData2 || []}
                searchData={data?.searchData || []}
                dropdownGroup={dropdownGroup}
              />
            </Suspense>
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
              <ProportionSales
                dropdownGroup={dropdownGroup}
                salesType={salesType}
                loading={loading}
                salesPieData={salesPieData || []}
                handleChangeSalesType={handleChangeSalesType}
              />
            </Suspense>
          </Col>
        </Row>

        <Suspense fallback={null}>
          <OfflineData
            activeKey={activeKey}
            loading={loading}
            offlineData={data?.offlineData || []}
            offlineChartData={data?.offlineChartData || []}
            handleTabChange={handleTabChange}
          />
        </Suspense>
      </>
    </GridContent>
  );
};
export default Analysis;
