"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[926],{82749:function(k,j,e){e.r(j),e.d(j,{default:function(){return te}});var $=e(15009),d=e.n($),A=e(99289),g=e.n(A),D=e(19632),B=e.n(D),V=e(5574),b=e.n(V),E=e(97857),T=e.n(E),a=e(12578);function P(t,u,l){return r.apply(this,arguments)}function r(){return r=g()(d()().mark(function t(u,l,o){var n;return d()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n="/staff/web/userCenter/trade/buyer/buyer/page.json",s.abrupt("return",a.request===null||a.request===void 0?void 0:(0,a.request)(n,{method:"GET",params:{params:u,sort:l,filter:o}}));case 2:case"end":return s.stop()}},t)})),r.apply(this,arguments)}function S(t){return Z.apply(this,arguments)}function Z(){return Z=_asyncToGenerator(_regeneratorRuntime().mark(function t(u){var l;return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l="/staff/web/userCenter/trade/buyer/buyer/update.json",n.abrupt("return",request==null?void 0:request(l,{method:"POST",data:u}));case 2:case"end":return n.stop()}},t)})),Z.apply(this,arguments)}function de(t){return G.apply(this,arguments)}function G(){return G=_asyncToGenerator(_regeneratorRuntime().mark(function t(u){var l;return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l="/staff/web/userCenter/trade/buyer/buyer/getById.json",n.abrupt("return",request==null?void 0:request(l,{method:"GET",params:{id:u}}));case 2:case"end":return n.stop()}},t)})),G.apply(this,arguments)}function x(t){return K.apply(this,arguments)}function K(){return K=g()(d()().mark(function t(u){var l;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l="/staff/web/userCenter/trade/buyer/buyer/del.json",n.abrupt("return",a.request===null||a.request===void 0?void 0:(0,a.request)(l,{method:"POST",data:T()({},u)}));case 2:case"end":return n.stop()}},t)})),K.apply(this,arguments)}function ve(){return U.apply(this,arguments)}function U(){return U=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var u;return _regeneratorRuntime().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return u="/staff/web/userCenter/trade/buyer/buyer/page.json",o.abrupt("return",request==null?void 0:request(u,{method:"GET",params:{pageNum:1,pageSize:0}}));case 2:case"end":return o.stop()}},t)})),U.apply(this,arguments)}var q=e(97131),ee=e(30077),I=e(2453),M=e(28248),re=e(14726),p=e(67294),ne=[{valueType:"group",columns:[{title:"\u540D \u79F0",dataIndex:"name",sorter:!0},{title:"\u7F16 \u53F7",dataIndex:"code",sorter:!0}]},{valueType:"group",columns:[{title:"\u8BA2\u5355\u6570",dataIndex:"orderCount",sorter:!0,valueType:"digit",tooltip:"\u96F6\u6216\u6B63\u6574\u6570",initialValue:"0"}]},{valueType:"group",columns:[{title:"\u4F59\u989D(\u5143)",dataIndex:"balance",sorter:!0,valueType:"money",initialValue:"0"},{title:"\u79EF \u5206",dataIndex:"bonus",valueType:"digit",tooltip:"\u96F6\u6216\u6B63\u6574\u6570",sorter:!0,initialValue:"0"}]}],c=e(19515),y=e(85893),te=function(){var t,u,l=(0,p.useState)(""),o=b()(l,2),n=o[0],h=o[1],s=(t=p.useRef)===null||t===void 0?void 0:t(),ae=p.useState===null||p.useState===void 0?void 0:(0,p.useState)([]),Q=b()(ae,2),L=Q[0],O=Q[1],W=a.useIntl===null||a.useIntl===void 0?void 0:(0,a.useIntl)(),ue=I.ZP===null||I.ZP===void 0||(u=I.ZP.useMessage)===null||u===void 0?void 0:u.call(I.ZP),X=b()(ue,2),m=X[0],le=X[1],oe=[].concat(B()(c.P===null||c.P===void 0?void 0:(0,c.P)(ne)),[{title:(0,y.jsx)(a.FormattedMessage,{id:"pages.searchTable.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:function(f,i){return[(0,y.jsx)("a",{children:"\u8BE6 \u60C5"})]}}]),se=function(){var C=g()(d()().mark(function f(i){var w;return d()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:M.Z===null||M.Z===void 0||(w=M.Z.confirm)===null||w===void 0||w.call(M.Z,{title:"\u64CD\u4F5C\u63D0\u793A",content:"\u662F\u5426\u786E\u5B9A\u5220\u9664\u8FD9"+(i==null?void 0:i.length)+"\u9879\u4FE1\u606F?\u5220\u9664\u540E\u5C06\u4E0D\u53EF\u6062\u590D",onOk:function(){g()(d()().mark(function ie(){var F,v,Y,R,z,N;return d()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,x==null?void 0:x(i==null||(F=i.map)===null||F===void 0?void 0:F.call(i,function(J){return J==null?void 0:J.id}));case 2:if(v=_.sent,(v==null?void 0:v.code)===0){_.next=7;break}return _.abrupt("return",m==null||(Y=m.error)===null||Y===void 0?void 0:Y.call(m,(v==null?void 0:v.message)||"\u5220\u9664\u64CD\u4F5C\u5931\u8D25,\u8BF7\u91CD\u8BD5"));case 7:O==null||O([]),s==null||(R=s.current)===null||R===void 0||(z=R.reload)===null||z===void 0||z.call(R),m==null||(N=m.success)===null||N===void 0||N.call(m,(v==null?void 0:v.message)||"\u5220\u9664\u64CD\u4F5C\u6210\u529F");case 10:case"end":return _.stop()}},ie)}))()}});case 1:case"end":return H.stop()}},f)}));return function(i){return C.apply(this,arguments)}}(),ce=function(){var f;h==null||h(c.V===null||c.V===void 0?void 0:(0,c.V)()),s==null||(f=s.current)===null||f===void 0||f.reload()};return p.useEffect===null||p.useEffect===void 0||(0,p.useEffect)(function(){h==null||h(c.V===null||c.V===void 0?void 0:(0,c.V)())},[]),(0,y.jsxs)(q._z,{children:[le,(0,y.jsx)(ee.Z,{headerTitle:W==null?void 0:W.formatMessage({id:"pages.searchTable.title",defaultMessage:"\u67E5\u8BE2\u8868\u683C"}),actionRef:s,rowKey:"id",toolBarRender:function(){return[(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(re.ZP,{danger:!0,disabled:!L||!L.length,onClick:function(){se(L)},children:"\u5220 \u9664"})})]},request:P,columns:oe,rowSelection:{onChange:function(f,i){O(i)}}})]})}},19515:function(k,j,e){e.d(j,{P:function(){return b},V:function(){return V}});var $=e(64599),d=e.n($),A=e(19632),g=e.n(A),D=e(27484),B=e.n(D);function V(){var E=B()().format("YYYYMMDDHHmmssSSS").toString();return E}function b(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],T=g()(E),a=d()(T),P;try{for(a.s();!(P=a.n()).done;){var r=P.value;!(r!=null&&r.valueType)||(r==null?void 0:r.valueType)!=="group"||!(r!=null&&r.columns)||!(r!=null&&r.columns.length)||T.push.apply(T,g()(r==null?void 0:r.columns))}}catch(S){a.e(S)}finally{a.f()}return T.filter(function(S){return S.valueType!=="group"})}}}]);
