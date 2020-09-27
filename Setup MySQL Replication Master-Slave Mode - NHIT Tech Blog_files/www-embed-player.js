(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function r(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
r("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.S=b.prototype}
function oa(){this.m=!1;this.i=null;this.g=void 0;this.f=1;this.j=this.l=0;this.u=this.h=null}
function pa(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
oa.prototype.A=function(a){this.g=a};
function qa(a,b){a.h={Fa:b,ra:!0};a.f=a.l||a.j}
oa.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function w(a,b,c){a.f=c;return{value:b}}
oa.prototype.J=function(a){this.f=a};
function ra(a){a.l=2;a.j=3}
function sa(a){a.l=0;a.h=null}
function ta(a){a.u=[a.h];a.l=0;a.j=0}
function ua(a){var b=a.u.splice(0)[0];(b=a.h=a.h||b)?b.ra?a.f=a.l||a.j:void 0!=b.J&&a.j<b.J?(a.f=b.J,a.h=null):a.f=a.j:a.f=4}
function va(a){this.f=new oa;this.g=a}
function wa(a,b){pa(a.f);var c=a.f.i;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.m=!1,e;var f=e.value}catch(g){return a.f.i=null,qa(a.f,g),ya(a)}a.f.i=null;d.call(a.f,f);return ya(a)}
function ya(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.m=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,qa(a.f,c)}a.f.m=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.ra)throw b.Fa;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){pa(a.f);a.f.i?b=xa(a,a.f.i.next,b,a.f.A):(a.f.A(b),b=ya(a));return b};
this["throw"]=function(b){pa(a.f);a.f.i?b=xa(a,a.f.i["throw"],b,a.f.A):(qa(a.f,b),b=ya(a));return b};
this["return"]=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){var c=new za(new va(b));na&&a.prototype&&na(c,a.prototype);return c}
r("Reflect",function(a){return a?a:{}});
r("Reflect.construct",function(){return ia});
r("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function Aa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Aa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Aa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
r("Object.setPrototypeOf",function(a){return a||na});
function Ba(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ba(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||Ca});
r("Promise",function(a){function b(g){this.f=0;this.h=void 0;this.g=[];this.m=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.G),reject:g(this.j)}};
b.prototype.G=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.M(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.l(g)}};
b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.N(h,g):this.l(g)};
b.prototype.j=function(g){this.A(2,g)};
b.prototype.l=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.f)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.f);this.f=g;this.h=h;2===this.f&&this.H();this.u()};
b.prototype.H=function(){var g=this;e(function(){if(g.D()){var h=da.console;"undefined"!==typeof h&&h.error(g.h)}},1)};
b.prototype.D=function(){if(this.m)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.h;return k(g)};
b.prototype.u=function(){if(null!=this.g){for(var g=0;g<this.g.length;++g)f.g(this.g[g]);this.g=null}};
var f=new c;b.prototype.M=function(g){var h=this.i();g.da(h.resolve,h.reject)};
b.prototype.N=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,t){return"function"==typeof q?function(z){try{l(q(z))}catch(E){m(E)}}:t}
var l,m,p=new b(function(q,t){l=q;m=t});
this.da(k(g,l),k(h,m));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.da=function(g,h){function k(){switch(l.f){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.f);}}
var l=this;null==this.g?f.g(k):this.g.push(k);this.m=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).da(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(z){return function(E){q[z]=E;t--;0==t&&l(q)}}
var q=[],t=0;do q.push(void 0),t++,d(k.value).da(p(q.length-1),m),k=h.next();while(!k.done)})};
return b});
function Da(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.keys",function(a){return a?a:function(){return Da(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Da(this,function(b,c){return c})}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Aa(this,b,"includes").indexOf(b,c||0)}});
r("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ba(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ba(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&Ba(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&Ba(k,g)&&Ba(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&Ba(k,g)&&Ba(k[g],this.f)?delete k[g][this.f]:!1};
return b});
r("Array.prototype.entries",function(a){return a?a:function(){return Da(this,function(b,c){return[b,c]})}});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&Ba(h.g,l))for(var p=0;p<m.length;p++){var q=m[p];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:p,B:q}}return{id:l,list:m,index:-1,B:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.B?l.B.value=k:(l.B={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.B),this.f.previous.next=l.B,this.f.previous=l.B,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.B&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.B.previous.next=h.B.next,h.B.next.previous=h.B.previous,h.B.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).B};
e.prototype.get=function(h){return(h=d(this,h).B)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ba(b,d)&&c.push([d,b[d]]);return c}});
r("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var y=this||self;function A(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ea(a){if(a&&a!=y)return Fa(a.document);null===Ga&&(Ga=Fa(y.document));return Ga}
var Ha=/^[\w+/_-]+[=]{0,2}$/,Ga=null;function Fa(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ha.test(a)?a:""}
function B(a,b){for(var c=a.split("."),d=b||y,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ia(){}
function Ja(a){a.la=void 0;a.getInstance=function(){return a.la?a.la:a.la=new a}}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=Qa:C=Ra;return C.apply(null,arguments)}
function Sa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function D(){return Date.now()}
function Ta(a,b){A(a,b,void 0)}
function F(a,b){function c(){}
c.prototype=b.prototype;a.S=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.wb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ua(a){return a}
;function G(a){if(Error.captureStackTrace)Error.captureStackTrace(this,G);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
F(G,Error);G.prototype.name="CustomError";function Va(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.h=!b&&/[?&]ae=1(&|$)/.test(a);this.i=!b&&/[?&]ae=2(&|$)/.test(a);if((this.f=/[?&]adurl=([^&]*)/.exec(a))&&this.f[1]){try{var c=decodeURIComponent(this.f[1])}catch(d){c=null}this.g=c}}
;function Xa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Ya=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Za=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},$a=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ab=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function bb(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function cb(a,b){var c=Ya(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function db(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function eb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function fb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function gb(a,b){var c=La(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function hb(a){var b=ib,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function jb(a){for(var b in a)return!1;return!0}
function kb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function lb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function mb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function rb(){if(void 0===qb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ua,createScript:Ua,createScriptURL:Ua})}catch(c){y.console&&y.console.error(c.message)}qb=a}else qb=a}return qb}
;function sb(a,b){this.f=b===tb?a:""}
sb.prototype.R=!0;sb.prototype.O=function(){return this.f.toString()};
sb.prototype.ka=!0;sb.prototype.ha=function(){return 1};
function ub(a){if(a instanceof sb&&a.constructor===sb)return a.f;Ka(a);return"type_error:TrustedResourceUrl"}
var tb={};var vb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function wb(a,b){if(b)a=a.replace(xb,"&amp;").replace(yb,"&lt;").replace(zb,"&gt;").replace(Ab,"&quot;").replace(Bb,"&#39;").replace(Cb,"&#0;");else{if(!Db.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(xb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(yb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(zb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ab,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Bb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Cb,"&#0;"))}return a}
var xb=/&/g,yb=/</g,zb=/>/g,Ab=/"/g,Bb=/'/g,Cb=/\x00/g,Db=/[\x00&<>"']/;function I(a,b){this.f=b===Eb?a:""}
I.prototype.R=!0;I.prototype.O=function(){return this.f.toString()};
I.prototype.ka=!0;I.prototype.ha=function(){return 1};
function Fb(a){if(a instanceof I&&a.constructor===I)return a.f;Ka(a);return"type_error:SafeUrl"}
var Gb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Hb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Ib=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Jb(a){if(a instanceof I)return a;a="object"==typeof a&&a.R?a.O():String(a);Ib.test(a)||(a="about:invalid#zClosurez");return new I(a,Eb)}
var Eb={},Kb=new I("about:invalid#zClosurez",Eb);var Lb;a:{var Mb=y.navigator;if(Mb){var Nb=Mb.userAgent;if(Nb){Lb=Nb;break a}}Lb=""}function J(a){return-1!=Lb.indexOf(a)}
;function Ob(a,b,c){this.f=c===Pb?a:"";this.g=b}
Ob.prototype.ka=!0;Ob.prototype.ha=function(){return this.g};
Ob.prototype.R=!0;Ob.prototype.O=function(){return this.f.toString()};
var Pb={};function Qb(a,b){var c=rb();c=c?c.createHTML(a):a;return new Ob(c,b,Pb)}
;function Rb(a,b){var c=b instanceof I?b:Jb(b);a.href=Fb(c)}
function Sb(a,b){a.src=ub(b);var c=Ea(a.ownerDocument&&a.ownerDocument.defaultView);c&&a.setAttribute("nonce",c)}
;function Tb(a){return a=wb(a,void 0)}
function Ub(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Vb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Xb(a){return a?decodeURI(a):a}
function Yb(a){return Xb(a.match(Vb)[3]||null)}
function Zb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Zb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function $b(a){var b=[],c;for(c in a)Zb(c,a[c],b);return b.join("&")}
function ac(a,b){var c=$b(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var bc=/#|$/;function K(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;var cc=J("Opera"),dc=J("Trident")||J("MSIE"),ec=J("Edge"),fc=J("Gecko")&&!(-1!=Lb.toLowerCase().indexOf("webkit")&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),gc=-1!=Lb.toLowerCase().indexOf("webkit")&&!J("Edge");function hc(){var a=y.document;return a?a.documentMode:void 0}
var ic;a:{var jc="",kc=function(){var a=Lb;if(fc)return/rv:([^\);]+)(\)|;)/.exec(a);if(ec)return/Edge\/([\d\.]+)/.exec(a);if(dc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(gc)return/WebKit\/(\S+)/.exec(a);if(cc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
kc&&(jc=kc?kc[1]:"");if(dc){var lc=hc();if(null!=lc&&lc>parseFloat(jc)){ic=String(lc);break a}}ic=jc}var mc=ic,nc;if(y.document&&dc){var oc=hc();nc=oc?oc:parseInt(mc,10)||void 0}else nc=void 0;var pc=nc;var qc=J("iPhone")&&!J("iPod")&&!J("iPad")||J("iPod"),rc=J("iPad");var sc={},tc=null;var L=window;function uc(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=vc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,wc[c])c=wc[c];else{c=String(c);if(!wc[c]){var f=/function\s+([^\(]+)/m.exec(c);wc[c]=f?f[1]:"[Anonymous]"}c=wc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function vc(a,b){b||(b={});b[xc(a)]=!0;var c=a.stack||"",d=a.xb;d&&!b[xc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=vc(d,b));return c}
function xc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var wc={};function yc(a){this.f=a||{cookie:""}}
n=yc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Db;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.sa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.f.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(D()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=vb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{sa:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.f.cookie};
n.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=vb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var zc=new yc("undefined"==typeof document?null:document);var Ac=!dc||9<=Number(pc);function Bc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=Bc.prototype;n.clone=function(){return new Bc(this.x,this.y)};
n.equals=function(a){return a instanceof Bc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Cc(a,b){this.width=a;this.height=b}
n=Cc.prototype;n.clone=function(){return new Cc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Dc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Ec(a,b){fb(b,function(c,d){c&&"object"==typeof c&&c.R&&(c=c.O());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Fc.hasOwnProperty(d)?a.setAttribute(Fc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Fc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Gc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Ac&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Tb(g.name),'"');if(g.type){f.push(' type="',Tb(g.type),'"');var h={};pb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Hc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Ec(f,g));2<d.length&&Ic(e,f,d);return f}
function Ic(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!La(f)||Ma(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ma(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}H(g?db(f):f,d)}}}
function Hc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Jc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Kc(a){var b=Lc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Mc(){var a=[];Kc(function(b){a.push(b)});
return a}
var Lc={jb:"allow-forms",kb:"allow-modals",lb:"allow-orientation-lock",mb:"allow-pointer-lock",nb:"allow-popups",ob:"allow-popups-to-escape-sandbox",pb:"allow-presentation",qb:"allow-same-origin",rb:"allow-scripts",sb:"allow-top-navigation",tb:"allow-top-navigation-by-user-activation"},Nc=Xa(function(){return Mc()});
function Oc(){var a=Hc(document,"IFRAME"),b={};H(Nc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function M(){this.g=this.g;this.A=this.A}
M.prototype.g=!1;M.prototype.dispose=function(){this.g||(this.g=!0,this.o())};
function Pc(a,b){a.g?b():(a.A||(a.A=[]),a.A.push(b))}
M.prototype.o=function(){if(this.A)for(;this.A.length;)this.A.shift()()};
function Qc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Rc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];La(d)?Rc.apply(null,d):Qc(d)}}
;var Sc={};function Tc(){}
function Uc(a,b){if(b!==Sc)throw Error("Bad secret");this.f=a}
v(Uc,Tc);Uc.prototype.toString=function(){return this.f};new Uc("about:blank",Sc);new Uc("about:invalid#zTSz",Sc);function Vc(a){Wc();var b=rb();a=b?b.createScriptURL(a):a;return new sb(a,tb)}
var Wc=Ia;function Xc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Yc=(new Date).getTime();function Zc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function $c(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var q=g,t=0;64>t;t+=4)q[t/4]=p[t]<<24|p[t+1]<<16|p[t+2]<<8|p[t+3];for(t=16;80>t;t++)p=q[t-3]^q[t-8]^q[t-14]^q[t-16],q[t]=(p<<1|p>>>31)&4294967295;p=e[0];var z=e[1],E=e[2],X=e[3],id=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var Wa=X^z&(E^X);var Wb=1518500249}else Wa=z^E^X,Wb=1859775393;else 60>t?(Wa=z&E|X&(z|E),Wb=2400959708):(Wa=z^E^X,Wb=3395469782);Wa=((p<<5|p>>>27)&4294967295)+Wa+id+Wb+q[t]&4294967295;id=X;X=E;E=(z<<30|z>>>2)&4294967295;z=p;p=Wa}e[0]=e[0]+p&4294967295;e[1]=e[1]+
z&4294967295;e[2]=e[2]+E&4294967295;e[3]=e[3]+X&4294967295;e[4]=e[4]+id&4294967295}
function c(p,q){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var t=[],z=0,E=p.length;z<E;++z)t.push(p.charCodeAt(z));p=t}q||(q=p.length);t=0;if(0==l)for(;t+64<q;)b(p.slice(t,t+64)),t+=64,m+=64;for(;t<q;)if(f[l++]=p[t++],m++,64==l)for(l=0,b(f);t+64<q;)b(p.slice(t,t+64)),t+=64,m+=64}
function d(){var p=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var t=63;56<=t;t--)f[t]=q&255,q>>>=8;b(f);for(t=q=0;5>t;t++)for(var z=24;0<=z;z-=8)p[q++]=e[t]>>z&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Ea:function(){for(var p=d(),q="",t=0;t<p.length;t++)q+="0123456789ABCDEF".charAt(Math.floor(p[t]/16))+"0123456789ABCDEF".charAt(p[t]%16);return q}}}
;function ad(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),bd(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=bd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function bd(a){var b=$c();b.update(a);return b.Ea().toLowerCase()}
;function cd(a){var b=Zc(String(y.location.href)),c;(c=y.__SAPISID||y.__APISID||y.__OVERRIDE_SID)?c=!0:(c=new yc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?y.__SAPISID:y.__APISID,c||(c=new yc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(y.location.href);return d&&c&&b?[b,ad(Zc(d),
c,a||null)].join(" "):null}return null}
;function dd(){this.g=[];this.f=-1}
dd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
dd.prototype.get=function(a){return!!this.g[a]};
function ed(a){-1==a.f&&(a.f=ab(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function fd(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
fd.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function gd(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function hd(a){y.setTimeout(function(){throw a;},0)}
var jd;
function kd(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=Hc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!J("Trident")&&!J("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.qa;c.qa=null;e()}};
return function(e){d.next={qa:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function ld(){this.g=this.f=null}
var nd=new fd(function(){return new md},function(a){a.reset()});
ld.prototype.add=function(a,b){var c=nd.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
ld.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function md(){this.next=this.scope=this.f=null}
md.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
md.prototype.reset=function(){this.next=this.scope=this.f=null};function od(a,b){pd||qd();rd||(pd(),rd=!0);sd.add(a,b)}
var pd;function qd(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);pd=function(){a.then(td)}}else pd=function(){var b=td;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!J("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(jd||(jd=kd()),jd(b)):y.setImmediate(b)}}
var rd=!1,sd=new ld;function td(){for(var a;a=sd.remove();){try{a.f.call(a.scope)}catch(b){hd(b)}gd(nd,a)}rd=!1}
;function ud(){this.g=-1}
;function vd(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
F(vd,ud);vd.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function wd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
vd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)wd(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){wd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){wd(this,e);f=0;break}}this.h=f;this.j+=b}};
vd.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;wd(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var xd="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function yd(){}
yd.prototype.next=function(){throw xd;};
yd.prototype.I=function(){return this};
function zd(a){if(a instanceof yd)return a;if("function"==typeof a.I)return a.I(!1);if(La(a)){var b=0,c=new yd;c.next=function(){for(;;){if(b>=a.length)throw xd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Ad(a,b){if(La(a))try{H(a,b,void 0)}catch(c){if(c!==xd)throw c;}else{a=zd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==xd)throw c;}}}
function Bd(a){if(La(a))return db(a);a=zd(a);var b=[];Ad(a,function(c){b.push(c)});
return b}
;function Cd(a,b){this.h={};this.f=[];this.K=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Cd)for(c=Dd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Dd(a){Ed(a);return a.f.concat()}
n=Cd.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Fd;Ed(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Fd(a,b){return a===b}
n.isEmpty=function(){return 0==this.g};
n.clear=function(){this.h={};this.K=this.g=this.f.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.K++,this.f.length>2*this.g&&Ed(this),!0):!1};
function Ed(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.K++);this.h[a]=b};
n.forEach=function(a,b){for(var c=Dd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new Cd(this)};
n.I=function(a){Ed(this);var b=0,c=this.K,d=this,e=new yd;e.next=function(){if(c!=d.K)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw xd;var f=d.f[b++];return a?f:d.h[f]};
return e};function Gd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Hd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Id(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Gd(a).match(/\S+/g)||[],c=0<=Ya(c,b);return c}
function Jd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Id(a,"inverted-hdpi")&&Hd(a,Za(a.classList?a.classList:Gd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Kd(a){var b=[];Ld(new Md,a,b);return b.join("")}
function Md(){}
function Ld(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ld(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Nd(d,c),c.push(":"),Ld(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Nd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Od={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Pd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Nd(a,b){b.push('"',a.replace(Pd,function(c){var d=Od[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Od[c]=d);return d}),'"')}
;function Qd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function N(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=Ia)try{var b=this;a.call(void 0,function(c){Rd(b,2,c)},function(c){Rd(b,3,c)})}catch(c){Rd(this,3,c)}}
function Sd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Sd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Td=new fd(function(){return new Sd},function(a){a.reset()});
function Ud(a,b,c){var d=Td.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Vd(a){if(a instanceof N)return a;var b=new N(Ia);Rd(b,2,a);return b}
function Wd(a){return new N(function(b,c){c(a)})}
N.prototype.then=function(a,b,c){return Xd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
N.prototype.$goog_Thenable=!0;function Yd(a,b){return Xd(a,null,b,void 0)}
N.prototype.cancel=function(a){if(0==this.f){var b=new Zd(a);od(function(){$d(this,b)},this)}};
function $d(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?$d(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):ae(c),be(c,e,3,b)))}a.h=null}else Rd(a,3,b)}
function ce(a,b){a.g||2!=a.f&&3!=a.f||de(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Xd(a,b,c,d){var e=Ud(null,null,null);e.f=new N(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Zd?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;ce(a,e);return e.f}
N.prototype.u=function(a){this.f=0;Rd(this,2,a)};
N.prototype.D=function(a){this.f=0;Rd(this,3,a)};
function Rd(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.u,f=a.D;if(d instanceof N){ce(d,Ud(e||Ia,f||null,a));var g=!0}else if(Qd(d))d.then(e,f,a),g=!0;else{if(Ma(d))try{var h=d.then;if("function"===typeof h){ee(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.m=c,a.f=b,a.h=null,de(a),3!=b||c instanceof Zd||fe(a,c))}}
function ee(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function de(a){a.l||(a.l=!0,od(a.A,a))}
function ae(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
N.prototype.A=function(){for(var a;a=ae(this);)be(this,a,this.f,this.m);this.l=!1};
function be(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,ge(b,c,d);else try{b.h?b.g.call(b.context):ge(b,c,d)}catch(e){he.call(null,e)}gd(Td,b)}
function ge(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function fe(a,b){a.j=!0;od(function(){a.j&&he.call(null,b)})}
var he=hd;function Zd(a){G.call(this,a)}
F(Zd,G);Zd.prototype.name="cancel";function O(a){M.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.m=!!a}
F(O,M);n=O.prototype;n.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function ie(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=bb(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.T(b)}}
n.T=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=Ia):(c&&cb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
n.P=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];je(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.T(c)}}return 0!=e}return!1};
function je(a,b,c){od(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.h[a];b&&(H(b,this.T,this),delete this.h[a])}else this.f.length=0,this.h={}};
n.o=function(){O.S.o.call(this);this.clear();this.i.length=0};function ke(a){this.f=a}
ke.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Kd(b))};
ke.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ke.prototype.remove=function(a){this.f.remove(a)};function le(a){this.f=a}
F(le,ke);function me(a){this.data=a}
function ne(a){return void 0===a||a instanceof me?a:new me(a)}
le.prototype.set=function(a,b){le.S.set.call(this,a,ne(b))};
le.prototype.g=function(a){a=le.S.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
le.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function oe(a){this.f=a}
F(oe,le);oe.prototype.set=function(a,b,c){if(b=ne(b)){if(c){if(c<D()){oe.prototype.remove.call(this,a);return}b.expiration=c}b.creation=D()}oe.S.set.call(this,a,b)};
oe.prototype.g=function(a){var b=oe.S.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<D()||c&&c>D())oe.prototype.remove.call(this,a);else return b}};function pe(){}
;function qe(){}
F(qe,pe);qe.prototype.clear=function(){var a=Bd(this.I(!0)),b=this;H(a,function(c){b.remove(c)})};function re(a){this.f=a}
F(re,qe);n=re.prototype;n.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeItem(a)};
n.I=function(a){var b=0,c=this.f,d=new yd;d.next=function(){if(b>=c.length)throw xd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.f.clear()};
n.key=function(a){return this.f.key(a)};function se(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
F(se,re);function te(a,b){this.g=a;this.f=null;if(dc&&!(9<=Number(pc))){ue||(ue=new Cd);this.f=ue.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),ue.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
F(te,qe);var ve={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ue=null;function we(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ve[b]})}
n=te.prototype;n.isAvailable=function(){return!!this.f};
n.set=function(a,b){this.f.setAttribute(we(a),b);xe(this)};
n.get=function(a){a=this.f.getAttribute(we(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeAttribute(we(a));xe(this)};
n.I=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new yd;d.next=function(){if(b>=c.length)throw xd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);xe(this)};
function xe(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ye(a,b){this.g=a;this.f=b+"::"}
F(ye,qe);ye.prototype.set=function(a,b){this.g.set(this.f+a,b)};
ye.prototype.get=function(a){return this.g.get(this.f+a)};
ye.prototype.remove=function(a){this.g.remove(this.f+a)};
ye.prototype.I=function(a){var b=this.g.I(!0),c=this,d=new yd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function ze(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Ae=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};A("yt.config_",Ae,void 0);function P(a){ze(Ae,arguments)}
function Q(a,b){return a in Ae?Ae[a]:b}
function Be(){return Q("PLAYER_CONFIG",{})}
;var Ce=[];function De(a){Ce.forEach(function(b){return b(a)})}
function Ee(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){R(b),De(b)}}:a}
function R(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=Q("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),P("ERRORS",b))}
function Fe(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=Q("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),P("ERRORS",b))}
;var Ge=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",Ge,void 0);function He(a){ze(Ge,arguments)}
;function Ie(a,b,c,d){zc.set(""+a,b,{sa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function S(a){a=Je(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Ke(a,b){var c=Je(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Je(a){var b=Q("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:Q("EXPERIMENT_FLAGS",{})[a]}
;function Le(a){a&&(a.dataset?a.dataset[Me("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Ne(a,b){return a?a.dataset?a.dataset[Me(b)]:a.getAttribute("data-"+b):null}
var Oe={};function Me(a){return Oe[a]||(Oe[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function T(a,b){"function"===typeof a&&(a=Ee(a));return window.setTimeout(a,b)}
function Pe(a){window.clearTimeout(a)}
;var Qe=y.ytPubsubPubsubInstance||new O,Re=y.ytPubsubPubsubSubscribedKeys||{},Se=y.ytPubsubPubsubTopicToKeys||{},Te=y.ytPubsubPubsubIsSynchronous||{};function Ue(a,b){var c=Ve();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Re[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Te[a]?f():T(f,0)}catch(g){R(g)}},void 0);
Re[d]=!0;Se[a]||(Se[a]=[]);Se[a].push(d);return d}return 0}
function We(a){var b=Ve();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),H(a,function(c){b.unsubscribeByKey(c);delete Re[c]}))}
function Xe(a,b){var c=Ve();c&&c.publish.apply(c,arguments)}
function Ye(a){var b=Ve();if(b)if(b.clear(a),a)Ze(a);else for(var c in Se)Ze(c)}
function Ve(){return y.ytPubsubPubsubInstance}
function Ze(a){Se[a]&&(a=Se[a],H(a,function(b){Re[b]&&delete Re[b]}),a.length=0)}
O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.T;O.prototype.publish=O.prototype.P;O.prototype.clear=O.prototype.clear;A("ytPubsubPubsubInstance",Qe,void 0);A("ytPubsubPubsubTopicToKeys",Se,void 0);A("ytPubsubPubsubIsSynchronous",Te,void 0);A("ytPubsubPubsubSubscribedKeys",Re,void 0);var $e=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,af=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function bf(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace($e,""),c=c.replace(af,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else cf(a,b,c)}
function cf(a,b,c){c=void 0===c?null:c;var d=df(a),e=document.getElementById(d),f=e&&Ne(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Ue(d,b),b=""+Na(b),ef[b]=f),g||(e=ff(a,d,function(){Ne(e,"loaded")||(Le(e),Xe(d),T(Sa(Ye,d),0))},c)))}
function ff(a,b,c,d){d=void 0===d?null:d;var e=Hc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Sb(e,Vc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function gf(a){a=df(a);var b=document.getElementById(a);b&&(Ye(a),b.parentNode.removeChild(b))}
function hf(a,b){if(a&&b){var c=""+Na(b);(c=ef[c])&&We(c)}}
function df(a){var b=document.createElement("a");Rb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ub(a)}
var ef={};function jf(){}
function kf(a,b){return lf(a,0,b)}
function mf(a,b){return lf(a,1,b)}
;function nf(){}
v(nf,jf);function lf(a,b,c){isNaN(c)&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
function of(a){if(!isNaN(a)){var b=B("yt.scheduler.instance.cancelJob");b?b(a):Pe(a)}}
nf.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
nf.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
Ja(nf);nf.getInstance();var pf=[],qf=!1;function rf(){if(!S("disable_ad_status_on_html5_clients")&&(!S("condition_ad_status_fetch_on_consent_cookie_html5_clients")||zc.get("CONSENT","").startsWith("YES+"))&&"1"!=gb(Be(),"args","privembed")){var a=function(){qf=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)};
bf("//static.doubleclick.net/instream/ad_status.js",a);pf.push(mf(function(){qf||"google_ad_status"in window||(hf("//static.doubleclick.net/instream/ad_status.js",a),qf=!0,P("DCLKSTAT",3))},5E3))}}
function sf(){return parseInt(Q("DCLKSTAT",0),10)}
;var tf=0;A("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++tf},void 0);var uf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function vf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in uf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function wf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
vf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
vf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
vf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ib=y.ytEventsEventsListeners||{};A("ytEventsEventsListeners",ib,void 0);var xf=y.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",xf,void 0);
function yf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return hb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ma(e[4])&&Ma(d)&&lb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var zf=Xa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Af(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=yf(a,b,c,d);if(e)return e;e=++xf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new vf(h);if(!Jc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new vf(h);
h.currentTarget=a;return c.call(a,h)};
g=Ee(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),zf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ib[e]=[a,b,c,g,d];return e}
function Bf(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in ib){var c=ib[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?zf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ib[b]}}))}
;var Cf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Df(a){this.u=a;this.f=null;this.j=0;this.m=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.F=Af(window,"mousemove",C(this.G,this));a=C(this.D,this);"function"===typeof a&&(a=Ee(a));this.H=window.setInterval(a,25)}
F(Df,M);Df.prototype.G=function(a){void 0===a.f&&wf(a);var b=a.f;void 0===a.g&&wf(a);this.f=new Bc(b,a.g)};
Df.prototype.D=function(){if(this.f){var a=Cf();if(0!=this.j){var b=this.m,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.u();this.l=d}this.j=a;this.m=this.f;this.i=(this.i+1)%4}};
Df.prototype.o=function(){window.clearInterval(this.H);Bf(this.F)};var Ef={};
function Ff(a){var b=void 0===a?{}:a;a=void 0===b.Ka?!0:b.Ka;b=void 0===b.Wa?!1:b.Wa;if(null==B("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?D()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&Gf();Af(document,"keydown",Gf);Af(document,"keyup",Gf);Af(document,"mousedown",Gf);Af(document,"mouseup",Gf);a&&(b?Af(window,"touchmove",function(){Hf("touchmove",200)},{passive:!0}):(Af(window,"resize",function(){Hf("resize",200)}),Af(window,"scroll",function(){Hf("scroll",200)})));
new Df(function(){Hf("mouse",100)});
Af(document,"touchstart",Gf,{passive:!0});Af(document,"touchend",Gf,{passive:!0})}}
function Hf(a,b){Ef[a]||(Ef[a]=!0,mf(function(){Gf();Ef[a]=!1},b))}
function Gf(){null==B("_lact",window)&&Ff();var a=D();A("_lact",a,window);-1==B("_fact",window)&&A("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function If(){var a=B("_lact",window),b;null==a?b=-1:b=Math.max(D()-a,0);return b}
;var Jf=window,U=Jf.ytcsi&&Jf.ytcsi.now?Jf.ytcsi.now:Jf.performance&&Jf.performance.timing&&Jf.performance.now&&Jf.performance.timing.navigationStart?function(){return Jf.performance.timing.navigationStart+Jf.performance.now()}:function(){return(new Date).getTime()};var Kf=Ke("initial_gel_batch_timeout",1E3),Lf=Math.pow(2,16)-1,Mf=null,Nf=0,Of=void 0,Pf=0,Qf=0,Rf=0,Sf=!0,Tf=y.ytLoggingTransportLogPayloadsQueue_||{};A("ytLoggingTransportLogPayloadsQueue_",Tf,void 0);var Uf=y.ytLoggingTransportGELQueue_||new Map;A("ytLoggingTransportGELQueue_",Uf,void 0);var Vf=y.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",Vf,void 0);
function Wf(){Pe(Pf);Pe(Qf);Qf=0;Of&&Of.isReady()?(Xf(Uf),"log_event"in Tf&&Xf(Object.entries(Tf.log_event)),Uf.clear(),delete Tf.log_event):Yf()}
function Yf(){S("web_gel_timeout_cap")&&!Qf&&(Qf=T(Wf,6E4));Pe(Pf);var a=Q("LOGGING_BATCH_TIMEOUT",Ke("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Sf&&(a=Kf);Pf=T(Wf,a)}
function Xf(a){var b=Of,c=Math.round(U());a=u(a);for(var d=a.next();!d.done;d=a.next()){var e=u(d.value);d=e.next().value;var f=e.next().value;e=nb({context:Zf(b.f||$f())});e.events=f;(f=Vf[d])&&ag(e,d,f);delete Vf[d];bg(e,c);cg(b,"log_event",e,{retry:!0,onSuccess:function(){Nf=Math.round(U()-c)}});
Sf=!1}}
function bg(a,b){a.requestTimeMs=String(b);S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=Q("EVENT_ID",void 0);if(c){var d=Q("BATCH_CLIENT_COUNTER",void 0)||0;!d&&S("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Lf/2));d++;d>Lf&&(d=1);P("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Mf&&Nf&&S("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Mf,roundtripMs:String(Nf)});Mf=c;Nf=0}}
function ag(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var dg=y.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",dg,void 0);
function eg(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||U());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:If())};S("log_sequence_info_on_gel_web")&&d.V&&(a=e.context,b=d.V,dg[b]=b in dg?dg[b]+1:0,a.sequence={index:dg[b],groupKey:b},d.zb&&delete dg[d.V]);d=d.ga;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Vf[d.token]=a,a=d.token);d=Uf.get(a)||[];Uf.set(a,d);d.push(e);c&&(Of=new c);c=Ke("web_logging_max_batch")||100;e=
U();d.length>=c?Wf():10<=e-Rf&&(Yf(),Rf=e)}
;function fg(){var a=gg;B("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a,void 0)}
function hg(a){A("yt.ads.biscotti.lastId_",a,void 0)}
;function ig(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?eb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};R(h)}}}return b}
function jg(a){var b=[];fb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function kg(a){"?"==a.charAt(0)&&(a=a.substr(1));return ig(a)}
function lg(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=kg(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return ac(a,e)+d}
;function mg(a){var b=ng;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(og(b),pg(b));b.ca_type="image";a&&(b.bid=a);return b}
function og(a){var b={};b.dt=Yc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?L:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(b.u_h=L.screen.height,b.u_w=L.screen.width,b.u_ah=L.screen.availHeight,b.u_aw=L.screen.availWidth,b.u_cd=L.screen.colorDepth);
L.navigator&&L.navigator.plugins&&(b.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(b.u_nmime=L.navigator.mimeTypes.length);return b}
function pg(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(p){}try{var e=b.outerWidth;var f=b.outerHeight}catch(p){}try{var g=b.innerWidth;var h=b.innerHeight}catch(p){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new Cc(l.clientWidth,l.clientHeight)).round()}catch(p){m=new Cc(-12245933,-12245933)}k=m;m={};l=new dd;y.SVGElement&&
y.document.createElementNS&&l.set(0);c=Oc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);y.crypto&&y.crypto.subtle&&l.set(3);y.TextDecoder&&y.TextEncoder&&l.set(4);l=ed(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!L.WebGLRenderingContext,m}
var ng=new function(){var a=window.document;this.f=window;this.g=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return jg(mg(a))},void 0);var qg="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function rg(){if(!qg)return null;var a=qg();return"open"in a?a:null}
function sg(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var tg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ug="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
vg=!1;
function wg(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Vb)[1]||null,e=Yb(a);d&&e?(d=c,c=a.match(Vb),d=d.match(Vb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Yb(c)==e&&(Number(c.match(Vb)[4]||null)||null)==(Number(a.match(Vb)[4]||null)||null):!0;d=S("web_ajax_ignore_global_headers_if_set");for(var f in tg)e=Q(tg[f]),!e||!c&&Yb(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!Yb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!Yb(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!Yb(a))b["X-YouTube-Ad-Signals"]=jg(mg(void 0));return b}
function xg(a){var b=window.location.search,c=Yb(a),d=Xb(a.match(Vb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=kg(b),f={};H(ug,function(g){e[g]&&(f[g]=e[g])});
return lg(a,f||{},!1)}
function yg(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=zg(a,b);var d=Ag(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Pe(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||y;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.ma&&b.ma.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.wa&&0<b.timeout&&(f=T(function(){e||(e=!0,Pe(f),b.wa.call(b.context||y))},b.timeout))}else Bg(a,b)}
function Bg(a,b){var c=b.format||"JSON";a=zg(a,b);var d=Ag(a,b),e=!1,f=Cg(a,function(k){if(!e){e=!0;h&&Pe(h);var l=sg(k),m=null,p=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||p||q)m=Dg(a,c,k,b.yb);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.ma&&b.ma.call(p,k,m)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
if(b.U&&0<b.timeout){var g=b.U;var h=T(function(){e||(e=!0,f.abort(),Pe(h),g.call(b.context||y,f))},b.timeout)}return f}
function zg(a,b){b.Bb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.ib;d&&(d[c]&&delete d[c],a=lg(a,d||{},!0));return a}
function Ag(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.C,g=Q("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Ab||Yb(a)&&!b.withCredentials&&Yb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.C&&b.C[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=kg(e),pb(e,f),e=b.xa&&"JSON"==b.xa?JSON.stringify(e):$b(e));f=e||f&&!jb(f);!vg&&f&&"POST"!=b.method&&(vg=!0,R(Error("AJAX request with postData should use POST")));
return e}
function Dg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Fe(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Eg(a):null)e={},H(a.getElementsByTagName("*"),function(g){e[g.tagName]=Fg(g)})}d&&Gg(e);
return e}
function Gg(a){if(Ma(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Qb(a[b],null);a[c]=d}else Gg(a[b])}}
function Eg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Fg(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Cg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Ee(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=rg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;S("debug_forward_web_query_parameters")&&(a=xg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=wg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Hg(){for(var a={},b=u(Object.entries(kg(Q("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function Ig(){return"INNERTUBE_API_KEY"in Ae&&"INNERTUBE_API_VERSION"in Ae}
function $f(){return{innertubeApiKey:Q("INNERTUBE_API_KEY",void 0),innertubeApiVersion:Q("INNERTUBE_API_VERSION",void 0),La:Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ma:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Oa:Q("INNERTUBE_CONTEXT_HL",void 0),Na:Q("INNERTUBE_CONTEXT_GL",void 0),Pa:Q("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ra:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Qa:!!Q("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:Q("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Zf(a){var b={client:{hl:a.Oa,gl:a.Na,clientName:a.Ma,clientVersion:a.innertubeContextClientVersion,configInfo:a.La}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Q("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=Q("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=Q("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&S("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);Q("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});b.client=Object.assign(b.client,Hg());return b}
function Jg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.vb||Q("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().ub:b=cd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
;function Kg(a){a=Object.assign({},a);delete a.Authorization;var b=cd();if(b){var c=new vd;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;La(b);void 0===c&&(c=0);if(!tc){tc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));sc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===tc[k]&&(tc[k]=h)}}}c=sc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
function Lg(a){a=Kg(a);var b=new vd;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}
;function Mg(){var a=new se;(a=a.isAvailable()?new ye(a,"yt.innertube"):null)||(a=new te("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new oe(a):null;this.g=document.domain||window.location.hostname}
Mg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,D()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Kd(b))}catch(f){return}else e=escape(b);Ie(a,e,c,this.g)};
Mg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=zc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Mg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;zc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ng;function Og(){Ng||(Ng=new Mg);return Ng}
function Pg(a,b,c,d){if(d)return null;d=Og().get("nextId",!0)||1;var e=Og().get("requests",!0)||{};e[d]={method:a,request:b,authState:Kg(c),requestTime:Math.round(U())};Og().set("nextId",d+1,86400,!0);Og().set("requests",e,86400,!0);return d}
function Qg(a){var b=Og().get("requests",!0)||{};delete b[a];Og().set("requests",b,86400,!0)}
function Rg(a){var b=Og().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=Kg(Jg(!1));lb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),cg(a,d.method,e,{}));delete b[c]}}Og().set("requests",b,86400,!0)}}
;function Sg(){}
;var Tg=qc||rc;function Ug(){var a=/WebKit\/([0-9]+)/.exec(Lb);return!!(a&&600<=parseInt(a[1],10))}
function Vg(){var a=/WebKit\/([0-9]+)/.exec(Lb);return!!(a&&602<=parseInt(a[1],10))}
function Wg(a){var b=Lb;return b?0<=b.toLowerCase().indexOf(a):!1}
;function Xg(a){if(!a)throw Error();throw a;}
function Yg(a){return a}
function V(a){var b=this;this.g=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.g(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
V.all=function(a){return new V(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={L:0};f.L<a.length;f={L:f.L},++f.L)Zg(V.resolve(a[f.L]).then(function(g){return function(h){d[g.L]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
V.resolve=function(a){return new V(function(b,c){a instanceof V?a.then(b,c):b(a)})};
V.reject=function(a){return new V(function(b,c){c(a)})};
V.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Yg,e=null!==b&&void 0!==b?b:Xg;return new V(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){$g(c,c,d,f,g)}),c.onRejected.push(function(){ah(c,c,e,f,g)})):"FULFILLED"===c.state.status?$g(c,c,d,f,g):"REJECTED"===c.state.status&&ah(c,c,e,f,g)})};
function Zg(a,b){a.then(void 0,b)}
function $g(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?bh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ah(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?bh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function bh(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?bh(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ch(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,ch.prototype)}
v(ch,Error);function dh(){var a=Error.call(this,"IndexedDB is not supported.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,dh.prototype)}
v(dh,Error);function eh(){var a=Error.call(this,"The current transaction exceeded its quota limitations.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,eh.prototype)}
v(eh,Error);function fh(){var a=Error.call(this,"The current transaction may have failed because of exceeding quota limitations.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,fh.prototype)}
v(fh,Error);function gh(a){return a instanceof DOMException?"VersionError"===a.name:"DOMError"in self&&a instanceof DOMError?"VersionError"===a.name:a instanceof Object&&"message"in a?"An attempt was made to open a database using a lower version than the existing version."===a.message:!1}
function hh(a,b){return new V(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function ih(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function jh(a){return new N(function(b,c){ih(a,b,c)})}
function W(a){return new V(function(b,c){ih(a,b,c)})}
;function kh(a,b){this.f=a;this.options=b}
n=kh.prototype;n.add=function(a,b,c){return lh(this,[a],"readwrite",function(d){return mh(d,a).add(b,c)})};
n.clear=function(a){return lh(this,[a],"readwrite",function(b){return mh(b,a).clear()})};
n.close=function(){var a;this.f.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return lh(this,[a],"readonly",function(c){return mh(c,a).count(b)})};
function nh(a,b,c){a=a.f.createObjectStore(b,c);return new oh(a)}
n["delete"]=function(a,b){return lh(this,[a],"readwrite",function(c){return mh(c,a)["delete"](b)})};
n.get=function(a,b){return lh(this,[a],"readwrite",function(c){return mh(c,a).get(b)})};
function ph(a,b){return lh(a,["databases"],"readwrite",function(c){c=mh(c,"databases");return W(c.f.put(b,void 0))})}
function lh(a,b,c,d){c=void 0===c?"readonly":c;return new N(function(e,f){var g=a.f.transaction(b,c),h=new qh(g);Zg(d(h).then(function(k){Yd(rh(h).then(function(){e(k)}),function(l){f(l)})}),function(k){f(k)})})}
function oh(a){this.f=a}
n=oh.prototype;n.add=function(a,b){return W(this.f.add(a,b))};
n.clear=function(){return W(this.f.clear()).then(function(){})};
n.count=function(a){return W(this.f.count(a))};
n["delete"]=function(a){return W(this.f["delete"](a))};
n.get=function(a){return W(this.f.get(a))};
n.index=function(a){return new sh(this.f.index(a))};
n.getName=function(){return this.f.name};
function qh(a){var b=this;this.f=a;this.g=new Map;this.aborted=!1;this.done=new N(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;e?("QuotaExceededError"===e.name?Fe(new eh):"UnknownError"===e.name&&Fe(new fh),d(e)):d(new ch)})})}
qh.prototype.abort=function(){this.f.abort();this.aborted=!0};
function rh(a){var b=a.f;b.commit&&!a.aborted&&b.commit();return a.done}
function mh(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new oh(c),a.g.set(c,d));return d}
function sh(a){this.f=a}
sh.prototype.count=function(a){return W(this.f.count(a))};
sh.prototype.get=function(a){return W(this.f.get(a))};
function th(a,b,c){a=a.f.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return uh(a).then(function(d){return hh(d,c)})}
function vh(a,b){this.request=a;this.f=b}
function uh(a){return W(a).then(function(b){return null===b?null:new vh(a,b)})}
vh.prototype["delete"]=function(){return W(this.f["delete"]()).then(function(){})};
vh.prototype.getValue=function(){return this.f.value};
vh.prototype.update=function(a){return W(this.f.update(a))};function wh(a,b,c){function d(){p||(p=new kh(f.result,{closed:m}));return p}
var e=qh,f=self.indexedDB.open(a,b),g=c.blocked,h=c.blocking,k=c.Eb,l=c.upgrade,m=c.closed,p;l&&f.addEventListener("upgradeneeded",function(q){if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var t=d(),z=new e(f.transaction);l(t,q.oldVersion,q.newVersion,z)});
g&&f.addEventListener("blocked",function(){g()});
return jh(f).then(function(q){h&&q.addEventListener("versionchange",function(){h(d())});
k&&q.addEventListener("close",function(){k()});
return d()})}
function xh(a,b,c){c=void 0===c?{}:c;return wh(a,b,c)}
;var yh,zh,Ah=["getAll","getAllKeys","getKey","openKeyCursor"],Bh=["getAll","getAllKeys","getKey","openKeyCursor"];function Ch(){return K(this,function b(){var c,d;return x(b,function(e){switch(e.f){case 1:if(Tg&&Ug()&&!Vg()&&!S("ytidb_allow_on_ios_safari_v8_and_v9")||ec)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(f){return e["return"](!1)}ra(e);return w(e,Yd(xh("yt-idb-test-do-not-use"),function(){}),5);
case 5:if(d=e.g,!d)return e["return"](!1);case 3:ta(e);if(d)try{d.close()}catch(f){}ua(e);break;case 2:return sa(e),e["return"](!1);case 4:return e["return"](!0)}})})}
function Dh(){return void 0!==yh?Vd(yh):new N(function(a){Ch().then(function(b){yh=b;a(b)})})}
function Eh(){return void 0!==zh?Vd(zh):Dh().then(function(a){if(!a)return!1;var b=u(Ah);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=u(Bh);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return zh=a})}
;var Fh;function Gh(){function a(b){b.close();Fh=void 0}
Fh||(Fh=Yd(xh("YtIdbMeta",1,{blocking:a,upgrade:function(b,c){1>c&&nh(b,"databases",{keyPath:"actualName"})}}),function(b){return gh(b)?xh("YtIdbMeta",void 0,{blocking:a}):Wd(b)}));
return Fh}
function Hh(a){return Gh().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn:1)return ph(b,a)})})}
function Ih(a){return Gh().then(function(b){return b["delete"]("databases",a)})}
;function Jh(a){try{var b={actualName:"LogsDataBase",publicName:"LogsDataBase",userIdentifier:void 0,signedIn:!1}}catch(c){return Wd(c)}return Yd(Hh(b).then(function(){return a(b)}),function(c){return Yd(Ih(b.actualName),function(){}).then(function(){return Wd(c)})})}
function Kh(){return Dh().then(function(a){if(!a)throw new dh;})}
function Lh(a,b){b=void 0===b?{}:b;return Kh().then(function(){return Jh(function(c){return xh(c.actualName,a,b)})})}
;function Mh(){V.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
v(Mh,V);Mh.reject=V.reject;Mh.resolve=V.resolve;Mh.all=V.all;var Nh;function Oh(){return K(this,function b(){return x(b,function(c){if(!Nh)try{Nh=Lh(1,{upgrade:function(d,e){1>e&&(nh(d,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),nh(d,"sapisid"))},
blocking:function(d){d.close();Nh=void 0}})}catch(d){if(!gh(d))return R(d),c["return"](Promise.reject(d));
Nh=Lh()}return c["return"](Nh)})})}
function Ph(a){return K(this,function c(){var d,e,f;return x(c,function(g){if(1==g.f)return w(g,Qh(),2);if(3!=g.f)return d=g.g,w(g,Oh(),3);e=g.g;f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:d});return g["return"](e.add("LogsRequestsStore",f))})})}
function Rh(){return K(this,function b(){var c,d,e,f,g,h;return x(b,function(k){switch(k.f){case 1:return w(k,Qh(),2);case 2:return c=k.g,d=["NEW",c,0],e=["NEW",c,U()],f=IDBKeyRange.bound(d,e),w(k,Oh(),3);case 3:return g=k.g,h=void 0,w(k,lh(g,["LogsRequestsStore"],"readwrite",function(l){return th(mh(l,"LogsRequestsStore").index("newRequest"),{query:f,direction:"prev"},function(m){m.getValue()&&(h=m.getValue(),h.status="QUEUED",m.update(h))})}),4);
case 4:return k["return"](h)}})})}
function Sh(a){return K(this,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,Oh(),2);d=e.g;return e["return"](lh(d,["LogsRequestsStore"],"readwrite",function(f){var g=mh(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",W(g.f.put(h,void 0)).then(function(){return h})})}))})})}
function Th(a){return K(this,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,Oh(),2);d=e.g;return e["return"](lh(d,["LogsRequestsStore"],"readwrite",function(f){var g=mh(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,W(g.f.put(h,void 0)).then(function(){return h})):Mh.resolve(void 0)})}))})})}
function Uh(a){return K(this,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,Oh(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
function Qh(){return K(this,function b(){var c;return x(b,function(d){if(1==d.f){Sg.f||(Sg.f=new Sg);var e={};var f=cd([]);f&&(e.Authorization=f,e["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in Ae||(e["X-Origin"]=window.location.origin),S("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in Ae&&(e["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));e=Vd(e);return w(d,e,2)}c=d.g;return d["return"](Lg(c))})})}
;var Vh=Ke("network_polling_interval",3E4);function Wh(){this.i=0;this.f=Xh();Yh(this);Zh(this)}
function $h(){Wh.f||(Wh.f=new Wh);return Wh.f}
function ai(a){a.f!==Xh()&&R(Error("NetworkStatusManager isOnline does not match window status"));return a.f}
function bi(a){var b=ci,c=di;(new N(function(d){a.g=d})).then(function(){b();
c&&(a.h=c)});
ei(a)}
function Xh(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Zh(a){window.addEventListener("online",function(){a.f=!0;a.g&&a.g()})}
function Yh(a){window.addEventListener("offline",function(){a.f=!1;a.h&&a.h()})}
function ei(a){a.i||(fi(a),Xh()&&a.g&&a.g())}
function fi(a){a.i=kf(function(){Xh()?(!1===a.f&&R(Error("NetworkStatusManager missed online event.")),a.f=!0,a.g&&a.g()):(!0===a.f&&R(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.h&&a.h());fi(a)},Vh)}
;var gi=Ke("networkless_throttle_timeout")||100,hi=Ke("networkless_retry_attempts")||1,ii=0;function ji(a,b){b=void 0===b?{}:b;ki().then(function(c){var d=ai($h());if(!c||S("networkless_bypass_write")||d&&S("vss_networkless_bypass_write"))Bg(a,b);else{var e={url:a,options:b,timestamp:U(),status:"NEW",sendCount:0};Ph(e).then(function(f){e.id=f;f=$h();ai(f)&&!S("networkless_always_offline")?li(e):bi(f)})["catch"](function(f){li(e);
R(f)})}})}
function ci(){var a=this;ii||(ii=mf(function(){return K(a,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,Rh(),2);if(3!=e.f)return d=e.g,d?w(e,li(d),3):(di(),e["return"]());ii=0;ci();e.f=0})})},gi))}
function di(){of(ii);ii=0}
function li(a){return K(this,function c(){var d;return x(c,function(e){switch(e.f){case 1:if(!a.id){e.J(2);break}return w(e,Sh(a.id),3);case 3:(d=e.g)?a=d:Fe(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=U()-f)){e.J(4);break}Fe(Error("Networkless Logging: Stored logs request expired age limit"));if(!a.id){e.J(5);break}return w(e,Uh(a.id),5);case 5:return e["return"]();case 4:f=a=mi(a);var g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:f.options)||
void 0===g?void 0:g.C)||void 0===h?0:h.requestTimeMs)f.options.C.requestTimeMs=Math.round(U());(a=f)&&Bg(a.url,a.options);e.f=0}})})}
function mi(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return K(b,function h(){return x(h,function(k){if(1==k.f)return a&&a.id?a.sendCount<hi?w(k,Th(a.id),6):w(k,Uh(a.id),2):k.J(2);2!=k.f&&bi($h());c(e,f);k.f=0})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return K(b,function h(){return x(h,function(k){if(1==k.f)return a&&a.id?w(k,Uh(a.id),2):k.J(2);d(e,f);k.f=0})})};
return a}
function ki(){return K(this,function b(){return x(b,function(c){return S("networkless_logging")?(2===Ke("networkless_ytidb_version")&&Eh().then(function(d){return d}),c["return"](Dh())):c["return"](!1)})})}
;function ni(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
v(ni,Error);function oi(a){var b=this;this.f=null;a?this.f=a:Ig()&&(this.f=$f());kf(function(){Rg(b)},5E3)}
oi.prototype.isReady=function(){!this.f&&Ig()&&(this.f=$f());return!!this.f};
function cg(a,b,c,d){!Q("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Fe(new ni("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new ni("innertube xhrclient not ready",b,c,d);R(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",C:c,xa:"JSON",U:function(){d.U()},
wa:d.U,onSuccess:function(p,q){if(d.onSuccess)d.onSuccess(q)},
va:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,q){if(d.onError)d.onError(q)},
Cb:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.Pa)&&(g=e);var h=a.f.Ra||!1,k=Jg(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.Qa&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var m=lg(""+g+e,l||{},!0);ki().then(function(p){if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(S("networkless_gel")&&!p||!S("networkless_gel"))var q=Pg(b,
c,k,h);if(q){var t=f.onSuccess,z=f.va;f.onSuccess=function(E,X){Qg(q);t(E,X)};
c.va=function(E,X){Qg(q);z(E,X)}}}try{S("use_fetch_for_op_xhr")?yg(m,f):S("networkless_gel")&&d.retry?(f.method="POST",ji(m,f)):(f.method="POST",f.C||(f.C={}),Bg(m,f))}catch(E){if("InvalidAccessError"==E.name)q&&(Qg(q),q=0),Fe(Error("An extension is blocking network request."));
else throw E;}q&&kf(function(){Rg(a)},5E3)})}
;function pi(a,b,c){c=void 0===c?{}:c;var d=oi;Q("ytLoggingEventsDefaultDisabled",!1)&&oi==oi&&(d=null);eg(a,b,d,c)}
;var qi=[{ta:function(a){return"Cannot read property '"+a.key+"'"},
na:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{ta:function(a){return"Cannot call '"+a.key+"'"},
na:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];function ri(){this.f=[];this.g=[]}
var si;var ti=new O;var ui=new Set,vi=0,wi=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function xi(a){yi(a,"WARNING")}
function yi(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;var g=void 0===g?!1:g;if(a&&(S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),
(window&&window.yterr||g)&&!(5<=vi)&&0!==a.sampleWeight)){var h=uc(a);g=h.message||"Unknown Error";d=h.name||"UnknownError";e=h.lineNumber||"Not available";f=h.fileName||"Not available";h=h.stack||a.f||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){var m=a.args[l],p="params."+l;k+=p.length;if(m)if(Array.isArray(m))for(var q=c,t=0;t<m.length&&!(m[t]&&(k+=zi(t,m[t],p,q),500<k));t++);else if("object"===typeof m)for(q in q=void 0,t=c,m){if(m[q]&&
(k+=zi(q,m[q],p,t),500<k))break}else c[p]=String(JSON.stringify(m)).substring(0,500),k+=c[p].length;else c[p]=String(JSON.stringify(m)).substring(0,500),k+=c[p].length;if(500<=k)break}else if(a.hasOwnProperty("params")&&a.params)if(m=a.params,"object"===typeof a.params)for(l in p=0,m){if(m[l]&&(k="params."+l,q=String(JSON.stringify(m[l])).substr(0,500),c[k]=q,p+=k.length+q.length,500<p))break}else c.params=String(JSON.stringify(m)).substr(0,500);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c.vendor=
navigator.vendor);c={message:g,name:d,lineNumber:e,fileName:f,stack:h,params:c};a=Number(a.columnNumber);isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);a=u(qi);for(g=a.next();!g.done;g=a.next())if(g=g.value,g.na[c.name])for(e=u(g.na[c.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=c.message.match(f.regexp)){c.params["error.original"]=d[0];e=f.groups;f={};for(h=0;h<e.length;h++)f[e[h]]=d[h+1],c.params["error."+e[h]]=d[h+1];c.message=g.ta(f);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(c);
if(!(ui.has(c.message)||0<=c.stack.indexOf("/YouTubeCenter.js")||0<=c.stack.indexOf("/mytube.js"))){ti.P("handleError",c);if(S("kevlar_gel_error_routing")){a=b;a:{g=u(wi);for(d=g.next();!d.done;d=g.next())if(Wg(d.value.toLowerCase())){g=!0;break a}g=!1}if(!g){g={stackTrace:c.stack};c.fileName&&(g.filename=c.fileName);d=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==d.length&&(1!==d.length||isNaN(Number(d[0]))?2!==d.length||isNaN(Number(d[0]))||isNaN(Number(d[1]))||(g.lineNumber=Number(d[0]),
g.columnNumber=Number(d[1])):g.lineNumber=Number(d[0]));d=c.message;e=c.name;si||(si=new ri);f=si;a:{h=u(f.g);for(l=h.next();!l.done;l=h.next())if(l=l.value,c.message&&c.message.match(l.f)){f=l.weight;break a}f=u(f.f);for(h=f.next();!h.done;h=f.next())if(h=h.value,h.Da(c)){f=h.weight;break a}f=1}d={level:"ERROR_LEVEL_UNKNOWN",message:d,errorClassName:e,sampleWeight:f};"ERROR"===a?d.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(d.level="ERROR_LEVEL_WARNNING");a={isObfuscated:!0,browserStackInfo:g};g={pageUrl:window.location.href,
kvPairs:[]};if(e=c.params)for(f=u(Object.keys(e)),h=f.next();!h.done;h=f.next())h=h.value,g.kvPairs.push({key:"client."+h,value:String(e[h])});e=Q("SERVER_NAME",void 0);f=Q("SERVER_VERSION",void 0);e&&f&&(g.kvPairs.push({key:"server.name",value:e}),g.kvPairs.push({key:"server.version",value:f}));pi("clientError",{errorMetadata:g,stackTrace:a,logMessage:d});Wf()}}a=c.params||{};b={ib:{a:"logerror",t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},C:{url:Q("PAGE_NAME",
window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.C){c.stack&&(b.C.stack=c.stack);g=u(Object.keys(a));for(d=g.next();!d.done;d=g.next())d=d.value,b.C["client."+d]=a[d];if(a=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(g=u(Object.keys(a)),d=g.next();!d.done;d=g.next())d=d.value,b.C[d]=a[d];a=Q("SERVER_NAME",void 0);g=Q("SERVER_VERSION",void 0);a&&g&&(b.C["server.name"]=a,b.C["server.version"]=g)}Bg(Q("ECATCHER_REPORT_HOST","")+"/error_204",
b);ui.add(c.message);vi++}}}
function zi(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Ai(){this.g=!1;this.f=null}
Ai.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.g=!0,bf(b,function(){g.g=!1;window.botguard?Bi(g,c,d,f):(gf(b),xi(new ni("Unable to load Botguard","from "+b)))},e)):a&&(S("botguard_eval_with_script_tag")?(e=Hc(document,"SCRIPT"),e.textContent=a,e.nonce=Ea(),document.head.appendChild(e),document.head.removeChild(e)):eval(a),window.botguard?Bi(this,c,d,f):xi(Error("Unable to load Botguard from JS")))};
function Bi(a,b,c,d){if(d)try{a.f=new window.botguard.bg(b,c?function(){return c(b)}:Ia)}catch(e){xi(e)}else{try{a.f=new window.botguard.bg(b)}catch(e){xi(e)}c&&c(b)}}
Ai.prototype.dispose=function(){this.f=null};var Ci=new Ai;function Di(){return!!Ci.f}
function Ei(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Ci.f?Ci.f.invoke(void 0,void 0,a):null}
;var Fi=D().toString();
function Gi(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=D();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Fi)for(a=1,b=0;b<Fi.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Fi.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Hi=y.ytLoggingDocDocumentNonce_||Gi();A("ytLoggingDocDocumentNonce_",Hi,void 0);var Ii=1;function Ji(a){this.f=a}
Ji.prototype.getAsJson=function(){var a={};void 0!==this.f.trackingParams?a.trackingParams=this.f.trackingParams:(a.veType=this.f.veType,void 0!==this.f.veCounter&&(a.veCounter=this.f.veCounter),void 0!==this.f.elementIndex&&(a.elementIndex=this.f.elementIndex));void 0!==this.f.dataElement&&(a.dataElement=this.f.dataElement.getAsJson());void 0!==this.f.youtubeData&&(a.youtubeData=this.f.youtubeData);return a};
Ji.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Ji.prototype.isClientVe=function(){return!this.f.trackingParams&&!!this.f.veType};function Ki(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Li(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Mi(a){return Q(Li(void 0===a?0:a),void 0)}
A("yt_logging_screen.getRootVeType",Mi,void 0);function Ni(){var a=Mi(0),b;a?b=new Ji({veType:a,youtubeData:void 0}):b=null;return b}
function Oi(){var a=Q("csn-to-ctt-auth-info");a||(a={},P("csn-to-ctt-auth-info",a));return a}
function Pi(a){a=void 0===a?0:a;var b=Q(Ki(a));if(!b&&!Q("USE_CSN_FALLBACK",!0))return null;b||0!=a||(S("kevlar_client_side_screens")||S("c3_client_side_screens")?b="UNDEFINED_CSN":b=Q("EVENT_ID"));return b?b:null}
A("yt_logging_screen.getCurrentCsn",Pi,void 0);function Qi(a,b,c){var d=Oi();(c=Pi(c))&&delete d[c];b&&(d[a]=b)}
function Ri(a){return Oi()[a]}
A("yt_logging_screen.getCttAuthInfo",Ri,void 0);function Si(a,b,c,d){c=void 0===c?0:c;if(a!==Q(Ki(c))||b!==Q(Li(c)))if(Qi(a,d,c),P(Ki(c),a),P(Li(c),b),0==c||S("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&eg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Hi,clientScreenNonce:a},oi)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
A("yt_logging_screen.setCurrentScreen",Si,void 0);function Ti(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Yb(window.location.href);g&&f.push(g);g=Yb(d);if(0<=Ya(f,g)||!g&&0==d.lastIndexOf("/",0))if(S("autoescape_tempdata_url")&&(f=document.createElement("a"),Rb(f,d),d=f.href),d){g=d.match(Vb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:Pi()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Ub(d).toString(36),e=e?$b(e):"",Ie(b,e,k||5))}else k=b,e="ST-"+Ub(d).toString(36),k=k?$b(k):"",Ie(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var p=void 0===p?window:p;c=p.location;a=ac(a,l)+m;a=a instanceof I?a:Jb(a);c.href=Fb(a)}return!0}
;function Ui(a,b){this.version=a;this.args=b}
;function Vi(a,b){this.topic=a;this.f=b}
Vi.prototype.toString=function(){return this.topic};var Wi=B("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.T;O.prototype.publish=O.prototype.P;O.prototype.clear=O.prototype.clear;A("ytPubsub2Pubsub2Instance",Wi,void 0);var Xi=B("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",Xi,void 0);var Yi=B("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",Yi,void 0);var Zi=B("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",Zi,void 0);
A("ytPubsub2Pubsub2SkipSubKey",null,void 0);function $i(a,b){var c=aj();c&&c.publish.call(c,a.toString(),a,b)}
function bj(a){var b=cj,c=aj();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Xi[d])try{if(f&&b instanceof Vi&&b!=e)try{var h=b.f,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.K){var l=new h;h.K=l.version}var m=h.K}catch(p){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
db(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){R(p)}},Zi[b.toString()]?B("yt.scheduler.instance")?mf(g):T(g,0):g())});
Xi[d]=!0;Yi[b.toString()]||(Yi[b.toString()]=[]);Yi[b.toString()].push(d);return d}
function dj(){var a=ej,b=bj(function(c){a.apply(void 0,arguments);fj(b)});
return b}
function fj(a){var b=aj();b&&("number"===typeof a&&(a=[a]),H(a,function(c){b.unsubscribeByKey(c);delete Xi[c]}))}
function aj(){return B("ytPubsub2Pubsub2Instance")}
;function gj(a){Ui.call(this,1,arguments);this.csn=a}
v(gj,Ui);var cj=new Vi("screen-created",gj),hj=[],ij=0;function jj(a,b,c){var d=S("use_default_events_client")?void 0:oi;b={csn:a,parentVe:b.getAsJson(),childVes:$a(c,function(f){return f.getAsJson()})};
c=u(c);for(var e=c.next();!e.done;e=c.next())e=e.value.getAsJson(),(jb(e)||!e.trackingParams&&!e.veType)&&xi(Error("Child VE logged with no data"));c={ga:Ri(a),V:a};"UNDEFINED_CSN"==a?kj("visualElementAttached",b,c):d?eg("visualElementAttached",b,d,c):pi("visualElementAttached",b,c)}
function kj(a,b,c){hj.push({payloadName:a,payload:b,options:c});ij||(ij=dj())}
function ej(a){if(hj){for(var b=u(hj),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,eg(c.payloadName,c.payload,null,c.options));hj.length=0}ij=0}
;function lj(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||mb(b);this.assets=a.assets||{};this.attrs=a.attrs||mb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
lj.prototype.clone=function(){var a=new lj,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ka(c)?a[b]=mb(c):a[b]=c}return a};function mj(){M.call(this);this.f=[]}
v(mj,M);mj.prototype.o=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.Da)}M.prototype.o.call(this)};var nj=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function oj(a){a=a||"";if(window.spf){var b=a.match(nj);spf.style.load(a,b?b[1]:"",void 0)}else pj(a)}
function pj(a){var b=qj(a),c=document.getElementById(b),d=c&&Ne(c,"loaded");d||c&&!d||(c=rj(a,b,function(){Ne(c,"loaded")||(Le(c),Xe(b),T(Sa(Ye,b),0))}))}
function rj(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Vc(a);d.rel="stylesheet";d.href=ub(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function qj(a){var b=Hc(document,"A");Rb(b,new I(a,Eb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ub(a)}
;function sj(a,b,c,d){M.call(this);var e=this;this.m=this.aa=a;this.G=b;this.u=!1;this.api={};this.Y=this.F=null;this.H=new O;Pc(this,Sa(Qc,this.H));this.j={};this.N=this.Z=this.i=this.fa=this.f=null;this.M=!1;this.l=this.D=null;this.ba={};this.Aa=["onReady"];this.ea=null;this.oa=NaN;this.W={};this.h=d;tj(this);this.ca("WATCH_LATER_VIDEO_ADDED",this.Ta.bind(this));this.ca("WATCH_LATER_VIDEO_REMOVED",this.Ua.bind(this));this.ca("onAdAnnounce",this.Ca.bind(this));this.Ba=new mj(this);Pc(this,Sa(Qc,this.Ba));
this.X=0;c?this.X=T(function(){e.loadNewVideoConfig(c)},0):d&&(uj(this),vj(this))}
v(sj,M);n=sj.prototype;n.getId=function(){return this.G};
n.loadNewVideoConfig=function(a){if(!this.g){this.X&&(Pe(this.X),this.X=0);a instanceof lj||(a=new lj(a));this.fa=a;this.f=a.clone();uj(this);this.Z||(this.Z=wj(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.m.style.width=Xc(Number(a)||a);if(a=this.f.attrs.height)this.m.style.height=Xc(Number(a)||a);vj(this);this.u&&xj(this)}};
function uj(a){var b;a.h?b=a.h.rootElementId:b=a.f.attrs.id;a.i=b||a.i;"video-player"==a.i&&(a.i=a.G,a.h?a.h.rootElementId=a.G:a.f.attrs.id=a.G);a.m.id==a.i&&(a.i+="-player",a.h?a.h.rootElementId=a.i:a.f.attrs.id=a.i)}
n.Ha=function(){return this.fa};
function xj(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function yj(a){var b=!0,c=zj(a);c&&a.f&&(a=Aj(a),b=Ne(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function vj(a){if(!a.g&&!a.M){var b=yj(a);if(b&&"html5"==(zj(a)?"html5":null))a.N="html5",a.u||Bj(a);else if(Cj(a),a.N="html5",b&&a.l)a.aa.appendChild(a.l),Bj(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.D=function(){c=!0;var d=Dj(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.aa,e,a.h);Bj(a)};
a.M=!0;b?a.D():(bf(Aj(a),a.D),(b=a.h?a.h.cssUrl:a.f.assets.css)&&oj(b),Ej(a)&&!c&&A("yt.player.Application.create",null,void 0))}}}
function zj(a){var b=Dc(a.i);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.i));return b}
function Bj(a){if(!a.g){var b=zj(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.M=!1,!Dj(a,"html5_remove_not_servable_check_killswitch")&&b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||Fj(a)):a.oa=T(function(){Bj(a)},50)}}
function Fj(a){tj(a);a.u=!0;var b=zj(a);b.addEventListener&&(a.F=Gj(a,b,"addEventListener"));b.removeEventListener&&(a.Y=Gj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Gj(a,b,e))}for(var f in a.j)a.F(f,a.j[f]);xj(a);a.Z&&a.Z(a.api);a.H.P("onReady",a.api)}
function Gj(a,b,c){var d=b[c];return function(){try{return a.ea=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.ea=e,Fe(e))}}}
function tj(a){a.u=!1;if(a.Y)for(var b in a.j)a.Y(b,a.j[b]);for(var c in a.W)Pe(parseInt(c,10));a.W={};a.F=null;a.Y=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.ca.bind(a);a.api.removeEventListener=a.Ya.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ia.bind(a);a.api.getPlayerType=a.Ja.bind(a);a.api.getCurrentVideoConfig=a.Ha.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Sa.bind(a)}
n.Sa=function(){return this.u};
n.ca=function(a,b){var c=this,d=wj(this,b);if(d){if(!(0<=Ya(this.Aa,a)||this.j[a])){var e=Hj(this,a);this.F&&this.F(a,e)}this.H.subscribe(a,d);"onReady"==a&&this.u&&T(function(){d(c.api)},0)}};
n.Ya=function(a,b){if(!this.g){var c=wj(this,b);c&&ie(this.H,a,c)}};
function wj(a,b){var c=b;if("string"==typeof b){if(a.ba[b])return a.ba[b];c=function(){var d=B(b);d&&d.apply(y,arguments)};
a.ba[b]=c}return c?c:null}
function Hj(a,b){var c="ytPlayer"+b+a.G;a.j[b]=c;y[c]=function(d){var e=T(function(){if(!a.g){a.H.P(b,d);var f=a.W,g=String(e);g in f&&delete f[g]}},0);
kb(a.W,String(e))};
return c}
n.Ca=function(a){Xe("a11y-announce",a)};
n.Ta=function(a){Xe("WATCH_LATER_VIDEO_ADDED",a)};
n.Ua=function(a){Xe("WATCH_LATER_VIDEO_REMOVED",a)};
n.Ja=function(){return this.N||(zj(this)?"html5":null)};
n.Ia=function(){return this.ea};
function Cj(a){a.cancel();tj(a);a.N=null;a.f&&(a.f.loaded=!1);var b=zj(a);b&&(yj(a)||!Ej(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));for(a=a.aa;b=a.firstChild;)a.removeChild(b)}
n.cancel=function(){if(this.D){var a=Aj(this);hf(a,this.D)}Pe(this.oa);this.M=!1};
n.o=function(){Cj(this);if(this.l&&this.f&&this.l.destroy)try{this.l.destroy()}catch(b){R(b)}this.ba=null;for(var a in this.j)y[this.j[a]]=null;this.fa=this.f=this.api=null;delete this.aa;delete this.m;M.prototype.o.call(this)};
function Ej(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function Aj(a){return a.h?a.h.jsUrl:a.f.assets.js}
function Dj(a,b){if(a.h)var c=a.h.serializedExperimentFlags;else a.f&&a.f.args&&(c=a.f.args.fflags);return"true"==ig(c||"")[b]}
;var Ij={},Jj="player_uid_"+(1E9*Math.random()>>>0);
function Kj(a,b,c){var d="player";c=void 0===c?!0:c;var e;"string"===typeof d?e=Dc(d):e=d;d=e;e=Jj+"_"+Na(d);var f=Ij[e];if(f&&c)return(b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true"))?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new sj(d,e,a,b);Ij[e]=f;Xe("player-added",f.api);Pc(f,Sa(Lj,f));return f.api}
function Lj(a){delete Ij[a.getId()]}
;function Mj(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Nj(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return Oj(a)}
function Oj(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Pj(a,b,c,d){if(Ma(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Qj(a){a=void 0===a?!1:a;M.call(this);this.f=new O(a);Pc(this,Sa(Qc,this.f))}
F(Qj,M);Qj.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
Qj.prototype.j=function(a,b){this.g||this.f.P.apply(this.f,arguments)};function Rj(a,b,c){Qj.call(this);this.h=a;this.i=b;this.l=c}
v(Rj,Qj);function Sj(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(Kd(a),d.i))}}
Rj.prototype.o=function(){this.i=this.h=null;Qj.prototype.o.call(this)};function Tj(a){M.call(this);this.f=a;this.f.subscribe("command",this.ya,this);this.h={};this.j=!1}
v(Tj,M);n=Tj.prototype;n.start=function(){this.j||this.g||(this.j=!0,Sj(this.f,"RECEIVING"))};
n.ya=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.h||(c=C(this.ab,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&Uj(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=Vj(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=Wj(a,c))&&this.j&&!this.g&&Sj(this.f,a,c))}}};
n.ab=function(a,b){this.j&&!this.g&&Sj(this.f,a,this.ia(a,b))};
n.ia=function(a,b){if(null!=b)return{value:b}};
function Uj(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
n.o=function(){var a=this.f;a.g||ie(a.f,"command",this.ya,this);this.f=null;for(var b in this.h)Uj(this,b);M.prototype.o.call(this)};function Xj(a,b){Tj.call(this,b);this.i=a;this.start()}
v(Xj,Tj);Xj.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
Xj.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function Vj(a,b){switch(a){case "loadVideoById":return b=Oj(b),[b];case "cueVideoById":return b=Oj(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=Pj(b),[b];case "cuePlaylist":return b=Pj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Wj(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Xj.prototype.ia=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Tj.prototype.ia.call(this,a,b)};
Xj.prototype.o=function(){Tj.prototype.o.call(this);delete this.i};function Yj(a,b,c){M.call(this);var d=this;c=c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.h=b||null;this.u="*";this.i=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.m=function(e){a:if(!("*"!=d.i&&e.origin!=d.i||d.h&&e.source!=d.h||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.i=d.u=e.origin);d.h=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.j&&(!d.l||0<=Ya(d.l,f.func))&&d.j(f.func,f.args,e.origin)}}};
this.l=this.f=this.j=null;window.addEventListener("message",this.m)}
v(Yj,M);Yj.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.u)}catch(e){Fe(e)}}};
Yj.prototype.o=function(){window.removeEventListener("message",this.m);M.prototype.o.call(this)};function Zj(){var a=this.g=new Yj(!!Q("WIDGET_ID_ENFORCE")),b=C(this.Xa,this);a.j=b;a.l=null;this.g.channel="widget";if(a=Q("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
n=Zj.prototype;n.Xa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,ak(this,a)),this.j[a]=!0)):this.ua(a,b,c)};
n.ua=function(){};
function ak(a,b){return C(function(c){this.sendMessage(b,c)},a)}
n.addEventListener=function(){};
n.Ga=function(){this.l=!0;this.sendMessage("initialDelivery",this.ja());this.sendMessage("onReady");H(this.i,this.za,this);this.i=[]};
n.ja=function(){return null};
function bk(a,b){a.sendMessage("infoDelivery",b)}
n.za=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
n.sendMessage=function(a,b){this.za({event:a,info:void 0==b?null:b})};
n.dispose=function(){this.g=null};function ck(a){Zj.call(this);this.f=a;this.h=[];this.addEventListener("onReady",C(this.Va,this));this.addEventListener("onVideoProgress",C(this.fb,this));this.addEventListener("onVolumeChange",C(this.gb,this));this.addEventListener("onApiChange",C(this.Za,this));this.addEventListener("onPlaybackQualityChange",C(this.bb,this));this.addEventListener("onPlaybackRateChange",C(this.cb,this));this.addEventListener("onStateChange",C(this.eb,this));this.addEventListener("onWebglSettingsChanged",C(this.hb,
this))}
v(ck,Zj);n=ck.prototype;n.ua=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Mj(a)){var d=b;if(Ma(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Oj.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Nj.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Pj.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);Mj(a)&&bk(this,this.ja())}};
n.Va=function(){var a=C(this.Ga,this);this.g.f=a};
n.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
n.ja=function(){if(!this.f)return null;var a=this.f.getApiInterface();cb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(h){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=D()/1E3;return b};
n.eb=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());bk(this,a)};
n.bb=function(a){bk(this,{playbackQuality:a})};
n.cb=function(a){bk(this,{playbackRate:a})};
n.Za=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
n.gb=function(){bk(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
n.fb=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());bk(this,a)};
n.hb=function(){var a={sphericalProperties:this.f.getSphericalProperties()};bk(this,a)};
n.dispose=function(){Zj.prototype.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function dk(a,b,c){M.call(this);this.f=a;this.i=c;this.j=Af(window,"message",C(this.l,this));this.h=new Rj(this,a,b);Pc(this,Sa(Qc,this.h))}
v(dk,M);dk.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
dk.prototype.o=function(){Bf(this.j);this.f=null;M.prototype.o.call(this)};function ek(){var a=mb(fk),b;return Yd(new N(function(c,d){a.onSuccess=function(e){sg(e)?c(e):d(new gk("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new gk("Unknown request error","net.unknown",e))};
a.U=function(e){d(new gk("Request timed out","net.timeout",e))};
b=Bg("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Zd&&b.abort();
return Wd(c)})}
function gk(a,b,c){G.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(gk,G);function hk(){this.g=0;this.f=null}
hk.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),Qd(a)?a:ik(a)):2===this.g&&b?(a=b.call(c,this.f),Qd(a)?a:jk(a)):this};
hk.prototype.getValue=function(){return this.f};
hk.prototype.$goog_Thenable=!0;function jk(a){var b=new hk;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function ik(a){var b=new hk;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function kk(a){G.call(this,a.message||a.description||a.name);this.isMissing=a instanceof lk;this.isTimeout=a instanceof gk&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Zd}
v(kk,G);kk.prototype.name="BiscottiError";function lk(){G.call(this,"Biscotti ID is missing from server")}
v(lk,G);lk.prototype.name="BiscottiMissingError";var fk={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},mk=null;
function gg(){if(S("disable_biscotti_fetch_on_html5_clients"))return Wd(Error("Fetching biscotti ID is disabled."));if(S("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!zc.get("CONSENT","").startsWith("YES+"))return Wd(Error("User has not consented - not fetching biscotti id."));if("1"===gb(Be(),"args","privembed"))return Wd(Error("Biscotti ID is not available in private embed mode"));mk||(mk=Yd(ek().then(nk),function(a){return ok(2,a)}));
return mk}
function nk(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new lk;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new lk;a=a.id;hg(a);mk=ik(a);pk(18E5,2);return a}
function ok(a,b){var c=new kk(b);hg("");mk=jk(c);0<a&&pk(12E4,a-1);throw c;}
function pk(a,b){T(function(){Yd(ek().then(nk,function(c){return ok(b,c)}),Ia)},a)}
function qk(){try{var a=B("yt.ads.biscotti.getId_");return a?a():gg()}catch(b){return Wd(b)}}
;function rk(a){if("1"!==gb(Be(),"args","privembed")){a&&fg();try{qk().then(function(){},function(){}),T(rk,18E5)}catch(b){R(b)}}}
;var Y=B("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",Y,void 0);function sk(){this.f=Q("ALT_PREF_COOKIE_NAME","PREF");var a=zc.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Y[d]=c.toString())}}}
n=sk.prototype;n.get=function(a,b){tk(a);uk(a);var c=void 0!==Y[a]?Y[a].toString():null;return null!=c?c:b?b:""};
n.set=function(a,b){tk(a);uk(a);if(null==b)throw Error("ExpectedNotNull");Y[a]=b.toString()};
n.remove=function(a){tk(a);uk(a);delete Y[a]};
n.save=function(){Ie(this.f,this.dump(),63072E3)};
n.clear=function(){for(var a in Y)delete Y[a]};
n.dump=function(){var a=[],b;for(b in Y)a.push(b+"="+encodeURIComponent(String(Y[b])));return a.join("&")};
function uk(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function tk(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function vk(a){a=void 0!==Y[a]?Y[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ja(sk);function wk(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!xk(a)||c.some(function(e){return!xk(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())yk(a,d.value);return a}
function yk(a,b){for(var c in b)if(xk(b[c])){if(c in a&&!xk(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});yk(a[c],b[c])}else if(zk(b[c])){if(c in a&&!zk(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ak(a[c],b[c])}else a[c]=b[c];return a}
function Ak(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,xk(d)?a.push(yk({},d)):zk(d)?a.push(Ak([],d)):a.push(d);return a}
function xk(a){return"object"===typeof a&&!Array.isArray(a)}
function zk(a){return"object"===typeof a&&Array.isArray(a)}
;var Bk={},Ck=0;
function Dk(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Wg("cobalt")){if(a){a instanceof I||(a="object"==typeof a&&a.R?a.O():String(a),Ib.test(a)?a=new I(a,Eb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Hb))&&Gb.test(b[1])?new I(a,Eb):null));a=Fb(a||Kb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Ob)){b="object"==typeof a;var f=null;b&&a.ka&&(f=a.ha());a=Qb(wb(b&&a.R?a.O():String(a)),f)}a instanceof Ob&&a.constructor===Ob?a=a.f:(Ka(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(Kd(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Gc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)Cg(a,b,"POST",e,d);else if(Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Cg(a,b,"GET","",d);else{b:{try{var g=new Va({url:a});if(g.h&&g.g||g.i){var h=Xb(a.match(Vb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(bc);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var m=a.charCodeAt(c-1);if(38==m||63==m){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var q=c;break d}}c+=3}q=-1}if(0>q)var t=null;else{var z=a.indexOf("&",q);if(0>z||z>l)z=l;q+=3;t=decodeURIComponent(a.substr(q,z-q).replace(/\+/g," "))}k="1"!==t}f=!k;break b}}catch(E){}f=!1}f?Ek(a)?(b&&b(),f=!0):f=!1:f=!1;f||Fk(a,b)}}
function Ek(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Fk(a,b){var c=new Image,d=""+Ck++;Bk[d]=c;c.onload=c.onerror=function(){b&&Bk[d]&&b();delete Bk[d]};
c.src=a}
;function Gk(a,b){Ui.call(this,1,arguments)}
v(Gk,Ui);function Hk(a,b){Ui.call(this,1,arguments)}
v(Hk,Ui);var Ik=new Vi("aft-recorded",Gk),Jk=new Vi("timing-sent",Hk);var Kk=window;function Lk(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Mk=Kk.performance||Kk.mozPerformance||Kk.msPerformance||Kk.webkitPerformance||new Lk;var Nk=!1;C(Mk.clearResourceTimings||Mk.webkitClearResourceTimings||Mk.mozClearResourceTimings||Mk.msClearResourceTimings||Mk.oClearResourceTimings||Ia,Mk);function Ok(a){var b=Pk(a);if(b.aft)return b.aft;a=Q((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Qk(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Ta("ytcsi."+(a||"")+"data_",b));return b}
function Rk(a){a=Qk(a);a.info||(a.info={});return a.info}
function Pk(a){a=Qk(a);a.tick||(a.tick={});return a.tick}
function Sk(a){var b=Qk(a).nonce;b||(b=Gi(),Qk(a).nonce=b);return b}
function Tk(a){var b=Pk(a||""),c=Ok(a);c&&!Nk&&($i(Ik,new Gk(Math.round(c-b._start),a)),Nk=!0)}
;function Uk(){var a=B("ytcsi.debug");a||(a=[],A("ytcsi.debug",a,void 0),A("ytcsi.reference",{},void 0));return a}
function Vk(a){a=a||"";var b=B("ytcsi.reference");b||(Uk(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Uk(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Wk=y.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",Wk,void 0);function Xk(){this.f=0}
function Yk(){Xk.f||(Xk.f=new Xk);return Xk.f}
Xk.prototype.tick=function(a,b,c){Zk(this,"tick_"+a+"_"+b)||pi("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Xk.prototype.info=function(a,b){var c=Object.keys(a).join("");Zk(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,pi("latencyActionInfo",c))};
Xk.prototype.span=function(a,b){var c=Object.keys(a).join("");Zk(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,pi("latencyActionSpan",a))};
function Zk(a,b){Wk[b]=Wk[b]||{count:0};var c=Wk[b];c.count++;c.time=U();a.f||(a.f=kf(function(){var d=U(),e;for(e in Wk)Wk[e]&&6E4<d-Wk[e].time&&delete Wk[e];a&&(a.f=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new ni("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||xi(c)),!0):!1}
;var Z={},$k=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.aida="appInstallDataAgeMs",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.cseg="creatorInfo.creatorSegment",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid=
"requestIds",Z.GetBrowse_rid="requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",
Z.ncnp="webInfo.nonPreloadedNodeCount",Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",
Z.ssdm="shellStartupDurationMs",Z.aq="tvInfo.appQuality",Z.br_trs="tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",
Z.rcl="mwebInfo.responseContentLength",Z.GetSettings_rid="requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),al="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
bl={},cl=(bl.ccs="CANARY_STATE_",bl.mver="MEASUREMENT_VERSION_",bl.pis="PLAYER_INITIALIZED_STATE_",bl.yt_pt="LATENCY_PLAYER_",bl.pa="LATENCY_ACTION_",bl.yt_vst="VIDEO_STREAM_TYPE_",bl),dl="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function el(a){return!!Q("FORCE_CSI_ON_GEL",!1)||S("csi_on_gel")||!!Qk(a).useGel}
function fl(a){a=Qk(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function gl(a,b,c){if(null!==b)if(Rk(c)[a]=b,el(c)){var d=b;b=fl(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in $k){b=$k[a];0<=Ya(al,b)&&(d=!!d);a in cl&&"string"===typeof d&&(d=cl[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=wk({},e)}else 0<=Ya(dl,a)||xi(new ni("Unknown label logged with GEL CSI",
a)),f=void 0;f&&el(c)&&(b=Vk(c||""),wk(b.info,f),b=fl(c),"gelInfos"in b||(b.gelInfos={}),wk(b.gelInfos,f),c=Sk(c),Yk().info(f,c))}else Vk(c||"").info[a]=b}
function hl(a,b,c){var d=Pk(c);if(S("use_first_tick")&&il(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;Mk.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Mk.mark(e))}e=b||U();d[a]=e;e=fl(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||U();if(el(c)){Vk(c||"").tick[a]=b||U();e=Sk(c);if("_start"===a){var f=Yk();Zk(f,"baseline_"+e)||pi("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Yk().tick(a,e,b);Tk(c);e=!0}else e=!1;if(!e){if(!B("yt.timing."+(c||"")+"pingSent_")&&
(f=Q((c||"")+"TIMING_ACTION",void 0),e=Pk(c),B("ytglobal.timing"+(c||"")+"ready_")&&f&&il("_start")&&Ok(c)))if(Tk(c),c)jl(c);else{f=!0;var g=Q("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&jl(c)}Vk(c||"").tick[a]=b||U()}return d[a]}
function il(a,b){var c=Pk(b);return a in c}
function jl(a){if(!el(a)){var b=Pk(a),c=Rk(a),d=b._start,e=Q("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:Q((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Ok(a);var h=Pk(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Rk(a).yt_pvis&&"youtube"===e&&(gl("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=U();m={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),m[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;S("debug_csi_data")&&(c=B("yt.timing.csiData"),c||(c=[],Ta("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var q in f)f.hasOwnProperty(q)&&(c+="&"+q+"="+f[q]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var t=void 0===t?"":t;Ek(f,t)||Dk(f,void 0,void 0,void 0,t)}else Dk(f);A("yt.timing."+(a||"")+"pingSent_",!0,void 0);$i(Jk,new Hk(m.aft+(Number(g)||0),a))}}
var kl=window;kl.ytcsi&&(kl.ytcsi.info=gl,kl.ytcsi.tick=hl);var ll=null,ml=null,nl=null,ol={};function pl(a){var b=a.id;a=a.ve_type;var c=Ii++;a=new Ji({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});ol[b]=a;b=Pi();c=Ni();b&&c&&jj(b,c,[a])}
function ql(){var a=ll.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function rl(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Si(b,a),a=Ni()))for(var c in ol){var d=ol[c];d&&jj(b,a,[d])}}
function sl(a){ol[a.id]=new Ji({trackingParams:a.tracking_params})}
function tl(a){var b=Pi(),c=ol[a.id];if(b&&c){a=S("use_default_events_client")?void 0:oi;var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:d};d={ga:Ri(b),V:b};"UNDEFINED_CSN"==b?kj("visualElementGestured",c,d):a?eg("visualElementGestured",c,a,d):pi("visualElementGestured",c,d)}}
function ul(a){a=a.ids;var b=Pi();if(b)for(var c=0;c<a.length;c++){var d=ol[a[c]];if(d){var e=b,f=S("use_default_events_client")?void 0:oi;d={csn:e,ve:d.getAsJson(),eventType:1};var g={ga:Ri(e),V:e};"UNDEFINED_CSN"==e?kj("visualElementShown",d,g):f?eg("visualElementShown",d,f,g):pi("visualElementShown",d,g)}}}
;A("yt.setConfig",P,void 0);A("yt.config.set",P,void 0);A("yt.setMsg",He,void 0);A("yt.msgs.set",He,void 0);A("yt.logging.errors.log",yi,void 0);
A("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);if(!a){var b=Q("PLAYER_VARS",void 0);b&&(a={args:b})}rk(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");a.args.forced_experiments||(b=window.location.href,-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=kg(1<b.length?b[1]:b[0])):b={},b.forced_experiments&&(a.args.forced_experiments=b.forced_experiments));a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=Q("POST_MESSAGE_ORIGIN");
window!=window.top&&c&&c!=document.URL&&(a.args.loaderUrl=c);ll=a=(c=Q("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c?Kj(a,c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,!1):Kj(a);a.addEventListener("onScreenChanged",rl);a.addEventListener("onLogClientVeCreated",pl);a.addEventListener("onLogServerVeCreated",sl);a.addEventListener("onLogVeClicked",tl);a.addEventListener("onLogVesShown",ul);a.addEventListener("onVideoDataChange",ql);c=Q("POST_MESSAGE_ID","player");
Q("ENABLE_JS_API")?nl=new ck(a):Q("ENABLE_POST_API")&&"string"===typeof c&&"string"===typeof b&&(ml=new dk(window.parent,c,b),nl=new Xj(a,ml.h));rf()},void 0);
var vl=Ee(function(){hl("ol");var a=sk.getInstance(),b=!!((vk("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Id(document.body,"exp-invert-logo"))if(c&&!Id(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Id(d,"inverted-hdpi")){var e=Gd(d);Hd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Id(document.body,"inverted-hdpi")&&Jd();b!=c&&(b="f"+(Math.floor(119/31)+1),d=vk(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete Y[b]:(c=d.toString(16),Y[b]=c.toString()),a.save())}),wl=Ee(function(){var a=ll;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&Ci.dispose();a=0;for(var b=pf.length;a<b;a++)of(pf[a]);pf.length=0;gf("//static.doubleclick.net/instream/ad_status.js");qf=!1;P("DCLKSTAT",0);Rc(nl,ml);if(a=ll)a.removeEventListener("onScreenChanged",rl),a.removeEventListener("onLogClientVeCreated",pl),a.removeEventListener("onLogServerVeCreated",sl),a.removeEventListener("onLogVeClicked",tl),a.removeEventListener("onLogVesShown",ul),a.removeEventListener("onVideoDataChange",ql),a.destroy();
ol={}});
window.addEventListener?(window.addEventListener("load",vl),window.addEventListener("unload",wl)):window.attachEvent&&(window.attachEvent("onload",vl),window.attachEvent("onunload",wl));Ta("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Di);Ta("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Ei);Ta("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||sf);
Ta("yt.player.exports.navigate",B("yt.player.exports.navigate")||Ti);Ta("yt.util.activity.init",B("yt.util.activity.init")||Ff);Ta("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||If);Ta("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||Gf);}).call(this);
