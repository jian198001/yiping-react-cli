"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[210],{14861:function(J,Z,e){e.r(Z),e.d(Z,{default:function(){return ae}});var G=e(19632),q=e.n(G),L=e(5574),h=e.n(L),k=e(15009),v=e.n(k),y=e(97857),w=e.n(y),C=e(99289),O=e.n(C),R=e(37476),A=e(26855),r=e(2453),d=e(12578);function K(u,i,t){return H.apply(this,arguments)}function H(){return H=O()(v()().mark(function u(i,t,m){var s;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return s="/staff/web/userCenter/purchase/stock/page.json",g.abrupt("return",d.request===null||d.request===void 0?void 0:(0,d.request)(s,{method:"GET",params:{params:i,sort:t,filter:m}}));case 2:case"end":return g.stop()}},u)})),H.apply(this,arguments)}function Y(u){return U.apply(this,arguments)}function U(){return U=_asyncToGenerator(_regeneratorRuntime().mark(function u(i){var t;return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t="/staff/web/userCenter/purchase/stock/update.json",s.abrupt("return",request==null?void 0:request(t,{method:"POST",data:i}));case 2:case"end":return s.stop()}},u)})),U.apply(this,arguments)}function D(u){return a.apply(this,arguments)}function a(){return a=O()(v()().mark(function u(i){var t;return v()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t="/staff/web/userCenter/purchase/stock/getById.json",s.abrupt("return",d.request===null||d.request===void 0?void 0:(0,d.request)(t,{method:"GET",params:{id:i}}));case 2:case"end":return s.stop()}},u)})),a.apply(this,arguments)}function _(u){return o.apply(this,arguments)}function o(){return o=_asyncToGenerator(_regeneratorRuntime().mark(function u(i){var t;return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t="/staff/web/userCenter/purchase/stock/del.json",s.abrupt("return",request==null?void 0:request(t,{method:"POST",data:_objectSpread({},i)}));case 2:case"end":return s.stop()}},u)})),o.apply(this,arguments)}function b(){return n.apply(this,arguments)}function n(){return n=_asyncToGenerator(_regeneratorRuntime().mark(function u(){var i;return _regeneratorRuntime().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return i="/staff/web/userCenter/purchase/stock/page.json",m.abrupt("return",request==null?void 0:request(i,{method:"GET",params:{pageNum:1,pageSize:0}}));case 2:case"end":return m.stop()}},u)})),n.apply(this,arguments)}var X=e(13010),f=e(67294),T=e(85893),ee=function(u){var i,t=(i=f.useRef)===null||i===void 0?void 0:i(),m={},s=function(){var F=O()(v()().mark(function p(){var P,S,j,l,E,$;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(P=g==null?void 0:g.id,!P){c.next=9;break}return c.next=4,D==null?void 0:D(P);case 4:if(l=c.sent,!(l!=null&&l.data)){c.next=8;break}return m=w()(w()({},m),l==null?void 0:l.data),c.abrupt("return",t==null||(E=t.current)===null||E===void 0||($=E.setFieldsValue)===null||$===void 0?void 0:$.call(E,w()({},l==null?void 0:l.data)));case 8:return c.abrupt("return",t==null||(S=t.current)===null||S===void 0||(j=S.setFieldsValue)===null||j===void 0?void 0:j.call(S,{id:P,consumeQuantity:1}));case 9:case"end":return c.stop()}},p)}));return function(){return F.apply(this,arguments)}}(),M={id:"",title:""},g=u.record,x=u.trigger,B=u.onOk,z=d.useRequest===null||d.useRequest===void 0?void 0:(0,d.useRequest)(X.L2,{manual:!0,onSuccess:function(){var p;r.ZP===null||r.ZP===void 0||(p=r.ZP.success)===null||p===void 0||p.call(r.ZP,"\u63D0\u4EA4\u6210\u529F"),B==null||B()},onError:function(){var p;r.ZP===null||r.ZP===void 0||(p=r.ZP.error)===null||p===void 0||p.call(r.ZP,"\u63D0\u4EA4\u5931\u8D25, \u8BF7\u91CD\u8BD5!")}}),W=z.run,V=z.loading,N=function(){var F=O()(v()().mark(function p(P){var S,j,l,E,$;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(P=w()(w()({},g),P),!(((S=P)===null||S===void 0?void 0:S.consumeQuantity)<=0)){c.next=4;break}return r.ZP===null||r.ZP===void 0||(E=r.ZP.error)===null||E===void 0||E.call(r.ZP,"\u9886\u7528\u6570\u91CF\u9700\u5927\u4E8E0, \u8BF7\u91CD\u8BD5!"),c.abrupt("return",!1);case 4:if(!(((j=P)===null||j===void 0?void 0:j.consumeQuantity)>((l=m)===null||l===void 0?void 0:l.quantity))){c.next=7;break}return r.ZP===null||r.ZP===void 0||($=r.ZP.error)===null||$===void 0||$.call(r.ZP,"\u9886\u7528\u6570\u91CF\u9700\u5C0F\u4E8E\u7B49\u4E8E\u5E93\u5B58\u6570\u91CF, \u8BF7\u91CD\u8BD5!"),c.abrupt("return",!1);case 7:return W==null||W(P),c.abrupt("return",!0);case 9:case"end":return c.stop()}},p)}));return function(P){return F.apply(this,arguments)}}(),Q=[{valueType:"group",columns:[{title:"\u9886\u7528\u6570\u91CF",dataIndex:"consumeQuantity",valueType:"digit",tooltip:"\u6B63\u6570",sorter:!0,formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6B63\u6570"},{type:"number",min:0,message:"\u8BF7\u8F93\u5165\u6B63\u6570"}]},width:"m",initialValue:1}]}];return(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(R.Y,{formRef:t,onFinish:N,modalProps:{destroyOnClose:!0,okButtonProps:{loading:V}},onOpenChange:s,initialValues:M,title:"\u9886\u7528\u51FA\u5E93\u5355",trigger:x,children:(0,T.jsx)(A.Z,{layoutType:"Embed",columns:Q})})})},re=e(97131),ne=e(30077),te=e(14726),ue=[{valueType:"group",columns:[{title:"\u7269\u6599\u540D\u79F0",dataIndex:"materialName",sorter:!0,formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7269\u6599\u540D\u79F0"}]},width:"m"},{title:"\u89C4 \u683C",dataIndex:"materialSku",sorter:!0,formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u89C4\u683C"}]},width:"m"}]},{valueType:"group",columns:[{title:"\u6570 \u91CF",dataIndex:"quantity",sorter:!0,valueType:"digit",tooltip:"\u6B63\u6570",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u91CF"}]},width:"m"},{title:"\u5931\u6548\u671F",dataIndex:"exp",sorter:!0,valueType:"date",tooltip:"\u65E5\u671F",formItemProps:{rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5931\u6548\u671F"}]},width:"m"}]}],I=e(19515),ae=function(){var u,i,t=(0,f.useState)(""),m=h()(t,2),s=m[0],M=m[1],g=(u=f.useRef)===null||u===void 0?void 0:u(),x=f.useState===null||f.useState===void 0?void 0:(0,f.useState)([]),B=h()(x,2),z=B[0],W=B[1],V=d.useIntl===null||d.useIntl===void 0?void 0:(0,d.useIntl)(),N=r.ZP===null||r.ZP===void 0||(i=r.ZP.useMessage)===null||i===void 0?void 0:i.call(r.ZP),Q=h()(N,2),F=Q[0],p=Q[1],P=[].concat(q()(I.P===null||I.P===void 0?void 0:(0,I.P)(ue)),[{title:(0,T.jsx)(d.FormattedMessage,{id:"pages.searchTable.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:function(l,E){return[(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(ee,{record:E,onOk:S,trigger:(0,T.jsx)(te.ZP,{type:"primary",children:"\u9886\u7528\u51FA\u5E93"})})})]}}]),S=function(){var l;M==null||M(I.V===null||I.V===void 0?void 0:(0,I.V)()),g==null||(l=g.current)===null||l===void 0||l.reload()};return f.useEffect===null||f.useEffect===void 0||(0,f.useEffect)(function(){M==null||M(I.V===null||I.V===void 0?void 0:(0,I.V)())},[]),(0,T.jsxs)(re._z,{children:[p,(0,T.jsx)(ne.Z,{headerTitle:V==null?void 0:V.formatMessage({id:"pages.searchTable.title",defaultMessage:"\u67E5\u8BE2\u8868\u683C"}),actionRef:g,rowKey:"id",toolBarRender:function(){return[]},request:K,columns:P,rowSelection:{onChange:function(l,E){W(E)}}})]})}},13010:function(J,Z,e){e.d(Z,{FO:function(){return A},L2:function(){return U},Md:function(){return w}});var G=e(97857),q=e.n(G),L=e(15009),h=e.n(L),k=e(99289),v=e.n(k),y=e(12578);function w(a,_,o){return C.apply(this,arguments)}function C(){return C=v()(h()().mark(function a(_,o,b){var n;return h()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return n="/staff/web/userCenter/inventory/consume/page.json",f.abrupt("return",y.request===null||y.request===void 0?void 0:(0,y.request)(n,{method:"GET",params:{params:_,sort:o,filter:b}}));case 2:case"end":return f.stop()}},a)})),C.apply(this,arguments)}function O(a){return R.apply(this,arguments)}function R(){return R=_asyncToGenerator(_regeneratorRuntime().mark(function a(_){var o;return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o="/staff/web/userCenter/inventory/consume/update.json",n.abrupt("return",request==null?void 0:request(o,{method:"POST",data:_}));case 2:case"end":return n.stop()}},a)})),R.apply(this,arguments)}function A(a){return r.apply(this,arguments)}function r(){return r=v()(h()().mark(function a(_){var o;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o="/staff/web/userCenter/inventory/consume/getById.json",n.abrupt("return",y.request===null||y.request===void 0?void 0:(0,y.request)(o,{method:"GET",params:{id:_}}));case 2:case"end":return n.stop()}},a)})),r.apply(this,arguments)}function d(a){return K.apply(this,arguments)}function K(){return K=_asyncToGenerator(_regeneratorRuntime().mark(function a(_){var o;return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o="/staff/web/userCenter/inventory/consume/del.json",n.abrupt("return",request==null?void 0:request(o,{method:"POST",data:_objectSpread({},_)}));case 2:case"end":return n.stop()}},a)})),K.apply(this,arguments)}function H(){return Y.apply(this,arguments)}function Y(){return Y=_asyncToGenerator(_regeneratorRuntime().mark(function a(){var _;return _regeneratorRuntime().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return _="/staff/web/userCenter/inventory/consume/page.json",b.abrupt("return",request==null?void 0:request(_,{method:"GET",params:{pageNum:1,pageSize:0}}));case 2:case"end":return b.stop()}},a)})),Y.apply(this,arguments)}function U(a){return D.apply(this,arguments)}function D(){return D=v()(h()().mark(function a(_){var o;return h()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o="/staff/web/userCenter/inventory/outbill/consumeOutstock.json",n.abrupt("return",y.request===null||y.request===void 0?void 0:(0,y.request)(o,{method:"POST",data:_}));case 2:case"end":return n.stop()}},a)})),D.apply(this,arguments)}},19515:function(J,Z,e){e.d(Z,{P:function(){return w},V:function(){return y}});var G=e(64599),q=e.n(G),L=e(19632),h=e.n(L),k=e(27484),v=e.n(k);function y(){var C=v()().format("YYYYMMDDHHmmssSSS").toString();return C}function w(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],O=h()(C),R=q()(O),A;try{for(R.s();!(A=R.n()).done;){var r=A.value;!(r!=null&&r.valueType)||(r==null?void 0:r.valueType)!=="group"||!(r!=null&&r.columns)||!(r!=null&&r.columns.length)||O.push.apply(O,h()(r==null?void 0:r.columns))}}catch(d){R.e(d)}finally{R.f()}return O.filter(function(d){return d.valueType!=="group"})}}}]);
