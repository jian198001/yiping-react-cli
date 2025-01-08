// 导入 Footer 组件
import { Footer, } from '@/components';
// 导入登录和初始化相关的 API 函数
import { login, init, } from '@/services/ant-design-pro/api';
// 导入获取验证码的 API 函数
import { getFakeCaptcha, } from '@/services/ant-design-pro/login';
// 导入 Ant Design 的图标组件
import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined, 
  UserOutlined, 
} from '@ant-design/icons';
// 导入 Ant Design Pro 的表单组件
import {
  LoginForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
// 导入国际化相关的组件和钩子
import { FormattedMessage, Helmet, SelectLang, useIntl, useModel } from '@umijs/max';
// 导入 Ant Design 的组件
import { Alert, message, Tabs } from 'antd';
// 导入 antd-style 中的 createStyles 函数
import { createStyles } from 'antd-style';
// 导入 React 相关的库
import React, { useEffect, useState } from 'react';
// 导入 ReactDOM 中的 flushSync 函数
import { flushSync } from 'react-dom';
// 导入默认设置
import Settings from '../../../../config/defaultSettings';

/**
 * 使用 antd-style 创建样式
 * @param {Object} params - 包含 token 对象的参数
 * @returns {Object} 登录页面的样式对象
 */
const useStyles = createStyles(({ token }) => {
  return {
    // 操作图标样式
    action: {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    },
    // 语言选择器样式
    lang: {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    },
    // 容器样式
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    },
  };
});

/**
 * 操作图标组件
 * @returns {JSX.Element} 操作图标的 JSX 元素
 */
const ActionIcons = () => {
  // 使用样式
  const { styles } = useStyles();

  return (
    <>
      <AlipayCircleOutlined key="AlipayCircleOutlined" className={styles.action} /> 
    </>
  );
};

/**
 * 语言选择器组件
 * @returns {JSX.Element} 语言选择器的 JSX 元素
 */
const Lang = () => {
  // 使用样式
  const { styles } = useStyles();

  return (
    <div className={styles.lang} data-lang>
      {SelectLang && <SelectLang />}
    </div>
  );
};

/**
 * 登录错误消息组件
 * @param {Object} props - 组件的属性
 * @param {string} props.content - 错误消息内容
 * @returns {JSX.Element} 登录错误消息的 JSX 元素
 */
const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

/**
 * 登录页面组件
 * @returns {JSX.Element} 登录页面的 JSX 元素
 */
const Login: React.FC = () => {
  // 定义用户登录状态
  const [userLoginState, setUserLoginState] = useState<API.ReqResult>({});
  // 定义登录类型
  const [type, setType] = useState<string>('account');
  // 使用 initialState 和 setInitialState 模型
  const { initialState, setInitialState } = useModel('@@initialState');
  // 使用样式
  const { styles } = useStyles();
  // 使用国际化
  const intl = useIntl();

  /**
   * 异步获取用户信息
   */
  const fetchUserInfo = async () => {
    // 获取用户信息
    const userInfo = await initialState?.fetchUserInfo?.();

    // 如果用户信息存在
    if (userInfo) {
      // 刷新并设置初始状态
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  /**
   * 初始化函数
   */
  useEffect?.(()=>{
    // 调用初始化函数
    init()
  }, [])

  /**
   * 处理登录表单提交
   * @param {Object} values - 表单值
   */
  const handleSubmit = async (values: API.LoginParams) => {
    try {
      // 登录
      const msg = await login({ ...values, type });

      // 如果登录成功
      if (msg.code === 0) {
        // 获取默认登录成功消息
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: '登录成功！',
        });

        // 设置本地存储中的授权信息
        localStorage.setItem('authorization', msg?.data?.accessToken)

        // 显示成功消息
        message.success(defaultLoginSuccessMessage);
        // 获取用户信息
        await fetchUserInfo();

        // 获取 URL 参数
        const urlParams = new URL(window.location.href).searchParams;
        // 重定向到指定页面
        return window.location.href = urlParams.get('redirect') || './index.html';
        
      } 

      // 如果登录失败，显示错误消息
      message?.error(msg?.message)

      // 如果失败去设置用户错误信息
      setUserLoginState(msg);
    } catch (error) {
      // 获取默认登录失败消息
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: '登录失败，请重试！',
      }); 
      // 显示失败消息
      message.error(defaultLoginFailureMessage);
    }
  };

  // 获取用户登录状态和类型
  const { status, type: loginType } = userLoginState;

  // 返回登录页面的 JSX 元素
  return (
    <div className={styles.container}>
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'menu.login',
            defaultMessage: '登录页',
          })}
          - {Settings.title}
        </title>
      </Helmet>
      <Lang />
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src="./logo.svg" />}
          title="一平管理系统"
          subTitle={intl.formatMessage({ id: 'pages.layouts.userLayout.title' })}
          initialValues={{
            autoLogin: true,
          }}
          actions={[
            <FormattedMessage
              key="loginWith"
              id="pages.login.loginWith"
              defaultMessage="其他登录方式"
            />,
            <ActionIcons key="icons" />,
          ]}
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: intl.formatMessage({
                  id: 'pages.login.accountLogin.tab',
                  defaultMessage: '账户密码登录',
                }),
              },
              {
                key: 'mobile',
                label: intl.formatMessage({
                  id: 'pages.login.phoneLogin.tab',
                  defaultMessage: '手机号登录',
                }),
              },
            ]}
          />

          {status === 'error' && loginType === 'account' && (
            <LoginMessage
              content={intl.formatMessage({
                id: 'pages.login.accountLogin.errorMessage',
                defaultMessage: '账户或密码错误',
              })}
            />
          )}
          {type === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.username.placeholder',
                  defaultMessage: '',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.username.required"
                        defaultMessage="请输入用户名!"
                      />
                    ),
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.password.placeholder',
                  defaultMessage: '',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.password.required"
                        defaultMessage="请输入密码！"
                      />
                    ),
                  },
                ]}
              />
            </>
          )}

          {status === 'error' && loginType === 'mobile' && <LoginMessage content="验证码错误" />}
          {type === 'mobile' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined />,
                }}
                name="mobile"
                placeholder={intl.formatMessage({
                  id: 'pages.login.phoneNumber.placeholder',
                  defaultMessage: '手机号',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.phoneNumber.required"
                        defaultMessage="请输入手机号！"
                      />
                    ),
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: (
                      <FormattedMessage
                        id="pages.login.phoneNumber.invalid"
                        defaultMessage="手机号格式错误！"
                      />
                    ),
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.captcha.placeholder',
                  defaultMessage: '请输入验证码',
                })}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${intl.formatMessage({
                      id: 'pages.getCaptchaSecondText',
                      defaultMessage: '获取验证码',
                    })}`;
                  }
                  return intl.formatMessage({
                    id: 'pages.login.phoneLogin.getVerificationCode',
                    defaultMessage: '获取验证码',
                  });
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.captcha.required"
                        defaultMessage="请输入验证码！"
                      />
                    ),
                  },
                ]}
                onGetCaptcha={async (phone) => {
                  const result = await getFakeCaptcha({
                    phone,
                  });
                  if (!result) {
                    return;
                  }
                  message.success('获取验证码成功！验证码为：1234');
                }}
              />
            </>
          )}
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              <FormattedMessage id="pages.login.rememberMe" defaultMessage="自动登录" />
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              <FormattedMessage id="pages.login.forgotPassword" defaultMessage="忘记密码" />
            </a>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
