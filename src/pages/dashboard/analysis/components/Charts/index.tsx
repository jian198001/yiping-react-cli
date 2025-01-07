// 导入 numeral 库，用于格式化数字
import numeral from 'numeral';
// 导入 ChartCard 组件
import ChartCard from './ChartCard';
// 导入 Field 组件
import Field from './Field';

/**
 * 将数字格式化为人民币格式
 * @param {number | string} val - 需要格式化的数字
 * @returns {string} - 格式化后的人民币字符串
 */
const yuan = (val: number | string) => `¥ ${numeral(val).format('0,0')}`;

/**
 * 图表组件集合
 */
const Charts = {
  // 将数字格式化为人民币格式的函数
  yuan,
  // ChartCard 组件
  ChartCard,
  // Field 组件
  Field,
};

// 导出 Charts 对象，以及其中的 yuan、ChartCard 和 Field 组件
export { Charts as default, yuan, ChartCard, Field };
