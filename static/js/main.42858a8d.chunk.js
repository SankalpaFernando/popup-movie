(this.webpackJsonpmt=this.webpackJsonpmt||[]).push([[0],{105:function(e,t,a){e.exports=a(142)},110:function(e,t,a){},111:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),l=a.n(i),o=(a(110),a(29)),c=a(30),m=a(33),s=a(32),u=(a(111),a(66)),d=a(35),g=a(27),h=a(188),p=a(189),v=a(143),E=a(187),y=a(183),f=a(84),b=a.n(f),x=a(96),C=a(12),w=a(83),k=a.n(w),A=Object(y.a)((function(e){return{root:{flexGrow:1},search:Object(g.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(C.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(C.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(g.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));var S=function(e){var t=A();return r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(k.a,null)),r.a.createElement(x.a,{onChange:e.onTextChange,placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},value:e.textValue,onKeyDown:e.onBrowse,suggestion:"fvksmfg",inputProps:{"aria-label":"search"}}))},j=Object(y.a)({typography:{margin:"1em",fontSize:".9em"},link:{color:"white",textDecoration:"none"}});var O=function(e){var t=j();return r.a.createElement("div",null,r.a.createElement(E.a,{className:t.typography,variant:"h6",component:"h6"},r.a.createElement("a",{className:t.link,href:e.url},e.text)))},T=Object(y.a)((function(e){return{root:{flexGrow:1,backgroundColor:"#345564"},menuButton:{marginRight:e.spacing(2)},appbar:{},title:Object(g.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"})}}));function N(e){var t=T();return r.a.createElement("div",{className:t.root},r.a.createElement(h.a,{position:"static",style:{background:"#3b6978"}},r.a.createElement(p.a,null,r.a.createElement(v.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(b.a,null)),r.a.createElement(E.a,{className:t.title,variant:"h6",noWrap:!0},"PopUp Movie"),r.a.createElement(S,{onBrowse:e.onBrowse,textValue:e.textValue,onTextChange:e.onTextChange}),r.a.createElement(O,{url:"/",text:"Recent"}),r.a.createElement(O,{url:"/browse",text:"Browse"}))))}var B=a(193),F=a(190),M=a(191),R=a(85),q=a.n(R),z=Object(y.a)((function(e){return{root:{maxWidth:245,margin:"2em",height:450},typography:{textAlign:"center",height:"1.5em",overflow:"hidden",fontWeight:"bold",color:"#282c34"},ratings:{textAlign:"center",margin:"5% 0 5% 0",color:"#4cbbb9"}}}));var W=function(e){for(var t=z(),a=[],n=Math.round(e.rating),i=0;i<n;i++)a.push([i]);var l=a.map((function(e){return r.a.createElement(q.a,{key:e})}));return console.log(e),r.a.createElement("div",{key:e.key},r.a.createElement(F.a,{className:t.root,onClick:function(){e.propChange(e.item)}},r.a.createElement("img",Object(g.a)({src:e.img,alt:"No Img Found",width:"250",height:"330"},"alt","This supposed to be poster")),r.a.createElement(M.a,null,r.a.createElement(E.a,{className:t.typography,variant:"body2",color:"textSecondary",component:"p"},e.title),r.a.createElement("p",{className:t.ratings},l))))},I=a(192),P=Object(y.a)({message:{textAlign:"center",fontSize:"2.1em"}});var D=function(e){var t,a=P(),n=!1;return"Cannot Found"===e.movies.message?(n=!0,t=r.a.createElement(I.a,{maxWidth:"sm",style:{textAlign:"center",paddingTop:"10%",height:"100%"}},r.a.createElement(E.a,{className:a.message},"Movie Is Not Available In Our Database"))):"Probhited"===e.movies.message?(n=!0,t=r.a.createElement(I.a,{maxWidth:"sm",style:{textAlign:"center",paddingTop:"10%",height:"100%"}},r.a.createElement(E.a,{className:a.message},"You Searched For Probhited Content"))):(n=!1,t=e.movies.map((function(t){return r.a.createElement(W,{key:t.id,item:t.id,propChange:e.propChange,rating:t.rating,title:t.title_english,img:t.large_cover_image})}))),n?t:r.a.createElement(B.a,{style:{margin:" 0 2em 0 3em "},cols:3},t)},Z=a(28),_=a.n(Z),G=a(15),U=a(194),V=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={listMovie:[],searchTerm:" ",prop:e},n.onSearch=n.onSearch.bind(Object(G.a)(n)),n.change=n.change.bind(Object(G.a)(n)),n.propChange=n.propChange.bind(Object(G.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0},(function(){_.a.get("https://enigmatic-river-85070.herokuapp.com/latest").then((function(e){return e.data[0]})).then((function(t){return e.setState({listMovie:t,loading:!1})}))}))}},{key:"change",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"propChange",value:function(e){this.state.prop.history.push("/download",{movieid:e})}},{key:"onSearch",value:function(e){var t=this,a=this.state.searchTerm;"Enter"===e.key&&a&&this.setState({loading:!0},(function(){_.a.get("https://enigmatic-river-85070.herokuapp.com/quick_browse?name=".concat(a)).then((function(e){return e.data[0]})).then((function(e){return t.setState({listMovie:e,loading:!1})}))}))}},{key:"render",value:function(){try{var e=this.state.loading;return r.a.createElement("div",null,r.a.createElement(N,{onBrowse:this.onSearch,onTextChange:this.change,textValue:this.state.searchTerm}),e?r.a.createElement(I.a,{maxWidth:"sm",style:{textAlign:"center",paddingTop:"20%"}},r.a.createElement(U.a,{style:{color:"#77d8d8"},size:100})):r.a.createElement("div",null,r.a.createElement(D,{propChange:this.propChange,movies:this.state.listMovie})))}catch(t){this.prop.history.path("/error")}}}]),a}(r.a.Component),K=a(198),Q=a(206),X=a(202),Y=a(195),H=a(205);var L=function(e){var t=e.value.map((function(e){return r.a.createElement(H.a,{name:e,value:e},e)}));return r.a.createElement(Y.a,{variant:"outlined",fullWidth:!0},r.a.createElement(Q.a,{id:"demo-simple-select-outlined-label"},e.label),r.a.createElement(X.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",onChange:e.action,placeholder:"A"},t))},J=a(204),$=a(199),ee=Object(y.a)({combo:{margin:"1.1em"},container:{marginTop:"2.5em"},input:{borderColor:"green"}});var te=function(e){var t=ee(),a=[{key:"Genre",value:["all","action","adventure","animation","biography","comedy","crime","documentary","drama","family","fantasy","film-noir","game-show","history","horror","music","musical","mystery","news","reality-tv","romance","sci-fi","sport","talk-show","thriller","war","western"],action:e.ongenreChange},{key:"Quality",value:["all","720p","1080p","3D","2160p"],action:e.onqualityChange},{key:"Order By",value:["latest","oldest","featured","seeds","peers","year","rating","likes","alphabetical","downloads"],action:e.onorderChange}].map((function(e){return r.a.createElement(K.a,{item:!0,xs:12,sm:3,lg:3,className:t.combo},r.a.createElement(L,{label:e.key,action:e.action,value:e.value})," ")}));return r.a.createElement(I.a,{className:t.container,style:{display:"flex"},maxWidth:"sm"},r.a.createElement(K.a,{item:!0,sm:0,md:0,lg:1}),r.a.createElement(K.a,{item:!0,sm:12,md:12,lg:10},r.a.createElement(J.a,{className:{input:t.input},onChange:e.ontextChange,variant:"outlined",fullWidth:!0,placeholder:"Search...."}),r.a.createElement("div",null,r.a.createElement(K.a,{container:!0},a,r.a.createElement(K.a,{item:!0,xs:2,lg:3}),r.a.createElement(K.a,{item:!0,xs:8,lg:6,style:{textAlign:"center"}},r.a.createElement($.a,{style:{background:"#77d8d8"},onClick:e.onSearch,fullWidth:!0,variant:"contained",color:"primary"},"Search")),r.a.createElement(K.a,{xs:2,item:!0,lg:3})))),r.a.createElement(K.a,{item:!0,sm:0,md:0,lg:1}))},ae=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={searchTerm:"",genre:"",quality:"",order:"",listMovie:[],loading:!1,prop:e},n.onSearch=n.onSearch.bind(Object(G.a)(n)),n.textChange=n.textChange.bind(Object(G.a)(n)),n.genreChange=n.genreChange.bind(Object(G.a)(n)),n.qualityChange=n.qualityChange.bind(Object(G.a)(n)),n.orderChange=n.orderChange.bind(Object(G.a)(n)),n.propChange=n.propChange.bind(Object(G.a)(n)),n}return Object(c.a)(a,[{key:"onSearch",value:function(){var e=this;this.setState({loading:!0},(function(){_.a.get("https://enigmatic-river-85070.herokuapp.com/detailed_browse?query_term=".concat(e.state.searchTerm,"&genre=").concat(e.state.genre,"&quality=").concat(e.state.quality,"&order_by=").concat(e.state.order)).then((function(e){return e.data[0]})).then((function(t){return e.setState({listMovie:t,loading:!1})}))}))}},{key:"textChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"genreChange",value:function(e){this.setState({genre:e.target.value})}},{key:"qualityChange",value:function(e){this.setState({quality:e.target.value})}},{key:"orderChange",value:function(e){this.setState({order:e.target.value})}},{key:"propChange",value:function(e){var t=this.state.prop;console.log(e),t.history.push("/download",{movieid:e})}},{key:"render",value:function(){try{var e=this.state.loading;return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(te,{ontextChange:this.textChange,ongenreChange:this.genreChange,onqualityChange:this.qualityChange,onorderChange:this.orderChange,onSearch:this.onSearch}),e?r.a.createElement(I.a,{maxWidth:"sm",style:{textAlign:"center",paddingTop:"10%"}},r.a.createElement(U.a,{style:{color:"#77d8d8"},size:100})):r.a.createElement(D,{propChange:this.propChange,movies:this.state.listMovie}))}catch(t){this.prop.history.path("/error")}}}]),a}(r.a.Component);a(133);var ne=function(e){return r.a.createElement(K.a,{item:!0,lg:4,md:4,xs:12,style:{textAlign:"center"}},r.a.createElement("img",Object(g.a)({alt:"No Img Found",style:{margin:"0"},src:e.img,height:"340",width:"260"},"style",{borderRadius:".5em",margin:"1em"})))},re=(a(134),Object(y.a)({detailcol:{padding:"0em 2em 0em .4em",fontSize:"1em"},detailcollast:{padding:".6em 2em 0em 1em",fontSize:"1em"}}));var ie=function(e){var t=re();return r.a.createElement("div",{className:"detailrow"},r.a.createElement("p",{className:t.detailcol},e.identifier),r.a.createElement("p",{className:t.detailcollast},e.value))},le=a(86),oe=a.n(le);a(135);var ce=function(e){var t=e.details.genres,a="";if(t)for(var n=0;n<t.length;n++)n===t.length-1?a+="".concat(t[n]):a+="".concat(t[n],"/");return r.a.createElement(K.a,{item:!0,lg:4,xs:12,md:4,className:"Text"},r.a.createElement("h1",{style:{fontSize:"2.5em"}},e.details.title),r.a.createElement("p",{style:{fontSize:"1.3em"}},e.details.year),r.a.createElement("p",{style:{fontSize:"1.2em",width:"100%",overflowX:"hidden"}},a),r.a.createElement(ie,{identifier:r.a.createElement(oe.a,{style:{color:"#4cbbb9",marginRight:".5em",paddingTop:".2em"}}),value:e.details.like_count}),r.a.createElement(ie,{identifier:r.a.createElement("img",{style:{paddingTop:"0em"},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADXUlEQVRoge2YTYgbZRjHf89MktbE5N21W6GtCnoTepK6gg3Fgh7c9iZehD171ssepBVWwVMFTxbrRVt6EOqlLl60i2S6SC1awV4UPw6yortdMzPZjyaZeTwkEyay7CSbsLOF+UGYeV7+z5P/w/u+kzcDGRkZGRkZGRn7DoluvFr5LGK9ofAcUErR0yA0BG6p6PvmpLcA3UbcmnkX4a10ve0WecdU6+fFq5XPqljXgaYI52zNXylVV5fTtrcT687U0Za2ZkWYBwqgZ/Acc8N1jNZrZi5tg8NSr5k51zHq1sxXlsKzAHltfZq2sWHJtdufACBMi+sYBTBVV7YT69JjD7mBfxCg2S60Hj290li+fbRY3Fw/EGmMXd6S5//c/Gfx8MOFXDMfjUf6QUzd+/aRit0K7Hi9QfIi/1aS0AsacyKsibBWKDQvA5S21i9EYyKs+YH/AUAh31yIj0d61zEfuo7R2GfTdSaWPcd87d+cOAWQawffRHle0Bh6meeGTdgOFY4DCDw+YMpB0CMKR1T1hC5yyBvRQ+KMDMhx/QwbODaA9qKGvBiLK36u/FSfQsInXccsuI5Z9xyzuOZMPpFUdFyNlP1j5WmgMIhYbbkXjwPLLv7P1kt0HkJFhRcswnNJNcfVCIo9M65awCXgWi8SppISxtFICIDqy33xKCgK0h4mZRyN/N69PtO9/jKGmkC4143oT92bzu+Q8sPoNUFFgmH0IzciyN1+A/w4ak0AC/Z2RhS9S2xfiOqdUWt2C+/xjITWBvBHFOe0vfOMiJSsMHw6PpTfZhlpCpud2D75u3Rq46+dpTqLyNXYSKNU//fnPonoK6i+2jMZJi+zsTTS2yfKsMvqPujrMsP9/nr6vQqVbril6OdJhRLPWjnJfdTS1vXuN9QBAqz3LA0/BggDfs3ZwVIY2tfUklUAVU7E9RpyCeFGz6itnrZlRQP5bfK0Wwew7OC1oG0X1ZJg8qR7B2DFmSofrq76SR4BEo/x+534Md6Hzt/HVB3tgo2lQ9Eh1bUEvgNoaWs2RU+7ohm2O56V2+LerJxB5Qugqcr5vOQvP4AvH2Y6r4OciXnQxKPy/kTmTbX+dm+Du05lBpU3EaaBcorOBsFHuYXoBVP1vkzbTEZGRkZGRkZGxgPCf6wnXqM0VuuxAAAAAElFTkSuQmCC",width:"35",height:"40"}),value:e.details.rating}))};var me=function(e){var t=Object(d.e)();return r.a.createElement(K.a,{item:!0,style:{textAlign:"center",marginTop:"1.1em"},lg:6,md:6,onClick:function(){t.push("/download",{movieid:e.id}),window.location.reload()},xs:6},r.a.createElement("img",{alt:"No Img Found",style:{borderRadius:".3em",backgroundSize:"100% 100%"},src:e.img,height:"150",width:"110"}))};a(138);var se=function(e){var t;return e.suggestion&&(t=e.suggestion.map((function(e){return r.a.createElement(me,{id:e.id,img:e.medium_cover_image})}))),r.a.createElement(K.a,{item:!0,lg:3,md:4,xs:12},r.a.createElement(I.a,null,r.a.createElement("p",{style:{textAlign:"center",fontSize:"1.5em"},className:"similar"},"Similar Movies"),r.a.createElement(K.a,{container:!0},t)))};a(139);var ue=function(e){var t="https://www.youtube.com/embed/".concat(e.video);return r.a.createElement(I.a,{style:{marginTop:"3em"}},r.a.createElement(K.a,{className:"trailer",container:!0},r.a.createElement(K.a,{item:!0,lg:6,md:6,xs:12},r.a.createElement("iframe",{width:"100%",src:t,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),r.a.createElement(K.a,{item:!0,lg:6,md:6,xs:12},r.a.createElement("img",{alt:"No Img Found",className:"img-trailer",src:e.img,width:"100%"}))))};a(140);var de=function(e){return r.a.createElement("div",{style:{display:"flex"},className:"Avatar"},r.a.createElement("img",{src:e.img,style:{width:"50px",backgroundColor:"grey",height:"50px",borderRadius:"50%",margin:"1em"}}),r.a.createElement("p",{style:{paddingTop:"1em"}},e.name))};var ge=function(e){var t;return e.casts&&(t=e.casts.map((function(e){return r.a.createElement(de,{name:e.name.substring(0,12),img:e.url_small_image})}))),r.a.createElement(I.a,null,r.a.createElement(K.a,{container:!0},r.a.createElement(K.a,{item:!0,lg:7,md:7,xs:12},r.a.createElement("p",{style:{fontSize:"1.3em"}},"Synopis"),r.a.createElement("p",{style:{textAlign:"justify"}},e.synopis)),r.a.createElement(K.a,{item:!0,lg:5,md:5,xs:12},r.a.createElement("p",{style:{marginTop:"1em",fontSize:"1.3em"}},"Cast & Crew"),r.a.createElement("div",{style:{margin:"1.5em 0 0 1.8em"}},t))))},he=a(203),pe=a(200),ve=a(201),Ee=a(88),ye=a.n(Ee),fe=a(89),be=a.n(fe),xe=a(91),Ce=a.n(xe),we=a(92),ke=a.n(we),Ae=a(93),Se=a.n(Ae),je=a(94),Oe=a.n(je),Te=a(90),Ne=a.n(Te);a(141);var Be=function(e){return"magnet:?xt=urn:btih:".concat(e.torrent.hash,"&dn=").concat(e.torrent.url,"tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fp4p.arenabg.ch%3A1337&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337"),r.a.createElement(I.a,null,r.a.createElement(he.a,null,r.a.createElement(pe.a,{expandIcon:r.a.createElement(ye.a,{style:{color:"#3b6978"}}),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(E.a,null,"".concat(e.name," ").concat(e.torrent.quality))),r.a.createElement(ve.a,null,r.a.createElement(I.a,null,r.a.createElement(K.a,{container:!0},r.a.createElement(K.a,{item:!0,lg:2,md:2,xs:12,style:{display:"flex",justifyContent:"center"}},r.a.createElement(be.a,{style:{margin:".5em .2em 0 0 "}}),r.a.createElement("p",null,e.torrent.size)),r.a.createElement(K.a,{item:!0,lg:2,md:2,xs:12,style:{display:"flex",justifyContent:"center"}},r.a.createElement(Ne.a,{style:{margin:".5em .2em 0 0 "}}),r.a.createElement("p",null,e.torrent.type)),r.a.createElement(K.a,{item:!0,lg:2,md:2,xs:12,style:{display:"flex",justifyContent:"center"}},r.a.createElement(Ce.a,{style:{margin:".5em .2em 0 0 "}}),r.a.createElement("p",null,function(e){var t=e/60,a=Math.floor(t),n=Math.round(60*(t-a));return"".concat(a,"hr ").concat(n,"min")}(e.time))),r.a.createElement(K.a,{item:!0,lg:2,md:2,xs:12,style:{display:"flex",justifyContent:"center"}},r.a.createElement(ke.a,{style:{margin:".5em .2em 0 0 "}}),r.a.createElement("a",{href:"https://yts-subs.com/movie-imdb/".concat(e.imdb),target:"blank",className:"link"}," ",r.a.createElement("p",null,"Subtitles"))),r.a.createElement(K.a,{item:!0,lg:2,md:2,xs:12,style:{display:"flex",justifyContent:"center"}},r.a.createElement(Se.a,{style:{margin:".5em .2em 0 0 "}}),r.a.createElement("p",null,e.torrent.seeds)),r.a.createElement(K.a,{item:!0,lg:2,md:2,xs:12,style:{display:"flex",justifyContent:"center"}},r.a.createElement(Oe.a,{style:{margin:".5em .2em 0 0 "}}),r.a.createElement("p",null,e.torrent.peers)),r.a.createElement(K.a,{container:!0,style:{marginTop:"2em"}},r.a.createElement(K.a,{item:!0,lg:3,md:3,xs:0}),r.a.createElement(K.a,{item:!0,lg:3,md:3,xs:12,style:{textAlign:"center",paddingBottom:"1em"}},r.a.createElement("a",{href:e.torrent.url},r.a.createElement($.a,{variant:"contained",style:{background:"#4cbbb9",color:"white"}},"Torrent Download"))),r.a.createElement(K.a,{item:!0,lg:3,md:3,xs:12,style:{textAlign:"center"}},r.a.createElement("a",{href:e.magnet},r.a.createElement($.a,{variant:"contained",style:{background:"#4cbbb9",color:"white"}},"Direct  Download"))),r.a.createElement(K.a,{item:!0,lg:3,md:3,xs:0})))))))},Fe=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);try{n.state={movieid:e.location.state.movieid,movie:[],loading:!1,prop:e,suggestion:[]}}catch(r){}return n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0},(function(){_.a.get("https://enigmatic-river-85070.herokuapp.com/movie_details?movie_id=".concat(e.state.movieid)).then((function(e){return e.data})).then((function(t){return e.setState({loading:!1,movie:t})})),_.a.get("https://enigmatic-river-85070.herokuapp.com/movie_suggestion?movie_id=".concat(e.state.movieid)).then((function(t){return e.setState({suggestion:t.data})}))}))}},{key:"render",value:function(){var e=this;try{var t;return this.state.movie.torrents&&(t=this.state.movie.torrents.map((function(t){return r.a.createElement(Be,{torrent:t,name:e.state.movie.title,imdb:e.state.movie.imdb_code,time:e.state.movie.runtime})}))),r.a.createElement("div",null,this.state.loading?r.a.createElement(I.a,{maxWidth:"sm",style:{textAlign:"center",paddingTop:"20%"}},r.a.createElement(U.a,{style:{color:"#77d8d8"},size:100})):r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("div",{style:{marginTop:"5em"}},r.a.createElement(K.a,{container:!0},r.a.createElement(ne,{img:this.state.movie.large_cover_image}),r.a.createElement(ce,{details:this.state.movie}),r.a.createElement(se,{suggestion:this.state.suggestion})),r.a.createElement(K.a,{container:!0},r.a.createElement(ue,{video:this.state.movie.yt_trailer_code,img:this.state.movie.large_screenshot_image2})),r.a.createElement(K.a,{container:!0},r.a.createElement(ge,{synopis:this.state.movie.description_full,casts:this.state.movie.cast})),r.a.createElement(K.a,{lg:12,xs:12,style:{margin:"8% 0 8% 0"},container:!0},t))," "))}catch(a){return r.a.createElement("h1",{style:{textAlign:"center"}},"Error Occurred")}}}]),a}(r.a.Component);var Me=function(){return r.a.createElement("div",{style:{width:"100%",backgroundColor:"#3b6978",position:"fixed",bottom:"0",marginTop:"10%"}},r.a.createElement("p",{style:{textAlign:"center",color:"white"}},"Sankalpa ",r.a.createElement("span",null," \xa9 "),"  2020"))};var Re=function(){return r.a.createElement("div",{style:{backgroundColor:"#333",textAlign:"center"}},r.a.createElement("p",{style:{color:"white"}},"Error Occured"))},qe=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.call(this)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u.a,{basename:"/popup-movie"},r.a.createElement(d.a,{exact:!0,path:"/",component:V}),r.a.createElement(d.a,{path:"/browse",component:ae}),r.a.createElement(d.a,{path:"/download",component:Fe}),r.a.createElement(d.a,{path:"/error",component:Re})),r.a.createElement(Me,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[105,1,2]]]);
//# sourceMappingURL=main.42858a8d.chunk.js.map