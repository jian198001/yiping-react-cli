// 导入 umijs/max 中的 Link 组件，用于处理链接
import { Link } from '@umijs/max';
// 导入 antd 中的 Button 和 Result 组件，用于显示按钮和结果信息
import { Button, Result } from 'antd';

/**
 * 403错误页面组件
 * @returns {JSX.Element} 403错误页面的JSX元素
 */
export default () => (
  // 渲染Result组件，显示403错误信息
  <Result
    // 设置状态为403
    status="403"
    // 设置标题为403
    title="403"
    // 设置副标题为“Sorry, you are not authorized to access this page.”
    subTitle="Sorry, you are not authorized to access this page."
    // 设置额外内容，包含一个返回首页的链接按钮
    extra={
      // 渲染Link组件，点击后跳转到首页
      <Link to="/">
        // 渲染Button组件，类型为primary，显示“Back to home”文本
        <Button type="primary">Back to home</Button>
      </Link>
    }
  />
);
