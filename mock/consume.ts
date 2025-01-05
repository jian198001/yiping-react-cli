import { Request, Response } from 'express';

/**
 * 处理消费页面请求
 * @param {Request} req - Express 请求对象
 * @param {Response} res - Express 响应对象
 * @returns {void}
 */
const page = (req: Request, res: Response) => {
  // 返回包含消费数据的 JSON 响应
  res.json({
    code: 0, // 响应码
    message: '', // 响应消息
    data: [
      { id: '123', materialName: '测试物料名称', sku: '测试规格', quantity: 15, consumeTime: null },
      { id: '321', materialName: '试验溶剂', sku: 'T01', quantity: 5, consumeTime: null },
    ],
  });
};

/**
 * 处理获取消费详情请求
 * @param {Request} req - Express 请求对象
 * @param {Response} res - Express 响应对象
 * @returns {void}
 */
const getById = (_: Request, res: Response) => {
  // 返回包含消费详情的 JSON 响应
  res.json({
    code: 0, // 响应码
    message: '', // 响应消息
    data: {}, // 消费详情数据
  });
};

export default {
  'GET /api/staff/web/userCenter/material/consume/page.json': page,
  'GET /api/staff/web/userCenter/material/consume/getById.json': getById,
};  