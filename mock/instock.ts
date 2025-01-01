import { Request, Response } from 'express';

const page = (req: Request, res: Response) => {
  res.json({
    code: 0,
    message: '',
    data: [
      { id: '123', materialName: '测试物料名称', sku:'测试规格', quantity: 15, consumeTime: null,}, { id: '321', materialName: '试验溶剂', sku:'T01', quantity: 5, consumeTime: null,},
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
    'GET /api/staff/web/userCenter/material/instock/page.json': page,
    'GET /api/staff/web/userCenter/material/instock/getById.json': getById,
  }
  