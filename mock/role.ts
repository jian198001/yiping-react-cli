import { Request, Response } from 'express';

const page = (req: Request, res: Response) => {
  res.json({
    code: 0,
    message: '',
    data: [
      { id: '123', name: '领用人员', title: '标题测试1', materialName: '测试物料名称', sku:'测试规格', quantity: 15, consumeTime: null,}, { id: '321', name: '耗材管理员',  title: '标题测试2', materialName: '试验溶剂', sku:'T01', quantity: 5, consumeTime: null,},
    ]
    })
}

const getById = (_: Request, res: Response, ) =>{

  res.json({
    code: 0,
    message: '',
    data: {}
    })

}

export default {
    'GET /api/staff/web/userCenter/auth/role/page.json': page,
    'GET /api/staff/web/userCenter/auth/role/getById.json': getById,
  }
  