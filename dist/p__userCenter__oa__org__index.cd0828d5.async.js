"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[273],{77058:function(ne,Z,e){e.r(Z),e.d(Z,{default:function(){return te}});var L=e(15009),f=e.n(L),W=e(99289),o=e.n(W),w=e(19632),C=e.n(w),s=e(5574),T=e.n(s),M=e(97857),O=e.n(M),j=e(37476),B=e(26855),n=e(2453),i=e(12578),R=e(36285),g=e(67294),U=[{valueType:"group",columns:[{title:"\u540D \u79F0",dataIndex:"name",sorter:!0,width:"md",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898"}]}}]}],r=e(85893),c=function(I){var $,b=($=g.useRef)===null||$===void 0?void 0:$(),k=function(){var A=o()(f()().mark(function d(){var t,K,v,S,z;return f()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(!E){y.next=7;break}return y.next=3,R.FO===null||R.FO===void 0?void 0:(0,R.FO)(E);case 3:if(v=y.sent,!(v!=null&&v.data)){y.next=6;break}return y.abrupt("return",b==null||(S=b.current)===null||S===void 0||(z=S.setFieldsValue)===null||z===void 0?void 0:z.call(S,O()({},v==null?void 0:v.data)));case 6:return y.abrupt("return",b==null||(t=b.current)===null||t===void 0||(K=t.setFieldsValue)===null||K===void 0?void 0:K.call(t,{id:E}));case 7:case"end":return y.stop()}},d)}));return function(){return A.apply(this,arguments)}}(),J={id:"",title:""},E=I.id,p=I.trigger,G=I.onOk,H=i.useRequest===null||i.useRequest===void 0?void 0:(0,i.useRequest)(R.Vx,{manual:!0,onSuccess:function(){var d;n.ZP===null||n.ZP===void 0||(d=n.ZP.success)===null||d===void 0||d.call(n.ZP,"\u63D0\u4EA4\u6210\u529F"),G==null||G()},onError:function(){var d;n.ZP===null||n.ZP===void 0||(d=n.ZP.error)===null||d===void 0||d.call(n.ZP,"\u63D0\u4EA4\u5931\u8D25, \u8BF7\u91CD\u8BD5!")}}),D=H.run,V=H.loading,Y=function(){var A=o()(f()().mark(function d(t){return f()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return t=O()(O()({},t),{},{id:E}),D==null||D(t),v.abrupt("return",!0);case 3:case"end":return v.stop()}},d)}));return function(t){return A.apply(this,arguments)}}();return(0,r.jsx)(j.Y,{formRef:b,onFinish:Y,modalProps:{destroyOnClose:!0,okButtonProps:{loading:V}},onOpenChange:k,initialValues:J,title:"\u7F16\u8F91\u4FE1\u606F",trigger:p,children:(0,r.jsx)(B.Z,{layoutType:"Embed",columns:U})})},_=e(97131),h=e(30077),u=e(14726),x=e(28248),m=e(19515),te=function(){var I,$,b=(0,g.useState)(""),k=T()(b,2),J=k[0],E=k[1],p=(I=g.useRef)===null||I===void 0?void 0:I(),G=g.useState===null||g.useState===void 0?void 0:(0,g.useState)([]),H=T()(G,2),D=H[0],V=H[1],Y=i.useIntl===null||i.useIntl===void 0?void 0:(0,i.useIntl)(),A=n.ZP===null||n.ZP===void 0||($=n.ZP.useMessage)===null||$===void 0?void 0:$.call(n.ZP),d=T()(A,2),t=d[0],K=d[1],v=i.useRequest===null||i.useRequest===void 0?void 0:(0,i.useRequest)(R.IV,{manual:!0,onSuccess:function(){var a,l,P;V==null||V([]),p==null||(a=p.current)===null||a===void 0||(l=a.reload)===null||l===void 0||l.call(a),t==null||(P=t.success)===null||P===void 0||P.call(t,"\u5220\u9664\u64CD\u4F5C\u6210\u529F")},onError:function(){var a;t==null||(a=t.error)===null||a===void 0||a.call(t,"\u5220\u9664\u64CD\u4F5C\u5931\u8D25,\u8BF7\u91CD\u8BD5")}}),S=v.run,z=v.loading,re=[].concat(C()(m.P===null||m.P===void 0?void 0:(0,m.P)(U)),[{title:(0,r.jsx)(i.FormattedMessage,{id:"pages.searchTable.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:function(a,l){var P;return[(0,r.jsx)(c,{trigger:(0,r.jsx)(u.ZP,{children:"\u7F16 \u8F91"}),id:l==null?void 0:l.id,onOk:p==null||(P=p.current)===null||P===void 0?void 0:P.reload},l.id)]}}]),y=(0,g.useCallback)(function(){var F=o()(f()().mark(function a(l){var P;return f()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:x.Z===null||x.Z===void 0||(P=x.Z.confirm)===null||P===void 0||P.call(x.Z,{title:"\u64CD\u4F5C\u63D0\u793A",content:"\u662F\u5426\u786E\u5B9A\u5220\u9664\u8FD9"+(l==null?void 0:l.length)+"\u9879\u4FE1\u606F?\u5220\u9664\u540E\u5C06\u4E0D\u53EF\u6062\u590D",onOk:function(){var X;(X=function(){var le=o()(f()().mark(function ue(){var q;return f()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,S==null?void 0:S(l==null||(q=l.map)===null||q===void 0?void 0:q.call(l,function(ee){return ee==null?void 0:ee.id}));case 2:case"end":return N.stop()}},ue)}));return function(){return le.apply(this,arguments)}}())===null||X===void 0||X()}});case 1:case"end":return Q.stop()}},a)}));return function(a){return F.apply(this,arguments)}}(),[S]),ae=function(){var a;E==null||E(m.V===null||m.V===void 0?void 0:(0,m.V)()),p==null||(a=p.current)===null||a===void 0||a.reload()};return g.useEffect===null||g.useEffect===void 0||(0,g.useEffect)(function(){E==null||E(m.V===null||m.V===void 0?void 0:(0,m.V)())},[]),(0,r.jsxs)(_._z,{children:[K,(0,r.jsx)(h.Z,{headerTitle:Y==null?void 0:Y.formatMessage({id:"pages.searchTable.title",defaultMessage:"\u67E5\u8BE2\u8868\u683C"}),actionRef:p,rowKey:"id",toolBarRender:function(){return[(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.ZP,{danger:!0,disabled:!D||!D.length,onClick:function(){y(D)},children:"\u5220 \u9664"}),(0,r.jsx)(c,{trigger:(0,r.jsx)(u.ZP,{type:"primary",children:" \u65B0 \u5EFA "}),id:J,onOk:ae})]})]},request:R.Md,columns:re,rowSelection:{onChange:function(a,l){V(l)}}})]})}},36285:function(ne,Z,e){e.d(Z,{FO:function(){return B},IV:function(){return i},Md:function(){return T},Vx:function(){return O}});var L=e(97857),f=e.n(L),W=e(15009),o=e.n(W),w=e(99289),C=e.n(w),s=e(12578);function T(r,c,_){return M.apply(this,arguments)}function M(){return M=C()(o()().mark(function r(c,_,h){var u;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return u="/staff/web/userCenter/oa/post/page.json",m.abrupt("return",s.request===null||s.request===void 0?void 0:(0,s.request)(u,{method:"GET",params:{params:c,sort:_,filter:h}}));case 2:case"end":return m.stop()}},r)})),M.apply(this,arguments)}function O(r){return j.apply(this,arguments)}function j(){return j=C()(o()().mark(function r(c){var _;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return _="/staff/web/userCenter/oa/post/update.json",u.abrupt("return",s.request===null||s.request===void 0?void 0:(0,s.request)(_,{method:"POST",data:c}));case 2:case"end":return u.stop()}},r)})),j.apply(this,arguments)}function B(r){return n.apply(this,arguments)}function n(){return n=C()(o()().mark(function r(c){var _;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return _="/staff/web/userCenter/oa/post/getById.json",u.abrupt("return",s.request===null||s.request===void 0?void 0:(0,s.request)(_,{method:"GET",params:{id:c}}));case 2:case"end":return u.stop()}},r)})),n.apply(this,arguments)}function i(r){return R.apply(this,arguments)}function R(){return R=C()(o()().mark(function r(c){var _;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return _="/staff/web/userCenter/oa/post/del.json",u.abrupt("return",s.request===null||s.request===void 0?void 0:(0,s.request)(_,{method:"POST",data:f()({},c)}));case 2:case"end":return u.stop()}},r)})),R.apply(this,arguments)}function g(){return U.apply(this,arguments)}function U(){return U=_asyncToGenerator(_regeneratorRuntime().mark(function r(){var c;return _regeneratorRuntime().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return c="/staff/web/userCenter/oa/post/page.json",h.abrupt("return",request==null?void 0:request(c,{method:"GET",params:{pageNum:1,pageSize:0}}));case 2:case"end":return h.stop()}},r)})),U.apply(this,arguments)}},19515:function(ne,Z,e){e.d(Z,{P:function(){return T},V:function(){return s}});var L=e(64599),f=e.n(L),W=e(19632),o=e.n(W),w=e(27484),C=e.n(w);function s(){var M=C()().format("YYYYMMDDHHmmssSSS").toString();return M}function T(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],O=o()(M),j=f()(O),B;try{for(j.s();!(B=j.n()).done;){var n=B.value;!(n!=null&&n.valueType)||(n==null?void 0:n.valueType)!=="group"||!(n!=null&&n.columns)||!(n!=null&&n.columns.length)||O.push.apply(O,o()(n==null?void 0:n.columns))}}catch(i){j.e(i)}finally{j.f()}return O.filter(function(i){return i.valueType!=="group"})}}}]);
