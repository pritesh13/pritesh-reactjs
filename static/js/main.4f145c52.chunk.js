(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(n,t,e){},15:function(n,t,e){"use strict";e.r(t);var a=e(0),o=e.n(a),r=e(2),i=e.n(r),c=(e(14),e(3)),s=e(4),u=e(6),l=e(5),h=e(7),d=function(n){function t(){var n,e;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=Object(u.a)(this,(n=Object(l.a)(t)).call.apply(n,[this].concat(o)))).state={data:[]},e}return Object(h.a)(t,n),Object(s.a)(t,[{key:"componentDidMount",value:function(){var n=this;fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=Narendra+modi&format=json&origin=*").then(function(n){return n.json()}).then(function(t){n.setState({data:t})})}},{key:"render",value:function(){var n=this.state.data.map(function(n,t){return o.a.createElement("li",{key:t},n)});return o.a.createElement("ul",null,n)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},8:function(n,t,e){n.exports=e(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.4f145c52.chunk.js.map