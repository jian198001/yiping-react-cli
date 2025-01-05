import type { Request, Response } from 'express';
import mockjs from 'mockjs';

/**
 * 获取标签数据
 * @param {Request} req - Express 请求对象
 * @param {Response} res - Express 响应对象
 * @returns {void}
 */
const getTags = (_: Request, res: Response) => {
  // 返回包含标签数据的 JSON 响应
  return res.json({
    data: mockjs.mock({
      // 生成100个标签对象的数组
      'list|100': [
        {
          // 随机生成城市名称作为标签名
          name: '@city',
          // 生成1到100之间的随机数作为标签值
          'value|1-100': 150,
          // 生成0到2之间的随机数作为标签类型
          'type|0-2': 1,
        },
      ],
    }),
  });
};

export default {
  // 定义获取标签数据的API路由
  'GET  /api/tags': getTags,
};
