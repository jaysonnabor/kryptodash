(this.webpackJsonpkryptodash=this.webpackJsonpkryptodash||[]).push([[0],{23:function(e,n,t){e.exports=t(39)},28:function(e,n,t){},29:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(11),c=t.n(i),o=(t(28),t(29),t(12)),u=t(4),l=t.n(u),s=t(5),f=t(9),v=t(13),m=t(14),p=t(19),d=t(15),b=t(20),g=t(3),E=t.n(g);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(t,!0).forEach((function(n){Object(o.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j=t(33),y=a.a.createContext({page:"",favorites:[],prices:[],filteredCoins:[],currentFavorite:"",confirmFavorites:function(){},firstVisit:!1,setPage:function(){},addCoin:function(){},removeCoin:function(){},isInFavorites:function(){return!1},setFilteredCoins:function(){},setCurrentFavorite:function(){}}),C=10,x=function(e){function n(e){var t;return Object(v.a)(this,n),(t=Object(p.a)(this,Object(d.a)(n).call(this,e))).componentDidMount=function(){t.fetchCoins(),t.fetchPrices()},t.addCoin=function(e){var n=Object(f.a)(t.state.favorites);n.length<C&&(n.push(e),t.setState({favorites:n}))},t.removeCoin=function(e){var n=Object(f.a)(t.state.favorites);t.setState({favorites:E.a.pull(n,e)})},t.fetchCoins=Object(s.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.coinList();case 2:n=e.sent.Data,console.log("fetch",n),t.setState({coinList:n});case 5:case"end":return e.stop()}}),e)}))),t.fetchPrices=Object(s.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.state.firstVisit){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.prices();case 4:n=(n=e.sent).filter((function(e){return Object.keys(e).length})),console.log("prices",n),t.setState({prices:n});case 8:case"end":return e.stop()}}),e)}))),t.prices=Object(s.a)(l.a.mark((function e(){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=0;case 2:if(!(r<t.state.favorites.length)){e.next=16;break}return e.prev=3,e.next=6,j.priceFull(t.state.favorites[r],"USD");case 6:a=e.sent,n.push(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.warn("Fetch price error: ",e.t0);case 13:r++,e.next=2;break;case 16:return e.abrupt("return",n);case 17:case"end":return e.stop()}}),e,null,[[3,10]])}))),t.isInFavorites=function(e){return E.a.includes(t.state.favorites,e)},t.confirmFavorites=function(){var e=t.state.favorites[0]||"";t.setState({firstVisit:!1,page:"dashboard",currentFavorite:e},(function(){t.fetchPrices()})),localStorage.setItem("kryptoDash",JSON.stringify({favorites:t.state.favorites,currentFavorite:e}))},t.setCurrentFavorite=function(e){t.setState({currentFavorite:e}),localStorage.setItem("kryptoDash",JSON.stringify(h({},JSON.parse(String(localStorage.getItem("kryptoDash"))),{currentFavorite:e})))},t.savedSettings=function(){var e=JSON.parse(String(localStorage.getItem("kryptoDash")));return e?{favorites:e.favorites,currentFavorite:e.currentFavorite}:{page:"settings",firstVisit:!0}},t.setPage=function(e){t.setState({page:e})},t.setFilteredCoins=function(e){return t.setState({filteredCoins:e})},t.state=h({page:"dashboard",favorites:[],currentFavorite:"",prices:[],filteredCoins:[]},t.savedSettings(),{confirmFavorites:t.confirmFavorites,setPage:t.setPage,addCoin:t.addCoin,removeCoin:t.removeCoin,isInFavorites:t.isInFavorites,setFilteredCoins:t.setFilteredCoins,setCurrentFavorite:t.setCurrentFavorite}),t}return Object(b.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return a.a.createElement(y.Provider,{value:this.state},this.props.children)}}]),n}(a.a.Component),F=function(){return a.a.createElement(y.Consumer,null,(function(e){return e.firstVisit?a.a.createElement("div",null,"Welcome to Kryptodash, please select your favorite coin to begin."):null}))},k=t(1),S=t(2);var w="background-color: ".concat("#061a44"),P="background-color: ".concat("#010e2c",";"),D=("background-color: ".concat("#42ff3a",";"),"box-shadow: 0px 0px 5px 1px ".concat("#121d5b")),I="box-shadow: 0px 0px 4px 2px #5fff17";function N(){var e=Object(k.a)(["\n  display: grid;\n  justify-content: center;\n"]);return N=function(){return e},e}function L(){var e=Object(k.a)(["\n  margin: 20px;\n  color: ",";\n  ","\n  padding: 5px;\n  cursor: pointer;\n  &:hover {\n    ","\n  }\n"]);return L=function(){return e},e}var K=S.b.div(L(),"#42ff3a","font-size: 1.5em;",I),U=S.b.div(N()),J=function(){return a.a.createElement(y.Consumer,null,(function(e){var n=e.confirmFavorites;return a.a.createElement(U,null,a.a.createElement(K,{onClick:n},"Confirm Favorites"))}))},V=function(e){return a.a.createElement(y.Consumer,null,(function(n){return n.page!==e.name?null:a.a.createElement("div",null,e.children)}))};function A(){var e=Object(k.a)(["\n  pointer-events: none;\n  opacity: 0.4;\n"]);return A=function(){return e},e}function H(){var e=Object(k.a)(["\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n"]);return H=function(){return e},e}function R(){var e=Object(k.a)(["\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n"]);return R=function(){return e},e}function z(){var e=Object(k.a)(["\n  ","\n  ","\npadding: 10px;\n"]);return z=function(){return e},e}var B=S.b.div(z(),D,w),T=Object(S.b)(B)(R(),I),W=Object(S.b)(T)(H(),"box-shadow: 0px 0px 2px 2px #e41111"),$=Object(S.b)(B)(A());function G(){var e=Object(k.a)(["\n  justify-self: right;\n  display: none;\n  ",": hover & {\n    display: block;\n    color: red;\n  }\n"]);return G=function(){return e},e}function M(){var e=Object(k.a)(["\n  justify-self: right;\n"]);return M=function(){return e},e}function X(){var e=Object(k.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n"]);return X=function(){return e},e}var Y=S.b.div(X()),q=S.b.div(M()),Q=S.b.div(G(),W),Z=function(e){return a.a.createElement(Y,null,a.a.createElement("div",null,e.name),e.topSection?a.a.createElement(Q,null," X "):a.a.createElement(q,null,e.symbol))},_=function(e){return a.a.createElement("img",{alt:e.coin.CoinSymbol,style:e.style||{height:"50px"},src:"http://cryptocompare.com/".concat(e.coin.ImageUrl)})};function ee(e,n,t,r){return e?function(){r(n)}:function(){t(n)}}var ne=function(e){return a.a.createElement(y.Consumer,null,(function(n){var t=n.coinList,r=n.addCoin,i=n.removeCoin,c=n.isInFavorites,o=t[e.coinKey],u=T;return e.topSection?u=W:c(e.coinKey)&&(u=$),a.a.createElement(u,{onClick:ee(e.topSection,e.coinKey,r,i)},a.a.createElement(Z,{topSection:e.topSection,name:o.CoinName,symbol:o.Symbol}),a.a.createElement(_,{coin:o}))}))};function te(){var e=Object(k.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  grid-gap: 15px;\n  margin-top: 40px;\n"]);return te=function(){return e},e}var re=S.b.div(te());function ae(e,n,t,r){return n?t:function(e,n){return Object.keys(n).length>0?Object.keys(n):Object.keys(e).slice(0,100)}(e,r)}var ie=function(e){return a.a.createElement(y.Consumer,null,(function(n){var t=n.coinList,r=n.favorites,i=n.filteredCoins;return a.a.createElement(re,null,ae(t,!!e.topSection,r,i).map((function(n){return a.a.createElement(ne,{key:n,topSection:!!e.topSection,coinKey:n})})))}))},ce=t(18),oe=t.n(ce);function ue(){var e=Object(k.a)(["\n  ","\n  ","\n  border:1px solid;\n  height: 25px;\n  color: #1163c9;\n  place-self: center left;\n"]);return ue=function(){return e},e}function le(){var e=Object(k.a)(["\n  display: grid;\n  grid-template-columns: 200px 1fr;\n"]);return le=function(){return e},e}var se=S.b.div(le()),fe=S.b.input(ue(),P,"font-size: 1.0em"),ve=E.a.debounce((function(e,n,t){var r=Object.keys(n),a=r.map((function(e){return n[e].CoinName})),i=r.concat(a),c=oe.a.filter(e,i,{}).map((function(e){return e.string}));t(E.a.pickBy(n,(function(e,n){var t=e.coinName;return E.a.includes(c,n)||E.a.includes(c,t)})))}),500);var me=function(){return a.a.createElement(y.Consumer,null,(function(e){var n=e.setFilteredCoins,t=e.coinList;return a.a.createElement(se,null,a.a.createElement("h2",null," Search All Coins "),a.a.createElement(fe,{onKeyUp:function(e){return function(e,n,t){var r=e.target.value;r?ve(r,t,n):n([])}(e,n,t)}}))}))},pe=function(){return a.a.createElement(V,{name:"settings"},a.a.createElement(F,null),a.a.createElement(ie,{topSection:!0}),a.a.createElement(J,null),a.a.createElement(me,null),a.a.createElement(ie,null))};function de(){var e=Object(k.a)(["\n  padding: 40px;\n"]);return de=function(){return e},e}var be=S.b.div(de());function ge(){var e=Object(k.a)(["\n      text-shadow: 0 0 60px #03ff03;\n    "]);return ge=function(){return e},e}function Ee(){var e=Object(k.a)(["\n  cursor: pointer;\n  ","\n"]);return Ee=function(){return e},e}function Oe(){var e=Object(k.a)(["\n  display: grid;\n  grid-template-columns: 180px auto 100px 100px;\n"]);return Oe=function(){return e},e}var he=S.b.div(Oe()),je=S.b.div(Ee(),(function(e){return e.active&&Object(S.a)(ge())})),ye=function(e){return a.a.createElement(y.Consumer,null,(function(n){var t,r=n.page,i=n.setPage;return a.a.createElement(je,{active:r===e.name,onClick:function(){return i(e.name)}},(t=e.name).charAt(0).toUpperCase()+t.substr(1))}))},Ce=function(){return a.a.createElement(he,null,a.a.createElement("div",null," KRYPTODASH "),a.a.createElement("div",null),a.a.createElement(ye,{active:!0,name:"dashboard"}),a.a.createElement(ye,{name:"settings"}))},xe=function(e){return a.a.createElement(y.Consumer,null,(function(n){var t=n.coinList,r=n.prices,i=n.firstVisit;return t?i||r?a.a.createElement("div",null,e.children):a.a.createElement("div",null," Loading Prices "):a.a.createElement("div",null," Loading Coins ")}))};function Fe(){var e=Object(k.a)(["\n      ","\n      pointer-events: none;\n    "]);return Fe=function(){return e},e}function ke(){var e=Object(k.a)(["\n      display: grid;\n      ","\n      grid-gap: 5px;\n      grid-template-columns: repeat(3, 1fr);\n      justify-items: right;\n    "]);return ke=function(){return e},e}function Se(){var e=Object(k.a)(["\n  ","\n\n  ","\n"]);return Se=function(){return e},e}function we(){var e=Object(k.a)(["\n      color: red;\n    "]);return we=function(){return e},e}function Pe(){var e=Object(k.a)(["\n  color: green;\n  ","\n"]);return Pe=function(){return e},e}function De(){var e=Object(k.a)(["\n  ","\n"]);return De=function(){return e},e}function Ie(){var e=Object(k.a)(["\n  justify-self: left;\n"]);return Ie=function(){return e},e}function Ne(){var e=Object(k.a)(["\n  justify-self: right;\n"]);return Ne=function(){return e},e}var Le=S.b.div(Ne()),Ke=S.b.div(Ie()),Ue=S.b.div(De(),"font-size: 2em"),Je=S.b.div(Pe(),(function(e){return e.red&&Object(S.a)(we())})),Ve=function(e){return+(e+"").slice(0,7)},Ae=Object(S.b)(T)(Se(),(function(e){return e.compact&&Object(S.a)(ke(),"font-size: .75em")}),(function(e){return e.currentFavorite&&Object(S.a)(Fe(),I)})),He=function(e){var n=e.data;return a.a.createElement(Le,null,a.a.createElement(Je,{red:n.CHANGEPCT24HOUR<0},Ve(n.CHANGEPCT24HOUR)))},Re=function(e){var n=e.sym,t=e.data,r=e.currentFavorite,i=e.setCurrentFavorite;return a.a.createElement(Ae,{currentFavorite:r,onClick:i},a.a.createElement(Y,null,a.a.createElement(Ke,null,n),a.a.createElement(He,{data:t}),a.a.createElement(Ue,null,"$",Ve(t.PRICE))))},ze=function(e){var n=e.sym,t=e.data,r=(e.currentFavorite,e.setCurrentFavorite);return a.a.createElement(Ae,{compact:!0,onClick:r},a.a.createElement(Ke,null,n),a.a.createElement(He,{data:t}),a.a.createElement("div",null,"$",Ve(t.PRICE)))},Be=function(e){var n=e.price,t=e.index,r=Object.keys(n)[0],i=n[r].USD,c=t<5?Re:ze;return a.a.createElement(y.Consumer,null,(function(e){var n=e.currentFavorite,t=e.setCurrentFavorite;return a.a.createElement(c,{sym:r,data:i,currentFavorite:n===r,setCurrentFavorite:function(e){return t(r)}})}))};function Te(){var e=Object(k.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 15px;\n  margin-top: 40px;\n"]);return Te=function(){return e},e}var We=S.b.div(Te()),$e=function(){return a.a.createElement(y.Consumer,null,(function(e){var n=e.prices;return a.a.createElement(We,null,n.map((function(e,n){return a.a.createElement(Be,{key:n,price:e,index:n})})))}))},Ge=function(){return a.a.createElement(V,{name:"dashboard"},a.a.createElement($e,null))},Me=function(){return a.a.createElement(be,null,a.a.createElement(x,null,a.a.createElement(Ce,null),a.a.createElement(xe,null,a.a.createElement(pe,null),a.a.createElement(Ge,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(Me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.cda74050.chunk.js.map