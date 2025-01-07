// 导入 createStyles 函数，用于创建样式
import { createStyles } from 'antd-style';

/**
 * 使用 antd-style 创建样式
 * @param {Object} params - 包含 token 对象的参数
 * @returns {Object} 注册页面的样式对象
 */
const useStyles = createStyles(({ token }) => {
  return {
    // 主容器样式
    main: {
      // 宽度为368px
      width: '368px',
      // 水平居中
      margin: '0 auto',
      // h3标签样式
      h3: {
        // 下外边距为20px
        marginBottom: '20px',
        // 字体大小为16px
        fontSize: '16px',
      },
    },
    // 密码输入框样式
    password: {
      // 下外边距为24px
      marginBottom: '24px',
      // 隐藏表单错误提示
      '.ant-form-item-explain': { display: 'none' },
    },
    // 获取验证码按钮样式
    getCaptcha: {
      // 块级显示
      display: 'block',
      // 宽度为100%
      width: '100%',
    },

    // 页脚样式
    footer: {
      // 宽度为100%
      width: '100%',
      // 弹性布局
      display: 'flex',
      // 垂直居中
      alignItems: 'center',
      // 两端对齐
      justifyContent: 'space-between',
    },
    // 提交按钮样式
    submit: {
      // 宽度为50%
      width: '50%',
    },
    // 成功状态样式
    success: {
      // 颜色过渡效果
      transition: 'color 0.3s',
      // 成功颜色
      color: token.colorSuccess,
    },
    // 警告状态样式
    warning: {
      // 颜色过渡效果
      transition: 'color 0.3s',
      // 警告颜色
      color: token.colorWarning,
    },
    // 错误状态样式
    error: {
      // 颜色过渡效果
      transition: 'color 0.3s',
      // 错误颜色
      color: token.colorError,
    },
    // 进度条通过状态样式
    'progress-pass > .progress': {
      // 进度条背景颜色
      '.ant-progress-bg': { backgroundColor: token.colorWarning },
    },
  };
});

// 导出样式
export default useStyles;
