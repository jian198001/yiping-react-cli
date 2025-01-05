import { Request, Response } from 'express';

/**
 * 处理入库页面请求
 * @param {Request} req - Express 请求对象
 * @param {Response} res - Express 响应对象
 * @returns {void}
 */
const page = (req: Request, res: Response) => {
  // 返回包含入库数据的 JSON 响应
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
 * 处理获取入库详情请求
 * @param {Request} req - Express 请求对象
 * @param {Response} res - Express 响应对象
 * @returns {void}
 */
const getById = (_: Request, res: Response) => {
  // 返回包含入库详情的 JSON 响应
  res.json({
    code: 0, // 响应码
    message: '', // 响应消息
    data: {}, // 入库详情数据
  });
};

export default {
  'GET /api/staff/web/userCenter/material/instock/page.json': page,
  'GET /api/staff/web/userCenter/material/instock/getById.json': getById,
};  