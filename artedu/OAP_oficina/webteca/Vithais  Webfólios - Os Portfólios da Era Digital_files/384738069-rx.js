(function (){ var g="",aa="\n",k=" ",ba='"',ca='", ',da='","groups":["reactions"]},"labels":[',ea='","groups":["reactions"]},{"url": "',fa='"}],"applicationId":34}',ga="%s",ha="(",ia="(\\d*)(\\D*)",ja=")",ka="*",m=".",la="0",ma=": ",na="@",oa="An object listener must have handleEvent method.",pa="Assertion failed",qa="Content-Type",ra="Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?",sa="GET",ta="Listener can not be null.",ua="MSXML2.XMLHTTP",va="MSXML2.XMLHTTP.3.0",
wa="MSXML2.XMLHTTP.6.0",xa="Microsoft.XMLHTTP",n="POST",ya="[object Array]",za="[object Function]",Aa="[object Window]",Ba="]",Ca=']}],"applicationId":34}&token=',Da="_",Ea="a",Fa="abort",Ga="application/x-www-form-urlencoded;charset=utf-8",p="array",Ha="call",Ia="click",q="complete",Ja="content-type",Ka="error",La="event",r="function",Ma="g",Na="http://www.blogger.com/reviews/json/aggregates",Oa="http://www.blogger.com/reviews/json/token",Pa="http://www.blogger.com/reviews/json/write",Qa="infinite loop",
Ra="innerText",Sa="keypress",Ta="mouseout",Ua="mouseover",Va="native code",Wa="null",s="number",t="object",Xa="on",Ya="ready",Za="readystatechange",$a='req={"annotations": [ {"replaceAllLabels":true,"entity": {"url": "',ab='req={"applicationId":34}',bb='req={"entities":[{"url": "',cb="rx-checked",db="rx-count",eb="rx-holder",fb="rx-label",gb="rx-option",hb="rx-unchecked",ib="span",jb="splice",kb="string",lb="success",mb="timeout",nb="var ",ob="window",pb="withCredentials",u,qb=qb||{},x=this,rb=function(a,
b,c){a=a.split(m);c=c||x;a[0]in c||!c.execScript||c.execScript(nb+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]?c[d]:c[d]={}:c[d]=b},sb=function(){},y=function(a){var b=typeof a;if(b==t)if(a){if(a instanceof Array)return p;if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c==Aa)return t;if(c==ya||typeof a.length==s&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(jb))return p;if(c==za||"undefined"!=typeof a.call&&
"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(Ha))return r}else return Wa;else if(b==r&&"undefined"==typeof a.call)return t;return b},A=function(a){var b=y(a);return b==p||b==t&&typeof a.length==s},B=function(a){return typeof a==kb},C=function(a){return a[tb]||(a[tb]=++ub)},tb="closure_uid_"+(1E9*Math.random()>>>0),ub=0,vb=function(a,b,c){return a.call.apply(a.bind,arguments)},wb=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,
2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},D=function(a,b,c){D=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf(Va)?vb:wb;return D.apply(null,arguments)},E=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c};
Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return D.apply(null,c)}return D(this,a)};Function.prototype.partial=function(a){var b=Array.prototype.slice.call(arguments);b.unshift(this,null);return D.apply(null,b)};var xb=function(a){Error.captureStackTrace?Error.captureStackTrace(this,xb):this.stack=Error().stack||g;a&&(this.message=String(a))};E(xb,Error);var yb=function(a,b){for(var c=a.split(ga),d=g,e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join(ga)};var zb=function(a,b){b.unshift(a);xb.call(this,yb.apply(null,b));b.shift()};E(zb,xb);var F=function(a,b,c){if(!a){var d=Array.prototype.slice.call(arguments,2),e=pa;if(b)var e=e+(ma+b),f=d;throw new zb(g+e,f||[]);}return a};var G=Array.prototype,H=G.indexOf?function(a,b,c){F(null!=a.length);return G.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(B(a))return B(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ab=G.forEach?function(a,b,c){F(null!=a.length);G.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=B(a)?a.split(g):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Bb=G.filter?function(a,b,c){F(null!=a.length);return G.filter.call(a,b,
c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=B(a)?a.split(g):a,l=0;l<d;l++)if(l in h){var z=h[l];b.call(c,z,l,a)&&(e[f++]=z)}return e},Cb=function(a,b,c){t:{for(var d=a.length,e=B(a)?a.split(g):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a)){b=f;break t}b=-1}return 0>b?null:B(a)?a.charAt(b):a[b]},Eb=function(a,b){var c=H(a,b),d;(d=0<=c)&&Db(a,c);return d},Db=function(a,b){F(null!=a.length);return 1==G.splice.call(a,b,1).length},Fb=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=
a[d];return c}return[]},Gb=function(a,b,c){F(null!=a.length);return 2>=arguments.length?G.slice.call(a,b):G.slice.call(a,b,c)};var Hb=function(a){Hb[k](a);return a};Hb[k]=sb;var I,Ib,Jb,Kb,Lb=function(){return x.navigator?x.navigator.userAgent:null};Kb=Jb=Ib=I=!1;var J;if(J=Lb()){var Mb=x.navigator;I=0==J.lastIndexOf("Opera",0);Ib=!I&&(-1!=J.indexOf("MSIE")||-1!=J.indexOf("Trident"));Jb=!I&&-1!=J.indexOf("WebKit");Kb=!I&&!Jb&&!Ib&&"Gecko"==Mb.product}var Nb=I,K=Ib,L=Kb,M=Jb,Ob=x.navigator,Pb=-1!=(Ob&&Ob.platform||g).indexOf("Mac"),Qb=function(){var a=x.document;return a?a.documentMode:void 0},Rb;
t:{var Sb=g,N;if(Nb&&x.opera)var Tb=x.opera.version,Sb=typeof Tb==r?Tb():Tb;else if(L?N=/rv\:([^\);]+)(\)|;)/:K?N=/\b(?:MSIE|rv)\s+([^\);]+)(\)|;)/:M&&(N=/WebKit\/(\S+)/),N)var Ub=N.exec(Lb()),Sb=Ub?Ub[1]:g;if(K){var Vb=Qb();if(Vb>parseFloat(Sb)){Rb=String(Vb);break t}}Rb=Sb}
var Wb=Rb,Xb={},O=function(a){var b;if(!(b=Xb[a])){b=0;for(var c=String(Wb).replace(/^[\s\xa0]+|[\s\xa0]+$/g,g).split(m),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,g).split(m),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||g,l=d[f]||g,z=RegExp(ia,Ma),Jc=RegExp(ia,Ma);do{var v=z.exec(h)||[g,g,g],w=Jc.exec(l)||[g,g,g];if(0==v[0].length&&0==w[0].length)break;b=((0==v[1].length?0:parseInt(v[1],10))<(0==w[1].length?0:parseInt(w[1],10))?-1:(0==v[1].length?0:parseInt(v[1],10))>(0==w[1].length?
0:parseInt(w[1],10))?1:0)||((0==v[2].length)<(0==w[2].length)?-1:(0==v[2].length)>(0==w[2].length)?1:0)||(v[2]<w[2]?-1:v[2]>w[2]?1:0)}while(0==b)}b=Xb[a]=0<=b}return b},Yb=x.document,Zb=Yb&&K?Qb()||("CSS1Compat"==Yb.compatMode?parseInt(Wb,10):5):void 0;var $b=!K||K&&9<=Zb,ac=K&&!O("9");!M||O("528");L&&O("1.9b")||K&&O("8")||Nb&&O("9.5")||M&&O("528");L&&!O("8")||K&&O("9");var bc=function(){};bc.prototype.disposed_=!1;bc.prototype.dispose=function(){this.disposed_||(this.disposed_=!0,this.disposeInternal())};bc.prototype.disposeInternal=function(){if(this.onDisposeCallbacks_)for(;this.onDisposeCallbacks_.length;)this.onDisposeCallbacks_.shift()()};var P=function(a,b){this.type=a;this.currentTarget=this.target=b};u=P.prototype;u.disposeInternal=function(){};u.dispose=function(){};u.propagationStopped_=!1;u.defaultPrevented=!1;u.returnValue_=!0;u.preventDefault=function(){this.defaultPrevented=!0;this.returnValue_=!1};var Q=function(a,b){a&&this.init(a,b)};E(Q,P);u=Q.prototype;u.target=null;u.relatedTarget=null;u.offsetX=0;u.offsetY=0;u.clientX=0;u.clientY=0;u.screenX=0;u.screenY=0;u.button=0;u.keyCode=0;u.charCode=0;u.ctrlKey=!1;u.altKey=!1;u.shiftKey=!1;u.metaKey=!1;u.platformModifierKey=!1;u.event_=null;
u.init=function(a,b){var c=this.type=a.type;P.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(L){var e;t:{try{Hb(d.nodeName);e=!0;break t}catch(f){}e=!1}e||(d=null)}}else c==Ua?d=a.fromElement:c==Ta&&(d=a.toElement);this.relatedTarget=d;this.offsetX=M||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=M||void 0!==a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=
a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||(c==Sa?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.platformModifierKey=Pb?a.metaKey:a.ctrlKey;this.state=a.state;this.event_=a;a.defaultPrevented&&this.preventDefault();delete this.propagationStopped_};
u.preventDefault=function(){Q.superClass_.preventDefault.call(this);var a=this.event_;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ac)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};u.disposeInternal=function(){};var cc="closure_listenable_"+(1E6*Math.random()|0),R=function(a){return!(!a||!a[cc])},dc=0;var ec=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},fc=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},gc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),hc=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<gc.length;f++)c=gc[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var ic=function(a,b,c,d,e,f){this.listener=a;this.proxy=b;this.src=c;this.type=d;this.capture=!!e;this.handler=f;this.key=++dc;this.removed=this.callOnce=!1};ic.prototype.markAsRemoved=function(){this.removed=!0;this.handler=this.src=this.proxy=this.listener=null};var jc=function(a){this.src=a;this.listeners={};this.typeCount_=0};u=jc.prototype;u.add=function(a,b,c,d,e){var f=this.listeners[a];f||(f=this.listeners[a]=[],this.typeCount_++);var h=kc(f,b,d,e);-1<h?(a=f[h],c||(a.callOnce=!1)):(a=new ic(b,null,this.src,a,!!d,e),a.callOnce=c,f.push(a));return a};
u.remove=function(a,b,c,d){if(!(a in this.listeners))return!1;var e=this.listeners[a];b=kc(e,b,c,d);return-1<b?(e[b].markAsRemoved(),Db(e,b),0==e.length&&(delete this.listeners[a],this.typeCount_--),!0):!1};u.removeByKey=function(a){var b=a.type;if(!(b in this.listeners))return!1;var c=Eb(this.listeners[b],a);c&&(a.markAsRemoved(),0==this.listeners[b].length&&(delete this.listeners[b],this.typeCount_--));return c};
u.removeAll=function(a){var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,d[e].markAsRemoved();delete this.listeners[c];this.typeCount_--}return b};u.getListener=function(a,b,c,d){a=this.listeners[a];var e=-1;a&&(e=kc(a,b,c,d));return-1<e?a[e]:null};var kc=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.removed&&f.listener==b&&f.capture==!!c&&f.handler==d)return e}return-1};var lc={},S={},T={},mc=function(a,b,c,d,e){if(y(b)==p){for(var f=0;f<b.length;f++)mc(a,b[f],c,d,e);return null}c=nc(c);return R(a)?a.listen(b,c,d,e):oc(a,b,c,!1,d,e)},oc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=!!e,l=C(a),z=S[l];z||(S[l]=z=new jc(a));c=z.add(b,c,d,e,f);if(c.proxy)return c;d=pc();c.proxy=d;d.src=a;d.listener=c;a.addEventListener?a.addEventListener(b,d,h):a.attachEvent(b in T?T[b]:T[b]=Xa+b,d);return lc[c.key]=c},pc=function(){var a=qc,b=$b?function(c){return a.call(b.src,
b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},rc=function(a,b,c,d,e){if(y(b)==p){for(var f=0;f<b.length;f++)rc(a,b[f],c,d,e);return null}c=nc(c);return R(a)?a.listenOnce(b,c,d,e):oc(a,b,c,!0,d,e)},sc=function(a,b,c,d,e){if(y(b)==p){for(var f=0;f<b.length;f++)sc(a,b[f],c,d,e);return null}c=nc(c);if(R(a))return a.unlisten(b,c,d,e);if(!a)return!1;d=!!d;if(a=tc(a))if(b=a.getListener(b,c,d,e))return uc(b);return!1},uc=function(a){if(typeof a==s||!a||a.removed)return!1;
var b=a.src;if(R(b))return b.unlistenByKey(a);var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(c in T?T[c]:T[c]=Xa+c,d);(c=tc(b))?(c.removeByKey(a),0==c.typeCount_&&(c.src=null,delete S[C(b)])):a.markAsRemoved();delete lc[a.key];return!0},vc=function(a,b){var c=S[a];if(!c)return 0;var d=0,e;for(e in c.listeners)if(!b||e==b)for(var f=Fb(c.listeners[e]),h=0;h<f.length;++h)uc(f[h])&&++d;return d},xc=function(a,b,c,d){var e=1;if(a=tc(a))if(b=
a.listeners[b])for(b=Fb(b),a=0;a<b.length;a++){var f=b[a];f&&(f.capture==c&&!f.removed)&&(e&=!1!==wc(f,d))}return Boolean(e)},wc=function(a,b){var c=a.listener,d=a.handler||a.src;a.callOnce&&uc(a);return c.call(d,b)},qc=function(a,b){if(a.removed)return!0;if(!$b){var c;if(!(c=b))t:{c=[ob,La];for(var d=x,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break t}c=d}e=c;c=new Q(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){t:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break t}catch(h){f=!0}if(f||
void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,l=e.length-1;!c.propagationStopped_&&0<=l;l--)c.currentTarget=e[l],d&=xc(e[l],f,!0,c);for(l=0;!c.propagationStopped_&&l<e.length;l++)c.currentTarget=e[l],d&=xc(e[l],f,!1,c)}return d}return wc(a,new Q(b,this))},tc=function(a){return a[tb]?S[C(a)]||null:null},yc="__closure_events_fn_"+(1E9*Math.random()>>>0),nc=function(a){F(a,ta);if(y(a)==r)return a;F(a.handleEvent,oa);return a[yc]||(a[yc]=
function(b){return a.handleEvent(b)})};var U=function(){this.eventTargetListeners_=new jc(this);this.actualEventTarget_=this};E(U,bc);U.prototype[cc]=!0;u=U.prototype;u.parentEventTarget_=null;u.addEventListener=function(a,b,c,d){mc(this,a,b,c,d)};u.removeEventListener=function(a,b,c,d){sc(this,a,b,c,d)};
u.dispatchEvent=function(a){this.assertInitialized_();var b,c=this.parentEventTarget_;if(c){b=[];for(var d=1;c;c=c.parentEventTarget_)b.push(c),F(1E3>++d,Qa)}c=this.actualEventTarget_;d=a.type||a;if(B(a))a=new P(a,c);else if(a instanceof P)a.target=a.target||c;else{var e=a;a=new P(d,c);hc(a,e)}var e=!0,f;if(b)for(var h=b.length-1;!a.propagationStopped_&&0<=h;h--)f=a.currentTarget=b[h],e=f.fireListeners(d,!0,a)&&e;a.propagationStopped_||(f=a.currentTarget=c,e=f.fireListeners(d,!0,a)&&e,a.propagationStopped_||
(e=f.fireListeners(d,!1,a)&&e));if(b)for(h=0;!a.propagationStopped_&&h<b.length;h++)f=a.currentTarget=b[h],e=f.fireListeners(d,!1,a)&&e;return e};u.disposeInternal=function(){U.superClass_.disposeInternal.call(this);this.removeAllListeners();this.parentEventTarget_=null};u.listen=function(a,b,c,d){this.assertInitialized_();return this.eventTargetListeners_.add(a,b,!1,c,d)};u.listenOnce=function(a,b,c,d){return this.eventTargetListeners_.add(a,b,!0,c,d)};
u.unlisten=function(a,b,c,d){return this.eventTargetListeners_.remove(a,b,c,d)};u.unlistenByKey=function(a){return this.eventTargetListeners_.removeByKey(a)};u.removeAllListeners=function(a){return this.eventTargetListeners_?this.eventTargetListeners_.removeAll(a):0};
u.fireListeners=function(a,b,c){a=this.eventTargetListeners_.listeners[a];if(!a)return!0;a=Fb(a);for(var d=!0,e=0;e<a.length;++e){var f=a[e];if(f&&!f.removed&&f.capture==b){var h=f.listener,l=f.handler||f.src;f.callOnce&&this.unlistenByKey(f);d=!1!==h.call(l,c)&&d}}return d&&!1!=c.returnValue_};u.getListener=function(a,b,c,d){return this.eventTargetListeners_.getListener(a,b,c,d)};u.assertInitialized_=function(){F(this.eventTargetListeners_,ra)};var zc=function(a,b){b.preventDefault();a(b);return!1};var Ac=function(a){a=a.className;return B(a)&&a.match(/\S+/g)||[]},Bc=function(a,b){for(var c=Ac(a),d=Gb(arguments,1),e=c.length+d.length,f=c,h=0;h<d.length;h++)0<=H(f,d[h])||f.push(d[h]);a.className=c.join(k);return c.length==e},Dc=function(a,b){var c=Ac(a),d=Gb(arguments,1),e=Cc(c,d);a.className=e.join(k);return e.length==c.length-d.length},Cc=function(a,b){return Bb(a,function(a){return!(0<=H(b,a))})},Ec=function(a,b){var c=Ac(a);(c=!(0<=H(c,b)))?Bc(a,b):Dc(a,b);return c};!L&&!K||K&&K&&9<=Zb||L&&O("1.9.1");var Fc=K&&!O("9");var Gc=function(a,b,c,d){a=d||a;b=b&&b!=ka?b.toUpperCase():g;if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?m+c:g));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,h;h=a[f];f++)b==h.nodeName&&(d[e++]=h);d.length=e;return d}return a}a=a.getElementsByTagName(b||ka);if(c){d={};for(f=e=0;h=a[f];f++)b=h.className,typeof b.split==r&&0<=H(b.split(/\s+/),c)&&(d[e++]=h);d.length=e;return d}return a},Hc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,
OBJECT:1},Ic={IMG:k,BR:aa},Lc=function(a){if(Fc&&Ra in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,aa);else{var b=[];Kc(a,b,!0);a=b.join(g)}a=a.replace(/ \xAD /g,k).replace(/\xAD/g,g);a=a.replace(/\u200B/g,g);Fc||(a=a.replace(/ +/g,k));a!=k&&(a=a.replace(/^\s*/,g));return a},Kc=function(a,b,c){if(!(a.nodeName in Hc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,g)):b.push(a.nodeValue);else if(a.nodeName in Ic)b.push(Ic[a.nodeName]);else for(a=a.firstChild;a;)Kc(a,b,c),a=a.nextSibling};var V="StopIteration"in x?x.StopIteration:Error("StopIteration"),W=function(){};W.prototype.next=function(){throw V;};W.prototype.__iterator__=function(){return this};
var Mc=function(a){if(a instanceof W)return a;if(typeof a.__iterator__==r)return a.__iterator__(!1);if(A(a)){var b=0,c=new W;c.next=function(){for(;;){if(b>=a.length)throw V;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");},Nc=function(a,b,c){if(A(a))try{Ab(a,b,c)}catch(d){if(d!==V)throw d;}else{a=Mc(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(e){if(e!==V)throw e;}}};var Oc=function(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,na).replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ba).replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,g)))try{return eval(ha+a+ja)}catch(b){}throw Error("Invalid JSON string: "+a);};var X=function(a,b){this.map_={};this.keys_=[];var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};u=X.prototype;u.count_=0;u.version_=0;u.getValues=function(){this.cleanupKeysArray_();for(var a=[],b=0;b<this.keys_.length;b++)a.push(this.map_[this.keys_[b]]);return a};u.getKeys=function(){this.cleanupKeysArray_();return this.keys_.concat()};
u.remove=function(a){return Object.prototype.hasOwnProperty.call(this.map_,a)?(delete this.map_[a],this.count_--,this.version_++,this.keys_.length>2*this.count_&&this.cleanupKeysArray_(),!0):!1};
u.cleanupKeysArray_=function(){if(this.count_!=this.keys_.length){for(var a=0,b=0;a<this.keys_.length;){var c=this.keys_[a];Object.prototype.hasOwnProperty.call(this.map_,c)&&(this.keys_[b++]=c);a++}this.keys_.length=b}if(this.count_!=this.keys_.length){for(var d={},b=a=0;a<this.keys_.length;)c=this.keys_[a],Object.prototype.hasOwnProperty.call(d,c)||(this.keys_[b++]=c,d[c]=1),a++;this.keys_.length=b}};u.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.map_,a)?this.map_[a]:b};
u.set=function(a,b){Object.prototype.hasOwnProperty.call(this.map_,a)||(this.count_++,this.keys_.push(a),this.version_++);this.map_[a]=b};u.addAll=function(a){var b;a instanceof X?(b=a.getKeys(),a=a.getValues()):(b=fc(a),a=ec(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};u.clone=function(){return new X(this)};u.getKeyIterator=function(){return this.__iterator__(!0)};
u.__iterator__=function(a){this.cleanupKeysArray_();var b=0,c=this.keys_,d=this.map_,e=this.version_,f=this,h=new W;h.next=function(){for(;;){if(e!=f.version_)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw V;var h=c[b++];return a?h:d[h]}};return h};var Pc=function(a){if(typeof a.getValues==r)return a.getValues();if(B(a))return a.split(g);if(A(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ec(a)},Qc=function(a,b,c){if(typeof a.forEach==r)a.forEach(b,c);else if(A(a)||B(a))Ab(a,b,c);else{var d;if(typeof a.getKeys==r)d=a.getKeys();else if(typeof a.getValues!=r)if(A(a)||B(a)){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=fc(a);else d=void 0;for(var e=Pc(a),f=e.length,h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)}};var Rc=function(a,b,c){if(y(a)==r)c&&(a=D(a,c));else if(a&&typeof a.handleEvent==r)a=D(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:x.setTimeout(a,b||0)};var Sc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),Tc=M,Uc=function(a,b){if(Tc){Tc=!1;var c=x.location;if(c){var d=c.href;if(d&&(d=(d=Uc(3,d))&&decodeURIComponent(d))&&d!=c.hostname)throw Tc=!0,Error();}}return b.match(Sc)[a]||null};var Vc=function(){};Vc.prototype.cachedOptions_=null;Vc.prototype.getOptions=function(){return this.cachedOptions_||(this.cachedOptions_=this.internalGetOptions())};var Wc,Y=function(){};E(Y,Vc);Y.prototype.createInstance=function(){var a=this.getProgId_();return a?new ActiveXObject(a):new XMLHttpRequest};Y.prototype.internalGetOptions=function(){var a={};this.getProgId_()&&(a[0]=!0,a[1]=!0);return a};
Y.prototype.getProgId_=function(){if(!this.ieProgId_&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var a=[wa,va,ua,xa],b=0;b<a.length;b++){var c=a[b];try{return new ActiveXObject(c),this.ieProgId_=c}catch(d){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return this.ieProgId_};Wc=new Y;var Z=function(a){U.call(this);this.headers=new X;this.xmlHttpFactory_=a||null;this.active_=!1;this.xhrOptions_=this.xhr_=null;this.lastUri_=g;this.inAbort_=this.inOpen_=this.inSend_=this.errorDispatched_=!1;this.timeoutInterval_=0;this.timeoutId_=null;this.responseType_=g;this.useXhr2Timeout_=this.withCredentials_=!1};E(Z,U);
var Xc=/^https?$/i,Yc=[n,"PUT"],Zc=[],$c=function(a,b,c,d,e,f,h){var l=new Z;Zc.push(l);b&&l.listen(q,b);l.listenOnce(Ya,l.cleanupSend_);f&&l.setTimeoutInterval(f);h&&l.setWithCredentials(h);l.send(a,c,d,e)};Z.prototype.cleanupSend_=function(){this.dispose();Eb(Zc,this)};Z.prototype.setTimeoutInterval=function(a){this.timeoutInterval_=Math.max(0,a)};Z.prototype.setWithCredentials=function(a){this.withCredentials_=a};
Z.prototype.send=function(a,b,c,d){if(this.xhr_)throw Error("[goog.net.XhrIo] Object is active with another request="+this.lastUri_+"; newUri="+a);b=b?b.toUpperCase():sa;this.lastUri_=a;this.errorDispatched_=!1;this.active_=!0;this.xhr_=this.createXhr();this.xhrOptions_=this.xmlHttpFactory_?this.xmlHttpFactory_.getOptions():Wc.getOptions();this.xhr_.onreadystatechange=D(this.onReadyStateChange_,this);try{this.inOpen_=!0,this.xhr_.open(b,a,!0),this.inOpen_=!1}catch(e){this.error_(5,e);return}a=c||
g;var f=this.headers.clone();d&&Qc(d,function(a,b){f.set(b,a)});d=Cb(f.getKeys(),ad);c=x.FormData&&a instanceof x.FormData;!(0<=H(Yc,b))||(d||c)||f.set(qa,Ga);Qc(f,function(a,b){this.xhr_.setRequestHeader(b,a)},this);this.responseType_&&(this.xhr_.responseType=this.responseType_);pb in this.xhr_&&(this.xhr_.withCredentials=this.withCredentials_);try{this.cleanUpTimeoutTimer_(),0<this.timeoutInterval_&&((this.useXhr2Timeout_=K&&O(9)&&typeof this.xhr_.timeout==s&&void 0!==this.xhr_.ontimeout)?(this.xhr_.timeout=
this.timeoutInterval_,this.xhr_.ontimeout=D(this.timeout_,this)):this.timeoutId_=Rc(this.timeout_,this.timeoutInterval_,this)),this.inSend_=!0,this.xhr_.send(a),this.inSend_=!1}catch(h){this.error_(5,h)}};var ad=function(a){return Ja==a.toLowerCase()};u=Z.prototype;u.createXhr=function(){return this.xmlHttpFactory_?this.xmlHttpFactory_.createInstance():Wc.createInstance()};u.timeout_=function(){"undefined"!=typeof qb&&this.xhr_&&(this.dispatchEvent(mb),this.abort(8))};
u.error_=function(){this.active_=!1;this.xhr_&&(this.inAbort_=!0,this.xhr_.abort(),this.inAbort_=!1);this.dispatchErrors_();this.cleanUpXhr_()};u.dispatchErrors_=function(){this.errorDispatched_||(this.errorDispatched_=!0,this.dispatchEvent(q),this.dispatchEvent(Ka))};u.abort=function(){this.xhr_&&this.active_&&(this.active_=!1,this.inAbort_=!0,this.xhr_.abort(),this.inAbort_=!1,this.dispatchEvent(q),this.dispatchEvent(Fa),this.cleanUpXhr_())};
u.disposeInternal=function(){this.xhr_&&(this.active_&&(this.active_=!1,this.inAbort_=!0,this.xhr_.abort(),this.inAbort_=!1),this.cleanUpXhr_(!0));Z.superClass_.disposeInternal.call(this)};u.onReadyStateChange_=function(){if(!this.disposed_)if(this.inOpen_||this.inSend_||this.inAbort_)this.onReadyStateChangeHelper_();else this.onReadyStateChangeEntryPoint_()};u.onReadyStateChangeEntryPoint_=function(){this.onReadyStateChangeHelper_()};
u.onReadyStateChangeHelper_=function(){if(this.active_&&"undefined"!=typeof qb&&(!this.xhrOptions_[1]||4!=this.getReadyState()||2!=this.getStatus()))if(this.inSend_&&4==this.getReadyState())Rc(this.onReadyStateChange_,0,this);else if(this.dispatchEvent(Za),this.isComplete()){this.active_=!1;try{this.isSuccess()?(this.dispatchEvent(q),this.dispatchEvent(lb)):this.dispatchErrors_()}finally{this.cleanUpXhr_()}}};
u.cleanUpXhr_=function(a){if(this.xhr_){this.cleanUpTimeoutTimer_();var b=this.xhr_,c=this.xhrOptions_[0]?sb:null;this.xhrOptions_=this.xhr_=null;a||this.dispatchEvent(Ya);try{b.onreadystatechange=c}catch(d){}}};u.cleanUpTimeoutTimer_=function(){this.xhr_&&this.useXhr2Timeout_&&(this.xhr_.ontimeout=null);typeof this.timeoutId_==s&&(x.clearTimeout(this.timeoutId_),this.timeoutId_=null)};u.isComplete=function(){return 4==this.getReadyState()};
u.isSuccess=function(){var a=this.getStatus(),b;t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:b=!0;break t;default:b=!1}return b||0===a&&!this.isLastUriEffectiveSchemeHttp_()};u.isLastUriEffectiveSchemeHttp_=function(){var a=Uc(1,String(this.lastUri_));!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1));return Xc.test(a?a.toLowerCase():g)};u.getReadyState=function(){return this.xhr_?this.xhr_.readyState:0};
u.getStatus=function(){try{return 2<this.getReadyState()?this.xhr_.status:-1}catch(a){return-1}};u.getResponseJson=function(a){if(this.xhr_){var b=this.xhr_.responseText;a&&0==b.indexOf(a)&&(b=b.substring(a.length));return Oc(b)}};var bd=function(a,b){this.entityId_=encodeURIComponent(a);b?this.sender_=b:(this.sender_=Z,this.sender_.send=$c);this.writeToken_=g;this.options_={};this.counts_={};this.decodeLabel_={};this.selectedReactions_=new X};u=bd.prototype;
u.initialize=function(a){a=Gc(document,Ea,gb,document.getElementById(a));for(var b=0;b<a.length;b++){var c=a[b],d=Gc(document,ib,fb,c)[0],d=Lc(d);this.options_[d]=c;var e=this.encodeLabel_(d);this.decodeLabel_[e]=d;var e=c,f=D(this.toggle,this,d);mc(e,Ia,zc.partial(f));c=Gc(document,ib,db,c)[0];this.counts_[d]=c;c.innerHTML=la}a=D(this.displayRetrievedAnnotations_,this);b=D(this.disableOptions_,this);this.loadExistingReactions_(a,b)};u.setZipitToken_=function(a){this.writeToken_=a};
u.loadZipitToken_=function(a){var b=D(this.disableOptions_,this),c=D(this.setZipitToken_,this),d=D(this.toggle,this);this.sender_.send(Oa,function(){if(this.isSuccess()){var e=this.getResponseJson();c(e.channelHeader.token);a&&d(a)}else b()},n,ab)};u.loadExistingReactions_=function(a,b){this.sender_.send(Na,function(){this.isSuccess()?a(this.getResponseJson()):b()},n,bb+this.entityId_+ea+this.entityId_+fa)};
u.displayRetrievedAnnotations_=function(a){if(a.entityAggregates)for(var b=0;b<a.entityAggregates.length;b++){var c=!1;if(c=a.entityAggregates[b].labels)for(var d=0;d<c.length;d++){var e=this.counts_[this.decodeLabel_[c[d].label]];if(e){var f=parseInt(Lc(e),10);isNaN(f)&&(f=0);e.innerHTML=f+parseInt(c[d].count,10)}}}};u.encodeLabel_=function(a){a=a.replace(/([^A-Za-z ])/g,function(a){return Da+a.charCodeAt(0)});return a=a.replace(/([A-Z])/g,function(a){return Da+a.toLowerCase()})};
u.disableOptions_=function(){for(var a=Gc(document,Ea,gb,document.getElementById(eb)),b=0;b<a.length;b++){var c=a[b];c.style.borderColor=null;if(c)R(c)?c.removeAllListeners(void 0):vc(C(c),void 0);else{var c=0,d=void 0;for(d in S)c+=vc(d)}}};
u.toggle=function(a){if(this.writeToken_==g)this.loadZipitToken_(a);else{if(this.selectedReactions_.get(a)){var b=!1;this.selectedReactions_.remove(a)}else b=!0,this.selectedReactions_.set(a,!0);var c=g;Nc(this.selectedReactions_.getKeyIterator(),function(a){c=c+ba+this.encodeLabel_(a)+ca},this);this.sender_.send(Pa,sb,n,$a+this.entityId_+da+c+Ca+this.writeToken_);var d=this.options_[a];if(d){a=this.counts_[a];var e=parseInt(Lc(a),10);isNaN(e)&&(e=0);a.innerHTML=b?e+1:e-1;Ec(d,cb);Ec(d,hb)}}};rb("BLOG_Annotator",bd,void 0);bd.prototype.initialize=bd.prototype.initialize;rb("BLOG_listenOnce",rc,void 0); })()
