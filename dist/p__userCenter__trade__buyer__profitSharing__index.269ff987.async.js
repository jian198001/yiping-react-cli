"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[909],{4404:function(N,T,e){e.r(T),e.d(T,{default:function(){return ne}});var b=e(15009),v=e.n(b),$=e(99289),p=e.n($),A=e(19632),D=e.n(A),B=e(5574),E=e.n(B),S=e(97857),_=e.n(S),r=e(12578);function C(l,s,o){return n.apply(this,arguments)}function n(){return n=p()(v()().mark(function l(s,o,g){var t;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t="/staff/web/userCenter/trade/buyer/profitSharing/page.json",i.abrupt("return",r.request===null||r.request===void 0?void 0:(0,r.request)(t,{method:"GET",params:{params:s,sort:o,filter:g}}));case 2:case"end":return i.stop()}},l)})),n.apply(this,arguments)}function P(l){return Z.apply(this,arguments)}function Z(){return Z=_asyncToGenerator(_regeneratorRuntime().mark(function l(s){var o;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o="/staff/web/userCenter/trade/buyer/profitSharing/update.json",t.abrupt("return",request==null?void 0:request(o,{method:"POST",data:s}));case 2:case"end":return t.stop()}},l)})),Z.apply(this,arguments)}function se(l){return x.apply(this,arguments)}function x(){return x=_asyncToGenerator(_regeneratorRuntime().mark(function l(s){var o;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o="/staff/web/userCenter/trade/buyer/profitSharing/getById.json",t.abrupt("return",request==null?void 0:request(o,{method:"GET",params:{id:s}}));case 2:case"end":return t.stop()}},l)})),x.apply(this,arguments)}function Q(l){return K.apply(this,arguments)}function K(){return K=p()(v()().mark(function l(s){var o;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o="/staff/web/userCenter/trade/buyer/profitSharing/del.json",t.abrupt("return",r.request===null||r.request===void 0?void 0:(0,r.request)(o,{method:"POST",data:_()({},s)}));case 2:case"end":return t.stop()}},l)})),K.apply(this,arguments)}var X=e(97131),k=e(30077),j=e(2453),M=e(28248),q=e(14726),c=e(67294),ee=[{valueType:"group",columns:[{title:"\u540D \u79F0",dataIndex:"name",sorter:!0},{title:"\u4F59\u989D(\u5143)",dataIndex:"balance",sorter:!0,valueType:"money",tooltip:"\u96F6\u6216\u6B63\u6570"},{title:"\u79EF \u5206",dataIndex:"bonus",sorter:!0,valueType:"digit",tooltip:"\u96F6\u6216\u6B63\u6574\u6570"}]}],U=e(19515),m=e(85893),ne=function(){var l,s,o=(0,c.useState)(""),g=E()(o,2),t=g[0],h=g[1],i=(l=c.useRef)===null||l===void 0?void 0:l(),re=c.useState===null||c.useState===void 0?void 0:(0,c.useState)([]),w=E()(re,2),G=w[0],R=w[1],L=r.useIntl===null||r.useIntl===void 0?void 0:(0,r.useIntl)(),te=j.ZP===null||j.ZP===void 0||(s=j.ZP.useMessage)===null||s===void 0?void 0:s.call(j.ZP),z=E()(te,2),f=z[0],ae=z[1],V=r.useRequest===null||r.useRequest===void 0?void 0:(0,r.useRequest)(Q,{manual:!0,onSuccess:function(){var a,u,y;R==null||R([]),i==null||(a=i.current)===null||a===void 0||(u=a.reload)===null||u===void 0||u.call(a),f==null||(y=f.success)===null||y===void 0||y.call(f,"\u5220\u9664\u64CD\u4F5C\u6210\u529F")},onError:function(){var a;f==null||(a=f.error)===null||a===void 0||a.call(f,"\u5220\u9664\u64CD\u4F5C\u5931\u8D25,\u8BF7\u91CD\u8BD5")}}),O=V.run,ie=V.loading,ue=[].concat(D()(U.P===null||U.P===void 0?void 0:(0,U.P)(ee)),[{title:(0,m.jsx)(r.FormattedMessage,{id:"pages.searchTable.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:function(a,u){return[(0,m.jsx)("a",{children:"\u8BE6 \u60C5"})]}}]),le=(0,c.useCallback)(function(){var d=p()(v()().mark(function a(u){var y;return v()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:M.Z===null||M.Z===void 0||(y=M.Z.confirm)===null||y===void 0||y.call(M.Z,{title:"\u64CD\u4F5C\u63D0\u793A",content:"\u662F\u5426\u786E\u5B9A\u5220\u9664\u8FD9"+(u==null?void 0:u.length)+"\u9879\u4FE1\u606F?\u5220\u9664\u540E\u5C06\u4E0D\u53EF\u6062\u590D",onOk:function(){var H;(H=function(){var oe=p()(v()().mark(function J(){var F;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,O==null?void 0:O(u==null||(F=u.map)===null||F===void 0?void 0:F.call(u,function(Y){return Y==null?void 0:Y.id}));case 2:case"end":return I.stop()}},J)}));return function(){return oe.apply(this,arguments)}}())===null||H===void 0||H()}});case 1:case"end":return W.stop()}},a)}));return function(a){return d.apply(this,arguments)}}(),[O]),de=function(){var a,u;h==null||h((a=uuid)===null||a===void 0?void 0:a()),i==null||(u=i.current)===null||u===void 0||u.reload()};return c.useEffect===null||c.useEffect===void 0||(0,c.useEffect)(function(){var d;h==null||h((d=uuid)===null||d===void 0?void 0:d())},[]),(0,m.jsxs)(X._z,{children:[ae,(0,m.jsx)(k.Z,{headerTitle:L==null?void 0:L.formatMessage({id:"pages.searchTable.title",defaultMessage:"\u67E5\u8BE2\u8868\u683C"}),actionRef:i,rowKey:"id",toolBarRender:function(){return[(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(q.ZP,{danger:!0,disabled:!G||!G.length,onClick:function(){le(G)},children:"\u5220 \u9664"})})]},request:C,columns:ue,rowSelection:{onChange:function(a,u){R(u)}}})]})}},19515:function(N,T,e){e.d(T,{P:function(){return E},V:function(){return B}});var b=e(64599),v=e.n(b),$=e(19632),p=e.n($),A=e(27484),D=e.n(A);function B(){var S=D()().format("YYYYMMDDHHmmssSSS").toString();return S}function E(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],_=p()(S),r=v()(_),C;try{for(r.s();!(C=r.n()).done;){var n=C.value;!(n!=null&&n.valueType)||(n==null?void 0:n.valueType)!=="group"||!(n!=null&&n.columns)||!(n!=null&&n.columns.length)||_.push.apply(_,p()(n==null?void 0:n.columns))}}catch(P){r.e(P)}finally{r.f()}return _.filter(function(P){return P.valueType!=="group"})}}}]);
