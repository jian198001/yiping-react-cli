import { Request, Response } from 'express';

/**
 * 根据令牌获取用户信息
 * @param {Request} req - Express 请求对象
 * @param {Response} res - Express 响应对象
 * @returns {void}
 */
const getByToken = (req: Request, res: Response) => {
  // 返回包含用户信息的 JSON 响应
  res.json({
    code: 0, // 响应码
    message: '', // 响应消息
    data: {
      name: 'Serati Ma', // 用户名
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png', // 用户头像
      userid: '00000001', // 用户ID
      email: 'antdesign@alipay.com', // 用户邮箱
      signature: '海纳百川，有容乃大', // 用户签名
      title: '交互专家', // 用户职位
      group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED', // 用户所属群组
      tags: [
        // 用户标签
        {
          key: '0',
          label: '很有想法的',
        },
        {
          key: '1',
          label: '专注设计',
        },
        {
          key: '2',
          label: '辣~',
        },
        {
          key: '3',
          label: '大长腿',
        },
        {
          key: '4',
          label: '川妹子',
        },
        {
          key: '5',
          label: '海纳百川',
        },
      ],
      notifyCount: 12, // 通知数量
      unreadCount: 11, // 未读消息数量
      country: 'China', // 用户所在国家
      geographic: {
        // 用户所在地理位置
        province: {
          label: '浙江省',
          key: '330000',
        },
        city: {
          label: '杭州市',
          key: '330100',
        },
      },
      address: '西湖区工专路 77 号', // 用户地址
      phone: '0752-268888888', // 用户电话
    },
  });
};

export default {
  'GET /api/staff/web/userCenter/auth/user/getByToken.json': getByToken,
};  