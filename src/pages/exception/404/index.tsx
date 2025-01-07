// 导入 umijs/max 中的 Link 组件，用于处理链接
import { Link } from '@umijs/max';
// 导入 antd 中的 Button 和 Result 组件，用于显示按钮和结果信息
import { Button, Result } from 'antd';

/**
 * 404错误页面组件
 * @returns {JSX.Element} 404错误页面的JSX元素
 */
export default () => (
  // 渲染Result组件，显示404错误信息
  <Result
    // 设置状态为404
    status="404"
    // 设置标题为404
    title="404"
    // 设置副标题为“Sorry, the page you visited does not exist.”
    subTitle="Sorry, the page you visited does not exist."
    // 设置额外内容，包含一个返回首页的链接按钮
    extra={
      // 渲染Link组件，点击后跳转到首页
      <Link to="/">
        // 渲染Button组件，类型为primary，显示“Back Home”文本
        <Button type="primary">Back Home</Button>
      </Link>
    }
  />
);
