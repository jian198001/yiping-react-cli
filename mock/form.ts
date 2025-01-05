import { Request, Response } from 'express';

/**
 * 处理表单页面请求
 * @param {Request} req - Express 请求对象
 * @param {Response} res - Express 响应对象
 * @returns {void}
 */
const page = (req: Request, res: Response) => {
  // 返回包含表单数据的 JSON 响应
  res.json({
    code: 0, // 响应码
    message: '', // 响应消息
    data: [
      { id: '123', title: '标题测试1', materialName: '测试物料名称', sku: '测试规格', quantity: 15, consumeTime: null },
      { id: '321', title: '标题测试2', materialName: '试验溶剂', sku: 'T01', quantity: 5, consumeTime: null },
    ],
  });
};

/**
 * 处理获取表单详情请求
 * @param {Request} req - Express 请求对象
 * @param {Response} res - Express 响应对象
 * @returns {void}
 */
const getById = (_: Request, res: Response) => {
  // 返回包含表单详情的 JSON 响应
  res.json({
    code: 0, // 响应码
    message: '', // 响应消息
    data: {}, // 表单详情数据
  });
};

export default {
  'GET /api/staff/web/userCenter/material/form/page.json': page,
  'GET /api/staff/web/userCenter/material/form/getById.json': getById,
};  