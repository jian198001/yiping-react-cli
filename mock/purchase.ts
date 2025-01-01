import { Request, Response } from 'express';

const page = (req: Request, res: Response) => {
  res.json({
    code: 0,
    message: '',
    data: [
      { id: '123', title: '测试标题', detailCount: 0, tradeState: 'edit',}, { id: '321', title: '溶剂采购单', detailCount: 3, tradeState: 'submit', },
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

const pageItem = (req: Request, res: Response) => {
  res.json({
    code: 0,
    message: '',
    data: [
      { id: '123', materialName: '测试物料名称', sku:'测试规格', quantity: 15, consumeTime: null,}, { id: '321', materialName: '试验溶剂', sku:'T01', quantity: 5, consumeTime: null,},
    ]
    })
}

export default {
    'GET /api/staff/web/userCenter/material/purchase/page.json': page,
    'GET /api/staff/web/userCenter/material/purchase/getById.json': getById,
    'GET /api/staff/web/userCenter/material/purchase/pageItem.json': pageItem,
}
