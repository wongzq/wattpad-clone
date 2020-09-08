(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){e.exports=a.p+"static/media/wattpad-title.6b246aea.png"},function(e,t,a){e.exports=a.p+"static/media/hero-devices.be712ab6.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,s=a(0),l=a.n(s),r=a(15),i=a.n(r),o=(a(22),a(12)),c=(a(23),a(1)),m=a(8);!function(e){e[e.USER=0]="USER",e[e.LOGOUT=1]="LOGOUT"}(n||(n={}));var u,g=function(e,t){switch(t.type){case n.USER:return t.payload;case n.LOGOUT:return null;default:return e}},p=null,h=(a(24),{showSignUp:!1,showSignIn:!1});!function(e){e[e.SIGNIN_SHOW=0]="SIGNIN_SHOW",e[e.SIGNUP_SHOW=1]="SIGNUP_SHOW",e[e.ALL_HIDE=2]="ALL_HIDE"}(u||(u={}));var d={reducer:function(e,t){switch(t){case u.SIGNIN_SHOW:return{showSignIn:!0,showSignUp:!1};case u.SIGNUP_SHOW:return{showSignIn:!1,showSignUp:!0};case u.ALL_HIDE:return h;default:return e}},initState:h},E=(a(25),s.createContext({authState:d.initState,authDispatch:function(){}}));function f(e){var t=s.useContext(E).authDispatch;return s.createElement("div",{className:"nav-container"},s.createElement("nav",null,s.createElement("div",{className:"nav-content"},s.createElement("ul",null,s.createElement("li",null,s.createElement(m.b,{to:"/#",className:"nav-item"},s.createElement("img",{className:"nav-item wattpad-logo",src:a(31),alt:"Wattpad"}))),s.createElement("li",null,s.createElement(m.b,{to:"/#/home",className:"nav-item"},"Browse")),s.createElement("li",null,s.createElement("div",{className:"nav-item"},"Search"))),s.createElement("ul",{className:"right"},s.createElement("li",null,s.createElement("div",{className:"nav-item",onClick:function(e){e.stopPropagation(),t(u.SIGNIN_SHOW)}},"Log in"))))))}function v(e){var t=s.useContext(E).authDispatch;return s.createElement("div",{className:"landing-container"},s.createElement("div",{className:"top"},s.createElement("div",{className:"top-image"},s.createElement("img",{src:a(32),alt:""})),s.createElement("div",{className:"top-title"},s.createElement("h1",null,"Hi, we're Wattpad.")),s.createElement("div",{className:"top-description"},s.createElement("h5",null,"The world's most-loved social storytelling platform"),s.createElement("p",null,"Wattpad connects a global community of 80 million readers and writers through the power of story"),s.createElement("div",{className:"nested-top-buttons"},s.createElement("button",{className:"waves-effect btn-flat btn-orange",onClick:function(e){e.stopPropagation(),t(u.SIGNIN_SHOW)}},"Start Reading"),s.createElement("button",{className:"waves-effect btn-flat btn-orange",onClick:function(e){e.stopPropagation(),t(u.SIGNIN_SHOW)}},"Start Writing")))),s.createElement("div",{style:{height:"30vh"}}))}a(33);function y(e){var t=s.useContext(E),a=t.authState,n=t.authDispatch;return s.createElement("div",{className:"auth-overlay"},s.createElement("div",{className:"auth-dialog"},s.createElement("i",{className:"material-icons btn-close",onClick:function(e){return e.stopPropagation(),a.showSignIn||a.showSignUp?n(u.ALL_HIDE):null}},"close"),s.createElement("div",{className:"auth-header"},s.createElement("h5",null,"Join Wattpad"),s.createElement("p",null,"Be part of a global community of readers and writers, all connected through the power of story.")),s.createElement("div",{className:"auth-body"},s.createElement("form",null,a.showSignUp?s.createElement("div",null,s.createElement("p",null,"Username"),s.createElement("input",{type:"text",placeholder:"Enter username"})):null,s.createElement("div",null,s.createElement("p",null,"Email"),s.createElement("input",{type:"email",placeholder:"Enter email"})),s.createElement("div",null,s.createElement("p",null,"Password"),s.createElement("input",{type:"password",placeholder:"Enter password"})),s.createElement("button",{className:"waves-effect waves-light btn auth-btn",onClick:a.showSignIn||a.showSignUp?function(e){return function(e){e.preventDefault()}(e)}:function(){}},a.showSignIn?"Log in":a.showSignUp?"Sign up":""))),s.createElement("div",{className:"auth-footer"},a.showSignIn?s.createElement("p",null,"Don't have an account?",s.createElement("br",null),s.createElement("span",{onClick:function(e){e.stopPropagation(),n(u.SIGNUP_SHOW)}},"Sign up")):a.showSignUp?s.createElement("p",null,"If you already have an account,",s.createElement("br",null),s.createElement("span",{onClick:function(e){e.stopPropagation(),n(u.SIGNIN_SHOW)}},"Log in")):null)))}a(34),a(35),a(36);function N(e){return s.createElement("div",{className:"story-card-container"},s.createElement("div",{className:"card"},s.createElement("div",{className:"card-image"},s.createElement("img",{src:e.story.imgUrl,alt:"Book cover"}))),s.createElement("div",{className:"card-tags"},s.createElement("i",{className:"material-icons"},"bookmark"),s.createElement("div",{className:"chip"},e.story.tags)))}a(37);function S(e){return s.createElement("div",{className:"story-tile-container"},s.createElement("div",{className:"story-card card"},s.createElement("div",{className:"card-image"},s.createElement("img",{src:e.story.imgUrl,alt:"Book cover"}))),s.createElement("div",{className:"story-info"},s.createElement("h4",{className:"story-title"},e.story.title),s.createElement("div",{className:"story-meta"}),s.createElement("span",{className:"story-parts"},s.createElement("i",{className:"material-icons"},"list"),e.story.parts," parts"),s.createElement("div",{className:"chip-container"},s.createElement("div",{className:"chip story-completed"+(e.story.completed?" completed":" draft")},e.story.completed?"Completed":"Draft"),e.story.genre.map((function(e){return s.createElement("div",{className:"chip"},e)}))),s.createElement("i",{className:"material-icons story-add-library"}),s.createElement("span",{className:"story-description"},e.story.description)))}function w(e){return s.createElement("div",{className:"story-cards-container"},s.createElement("h4",null,e.title),e.featured?s.createElement(S,{story:e.featured}):null,s.createElement("div",{className:"stories-list"},e.stories.map((function(e){return s.createElement("div",{className:"story-card"},s.createElement(N,{story:e}))}))))}function I(e){var t=[[{title:"The Way of Kings",imgUrl:"https://images-na.ssl-images-amazon.com/images/I/71TotnV3idL.jpg",tags:["fantasy"]},{title:"Words of Radiance",imgUrl:"https://images-na.ssl-images-amazon.com/images/I/71WAIGX6PVL.jpg",tags:["fantasy"]},{title:"Oathbringer",imgUrl:"https://images-na.ssl-images-amazon.com/images/I/71jya4AxE8L.jpg",tags:["fantasy"]}],[{title:"The Final Empire",imgUrl:"https://m.media-amazon.com/images/I/51Xs1z2wvEL.jpg",tags:["fantasy"]},{title:"The Well of Ascension",imgUrl:"https://www.dubraybooks.ie/images/thumbs/009/0098531_9780575089938_625.jpeg",tags:["fantasy"]},{title:"The Hero of Ages",imgUrl:"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5750/9780575089945.jpg",tags:["fantasy"]},{title:"The Alloy of Law",imgUrl:"https://images-na.ssl-images-amazon.com/images/I/51AT4y75bJL._SX324_BO1,204,203,200_.jpg",tags:["fantasy"]},{title:"Shadows of Self",imgUrl:"https://images-na.ssl-images-amazon.com/images/I/51ezXqXvhOL.jpg",tags:["fantasy"]},{title:"The Bands of Mourning",imgUrl:"https://images-na.ssl-images-amazon.com/images/I/51D+bsrnDZL._SX325_BO1,204,203,200_.jpg",tags:["fantasy"]}],[{title:"The Hunger Games",imgUrl:"https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg",tags:["sci-fi"]},{title:"Catching Fire",imgUrl:"https://images-na.ssl-images-amazon.com/images/I/61VUik8NJ8L.jpg",tags:["sci-fi"]},{title:"Mockingjay",imgUrl:"https://m.media-amazon.com/images/I/51zkheo7x8L.jpg",tags:["sci-fi"]},{title:"Angels and Demons",imgUrl:"https://images-na.ssl-images-amazon.com/images/I/81S+VsvKTlL.jpg",tags:["thriller"]},{title:"The Da Vinci Code",imgUrl:"https://images-na.ssl-images-amazon.com/images/I/A15FFg6aNLL.jpg",tags:["mystery"]},{title:"Inferno",imgUrl:"https://images-na.ssl-images-amazon.com/images/I/915mr+JhBGL.jpg",tags:["mystery"]}]],a=[{imgUrl:"https://images-na.ssl-images-amazon.com/images/I/71ri38cFODL.jpg",tag:"fantasy",title:"Elantris",parts:65,completed:!0,description:"Elantris was the capital of Arelon: gigantic, beautiful, literally radiant, filled with benevolent beings who used their powerful magical abilities for the benefit of all. Yet each of these demigods was once an ordinary person until touched by the mysterious transforming power of the Shaod.",genre:["fantasy","high fantasy"]},{imgUrl:"https://images-na.ssl-images-amazon.com/images/I/71lZgzNE2kL.jpg",tag:"horror",title:"It",parts:28,completed:!0,description:"It is a 1986 horror novel by American author Stephen King. It was his 22nd book, and his 17th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey.",genre:["horror","thriller","mystery","supernatural","adventure"]}];return s.createElement("div",{className:"home-container"},s.createElement(w,{title:"Top Picks For You",featured:a[0],stories:t[0]}),s.createElement("hr",null),s.createElement(w,{title:"New Arrivals",stories:t[1]}),s.createElement("hr",null),s.createElement(w,{title:"Completed Stories",featured:a[1],stories:t[2]}))}var b=s.createContext({userState:{},userDispatch:function(){}}),U=function(){var e=s.useContext(b),t=e.userState,a=e.userDispatch;return s.useEffect((function(){var e=localStorage.getItem("user");e&&a({type:n.USER,payload:JSON.parse(e)})}),[t]),s.createElement(c.c,null,s.createElement(c.a,{exact:!0,path:"/#"},s.createElement(v,null)),s.createElement(c.a,{exact:!0,path:"/#/home"},s.createElement(I,null)))};function L(e){var t=s.useReducer(g,p),a=Object(o.a)(t,2),n=a[0],l=a[1],r=s.useReducer(d.reducer,d.initState),i=Object(o.a)(r,2),c=i[0],u=i[1];return s.createElement(b.Provider,{value:{userState:n,userDispatch:l}},s.createElement(E.Provider,{value:{authState:c,authDispatch:u}},c.showSignIn||c.showSignUp?s.createElement(y,null):null,s.createElement(m.a,null,s.createElement(f,null),s.createElement("div",{className:"home-container"},s.createElement(U,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.5ba545e8.chunk.js.map