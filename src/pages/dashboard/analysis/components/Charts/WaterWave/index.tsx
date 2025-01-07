// 导入 React 和 Component 类
import React, { Component } from 'react';
// 导入 autoHeight 高阶组件
import autoHeight from '../autoHeight';

/* eslint no-return-assign: 0 */
/* eslint no-mixed-operators: 0 */
// riddle: https://riddle.alibaba-inc.com/riddles/2d9a4b90

/**
 * WaterWave 组件的属性类型定义
 */
export type WaterWaveProps = {
  // 标题，可以是 React 节点
  title: React.ReactNode;
  // 水波颜色，默认为 '#1890FF'
  color?: string;
  // 组件高度，默认为 1
  height?: number;
  // 水波百分比，范围是 0 到 100
  percent: number;
  // 自定义样式
  style?: React.CSSProperties;
};

/**
 * WaterWave 组件，用于显示带有水波效果的图表
 * @class WaterWave
 * @extends {Component<WaterWaveProps>}
 */
class WaterWave extends Component<WaterWaveProps> {
  /**
   * 组件状态
   * @type {Object}
   * @property {number} radio - 缩放比例
   */
  state = {
    radio: 1,
  };

  /**
   * 用于存储定时器 ID 的属性
   * @type {number}
   */
  timer: number = 0;

  /**
   * 用于存储根 DOM 元素的引用
   * @type {HTMLDivElement | undefined | null}
   */
  root: HTMLDivElement | undefined | null = null;

  /**
   * 用于存储画布 DOM 元素的引用
   * @type {HTMLCanvasElement | undefined | null}
   */
  node: HTMLCanvasElement | undefined | null = null;

  /**
   * 组件挂载后调用的生命周期方法
   * @memberof WaterWave
   */
  componentDidMount() {
    // 渲染图表
    this.renderChart();
    // 调整图表大小
    this.resize();
    // 监听窗口大小变化事件
    window.addEventListener(
      'resize',
      () => {
        // 在动画帧中调整图表大小
        requestAnimationFrame(() => this.resize());
      },
      {
        passive: true,
      },
    );
  }

  /**
   * 组件更新后调用的生命周期方法
   * @param {WaterWaveProps} props - 旧的属性
   * @memberof WaterWave
   */
  componentDidUpdate(props: WaterWaveProps) {
    const { percent } = this.props;
    if (props.percent !== percent) {
      // 如果百分比发生变化，重新渲染图表
      this.renderChart('update');
    }
  }

  /**
   * 组件卸载前调用的生命周期方法
   * @memberof WaterWave
   */
  componentWillUnmount() {
    // 取消动画帧
    cancelAnimationFrame(this.timer);
    if (this.node) {
      // 清空画布内容
      this.node.innerHTML = '';
    }
    // 移除窗口大小变化事件监听器
    window.removeEventListener('resize', this.resize);
  }

  /**
   * 调整图表大小的方法
   * @memberof WaterWave
   */
  resize = () => {
    if (this.root) {
      const { height = 1 } = this.props;
      const { offsetWidth } = this.root.parentNode as HTMLElement;
      // 计算缩放比例
      this.setState({
        radio: offsetWidth < height ? offsetWidth / height : 1,
      });
    }
  };

  /**
   * 渲染图表的方法
   * @param {string} [type] - 渲染类型，可选值为 'update'
   * @memberof WaterWave
   */
  renderChart(type?: string) {
    const { percent, color = '#1890FF' } = this.props;
    const data = percent / 100;
    // 取消动画帧
    cancelAnimationFrame(this.timer);
    if (!this.node || (data !== 0 && !data)) {
      return;
    }
    const canvas = this.node;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const radius = canvasWidth / 2;
    const lineWidth = 2;
    const cR = radius - lineWidth;
    ctx.beginPath();
    ctx.lineWidth = lineWidth * 2;
    const axisLength = canvasWidth - lineWidth;
    const unit = axisLength / 8;
    const range = 0.2; // 振幅
    let currRange = range;
    const xOffset = lineWidth;
    let sp = 0; // 周期偏移量
    let currData = 0;
    const waveupsp = 0.005; // 水波上涨速度

    let arcStack: number[][] = [];
    const bR = radius - lineWidth;
    const circleOffset = -(Math.PI / 2);
    let circleLock = true;
    for (let i = circleOffset; i < circleOffset + 2 * Math.PI; i += 1 / (8 * Math.PI)) {
      arcStack.push([radius + bR * Math.cos(i), radius + bR * Math.sin(i)]);
    }
    const cStartPoint = arcStack.shift() as number[];
    ctx.strokeStyle = color;
    ctx.moveTo(cStartPoint[0], cStartPoint[1]);

    /**
     * 绘制正弦波的方法
     * @memberof WaterWave
     */
    const drawSin = () => {
      if (!ctx) {
        return;
      }
      ctx.beginPath();
      ctx.save();
      const sinStack = [];
      for (let i = xOffset; i <= xOffset + axisLength; i += 20 / axisLength) {
        const x = sp + (xOffset + i) / unit;
        const y = Math.sin(x) * currRange;
        const dx = i;
        const dy = 2 * cR * (1 - currData) + (radius - cR) - unit * y;
        ctx.lineTo(dx, dy);
        sinStack.push([dx, dy]);
      }
      const startPoint = sinStack.shift() as number[];
      ctx.lineTo(xOffset + axisLength, canvasHeight);
      ctx.lineTo(xOffset, canvasHeight);
      ctx.lineTo(startPoint[0], startPoint[1]);
      const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(1, color);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();
    };

    /**
     * 渲染循环方法
     * @memberof WaterWave
     */
    const render = () => {
      if (!ctx) {
        return;
      }
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      if (circleLock && type !== 'update') {
        if (arcStack.length) {
          const temp = arcStack.shift() as number[];
          ctx.lineTo(temp[0], temp[1]);
          ctx.stroke();
        } else {
          circleLock = false;
          ctx.lineTo(cStartPoint[0], cStartPoint[1]);
          ctx.stroke();
          arcStack = [];
          ctx.globalCompositeOperation = 'destination-over';
          ctx.beginPath();
          ctx.lineWidth = lineWidth;
          ctx.arc(radius, radius, bR, 0, 2 * Math.PI, true);
          ctx.beginPath();
          ctx.save();
          ctx.arc(radius, radius, radius - 3 * lineWidth, 0, 2 * Math.PI, true);
          ctx.restore();
          ctx.clip();
          ctx.fillStyle = color;
        }
      } else {
        if (data >= 0.85) {
          if (currRange > range / 4) {
            const t = range * 0.01;
            currRange -= t;
          }
        } else if (data <= 0.1) {
          if (currRange < range * 1.5) {
            const t = range * 0.01;
            currRange += t;
          }
        } else {
          if (currRange <= range) {
            const t = range * 0.01;
            currRange += t;
          }
          if (currRange >= range) {
            const t = range * 0.01;
            currRange -= t;
          }
        }
        if (data - currData > 0) {
          currData += waveupsp;
        }
        if (data - currData < 0) {
          currData -= waveupsp;
        }
        sp += 0.07;
        drawSin();
      }
      this.timer = requestAnimationFrame(render);
    };
    render();
  }
  render() {
    const { radio } = this.state;
    const { percent, title, height = 1 } = this.props;
    return (
      <div
        className={styles.waterWave}
        ref={(n) => (this.root = n)}
        style={{
          transform: `scale(${radio})`,
        }}
      >
        <div
          style={{
            width: height,
            height,
            overflow: 'hidden',
          }}
        >
          <canvas
            className={styles.waterWaveCanvasWrapper}
            ref={(n) => (this.node = n)}
            width={height * 2}
            height={height * 2}
          />
        </div>
        <div
          className={styles.text}
          style={{
            width: height,
          }}
        >
          {title && <span>{title}</span>}
          <h4>{percent}%</h4>
        </div>
      </div>
    );
  }
}
export default autoHeight()(WaterWave);
