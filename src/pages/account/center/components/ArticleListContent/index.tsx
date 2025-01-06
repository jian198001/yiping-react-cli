// 引入 Ant Design 库中的 Avatar 组件
import { Avatar } from 'antd';
// 引入 dayjs 库，用于处理日期和时间
import dayjs from 'dayjs';
// 引入 React 库
import React from 'react';
// 引入样式文件
import useStyles from './index.style';

/**
 * 文章列表内容组件的属性类型
 * @typedef {Object} ApplicationsProps
 * @property {Object} data - 文章数据对象
 * @property {string} [data.content] - 文章内容
 * @property {any} [data.updatedAt] - 文章更新时间
 * @property {string} [data.avatar] - 文章作者头像
 * @property {string} [data.owner] - 文章作者
 * @property {string} [data.href] - 文章链接
 */
export type ApplicationsProps = {
  data: {
    content?: string;
    updatedAt?: any;
    avatar?: string;
    owner?: string;
    href?: string;
  };
};

/**
 * 文章列表内容组件
 * 显示文章内容、作者、发布链接和更新时间
 * @param {ApplicationsProps} props - 组件的属性
 * @returns {JSX.Element} 文章列表内容组件的 JSX 元素
 */
const ArticleListContent: React.FC<ApplicationsProps> = ({
  data: { content, updatedAt, avatar, owner, href },
}) => {
  // 使用 useStyles 钩子函数获取样式
  const { styles } = useStyles();

  return (
    <div>
      {/* 显示文章内容 */}
      <div className={styles.description}>{content}</div>
      <div className={styles.extra}>
        {/* 显示文章作者头像 */}
        <Avatar src={avatar} size="small" />
        {/* 显示文章作者和发布链接 */}
        <a href={href}>{owner}</a> 发布在 <a href={href}>{href}</a>
        {/* 显示文章更新时间 */}
        <em>{dayjs(updatedAt).format('YYYY-MM-DD HH:mm')}</em>
      </div>
    </div>
  );
};

// 导出 ArticleListContent 组件作为默认导出
export default ArticleListContent;
