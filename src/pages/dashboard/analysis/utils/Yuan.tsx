// 导入 React 库
import React from 'react';
// 从 '../components/Charts' 模块中导入 yuan 函数
import { yuan } from '../components/Charts';

/**
 * Yuan 组件，用于将数值转换为带有元单位的字符串，并渲染到 DOM 中
 * @class Yuan
 * @extends {React.Component<{ children: React.ReactText }>}
 * @example
 * <Yuan>1000</Yuan> // 渲染为 "1,000元"
 */
export default class Yuan extends React.Component<{
  // 子组件，可以是数字或字符串
  children: React.ReactText;
}> {
  // 用于存储渲染后的 DOM 元素
  main: HTMLSpanElement | undefined | null = null;
  /**
   * 组件挂载后调用，用于将子组件渲染为带有元单位的字符串
   * @memberof Yuan
   */
  componentDidMount() {
    this.renderToHtml();
  }

  /**
   * 组件更新后调用，用于将子组件渲染为带有元单位的字符串
   * @memberof Yuan
   */
  componentDidUpdate() {
    this.renderToHtml();
  }

  /**
   * 将子组件渲染为带有元单位的字符串，并更新 DOM
   * @memberof Yuan
   */
  renderToHtml = () => {
    // 获取子组件
    const { children } = this.props;
    // 如果 main 元素存在，则更新其 innerHTML
    if (this.main) {
      this.main.innerHTML = yuan(children);
    }
  };

  /**
   * 渲染组件
   * @returns {JSX.Element}
   * @memberof Yuan
   */
  render() {
    return (
      // 使用 ref 获取 span 元素的引用
      <span
        ref={(ref) => {
          this.main = ref;
        }}
      />
    );
  }
}
