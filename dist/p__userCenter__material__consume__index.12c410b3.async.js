"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[193],{68671:function(H,w,e){e.r(w),e.d(w,{default:function(){return P}});var D=e(19632),k=e.n(D),B=e(5574),i=e.n(B),$=e(15009),v=e.n($),o=e(97857),E=e.n(o),f=e(99289),O=e.n(f),p=e(37476),A=e(26855),t=e(2453),g=e(12578),T=e(68848),L=e(13010),_=e(67294),m=e(85893),R=function(Z){var F,S=(F=_.useRef)===null||F===void 0?void 0:F(),U={},z=function(){var G=O()(v()().mark(function c(){var h,I,j,l,y,K;return v()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(h=M==null?void 0:M.id,!h){d.next=9;break}return d.next=4,L.FO===null||L.FO===void 0?void 0:(0,L.FO)(h);case 4:if(l=d.sent,!(l!=null&&l.data)){d.next=8;break}return U=E()(E()({},U),l==null?void 0:l.data),d.abrupt("return",S==null||(y=S.current)===null||y===void 0||(K=y.setFieldsValue)===null||K===void 0?void 0:K.call(y,E()({},l==null?void 0:l.data)));case 8:return d.abrupt("return",S==null||(I=S.current)===null||I===void 0||(j=I.setFieldsValue)===null||j===void 0?void 0:j.call(I,{id:h,instockQuantity:1}));case 9:case"end":return d.stop()}},c)}));return function(){return G.apply(this,arguments)}}(),C={id:"",title:""},M=Z.record,Q=Z.trigger,W=Z.onOk,Y=g.useRequest===null||g.useRequest===void 0?void 0:(0,g.useRequest)(T.uj,{manual:!0,onSuccess:function(){var c;t.ZP===null||t.ZP===void 0||(c=t.ZP.success)===null||c===void 0||c.call(t.ZP,"\u63D0\u4EA4\u6210\u529F"),W==null||W()},onError:function(){var c;t.ZP===null||t.ZP===void 0||(c=t.ZP.error)===null||c===void 0||c.call(t.ZP,"\u63D0\u4EA4\u5931\u8D25, \u8BF7\u91CD\u8BD5!")}}),V=Y.run,q=Y.loading,N=function(){var G=O()(v()().mark(function c(h){var I,j,l,y,K;return v()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(h=E()(E()({},M),h),!(((I=h)===null||I===void 0?void 0:I.instockQuantity)<=0)){d.next=4;break}return t.ZP===null||t.ZP===void 0||(y=t.ZP.error)===null||y===void 0||y.call(t.ZP,"\u9886\u7528\u6570\u91CF\u9700\u5927\u4E8E0, \u8BF7\u91CD\u8BD5!"),d.abrupt("return",!1);case 4:if(!(((j=h)===null||j===void 0?void 0:j.instockQuantity)>((l=U)===null||l===void 0?void 0:l.quantity))){d.next=7;break}return t.ZP===null||t.ZP===void 0||(K=t.ZP.error)===null||K===void 0||K.call(t.ZP,"\u9886\u7528\u6570\u91CF\u9700\u5C0F\u4E8E\u7B49\u4E8E\u5E93\u5B58\u6570\u91CF, \u8BF7\u91CD\u8BD5!"),d.abrupt("return",!1);case 7:return V==null||V(h),d.abrupt("return",!0);case 9:case"end":return d.stop()}},c)}));return function(h){return G.apply(this,arguments)}}(),x=[{valueType:"group",columns:[{title:"\u5F52\u8FD8\u6570\u91CF",dataIndex:"instockQuantity",valueType:"digit",tooltip:"\u6B63\u6570",sorter:!0,formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6B63\u6570"},{type:"number",min:0,message:"\u8BF7\u8F93\u5165\u6B63\u6570"}]},width:"m"}]}];return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(p.Y,{formRef:S,onFinish:N,modalProps:{destroyOnClose:!0,okButtonProps:{loading:q}},onOpenChange:z,initialValues:C,title:"\u5F52\u8FD8\u5165\u5E93\u5355",trigger:Q,children:(0,m.jsx)(A.Z,{layoutType:"Embed",columns:x})})})},n=e(97131),a=e(30077),u=e(14726),s=[{valueType:"group",columns:[{title:"\u7269\u6599\u540D\u79F0",dataIndex:"materialName",sorter:!0,formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7269\u6599\u540D\u79F0"}]},width:"m"},{title:"\u89C4 \u683C",dataIndex:"materialSku",sorter:!0,formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u89C4\u683C"}]},width:"m"}]},{valueType:"group",columns:[{title:"\u6570 \u91CF",dataIndex:"quantity",sorter:!0,valueType:"digit",tooltip:"\u6B63\u6570",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6B63\u6570"}]},width:"m"},{title:"\u9886\u7528\u65F6\u95F4",dataIndex:"createDate",sorter:!0,valueType:"datetime",tooltip:"\u65F6\u95F4",formItemProps:{rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u65F6\u95F4"}]},width:"m"},{title:"\u5931\u6548\u671F",dataIndex:"exp",sorter:!0,valueType:"date",tooltip:"\u65E5\u671F",formItemProps:{rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u65E5\u671F"}]},width:"m"}]}],r=[{valueType:"group",columns:[{title:"\u7269\u6599\u540D\u79F0",dataIndex:"materialName",sorter:!0,formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7269\u6599\u540D\u79F0"}]},width:"m",hideInSearch:!0,readonly:!0},{title:"\u89C4 \u683C",dataIndex:"materialSku",sorter:!0,formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u89C4\u683C"}]},width:"m",hideInSearch:!0,readonly:!0},{title:"\u6570 \u91CF",dataIndex:"quantity",sorter:!0,valueType:"digit",tooltip:"\u6B63\u6570",formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6B63\u6570"}]},width:"m",hideInSearch:!0,readonly:!0},{title:"\u9886\u7528\u6570\u91CF",dataIndex:"consumeQuantity",sorter:!0,valueType:"digit",tooltip:"\u6B63\u6570",initialValue:1,formItemProps:{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6B63\u6570"},{type:"number",min:0,message:"\u8BF7\u8F93\u5165\u6B63\u6570"}]},width:"m",hideInSearch:!0}]}],b=e(19515),P=function(){var Z,F,S=(0,_.useState)(""),U=i()(S,2),z=U[0],C=U[1],M=(Z=_.useRef)===null||Z===void 0?void 0:Z(),Q=_.useState===null||_.useState===void 0?void 0:(0,_.useState)([]),W=i()(Q,2),Y=W[0],V=W[1],q=g.useIntl===null||g.useIntl===void 0?void 0:(0,g.useIntl)(),N=t.ZP===null||t.ZP===void 0||(F=t.ZP.useMessage)===null||F===void 0?void 0:F.call(t.ZP),x=i()(N,2),G=x[0],c=x[1],h=[].concat(k()(b.P===null||b.P===void 0?void 0:(0,b.P)(s)),[{title:(0,m.jsx)(g.FormattedMessage,{id:"pages.searchTable.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:function(l,y){return[(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(R,{record:y,onOk:I,trigger:(0,m.jsx)(u.ZP,{type:"primary",children:"\u5F52\u8FD8\u5165\u5E93"})})})]}}]),I=function(){var l;C==null||C(b.V===null||b.V===void 0?void 0:(0,b.V)()),M==null||(l=M.current)===null||l===void 0||l.reload()};return _.useEffect===null||_.useEffect===void 0||(0,_.useEffect)(function(){C==null||C(b.V===null||b.V===void 0?void 0:(0,b.V)())},[]),(0,m.jsxs)(n._z,{children:[c,(0,m.jsx)(a.Z,{headerTitle:q==null?void 0:q.formatMessage({id:"pages.searchTable.title",defaultMessage:"\u67E5\u8BE2\u8868\u683C"}),actionRef:M,rowKey:"id",toolBarRender:function(){return[]},request:L.Md,columns:h,rowSelection:{onChange:function(l,y){V(y)}}})]})}},13010:function(H,w,e){e.d(w,{FO:function(){return A},L2:function(){return m},Md:function(){return E}});var D=e(97857),k=e.n(D),B=e(15009),i=e.n(B),$=e(99289),v=e.n($),o=e(12578);function E(n,a,u){return f.apply(this,arguments)}function f(){return f=v()(i()().mark(function n(a,u,s){var r;return i()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return r="/staff/web/userCenter/inventory/consume/page.json",P.abrupt("return",o.request===null||o.request===void 0?void 0:(0,o.request)(r,{method:"GET",params:{params:a,sort:u,filter:s}}));case 2:case"end":return P.stop()}},n)})),f.apply(this,arguments)}function O(n){return p.apply(this,arguments)}function p(){return p=_asyncToGenerator(_regeneratorRuntime().mark(function n(a){var u;return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u="/staff/web/userCenter/inventory/consume/update.json",r.abrupt("return",request==null?void 0:request(u,{method:"POST",data:a}));case 2:case"end":return r.stop()}},n)})),p.apply(this,arguments)}function A(n){return t.apply(this,arguments)}function t(){return t=v()(i()().mark(function n(a){var u;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u="/staff/web/userCenter/inventory/consume/getById.json",r.abrupt("return",o.request===null||o.request===void 0?void 0:(0,o.request)(u,{method:"GET",params:{id:a}}));case 2:case"end":return r.stop()}},n)})),t.apply(this,arguments)}function g(n){return T.apply(this,arguments)}function T(){return T=_asyncToGenerator(_regeneratorRuntime().mark(function n(a){var u;return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u="/staff/web/userCenter/inventory/consume/del.json",r.abrupt("return",request==null?void 0:request(u,{method:"POST",data:_objectSpread({},a)}));case 2:case"end":return r.stop()}},n)})),T.apply(this,arguments)}function L(){return _.apply(this,arguments)}function _(){return _=_asyncToGenerator(_regeneratorRuntime().mark(function n(){var a;return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return a="/staff/web/userCenter/inventory/consume/page.json",s.abrupt("return",request==null?void 0:request(a,{method:"GET",params:{pageNum:1,pageSize:0}}));case 2:case"end":return s.stop()}},n)})),_.apply(this,arguments)}function m(n){return R.apply(this,arguments)}function R(){return R=v()(i()().mark(function n(a){var u;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u="/staff/web/userCenter/inventory/outbill/consumeOutstock.json",r.abrupt("return",o.request===null||o.request===void 0?void 0:(0,o.request)(u,{method:"POST",data:a}));case 2:case"end":return r.stop()}},n)})),R.apply(this,arguments)}},68848:function(H,w,e){e.d(w,{Md:function(){return E},uj:function(){return m}});var D=e(97857),k=e.n(D),B=e(15009),i=e.n(B),$=e(99289),v=e.n($),o=e(12578);function E(n,a,u){return f.apply(this,arguments)}function f(){return f=v()(i()().mark(function n(a,u,s){var r;return i()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return r="/staff/web/userCenter/inventory/inbill/page.json",P.abrupt("return",o.request===null||o.request===void 0?void 0:(0,o.request)(r,{method:"GET",params:{params:a,sort:u,filter:s}}));case 2:case"end":return P.stop()}},n)})),f.apply(this,arguments)}function O(n){return p.apply(this,arguments)}function p(){return p=_asyncToGenerator(_regeneratorRuntime().mark(function n(a){var u;return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u="/staff/web/userCenter/inventory/inbill/update.json",r.abrupt("return",request==null?void 0:request(u,{method:"POST",data:a}));case 2:case"end":return r.stop()}},n)})),p.apply(this,arguments)}function A(n){return t.apply(this,arguments)}function t(){return t=_asyncToGenerator(_regeneratorRuntime().mark(function n(a){var u;return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u="/staff/web/userCenter/inventory/inbill/getById.json",r.abrupt("return",request==null?void 0:request(u,{method:"GET",params:{id:a}}));case 2:case"end":return r.stop()}},n)})),t.apply(this,arguments)}function g(n){return T.apply(this,arguments)}function T(){return T=_asyncToGenerator(_regeneratorRuntime().mark(function n(a){var u;return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u="/staff/web/userCenter/inventory/inbill/del.json",r.abrupt("return",request==null?void 0:request(u,{method:"POST",data:_objectSpread({},a)}));case 2:case"end":return r.stop()}},n)})),T.apply(this,arguments)}function L(){return _.apply(this,arguments)}function _(){return _=_asyncToGenerator(_regeneratorRuntime().mark(function n(){var a;return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return a="/staff/web/userCenter/inventory/inbill/page.json",s.abrupt("return",request==null?void 0:request(a,{method:"GET",params:{pageNum:1,pageSize:0}}));case 2:case"end":return s.stop()}},n)})),_.apply(this,arguments)}function m(n){return R.apply(this,arguments)}function R(){return R=v()(i()().mark(function n(a){var u;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u="/staff/web/userCenter/inventory/inbill/consumeInstock.json",r.abrupt("return",o.request===null||o.request===void 0?void 0:(0,o.request)(u,{method:"POST",data:a}));case 2:case"end":return r.stop()}},n)})),R.apply(this,arguments)}},19515:function(H,w,e){e.d(w,{P:function(){return E},V:function(){return o}});var D=e(64599),k=e.n(D),B=e(19632),i=e.n(B),$=e(27484),v=e.n($);function o(){var f=v()().format("YYYYMMDDHHmmssSSS").toString();return f}function E(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],O=i()(f),p=k()(O),A;try{for(p.s();!(A=p.n()).done;){var t=A.value;!(t!=null&&t.valueType)||(t==null?void 0:t.valueType)!=="group"||!(t!=null&&t.columns)||!(t!=null&&t.columns.length)||O.push.apply(O,i()(t==null?void 0:t.columns))}}catch(g){p.e(g)}finally{p.f()}return O.filter(function(g){return g.valueType!=="group"})}}}]);