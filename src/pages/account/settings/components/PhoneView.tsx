// 引入 antd 中的 Input 组件，用于输入框
import { Input } from 'antd';
// 引入 React 库
import React from 'react';
// 引入自定义样式文件
import useStyles from './index.style';

/**
 * PhoneView 组件的属性接口
 * @interface PhoneViewProps
 * @property {string} [value] - 电话号码的初始值
 * @property {(value: string) => void} [onChange] - 电话号码改变时的回调函数
 */
type PhoneViewProps = {
  value?: string;
  onChange?: (value: string) => void;
};

/**
 * PhoneView 组件
 * 用于显示和编辑电话号码，支持区号和电话号码分开输入
 * @param {PhoneViewProps} props - PhoneView 组件的属性
 * @returns {JSX.Element} PhoneView 组件的 JSX 元素
 */
const PhoneView: React.FC<PhoneViewProps> = (props) => {
  // 使用 useStyles 钩子函数获取样式
  const { styles } = useStyles();
  // 解构 props 获取 value 和 onChange 函数
  const { value, onChange } = props;
  // 初始化 values 数组，用于存储区号和电话号码
  let values = ['', ''];
  // 如果 value 存在，则将其按 '-' 分割并存储到 values 数组中
  if (value) {
    values = value.split('-');
  }

  return (
    <>
      {/* 渲染区号输入框 */}
      <Input
        className={styles.area_code}
        value={values[0]}
        onChange={(e) => {
          // 当区号输入框的值改变时，调用 onChange 函数更新电话号码
          if (onChange) {
            onChange(`${e.target.value}-${values[1]}`);
          }
        }}
      />
      {/* 渲染电话号码输入框 */}
      <Input
        className={styles.phone_number}
        onChange={(e) => {
          // 当电话号码输入框的值改变时，调用 onChange 函数更新电话号码
          if (onChange) {
            onChange(`${values[0]}-${e.target.value}`);
          }
        }}
        value={values[1]}
      />
    </>
  );
};

// 导出 PhoneView 组件作为默认导出
export default PhoneView;
