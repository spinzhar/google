(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(e,t,a){e.exports=a(76)},61:function(e,t,a){e.exports={root:"index__root__4PyOE",App:"index__App__25spO","App-logo":"index__App-logo__13boJ","App-logo-spin":"index__App-logo-spin__3YoN-","App-header":"index__App-header__3vAv1","App-link":"index__App-link__l-R5D"}},62:function(e,t,a){e.exports={App:"App__App__1o-Fp","App-logo":"App__App-logo__3JCPt","App-logo-spin":"App__App-logo-spin__RvI1J","App-header":"App__App-header__3iH8L","App-link":"App__App-link__13fTZ"}},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(7),r=a.n(o),i=(a(61),a(44)),p=a(24),c=a(49),d=a(45),s=a(50),u=(a(62),a(112)),_=a(109),g=a(114),h=a(113),m=a(111),A=a(118),v=a(116),E=a(107),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={idOutFolder:null,idInFolder:null,isLoading:!1,toRepeatValue:0},a.handleChangeInput=function(e){"idOutFolder"===e.target.id&&a.setState({idOutFolder:e.target.value}),"idInFolder"===e.target.id&&a.setState({idInFolder:e.target.value})},a.handleChangeSelect=function(e){console.log(e.target),a.setState({toRepeatValue:e.target.value})},a.handleClick=function(e){a.setState({isLoading:!0}),"google".script.run.withSuccessHandler(function(){a.setState({isLoading:!1})}).moveFoldersAndFiles(a.state.idOutFolder,a.state.idInFolder),"google".script.run.setTriggerAtHours(a.state.toRepeatValue)},a}return Object(s.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},this.state.isLoading?l.a.createElement(E.a,null):null,l.a.createElement("h3",null,"\u041f\u0435\u0440\u0435\u043d\u043e\u0441 \u0434\u0438\u0440\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"),l.a.createElement("div",null,l.a.createElement(_.a,{fontSize:"large",style:{fontSize:50,color:"#5f6368"}},"folder_shared"),l.a.createElement(_.a,{fontSize:"large",style:{fontSize:40,color:"#5f6368"}},"arrow_right_alt"),l.a.createElement(_.a,{fontSize:"large",style:{fontSize:50,color:"#5f6368"}},"folder_open"),l.a.createElement("div",null,l.a.createElement(g.a,{id:"idOutFolder",label:"\u0418\u0437 ID \u043f\u0430\u043f\u043a\u0438",type:"search",margin:"normal",onChange:this.handleChangeInput})),l.a.createElement("div",null,l.a.createElement(g.a,{id:"idInFolder",label:"\u0412 ID \u043f\u0430\u043f\u043a\u0438",type:"search",margin:"normal",onChange:this.handleChangeInput}))),l.a.createElement("div",null,l.a.createElement(m.a,{style:{width:"196px",margin:"15px"}},l.a.createElement(v.a,{htmlFor:"age-simple"},"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c"),l.a.createElement(h.a,{value:this.state.toRepeatValue,onChange:this.handleChangeSelect},l.a.createElement(A.a,{value:0},l.a.createElement("em",null,"\u041d\u0435\u0442")),l.a.createElement(A.a,{value:1},"\u041a\u0430\u0436\u0434\u044b\u0439 \u0447\u0430\u0441"),l.a.createElement(A.a,{value:2},"\u0420\u0430\u0437 \u0432 3 \u0447\u0430\u0441\u0430"),l.a.createElement(A.a,{value:6},"\u0420\u0430\u0437 \u0432 6 \u0447\u0430\u0441\u0430"),l.a.createElement(A.a,{value:12},"\u0420\u0430\u0437 \u0432 12 \u0447\u0430\u0441\u0430"),l.a.createElement(A.a,{value:24},"\u041a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c")))),l.a.createElement("div",null,l.a.createElement(u.a,{variant:"outlined",color:"primary",style:{margin:"60px 5px"},onClick:this.handleClick},"\u041f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c")))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[56,1,2]]]);
//# sourceMappingURL=main.046ed210.chunk.js.map