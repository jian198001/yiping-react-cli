"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[977],{35040:function(se,F,e){e.r(F),e.d(F,{default:function(){return pe}});var K=e(15009),o=e.n(K),k=e(99289),f=e.n(k),U=e(19632),W=e.n(U),L=e(5574),R=e.n(L),A=e(97857),P=e.n(A),$=e(37476),Z=e(26855),r=e(2453),n=e(12578);function oe(l,s,a){return G.apply(this,arguments)}function G(){return G=f()(o()().mark(function l(s,a,c){var u;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u="/staff/web/userCenter/trade/merchant/page.json",t.abrupt("return",n.request===null||n.request===void 0?void 0:(0,n.request)(u,{method:"GET",params:{params:s,sort:a,filter:c}}));case 2:case"end":return t.stop()}},l)})),G.apply(this,arguments)}function H(l){return Y.apply(this,arguments)}function Y(){return Y=f()(o()().mark(function l(s){var a;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return a="/staff/web/userCenter/trade/merchant/update.json",u.abrupt("return",n.request===null||n.request===void 0?void 0:(0,n.request)(a,{method:"POST",data:s}));case 2:case"end":return u.stop()}},l)})),Y.apply(this,arguments)}function z(l){return N.apply(this,arguments)}function N(){return N=f()(o()().mark(function l(s){var a;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return a="/staff/web/userCenter/trade/merchant/getById.json",u.abrupt("return",n.request===null||n.request===void 0?void 0:(0,n.request)(a,{method:"GET",params:{id:s}}));case 2:case"end":return u.stop()}},l)})),N.apply(this,arguments)}function de(l){return J.apply(this,arguments)}function J(){return J=f()(o()().mark(function l(s){var a;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return a="/staff/web/userCenter/trade/merchant/del.json",u.abrupt("return",n.request===null||n.request===void 0?void 0:(0,n.request)(a,{method:"POST",data:P()({},s)}));case 2:case"end":return u.stop()}},l)})),J.apply(this,arguments)}function fe(){return Q.apply(this,arguments)}function Q(){return Q=_asyncToGenerator(_regeneratorRuntime().mark(function l(){var s;return _regeneratorRuntime().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return s="/staff/web/userCenter/trade/merchant/page.json",c.abrupt("return",request==null?void 0:request(s,{method:"GET",params:{pageNum:1,pageSize:0}}));case 2:case"end":return c.stop()}},l)})),Q.apply(this,arguments)}var h=e(67294),ae=[{valueType:"group",columns:[{title:"\u540D \u79F0",dataIndex:"name",sorter:!0,width:"md",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898"}]}},{title:"\u7F16 \u53F7",dataIndex:"code",sorter:!0,width:"md"}]},{valueType:"group",columns:[{title:"\u5730 \u533A",dataIndex:"name",sorter:!0,width:"md",valueType:"cascader",hideInTable:!0,hideInSearch:!0},{title:"\u8BE6\u7EC6\u5730\u5740",dataIndex:"code",sorter:!0,width:"lg",hideInTable:!0,hideInSearch:!0}]},{valueType:"group",columns:[{title:"\u7ECF \u5EA6",dataIndex:"lat",sorter:!0,valueType:"digit",width:"md",hideInTable:!0,hideInSearch:!0,tooltip:"\u6570\u5B57"},{title:"\u7EAC \u5EA6",dataIndex:"lng",sorter:!0,valueType:"digit",width:"md",hideInTable:!0,hideInSearch:!0,tooltip:"\u6570\u5B57"}]},{valueType:"group",columns:[{title:"\u8D2D\u7269\u8F66",dataIndex:"cartStr",sorter:!0,valueType:"select",valueEnum:{1:"\u5F00\u542F",0:"\u5173\u95ED"},initialValue:"0"}]},{valueType:"group",columns:[{title:"\u7269\u6D41\u8303\u56F4",dataIndex:"deliveryAreaStr",sorter:!0,valueType:"select",valueEnum:{locale:"\u4EC5\u652F\u6301\u540C\u57CE",global:"\u652F\u6301\u5168\u56FD"},width:"sm",initialValue:"global"},{title:"\u95E8\u5E97\u81EA\u63D0",dataIndex:"obsStr",sorter:!0,valueType:"select",valueEnum:{1:"\u652F\u6301",0:"\u4E0D\u652F\u6301"},initialValue:"0"}]},{valueType:"group",columns:[{title:"\u8BA2\u5355\u9000\u6B3E\u9009\u9879",dataIndex:"refundStr",sorter:!0,valueType:"select",valueEnum:{0:"\u6240\u6709\u8BA2\u5355\u5747\u9700\u4EBA\u5DE5\u5BA1\u6838\u540E\u624D\u53EF\u9000\u6B3E",1:'"\u5DF2\u652F\u4ED8\u672A\u53D1\u8D27"\u8BA2\u5355\u4E0D\u9700\u4EBA\u5DE5\u5BA1\u6838\u76F4\u63A5\u9000\u6B3E',2:'"\u5DF2\u652F\u4ED8\u672A\u6838\u9500"\u865A\u62DF\u51ED\u8BC1\u8BA2\u5355\u4E0D\u9700\u4EBA\u5DE5\u5BA1\u6838\u76F4\u63A5\u9000\u6B3E'},initialValue:"0",width:"lg"}]},{valueType:"group",columns:[{title:"\u975E\u8425\u4E1A\u65F6\u95F4\u64CD\u4F5C",dataIndex:"nonBusinessHoursShowStr",sorter:!0,valueType:"select",valueEnum:{order:"\u5546\u54C1\u53EF\u4E0B\u5355,\u4E0B\u6B21\u8425\u4E1A\u65F6\u95F4\u518D\u914D\u9001",goods:"\u5546\u54C1\u53EF\u5C55\u793A,\u4E0D\u53EF\u4E0B\u5355"},initialValue:"order",width:"md"}]},{valueType:"group",columns:[{title:"\u5FAE\u4FE1\u5546\u6237\u53F7",dataIndex:"appIdWxpay",sorter:!0,width:"md"}]},{valueType:"group",columns:[{title:"\u5FAE\u4FE1AppId",dataIndex:"appIdWxpay",sorter:!1,width:"md"},{title:"\u5FAE\u4FE1appSecret",dataIndex:"appSecret",sorter:!1,width:"md",hideInTable:!0,hideInSearch:!0}]},{valueType:"group",columns:[{title:"\u5FAE\u4FE1\u652F\u4ED8API\u5BC6\u94A5",dataIndex:"mchKey",sorter:!1,width:"md",hideInTable:!0,hideInSearch:!0},{title:"\u5FAE\u4FE1API\u6570\u5B57\u8BC1\u4E66",dataIndex:"keyFiles",sorter:!1,width:"md",hideInTable:!0,hideInSearch:!0},{title:"\u5FAE\u4FE1API\u79C1\u94A5\u6587\u4EF6",dataIndex:"keyFiles",sorter:!1,width:"md",hideInTable:!0,hideInSearch:!0}]},{valueType:"group",columns:[{title:"\u652F\u4ED8\u5B9DAppId",dataIndex:"appIdAlipay",sorter:!0,width:"md"},{title:"\u652F\u4ED8\u5B9D\u79C1\u94A5",dataIndex:"merchantPrivateKey",sorter:!1,width:"md",hideInTable:!0,hideInSearch:!0},{title:"\u652F\u4ED8\u5B9D\u8BC1\u4E66",dataIndex:"alipayFiles",sorter:!1,width:"md",hideInTable:!0,hideInSearch:!0}]},{valueType:"group",columns:[{title:"\u5907 \u6CE8",dataIndex:"remark",valueType:"textarea",sorter:!1,width:"lg",hideInTable:!0,hideInSearch:!0}]}],m=e(85893),ue=function(l){var s,a=(s=h.useRef)===null||s===void 0?void 0:s(),c=(0,h.useState)(!1),u=R()(c,2),b=u[0],t=u[1],X=function(){var x=f()(o()().mark(function p(){var g,S,i,O,M;return o()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:if(!_){I.next=7;break}return I.next=3,z==null?void 0:z(_);case 3:if(i=I.sent,!(i!=null&&i.data)){I.next=6;break}return I.abrupt("return",a==null||(O=a.current)===null||O===void 0||(M=O.setFieldsValue)===null||M===void 0?void 0:M.call(O,P()({},i==null?void 0:i.data)));case 6:return I.abrupt("return",a==null||(g=a.current)===null||g===void 0||(S=g.setFieldsValue)===null||S===void 0?void 0:S.call(g,{id:_}));case 7:case"end":return I.stop()}},p)}));return function(){return x.apply(this,arguments)}}(),B={id:"",title:""},_=l.id,C=l.trigger,j=l.onOk,q=function(){var x=f()(o()().mark(function p(g){var S,i,O;return o()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return t==null||t(!0),g=P()(P()({},g),{},{id:_}),y.next=4,H==null?void 0:H(g);case 4:if(i=y.sent,(i==null?void 0:i.code)===0){y.next=9;break}return r.ZP===null||r.ZP===void 0||(O=r.ZP.error)===null||O===void 0||O.call(r.ZP,i==null?void 0:i.message),t==null||t(!1),y.abrupt("return",!1);case 9:return r.ZP===null||r.ZP===void 0||(S=r.ZP.success)===null||S===void 0||S.call(r.ZP,"\u63D0\u4EA4\u6210\u529F"),j==null||j(),t==null||t(!1),t==null||t(!1),y.abrupt("return",!0);case 14:case"end":return y.stop()}},p)}));return function(g){return x.apply(this,arguments)}}();return(0,m.jsx)($.Y,{formRef:a,onFinish:q,modalProps:{destroyOnClose:!0,okButtonProps:{loading:b}},onOpenChange:X,initialValues:B,title:"\u7F16\u8F91\u4FE1\u606F",trigger:C,children:(0,m.jsx)(Z.Z,{layoutType:"Embed",columns:ae})})},ve=e(97131),ce=e(30077),V=e(28248),le=e(14726),E=e(19515),pe=function(){var l,s,a=(0,h.useState)(""),c=R()(a,2),u=c[0],b=c[1],t=(l=h.useRef)===null||l===void 0?void 0:l(),X=h.useState===null||h.useState===void 0?void 0:(0,h.useState)([]),B=R()(X,2),_=B[0],C=B[1],j=n.useIntl===null||n.useIntl===void 0?void 0:(0,n.useIntl)(),q=r.ZP===null||r.ZP===void 0||(s=r.ZP.useMessage)===null||s===void 0?void 0:s.call(r.ZP),x=R()(q,2),p=x[0],g=x[1],S=n.useRequest===null||n.useRequest===void 0?void 0:(0,n.useRequest)(de,{manual:!0,onSuccess:function(){var d,v,T;C==null||C([]),t==null||(d=t.current)===null||d===void 0||(v=d.reload)===null||v===void 0||v.call(d),p==null||(T=p.success)===null||T===void 0||T.call(p,"\u5220\u9664\u64CD\u4F5C\u6210\u529F")},onError:function(){var d;p==null||(d=p.error)===null||d===void 0||d.call(p,"\u5220\u9664\u64CD\u4F5C\u5931\u8D25,\u8BF7\u91CD\u8BD5")}}),i=S.run,O=S.loading,M=[].concat(W()(E.P===null||E.P===void 0?void 0:(0,E.P)(ae)),[{title:(0,m.jsx)(n.FormattedMessage,{id:"pages.searchTable.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:function(d,v){var T;return[(0,m.jsx)(ue,{trigger:(0,m.jsx)("a",{children:"\u7F16 \u8F91"}),id:v==null?void 0:v.id,onOk:t==null||(T=t.current)===null||T===void 0?void 0:T.reload})]}}]),y=(0,h.useCallback)(function(){var w=f()(o()().mark(function d(v){var T;return o()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:V.Z===null||V.Z===void 0||(T=V.Z.confirm)===null||T===void 0||T.call(V.Z,{title:"\u64CD\u4F5C\u63D0\u793A",content:"\u662F\u5426\u786E\u5B9A\u5220\u9664\u8FD9"+(v==null?void 0:v.length)+"\u9879\u4FE1\u606F?\u5220\u9664\u540E\u5C06\u4E0D\u53EF\u6062\u590D",onOk:function(){var re;(re=function(){var me=f()(o()().mark(function ie(){var te;return o()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,i==null?void 0:i(v==null||(te=v.map)===null||te===void 0?void 0:te.call(v,function(ne){return ne==null?void 0:ne.id}));case 2:case"end":return D.stop()}},ie)}));return function(){return me.apply(this,arguments)}}())===null||re===void 0||re()}});case 1:case"end":return ee.stop()}},d)}));return function(d){return w.apply(this,arguments)}}(),[i]),I=function(){var d;b==null||b(E.V===null||E.V===void 0?void 0:(0,E.V)()),t==null||(d=t.current)===null||d===void 0||d.reload()};return h.useEffect===null||h.useEffect===void 0||(0,h.useEffect)(function(){b==null||b(E.V===null||E.V===void 0?void 0:(0,E.V)())},[]),(0,m.jsxs)(ve._z,{children:[g,(0,m.jsx)(ce.Z,{headerTitle:j==null?void 0:j.formatMessage({id:"pages.searchTable.title",defaultMessage:"\u67E5\u8BE2\u8868\u683C"}),actionRef:t,rowKey:"id",toolBarRender:function(){return[(0,m.jsxs)(m.Fragment,{children:[" ",(0,m.jsx)(le.ZP,{danger:!0,disabled:!_||!_.length,onClick:function(){y(_)},children:"\u5220 \u9664"}),(0,m.jsx)(ue,{trigger:(0,m.jsx)(le.ZP,{type:"primary",children:" \u65B0 \u5EFA "}),id:u,onOk:I})]})]},request:oe,columns:M,rowSelection:{onChange:function(d,v){C(v)}}})]})}},19515:function(se,F,e){e.d(F,{P:function(){return R},V:function(){return L}});var K=e(64599),o=e.n(K),k=e(19632),f=e.n(k),U=e(27484),W=e.n(U);function L(){var A=W()().format("YYYYMMDDHHmmssSSS").toString();return A}function R(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],P=f()(A),$=o()(P),Z;try{for($.s();!(Z=$.n()).done;){var r=Z.value;!(r!=null&&r.valueType)||(r==null?void 0:r.valueType)!=="group"||!(r!=null&&r.columns)||!(r!=null&&r.columns.length)||P.push.apply(P,f()(r==null?void 0:r.columns))}}catch(n){$.e(n)}finally{$.f()}return P.filter(function(n){return n.valueType!=="group"})}}}]);