// 导入 Link 和 useSearchParams 组件，用于处理链接和查询参数
import { Link, useSearchParams } from '@umijs/max';
// 导入 Button 和 Result 组件，用于显示按钮和结果信息
import { Button, Result } from 'antd';
// 导入 React 库
import React from 'react';
// 导入样式文件
import useStyles from './style.style';

/**
 * 注册结果页面组件
 * @param {Record<string, unknown>} props - 组件的属性
 * @returns {JSX.Element} 注册结果页面的JSX元素
 */
const RegisterResult: React.FC<Record<string, unknown>> = () => {
  // 使用样式
  const { styles } = useStyles();
  // 获取查询参数
  const [params] = useSearchParams();

  // 定义操作按钮
  const actions = (
    <div className={styles.actions}>
      <a href="">
        <Button size="large" type="primary">
          <span>查看邮箱</span>
        </Button>
      </a>
      <Link to="/">
        <Button size="large">返回首页</Button>
      </Link>
    </div>
  );

  // 获取邮箱参数
  const email = params?.get('account') || 'AntDesign@example.com';

  // 返回注册结果页面
  return (
    <Result
      className={styles.registerResult}
      status="success"
      title={
        <div className={styles.title}>
          <span>你的账户：{email} 注册成功</span>
        </div>
      }
      subTitle="激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。"
      extra={actions}
    />
  );
};

// 导出组件
export default RegisterResult;
