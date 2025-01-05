// 导入 @umijs/max/test 中的 configUmiAlias 和 createConfig 函数
import { configUmiAlias, createConfig } from '@umijs/max/test';

/**
 * Jest 配置函数
 * @returns Jest 配置对象
 */
export default async () => {
  // 使用 configUmiAlias 函数配置 UMI 别名，并传入 createConfig 函数的返回值
  const config = await configUmiAlias({
    // 使用 createConfig 函数创建 Jest 配置对象，指定目标为浏览器
    ...createConfig({
      target: 'browser',
    }),
  });
  // 返回配置对象
  return {
    // 合并原始配置对象
    ...config,
    // 配置测试环境选项
    testEnvironmentOptions: {
      // 合并原始测试环境选项
      ...(config?.testEnvironmentOptions || {}),
      // 设置测试环境的 URL
      url: 'http://localhost:8000',
    },
    // 配置测试文件
    setupFiles: [
      // 合并原始测试文件
      ...(config.setupFiles || []),
      // 添加自定义测试文件
      './tests/setupTests.jsx',
    ],
    // 配置全局变量
    globals: {
      // 合并原始全局变量
      ...config.globals,
      // 设置 localStorage 为 null
      localStorage: null,
    },
  };
};
