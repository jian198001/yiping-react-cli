import { TestBrowser } from '@@/testBrowser';
import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';

// @ts-ignore
import { startMock } from '@@/requestRecordMock';

/**
 * 等待指定时间
 * @param {number} time - 等待的时间，默认为100毫秒
 * @returns {Promise} 等待完成的Promise
 */
const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

let server: {
  close: () => void;
};

/**
 * 登录页面测试套件
 */
describe('Login Page', () => {
  /**
   * 在所有测试用例执行之前启动模拟服务器
   */
  beforeAll(async () => {
    server = await startMock({
      port: 8000,
      scene: 'login',
    });
  });

  /**
   * 在所有测试用例执行之后关闭模拟服务器
   */
  afterAll(() => {
    server?.close();
  });

  /**
   * 测试登录表单是否显示
   */
  it('should show login form', async () => {
    const historyRef = React.createRef<any>();
    const rootContainer = render(
      <TestBrowser
        historyRef={historyRef}
        location={{
          pathname: '/user/login',
        }}
      />,
    );

    // 等待页面加载完成，确保页面中包含 'Ant Design' 文本
    await rootContainer.findAllByText('Ant Design');

    // 模拟路由跳转至登录页面
    act(() => {
      historyRef.current?.push('/user/login');
    });

    // 断言登录页面的描述信息是否正确
    expect(rootContainer.baseElement?.querySelector('.ant-pro-form-login-desc')?.textContent).toBe(
      'Ant Design is the most influential web design specification in Xihu district',
    );

    // 生成并保存当前页面的快照
    expect(rootContainer.asFragment()).toMatchSnapshot();

    // 卸载渲染的组件
    rootContainer.unmount();
  });

  /**
   * 测试登录功能是否成功
   */
  it('should login success', async () => {
    const historyRef = React.createRef<any>();
    const rootContainer = render(
      <TestBrowser
        historyRef={historyRef}
        location={{
          pathname: '/user/login',
        }}
      />,
    );

    // 等待页面加载完成，确保页面中包含 'Ant Design' 文本
    await rootContainer.findAllByText('Ant Design');

    // 找到用户名输入框
    const userNameInput = await rootContainer.findByPlaceholderText('Please input Username');

    // 模拟输入用户名
    act(() => {
      fireEvent.change(userNameInput, { target: { value: 'admin' } });
    });

    // 找到密码输入框
    const passwordInput = await rootContainer.findByPlaceholderText('Please input Password');

    // 模拟输入密码
    act(() => {
      fireEvent.change(passwordInput, { target: { value: 'ant.design' } });
    });

    // 找到登录按钮并点击
    await (await rootContainer.findByText('Login')).click();

    // 等待接口返回结果
    await waitTime(5000);

    // 等待页面加载完成，确保页面中包含 '一平管理系统' 文本
    await rootContainer.findAllByText('一平管理系统');

    // 生成并保存当前页面的快照
    expect(rootContainer.asFragment()).toMatchSnapshot();

    // 等待一段时间
    await waitTime(2000);

    // 卸载渲染的组件
    rootContainer.unmount();
  });
});
