"use strict";(self.webpackChunkfire_safety=self.webpackChunkfire_safety||[]).push([[405],{3405:(t,e,n)=>{n.d(e,{D5:()=>rt,Yy:()=>Z,ah:()=>ut});var o=n(2791),r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof n.g?n.g:"undefined"!=typeof self?self:{};function i(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function s(t,e){return t(e={exports:{}},e.exports),e.exports}var a="function"==typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,u=a?Symbol.for("react.portal"):60106,p=a?Symbol.for("react.fragment"):60107,f=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,d=a?Symbol.for("react.provider"):60109,m=a?Symbol.for("react.context"):60110,y=a?Symbol.for("react.async_mode"):60111,h=a?Symbol.for("react.concurrent_mode"):60111,v=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,j=a?Symbol.for("react.suspense_list"):60120,O=a?Symbol.for("react.memo"):60115,_=a?Symbol.for("react.lazy"):60116,g=a?Symbol.for("react.block"):60121,w=a?Symbol.for("react.fundamental"):60117,E=a?Symbol.for("react.responder"):60118,C=a?Symbol.for("react.scope"):60119;function P(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case c:switch(t=t.type){case y:case h:case p:case l:case f:case b:return t;default:switch(t=t&&t.$$typeof){case m:case v:case _:case O:case d:return t;default:return e}}case u:return e}}}function R(t){return P(t)===h}var S={AsyncMode:y,ConcurrentMode:h,ContextConsumer:m,ContextProvider:d,Element:c,ForwardRef:v,Fragment:p,Lazy:_,Memo:O,Portal:u,Profiler:l,StrictMode:f,Suspense:b,isAsyncMode:function(t){return R(t)||P(t)===y},isConcurrentMode:R,isContextConsumer:function(t){return P(t)===m},isContextProvider:function(t){return P(t)===d},isElement:function(t){return"object"==typeof t&&null!==t&&t.$$typeof===c},isForwardRef:function(t){return P(t)===v},isFragment:function(t){return P(t)===p},isLazy:function(t){return P(t)===_},isMemo:function(t){return P(t)===O},isPortal:function(t){return P(t)===u},isProfiler:function(t){return P(t)===l},isStrictMode:function(t){return P(t)===f},isSuspense:function(t){return P(t)===b},isValidElementType:function(t){return"string"==typeof t||"function"==typeof t||t===p||t===h||t===l||t===f||t===b||t===j||"object"==typeof t&&null!==t&&(t.$$typeof===_||t.$$typeof===O||t.$$typeof===d||t.$$typeof===m||t.$$typeof===v||t.$$typeof===w||t.$$typeof===E||t.$$typeof===C||t.$$typeof===g)},typeOf:P};s((function(t,e){})),s((function(t){t.exports=S})),function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(t){o[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}();function M(){}function x(){}Function.call.bind(Object.prototype.hasOwnProperty),x.resetWarningCache=M;var k=s((function(t){t.exports=function(){function t(t,e,n,o,r,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:x,resetWarningCache:M};return n.PropTypes=n,n}()})),T=i(s((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t.displayName||t.name||("string"==typeof t&&t.length>0?t:"Unknown")}}))),$=function(t,e){var n={};for(var o in t)-1===e.indexOf(o)&&(n[o]=t[o]);return n},A="__global_unique_id__",U=function(){return r[A]=(r[A]||0)+1},D=function(){},B=s((function(t,e){e.__esModule=!0;var n=i(k),r=i(U);function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}i(D),e.default=function(t,e){var i,u,p="__create-react-context-"+(0,r.default)()+"__",f=function(t){function n(){var e,o,r,i;s(this,n);for(var c=arguments.length,u=Array(c),p=0;p<c;p++)u[p]=arguments[p];return e=o=a(this,t.call.apply(t,[this].concat(u))),o.emitter=(r=o.props.value,i=[],{on:function(t){i.push(t)},off:function(t){i=i.filter((function(e){return e!==t}))},get:function(){return r},set:function(t,e){r=t,i.forEach((function(t){return t(r,e)}))}}),a(o,e)}return c(n,t),n.prototype.getChildContext=function(){var t;return(t={})[p]=this.emitter,t},n.prototype.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n=this.props.value,o=t.value,r=void 0;((i=n)===(s=o)?0!==i||1/i==1/s:i!=i&&s!=s)?r=0:(r="function"==typeof e?e(n,o):1073741823,0!=(r|=0)&&this.emitter.set(t.value,r))}var i,s},n.prototype.render=function(){return this.props.children},n}(o.Component);f.childContextTypes=((i={})[p]=n.default.object.isRequired,i);var l=function(e){function n(){var t,o;s(this,n);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return t=o=a(this,e.call.apply(e,[this].concat(i))),o.state={value:o.getValue()},o.onUpdate=function(t,e){0!=((0|o.observedBits)&e)&&o.setState({value:o.getValue()})},a(o,t)}return c(n,e),n.prototype.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?1073741823:e},n.prototype.componentDidMount=function(){this.context[p]&&this.context[p].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?1073741823:t},n.prototype.componentWillUnmount=function(){this.context[p]&&this.context[p].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[p]?this.context[p].get():t},n.prototype.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(o.Component);return l.contextTypes=((u={})[p]=n.default.object,u),{Provider:f,Consumer:l}},t.exports=e.default}));i(B);var W=i(s((function(t,e){e.__esModule=!0;var n=i(o),r=i(B);function i(t){return t&&t.__esModule?t:{default:t}}e.default=n.default.createContext||r.default,t.exports=e.default}))),F=W(null),L=W(null),N=function(t){return function(e){return o.createElement(L.Consumer,null,(function(n){return o.createElement(t,Object.assign({},{parent:n},e))}))}};function q(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=[]);var r=function(r){function i(){r.call(this),this.state={loading:!0},this._isMounted=!1}return r&&(i.__proto__=r),(i.prototype=Object.create(r&&r.prototype)).constructor=i,i.prototype.componentDidMount=function(){var t=this;this._isMounted=!0,this.props.ymaps.load().then((function(e){return Promise.all(n.concat(t.props.modules).map(e.loadModule)).then((function(){!0===t._isMounted&&t.setState({loading:!1},(function(){t.props.onLoad(e)}))}))})).catch((function(e){!0===t._isMounted&&t.props.onError(e)}))},i.prototype.componentWillUnmount=function(){this._isMounted=!1},i.prototype.render=function(){var n=this.props.ymaps,r=!1===e||!1===this.state.loading,i=$(this.props,["onLoad","onError","modules","ymaps"]);return r&&o.createElement(t,Object.assign({},{ymaps:n.getApi()},i))},i}(o.Component);return r.defaultProps={onLoad:Function.prototype,onError:Function.prototype,modules:[]},function(t){var e=T(t);return function(n){return o.createElement(F.Consumer,null,(function(r){if(null===r)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that <"+e+" /> is inside <YMaps /> provider");return o.createElement(t,Object.assign({},{ymaps:r},n))}))}}(r)}var z={lang:"ru_RU",load:"",ns:"",mode:"release"},I={},V=function(t){var e=Date.now().toString(32);this.options=t,this.namespace=t.query.ns||z.ns,this.onload="__yandex-maps-api-onload__$$"+e,this.onerror="__yandex-maps-api-onerror__$$"+e};V.prototype.getApi=function(){return"undefined"!=typeof window&&this.namespace?window[this.namespace]:this.api},V.prototype.setApi=function(t){return this.api=t},V.prototype.getPromise=function(){return this.namespace?I[this.namespace]:this.promise},V.prototype.setPromise=function(t){return this.namespace?I[this.namespace]=this.promise=t:this.promise=t},V.prototype.load=function(){var t=this;if(this.getApi())return Promise.resolve(this.setApi(this.getApi()));if(this.getPromise())return this.setPromise(this.getPromise());var e=Object.assign({onload:this.onload,onerror:this.onerror},z,this.options.query),n=Object.keys(e).map((function(t){return t+"="+e[t]})).join("&"),o=["https://"+(this.options.enterprise?"enterprise.":"")+"api-maps.yandex.ru",this.options.version,"?"+n].join("/"),r=new Promise((function(e,n){window[t.onload]=function(n){delete window[t.onload],n.loadModule=t.loadModule.bind(t),n.ready((function(){return e(t.setApi(n))}))},window[t.onerror]=function(e){delete window[t.onerror],n(e)},t.fetchScript(o).catch(window[t.onerror])}));return this.setPromise(r)},V.prototype.fetchScript=function(t){var e=this;return new Promise((function(n,o){e.script=document.createElement("script"),e.script.type="text/javascript",e.script.onload=n,e.script.onerror=o,e.script.src=t,e.script.async="async",document.head.appendChild(e.script)}))},V.prototype.loadModule=function(t){var e=this;return new Promise((function(n,o){e.getApi().modules.require(t,(function(o){!function(t,e,n,o){void 0===o&&(o=!1),e="string"==typeof e?e.split("."):e.slice();for(var r,i=t;e.length>1;)i[r=e.shift()]||(i[r]={}),i=i[r];i[e[0]]=!0===o&&i[e[0]]||n}(e.api,t,o,!0),n(o)}),o,e.getApi())}))},V._name="__react-yandex-maps__";var Z=function(t){function e(e){t.call(this,e),this.ymaps=new V(e)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){!0===this.props.preload&&this.ymaps.load()},e.prototype.render=function(){return o.createElement(F.Provider,{value:this.ymaps},this.props.children)},e}(o.Component);Z.defaultProps={version:"2.1",enterprise:!1,query:{lang:"ru_RU",load:"",ns:""},preload:!1};var G=/^on(?=[A-Z])/;function Y(t){return Object.keys(t).reduce((function(e,n){if(G.test(n)){var o=n.replace(G,"").toLowerCase();e._events[o]=t[n]}else e[n]=t[n];return e}),{_events:{}})}function H(t,e,n){"function"==typeof n&&t.events.add(e,n)}function J(t,e,n){"function"==typeof n&&t.events.remove(e,n)}function K(t,e,n){Object.keys(Object.assign({},e,n)).forEach((function(o){e[o]!==n[o]&&(J(t,o,e[o]),H(t,o,n[o]))}))}var Q=function(t){return"default"+t.charAt(0).toUpperCase()+t.slice(1)};function X(t,e){return void 0!==t[e]||void 0===t[Q(e)]}function tt(t,e,n){return(X(t,e)?t[e]:t[Q(e)])||n}function et(t,e,n){if(void 0===n&&(n=null),t!==e){if(t&&(t.hasOwnProperty("current")?t.current=null:"function"==typeof t&&t(null)),!e)return;e.hasOwnProperty("current")?e.current=n:"function"==typeof e&&e(n)}}function nt(t){var e=t.width,n=t.height,o=t.style,r=t.className;return void 0!==o||void 0!==r?Object.assign({},o&&{style:o},r&&{className:r}):{style:{width:e,height:n}}}var ot=function(t){function e(){var e=this;t.call(this),this.state={instance:null},this._parentElement=null,this._getRef=function(t){e._parentElement=t}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountObject(this._parentElement,this.props.ymaps.Map,this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){var t=nt(this.props),e=Y(this.props),n=$(e,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return o.createElement(L.Provider,{value:this.state.instance},o.createElement("div",Object.assign({},{ref:this._getRef},t,n),this.props.children))},e.mountObject=function(t,e,n){var o=Y(n),r=o.instanceRef,i=o._events,s=new e(t,tt(n,"state"),tt(n,"options"));return Object.keys(i).forEach((function(t){return H(s,t,i[t])})),et(null,r,s),s},e.updateObject=function(t,e,n){var o=Y(n),r=o._events,i=o.instanceRef,s=Y(e),a=s._events,c=s.instanceRef;if(X(n,"state")){var u=tt(e,"state",{}),p=tt(n,"state",{});u.type!==p.type&&t.setType(p.type),u.behaviors!==p.behaviors&&(u.behaviors&&t.behaviors.disable(u.behaviors),p.behaviors&&t.behaviors.enable(p.behaviors)),p.zoom&&u.zoom!==p.zoom&&t.setZoom(p.zoom),p.center&&u.center!==p.center&&t.setCenter(p.center),p.bounds&&u.bounds!==p.bounds&&t.setBounds(p.bounds)}if(X(n,"options")){var f=tt(e,"options"),l=tt(n,"options",{});f!==l&&t.options.set(l)}tt(e,"width")===tt(n,"width")&&tt(e,"height")===tt(n,"height")||t.container.fitToViewport(),K(t,a,r),et(c,i,t)},e.unmountObject=function(t,e){var n=Y(e),o=n.instanceRef,r=n._events;null!==t&&(Object.keys(r).forEach((function(e){return J(t,e,r[e])})),t.destroy(),et(o))},e}(o.Component);ot.defaultProps={width:320,height:240};var rt=q(ot,!0,["Map"]),it=function(t){function e(){var e=this;t.call(this),this.state={instance:null},this._parentElement=null,this._getRef=function(t){e._parentElement=t}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=this;this._mounted=!0,this.props.ymaps.panorama.isSupported()&&e.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then((function(e){return t._mounted&&t.setState({instance:e})}))},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){this._mounted=!1,e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){var t=nt(this.props);return o.createElement("div",Object.assign({},{ref:this._getRef},t))},e.mountObject=function(t,e,n){var o=Y(n),r=o.instanceRef,i=o._events,s=tt(n,"point"),a=tt(n,"locateOptions"),c=tt(n,"options");return new Promise((function(n,o){e.locate(s,a).done((function(o){if(o.length>0){var s=new e.Player(t,o[0],c);et(null,r,s),Object.keys(i).forEach((function(t){return H(s,t,i[t])})),n(s)}}),o)}))},e.updateObject=function(t,e,n){var o=Y(n),r=o._events,i=o.instanceRef,s=Y(e),a=s._events,c=s.instanceRef;if(X(n,"options")){var u=tt(e,"options"),p=tt(n,"options");u!==p&&t.options.set(p)}if(X(n,"point")){var f=tt(n,"point"),l=tt(e,"point"),d=tt(n,"locateOptions");f!==l&&t.moveTo(f,d)}K(t,a,r),et(c,i,t)},e.unmountObject=function(t,e){var n=Y(e),o=n.instanceRef,r=n._events;null!==t&&(Object.keys(r).forEach((function(e){return J(t,e,r[e])})),et(o))},e}(o.Component);it.defaultProps={width:320,height:240};q(it,!0,["panorama.isSupported","panorama.locate","panorama.createPlayer","panorama.Player"]);var st=function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountControl(this.props.ymaps.control[this.props.name],this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateControl(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountControl(this.state.instance,this.props)},e.prototype.render=function(){return o.createElement(L.Provider,{value:this.state.instance},this.props.children)},e.mountControl=function(t,e){var n=Y(e),o=n.instanceRef,r=n.parent,i=n.lazy,s=n._events,a=new t({data:tt(e,"data"),options:tt(e,"options"),state:tt(e,"state"),mapTypes:tt(e,"mapTypes"),lazy:i});if(Object.keys(s).forEach((function(t){return H(a,t,s[t])})),r&&r.controls&&"function"==typeof r.controls.add)r.controls.add(a);else{if(!r||!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount "+e.name);r.add(a)}return et(null,o,a),a},e.updateControl=function(t,e,n){var o=Y(n),r=o._events,i=o.instanceRef,s=Y(e),a=s._events,c=s.instanceRef;if(X(n,"options")){var u=tt(e,"options"),p=tt(n,"options");u!==p&&t.options.set(p)}if(X(n,"data")){var f=tt(e,"data"),l=tt(n,"data");f!==l&&t.data.set(l)}if(X(n,"state")){var d=tt(e,"state"),m=tt(n,"state");d!==m&&t.state.set(m)}if(X(n,"mapTypes")){var y=tt(e,"mapTypes"),h=tt(n,"mapTypes");y!==h&&(t.removeAllMapTypes(),h.forEach((function(e){return t.addMapType(e)})))}K(t,a,r),et(c,i,t)},e.unmountControl=function(t,e){var n=Y(e),o=n.instanceRef,r=n.parent,i=n._events;null!==t&&(Object.keys(i).forEach((function(e){return J(t,e,i[e])})),r.controls&&"function"==typeof r.controls.remove?r.controls.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),et(o))},e}(o.Component),at=(N(q((function(t){return o.createElement(st,Object.assign({},t,{name:"Button"}))}),!0,["control.Button"])),N(q((function(t){return o.createElement(st,Object.assign({},t,{name:"FullscreenControl"}))}),!0,["control.FullscreenControl"])),N(q((function(t){return o.createElement(st,Object.assign({},t,{name:"GeolocationControl"}))}),!0,["control.GeolocationControl"])),N(q((function(t){return o.createElement(st,Object.assign({},t,{name:"ListBox"}))}),!0,["control.ListBox"])),N(q((function(t){return o.createElement(st,Object.assign({},t,{name:"ListBoxItem"}))}),!0,["control.ListBoxItem"])),N(q((function(t){return o.createElement(st,Object.assign({},t,{name:"RouteButton"}))}),!0,["control.RouteButton"])),N(q((function(t){return o.createElement(st,Object.assign({},t,{name:"RouteEditor"}))}),!0,["control.RouteEditor"])),N(q((function(t){return o.createElement(st,Object.assign({},t,{name:"RoutePanel"}))}),!0,["control.RoutePanel"])),N(q((function(t){return o.createElement(st,Object.assign({},t,{name:"RulerControl"}))}),!0,["control.RulerControl"])),N(q((function(t){return o.createElement(st,Object.assign({},t,{name:"SearchControl"}))}),!0,["control.SearchControl"])),N(q((function(t){return o.createElement(st,Object.assign({},t,{name:"TrafficControl"}))}),!0,["control.TrafficControl"])),N(q((function(t){return o.createElement(st,Object.assign({},t,{name:"TypeSelector"}))}),!0,["control.TypeSelector"])),N(q((function(t){return o.createElement(st,Object.assign({},t,{name:"ZoomControl"}))}),!0,["control.ZoomControl"])),N(q(function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountObject(this.props.ymaps.Clusterer,this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){return o.createElement(L.Provider,{value:this.state.instance},this.props.children)},e.mountObject=function(t,e){var n=Y(e),o=n.instanceRef,r=n.parent,i=n._events,s=new t(tt(e,"options"));if(Object.keys(i).forEach((function(t){return H(s,t,i[t])})),r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(s);else{if(!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount Clusterer");r.add(s)}return et(null,o,s),s},e.updateObject=function(t,e,n){var o=Y(n),r=o._events,i=o.instanceRef,s=Y(e),a=s._events,c=s.instanceRef;if(X(n,"options")){var u=tt(e,"options"),p=tt(n,"options");u!==p&&t.options.set(p)}K(t,a,r),et(c,i,t)},e.unmountObject=function(t,e){var n=Y(e),o=n.instanceRef,r=n.parent,i=n._events;null!==t&&(Object.keys(i).forEach((function(e){return J(t,e,i[e])})),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),et(o))},e}(o.Component),!0,["Clusterer"])),N(q(function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountObject(this.props.ymaps.ObjectManager,this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){return null},e.mountObject=function(t,e){var n=Y(e),o=n.instanceRef,r=n.parent,i=n._events,s=tt(e,"options",{}),a=tt(e,"features",{}),c=tt(e,"filter",null),u=tt(e,"objects",{}),p=tt(e,"clusters",{}),f=new t(s);if(f.add(a||[]),f.setFilter(c),f.objects.options.set(u),f.clusters.options.set(p),Object.keys(i).forEach((function(t){return H(f,t,i[t])})),r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(f);else{if(!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount ObjectManager");r.add(f)}return et(null,o,f),f},e.updateObject=function(t,e,n){var o=Y(n),r=o._events,i=o.instanceRef,s=Y(e),a=s._events,c=s.instanceRef;if(X(n,"options")){var u=tt(e,"options"),p=tt(n,"options");u!==p&&t.options.set(p)}if(X(n,"objects")){var f=tt(e,"objects"),l=tt(n,"objects");f!==l&&t.objects.options.set(l)}if(X(n,"clusters")){var d=tt(e,"clusters"),m=tt(n,"clusters");d!==m&&t.clusters.options.set(m)}if(X(n,"filter")){var y=tt(e,"filter"),h=tt(n,"filter");y!==h&&t.setFilter(h)}if(X(n,"features")){var v=tt(e,"features"),b=tt(n,"features");v!==b&&(t.remove(v),t.add(b))}K(t,a,r),et(c,i,t)},e.unmountObject=function(t,e){var n=Y(e),o=n.instanceRef,r=n.parent,i=n._events;null!==t&&(Object.keys(i).forEach((function(e){return J(t,e,i[e])})),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),et(o))},e}(o.Component),!0,["ObjectManager"])),function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=this.props,n=t.name,o=t.ymaps,r=t.dangerZone,i=e.mountObject(r&&"function"==typeof r.modifyConstructor?r.modifyConstructor(o[n]):o[n],this.props);this.setState({instance:i})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){return null},e.mountObject=function(t,e){var n=Y(e),o=n.instanceRef,r=n.parent,i=n._events,s=new t(tt(e,"geometry"),tt(e,"properties"),tt(e,"options"));if(Object.keys(i).forEach((function(t){return H(s,t,i[t])})),r&&r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(s);else{if(!r||!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount "+e.name);r.add(s)}return et(null,o,s),s},e.updateObject=function(t,e,n){var o=Y(n),r=o._events,i=o.instanceRef,s=Y(e),a=s._events,c=s.instanceRef;if(X(n,"geometry")){var u=tt(e,"geometry",{}),p=tt(n,"geometry",{});Array.isArray(p)&&p!==u?Array.isArray(p[0])&&"number"==typeof p[1]?(t.geometry.setCoordinates(p[0]),t.geometry.setRadius(p[1])):t.geometry.setCoordinates(p):"object"==typeof p&&(p.coordinates!==u.coordinates&&t.geometry.setCoordinates(p.coordinates),p.radius!==u.radius&&t.geometry.setRadius(p.radius))}if(X(n,"properties")){var f=tt(e,"properties"),l=tt(n,"properties");f!==l&&t.properties.set(l)}if(X(n,"options")){var d=tt(e,"options"),m=tt(n,"options");d!==m&&t.options.set(m)}K(t,a,r),et(c,i,t)},e.unmountObject=function(t,e){var n=Y(e),o=n.instanceRef,r=n.parent,i=n._events;null!==t&&(Object.keys(i).forEach((function(e){return J(t,e,i[e])})),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),et(o))},e}(o.Component)),ct={modifyConstructor:function(t){function e(e,n,o){t.call(this,{geometry:e,properties:n},o)}return e.prototype=t.prototype,e}},ut=(N(q((function(t){return o.createElement(at,Object.assign({},t,{name:"GeoObject",dangerZone:ct}))}),!0,["GeoObject"])),N(q((function(t){return o.createElement(at,Object.assign({},t,{name:"Circle"}))}),!0,["Circle"])),N(q((function(t){return o.createElement(at,Object.assign({},t,{name:"Placemark"}))}),!0,["Placemark"])));N(q((function(t){return o.createElement(at,Object.assign({},t,{name:"Polygon"}))}),!0,["Polygon"])),N(q((function(t){return o.createElement(at,Object.assign({},t,{name:"Polyline"}))}),!0,["Polyline"])),N(q((function(t){return o.createElement(at,Object.assign({},t,{name:"Rectangle"}))}),!0,["Rectangle"]))}}]);
//# sourceMappingURL=405.254e0398.chunk.js.map