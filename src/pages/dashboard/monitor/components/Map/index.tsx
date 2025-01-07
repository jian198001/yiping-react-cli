// 导入 PageLoading 组件
import { PageLoading } from '@ant-design/pro-components';
// 导入 HeatmapLayer、MapboxScene 和 PointLayer 组件
import { HeatmapLayer, MapboxScene, PointLayer } from '@antv/l7-react';
// 导入 React 库
import * as React from 'react';

// 定义颜色数组
const colors = ['#eff3ff', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#084594'];

/**
 * Map 组件
 * @class Map
 * @extends React.Component
 */
export default class Map extends React.Component {
  // 初始化组件状态
  state = {
    data: null, // 地理数据
    grid: null, // 网格数据
    loading: false, // 加载状态
  };

  /**
   * 组件挂载后执行的异步函数
   * @public
   * @async
   * @returns {Promise<void>}
   */
  public async componentDidMount() {
    // 并发获取地理数据和网格数据
    const [geoData, gridData] = await Promise.all([
      // 获取地理数据
      fetch(
        'https://gw.alipayobjects.com/os/bmw-prod/c5dba875-b6ea-4e88-b778-66a862906c93.json',
      ).then((d) => d.json()),
      // 获取网格数据
      fetch(
        'https://gw.alipayobjects.com/os/bmw-prod/8990e8b4-c58e-419b-afb9-8ea3daff2dd1.json',
      ).then((d) => d.json()),
    ]);
    // 更新组件状态
    this.setState({
      data: geoData, // 地理数据
      grid: gridData, // 网格数据
      loading: true, // 加载完成
    });
  }

  /**
   * 渲染组件
   * @public
   * @returns {JSX.Element}
   */
  public render() {
    // 从组件状态中解构出 data、grid 和 loading
    const { data, grid, loading } = this.state;
    // 如果加载未完成，显示加载中组件
    return loading === false ? (
      <PageLoading />
    ) : (
      // 如果加载完成，渲染地图场景
      <MapboxScene
        map={{
          center: [110.19382669582967, 50.258134], // 地图中心点坐标
          pitch: 0, // 地图倾斜角度
          style: 'blank', // 地图样式
          zoom: 1, // 地图缩放级别
        }}
        style={{
          position: 'relative', // 相对定位
          width: '100%', // 宽度100%
          height: '452px', // 高度452px
        }}
      >
        {grid && (
          // 如果网格数据存在，渲染热力图图层
          <HeatmapLayer
            key="1"
            source={{
              data: grid, // 数据源
              transforms: [
                {
                  type: 'hexagon', // 六边形聚合
                  size: 800000, // 六边形大小
                  field: 'capacity', // 聚合字段
                  method: 'sum', // 聚合方法
                },
              ],
            }}
            color={{
              values: '#ddd', // 颜色值
            }}
            shape={{
              values: 'hexagon', // 形状为六边形
            }}
            style={{
              coverage: 0.7, // 覆盖范围
              opacity: 0.8, // 透明度
            }}
          />
        )}
        {data && [
          // 如果地理数据存在，渲染点图层
          <PointLayer
            key="2"
            options={{
              autoFit: true, // 自动适配
            }}
            source={{
              data, // 数据源
            }}
            scale={{
              values: {
                color: {
                  field: 'cum_conf', // 颜色字段
                  type: 'quantile', // 颜色类型
                },
                size: {
                  field: 'cum_conf', // 大小字段
                  type: 'log', // 大小类型
                },
              },
            }}
            color={{
              field: 'cum_conf', // 颜色字段
              values: colors, // 颜色值
            }}
            shape={{
              values: 'circle', // 形状为圆形
            }}
            active={{
              option: {
                color: '#0c2c84', // 激活颜色
              },
            }}
            size={{
              field: 'cum_conf', // 大小字段
              values: [0, 30], // 大小范围
            }}
            style={{
              opacity: 0.8, // 透明度
            }}
          />,
          // 渲染第二个点图层
          <PointLayer
            key="5"
            source={{
              data, // 数据源
            }}
            color={{
              values: '#fff', // 颜色值
            }}
            shape={{
              field: 'Short_Name_ZH', // 形状字段
              values: 'text', // 形状为文本
            }}
            filter={{
              field: 'cum_conf', // 过滤字段
              values: (v) => {
                return v > 2000; // 过滤条件
              },
            }}
            size={{
              values: 12, // 大小值
            }}
            style={{
              opacity: 1, // 透明度
              strokeOpacity: 1, // 描边透明度
              strokeWidth: 0, // 描边宽度
            }}
          />,
        ]}
      </MapboxScene>
    );
  }
}
