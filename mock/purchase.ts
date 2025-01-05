import { Request, Response } from 'express';

/**
 * 处理采购页面请求
 * @param {Request} req - Express 请求对象
 * @param {Response} res - Express 响应对象
 * @returns {void}
 */
const page = (req: Request, res: Response) => {
  // 返回包含采购数据的 JSON 响应
  res.json({
    code: 0, // 响应码
    message: '', // 响应消息
    data: [
      { id: '123', title: '测试标题', detailCount: 0, tradeState: 'edit' },
      { id: '321', title: '溶剂采购单', detailCount: 3, tradeState: 'submit' },
    ],
  });
};

/**
 * 处理获取采购详情请求
 * @param {Request} req - Express 请求对象
 * @param {Response} res - Express 响应对象
 * @returns {void}
 */
const getById = (_: Request, res: Response) => {
  // 返回包含采购详情的 JSON 响应
  res.json({
    code: 0, // 响应码
    message: '', // 响应消息
    data: {}, // 采购详情数据
  });
};

/**
 * 处理采购页面子项请求
 * @param {Request} req - Express 请求对象
 * @param {Response} res - Express 响应对象
 * @returns {void}
 */
const pageItem = (req: Request, res: Response) => {
  // 返回包含采购页面子项数据的 JSON 响应
  res.json({
    code: 0, // 响应码
    message: '', // 响应消息
    data: [
      { id: '123', materialName: '测试物料名称', sku: '测试规格', quantity: 15, consumeTime: null },
      { id: '321', materialName: '试验溶剂', sku: 'T01', quantity: 5, consumeTime: null },
    ],
  });
};

export default {
  'GET /api/staff/web/userCenter/material/purchase/page.json': page,
  'GET /api/staff/web/userCenter/material/purchase/getById.json': getById,
  'GET /api/staff/web/userCenter/material/purchase/pageItem.json': pageItem,
};