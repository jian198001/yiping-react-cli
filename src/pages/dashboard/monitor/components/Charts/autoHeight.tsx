// 导入 React 库
import React from 'react';

/**
 * 定义一个类型，表示 React 组件类或经典组件类
 * @template P - 组件的属性类型，默认为 any
 */
export type IReactComponent<P = any> = React.ComponentClass<P> | React.ClassicComponentClass<P>;

/**
 * 计算给定 HTML 元素的高度
 * @param {HTMLDivElement} node - 要计算高度的 HTML 元素
 * @returns {number} - 计算出的高度
 */
function computeHeight(node: HTMLDivElement) {
  // 获取节点的样式对象
  const { style } = node;
  // 将节点的高度设置为100%
  style.height = '100%';
  // 获取节点的总高度（包括内边距和边框）
  const totalHeight = parseInt(`${getComputedStyle(node).height}`, 10);
  // 获取节点的上下内边距之和
  const padding =
    parseInt(`${getComputedStyle(node).paddingTop}`, 10) +
    parseInt(`${getComputedStyle(node).paddingBottom}`, 10);
  // 返回总高度减去内边距
  return totalHeight - padding;
}

/**
 * 获取给定 HTML 元素的自动高度
 * @param {HTMLDivElement} n - 要获取高度的 HTML 元素
 * @returns {number} - 计算出的自动高度
 */
function getAutoHeight(n: HTMLDivElement) {
  // 如果节点为空，返回0
  if (!n) {
    return 0;
  }

  // 将节点赋值给变量node
  const node = n;

  // 计算节点的高度
  let height = computeHeight(node);
  // 获取节点的父节点
  const parentNode = node.parentNode as HTMLDivElement;
  // 如果父节点存在，计算父节点的高度并更新height变量
  if (parentNode) {
    height = computeHeight(parentNode);
  }

  // 返回计算出的高度
  return height;
}

/**
 * 定义自动高度组件的属性类型
 */
type AutoHeightProps = {
  // 可选的高度属性，类型为数字
  height?: number;
};

/**
 * 创建一个高阶组件，用于自动计算子组件的高度
 * @returns {Function} - 返回一个高阶组件函数
 */
function autoHeight() {
  return <P extends AutoHeightProps>(
    // 接收一个 React 组件类或函数组件作为参数
    WrappedComponent: React.ComponentClass<P> | React.FC<P>,
  ): React.ComponentClass<P> => {
    // 定义一个内部类，继承自 React.Component
    class AutoHeightComponent extends React.Component<P & AutoHeightProps> {
      // 初始化组件状态
      state = {
        // 计算出的高度，初始值为0
        computedHeight: 0,
      };

      // 定义一个根节点引用，初始值为 null
      root: HTMLDivElement | null = null;

      /**
       * 在组件挂载后调用，用于计算并设置组件的高度
       */
      componentDidMount() {
        // 从 props 中获取 height 属性
        const { height } = this.props;
        // 如果没有指定 height 并且根节点存在
        if (!height && this.root) {
          // 计算根节点的自动高度
          let h = getAutoHeight(this.root);
          // 更新组件状态中的计算高度
          this.setState({ computedHeight: h });
          // 如果计算出的高度小于1
          if (h < 1) {
            // 再次计算根节点的自动高度
            h = getAutoHeight(this.root);
            // 更新组件状态中的计算高度
            this.setState({ computedHeight: h });
          }
        }
      }

      /**
       * 处理根节点的引用
       * @param {HTMLDivElement} node - 根节点的引用
       */
      handleRoot = (node: HTMLDivElement) => {
        // 将根节点引用赋值给 this.root
        this.root = node;
      };

      /**
       * 渲染组件
       * @returns {JSX.Element} - 返回渲染后的组件
       */
      render() {
        // 从 props 中获取 height 属性
        const { height } = this.props;
        // 从组件状态中获取计算出的高度
        const { computedHeight } = this.state;
        // 计算最终的高度，如果指定了 height 则使用指定的高度，否则使用计算出的高度
        const h = height || computedHeight;
        // 返回渲染后的组件
        return (
          <div ref={this.handleRoot}>
            {h > 0 && <WrappedComponent {...this.props} height={h} />}
          </div>
        );
      }
    }
    // 返回 AutoHeightComponent 类
    return AutoHeightComponent;
  };
}

// 导出 autoHeight 函数
export default autoHeight;
