/**
 * 导入 Ant Design 图标库中的 ClusterOutlined、ContactsOutlined、HomeOutlined、PlusOutlined 图标组件
 */
import { ClusterOutlined, ContactsOutlined, HomeOutlined, PlusOutlined } from '@ant-design/icons';
/**
 * 导入 Ant Design Pro 组件库中的 GridContent 组件
 */
import { GridContent } from '@ant-design/pro-components';
/**
 * 导入 Umi 框架中的 useRequest 钩子函数，用于请求数据
 */
import { useRequest } from '@umijs/max';
/**
 * 导入 Ant Design 库中的 Avatar、Card、Col、Divider、Input、InputRef、Row、Tag 组件
 */
import { Avatar, Card, Col, Divider, Input, InputRef, Row, Tag } from 'antd';
/**
 * 导入 React 库
 */
import React, { useRef, useState } from 'react';
/**
 * 导入自定义样式文件
 */
import useStyles from './Center.style';
/**
 * 导入子组件 Articles、Applications、Projects
 */
import Articles from './components/Articles';
import Applications from './components/Applications';
import Projects from './components/Projects';
/**
 * 导入类型定义文件中的 CurrentUser、tabKeyType、TagType 类型
 */
import type { CurrentUser, tabKeyType, TagType } from './data.d';
/**
 * 导入查询当前用户信息的函数
 */
import { queryCurrent } from './service';

/**
 * 定义一个常量 operationTabList，它是一个数组，包含两个对象，每个对象表示一个标签页的配置
 */
const operationTabList = [
  // 第一个标签页配置，对应文章
  {
    // 标签页的唯一标识
    key: 'articles',
    // 标签页的显示内容，包含一个 span 元素，显示“文章”和一个带有字体大小样式的 span 元素，显示文章数量
    tab: (
      <span>
        文章{' '}
        <span
          style={{
            fontSize: 14,
          }}
        >
          (8)
        </span>
      </span>
    ),
  },
  // 第二个标签页配置，对应应用
  {
    // 标签页的唯一标识
    key: 'applications',
    // 标签页的显示内容，包含一个 span 元素，显示“应用”和一个带有字体大小样式的 span 元素，显示应用数量
    tab: (
      <span>
        应用{' '}
        <span
          style={{
            fontSize: 14,
          }}
        >
          (8)
        </span>
      </span>
    ),
  },
];

/**
 * 标签列表组件
 * 显示用户的标签列表，并支持添加新标签
 * @param {Object} props - 组件的属性
 * @param {CurrentUser['tags']} props.tags - 用户的标签数组
 * @returns {JSX.Element} 标签列表组件的 JSX 元素
 */
const TagList: React.FC<{
  tags: CurrentUser['tags'];
}> = ({ tags }) => {
  // 使用 useStyles 钩子函数获取样式
  const { styles } = useStyles();
  // 创建一个 ref 用于引用 Input 组件
  const ref = useRef<InputRef | null>(null);
  // 创建一个 state 用于存储新标签
  const [newTags, setNewTags] = useState<TagType[]>([]);
  // 创建一个 state 用于控制输入框的显示状态
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  // 创建一个 state 用于存储输入框的值
  const [inputValue, setInputValue] = useState<string>('');

  /**
   * 显示输入框
   */
  const showInput = () => {
    // 设置输入框的显示状态为 true
    setInputVisible(true);
    // 如果 ref 引用的 Input 组件存在，则调用其 focus 方法，使输入框获得焦点
    if (ref.current) {
      // eslint-disable-next-line no-unused-expressions
      ref.current?.focus();
    }
  };

  /**
   * 处理输入框内容变化
   * @param {React.ChangeEvent<HTMLInputElement>} e - 输入框的 change 事件对象
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 更新输入框的值
    setInputValue(e.target.value);
  };

  /**
   * 处理输入框确认事件
   */
  const handleInputConfirm = () => {
    // 复制一份新标签数组
    let tempsTags = [...newTags];
    // 如果输入框的值不为空，并且新标签数组中不存在该标签，则将其添加到新标签数组中
    if (inputValue && tempsTags.filter((tag) => tag.label === inputValue).length === 0) {
      tempsTags = [
        ...tempsTags,
        {
          key: `new-${tempsTags.length}`,
          label: inputValue,
        },
      ];
    }
    // 更新新标签数组
    setNewTags(tempsTags);
    // 隐藏输入框
    setInputVisible(false);
    // 清空输入框的值
    setInputValue('');
  };

  return (
    <div className={styles.tags}>
      <div className={styles.tagsTitle}>标签</div>
      {/* 渲染用户标签和新标签 */}
      {(tags || []).concat(newTags).map((item) => (
        <Tag key={item.key}>{item.label}</Tag>
      ))}
      {/* 渲染输入框 */}
      {inputVisible && (
        <Input
          ref={ref}
          type="text"
          size="small"
          style={{
            width: 78,
          }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {/* 渲染添加标签按钮 */}
      {!inputVisible && (
        <Tag
          onClick={showInput}
          style={{
            borderStyle: 'dashed',
          }}
        >
          <PlusOutlined />
        </Tag>
      )}
    </div>
  );
};

/**
 * 中心组件
 * 显示用户信息和操作标签页
 * @returns {JSX.Element} 中心组件的 JSX 元素
 */
const Center: React.FC = () => {
  // 使用 useStyles 钩子函数获取样式
  const { styles } = useStyles();
  // 创建一个 state 用于存储当前激活的标签页
  const [tabKey, setTabKey] = useState<tabKeyType>('articles');

  // 使用 useRequest 钩子函数获取当前用户信息
  const { data: currentUser, loading } = useRequest(() => {
    return queryCurrent();
  });

  /**
   * 渲染用户信息
   * @param {Partial<CurrentUser>} user - 用户信息对象
   * @returns {JSX.Element} 用户信息的 JSX 元素
   */
  const renderUserInfo = ({ title, group, geographic }: Partial<CurrentUser>) => {
    return (
      <div className={styles.detail}>
        <p>
          <ContactsOutlined
            style={{
              marginRight: 8,
            }}
          />
          {title}
        </p>
        <p>
          <ClusterOutlined
            style={{
              marginRight: 8,
            }}
          />
          {group}
        </p>
        <p>
          <HomeOutlined
            style={{
              marginRight: 8,
            }}
          />
          {
            (
              geographic || {
                province: {
                  label: '',
                },
              }
            ).province.label
          }
          {
            (
              geographic || {
                city: {
                  label: '',
                },
              }
            ).city.label
          }
        </p>
      </div>
    );
  };

  /**
   * 根据标签页键值渲染子组件
   * @param {tabKeyType} tabValue - 标签页键值
   * @returns {JSX.Element} 子组件的 JSX 元素
   */
  const renderChildrenByTabKey = (tabValue: tabKeyType) => {
    if (tabValue === 'projects') {
     
      return <Projects />;
    }
    if (tabValue === 'applications') {
      return <Applications />;
    }
    if (tabValue === 'articles') {
      return <Articles />;
    }
    return null;
  };
  return (
    <GridContent>
      <Row gutter={24}>
        <Col lg={7} md={24}>
          <Card
            bordered={false}
            style={{
              marginBottom: 24,
            }}
            loading={loading}
          >
            {!loading && currentUser && (
              <div>
                <div className={styles.avatarHolder}>
                  <img alt="" src={currentUser.avatar} />
                  <div className={styles.name}>{currentUser.name}</div>
                  <div>{currentUser?.signature}</div>
                </div>
                {renderUserInfo(currentUser)}
                <Divider dashed />
                <TagList tags={currentUser.tags || []} />
                <Divider
                  style={{
                    marginTop: 16,
                  }}
                  dashed
                />
                <div className={styles.team}>
                  <div className={styles.teamTitle}>团队</div>
                  <Row gutter={36}>
                    {currentUser.notice &&
                      currentUser.notice.map((item) => (
                        <Col key={item.id} lg={24} xl={12}>
                          <a href={item.href}>
                            <Avatar size="small" src={item.logo} />
                            {item.member}
                          </a>
                        </Col>
                      ))}
                  </Row>
                </div>
              </div>
            )}
          </Card>
        </Col>
        <Col lg={17} md={24}>
          <Card
            className={styles.tabsCard}
            bordered={false}
            tabList={operationTabList}
            activeTabKey={tabKey}
            onTabChange={(_tabKey: string) => {
              setTabKey(_tabKey as tabKeyType);
            }}
          >
            {renderChildrenByTabKey(tabKey)}
          </Card>
        </Col>
      </Row>
    </GridContent>
  );
};
export default Center;
