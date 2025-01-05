import { Request, Response } from 'express';

/**
 * 处理角色页面请求
 * @param {Request} req - Express 请求对象
 * @param {Response} res - Express 响应对象
 * @returns {void}
 */
const page = (req: Request, res: Response) => {
  // 返回包含角色数据的 JSON 响应
  res.json({
    code: 0, // 响应码
    message: '', // 响应消息
    data: [
      { id: '123', name: '领用人员', title: '标题测试1', materialName: '测试物料名称', sku: '测试规格', quantity: 15, consumeTime: null },
      { id: '321', name: '耗材管理员', title: '标题测试2', materialName: '试验溶剂', sku: 'T01', quantity: 5, consumeTime: null },
    ],
  });
};

/**
 * 处理获取角色详情请求
 * @param {Request} req - Express 请求对象
 * @param {Response} res - Express 响应对象
 * @returns {void}
 */
const getById = (_: Request, res: Response) => {
  // 返回包含角色详情的 JSON 响应
  res.json({
    code: 0, // 响应码
    message: '', // 响应消息
    data: {}, // 角色详情数据
  });
};

export default {
  'GET /api/staff/web/userCenter/auth/role/page.json': page,
  'GET /api/staff/web/userCenter/auth/role/getById.json': getById,
};  