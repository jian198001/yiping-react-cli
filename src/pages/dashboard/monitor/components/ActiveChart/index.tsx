// 导入 Area 组件
import { Area } from '@ant-design/plots';
// 导入 Statistic 组件
import { Statistic } from 'antd';
// 导入 React 中的 useEffect、useRef 和 useState 钩子
import { useEffect, useRef, useState } from 'react';
// 导入样式文件
import useStyles from './index.style';

/**
 * 将数字格式化为两位数字，如果小于10则在前面补0
 * @param {number} val - 要格式化的数字
 * @returns {string} - 格式化后的字符串
 */
function fixedZero(val: number) {
  return val * 1 < 10 ? `0${val}` : val;
}

/**
 * 生成模拟的活跃数据
 * @returns {Array} - 包含24个对象的数组，每个对象表示一个小时的活跃数据
 */
function getActiveData() {
  const activeData = [];
  for (let i = 0; i < 24; i += 1) {
    activeData.push({
      x: `${fixedZero(i)}:00`, // 时间，格式为 HH:00
      y: Math.floor(Math.random() * 200) + i * 50, // 随机生成的活跃值
    });
  }
  return activeData;
}

/**
 * 活跃图表组件
 * @returns {JSX.Element} - 渲染的活跃图表组件
 */
const ActiveChart = () => {
  // 使用 useRef 创建一个 ref，用于存储定时器 ID
  const timerRef = useRef<number | null>(null);
  // 使用 useRef 创建一个 ref，用于存储 requestAnimationFrame 的 ID
  const requestRef = useRef<number | null>(null);
  // 使用 useStyles 钩子获取样式
  const { styles } = useStyles();
  // 使用 useState 创建一个状态，用于存储活跃数据
  const [activeData, setActiveData] = useState<{ x: string; y: number }[]>([]);

  /**
   * 循环更新活跃数据
   */
  const loopData = () => {
    // 使用 requestAnimationFrame 在下一帧执行回调函数
    requestRef.current = requestAnimationFrame(() => {
      // 使用 setTimeout 在2秒后更新活跃数据
      timerRef.current = window.setTimeout(() => {
        setActiveData(getActiveData());
        loopData();
      }, 2000);
    });
  };

  // 使用 useEffect 在组件挂载和卸载时执行副作用操作
  useEffect(() => {
    loopData();
    return () => {
      // 清除定时器
      clearTimeout(timerRef.current!);
      if (requestRef.current) {
        // 取消 requestAnimationFrame
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // 返回渲染的活跃图表组件
  return (
    <div className={styles.activeChart}>
      <Statistic title="目标评估" value="有望达到预期" />
      <div
        style={{
          marginTop: 32,
        }}
      >
        <Area
          padding={[0, 0, 0, 0]}
          xField="x"
          axis={false}
          yField="y"
          height={84}
          style={{ fill: 'linear-gradient(-90deg, white 0%, #6294FA 100%)', fillOpacity: 0.6 }}
          data={activeData}
        />
      </div>
      {activeData && (
        <div>
          <div className={styles.activeChartGrid}>
            <p>{[...activeData].sort()[activeData.length - 1]?.y + 200} 亿元</p>
            <p>{[...activeData].sort()[Math.floor(activeData.length / 2)]?.y} 亿元</p>
          </div>
          <div className={styles.dashedLine}>
            <div className={styles.line} />
          </div>
          <div className={styles.dashedLine}>
            <div className={styles.line} />
          </div>
        </div>
      )}
      {activeData && (
        <div className={styles.activeChartLegend}>
          <span>00:00</span>
          <span>{activeData[Math.floor(activeData.length / 2)]?.x}</span>
          <span>{activeData[activeData.length - 1]?.x}</span>
        </div>
      )}
    </div>
  );
};

// 导出 ActiveChart 组件
export default ActiveChart;
