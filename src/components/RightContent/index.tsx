// 引入 Ant Design 图标库中的 QuestionCircleOutlined 图标组件
import { QuestionCircleOutlined } from '@ant-design/icons';
// 引入 Umi 框架中的 SelectLang 组件
import { SelectLang as UmiSelectLang } from '@umijs/max';

/**
 * 侧边栏主题类型
 * @typedef {('light' | 'dark')} SiderTheme
 */
export type SiderTheme = 'light' | 'dark';

/**
 * 语言选择组件
 * @returns {JSX.Element} UmiSelectLang 组件的 JSX 元素
 */
export const SelectLang = () => {
  // 返回 UmiSelectLang 组件
  return <UmiSelectLang />;
};

/**
 * 问题图标组件
 * @returns {JSX.Element} 包含 QuestionCircleOutlined 图标的 div 元素
 */
export const Question = () => {
  // 返回一个包含 QuestionCircleOutlined 图标的 div 元素
  return (
    <div
      style={{
        // 弹性布局
        display: 'flex',
        // 高度为 26px
        height: 26,
      }}
      onClick={() => {
        // 点击事件处理函数
      }}
    >
      <QuestionCircleOutlined />
    </div>
  );
};
