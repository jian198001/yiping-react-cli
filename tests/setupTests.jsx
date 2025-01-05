// 模拟 localStorage 对象
const localStorageMock = {
  // 模拟 getItem 方法
  getItem: jest.fn(),
  // 模拟 setItem 方法
  setItem: jest.fn(),
  // 模拟 removeItem 方法
  removeItem: jest.fn(),
  // 模拟 clear 方法
  clear: jest.fn(),
};

// 将全局 localStorage 对象替换为模拟对象
global.localStorage = localStorageMock;

// 模拟 URL.createObjectURL 方法
Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: jest.fn(),
});

// 模拟 Worker 类
class Worker {
  // 构造函数
  constructor(stringUrl) {
    // 存储 URL
    this.url = stringUrl;
    // 初始化 onmessage 方法
    this.onmessage = () => {};
  }

  // 模拟 postMessage 方法
  postMessage(msg) {
    // 调用 onmessage 方法
    this.onmessage(msg);
  }
}

// 将全局 Worker 对象替换为模拟类
window.Worker = Worker;

/* eslint-disable global-require */
// 如果 window 对象存在
if (typeof window !== 'undefined') {
  // ref: https://github.com/ant-design/ant-design/issues/18774
  // 如果 window.matchMedia 不存在
  if (!window.matchMedia) {
    // 模拟 window.matchMedia 方法
    Object.defineProperty(global.window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: jest.fn(() => ({
        // 默认不匹配
        matches: false,
        // 模拟 addListener 方法
        addListener: jest.fn(),
        // 模拟 removeListener 方法
        removeListener: jest.fn(),
      })),
    });
  }
  // 如果 window.matchMedia 不存在
  if (!window.matchMedia) {
    // 模拟 window.matchMedia 方法
    Object.defineProperty(global.window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: jest.fn((query) => ({
        // 根据查询字符串判断是否匹配
        matches: query.includes('max-width'),
        // 模拟 addListener 方法
        addListener: jest.fn(),
        // 模拟 removeListener 方法
        removeListener: jest.fn(),
      })),
    });
  }
}

// 保存原始的 console.error 方法
const errorLog = console.error;

// 模拟 console.error 方法
Object.defineProperty(global.window.console, 'error', {
  writable: true,
  configurable: true,
  value: (...rest) => {
    // 将参数转换为字符串
    const logStr = rest.join('');
    // 如果日志包含特定的警告信息，则忽略
    if (logStr.includes('Warning: An update to %s inside a test was not wrapped in act(...)')) {
      return;
    }
    // 调用原始的 console.error 方法
    errorLog(...rest);
  },
});
