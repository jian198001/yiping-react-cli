
import { Request, Response } from 'express';

const login = (req: Request, res: Response) => {
  res.json({
    code: 0,
    message: '',
    data: [
      {
        accessToken: 'abc',
      }
    ]
    })
}

export default {
    'POST /api/staff/web/frontPage/passport/login.json': login,
    'GET /api/staff/web/frontPage/init': login,
  }