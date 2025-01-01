import UpdatePwd from '@/pages/userCenter/auth/user/UpdatePwd'
import { List } from 'antd'
import React from 'react'

type Unpacked<T> = T extends (infer U)[] ? U : T

const passwordStrength = {
  strong: <span className="strong">强</span>,
  medium: <span className="medium">中</span>,
  weak: <span className="weak">弱 Weak</span>,
}

const SecurityView: React.FC = () => {
  const getData = () => [
    {
      title: '账户密码',
      description: (
        <>
          当前密码强度：
          {passwordStrength?.strong}
        </>
      ),
      actions: [<UpdatePwd trigger={<a>修 改</a>}></UpdatePwd>],
    },
  ]

  const data = getData()
  return (
    <>
      <List<Unpacked<typeof data>>
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item actions={item.actions}>
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
    </>
  )
}

export default SecurityView
