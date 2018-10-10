(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{366:function(n,t,e){"use strict";e.r(t);var r=e(3),i=e.n(r),o=e(4),a=e.n(o),c=e(2),l=e.n(c),s=e(5),u=e.n(s),d=function(n){function t(){var n,r,o,c;a()(this,t);for(var s=arguments.length,u=Array(s),d=0;d<s;d++)u[d]=arguments[d];return r=o=l()(this,(n=t.__proto__||i()(t)).call.apply(n,[this].concat(u))),o.document=function(){return{document:e(414),className:"activity-indicator-page"}},c=r,l()(o,c)}return u()(t,n),t}(e(395).a);t.default=d},395:function(n,t,e){"use strict";var r=e(396),i=e.n(r),o=e(397),a=e.n(o),c=e(398),l=e.n(c),s=e(3),u=e.n(s),d=e(4),m=e.n(d),v=e(6),h=e.n(v),p=e(2),f=e.n(p),y=e(5),g=e.n(y),C=e(0),A=e.n(C),_=e(42),b=e.n(_),w=e(399),I=e.n(w),N=e(400),k=e.n(N),D=(e(401),function(n){function t(n){m()(this,t);var e=f()(this,(t.__proto__||u()(t)).call(this,n));return e.nodeList=[],e.components=new l.a,e}return g()(t,n),h()(t,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(n){b.a.unmountComponentAtNode(n)})}},{key:"renderDOM",value:function(){var n=!0,t=!1,e=void 0;try{for(var r,o=i()(this.components);!(n=(r=o.next()).done);n=!0){var c=r.value,l=a()(c,2),s=l[0],u=l[1],d=document.getElementById(s);this.nodeList.push(d),d instanceof HTMLElement&&b.a.render(u,d)}}catch(n){t=!0,e=n}finally{try{!n&&o.return&&o.return()}finally{if(t)throw e}}}},{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),t=n.document,e=n.className;if("string"==typeof t){this.components.clear();var r=new I.a.Renderer;r.table=function(n,t){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+t+"</tbody></table></div>"};var i=I()(t,{renderer:r,highlight:function(n){return k.a.highlightAuto(n).value}});return A.a.createElement("div",{className:e,dangerouslySetInnerHTML:{__html:i}})}return A.a.createElement("span",null)}}]),t}(A.a.Component));t.a=D},414:function(n,t){n.exports="## 活动指示器 ActivityIndicator\n\n### 基本用法\n\n```jsx\nimport { Cell, ActivityIndicator } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell description={<ActivityIndicator />}>普通</Cell>\n        <Cell description={<ActivityIndicator className=\"rotate360\" />}>旋转动画</Cell>\n        <Cell description={<ActivityIndicator size=\"lg\" />}>大号</Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-activity-indicator | | 类名前缀 |\n| className | string | | | 追加类名 |\n| strokeWidth | number | | | 指示器边框的宽度 |  \n| percent | number | | | 初始百分比 |\n| size | string | | 'lg' | 大小 |\n"}}]);