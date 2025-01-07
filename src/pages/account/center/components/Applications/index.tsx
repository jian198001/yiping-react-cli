// 从 antd-design/icons 库中导入所需的图标组件
import {
  DownloadOutlined,
  EditOutlined,
  EllipsisOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
// 从 @umijs/max 库中导入 useRequest 钩子
import { useRequest } from '@umijs/max';
// 从 antd 库中导入所需的组件
import { Avatar, Card, Dropdown, List, Tooltip } from 'antd';
// 导入 numeral 库，用于格式化数字
import numeral from 'numeral';
// 导入 React 库
import React from 'react';
// 导入 ListItemDataType 类型定义
import type { ListItemDataType } from '../../data.d';
// 从 service 文件中导入 queryFakeList 函数
import { queryFakeList } from '../../service';
// 导入自定义样式文件
import useStyles from './index.style';

/**
 * 将数字格式化为万为单位的字符串
 * @param {number} val - 需要格式化的数字
 * @returns {React.ReactNode} - 格式化后的字符串或 React 节点
 */
export function formatWan(val: number) {
  // 将传入的值转换为数字类型
  const v = val * 1;
  // 如果值为空或不是数字，则返回空字符串
  if (!v || Number.isNaN(v)) return '';
  // 初始化结果变量为传入的值
  let result: React.ReactNode = val;
  // 如果值大于10000，则进行格式化
  if (val > 10000) {
    // 使用 Math.floor 函数将值除以10000并向下取整
    result = (
      <span>
        {Math.floor(val / 10000)}
        {/* 在结果中添加一个小字体的“万”字 */}
        <span
          style={{
            position: 'relative',
            top: -2,
            fontSize: 14,
            fontStyle: 'normal',
            marginLeft: 2,
          }}
        >
          万
        </span>
      </span>
    );
  }
  // 返回格式化后的结果
  return result;
}

/**
 * Applications 组件，用于显示应用列表
 * @returns {JSX.Element} - 渲染的 Applications 组件
 */
const Applications: React.FC = () => {
  // 使用自定义样式钩子获取样式
  const { styles: stylesApplications } = useStyles();

  // 使用 useRequest 钩子获取列表数据
  const { data: listData } = useRequest(() => {
    // 调用 queryFakeList 函数获取数据
    return queryFakeList({
      count: 30,
    });
  });

  /**
   * CardInfo 组件，用于显示活跃用户和新增用户信息
   * @param {Object} props - 组件属性
   * @param {React.ReactNode} props.activeUser - 活跃用户数量
   * @param {React.ReactNode} props.newUser - 新增用户数量
   * @returns {JSX.Element} - 渲染的 CardInfo 组件
   */
  const CardInfo: React.FC<{
    activeUser: React.ReactNode;
    newUser: React.ReactNode;
  }> = ({ activeUser, newUser }) => (
    <div className={stylesApplications.cardInfo}>
      <div>
        <p>活跃用户</p>
        <p>{activeUser}</p>
      </div>
      <div>
        <p>新增用户</p>
        <p>{newUser}</p>
      </div>
    </div>
  );

  // 返回渲染的 Applications 组件
  return (
    <List<ListItemDataType>
      // 设置列表项的唯一键
      rowKey="id"
      // 设置列表的样式类名
      className={stylesApplications.filterCardList}
      // 设置列表的网格布局
      grid={{
        gutter: 24,
        xxl: 3,
        xl: 2,
        lg: 2,
        md: 2,
        sm: 2,
        xs: 1,
      }}
      // 设置列表的数据源
      dataSource={listData?.list || []}
      // 设置列表项的渲染函数
      renderItem={(item) => (
        <List.Item key={item.id}>
          <Card
            // 设置卡片的鼠标悬停效果
            hoverable
            // 设置卡片的内容样式
            bodyStyle={{
              paddingBottom: 20,
            }}
            // 设置卡片的操作按钮
            actions={[
              <Tooltip key="download" title="下载">
                <DownloadOutlined />
              </Tooltip>,
              <Tooltip title="编辑" key="edit">
                <EditOutlined />
              </Tooltip>,
              <Tooltip title="分享" key="share">
                <ShareAltOutlined />
              </Tooltip>,
              <Dropdown
                // 设置下拉菜单的选项
                items={[
                  {
                    key: '1',
                    title: '1st menu item',
                  },
                  {
                    key: '2',
                    title: '2nd menu item',
                  },
                ]}
                // 设置下拉菜单的键
                key="ellipsis"
              >
                <EllipsisOutlined />
              </Dropdown>,
            ]}
          >
            <Card.Meta
              // 设置卡片的头像
              avatar={<Avatar size="small" src={item.avatar} />}
              // 设置卡片的标题
              title={item.title}
            />
            <div>
              <CardInfo
                // 格式化活跃用户数量
                activeUser={formatWan(item.activeUser)}
                // 格式化新增用户数量
                newUser={numeral(item.newUser).format('0,0')}
              />
            </div>
          </Card>
        </List.Item>
      )}
    />
  );
};

// 导出 Applications 组件
export default Applications;