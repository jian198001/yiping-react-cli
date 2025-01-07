// 导入 PlusOutlined 图标组件
import { PlusOutlined } from '@ant-design/icons';
// 导入 Button 组件
import { Button } from 'antd';
// 导入 React 库和 createElement 函数
import React, { createElement } from 'react';
// 导入样式文件
import useStyles from './index.style';

/**
 * 定义可编辑链接的类型
 * @interface EditableLink
 * @property {string} title - 链接的标题
 * @property {string} href - 链接的 URL
 * @property {string} [id] - 链接的唯一标识符（可选）
 */
export type EditableLink = {
  title: string;
  href: string;
  id?: string;
};

/**
 * 定义可编辑链接组的属性类型
 * @interface EditableLinkGroupProps
 * @property {() => void} onAdd - 添加链接的回调函数
 * @property {EditableLink[]} links - 链接数组
 * @property {any} linkElement - 链接元素（默认为 'a'）
 */
type EditableLinkGroupProps = {
  onAdd: () => void;
  links: EditableLink[];
  linkElement: any;
};

/**
 * 可编辑链接组组件
 * @param {EditableLinkGroupProps} props - 组件属性
 * @returns {JSX.Element} 渲染的链接组元素
 */
const EditableLinkGroup: React.FC<EditableLinkGroupProps> = (props) => {
  // 使用 useStyles 钩子获取样式
  const { styles } = useStyles();
  // 解构 props 中的 links、linkElement 和 onAdd 属性
  const { links, linkElement, onAdd } = props;

  // 返回渲染的链接组元素
  return (
    <div className={styles.linkGroup}>
      {/* 遍历 links 数组，为每个链接创建一个 linkElement 元素 */}
      {links.map((link) =>
        createElement(
          linkElement,
          {
            // 设置 key 属性，用于 React 列表渲染
            key: `linkGroup-item-${link.id || link.title}`,
            // 设置 to 属性，用于 React Router 导航
            to: link.href,
            // 设置 href 属性，用于普通链接
            href: link.href,
          },
          // 设置链接的标题作为子元素
          link.title,
        ),
      )}
      {/* 添加按钮，点击时调用 onAdd 回调函数 */}
      <Button size="small" type="primary" ghost onClick={onAdd}>
        <PlusOutlined /> 添加
      </Button>
    </div>
  );
};

// 设置 EditableLinkGroup 组件的默认属性
EditableLinkGroup.defaultProps = {
  links: [], // 默认链接数组为空
  onAdd: () => {}, // 默认添加回调函数为空函数
  linkElement: 'a', // 默认链接元素为 'a' 标签
};

// 导出 EditableLinkGroup 组件
export default EditableLinkGroup;
