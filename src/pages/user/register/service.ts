// 导入 umijs/max 中的 request 函数，用于发送网络请求
import { request } from '@umijs/max';

/**
 * 定义状态类型
 * @interface StateType
 * @property {('ok' | 'error')} [status] - 状态，可以是 'ok' 或 'error'
 * @property {('user' | 'guest' | 'admin')} [currentAuthority] - 当前权限，可以是 'user'、'guest' 或 'admin'
 */
export interface StateType {
  // 可选的状态，值为 'ok' 或 'error'
  status?: 'ok' | 'error';
  // 可选的当前权限，值为 'user'、'guest' 或 'admin'
  currentAuthority?: 'user' | 'guest' | 'admin';
}

/**
 * 用户注册参数类型
 * @interface UserRegisterParams
 * @property {string} mail - 邮箱地址
 * @property {string} password - 密码
 * @property {string} confirm - 确认密码
 * @property {string} mobile - 手机号码
 * @property {string} captcha - 验证码
 * @property {string} prefix - 前缀
 */
export interface UserRegisterParams {
  // 用户邮箱
  mail: string;
  // 用户密码
  password: string;
  // 确认密码
  confirm: string;
  // 用户手机号码
  mobile: string;
  // 验证码
  captcha: string;
  // 前缀
  prefix: string;
}

/**
 * 模拟用户注册函数
 * @async
 * @function fakeRegister
 * @param {UserRegisterParams} params - 用户注册参数
 * @returns {Promise} 返回一个 Promise，用于处理注册请求
 */
export async function fakeRegister(params: UserRegisterParams) {
  // 发送 POST 请求到 /api/register 端点，传递注册参数
  return request('/api/register', {
    // 请求方法为 POST
    method: 'POST',
    // 请求体数据为传入的参数
    data: params,
  });
}
