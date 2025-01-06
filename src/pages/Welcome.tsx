import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme } from 'antd';
import React from 'react';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: string;
  href: string;
}> = ({ title, href, index, desc }) => {
  // 使用 Ant Design 的主题钩子
  const { useToken } = theme;

  // 获取当前主题的 token
  const { token } = useToken();

  return (
    <div
      style={{
        // 背景颜色使用 token 中的颜色
        backgroundColor: token.colorBgContainer,
        // 阴影使用 token 中的阴影样式
        boxShadow: token.boxShadow,
        // 边框半径为 8px
        borderRadius: '8px',
        // 字体大小为 14px
        fontSize: '14px',
        // 文字颜色使用 token 中的次要文字颜色
        color: token.colorTextSecondary,
        // 行高为 22px
        lineHeight: '22px',
        // 内边距为 16px 19px
        padding: '16px 19px',
        // 最小宽度为 220px
        minWidth: '220px',
        // 弹性布局，占满剩余空间
        flex: 1,
      }}
    >
      <div
        style={{
          // 弹性布局，子元素之间有 4px 的间隙，垂直居中对齐
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            // 宽度为 48px，高度为 48px
            width: 48,
            height: 48,
            lineHeight: '22px',
            // 背景图片大小为 100%
            backgroundSize: '100%',
            // 文本居中对齐
            textAlign: 'center',
            // 内边距为 8px 16px 16px 12px
            padding: '8px 16px 16px 12px',
            // 文字颜色为白色
            color: '#FFF',
            // 字体加粗
            fontWeight: 'bold',
            // 背景图片
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            // 字体大小为 16px
            fontSize: '16px',
            // 文字颜色使用 token 中的主要文字颜色
            color: token.colorText,
            // 底部内边距为 8px
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          // 字体大小为 14px
          fontSize: '14px',
          // 文字颜色使用 token 中的次要文字颜色
          color: token.colorTextSecondary,
          // 文本两端对齐
          textAlign: 'justify',
          // 行高为 22px
          lineHeight: '22px',
          // 底部外边距为 8px
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <a href={href} target="_blank" rel="noreferrer">
        了解更多 {'>'}
      </a>
    </div>
  );
};

const Welcome: React.FC = () => {
  // 使用 Ant Design 的主题钩子获取当前主题的 token
  const { token } = theme.useToken();
  // 使用 umi 的 useModel 钩子获取初始状态
  const { initialState } = useModel('@@initialState');
  return (
    <PageContainer>
      <Card
        style={{
          // 边框半径为 8px
          borderRadius: 8,
        }}
        bodyStyle={{
          // 根据初始状态的导航主题设置背景图片
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
          style={{
            // 背景图片位置为右下角
            backgroundPosition: '100% -30%',
            // 背景图片不重复
            backgroundRepeat: 'no-repeat',
            // 背景图片大小为 274px 自动
            backgroundSize: '274px auto',
            // 背景图片
            backgroundImage:
              "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <div
            style={{
              // 字体大小为 20px
              fontSize: '20px',
              // 文字颜色使用 token 中的标题文字颜色
              color: token.colorTextHeading,
            }}
          >
            欢迎使用 一平管理系统
          </div>
          <p
            style={{
              // 字体大小为 14px
              fontSize: '14px',
              // 文字颜色使用 token 中的次要文字颜色
              color: token.colorTextSecondary,
              // 行高为 22px
              lineHeight: '22px',
              // 顶部外边距为 16px
              marginTop: 16,
              // 底部外边距为 32px
              marginBottom: 32,
              // 宽度为父容器的 65%
              width: '65%',
            }}
          > 
          </p>
          <div
            style={{
              // 弹性布局，允许换行，子元素之间有 16px 的间隙
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              href="https://umijs.org/docs/introduce/introduce"
              title="了解 umi"
              desc="umi 是一个可扩展的企业级前端应用框架,umi 以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。"
            />
            <InfoCard
              index={2}
              title="了解 ant design"
              href="https://ant.design"
              desc="antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。"
            />
            <InfoCard
              index={3}
              title="了解 Pro Components"
              href="https://procomponents.ant.design"
              desc="ProComponents 是一个基于 Ant Design 做了更高抽象的模板组件，以 一个组件就是一个页面为开发理念，为中后台开发带来更好的体验。"
            />
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
