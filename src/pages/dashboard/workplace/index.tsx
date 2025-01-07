// 导入 Radar 组件，用于绘制雷达图
import { Radar } from '@ant-design/plots';
// 导入 PageContainer 组件，用于布局页面
import { PageContainer } from '@ant-design/pro-components';
// 导入 Link 和 useRequest 组件，用于处理链接和请求
import { Link, useRequest } from '@umijs/max';
// 导入 Ant Design 中的 Avatar、Card、Col、List、Row、Skeleton、Statistic 组件
import { Avatar, Card, Col, List, Row, Skeleton, Statistic } from 'antd';
// 导入 dayjs 库，用于处理日期和时间
import dayjs from 'dayjs';
// 导入 relativeTime 插件，用于格式化相对时间
import relativeTime from 'dayjs/plugin/relativeTime';
// 导入 FC 类型，用于定义函数式组件
import type { FC } from 'react';
// 导入 EditableLinkGroup 组件，用于编辑链接组
import EditableLinkGroup from './components/EditableLinkGroup';
// 导入 ActivitiesType 和 CurrentUser 类型，用于定义活动和当前用户的数据结构
import type { ActivitiesType, CurrentUser } from './data.d';
// 导入 fakeChartData、queryActivities、queryProjectNotice 函数，用于获取假数据、活动数据和项目通知数据
import { fakeChartData, queryActivities, queryProjectNotice } from './service';
// 导入 useStyles 钩子，用于获取样式
import useStyles from './style.style';

// 初始化 dayjs 的 relativeTime 插件
dayjs.extend(relativeTime);

// 定义链接数组
const links = [
  {
    title: '操作一',
    href: '',
  },
  {
    title: '操作二',
    href: '',
  },
  {
    title: '操作三',
    href: '',
  },
  {
    title: '操作四',
    href: '',
  },
  {
    title: '操作五',
    href: '',
  },
  {
    title: '操作六',
    href: '',
  },
];

/**
 * PageHeaderContent 组件
 * @param {Object} props - 组件的属性
 * @param {Partial<CurrentUser>} props.currentUser - 当前用户的信息
 * @returns {JSX.Element} 页面头部内容的 JSX 元素
 */
const PageHeaderContent: FC<{
  currentUser: Partial<CurrentUser>;
}> = ({ currentUser }) => {
  // 使用 useStyles 钩子获取样式
  const { styles } = useStyles();
  // 判断当前用户是否加载完成
  const loading = currentUser && Object.keys(currentUser).length;
  // 如果当前用户未加载完成，显示骨架屏
  if (!loading) {
    return (
      <Skeleton
        avatar
        paragraph={{
          rows: 1,
        }}
        active
      />
    );
  }
  // 返回页面头部内容的 JSX 元素
  return (
    <div className={styles.pageHeaderContent}>
      <div className={styles.avatar}>
        <Avatar size="large" src={currentUser.avatar} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          早安，
          {currentUser.name}
          ，祝你开心每一天！
        </div>
        <div>
          {currentUser.title} |{currentUser.group}
        </div>
      </div>
    </div>
  );
};

/**
 * ExtraContent 组件
 * @param {Object} props - 组件的属性
 * @returns {JSX.Element} 额外内容的 JSX 元素
 */
const ExtraContent: FC<Record<string, any>> = () => {
  // 使用 useStyles 钩子获取样式
  const { styles } = useStyles();
  // 返回额外内容的 JSX 元素
  return (
    <div className={styles.extraContent}>
      <div className={styles.statItem}>
        <Statistic title="项目数" value={56} />
      </div>
      <div className={styles.statItem}>
        <Statistic title="团队内排名" value={8} suffix="/ 24" />
      </div>
      <div className={styles.statItem}>
        <Statistic title="项目访问" value={2223} />
      </div>
    </div>
  );
};

/**
 * Workplace 组件
 * @returns {JSX.Element} 工作区页面的 JSX 元素
 */
const Workplace: FC = () => {
  // 使用 useStyles 钩子获取样式
  const { styles } = useStyles();
  // 使用 useRequest 钩子获取项目通知数据
  const { loading: projectLoading, data: projectNotice = [] } = useRequest(queryProjectNotice);
  // 使用 useRequest 钩子获取活动数据
  const { loading: activitiesLoading, data: activities = [] } = useRequest(queryActivities);
  // 使用 useRequest 钩子获取图表数据
  const { data } = useRequest(fakeChartData);

  /**
   * 渲染活动列表项
   * @param {ActivitiesType} item - 活动数据
   * @returns {JSX.Element} 活动列表项的 JSX 元素
   */
  const renderActivities = (item: ActivitiesType) => {
    // 将活动模板字符串按特定格式分割成数组，并映射处理
    const events = item.template.split(/@\{([^{}]*)\}/gi).map((key) => {
      // 如果活动数据中存在对应字段，则返回链接元素
      if (item[key as keyof ActivitiesType]) {
        const value = item[key as 'user'];
        return (
          <a href={value?.link} key={value?.name}>
            {value.name}
          </a>
        );
      }
      // 否则返回原字符串
      return key;
    });

    // 返回活动列表项的 JSX 元素
    return (
      <List.Item key={item.id}>
        <List.Item.Meta
          avatar={<Avatar src={item.user.avatar} />}
          title={
            <span>
              <a className={styles.username}>{item.user.name}</a>
              &nbsp;
              <span className={styles.event}>{events}</span>
            </span>
          }
          description={
            <span className={styles.datetime} title={item.updatedAt}>
              {dayjs(item.updatedAt).fromNow()}
            </span>
          }
        />
      </List.Item>
    );
  };

  // 返回工作区页面的 JSX 元素
  return (
    <PageContainer
      content={
        <PageHeaderContent
          currentUser={{
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
            name: '吴彦祖',
            userid: '00000001',
            email: 'antdesign@alipay.com',
            signature: '海纳百川，有容乃大',
            title: '交互专家',
            group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
          }}
        />
      }
      extraContent={<ExtraContent />}
    >
      <Row gutter={24}>
        <Col xl={16} lg={24} md={24} sm={24} xs={24}>
          <Card
            className={styles.projectList}
            style={{
              marginBottom: 24,
            }}
            title="进行中的项目"
            bordered={false}
            extra={<Link to="/">全部项目</Link>}
            loading={projectLoading}
            bodyStyle={{
              padding: 0,
            }}
          >
            {projectNotice.map((item) => (
              <Card.Grid className={styles.projectGrid} key={item.id}>
                <Card
                  bodyStyle={{
                    padding: 0,
                  }}
                  bordered={false}
                >
                  <Card.Meta
                    title={
                      <div className={styles.cardTitle}>
                        <Avatar size="small" src={item.logo} />
                        <Link to={item.href || '/'}>{item.title}</Link>
                      </div>
                    }
                    description={item.description}
                  />
                  <div className={styles.projectItemContent}>
                    <Link to={item.memberLink
                    {item.updatedAt && (
                      <span className={styles.datetime} title={item.updatedAt}>
                        {dayjs(item.updatedAt).fromNow()}
                      </span>
                    )}
                  </div>
                </Card>
              </Card.Grid>
            ))}
          </Card>
          <Card
            bodyStyle={{
              padding: 0,
            }}
            bordered={false}
            className={styles.activeCard}
            title="动态"
            loading={activitiesLoading}
          >
            <List<ActivitiesType>
              loading={activitiesLoading}
              renderItem={(item) => renderActivities(item)}
              dataSource={activities}
              className={styles.activitiesList}
              size="large"
            />
          </Card>
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{
              marginBottom: 24,
            }}
            title="快速开始 / 便捷导航"
            bordered={false}
            bodyStyle={{
              padding: 0,
            }}
          >
            <EditableLinkGroup onAdd={() => {}} links={links} linkElement={Link} />
          </Card>
          <Card
            style={{
              marginBottom: 24,
            }}
            bordered={false}
            title="XX 指数"
            loading={data?.radarData?.length === 0}
          >
            <div>
              <Radar
                height={343}
                data={data?.radarData || []}
                xField="label"
                colorField="name"
                yField="value"
                shapeField="smooth"
                area={{
                  style: {
                    fillOpacity: 0.4,
                  },
                }}
                axis={{
                  y: {
                    gridStrokeOpacity: 0.5,
                  },
                }}
                legend={{
                  color: {
                    position: 'bottom',
                    layout: { justifyContent: 'center' },
                  },
                }}
              />
            </div>
          </Card>
          <Card
            bodyStyle={{
              paddingTop: 12,
              paddingBottom: 12,
            }}
            bordered={false}
            title="团队"
            loading={projectLoading}
          >
            <div className={styles.members}>
              <Row gutter={48}>
                {projectNotice.map((item) => {
                  return (
                    <Col span={12} key={`members-item-${item.id}`}>
                      <a>
                        <Avatar src={item.logo} size="small" />
                        <span className={styles.member}>{item.member.substring(0, 3)}</span>
                      </a>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};
export default Workplace;
