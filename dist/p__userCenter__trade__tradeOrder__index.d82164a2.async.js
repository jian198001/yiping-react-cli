"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[458],{26441:function(ie,_,e){e.r(_),e.d(_,{default:function(){return fe}});var V=e(15009),d=e.n(V),w=e(99289),p=e.n(w),U=e(19632),L=e.n(U),Y=e(5574),F=e.n(Y),x=e(97857),T=e.n(x),$=e(37476),D=e(26855),r=e(2453),l=e(12578);function oe(a,s,t){return K.apply(this,arguments)}function K(){return K=p()(d()().mark(function a(s,t,f){var n;return d()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return n="/staff/web/userCenter/trade/tradeOrder/page.json",i.abrupt("return",l.request===null||l.request===void 0?void 0:(0,l.request)(n,{method:"GET",params:{params:s,sort:t,filter:f}}));case 2:case"end":return i.stop()}},a)})),K.apply(this,arguments)}function G(a){return W.apply(this,arguments)}function W(){return W=p()(d()().mark(function a(s){var t;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t="/staff/web/userCenter/trade/tradeOrder/update.json",n.abrupt("return",l.request===null||l.request===void 0?void 0:(0,l.request)(t,{method:"POST",data:s}));case 2:case"end":return n.stop()}},a)})),W.apply(this,arguments)}function H(a){return k.apply(this,arguments)}function k(){return k=p()(d()().mark(function a(s){var t;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t="/staff/web/userCenter/trade/tradeOrder/getById.json",n.abrupt("return",l.request===null||l.request===void 0?void 0:(0,l.request)(t,{method:"GET",params:{id:s}}));case 2:case"end":return n.stop()}},a)})),k.apply(this,arguments)}function N(a){return z.apply(this,arguments)}function z(){return z=p()(d()().mark(function a(s){var t;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t="/staff/web/userCenter/trade/tradeOrder/del.json",n.abrupt("return",l.request===null||l.request===void 0?void 0:(0,l.request)(t,{method:"POST",data:T()({},s)}));case 2:case"end":return n.stop()}},a)})),z.apply(this,arguments)}function pe(){return Q.apply(this,arguments)}function Q(){return Q=_asyncToGenerator(_regeneratorRuntime().mark(function a(){var s;return _regeneratorRuntime().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return s="/staff/web/userCenter/trade/tradeOrder/page.json",f.abrupt("return",request==null?void 0:request(s,{method:"GET",params:{pageNum:1,pageSize:0}}));case 2:case"end":return f.stop()}},a)})),Q.apply(this,arguments)}var h=e(67294),le=[{valueType:"group",columns:[{title:"\u7F16 \u53F7",dataIndex:"outTradeNo",sorter:!0,hideInForm:!0},{title:"\u4E0B\u5355\u65F6\u95F4",dataIndex:"createDate",valueType:"datetime",sorter:!0,hideInSearch:!0,hideInForm:!0},{title:"\u4E0B\u5355\u65F6\u95F4",dataIndex:"createDate",valueType:"dateRange",sorter:!0,hideInTable:!0,hideInForm:!0},{title:"\u603B\u91D1\u989D(\u5143)",dataIndex:"totalAmount",sorter:!0,valueType:"digitRange",hideInTable:!0,hideInForm:!0},{title:"\u603B\u91D1\u989D(\u5143)",dataIndex:"totalAmount",sorter:!0,valueType:"money",hideInSearch:!0},{title:"\u4EA4\u6613\u72B6\u6001",dataIndex:"tradeStateCn",sorter:!0,valueType:"select",valueEnum:{NOTPAY:{text:"\u5F85\u4ED8\u6B3E"},SUCCESS:{text:"\u5DF2\u4ED8\u6B3E"},DELIVERY:{text:"\u5DF2\u53D1\u8D27"}},hideInForm:!0},{title:"\u7C7B \u578B",dataIndex:"countItem",sorter:!0,valueType:"select",valueEnum:{NOTPAY:{text:"\u5F85\u4ED8\u6B3E"},SUCCESS:{text:"\u5DF2\u4ED8\u6B3E"},DELIVERY:{text:"\u5DF2\u53D1\u8D27"}},hideInForm:!0},{title:"\u5546\u54C1\u603B\u6570\u91CF",dataIndex:"sumQuantity",sorter:!0,hideInSearch:!0,valueType:"digit",hideInForm:!0,tooltip:"\u96F6\u6216\u6B63\u6570"},{title:"\u5546\u54C1\u603B\u6570\u91CF",dataIndex:"sumQuantity",sorter:!0,hideInTable:!0,valueType:"digitRange",hideInForm:!0},{title:"\u652F\u4ED8\u65B9\u5F0F",dataIndex:"payType",sorter:!0,valueType:"select",valueEnum:{0:{text:"\u5F85\u4ED8\u6B3E"},alipay:{text:"\u652F\u4ED8\u5B9D"},wxpay:{text:"\u5FAE\u4FE1\u652F\u4ED8"},balance:{text:"\u4F59\u989D\u652F\u4ED8"}},hideInForm:!0}]}],c=e(85893),de=function(a){var s,t=(s=h.useRef)===null||s===void 0?void 0:s(),f=(0,h.useState)(!1),n=F()(f,2),O=n[0],i=n[1],J=function(){var M=p()(d()().mark(function m(){var g,P,v,y,I;return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!C){u.next=7;break}return u.next=3,H==null?void 0:H(C);case 3:if(v=u.sent,!(v!=null&&v.data)){u.next=6;break}return u.abrupt("return",t==null||(y=t.current)===null||y===void 0||(I=y.setFieldsValue)===null||I===void 0?void 0:I.call(y,T()({},v==null?void 0:v.data)));case 6:return u.abrupt("return",t==null||(g=t.current)===null||g===void 0||(P=g.setFieldsValue)===null||P===void 0?void 0:P.call(g,{id:C}));case 7:case"end":return u.stop()}},m)}));return function(){return M.apply(this,arguments)}}(),A={id:"",title:""},C=a.id,b=a.trigger,j=a.onOk,X=function(){var M=p()(d()().mark(function m(g){var P,v,y;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return g=T()(T()({},g),{},{id:C}),o.next=3,G==null?void 0:G(g);case 3:if(v=o.sent,(v==null?void 0:v.code)===0){o.next=8;break}return r.ZP===null||r.ZP===void 0||(y=r.ZP.error)===null||y===void 0||y.call(r.ZP,v==null?void 0:v.message),i==null||i(!1),o.abrupt("return",!1);case 8:return r.ZP===null||r.ZP===void 0||(P=r.ZP.success)===null||P===void 0||P.call(r.ZP,"\u63D0\u4EA4\u6210\u529F"),j==null||j(),i==null||i(!1),o.abrupt("return",!0);case 12:case"end":return o.stop()}},m)}));return function(g){return M.apply(this,arguments)}}();return(0,c.jsx)($.Y,{formRef:t,onFinish:X,modalProps:{destroyOnClose:!0,okButtonProps:{loading:O}},onOpenChange:J,initialValues:A,title:"\u7F16\u8F91\u4FE1\u606F",trigger:b,children:(0,c.jsx)(D.Z,{layoutType:"Embed",columns:le})})},ve=e(97131),ce=e(30077),Z=e(28248),se=e(14726),S=e(19515),fe=function(){var a,s,t=(0,h.useState)(""),f=F()(t,2),n=f[0],O=f[1],i=(a=h.useRef)===null||a===void 0?void 0:a(),J=h.useState===null||h.useState===void 0?void 0:(0,h.useState)([]),A=F()(J,2),C=A[0],b=A[1],j=l.useIntl===null||l.useIntl===void 0?void 0:(0,l.useIntl)(),X=r.ZP===null||r.ZP===void 0||(s=r.ZP.useMessage)===null||s===void 0?void 0:s.call(r.ZP),M=F()(X,2),m=M[0],g=M[1],P=[].concat(L()(S.P===null||S.P===void 0?void 0:(0,S.P)(le)),[{title:(0,c.jsx)(l.FormattedMessage,{id:"pages.searchTable.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:function(o,u){return[(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("a",{children:"\u8BE6 \u60C5"}),(0,c.jsx)("a",{children:"\u4FEE\u6539\u603B\u91D1\u989D"}),(0,c.jsx)("a",{children:"\u9000 \u6B3E"})]})]}}]),v=function(){var I=p()(d()().mark(function o(u){var q;return d()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:Z.Z===null||Z.Z===void 0||(q=Z.Z.confirm)===null||q===void 0||q.call(Z.Z,{title:"\u64CD\u4F5C\u63D0\u793A",content:"\u662F\u5426\u786E\u5B9A\u5220\u9664\u8FD9"+(u==null?void 0:u.length)+"\u9879\u4FE1\u606F?\u5220\u9664\u540E\u5C06\u4E0D\u53EF\u6062\u590D",onOk:function(){p()(d()().mark(function me(){var re,E,te,B,ne,ae;return d()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,N==null?void 0:N(u==null||(re=u.map)===null||re===void 0?void 0:re.call(u,function(ue){return ue==null?void 0:ue.id}));case 2:if(E=R.sent,(E==null?void 0:E.code)===0){R.next=7;break}return R.abrupt("return",m==null||(te=m.error)===null||te===void 0?void 0:te.call(m,(E==null?void 0:E.message)||"\u5220\u9664\u64CD\u4F5C\u5931\u8D25,\u8BF7\u91CD\u8BD5"));case 7:b==null||b([]),i==null||(B=i.current)===null||B===void 0||(ne=B.reload)===null||ne===void 0||ne.call(B),m==null||(ae=m.success)===null||ae===void 0||ae.call(m,(E==null?void 0:E.message)||"\u5220\u9664\u64CD\u4F5C\u6210\u529F");case 10:case"end":return R.stop()}},me)}))()}});case 1:case"end":return ee.stop()}},o)}));return function(u){return I.apply(this,arguments)}}(),y=function(){var o;O==null||O(S.V===null||S.V===void 0?void 0:(0,S.V)()),i==null||(o=i.current)===null||o===void 0||o.reload()};return h.useEffect===null||h.useEffect===void 0||(0,h.useEffect)(function(){O==null||O(S.V===null||S.V===void 0?void 0:(0,S.V)())},[]),(0,c.jsxs)(ve._z,{children:[g,(0,c.jsx)(ce.Z,{headerTitle:j==null?void 0:j.formatMessage({id:"pages.searchTable.title",defaultMessage:"\u67E5\u8BE2\u8868\u683C"}),actionRef:i,rowKey:"id",toolBarRender:function(){return[(0,c.jsxs)(c.Fragment,{children:[" ",(0,c.jsx)(se.ZP,{danger:!0,disabled:!C||!C.length,onClick:function(){v(C)},children:"\u5220 \u9664"}),(0,c.jsx)(de,{trigger:(0,c.jsx)(se.ZP,{type:"primary",children:" \u6536 \u94F6 "}),id:n,onOk:y})]})]},request:oe,columns:P,rowSelection:{onChange:function(o,u){b(u)}}})]})}},19515:function(ie,_,e){e.d(_,{P:function(){return F},V:function(){return Y}});var V=e(64599),d=e.n(V),w=e(19632),p=e.n(w),U=e(27484),L=e.n(U);function Y(){var x=L()().format("YYYYMMDDHHmmssSSS").toString();return x}function F(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],T=p()(x),$=d()(T),D;try{for($.s();!(D=$.n()).done;){var r=D.value;!(r!=null&&r.valueType)||(r==null?void 0:r.valueType)!=="group"||!(r!=null&&r.columns)||!(r!=null&&r.columns.length)||T.push.apply(T,p()(r==null?void 0:r.columns))}}catch(l){$.e(l)}finally{$.f()}return T.filter(function(l){return l.valueType!=="group"})}}}]);