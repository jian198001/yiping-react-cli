启动项目
yiping-react-cli 以 Ant Design Pro 作为脚手架，启动和开发与 Ant Design Pro 基本相同。

启动项目
在项目根目录下执行 npm run start, 即可启动项目。

此时访问 http://localhost:8000/ 即可看到界面。

由于默认使用了 user 权限，所以需要使用 admin 登录才能看到全部页面。

MOCK
在很多情况下前端是在后端还没有开发完成之前就开始开发的，这时候我们就需要用到 mock 数据了。yiping-react-cli 中约定了两种 mock 的定义方式。

在根目录的 mock 中接入
在 src/page 中的 mock.ts 的文件中配置
一个标准的 mock 由三部分组成，以 List 配置为例。

export default {
  'GET /api/rule': [{ name: '12' }],
  'POST /api/rule': (req: Request, res: Response, u: string) => {
    res.send({
      success: true,
    });
  },
};
第一部分是 网络请求的 Method 配置，完整的列表可以看这里。一般我们都会使用 GET 和 POST。

第二部分是 URL 也就是我们发起网络请求的地址。一般我们会使用统一的前缀方便代理的使用。

第三部分是 数据处理，我们可以配置一个 JSON, JSON 数据会直接返回。或者是配置一个 function，function 有三个参数 req, res，url 。具体使用方式与 express 相同。数据必须要通过 res.send 来返回。
