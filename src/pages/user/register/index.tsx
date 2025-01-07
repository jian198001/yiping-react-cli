import { history, Link, useRequest } from '@umijs/max';
import { Button, Col, Form, Input, message, Popover, Progress, Row, Select, Space } from 'antd';
import type { Store } from 'antd/es/form/interface';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import type { StateType } from './service';
import { fakeRegister } from './service';
import useStyles from './style.style';

// 定义 FormItem 类型别名
const FormItem = Form.Item;
// 解构 Select 组件的 Option 子组件
const { Option } = Select;

// 定义密码强度映射
const passwordProgressMap: {
  // 强密码状态
  ok: 'success';
  // 中等密码状态
  pass: 'normal';
  // 弱密码状态
  poor: 'exception';
} = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
};

/**
 * 用户注册组件
 * @returns {JSX.Element} 用户注册组件的JSX元素
 */
const Register: FC = () => {
  // 使用样式
  const { styles } = useStyles();
  // 定义验证码倒计时状态
  const [count, setCount]: [number, any] = useState(0);
  // 定义密码可见性状态
  const [open, setVisible]: [boolean, any] = useState(false);
  // 定义手机号码前缀状态
  const [prefix, setPrefix]: [string, any] = useState('86');
  // 定义弹出框可见性状态
  const [popover, setPopover]: [boolean, any] = useState(false);
  // 定义确认密码是否脏状态
  const confirmDirty = false;
  // 定义定时器变量
  let interval: number | undefined;

  // 定义密码强度映射
  const passwordStatusMap = {
    // 强密码状态
    ok: (
      <div className={styles.success}>
        <span>强度：强</span>
      </div>
    ),
    // 中等密码状态
    pass: (
      <div className={styles.warning}>
        <span>强度：中</span>
      </div>
    ),
    // 弱密码状态
    poor: (
      <div className={styles.error}>
        <span>强度：太短</span>
      </div>
    ),
  };

  // 创建表单实例
  const [form] = Form.useForm();

  // 清除定时器
  useEffect(
    () => () => {
      clearInterval(interval);
    },
    [interval],
  );

  /**
   * 获取验证码
   */
  const onGetCaptcha = () => {
    // 设置倒计时初始值
    let counts = 59;
    // 设置倒计时状态
    setCount(counts);
    // 设置定时器
    interval = window.setInterval(() => {
      // 倒计时减一
      counts -= 1;
      // 更新倒计时状态
      setCount(counts);
      // 倒计时结束清除定时器
      if (counts === 0) {
        clearInterval(interval);
      }
    }, 1000);
  };

  /**
   * 获取密码状态
   * @returns {string} 密码状态
   */
  const getPasswordStatus = () => {
    // 获取密码值
    const value = form.getFieldValue('password');
    // 密码长度大于9，返回强密码状态
    if (value && value.length > 9) {
      return 'ok';
    }
    // 密码长度大于5，返回中等密码状态
    if (value && value.length > 5) {
      return 'pass';
    }
    // 返回弱密码状态
    return 'poor';
  };

  // 使用 useRequest 钩子处理注册请求
  const { loading: submitting, run: register } = useRequest<{
    data: StateType;
  }>(fakeRegister, {
    // 手动触发请求
    manual: true,
    // 请求成功回调
    onSuccess: (data, params) => {
      // 注册成功
      if (data.status === 'ok') {
        // 显示成功提示
        message.success('注册成功！');
        // 跳转到注册结果页面
        history.push({
          pathname: `/user/register-result?account=${params[0].email}`,
        });
      }
    },
  });

  /**
   * 表单提交处理函数
   * @param {Store} values - 表单数据
   */
  const onFinish = (values: Store) => {
    // 发起注册请求
    register(values);
  };

  /**
   * 确认密码验证函数
   * @param {any} _ - 验证规则
   * @param {string} value - 确认密码值
   * @returns {Promise} 验证结果
   */
  const checkConfirm = (_: any, value: string) => {
    // 创建 Promise 对象
    const promise = Promise;
    // 确认密码与密码不匹配
    if (value && value !== form.getFieldValue('password')) {
      // 返回验证失败
      return promise.reject('两次输入的密码不匹配!');
    }
    // 返回验证成功
    return promise.resolve();
  };

  /**
   * 密码验证函数
   * @param {any} _ - 验证规则
   * @param {string} value - 密码值
   * @returns {Promise} 验证结果
   */
  const checkPassword = (_: any, value: string) => {
    // 创建 Promise 对象
    const promise = Promise;
    // 密码为空
    if (!value) {
      // 设置密码可见性状态
      setVisible(!!value);
      // 返回验证失败
      return promise.reject('请输入密码!');
    }
    // 密码不为空
    if (!open) {
      // 设置密码可见性状态
      setVisible(!!value);
    }
    // 设置弹出框可见性状态
    setPopover(!popover);
    // 密码长度小于6
    if (value.length < 6) {
      // 返回验证失败
      return promise.reject('');
    }
    // 密码长度大于等于6且确认密码已填写
    if (value && confirmDirty) {
      // 验证确认密码
      form.validateFields(['confirm']);
    }
    // 返回验证成功
    return promise.resolve();
  };

  /**
   * 手机号码前缀更改处理函数
   * @param {string} value - 手机号码前缀
   */
  const changePrefix = (value: string) => {
    // 更新手机号码前缀状态
    setPrefix(value);
  };

  /**
   * 渲染密码强度进度条
   * @returns {JSX.Element} 密码强度进度条的JSX元素
   */
  const renderPasswordProgress = () => {
    // 获取密码值
    const value = form.getFieldValue('password');
    // 获取密码状态
    const passwordStatus = getPasswordStatus();
    // 密码不为空
    return value && value.length ? (
      // 渲染密码强度进度条
      <div className={styles[`progress-${passwordStatus}`]}>
        <Progress
          status={passwordProgressMap[passwordStatus]}
          strokeWidth={6}
          percent={value.length * 10 > 100 ? 100 : value.length * 10}
          showInfo={false}
        />
      </div>
    ) : null;
  };

  // 返回注册组件的JSX元素
  return (
    <div className={styles.main}>
      <h3>注册</h3>
      <Form form={form} name="UserRegister" onFinish={onFinish}>
        <FormItem
          name
          rules={[
            {
              required: true,
              message: '请输入邮箱地址!',
            },
            {
              type: 'email',
              message: '邮箱地址格式错误!',
            },
          ]}
        >
          <Input size="large" placeholder="邮箱" />
        </FormItem>
        <Popover
          getPopupContainer={(node) => {
            if (node && node.parentNode) {
              return node.parentNode as HTMLElement;
            }
            return node;
          }}
          content={
            open && (
              <div
                style={{
                  padding: '4px 0',
                }}
              >
                {passwordStatusMap[getPasswordStatus()]}
                {renderPasswordProgress()}
                <div
                  style={{
                    marginTop: 10,
                  }}
                >
                  <span>请至少输入 6 个字符。请不要使用容易被猜到的密码。</span>
                </div>
              </div>
            )
          }
          overlayStyle={{
            width: 240,
          }}
          placement="right"
          open={open}
        >
          <FormItem
            name="password"
            className={
              form.getFieldValue('password') &&
              form.getFieldValue('password').length > 0 &&
              styles.password
            }
            rules={[
              {
                validator: checkPassword,
              },
            ]}
          >
            <Input size="large" type="password" placeholder="至少6位密码，区分大小写" />
          </FormItem>
        </Popover>
        <FormItem
          name="confirm"
          rules={[
            {
              required: true,
              message: '确认密码',
            },
            {
              validator: checkConfirm,
            },
          ]}
        >
          <Input size="large" type="password" placeholder="确认密码" />
        </FormItem>
        <FormItem
          name="mobile"
          rules={[
            {
              required: true,
              message: '请输入手机号!',
            },
            {
              pattern: /^\d{11}$/,
              message: '手机号格式错误!',
            },
          ]}
        >
          <Space.Compact style={{ width: '100%' }}>
            <Select
              size="large"
              value={prefix}
              onChange={changePrefix}
              style={{
                width: '30%',
              }}
            >
              <Option value="86">+86</Option>
              <Option value="87">+87</Option>
            </Select>

            <Input size="large" placeholder="手机号" />
          </Space.Compact>
        </FormItem>
        <Row gutter={8}>
          <Col span={16}>
            <FormItem
              name="captcha"
              rules={[
                {
                  required: true,
                  message: '请输入验证码!',
                },
              ]}
            >
              <Input size="large" placeholder="验证码" />
            </FormItem>
          </Col>
          <Col span={8}>
            <Button
              size="large"
              disabled={!!count}
              className={styles.getCaptcha}
              onClick={onGetCaptcha}
            >
              {count ? `${count} s` : '获取验证码'}
            </Button>
          </Col>
        </Row>
        <FormItem>
          <div className={styles.footer}>
            <Button
              size="large"
              loading={submitting}
              className={styles.submit}
              type="primary"
              htmlType="submit"
            >
              <span>注册</span>
            </Button>
            <Link to="/user/login">
              <span>使用已有账户登录</span>
            </Link>
          </div>
        </FormItem>
      </Form>
    </div>
  );
};
export default Register;
