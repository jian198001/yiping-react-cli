"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[58],{92532:function(ue,D,e){e.r(D),e.d(D,{default:function(){return de}});var U=e(15009),o=e.n(U),K=e(99289),g=e.n(K),L=e(19632),k=e.n(L),G=e(5574),b=e.n(G),R=e(97857),E=e.n(R),_=e(37476),B=e(26855),r=e(2453),n=e(12578);function te(a,s,f){return W.apply(this,arguments)}function W(){return W=g()(o()().mark(function a(s,f,p){var u;return o()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return u="/staff/web/userCenter/content/category/page.json",c.abrupt("return",n.request===null||n.request===void 0?void 0:(0,n.request)(u,{method:"GET",params:{params:s,sort:f,filter:p}}));case 2:case"end":return c.stop()}},a)})),W.apply(this,arguments)}function H(a){return Y.apply(this,arguments)}function Y(){return Y=g()(o()().mark(function a(s){var f;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f="/staff/web/userCenter/content/category/update.json",u.abrupt("return",n.request===null||n.request===void 0?void 0:(0,n.request)(f,{method:"POST",data:s}));case 2:case"end":return u.stop()}},a)})),Y.apply(this,arguments)}function le(a){return x.apply(this,arguments)}function x(){return x=g()(o()().mark(function a(s){var f;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f="/staff/web/userCenter/content/category/getById.json",u.abrupt("return",n.request===null||n.request===void 0?void 0:(0,n.request)(f,{method:"GET",params:{id:s}}));case 2:case"end":return u.stop()}},a)})),x.apply(this,arguments)}function se(a){return z.apply(this,arguments)}function z(){return z=g()(o()().mark(function a(s){var f;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f="/staff/web/userCenter/content/category/del.json",u.abrupt("return",n.request===null||n.request===void 0?void 0:(0,n.request)(f,{method:"POST",data:E()({},s)}));case 2:case"end":return u.stop()}},a)})),z.apply(this,arguments)}function me(){return N.apply(this,arguments)}function N(){return N=_asyncToGenerator(_regeneratorRuntime().mark(function a(){var s;return _regeneratorRuntime().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return s="/staff/web/userCenter/content/category/page.json",p.abrupt("return",request==null?void 0:request(s,{method:"GET",params:{pageNum:1,pageSize:0}}));case 2:case"end":return p.stop()}},a)})),N.apply(this,arguments)}var h=e(67294),ee=[{valueType:"group",columns:[{title:"\u6807 \u9898",dataIndex:"name",sorter:!0,formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898"}]},width:"m"}]}],m=e(85893),re=function(a){var s=(0,h.useRef)(),f=(0,h.useState)(!1),p=b()(f,2),u=p[0],v=p[1],c=function(){var F=g()(o()().mark(function j(){var i;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!T){t.next=7;break}return t.next=3,le(T);case 3:if(i=t.sent,!i.data){t.next=6;break}return t.abrupt("return",s.current.setFieldsValue(E()({},i.data)));case 6:return t.abrupt("return",s.current.setFieldsValue({id:T}));case 7:case"end":return t.stop()}},j)}));return function(){return F.apply(this,arguments)}}(),J={id:"",title:""},T=a.id,I=a.trigger,S=a.onOk,Z=function(){var F=g()(o()().mark(function j(i){var $,t,C;return o()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return v==null||v(!0),i=E()(E()({},i),{},{id:T}),P.next=4,H==null?void 0:H(i);case 4:if(t=P.sent,(t==null?void 0:t.code)===0){P.next=9;break}return r.ZP===null||r.ZP===void 0||(C=r.ZP.error)===null||C===void 0||C.call(r.ZP,t==null?void 0:t.message),v==null||v(!1),P.abrupt("return",!1);case 9:return r.ZP===null||r.ZP===void 0||($=r.ZP.success)===null||$===void 0||$.call(r.ZP,"\u63D0\u4EA4\u6210\u529F"),S==null||S(),v==null||v(!1),P.abrupt("return",!0);case 13:case"end":return P.stop()}},j)}));return function(i){return F.apply(this,arguments)}}();return(0,m.jsx)(_.Y,{formRef:s,onFinish:Z,modalProps:{destroyOnClose:!0,okButtonProps:{loading:u}},onOpenChange:c,initialValues:J,title:"\u7F16\u8F91\u4FE1\u606F",trigger:I,children:(0,m.jsx)(B.Z,{layoutType:"Embed",columns:ee})})},oe=e(97131),ie=e(30077),V=e(28248),ne=e(14726),O=e(19515),de=function(){var a,s,f=(0,h.useState)(""),p=b()(f,2),u=p[0],v=p[1],c=(a=h.useRef)===null||a===void 0?void 0:a(),J=h.useState===null||h.useState===void 0?void 0:(0,h.useState)([]),T=b()(J,2),I=T[0],S=T[1],Z=n.useIntl===null||n.useIntl===void 0?void 0:(0,n.useIntl)(),F=r.ZP===null||r.ZP===void 0||(s=r.ZP.useMessage)===null||s===void 0?void 0:s.call(r.ZP),j=b()(F,2),i=j[0],$=j[1],t=n.useRequest===null||n.useRequest===void 0?void 0:(0,n.useRequest)(se,{manual:!0,onSuccess:function(){var d,l,y;S==null||S([]),c==null||(d=c.current)===null||d===void 0||(l=d.reload)===null||l===void 0||l.call(d),i==null||(y=i.success)===null||y===void 0||y.call(i,"\u5220\u9664\u64CD\u4F5C\u6210\u529F")},onError:function(){var d;i==null||(d=i.error)===null||d===void 0||d.call(i,"\u5220\u9664\u64CD\u4F5C\u5931\u8D25,\u8BF7\u91CD\u8BD5")}}),C=t.run,ve=t.loading,P=[].concat(k()(O.P===null||O.P===void 0?void 0:(0,O.P)(ee)),[{title:(0,m.jsx)(n.FormattedMessage,{id:"pages.searchTable.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:function(d,l){var y;return[(0,m.jsx)(re,{trigger:(0,m.jsx)("a",{children:"\u7F16 \u8F91"}),id:l==null?void 0:l.id,onOk:c==null||(y=c.current)===null||y===void 0?void 0:y.reload})]}}]),ce=(0,h.useCallback)(function(){var M=g()(o()().mark(function d(l){var y;return o()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(l!=null&&l.length){A.next=3;break}return i.warning("\u8BF7\u9009\u62E9\u5220\u9664\u9879"),A.abrupt("return");case 3:V.Z===null||V.Z===void 0||(y=V.Z.confirm)===null||y===void 0||y.call(V.Z,{title:"\u64CD\u4F5C\u63D0\u793A",content:"\u662F\u5426\u786E\u5B9A\u5220\u9664\u8FD9"+(l==null?void 0:l.length)+"\u9879\u4FE1\u606F?\u5220\u9664\u540E\u5C06\u4E0D\u53EF\u6062\u590D",onOk:function(){var Q;(Q=function(){var pe=g()(o()().mark(function ae(){var X;return o()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,C==null?void 0:C(l==null||(X=l.map)===null||X===void 0?void 0:X.call(l,function(q){return q==null?void 0:q.id}));case 2:case"end":return w.stop()}},ae)}));return function(){return pe.apply(this,arguments)}}())===null||Q===void 0||Q()}});case 4:case"end":return A.stop()}},d)}));return function(d){return M.apply(this,arguments)}}(),[C]),fe=function(){var d;v==null||v(O.V===null||O.V===void 0?void 0:(0,O.V)()),c==null||(d=c.current)===null||d===void 0||d.reload()};return h.useEffect===null||h.useEffect===void 0||(0,h.useEffect)(function(){v==null||v(O.V===null||O.V===void 0?void 0:(0,O.V)())},[]),(0,m.jsxs)(oe._z,{children:[$,(0,m.jsx)(ie.Z,{headerTitle:Z==null?void 0:Z.formatMessage({id:"pages.searchTable.title",defaultMessage:"\u67E5\u8BE2\u8868\u683C"}),actionRef:c,rowKey:"id",toolBarRender:function(){return[(0,m.jsxs)(m.Fragment,{children:[" ",(0,m.jsx)(ne.ZP,{danger:!0,disabled:!I||!I.length,onClick:function(){ce(I)},children:"\u5220 \u9664"}),(0,m.jsx)(re,{trigger:(0,m.jsx)(ne.ZP,{type:"primary",children:" \u65B0 \u5EFA "}),id:u,onOk:fe})]})]},request:te,columns:P,rowSelection:{onChange:function(d,l){S(l)}}})]})}},19515:function(ue,D,e){e.d(D,{P:function(){return b},V:function(){return G}});var U=e(64599),o=e.n(U),K=e(19632),g=e.n(K),L=e(27484),k=e.n(L);function G(){var R=k()().format("YYYYMMDDHHmmssSSS").toString();return R}function b(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],E=g()(R),_=o()(E),B;try{for(_.s();!(B=_.n()).done;){var r=B.value;!(r!=null&&r.valueType)||(r==null?void 0:r.valueType)!=="group"||!(r!=null&&r.columns)||!(r!=null&&r.columns.length)||E.push.apply(E,g()(r==null?void 0:r.columns))}}catch(n){_.e(n)}finally{_.f()}return E.filter(function(n){return n.valueType!=="group"})}}}]);