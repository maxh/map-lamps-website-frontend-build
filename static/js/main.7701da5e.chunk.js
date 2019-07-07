(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},149:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(28),o=a.n(r),c=(a(100),a(93)),l=a(21),s=a(6),m=a(5),d=a(9),p=a(8),u=a(10),h=a(1),b=a(25),f="#FFF",g="#FAFAFA",x="#EEE",v="#BBB",w="#555",j=a(65),E=a.n(j),O=a(81),y={base:{fontSize:"medium",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue"'}},C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={isBillingAddressSame:!0},a.handleSubmit=function(){var e=Object(O.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleCheckboxChange=function(e){a.setState({isBillingAddressSame:e.target.checked})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.handleSubmit,className:Object(h.b)(N.form)},i.a.createElement("div",null,i.a.createElement(S,{name:"Email address"},i.a.createElement("input",{className:Object(h.b)(N.formInput)})),i.a.createElement("h3",null,"Shipping information"),i.a.createElement(R,null),i.a.createElement("h3",null,"Billing information"),i.a.createElement("label",null,i.a.createElement("input",{name:"isBillingAddressSame",type:"checkbox",checked:this.state.isBillingAddressSame,onChange:this.handleCheckboxChange}),"Use shipping address for billing"),i.a.createElement("div",{style:{display:this.state.isBillingAddressSame?"none":"block"}},i.a.createElement("h4",null,"Billing address"),i.a.createElement(R,null)),i.a.createElement("h4",null,"Card details"),i.a.createElement("p",{className:Object(h.b)(N.hint)},"SSL Secured & Encrypted"),i.a.createElement(S,{name:"Name on card"},i.a.createElement("input",{className:Object(h.b)(N.formInput)})),i.a.createElement(S,{name:"Card number"},i.a.createElement("div",{className:Object(h.b)(N.ccWrapper)},i.a.createElement(b.CardNumberElement,{style:y,className:Object(h.b)(N.cardInput)}))),i.a.createElement("div",{className:Object(h.b)(N.cardMinorDetails)},i.a.createElement(S,{name:"Card expiry"},i.a.createElement("div",{className:Object(h.b)(N.ccDetailWrapper)},i.a.createElement(b.CardExpiryElement,{style:y,className:Object(h.b)(N.cardInput)}))),i.a.createElement("div",{style:{width:"20px"}}),i.a.createElement(S,{name:"Card CVC"},i.a.createElement("div",{className:Object(h.b)(N.ccDetailWrapper)},i.a.createElement(b.CardCVCElement,{style:y,className:Object(h.b)(N.cardInput)}))))),i.a.createElement("button",{className:Object(h.b)(N.button)},"Confirm order"))}}]),t}(i.a.Component),k=Object(b.injectStripe)(C),N=h.a.create({hint:{color:"gray",fontSize:"small"},cardMinorDetails:{display:"flex",justifyContent:"space-between"},form:{display:"flex",flexDirection:"column",width:"400px",padding:"20px",background:"white","@media (max-width: 800px)":{width:"100%"}},cardInput:{height:"20px",padding:"6px 12px",borderRadius:"4px",borderColor:v,borderStyle:"solid",borderWidth:"1px"},ccWrapper:{width:"266px","@media (max-width: 800px)":{width:"100%"}},ccDetailWrapper:{width:"100px"},formInput:{height:"20px",fontSize:"medium",lineHeight:"24px",padding:"6px 12px",borderRadius:"4px",borderColor:v,borderStyle:"solid",borderWidth:"1px",webkitAppearance:"none","-webkit-appearance":"none",boxShadow:"inset 0px 0px 0px 0px red",outline:"none","@media (max-width: 800px)":{flexGrow:1,alignSelf:"stretch"},":focus":{outline:"none"}},formItem:{marginTop:"30px",display:"flex",flexDirection:"column"},formLabel:{display:"inline-block",marginBottom:"5px"},button:{marginTop:"20px",backgroundColor:"#447AB1",color:"white",fontWeight:"bold",height:"50px",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",padding:"6px 10px",userSelect:"none",textTransform:"uppercase",fontSize:"15px",letterSpacing:"1.4px",":hover":{cursor:"pointer"},":active":{cursor:"pointer"},":focus":{outline:0}}}),S=function(e){var t=e.name,a=e.children;return i.a.createElement("div",{className:Object(h.b)(I.formItem)},i.a.createElement("label",{className:Object(h.b)(I.formLabel)},t),a)},I=h.a.create({formItem:{marginTop:"15px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",flex:1,"@media (max-width: 800px)":{flexDirection:"column",alignItems:"flex-start"}},formLabel:{display:"inline-block",marginBottom:"5px"}}),R=function(){return i.a.createElement("div",null,i.a.createElement(S,{name:"Name"},i.a.createElement("input",{className:Object(h.b)(N.formInput)})),i.a.createElement(S,{name:"Phone number"},i.a.createElement("input",{className:Object(h.b)(N.formInput)})),i.a.createElement(S,{name:"Street address"},i.a.createElement("input",{className:Object(h.b)(N.formInput)})),i.a.createElement(S,{name:""},i.a.createElement("input",{className:Object(h.b)(N.formInput)})),i.a.createElement(S,{name:"City"},i.a.createElement("input",{className:Object(h.b)(N.formInput)})),i.a.createElement(S,{name:"State / Province"},i.a.createElement("input",{className:Object(h.b)(N.formInput)})),i.a.createElement(S,{name:"ZIP / Postal Code"},i.a.createElement("input",{className:Object(h.b)(N.formInput)})),i.a.createElement(S,{name:"Country"},i.a.createElement("input",{className:Object(h.b)(N.formInput)})))},D=a(11),T=a(29),B=a.n(T),z=function(){function e(){Object(s.a)(this,e)}return Object(m.a)(e,[{key:"setCircularConfig",value:function(e){localStorage.setItem("circularMapConfig",JSON.stringify(e))}},{key:"getCircularConfig",value:function(){return JSON.parse(localStorage.getItem("circularMapConfig"))}}]),e}(),F=new z;Object.freeze(z);var A=F,L={light:{none:"maplamps/cjxpcn17t4hol1cnuq3dqfaak",low:"maplamps/cjxpckpdf3p4y1cmkn8ku44wk",medium:"maplamps/cjxpckkau4hxf1cp6k3ld2w5v",high:"maplamps/cjwe768gw1jkc1cq92843klrh"},dark:{none:"maplamps/cjxpiw8rv1efk1cp6nkd9ur8e",low:"maplamps/cjxpiw5av1nb51clghg7kp1c2",medium:"maplamps/cjxpiw2aj4ne31cnrgq6y5ujt",high:"maplamps/cjxpflw074kec1cmb8q35ab9z"}},M=function(e,t){return L[t][e]},P="pk.eyJ1IjoibWFwbGFtcHMiLCJhIjoiY2p3NmNoYmYzMGlmcTRhcWsycXNma3NqNSJ9.RBpqn0qnposf4cWpkUsq_g",W=function(e){var t=B.a.viewport(e.bounds,[1200,1200],0,26,512,!0),a=Object(D.a)(t.center,2),n=a[0],i=a[1],r=t.zoom,o=M(e.density.value,e.theme.value);return"https://api.mapbox.com/styles/v1/".concat(o,"/static/").concat(n,",").concat(i,",").concat(r,",0/").concat(1200,"x").concat(1200,"?access_token=").concat(P)},V=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=A.getCircularConfig();return i.a.createElement("div",{className:Object(h.b)(U.container)},i.a.createElement("p",null,"Checkout for your order"),i.a.createElement("h3",null,"Circular Map Lamp"),i.a.createElement("img",{className:Object(h.b)(U.thumbnail),src:W(e)}),i.a.createElement("table",{className:Object(h.b)(U.configTable)},i.a.createElement("tbody",null,i.a.createElement(q,{name:"Frame finish",value:e.frameFinish.label}),i.a.createElement(q,{name:"Cord color",value:e.cordColor.label}))),"Total $500")}}]),t}(i.a.Component),q=function(e){var t=e.name,a=e.value;return i.a.createElement("tr",{className:Object(h.b)(U.item)},i.a.createElement("td",{className:Object(h.b)(U.itemName)},t),i.a.createElement("td",null,a))},H=V,U=h.a.create({container:{display:"flex",flexDirection:"column",alignItems:"center"},thumbnail:{height:"200px",width:"200px",borderRadius:"100px",background:"radial-gradient(RGB(239, 224, 223), rgb(255, 239, 205), rgb(225, 185, 141))"},configTable:{marginTop:"20px",marginBottom:"20px",width:"100%"},item:{},itemName:{color:"gray",textAlign:"right"}}),Z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).goBack=function(){a.props.history.goBack()},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){A.getCircularConfig();return i.a.createElement("div",{className:Object(h.b)(G.page)},i.a.createElement("div",{className:Object(h.b)(G.innerPage)},i.a.createElement("div",{className:Object(h.b)(G.header)},i.a.createElement("h1",{className:Object(h.b)(G.headerTitle)},i.a.createElement("a",{href:"/",className:Object(h.b)(G.headerLink)},"Map Lamps")),i.a.createElement("div",{onClick:this.goBack,className:Object(h.b)(G.headerLink)},"\u2190 Return to editor")),i.a.createElement("div",{className:Object(h.b)(G.lowerInnerPage)},i.a.createElement(b.Elements,null,i.a.createElement(k,null)),i.a.createElement("div",{className:Object(h.b)(G.preview)},i.a.createElement(H,null)))),i.a.createElement("div",{className:Object(h.b)(G.copyright)},"Preview map \xa9 Mapbox \xa9 OpenStreetMap"))}}]),t}(i.a.Component),G=h.a.create({copyright:{position:"absolute",fontSize:"small",color:"gray",bottom:"5px",right:"5px"},checkout:{display:"flex"},preview:{width:"200px",marginLeft:"30px",background:"white",position:"sticky",top:"30px",padding:"20px",alignSelf:"start","@media (max-width: 800px)":{width:"100%",marginBottom:"30px",marginLeft:"0px",position:"static",alignSelf:"center"}},header:{display:"flex",justifyContent:"space-between",alignItems:"center"},headerTitle:{cursor:"pointer"},headerLink:{color:"black",textDecoration:"none",cursor:"pointer"},page:{position:"relative",padding:"20px",paddingBottom:"30px",background:x,minHeight:"100vh",display:"flex",flexDirection:"row",justifyContent:"center"},innerPage:{display:"flex",flexDirection:"column"},lowerInnerPage:{display:"flex",flexDirection:"row","@media (max-width: 800px)":{flexDirection:"column-reverse",alignItems:"center"}}}),J=function(e){return i.a.createElement("button",{className:[Object(h.b)($.button),e.className].join("  "),onClick:e.onClick,style:e.style},e.children)},$=h.a.create({button:{padding:"10px 20px",borderColor:v,borderStyle:"solid",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"4px",margin:"5px",userSelect:"none",fontSize:"medium",":hover":{backgroundColor:g,cursor:"pointer"},":active":{backgroundColor:x,cursor:"pointer"},":focus":{outline:0}}});function _(e){return i.a.createElement("div",{className:Object(h.b)(Y.container)},i.a.createElement(J,{style:{width:"50px",height:"50px"},onClick:e.onPlusClick},"+"),i.a.createElement(J,{style:{width:"50px",height:"50px"},onClick:e.onMinusClick},"-"))}var Y=h.a.create({container:{position:"absolute",bottom:"20px",right:"20px","@media (max-width: 800px)":{display:"none"}}}),K=a(31),Q=a(37),X=a(41),ee=a.n(X),te=a(35),ae=(a(79),{dragPan:!0,dragRotate:!1,scrollZoom:!0,touchZoom:!0,touchRotate:!1,keyboard:!1,doubleClickZoom:!0,pitchWithRotate:!1}),ne=function(e){var t,a=Object(n.useRef)(null),r=Object(te.a)(360,720,{wait:100}),o=Object(D.a)(r,2),c=o[0],l=o[1];if(c>800){var s=c-ue;t=s>l?90:s/l*90}else if(c<800){var m=l/2;t=c>m?50:c/m*45}var d,p=t*re,u=t*ie,b="".concat(t,"vh"),f="".concat(2*u+2*p,"vh"),g="".concat(p,"vh"),x="".concat(u+p,"vh"),v="".concat(2*u,"vh"),w="".concat(p-.5,"vh"),j="".concat(2*(2*u+1),"vh"),E="".concat(2*(u+p),"vh"),O="".concat(t-oe,"vh"),y="".concat(t/2,"vh"),C="".concat((100-t)/2+oe,"vh"),k={top:g,left:g,height:v,width:v,borderRadius:x};return i.a.createElement("div",{className:Object(h.b)(ce.lamp),style:{height:b,width:b}},i.a.createElement("div",{className:Object(h.b)(ce.mapContainer),style:{left:w,top:w,height:j,width:j,borderRadius:E}},i.a.createElement(Q.default,Object.assign({ref:a,latitude:e.latitude,longitude:e.longitude,zoom:e.zoom},ae,{width:"100%",height:"100%",mapboxApiAccessToken:P,mapStyle:"mapbox://styles/".concat(M(e.density,e.theme)),onViewportChange:e.onViewportChange,attributionControl:!1}),a&&e.geocoderContainerRef?i.a.createElement(ee.a,{enableEventLogging:!1,mapRef:a,inputValue:e.placeName,containerRef:e.geocoderContainerRef,onViewportChange:e.onViewportChange,mapboxApiAccessToken:P,onResult:e.onSearchResult}):null)),i.a.createElement("div",{className:Object(h.b)(ce.cord),style:{backgroundColor:e.cordColor,left:y,top:O,height:C}}),i.a.createElement("div",{className:Object(h.b)(ce.frameBackground),style:{height:f,width:f}}),i.a.createElement("div",{className:Object(h.b)(ce.frame),style:Object(K.a)({},(d=e.frameFinish,"natural"===d?{backgroundImage:"url(/wood.jpg)"}:{backgroundColor:"black"}),{height:f,width:f})}),i.a.createElement("div",{className:Object(h.b)(ce.frameShadow),style:{height:f,width:f,borderRadius:x}}),i.a.createElement("div",{className:Object(h.b)(ce.glow),style:k}),i.a.createElement("div",{className:Object(h.b)(ce.shadow),style:k}))},ie=.4,re=.1,oe=3,ce=h.a.create({lamp:{position:"relative",display:"flex",flexDirection:"row"},frameShadow:{position:"absolute",boxShadow:"0px 0px 40px rgb(0, 0, 0, 5 0%)",pointerEvents:"none",zIndex:"30"},frameBackground:{position:"absolute",pointerEvents:"none",clipPath:"url(#donut-path)",backgroundColor:"black"},frame:{zIndex:"20",position:"absolute",pointerEvents:"none",clipPath:"url(#donut-path)"},glow:{zIndex:"30",position:"absolute",boxShadow:"0px 0px 40px rgb(255, 255, 255, 30%)",pointerEvents:"none"},shadow:{zIndex:"30",position:"absolute",boxShadow:"0px 0px -40px rgb(0, 0, 0, 70%)",pointerEvents:"none"},cord:{position:"absolute",width:"1vh",zIndex:"0"},mapContainer:{zIndex:"10",position:"absolute",backgroundColor:"transparent",backgroundImage:"radial-gradient(RGB(239, 224, 223), rgb(255, 239, 205), rgb(225, 185, 141))",webkitTransform:"translateZ(0)",transform:"scale(.5,.5)",transformOrigin:"top left"}}),le=function(e){var t=e.name,a=e.children;return i.a.createElement("div",{className:Object(h.b)(se.formItem)},i.a.createElement("label",{className:Object(h.b)(se.formLabel)},t),a)},se=h.a.create({formItem:{marginBottom:"20px",display:"flex",flexDirection:"column","@media (max-width: 800px)":{marginLeft:"30px",width:"290px"},"@media (max-width: 640px)":{marginLeft:"0px",marginBottom:"15px",width:"100%"}},formLabel:{display:"inline-block",marginBottom:"5px"}}),me=a(94),de={indicatorSeparator:function(e,t){return{display:"none"}},option:function(e,t){return Object(K.a)({},e,{cursor:"pointer",color:"#000",backgroundColor:t.isSelected?x:t.isFocused?g:f,":active":{backgroundColor:"#FFF"}})},control:function(e,t){return Object(K.a)({},e,{cursor:"pointer",borderColor:(t.isFocused||t.isActive,v),boxShadow:"none","&:hover":{borderColor:(t.isFocused||t.isActive,v),boxShadow:(t.isFocused||t.isActive,"none")}})},dropdownIndicator:function(e,t){return Object(K.a)({},e,{color:v,"&:hover":{color:v}})},singleValue:function(e,t){var a=t.isDisabled?.5:1;return Object(K.a)({},e,{opacity:a,transition:"opacity 300ms"})}},pe=function(e){return i.a.createElement(me.a,{value:e.value,onChange:e.onChange,options:e.options,isClearable:!1,isSearchable:!1,styles:de})},ue=(a(149),300);var he=function(e){if(e){var t=e.split(",").map(parseFloat);if(t.every(function(e){return"number"===typeof e}))return t}},be=function(e){var t=new URLSearchParams(e),a=function(e){return"undefined"===t.get(e)?null:t.get(e)},n=function(e,t){return e.find(function(e){return e.value===t})};return{bounds:he(a("bounds")),placeName:a("placeName"),density:n(fe,a("density")),theme:n(ge,a("theme")),frameFinish:n(xe,a("frameFinish")),cordColor:n(ve,a("cordColor"))}},fe=[{value:"high",label:"High"},{value:"medium",label:"Medium"},{value:"low",label:"Low"},{value:"none",label:"None"}],ge=[{value:"dark",label:"Dark"},{value:"light",label:"Light"}],xe=[{value:"black",label:"Matte Black"},{value:"natural",label:"Baltic Birch"}],ve=[{value:"red",label:"Red"},{value:"black",label:"Black"}],we=[-122.54901035064273,37.6632779986571,-122.33473070007805,37.832711140050684],je=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).geocoderContainerRef=i.a.createRef(),a.persistStateDebounced=function(e,t,a){var n;return function(){var i=this,r=arguments,o=a&&!n;clearTimeout(n),n=setTimeout(function(){n=null,a||e.apply(i,r)},t),o&&e.apply(i,r)}}(function(){a.updateUrl(),a.updateLocalStorage()},500,!1),a.updateLocalStorage=function(){var e=Object.assign({},a.state.viewport);delete e.transitionDuration,delete e.transitionInterpolator,delete e.transitionInterruption,A.setCircularConfig({density:a.state.selectedDensity,theme:a.state.selectedTheme,frameFinish:a.state.selectedFrameFinish,cordColor:a.state.selectedCordColor,bounds:a.state.bounds,viewport:e})},a.updateUrl=function(){var e=new URLSearchParams({density:a.state.selectedDensity.value,theme:a.state.selectedTheme.value,frameFinish:a.state.selectedFrameFinish.value,cordColor:a.state.selectedCordColor.value}),t="bounds=".concat(a.state.bounds.join(","),"&").concat(e);a.props.history.replace("?".concat(t))},a.setAndPersistState=function(e){a.setState(e),a.persistStateDebounced()},a.updateZoom=function(e){var t=a.state.viewport.zoom,n=Object.assign({},a.state.viewport,{zoom:t+e});a.updateViewportAndBounds(n)},a.handlePlusClick=function(){a.updateZoom(.5)},a.handleMinusClick=function(){a.updateZoom(-.5)},a.handleMapResize=function(e,t){var n=B.a.viewport(a.state.bounds,[e,t],0,26,512,!0),i=Object(D.a)(n.center,2),r={height:e,width:t,longitude:i[0],latitude:i[1],zoom:n.zoom};a.updateViewportAndBounds(r)},a.handleViewportChange=function(e){var t=e.height,n=e.width,i=a.state.viewport.height;t&&!i||t&&i&&t!==i?a.handleMapResize(t,n):a.updateViewportAndBounds(e)},a.updateViewportAndBounds=function(e){var t=e=Object.assign({},a.state.viewport,e),n=t.height,i=t.width,r=t.latitude,o=t.longitude,c=t.zoom,l=B.a.bounds([o,r],c,[i,n],512);a.setAndPersistState({viewport:e,bounds:l})},a.handleSearchResult=function(){a.setState({placeName:null})},a.handleDensitySelect=function(e){return a.setAndPersistState({selectedDensity:e})},a.handleThemeSelect=function(e){return a.setAndPersistState({selectedTheme:e})},a.handleFrameFinishSelect=function(e){return a.setAndPersistState({selectedFrameFinish:e})},a.handleCordColorSelect=function(e){return a.setAndPersistState({selectedCordColor:e})},a.handleNextClick=function(){return a.setState({checkout:!0})};var n=be(e.location.search);return a.state={viewport:{height:0,width:0},bounds:n.bounds||we,placeName:n.placeName||"",selectedDensity:n.density||fe[1],selectedTheme:n.theme||ge[1],selectedFrameFinish:n.frameFinish||xe[0],selectedCordColor:n.cordColor||ve[0]},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){if(this.state.checkout)return i.a.createElement(l.a,{push:!0,to:"/checkout"});var e=this.state.viewport,t=e.longitude,a=e.latitude,n=e.zoom;return i.a.createElement("div",{className:Object(h.b)(Ee.container)},i.a.createElement("div",{className:Object(h.b)(Ee.previewPanel)},i.a.createElement("h1",{className:Object(h.b)(Ee.header)},i.a.createElement("a",{href:"/",className:Object(h.b)(Ee.headerLink)},"Map Lamps")),i.a.createElement(ne,{geocoderContainerRef:this.geocoderContainerRef,frameFinish:this.state.selectedFrameFinish.value,cordColor:this.state.selectedCordColor.value,latitude:a,longitude:t,zoom:n,density:this.state.selectedDensity.value,theme:this.state.selectedTheme.value,placeName:this.state.placeName,onViewportChange:this.handleViewportChange,onSearchResult:this.handleSearchResult}),i.a.createElement(_,{onPlusClick:this.handlePlusClick,onMinusClick:this.handleMinusClick}),i.a.createElement("div",{className:Object(h.b)(Ee.copyright)},"\xa9 Mapbox \xa9 OpenStreetMap")),i.a.createElement("div",{className:Object(h.b)(Ee.formPanel)},i.a.createElement("div",{className:Object(h.b)(Ee.formPanelInner)},i.a.createElement("h2",{className:Object(h.b)(Ee.formHeader)},"Design your Map Lamp"),i.a.createElement("div",{className:Object(h.b)(Ee.formItems)},i.a.createElement(le,{name:"Location"},i.a.createElement("div",{ref:this.geocoderContainerRef}),i.a.createElement("div",{className:Object(h.b)(Ee.hint)},"Drag and zoom the map to pick a precise location")),i.a.createElement(le,{name:"Road density"},i.a.createElement(pe,{value:this.state.selectedDensity,onChange:this.handleDensitySelect,options:fe})),i.a.createElement(le,{name:"Map theme"},i.a.createElement(pe,{value:this.state.selectedTheme,onChange:this.handleThemeSelect,options:ge})),i.a.createElement(le,{name:"Frame finish"},i.a.createElement(pe,{value:this.state.selectedFrameFinish,onChange:this.handleFrameFinishSelect,options:xe})),i.a.createElement(le,{name:"Cord Color"},i.a.createElement(pe,{value:this.state.selectedCordColor,onChange:this.handleCordColorSelect,options:ve})))),i.a.createElement("div",{className:Object(h.b)(Ee.footer)},i.a.createElement("div",{className:Object(h.b)(Ee.total)},"Total: $500"),i.a.createElement("button",{className:Object(h.b)(Ee.nextButton),onClick:this.handleNextClick},"Next"))))}}]),t}(i.a.Component),Ee=h.a.create({nextButton:{backgroundColor:"#447AB1",color:"white",fontWeight:"bold",height:"50px",padding:"6px 20px",userSelect:"none",textTransform:"uppercase",fontSize:"15px",letterSpacing:"1.4px",":hover":{cursor:"pointer"},":active":{cursor:"pointer"},":focus":{outline:0}},copyright:{position:"absolute",fontSize:"small",color:"gray",bottom:"5px",left:"5px","@media (max-width: 800px)":{fontSize:"12px",left:"auto",right:"5px"},"@media (max-width: 400px)":{fontSize:"10px"}},notes:{fontSize:"medium",padding:"6px",height:"4em","@media (max-width: 640px)":{flex:1}},header:{position:"absolute",top:"20px",left:"20px",margin:0,cursor:"pointer","@media (max-width: 800px)":{top:"15px",left:"15px",fontSize:"18px"},"@media (max-width: 400px)":{top:"10px",left:"10px",fontSize:"12px"}},headerLink:{color:"black",textDecoration:"none",cursor:"pointer"},container:{display:"flex",flexDirection:"row",height:"100%","@media (max-width: 800px)":{display:"block",height:"auto"}},formPanel:{position:"relative",display:"flex",flexDirection:"column"},formPanelInner:{width:"300px",margin:"20px",display:"flex","@media (max-width: 800px)":{width:"auto"},flex:1,flexDirection:"column"},previewPanel:{backgroundColor:"#EEE",position:"relative",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center",flex:1,"@media (max-width: 800px)":{height:"60vh"}},formItems:{flexGrow:1,"@media (max-width: 800px)":{display:"flex",flexWrap:"wrap"}},footer:{padding:"25px",display:"flex",justifyContent:"space-between",alignItems:"center"},total:{fontSize:"18px",fontWeight:"bold"},formHeader:{fontWeight:"bold","@media (max-width: 800px)":{display:"none"}},hint:{marginTop:"5px",fontSize:"small",color:w}}),Oe=a(86),ye=a.n(Oe),Ce=a(43),ke=a.n(Ce),Ne=a(22),Se=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:Object(h.b)(Ie.menu)},i.a.createElement("div",{className:Object(h.b)(Ie.leftMenu)},i.a.createElement("a",{href:"/",className:Object(h.b)(Ie.text)},i.a.createElement("h1",{className:Object(h.b)(Ie.text)},"Map Lamps"))),i.a.createElement("div",{className:Object(h.b)(Ie.rightMenu)},i.a.createElement("a",{href:"https://www.instagram.com/maplamps",className:Object(h.b)(Ie.text)},i.a.createElement(Ne.d,{className:Object(h.b)(Ie.a)}))))}}]),t}(i.a.Component),Ie=h.a.create({menu:{position:"relative",paddingTop:"30px",width:"80vw","@media (min-width: 1100px)":{width:"900px"}},rightMenu:{position:"absolute",right:0},leftMenu:{position:"absolute",left:0},text:{color:"white",textDecoration:"none",cursor:"pointer",fontSize:"24px",fontWeight:"normal",margin:0,"@media (max-width: 420px)":{fontSize:"18px"}}}),Re=function(){var e=document.querySelector(".BrainhubCarousel"),t=e.offsetTop-50,a=1.7*window.innerHeight;window.scrollTo(0,e.offsetTop?t:a)},De=function(){window.scrollTo(0,.9*window.innerHeight)},Te=function(){var e=Object(te.b)(360,{wait:100});return i.a.createElement("div",null,i.a.createElement("div",{className:Object(h.b)(Be.topSection)},i.a.createElement("div",{className:Object(h.b)(Be.imageContainer)},i.a.createElement("img",{className:Object(h.b)(Be.image),src:e<768?ke.a:ye.a,alt:"main map lamp background"})),i.a.createElement("div",{className:Object(h.b)(Be.taglineContainer)},i.a.createElement("h2",{className:Object(h.b)(Be.tagline)},"Light up",i.a.createElement("br",null)," your place."),i.a.createElement("button",{onClick:Re,className:Object(h.b)(Be.callToAction)},"Browse Map Lamps")),i.a.createElement("div",{className:Object(h.b)(Be.menuContainer)},i.a.createElement(Se,null)),i.a.createElement("div",{className:Object(h.b)(Be.notch)},i.a.createElement(Ne.c,{onClick:De,className:Object(h.b)(Be.arrow)}))))},Be=h.a.create({imageContainer:{position:"absolute",width:"100vw",height:"95vh",backgroundColor:"black","@media (max-width: 767px)":{height:"85vh"}},topSection:{position:"relative",width:"100vw",height:"95vh","@media (max-width: 767px)":{height:"85vh"}},tagline:{textAlign:"center",color:"white",fontSize:"48px",paddingBottom:"30px",fontWeight:"normal",textShadow:"0px 0px 10px rgb(225, 185, 141, .8)","@media (max-width: 767px)":{fontSize:"36px",paddingTop:"90px",paddingBottom:"160px"},"@media (max-width: 420px)":{fontSize:"28px",paddingTop:"10px",paddingBottom:"95px"},"@media (max-width: 350px)":{fontSize:"24px",paddingTop:"28px",paddingBottom:"95px"}},menuContainer:{position:"absolute",width:"100vw",display:"flex",justifyContent:"center"},taglineContainer:{width:"100vw",height:"95vh",position:"absolute",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},image:{width:"100%",height:"100%",objectFit:"cover",zIndex:0,opacity:.6},callToAction:{textTransform:"uppercase",fontSize:"15px",letterSpacing:"1.4px",padding:"20px",backgroundColor:"#eb4f47",borderWidth:0,borderRadius:0,color:"white",fontWeight:"bold",cursor:"pointer",":hover":{backgroundColor:"#eb4f47",cursor:"pointer"},":active":{backgroundColor:"#eb4f47",cursor:"pointer"}},notch:{position:"absolute",bottom:"-55px",width:"80px",height:"80px",left:"50%",marginLeft:"-40px",borderRadius:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center"},arrow:{height:"20px",width:"20px",padding:"20px",borderRadius:"30px",":hover":{cursor:"pointer",backgroundColor:v},":active":{backgroundColor:v,cursor:"pointer"},userSelect:"none",color:w,backgroundColor:x}}),ze=h.a.create({middleSection:{marginTop:"60px",marginBottom:"60px",marginLeft:"auto",marginRight:"auto",width:"90vw","@media (min-width: 1100px)":{width:"900px"},"@media (min-width: 601px)":{marginTop:"90px",marginBottom:"90px"}}}),Fe=function(e){return i.a.createElement("div",{className:Object(h.b)(ze.middleSection)},i.a.createElement("h1",{className:Object(h.b)(Ae.h1)},"Create custom backlit maps"),i.a.createElement("div",{className:Object(h.b)(Ae.details)},i.a.createElement("div",{className:Object(h.b)(Ae.detail)},i.a.createElement(Ne.f,{className:Object(h.b)(Ae.detailIcon)}),i.a.createElement("h2",{className:Object(h.b)(Ae.detailTitle)},"Any location"),i.a.createElement("div",{className:Object(h.b)(Ae.detailDescription)},"Our ",i.a.createElement("a",{href:"/editor"},"online design tool")," makes it easy to select any place for your map lamp. It could be where you live now, grew up, or took a special trip!")),i.a.createElement("div",{className:Object(h.b)(Ae.detail)},i.a.createElement(Ne.g,{className:Object(h.b)(Ae.detailIcon)}),i.a.createElement("h2",{className:Object(h.b)(Ae.detailTitle)},"Quality finish"),i.a.createElement("div",{className:Object(h.b)(Ae.detailDescription)},"Frame options include baltic birch, hardwood, and smooth matte black. The maps are printed at high resolution on durable panels.")),i.a.createElement("div",{className:Object(h.b)(Ae.detail)},i.a.createElement(Ne.e,{className:Object(h.b)(Ae.detailIcon)}),i.a.createElement("h2",{className:Object(h.b)(Ae.detailTitle)},"Dimmable light"),i.a.createElement("div",{className:Object(h.b)(Ae.detailDescription)},"Illumination comes from dimmable LEDs powered by a USB cord in a color of your choice. Wall adapter included."))))},Ae=h.a.create({h1:{paddingTop:"80px","@media (max-width: 800px)":{paddingTop:"40px"},width:"100%",textAlign:"center"},details:{display:"flex","@media (max-width: 800px)":{flexDirection:"column"}},detailDescription:{color:w,fontSize:"20px"},detail:{display:"flex",flexDirection:"column",padding:"20px",flex:1,"@media (max-width: 800px)":{alignItems:"center"}},detailIcon:{height:"40px",width:"40px",padding:"10px",color:"#447AB1"},featureSection:{width:"100%",padding:"50px",display:"flex",":nth-child(events$EventEmitter)":{flexDirection:"row-reverse"}}}),Le=a(69),Me=a.n(Le),Pe=(a(152),a(87)),We=a.n(Pe),Ve=a(88),qe=a.n(Ve),He=a(89),Ue=a.n(He),Ze=[We.a,qe.a,ke.a,Ue.a],Ge=function(){var e=Object(n.useState)(0),t=Object(D.a)(e,2),a=t[0],r=t[1],o=Object(te.b)(360,{wait:100})>1e3;return i.a.createElement("div",{className:Object(h.b)(ze.middleSection)},i.a.createElement(Me.a,{value:a,onChange:r,slidesPerPage:o?2:1,offset:120,centered:!0,infinite:!0,keepDirectionWhenDragging:!0,arrowLeft:o?i.a.createElement(Ne.a,{className:Object(h.b)($e.arrow)}):null,arrowRight:o?i.a.createElement(Ne.b,{className:Object(h.b)($e.arrow)}):null,addArrowClickHandler:!0},Ze.map(function(e,t){return i.a.createElement("img",{key:t,className:Je(t,a),src:e,alt:"gallery preview ".concat(t)})})),o?null:i.a.createElement("div",{className:Object(h.b)($e.dots)},i.a.createElement(Le.Dots,{value:a,onChange:r,number:Ze.length})))},Je=function(e,t){var a=t%Ze.length;return a>=0&&e===a?Object(h.b)($e.selectedImage):a<0&&e===Ze.length+a?Object(h.b)($e.selectedImage):Object(h.b)($e.image)},$e=h.a.create({container:{marginBottom:"80px"},dots:{paddingTop:"20px"},arrow:{height:"20px",width:"20px",padding:"20px",borderRadius:"30px",":hover":{cursor:"pointer",backgroundColor:v},userSelect:"none",color:w,margin:"20px",backgroundColor:x},image:{height:"60vh",opacity:.6,transition:"opacity .5s"},selectedImage:{height:"60vh",opacity:1,transition:"opacity .5s"}}),_e=a(90),Ye=a.n(_e),Ke=a(91),Qe=a.n(Ke),Xe="editor?bounds=-87.8124883161268,41.777974121220176,-87.49528796878933,42.01408424675092&density=medium&theme=light&frameFinish=black&cordColor=red",et=function(e){return i.a.createElement("div",{className:Object(h.b)(ze.middleSection)},i.a.createElement("div",{className:Object(h.b)(tt.model)},i.a.createElement("a",{href:Xe,className:Object(h.b)(tt.imageItem)},i.a.createElement("img",{src:Qe.a,className:Object(h.b)(tt.image),alt:"Chicago Circular Map Lamp against white background"})),i.a.createElement("div",{className:Object(h.b)(tt.textItem)},i.a.createElement("h3",null,"Latest Release"),i.a.createElement("a",{href:Xe},i.a.createElement("h1",null,"Circular Map Lamp")),i.a.createElement("p",null,"The 17-inch diameter circular map lets you select anywhere in the world to feature on your map lamp."),i.a.createElement("a",{href:Xe},i.a.createElement("p",null,"$500")))),i.a.createElement("div",{className:Object(h.b)(tt.model)},i.a.createElement("div",{className:Object(h.b)(tt.imageItem)},i.a.createElement("img",{src:Ye.a,className:Object(h.b)(tt.image),alt:"Manhattan Map Lamp against white background"})),i.a.createElement("div",{className:Object(h.b)(tt.textItem)},i.a.createElement("h3",null,"Original Release"),i.a.createElement("h1",null,"Manhattan Map Lamp"),i.a.createElement("p",null,"The hardwood Manhattan lamp is the original map design. The lamp stands 24 inches tall and 10 inches wide."),i.a.createElement("div",null,"$400"))))},tt=h.a.create({container:{marginBottom:"80px"},model:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column-reverse","@media (min-width: 700px)":{flexDirection:"row",":nth-child(even)":{flexDirection:"row-reverse",textAlign:"right"}}},textItem:{paddingLeft:"20px",paddingBottom:"20px","@media (min-width: 800px)":{width:"50%"}},image:{height:"600px","@media (max-width: 800px)":{height:"300px"}}}),at=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:Object(h.b)(nt.menu)},i.a.createElement("div",{className:Object(h.b)(nt.leftMenu)}),i.a.createElement("div",{className:Object(h.b)(nt.rightMenu)},"Reach us at hi@maplamps.com"))}}]),t}(i.a.Component),nt=h.a.create({menu:{position:"relative",margin:"auto",paddingTop:"60px",width:"80vw",height:"100px","@media (min-width: 1100px)":{width:"900px"}},rightMenu:{position:"absolute",right:0},leftMenu:{position:"absolute",left:0},text:{color:"black",textDecoration:"none",cursor:"pointer",fontSize:"24px",fontWeight:"normal",margin:0}}),it=(a(153),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).mapRef=i.a.createRef(),a.geocoderContainerRef=i.a.createRef(),a.state={bounds:[],placeName:""},a.handleClick=function(){a.launchEditor()},a.handleResult=function(e){var t=e.result,n=t.bbox,i=t.place_name;a.setState({bounds:n,placeName:i}),a.launchEditor()},a.launchEditor=function(){var e=a.state,t=e.bounds,n=e.placeName,i="/editor?bounds=".concat(t.join(","),"&placeName=").concat(n);window.location.href=i},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:Object(h.b)(rt.container)},i.a.createElement("div",{className:[Object(h.b)(rt.launch),"home-search-section"].join(" ")},i.a.createElement("div",{ref:this.geocoderContainerRef}),i.a.createElement("button",{className:Object(h.b)(rt.button),onClick:this.handleClick},"Get started"),i.a.createElement("div",{style:{visibility:"hidden",height:"1px",width:"1px"}},i.a.createElement(Q.default,{mapboxApiAccessToken:P,ref:this.mapRef,onViewportChange:this.handleViewportChange,width:"100%",height:"100%"},this.mapRef?i.a.createElement(ee.a,{mapRef:this.mapRef,containerRef:this.geocoderContainerRef,placeholder:"Type any location...",inputValue:this.state.place,onResult:this.handleResult,mapboxApiAccessToken:P,enableEventLogging:!1}):null))))}}]),t}(i.a.Component)),rt=h.a.create({search:{position:"relative",flexDirection:"column",width:"100vw",display:"flex",alignItems:"center",justifyContent:"center"},launch:{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center","@media (max-width: 600px)":{flexDirection:"column"}},button:{backgroundColor:"#447AB1",color:"white",fontWeight:"bold",height:"50px",borderColor:"#888",borderStyle:"solid",borderLeftWidth:0,position:"relative",display:"flex",justifyContent:"center",alignItems:"center",padding:"6px 20px",borderTopRightRadius:"4px",borderBottomRightRadius:"4px",userSelect:"none",textTransform:"uppercase",fontSize:"15px",letterSpacing:"1.4px",boxShadow:"0px 0px 10px #999",":hover":{cursor:"pointer"},":active":{cursor:"pointer"},":focus":{outline:0},"@media (max-width: 600px)":{borderRadius:"4px",width:"280px",borderLeftWidth:"1px"}}}),ot=a(92),ct=a.n(ot),lt=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:Object(h.b)(st.container)},i.a.createElement("div",{className:Object(h.b)(st.imageContainer)},i.a.createElement("img",{className:Object(h.b)(st.image),src:ct.a,alt:"light background map of sf"})),i.a.createElement("div",{className:Object(h.b)(st.search)},i.a.createElement("h1",{className:Object(h.b)(st.ready)},"Ready to create your map lamp?"),i.a.createElement(it,null),i.a.createElement(at,null)),i.a.createElement("div",{className:Object(h.b)(st.copyright)},"Map data \xa9 OpenStreetMap contributors"))}}]),t}(i.a.Component),st=h.a.create({copyright:{position:"absolute",fontSize:"small",bottom:"5px",left:"5px",background:"white",padding:"2px"},container:{position:"relative",overflow:"hidden"},imageContainer:{position:"absolute"},image:{"@media (max-width: 600px)":{height:"600px"},"@media (min-width: 601px)":{width:"100vw"},objectPosition:"center top",objectFit:"cover",zIndex:0,opacity:".2"},search:{paddingTop:"160px",flexDirection:"column",width:"100vw",display:"flex",alignItems:"center",justifyContent:"center"},ready:{textAlign:"center"}}),mt=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(Te,null),i.a.createElement(Fe,null),i.a.createElement(Ge,null),i.a.createElement(et,null),i.a.createElement(lt,null))}}]),t}(i.a.Component);var dt=function(){return i.a.createElement(b.StripeProvider,{apiKey:"pk_test_12345"},i.a.createElement(c.a,null,i.a.createElement(l.b,{path:"/",exact:!0,component:mt}),i.a.createElement(l.b,{path:"/editor",component:je}),i.a.createElement(l.b,{path:"/checkout",component:Z})))};o.a.render(i.a.createElement(dt,null),document.getElementById("root"))},43:function(e,t,a){e.exports=a.p+"static/media/white.da29db6f.jpg"},79:function(e,t,a){},86:function(e,t,a){e.exports=a.p+"static/media/lake.a74c541e.jpg"},87:function(e,t,a){e.exports=a.p+"static/media/brick.716ac3c6.jpg"},88:function(e,t,a){e.exports=a.p+"static/media/tree.84b55166.jpg"},89:function(e,t,a){e.exports=a.p+"static/media/manhattan-tree.eaaec821.jpg"},90:function(e,t,a){e.exports=a.p+"static/media/white-background-manhattan.8c181051.png"},91:function(e,t,a){e.exports=a.p+"static/media/white-background-chicago.f5372609.png"},92:function(e,t,a){e.exports=a.p+"static/media/sf-clipped.ed49d479.png"},95:function(e,t,a){e.exports=a(154)}},[[95,1,2]]]);
//# sourceMappingURL=main.7701da5e.chunk.js.map