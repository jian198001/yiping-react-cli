// 引入 Ant Design 图标库中的 LikeOutlined、MessageFilled、StarTwoTone 图标组件
import { LikeOutlined, MessageFilled, StarTwoTone } from '@ant-design/icons';
// 引入 Umi 框架中的 useRequest 钩子函数，用于请求数据
import { useRequest } from '@umijs/max';
// 引入 Ant Design 库中的 List、Tag 组件
import { List, Tag } from 'antd';
// 引入 React 库
import React from 'react';
// 引入类型定义文件中的 ListItemDataType 类型
import type { ListItemDataType } from '../../data.d';
// 引入查询假数据的函数
import { queryFakeList } from '../../service';
// 引入 ArticleListContent 组件
import ArticleListContent from '../ArticleListContent';
// 引入样式文件
import useStyles from './index.style';

/**
 * 文章组件
 * 显示文章列表，包括标题、标签、点赞数、评论数和收藏数
 */
const Articles: React.FC = () => {
  // 使用 useStyles 钩子函数获取样式
  const { styles } = useStyles();

  /**
   * 图标和文本组件
   * @param {Object} props - 组件的属性
   * @param {React.ReactNode} props.icon - 图标组件
   * @param {React.ReactNode} props.text - 文本内容
   * @returns {JSX.Element} 图标和文本组件的 JSX 元素
   */
  const IconText: React.FC<{
    icon: React.ReactNode;
    text: React.ReactNode;
  }> = ({ icon, text }) => (
    <span>
      {icon} {text}
    </span>
  );

  // 获取tab列表数据
  const { data: listData } = useRequest(() => {
    return queryFakeList({
      count: 30,
    });
  });

  return (
    <List<ListItemDataType>
      size="large"
      className={styles.articleList}
      rowKey="id"
      itemLayout="vertical"
      dataSource={listData?.list || []}
      renderItem={(item) => (
        <List.Item
          key={item.id}
          actions={[
            <IconText key="star" icon={<StarTwoTone />} text={item.star} />,
            <IconText key="like" icon={<LikeOutlined />} text={item.like} />,
            <IconText key="message" icon={<MessageFilled />} text={item.message} />,
          ]}
        >
          <List.Item.Meta
            title={
              <a className={styles.listItemMetaTitle} href={item.href}>
                {item.title}
              </a>
            }
            description={
              <span>
                <Tag>Ant Design</Tag>
                <Tag>设计语言</Tag>
              </span>
            }
          />
          <ArticleListContent data={item} />
        </List.Item>
      )}
    />
  );
};

// 导出 Articles 组件作为默认导出
export default Articles;
