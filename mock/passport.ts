import { Request, Response } from 'express';

/**
 * 处理用户登录请求
 * @param {Request} req - Express 请求对象
 * @param {Response} res - Express 响应对象
 * @returns {void}
 */
const login = (req: Request, res: Response) => {
  // 返回包含登录成功信息的 JSON 响应
  res.json({
    code: 0, // 响应码
    message: '', // 响应消息
    data: [
      {
        accessToken: 'abc', // 访问令牌
      },
    ],
  });
};

export default {
  'POST /api/staff/web/frontPage/passport/login.json': login,
  'GET /api/staff/web/frontPage/init': login,
};