import { Request, Response } from 'express';

/**
 * 处理库存页面请求
 * @param {Request} req - Express 请求对象
 * @param {Response} res - Express 响应对象
 * @returns {void}
 */
const page = (req: Request, res: Response) => {
  // 返回包含库存数据的 JSON 响应
  res.json({
    code: 0, // 响应码
    message: '', // 响应消息
    data: [
      { id: '123', materialName: '测试物料名称', sku: '测试规格', quantity: 15, consumeTime: null, exp: null },
      { id: '321', materialName: '试验溶剂', sku: 'T01', quantity: 5, consumeTime: null, exp: null },
    ],
  });
};

export default {
  'GET /api/staff/web/userCenter/material/stock/page.json': page,
};  