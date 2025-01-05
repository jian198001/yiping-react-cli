import { Request, Response } from 'express';

/**
 * 处理用户页面请求
 * @param {Request} req - Express 请求对象
 * @param {Response} res - Express 响应对象
 * @returns {void}
 */
const page = (req: Request, res: Response) => {
  res.json({
    code: 0,
    message: '',
    data: [
      { id: '123', username: '刘德华', title: '标题测试1', materialName: '测试物料名称', sku:'测试规格', quantity: 15, consumeTime: null,}, 
      { id: '321', username: '张学友',  title: '标题测试2', materialName: '试验溶剂', sku:'T01', quantity: 5, consumeTime: null,},
    ]
  })
}

/**
 * 处理用户详情请求
 * @param {Request} req - Express 请求对象
 * @param {Response} res - Express 响应对象
 * @returns {void}
 */
const getById = (_: Request, res: Response, ) =>{

  res.json({
    code: 0,
    message: '',
    data: {}
  })

}

export default {
    'GET /api/staff/web/userCenter/auth/user/page.json': page,
    'GET /api/staff/web/userCenter/auth/user/getById.json': getById,
  }
  