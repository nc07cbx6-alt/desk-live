var G0=Object.create;var ua=Object.defineProperty;var Y0=Object.getOwnPropertyDescriptor;var j0=Object.getOwnPropertyNames;var K0=Object.getPrototypeOf,q0=Object.prototype.hasOwnProperty;var A=(t,e,i)=>()=>{if(i)throw i[0];try{return t&&(e=t(t=0)),e}catch(r){throw i=[r],r}};var Et=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(i){throw e=0,i}},_d=(t,e)=>{for(var i in e)ua(t,i,{get:e[i],enumerable:!0})},Z0=(t,e,i,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of j0(e))!q0.call(t,n)&&n!==i&&ua(t,n,{get:()=>e[n],enumerable:!(r=Y0(e,n))||r.enumerable});return t};var Q0=(t,e,i)=>(i=t!=null?G0(K0(t)):{},Z0(e||!t||!t.__esModule?ua(i,"default",{value:t,enumerable:!0}):i,t));var pf=Et((ff,sl)=>{(function(t,e,i){function r(a){var l=this,c=s();l.next=function(){var u=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=u-(l.c=u|0)},l.c=1,l.s0=c(" "),l.s1=c(" "),l.s2=c(" "),l.s0-=c(a),l.s0<0&&(l.s0+=1),l.s1-=c(a),l.s1<0&&(l.s1+=1),l.s2-=c(a),l.s2<0&&(l.s2+=1),c=null}function n(a,l){return l.c=a.c,l.s0=a.s0,l.s1=a.s1,l.s2=a.s2,l}function o(a,l){var c=new r(a),u=l&&l.state,d=c.next;return d.int32=function(){return c.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,u&&(typeof u=="object"&&n(u,c),d.state=function(){return n(c,{})}),d}function s(){var a=4022871197,l=function(c){c=String(c);for(var u=0;u<c.length;u++){a+=c.charCodeAt(u);var d=.02519603282416938*a;a=d>>>0,d-=a,d*=a,a=d>>>0,d-=a,a+=d*4294967296}return(a>>>0)*23283064365386963e-26};return l}e&&e.exports?e.exports=o:i&&i.amd?i(function(){return o}):this.alea=o})(ff,typeof sl=="object"&&sl,typeof define=="function"&&define)});var mf=Et((gf,al)=>{(function(t,e,i){function r(s){var a=this,l="";a.x=0,a.y=0,a.z=0,a.w=0,a.next=function(){var u=a.x^a.x<<11;return a.x=a.y,a.y=a.z,a.z=a.w,a.w^=a.w>>>19^u^u>>>8},s===(s|0)?a.x=s:l+=s;for(var c=0;c<l.length+64;c++)a.x^=l.charCodeAt(c)|0,a.next()}function n(s,a){return a.x=s.x,a.y=s.y,a.z=s.z,a.w=s.w,a}function o(s,a){var l=new r(s),c=a&&a.state,u=function(){return(l.next()>>>0)/4294967296};return u.double=function(){do var d=l.next()>>>11,h=(l.next()>>>0)/4294967296,f=(d+h)/(1<<21);while(f===0);return f},u.int32=l.next,u.quick=u,c&&(typeof c=="object"&&n(c,l),u.state=function(){return n(l,{})}),u}e&&e.exports?e.exports=o:i&&i.amd?i(function(){return o}):this.xor128=o})(gf,typeof al=="object"&&al,typeof define=="function"&&define)});var yf=Et((xf,ll)=>{(function(t,e,i){function r(s){var a=this,l="";a.next=function(){var u=a.x^a.x>>>2;return a.x=a.y,a.y=a.z,a.z=a.w,a.w=a.v,(a.d=a.d+362437|0)+(a.v=a.v^a.v<<4^(u^u<<1))|0},a.x=0,a.y=0,a.z=0,a.w=0,a.v=0,s===(s|0)?a.x=s:l+=s;for(var c=0;c<l.length+64;c++)a.x^=l.charCodeAt(c)|0,c==l.length&&(a.d=a.x<<10^a.x>>>4),a.next()}function n(s,a){return a.x=s.x,a.y=s.y,a.z=s.z,a.w=s.w,a.v=s.v,a.d=s.d,a}function o(s,a){var l=new r(s),c=a&&a.state,u=function(){return(l.next()>>>0)/4294967296};return u.double=function(){do var d=l.next()>>>11,h=(l.next()>>>0)/4294967296,f=(d+h)/(1<<21);while(f===0);return f},u.int32=l.next,u.quick=u,c&&(typeof c=="object"&&n(c,l),u.state=function(){return n(l,{})}),u}e&&e.exports?e.exports=o:i&&i.amd?i(function(){return o}):this.xorwow=o})(xf,typeof ll=="object"&&ll,typeof define=="function"&&define)});var vf=Et((Sf,cl)=>{(function(t,e,i){function r(s){var a=this;a.next=function(){var c=a.x,u=a.i,d,h,f;return d=c[u],d^=d>>>7,h=d^d<<24,d=c[u+1&7],h^=d^d>>>10,d=c[u+3&7],h^=d^d>>>3,d=c[u+4&7],h^=d^d<<7,d=c[u+7&7],d=d^d<<13,h^=d^d<<9,c[u]=h,a.i=u+1&7,h};function l(c,u){var d,h,f=[];if(u===(u|0))h=f[0]=u;else for(u=""+u,d=0;d<u.length;++d)f[d&7]=f[d&7]<<15^u.charCodeAt(d)+f[d+1&7]<<13;for(;f.length<8;)f.push(0);for(d=0;d<8&&f[d]===0;++d);for(d==8?h=f[7]=-1:h=f[d],c.x=f,c.i=0,d=256;d>0;--d)c.next()}l(a,s)}function n(s,a){return a.x=s.x.slice(),a.i=s.i,a}function o(s,a){s==null&&(s=+new Date);var l=new r(s),c=a&&a.state,u=function(){return(l.next()>>>0)/4294967296};return u.double=function(){do var d=l.next()>>>11,h=(l.next()>>>0)/4294967296,f=(d+h)/(1<<21);while(f===0);return f},u.int32=l.next,u.quick=u,c&&(c.x&&n(c,l),u.state=function(){return n(l,{})}),u}e&&e.exports?e.exports=o:i&&i.amd?i(function(){return o}):this.xorshift7=o})(Sf,typeof cl=="object"&&cl,typeof define=="function"&&define)});var _f=Et((bf,ul)=>{(function(t,e,i){function r(s){var a=this;a.next=function(){var c=a.w,u=a.X,d=a.i,h,f;return a.w=c=c+1640531527|0,f=u[d+34&127],h=u[d=d+1&127],f^=f<<13,h^=h<<17,f^=f>>>15,h^=h>>>12,f=u[d]=f^h,a.i=d,f+(c^c>>>16)|0};function l(c,u){var d,h,f,g,x,b=[],v=128;for(u===(u|0)?(h=u,u=null):(u=u+"\0",h=0,v=Math.max(v,u.length)),f=0,g=-32;g<v;++g)u&&(h^=u.charCodeAt((g+32)%u.length)),g===0&&(x=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,g>=0&&(x=x+1640531527|0,d=b[g&127]^=h+x,f=d==0?f+1:0);for(f>=128&&(b[(u&&u.length||0)&127]=-1),f=127,g=512;g>0;--g)h=b[f+34&127],d=b[f=f+1&127],h^=h<<13,d^=d<<17,h^=h>>>15,d^=d>>>12,b[f]=h^d;c.w=x,c.X=b,c.i=f}l(a,s)}function n(s,a){return a.i=s.i,a.w=s.w,a.X=s.X.slice(),a}function o(s,a){s==null&&(s=+new Date);var l=new r(s),c=a&&a.state,u=function(){return(l.next()>>>0)/4294967296};return u.double=function(){do var d=l.next()>>>11,h=(l.next()>>>0)/4294967296,f=(d+h)/(1<<21);while(f===0);return f},u.int32=l.next,u.quick=u,c&&(c.X&&n(c,l),u.state=function(){return n(l,{})}),u}e&&e.exports?e.exports=o:i&&i.amd?i(function(){return o}):this.xor4096=o})(bf,typeof ul=="object"&&ul,typeof define=="function"&&define)});var Pf=Et((Tf,dl)=>{(function(t,e,i){function r(s){var a=this,l="";a.next=function(){var u=a.b,d=a.c,h=a.d,f=a.a;return u=u<<25^u>>>7^d,d=d-h|0,h=h<<24^h>>>8^f,f=f-u|0,a.b=u=u<<20^u>>>12^d,a.c=d=d-h|0,a.d=h<<16^d>>>16^f,a.a=f-u|0},a.a=0,a.b=0,a.c=-1640531527,a.d=1367130551,s===Math.floor(s)?(a.a=s/4294967296|0,a.b=s|0):l+=s;for(var c=0;c<l.length+20;c++)a.b^=l.charCodeAt(c)|0,a.next()}function n(s,a){return a.a=s.a,a.b=s.b,a.c=s.c,a.d=s.d,a}function o(s,a){var l=new r(s),c=a&&a.state,u=function(){return(l.next()>>>0)/4294967296};return u.double=function(){do var d=l.next()>>>11,h=(l.next()>>>0)/4294967296,f=(d+h)/(1<<21);while(f===0);return f},u.int32=l.next,u.quick=u,c&&(typeof c=="object"&&n(c,l),u.state=function(){return n(l,{})}),u}e&&e.exports?e.exports=o:i&&i.amd?i(function(){return o}):this.tychei=o})(Tf,typeof dl=="object"&&dl,typeof define=="function"&&define)});var Cf=Et(()=>{});var wf=Et((Af,lo)=>{(function(t,e,i){var r=256,n=6,o=52,s="random",a=i.pow(r,n),l=i.pow(2,o),c=l*2,u=r-1,d;function h(P,y,T){var C=[];y=y==!0?{entropy:!0}:y||{};var k=b(x(y.entropy?[P,R(e)]:P??v(),3),C),U=new f(C),z=function(){for(var H=U.g(n),X=a,B=0;H<l;)H=(H+B)*r,X*=r,B=U.g(1);for(;H>=c;)H/=2,X/=2,B>>>=1;return(H+B)/X};return z.int32=function(){return U.g(4)|0},z.quick=function(){return U.g(4)/4294967296},z.double=z,b(R(U.S),e),(y.pass||T||function(H,X,B,Z){return Z&&(Z.S&&g(Z,U),H.state=function(){return g(U,{})}),B?(i[s]=H,X):H})(z,k,"global"in y?y.global:this==i,y.state)}function f(P){var y,T=P.length,C=this,k=0,U=C.i=C.j=0,z=C.S=[];for(T||(P=[T++]);k<r;)z[k]=k++;for(k=0;k<r;k++)z[k]=z[U=u&U+P[k%T]+(y=z[k])],z[U]=y;(C.g=function(H){for(var X,B=0,Z=C.i,S=C.j,M=C.S;H--;)X=M[Z=u&Z+1],B=B*r+M[u&(M[Z]=M[S=u&S+X])+(M[S]=X)];return C.i=Z,C.j=S,B})(r)}function g(P,y){return y.i=P.i,y.j=P.j,y.S=P.S.slice(),y}function x(P,y){var T=[],C=typeof P,k;if(y&&C=="object")for(k in P)try{T.push(x(P[k],y-1))}catch{}return T.length?T:C=="string"?P:P+"\0"}function b(P,y){for(var T=P+"",C,k=0;k<T.length;)y[u&k]=u&(C^=y[u&k]*19)+T.charCodeAt(k++);return R(y)}function v(){try{var P;return d&&(P=d.randomBytes)?P=P(r):(P=new Uint8Array(r),(t.crypto||t.msCrypto).getRandomValues(P)),R(P)}catch{var y=t.navigator,T=y&&y.plugins;return[+new Date,t,T,t.screen,R(e)]}}function R(P){return String.fromCharCode.apply(0,P)}if(b(i.random(),e),typeof lo=="object"&&lo.exports){lo.exports=h;try{d=Cf()}catch{}}else typeof define=="function"&&define.amd?define(function(){return h}):i["seed"+s]=h})(typeof self<"u"?self:Af,[],Math)});var kf=Et((w2,Rf)=>{var q_=pf(),Z_=mf(),Q_=yf(),J_=vf(),eT=_f(),tT=Pf(),mi=wf();mi.alea=q_;mi.xor128=Z_;mi.xorwow=Q_;mi.xorshift7=J_;mi.xor4096=eT;mi.tychei=tT;Rf.exports=mi});function Dr(){let t;if(typeof window<"u"&&window.performance)t=window.performance.now();else if(typeof process<"u"&&process.hrtime){let e=process.hrtime();t=e[0]*1e3+e[1]/1e6}else t=Date.now();return t}var ml=A(()=>{});var xi,xl=A(()=>{ml();xi=class{constructor(e,i){this.sampleSize=1,this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this.name=e,this.type=i,this.reset()}reset(){return this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this}setSampleSize(e){return this.sampleSize=e,this}incrementCount(){return this.addCount(1),this}decrementCount(){return this.subtractCount(1),this}addCount(e){return this._count+=e,this._samples++,this._checkSampling(),this}subtractCount(e){return this._count-=e,this._samples++,this._checkSampling(),this}addTime(e){return this._time+=e,this.lastTiming=e,this._samples++,this._checkSampling(),this}timeStart(){return this._startTime=Dr(),this._timerPending=!0,this}timeEnd(){return this._timerPending?(this.addTime(Dr()-this._startTime),this._timerPending=!1,this._checkSampling(),this):this}getSampleAverageCount(){return this.sampleSize>0?this.lastSampleCount/this.sampleSize:0}getSampleAverageTime(){return this.sampleSize>0?this.lastSampleTime/this.sampleSize:0}getSampleHz(){return this.lastSampleTime>0?this.sampleSize/(this.lastSampleTime/1e3):0}getAverageCount(){return this.samples>0?this.count/this.samples:0}getAverageTime(){return this.samples>0?this.time/this.samples:0}getHz(){return this.time>0?this.samples/(this.time/1e3):0}_checkSampling(){this._samples===this.sampleSize&&(this.lastSampleTime=this._time,this.lastSampleCount=this._count,this.count+=this._count,this.time+=this._time,this.samples+=this._samples,this._time=0,this._count=0,this._samples=0)}}});var Vi,Bf=A(()=>{xl();Vi=class{constructor(e){this.stats={},this.id=e.id,this.stats={},this._initializeStats(e.stats),Object.seal(this)}get(e,i="count"){return this._getOrCreate({name:e,type:i})}get size(){return Object.keys(this.stats).length}reset(){for(let e of Object.values(this.stats))e.reset();return this}forEach(e){for(let i of Object.values(this.stats))e(i)}getTable(){let e={};return this.forEach(i=>{e[i.name]={time:i.time||0,count:i.count||0,average:i.getAverageTime()||0,hz:i.getHz()||0}}),e}_initializeStats(e=[]){e.forEach(i=>this._getOrCreate(i))}_getOrCreate(e){let{name:i,type:r}=e,n=this.stats[i];return n||(e instanceof xi?n=e:n=new xi(i,r),this.stats[i]=n),n}}});var Of=A(()=>{Bf();xl();ml()});function AT(t,e){let i=t.stats,r=!1;for(let l of e)i[l]||(t.get(l),r=!0);let n=Object.keys(i).length,o=Uf.get(t);if(!r&&o?.orderedStatNames===e&&o.statCount===n)return;let s={},a=Lf.get(e);a||(a=new Set(e),Lf.set(e,a));for(let l of e)i[l]&&(s[l]=i[l]);for(let[l,c]of Object.entries(i))a.has(l)||(s[l]=c);for(let l of Object.keys(i))delete i[l];Object.assign(i,s),Uf.set(t,{orderedStatNames:e,statCount:n})}var PT,CT,Uf,Lf,yl,uo,Sl=A(()=>{Of();PT="GPU Time and Memory",CT=["Adapter","GPU","GPU Type","GPU Backend","Frame Rate","CPU Time","GPU Time","GPU Memory","Buffer Memory","Texture Memory","Referenced Buffer Memory","Referenced Texture Memory","Swap Chain Texture"],Uf=new WeakMap,Lf=new WeakMap,yl=class{stats=new Map;getStats(e){return this.get(e)}get(e){this.stats.has(e)||this.stats.set(e,new Vi({id:e}));let i=this.stats.get(e);return e===PT&&AT(i,CT),i}},uo=new yl});var Fr,wT,ho,RT,zf,vl=A(()=>{Fr=globalThis,wT=globalThis.document||{},ho=globalThis.process||{},RT=globalThis.console,zf=globalThis.navigator||{}});function fo(t){if(typeof window<"u"&&window.process?.type==="renderer"||typeof process<"u"&&process.versions?.electron)return!0;let e=typeof navigator<"u"&&navigator.userAgent,i=t||e;return!!(i&&i.indexOf("Electron")>=0)}var bl=A(()=>{});function Ee(){return!(typeof process=="object"&&String(process)==="[object process]"&&!process?.browser)||fo()}var _l=A(()=>{bl()});function Tl(t){return!t&&!Ee()?"Node":fo(t)?"Electron":(t||zf.userAgent||"").indexOf("Edge")>-1?"Edge":globalThis.chrome?"Chrome":globalThis.safari?"Safari":globalThis.mozInnerScreenX?"Firefox":"Unknown"}var Wf=A(()=>{_l();bl();vl()});var Pl,Gt=A(()=>{vl();_l();Wf();Pl="4.1.2"});function Hi(t,e){if(!t)throw new Error(e||"Assertion failed")}var Cl=A(()=>{});function Al(t){if(!t)return 0;let e;switch(typeof t){case"number":e=t;break;case"object":e=t.logLevel||t.priority||0;break;default:return 0}return Hi(Number.isFinite(e)&&e>=0),e}function Vf(t){let{logLevel:e,message:i}=t;t.logLevel=Al(e);let r=t.args?Array.from(t.args):[];for(;r.length&&r.shift()!==i;);switch(typeof e){case"string":case"function":i!==void 0&&r.unshift(i),t.message=e;break;case"object":Object.assign(t,e);break;default:}typeof t.message=="function"&&(t.message=t.message());let n=typeof t.message;return Hi(n==="string"||n==="object"),Object.assign(t,{args:r},t.opts)}var Hf=A(()=>{Cl()});var yi,po,$f=A(()=>{Hf();yi=()=>{},po=class{constructor({level:e=0}={}){this.userData={},this._onceCache=new Set,this._level=e}set level(e){this.setLevel(e)}get level(){return this.getLevel()}setLevel(e){return this._level=e,this}getLevel(){return this._level}warn(e,...i){return this._log("warn",0,e,i,{once:!0})}error(e,...i){return this._log("error",0,e,i)}log(e,i,...r){return this._log("log",e,i,r)}info(e,i,...r){return this._log("info",e,i,r)}once(e,i,...r){return this._log("once",e,i,r,{once:!0})}_log(e,i,r,n,o={}){let s=Vf({logLevel:i,message:r,args:this._buildArgs(i,r,n),opts:o});return this._createLogFunction(e,s,o)}_buildArgs(e,i,r){return[e,i,...r]}_createLogFunction(e,i,r){if(!this._shouldLog(i.logLevel))return yi;let n=this._getOnceTag(r.tag??i.tag??i.message);if((r.once||i.once)&&n!==void 0){if(this._onceCache.has(n))return yi;this._onceCache.add(n)}return this._emit(e,i)}_shouldLog(e){return this.getLevel()>=Al(e)}_getOnceTag(e){if(e!==void 0)try{return typeof e=="string"?e:String(e)}catch{return}}}});function ET(t){try{let e=window[t],i="__storage_test__";return e.setItem(i,i),e.removeItem(i),e}catch{return null}}var go,Xf=A(()=>{go=class{constructor(e,i,r="sessionStorage"){this.storage=ET(r),this.id=e,this.config=i,this._loadConfiguration()}getConfiguration(){return this.config}setConfiguration(e){if(Object.assign(this.config,e),this.storage){let i=JSON.stringify(this.config);this.storage.setItem(this.id,i)}}_loadConfiguration(){let e={};if(this.storage){let i=this.storage.getItem(this.id);e=i?JSON.parse(i):{}}return Object.assign(this.config,e),this}}});function Gf(t){let e;return t<10?e=`${t.toFixed(2)}ms`:t<100?e=`${t.toFixed(1)}ms`:t<1e3?e=`${t.toFixed(0)}ms`:e=`${(t/1e3).toFixed(2)}s`,e}function Yf(t,e=8){let i=Math.max(e-t.length,0);return`${" ".repeat(i)}${t}`}var jf=A(()=>{});function Kf(t){return typeof t!="string"?t:(t=t.toUpperCase(),mo[t]||mo.WHITE)}function qf(t,e,i){return!Ee&&typeof t=="string"&&(e&&(t=`\x1B[${Kf(e)}m${t}\x1B[39m`),i&&(t=`\x1B[${Kf(i)+IT}m${t}\x1B[49m`)),t}var mo,IT,Zf=A(()=>{Gt();(function(t){t[t.BLACK=30]="BLACK",t[t.RED=31]="RED",t[t.GREEN=32]="GREEN",t[t.YELLOW=33]="YELLOW",t[t.BLUE=34]="BLUE",t[t.MAGENTA=35]="MAGENTA",t[t.CYAN=36]="CYAN",t[t.WHITE=37]="WHITE",t[t.BRIGHT_BLACK=90]="BRIGHT_BLACK",t[t.BRIGHT_RED=91]="BRIGHT_RED",t[t.BRIGHT_GREEN=92]="BRIGHT_GREEN",t[t.BRIGHT_YELLOW=93]="BRIGHT_YELLOW",t[t.BRIGHT_BLUE=94]="BRIGHT_BLUE",t[t.BRIGHT_MAGENTA=95]="BRIGHT_MAGENTA",t[t.BRIGHT_CYAN=96]="BRIGHT_CYAN",t[t.BRIGHT_WHITE=97]="BRIGHT_WHITE"})(mo||(mo={}));IT=10});function Qf(t,e=["constructor"]){let i=Object.getPrototypeOf(t),r=Object.getOwnPropertyNames(i),n=t;for(let o of r){let s=n[o];typeof s=="function"&&(e.find(a=>o===a)||(n[o]=s.bind(t)))}}var Jf=A(()=>{});var xo,St,wl=A(()=>{Gt();xo=class{getHighResolutionTimer(){let e;if(Ee()&&Fr.performance)e=Fr?.performance?.now?.();else if("hrtime"in ho){let i=ho?.hrtime?.();e=i[0]*1e3+i[1]/1e6}else e=Date.now();return e}getMemoryUsageMB(){let i=Fr?.performance?.memory?.usedJSHeapSize;return i==null?null:Math.trunc(i/1024/1024)}},St=new xo;globalThis.Probe=xo;globalThis.probe=St});function DT(t,e,i){if(typeof e=="string"){let r=i.time?Yf(Gf(i.total)):"";e=i.time?`${t}: ${r}  ${e}`:`${t}: ${e}`,e=qf(e,i.color,i.background)}return e}function FT(t){for(let e in t)for(let i in t[e])return i||"untitled";return"empty"}var $i,Rl,Ot,kl=A(()=>{Gt();$f();Xf();jf();Zf();Jf();Cl();wl();$i={debug:Ee()&&console.debug||console.log,log:console.log,info:console.info,warn:console.warn,error:console.error},Rl={enabled:!0,level:0},Ot=class extends po{constructor({id:e}={id:""}){super({level:0}),this.VERSION=Pl,this._startTs=St.getHighResolutionTimer(),this._deltaTs=St.getHighResolutionTimer(),this.userData={},this.LOG_THROTTLE_TIMEOUT=0,this.id=e,this.userData={},this._storage=new go(`__probe-${this.id}__`,{[this.id]:Rl}),this.timeStamp(`${this.id} started`),Qf(this),Object.seal(this)}isEnabled(){return this._getConfiguration().enabled}getLevel(){return this._getConfiguration().level}getTotal(){return Number((St.getHighResolutionTimer()-this._startTs).toPrecision(10))}getDelta(){return Number((St.getHighResolutionTimer()-this._deltaTs).toPrecision(10))}set priority(e){this.level=e}get priority(){return this.level}getPriority(){return this.level}enable(e=!0){return this._updateConfiguration({enabled:e}),this}setLevel(e){return this._updateConfiguration({level:e}),this}get(e){return this._getConfiguration()[e]}set(e,i){this._updateConfiguration({[e]:i})}settings(){console.table?console.table(this._storage.config):console.log(this._storage.config)}assert(e,i){if(!e)throw new Error(i||"Assertion failed")}warn(e,...i){return this._log("warn",0,e,i,{method:$i.warn,once:!0})}error(e,...i){return this._log("error",0,e,i,{method:$i.error})}deprecated(e,i){return this.warn(`\`${e}\` is deprecated and will be removed in a later version. Use \`${i}\` instead`)}removed(e,i){return this.error(`\`${e}\` has been removed. Use \`${i}\` instead`)}probe(e,i,...r){let n=St.getMemoryUsageMB();if(n!==null){let o=`${n}MB `;typeof i=="function"?i=()=>`${o}${i()}`:typeof i=="string"&&(i=`${o}${i}`)}return this._log("log",e,i,r,{method:$i.log,time:!0,once:!0})}log(e,i,...r){return this._log("log",e,i,r,{method:$i.debug})}info(e,i,...r){return this._log("info",e,i,r,{method:console.info})}once(e,i,...r){return this._log("once",e,i,r,{method:$i.debug||$i.info,once:!0})}table(e,i,r){return i?this._log("table",e,i,r&&[r]||[],{method:console.table||yi,tag:FT(i)}):yi}time(e,i){return this._log("time",e,i,[],{method:console.time?console.time:console.info})}timeEnd(e,i){return this._log("time",e,i,[],{method:console.timeEnd?console.timeEnd:console.info})}timeStamp(e,i){return this._log("time",e,i,[],{method:console.timeStamp||yi})}group(e,i,r={collapsed:!1}){let n=(r.collapsed?console.groupCollapsed:console.group)||console.info;return this._log("group",e,i,[],{method:n})}groupCollapsed(e,i,r={}){return this.group(e,i,Object.assign({},r,{collapsed:!0}))}groupEnd(e){return this._log("groupEnd",e,"",[],{method:console.groupEnd||yi})}withGroup(e,i,r){this.group(e,i)();try{r()}finally{this.groupEnd(e)()}}trace(){console.trace&&console.trace()}_shouldLog(e){return this.isEnabled()&&super._shouldLog(e)}_emit(e,i){let r=i.method;Hi(r),i.total=this.getTotal(),i.delta=this.getDelta(),this._deltaTs=St.getHighResolutionTimer();let n=DT(this.id,i.message,i);return r.bind(console,n,...i.args)}_getConfiguration(){return this._storage.config[this.id]||this._updateConfiguration(Rl),this._storage.config[this.id]}_updateConfiguration(e){let i=this._storage.config[this.id]||{...Rl};this._storage.setConfiguration({[this.id]:{...i,...e}})}};Ot.VERSION=Pl});var ep=A(()=>{wl();globalThis.probe||(globalThis.probe=St)});var P3,tp=A(()=>{kl();kl();ep();P3=new Ot({id:"@probe.gl/log"})});var _,Ye=A(()=>{tp();_=new Ot({id:"luma.gl"})});function vt(t="id"){El[t]=El[t]||1;let e=El[t]++;return`${t}-${e}`}var El,Xi=A(()=>{El={}});function LT(t,e){let i={...e};for(let r in t)t[r]!==void 0&&(i[r]=t[r]);return i}function ap(t,e){let i=t.stats,r=!1;for(let l of e)i[l]||(t.get(l),r=!0);let n=Object.keys(i).length,o=op.get(t);if(!r&&o?.orderedStatNames===e&&o.statCount===n)return;let s={},a=sp.get(e);a||(a=new Set(e),sp.set(e,a));for(let l of e)i[l]&&(s[l]=i[l]);for(let[l,c]of Object.entries(i))a.has(l)||(s[l]=c);for(let l of Object.keys(i))delete i[l];Object.assign(i,s),op.set(t,{orderedStatNames:e,statCount:n})}function lp(t){return t.type==="webgl"?UT:OT}function Mr(t){let e=t.userData[MT];return e?.enabled?e:null}function Yt(){return globalThis.performance?.now?.()??Date.now()}function zT(t,e){let i=Mr(t);if(!(!i||!i.activeDefaultFramebufferAcquireDepth))switch(i.transientCanvasResourceCreates=(i.transientCanvasResourceCreates||0)+1,e){case"Texture":i.transientCanvasTextureCreates=(i.transientCanvasTextureCreates||0)+1;break;case"TextureView":i.transientCanvasTextureViewCreates=(i.transientCanvasTextureViewCreates||0)+1;break;case"Sampler":i.transientCanvasSamplerCreates=(i.transientCanvasSamplerCreates||0)+1;break;case"Framebuffer":i.transientCanvasFramebufferCreates=(i.transientCanvasFramebufferCreates||0)+1;break;default:break}}function WT(t){let e=Object.getPrototypeOf(t);for(;e;){let i=Object.getPrototypeOf(e);if(!i||i===$.prototype)return VT(e)||t[Symbol.toStringTag]||t.constructor.name;e=i}return t[Symbol.toStringTag]||t.constructor.name}function VT(t){let e=Object.getOwnPropertyDescriptor(t,Symbol.toStringTag);return typeof e?.get=="function"?e.get.call(t):typeof e?.value=="string"?e.value:null}var MT,ip,rp,np,NT,BT,OT,UT,op,sp,$,Ce=A(()=>{Xi();MT="cpu-hotspot-profiler",ip="GPU Resource Counts",rp="Resource Counts",np="GPU Time and Memory",NT=["Resources","Buffers","Textures","Samplers","TextureViews","Framebuffers","QuerySets","Shaders","RenderPipelines","ComputePipelines","PipelineLayouts","VertexArrays","RenderPasss","ComputePasss","CommandEncoders","CommandBuffers"],BT=["Resources","Buffers","Textures","Samplers","TextureViews","Framebuffers","QuerySets","Shaders","RenderPipelines","SharedRenderPipelines","ComputePipelines","PipelineLayouts","VertexArrays","RenderPasss","ComputePasss","CommandEncoders","CommandBuffers"],OT=NT.flatMap(t=>[`${t} Created`,`${t} Active`]),UT=BT.flatMap(t=>[`${t} Created`,`${t} Active`]),op=new WeakMap,sp=new WeakMap,$=class{static defaultProps={id:"undefined",handle:void 0,userData:void 0};toString(){return`${this[Symbol.toStringTag]||this.constructor.name}:"${this.id}"`}id;props;userData={};_device;destroyed=!1;allocatedBytes=0;allocatedBytesName=null;_attachedResources=new Set;constructor(e,i,r){if(!e)throw new Error("no device");this._device=e,this.props=LT(i,r);let n=this.props.id!=="undefined"?this.props.id:vt(this[Symbol.toStringTag]);this.props.id=n,this.id=n,this.userData=this.props.userData||{},this.addStats()}destroy(){this.destroyed||this.destroyResource()}delete(){return this.destroy(),this}getProps(){return this.props}attachResource(e){this._attachedResources.add(e)}detachResource(e){this._attachedResources.delete(e)}destroyAttachedResource(e){this._attachedResources.delete(e)&&e.destroy()}destroyAttachedResources(){for(let e of this._attachedResources)e.destroy();this._attachedResources=new Set}destroyResource(){this.destroyed||(this.destroyAttachedResources(),this.removeStats(),this.destroyed=!0)}removeStats(){let e=Mr(this._device),i=e?Yt():0,r=[this._device.statsManager.getStats(ip),this._device.statsManager.getStats(rp)],n=lp(this._device);for(let s of r)ap(s,n);let o=this.getStatsName();for(let s of r)s.get("Resources Active").decrementCount(),s.get(`${o}s Active`).decrementCount();e&&(e.statsBookkeepingCalls=(e.statsBookkeepingCalls||0)+1,e.statsBookkeepingTimeMs=(e.statsBookkeepingTimeMs||0)+(Yt()-i))}trackAllocatedMemory(e,i=this.getStatsName()){let r=Mr(this._device),n=r?Yt():0,o=this._device.statsManager.getStats(np);this.allocatedBytes>0&&this.allocatedBytesName&&(o.get("GPU Memory").subtractCount(this.allocatedBytes),o.get(`${this.allocatedBytesName} Memory`).subtractCount(this.allocatedBytes)),o.get("GPU Memory").addCount(e),o.get(`${i} Memory`).addCount(e),r&&(r.statsBookkeepingCalls=(r.statsBookkeepingCalls||0)+1,r.statsBookkeepingTimeMs=(r.statsBookkeepingTimeMs||0)+(Yt()-n)),this.allocatedBytes=e,this.allocatedBytesName=i}trackReferencedMemory(e,i=this.getStatsName()){this.trackAllocatedMemory(e,`Referenced ${i}`)}trackDeallocatedMemory(e=this.getStatsName()){if(this.allocatedBytes===0){this.allocatedBytesName=null;return}let i=Mr(this._device),r=i?Yt():0,n=this._device.statsManager.getStats(np);n.get("GPU Memory").subtractCount(this.allocatedBytes),n.get(`${this.allocatedBytesName||e} Memory`).subtractCount(this.allocatedBytes),i&&(i.statsBookkeepingCalls=(i.statsBookkeepingCalls||0)+1,i.statsBookkeepingTimeMs=(i.statsBookkeepingTimeMs||0)+(Yt()-r)),this.allocatedBytes=0,this.allocatedBytesName=null}trackDeallocatedReferencedMemory(e=this.getStatsName()){this.trackDeallocatedMemory(`Referenced ${e}`)}addStats(){let e=this.getStatsName(),i=Mr(this._device),r=i?Yt():0,n=[this._device.statsManager.getStats(ip),this._device.statsManager.getStats(rp)],o=lp(this._device);for(let s of n)ap(s,o);for(let s of n)s.get("Resources Created").incrementCount(),s.get("Resources Active").incrementCount(),s.get(`${e}s Created`).incrementCount(),s.get(`${e}s Active`).incrementCount();i&&(i.statsBookkeepingCalls=(i.statsBookkeepingCalls||0)+1,i.statsBookkeepingTimeMs=(i.statsBookkeepingTimeMs||0)+(Yt()-r)),zT(this._device,e)}getStatsName(){return WT(this)}}});var N,yo=A(()=>{Ce();N=class t extends ${static INDEX=16;static VERTEX=32;static UNIFORM=64;static STORAGE=128;static INDIRECT=256;static QUERY_RESOLVE=512;static MAP_READ=1;static MAP_WRITE=2;static COPY_SRC=4;static COPY_DST=8;get[Symbol.toStringTag](){return"Buffer"}usage;indexType;updateTimestamp;constructor(e,i){let r={...i};(i.usage||0)&t.INDEX&&!i.indexType&&(i.data instanceof Uint32Array?r.indexType="uint32":i.data instanceof Uint16Array?r.indexType="uint16":i.data instanceof Uint8Array&&(r.indexType="uint8")),delete r.data,super(e,r,t.defaultProps),this.usage=r.usage||0,this.indexType=r.indexType,this.updateTimestamp=e.incrementTimestamp()}clone(e){return this.device.createBuffer({...this.props,...e})}static DEBUG_DATA_MAX_LENGTH=32;debugData=new ArrayBuffer(0);_setDebugData(e,i,r){let n=null,o;ArrayBuffer.isView(e)?(n=e,o=e.buffer):o=e;let s=Math.min(e?e.byteLength:r,t.DEBUG_DATA_MAX_LENGTH);if(o===null)this.debugData=new ArrayBuffer(s);else{let a=Math.min(n?.byteOffset||0,o.byteLength),l=Math.max(0,o.byteLength-a),c=Math.min(s,l);this.debugData=new Uint8Array(o,a,c).slice().buffer}}static defaultProps={...$.defaultProps,usage:0,byteLength:0,byteOffset:0,data:null,indexType:"uint16",onMapped:void 0}}});var Dl,je,Il,So=A(()=>{Dl=class{getDataTypeInfo(e){let[i,r,n]=Il[e],o=e.includes("norm"),s=!o&&!e.startsWith("float"),a=e.startsWith("s");return{signedType:i,primitiveType:r,byteLength:n,normalized:o,integer:s,signed:a}}getNormalizedDataType(e){let i=e;switch(i){case"uint8":return"unorm8";case"sint8":return"snorm8";case"uint16":return"unorm16";case"sint16":return"snorm16";default:return i}}alignTo(e,i){switch(i){case 1:return e;case 2:return e+e%2;default:return e+(4-e%4)%4}}getDataType(e){let i=ArrayBuffer.isView(e)?e.constructor:e;if(i===Uint8ClampedArray)return"uint8";let r=Object.values(Il).find(n=>i===n[4]);if(!r)throw new Error(i.name);return r[0]}getTypedArrayConstructor(e){let[,,,,i]=Il[e];return i}},je=new Dl,Il={uint8:["uint8","u32",1,!1,Uint8Array],sint8:["sint8","i32",1,!1,Int8Array],unorm8:["uint8","f32",1,!0,Uint8Array],snorm8:["sint8","f32",1,!0,Int8Array],uint16:["uint16","u32",2,!1,Uint16Array],sint16:["sint16","i32",2,!1,Int16Array],unorm16:["uint16","u32",2,!0,Uint16Array],snorm16:["sint16","i32",2,!0,Int16Array],float16:["float16","f16",2,!1,Uint16Array],float32:["float32","f32",4,!1,Float32Array],uint32:["uint32","u32",4,!1,Uint32Array],sint32:["sint32","i32",4,!1,Int32Array]}});var Fl,Ut,vo=A(()=>{So();Fl=class{getVertexFormatInfo(e){let i;e.endsWith("-webgl")&&(e.replace("-webgl",""),i=!0);let[r,n]=e.split("x"),o=r,s=n?parseInt(n):1,a=je.getDataTypeInfo(o),l={type:o,components:s,byteLength:a.byteLength*s,integer:a.integer,signed:a.signed,normalized:a.normalized};return i&&(l.webglOnly=!0),l}makeVertexFormat(e,i,r){let n=r?je.getNormalizedDataType(e):e;switch(n){case"unorm8":return i===1?"unorm8":i===3?"unorm8x3-webgl":`${n}x${i}`;case"snorm8":return i===1?"snorm8":i===3?"snorm8x3-webgl":`${n}x${i}`;case"uint8":case"sint8":if(i===1||i===3)throw new Error(`size: ${i}`);return`${n}x${i}`;case"uint16":return i===1?"uint16":i===3?"uint16x3-webgl":`${n}x${i}`;case"sint16":return i===1?"sint16":i===3?"sint16x3-webgl":`${n}x${i}`;case"unorm16":return i===1?"unorm16":i===3?"unorm16x3-webgl":`${n}x${i}`;case"snorm16":return i===1?"snorm16":i===3?"snorm16x3-webgl":`${n}x${i}`;case"float16":if(i===1||i===3)throw new Error(`size: ${i}`);return`${n}x${i}`;default:return i===1?n:`${n}x${i}`}}getVertexFormatFromAttribute(e,i,r){if(!i||i>4)throw new Error(`size ${i}`);let n=i,o=je.getDataType(e);return this.makeVertexFormat(o,n,r)}getCompatibleVertexFormat(e){let i;switch(e.primitiveType){case"f32":i="float32";break;case"i32":i="sint32";break;case"u32":i="uint32";break;case"f16":return e.components<=2?"float16x2":"float16x4"}return e.components===1?i:`${i}x${e.components}`}},Ut=new Fl});function Ll(t){let e=dp[t];if(!e)throw new Error(`Unsupported texture format ${t}`);return e}function up(){return dp}var Re,se,bt,HT,bo,Ml,_o,Nl,$T,Bl,jt,Ol,Ul,To,cp,XT,GT,dp,zl=A(()=>{Re="texture-compression-bc",se="texture-compression-astc",bt="texture-compression-etc2",HT="texture-compression-etc1-webgl",bo="texture-compression-pvrtc-webgl",Ml="texture-compression-atc-webgl",_o="float32-renderable-webgl",Nl="float16-renderable-webgl",$T="rgb9e5ufloat-renderable-webgl",Bl="snorm8-renderable-webgl",jt="norm16-webgl",Ol="norm16-renderable-webgl",Ul="snorm16-renderable-webgl",To="float32-filterable",cp="float16-filterable-webgl";XT={r8unorm:{},rg8unorm:{},"rgb8unorm-webgl":{},rgba8unorm:{},"rgba8unorm-srgb":{},r8snorm:{render:Bl},rg8snorm:{render:Bl},"rgb8snorm-webgl":{},rgba8snorm:{render:Bl},r8uint:{},rg8uint:{},rgba8uint:{},r8sint:{},rg8sint:{},rgba8sint:{},bgra8unorm:{},"bgra8unorm-srgb":{},r16unorm:{f:jt,render:Ol},rg16unorm:{f:jt,render:Ol},"rgb16unorm-webgl":{f:jt,render:!1},rgba16unorm:{f:jt,render:Ol},r16snorm:{f:jt,render:Ul},rg16snorm:{f:jt,render:Ul},"rgb16snorm-webgl":{f:jt,render:!1},rgba16snorm:{f:jt,render:Ul},r16uint:{},rg16uint:{},rgba16uint:{},r16sint:{},rg16sint:{},rgba16sint:{},r16float:{render:Nl,filter:"float16-filterable-webgl"},rg16float:{render:Nl,filter:cp},rgba16float:{render:Nl,filter:cp},r32uint:{},rg32uint:{},rgba32uint:{},r32sint:{},rg32sint:{},rgba32sint:{},r32float:{render:_o,filter:To},rg32float:{render:!1,filter:To},"rgb32float-webgl":{render:_o,filter:To},rgba32float:{render:_o,filter:To},"rgba4unorm-webgl":{channels:"rgba",bitsPerChannel:[4,4,4,4],packed:!0},"rgb565unorm-webgl":{channels:"rgb",bitsPerChannel:[5,6,5,0],packed:!0},"rgb5a1unorm-webgl":{channels:"rgba",bitsPerChannel:[5,5,5,1],packed:!0},rgb9e5ufloat:{channels:"rgb",packed:!0,render:$T},rg11b10ufloat:{channels:"rgb",bitsPerChannel:[11,11,10,0],packed:!0,p:1,render:_o},rgb10a2unorm:{channels:"rgba",bitsPerChannel:[10,10,10,2],packed:!0,p:1},rgb10a2uint:{channels:"rgba",bitsPerChannel:[10,10,10,2],packed:!0,p:1},stencil8:{attachment:"stencil",bitsPerChannel:[8,0,0,0],dataType:"uint8"},depth16unorm:{attachment:"depth",bitsPerChannel:[16,0,0,0],dataType:"uint16"},depth24plus:{attachment:"depth",bitsPerChannel:[24,0,0,0],dataType:"uint32"},depth32float:{attachment:"depth",bitsPerChannel:[32,0,0,0],dataType:"float32"},"depth24plus-stencil8":{attachment:"depth-stencil",bitsPerChannel:[24,8,0,0],packed:!0},"depth32float-stencil8":{attachment:"depth-stencil",bitsPerChannel:[32,8,0,0],packed:!0}},GT={"bc1-rgb-unorm-webgl":{f:Re},"bc1-rgb-unorm-srgb-webgl":{f:Re},"bc1-rgba-unorm":{f:Re},"bc1-rgba-unorm-srgb":{f:Re},"bc2-rgba-unorm":{f:Re},"bc2-rgba-unorm-srgb":{f:Re},"bc3-rgba-unorm":{f:Re},"bc3-rgba-unorm-srgb":{f:Re},"bc4-r-unorm":{f:Re},"bc4-r-snorm":{f:Re},"bc5-rg-unorm":{f:Re},"bc5-rg-snorm":{f:Re},"bc6h-rgb-ufloat":{f:Re},"bc6h-rgb-float":{f:Re},"bc7-rgba-unorm":{f:Re},"bc7-rgba-unorm-srgb":{f:Re},"etc2-rgb8unorm":{f:bt},"etc2-rgb8unorm-srgb":{f:bt},"etc2-rgb8a1unorm":{f:bt},"etc2-rgb8a1unorm-srgb":{f:bt},"etc2-rgba8unorm":{f:bt},"etc2-rgba8unorm-srgb":{f:bt},"eac-r11unorm":{f:bt},"eac-r11snorm":{f:bt},"eac-rg11unorm":{f:bt},"eac-rg11snorm":{f:bt},"astc-4x4-unorm":{f:se},"astc-4x4-unorm-srgb":{f:se},"astc-5x4-unorm":{f:se},"astc-5x4-unorm-srgb":{f:se},"astc-5x5-unorm":{f:se},"astc-5x5-unorm-srgb":{f:se},"astc-6x5-unorm":{f:se},"astc-6x5-unorm-srgb":{f:se},"astc-6x6-unorm":{f:se},"astc-6x6-unorm-srgb":{f:se},"astc-8x5-unorm":{f:se},"astc-8x5-unorm-srgb":{f:se},"astc-8x6-unorm":{f:se},"astc-8x6-unorm-srgb":{f:se},"astc-8x8-unorm":{f:se},"astc-8x8-unorm-srgb":{f:se},"astc-10x5-unorm":{f:se},"astc-10x5-unorm-srgb":{f:se},"astc-10x6-unorm":{f:se},"astc-10x6-unorm-srgb":{f:se},"astc-10x8-unorm":{f:se},"astc-10x8-unorm-srgb":{f:se},"astc-10x10-unorm":{f:se},"astc-10x10-unorm-srgb":{f:se},"astc-12x10-unorm":{f:se},"astc-12x10-unorm-srgb":{f:se},"astc-12x12-unorm":{f:se},"astc-12x12-unorm-srgb":{f:se},"pvrtc-rgb4unorm-webgl":{f:bo},"pvrtc-rgba4unorm-webgl":{f:bo},"pvrtc-rgb2unorm-webgl":{f:bo},"pvrtc-rgba2unorm-webgl":{f:bo},"etc1-rbg-unorm-webgl":{f:HT},"atc-rgb-unorm-webgl":{f:Ml},"atc-rgba-unorm-webgl":{f:Ml},"atc-rgbai-unorm-webgl":{f:Ml}},dp={...XT,...GT}});function ZT({format:t,width:e,height:i,depth:r,byteAlignment:n}){let o=Ae.getInfo(t),{bytesPerPixel:s,bytesPerBlock:a=s,blockWidth:l=1,blockHeight:c=1,compressed:u=!1}=o,d=u?Math.ceil(e/l):e,h=u?Math.ceil(i/c):i,f=d*a,g=Math.ceil(f/n)*n,x=h,b=g*x*r;return{bytesPerPixel:s,bytesPerRow:g,rowsPerImage:x,depthOrArrayLayers:r,bytesPerImage:g*x,byteLength:b}}function QT(t){let e=Ll(t),i={format:t,create:e.f??!0,render:e.render??!0,filter:e.filter??!0,blend:e.blend??!0,store:e.store??!0},r=hp(t),n=t.startsWith("depth")||t.startsWith("stencil"),o=r?.signed,s=r?.integer,a=r?.webgl,l=!!r?.compressed;return i.render&&=!n&&!l,i.filter&&=!n&&!o&&!s&&!a,i}function hp(t){let e=JT(t);if(Ae.isCompressed(t)){e.channels="rgb",e.components=3,e.bytesPerPixel=1,e.srgb=!1,e.compressed=!0,e.bytesPerBlock=tP(t);let r=eP(t);r&&(e.blockWidth=r.blockWidth,e.blockHeight=r.blockHeight)}let i=e.packed?null:YT.exec(t);if(i){let[,r,n,o,s,a]=i,l=`${o}${n}`,c=je.getDataTypeInfo(l),u=c.byteLength*8,d=r?.length??1,h=[u,d>=2?u:0,d>=3?u:0,d>=4?u:0];e={format:t,attachment:e.attachment,dataType:c.signedType,components:d,channels:r,integer:c.integer,signed:c.signed,normalized:c.normalized,bitsPerChannel:h,bytesPerPixel:c.byteLength*d,packed:e.packed,srgb:e.srgb},a==="-webgl"&&(e.webgl=!0),s==="-srgb"&&(e.srgb=!0)}return t.endsWith("-webgl")&&(e.webgl=!0),t.endsWith("-srgb")&&(e.srgb=!0),e}function JT(t){let e=Ll(t),i=e.bytesPerPixel||1,r=e.bitsPerChannel||[8,8,8,8];return delete e.bitsPerChannel,delete e.bytesPerPixel,delete e.f,delete e.render,delete e.filter,delete e.blend,delete e.store,{...e,format:t,attachment:e.attachment||"color",channels:e.channels||"r",components:e.components||e.channels?.length||1,bytesPerPixel:i,bitsPerChannel:r,dataType:e.dataType||"uint8",srgb:e.srgb??!1,packed:e.packed??!1,webgl:e.webgl??!1,integer:e.integer??!1,signed:e.signed??!1,normalized:e.normalized??!1,compressed:e.compressed??!1}}function eP(t){let i=/.*-(\d+)x(\d+)-.*/.exec(t);if(i){let[,r,n]=i;return{blockWidth:Number(r),blockHeight:Number(n)}}return t.startsWith("bc")||t.startsWith("etc1")||t.startsWith("etc2")||t.startsWith("eac")||t.startsWith("atc")?{blockWidth:4,blockHeight:4}:t.startsWith("pvrtc-rgb4")||t.startsWith("pvrtc-rgba4")?{blockWidth:4,blockHeight:4}:t.startsWith("pvrtc-rgb2")||t.startsWith("pvrtc-rgba2")?{blockWidth:8,blockHeight:4}:null}function tP(t){return t.startsWith("bc1")||t.startsWith("bc4")||t.startsWith("etc1")||t.startsWith("etc2-rgb8")||t.startsWith("etc2-rgb8a1")||t.startsWith("eac-r11")||t==="atc-rgb-unorm-webgl"?8:t.startsWith("bc2")||t.startsWith("bc3")||t.startsWith("bc5")||t.startsWith("bc6h")||t.startsWith("bc7")||t.startsWith("etc2-rgba8")||t.startsWith("eac-rg11")||t.startsWith("astc")||t==="atc-rgba-unorm-webgl"||t==="atc-rgbai-unorm-webgl"?16:t.startsWith("pvrtc")?8:16}var YT,jT,KT,qT,Wl,Ae,Po=A(()=>{So();zl();YT=/^(r|rg|rgb|rgba|bgra)([0-9]*)([a-z]*)(-srgb)?(-webgl)?$/,jT=["rgb","rgba","bgra"],KT=["depth","stencil"],qT=["bc1","bc2","bc3","bc4","bc5","bc6","bc7","etc1","etc2","eac","atc","astc","pvrtc"],Wl=class{isColor(e){return jT.some(i=>e.startsWith(i))}isDepthStencil(e){return KT.some(i=>e.startsWith(i))}isCompressed(e){return qT.some(i=>e.startsWith(i))}getInfo(e){return hp(e)}getCapabilities(e){return QT(e)}computeMemoryLayout(e){return ZT(e)}},Ae=new Wl});function Gi(t){return typeof ImageData<"u"&&t instanceof ImageData||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement||typeof VideoFrame<"u"&&t instanceof VideoFrame||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas}function Nr(t){if(typeof ImageData<"u"&&t instanceof ImageData||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)return{width:t.width,height:t.height};if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement)return{width:t.naturalWidth,height:t.naturalHeight};if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)return{width:t.videoWidth,height:t.videoHeight};if(typeof VideoFrame<"u"&&t instanceof VideoFrame)return{width:t.displayWidth,height:t.displayHeight};throw new Error("Unknown image type")}var Vl=A(()=>{});function iP(t,e){let i=Hl(t),r=e.map(Hl).filter(n=>n!==void 0);return[i,...r].filter(n=>n!==void 0)}function Hl(t){if(t!==void 0){if(t===null||typeof t=="string"||typeof t=="number"||typeof t=="boolean")return t;if(t instanceof Error)return t.message;if(Array.isArray(t))return t.map(Hl);if(typeof t=="object"){if(rP(t)){let e=String(t);if(e!=="[object Object]")return e}return nP(t)?oP(t):t.constructor?.name||"Object"}return String(t)}}function rP(t){return"toString"in t&&typeof t.toString=="function"&&t.toString!==Object.prototype.toString}function nP(t){return"message"in t&&"type"in t}function oP(t){let e=typeof t.type=="string"?t.type:"message",i=typeof t.message=="string"?t.message:"",r=typeof t.lineNum=="number"?t.lineNum:null,n=typeof t.linePos=="number"?t.linePos:null,o=r!==null&&n!==null?` @ ${r}:${n}`:r!==null?` @ ${r}`:"";return`${e}${o}: ${i}`.trim()}function sP(t,e){return t!=null?!!t:e!==void 0?e!=="production":!1}function aP(){return sP(_.get("debug"),lP())}function lP(){let t=globalThis.process;if(t?.env)return t.env.NODE_ENV}var Br,Or,ot,$l=A(()=>{Sl();Ye();Xi();yo();vo();Po();Vl();zl();Br=class{};Or=class{features;disabledFeatures;constructor(e=[],i){this.features=new Set(e),this.disabledFeatures=i||{}}*[Symbol.iterator](){yield*this.features}has(e){return!this.disabledFeatures?.[e]&&this.features.has(e)}},ot=class t{static defaultProps={id:null,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,createCanvasContext:void 0,webgl:{},onError:(e,i)=>{},onResize:(e,i)=>{let[r,n]=e.getDevicePixelSize();_.log(1,`${e} resized => ${r}x${n}px`)()},onPositionChange:(e,i)=>{let[r,n]=e.getPosition();_.log(1,`${e} repositioned => ${r},${n}`)()},onVisibilityChange:e=>_.log(1,`${e} Visibility changed ${e.isVisible}`)(),onDevicePixelRatioChange:(e,i)=>_.log(1,`${e} DPR changed ${i.oldRatio} => ${e.devicePixelRatio}`)(),debug:aP(),debugGPUTime:!1,debugShaders:_.get("debug-shaders")||void 0,debugFramebuffers:!!_.get("debug-framebuffers"),debugFactories:!!_.get("debug-factories"),debugWebGL:!!_.get("debug-webgl"),debugSpectorJS:void 0,debugSpectorJSUrl:void 0,_reuseDevices:!1,_requestMaxLimits:!0,_cacheShaders:!0,_destroyShaders:!1,_cachePipelines:!0,_sharePipelines:!0,_destroyPipelines:!1,_initializeFeatures:!0,_disabledFeatures:{"compilation-status-async-webgl":!0},_handle:void 0};get[Symbol.toStringTag](){return"Device"}toString(){return`Device(${this.id})`}id;props;userData={};statsManager=uo;_factories={};timestamp=0;_reused=!1;_moduleData={};_textureCaps={};_debugGPUTimeQuery=null;constructor(e){this.props={...t.defaultProps,...e},this.id=this.props.id||vt(this[Symbol.toStringTag].toLowerCase())}getVertexFormatInfo(e){return Ut.getVertexFormatInfo(e)}isVertexFormatSupported(e){return!0}getTextureFormatInfo(e){return Ae.getInfo(e)}getTextureFormatCapabilities(e){let i=this._textureCaps[e];if(!i){let r=this._getDeviceTextureFormatCapabilities(e);i=this._getDeviceSpecificTextureFormatCapabilities(r),this._textureCaps[e]=i}return i}getMipLevelCount(e,i,r=1){let n=Math.max(e,i,r);return 1+Math.floor(Math.log2(n))}isExternalImage(e){return Gi(e)}getExternalImageSize(e){return Nr(e)}isTextureFormatSupported(e){return this.getTextureFormatCapabilities(e).create}isTextureFormatFilterable(e){return this.getTextureFormatCapabilities(e).filter}isTextureFormatRenderable(e){return this.getTextureFormatCapabilities(e).render}isTextureFormatCompressed(e){return Ae.isCompressed(e)}getSupportedCompressedTextureFormats(){let e=[];for(let i of Object.keys(up()))this.isTextureFormatCompressed(i)&&this.isTextureFormatSupported(i)&&e.push(i);return e}pushDebugGroup(e){this.commandEncoder.pushDebugGroup(e)}popDebugGroup(){this.commandEncoder?.popDebugGroup()}insertDebugMarker(e){this.commandEncoder?.insertDebugMarker(e)}loseDevice(){return!1}incrementTimestamp(){return this.timestamp++}reportError(e,i,...r){if(!this.props.onError(e,i)){let o=iP(i,r);return _.error(this.type==="webgl"?"%cWebGL":"%cWebGPU","color: white; background: red; padding: 2px 6px; border-radius: 3px;",e.message,...o)}return()=>{}}debug(){if(this.props.debug)debugger;else _.once(0,`'Type luma.log.set({debug: true}) in console to enable debug breakpoints',
or create a device with the 'debug: true' prop.`)()}getDefaultCanvasContext(){if(!this.canvasContext)throw new Error("Device has no default CanvasContext. See props.createCanvasContext");return this.canvasContext}createFence(){throw new Error("createFence() not implemented")}beginRenderPass(e){return this.commandEncoder.beginRenderPass(e)}beginComputePass(e){return this.commandEncoder.beginComputePass(e)}generateMipmapsWebGPU(e){throw new Error("not implemented")}_createSharedRenderPipelineWebGL(e){throw new Error("_createSharedRenderPipelineWebGL() not implemented")}_createBindGroupLayoutWebGPU(e,i){throw new Error("_createBindGroupLayoutWebGPU() not implemented")}_createBindGroupWebGPU(e,i,r,n,o){throw new Error("_createBindGroupWebGPU() not implemented")}_supportsDebugGPUTime(){return this.features.has("timestamp-query")&&!!(this.props.debug||this.props.debugGPUTime)}_enableDebugGPUTime(e=256){if(!this._supportsDebugGPUTime())return null;if(this._debugGPUTimeQuery)return this._debugGPUTimeQuery;try{this._debugGPUTimeQuery=this.createQuerySet({type:"timestamp",count:e}),this.commandEncoder=this.createCommandEncoder({id:this.commandEncoder.props.id,timeProfilingQuerySet:this._debugGPUTimeQuery})}catch{this._debugGPUTimeQuery=null}return this._debugGPUTimeQuery}_disableDebugGPUTime(){this._debugGPUTimeQuery&&(this.commandEncoder.getTimeProfilingQuerySet()===this._debugGPUTimeQuery&&(this.commandEncoder=this.createCommandEncoder({id:this.commandEncoder.props.id})),this._debugGPUTimeQuery.destroy(),this._debugGPUTimeQuery=null)}_isDebugGPUTimeEnabled(){return this._debugGPUTimeQuery!==null}getCanvasContext(){return this.getDefaultCanvasContext()}readPixelsToArrayWebGL(e,i){throw new Error("not implemented")}readPixelsToBufferWebGL(e,i){throw new Error("not implemented")}setParametersWebGL(e){throw new Error("not implemented")}getParametersWebGL(e){throw new Error("not implemented")}withParametersWebGL(e,i){throw new Error("not implemented")}clearWebGL(e){throw new Error("not implemented")}resetWebGL(){throw new Error("not implemented")}getModuleData(e){return this._moduleData[e]||={},this._moduleData[e]}static _getCanvasContextProps(e){return e.createCanvasContext===!0?{}:e.createCanvasContext}_getDeviceTextureFormatCapabilities(e){let i=Ae.getCapabilities(e),r=o=>(typeof o=="string"?this.features.has(o):o)??!0,n=r(i.create);return{format:e,create:n,render:n&&r(i.render),filter:n&&r(i.filter),blend:n&&r(i.blend),store:n&&r(i.store)}}_normalizeBufferProps(e){(e instanceof ArrayBuffer||ArrayBuffer.isView(e))&&(e={data:e});let i={...e};if((e.usage||0)&N.INDEX&&(e.indexType||(e.data instanceof Uint32Array?i.indexType="uint32":e.data instanceof Uint16Array?i.indexType="uint16":e.data instanceof Uint8Array&&(i.data=new Uint16Array(e.data),i.indexType="uint16")),!i.indexType))throw new Error("indices buffer content must be of type uint16 or uint32");return i}}});var cP,fp,Xl,Gl,pp=A(()=>{$l();Sl();Ye();cP="set luma.log.level=1 (or higher) to trace rendering",fp="No matching device found. Ensure `@luma.gl/webgl` and/or `@luma.gl/webgpu` modules are imported.",Xl=class t{static defaultProps={...ot.defaultProps,type:"best-available",adapters:void 0,waitForPageLoad:!0};stats=uo;log=_;VERSION="9.3.6";spector;preregisteredAdapters=new Map;constructor(){if(globalThis.luma){if(globalThis.luma.VERSION!==this.VERSION)throw _.error(`Found luma.gl ${globalThis.luma.VERSION} while initialzing ${this.VERSION}`)(),_.error("'yarn why @luma.gl/core' can help identify the source of the conflict")(),new Error("luma.gl - multiple versions detected: see console log");_.error("This version of luma.gl has already been initialized")()}_.log(1,`${this.VERSION} - ${cP}`)(),globalThis.luma=this}async createDevice(e={}){let i={...t.defaultProps,...e},r=this.selectAdapter(i.type,i.adapters);if(!r)throw new Error(fp);return i.waitForPageLoad&&await r.pageLoaded,await r.create(i)}async attachDevice(e,i){let r=this._getTypeFromHandle(e,i.adapters),n=r&&this.selectAdapter(r,i.adapters);if(!n)throw new Error(fp);return await n?.attach?.(e,i)}registerAdapters(e){for(let i of e)this.preregisteredAdapters.set(i.type,i)}getSupportedAdapters(e=[]){let i=this._getAdapterMap(e);return Array.from(i).map(([,r])=>r).filter(r=>r.isSupported?.()).map(r=>r.type)}getBestAvailableAdapterType(e=[]){let i=["webgpu","webgl","null"],r=this._getAdapterMap(e);for(let n of i)if(r.get(n)?.isSupported?.())return n;return null}selectAdapter(e,i=[]){let r=e;e==="best-available"&&(r=this.getBestAvailableAdapterType(i));let n=this._getAdapterMap(i);return r&&n.get(r)||null}enforceWebGL2(e=!0,i=[]){let n=this._getAdapterMap(i).get("webgl");n||_.warn("enforceWebGL2: webgl adapter not found")(),n?.enforceWebGL2?.(e)}setDefaultDeviceProps(e){Object.assign(t.defaultProps,e)}_getAdapterMap(e=[]){let i=new Map(this.preregisteredAdapters);for(let r of e)i.set(r.type,r);return i}_getTypeFromHandle(e,i=[]){return e instanceof WebGL2RenderingContext?"webgl":typeof GPUDevice<"u"&&e instanceof GPUDevice||e?.queue?"webgpu":e===null?"null":(e instanceof WebGLRenderingContext?_.warn("WebGL1 is not supported",e)():_.warn("Unknown handle type",e)(),null)}},Gl=new Xl});function hP(){return Co||(dP()||typeof window>"u"?Co=Promise.resolve():Co=new Promise(t=>window.addEventListener("load",()=>t()))),Co}var Ur,uP,dP,Co,gp=A(()=>{Gt();Ur=class{get pageLoaded(){return hP()}},uP=Ee()&&typeof document<"u",dP=()=>uP&&document.readyState==="complete",Co=null});var Ao,mp=A(()=>{Ao=class{props;_resizeObserver;_intersectionObserver;_observeDevicePixelRatioTimeout=null;_observeDevicePixelRatioMediaQuery=null;_handleDevicePixelRatioChange=()=>this._refreshDevicePixelRatio();_trackPositionInterval=null;_started=!1;get started(){return this._started}constructor(e){this.props=e}start(){if(this._started||!this.props.canvas)return;this._started=!0,this._intersectionObserver||=new IntersectionObserver(i=>this.props.onIntersection(i)),this._resizeObserver||=new ResizeObserver(i=>this.props.onResize(i)),this._intersectionObserver.observe(this.props.canvas);let e=this.props.resizeObserverBox;try{this._resizeObserver.observe(this.props.canvas,{box:e})}catch{this._resizeObserver.observe(this.props.canvas,{box:"content-box"})}this._observeDevicePixelRatioTimeout=setTimeout(()=>this._refreshDevicePixelRatio(),0),this.props.trackPosition&&this._trackPosition()}stop(){this._started&&(this._started=!1,this._observeDevicePixelRatioTimeout&&(clearTimeout(this._observeDevicePixelRatioTimeout),this._observeDevicePixelRatioTimeout=null),this._observeDevicePixelRatioMediaQuery&&(this._observeDevicePixelRatioMediaQuery.removeEventListener("change",this._handleDevicePixelRatioChange),this._observeDevicePixelRatioMediaQuery=null),this._trackPositionInterval&&(clearInterval(this._trackPositionInterval),this._trackPositionInterval=null),this._resizeObserver?.disconnect(),this._intersectionObserver?.disconnect())}_refreshDevicePixelRatio(){this._started&&(this.props.onDevicePixelRatioChange(),this._observeDevicePixelRatioMediaQuery?.removeEventListener("change",this._handleDevicePixelRatioChange),this._observeDevicePixelRatioMediaQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this._observeDevicePixelRatioMediaQuery.addEventListener("change",this._handleDevicePixelRatioChange,{once:!0}))}_trackPosition(e=100){this._trackPositionInterval||(this._trackPositionInterval=setInterval(()=>{this._started?this.props.onPositionChange():this._trackPositionInterval&&(clearInterval(this._trackPositionInterval),this._trackPositionInterval=null)},e))}}});function xp(){let t,e;return{promise:new Promise((r,n)=>{t=r,e=n}),resolve:t,reject:e}}var yp=A(()=>{});function Yl(t,e){if(!t){let i=new Error(e??"luma.gl assertion failed.");throw Error.captureStackTrace?.(i,Yl),i}}function Kt(t,e){return Yl(t,e),t}var jl=A(()=>{});function fP(t){if(typeof t=="string"){let e=document.getElementById(t);if(!e)throw new Error(`${t} is not an HTML element`);return e}return t||document.body}function pP(t){let e=document.getElementById(t);if(!qt.isHTMLCanvas(e))throw new Error("Object is not a canvas element");return e}function gP(t){let{width:e,height:i}=t,r=document.createElement("canvas");r.id=vt("lumagl-auto-created-canvas"),r.width=e||1,r.height=i||1,r.style.width=Number.isFinite(e)?`${e}px`:"100%",r.style.height=Number.isFinite(i)?`${i}px`:"100%",t?.visible||(r.style.visibility="hidden");let n=fP(t?.container||null);return n.insertBefore(r,n.firstChild),r}function mP(t,e,i,r,n){let o=t,s=Sp(o[0],e,i),a=vp(o[1],e,r,n),l=Sp(o[0]+1,e,i),c=l===i-1?l:l-1;l=vp(o[1]+1,e,r,n);let u;return n?(l=l===0?l:l+1,u=a,a=l):u=l===r-1?l:l-1,{x:s,y:a,width:Math.max(c-s+1,1),height:Math.max(u-a+1,1)}}function Sp(t,e,i){return Math.min(Math.round(t*e),i-1)}function vp(t,e,i,r){return r?Math.max(0,i-1-Math.round(t*e)):Math.min(Math.round(t*e),i-1)}var qt,Kl=A(()=>{Gt();mp();Xi();yp();jl();qt=class t{static isHTMLCanvas(e){return typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement}static isOffscreenCanvas(e){return typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas}static defaultProps={id:void 0,canvas:null,width:800,height:600,useDevicePixels:!0,pixelSizeSource:"exact",autoResize:!0,container:null,visible:!0,alphaMode:"opaque",colorSpace:"srgb",trackPosition:!1};id;props;canvas;htmlCanvas;offscreenCanvas;type;initialized;isInitialized=!1;isVisible=!0;cssWidth;cssHeight;devicePixelRatio;devicePixelWidth;devicePixelHeight;drawingBufferWidth;drawingBufferHeight;_initializedResolvers=xp();_canvasObserver;_position=[0,0];destroyed=!1;_needsDrawingBufferResize=!0;toString(){return`${this[Symbol.toStringTag]}(${this.id})`}constructor(e){this.props={...t.defaultProps,...e},e=this.props,this.initialized=this._initializedResolvers.promise,Ee()?e.canvas?typeof e.canvas=="string"?this.canvas=pP(e.canvas):this.canvas=e.canvas:this.canvas=gP(e):this.canvas={width:e.width||1,height:e.height||1},t.isHTMLCanvas(this.canvas)?(this.id=e.id||this.canvas.id,this.type="html-canvas",this.htmlCanvas=this.canvas):t.isOffscreenCanvas(this.canvas)?(this.id=e.id||"offscreen-canvas",this.type="offscreen-canvas",this.offscreenCanvas=this.canvas):(this.id=e.id||"node-canvas-context",this.type="node"),this.cssWidth=this.htmlCanvas?.clientWidth||this.canvas.width,this.cssHeight=this.htmlCanvas?.clientHeight||this.canvas.height,this.devicePixelWidth=this.canvas.width,this.devicePixelHeight=this.canvas.height,this.drawingBufferWidth=this.canvas.width,this.drawingBufferHeight=this.canvas.height,this.devicePixelRatio=globalThis.devicePixelRatio||1,this._position=[0,0],this._canvasObserver=new Ao({canvas:this.htmlCanvas,trackPosition:this.props.trackPosition,resizeObserverBox:this.props.pixelSizeSource==="css-dpr"?"content-box":"device-pixel-content-box",onResize:i=>this._handleResize(i),onIntersection:i=>this._handleIntersection(i),onDevicePixelRatioChange:()=>this._observeDevicePixelRatio(),onPositionChange:()=>this.updatePosition()})}destroy(){this.destroyed||(this.destroyed=!0,this._stopObservers(),this.device=null)}setProps(e){return"useDevicePixels"in e&&(this.props.useDevicePixels=e.useDevicePixels||!1,this._updateDrawingBufferSize()),this}getCurrentFramebuffer(e){return this._resizeDrawingBufferIfNeeded(),this._getCurrentFramebuffer(e)}getCSSSize(){return[this.cssWidth,this.cssHeight]}getPosition(){return this._position}getDevicePixelSize(){return[this.devicePixelWidth,this.devicePixelHeight]}getDrawingBufferSize(){return[this.drawingBufferWidth,this.drawingBufferHeight]}getMaxDrawingBufferSize(){let e=this.device.limits.maxTextureDimension2D;return[e,e]}setDrawingBufferSize(e,i){e=Math.floor(e),i=Math.floor(i),!(this.drawingBufferWidth===e&&this.drawingBufferHeight===i)&&(this.drawingBufferWidth=e,this.drawingBufferHeight=i,this._needsDrawingBufferResize=!0)}getDevicePixelRatio(){return typeof window<"u"&&window.devicePixelRatio||1}cssToDevicePixels(e,i=!0){let r=this.cssToDeviceRatio(),[n,o]=this.getDrawingBufferSize();return mP(e,r,n,o,i)}getPixelSize(){return this.getDevicePixelSize()}getAspect(){let[e,i]=this.getDrawingBufferSize();return e>0&&i>0?e/i:1}cssToDeviceRatio(){try{let[e]=this.getDrawingBufferSize(),[i]=this.getCSSSize();return i?e/i:1}catch{return 1}}resize(e){this.setDrawingBufferSize(e.width,e.height)}_setAutoCreatedCanvasId(e){this.htmlCanvas?.id==="lumagl-auto-created-canvas"&&(this.htmlCanvas.id=e)}_startObservers(){this.destroyed||this._canvasObserver.start()}_stopObservers(){this._canvasObserver.stop()}_handleIntersection(e){if(this.destroyed)return;let i=e.find(n=>n.target===this.canvas);if(!i)return;let r=i.isIntersecting;this.isVisible!==r&&(this.isVisible=r,this.device.props.onVisibilityChange(this))}_handleResize(e){if(this.destroyed)return;let i=e.find(o=>o.target===this.canvas);if(!i)return;let r=Kt(i.contentBoxSize?.[0]);this.cssWidth=r.inlineSize,this.cssHeight=r.blockSize;let n=this.getDevicePixelSize();this._setDevicePixelSize(this._getDevicePixelSizeFromResizeEntry(i)),this._updateDrawingBufferSize(),this.device.props.onResize(this,{oldPixelSize:n})}_updateDrawingBufferSize(){if(this.props.autoResize)if(typeof this.props.useDevicePixels=="number"){let e=this.props.useDevicePixels;this.setDrawingBufferSize(this.cssWidth*e,this.cssHeight*e)}else this.props.useDevicePixels?this.setDrawingBufferSize(this.devicePixelWidth,this.devicePixelHeight):this.setDrawingBufferSize(this.cssWidth,this.cssHeight);this._initializedResolvers.resolve(),this.isInitialized=!0,this.updatePosition()}_getDevicePixelSizeFromResizeEntry(e){let i=Kt(e.contentBoxSize?.[0]);return this.props.pixelSizeSource==="css-dpr"?this._getDevicePixelSizeFromCSSSize(i.inlineSize,i.blockSize):{devicePixelWidth:e.devicePixelContentBoxSize?.[0]?.inlineSize||i.inlineSize*devicePixelRatio,devicePixelHeight:e.devicePixelContentBoxSize?.[0]?.blockSize||i.blockSize*devicePixelRatio}}_getDevicePixelSizeFromCSSSize(e,i){let r=this.getDevicePixelRatio();return{devicePixelWidth:Math.floor(e*r),devicePixelHeight:Math.floor(i*r)}}_setDevicePixelSize({devicePixelWidth:e,devicePixelHeight:i}){let[r,n]=this.getMaxDrawingBufferSize();this.devicePixelWidth=Math.max(1,Math.min(e,r)),this.devicePixelHeight=Math.max(1,Math.min(i,n))}_resizeDrawingBufferIfNeeded(){this._needsDrawingBufferResize&&(this._needsDrawingBufferResize=!1,(this.drawingBufferWidth!==this.canvas.width||this.drawingBufferHeight!==this.canvas.height)&&(this.canvas.width=this.drawingBufferWidth,this.canvas.height=this.drawingBufferHeight,this._configureDevice()))}_observeDevicePixelRatio(){if(this.destroyed||!this._canvasObserver.started)return;let e=this.devicePixelRatio;if(this.devicePixelRatio=window.devicePixelRatio,this.props.pixelSizeSource==="css-dpr"){let i=this.getDevicePixelSize();this._setDevicePixelSize(this._getDevicePixelSizeFromCSSSize(this.cssWidth,this.cssHeight)),this._updateDrawingBufferSize(),this.device.props.onResize(this,{oldPixelSize:i})}this.updatePosition(),this.device.props.onDevicePixelRatioChange?.(this,{oldRatio:e})}updatePosition(){if(this.destroyed)return;let e=this.htmlCanvas?.getBoundingClientRect();if(e){let i=[e.left,e.top];if(this._position??=i,i[0]!==this._position[0]||i[1]!==this._position[1]){let n=this._position;this._position=i,this.device.props.onPositionChange?.(this,{oldPosition:n})}}}}});var Lr,bp=A(()=>{Kl();Lr=class extends qt{static defaultProps=qt.defaultProps}});var zr,_p=A(()=>{Kl();zr=class extends qt{}});var st,ql=A(()=>{Ce();st=class t extends ${static defaultProps={...$.defaultProps,type:"color-sampler",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"nearest",minFilter:"nearest",mipmapFilter:"none",lodMinClamp:0,lodMaxClamp:32,compare:"less-equal",maxAnisotropy:1};get[Symbol.toStringTag](){return"Sampler"}constructor(e,i){i=t.normalizeProps(e,i),super(e,i,t.defaultProps)}static normalizeProps(e,i){return i}}});var xP,F,Zl=A(()=>{Ce();ql();Ye();Po();xP={"1d":"1d","2d":"2d","2d-array":"2d",cube:"2d","cube-array":"2d","3d":"3d"},F=class t extends ${static SAMPLE=4;static STORAGE=8;static RENDER=16;static COPY_SRC=1;static COPY_DST=2;static TEXTURE=4;static RENDER_ATTACHMENT=16;dimension;baseDimension;format;width;height;depth;mipLevels;samples;byteAlignment;ready=Promise.resolve(this);isReady=!0;updateTimestamp;get[Symbol.toStringTag](){return"Texture"}toString(){return`Texture(${this.id},${this.format},${this.width}x${this.height})`}constructor(e,i,r){if(i=t.normalizeProps(e,i),super(e,i,t.defaultProps),this.dimension=this.props.dimension,this.baseDimension=xP[this.dimension],this.format=this.props.format,this.width=this.props.width,this.height=this.props.height,this.depth=this.props.depth,this.mipLevels=this.props.mipLevels,this.samples=this.props.samples||1,this.dimension==="cube"&&(this.depth=6),this.props.width===void 0||this.props.height===void 0)if(e.isExternalImage(i.data)){let n=e.getExternalImageSize(i.data);this.width=n?.width||1,this.height=n?.height||1}else this.width=1,this.height=1,(this.props.width===void 0||this.props.height===void 0)&&_.warn(`${this} created with undefined width or height. This is deprecated. Use DynamicTexture instead.`)();this.byteAlignment=r?.byteAlignment||1,this.updateTimestamp=e.incrementTimestamp()}clone(e){return this.device.createTexture({...this.props,...e})}setSampler(e){this.sampler=e instanceof st?e:this.device.createSampler(e)}copyImageData(e){let{data:i,depth:r,...n}=e;this.writeData(i,{...n,depthOrArrayLayers:n.depthOrArrayLayers??r})}computeMemoryLayout(e={}){let i=this._normalizeTextureReadOptions(e),{width:r=this.width,height:n=this.height,depthOrArrayLayers:o=this.depth}=i,{format:s,byteAlignment:a}=this;return Ae.computeMemoryLayout({format:s,width:r,height:n,depth:o,byteAlignment:a})}readBuffer(e,i){throw new Error("readBuffer not implemented")}readDataAsync(e){throw new Error("readBuffer not implemented")}writeBuffer(e,i){throw new Error("readBuffer not implemented")}writeData(e,i){throw new Error("readBuffer not implemented")}readDataSyncWebGL(e){throw new Error("readDataSyncWebGL not available")}generateMipmapsWebGL(){throw new Error("generateMipmapsWebGL not available")}static normalizeProps(e,i){let r={...i},{width:n,height:o}=r;return typeof n=="number"&&(r.width=Math.max(1,Math.ceil(n))),typeof o=="number"&&(r.height=Math.max(1,Math.ceil(o))),r}_initializeData(e){this.device.isExternalImage(e)?this.copyExternalImage({image:e,width:this.width,height:this.height,depth:this.depth,mipLevel:0,x:0,y:0,z:0,aspect:"all",colorSpace:"srgb",premultipliedAlpha:!1,flipY:!1}):e&&this.copyImageData({data:e,mipLevel:0,x:0,y:0,z:0,aspect:"all"})}_normalizeCopyImageDataOptions(e){let{data:i,depth:r,...n}=e,o=this._normalizeTextureWriteOptions({...n,depthOrArrayLayers:n.depthOrArrayLayers??r});return{data:i,depth:o.depthOrArrayLayers,...o}}_normalizeCopyExternalImageOptions(e){let i=t._omitUndefined(e),r=i.mipLevel??0,n=this._getMipLevelSize(r),o=this.device.getExternalImageSize(e.image),s={...t.defaultCopyExternalImageOptions,...n,...o,...i};return s.width=Math.min(s.width,n.width-s.x),s.height=Math.min(s.height,n.height-s.y),s.depth=Math.min(s.depth,n.depthOrArrayLayers-s.z),s}_normalizeTextureReadOptions(e){let i=t._omitUndefined(e),r=i.mipLevel??0,n=this._getMipLevelSize(r),o={...t.defaultTextureReadOptions,...n,...i};return o.width=Math.min(o.width,n.width-o.x),o.height=Math.min(o.height,n.height-o.y),o.depthOrArrayLayers=Math.min(o.depthOrArrayLayers,n.depthOrArrayLayers-o.z),o}_getSupportedColorReadOptions(e){let i=this._normalizeTextureReadOptions(e),r=Ae.getInfo(this.format);switch(this._validateColorReadAspect(i),this._validateColorReadFormat(r),this.dimension){case"2d":case"cube":case"cube-array":case"2d-array":case"3d":return i;default:throw new Error(`${this} color readback does not support ${this.dimension} textures`)}}_validateColorReadAspect(e){if(e.aspect!=="all")throw new Error(`${this} color readback only supports aspect 'all'`)}_validateColorReadFormat(e){if(e.compressed)throw new Error(`${this} color readback does not support compressed formats (${this.format})`);switch(e.attachment){case"color":return;case"depth":throw new Error(`${this} color readback does not support depth formats (${this.format})`);case"stencil":throw new Error(`${this} color readback does not support stencil formats (${this.format})`);case"depth-stencil":throw new Error(`${this} color readback does not support depth-stencil formats (${this.format})`);default:throw new Error(`${this} color readback does not support format ${this.format}`)}}_normalizeTextureWriteOptions(e){let i=t._omitUndefined(e),r=i.mipLevel??0,n=this._getMipLevelSize(r),o={...t.defaultTextureWriteOptions,...n,...i};o.width=Math.min(o.width,n.width-o.x),o.height=Math.min(o.height,n.height-o.y),o.depthOrArrayLayers=Math.min(o.depthOrArrayLayers,n.depthOrArrayLayers-o.z);let s=Ae.computeMemoryLayout({format:this.format,width:o.width,height:o.height,depth:o.depthOrArrayLayers,byteAlignment:this.byteAlignment}),a=s.bytesPerPixel*o.width;if(o.bytesPerRow=i.bytesPerRow??s.bytesPerRow,o.rowsPerImage=i.rowsPerImage??o.height,o.bytesPerRow<a)throw new Error(`bytesPerRow (${o.bytesPerRow}) must be at least ${a} for ${this.format}`);if(o.rowsPerImage<o.height)throw new Error(`rowsPerImage (${o.rowsPerImage}) must be at least ${o.height} for ${this.format}`);let l=this.device.getTextureFormatInfo(this.format).bytesPerPixel;if(l&&o.bytesPerRow%l!==0)throw new Error(`bytesPerRow (${o.bytesPerRow}) must be a multiple of bytesPerPixel (${l}) for ${this.format}`);return o}_getMipLevelSize(e){let i=Math.max(1,this.width>>e),r=this.baseDimension==="1d"?1:Math.max(1,this.height>>e),n=this.dimension==="3d"?Math.max(1,this.depth>>e):this.depth;return{width:i,height:r,depthOrArrayLayers:n}}getAllocatedByteLength(){let e=0;for(let i=0;i<this.mipLevels;i++){let{width:r,height:n,depthOrArrayLayers:o}=this._getMipLevelSize(i);e+=Ae.computeMemoryLayout({format:this.format,width:r,height:n,depth:o,byteAlignment:1}).byteLength}return e*this.samples}static _omitUndefined(e){return Object.fromEntries(Object.entries(e).filter(([,i])=>i!==void 0))}static defaultProps={...$.defaultProps,data:null,dimension:"2d",format:"rgba8unorm",usage:t.SAMPLE|t.RENDER|t.COPY_DST,width:void 0,height:void 0,depth:1,mipLevels:1,samples:void 0,sampler:{},view:void 0};static defaultCopyDataOptions={data:void 0,byteOffset:0,bytesPerRow:void 0,rowsPerImage:void 0,width:void 0,height:void 0,depthOrArrayLayers:void 0,depth:1,mipLevel:0,x:0,y:0,z:0,aspect:"all"};static defaultCopyExternalImageOptions={image:void 0,sourceX:0,sourceY:0,width:void 0,height:void 0,depth:1,mipLevel:0,x:0,y:0,z:0,aspect:"all",colorSpace:"srgb",premultipliedAlpha:!1,flipY:!1};static defaultTextureReadOptions={x:0,y:0,z:0,width:void 0,height:void 0,depthOrArrayLayers:1,mipLevel:0,aspect:"all"};static defaultTextureWriteOptions={byteOffset:0,bytesPerRow:void 0,rowsPerImage:void 0,x:0,y:0,z:0,width:void 0,height:void 0,depthOrArrayLayers:1,mipLevel:0,aspect:"all"}}});var Si,Tp=A(()=>{Ce();Si=class t extends ${get[Symbol.toStringTag](){return"TextureView"}constructor(e,i){super(e,i,t.defaultProps)}static defaultProps={...$.defaultProps,format:void 0,dimension:void 0,aspect:"all",baseMipLevel:0,mipLevelCount:void 0,baseArrayLayer:0,arrayLayerCount:void 0}}});function Pp(t,e,i){let r="",n=e.split(/\r?\n/),o=t.slice().sort((s,a)=>s.lineNum-a.lineNum);switch(i?.showSourceCode||"no"){case"all":let s=0;for(let a=1;a<=n.length;a++){let l=n[a-1],c=o[s];for(l&&c&&(r+=Cp(l,a,i));o.length>s&&c.lineNum===a;){let u=o[s++];u&&(r+=Ql(u,n,u.lineNum,{...i,inlineSource:!1}))}}for(;o.length>s;){let a=o[s++];a&&(r+=Ql(a,[],0,{...i,inlineSource:!1}))}return r;case"issues":case"no":for(let a of t)r+=Ql(a,n,a.lineNum,{inlineSource:i?.showSourceCode!=="no"});return r}}function Ql(t,e,i,r){if(r?.inlineSource){let o=yP(e,i),s=t.linePos>0?`${" ".repeat(t.linePos+5)}^^^
`:"";return`
${o}${s}${t.type.toUpperCase()}: ${t.message}

`}let n=t.type==="error"?"red":"orange";return r?.html?`<div class='luma-compiler-log-${t.type}' style="color:${n};"><b> ${t.type.toUpperCase()}: ${t.message}</b></div>`:`${t.type.toUpperCase()}: ${t.message}`}function yP(t,e,i){let r="";for(let n=e-2;n<=e;n++){let o=t[n-1];o!==void 0&&(r+=Cp(o,e,i))}return r}function Cp(t,e,i){let r=i?.html?vP(t):t;return`${SP(String(e),4)}: ${r}${i?.html?"<br/>":`
`}`}function SP(t,e){let i="";for(let r=t.length;r<e;++r)i+=" ";return i+t}function vP(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}var Ap=A(()=>{});function bP(t){return _P(t.source)||t.id||vt(`unnamed ${t.stage}-shader`)}function _P(t,e="unnamed"){return/#define[\s*]SHADER_NAME[\s*]([A-Za-z0-9_-]+)[\s*]/.exec(t)?.[1]??e}var vi,Jl=A(()=>{Ce();Xi();Ap();vi=class t extends ${get[Symbol.toStringTag](){return"Shader"}stage;source;compilationStatus="pending";constructor(e,i){i={...i,debugShaders:i.debugShaders||e.props.debugShaders||"errors"},super(e,{id:bP(i),...i},t.defaultProps),this.stage=this.props.stage,this.source=this.props.source}getCompilationInfoSync(){return null}getTranslatedSource(){return null}async debugShader(){let e=this.props.debugShaders;switch(e){case"never":return;case"errors":if(this.compilationStatus==="success")return;break;case"warnings":case"always":break}let i=await this.getCompilationInfo();e==="warnings"&&i?.length===0||this._displayShaderLog(i,this.id)}_displayShaderLog(e,i){if(typeof document>"u"||!document?.createElement)return;let r=i,n=`${this.stage} shader "${r}"`,o=Pp(e,this.source,{showSourceCode:"all",html:!0}),s=this.getTranslatedSource(),a=document.createElement("div");a.innerHTML=`<h1>Compilation error in ${n}</h1>
<div style="display:flex;position:fixed;top:10px;right:20px;gap:2px;">
<button id="copy">Copy source</button><br/>
<button id="close">Close</button>
</div>
<code><pre>${o}</pre></code>`,s&&(a.innerHTML+=`<br /><h1>Translated Source</h1><br /><br /><code><pre>${s}</pre></code>`),a.style.top="0",a.style.left="0",a.style.background="white",a.style.position="fixed",a.style.zIndex="9999",a.style.maxWidth="100vw",a.style.maxHeight="100vh",a.style.overflowY="auto",document.body.appendChild(a),a.querySelector(".luma-compiler-log-error")?.scrollIntoView(),a.querySelector("button#close").onclick=()=>{a.remove()},a.querySelector("button#copy").onclick=()=>{navigator.clipboard.writeText(this.source)}}static defaultProps={...$.defaultProps,language:"auto",stage:void 0,source:"",sourceMap:null,entryPoint:"main",debugShaders:void 0}}});var bi,wp=A(()=>{Ce();Zl();Ye();bi=class t extends ${get[Symbol.toStringTag](){return"Framebuffer"}width;height;constructor(e,i={}){super(e,i,t.defaultProps),this.width=this.props.width,this.height=this.props.height}clone(e){let i=this.colorAttachments.map(n=>n.texture.clone(e)),r=this.depthStencilAttachment&&this.depthStencilAttachment.texture.clone(e);return this.device.createFramebuffer({...this.props,...e,colorAttachments:i,depthStencilAttachment:r})}resize(e){let i=!e;if(e){let[r,n]=Array.isArray(e)?e:[e.width,e.height];i=i||n!==this.height||r!==this.width,this.width=r,this.height=n}i&&(_.log(2,`Resizing framebuffer ${this.id} to ${this.width}x${this.height}`)(),this.resizeAttachments(this.width,this.height))}autoCreateAttachmentTextures(){if(this.props.colorAttachments.length===0&&!this.props.depthStencilAttachment)throw new Error("Framebuffer has noattachments");this.colorAttachments=this.props.colorAttachments.map((i,r)=>{if(typeof i=="string"){let n=this.createColorTexture(i,r);return this.attachResource(n),n.view}return i instanceof F?i.view:i});let e=this.props.depthStencilAttachment;if(e)if(typeof e=="string"){let i=this.createDepthStencilTexture(e);this.attachResource(i),this.depthStencilAttachment=i.view}else e instanceof F?this.depthStencilAttachment=e.view:this.depthStencilAttachment=e}createColorTexture(e,i){return this.device.createTexture({id:`${this.id}-color-attachment-${i}`,usage:F.RENDER_ATTACHMENT,format:e,width:this.width,height:this.height,sampler:{magFilter:"linear",minFilter:"linear"}})}createDepthStencilTexture(e){return this.device.createTexture({id:`${this.id}-depth-stencil-attachment`,usage:F.RENDER_ATTACHMENT,format:e,width:this.width,height:this.height})}resizeAttachments(e,i){if(this.colorAttachments.forEach((r,n)=>{let o=r.texture.clone({width:e,height:i});this.destroyAttachedResource(r),this.colorAttachments[n]=o.view,this.attachResource(o.view)}),this.depthStencilAttachment){let r=this.depthStencilAttachment.texture.clone({width:e,height:i});this.destroyAttachedResource(this.depthStencilAttachment),this.depthStencilAttachment=r.view,this.attachResource(r)}this.updateAttachments()}static defaultProps={...$.defaultProps,width:1,height:1,colorAttachments:[],depthStencilAttachment:null}}});var Ke,ec=A(()=>{Ce();Ke=class t extends ${get[Symbol.toStringTag](){return"RenderPipeline"}shaderLayout;bufferLayout;linkStatus="pending";hash="";sharedRenderPipeline=null;get isPending(){return this.linkStatus==="pending"||this.vs.compilationStatus==="pending"||this.fs?.compilationStatus==="pending"}get isErrored(){return this.linkStatus==="error"||this.vs.compilationStatus==="error"||this.fs?.compilationStatus==="error"}constructor(e,i){super(e,i,t.defaultProps),this.shaderLayout=this.props.shaderLayout,this.bufferLayout=this.props.bufferLayout||[],this.sharedRenderPipeline=this.props._sharedRenderPipeline||null}static defaultProps={...$.defaultProps,vs:null,vertexEntryPoint:"vertexMain",vsConstants:{},fs:null,fragmentEntryPoint:"fragmentMain",fsConstants:{},shaderLayout:null,bufferLayout:[],topology:"triangle-list",colorAttachmentFormats:void 0,depthStencilAttachmentFormat:void 0,parameters:{},varyings:void 0,bufferMode:void 0,disableWarnings:!1,_sharedRenderPipeline:void 0,bindings:void 0,bindGroups:void 0}}});var Wr,Rp=A(()=>{Ce();Wr=class extends ${get[Symbol.toStringTag](){return"SharedRenderPipeline"}constructor(e,i){super(e,i,{...$.defaultProps,handle:void 0,vs:void 0,fs:void 0,varyings:void 0,bufferMode:void 0})}}});var Vr,kp=A(()=>{Ce();Vr=class t extends ${get[Symbol.toStringTag](){return"ComputePipeline"}hash="";shaderLayout;constructor(e,i){super(e,i,t.defaultProps),this.shaderLayout=i.shaderLayout}static defaultProps={...$.defaultProps,shader:void 0,entryPoint:void 0,constants:{},shaderLayout:void 0}}});var Hr,Ep=A(()=>{kp();ec();Ye();Xi();Hr=class t{static defaultProps={...Ke.defaultProps};static getDefaultPipelineFactory(e){let i=e.getModuleData("@luma.gl/core");return i.defaultPipelineFactory||=new t(e),i.defaultPipelineFactory}device;_hashCounter=0;_hashes={};_renderPipelineCache={};_computePipelineCache={};_sharedRenderPipelineCache={};get[Symbol.toStringTag](){return"PipelineFactory"}toString(){return`PipelineFactory(${this.device.id})`}constructor(e){this.device=e}createRenderPipeline(e){if(!this.device.props._cachePipelines)return this.device.createRenderPipeline(e);let i={...Ke.defaultProps,...e},r=this._renderPipelineCache,n=this._hashRenderPipeline(i),o=r[n]?.resource;if(o)r[n].useCount++,this.device.props.debugFactories&&_.log(3,`${this}: ${r[n].resource} reused, count=${r[n].useCount}, (id=${e.id})`)();else{let s=this.device.type==="webgl"&&this.device.props._sharePipelines?this.createSharedRenderPipeline(i):void 0;o=this.device.createRenderPipeline({...i,id:i.id?`${i.id}-cached`:vt("unnamed-cached"),_sharedRenderPipeline:s}),o.hash=n,r[n]={resource:o,useCount:1},this.device.props.debugFactories&&_.log(3,`${this}: ${o} created, count=${r[n].useCount}`)()}return o}createComputePipeline(e){if(!this.device.props._cachePipelines)return this.device.createComputePipeline(e);let i={...Vr.defaultProps,...e},r=this._computePipelineCache,n=this._hashComputePipeline(i),o=r[n]?.resource;return o?(r[n].useCount++,this.device.props.debugFactories&&_.log(3,`${this}: ${r[n].resource} reused, count=${r[n].useCount}, (id=${e.id})`)()):(o=this.device.createComputePipeline({...i,id:i.id?`${i.id}-cached`:void 0}),o.hash=n,r[n]={resource:o,useCount:1},this.device.props.debugFactories&&_.log(3,`${this}: ${o} created, count=${r[n].useCount}`)()),o}release(e){if(!this.device.props._cachePipelines){e.destroy();return}let i=this._getCache(e),r=e.hash;i[r].useCount--,i[r].useCount===0?(this._destroyPipeline(e),this.device.props.debugFactories&&_.log(3,`${this}: ${e} released and destroyed`)()):i[r].useCount<0?(_.error(`${this}: ${e} released, useCount < 0, resetting`)(),i[r].useCount=0):this.device.props.debugFactories&&_.log(3,`${this}: ${e} released, count=${i[r].useCount}`)()}createSharedRenderPipeline(e){let i=this._hashSharedRenderPipeline(e),r=this._sharedRenderPipelineCache[i];return r||(r={resource:this.device._createSharedRenderPipelineWebGL(e),useCount:0},this._sharedRenderPipelineCache[i]=r),r.useCount++,r.resource}releaseSharedRenderPipeline(e){if(!e.sharedRenderPipeline)return;let i=this._hashSharedRenderPipeline(e.sharedRenderPipeline.props),r=this._sharedRenderPipelineCache[i];r&&(r.useCount--,r.useCount===0&&(r.resource.destroy(),delete this._sharedRenderPipelineCache[i]))}_destroyPipeline(e){let i=this._getCache(e);return this.device.props._destroyPipelines?(delete i[e.hash],e.destroy(),e instanceof Ke&&this.releaseSharedRenderPipeline(e),!0):!1}_getCache(e){let i;if(e instanceof Vr&&(i=this._computePipelineCache),e instanceof Ke&&(i=this._renderPipelineCache),!i)throw new Error(`${this}`);if(!i[e.hash])throw new Error(`${this}: ${e} matched incorrect entry`);return i}_hashComputePipeline(e){let{type:i}=this.device,r=this._getHash(e.shader.source),n=this._getHash(JSON.stringify(e.shaderLayout));return`${i}/C/${r}SL${n}`}_hashRenderPipeline(e){let i=e.vs?this._getHash(e.vs.source):0,r=e.fs?this._getHash(e.fs.source):0,n=this._getWebGLVaryingHash(e),o=this._getHash(JSON.stringify(e.shaderLayout)),s=this._getHash(JSON.stringify(e.bufferLayout)),{type:a}=this.device;if(a==="webgl"){let l=this._getHash(JSON.stringify(e.parameters));return`${a}/R/${i}/${r}V${n}T${e.topology}P${l}SL${o}BL${s}`}else{let c=this._getHash(JSON.stringify({vertexEntryPoint:e.vertexEntryPoint,fragmentEntryPoint:e.fragmentEntryPoint})),u=this._getHash(JSON.stringify(e.parameters)),d=this._getWebGPUAttachmentHash(e);return`${a}/R/${i}/${r}V${n}T${e.topology}EP${c}P${u}SL${o}BL${s}A${d}`}}_hashSharedRenderPipeline(e){let i=e.vs?this._getHash(e.vs.source):0,r=e.fs?this._getHash(e.fs.source):0,n=this._getWebGLVaryingHash(e);return`webgl/S/${i}/${r}V${n}`}_getHash(e){return this._hashes[e]===void 0&&(this._hashes[e]=this._hashCounter++),this._hashes[e]}_getWebGLVaryingHash(e){let{varyings:i=[],bufferMode:r=null}=e;return this._getHash(JSON.stringify({varyings:i,bufferMode:r}))}_getWebGPUAttachmentHash(e){let i=e.colorAttachmentFormats??[this.device.preferredColorFormat],r=e.parameters?.depthWriteEnabled?e.depthStencilAttachmentFormat||this.device.preferredDepthFormat:null;return this._getHash(JSON.stringify({colorAttachmentFormats:i,depthStencilAttachmentFormat:r}))}}});var $r,Ip=A(()=>{Jl();Ye();$r=class t{static defaultProps={...vi.defaultProps};static getDefaultShaderFactory(e){let i=e.getModuleData("@luma.gl/core");return i.defaultShaderFactory||=new t(e),i.defaultShaderFactory}device;_cache={};get[Symbol.toStringTag](){return"ShaderFactory"}toString(){return`${this[Symbol.toStringTag]}(${this.device.id})`}constructor(e){this.device=e}createShader(e){if(!this.device.props._cacheShaders)return this.device.createShader(e);let i=this._hashShader(e),r=this._cache[i];if(r)r.useCount++,this.device.props.debugFactories&&_.log(3,`${this}: Reusing shader ${r.resource.id} count=${r.useCount}`)();else{let n=this.device.createShader({...e,id:e.id?`${e.id}-cached`:void 0});this._cache[i]=r={resource:n,useCount:1},this.device.props.debugFactories&&_.log(3,`${this}: Created new shader ${n.id}`)()}return r.resource}release(e){if(!this.device.props._cacheShaders){e.destroy();return}let i=this._hashShader(e),r=this._cache[i];if(r)if(r.useCount--,r.useCount===0)this.device.props._destroyShaders&&(delete this._cache[i],r.resource.destroy(),this.device.props.debugFactories&&_.log(3,`${this}: Releasing shader ${e.id}, destroyed`)());else{if(r.useCount<0)throw new Error(`ShaderFactory: Shader ${e.id} released too many times`);this.device.props.debugFactories&&_.log(3,`${this}: Releasing shader ${e.id} count=${r.useCount}`)()}}_hashShader(e){return`${e.stage}:${e.source}`}}});function Dp(t,e,i){let r=t.bindings.find(n=>n.name===e||`${n.name.toLocaleLowerCase()}uniforms`===e.toLocaleLowerCase());return!r&&!i?.ignoreWarnings&&_.warn(`Binding ${e} not set: Not found in shader layout.`)(),r||null}function Xr(t,e){if(!e)return{};if(TP(e))return Object.fromEntries(Object.entries(e).map(([n,o])=>[Number(n),{...o}]));let i={};for(let[r,n]of Object.entries(e)){let s=Dp(t,r)?.group??0;i[s]||={},i[s][r]=n}return i}function wo(t){let e={};for(let i of Object.values(t))Object.assign(e,i);return e}function TP(t){let e=Object.keys(t);return e.length>0&&e.every(i=>/^\d+$/.test(i))}var Fp=A(()=>{Ye()});var Gr,Mp=A(()=>{Ce();Gr=class t extends ${static defaultClearColor=[0,0,0,1];static defaultClearDepth=1;static defaultClearStencil=0;get[Symbol.toStringTag](){return"RenderPass"}constructor(e,i){i=t.normalizeProps(e,i),super(e,i,t.defaultProps)}static normalizeProps(e,i){return i}static defaultProps={...$.defaultProps,framebuffer:null,parameters:void 0,clearColor:t.defaultClearColor,clearColors:void 0,clearDepth:t.defaultClearDepth,clearStencil:t.defaultClearStencil,depthReadOnly:!1,stencilReadOnly:!1,discard:!1,occlusionQuerySet:void 0,timestampQuerySet:void 0,beginTimestampIndex:void 0,endTimestampIndex:void 0}}});var Yr,Np=A(()=>{Ce();Yr=class t extends ${get[Symbol.toStringTag](){return"CommandEncoder"}_timeProfilingQuerySet=null;_timeProfilingSlotCount=0;_gpuTimeMs;constructor(e,i){super(e,i,t.defaultProps),this._timeProfilingQuerySet=i.timeProfilingQuerySet??null,this._timeProfilingSlotCount=0,this._gpuTimeMs=void 0}async resolveTimeProfilingQuerySet(){if(this._gpuTimeMs=void 0,!this._timeProfilingQuerySet)return;let e=Math.floor(this._timeProfilingSlotCount/2);if(e<=0)return;let i=e*2,r=await this._timeProfilingQuerySet.readResults({firstQuery:0,queryCount:i}),n=0n;for(let o=0;o<i;o+=2)n+=r[o+1]-r[o];this._gpuTimeMs=Number(n)/1e6}getTimeProfilingSlotCount(){return this._timeProfilingSlotCount}getTimeProfilingQuerySet(){return this._timeProfilingQuerySet}_applyTimeProfilingToPassProps(e){let i=e||{};if(!this._supportsTimestampQueries()||!this._timeProfilingQuerySet||i.timestampQuerySet!==void 0||i.beginTimestampIndex!==void 0||i.endTimestampIndex!==void 0)return i;let r=this._timeProfilingSlotCount;return r+1>=this._timeProfilingQuerySet.props.count?i:(this._timeProfilingSlotCount+=2,{...i,timestampQuerySet:this._timeProfilingQuerySet,beginTimestampIndex:r,endTimestampIndex:r+1})}_supportsTimestampQueries(){return this.device.features.has("timestamp-query")}static defaultProps={...$.defaultProps,measureExecutionTime:void 0,timeProfilingQuerySet:void 0}}});var jr,Bp=A(()=>{Ce();jr=class t extends ${get[Symbol.toStringTag](){return"CommandBuffer"}constructor(e,i){super(e,i,t.defaultProps)}static defaultProps={...$.defaultProps}}});function Yi(t){let e=Ro(t),i=wP[e];if(!i)throw new Error(`Unsupported variable shader type: ${t}`);return i}function Op(t){let e=Up(t),i=AP[e];if(!i)throw new Error(`Unsupported attribute shader type: ${t}`);let[r,n]=i,o=r==="i32"||r==="u32",s=r!=="u32",a=CP[r]*n;return{primitiveType:r,components:n,byteLength:a,integer:o,signed:s}}function PP(t,e){return e===1?t:`vec${e}<${t}>`}function Up(t){return RP[t]||t}function Ro(t){return kP[t]||t}var tc,ic,CP,AP,wP,RP,kP,ko=A(()=>{tc=class{getVariableShaderTypeInfo(e){return Yi(e)}getAttributeShaderTypeInfo(e){return Op(e)}makeShaderAttributeType(e,i){return PP(e,i)}resolveAttributeShaderTypeAlias(e){return Up(e)}resolveVariableShaderTypeAlias(e){return Ro(e)}};ic=new tc,CP={f32:4,f16:2,i32:4,u32:4},AP={f32:["f32",1],"vec2<f32>":["f32",2],"vec3<f32>":["f32",3],"vec4<f32>":["f32",4],f16:["f16",1],"vec2<f16>":["f16",2],"vec3<f16>":["f16",3],"vec4<f16>":["f16",4],i32:["i32",1],"vec2<i32>":["i32",2],"vec3<i32>":["i32",3],"vec4<i32>":["i32",4],u32:["u32",1],"vec2<u32>":["u32",2],"vec3<u32>":["u32",3],"vec4<u32>":["u32",4]},wP={f32:{type:"f32",components:1},f16:{type:"f16",components:1},i32:{type:"i32",components:1},u32:{type:"u32",components:1},"vec2<f32>":{type:"f32",components:2},"vec3<f32>":{type:"f32",components:3},"vec4<f32>":{type:"f32",components:4},"vec2<f16>":{type:"f16",components:2},"vec3<f16>":{type:"f16",components:3},"vec4<f16>":{type:"f16",components:4},"vec2<i32>":{type:"i32",components:2},"vec3<i32>":{type:"i32",components:3},"vec4<i32>":{type:"i32",components:4},"vec2<u32>":{type:"u32",components:2},"vec3<u32>":{type:"u32",components:3},"vec4<u32>":{type:"u32",components:4},"mat2x2<f32>":{type:"f32",components:4},"mat2x3<f32>":{type:"f32",components:6},"mat2x4<f32>":{type:"f32",components:8},"mat3x2<f32>":{type:"f32",components:6},"mat3x3<f32>":{type:"f32",components:9},"mat3x4<f32>":{type:"f32",components:12},"mat4x2<f32>":{type:"f32",components:8},"mat4x3<f32>":{type:"f32",components:12},"mat4x4<f32>":{type:"f32",components:16},"mat2x2<f16>":{type:"f16",components:4},"mat2x3<f16>":{type:"f16",components:6},"mat2x4<f16>":{type:"f16",components:8},"mat3x2<f16>":{type:"f16",components:6},"mat3x3<f16>":{type:"f16",components:9},"mat3x4<f16>":{type:"f16",components:12},"mat4x2<f16>":{type:"f16",components:8},"mat4x3<f16>":{type:"f16",components:12},"mat4x4<f16>":{type:"f16",components:16},"mat2x2<i32>":{type:"i32",components:4},"mat2x3<i32>":{type:"i32",components:6},"mat2x4<i32>":{type:"i32",components:8},"mat3x2<i32>":{type:"i32",components:6},"mat3x3<i32>":{type:"i32",components:9},"mat3x4<i32>":{type:"i32",components:12},"mat4x2<i32>":{type:"i32",components:8},"mat4x3<i32>":{type:"i32",components:12},"mat4x4<i32>":{type:"i32",components:16},"mat2x2<u32>":{type:"u32",components:4},"mat2x3<u32>":{type:"u32",components:6},"mat2x4<u32>":{type:"u32",components:8},"mat3x2<u32>":{type:"u32",components:6},"mat3x3<u32>":{type:"u32",components:9},"mat3x4<u32>":{type:"u32",components:12},"mat4x2<u32>":{type:"u32",components:8},"mat4x3<u32>":{type:"u32",components:12},"mat4x4<u32>":{type:"u32",components:16}},RP={vec2i:"vec2<i32>",vec3i:"vec3<i32>",vec4i:"vec4<i32>",vec2u:"vec2<u32>",vec3u:"vec3<u32>",vec4u:"vec4<u32>",vec2f:"vec2<f32>",vec3f:"vec3<f32>",vec4f:"vec4<f32>",vec2h:"vec2<f16>",vec3h:"vec3<f16>",vec4h:"vec4<f16>"},kP={vec2i:"vec2<i32>",vec3i:"vec3<i32>",vec4i:"vec4<i32>",vec2u:"vec2<u32>",vec3u:"vec3<u32>",vec4u:"vec4<u32>",vec2f:"vec2<f32>",vec3f:"vec3<f32>",vec4f:"vec4<f32>",vec2h:"vec2<f16>",vec3h:"vec3<f16>",vec4h:"vec4<f16>",mat2x2f:"mat2x2<f32>",mat2x3f:"mat2x3<f32>",mat2x4f:"mat2x4<f32>",mat3x2f:"mat3x2<f32>",mat3x3f:"mat3x3<f32>",mat3x4f:"mat3x4<f32>",mat4x2f:"mat4x2<f32>",mat4x3f:"mat4x3<f32>",mat4x4f:"mat4x4<f32>",mat2x2i:"mat2x2<i32>",mat2x3i:"mat2x3<i32>",mat2x4i:"mat2x4<i32>",mat3x2i:"mat3x2<i32>",mat3x3i:"mat3x3<i32>",mat3x4i:"mat3x4<i32>",mat4x2i:"mat4x2<i32>",mat4x3i:"mat4x3<i32>",mat4x4i:"mat4x4<i32>",mat2x2u:"mat2x2<u32>",mat2x3u:"mat2x3<u32>",mat2x4u:"mat2x4<u32>",mat3x2u:"mat3x2<u32>",mat3x3u:"mat3x3<u32>",mat3x4u:"mat3x4<u32>",mat4x2u:"mat4x2<u32>",mat4x3u:"mat4x3<u32>",mat4x4u:"mat4x4<u32>",mat2x2h:"mat2x2<f16>",mat2x3h:"mat2x3<f16>",mat2x4h:"mat2x4<f16>",mat3x2h:"mat3x2<f16>",mat3x3h:"mat3x3<f16>",mat3x4h:"mat3x4<f16>",mat4x2h:"mat4x2<f16>",mat4x3h:"mat4x3<f16>",mat4x4h:"mat4x4<f16>"}});function Eo(t,e){let i={};for(let r of t.attributes){let n=EP(t,e,r.name);n&&(i[r.name]=n)}return i}function Lp(t,e,i=16){let r=Eo(t,e),n=new Array(i).fill(null);for(let o of Object.values(r))n[o.location]=o;return n}function EP(t,e,i){let r=IP(t,i),n=DP(e,i);if(!r)return null;let o=ic.getAttributeShaderTypeInfo(r.type),s=Ut.getCompatibleVertexFormat(o),a=n?.vertexFormat||s,l=Ut.getVertexFormatInfo(a);return{attributeName:n?.attributeName||r.name,bufferName:n?.bufferName||r.name,location:r.location,shaderType:r.type,primitiveType:o.primitiveType,shaderComponents:o.components,vertexFormat:a,bufferDataType:l.type,bufferComponents:l.components,normalized:l.normalized,integer:o.integer,stepMode:n?.stepMode||r.stepMode||"vertex",byteOffset:n?.byteOffset||0,byteStride:n?.byteStride||0}}function IP(t,e){let i=t.attributes.find(r=>r.name===e);return i||_.warn(`shader layout attribute "${e}" not present in shader`),i||null}function DP(t,e){FP(t);let i=MP(t,e);return i||(i=NP(t,e),i)?i:(_.warn(`layout for attribute "${e}" not present in buffer layout`),null)}function FP(t){for(let e of t)(e.attributes&&e.format||!e.attributes&&!e.format)&&_.warn(`BufferLayout ${name} must have either 'attributes' or 'format' field`)}function MP(t,e){for(let i of t)if(i.format&&i.name===e)return{attributeName:i.name,bufferName:e,stepMode:i.stepMode,vertexFormat:i.format,byteOffset:0,byteStride:i.byteStride||0};return null}function NP(t,e){for(let i of t){let r=i.byteStride;if(typeof i.byteStride!="number")for(let o of i.attributes||[]){let s=Ut.getVertexFormatInfo(o.format);r+=s.byteLength}let n=i.attributes?.find(o=>o.attribute===e);if(n)return{attributeName:n.attribute,bufferName:i.name,stepMode:i.stepMode,vertexFormat:n.format,byteOffset:n.byteOffset,byteStride:r}}return null}var rc=A(()=>{Ye();ko();vo()});var Kr,zp=A(()=>{rc();Ce();Kr=class t extends ${static defaultProps={...$.defaultProps,shaderLayout:void 0,bufferLayout:[]};get[Symbol.toStringTag](){return"VertexArray"}maxVertexAttributes;attributeInfos;indexBuffer=null;attributes;constructor(e,i){super(e,i,t.defaultProps),this.maxVertexAttributes=e.limits.maxVertexAttributes,this.attributes=new Array(this.maxVertexAttributes).fill(null),this.attributeInfos=Lp(i.shaderLayout,i.bufferLayout,this.maxVertexAttributes)}setConstantWebGL(e,i){this.device.reportError(new Error("constant attributes not supported"),this)()}}});var qr,Wp=A(()=>{Ce();qr=class t extends ${static defaultProps={...$.defaultProps,layout:void 0,buffers:{}};get[Symbol.toStringTag](){return"TransformFeedback"}constructor(e,i){super(e,i,t.defaultProps)}}});var Zr,Vp=A(()=>{Ce();Zr=class t extends ${get[Symbol.toStringTag](){return"QuerySet"}constructor(e,i){super(e,i,t.defaultProps)}static defaultProps={...$.defaultProps,type:void 0,count:void 0}}});var Qr,Hp=A(()=>{Ce();Qr=class t extends ${static defaultProps={...$.defaultProps};get[Symbol.toStringTag](){return"Fence"}constructor(e,i={}){super(e,i,t.defaultProps)}}});function _t(t,e){switch(e){case 1:return t;case 2:return t+t%2;default:return t+(4-t%4)%4}}function nc(t){let[,,,,e]=BP[t];return e}var BP,oc=A(()=>{BP={uint8:["uint8","u32",1,!1,Uint8Array],sint8:["sint8","i32",1,!1,Int8Array],unorm8:["uint8","f32",1,!0,Uint8Array],snorm8:["sint8","f32",1,!0,Int8Array],uint16:["uint16","u32",2,!1,Uint16Array],sint16:["sint16","i32",2,!1,Int16Array],unorm16:["uint16","u32",2,!0,Uint16Array],snorm16:["sint16","i32",2,!0,Int16Array],float16:["float16","f16",2,!1,Uint16Array],float32:["float32","f32",4,!1,Float32Array],uint32:["uint32","u32",4,!1,Uint32Array],sint32:["sint32","i32",4,!1,Int32Array]}});function Xp(t,e={}){let i={...t},r=e.layout??"std140",n={},o=0;for(let[s,a]of Object.entries(i))o=sc(n,s,a,o,r);return o=_t(o,Zt(i,r)),{layout:r,byteLength:o*4,uniformTypes:i,fields:n}}function Jr(t,e){let i=Ro(t),r=Yi(i),n=/^mat(\d)x(\d)<.+>$/.exec(i);if(n){let s=Number(n[1]),a=Number(n[2]),l=$p(a,i,r.type,e),c=UP(l.size,l.alignment,e);return{alignment:l.alignment,size:s*c,components:s*a,columns:s,rows:a,columnStride:c,shaderType:i,type:r.type}}let o=/^vec(\d)<.+>$/.exec(i);return o?$p(Number(o[1]),i,r.type,e):{alignment:1,size:1,components:1,columns:1,rows:1,columnStride:1,shaderType:i,type:r.type}}function ac(t){return!!t&&typeof t=="object"&&!Array.isArray(t)}function sc(t,e,i,r,n){if(typeof i=="string"){let o=Jr(i,n),s=_t(r,o.alignment);return t[e]={offset:s,...o},s+o.size}if(Array.isArray(i)){if(Array.isArray(i[0]))throw new Error(`Nested arrays are not supported for ${e}`);let o=i[0],s=i[1],a=Yp(o,n),l=_t(r,Zt(i,n));for(let c=0;c<s;c++)sc(t,`${e}[${c}]`,o,l+c*a,n);return l+a*s}if(ac(i)){let o=Zt(i,n),s=_t(r,o);for(let[a,l]of Object.entries(i))s=sc(t,`${e}.${a}`,l,s,n);return _t(s,o)}throw new Error(`Unsupported CompositeShaderType for ${e}`)}function Gp(t,e){if(typeof t=="string")return Jr(t,e).size;if(Array.isArray(t)){let r=t[0],n=t[1];if(Array.isArray(r))throw new Error("Nested arrays are not supported");return Yp(r,e)*n}let i=0;for(let r of Object.values(t)){let n=r;i=_t(i,Zt(n,e)),i+=Gp(n,e)}return _t(i,Zt(t,e))}function Zt(t,e){if(typeof t=="string")return Jr(t,e).alignment;if(Array.isArray(t)){let r=t[0],n=Zt(r,e);return jp(e)?Math.max(n,4):n}let i=1;for(let r of Object.values(t)){let n=Zt(r,e);i=Math.max(i,n)}return LP(e)?Math.max(i,4):i}function $p(t,e,i,r){return{alignment:t===2?2:4,size:t===3?3:t,components:t,columns:1,rows:t,columnStride:t===3?3:t,shaderType:e,type:i}}function Yp(t,e){let i=Gp(t,e),r=Zt(t,e);return OP(i,r,e)}function OP(t,e,i){return _t(t,jp(i)?4:e)}function UP(t,e,i){return i==="std140"?4:_t(t,e)}function jp(t){return t==="std140"||t==="wgsl-uniform"}function LP(t){return t==="std140"||t==="wgsl-uniform"}var lc=A(()=>{oc();ko()});function cc(t){return(!Io||Io.byteLength<t)&&(Io=new ArrayBuffer(t)),Io}function uc(t,e){let i=cc(t.BYTES_PER_ELEMENT*e);return new t(i,0,e)}var Io,dc=A(()=>{});function zP(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function ji(t){return Array.isArray(t)?t.length===0||typeof t[0]=="number":zP(t)}var hc=A(()=>{});function WP(t){return!!t&&typeof t=="object"&&!Array.isArray(t)&&!ArrayBuffer.isView(t)}function VP(t,e,i){return Array.prototype.slice.call(t,e,i)}var Do,Kp=A(()=>{dc();hc();Ye();lc();Do=class{layout;constructor(e){this.layout=e}has(e){return!!this.layout.fields[e]}get(e){let i=this.layout.fields[e];return i?{offset:i.offset,size:i.size}:void 0}getFlatUniformValues(e){let i={};for(let[r,n]of Object.entries(e)){let o=this.layout.uniformTypes[r];o?this._flattenCompositeValue(i,r,o,n):this.layout.fields[r]&&(i[r]=n)}return i}getData(e){let i=cc(this.layout.byteLength);new Uint8Array(i,0,this.layout.byteLength).fill(0);let r={i32:new Int32Array(i),u32:new Uint32Array(i),f32:new Float32Array(i),f16:new Uint16Array(i)},n=this.getFlatUniformValues(e);for(let[o,s]of Object.entries(n))this._writeLeafValue(r,o,s);return new Uint8Array(i,0,this.layout.byteLength)}_flattenCompositeValue(e,i,r,n){if(n!==void 0){if(typeof r=="string"||this.layout.fields[i]){e[i]=n;return}if(Array.isArray(r)){let o=r[0],s=r[1];if(Array.isArray(o))throw new Error(`Nested arrays are not supported for ${i}`);if(typeof o=="string"&&ji(n)){this._flattenPackedArray(e,i,o,s,n);return}if(!Array.isArray(n)){_.warn(`Unsupported uniform array value for ${i}:`,n)();return}for(let a=0;a<Math.min(n.length,s);a++){let l=n[a];l!==void 0&&this._flattenCompositeValue(e,`${i}[${a}]`,o,l)}return}if(ac(r)&&WP(n)){for(let[o,s]of Object.entries(n)){if(s===void 0)continue;let a=`${i}.${o}`;this._flattenCompositeValue(e,a,r[o],s)}return}_.warn(`Unsupported uniform value for ${i}:`,n)()}}_flattenPackedArray(e,i,r,n,o){let s=o,l=Jr(r,this.layout.layout).components;for(let c=0;c<n;c++){let u=c*l;if(u>=s.length)break;l===1?e[`${i}[${c}]`]=Number(s[u]):e[`${i}[${c}]`]=VP(o,u,u+l)}}_writeLeafValue(e,i,r){let n=this.layout.fields[i];if(!n){_.warn(`Uniform ${i} not found in layout`)();return}let{type:o,components:s,columns:a,rows:l,offset:c,columnStride:u}=n,d=e[o];if(s===1){d[c]=Number(r);return}let h=r;if(a===1){for(let g=0;g<s;g++)d[c+g]=Number(h[g]??0);return}let f=0;for(let g=0;g<a;g++){let x=c+g*u;for(let b=0;b<l;b++)d[x+b]=Number(h[f++]??0)}}}});function qp(t,e,i=16){if(t===e)return!0;let r=t,n=e;if(!ji(r)||!ji(n)||r.length!==n.length)return!1;let o=Math.min(i,HP);if(r.length>o)return!1;for(let s=0;s<r.length;++s)if(n[s]!==r[s])return!1;return!0}function Zp(t){return ji(t)?t.slice():t}var HP,Qp=A(()=>{hc();HP=128});var Fo,Jp=A(()=>{Qp();Fo=class{name;uniforms={};modifiedUniforms={};modified=!0;bindingLayout={};needsRedraw="initialized";constructor(e){if(this.name=e?.name||"unnamed",e?.name&&e?.shaderLayout){let i=e?.shaderLayout.bindings?.find(n=>n.type==="uniform"&&n.name===e?.name);if(!i)throw new Error(e?.name);let r=i;for(let n of r.uniforms||[])this.bindingLayout[n.name]=n}}setUniforms(e){for(let[i,r]of Object.entries(e))this._setUniform(i,r),this.needsRedraw||this.setNeedsRedraw(`${this.name}.${i}=${r}`)}setNeedsRedraw(e){this.needsRedraw=this.needsRedraw||e}getAllUniforms(){return this.modifiedUniforms={},this.needsRedraw=!1,this.uniforms||{}}_setUniform(e,i){qp(this.uniforms[e],i)||(this.uniforms[e]=Zp(i),this.modifiedUniforms[e]=!0,this.modified=!0)}}});function XP(t){return t.type==="webgpu"?"wgsl-uniform":"std140"}var $P,Q,eg=A(()=>{yo();Ye();lc();Jp();Kp();$P=1024,Q=class{device;uniformBlocks=new Map;shaderBlockLayouts=new Map;shaderBlockWriters=new Map;uniformBuffers=new Map;constructor(e,i){this.device=e;for(let[r,n]of Object.entries(i)){let o=r,s=Xp(n.uniformTypes??{},{layout:n.layout??XP(e)}),a=new Do(s);this.shaderBlockLayouts.set(o,s),this.shaderBlockWriters.set(o,a);let l=new Fo({name:r});l.setUniforms(a.getFlatUniformValues(n.defaultUniforms||{})),this.uniformBlocks.set(o,l)}}destroy(){for(let e of this.uniformBuffers.values())e.destroy()}setUniforms(e){for(let[i,r]of Object.entries(e)){let n=i,s=this.shaderBlockWriters.get(n)?.getFlatUniformValues(r||{});this.uniformBlocks.get(n)?.setUniforms(s||{})}this.updateUniformBuffers()}getUniformBufferByteLength(e){let i=this.shaderBlockLayouts.get(e)?.byteLength||0;return Math.max(i,$P)}getUniformBufferData(e){let i=this.uniformBlocks.get(e)?.getAllUniforms()||{};return this.shaderBlockWriters.get(e)?.getData(i)||new Uint8Array(0)}createUniformBuffer(e,i){i&&this.setUniforms(i);let r=this.getUniformBufferByteLength(e),n=this.device.createBuffer({usage:N.UNIFORM|N.COPY_DST,byteLength:r}),o=this.getUniformBufferData(e);return n.write(o),n}getManagedUniformBuffer(e){if(!this.uniformBuffers.get(e)){let i=this.getUniformBufferByteLength(e),r=this.device.createBuffer({usage:N.UNIFORM|N.COPY_DST,byteLength:i});this.uniformBuffers.set(e,r)}return this.uniformBuffers.get(e)}updateUniformBuffers(){let e=!1;for(let i of this.uniformBlocks.keys()){let r=this.updateUniformBuffer(i);e||=r}return e&&_.log(3,`UniformStore.updateUniformBuffers(): ${e}`)(),e}updateUniformBuffer(e){let i=this.uniformBlocks.get(e),r=this.uniformBuffers.get(e),n=!1;if(r&&i?.needsRedraw){n||=i.needsRedraw;let o=this.getUniformBufferData(e);r=this.uniformBuffers.get(e),r?.write(o);let s=this.uniformBlocks.get(e)?.getAllUniforms();_.log(4,`Writing to uniform buffer ${String(e)}`,o,s)()}return n}}});var ee=A(()=>{pp();gp();$l();bp();_p();yo();Zl();Tp();Jl();ql();wp();ec();Rp();Ep();Ip();Mp();Np();Bp();zp();Wp();Vp();Hp();eg();So();oc();ko();vo();Po();Vl();Ye();Fp();jl();dc();rc()});var ei,fm=A(()=>{(function(t){t[t.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",t[t.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",t[t.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT",t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN",t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC_COLOR=768]="SRC_COLOR",t[t.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.DST_COLOR=774]="DST_COLOR",t[t.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",t[t.CONSTANT_COLOR=32769]="CONSTANT_COLOR",t[t.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",t[t.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",t[t.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA",t[t.FUNC_ADD=32774]="FUNC_ADD",t[t.FUNC_SUBTRACT=32778]="FUNC_SUBTRACT",t[t.FUNC_REVERSE_SUBTRACT=32779]="FUNC_REVERSE_SUBTRACT",t[t.BLEND_EQUATION=32777]="BLEND_EQUATION",t[t.BLEND_EQUATION_RGB=32777]="BLEND_EQUATION_RGB",t[t.BLEND_EQUATION_ALPHA=34877]="BLEND_EQUATION_ALPHA",t[t.BLEND_DST_RGB=32968]="BLEND_DST_RGB",t[t.BLEND_SRC_RGB=32969]="BLEND_SRC_RGB",t[t.BLEND_DST_ALPHA=32970]="BLEND_DST_ALPHA",t[t.BLEND_SRC_ALPHA=32971]="BLEND_SRC_ALPHA",t[t.BLEND_COLOR=32773]="BLEND_COLOR",t[t.ARRAY_BUFFER_BINDING=34964]="ARRAY_BUFFER_BINDING",t[t.ELEMENT_ARRAY_BUFFER_BINDING=34965]="ELEMENT_ARRAY_BUFFER_BINDING",t[t.LINE_WIDTH=2849]="LINE_WIDTH",t[t.ALIASED_POINT_SIZE_RANGE=33901]="ALIASED_POINT_SIZE_RANGE",t[t.ALIASED_LINE_WIDTH_RANGE=33902]="ALIASED_LINE_WIDTH_RANGE",t[t.CULL_FACE_MODE=2885]="CULL_FACE_MODE",t[t.FRONT_FACE=2886]="FRONT_FACE",t[t.DEPTH_RANGE=2928]="DEPTH_RANGE",t[t.DEPTH_WRITEMASK=2930]="DEPTH_WRITEMASK",t[t.DEPTH_CLEAR_VALUE=2931]="DEPTH_CLEAR_VALUE",t[t.DEPTH_FUNC=2932]="DEPTH_FUNC",t[t.STENCIL_CLEAR_VALUE=2961]="STENCIL_CLEAR_VALUE",t[t.STENCIL_FUNC=2962]="STENCIL_FUNC",t[t.STENCIL_FAIL=2964]="STENCIL_FAIL",t[t.STENCIL_PASS_DEPTH_FAIL=2965]="STENCIL_PASS_DEPTH_FAIL",t[t.STENCIL_PASS_DEPTH_PASS=2966]="STENCIL_PASS_DEPTH_PASS",t[t.STENCIL_REF=2967]="STENCIL_REF",t[t.STENCIL_VALUE_MASK=2963]="STENCIL_VALUE_MASK",t[t.STENCIL_WRITEMASK=2968]="STENCIL_WRITEMASK",t[t.STENCIL_BACK_FUNC=34816]="STENCIL_BACK_FUNC",t[t.STENCIL_BACK_FAIL=34817]="STENCIL_BACK_FAIL",t[t.STENCIL_BACK_PASS_DEPTH_FAIL=34818]="STENCIL_BACK_PASS_DEPTH_FAIL",t[t.STENCIL_BACK_PASS_DEPTH_PASS=34819]="STENCIL_BACK_PASS_DEPTH_PASS",t[t.STENCIL_BACK_REF=36003]="STENCIL_BACK_REF",t[t.STENCIL_BACK_VALUE_MASK=36004]="STENCIL_BACK_VALUE_MASK",t[t.STENCIL_BACK_WRITEMASK=36005]="STENCIL_BACK_WRITEMASK",t[t.VIEWPORT=2978]="VIEWPORT",t[t.SCISSOR_BOX=3088]="SCISSOR_BOX",t[t.COLOR_CLEAR_VALUE=3106]="COLOR_CLEAR_VALUE",t[t.COLOR_WRITEMASK=3107]="COLOR_WRITEMASK",t[t.UNPACK_ALIGNMENT=3317]="UNPACK_ALIGNMENT",t[t.PACK_ALIGNMENT=3333]="PACK_ALIGNMENT",t[t.MAX_TEXTURE_SIZE=3379]="MAX_TEXTURE_SIZE",t[t.MAX_VIEWPORT_DIMS=3386]="MAX_VIEWPORT_DIMS",t[t.SUBPIXEL_BITS=3408]="SUBPIXEL_BITS",t[t.RED_BITS=3410]="RED_BITS",t[t.GREEN_BITS=3411]="GREEN_BITS",t[t.BLUE_BITS=3412]="BLUE_BITS",t[t.ALPHA_BITS=3413]="ALPHA_BITS",t[t.DEPTH_BITS=3414]="DEPTH_BITS",t[t.STENCIL_BITS=3415]="STENCIL_BITS",t[t.POLYGON_OFFSET_UNITS=10752]="POLYGON_OFFSET_UNITS",t[t.POLYGON_OFFSET_FACTOR=32824]="POLYGON_OFFSET_FACTOR",t[t.TEXTURE_BINDING_2D=32873]="TEXTURE_BINDING_2D",t[t.SAMPLE_BUFFERS=32936]="SAMPLE_BUFFERS",t[t.SAMPLES=32937]="SAMPLES",t[t.SAMPLE_COVERAGE_VALUE=32938]="SAMPLE_COVERAGE_VALUE",t[t.SAMPLE_COVERAGE_INVERT=32939]="SAMPLE_COVERAGE_INVERT",t[t.COMPRESSED_TEXTURE_FORMATS=34467]="COMPRESSED_TEXTURE_FORMATS",t[t.VENDOR=7936]="VENDOR",t[t.RENDERER=7937]="RENDERER",t[t.VERSION=7938]="VERSION",t[t.IMPLEMENTATION_COLOR_READ_TYPE=35738]="IMPLEMENTATION_COLOR_READ_TYPE",t[t.IMPLEMENTATION_COLOR_READ_FORMAT=35739]="IMPLEMENTATION_COLOR_READ_FORMAT",t[t.BROWSER_DEFAULT_WEBGL=37444]="BROWSER_DEFAULT_WEBGL",t[t.STATIC_DRAW=35044]="STATIC_DRAW",t[t.STREAM_DRAW=35040]="STREAM_DRAW",t[t.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.BUFFER_SIZE=34660]="BUFFER_SIZE",t[t.BUFFER_USAGE=34661]="BUFFER_USAGE",t[t.CURRENT_VERTEX_ATTRIB=34342]="CURRENT_VERTEX_ATTRIB",t[t.VERTEX_ATTRIB_ARRAY_ENABLED=34338]="VERTEX_ATTRIB_ARRAY_ENABLED",t[t.VERTEX_ATTRIB_ARRAY_SIZE=34339]="VERTEX_ATTRIB_ARRAY_SIZE",t[t.VERTEX_ATTRIB_ARRAY_STRIDE=34340]="VERTEX_ATTRIB_ARRAY_STRIDE",t[t.VERTEX_ATTRIB_ARRAY_TYPE=34341]="VERTEX_ATTRIB_ARRAY_TYPE",t[t.VERTEX_ATTRIB_ARRAY_NORMALIZED=34922]="VERTEX_ATTRIB_ARRAY_NORMALIZED",t[t.VERTEX_ATTRIB_ARRAY_POINTER=34373]="VERTEX_ATTRIB_ARRAY_POINTER",t[t.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING=34975]="VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",t[t.CULL_FACE=2884]="CULL_FACE",t[t.FRONT=1028]="FRONT",t[t.BACK=1029]="BACK",t[t.FRONT_AND_BACK=1032]="FRONT_AND_BACK",t[t.BLEND=3042]="BLEND",t[t.DEPTH_TEST=2929]="DEPTH_TEST",t[t.DITHER=3024]="DITHER",t[t.POLYGON_OFFSET_FILL=32823]="POLYGON_OFFSET_FILL",t[t.SAMPLE_ALPHA_TO_COVERAGE=32926]="SAMPLE_ALPHA_TO_COVERAGE",t[t.SAMPLE_COVERAGE=32928]="SAMPLE_COVERAGE",t[t.SCISSOR_TEST=3089]="SCISSOR_TEST",t[t.STENCIL_TEST=2960]="STENCIL_TEST",t[t.NO_ERROR=0]="NO_ERROR",t[t.INVALID_ENUM=1280]="INVALID_ENUM",t[t.INVALID_VALUE=1281]="INVALID_VALUE",t[t.INVALID_OPERATION=1282]="INVALID_OPERATION",t[t.OUT_OF_MEMORY=1285]="OUT_OF_MEMORY",t[t.CONTEXT_LOST_WEBGL=37442]="CONTEXT_LOST_WEBGL",t[t.CW=2304]="CW",t[t.CCW=2305]="CCW",t[t.DONT_CARE=4352]="DONT_CARE",t[t.FASTEST=4353]="FASTEST",t[t.NICEST=4354]="NICEST",t[t.GENERATE_MIPMAP_HINT=33170]="GENERATE_MIPMAP_HINT",t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.INT=5124]="INT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.FLOAT=5126]="FLOAT",t[t.DOUBLE=5130]="DOUBLE",t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.ALPHA=6406]="ALPHA",t[t.RGB=6407]="RGB",t[t.RGBA=6408]="RGBA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",t[t.VERTEX_SHADER=35633]="VERTEX_SHADER",t[t.COMPILE_STATUS=35713]="COMPILE_STATUS",t[t.DELETE_STATUS=35712]="DELETE_STATUS",t[t.LINK_STATUS=35714]="LINK_STATUS",t[t.VALIDATE_STATUS=35715]="VALIDATE_STATUS",t[t.ATTACHED_SHADERS=35717]="ATTACHED_SHADERS",t[t.ACTIVE_ATTRIBUTES=35721]="ACTIVE_ATTRIBUTES",t[t.ACTIVE_UNIFORMS=35718]="ACTIVE_UNIFORMS",t[t.MAX_VERTEX_ATTRIBS=34921]="MAX_VERTEX_ATTRIBS",t[t.MAX_VERTEX_UNIFORM_VECTORS=36347]="MAX_VERTEX_UNIFORM_VECTORS",t[t.MAX_VARYING_VECTORS=36348]="MAX_VARYING_VECTORS",t[t.MAX_COMBINED_TEXTURE_IMAGE_UNITS=35661]="MAX_COMBINED_TEXTURE_IMAGE_UNITS",t[t.MAX_VERTEX_TEXTURE_IMAGE_UNITS=35660]="MAX_VERTEX_TEXTURE_IMAGE_UNITS",t[t.MAX_TEXTURE_IMAGE_UNITS=34930]="MAX_TEXTURE_IMAGE_UNITS",t[t.MAX_FRAGMENT_UNIFORM_VECTORS=36349]="MAX_FRAGMENT_UNIFORM_VECTORS",t[t.SHADER_TYPE=35663]="SHADER_TYPE",t[t.SHADING_LANGUAGE_VERSION=35724]="SHADING_LANGUAGE_VERSION",t[t.CURRENT_PROGRAM=35725]="CURRENT_PROGRAM",t[t.NEVER=512]="NEVER",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.GEQUAL=518]="GEQUAL",t[t.ALWAYS=519]="ALWAYS",t[t.KEEP=7680]="KEEP",t[t.REPLACE=7681]="REPLACE",t[t.INCR=7682]="INCR",t[t.DECR=7683]="DECR",t[t.INVERT=5386]="INVERT",t[t.INCR_WRAP=34055]="INCR_WRAP",t[t.DECR_WRAP=34056]="DECR_WRAP",t[t.NEAREST=9728]="NEAREST",t[t.LINEAR=9729]="LINEAR",t[t.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",t[t.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",t[t.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",t[t.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR",t[t.TEXTURE_MAG_FILTER=10240]="TEXTURE_MAG_FILTER",t[t.TEXTURE_MIN_FILTER=10241]="TEXTURE_MIN_FILTER",t[t.TEXTURE_WRAP_S=10242]="TEXTURE_WRAP_S",t[t.TEXTURE_WRAP_T=10243]="TEXTURE_WRAP_T",t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE=5890]="TEXTURE",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_BINDING_CUBE_MAP=34068]="TEXTURE_BINDING_CUBE_MAP",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",t[t.MAX_CUBE_MAP_TEXTURE_SIZE=34076]="MAX_CUBE_MAP_TEXTURE_SIZE",t[t.TEXTURE0=33984]="TEXTURE0",t[t.ACTIVE_TEXTURE=34016]="ACTIVE_TEXTURE",t[t.REPEAT=10497]="REPEAT",t[t.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",t[t.TEXTURE_WIDTH=4096]="TEXTURE_WIDTH",t[t.TEXTURE_HEIGHT=4097]="TEXTURE_HEIGHT",t[t.FLOAT_VEC2=35664]="FLOAT_VEC2",t[t.FLOAT_VEC3=35665]="FLOAT_VEC3",t[t.FLOAT_VEC4=35666]="FLOAT_VEC4",t[t.INT_VEC2=35667]="INT_VEC2",t[t.INT_VEC3=35668]="INT_VEC3",t[t.INT_VEC4=35669]="INT_VEC4",t[t.BOOL=35670]="BOOL",t[t.BOOL_VEC2=35671]="BOOL_VEC2",t[t.BOOL_VEC3=35672]="BOOL_VEC3",t[t.BOOL_VEC4=35673]="BOOL_VEC4",t[t.FLOAT_MAT2=35674]="FLOAT_MAT2",t[t.FLOAT_MAT3=35675]="FLOAT_MAT3",t[t.FLOAT_MAT4=35676]="FLOAT_MAT4",t[t.SAMPLER_2D=35678]="SAMPLER_2D",t[t.SAMPLER_CUBE=35680]="SAMPLER_CUBE",t[t.LOW_FLOAT=36336]="LOW_FLOAT",t[t.MEDIUM_FLOAT=36337]="MEDIUM_FLOAT",t[t.HIGH_FLOAT=36338]="HIGH_FLOAT",t[t.LOW_INT=36339]="LOW_INT",t[t.MEDIUM_INT=36340]="MEDIUM_INT",t[t.HIGH_INT=36341]="HIGH_INT",t[t.FRAMEBUFFER=36160]="FRAMEBUFFER",t[t.RENDERBUFFER=36161]="RENDERBUFFER",t[t.RGBA4=32854]="RGBA4",t[t.RGB5_A1=32855]="RGB5_A1",t[t.RGB565=36194]="RGB565",t[t.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",t[t.STENCIL_INDEX=6401]="STENCIL_INDEX",t[t.STENCIL_INDEX8=36168]="STENCIL_INDEX8",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.RENDERBUFFER_WIDTH=36162]="RENDERBUFFER_WIDTH",t[t.RENDERBUFFER_HEIGHT=36163]="RENDERBUFFER_HEIGHT",t[t.RENDERBUFFER_INTERNAL_FORMAT=36164]="RENDERBUFFER_INTERNAL_FORMAT",t[t.RENDERBUFFER_RED_SIZE=36176]="RENDERBUFFER_RED_SIZE",t[t.RENDERBUFFER_GREEN_SIZE=36177]="RENDERBUFFER_GREEN_SIZE",t[t.RENDERBUFFER_BLUE_SIZE=36178]="RENDERBUFFER_BLUE_SIZE",t[t.RENDERBUFFER_ALPHA_SIZE=36179]="RENDERBUFFER_ALPHA_SIZE",t[t.RENDERBUFFER_DEPTH_SIZE=36180]="RENDERBUFFER_DEPTH_SIZE",t[t.RENDERBUFFER_STENCIL_SIZE=36181]="RENDERBUFFER_STENCIL_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE=36048]="FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",t[t.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME=36049]="FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",t[t.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL=36050]="FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",t[t.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE=36051]="FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",t[t.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",t[t.DEPTH_ATTACHMENT=36096]="DEPTH_ATTACHMENT",t[t.STENCIL_ATTACHMENT=36128]="STENCIL_ATTACHMENT",t[t.DEPTH_STENCIL_ATTACHMENT=33306]="DEPTH_STENCIL_ATTACHMENT",t[t.NONE=0]="NONE",t[t.FRAMEBUFFER_COMPLETE=36053]="FRAMEBUFFER_COMPLETE",t[t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT=36054]="FRAMEBUFFER_INCOMPLETE_ATTACHMENT",t[t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT=36055]="FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",t[t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS=36057]="FRAMEBUFFER_INCOMPLETE_DIMENSIONS",t[t.FRAMEBUFFER_UNSUPPORTED=36061]="FRAMEBUFFER_UNSUPPORTED",t[t.FRAMEBUFFER_BINDING=36006]="FRAMEBUFFER_BINDING",t[t.RENDERBUFFER_BINDING=36007]="RENDERBUFFER_BINDING",t[t.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",t[t.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER",t[t.MAX_RENDERBUFFER_SIZE=34024]="MAX_RENDERBUFFER_SIZE",t[t.INVALID_FRAMEBUFFER_OPERATION=1286]="INVALID_FRAMEBUFFER_OPERATION",t[t.UNPACK_FLIP_Y_WEBGL=37440]="UNPACK_FLIP_Y_WEBGL",t[t.UNPACK_PREMULTIPLY_ALPHA_WEBGL=37441]="UNPACK_PREMULTIPLY_ALPHA_WEBGL",t[t.UNPACK_COLORSPACE_CONVERSION_WEBGL=37443]="UNPACK_COLORSPACE_CONVERSION_WEBGL",t[t.READ_BUFFER=3074]="READ_BUFFER",t[t.UNPACK_ROW_LENGTH=3314]="UNPACK_ROW_LENGTH",t[t.UNPACK_SKIP_ROWS=3315]="UNPACK_SKIP_ROWS",t[t.UNPACK_SKIP_PIXELS=3316]="UNPACK_SKIP_PIXELS",t[t.PACK_ROW_LENGTH=3330]="PACK_ROW_LENGTH",t[t.PACK_SKIP_ROWS=3331]="PACK_SKIP_ROWS",t[t.PACK_SKIP_PIXELS=3332]="PACK_SKIP_PIXELS",t[t.TEXTURE_BINDING_3D=32874]="TEXTURE_BINDING_3D",t[t.UNPACK_SKIP_IMAGES=32877]="UNPACK_SKIP_IMAGES",t[t.UNPACK_IMAGE_HEIGHT=32878]="UNPACK_IMAGE_HEIGHT",t[t.MAX_3D_TEXTURE_SIZE=32883]="MAX_3D_TEXTURE_SIZE",t[t.MAX_ELEMENTS_VERTICES=33e3]="MAX_ELEMENTS_VERTICES",t[t.MAX_ELEMENTS_INDICES=33001]="MAX_ELEMENTS_INDICES",t[t.MAX_TEXTURE_LOD_BIAS=34045]="MAX_TEXTURE_LOD_BIAS",t[t.MAX_FRAGMENT_UNIFORM_COMPONENTS=35657]="MAX_FRAGMENT_UNIFORM_COMPONENTS",t[t.MAX_VERTEX_UNIFORM_COMPONENTS=35658]="MAX_VERTEX_UNIFORM_COMPONENTS",t[t.MAX_ARRAY_TEXTURE_LAYERS=35071]="MAX_ARRAY_TEXTURE_LAYERS",t[t.MIN_PROGRAM_TEXEL_OFFSET=35076]="MIN_PROGRAM_TEXEL_OFFSET",t[t.MAX_PROGRAM_TEXEL_OFFSET=35077]="MAX_PROGRAM_TEXEL_OFFSET",t[t.MAX_VARYING_COMPONENTS=35659]="MAX_VARYING_COMPONENTS",t[t.FRAGMENT_SHADER_DERIVATIVE_HINT=35723]="FRAGMENT_SHADER_DERIVATIVE_HINT",t[t.RASTERIZER_DISCARD=35977]="RASTERIZER_DISCARD",t[t.VERTEX_ARRAY_BINDING=34229]="VERTEX_ARRAY_BINDING",t[t.MAX_VERTEX_OUTPUT_COMPONENTS=37154]="MAX_VERTEX_OUTPUT_COMPONENTS",t[t.MAX_FRAGMENT_INPUT_COMPONENTS=37157]="MAX_FRAGMENT_INPUT_COMPONENTS",t[t.MAX_SERVER_WAIT_TIMEOUT=37137]="MAX_SERVER_WAIT_TIMEOUT",t[t.MAX_ELEMENT_INDEX=36203]="MAX_ELEMENT_INDEX",t[t.RED=6403]="RED",t[t.RGB8=32849]="RGB8",t[t.RGBA8=32856]="RGBA8",t[t.RGB10_A2=32857]="RGB10_A2",t[t.TEXTURE_3D=32879]="TEXTURE_3D",t[t.TEXTURE_WRAP_R=32882]="TEXTURE_WRAP_R",t[t.TEXTURE_MIN_LOD=33082]="TEXTURE_MIN_LOD",t[t.TEXTURE_MAX_LOD=33083]="TEXTURE_MAX_LOD",t[t.TEXTURE_BASE_LEVEL=33084]="TEXTURE_BASE_LEVEL",t[t.TEXTURE_MAX_LEVEL=33085]="TEXTURE_MAX_LEVEL",t[t.TEXTURE_COMPARE_MODE=34892]="TEXTURE_COMPARE_MODE",t[t.TEXTURE_COMPARE_FUNC=34893]="TEXTURE_COMPARE_FUNC",t[t.SRGB=35904]="SRGB",t[t.SRGB8=35905]="SRGB8",t[t.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",t[t.COMPARE_REF_TO_TEXTURE=34894]="COMPARE_REF_TO_TEXTURE",t[t.RGBA32F=34836]="RGBA32F",t[t.RGB32F=34837]="RGB32F",t[t.RGBA16F=34842]="RGBA16F",t[t.RGB16F=34843]="RGB16F",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",t[t.TEXTURE_BINDING_2D_ARRAY=35869]="TEXTURE_BINDING_2D_ARRAY",t[t.R11F_G11F_B10F=35898]="R11F_G11F_B10F",t[t.RGB9_E5=35901]="RGB9_E5",t[t.RGBA32UI=36208]="RGBA32UI",t[t.RGB32UI=36209]="RGB32UI",t[t.RGBA16UI=36214]="RGBA16UI",t[t.RGB16UI=36215]="RGB16UI",t[t.RGBA8UI=36220]="RGBA8UI",t[t.RGB8UI=36221]="RGB8UI",t[t.RGBA32I=36226]="RGBA32I",t[t.RGB32I=36227]="RGB32I",t[t.RGBA16I=36232]="RGBA16I",t[t.RGB16I=36233]="RGB16I",t[t.RGBA8I=36238]="RGBA8I",t[t.RGB8I=36239]="RGB8I",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER",t[t.R8=33321]="R8",t[t.RG8=33323]="RG8",t[t.R16F=33325]="R16F",t[t.R32F=33326]="R32F",t[t.RG16F=33327]="RG16F",t[t.RG32F=33328]="RG32F",t[t.R8I=33329]="R8I",t[t.R8UI=33330]="R8UI",t[t.R16I=33331]="R16I",t[t.R16UI=33332]="R16UI",t[t.R32I=33333]="R32I",t[t.R32UI=33334]="R32UI",t[t.RG8I=33335]="RG8I",t[t.RG8UI=33336]="RG8UI",t[t.RG16I=33337]="RG16I",t[t.RG16UI=33338]="RG16UI",t[t.RG32I=33339]="RG32I",t[t.RG32UI=33340]="RG32UI",t[t.R8_SNORM=36756]="R8_SNORM",t[t.RG8_SNORM=36757]="RG8_SNORM",t[t.RGB8_SNORM=36758]="RGB8_SNORM",t[t.RGBA8_SNORM=36759]="RGBA8_SNORM",t[t.RGB10_A2UI=36975]="RGB10_A2UI",t[t.TEXTURE_IMMUTABLE_FORMAT=37167]="TEXTURE_IMMUTABLE_FORMAT",t[t.TEXTURE_IMMUTABLE_LEVELS=33503]="TEXTURE_IMMUTABLE_LEVELS",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.HALF_FLOAT=5131]="HALF_FLOAT",t[t.RG=33319]="RG",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.INT_2_10_10_10_REV=36255]="INT_2_10_10_10_REV",t[t.CURRENT_QUERY=34917]="CURRENT_QUERY",t[t.QUERY_RESULT=34918]="QUERY_RESULT",t[t.QUERY_RESULT_AVAILABLE=34919]="QUERY_RESULT_AVAILABLE",t[t.ANY_SAMPLES_PASSED=35887]="ANY_SAMPLES_PASSED",t[t.ANY_SAMPLES_PASSED_CONSERVATIVE=36202]="ANY_SAMPLES_PASSED_CONSERVATIVE",t[t.MAX_DRAW_BUFFERS=34852]="MAX_DRAW_BUFFERS",t[t.DRAW_BUFFER0=34853]="DRAW_BUFFER0",t[t.DRAW_BUFFER1=34854]="DRAW_BUFFER1",t[t.DRAW_BUFFER2=34855]="DRAW_BUFFER2",t[t.DRAW_BUFFER3=34856]="DRAW_BUFFER3",t[t.DRAW_BUFFER4=34857]="DRAW_BUFFER4",t[t.DRAW_BUFFER5=34858]="DRAW_BUFFER5",t[t.DRAW_BUFFER6=34859]="DRAW_BUFFER6",t[t.DRAW_BUFFER7=34860]="DRAW_BUFFER7",t[t.DRAW_BUFFER8=34861]="DRAW_BUFFER8",t[t.DRAW_BUFFER9=34862]="DRAW_BUFFER9",t[t.DRAW_BUFFER10=34863]="DRAW_BUFFER10",t[t.DRAW_BUFFER11=34864]="DRAW_BUFFER11",t[t.DRAW_BUFFER12=34865]="DRAW_BUFFER12",t[t.DRAW_BUFFER13=34866]="DRAW_BUFFER13",t[t.DRAW_BUFFER14=34867]="DRAW_BUFFER14",t[t.DRAW_BUFFER15=34868]="DRAW_BUFFER15",t[t.MAX_COLOR_ATTACHMENTS=36063]="MAX_COLOR_ATTACHMENTS",t[t.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",t[t.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",t[t.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",t[t.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",t[t.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",t[t.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",t[t.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",t[t.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",t[t.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",t[t.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",t[t.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",t[t.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",t[t.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",t[t.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",t[t.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15",t[t.SAMPLER_3D=35679]="SAMPLER_3D",t[t.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",t[t.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",t[t.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",t[t.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",t[t.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",t[t.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",t[t.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",t[t.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",t[t.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",t[t.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",t[t.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",t[t.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY",t[t.MAX_SAMPLES=36183]="MAX_SAMPLES",t[t.SAMPLER_BINDING=35097]="SAMPLER_BINDING",t[t.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",t[t.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",t[t.PIXEL_PACK_BUFFER_BINDING=35053]="PIXEL_PACK_BUFFER_BINDING",t[t.PIXEL_UNPACK_BUFFER_BINDING=35055]="PIXEL_UNPACK_BUFFER_BINDING",t[t.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",t[t.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",t[t.COPY_READ_BUFFER_BINDING=36662]="COPY_READ_BUFFER_BINDING",t[t.COPY_WRITE_BUFFER_BINDING=36663]="COPY_WRITE_BUFFER_BINDING",t[t.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",t[t.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",t[t.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",t[t.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",t[t.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",t[t.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",t[t.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",t[t.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",t[t.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",t[t.UNSIGNED_NORMALIZED=35863]="UNSIGNED_NORMALIZED",t[t.SIGNED_NORMALIZED=36764]="SIGNED_NORMALIZED",t[t.VERTEX_ATTRIB_ARRAY_INTEGER=35069]="VERTEX_ATTRIB_ARRAY_INTEGER",t[t.VERTEX_ATTRIB_ARRAY_DIVISOR=35070]="VERTEX_ATTRIB_ARRAY_DIVISOR",t[t.TRANSFORM_FEEDBACK_BUFFER_MODE=35967]="TRANSFORM_FEEDBACK_BUFFER_MODE",t[t.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS=35968]="MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS",t[t.TRANSFORM_FEEDBACK_VARYINGS=35971]="TRANSFORM_FEEDBACK_VARYINGS",t[t.TRANSFORM_FEEDBACK_BUFFER_START=35972]="TRANSFORM_FEEDBACK_BUFFER_START",t[t.TRANSFORM_FEEDBACK_BUFFER_SIZE=35973]="TRANSFORM_FEEDBACK_BUFFER_SIZE",t[t.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN=35976]="TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN",t[t.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS=35978]="MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS",t[t.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS=35979]="MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS",t[t.INTERLEAVED_ATTRIBS=35980]="INTERLEAVED_ATTRIBS",t[t.SEPARATE_ATTRIBS=35981]="SEPARATE_ATTRIBS",t[t.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER",t[t.TRANSFORM_FEEDBACK_BUFFER_BINDING=35983]="TRANSFORM_FEEDBACK_BUFFER_BINDING",t[t.TRANSFORM_FEEDBACK=36386]="TRANSFORM_FEEDBACK",t[t.TRANSFORM_FEEDBACK_PAUSED=36387]="TRANSFORM_FEEDBACK_PAUSED",t[t.TRANSFORM_FEEDBACK_ACTIVE=36388]="TRANSFORM_FEEDBACK_ACTIVE",t[t.TRANSFORM_FEEDBACK_BINDING=36389]="TRANSFORM_FEEDBACK_BINDING",t[t.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING=33296]="FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING",t[t.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE=33297]="FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE",t[t.FRAMEBUFFER_ATTACHMENT_RED_SIZE=33298]="FRAMEBUFFER_ATTACHMENT_RED_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE=33299]="FRAMEBUFFER_ATTACHMENT_GREEN_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE=33300]="FRAMEBUFFER_ATTACHMENT_BLUE_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE=33301]="FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE=33302]="FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE",t[t.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE=33303]="FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE",t[t.FRAMEBUFFER_DEFAULT=33304]="FRAMEBUFFER_DEFAULT",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.DRAW_FRAMEBUFFER_BINDING=36006]="DRAW_FRAMEBUFFER_BINDING",t[t.READ_FRAMEBUFFER_BINDING=36010]="READ_FRAMEBUFFER_BINDING",t[t.RENDERBUFFER_SAMPLES=36011]="RENDERBUFFER_SAMPLES",t[t.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER=36052]="FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER",t[t.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE=36182]="FRAMEBUFFER_INCOMPLETE_MULTISAMPLE",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",t[t.UNIFORM_BUFFER_BINDING=35368]="UNIFORM_BUFFER_BINDING",t[t.UNIFORM_BUFFER_START=35369]="UNIFORM_BUFFER_START",t[t.UNIFORM_BUFFER_SIZE=35370]="UNIFORM_BUFFER_SIZE",t[t.MAX_VERTEX_UNIFORM_BLOCKS=35371]="MAX_VERTEX_UNIFORM_BLOCKS",t[t.MAX_FRAGMENT_UNIFORM_BLOCKS=35373]="MAX_FRAGMENT_UNIFORM_BLOCKS",t[t.MAX_COMBINED_UNIFORM_BLOCKS=35374]="MAX_COMBINED_UNIFORM_BLOCKS",t[t.MAX_UNIFORM_BUFFER_BINDINGS=35375]="MAX_UNIFORM_BUFFER_BINDINGS",t[t.MAX_UNIFORM_BLOCK_SIZE=35376]="MAX_UNIFORM_BLOCK_SIZE",t[t.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS=35377]="MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS",t[t.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS=35379]="MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS",t[t.UNIFORM_BUFFER_OFFSET_ALIGNMENT=35380]="UNIFORM_BUFFER_OFFSET_ALIGNMENT",t[t.ACTIVE_UNIFORM_BLOCKS=35382]="ACTIVE_UNIFORM_BLOCKS",t[t.UNIFORM_TYPE=35383]="UNIFORM_TYPE",t[t.UNIFORM_SIZE=35384]="UNIFORM_SIZE",t[t.UNIFORM_BLOCK_INDEX=35386]="UNIFORM_BLOCK_INDEX",t[t.UNIFORM_OFFSET=35387]="UNIFORM_OFFSET",t[t.UNIFORM_ARRAY_STRIDE=35388]="UNIFORM_ARRAY_STRIDE",t[t.UNIFORM_MATRIX_STRIDE=35389]="UNIFORM_MATRIX_STRIDE",t[t.UNIFORM_IS_ROW_MAJOR=35390]="UNIFORM_IS_ROW_MAJOR",t[t.UNIFORM_BLOCK_BINDING=35391]="UNIFORM_BLOCK_BINDING",t[t.UNIFORM_BLOCK_DATA_SIZE=35392]="UNIFORM_BLOCK_DATA_SIZE",t[t.UNIFORM_BLOCK_ACTIVE_UNIFORMS=35394]="UNIFORM_BLOCK_ACTIVE_UNIFORMS",t[t.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES=35395]="UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES",t[t.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER=35396]="UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER",t[t.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER=35398]="UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER",t[t.OBJECT_TYPE=37138]="OBJECT_TYPE",t[t.SYNC_CONDITION=37139]="SYNC_CONDITION",t[t.SYNC_STATUS=37140]="SYNC_STATUS",t[t.SYNC_FLAGS=37141]="SYNC_FLAGS",t[t.SYNC_FENCE=37142]="SYNC_FENCE",t[t.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE",t[t.UNSIGNALED=37144]="UNSIGNALED",t[t.SIGNALED=37145]="SIGNALED",t[t.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",t[t.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",t[t.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",t[t.WAIT_FAILED=37149]="WAIT_FAILED",t[t.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT",t[t.COLOR=6144]="COLOR",t[t.DEPTH=6145]="DEPTH",t[t.STENCIL=6146]="STENCIL",t[t.MIN=32775]="MIN",t[t.MAX=32776]="MAX",t[t.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",t[t.STREAM_READ=35041]="STREAM_READ",t[t.STREAM_COPY=35042]="STREAM_COPY",t[t.STATIC_READ=35045]="STATIC_READ",t[t.STATIC_COPY=35046]="STATIC_COPY",t[t.DYNAMIC_READ=35049]="DYNAMIC_READ",t[t.DYNAMIC_COPY=35050]="DYNAMIC_COPY",t[t.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",t[t.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8",t[t.INVALID_INDEX=4294967295]="INVALID_INDEX",t[t.TIMEOUT_IGNORED=-1]="TIMEOUT_IGNORED",t[t.MAX_CLIENT_WAIT_TIMEOUT_WEBGL=37447]="MAX_CLIENT_WAIT_TIMEOUT_WEBGL",t[t.UNMASKED_VENDOR_WEBGL=37445]="UNMASKED_VENDOR_WEBGL",t[t.UNMASKED_RENDERER_WEBGL=37446]="UNMASKED_RENDERER_WEBGL",t[t.MAX_TEXTURE_MAX_ANISOTROPY_EXT=34047]="MAX_TEXTURE_MAX_ANISOTROPY_EXT",t[t.TEXTURE_MAX_ANISOTROPY_EXT=34046]="TEXTURE_MAX_ANISOTROPY_EXT",t[t.R16_EXT=33322]="R16_EXT",t[t.RG16_EXT=33324]="RG16_EXT",t[t.RGB16_EXT=32852]="RGB16_EXT",t[t.RGBA16_EXT=32859]="RGBA16_EXT",t[t.R16_SNORM_EXT=36760]="R16_SNORM_EXT",t[t.RG16_SNORM_EXT=36761]="RG16_SNORM_EXT",t[t.RGB16_SNORM_EXT=36762]="RGB16_SNORM_EXT",t[t.RGBA16_SNORM_EXT=36763]="RGBA16_SNORM_EXT",t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",t[t.COMPRESSED_RED_RGTC1_EXT=36283]="COMPRESSED_RED_RGTC1_EXT",t[t.COMPRESSED_SIGNED_RED_RGTC1_EXT=36284]="COMPRESSED_SIGNED_RED_RGTC1_EXT",t[t.COMPRESSED_RED_GREEN_RGTC2_EXT=36285]="COMPRESSED_RED_GREEN_RGTC2_EXT",t[t.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT=36286]="COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT",t[t.COMPRESSED_RGBA_BPTC_UNORM_EXT=36492]="COMPRESSED_RGBA_BPTC_UNORM_EXT",t[t.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT=36493]="COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT",t[t.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT=36494]="COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT",t[t.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT=36495]="COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37493]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ETC2=37494]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37495]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37496]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37497]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",t[t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",t[t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",t[t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",t[t.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",t[t.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",t[t.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",t[t.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL",t[t.COMPRESSED_RGBA_ASTC_4x4_KHR=37808]="COMPRESSED_RGBA_ASTC_4x4_KHR",t[t.COMPRESSED_RGBA_ASTC_5x4_KHR=37809]="COMPRESSED_RGBA_ASTC_5x4_KHR",t[t.COMPRESSED_RGBA_ASTC_5x5_KHR=37810]="COMPRESSED_RGBA_ASTC_5x5_KHR",t[t.COMPRESSED_RGBA_ASTC_6x5_KHR=37811]="COMPRESSED_RGBA_ASTC_6x5_KHR",t[t.COMPRESSED_RGBA_ASTC_6x6_KHR=37812]="COMPRESSED_RGBA_ASTC_6x6_KHR",t[t.COMPRESSED_RGBA_ASTC_8x5_KHR=37813]="COMPRESSED_RGBA_ASTC_8x5_KHR",t[t.COMPRESSED_RGBA_ASTC_8x6_KHR=37814]="COMPRESSED_RGBA_ASTC_8x6_KHR",t[t.COMPRESSED_RGBA_ASTC_8x8_KHR=37815]="COMPRESSED_RGBA_ASTC_8x8_KHR",t[t.COMPRESSED_RGBA_ASTC_10x5_KHR=37816]="COMPRESSED_RGBA_ASTC_10x5_KHR",t[t.COMPRESSED_RGBA_ASTC_10x6_KHR=37817]="COMPRESSED_RGBA_ASTC_10x6_KHR",t[t.COMPRESSED_RGBA_ASTC_10x8_KHR=37818]="COMPRESSED_RGBA_ASTC_10x8_KHR",t[t.COMPRESSED_RGBA_ASTC_10x10_KHR=37819]="COMPRESSED_RGBA_ASTC_10x10_KHR",t[t.COMPRESSED_RGBA_ASTC_12x10_KHR=37820]="COMPRESSED_RGBA_ASTC_12x10_KHR",t[t.COMPRESSED_RGBA_ASTC_12x12_KHR=37821]="COMPRESSED_RGBA_ASTC_12x12_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR=37840]="COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR=37841]="COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR=37842]="COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR=37843]="COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR=37844]="COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR=37845]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR=37846]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR=37847]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR=37848]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR=37849]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR=37850]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR=37851]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR=37852]="COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR=37853]="COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR",t[t.QUERY_COUNTER_BITS_EXT=34916]="QUERY_COUNTER_BITS_EXT",t[t.CURRENT_QUERY_EXT=34917]="CURRENT_QUERY_EXT",t[t.QUERY_RESULT_EXT=34918]="QUERY_RESULT_EXT",t[t.QUERY_RESULT_AVAILABLE_EXT=34919]="QUERY_RESULT_AVAILABLE_EXT",t[t.TIME_ELAPSED_EXT=35007]="TIME_ELAPSED_EXT",t[t.TIMESTAMP_EXT=36392]="TIMESTAMP_EXT",t[t.GPU_DISJOINT_EXT=36795]="GPU_DISJOINT_EXT",t[t.COMPLETION_STATUS_KHR=37297]="COMPLETION_STATUS_KHR",t[t.DEPTH_CLAMP_EXT=34383]="DEPTH_CLAMP_EXT",t[t.FIRST_VERTEX_CONVENTION_WEBGL=36429]="FIRST_VERTEX_CONVENTION_WEBGL",t[t.LAST_VERTEX_CONVENTION_WEBGL=36430]="LAST_VERTEX_CONVENTION_WEBGL",t[t.PROVOKING_VERTEX_WEBL=36431]="PROVOKING_VERTEX_WEBL",t[t.POLYGON_MODE_WEBGL=2880]="POLYGON_MODE_WEBGL",t[t.POLYGON_OFFSET_LINE_WEBGL=10754]="POLYGON_OFFSET_LINE_WEBGL",t[t.LINE_WEBGL=6913]="LINE_WEBGL",t[t.FILL_WEBGL=6914]="FILL_WEBGL",t[t.MAX_CLIP_DISTANCES_WEBGL=3378]="MAX_CLIP_DISTANCES_WEBGL",t[t.MAX_CULL_DISTANCES_WEBGL=33529]="MAX_CULL_DISTANCES_WEBGL",t[t.MAX_COMBINED_CLIP_AND_CULL_DISTANCES_WEBGL=33530]="MAX_COMBINED_CLIP_AND_CULL_DISTANCES_WEBGL",t[t.CLIP_DISTANCE0_WEBGL=12288]="CLIP_DISTANCE0_WEBGL",t[t.CLIP_DISTANCE1_WEBGL=12289]="CLIP_DISTANCE1_WEBGL",t[t.CLIP_DISTANCE2_WEBGL=12290]="CLIP_DISTANCE2_WEBGL",t[t.CLIP_DISTANCE3_WEBGL=12291]="CLIP_DISTANCE3_WEBGL",t[t.CLIP_DISTANCE4_WEBGL=12292]="CLIP_DISTANCE4_WEBGL",t[t.CLIP_DISTANCE5_WEBGL=12293]="CLIP_DISTANCE5_WEBGL",t[t.CLIP_DISTANCE6_WEBGL=12294]="CLIP_DISTANCE6_WEBGL",t[t.CLIP_DISTANCE7_WEBGL=12295]="CLIP_DISTANCE7_WEBGL",t[t.POLYGON_OFFSET_CLAMP_EXT=36379]="POLYGON_OFFSET_CLAMP_EXT",t[t.LOWER_LEFT_EXT=36001]="LOWER_LEFT_EXT",t[t.UPPER_LEFT_EXT=36002]="UPPER_LEFT_EXT",t[t.NEGATIVE_ONE_TO_ONE_EXT=37726]="NEGATIVE_ONE_TO_ONE_EXT",t[t.ZERO_TO_ONE_EXT=37727]="ZERO_TO_ONE_EXT",t[t.CLIP_ORIGIN_EXT=37724]="CLIP_ORIGIN_EXT",t[t.CLIP_DEPTH_MODE_EXT=37725]="CLIP_DEPTH_MODE_EXT",t[t.SRC1_COLOR_WEBGL=35065]="SRC1_COLOR_WEBGL",t[t.SRC1_ALPHA_WEBGL=34185]="SRC1_ALPHA_WEBGL",t[t.ONE_MINUS_SRC1_COLOR_WEBGL=35066]="ONE_MINUS_SRC1_COLOR_WEBGL",t[t.ONE_MINUS_SRC1_ALPHA_WEBGL=35067]="ONE_MINUS_SRC1_ALPHA_WEBGL",t[t.MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL=35068]="MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL",t[t.MIRROR_CLAMP_TO_EDGE_EXT=34627]="MIRROR_CLAMP_TO_EDGE_EXT"})(ei||(ei={}))});var pm=A(()=>{fm()});function gm(t=!0){let e=HTMLCanvasElement.prototype;if(!t&&e.originalGetContext){e.getContext=e.originalGetContext,e.originalGetContext=void 0;return}e.originalGetContext=e.getContext,e.getContext=function(i,r){if(i==="webgl"||i==="experimental-webgl"){let n=this.originalGetContext("webgl2",r);return n instanceof HTMLElement&&WA(n),n}return this.originalGetContext(i,r)}}function WA(t){t.getExtension("EXT_color_buffer_float");let e={...OA,WEBGL_disjoint_timer_query:t.getExtension("EXT_disjoint_timer_query_webgl2"),WEBGL_draw_buffers:UA(t),OES_vertex_array_object:LA(t),ANGLE_instanced_arrays:zA(t)},i=t.getExtension;t.getExtension=function(n){let o=i.call(t,n);return o||(n in e?e[n]:null)};let r=t.getSupportedExtensions;t.getSupportedExtensions=function(){return(r.apply(t)||[])?.concat(Object.keys(e))}}var OA,UA,LA,zA,mm=A(()=>{OA={WEBGL_depth_texture:{UNSIGNED_INT_24_8_WEBGL:34042},OES_element_index_uint:{},OES_texture_float:{},OES_texture_half_float:{HALF_FLOAT_OES:5131},EXT_color_buffer_float:{},OES_standard_derivatives:{FRAGMENT_SHADER_DERIVATIVE_HINT_OES:35723},EXT_frag_depth:{},EXT_blend_minmax:{MIN_EXT:32775,MAX_EXT:32776},EXT_shader_texture_lod:{}},UA=t=>({drawBuffersWEBGL(e){return t.drawBuffers(e)},COLOR_ATTACHMENT0_WEBGL:36064,COLOR_ATTACHMENT1_WEBGL:36065,COLOR_ATTACHMENT2_WEBGL:36066,COLOR_ATTACHMENT3_WEBGL:36067}),LA=t=>({VERTEX_ARRAY_BINDING_OES:34229,createVertexArrayOES(){return t.createVertexArray()},deleteVertexArrayOES(e){return t.deleteVertexArray(e)},isVertexArrayOES(e){return t.isVertexArray(e)},bindVertexArrayOES(e){return t.bindVertexArray(e)}}),zA=t=>({VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE:35070,drawArraysInstancedANGLE(...e){return t.drawArraysInstanced(...e)},drawElementsInstancedANGLE(...e){return t.drawElementsInstanced(...e)},vertexAttribDivisorANGLE(...e){return t.vertexAttribDivisor(...e)}})});async function Xo(t,e){let i=document.getElementsByTagName("head")[0];if(!i)throw new Error("loadScript");let r=document.createElement("script");return r.setAttribute("type","text/javascript"),r.setAttribute("src",t),e&&(r.id=e),new Promise((n,o)=>{r.onload=n,r.onerror=s=>o(new Error(`Unable to load script '${t}': ${s}`)),i.appendChild(r)})}var $c=A(()=>{});function Ai(t){let e=t.luma||{_polyfilled:!1,extensions:{},softwareRenderer:!1};return e._polyfilled??=!1,e.extensions||={},t.luma=e,e}var Go=A(()=>{});async function ym(t){if(!globalThis.SPECTOR)try{await Xo(t.debugSpectorJSUrl||Yo.debugSpectorJSUrl)}catch(e){_.warn(String(e))}}function Sm(t){if(t={...Yo,...t},!t.debugSpectorJS)return null;if(!Ve&&globalThis.SPECTOR&&!globalThis.luma?.spector){_.probe(VA,"SPECTOR found and initialized. Start with `luma.spector.displayUI()`")();let{Spector:e}=globalThis.SPECTOR;Ve=new e,globalThis.luma&&(globalThis.luma.spector=Ve)}if(!Ve)return null;if(xm||(xm=!0,Ve.spyCanvases(),Ve?.onCaptureStarted.add(e=>_.info("Spector capture started:",e)()),Ve?.onCapture.add(e=>{_.info("Spector capture complete:",e)(),Ve?.getResultUI(),Ve?.resultView.display(),Ve?.resultView.addCapture(e)})),t.gl){let e=t.gl,i=Ai(e),r=i.device;Ve?.startCapture(t.gl,500),i.device=r,new Promise(n=>setTimeout(n,2e3)).then(n=>{_.info("Spector capture stopped after 2 seconds")(),Ve?.stopCapture()})}return Ve}var VA,Ve,xm,Yo,Xc=A(()=>{ee();$c();Go();VA=1,Ve=null,xm=!1,Yo={debugSpectorJS:_.get("debug-spectorjs"),debugSpectorJSUrl:"https://cdn.jsdelivr.net/npm/spectorjs@0.9.30/dist/spector.bundle.js",gl:void 0}});function bm(t){return t.luma=t.luma||{},t.luma}async function _m(){Ee()&&!globalThis.WebGLDebugUtils&&(globalThis.global=globalThis.global||globalThis,globalThis.global.module={},await Xo(HA))}function Tm(t,e={}){return e.debugWebGL||e.traceWebGL?XA(t,e):$A(t)}function $A(t){let e=bm(t);return e.realContext?e.realContext:t}function XA(t,e){if(!globalThis.WebGLDebugUtils)return _.warn("webgl-debug not loaded")(),t;let i=bm(t);if(i.debugContext)return i.debugContext;globalThis.WebGLDebugUtils.init({...ei,...t});let r=globalThis.WebGLDebugUtils.makeDebugContext(t,GA.bind(null,e),YA.bind(null,e));for(let s in ei)!(s in r)&&typeof ei[s]=="number"&&(r[s]=ei[s]);class n{}Object.setPrototypeOf(r,Object.getPrototypeOf(t)),Object.setPrototypeOf(n,r);let o=Object.create(n);return i.realContext=t,i.debugContext=o,o.luma=i,o.debug=!0,o}function vm(t,e){e=Array.from(e).map(r=>r===void 0?"undefined":r);let i=globalThis.WebGLDebugUtils.glFunctionArgsToString(t,e);return i=`${i.slice(0,100)}${i.length>100?"...":""}`,`gl.${t}(${i})`}function GA(t,e,i,r){r=Array.from(r).map(a=>a===void 0?"undefined":a);let n=globalThis.WebGLDebugUtils.glEnumToString(e),o=globalThis.WebGLDebugUtils.glFunctionArgsToString(i,r),s=`${n} in gl.${i}(${o})`;_.error("%cWebGL","color: white; background: red; padding: 2px 6px; border-radius: 3px;",s)();debugger;throw new Error(s)}function YA(t,e,i){let r="";t.traceWebGL&&_.level>=1&&(r=vm(e,i),_.info(1,"%cWebGL","color: white; background: blue; padding: 2px 6px; border-radius: 3px;",r)());for(let n of i)if(n===void 0){r=r||vm(e,i);debugger}}var HA,Gc=A(()=>{ee();pm();Gt();$c();HA="https://unpkg.com/webgl-debug@2.0.1/index.js"});function Yc(t){return Array.isArray(t)||ArrayBuffer.isView(t)&&!(t instanceof DataView)}function fe(t,e,i){return e[t]!==void 0?e[t]:i[t]}var dn,ye,Pm,He,Cm,un,Am,wm,jc,Tt,Kc,Rm,qc=A(()=>{dn={3042:!1,32773:new Float32Array([0,0,0,0]),32777:32774,34877:32774,32969:1,32968:0,32971:1,32970:0,3106:new Float32Array([0,0,0,0]),3107:[!0,!0,!0,!0],2884:!1,2885:1029,2929:!1,2931:1,2932:513,2928:new Float32Array([0,1]),2930:!0,3024:!0,35725:null,36006:null,36007:null,34229:null,34964:null,2886:2305,33170:4352,2849:1,32823:!1,32824:0,10752:0,32926:!1,32928:!1,32938:1,32939:!1,3089:!1,3088:new Int32Array([0,0,1024,1024]),2960:!1,2961:0,2968:4294967295,36005:4294967295,2962:519,2967:0,2963:4294967295,34816:519,36003:0,36004:4294967295,2964:7680,2965:7680,2966:7680,34817:7680,34818:7680,34819:7680,2978:[0,0,1024,1024],36389:null,36662:null,36663:null,35053:null,35055:null,35723:4352,36010:null,35977:!1,3333:4,3317:4,37440:!1,37441:!1,37443:37444,3330:0,3332:0,3331:0,3314:0,32878:0,3316:0,3315:0,32877:0},ye=(t,e,i)=>e?t.enable(i):t.disable(i),Pm=(t,e,i)=>t.hint(i,e),He=(t,e,i)=>t.pixelStorei(i,e),Cm=(t,e,i)=>{let r=i===36006?36009:36008;return t.bindFramebuffer(r,e)},un=(t,e,i)=>{let n={34964:34962,36662:36662,36663:36663,35053:35051,35055:35052}[i];t.bindBuffer(n,e)};Am={3042:ye,32773:(t,e)=>t.blendColor(...e),32777:"blendEquation",34877:"blendEquation",32969:"blendFunc",32968:"blendFunc",32971:"blendFunc",32970:"blendFunc",3106:(t,e)=>t.clearColor(...e),3107:(t,e)=>t.colorMask(...e),2884:ye,2885:(t,e)=>t.cullFace(e),2929:ye,2931:(t,e)=>t.clearDepth(e),2932:(t,e)=>t.depthFunc(e),2928:(t,e)=>t.depthRange(...e),2930:(t,e)=>t.depthMask(e),3024:ye,35723:Pm,35725:(t,e)=>t.useProgram(e),36007:(t,e)=>t.bindRenderbuffer(36161,e),36389:(t,e)=>t.bindTransformFeedback?.(36386,e),34229:(t,e)=>t.bindVertexArray(e),36006:Cm,36010:Cm,34964:un,36662:un,36663:un,35053:un,35055:un,2886:(t,e)=>t.frontFace(e),33170:Pm,2849:(t,e)=>t.lineWidth(e),32823:ye,32824:"polygonOffset",10752:"polygonOffset",35977:ye,32926:ye,32928:ye,32938:"sampleCoverage",32939:"sampleCoverage",3089:ye,3088:(t,e)=>t.scissor(...e),2960:ye,2961:(t,e)=>t.clearStencil(e),2968:(t,e)=>t.stencilMaskSeparate(1028,e),36005:(t,e)=>t.stencilMaskSeparate(1029,e),2962:"stencilFuncFront",2967:"stencilFuncFront",2963:"stencilFuncFront",34816:"stencilFuncBack",36003:"stencilFuncBack",36004:"stencilFuncBack",2964:"stencilOpFront",2965:"stencilOpFront",2966:"stencilOpFront",34817:"stencilOpBack",34818:"stencilOpBack",34819:"stencilOpBack",2978:(t,e)=>t.viewport(...e),34383:ye,10754:ye,12288:ye,12289:ye,12290:ye,12291:ye,12292:ye,12293:ye,12294:ye,12295:ye,3333:He,3317:He,37440:He,37441:He,37443:He,3330:He,3332:He,3331:He,3314:He,32878:He,3316:He,3315:He,32877:He,framebuffer:(t,e)=>{let i=e&&"handle"in e?e.handle:e;return t.bindFramebuffer(36160,i)},blend:(t,e)=>e?t.enable(3042):t.disable(3042),blendColor:(t,e)=>t.blendColor(...e),blendEquation:(t,e)=>{let i=typeof e=="number"?[e,e]:e;t.blendEquationSeparate(...i)},blendFunc:(t,e)=>{let i=e?.length===2?[...e,...e]:e;t.blendFuncSeparate(...i)},clearColor:(t,e)=>t.clearColor(...e),clearDepth:(t,e)=>t.clearDepth(e),clearStencil:(t,e)=>t.clearStencil(e),colorMask:(t,e)=>t.colorMask(...e),cull:(t,e)=>e?t.enable(2884):t.disable(2884),cullFace:(t,e)=>t.cullFace(e),depthTest:(t,e)=>e?t.enable(2929):t.disable(2929),depthFunc:(t,e)=>t.depthFunc(e),depthMask:(t,e)=>t.depthMask(e),depthRange:(t,e)=>t.depthRange(...e),dither:(t,e)=>e?t.enable(3024):t.disable(3024),derivativeHint:(t,e)=>{t.hint(35723,e)},frontFace:(t,e)=>t.frontFace(e),mipmapHint:(t,e)=>t.hint(33170,e),lineWidth:(t,e)=>t.lineWidth(e),polygonOffsetFill:(t,e)=>e?t.enable(32823):t.disable(32823),polygonOffset:(t,e)=>t.polygonOffset(...e),sampleCoverage:(t,e)=>t.sampleCoverage(e[0],e[1]||!1),scissorTest:(t,e)=>e?t.enable(3089):t.disable(3089),scissor:(t,e)=>t.scissor(...e),stencilTest:(t,e)=>e?t.enable(2960):t.disable(2960),stencilMask:(t,e)=>{e=Yc(e)?e:[e,e];let[i,r]=e;t.stencilMaskSeparate(1028,i),t.stencilMaskSeparate(1029,r)},stencilFunc:(t,e)=>{e=Yc(e)&&e.length===3?[...e,...e]:e;let[i,r,n,o,s,a]=e;t.stencilFuncSeparate(1028,i,r,n),t.stencilFuncSeparate(1029,o,s,a)},stencilOp:(t,e)=>{e=Yc(e)&&e.length===3?[...e,...e]:e;let[i,r,n,o,s,a]=e;t.stencilOpSeparate(1028,i,r,n),t.stencilOpSeparate(1029,o,s,a)},viewport:(t,e)=>t.viewport(...e)};wm={blendEquation:(t,e,i)=>t.blendEquationSeparate(fe(32777,e,i),fe(34877,e,i)),blendFunc:(t,e,i)=>t.blendFuncSeparate(fe(32969,e,i),fe(32968,e,i),fe(32971,e,i),fe(32970,e,i)),polygonOffset:(t,e,i)=>t.polygonOffset(fe(32824,e,i),fe(10752,e,i)),sampleCoverage:(t,e,i)=>t.sampleCoverage(fe(32938,e,i),fe(32939,e,i)),stencilFuncFront:(t,e,i)=>t.stencilFuncSeparate(1028,fe(2962,e,i),fe(2967,e,i),fe(2963,e,i)),stencilFuncBack:(t,e,i)=>t.stencilFuncSeparate(1029,fe(34816,e,i),fe(36003,e,i),fe(36004,e,i)),stencilOpFront:(t,e,i)=>t.stencilOpSeparate(1028,fe(2964,e,i),fe(2965,e,i),fe(2966,e,i)),stencilOpBack:(t,e,i)=>t.stencilOpSeparate(1029,fe(34817,e,i),fe(34818,e,i),fe(34819,e,i))},jc={enable:(t,e)=>t({[e]:!0}),disable:(t,e)=>t({[e]:!1}),pixelStorei:(t,e,i)=>t({[e]:i}),hint:(t,e,i)=>t({[e]:i}),useProgram:(t,e)=>t({35725:e}),bindRenderbuffer:(t,e,i)=>t({36007:i}),bindTransformFeedback:(t,e,i)=>t({36389:i}),bindVertexArray:(t,e)=>t({34229:e}),bindFramebuffer:(t,e,i)=>{switch(e){case 36160:return t({36006:i,36010:i});case 36009:return t({36006:i});case 36008:return t({36010:i});default:return null}},bindBuffer:(t,e,i)=>{let r={34962:[34964],36662:[36662],36663:[36663],35051:[35053],35052:[35055]}[e];return r?t({[r]:i}):{valueChanged:!0}},blendColor:(t,e,i,r,n)=>t({32773:new Float32Array([e,i,r,n])}),blendEquation:(t,e)=>t({32777:e,34877:e}),blendEquationSeparate:(t,e,i)=>t({32777:e,34877:i}),blendFunc:(t,e,i)=>t({32969:e,32968:i,32971:e,32970:i}),blendFuncSeparate:(t,e,i,r,n)=>t({32969:e,32968:i,32971:r,32970:n}),clearColor:(t,e,i,r,n)=>t({3106:new Float32Array([e,i,r,n])}),clearDepth:(t,e)=>t({2931:e}),clearStencil:(t,e)=>t({2961:e}),colorMask:(t,e,i,r,n)=>t({3107:[e,i,r,n]}),cullFace:(t,e)=>t({2885:e}),depthFunc:(t,e)=>t({2932:e}),depthRange:(t,e,i)=>t({2928:new Float32Array([e,i])}),depthMask:(t,e)=>t({2930:e}),frontFace:(t,e)=>t({2886:e}),lineWidth:(t,e)=>t({2849:e}),polygonOffset:(t,e,i)=>t({32824:e,10752:i}),sampleCoverage:(t,e,i)=>t({32938:e,32939:i}),scissor:(t,e,i,r,n)=>t({3088:new Int32Array([e,i,r,n])}),stencilMask:(t,e)=>t({2968:e,36005:e}),stencilMaskSeparate:(t,e,i)=>t({[e===1028?2968:36005]:i}),stencilFunc:(t,e,i,r)=>t({2962:e,2967:i,2963:r,34816:e,36003:i,36004:r}),stencilFuncSeparate:(t,e,i,r,n)=>t({[e===1028?2962:34816]:i,[e===1028?2967:36003]:r,[e===1028?2963:36004]:n}),stencilOp:(t,e,i,r)=>t({2964:e,2965:i,2966:r,34817:e,34818:i,34819:r}),stencilOpSeparate:(t,e,i,r,n)=>t({[e===1028?2964:34817]:i,[e===1028?2965:34818]:r,[e===1028?2966:34819]:n}),viewport:(t,e,i,r,n)=>t({2978:[e,i,r,n]})},Tt=(t,e)=>t.isEnabled(e),Kc={3042:Tt,2884:Tt,2929:Tt,3024:Tt,32823:Tt,32926:Tt,32928:Tt,3089:Tt,2960:Tt,35977:Tt},Rm=new Set([34016,36388,36387,35983,35368,34965,35739,35738,3074,34853,34854,34855,34856,34857,34858,34859,34860,34861,34862,34863,34864,34865,34866,34867,34868,35097,32873,35869,32874,34068])});function at(t,e){if(jA(e))return;let i={};for(let n in e){let o=Number(n),s=Am[n];s&&(typeof s=="string"?i[s]=!0:s(t,e[n],o))}let r=t.lumaState?.cache;if(r)for(let n in i){let o=wm[n];o(t,e,r)}}function jo(t,e=dn){if(typeof e=="number"){let n=e,o=Kc[n];return o?o(t,n):t.getParameter(n)}let i=Array.isArray(e)?e:Object.keys(e),r={};for(let n of i){let o=Kc[n];r[n]=o?o(t,Number(n)):t.getParameter(Number(n))}return r}function km(t){at(t,dn)}function jA(t){for(let e in t)return!1;return!0}var nr=A(()=>{qc()});function Im(t,e){if(t===e)return!0;if(Em(t)&&Em(e)&&t.length===e.length){for(let i=0;i<t.length;++i)if(t[i]!==e[i])return!1;return!0}return!1}function Em(t){return Array.isArray(t)||ArrayBuffer.isView(t)}var Dm=A(()=>{});function Fm(t,e){let i=t[e].bind(t);t[e]=function(n){if(n===void 0||Rm.has(n))return i(n);let o=Be.get(t);return n in o.cache||(o.cache[n]=i(n)),o.enable?o.cache[n]:i(n)},Object.defineProperty(t[e],"name",{value:`${e}-from-cache`,configurable:!1})}function KA(t,e,i){if(!t[e])return;let r=t[e].bind(t);t[e]=function(...o){let s=Be.get(t),{valueChanged:a,oldValue:l}=i(s._updateCache,...o);return a&&r(...o),l},Object.defineProperty(t[e],"name",{value:`${e}-to-cache`,configurable:!1})}function qA(t){let e=t.useProgram.bind(t);t.useProgram=function(r){let n=Be.get(t);n.program!==r&&(e(r),n.program=r)}}var Be,Ko=A(()=>{nr();Dm();qc();Be=class{static get(e){return e.lumaState}gl;program=null;stateStack=[];enable=!0;cache=null;log;initialized=!1;constructor(e,i){this.gl=e,this.log=i?.log||(()=>{}),this._updateCache=this._updateCache.bind(this),Object.seal(this)}push(e={}){this.stateStack.push({})}pop(){let e=this.stateStack[this.stateStack.length-1];at(this.gl,e),this.stateStack.pop()}trackState(e,i){if(this.cache=i?.copyState?jo(e):Object.assign({},dn),this.initialized)throw new Error("WebGLStateTracker");this.initialized=!0,this.gl.lumaState=this,qA(e);for(let r in jc){let n=jc[r];KA(e,r,n)}Fm(e,"getParameter"),Fm(e,"isEnabled")}_updateCache(e){let i=!1,r,n=this.stateStack.length>0?this.stateStack[this.stateStack.length-1]:null;for(let o in e){let s=e[o],a=this.cache[o];Im(s,a)||(i=!0,r=a,n&&!(o in n)&&(n[o]=a),this.cache[o]=s)}return{valueChanged:i,oldValue:r}}}});function Mm(t,e,i){let r="",n=l=>{let c=l.statusMessage;c&&(r||=c)};t.addEventListener("webglcontextcreationerror",n,!1);let o=i.failIfMajorPerformanceCaveat!==!0,s={preserveDrawingBuffer:!0,...i,failIfMajorPerformanceCaveat:!0},a=null;try{a||=t.getContext("webgl2",s),!a&&s.failIfMajorPerformanceCaveat&&(r||="Only software GPU is available. Set `failIfMajorPerformanceCaveat: false` to allow.");let l=!1;if(!a&&o&&(s.failIfMajorPerformanceCaveat=!1,a=t.getContext("webgl2",s),l=!0),a||(a=t.getContext("webgl",{}),a&&(a=null,r||="Your browser only supports WebGL1")),!a)throw r||="Your browser does not support WebGL",new Error(`Failed to create WebGL context: ${r}`);let c=Ai(a);c.softwareRenderer=l;let{onContextLost:u,onContextRestored:d}=e;return t.addEventListener("webglcontextlost",h=>u(h),!1),t.addEventListener("webglcontextrestored",h=>d(h),!1),a}finally{t.removeEventListener("webglcontextcreationerror",n,!1)}}var Nm=A(()=>{Go()});function lt(t,e,i){return i[e]===void 0&&(i[e]=t.getExtension(e)||null),i[e]}var hn=A(()=>{});function Bm(t,e){let i=t.getParameter(7936),r=t.getParameter(7937);lt(t,"WEBGL_debug_renderer_info",e);let n=e.WEBGL_debug_renderer_info,o=t.getParameter(n?n.UNMASKED_VENDOR_WEBGL:7936),s=t.getParameter(n?n.UNMASKED_RENDERER_WEBGL:7937),a=o||i,l=s||r,c=t.getParameter(7938),u=Om(a,l),d=ZA(a,l),h=QA(a,l);return{type:"webgl",gpu:u,gpuType:h,gpuBackend:d,vendor:a,renderer:l,version:c,shadingLanguage:"glsl",shadingLanguageVersion:300}}function Om(t,e){return/NVIDIA/i.exec(t)||/NVIDIA/i.exec(e)?"nvidia":/INTEL/i.exec(t)||/INTEL/i.exec(e)?"intel":/Apple/i.exec(t)||/Apple/i.exec(e)?"apple":/AMD/i.exec(t)||/AMD/i.exec(e)||/ATI/i.exec(t)||/ATI/i.exec(e)?"amd":/SwiftShader/i.exec(t)||/SwiftShader/i.exec(e)?"software":"unknown"}function ZA(t,e){return/Metal/i.exec(t)||/Metal/i.exec(e)?"metal":/ANGLE/i.exec(t)||/ANGLE/i.exec(e)?"opengl":"unknown"}function QA(t,e){if(/SwiftShader/i.exec(t)||/SwiftShader/i.exec(e))return"cpu";switch(Om(t,e)){case"apple":return JA(t,e)?"integrated":"unknown";case"intel":return"integrated";case"software":return"cpu";case"unknown":return"unknown";default:return"discrete"}}function JA(t,e){return/Apple (M\d|A\d|GPU)/i.test(`${t} ${e}`)}var Um=A(()=>{hn()});function qo(t){switch(t){case"uint8":return 5121;case"sint8":return 5120;case"unorm8":return 5121;case"snorm8":return 5120;case"uint16":return 5123;case"sint16":return 5122;case"unorm16":return 5123;case"snorm16":return 5122;case"uint32":return 5125;case"sint32":return 5124;case"float16":return 5131;case"float32":return 5126}throw new Error(String(t))}var Zc=A(()=>{});function Wm(t){return t in Qo}function iu(t,e,i){return Vm(t,e,i,new Set)}function Vm(t,e,i,r){let n=Qo[e];if(!n||r.has(e))return!1;r.add(e);let o=(n.features||[]).every(s=>Vm(t,s,i,r));return r.delete(e),o?(n.extensions||[]).every(s=>!!lt(t,s,i)):!1}function Hm(t,e,i){let r=e.create,n=Jo[e.format];n?.gl===void 0&&(r=!1),n?.x&&(r=r&&!!lt(t,n.x,i)),e.format==="stencil8"&&(r=!1);let o=n?.r===!1?!1:n?.r===void 0||iu(t,n.r,i),s=r&&e.render&&o&&aw(t,e.format,i);return{format:e.format,create:r&&e.create,render:s,filter:r&&e.filter,blend:r&&e.blend,store:r&&e.store}}function aw(t,e,i){let r=Jo[e],n=r?.gl;if(n===void 0||r?.x&&!lt(t,r.x,i))return!1;let o=t.getParameter(32873),s=t.getParameter(36006),a=t.createTexture(),l=t.createFramebuffer();if(!a||!l)return!1;let c=0,u=Number(t.getError());for(;u!==c;)u=t.getError();let d=!1;try{if(t.bindTexture(3553,a),t.texStorage2D(3553,1,n,1,1),Number(t.getError())!==c)return!1;t.bindFramebuffer(36160,l),t.framebufferTexture2D(36160,36064,3553,a,0),d=Number(t.checkFramebufferStatus(36160))===36053&&Number(t.getError())===c}finally{t.bindFramebuffer(36160,s),t.deleteFramebuffer(l),t.bindTexture(3553,o),t.deleteTexture(a)}return d}function es(t){let e=Jo[t],i=cw(t),r=Ae.getInfo(t);return r.compressed&&(e.dataFormat=i),{internalFormat:i,format:e?.dataFormat||lw(r.channels,r.integer,r.normalized,i),type:r.dataType?qo(r.dataType):e?.types?.[0]||5121,compressed:r.compressed||!1}}function $m(t){switch(Ae.getInfo(t).attachment){case"depth":return 36096;case"stencil":return 36128;case"depth-stencil":return 33306;default:throw new Error(`Not a depth stencil format: ${t}`)}}function lw(t,e,i,r){if(r===6408||r===6407)return r;switch(t){case"r":return e&&!i?36244:6403;case"rg":return e&&!i?33320:33319;case"rgb":return e&&!i?36248:6407;case"rgba":return e&&!i?36249:6408;case"bgra":throw new Error("bgra pixels not supported by WebGL");default:return 6408}}function cw(t){let i=Jo[t]?.gl;if(i===void 0)throw new Error(`Unsupported texture format ${t}`);return i}var fn,pn,or,sr,ew,tw,iw,rw,nw,ow,Lm,zm,Qc,Jc,eu,tu,Zo,sw,Qo,Jo,ar=A(()=>{ee();hn();Zc();fn="WEBGL_compressed_texture_s3tc",pn="WEBGL_compressed_texture_s3tc_srgb",or="EXT_texture_compression_rgtc",sr="EXT_texture_compression_bptc",ew="WEBGL_compressed_texture_etc",tw="WEBGL_compressed_texture_astc",iw="WEBGL_compressed_texture_etc1",rw="WEBGL_compressed_texture_pvrtc",nw="WEBGL_compressed_texture_atc",ow="EXT_texture_norm16",Lm="EXT_render_snorm",zm="EXT_color_buffer_float",Qc="snorm8-renderable-webgl",Jc="norm16-renderable-webgl",eu="snorm16-renderable-webgl",tu="float16-renderable-webgl",Zo="float32-renderable-webgl",sw="rgb9e5ufloat-renderable-webgl",Qo={"float32-renderable-webgl":{extensions:[zm]},"float16-renderable-webgl":{extensions:["EXT_color_buffer_half_float"]},"rgb9e5ufloat-renderable-webgl":{extensions:["WEBGL_render_shared_exponent"]},"snorm8-renderable-webgl":{extensions:[Lm]},"norm16-webgl":{extensions:[ow]},"norm16-renderable-webgl":{features:["norm16-webgl"]},"snorm16-renderable-webgl":{features:["norm16-webgl"],extensions:[Lm]},"float32-filterable":{extensions:["OES_texture_float_linear"]},"float16-filterable-webgl":{extensions:["OES_texture_half_float_linear"]},"texture-filterable-anisotropic-webgl":{extensions:["EXT_texture_filter_anisotropic"]},"texture-blend-float-webgl":{extensions:["EXT_float_blend"]},"texture-compression-bc":{extensions:[fn,pn,or,sr]},"texture-compression-bc5-webgl":{extensions:[or]},"texture-compression-bc7-webgl":{extensions:[sr]},"texture-compression-etc2":{extensions:[ew]},"texture-compression-astc":{extensions:[tw]},"texture-compression-etc1-webgl":{extensions:[iw]},"texture-compression-pvrtc-webgl":{extensions:[rw]},"texture-compression-atc-webgl":{extensions:[nw]}};Jo={r8unorm:{gl:33321,rb:!0},r8snorm:{gl:36756,r:Qc},r8uint:{gl:33330,rb:!0},r8sint:{gl:33329,rb:!0},rg8unorm:{gl:33323,rb:!0},rg8snorm:{gl:36757,r:Qc},rg8uint:{gl:33336,rb:!0},rg8sint:{gl:33335,rb:!0},r16uint:{gl:33332,rb:!0},r16sint:{gl:33331,rb:!0},r16float:{gl:33325,rb:!0,r:tu},r16unorm:{gl:33322,rb:!0,r:Jc},r16snorm:{gl:36760,r:eu},"rgba4unorm-webgl":{gl:32854,rb:!0},"rgb565unorm-webgl":{gl:36194,rb:!0},"rgb5a1unorm-webgl":{gl:32855,rb:!0},"rgb8unorm-webgl":{gl:32849},"rgb8snorm-webgl":{gl:36758},rgba8unorm:{gl:32856},"rgba8unorm-srgb":{gl:35907},rgba8snorm:{gl:36759,r:Qc},rgba8uint:{gl:36220},rgba8sint:{gl:36238},bgra8unorm:{},"bgra8unorm-srgb":{},rg16uint:{gl:33338},rg16sint:{gl:33337},rg16float:{gl:33327,rb:!0,r:tu},rg16unorm:{gl:33324,r:Jc},rg16snorm:{gl:36761,r:eu},r32uint:{gl:33334,rb:!0},r32sint:{gl:33333,rb:!0},r32float:{gl:33326,r:Zo},rgb9e5ufloat:{gl:35901,r:sw},rg11b10ufloat:{gl:35898,rb:!0},rgb10a2unorm:{gl:32857,rb:!0},rgb10a2uint:{gl:36975,rb:!0},"rgb16unorm-webgl":{gl:32852,r:!1},"rgb16snorm-webgl":{gl:36762,r:!1},rg32uint:{gl:33340,rb:!0},rg32sint:{gl:33339,rb:!0},rg32float:{gl:33328,rb:!0,r:Zo},rgba16uint:{gl:36214,rb:!0},rgba16sint:{gl:36232,rb:!0},rgba16float:{gl:34842,r:tu},rgba16unorm:{gl:32859,rb:!0,r:Jc},rgba16snorm:{gl:36763,r:eu},"rgb32float-webgl":{gl:34837,x:zm,r:Zo,dataFormat:6407,types:[5126]},rgba32uint:{gl:36208,rb:!0},rgba32sint:{gl:36226,rb:!0},rgba32float:{gl:34836,rb:!0,r:Zo},stencil8:{gl:36168,rb:!0},depth16unorm:{gl:33189,dataFormat:6402,types:[5123],rb:!0},depth24plus:{gl:33190,dataFormat:6402,types:[5125]},depth32float:{gl:36012,dataFormat:6402,types:[5126],rb:!0},"depth24plus-stencil8":{gl:35056,rb:!0,depthTexture:!0,dataFormat:34041,types:[34042]},"depth32float-stencil8":{gl:36013,dataFormat:34041,types:[36269],rb:!0},"bc1-rgb-unorm-webgl":{gl:33776,x:fn},"bc1-rgb-unorm-srgb-webgl":{gl:35916,x:pn},"bc1-rgba-unorm":{gl:33777,x:fn},"bc1-rgba-unorm-srgb":{gl:35916,x:pn},"bc2-rgba-unorm":{gl:33778,x:fn},"bc2-rgba-unorm-srgb":{gl:35918,x:pn},"bc3-rgba-unorm":{gl:33779,x:fn},"bc3-rgba-unorm-srgb":{gl:35919,x:pn},"bc4-r-unorm":{gl:36283,x:or},"bc4-r-snorm":{gl:36284,x:or},"bc5-rg-unorm":{gl:36285,x:or},"bc5-rg-snorm":{gl:36286,x:or},"bc6h-rgb-ufloat":{gl:36495,x:sr},"bc6h-rgb-float":{gl:36494,x:sr},"bc7-rgba-unorm":{gl:36492,x:sr},"bc7-rgba-unorm-srgb":{gl:36493,x:sr},"etc2-rgb8unorm":{gl:37492},"etc2-rgb8unorm-srgb":{gl:37494},"etc2-rgb8a1unorm":{gl:37496},"etc2-rgb8a1unorm-srgb":{gl:37497},"etc2-rgba8unorm":{gl:37493},"etc2-rgba8unorm-srgb":{gl:37495},"eac-r11unorm":{gl:37488},"eac-r11snorm":{gl:37489},"eac-rg11unorm":{gl:37490},"eac-rg11snorm":{gl:37491},"astc-4x4-unorm":{gl:37808},"astc-4x4-unorm-srgb":{gl:37840},"astc-5x4-unorm":{gl:37809},"astc-5x4-unorm-srgb":{gl:37841},"astc-5x5-unorm":{gl:37810},"astc-5x5-unorm-srgb":{gl:37842},"astc-6x5-unorm":{gl:37811},"astc-6x5-unorm-srgb":{gl:37843},"astc-6x6-unorm":{gl:37812},"astc-6x6-unorm-srgb":{gl:37844},"astc-8x5-unorm":{gl:37813},"astc-8x5-unorm-srgb":{gl:37845},"astc-8x6-unorm":{gl:37814},"astc-8x6-unorm-srgb":{gl:37846},"astc-8x8-unorm":{gl:37815},"astc-8x8-unorm-srgb":{gl:37847},"astc-10x5-unorm":{gl:37816},"astc-10x5-unorm-srgb":{gl:37848},"astc-10x6-unorm":{gl:37817},"astc-10x6-unorm-srgb":{gl:37849},"astc-10x8-unorm":{gl:37818},"astc-10x8-unorm-srgb":{gl:37850},"astc-10x10-unorm":{gl:37819},"astc-10x10-unorm-srgb":{gl:37851},"astc-12x10-unorm":{gl:37820},"astc-12x10-unorm-srgb":{gl:37852},"astc-12x12-unorm":{gl:37821},"astc-12x12-unorm-srgb":{gl:37853},"pvrtc-rgb4unorm-webgl":{gl:35840},"pvrtc-rgba4unorm-webgl":{gl:35842},"pvrtc-rgb2unorm-webgl":{gl:35841},"pvrtc-rgba2unorm-webgl":{gl:35843},"etc1-rbg-unorm-webgl":{gl:36196},"atc-rgb-unorm-webgl":{gl:35986},"atc-rgba-unorm-webgl":{gl:35986},"atc-rgbai-unorm-webgl":{gl:34798}}});var Xm,ts,Gm=A(()=>{ee();hn();ar();Xm={"depth-clip-control":"EXT_depth_clamp","timestamp-query":"EXT_disjoint_timer_query_webgl2","compilation-status-async-webgl":"KHR_parallel_shader_compile","polygon-mode-webgl":"WEBGL_polygon_mode","provoking-vertex-webgl":"WEBGL_provoking_vertex","shader-clip-cull-distance-webgl":"WEBGL_clip_cull_distance","shader-noperspective-interpolation-webgl":"NV_shader_noperspective_interpolation","shader-conservative-depth-webgl":"EXT_conservative_depth"},ts=class extends Or{gl;extensions;testedFeatures=new Set;constructor(e,i,r){super([],r),this.gl=e,this.extensions=i,lt(e,"EXT_color_buffer_float",i)}*[Symbol.iterator](){let e=this.getFeatures();for(let i of e)this.has(i)&&(yield i);return[]}has(e){return this.disabledFeatures?.[e]?!1:(this.testedFeatures.has(e)||(this.testedFeatures.add(e),Wm(e)&&iu(this.gl,e,this.extensions)&&this.features.add(e),this.getWebGLFeature(e)&&this.features.add(e)),this.features.has(e))}initializeFeatures(){let e=this.getFeatures().filter(i=>i!=="polygon-mode-webgl");for(let i of e)this.has(i)}getFeatures(){return[...Object.keys(Xm),...Object.keys(Qo)]}getWebGLFeature(e){let i=Xm[e];return typeof i=="string"?!!lt(this.gl,i,this.extensions):!!i}}});var is,Ym=A(()=>{ee();is=class extends Br{get maxTextureDimension1D(){return 0}get maxTextureDimension2D(){return this.getParameter(3379)}get maxTextureDimension3D(){return this.getParameter(32883)}get maxTextureArrayLayers(){return this.getParameter(35071)}get maxBindGroups(){return 0}get maxDynamicUniformBuffersPerPipelineLayout(){return 0}get maxDynamicStorageBuffersPerPipelineLayout(){return 0}get maxSampledTexturesPerShaderStage(){return this.getParameter(35660)}get maxSamplersPerShaderStage(){return this.getParameter(35661)}get maxStorageBuffersPerShaderStage(){return 0}get maxStorageTexturesPerShaderStage(){return 0}get maxUniformBuffersPerShaderStage(){return this.getParameter(35375)}get maxUniformBufferBindingSize(){return this.getParameter(35376)}get maxStorageBufferBindingSize(){return 0}get minUniformBufferOffsetAlignment(){return this.getParameter(35380)}get minStorageBufferOffsetAlignment(){return 0}get maxVertexBuffers(){return 16}get maxVertexAttributes(){return this.getParameter(34921)}get maxVertexBufferArrayStride(){return 2048}get maxInterStageShaderVariables(){return this.getParameter(35659)}get maxComputeWorkgroupStorageSize(){return 0}get maxComputeInvocationsPerWorkgroup(){return 0}get maxComputeWorkgroupSizeX(){return 0}get maxComputeWorkgroupSizeY(){return 0}get maxComputeWorkgroupSizeZ(){return 0}get maxComputeWorkgroupsPerDimension(){return 0}gl;limits={};constructor(e){super(),this.gl=e}getParameter(e){return this.limits[e]===void 0&&(this.limits[e]=this.gl.getParameter(e)),this.limits[e]||0}}});function uw(t){return t<34069?t+34069:t}function dw(t){switch(t){case 36053:return"success";case 36054:return"Mismatched attachments";case 36055:return"No attachments";case 36057:return"Height/width mismatch";case 36061:return"Unsupported or split attachments";case 36182:return"Samples mismatch";default:return`${t}`}}var Pt,rs=A(()=>{ee();ar();Pt=class extends bi{device;gl;handle;colorAttachments=[];depthStencilAttachment=null;constructor(e,i){super(e,i);let r=i.handle===null;this.device=e,this.gl=e.gl,this.handle=this.props.handle||r?this.props.handle:this.gl.createFramebuffer(),r||(e._setWebGLDebugMetadata(this.handle,this,{spector:this.props}),i.handle||(this.autoCreateAttachmentTextures(),this.updateAttachments()))}destroy(){super.destroy(),!this.destroyed&&this.handle!==null&&!this.props.handle&&this.gl.deleteFramebuffer(this.handle)}updateAttachments(){let e=this.gl.bindFramebuffer(36160,this.handle);for(let i=0;i<this.colorAttachments.length;++i){let r=this.colorAttachments[i];if(r){let n=36064+i;this._attachTextureView(n,r)}}if(this.depthStencilAttachment){let i=$m(this.depthStencilAttachment.props.format);this._attachTextureView(i,this.depthStencilAttachment)}if(this.device.props.debug){let i=this.gl.checkFramebufferStatus(36160);if(i!==36053)throw new Error(`Framebuffer ${dw(i)}`)}this.gl.bindFramebuffer(36160,e)}_attachTextureView(e,i){let{gl:r}=this.device,{texture:n}=i,o=i.props.baseMipLevel,s=i.props.baseArrayLayer;switch(r.bindTexture(n.glTarget,n.handle),n.glTarget){case 35866:case 32879:r.framebufferTextureLayer(36160,e,n.handle,o,s);break;case 34067:let a=uw(s);r.framebufferTexture2D(36160,e,a,n.handle,o);break;case 3553:r.framebufferTexture2D(36160,e,3553,n.handle,o);break;default:throw new Error("Illegal texture type")}r.bindTexture(n.glTarget,null)}resizeAttachments(e,i){if(this.handle===null){this.width=e,this.height=i;return}super.resizeAttachments(e,i)}}});var ns,jm=A(()=>{ee();rs();ns=class extends Lr{device;handle=null;_framebuffer=null;get[Symbol.toStringTag](){return"WebGLCanvasContext"}constructor(e,i){super(i),this.device=e,this._setAutoCreatedCanvasId(`${this.device.id}-canvas`),this._configureDevice()}_configureDevice(){(this.drawingBufferWidth!==this._framebuffer?.width||this.drawingBufferHeight!==this._framebuffer?.height)&&this._framebuffer?.resize([this.drawingBufferWidth,this.drawingBufferHeight])}_getCurrentFramebuffer(){return this._framebuffer||=new Pt(this.device,{id:"canvas-context-framebuffer",handle:null,width:this.drawingBufferWidth,height:this.drawingBufferHeight}),this._framebuffer}}});var os,Km=A(()=>{ee();os=class extends zr{device;handle=null;context2d;get[Symbol.toStringTag](){return"WebGLPresentationContext"}constructor(e,i={}){super(i),this.device=e;let r=`${this[Symbol.toStringTag]}(${this.id})`;if(!this.device.getDefaultCanvasContext().offscreenCanvas)throw new Error(`${r}: WebGL PresentationContext requires the default CanvasContext canvas to be an OffscreenCanvas`);let o=this.canvas.getContext("2d");if(!o)throw new Error(`${r}: Failed to create 2d presentation context`);this.context2d=o,this._setAutoCreatedCanvasId(`${this.device.id}-presentation-canvas`),this._configureDevice(),this._startObservers()}present(){this._resizeDrawingBufferIfNeeded(),this.device.submit();let e=this.device.getDefaultCanvasContext(),[i,r]=e.getDrawingBufferSize();if(!(this.drawingBufferWidth===0||this.drawingBufferHeight===0||i===0||r===0||e.canvas.width===0||e.canvas.height===0)){if(i!==this.drawingBufferWidth||r!==this.drawingBufferHeight||e.canvas.width!==this.drawingBufferWidth||e.canvas.height!==this.drawingBufferHeight)throw new Error(`${this[Symbol.toStringTag]}(${this.id}): Default canvas context size ${i}x${r} does not match presentation size ${this.drawingBufferWidth}x${this.drawingBufferHeight}`);this.context2d.clearRect(0,0,this.drawingBufferWidth,this.drawingBufferHeight),this.context2d.drawImage(e.canvas,0,0)}}_configureDevice(){}_getCurrentFramebuffer(e){let i=this.device.getDefaultCanvasContext();return i.setDrawingBufferSize(this.drawingBufferWidth,this.drawingBufferHeight),i.getCurrentFramebuffer(e)}}});function qm(t="id"){ru[t]=ru[t]||1;let e=ru[t]++;return`${t}-${e}`}var ru,Zm=A(()=>{ru={}});function hw(t){return t&N.INDEX?34963:t&N.VERTEX?34962:t&N.UNIFORM?35345:34962}function fw(t){return t&N.INDEX||t&N.VERTEX?35044:t&N.UNIFORM?35048:35044}var ct,ss=A(()=>{ee();ct=class extends N{device;gl;handle;glTarget;glUsage;glIndexType=5123;byteLength=0;bytesUsed=0;constructor(e,i={}){super(e,i),this.device=e,this.gl=this.device.gl;let r=typeof i=="object"?i.handle:void 0;this.handle=r||this.gl.createBuffer(),e._setWebGLDebugMetadata(this.handle,this,{spector:{...this.props,data:typeof this.props.data}}),this.glTarget=hw(this.props.usage),this.glUsage=fw(this.props.usage),this.glIndexType=this.props.indexType==="uint32"?5125:5123,i.data?this._initWithData(i.data,i.byteOffset,i.byteLength):this._initWithByteLength(i.byteLength||0)}destroy(){!this.destroyed&&this.handle&&(this.removeStats(),this.props.handle?this.trackDeallocatedReferencedMemory("Buffer"):(this.trackDeallocatedMemory(),this.gl.deleteBuffer(this.handle)),this.destroyed=!0,this.handle=null)}_initWithData(e,i=0,r=e.byteLength+i){let n=this.glTarget;this.gl.bindBuffer(n,this.handle),this.gl.bufferData(n,r,this.glUsage),this.gl.bufferSubData(n,i,e),this.gl.bindBuffer(n,null),this.bytesUsed=r,this.byteLength=r,this._setDebugData(e,i,r),this.props.handle?this.trackReferencedMemory(r,"Buffer"):this.trackAllocatedMemory(r)}_initWithByteLength(e){let i=e;e===0&&(i=new Float32Array(0));let r=this.glTarget;return this.gl.bindBuffer(r,this.handle),this.gl.bufferData(r,i,this.glUsage),this.gl.bindBuffer(r,null),this.bytesUsed=e,this.byteLength=e,this._setDebugData(null,0,e),this.props.handle?this.trackReferencedMemory(e,"Buffer"):this.trackAllocatedMemory(e),this}write(e,i=0){let r=ArrayBuffer.isView(e)?e:new Uint8Array(e),n=0,o=void 0,s=36663;this.gl.bindBuffer(s,this.handle),n!==0||o!==void 0?this.gl.bufferSubData(s,i,r,n,o):this.gl.bufferSubData(s,i,r),this.gl.bindBuffer(s,null),this._setDebugData(e,i,e.byteLength)}async mapAndWriteAsync(e,i=0,r=this.byteLength-i){let n=new ArrayBuffer(r);await e(n,"copied"),this.write(n,i)}async readAsync(e=0,i){return this.readSyncWebGL(e,i)}async mapAndReadAsync(e,i=0,r){let n=await this.readAsync(i,r);return await e(n.buffer,"copied")}readSyncWebGL(e=0,i){i=i??this.byteLength-e;let r=new Uint8Array(i),n=0;return this.gl.bindBuffer(36662,this.handle),this.gl.getBufferSubData(36662,e,r,n,i),this.gl.bindBuffer(36662,null),this._setDebugData(r,e,i),r}}});function Qm(t){let e=t.split(/\r?\n/),i=[];for(let r of e){if(r.length<=1)continue;let n=r.trim(),o=r.split(":"),s=o[0]?.trim();if(o.length===2){let[f,g]=o;if(!f||!g){i.push({message:n,type:as(s||"info"),lineNum:0,linePos:0});continue}i.push({message:g.trim(),type:as(f),lineNum:0,linePos:0});continue}let[a,l,c,...u]=o;if(!a||!l||!c){i.push({message:o.slice(1).join(":").trim()||n,type:as(s||"info"),lineNum:0,linePos:0});continue}let d=parseInt(c,10);Number.isNaN(d)&&(d=0);let h=parseInt(l,10);Number.isNaN(h)&&(h=0),i.push({message:u.join(":").trim(),type:as(a),lineNum:d,linePos:h})}return i}function as(t){let e=["warning","error","info"],i=t.toLowerCase();return e.includes(i)?i:"info"}var Jm=A(()=>{});var ls,ex=A(()=>{ee();Jm();ls=class extends vi{device;handle;constructor(e,i){switch(super(e,i),this.device=e,this.props.stage){case"vertex":this.handle=this.props.handle||this.device.gl.createShader(35633);break;case"fragment":this.handle=this.props.handle||this.device.gl.createShader(35632);break;default:throw new Error(this.props.stage)}e._setWebGLDebugMetadata(this.handle,this,{spector:this.props});let r=this._compile(this.source);r&&typeof r.catch=="function"&&r.catch(()=>{this.compilationStatus="error"})}destroy(){this.handle&&(this.removeStats(),this.device.gl.deleteShader(this.handle),this.destroyed=!0,this.handle.destroyed=!0)}get asyncCompilationStatus(){return this._waitForCompilationComplete().then(()=>(this._getCompilationStatus(),this.compilationStatus))}async getCompilationInfo(){return await this._waitForCompilationComplete(),this.getCompilationInfoSync()}getCompilationInfoSync(){let e=this.device.gl.getShaderInfoLog(this.handle);return e?Qm(e):[]}getTranslatedSource(){return this.device.getExtension("WEBGL_debug_shaders").WEBGL_debug_shaders?.getTranslatedShaderSource(this.handle)||null}_compile(e){e=e.startsWith("#version ")?e:`#version 300 es
${e}`;let{gl:i}=this.device;if(i.shaderSource(this.handle,e),i.compileShader(this.handle),!this.device.props.debug){this.compilationStatus="pending";return}if(!this.device.features.has("compilation-status-async-webgl")){if(this._getCompilationStatus(),this.debugShader(),this.compilationStatus==="error")throw new Error(`GLSL compilation errors in ${this.props.stage} shader ${this.props.id}`);return}return _.once(1,"Shader compilation is asynchronous")(),this._waitForCompilationComplete().then(()=>{_.info(2,`Shader ${this.id} - async compilation complete: ${this.compilationStatus}`)(),this._getCompilationStatus(),this.debugShader()})}async _waitForCompilationComplete(){let e=async n=>await new Promise(o=>setTimeout(o,n));if(!this.device.features.has("compilation-status-async-webgl")){await e(10);return}let{gl:r}=this.device;for(;;){if(r.getShaderParameter(this.handle,37297))return;await e(10)}}_getCompilationStatus(){this.compilationStatus=this.device.gl.getShaderParameter(this.handle,35713)?"success":"error"}}});function ix(t,e,i,r){if(xw(e))return r(t);let n=t;n.pushState();try{return pw(t,e),at(n.gl,i),r(t)}finally{n.popState()}}function pw(t,e){let i=t,{gl:r}=i;if(e.cullMode)switch(e.cullMode){case"none":r.disable(2884);break;case"front":r.enable(2884),r.cullFace(1028);break;case"back":r.enable(2884),r.cullFace(1029);break}if(e.frontFace&&r.frontFace(wi("frontFace",e.frontFace,{ccw:2305,cw:2304})),e.unclippedDepth&&t.features.has("depth-clip-control")&&r.enable(34383),e.depthBias!==void 0&&(r.enable(32823),r.polygonOffset(e.depthBias,e.depthBiasSlopeScale||0)),e.provokingVertex&&t.features.has("provoking-vertex-webgl")){let o=i.getExtension("WEBGL_provoking_vertex").WEBGL_provoking_vertex,s=wi("provokingVertex",e.provokingVertex,{first:36429,last:36430});o?.provokingVertexWEBGL(s)}if((e.polygonMode||e.polygonOffsetLine)&&t.features.has("polygon-mode-webgl")){if(e.polygonMode){let o=i.getExtension("WEBGL_polygon_mode").WEBGL_polygon_mode,s=wi("polygonMode",e.polygonMode,{fill:6914,line:6913});o?.polygonModeWEBGL(1028,s),o?.polygonModeWEBGL(1029,s)}e.polygonOffsetLine&&r.enable(10754)}if(t.features.has("shader-clip-cull-distance-webgl")&&(e.clipDistance0&&r.enable(12288),e.clipDistance1&&r.enable(12289),e.clipDistance2&&r.enable(12290),e.clipDistance3&&r.enable(12291),e.clipDistance4&&r.enable(12292),e.clipDistance5&&r.enable(12293),e.clipDistance6&&r.enable(12294),e.clipDistance7&&r.enable(12295)),e.depthWriteEnabled!==void 0&&r.depthMask(mw("depthWriteEnabled",e.depthWriteEnabled)),e.depthCompare&&(e.depthCompare!=="always"?r.enable(2929):r.disable(2929),r.depthFunc(us("depthCompare",e.depthCompare))),e.clearDepth!==void 0&&r.clearDepth(e.clearDepth),e.stencilWriteMask){let n=e.stencilWriteMask;r.stencilMaskSeparate(1028,n),r.stencilMaskSeparate(1029,n)}if(e.stencilReadMask&&_.warn("stencilReadMask not supported under WebGL"),e.stencilCompare){let n=e.stencilReadMask||4294967295,o=us("depthCompare",e.stencilCompare);e.stencilCompare!=="always"?r.enable(2960):r.disable(2960),r.stencilFuncSeparate(1028,o,0,n),r.stencilFuncSeparate(1029,o,0,n)}if(e.stencilPassOperation&&e.stencilFailOperation&&e.stencilDepthFailOperation){let n=nu("stencilPassOperation",e.stencilPassOperation),o=nu("stencilFailOperation",e.stencilFailOperation),s=nu("stencilDepthFailOperation",e.stencilDepthFailOperation);r.stencilOpSeparate(1028,o,s,n),r.stencilOpSeparate(1029,o,s,n)}switch(e.blend){case!0:r.enable(3042);break;case!1:r.disable(3042);break;default:}if(e.blendColorOperation||e.blendAlphaOperation){let n=tx("blendColorOperation",e.blendColorOperation||"add"),o=tx("blendAlphaOperation",e.blendAlphaOperation||"add");r.blendEquationSeparate(n,o);let s=cs("blendColorSrcFactor",e.blendColorSrcFactor||"one"),a=cs("blendColorDstFactor",e.blendColorDstFactor||"zero"),l=cs("blendAlphaSrcFactor",e.blendAlphaSrcFactor||"one"),c=cs("blendAlphaDstFactor",e.blendAlphaDstFactor||"zero");r.blendFuncSeparate(s,a,l,c)}}function us(t,e){return wi(t,e,{never:512,less:513,equal:514,"less-equal":515,greater:516,"not-equal":517,"greater-equal":518,always:519})}function nu(t,e){return wi(t,e,{keep:7680,zero:0,replace:7681,invert:5386,"increment-clamp":7682,"decrement-clamp":7683,"increment-wrap":34055,"decrement-wrap":34056})}function tx(t,e){return wi(t,e,{add:32774,subtract:32778,"reverse-subtract":32779,min:32775,max:32776})}function cs(t,e,i="color"){return wi(t,e,{one:1,zero:0,src:768,"one-minus-src":769,dst:774,"one-minus-dst":775,"src-alpha":770,"one-minus-src-alpha":771,"dst-alpha":772,"one-minus-dst-alpha":773,"src-alpha-saturated":776,constant:i==="color"?32769:32771,"one-minus-constant":i==="color"?32770:32772,src1:768,"one-minus-src1":769,"src1-alpha":770,"one-minus-src1-alpha":771})}function gw(t,e){return`Illegal parameter ${e} for ${t}`}function wi(t,e,i){if(!(e in i))throw new Error(gw(t,e));return i[e]}function mw(t,e){return e}function xw(t){let e=!0;for(let i in t){e=!1;break}return e}var ou=A(()=>{ee();nr()});function ds(t){let e={};return t.addressModeU&&(e[10242]=su(t.addressModeU)),t.addressModeV&&(e[10243]=su(t.addressModeV)),t.addressModeW&&(e[32882]=su(t.addressModeW)),t.magFilter&&(e[10240]=au(t.magFilter)),(t.minFilter||t.mipmapFilter)&&(e[10241]=yw(t.minFilter||"linear",t.mipmapFilter)),t.lodMinClamp!==void 0&&(e[33082]=t.lodMinClamp),t.lodMaxClamp!==void 0&&(e[33083]=t.lodMaxClamp),t.type==="comparison-sampler"&&(e[34892]=34894),t.compare&&(e[34893]=us("compare",t.compare)),t.maxAnisotropy&&(e[34046]=t.maxAnisotropy),e}function su(t){switch(t){case"clamp-to-edge":return 33071;case"repeat":return 10497;case"mirror-repeat":return 33648}}function au(t){switch(t){case"nearest":return 9728;case"linear":return 9729}}function yw(t,e="none"){if(!e)return au(t);switch(e){case"none":return au(t);case"nearest":switch(t){case"nearest":return 9984;case"linear":return 9985}break;case"linear":switch(t){case"nearest":return 9986;case"linear":return 9987}}}var lu=A(()=>{ou()});var hs,rx=A(()=>{ee();lu();hs=class extends st{device;handle;parameters;constructor(e,i){super(e,i),this.device=e,this.parameters=ds(i),this.handle=i.handle||this.device.gl.createSampler(),this._setSamplerParameters(this.parameters)}destroy(){this.handle&&(this.device.gl.deleteSampler(this.handle),this.handle=void 0)}toString(){return`Sampler(${this.id},${JSON.stringify(this.props)})`}_setSamplerParameters(e){for(let[i,r]of Object.entries(e)){let n=Number(i);switch(n){case 33082:case 33083:this.device.gl.samplerParameterf(this.handle,n,r);break;default:this.device.gl.samplerParameteri(this.handle,n,r);break}}}}});function Ct(t,e,i){if(Sw(e))return i(t);let{nocatch:r=!0}=e,n=Be.get(t);n.push(),at(t,e);let o;if(r)o=i(t),n.pop();else try{o=i(t)}finally{n.pop()}return o}function Sw(t){for(let e in t)return!1;return!0}var fs=A(()=>{nr();Ko()});var At,cu=A(()=>{ee();At=class extends Si{device;gl;handle;texture;constructor(e,i){super(e,{...F.defaultProps,...i}),this.device=e,this.gl=this.device.gl,this.handle=null,this.texture=i.texture}}});function ps(t){return vw[t]}var vw,uu=A(()=>{vw={5124:"sint32",5125:"uint32",5122:"sint16",5123:"uint16",5120:"sint8",5121:"uint8",5126:"float32",5131:"float16",33635:"uint16",32819:"uint16",32820:"uint16",33640:"uint32",35899:"uint32",35902:"uint32",34042:"uint32",36269:"uint32"}});function bw(t,e=0){return e?new t.constructor(t.buffer,t.byteOffset+e,(t.byteLength-e)/t.BYTES_PER_ELEMENT):t}function _w(t,e){if(e%t.BYTES_PER_ELEMENT!==0)throw new Error(`Texture byteOffset ${e} must align to typed array element size ${t.BYTES_PER_ELEMENT}`);return e/t.BYTES_PER_ELEMENT}function Tw(t){switch(t){case"1d":break;case"2d":return 3553;case"3d":return 32879;case"cube":return 34067;case"2d-array":return 35866;case"cube-array":break}throw new Error(t)}function gs(t,e,i){return e==="cube"?34069+i:t}var wt,ms=A(()=>{ee();ar();lu();fs();cu();uu();wt=class extends F{device;gl;handle;sampler=void 0;view;glTarget;glFormat;glType;glInternalFormat;compressed;_textureUnit=0;_framebuffer=null;_framebufferAttachmentKey=null;constructor(e,i){super(e,i,{byteAlignment:1}),this.device=e,this.gl=this.device.gl;let r=es(this.props.format);this.glTarget=Tw(this.props.dimension),this.glInternalFormat=r.internalFormat,this.glFormat=r.format,this.glType=r.type,this.compressed=r.compressed,this.handle=this.props.handle||this.gl.createTexture(),this.device._setWebGLDebugMetadata(this.handle,this,{spector:this.props}),this.gl.bindTexture(this.glTarget,this.handle);let{dimension:n,width:o,height:s,depth:a,mipLevels:l,glTarget:c,glInternalFormat:u}=this;if(!this.compressed)switch(n){case"2d":case"cube":this.gl.texStorage2D(c,l,u,o,s);break;case"2d-array":case"3d":this.gl.texStorage3D(c,l,u,o,s,a);break;default:throw new Error(n)}this.gl.bindTexture(this.glTarget,null),this._initializeData(i.data),this.props.handle?this.trackReferencedMemory(this.getAllocatedByteLength(),"Texture"):this.trackAllocatedMemory(this.getAllocatedByteLength(),"Texture"),this.setSampler(this.props.sampler),this.view=new At(this.device,{...this.props,texture:this}),Object.seal(this)}destroy(){this.handle&&(this._framebuffer?.destroy(),this._framebuffer=null,this._framebufferAttachmentKey=null,this.removeStats(),this.props.handle?this.trackDeallocatedReferencedMemory("Texture"):(this.gl.deleteTexture(this.handle),this.trackDeallocatedMemory("Texture")),this.destroyed=!0)}createView(e){return new At(this.device,{...e,texture:this})}setSampler(e={}){super.setSampler(e);let i=ds(this.sampler.props);this._setSamplerParameters(i)}copyExternalImage(e){let i=this._normalizeCopyExternalImageOptions(e);if(i.sourceX||i.sourceY)throw new Error("WebGL does not support sourceX/sourceY)");let{glFormat:r,glType:n}=this,{image:o,depth:s,mipLevel:a,x:l,y:c,z:u,width:d,height:h}=i,f=gs(this.glTarget,this.dimension,u),g=i.flipY?{37440:!0}:{};return this.gl.bindTexture(this.glTarget,this.handle),Ct(this.gl,g,()=>{switch(this.dimension){case"2d":case"cube":this.gl.texSubImage2D(f,a,l,c,d,h,r,n,o);break;case"2d-array":case"3d":this.gl.texSubImage3D(f,a,l,c,u,d,h,s,r,n,o);break;default:}}),this.gl.bindTexture(this.glTarget,null),{width:i.width,height:i.height}}copyImageData(e){super.copyImageData(e)}readBuffer(e={},i){if(!i)throw new Error(`${this} readBuffer requires a destination buffer`);let r=this._getSupportedColorReadOptions(e),n=e.byteOffset??0,o=this.computeMemoryLayout(r);if(i.byteLength<n+o.byteLength)throw new Error(`${this} readBuffer target is too small (${i.byteLength} < ${n+o.byteLength})`);let s=i;this.gl.bindBuffer(35051,s.handle);try{this._readColorTextureLayers(r,o,a=>{this.gl.readPixels(r.x,r.y,r.width,r.height,this.glFormat,this.glType,n+a)})}finally{this.gl.bindBuffer(35051,null)}return i}async readDataAsync(e={}){throw new Error(`${this} readDataAsync is deprecated; use readBuffer() with an explicit destination buffer or DynamicTexture.readAsync()`)}writeBuffer(e,i={}){let r=this._normalizeTextureWriteOptions(i),{width:n,height:o,depthOrArrayLayers:s,mipLevel:a,byteOffset:l,x:c,y:u,z:d}=r,{glFormat:h,glType:f,compressed:g}=this,x=gs(this.glTarget,this.dimension,d);if(g)throw new Error("writeBuffer for compressed textures is not implemented in WebGL");let{bytesPerPixel:b}=this.device.getTextureFormatInfo(this.format),v=b?r.bytesPerRow/b:void 0,R={3317:this.byteAlignment,...v!==void 0?{3314:v}:{},32878:r.rowsPerImage};this.gl.bindTexture(this.glTarget,this.handle),this.gl.bindBuffer(35052,e.handle),Ct(this.gl,R,()=>{switch(this.dimension){case"2d":case"cube":this.gl.texSubImage2D(x,a,c,u,n,o,h,f,l);break;case"2d-array":case"3d":this.gl.texSubImage3D(x,a,c,u,d,n,o,s,h,f,l);break;default:}}),this.gl.bindBuffer(35052,null),this.gl.bindTexture(this.glTarget,null)}writeData(e,i={}){let r=this._normalizeTextureWriteOptions(i),n=ArrayBuffer.isView(e)?e:new Uint8Array(e),{width:o,height:s,depthOrArrayLayers:a,mipLevel:l,x:c,y:u,z:d,byteOffset:h}=r,{glFormat:f,glType:g,compressed:x}=this,b=gs(this.glTarget,this.dimension,d),v;if(!x){let{bytesPerPixel:k}=this.device.getTextureFormatInfo(this.format);k&&(v=r.bytesPerRow/k)}let R=this.compressed?{}:{3317:this.byteAlignment,...v!==void 0?{3314:v}:{},32878:r.rowsPerImage},P=_w(n,h),y=x?bw(n,h):n,T=this._getMipLevelSize(l),C=c===0&&u===0&&d===0&&o===T.width&&s===T.height&&a===T.depthOrArrayLayers;this.gl.bindTexture(this.glTarget,this.handle),this.gl.bindBuffer(35052,null),Ct(this.gl,R,()=>{switch(this.dimension){case"2d":case"cube":x?C?this.gl.compressedTexImage2D(b,l,f,o,s,0,y):this.gl.compressedTexSubImage2D(b,l,c,u,o,s,f,y):this.gl.texSubImage2D(b,l,c,u,o,s,f,g,n,P);break;case"2d-array":case"3d":x?C?this.gl.compressedTexImage3D(b,l,f,o,s,a,0,y):this.gl.compressedTexSubImage3D(b,l,c,u,d,o,s,a,f,y):this.gl.texSubImage3D(b,l,c,u,d,o,s,a,f,g,n,P);break;default:}}),this.gl.bindTexture(this.glTarget,null)}_getRowByteAlignment(e,i){return 1}_getFramebuffer(){return this._framebuffer||=this.device.createFramebuffer({id:`framebuffer-for-${this.id}`,width:this.width,height:this.height,colorAttachments:[this]}),this._framebuffer}readDataSyncWebGL(e={}){let i=this._getSupportedColorReadOptions(e),r=this.computeMemoryLayout(i),n=ps(this.glType),o=nc(n),s=new o(r.byteLength/o.BYTES_PER_ELEMENT);return this._readColorTextureLayers(i,r,a=>{let l=new o(s.buffer,s.byteOffset+a,r.bytesPerImage/o.BYTES_PER_ELEMENT);this.gl.readPixels(i.x,i.y,i.width,i.height,this.glFormat,this.glType,l)}),s.buffer}_readColorTextureLayers(e,i,r){let n=this._getFramebuffer(),o=i.bytesPerRow/i.bytesPerPixel,s={3333:this.byteAlignment,...o!==e.width?{3330:o}:{}},a=this.gl.getParameter(3074),l=this.gl.bindFramebuffer(36160,n.handle);try{this.gl.readBuffer(36064),Ct(this.gl,s,()=>{for(let c=0;c<e.depthOrArrayLayers;c++)this._attachReadSubresource(n,e.mipLevel,e.z+c),r(c*i.bytesPerImage)})}finally{this.gl.bindFramebuffer(36160,l||null),this.gl.readBuffer(a)}}_attachReadSubresource(e,i,r){let n=`${i}:${r}`;if(this._framebufferAttachmentKey!==n){switch(this.dimension){case"2d":this.gl.framebufferTexture2D(36160,36064,3553,this.handle,i);break;case"cube":this.gl.framebufferTexture2D(36160,36064,gs(this.glTarget,this.dimension,r),this.handle,i);break;case"2d-array":case"3d":this.gl.framebufferTextureLayer(36160,36064,this.handle,i,r);break;default:throw new Error(`${this} color readback does not support ${this.dimension} textures`)}if(this.device.props.debug){let o=Number(this.gl.checkFramebufferStatus(36160));if(o!==36053)throw new Error(`${e} incomplete for ${this} readback (${o})`)}this._framebufferAttachmentKey=n}}generateMipmapsWebGL(e){if(!(!(this.device.isTextureFormatRenderable(this.props.format)&&this.device.isTextureFormatFilterable(this.props.format))&&(_.warn(`${this} is not renderable or filterable, may not be able to generate mipmaps`)(),!e?.force)))try{this.gl.bindTexture(this.glTarget,this.handle),this.gl.generateMipmap(this.glTarget)}catch(r){_.warn(`Error generating mipmap for ${this}: ${r.message}`)()}finally{this.gl.bindTexture(this.glTarget,null)}}_setSamplerParameters(e){_.log(2,`${this.id} sampler parameters`,this.device.getGLKeys(e))(),this.gl.bindTexture(this.glTarget,this.handle);for(let[i,r]of Object.entries(e)){let n=Number(i),o=r;switch(n){case 33082:case 33083:this.gl.texParameterf(this.glTarget,n,o);break;case 10240:case 10241:this.gl.texParameteri(this.glTarget,n,o);break;case 10242:case 10243:case 32882:this.gl.texParameteri(this.glTarget,n,o);break;case 34046:this.device.features.has("texture-filterable-anisotropic-webgl")&&this.gl.texParameteri(this.glTarget,n,o);break;case 34892:case 34893:this.gl.texParameteri(this.glTarget,n,o);break}}this.gl.bindTexture(this.glTarget,null)}_getActiveUnit(){return this.gl.getParameter(34016)-33984}_bind(e){let{gl:i}=this;return e!==void 0&&(this._textureUnit=e,i.activeTexture(33984+e)),i.bindTexture(this.glTarget,this.handle),e}_unbind(e){let{gl:i}=this;return e!==void 0&&(this._textureUnit=e,i.activeTexture(33984+e)),i.bindTexture(this.glTarget,null),e}}});function nx(t,e,i,r){let n=t,o=r;o===!0&&(o=1),o===!1&&(o=0);let s=typeof o=="number"?[o]:o;switch(i){case 35678:case 35680:case 35679:case 35682:case 36289:case 36292:case 36293:case 36298:case 36299:case 36300:case 36303:case 36306:case 36307:case 36308:case 36311:if(typeof r!="number")throw new Error("samplers must be set to integers");return t.uniform1i(e,r);case 5126:return t.uniform1fv(e,s);case 35664:return t.uniform2fv(e,s);case 35665:return t.uniform3fv(e,s);case 35666:return t.uniform4fv(e,s);case 5124:return t.uniform1iv(e,s);case 35667:return t.uniform2iv(e,s);case 35668:return t.uniform3iv(e,s);case 35669:return t.uniform4iv(e,s);case 35670:return t.uniform1iv(e,s);case 35671:return t.uniform2iv(e,s);case 35672:return t.uniform3iv(e,s);case 35673:return t.uniform4iv(e,s);case 5125:return n.uniform1uiv(e,s,1);case 36294:return n.uniform2uiv(e,s,2);case 36295:return n.uniform3uiv(e,s,3);case 36296:return n.uniform4uiv(e,s,4);case 35674:return t.uniformMatrix2fv(e,!1,s);case 35675:return t.uniformMatrix3fv(e,!1,s);case 35676:return t.uniformMatrix4fv(e,!1,s);case 35685:return n.uniformMatrix2x3fv(e,!1,s);case 35686:return n.uniformMatrix2x4fv(e,!1,s);case 35687:return n.uniformMatrix3x2fv(e,!1,s);case 35688:return n.uniformMatrix3x4fv(e,!1,s);case 35689:return n.uniformMatrix4x2fv(e,!1,s);case 35690:return n.uniformMatrix4x3fv(e,!1,s)}throw new Error("Illegal uniform")}var ox=A(()=>{});function sx(t){switch(t){case"point-list":return 0;case"line-list":return 1;case"line-strip":return 3;case"triangle-list":return 4;case"triangle-strip":return 5;default:throw new Error(t)}}function ax(t){switch(t){case"point-list":return 0;case"line-list":return 1;case"line-strip":return 1;case"triangle-list":return 4;case"triangle-strip":return 4;default:throw new Error(t)}}var du=A(()=>{});function Pw(t,e){let i={...t,attributes:t.attributes.map(r=>({...r})),bindings:t.bindings.map(r=>({...r}))};for(let r of e?.attributes||[]){let n=i.attributes.find(o=>o.name===r.name);n?(n.type=r.type||n.type,n.stepMode=r.stepMode||n.stepMode):_.warn(`shader layout attribute ${r.name} not present in shader`)}for(let r of e?.bindings||[]){let n=cx(i,r.name);if(!n){_.warn(`shader layout binding ${r.name} not present in shader`);continue}Object.assign(n,r)}return i}function cx(t,e){return t.bindings.find(i=>i.name===e||i.name===`${e}Uniforms`||`${i.name}Uniforms`===e)}function lx(t,e){return t[e]||t[`${e}Uniforms`]||t[e.replace(/Uniforms$/,"")]}var xs,ux=A(()=>{ee();ou();ox();ss();rs();ms();cu();du();xs=class extends Ke{device;handle;vs;fs;introspectedLayout;bindings={};uniforms={};varyings=null;_uniformCount=0;_uniformSetters={};get[Symbol.toStringTag](){return"WEBGLRenderPipeline"}constructor(e,i){super(e,i),this.device=e;let r=this.sharedRenderPipeline||this.device._createSharedRenderPipelineWebGL(i);this.sharedRenderPipeline=r,this.handle=r.handle,this.vs=r.vs,this.fs=r.fs,this.linkStatus=r.linkStatus,this.introspectedLayout=r.introspectedLayout,this.device._setWebGLDebugMetadata(this.handle,this,{spector:{id:this.props.id}}),this.shaderLayout=i.shaderLayout?Pw(this.introspectedLayout,i.shaderLayout):this.introspectedLayout}destroy(){this.destroyed||(this.sharedRenderPipeline&&!this.props._sharedRenderPipeline&&this.sharedRenderPipeline.destroy(),this.destroyResource())}setBindings(e,i){let r=wo(Xr(this.shaderLayout,e));for(let[n,o]of Object.entries(r)){let s=cx(this.shaderLayout,n);if(s){switch(o||_.warn(`Unsetting binding "${n}" in render pipeline "${this.id}"`)(),s.type){case"uniform":if(!(o instanceof ct)&&!(o.buffer instanceof ct))throw new Error("buffer value");break;case"texture":if(!(o instanceof At||o instanceof wt||o instanceof Pt))throw new Error(`${this} Bad texture binding for ${n}`);break;case"sampler":_.warn(`Ignoring sampler ${n}`)();break;default:throw new Error(s.type)}this.bindings[n]=o}else{let a=this.shaderLayout.bindings.map(l=>`"${l.name}"`).join(", ");i?.disableWarnings||_.warn(`No binding "${n}" in render pipeline "${this.id}", expected one of ${a}`,o)()}}}draw(e){this._syncLinkStatus();let i=e.bindGroups?wo(e.bindGroups):e.bindings||this.bindings,{renderPass:r,parameters:n=this.props.parameters,topology:o=this.props.topology,vertexArray:s,vertexCount:a,instanceCount:l,isInstanced:c=!1,firstVertex:u=0,transformFeedback:d,uniforms:h=this.uniforms}=e,f=sx(o),g=!!s.indexBuffer,x=s.indexBuffer?.glIndexType;if(this.linkStatus!=="success")return _.info(2,`RenderPipeline:${this.id}.draw() aborted - waiting for shader linking`)(),!1;if(!this._areTexturesRenderable(i))return _.info(2,`RenderPipeline:${this.id}.draw() aborted - textures not yet loaded`)(),!1;this.device.gl.useProgram(this.handle),s.bindBeforeRender(r),d&&d.begin(this.props.topology),this._applyBindings(i,{disableWarnings:this.props.disableWarnings}),this._applyUniforms(h);let b=r;return ix(this.device,n,b.glParameters,()=>{g&&c?this.device.gl.drawElementsInstanced(f,a||0,x,u,l||0):g?this.device.gl.drawElements(f,a||0,x,u):c?this.device.gl.drawArraysInstanced(f,u,a||0,l||0):this.device.gl.drawArrays(f,u,a||0),d&&d.end()}),s.unbindAfterRender(r),!0}_areTexturesRenderable(e){let i=!0;for(let r of this.shaderLayout.bindings)lx(e,r.name)||(_.warn(`Binding ${r.name} not found in ${this.id}`)(),i=!1);return i}_applyBindings(e,i){if(this._syncLinkStatus(),this.linkStatus!=="success")return;let{gl:r}=this.device;r.useProgram(this.handle);let n=0,o=0;for(let s of this.shaderLayout.bindings){let a=lx(e,s.name);if(!a)throw new Error(`No value for binding ${s.name} in ${this.id}`);switch(s.type){case"uniform":let{name:l}=s,c=r.getUniformBlockIndex(this.handle,l);if(c===4294967295)throw new Error(`Invalid uniform block name ${l}`);if(r.uniformBlockBinding(this.handle,c,o),a instanceof ct)r.bindBufferBase(35345,o,a.handle);else{let d=a;r.bindBufferRange(35345,o,d.buffer.handle,d.offset||0,d.size||d.buffer.byteLength-(d.offset||0))}o+=1;break;case"texture":if(!(a instanceof At||a instanceof wt||a instanceof Pt))throw new Error("texture");let u;if(a instanceof At)u=a.texture;else if(a instanceof wt)u=a;else if(a instanceof Pt&&a.colorAttachments[0]instanceof At)_.warn("Passing framebuffer in texture binding may be deprecated. Use fbo.colorAttachments[0] instead")(),u=a.colorAttachments[0].texture;else throw new Error("No texture");r.activeTexture(33984+n),r.bindTexture(u.glTarget,u.handle),n+=1;break;case"sampler":break;case"storage":case"read-only-storage":throw new Error(`binding type '${s.type}' not supported in WebGL`)}}}_applyUniforms(e){for(let i of this.shaderLayout.uniforms||[]){let{name:r,location:n,type:o,textureUnit:s}=i,a=e[r]??s;a!==void 0&&nx(this.device.gl,n,o,a)}}_syncLinkStatus(){this.linkStatus=this.sharedRenderPipeline.linkStatus}}});function dx(t){return Aw[t]}function ys(t){return Cw[t]}function Ss(t){return!!fx[t]}function hx(t){return fx[t]}var Cw,fx,Aw,vs=A(()=>{Cw={5126:"f32",35664:"vec2<f32>",35665:"vec3<f32>",35666:"vec4<f32>",5124:"i32",35667:"vec2<i32>",35668:"vec3<i32>",35669:"vec4<i32>",5125:"u32",36294:"vec2<u32>",36295:"vec3<u32>",36296:"vec4<u32>",35670:"f32",35671:"vec2<f32>",35672:"vec3<f32>",35673:"vec4<f32>",35674:"mat2x2<f32>",35685:"mat2x3<f32>",35686:"mat2x4<f32>",35687:"mat3x2<f32>",35675:"mat3x3<f32>",35688:"mat3x4<f32>",35689:"mat4x2<f32>",35690:"mat4x3<f32>",35676:"mat4x4<f32>"},fx={35678:{viewDimension:"2d",sampleType:"float"},35680:{viewDimension:"cube",sampleType:"float"},35679:{viewDimension:"3d",sampleType:"float"},35682:{viewDimension:"3d",sampleType:"depth"},36289:{viewDimension:"2d-array",sampleType:"float"},36292:{viewDimension:"2d-array",sampleType:"depth"},36293:{viewDimension:"cube",sampleType:"float"},36298:{viewDimension:"2d",sampleType:"sint"},36299:{viewDimension:"3d",sampleType:"sint"},36300:{viewDimension:"cube",sampleType:"sint"},36303:{viewDimension:"2d-array",sampleType:"uint"},36306:{viewDimension:"2d",sampleType:"uint"},36307:{viewDimension:"3d",sampleType:"uint"},36308:{viewDimension:"cube",sampleType:"uint"},36311:{viewDimension:"2d-array",sampleType:"uint"}},Aw={uint8:5121,sint8:5120,unorm8:5121,snorm8:5120,uint16:5123,sint16:5122,unorm16:5123,snorm16:5122,uint32:5125,sint32:5124,float16:5131,float32:5126}});function px(t,e){let i={attributes:[],bindings:[]};i.attributes=ww(t,e);let r=Ew(t,e);for(let a of r){let l=a.uniforms.map(c=>({name:c.name,format:c.format,byteOffset:c.byteOffset,byteStride:c.byteStride,arrayLength:c.arrayLength}));i.bindings.push({type:"uniform",name:a.name,group:0,location:a.location,visibility:(a.vertex?1:0)&(a.fragment?2:0),minBindingSize:a.byteLength,uniforms:l})}let n=kw(t,e),o=0;for(let a of n)if(Ss(a.type)){let{viewDimension:l,sampleType:c}=hx(a.type);i.bindings.push({type:"texture",name:a.name,group:0,location:o,viewDimension:l,sampleType:c}),a.textureUnit=o,o+=1}n.length&&(i.uniforms=n);let s=Rw(t,e);return s?.length&&(i.varyings=s),i}function ww(t,e){let i=[],r=t.getProgramParameter(e,35721);for(let n=0;n<r;n++){let o=t.getActiveAttrib(e,n);if(!o)throw new Error("activeInfo");let{name:s,type:a}=o,l=t.getAttribLocation(e,s);if(l>=0){let c=ys(a),u=/instance/i.test(s)?"instance":"vertex";i.push({name:s,location:l,stepMode:u,type:c})}}return i.sort((n,o)=>n.location-o.location),i}function Rw(t,e){let i=[],r=t.getProgramParameter(e,35971);for(let n=0;n<r;n++){let o=t.getTransformFeedbackVarying(e,n);if(!o)throw new Error("activeInfo");let{name:s,type:a,size:l}=o,c=ys(a),{type:u,components:d}=Yi(c);i.push({location:n,name:s,type:u,size:l*d})}return i.sort((n,o)=>n.location-o.location),i}function kw(t,e){let i=[],r=t.getProgramParameter(e,35718);for(let n=0;n<r;n++){let o=t.getActiveUniform(e,n);if(!o)throw new Error("activeInfo");let{name:s,size:a,type:l}=o,{name:c,isArray:u}=Iw(s),d=t.getUniformLocation(e,c),h={location:d,name:c,size:a,type:l,isArray:u};if(i.push(h),h.size>1)for(let f=0;f<h.size;f++){let g=`${c}[${f}]`;d=t.getUniformLocation(e,g);let x={...h,name:g,location:d};i.push(x)}}return i}function Ew(t,e){let i=(o,s)=>t.getActiveUniformBlockParameter(e,o,s),r=[],n=t.getProgramParameter(e,35382);for(let o=0;o<n;o++){let s={name:t.getActiveUniformBlockName(e,o)||"",location:i(o,35391),byteLength:i(o,35392),vertex:i(o,35396),fragment:i(o,35398),uniformCount:i(o,35394),uniforms:[]},a=i(o,35395)||[],l=t.getActiveUniforms(e,a,35383),c=t.getActiveUniforms(e,a,35384),u=t.getActiveUniforms(e,a,35387),d=t.getActiveUniforms(e,a,35388);for(let g=0;g<s.uniformCount;++g){let x=a[g];if(x!==void 0){let b=t.getActiveUniform(e,x);if(!b)throw new Error("activeInfo");let v=ys(l[g]);s.uniforms.push({name:b.name,format:v,type:l[g],arrayLength:c[g],byteOffset:u[g],byteStride:d[g]})}}let h=new Set(s.uniforms.map(g=>g.name.split(".")[0]).filter(g=>!!g)),f=s.name.replace(/Uniforms$/,"");if(h.size===1&&!h.has(s.name)&&!h.has(f)){let[g]=h;_.warn(`Uniform block "${s.name}" uses GLSL instance "${g}". luma.gl binds uniform buffers by block name ("${s.name}") and alias ("${f}"). Prefer matching the instance name to one of those to avoid confusing silent mismatches.`)()}r.push(s)}return r.sort((o,s)=>o.location-s.location),r}function Iw(t){if(t[t.length-1]!=="]")return{name:t,length:1,isArray:!1};let i=/([^[]*)(\[[0-9]+\])?/.exec(t);return{name:Kt(i?.[1],`Failed to parse GLSL uniform name ${t}`),length:i?.[2]?1:0,isArray:!!i?.[2]}}var gx=A(()=>{ee();vs()});var mx,bs,xx=A(()=>{ee();gx();vs();mx=4,bs=class extends Wr{device;handle;vs;fs;introspectedLayout={attributes:[],bindings:[],uniforms:[]};linkStatus="pending";constructor(e,i){super(e,i),this.device=e,this.handle=i.handle||this.device.gl.createProgram(),this.vs=i.vs,this.fs=i.fs,i.varyings&&i.varyings.length>0&&this.device.gl.transformFeedbackVaryings(this.handle,i.varyings,i.bufferMode||35981),this._linkShaders(),_.time(3,`RenderPipeline ${this.id} - shaderLayout introspection`)(),this.introspectedLayout=px(this.device.gl,this.handle),_.timeEnd(3,`RenderPipeline ${this.id} - shaderLayout introspection`)()}destroy(){this.destroyed||(this.device.gl.useProgram(null),this.device.gl.deleteProgram(this.handle),this.handle.destroyed=!0,this.destroyResource())}async _linkShaders(){let{gl:e}=this.device;if(e.attachShader(this.handle,this.vs.handle),e.attachShader(this.handle,this.fs.handle),_.time(mx,`linkProgram for ${this.id}`)(),e.linkProgram(this.handle),_.timeEnd(mx,`linkProgram for ${this.id}`)(),!this.device.features.has("compilation-status-async-webgl")){let r=this._getLinkStatus();this._reportLinkStatus(r);return}_.once(1,"RenderPipeline linking is asynchronous")(),await this._waitForLinkComplete(),_.info(2,`RenderPipeline ${this.id} - async linking complete: ${this.linkStatus}`)();let i=this._getLinkStatus();this._reportLinkStatus(i)}async _reportLinkStatus(e){switch(e){case"success":return;default:let i=e==="link-error"?"Link error":"Validation error";switch(this.vs.compilationStatus){case"error":throw this.vs.debugShader(),new Error(`${this} ${i} during compilation of ${this.vs}`);case"pending":await this.vs.asyncCompilationStatus,this.vs.debugShader();break;case"success":break}switch(this.fs?.compilationStatus){case"error":throw this.fs.debugShader(),new Error(`${this} ${i} during compilation of ${this.fs}`);case"pending":await this.fs.asyncCompilationStatus,this.fs.debugShader();break;case"success":break}let r=this.device.gl.getProgramInfoLog(this.handle);this.device.reportError(new Error(`${i} during ${e}: ${r}`),this)(),this.device.debug()}}_getLinkStatus(){let{gl:e}=this.device;return e.getProgramParameter(this.handle,35714)?(this._initializeSamplerUniforms(),e.validateProgram(this.handle),e.getProgramParameter(this.handle,35715)?(this.linkStatus="success","success"):(this.linkStatus="error","validation-error")):(this.linkStatus="error","link-error")}_initializeSamplerUniforms(){let{gl:e}=this.device;e.useProgram(this.handle);let i=0,r=e.getProgramParameter(this.handle,35718);for(let n=0;n<r;n++){let o=e.getActiveUniform(this.handle,n);if(o&&Ss(o.type)){let s=o.name.endsWith("[0]"),a=s?o.name.slice(0,-3):o.name,l=e.getUniformLocation(this.handle,a);l!==null&&(i=this._assignSamplerUniform(l,o,s,i))}}}_assignSamplerUniform(e,i,r,n){let{gl:o}=this.device;if(r&&i.size>1){let s=Int32Array.from({length:i.size},(a,l)=>n+l);return o.uniform1iv(e,s),n+i.size}return o.uniform1i(e,n),n+1}async _waitForLinkComplete(){let e=async n=>await new Promise(o=>setTimeout(o,n));if(!this.device.features.has("compilation-status-async-webgl")){await e(10);return}let{gl:r}=this.device;for(;;){if(r.getProgramParameter(this.handle,37297))return;await e(10)}}}});function Dw(t,e){let i=e.sourceBuffer,r=e.destinationBuffer;t.gl.bindBuffer(36662,i.handle),t.gl.bindBuffer(36663,r.handle),t.gl.copyBufferSubData(36662,36663,e.sourceOffset??0,e.destinationOffset??0,e.size),t.gl.bindBuffer(36662,null),t.gl.bindBuffer(36663,null)}function Fw(t,e){throw new Error("copyBufferToTexture is not supported in WebGL")}function Mw(t,e){let{sourceTexture:i,mipLevel:r=0,aspect:n="all",width:o=e.sourceTexture.width,height:s=e.sourceTexture.height,depthOrArrayLayers:a,origin:l=[0,0,0],destinationBuffer:c,byteOffset:u=0,bytesPerRow:d,rowsPerImage:h}=e;if(i instanceof F){i.readBuffer({x:l[0]??0,y:l[1]??0,z:l[2]??0,width:o,height:s,depthOrArrayLayers:a,mipLevel:r,aspect:n,byteOffset:u},c);return}if(n!=="all")throw new Error("aspect not supported in WebGL");if(r!==0||a!==void 0||d||h)throw new Error("not implemented");let{framebuffer:f,destroyFramebuffer:g}=yx(i),x;try{let b=c,v=o||f.width,R=s||f.height,P=Kt(f.colorAttachments[0]),y=es(P.texture.props.format),T=y.format,C=y.type;t.gl.bindBuffer(35051,b.handle),x=t.gl.bindFramebuffer(36160,f.handle),t.gl.readPixels(l[0],l[1],v,R,T,C,u)}finally{t.gl.bindBuffer(35051,null),x!==void 0&&t.gl.bindFramebuffer(36160,x),g&&f.destroy()}}function Nw(t,e){let{sourceTexture:i,destinationMipLevel:r=0,origin:n=[0,0],destinationOrigin:o=[0,0,0],destinationTexture:s}=e,{width:a=e.destinationTexture.width,height:l=e.destinationTexture.height}=e,{framebuffer:c,destroyFramebuffer:u}=yx(i),[d=0,h=0]=n,[f,g,x]=o,b=t.gl.bindFramebuffer(36160,c.handle),v,R;if(s instanceof wt)v=s,a=Number.isFinite(a)?a:v.width,l=Number.isFinite(l)?l:v.height,v._bind(0),R=v.glTarget;else throw new Error("invalid destination");switch(R){case 3553:case 34067:t.gl.copyTexSubImage2D(R,r,f,g,d,h,a,l);break;case 35866:case 32879:t.gl.copyTexSubImage3D(R,r,f,g,x,d,h,a,l);break;default:}v&&v._unbind(),t.gl.bindFramebuffer(36160,b),u&&c.destroy()}function yx(t){if(t instanceof F){let{width:e,height:i,id:r}=t;return{framebuffer:t.device.createFramebuffer({id:`framebuffer-for-${r}`,width:e,height:i,colorAttachments:[t]}),destroyFramebuffer:!0}}return{framebuffer:t,destroyFramebuffer:!1}}var _s,Sx=A(()=>{ee();ar();ms();_s=class extends jr{device;handle=null;commands=[];constructor(e,i={}){super(e,i),this.device=e}_executeCommands(e=this.commands){for(let i of e)switch(i.name){case"copy-buffer-to-buffer":Dw(this.device,i.options);break;case"copy-buffer-to-texture":Fw(this.device,i.options);break;case"copy-texture-to-buffer":Mw(this.device,i.options);break;case"copy-texture-to-texture":Nw(this.device,i.options);break;default:throw new Error(i.name)}}}});var Bw,Ts,vx=A(()=>{ee();fs();nr();Bw=[1,2,4,8],Ts=class extends Gr{device;handle=null;glParameters={};constructor(e,i){super(e,i),this.device=e;let r=this.props.framebuffer,n=!r||r.handle===null;n&&e.getDefaultCanvasContext()._resizeDrawingBufferIfNeeded();let o;if(!i?.parameters?.viewport)if(!n&&r){let{width:s,height:a}=r;o=[0,0,s,a]}else{let[s,a]=e.getDefaultCanvasContext().getDrawingBufferSize();o=[0,0,s,a]}if(this.device.pushState(),this.setParameters({viewport:o,...this.props.parameters}),!n&&r?.colorAttachments.length){let s=r.colorAttachments.map((a,l)=>36064+l);this.device.gl.drawBuffers(s)}else n&&this.device.gl.drawBuffers([1029]);this.clear(),this.props.timestampQuerySet&&this.props.beginTimestampIndex!==void 0&&this.props.timestampQuerySet.writeTimestamp(this.props.beginTimestampIndex)}end(){this.destroyed||(this.props.timestampQuerySet&&this.props.endTimestampIndex!==void 0&&this.props.timestampQuerySet.writeTimestamp(this.props.endTimestampIndex),this.device.popState(),this.destroy())}pushDebugGroup(e){}popDebugGroup(){}insertDebugMarker(e){}setParameters(e={}){let i={...this.glParameters};i.framebuffer=this.props.framebuffer||null,this.props.depthReadOnly&&(i.depthMask=!this.props.depthReadOnly),i.stencilMask=this.props.stencilReadOnly?0:1,i[35977]=this.props.discard,e.viewport&&(e.viewport.length>=6?(i.viewport=e.viewport.slice(0,4),i.depthRange=[e.viewport[4],e.viewport[5]]):i.viewport=e.viewport),e.scissorRect&&(i.scissorTest=!0,i.scissor=e.scissorRect),e.blendConstant&&(i.blendColor=e.blendConstant),e.stencilReference!==void 0&&(i[2967]=e.stencilReference,i[36003]=e.stencilReference),"colorMask"in e&&(i.colorMask=Bw.map(r=>!!(r&e.colorMask))),this.glParameters=i,at(this.device.gl,i)}beginOcclusionQuery(e){this.props.occlusionQuerySet?.beginOcclusionQuery()}endOcclusionQuery(){this.props.occlusionQuerySet?.endOcclusionQuery()}clear(){let e={...this.glParameters},i=0;this.props.clearColors&&this.props.clearColors.forEach((r,n)=>{r&&this.clearColorBuffer(n,r)}),this.props.clearColor!==!1&&this.props.clearColors===void 0&&(i|=16384,e.clearColor=this.props.clearColor),this.props.clearDepth!==!1&&(i|=256,e.clearDepth=this.props.clearDepth),this.props.clearStencil!==!1&&(i|=1024,e.clearStencil=this.props.clearStencil),i!==0&&Ct(this.device.gl,e,()=>{this.device.gl.clear(i)})}clearColorBuffer(e=0,i=[0,0,0,0]){Ct(this.device.gl,{framebuffer:this.props.framebuffer},()=>{switch(i.constructor){case Int8Array:case Int16Array:case Int32Array:this.device.gl.clearBufferiv(6144,e,i);break;case Uint8Array:case Uint8ClampedArray:case Uint16Array:case Uint32Array:this.device.gl.clearBufferuiv(6144,e,i);break;case Float32Array:this.device.gl.clearBufferfv(6144,e,i);break;default:throw new Error("clearColorBuffer: color must be typed array")}})}}});var gn,bx=A(()=>{ee();Sx();vx();gn=class extends Yr{device;handle=null;commandBuffer;constructor(e,i){super(e,i),this.device=e,this.commandBuffer=new _s(e,{id:`${this.props.id}-command-buffer`})}destroy(){this.destroyResource()}finish(e){return e?.id&&this.commandBuffer.id!==e.id&&(this.commandBuffer.id=e.id,this.commandBuffer.props.id=e.id),this.destroy(),this.commandBuffer}beginRenderPass(e={}){return new Ts(this.device,this._applyTimeProfilingToPassProps(e))}beginComputePass(e={}){throw new Error("ComputePass not supported in WebGL")}copyBufferToBuffer(e){this.commandBuffer.commands.push({name:"copy-buffer-to-buffer",options:e})}copyBufferToTexture(e){this.commandBuffer.commands.push({name:"copy-buffer-to-texture",options:e})}copyTextureToBuffer(e){this.commandBuffer.commands.push({name:"copy-texture-to-buffer",options:e})}copyTextureToTexture(e){this.commandBuffer.commands.push({name:"copy-texture-to-texture",options:e})}pushDebugGroup(e){}popDebugGroup(){}insertDebugMarker(e){}resolveQuerySet(e,i,r){throw new Error("resolveQuerySet is not supported in WebGL")}writeTimestamp(e,i){e.writeTimestamp(i)}}});function _x(t){let{target:e,source:i,start:r=0,count:n=1}=t,o=i.length,s=n*o,a=0;for(let l=r;a<o;a++)e[l++]=i[a]??0;for(;a<s;)a<s-a?(e.copyWithin(r+a,r,r+a),a*=2):(e.copyWithin(r+a,r,r+s-a),a=s);return t.target}var Tx=A(()=>{});function Ow(t){return Array.isArray(t)?new Float32Array(t):t}function Uw(t,e){if(!t||!e||t.length!==e.length||t.constructor!==e.constructor)return!1;for(let i=0;i<t.length;++i)if(t[i]!==e[i])return!1;return!0}var Ps,Px=A(()=>{ee();Gt();Zc();Tx();Ps=class t extends Kr{get[Symbol.toStringTag](){return"VertexArray"}device;handle;buffer=null;bufferValue=null;static isConstantAttributeZeroSupported(e){return Tl()==="Chrome"}constructor(e,i){super(e,i),this.device=e,this.handle=this.device.gl.createVertexArray()}destroy(){super.destroy(),this.buffer&&this.buffer?.destroy(),this.handle&&(this.device.gl.deleteVertexArray(this.handle),this.handle=void 0)}setIndexBuffer(e){let i=e;if(i&&i.glTarget!==34963)throw new Error("Use .setBuffer()");this.device.gl.bindVertexArray(this.handle),this.device.gl.bindBuffer(34963,i?i.handle:null),this.indexBuffer=i,this.device.gl.bindVertexArray(null)}setBuffer(e,i){let r=i;if(r.glTarget===34963)throw new Error("Use .setIndexBuffer()");let{size:n,type:o,stride:s,offset:a,normalized:l,integer:c,divisor:u}=this._getAccessor(e);this.device.gl.bindVertexArray(this.handle),this.device.gl.bindBuffer(34962,r.handle),c?this.device.gl.vertexAttribIPointer(e,n,o,s,a):this.device.gl.vertexAttribPointer(e,n,o,l,s,a),this.device.gl.bindBuffer(34962,null),this.device.gl.enableVertexAttribArray(e),this.device.gl.vertexAttribDivisor(e,u||0),this.attributes[e]=r,this.device.gl.bindVertexArray(null)}setConstantWebGL(e,i){this._enable(e,!1),this.attributes[e]=i}bindBeforeRender(){this.device.gl.bindVertexArray(this.handle),this._applyConstantAttributes()}unbindAfterRender(){this.device.gl.bindVertexArray(null)}_applyConstantAttributes(){for(let e=0;e<this.maxVertexAttributes;++e){let i=this.attributes[e];ArrayBuffer.isView(i)&&this.device.setConstantAttributeWebGL(e,i)}}_getAccessor(e){let i=this.attributeInfos[e];if(!i)throw new Error(`Unknown attribute location ${e}`);let r=qo(i.bufferDataType);return{size:i.bufferComponents,type:r,stride:i.byteStride,offset:i.byteOffset,normalized:i.normalized,integer:i.integer,divisor:i.stepMode==="instance"?1:0}}_enable(e,i=!0){let n=t.isConstantAttributeZeroSupported(this.device)||e!==0;(i||n)&&(e=Number(e),this.device.gl.bindVertexArray(this.handle),i?this.device.gl.enableVertexAttribArray(e):this.device.gl.disableVertexAttribArray(e),this.device.gl.bindVertexArray(null))}getConstantBuffer(e,i){let r=Ow(i),n=r.byteLength*e,o=r.length*e;if(this.buffer&&n!==this.buffer.byteLength)throw new Error(`Buffer size is immutable, byte length ${n} !== ${this.buffer.byteLength}.`);let s=!this.buffer;if(this.buffer=this.buffer||this.device.createBuffer({byteLength:n}),s||=!Uw(r,this.bufferValue),s){let a=uc(i.constructor,o);_x({target:a,source:r,start:0,count:o}),this.buffer.write(a),this.bufferValue=i}return this.buffer}}});function Cx(t){return typeof t=="number"?Number.isInteger(t):/^\d+$/.test(t)}var Cs,Ax=A(()=>{ee();hu();du();Cs=class extends qr{device;gl;handle;layout;buffers={};unusedBuffers={};bindOnUse=!0;_bound=!1;constructor(e,i){super(e,i),this.device=e,this.gl=e.gl,this.handle=this.props.handle||this.gl.createTransformFeedback(),this.layout=this.props.layout,i.buffers&&this.setBuffers(i.buffers),Object.seal(this)}destroy(){this.gl.deleteTransformFeedback(this.handle),super.destroy()}begin(e="point-list"){this.gl.bindTransformFeedback(36386,this.handle),this.bindOnUse&&this._bindBuffers(),this.gl.beginTransformFeedback(ax(e))}end(){this.gl.endTransformFeedback(),this.bindOnUse&&this._unbindBuffers(),this.gl.bindTransformFeedback(36386,null)}setBuffers(e){this.buffers={},this.unusedBuffers={},this.bind(()=>{for(let[i,r]of Object.entries(e))this.setBuffer(i,r)})}setBuffer(e,i){let r=this._getVaryingIndex(e),{buffer:n,byteLength:o,byteOffset:s}=this._getBufferRange(i);if(r<0){this.unusedBuffers[e]=n,_.warn(`${this.id} unusedBuffers varying buffer ${e}`)();return}this.buffers[r]={buffer:n,byteLength:o,byteOffset:s},this.bindOnUse||this._bindBuffer(r,n,s,o)}getBuffer(e){if(Cx(e))return this.buffers[e]||null;let i=this._getVaryingIndex(e);return this.buffers[i]??null}bind(e=this.handle){if(typeof e!="function")return this.gl.bindTransformFeedback(36386,e),this;let i;return this._bound?i=e():(this.gl.bindTransformFeedback(36386,this.handle),this._bound=!0,i=e(),this._bound=!1,this.gl.bindTransformFeedback(36386,null)),i}unbind(){this.bind(null)}_getBufferRange(e){if(e instanceof ct)return{buffer:e,byteOffset:0,byteLength:e.byteLength};let{buffer:i,byteOffset:r=0,byteLength:n=e.buffer.byteLength}=e;return{buffer:i,byteOffset:r,byteLength:n}}_getVaryingIndex(e){if(Cx(e))return Number(e);for(let i of this.layout.varyings||[])if(e===i.name)return i.location;return-1}_bindBuffers(){for(let[e,i]of Object.entries(this.buffers)){let{buffer:r,byteLength:n,byteOffset:o}=this._getBufferRange(i);this._bindBuffer(Number(e),r,o,n)}}_unbindBuffers(){for(let e in this.buffers)this.gl.bindBufferBase(35982,Number(e),null)}_bindBuffer(e,i,r=0,n){let o=i&&i.handle;!o||n===void 0?this.gl.bindBufferBase(35982,e,o):this.gl.bindBufferRange(35982,e,o,r,n)}}});var As,wx=A(()=>{ee();As=class extends Zr{device;handle;_timestampPairs=[];_pendingReads=new Set;_occlusionQuery=null;_occlusionActive=!1;get[Symbol.toStringTag](){return"QuerySet"}constructor(e,i){if(super(e,i),this.device=e,i.type==="timestamp"){if(i.count<2)throw new Error("Timestamp QuerySet requires at least two query slots");this._timestampPairs=new Array(Math.ceil(i.count/2)).fill(null).map(()=>({activeQuery:null,completedQueries:[]})),this.handle=null}else{if(i.count>1)throw new Error("WebGL occlusion QuerySet can only have one value");let r=this.device.gl.createQuery();if(!r)throw new Error("WebGL query not supported");this.handle=r}Object.seal(this)}destroy(){if(!this.destroyed){this.handle&&this.device.gl.deleteQuery(this.handle);for(let e of this._timestampPairs){e.activeQuery&&(this._cancelPendingQuery(e.activeQuery),this.device.gl.deleteQuery(e.activeQuery.handle));for(let i of e.completedQueries)this._cancelPendingQuery(i),this.device.gl.deleteQuery(i.handle)}this._occlusionQuery&&(this._cancelPendingQuery(this._occlusionQuery),this.device.gl.deleteQuery(this._occlusionQuery.handle));for(let e of Array.from(this._pendingReads))this._cancelPendingQuery(e);this.destroyResource()}}isResultAvailable(e){return this.props.type==="timestamp"?e===void 0?this._timestampPairs.some((i,r)=>this._isTimestampPairAvailable(r)):this._isTimestampPairAvailable(this._getTimestampPairIndex(e)):this._occlusionQuery?this._pollQueryAvailability(this._occlusionQuery):!1}async readResults(e){let i=e?.firstQuery||0,r=e?.queryCount||this.props.count-i;if(this._validateRange(i,r),this.props.type==="timestamp"){let n=new Array(r).fill(0n),o=Math.floor(i/2),s=Math.floor((i+r-1)/2);for(let a=o;a<=s;a++){let l=await this._consumeTimestampPairResult(a),c=a*2,u=c+1;c>=i&&c<i+r&&(n[c-i]=0n),u>=i&&u<i+r&&(n[u-i]=l)}return n}if(!this._occlusionQuery)throw new Error("Occlusion query has not been started");return[await this._consumeQueryResult(this._occlusionQuery)]}async readTimestampDuration(e,i){if(this.props.type!=="timestamp")throw new Error("Timestamp durations require a timestamp QuerySet");if(e<0||i>=this.props.count||i<=e)throw new Error("Timestamp duration range is out of bounds");if(e%2!==0||i!==e+1)throw new Error("WebGL timestamp durations require adjacent even/odd query indices");let r=await this._consumeTimestampPairResult(this._getTimestampPairIndex(e));return Number(r)/1e6}beginOcclusionQuery(){if(this.props.type!=="occlusion")throw new Error("Occlusion queries require an occlusion QuerySet");if(!this.handle)throw new Error("WebGL occlusion query is not available");if(this._occlusionActive)throw new Error("Occlusion query is already active");this.device.gl.beginQuery(35887,this.handle),this._occlusionQuery={handle:this.handle,promise:null,result:null,disjoint:!1,cancelled:!1,pollRequestId:null,resolve:null,reject:null},this._occlusionActive=!0}endOcclusionQuery(){if(!this._occlusionActive)throw new Error("Occlusion query is not active");this.device.gl.endQuery(35887),this._occlusionActive=!1}writeTimestamp(e){if(this.props.type!=="timestamp")throw new Error("Timestamp writes require a timestamp QuerySet");let i=this._getTimestampPairIndex(e),r=this._timestampPairs[i];if(e%2===0){if(r.activeQuery)throw new Error("Timestamp query pair is already active");let n=this.device.gl.createQuery();if(!n)throw new Error("WebGL query not supported");let o={handle:n,promise:null,result:null,disjoint:!1,cancelled:!1,pollRequestId:null,resolve:null,reject:null};this.device.gl.beginQuery(35007,n),r.activeQuery=o;return}if(!r.activeQuery)throw new Error("Timestamp query pair was ended before it was started");this.device.gl.endQuery(35007),r.completedQueries.push(r.activeQuery),r.activeQuery=null}_validateRange(e,i){if(e<0||i<0||e+i>this.props.count)throw new Error("Query read range is out of bounds")}_getTimestampPairIndex(e){if(e<0||e>=this.props.count)throw new Error("Query index is out of bounds");return Math.floor(e/2)}_isTimestampPairAvailable(e){let i=this._timestampPairs[e];return!i||i.completedQueries.length===0?!1:this._pollQueryAvailability(i.completedQueries[0])}_pollQueryAvailability(e){if(e.cancelled||this.destroyed)return e.result=0n,!0;if(e.result!==null||e.disjoint)return!0;if(!this.device.gl.getQueryParameter(e.handle,34919))return!1;let r=!!this.device.gl.getParameter(36795);return e.disjoint=r,e.result=r?0n:BigInt(this.device.gl.getQueryParameter(e.handle,34918)),!0}async _consumeTimestampPairResult(e){let i=this._timestampPairs[e];if(!i||i.completedQueries.length===0)throw new Error("Timestamp query pair has no completed result");let r=i.completedQueries.shift();try{return await this._consumeQueryResult(r)}finally{this.device.gl.deleteQuery(r.handle)}}_consumeQueryResult(e){return e.promise||(this._pendingReads.add(e),e.promise=new Promise((i,r)=>{e.resolve=i,e.reject=r;let n=()=>{if(e.pollRequestId=null,e.cancelled||this.destroyed){this._pendingReads.delete(e),e.promise=null,e.resolve=null,e.reject=null,i(0n);return}if(!this._pollQueryAvailability(e)){e.pollRequestId=this._requestAnimationFrame(n);return}this._pendingReads.delete(e),e.promise=null,e.resolve=null,e.reject=null,e.disjoint?r(new Error("GPU timestamp query was invalidated by a disjoint event")):i(e.result||0n)};n()})),e.promise}_cancelPendingQuery(e){if(this._pendingReads.delete(e),e.cancelled=!0,e.pollRequestId!==null&&(this._cancelAnimationFrame(e.pollRequestId),e.pollRequestId=null),e.resolve){let i=e.resolve;e.promise=null,e.resolve=null,e.reject=null,i(0n)}}_requestAnimationFrame(e){return requestAnimationFrame(e)}_cancelAnimationFrame(e){cancelAnimationFrame(e)}}});var ws,Rx=A(()=>{ee();ws=class extends Qr{device;gl;handle;signaled;_signaled=!1;constructor(e,i={}){super(e,{}),this.device=e,this.gl=e.gl;let r=this.props.handle||this.gl.fenceSync(this.gl.SYNC_GPU_COMMANDS_COMPLETE,0);if(!r)throw new Error("Failed to create WebGL fence");this.handle=r,this.signaled=new Promise(n=>{let o=()=>{let s=this.gl.clientWaitSync(this.handle,0,0);s===this.gl.ALREADY_SIGNALED||s===this.gl.CONDITION_SATISFIED?(this._signaled=!0,n()):setTimeout(o,1)};o()})}isSignaled(){if(this._signaled)return!0;let e=this.gl.getSyncParameter(this.handle,this.gl.SYNC_STATUS);return this._signaled=e===this.gl.SIGNALED,this._signaled}destroy(){this.destroyed||this.gl.deleteSync(this.handle)}}});function fu(t){switch(t){case 6406:case 33326:case 6403:case 36244:return 1;case 33339:case 33340:case 33328:case 33320:case 33319:return 2;case 6407:case 36248:case 34837:return 3;case 6408:case 36249:case 34836:return 4;default:return 0}}function kx(t){switch(t){case 5121:return 1;case 33635:case 32819:case 32820:return 2;case 5126:return 4;default:return 0}}var Ex=A(()=>{});function Ix(t,e){let{sourceX:i=0,sourceY:r=0,sourceAttachment:n=0}=e||{},{target:o=null,sourceWidth:s,sourceHeight:a,sourceDepth:l,sourceFormat:c,sourceType:u}=e||{},{framebuffer:d,deleteFramebuffer:h}=Fx(t),{gl:f,handle:g}=d;s||=d.width,a||=d.height;let x=d.colorAttachments[n]?.texture;if(!x)throw new Error(`Invalid framebuffer attachment ${n}`);l=x?.depth||1,c||=x?.glFormat||6408,u||=x?.glType||5121,o=zw(o,u,c,s,a,l);let b=je.getDataType(o);u=u||dx(b);let v=f.bindFramebuffer(36160,g);return f.readBuffer(36064+n),f.readPixels(i,r,s,a,c,u,o),f.readBuffer(36064),f.bindFramebuffer(36160,v||null),h&&d.destroy(),o}function Dx(t,e){let{target:i,sourceX:r=0,sourceY:n=0,sourceFormat:o=6408,targetByteOffset:s=0}=e||{},{sourceWidth:a,sourceHeight:l,sourceType:c}=e||{},{framebuffer:u,deleteFramebuffer:d}=Fx(t);a=a||u.width,l=l||u.height;let h=u;c=c||5121;let f=i;if(!f){let x=fu(o),b=kx(c),v=s+a*l*x*b;f=h.device.createBuffer({byteLength:v})}let g=t.device.createCommandEncoder();return g.copyTextureToBuffer({sourceTexture:t,width:a,height:l,origin:[r,n],destinationBuffer:f,byteOffset:s}),g.destroy(),d&&u.destroy(),f}function Fx(t){return t instanceof bi?{framebuffer:t,deleteFramebuffer:!1}:{framebuffer:Lw(t),deleteFramebuffer:!0}}function Lw(t,e){let{device:i,width:r,height:n,id:o}=t;return i.createFramebuffer({...e,id:`framebuffer-for-${o}`,width:r,height:n,colorAttachments:[t]})}function zw(t,e,i,r,n,o){if(t)return t;e||=5121;let s=ps(e),a=je.getTypedArrayConstructor(s),l=fu(i);return new a(r*n*l)}var Mx=A(()=>{ee();vs();Ex();uu()});var gu={};_d(gu,{WebGLDevice:()=>pu});function Ww(t,e,i){switch(i.length){case 1:t.gl.vertexAttrib1fv(e,i);break;case 2:t.gl.vertexAttrib2fv(e,i);break;case 3:t.gl.vertexAttrib3fv(e,i);break;case 4:t.gl.vertexAttrib4fv(e,i);break;default:}}function Vw(t,e,i){t.gl.vertexAttribI4iv(e,i)}function Hw(t,e,i){t.gl.vertexAttribI4uiv(e,i)}function $w(t,e){if(!t||!e||t.length!==e.length||t.constructor!==e.constructor)return!1;for(let i=0;i<t.length;++i)if(t[i]!==e[i])return!1;return!0}var pu,mu=A(()=>{ee();Ko();Nm();Go();Um();Gm();Ym();jm();Km();Xc();Gc();ar();Zm();ss();ex();rx();ms();rs();ux();xx();bx();Px();Ax();wx();Rx();Mx();nr();fs();hn();pu=class t extends ot{static getDeviceFromContext(e){return e?e.luma?.device??null:null}type="webgl";handle;features;limits;info;canvasContext;preferredColorFormat="rgba8unorm";preferredDepthFormat="depth24plus";commandEncoder;lost;_resolveContextLost;gl;_constants;extensions;_polyfilled=!1;spectorJS;get[Symbol.toStringTag](){return"WebGLDevice"}toString(){return`${this[Symbol.toStringTag]}(${this.id})`}isVertexFormatSupported(e){return e!=="unorm8x4-bgra"}constructor(e){super({...e,id:e.id||qm("webgl-device")});let i=ot._getCanvasContextProps(e);if(!i)throw new Error("WebGLDevice requires props.createCanvasContext to be set");let r=i.canvas?.gl??null,n=t.getDeviceFromContext(r);if(n)throw new Error(`WebGL context already attached to device ${n.id}`);this.canvasContext=new ns(this,i),this.lost=new Promise(u=>{this._resolveContextLost=u});let o={...e.webgl};i.alphaMode==="premultiplied"&&(o.premultipliedAlpha=!0),e.powerPreference!==void 0&&(o.powerPreference=e.powerPreference),e.failIfMajorPerformanceCaveat!==void 0&&(o.failIfMajorPerformanceCaveat=e.failIfMajorPerformanceCaveat);let a=this.props._handle||Mm(this.canvasContext.canvas,{onContextLost:u=>this._resolveContextLost?.({reason:"destroyed",message:"Entered sleep mode, or too many apps or browser tabs are using the GPU."}),onContextRestored:u=>console.log("WebGL context restored")},o);if(!a)throw new Error("WebGL context creation failed");if(n=t.getDeviceFromContext(a),n){if(e._reuseDevices)return _.log(1,`Not creating a new Device, instead returning a reference to Device ${n.id} already attached to WebGL context`,n)(),this.canvasContext.destroy(),n._reused=!0,n;throw new Error(`WebGL context already attached to device ${n.id}`)}this.handle=a,this.gl=a,this.spectorJS=Sm({...this.props,gl:this.handle});let l=Ai(this.handle);l.device=this,l.extensions||(l.extensions={}),this.extensions=l.extensions,this.info=Bm(this.gl,this.extensions),this.limits=new is(this.gl),this.features=new ts(this.gl,this.extensions,this.props._disabledFeatures),this.props._initializeFeatures&&this.features.initializeFeatures(),new Be(this.gl,{log:(...u)=>_.log(1,...u)()}).trackState(this.gl,{copyState:!1}),(e.debug||e.debugWebGL)&&(this.gl=Tm(this.gl,{debugWebGL:!0,traceWebGL:e.debugWebGL}),_.warn("WebGL debug mode activated. Performance reduced.")()),e.debugWebGL&&(_.level=Math.max(_.level,1)),this.commandEncoder=new gn(this,{id:`${this}-command-encoder`}),this.canvasContext._startObservers()}destroy(){if(this.commandEncoder?.destroy(),!this.props._reuseDevices&&!this._reused){let e=Ai(this.handle);e.device=null}}get isLost(){return this.gl.isContextLost()}createCanvasContext(e){throw new Error("WebGL only supports a single canvas")}createPresentationContext(e){return new os(this,e||{})}createBuffer(e){let i=this._normalizeBufferProps(e);return new ct(this,i)}createTexture(e){return new wt(this,e)}createExternalTexture(e){throw new Error("createExternalTexture() not implemented")}createSampler(e){return new hs(this,e)}createShader(e){return new ls(this,e)}createFramebuffer(e){return new Pt(this,e)}createVertexArray(e){return new Ps(this,e)}createTransformFeedback(e){return new Cs(this,e)}createQuerySet(e){return new As(this,e)}createFence(){return new ws(this)}createRenderPipeline(e){return new xs(this,e)}_createSharedRenderPipelineWebGL(e){return new bs(this,e)}createComputePipeline(e){throw new Error("ComputePipeline not supported in WebGL")}createCommandEncoder(e={}){return new gn(this,e)}submit(e){let i=null;e||({submittedCommandEncoder:i,commandBuffer:e}=this._finalizeDefaultCommandEncoderForSubmit());try{e._executeCommands(),i&&i.resolveTimeProfilingQuerySet().then(()=>{this.commandEncoder._gpuTimeMs=i._gpuTimeMs}).catch(()=>{})}finally{e.destroy()}}_finalizeDefaultCommandEncoderForSubmit(){let e=this.commandEncoder,i=e.finish();return this.commandEncoder.destroy(),this.commandEncoder=this.createCommandEncoder({id:e.props.id,timeProfilingQuerySet:e.getTimeProfilingQuerySet()}),{submittedCommandEncoder:e,commandBuffer:i}}readPixelsToArrayWebGL(e,i){return Ix(e,i)}readPixelsToBufferWebGL(e,i){return Dx(e,i)}setParametersWebGL(e){at(this.gl,e)}getParametersWebGL(e){return jo(this.gl,e)}withParametersWebGL(e,i){return Ct(this.gl,e,i)}resetWebGL(){_.warn("WebGLDevice.resetWebGL is deprecated, use only for debugging")(),km(this.gl)}_getDeviceSpecificTextureFormatCapabilities(e){return Hm(this.gl,e,this.extensions)}loseDevice(){let e=!1,r=this.getExtension("WEBGL_lose_context").WEBGL_lose_context;return r&&(e=!0,r.loseContext()),this._resolveContextLost?.({reason:"destroyed",message:"Application triggered context loss"}),e}pushState(){Be.get(this.gl).push()}popState(){Be.get(this.gl).pop()}getGLKey(e,i){let r=Number(e);for(let n in this.gl)if(this.gl[n]===r)return`GL.${n}`;return i?.emptyIfUnknown?"":String(e)}getGLKeys(e){let i={emptyIfUnknown:!0};return Object.entries(e).reduce((r,[n,o])=>(r[`${n}:${this.getGLKey(n,i)}`]=`${o}:${this.getGLKey(o,i)}`,r),{})}setConstantAttributeWebGL(e,i){let r=this.limits.maxVertexAttributes;this._constants=this._constants||new Array(r).fill(null);let n=this._constants[e];switch(n&&$w(n,i)&&_.info(1,`setConstantAttributeWebGL(${e}) could have been skipped, value unchanged`)(),this._constants[e]=i,i.constructor){case Float32Array:Ww(this,e,i);break;case Int32Array:Vw(this,e,i);break;case Uint32Array:Hw(this,e,i);break;default:throw new Error("constant")}}getExtension(e){return lt(this.gl,e,this.extensions),this.extensions}_setWebGLDebugMetadata(e,i,r){e.luma=i;let n={props:r.spector,id:r.spector.id};e.__SPECTOR_Metadata=n}}});function Xw(t){return typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext?!0:!!(t&&typeof t.createVertexArray=="function")}var mn,xu,yu,Nx=A(()=>{ee();mm();Xc();Gc();mn=1,xu=class extends Ur{type="webgl";constructor(){super(),ot.defaultProps={...ot.defaultProps,...Yo}}enforceWebGL2(e){gm(e)}isSupported(){return typeof WebGL2RenderingContext<"u"}isDeviceHandle(e){return typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext?!0:(typeof WebGLRenderingContext<"u"&&e instanceof WebGLRenderingContext&&_.warn("WebGL1 is not supported",e)(),!1)}async attach(e,i={}){let{WebGLDevice:r}=await Promise.resolve().then(()=>(mu(),gu));if(e instanceof r)return e;let n=r.getDeviceFromContext(e);if(n)return n;if(!Xw(e))throw new Error("Invalid WebGL2RenderingContext");let o=i.createCanvasContext===!0?{}:i.createCanvasContext;return new r({...i,_handle:e,createCanvasContext:{canvas:e.canvas,autoResize:!1,...o}})}async create(e={}){let{WebGLDevice:i}=await Promise.resolve().then(()=>(mu(),gu)),r=[];(e.debugWebGL||e.debug)&&r.push(_m()),e.debugSpectorJS&&r.push(ym(e));let n=await Promise.allSettled(r);for(let o of n)o.status==="rejected"&&_.error(`Failed to initialize debug libraries ${o.reason}`)();try{let o=new i(e);_.groupCollapsed(mn,`WebGLDevice ${o.id} created`)();let s=`${o._reused?"Reusing":"Created"} device with WebGL2 ${o.props.debug?"debug ":""}context: ${o.info.vendor}, ${o.info.renderer} for canvas: ${o.canvasContext.id}`;return _.probe(mn,s)(),_.table(mn,o.info)(),o}finally{_.groupEnd(mn)(),_.info(mn,"%cWebGL call tracing: luma.log.set('debug-webgl') ","color: white; background: blue; padding: 2px 6px; border-radius: 3px;")()}}};yu=new xu});var hu=A(()=>{Nx();ss();Ko()});var da="http://www.w3.org/1999/xhtml",Td={svg:"http://www.w3.org/2000/svg",xhtml:da,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function pr(t){var e=t+="",i=e.indexOf(":");return i>=0&&(e=t.slice(0,i))!=="xmlns"&&(t=t.slice(i+1)),Td.hasOwnProperty(e)?{space:Td[e],local:t}:t}function J0(t){return function(){var e=this.ownerDocument,i=this.namespaceURI;return i===da&&e.documentElement.namespaceURI===da?e.createElement(t):e.createElementNS(i,t)}}function ey(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Pd(t){var e=pr(t);return(e.local?ey:J0)(e)}function ty(){}function Fn(t){return t==null?ty:function(){return this.querySelector(t)}}function iy(t){typeof t!="function"&&(t=Fn(t));for(var e=this._groups,i=e.length,r=new Array(i),n=0;n<i;++n)for(var o=e[n],s=o.length,a=r[n]=new Array(s),l,c,u=0;u<s;++u)(l=o[u])&&(c=t.call(l,l.__data__,u,o))&&("__data__"in l&&(c.__data__=l.__data__),a[u]=c);return new Le(r,this._parents)}function ry(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function ny(){return[]}function fa(t){return t==null?ny:function(){return this.querySelectorAll(t)}}function oy(t){return function(){return ry(t.apply(this,arguments))}}function sy(t){typeof t=="function"?t=oy(t):t=fa(t);for(var e=this._groups,i=e.length,r=[],n=[],o=0;o<i;++o)for(var s=e[o],a=s.length,l,c=0;c<a;++c)(l=s[c])&&(r.push(t.call(l,l.__data__,c,s)),n.push(l));return new Le(r,n)}function pa(t){return function(){return this.matches(t)}}function Cd(t){return function(e){return e.matches(t)}}var ay=Array.prototype.find;function ly(t){return function(){return ay.call(this.children,t)}}function cy(){return this.firstElementChild}function uy(t){return this.select(t==null?cy:ly(typeof t=="function"?t:Cd(t)))}var dy=Array.prototype.filter;function hy(){return Array.from(this.children)}function fy(t){return function(){return dy.call(this.children,t)}}function py(t){return this.selectAll(t==null?hy:fy(typeof t=="function"?t:Cd(t)))}function gy(t){typeof t!="function"&&(t=pa(t));for(var e=this._groups,i=e.length,r=new Array(i),n=0;n<i;++n)for(var o=e[n],s=o.length,a=r[n]=[],l,c=0;c<s;++c)(l=o[c])&&t.call(l,l.__data__,c,o)&&a.push(l);return new Le(r,this._parents)}function Ad(t){return new Array(t.length)}function my(){return new Le(this._enter||this._groups.map(Ad),this._parents)}function Dn(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}Dn.prototype={constructor:Dn,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function xy(t){return function(){return t}}function yy(t,e,i,r,n,o){for(var s=0,a,l=e.length,c=o.length;s<c;++s)(a=e[s])?(a.__data__=o[s],r[s]=a):i[s]=new Dn(t,o[s]);for(;s<l;++s)(a=e[s])&&(n[s]=a)}function Sy(t,e,i,r,n,o,s){var a,l,c=new Map,u=e.length,d=o.length,h=new Array(u),f;for(a=0;a<u;++a)(l=e[a])&&(h[a]=f=s.call(l,l.__data__,a,e)+"",c.has(f)?n[a]=l:c.set(f,l));for(a=0;a<d;++a)f=s.call(t,o[a],a,o)+"",(l=c.get(f))?(r[a]=l,l.__data__=o[a],c.delete(f)):i[a]=new Dn(t,o[a]);for(a=0;a<u;++a)(l=e[a])&&c.get(h[a])===l&&(n[a]=l)}function vy(t){return t.__data__}function by(t,e){if(!arguments.length)return Array.from(this,vy);var i=e?Sy:yy,r=this._parents,n=this._groups;typeof t!="function"&&(t=xy(t));for(var o=n.length,s=new Array(o),a=new Array(o),l=new Array(o),c=0;c<o;++c){var u=r[c],d=n[c],h=d.length,f=_y(t.call(u,u&&u.__data__,c,r)),g=f.length,x=a[c]=new Array(g),b=s[c]=new Array(g),v=l[c]=new Array(h);i(u,d,x,b,v,f,e);for(var R=0,P=0,y,T;R<g;++R)if(y=x[R]){for(R>=P&&(P=R+1);!(T=b[P])&&++P<g;);y._next=T||null}}return s=new Le(s,r),s._enter=a,s._exit=l,s}function _y(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function Ty(){return new Le(this._exit||this._groups.map(Ad),this._parents)}function Py(t,e,i){var r=this.enter(),n=this,o=this.exit();return typeof t=="function"?(r=t(r),r&&(r=r.selection())):r=r.append(t+""),e!=null&&(n=e(n),n&&(n=n.selection())),i==null?o.remove():i(o),r&&n?r.merge(n).order():n}function Cy(t){for(var e=t.selection?t.selection():t,i=this._groups,r=e._groups,n=i.length,o=r.length,s=Math.min(n,o),a=new Array(n),l=0;l<s;++l)for(var c=i[l],u=r[l],d=c.length,h=a[l]=new Array(d),f,g=0;g<d;++g)(f=c[g]||u[g])&&(h[g]=f);for(;l<n;++l)a[l]=i[l];return new Le(a,this._parents)}function Ay(){for(var t=this._groups,e=-1,i=t.length;++e<i;)for(var r=t[e],n=r.length-1,o=r[n],s;--n>=0;)(s=r[n])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function wy(t){t||(t=Ry);function e(d,h){return d&&h?t(d.__data__,h.__data__):!d-!h}for(var i=this._groups,r=i.length,n=new Array(r),o=0;o<r;++o){for(var s=i[o],a=s.length,l=n[o]=new Array(a),c,u=0;u<a;++u)(c=s[u])&&(l[u]=c);l.sort(e)}return new Le(n,this._parents).order()}function Ry(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function ky(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function Ey(){return Array.from(this)}function Iy(){for(var t=this._groups,e=0,i=t.length;e<i;++e)for(var r=t[e],n=0,o=r.length;n<o;++n){var s=r[n];if(s)return s}return null}function Dy(){let t=0;for(let e of this)++t;return t}function Fy(){return!this.node()}function My(t){for(var e=this._groups,i=0,r=e.length;i<r;++i)for(var n=e[i],o=0,s=n.length,a;o<s;++o)(a=n[o])&&t.call(a,a.__data__,o,n);return this}function Ny(t){return function(){this.removeAttribute(t)}}function By(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Oy(t,e){return function(){this.setAttribute(t,e)}}function Uy(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function Ly(t,e){return function(){var i=e.apply(this,arguments);i==null?this.removeAttribute(t):this.setAttribute(t,i)}}function zy(t,e){return function(){var i=e.apply(this,arguments);i==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,i)}}function Wy(t,e){var i=pr(t);if(arguments.length<2){var r=this.node();return i.local?r.getAttributeNS(i.space,i.local):r.getAttribute(i)}return this.each((e==null?i.local?By:Ny:typeof e=="function"?i.local?zy:Ly:i.local?Uy:Oy)(i,e))}function wd(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function Vy(t){return function(){this.style.removeProperty(t)}}function Hy(t,e,i){return function(){this.style.setProperty(t,e,i)}}function $y(t,e,i){return function(){var r=e.apply(this,arguments);r==null?this.style.removeProperty(t):this.style.setProperty(t,r,i)}}function Xy(t,e,i){return arguments.length>1?this.each((e==null?Vy:typeof e=="function"?$y:Hy)(t,e,i??"")):ai(this.node(),t)}function ai(t,e){return t.style.getPropertyValue(e)||wd(t).getComputedStyle(t,null).getPropertyValue(e)}function Gy(t){return function(){delete this[t]}}function Yy(t,e){return function(){this[t]=e}}function jy(t,e){return function(){var i=e.apply(this,arguments);i==null?delete this[t]:this[t]=i}}function Ky(t,e){return arguments.length>1?this.each((e==null?Gy:typeof e=="function"?jy:Yy)(t,e)):this.node()[t]}function Rd(t){return t.trim().split(/^|\s+/)}function ga(t){return t.classList||new kd(t)}function kd(t){this._node=t,this._names=Rd(t.getAttribute("class")||"")}kd.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function Ed(t,e){for(var i=ga(t),r=-1,n=e.length;++r<n;)i.add(e[r])}function Id(t,e){for(var i=ga(t),r=-1,n=e.length;++r<n;)i.remove(e[r])}function qy(t){return function(){Ed(this,t)}}function Zy(t){return function(){Id(this,t)}}function Qy(t,e){return function(){(e.apply(this,arguments)?Ed:Id)(this,t)}}function Jy(t,e){var i=Rd(t+"");if(arguments.length<2){for(var r=ga(this.node()),n=-1,o=i.length;++n<o;)if(!r.contains(i[n]))return!1;return!0}return this.each((typeof e=="function"?Qy:e?qy:Zy)(i,e))}function eS(){this.textContent=""}function tS(t){return function(){this.textContent=t}}function iS(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function rS(t){return arguments.length?this.each(t==null?eS:(typeof t=="function"?iS:tS)(t)):this.node().textContent}function nS(){this.innerHTML=""}function oS(t){return function(){this.innerHTML=t}}function sS(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function aS(t){return arguments.length?this.each(t==null?nS:(typeof t=="function"?sS:oS)(t)):this.node().innerHTML}function lS(){this.nextSibling&&this.parentNode.appendChild(this)}function cS(){return this.each(lS)}function uS(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function dS(){return this.each(uS)}function hS(t){var e=typeof t=="function"?t:Pd(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function fS(){return null}function pS(t,e){var i=typeof t=="function"?t:Pd(t),r=e==null?fS:typeof e=="function"?e:Fn(e);return this.select(function(){return this.insertBefore(i.apply(this,arguments),r.apply(this,arguments)||null)})}function gS(){var t=this.parentNode;t&&t.removeChild(this)}function mS(){return this.each(gS)}function xS(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function yS(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function SS(t){return this.select(t?yS:xS)}function vS(t){return arguments.length?this.property("__data__",t):this.node().__data__}function bS(t){return function(e){t.call(this,e,this.__data__)}}function _S(t){return t.trim().split(/^|\s+/).map(function(e){var i="",r=e.indexOf(".");return r>=0&&(i=e.slice(r+1),e=e.slice(0,r)),{type:e,name:i}})}function TS(t){return function(){var e=this.__on;if(e){for(var i=0,r=-1,n=e.length,o;i<n;++i)o=e[i],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++r]=o;++r?e.length=r:delete this.__on}}}function PS(t,e,i){return function(){var r=this.__on,n,o=bS(e);if(r){for(var s=0,a=r.length;s<a;++s)if((n=r[s]).type===t.type&&n.name===t.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=o,n.options=i),n.value=e;return}}this.addEventListener(t.type,o,i),n={type:t.type,name:t.name,value:e,listener:o,options:i},r?r.push(n):this.__on=[n]}}function CS(t,e,i){var r=_S(t+""),n,o=r.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,u;l<c;++l)for(n=0,u=a[l];n<o;++n)if((s=r[n]).type===u.type&&s.name===u.name)return u.value}return}for(a=e?PS:TS,n=0;n<o;++n)this.each(a(r[n],e,i));return this}function Dd(t,e,i){var r=wd(t),n=r.CustomEvent;typeof n=="function"?n=new n(e,i):(n=r.document.createEvent("Event"),i?(n.initEvent(e,i.bubbles,i.cancelable),n.detail=i.detail):n.initEvent(e,!1,!1)),t.dispatchEvent(n)}function AS(t,e){return function(){return Dd(this,t,e)}}function wS(t,e){return function(){return Dd(this,t,e.apply(this,arguments))}}function RS(t,e){return this.each((typeof e=="function"?wS:AS)(t,e))}function*kS(){for(var t=this._groups,e=0,i=t.length;e<i;++e)for(var r=t[e],n=0,o=r.length,s;n<o;++n)(s=r[n])&&(yield s)}var Fd=[null];function Le(t,e){this._groups=t,this._parents=e}function li(){return new Le([[document.documentElement]],Fd)}function ES(){return this}Le.prototype=li.prototype={constructor:Le,select:iy,selectAll:sy,selectChild:uy,selectChildren:py,filter:gy,data:by,enter:my,exit:Ty,join:Py,merge:Cy,selection:ES,order:Ay,sort:wy,call:ky,nodes:Ey,node:Iy,size:Dy,empty:Fy,each:My,attr:Wy,style:Xy,property:Ky,classed:Jy,text:rS,html:aS,raise:cS,lower:dS,append:hS,insert:pS,remove:mS,clone:SS,datum:vS,on:CS,dispatch:RS,[Symbol.iterator]:kS};function ge(t){return typeof t=="string"?new Le([[document.querySelector(t)]],[document.documentElement]):new Le([[t]],Fd)}var IS=0;function DS(){return new ha}function ha(){this._="@"+(++IS).toString(36)}ha.prototype=DS.prototype={constructor:ha,get:function(t){for(var e=this._;!(e in t);)if(!(t=t.parentNode))return;return t[e]},set:function(t,e){return t[this._]=e},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};function FS(t){let e;for(;e=t.sourceEvent;)t=e;return t}function et(t,e){if(t=FS(t),e===void 0&&(e=t.currentTarget),e){var i=e.ownerSVGElement||e;if(i.createSVGPoint){var r=i.createSVGPoint();return r.x=t.clientX,r.y=t.clientY,r=r.matrixTransform(e.getScreenCTM().inverse()),[r.x,r.y]}if(e.getBoundingClientRect){var n=e.getBoundingClientRect();return[t.clientX-n.left-e.clientLeft,t.clientY-n.top-e.clientTop]}}return[t.pageX,t.pageY]}var MS={value:()=>{}};function ci(){for(var t=0,e=arguments.length,i={},r;t<e;++t){if(!(r=arguments[t]+"")||r in i||/[\s.]/.test(r))throw new Error("illegal type: "+r);i[r]=[]}return new Mn(i)}function Mn(t){this._=t}function NS(t,e){return t.trim().split(/^|\s+/).map(function(i){var r="",n=i.indexOf(".");if(n>=0&&(r=i.slice(n+1),i=i.slice(0,n)),i&&!e.hasOwnProperty(i))throw new Error("unknown type: "+i);return{type:i,name:r}})}Mn.prototype=ci.prototype={constructor:Mn,on:function(t,e){var i=this._,r=NS(t+"",i),n,o=-1,s=r.length;if(arguments.length<2){for(;++o<s;)if((n=(t=r[o]).type)&&(n=BS(i[n],t.name)))return n;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(n=(t=r[o]).type)i[n]=Md(i[n],t.name,e);else if(e==null)for(n in i)i[n]=Md(i[n],t.name,null);return this},copy:function(){var t={},e=this._;for(var i in e)t[i]=e[i].slice();return new Mn(t)},call:function(t,e){if((n=arguments.length-2)>0)for(var i=new Array(n),r=0,n,o;r<n;++r)i[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],r=0,n=o.length;r<n;++r)o[r].value.apply(e,i)},apply:function(t,e,i){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],n=0,o=r.length;n<o;++n)r[n].value.apply(e,i)}};function BS(t,e){for(var i=0,r=t.length,n;i<r;++i)if((n=t[i]).name===e)return n.value}function Md(t,e,i){for(var r=0,n=t.length;r<n;++r)if(t[r].name===e){t[r]=MS,t=t.slice(0,r).concat(t.slice(r+1));break}return i!=null&&t.push({name:e,value:i}),t}var Mi=0,mr=0,gr=0,Bd=1e3,Nn,xr,Bn=0,ui=0,Un=0,yr=typeof performance=="object"&&performance.now?performance:Date,Od=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Ln(){return ui||(Od(OS),ui=yr.now()+Un)}function OS(){ui=0}function On(){this._call=this._time=this._next=null}On.prototype=xa.prototype={constructor:On,restart:function(t,e,i){if(typeof t!="function")throw new TypeError("callback is not a function");i=(i==null?Ln():+i)+(e==null?0:+e),!this._next&&xr!==this&&(xr?xr._next=this:Nn=this,xr=this),this._call=t,this._time=i,ma()},stop:function(){this._call&&(this._call=null,this._time=1/0,ma())}};function xa(t,e,i){var r=new On;return r.restart(t,e,i),r}function US(){Ln(),++Mi;for(var t=Nn,e;t;)(e=ui-t._time)>=0&&t._call.call(void 0,e),t=t._next;--Mi}function Nd(){ui=(Bn=yr.now())+Un,Mi=mr=0;try{US()}finally{Mi=0,zS(),ui=0}}function LS(){var t=yr.now(),e=t-Bn;e>Bd&&(Un-=e,Bn=t)}function zS(){for(var t,e=Nn,i,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(i=e._next,e._next=null,e=t?t._next=i:Nn=i);xr=t,ma(r)}function ma(t){if(!Mi){mr&&(mr=clearTimeout(mr));var e=t-ui;e>24?(t<1/0&&(mr=setTimeout(Nd,Math.ceil(t-yr.now()-Un)+1)),gr&&(gr=clearInterval(gr))):(gr||(Bn=yr.now(),gr=setInterval(LS,Bd)),Mi=1,Od(Nd))}}function ya(t,e,i){var r=new On;return e=e==null?0:+e,r.restart(n=>{r.stop(),t(n+e)},e,i),r}function Ui(t,e,i){t.prototype=e.prototype=i,i.constructor=t}function br(t,e){var i=Object.create(t.prototype);for(var r in e)i[r]=e[r];return i}function Wt(){}var pi=.7,Oi=1/pi,Ni="\\s*([+-]?\\d+)\\s*",Sr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",pt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",WS=/^#([0-9a-f]{3,8})$/,VS=new RegExp(`^rgb\\(${Ni},${Ni},${Ni}\\)$`),HS=new RegExp(`^rgb\\(${pt},${pt},${pt}\\)$`),$S=new RegExp(`^rgba\\(${Ni},${Ni},${Ni},${Sr}\\)$`),XS=new RegExp(`^rgba\\(${pt},${pt},${pt},${Sr}\\)$`),GS=new RegExp(`^hsl\\(${Sr},${pt},${pt}\\)$`),YS=new RegExp(`^hsla\\(${Sr},${pt},${pt},${Sr}\\)$`),Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ui(Wt,it,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Ld,formatHex:Ld,formatHex8:jS,formatHsl:KS,formatRgb:zd,toString:zd});function Ld(){return this.rgb().formatHex()}function jS(){return this.rgb().formatHex8()}function KS(){return Kd(this).formatHsl()}function zd(){return this.rgb().formatRgb()}function it(t){var e,i;return t=(t+"").trim().toLowerCase(),(e=WS.exec(t))?(i=e[1].length,e=parseInt(e[1],16),i===6?Wd(e):i===3?new be(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):i===8?zn(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):i===4?zn(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=VS.exec(t))?new be(e[1],e[2],e[3],1):(e=HS.exec(t))?new be(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=$S.exec(t))?zn(e[1],e[2],e[3],e[4]):(e=XS.exec(t))?zn(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=GS.exec(t))?$d(e[1],e[2]/100,e[3]/100,1):(e=YS.exec(t))?$d(e[1],e[2]/100,e[3]/100,e[4]):Ud.hasOwnProperty(t)?Wd(Ud[t]):t==="transparent"?new be(NaN,NaN,NaN,0):null}function Wd(t){return new be(t>>16&255,t>>8&255,t&255,1)}function zn(t,e,i,r){return r<=0&&(t=e=i=NaN),new be(t,e,i,r)}function Pa(t){return t instanceof Wt||(t=it(t)),t?(t=t.rgb(),new be(t.r,t.g,t.b,t.opacity)):new be}function _r(t,e,i,r){return arguments.length===1?Pa(t):new be(t,e,i,r??1)}function be(t,e,i,r){this.r=+t,this.g=+e,this.b=+i,this.opacity=+r}Ui(be,_r,br(Wt,{brighter(t){return t=t==null?Oi:Math.pow(Oi,t),new be(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?pi:Math.pow(pi,t),new be(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new be(hi(this.r),hi(this.g),hi(this.b),Vn(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Vd,formatHex:Vd,formatHex8:qS,formatRgb:Hd,toString:Hd}));function Vd(){return`#${di(this.r)}${di(this.g)}${di(this.b)}`}function qS(){return`#${di(this.r)}${di(this.g)}${di(this.b)}${di((isNaN(this.opacity)?1:this.opacity)*255)}`}function Hd(){let t=Vn(this.opacity);return`${t===1?"rgb(":"rgba("}${hi(this.r)}, ${hi(this.g)}, ${hi(this.b)}${t===1?")":`, ${t})`}`}function Vn(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function hi(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function di(t){return t=hi(t),(t<16?"0":"")+t.toString(16)}function $d(t,e,i,r){return r<=0?t=e=i=NaN:i<=0||i>=1?t=e=NaN:e<=0&&(t=NaN),new tt(t,e,i,r)}function Kd(t){if(t instanceof tt)return new tt(t.h,t.s,t.l,t.opacity);if(t instanceof Wt||(t=it(t)),!t)return new tt;if(t instanceof tt)return t;t=t.rgb();var e=t.r/255,i=t.g/255,r=t.b/255,n=Math.min(e,i,r),o=Math.max(e,i,r),s=NaN,a=o-n,l=(o+n)/2;return a?(e===o?s=(i-r)/a+(i<r)*6:i===o?s=(r-e)/a+2:s=(e-i)/a+4,a/=l<.5?o+n:2-o-n,s*=60):a=l>0&&l<1?0:s,new tt(s,a,l,t.opacity)}function $n(t,e,i,r){return arguments.length===1?Kd(t):new tt(t,e,i,r??1)}function tt(t,e,i,r){this.h=+t,this.s=+e,this.l=+i,this.opacity=+r}Ui(tt,$n,br(Wt,{brighter(t){return t=t==null?Oi:Math.pow(Oi,t),new tt(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?pi:Math.pow(pi,t),new tt(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,i=this.l,r=i+(i<.5?i:1-i)*e,n=2*i-r;return new be(Sa(t>=240?t-240:t+120,n,r),Sa(t,n,r),Sa(t<120?t+240:t-120,n,r),this.opacity)},clamp(){return new tt(Xd(this.h),Wn(this.s),Wn(this.l),Vn(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let t=Vn(this.opacity);return`${t===1?"hsl(":"hsla("}${Xd(this.h)}, ${Wn(this.s)*100}%, ${Wn(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Xd(t){return t=(t||0)%360,t<0?t+360:t}function Wn(t){return Math.max(0,Math.min(1,t||0))}function Sa(t,e,i){return(t<60?e+(i-e)*t/60:t<180?i:t<240?e+(i-e)*(240-t)/60:e)*255}var qd=Math.PI/180,Zd=180/Math.PI,Hn=18,Qd=.96422,Jd=1,eh=.82521,th=4/29,Bi=6/29,ih=3*Bi*Bi,ZS=Bi*Bi*Bi;function rh(t){if(t instanceof gt)return new gt(t.l,t.a,t.b,t.opacity);if(t instanceof It)return oh(t);t instanceof be||(t=Pa(t));var e=Ta(t.r),i=Ta(t.g),r=Ta(t.b),n=va((.2225045*e+.7168786*i+.0606169*r)/Jd),o,s;return e===i&&i===r?o=s=n:(o=va((.4360747*e+.3850649*i+.1430804*r)/Qd),s=va((.0139322*e+.0971045*i+.7141733*r)/eh)),new gt(116*n-16,500*(o-n),200*(n-s),t.opacity)}function nh(t,e,i,r){return arguments.length===1?rh(t):new gt(t,e,i,r??1)}function gt(t,e,i,r){this.l=+t,this.a=+e,this.b=+i,this.opacity=+r}Ui(gt,nh,br(Wt,{brighter(t){return new gt(this.l+Hn*(t??1),this.a,this.b,this.opacity)},darker(t){return new gt(this.l-Hn*(t??1),this.a,this.b,this.opacity)},rgb(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,i=isNaN(this.b)?t:t-this.b/200;return e=Qd*ba(e),t=Jd*ba(t),i=eh*ba(i),new be(_a(3.1338561*e-1.6168667*t-.4906146*i),_a(-.9787684*e+1.9161415*t+.033454*i),_a(.0719453*e-.2289914*t+1.4052427*i),this.opacity)}}));function va(t){return t>ZS?Math.pow(t,1/3):t/ih+th}function ba(t){return t>Bi?t*t*t:ih*(t-th)}function _a(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Ta(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function QS(t){if(t instanceof It)return new It(t.h,t.c,t.l,t.opacity);if(t instanceof gt||(t=rh(t)),t.a===0&&t.b===0)return new It(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*Zd;return new It(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Xn(t,e,i,r){return arguments.length===1?QS(t):new It(t,e,i,r??1)}function It(t,e,i,r){this.h=+t,this.c=+e,this.l=+i,this.opacity=+r}function oh(t){if(isNaN(t.h))return new gt(t.l,0,0,t.opacity);var e=t.h*qd;return new gt(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}Ui(It,Xn,br(Wt,{brighter(t){return new It(this.h,this.c,this.l+Hn*(t??1),this.opacity)},darker(t){return new It(this.h,this.c,this.l-Hn*(t??1),this.opacity)},rgb(){return oh(this).rgb()}}));var sh=-.14861,Ca=1.78277,Aa=-.29227,Gn=-.90649,vr=1.97294,Gd=vr*Gn,Yd=vr*Ca,jd=Ca*Aa-Gn*sh;function JS(t){if(t instanceof fi)return new fi(t.h,t.s,t.l,t.opacity);t instanceof be||(t=Pa(t));var e=t.r/255,i=t.g/255,r=t.b/255,n=(jd*r+Gd*e-Yd*i)/(jd+Gd-Yd),o=r-n,s=(vr*(i-n)-Aa*o)/Gn,a=Math.sqrt(s*s+o*o)/(vr*n*(1-n)),l=a?Math.atan2(s,o)*Zd-120:NaN;return new fi(l<0?l+360:l,a,n,t.opacity)}function Yn(t,e,i,r){return arguments.length===1?JS(t):new fi(t,e,i,r??1)}function fi(t,e,i,r){this.h=+t,this.s=+e,this.l=+i,this.opacity=+r}Ui(fi,Yn,br(Wt,{brighter(t){return t=t==null?Oi:Math.pow(Oi,t),new fi(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?pi:Math.pow(pi,t),new fi(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=isNaN(this.h)?0:(this.h+120)*qd,e=+this.l,i=isNaN(this.s)?0:this.s*e*(1-e),r=Math.cos(t),n=Math.sin(t);return new be(255*(e+i*(sh*r+Ca*n)),255*(e+i*(Aa*r+Gn*n)),255*(e+i*(vr*r)),this.opacity)}}));function ch(t,e,i,r,n){var o=t*t,s=o*t;return((1-3*t+3*o-s)*e+(4-6*o+3*s)*i+(1+3*t+3*o-3*s)*r+s*n)/6}function ev(t){var e=t.length-1;return function(i){var r=i<=0?i=0:i>=1?(i=1,e-1):Math.floor(i*e),n=t[r],o=t[r+1],s=r>0?t[r-1]:2*n-o,a=r<e-1?t[r+2]:2*o-n;return ch((i-r/e)*e,s,n,o,a)}}function tv(t){var e=t.length;return function(i){var r=Math.floor(((i%=1)<0?++i:i)*e),n=t[(r+e-1)%e],o=t[r%e],s=t[(r+1)%e],a=t[(r+2)%e];return ch((i-r/e)*e,n,o,s,a)}}var Kn=t=>()=>t;function uh(t,e){return function(i){return t+i*e}}function iv(t,e,i){return t=Math.pow(t,i),e=Math.pow(e,i)-t,i=1/i,function(r){return Math.pow(t+r*e,i)}}function Ea(t,e){var i=e-t;return i?uh(t,i>180||i<-180?i-360*Math.round(i/360):i):Kn(isNaN(t)?e:t)}function rv(t){return(t=+t)==1?Ne:function(e,i){return i-e?iv(e,i,t):Kn(isNaN(e)?i:e)}}function Ne(t,e){var i=e-t;return i?uh(t,i):Kn(isNaN(t)?e:t)}var Tr=(function t(e){var i=rv(e);function r(n,o){var s=i((n=_r(n)).r,(o=_r(o)).r),a=i(n.g,o.g),l=i(n.b,o.b),c=Ne(n.opacity,o.opacity);return function(u){return n.r=s(u),n.g=a(u),n.b=l(u),n.opacity=c(u),n+""}}return r.gamma=t,r})(1);function dh(t){return function(e){var i=e.length,r=new Array(i),n=new Array(i),o=new Array(i),s,a;for(s=0;s<i;++s)a=_r(e[s]),r[s]=a.r||0,n[s]=a.g||0,o[s]=a.b||0;return r=t(r),n=t(n),o=t(o),a.opacity=1,function(l){return a.r=r(l),a.g=n(l),a.b=o(l),a+""}}}var IR=dh(ev),DR=dh(tv);function nv(t,e){e||(e=[]);var i=t?Math.min(e.length,t.length):0,r=e.slice(),n;return function(o){for(n=0;n<i;++n)r[n]=t[n]*(1-o)+e[n]*o;return r}}function ov(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function sv(t,e){var i=e?e.length:0,r=t?Math.min(i,t.length):0,n=new Array(r),o=new Array(i),s;for(s=0;s<r;++s)n[s]=qn(t[s],e[s]);for(;s<i;++s)o[s]=e[s];return function(a){for(s=0;s<r;++s)o[s]=n[s](a);return o}}function av(t,e){var i=new Date;return t=+t,e=+e,function(r){return i.setTime(t*(1-r)+e*r),i}}function ze(t,e){return t=+t,e=+e,function(i){return t*(1-i)+e*i}}function lv(t,e){var i={},r={},n;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(n in e)n in t?i[n]=qn(t[n],e[n]):r[n]=e[n];return function(o){for(n in i)r[n]=i[n](o);return r}}var Ra=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,wa=new RegExp(Ra.source,"g");function cv(t){return function(){return t}}function uv(t){return function(e){return t(e)+""}}function Ia(t,e){var i=Ra.lastIndex=wa.lastIndex=0,r,n,o,s=-1,a=[],l=[];for(t=t+"",e=e+"";(r=Ra.exec(t))&&(n=wa.exec(e));)(o=n.index)>i&&(o=e.slice(i,o),a[s]?a[s]+=o:a[++s]=o),(r=r[0])===(n=n[0])?a[s]?a[s]+=n:a[++s]=n:(a[++s]=null,l.push({i:s,x:ze(r,n)})),i=wa.lastIndex;return i<e.length&&(o=e.slice(i),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?uv(l[0].x):cv(e):(e=l.length,function(c){for(var u=0,d;u<e;++u)a[(d=l[u]).i]=d.x(c);return a.join("")})}function qn(t,e){var i=typeof e,r;return e==null||i==="boolean"?Kn(e):(i==="number"?ze:i==="string"?(r=it(e))?(e=r,Tr):Ia:e instanceof it?Tr:e instanceof Date?av:ov(e)?nv:Array.isArray(e)?sv:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?lv:ze)(t,e)}function hh(t,e){return t=+t,e=+e,function(i){return Math.round(t*(1-i)+e*i)}}var ah=180/Math.PI,ka={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function fh(t,e,i,r,n,o){var s,a,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*i+e*r)&&(i-=t*l,r-=e*l),(a=Math.sqrt(i*i+r*r))&&(i/=a,r/=a,l/=a),t*r<e*i&&(t=-t,e=-e,l=-l,s=-s),{translateX:n,translateY:o,rotate:Math.atan2(e,t)*ah,skewX:Math.atan(l)*ah,scaleX:s,scaleY:a}}var jn;function dv(t){let e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?ka:fh(e.a,e.b,e.c,e.d,e.e,e.f)}function hv(t){return t==null||(jn||(jn=document.createElementNS("http://www.w3.org/2000/svg","g")),jn.setAttribute("transform",t),!(t=jn.transform.baseVal.consolidate()))?ka:(t=t.matrix,fh(t.a,t.b,t.c,t.d,t.e,t.f))}function ph(t,e,i,r){function n(c){return c.length?c.pop()+" ":""}function o(c,u,d,h,f,g){if(c!==d||u!==h){var x=f.push("translate(",null,e,null,i);g.push({i:x-4,x:ze(c,d)},{i:x-2,x:ze(u,h)})}else(d||h)&&f.push("translate("+d+e+h+i)}function s(c,u,d,h){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),h.push({i:d.push(n(d)+"rotate(",null,r)-2,x:ze(c,u)})):u&&d.push(n(d)+"rotate("+u+r)}function a(c,u,d,h){c!==u?h.push({i:d.push(n(d)+"skewX(",null,r)-2,x:ze(c,u)}):u&&d.push(n(d)+"skewX("+u+r)}function l(c,u,d,h,f,g){if(c!==d||u!==h){var x=f.push(n(f)+"scale(",null,",",null,")");g.push({i:x-4,x:ze(c,d)},{i:x-2,x:ze(u,h)})}else(d!==1||h!==1)&&f.push(n(f)+"scale("+d+","+h+")")}return function(c,u){var d=[],h=[];return c=t(c),u=t(u),o(c.translateX,c.translateY,u.translateX,u.translateY,d,h),s(c.rotate,u.rotate,d,h),a(c.skewX,u.skewX,d,h),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,d,h),c=u=null,function(f){for(var g=-1,x=h.length,b;++g<x;)d[(b=h[g]).i]=b.x(f);return d.join("")}}}var gh=ph(dv,"px, ","px)","deg)"),mh=ph(hv,", ",")",")"),fv=1e-12;function lh(t){return((t=Math.exp(t))+1/t)/2}function pv(t){return((t=Math.exp(t))-1/t)/2}function gv(t){return((t=Math.exp(2*t))-1)/(t+1)}var xh=(function t(e,i,r){function n(o,s){var a=o[0],l=o[1],c=o[2],u=s[0],d=s[1],h=s[2],f=u-a,g=d-l,x=f*f+g*g,b,v;if(x<fv)v=Math.log(h/c)/e,b=function(k){return[a+k*f,l+k*g,c*Math.exp(e*k*v)]};else{var R=Math.sqrt(x),P=(h*h-c*c+r*x)/(2*c*i*R),y=(h*h-c*c-r*x)/(2*h*i*R),T=Math.log(Math.sqrt(P*P+1)-P),C=Math.log(Math.sqrt(y*y+1)-y);v=(C-T)/e,b=function(k){var U=k*v,z=lh(T),H=c/(i*R)*(z*gv(e*U+T)-pv(T));return[a+H*f,l+H*g,c*z/lh(e*U+T)]}}return b.duration=Math.abs(v)*1e3*e/Math.SQRT2,b}return n.rho=function(o){var s=Math.max(.001,+o),a=s*s,l=a*a;return t(s,a,l)},n})(Math.SQRT2,2,4);function yh(t){return function(e,i){var r=t((e=$n(e)).h,(i=$n(i)).h),n=Ne(e.s,i.s),o=Ne(e.l,i.l),s=Ne(e.opacity,i.opacity);return function(a){return e.h=r(a),e.s=n(a),e.l=o(a),e.opacity=s(a),e+""}}}var FR=yh(Ea),MR=yh(Ne);function Sh(t){return function(e,i){var r=t((e=Xn(e)).h,(i=Xn(i)).h),n=Ne(e.c,i.c),o=Ne(e.l,i.l),s=Ne(e.opacity,i.opacity);return function(a){return e.h=r(a),e.c=n(a),e.l=o(a),e.opacity=s(a),e+""}}}var NR=Sh(Ea),BR=Sh(Ne);function vh(t){return(function e(i){i=+i;function r(n,o){var s=t((n=Yn(n)).h,(o=Yn(o)).h),a=Ne(n.s,o.s),l=Ne(n.l,o.l),c=Ne(n.opacity,o.opacity);return function(u){return n.h=s(u),n.s=a(u),n.l=l(Math.pow(u,i)),n.opacity=c(u),n+""}}return r.gamma=e,r})(1)}var OR=vh(Ea),UR=vh(Ne);var Da=t=>+t;function Fa(t){return t*t}function Ma(t){return t*(2-t)}function Na(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function _h(t){return t*t*t}function Th(t){return--t*t*t+1}function Zn(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var Ba=3,zR=(function t(e){e=+e;function i(r){return Math.pow(r,e)}return i.exponent=t,i})(Ba),WR=(function t(e){e=+e;function i(r){return 1-Math.pow(1-r,e)}return i.exponent=t,i})(Ba),VR=(function t(e){e=+e;function i(r){return((r*=2)<=1?Math.pow(r,e):2-Math.pow(2-r,e))/2}return i.exponent=t,i})(Ba),Ph=Math.PI,Ch=Ph/2;function Ah(t){return+t==1?1:1-Math.cos(t*Ch)}function wh(t){return Math.sin(t*Ch)}function Rh(t){return(1-Math.cos(Ph*t))/2}function Vt(t){return(Math.pow(2,-10*t)-.0009765625)*1.0009775171065494}function kh(t){return Vt(1-+t)}function Eh(t){return 1-Vt(t)}function Ih(t){return((t*=2)<=1?Vt(1-t):2-Vt(t-1))/2}function Dh(t){return 1-Math.sqrt(1-t*t)}function Fh(t){return Math.sqrt(1- --t*t)}function Mh(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}var bh=4/11,HR=6/11,$R=8/11,XR=3/4,GR=9/11,YR=10/11,jR=15/16,KR=21/22,qR=63/64,ZR=1/bh/bh;var Oa=1.70158,QR=(function t(e){e=+e;function i(r){return(r=+r)*r*(e*(r-1)+r)}return i.overshoot=t,i})(Oa),JR=(function t(e){e=+e;function i(r){return--r*r*((r+1)*e+r)+1}return i.overshoot=t,i})(Oa),e2=(function t(e){e=+e;function i(r){return((r*=2)<1?r*r*((e+1)*r-e):(r-=2)*r*((e+1)*r+e)+2)/2}return i.overshoot=t,i})(Oa),Li=2*Math.PI,Ua=1,La=.3,t2=(function t(e,i){var r=Math.asin(1/(e=Math.max(1,e)))*(i/=Li);function n(o){return e*Vt(- --o)*Math.sin((r-o)/i)}return n.amplitude=function(o){return t(o,i*Li)},n.period=function(o){return t(e,o)},n})(Ua,La),i2=(function t(e,i){var r=Math.asin(1/(e=Math.max(1,e)))*(i/=Li);function n(o){return 1-e*Vt(o=+o)*Math.sin((o+r)/i)}return n.amplitude=function(o){return t(o,i*Li)},n.period=function(o){return t(e,o)},n})(Ua,La),r2=(function t(e,i){var r=Math.asin(1/(e=Math.max(1,e)))*(i/=Li);function n(o){return((o=o*2-1)<0?e*Vt(-o)*Math.sin((r-o)/i):2-e*Vt(o)*Math.sin((r+o)/i))/2}return n.amplitude=function(o){return t(o,i*Li)},n.period=function(o){return t(e,o)},n})(Ua,La);var mv=ci("start","end","cancel","interrupt"),xv=[],Oh=0,Nh=1,za=2,Qn=3,Bh=4,Wa=5,Jn=6;function eo(t,e,i,r,n,o){var s=t.__transition;if(!s)t.__transition={};else if(i in s)return;yv(t,i,{name:e,index:r,group:n,on:mv,tween:xv,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Oh})}function Va(t,e){var i=rt(t,e);if(i.state>Oh)throw new Error("too late; already scheduled");return i}function mt(t,e){var i=rt(t,e);if(i.state>Qn)throw new Error("too late; already running");return i}function rt(t,e){var i=t.__transition;if(!i||!(i=i[e]))throw new Error("transition not found");return i}function yv(t,e,i){var r=t.__transition,n;r[e]=i,i.timer=xa(o,0,i.time);function o(c){i.state=Nh,i.timer.restart(s,i.delay,i.time),i.delay<=c&&s(c-i.delay)}function s(c){var u,d,h,f;if(i.state!==Nh)return l();for(u in r)if(f=r[u],f.name===i.name){if(f.state===Qn)return ya(s);f.state===Bh?(f.state=Jn,f.timer.stop(),f.on.call("interrupt",t,t.__data__,f.index,f.group),delete r[u]):+u<e&&(f.state=Jn,f.timer.stop(),f.on.call("cancel",t,t.__data__,f.index,f.group),delete r[u])}if(ya(function(){i.state===Qn&&(i.state=Bh,i.timer.restart(a,i.delay,i.time),a(c))}),i.state=za,i.on.call("start",t,t.__data__,i.index,i.group),i.state===za){for(i.state=Qn,n=new Array(h=i.tween.length),u=0,d=-1;u<h;++u)(f=i.tween[u].value.call(t,t.__data__,i.index,i.group))&&(n[++d]=f);n.length=d+1}}function a(c){for(var u=c<i.duration?i.ease.call(null,c/i.duration):(i.timer.restart(l),i.state=Wa,1),d=-1,h=n.length;++d<h;)n[d].call(t,u);i.state===Wa&&(i.on.call("end",t,t.__data__,i.index,i.group),l())}function l(){i.state=Jn,i.timer.stop(),delete r[e];for(var c in r)return;delete t.__transition}}function Pr(t,e){var i=t.__transition,r,n,o=!0,s;if(i){e=e==null?null:e+"";for(s in i){if((r=i[s]).name!==e){o=!1;continue}n=r.state>za&&r.state<Wa,r.state=Jn,r.timer.stop(),r.on.call(n?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete i[s]}o&&delete t.__transition}}function Sv(t){return this.each(function(){Pr(this,t)})}function vv(t,e){var i,r;return function(){var n=mt(this,t),o=n.tween;if(o!==i){r=i=o;for(var s=0,a=r.length;s<a;++s)if(r[s].name===e){r=r.slice(),r.splice(s,1);break}}n.tween=r}}function bv(t,e,i){var r,n;if(typeof i!="function")throw new Error;return function(){var o=mt(this,t),s=o.tween;if(s!==r){n=(r=s).slice();for(var a={name:e,value:i},l=0,c=n.length;l<c;++l)if(n[l].name===e){n[l]=a;break}l===c&&n.push(a)}o.tween=n}}function _v(t,e){var i=this._id;if(t+="",arguments.length<2){for(var r=rt(this.node(),i).tween,n=0,o=r.length,s;n<o;++n)if((s=r[n]).name===t)return s.value;return null}return this.each((e==null?vv:bv)(i,t,e))}function Ha(t,e,i){var r=t._id;return t.each(function(){var n=mt(this,r);(n.value||(n.value={}))[e]=i.apply(this,arguments)}),function(n){return rt(n,r).value[e]}}function Uh(t,e){var i;return(typeof e=="number"?ze:e instanceof it?Tr:(i=it(e))?(e=i,Tr):Ia)(t,e)}function Tv(t){return function(){this.removeAttribute(t)}}function Pv(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Cv(t,e,i){var r,n=i+"",o;return function(){var s=this.getAttribute(t);return s===n?null:s===r?o:o=e(r=s,i)}}function Av(t,e,i){var r,n=i+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===n?null:s===r?o:o=e(r=s,i)}}function wv(t,e,i){var r,n,o;return function(){var s,a=i(this),l;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),l=a+"",s===l?null:s===r&&l===n?o:(n=l,o=e(r=s,a)))}}function Rv(t,e,i){var r,n,o;return function(){var s,a=i(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),l=a+"",s===l?null:s===r&&l===n?o:(n=l,o=e(r=s,a)))}}function kv(t,e){var i=pr(t),r=i==="transform"?mh:Uh;return this.attrTween(t,typeof e=="function"?(i.local?Rv:wv)(i,r,Ha(this,"attr."+t,e)):e==null?(i.local?Pv:Tv)(i):(i.local?Av:Cv)(i,r,e))}function Ev(t,e){return function(i){this.setAttribute(t,e.call(this,i))}}function Iv(t,e){return function(i){this.setAttributeNS(t.space,t.local,e.call(this,i))}}function Dv(t,e){var i,r;function n(){var o=e.apply(this,arguments);return o!==r&&(i=(r=o)&&Iv(t,o)),i}return n._value=e,n}function Fv(t,e){var i,r;function n(){var o=e.apply(this,arguments);return o!==r&&(i=(r=o)&&Ev(t,o)),i}return n._value=e,n}function Mv(t,e){var i="attr."+t;if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;var r=pr(t);return this.tween(i,(r.local?Dv:Fv)(r,e))}function Nv(t,e){return function(){Va(this,t).delay=+e.apply(this,arguments)}}function Bv(t,e){return e=+e,function(){Va(this,t).delay=e}}function Ov(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?Nv:Bv)(e,t)):rt(this.node(),e).delay}function Uv(t,e){return function(){mt(this,t).duration=+e.apply(this,arguments)}}function Lv(t,e){return e=+e,function(){mt(this,t).duration=e}}function zv(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?Uv:Lv)(e,t)):rt(this.node(),e).duration}function Wv(t,e){if(typeof e!="function")throw new Error;return function(){mt(this,t).ease=e}}function Vv(t){var e=this._id;return arguments.length?this.each(Wv(e,t)):rt(this.node(),e).ease}function Hv(t,e){return function(){var i=e.apply(this,arguments);if(typeof i!="function")throw new Error;mt(this,t).ease=i}}function $v(t){if(typeof t!="function")throw new Error;return this.each(Hv(this._id,t))}function Xv(t){typeof t!="function"&&(t=pa(t));for(var e=this._groups,i=e.length,r=new Array(i),n=0;n<i;++n)for(var o=e[n],s=o.length,a=r[n]=[],l,c=0;c<s;++c)(l=o[c])&&t.call(l,l.__data__,c,o)&&a.push(l);return new Ft(r,this._parents,this._name,this._id)}function Gv(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,i=t._groups,r=e.length,n=i.length,o=Math.min(r,n),s=new Array(r),a=0;a<o;++a)for(var l=e[a],c=i[a],u=l.length,d=s[a]=new Array(u),h,f=0;f<u;++f)(h=l[f]||c[f])&&(d[f]=h);for(;a<r;++a)s[a]=e[a];return new Ft(s,this._parents,this._name,this._id)}function Yv(t){return(t+"").trim().split(/^|\s+/).every(function(e){var i=e.indexOf(".");return i>=0&&(e=e.slice(0,i)),!e||e==="start"})}function jv(t,e,i){var r,n,o=Yv(e)?Va:mt;return function(){var s=o(this,t),a=s.on;a!==r&&(n=(r=a).copy()).on(e,i),s.on=n}}function Kv(t,e){var i=this._id;return arguments.length<2?rt(this.node(),i).on.on(t):this.each(jv(i,t,e))}function qv(t){return function(){var e=this.parentNode;for(var i in this.__transition)if(+i!==t)return;e&&e.removeChild(this)}}function Zv(){return this.on("end.remove",qv(this._id))}function Qv(t){var e=this._name,i=this._id;typeof t!="function"&&(t=Fn(t));for(var r=this._groups,n=r.length,o=new Array(n),s=0;s<n;++s)for(var a=r[s],l=a.length,c=o[s]=new Array(l),u,d,h=0;h<l;++h)(u=a[h])&&(d=t.call(u,u.__data__,h,a))&&("__data__"in u&&(d.__data__=u.__data__),c[h]=d,eo(c[h],e,i,h,c,rt(u,i)));return new Ft(o,this._parents,e,i)}function Jv(t){var e=this._name,i=this._id;typeof t!="function"&&(t=fa(t));for(var r=this._groups,n=r.length,o=[],s=[],a=0;a<n;++a)for(var l=r[a],c=l.length,u,d=0;d<c;++d)if(u=l[d]){for(var h=t.call(u,u.__data__,d,l),f,g=rt(u,i),x=0,b=h.length;x<b;++x)(f=h[x])&&eo(f,e,i,x,h,g);o.push(h),s.push(u)}return new Ft(o,s,e,i)}var eb=li.prototype.constructor;function tb(){return new eb(this._groups,this._parents)}function ib(t,e){var i,r,n;return function(){var o=ai(this,t),s=(this.style.removeProperty(t),ai(this,t));return o===s?null:o===i&&s===r?n:n=e(i=o,r=s)}}function Lh(t){return function(){this.style.removeProperty(t)}}function rb(t,e,i){var r,n=i+"",o;return function(){var s=ai(this,t);return s===n?null:s===r?o:o=e(r=s,i)}}function nb(t,e,i){var r,n,o;return function(){var s=ai(this,t),a=i(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),ai(this,t))),s===l?null:s===r&&l===n?o:(n=l,o=e(r=s,a))}}function ob(t,e){var i,r,n,o="style."+e,s="end."+o,a;return function(){var l=mt(this,t),c=l.on,u=l.value[o]==null?a||(a=Lh(e)):void 0;(c!==i||n!==u)&&(r=(i=c).copy()).on(s,n=u),l.on=r}}function sb(t,e,i){var r=(t+="")=="transform"?gh:Uh;return e==null?this.styleTween(t,ib(t,r)).on("end.style."+t,Lh(t)):typeof e=="function"?this.styleTween(t,nb(t,r,Ha(this,"style."+t,e))).each(ob(this._id,t)):this.styleTween(t,rb(t,r,e),i).on("end.style."+t,null)}function ab(t,e,i){return function(r){this.style.setProperty(t,e.call(this,r),i)}}function lb(t,e,i){var r,n;function o(){var s=e.apply(this,arguments);return s!==n&&(r=(n=s)&&ab(t,s,i)),r}return o._value=e,o}function cb(t,e,i){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(e==null)return this.tween(r,null);if(typeof e!="function")throw new Error;return this.tween(r,lb(t,e,i??""))}function ub(t){return function(){this.textContent=t}}function db(t){return function(){var e=t(this);this.textContent=e??""}}function hb(t){return this.tween("text",typeof t=="function"?db(Ha(this,"text",t)):ub(t==null?"":t+""))}function fb(t){return function(e){this.textContent=t.call(this,e)}}function pb(t){var e,i;function r(){var n=t.apply(this,arguments);return n!==i&&(e=(i=n)&&fb(n)),e}return r._value=t,r}function gb(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,pb(t))}function mb(){for(var t=this._name,e=this._id,i=zh(),r=this._groups,n=r.length,o=0;o<n;++o)for(var s=r[o],a=s.length,l,c=0;c<a;++c)if(l=s[c]){var u=rt(l,e);eo(l,t,i,c,s,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Ft(r,this._parents,t,i)}function xb(){var t,e,i=this,r=i._id,n=i.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--n===0&&o()}};i.each(function(){var c=mt(this,r),u=c.on;u!==t&&(e=(t=u).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),c.on=e}),n===0&&o()})}var yb=0;function Ft(t,e,i,r){this._groups=t,this._parents=e,this._name=i,this._id=r}function Sb(t){return li().transition(t)}function zh(){return++yb}var Dt=li.prototype;Ft.prototype=Sb.prototype={constructor:Ft,select:Qv,selectAll:Jv,selectChild:Dt.selectChild,selectChildren:Dt.selectChildren,filter:Xv,merge:Gv,selection:tb,transition:mb,call:Dt.call,nodes:Dt.nodes,node:Dt.node,size:Dt.size,empty:Dt.empty,each:Dt.each,on:Kv,attr:kv,attrTween:Mv,style:sb,styleTween:cb,text:hb,textTween:gb,remove:Zv,tween:_v,delay:Ov,duration:zv,ease:Vv,easeVarying:$v,end:xb,[Symbol.iterator]:Dt[Symbol.iterator]};var vb={time:null,delay:0,duration:250,ease:Zn};function bb(t,e){for(var i;!(i=t.__transition)||!(i=i[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return i}function _b(t){var e,i;t instanceof Ft?(e=t._id,t=t._name):(e=zh(),(i=vb).time=Ln(),t=t==null?null:t+"");for(var r=this._groups,n=r.length,o=0;o<n;++o)for(var s=r[o],a=s.length,l,c=0;c<a;++c)(l=s[c])&&eo(l,t,e,c,s,i||bb(l,e));return new Ft(r,this._parents,t,e)}li.prototype.interrupt=Sv;li.prototype.transition=_b;var Tb={passive:!1},Cr={capture:!0,passive:!1};function $a(t){t.stopImmediatePropagation()}function zi(t){t.preventDefault(),t.stopImmediatePropagation()}function Ga(t){var e=t.document.documentElement,i=ge(t).on("dragstart.drag",zi,Cr);"onselectstart"in e?i.on("selectstart.drag",zi,Cr):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function Ya(t,e){var i=t.document.documentElement,r=ge(t).on("dragstart.drag",null);e&&(r.on("click.drag",zi,Cr),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in i?r.on("selectstart.drag",null):(i.style.MozUserSelect=i.__noselect,delete i.__noselect)}var to=t=>()=>t;function Xa(t,{sourceEvent:e,subject:i,target:r,identifier:n,active:o,x:s,y:a,dx:l,dy:c,dispatch:u}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:i,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:c,enumerable:!0,configurable:!0},_:{value:u}})}Xa.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function Pb(t){return!t.ctrlKey&&!t.button}function Cb(){return this.parentNode}function Ab(t,e){return e??{x:t.x,y:t.y}}function wb(){return navigator.maxTouchPoints||"ontouchstart"in this}function Wh(){var t=Pb,e=Cb,i=Ab,r=wb,n={},o=ci("start","drag","end"),s=0,a,l,c,u,d=0;function h(y){y.on("mousedown.drag",f).filter(r).on("touchstart.drag",b).on("touchmove.drag",v,Tb).on("touchend.drag touchcancel.drag",R).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function f(y,T){if(!(u||!t.call(this,y,T))){var C=P(this,e.call(this,y,T),y,T,"mouse");C&&(ge(y.view).on("mousemove.drag",g,Cr).on("mouseup.drag",x,Cr),Ga(y.view),$a(y),c=!1,a=y.clientX,l=y.clientY,C("start",y))}}function g(y){if(zi(y),!c){var T=y.clientX-a,C=y.clientY-l;c=T*T+C*C>d}n.mouse("drag",y)}function x(y){ge(y.view).on("mousemove.drag mouseup.drag",null),Ya(y.view,c),zi(y),n.mouse("end",y)}function b(y,T){if(t.call(this,y,T)){var C=y.changedTouches,k=e.call(this,y,T),U=C.length,z,H;for(z=0;z<U;++z)(H=P(this,k,y,T,C[z].identifier,C[z]))&&($a(y),H("start",y,C[z]))}}function v(y){var T=y.changedTouches,C=T.length,k,U;for(k=0;k<C;++k)(U=n[T[k].identifier])&&(zi(y),U("drag",y,T[k]))}function R(y){var T=y.changedTouches,C=T.length,k,U;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),k=0;k<C;++k)(U=n[T[k].identifier])&&($a(y),U("end",y,T[k]))}function P(y,T,C,k,U,z){var H=o.copy(),X=et(z||C,T),B,Z,S;if((S=i.call(y,new Xa("beforestart",{sourceEvent:C,target:h,identifier:U,active:s,x:X[0],y:X[1],dx:0,dy:0,dispatch:H}),k))!=null)return B=S.x-X[0]||0,Z=S.y-X[1]||0,function M(I,O,V){var G=X,W;switch(I){case"start":n[U]=M,W=s++;break;case"end":delete n[U],--s;case"drag":X=et(V||O,T),W=s;break}H.call(I,y,new Xa(I,{sourceEvent:O,subject:S,target:h,identifier:U,active:W,x:X[0]+B,y:X[1]+Z,dx:X[0]-G[0],dy:X[1]-G[1],dispatch:H}),k)}}return h.filter=function(y){return arguments.length?(t=typeof y=="function"?y:to(!!y),h):t},h.container=function(y){return arguments.length?(e=typeof y=="function"?y:to(y),h):e},h.subject=function(y){return arguments.length?(i=typeof y=="function"?y:to(y),h):i},h.touchable=function(y){return arguments.length?(r=typeof y=="function"?y:to(!!y),h):r},h.on=function(){var y=o.on.apply(o,arguments);return y===o?h:y},h.clickDistance=function(y){return arguments.length?(d=(y=+y)*y,h):Math.sqrt(d)},h}var io=t=>()=>t;function Rb(t,{sourceEvent:e,target:i,transform:r,dispatch:n}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:n}})}function Mt(t,e,i){this.k=t,this.x=e,this.y=i}Mt.prototype={constructor:Mt,scale:function(t){return t===1?this:new Mt(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Mt(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Ht=new Mt(1,0,0);kb.prototype=Mt.prototype;function kb(t){for(;!t.__zoom;)if(!(t=t.parentNode))return Ht;return t.__zoom}function ja(t){t.stopImmediatePropagation()}function Ar(t){t.preventDefault(),t.stopImmediatePropagation()}function Eb(t){return(!t.ctrlKey||t.type==="wheel")&&!t.button}function Ib(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t,t.hasAttribute("viewBox")?(t=t.viewBox.baseVal,[[t.x,t.y],[t.x+t.width,t.y+t.height]]):[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]):[[0,0],[t.clientWidth,t.clientHeight]]}function Vh(){return this.__zoom||Ht}function Db(t){return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function Fb(){return navigator.maxTouchPoints||"ontouchstart"in this}function Mb(t,e,i){var r=t.invertX(e[0][0])-i[0][0],n=t.invertX(e[1][0])-i[1][0],o=t.invertY(e[0][1])-i[0][1],s=t.invertY(e[1][1])-i[1][1];return t.translate(n>r?(r+n)/2:Math.min(0,r)||Math.max(0,n),s>o?(o+s)/2:Math.min(0,o)||Math.max(0,s))}function Hh(){var t=Eb,e=Ib,i=Mb,r=Db,n=Fb,o=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,l=xh,c=ci("start","zoom","end"),u,d,h,f=500,g=150,x=0,b=10;function v(S){S.property("__zoom",Vh).on("wheel.zoom",U,{passive:!1}).on("mousedown.zoom",z).on("dblclick.zoom",H).filter(n).on("touchstart.zoom",X).on("touchmove.zoom",B).on("touchend.zoom touchcancel.zoom",Z).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}v.transform=function(S,M,I,O){var V=S.selection?S.selection():S;V.property("__zoom",Vh),S!==V?T(S,M,I,O):V.interrupt().each(function(){C(this,arguments).event(O).start().zoom(null,typeof M=="function"?M.apply(this,arguments):M).end()})},v.scaleBy=function(S,M,I,O){v.scaleTo(S,function(){var V=this.__zoom.k,G=typeof M=="function"?M.apply(this,arguments):M;return V*G},I,O)},v.scaleTo=function(S,M,I,O){v.transform(S,function(){var V=e.apply(this,arguments),G=this.__zoom,W=I==null?y(V):typeof I=="function"?I.apply(this,arguments):I,te=G.invert(W),ae=typeof M=="function"?M.apply(this,arguments):M;return i(P(R(G,ae),W,te),V,s)},I,O)},v.translateBy=function(S,M,I,O){v.transform(S,function(){return i(this.__zoom.translate(typeof M=="function"?M.apply(this,arguments):M,typeof I=="function"?I.apply(this,arguments):I),e.apply(this,arguments),s)},null,O)},v.translateTo=function(S,M,I,O,V){v.transform(S,function(){var G=e.apply(this,arguments),W=this.__zoom,te=O==null?y(G):typeof O=="function"?O.apply(this,arguments):O;return i(Ht.translate(te[0],te[1]).scale(W.k).translate(typeof M=="function"?-M.apply(this,arguments):-M,typeof I=="function"?-I.apply(this,arguments):-I),G,s)},O,V)};function R(S,M){return M=Math.max(o[0],Math.min(o[1],M)),M===S.k?S:new Mt(M,S.x,S.y)}function P(S,M,I){var O=M[0]-I[0]*S.k,V=M[1]-I[1]*S.k;return O===S.x&&V===S.y?S:new Mt(S.k,O,V)}function y(S){return[(+S[0][0]+ +S[1][0])/2,(+S[0][1]+ +S[1][1])/2]}function T(S,M,I,O){S.on("start.zoom",function(){C(this,arguments).event(O).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(O).end()}).tween("zoom",function(){var V=this,G=arguments,W=C(V,G).event(O),te=e.apply(V,G),ae=I==null?y(te):typeof I=="function"?I.apply(V,G):I,De=Math.max(te[1][0]-te[0][0],te[1][1]-te[0][1]),ce=V.__zoom,ke=typeof M=="function"?M.apply(V,G):M,Fe=l(ce.invert(ae).concat(De/ce.k),ke.invert(ae).concat(De/ke.k));return function(q){if(q===1)q=ke;else{var Me=Fe(q),ii=De/Me[2];q=new Mt(ii,ae[0]-Me[0]*ii,ae[1]-Me[1]*ii)}W.zoom(null,q)}})}function C(S,M,I){return!I&&S.__zooming||new k(S,M)}function k(S,M){this.that=S,this.args=M,this.active=0,this.sourceEvent=null,this.extent=e.apply(S,M),this.taps=0}k.prototype={event:function(S){return S&&(this.sourceEvent=S),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(S,M){return this.mouse&&S!=="mouse"&&(this.mouse[1]=M.invert(this.mouse[0])),this.touch0&&S!=="touch"&&(this.touch0[1]=M.invert(this.touch0[0])),this.touch1&&S!=="touch"&&(this.touch1[1]=M.invert(this.touch1[0])),this.that.__zoom=M,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(S){var M=ge(this.that).datum();c.call(S,this.that,new Rb(S,{sourceEvent:this.sourceEvent,target:v,transform:this.that.__zoom,dispatch:c}),M)}};function U(S,...M){if(!t.apply(this,arguments))return;var I=C(this,M).event(S),O=this.__zoom,V=Math.max(o[0],Math.min(o[1],O.k*Math.pow(2,r.apply(this,arguments)))),G=et(S);if(I.wheel)(I.mouse[0][0]!==G[0]||I.mouse[0][1]!==G[1])&&(I.mouse[1]=O.invert(I.mouse[0]=G)),clearTimeout(I.wheel);else{if(O.k===V)return;I.mouse=[G,O.invert(G)],Pr(this),I.start()}Ar(S),I.wheel=setTimeout(W,g),I.zoom("mouse",i(P(R(O,V),I.mouse[0],I.mouse[1]),I.extent,s));function W(){I.wheel=null,I.end()}}function z(S,...M){if(h||!t.apply(this,arguments))return;var I=S.currentTarget,O=C(this,M,!0).event(S),V=ge(S.view).on("mousemove.zoom",ae,!0).on("mouseup.zoom",De,!0),G=et(S,I),W=S.clientX,te=S.clientY;Ga(S.view),ja(S),O.mouse=[G,this.__zoom.invert(G)],Pr(this),O.start();function ae(ce){if(Ar(ce),!O.moved){var ke=ce.clientX-W,Fe=ce.clientY-te;O.moved=ke*ke+Fe*Fe>x}O.event(ce).zoom("mouse",i(P(O.that.__zoom,O.mouse[0]=et(ce,I),O.mouse[1]),O.extent,s))}function De(ce){V.on("mousemove.zoom mouseup.zoom",null),Ya(ce.view,O.moved),Ar(ce),O.event(ce).end()}}function H(S,...M){if(t.apply(this,arguments)){var I=this.__zoom,O=et(S.changedTouches?S.changedTouches[0]:S,this),V=I.invert(O),G=I.k*(S.shiftKey?.5:2),W=i(P(R(I,G),O,V),e.apply(this,M),s);Ar(S),a>0?ge(this).transition().duration(a).call(T,W,O,S):ge(this).call(v.transform,W,O,S)}}function X(S,...M){if(t.apply(this,arguments)){var I=S.touches,O=I.length,V=C(this,M,S.changedTouches.length===O).event(S),G,W,te,ae;for(ja(S),W=0;W<O;++W)te=I[W],ae=et(te,this),ae=[ae,this.__zoom.invert(ae),te.identifier],V.touch0?!V.touch1&&V.touch0[2]!==ae[2]&&(V.touch1=ae,V.taps=0):(V.touch0=ae,G=!0,V.taps=1+!!u);u&&(u=clearTimeout(u)),G&&(V.taps<2&&(d=ae[0],u=setTimeout(function(){u=null},f)),Pr(this),V.start())}}function B(S,...M){if(this.__zooming){var I=C(this,M).event(S),O=S.changedTouches,V=O.length,G,W,te,ae;for(Ar(S),G=0;G<V;++G)W=O[G],te=et(W,this),I.touch0&&I.touch0[2]===W.identifier?I.touch0[0]=te:I.touch1&&I.touch1[2]===W.identifier&&(I.touch1[0]=te);if(W=I.that.__zoom,I.touch1){var De=I.touch0[0],ce=I.touch0[1],ke=I.touch1[0],Fe=I.touch1[1],q=(q=ke[0]-De[0])*q+(q=ke[1]-De[1])*q,Me=(Me=Fe[0]-ce[0])*Me+(Me=Fe[1]-ce[1])*Me;W=R(W,Math.sqrt(q/Me)),te=[(De[0]+ke[0])/2,(De[1]+ke[1])/2],ae=[(ce[0]+Fe[0])/2,(ce[1]+Fe[1])/2]}else if(I.touch0)te=I.touch0[0],ae=I.touch0[1];else return;I.zoom("touch",i(P(W,te,ae),I.extent,s))}}function Z(S,...M){if(this.__zooming){var I=C(this,M).event(S),O=S.changedTouches,V=O.length,G,W;for(ja(S),h&&clearTimeout(h),h=setTimeout(function(){h=null},f),G=0;G<V;++G)W=O[G],I.touch0&&I.touch0[2]===W.identifier?delete I.touch0:I.touch1&&I.touch1[2]===W.identifier&&delete I.touch1;if(I.touch1&&!I.touch0&&(I.touch0=I.touch1,delete I.touch1),I.touch0)I.touch0[1]=this.__zoom.invert(I.touch0[0]);else if(I.end(),I.taps===2&&(W=et(W,this),Math.hypot(d[0]-W[0],d[1]-W[1])<b)){var te=ge(this).on("dblclick.zoom");te&&te.apply(this,arguments)}}}return v.wheelDelta=function(S){return arguments.length?(r=typeof S=="function"?S:io(+S),v):r},v.filter=function(S){return arguments.length?(t=typeof S=="function"?S:io(!!S),v):t},v.touchable=function(S){return arguments.length?(n=typeof S=="function"?S:io(!!S),v):n},v.extent=function(S){return arguments.length?(e=typeof S=="function"?S:io([[+S[0][0],+S[0][1]],[+S[1][0],+S[1][1]]]),v):e},v.scaleExtent=function(S){return arguments.length?(o[0]=+S[0],o[1]=+S[1],v):[o[0],o[1]]},v.translateExtent=function(S){return arguments.length?(s[0][0]=+S[0][0],s[1][0]=+S[1][0],s[0][1]=+S[0][1],s[1][1]=+S[1][1],v):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},v.constrain=function(S){return arguments.length?(i=S,v):i},v.duration=function(S){return arguments.length?(a=+S,v):a},v.interpolate=function(S){return arguments.length?(l=S,v):l},v.on=function(){var S=c.on.apply(c,arguments);return S===c?v:S},v.clickDistance=function(S){return arguments.length?(x=(S=+S)*S,v):Math.sqrt(x)},v.tapDistance=function(S){return arguments.length?(b=+S,v):b},v}function Nb(t,e){this.v=t,this.k=e}function $h(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,r=Array(e);i<e;i++)r[i]=t[i];return r}function Bb(t){if(Array.isArray(t))return t}function Ob(t,e){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var r,n,o,s,a=[],l=!0,c=!1;try{if(o=(i=i.call(t)).next,e===0){if(Object(i)!==i)return;l=!1}else for(;!(l=(r=o.call(i)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){c=!0,n=u}finally{try{if(!l&&i.return!=null&&(s=i.return(),Object(s)!==s))return}finally{if(c)throw n}}return a}}function Ub(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lb(t,e){return Bb(t)||Ob(t,e)||zb(t,e)||Ub()}function zb(t,e){if(t){if(typeof t=="string")return $h(t,e);var i={}.toString.call(t).slice(8,-1);return i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set"?Array.from(t):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?$h(t,e):void 0}}function ro(t){var e,i;function r(o,s){try{var a=t[o](s),l=a.value,c=l instanceof Nb;Promise.resolve(c?l.v:l).then(function(u){if(c){var d=o==="return"&&l.k?o:"next";if(!l.k||u.done)return r(d,u);u=t[d](u).value}n(!!a.done,u)},function(u){r("throw",u)})}catch(u){n(2,u)}}function n(o,s){o===2?e.reject(s):e.resolve({value:s,done:o}),(e=e.next)?r(e.key,e.arg):i=null}this._invoke=function(o,s){return new Promise(function(a,l){var c={key:o,arg:s,resolve:a,reject:l,next:null};i?i=i.next=c:(e=i=c,r(o,s))})},typeof t.return!="function"&&(this.return=void 0)}ro.prototype[typeof Symbol=="function"&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},ro.prototype.next=function(t){return this._invoke("next",t)},ro.prototype.throw=function(t){return this._invoke("throw",t)},ro.prototype.return=function(t){return this._invoke("return",t)};var nf=Object.entries,Wb=Object.keys,Xh=Object.setPrototypeOf,Vb=Object.isFrozen,of=Object.getPrototypeOf,sf=Object.getOwnPropertyDescriptor,Te=Object.freeze,xe=Object.seal,Xt=Object.create,af=typeof Reflect<"u"&&Reflect,so=af.apply,ol=af.construct;Te||(Te=function(e){return e});xe||(xe=function(e){return e});so||(so=function(e,i){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return e.apply(i,n)});ol||(ol=function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),n=1;n<i;n++)r[n-1]=arguments[n];return new e(...r)});var Nt=ue(Array.prototype.forEach),Hb=ue(Array.prototype.lastIndexOf),Gh=ue(Array.prototype.pop),wr=ue(Array.prototype.push),$b=ue(Array.prototype.slice),Xb=ue(Array.prototype.splice),Wi=Array.isArray,Ka=lf(Set),qa=ue(Set.prototype.add),Rr=ue(Set.prototype.has),gi=ue(String.prototype.toLowerCase),Za=ue(String.prototype.toString),Gb=ue(String.prototype.match),no=ue(String.prototype.replace),Qa=ue(String.prototype.indexOf),Yb=ue(String.prototype.trim),jb=ue(Number.prototype.toString),Kb=ue(Boolean.prototype.toString),Yh=typeof BigInt>"u"?null:ue(BigInt.prototype.toString),jh=typeof Symbol>"u"?null:ue(Symbol.prototype.toString),we=ue(Object.prototype.hasOwnProperty),kr=ue(Object.prototype.toString),qb=RegExp.prototype.test,_e=function(e,i){return e instanceof RegExp&&(e.lastIndex=0),so(qb,e,[i])},Bt=lf(TypeError);function ue(t){return function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),n=1;n<i;n++)r[n-1]=arguments[n];return so(t,e,r)}}function lf(t){return function(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return ol(t,i)}}function re(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:gi;if(Xh&&Xh(t,null),!Wi(e))return t;let r=e.length;for(;r--;){let n=e[r];if(typeof n=="string"){let o=i(n);o!==n&&(Vb(e)||(e[r]=o),n=o)}t[n]=!0}return t}function Zb(t){for(let e=0;e<t.length;e++)we(t,e)||(t[e]=null);return t}function ao(t){let e=Xt(null);for(let r of nf(t)){var i=Lb(r,2);let n=i[0],o=i[1];we(t,n)&&(Wi(o)?e[n]=Zb(o):o&&typeof o=="object"&&o.constructor===Object?e[n]=ao(o):e[n]=o)}return e}function Er(t){let e=Xt(null),i=Wb(t),r=i.length;for(;r--;)e[i[r]]=t[i[r]];return e}function Qb(t){switch(typeof t){case"string":return t;case"number":return jb(t);case"boolean":return Kb(t);case"bigint":return Yh?Yh(t):"0";case"symbol":return jh?jh(t):"Symbol()";case"undefined":return kr(t);case"function":case"object":{if(t===null)return kr(t);let e=t,i=Ge(e,"toString");if(typeof i=="function"){let r=i(e);return typeof r=="string"?r:kr(r)}return kr(t)}default:return kr(t)}}function Ge(t,e){for(;t!==null;){let r=sf(t,e);if(r){if(r.get)return ue(r.get);if(typeof r.value=="function")return ue(r.value)}t=of(t)}function i(){return null}return i}function Jb(t,e){for(;t!==null;){let i=sf(t,e);if(i)return i.get?ue(i.get):null;t=of(t)}return null}function e_(t){if(!t)return!1;try{return _e(t,""),!0}catch{return!1}}var Kh=Te(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ja=Te(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),el=Te(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),t_=Te(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),tl=Te(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),i_=Te(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),qh=Te(["#text"]),Zh=Te(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),il=Te(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Qh=Te(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),oo=Te(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),r_=xe(/{{[\w\W]*|^[\w\W]*}}/g),n_=xe(/<%[\w\W]*|^[\w\W]*%>/g),o_=xe(/\${[\w\W]*/g),s_=xe(/{{|}}|\${|<%|%>|&lt;%|%&gt;/),a_=xe(/^data-[\-\w.\u00B7-\uFFFF]+$/),l_=xe(/^aria-[\-\w]+$/),Jh=xe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),c_=xe(/^(?:\w+script|data):/i),u_=xe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),d_=xe(/^html$/i),h_=xe(/^[a-z][.\w]*(-[.\w]+)+$/i),rl=xe(/<[/\w!]/g),ef=xe(/<[/\w]/g),f_=xe(/<\/no(script|embed|frames)/i),tf=xe(/\/>/i),p_=xe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i),g_=xe(/^[\r\n\t ]+/),me={element:1,text:3,processingInstruction:7,comment:8,document:9,documentFragment:11},m_=Te(re({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),x_=function(){return typeof window>"u"?null:window},y_=function(e,i){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null,n="data-tt-policy-suffix";i&&i.hasAttribute(n)&&(r=i.getAttribute(n));let o="dompurify"+(r?"#"+r:"");try{return e.createPolicy(o,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},rf=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},$t=function(e,i,r,n){return we(e,i)&&Wi(e[i])?re(n.base?Er(n.base):{},e[i],n.transform):r},nl=function(e,i,r){let n=we(e,i)?e[i]:void 0;return n&&typeof n=="object"?ao(n):r};function cf(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x_(),e=E=>cf(E);if(e.version="3.4.18",e.removed=[],!t||!t.document||t.document.nodeType!==me.document||!t.Element)return e.isSupported=!1,e;let i=t.document,r=i,n=r.currentScript,o=t.HTMLTemplateElement,s=t.Node,a=t.Element,l=t.NodeFilter,c=t.DOMParser,u=t.trustedTypes,d=a.prototype,h=Ge(d,"cloneNode"),f=Ge(d,"remove"),g=Ge(d,"removeAttributeNode"),x=Ge(d,"nextSibling"),b=Ge(d,"childNodes"),v=Ge(d,"parentNode"),R=Ge(d,"shadowRoot"),P=Ge(d,"attributes"),y=s&&s.prototype?Ge(s.prototype,"nodeType"):null,T=s&&s.prototype?Ge(s.prototype,"nodeName"):null,C=s&&s.prototype?Ge(s.prototype,"ownerDocument"):null,k=function(p){return y?y(p):p.nodeType},U=function(p){return T?T(p):p.nodeName},z=Jb(d,"namespaceURI"),H=function(p){return z?z(p):p.namespaceURI};if(typeof o=="function"){let E=i.createElement("template");E.content&&E.content.ownerDocument&&(i=E.content.ownerDocument)}let X,B="",Z,S=!1,M=0,I=function(){if(M>0)throw Bt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},O=function(p){I(),M++;try{return X.createHTML(p)}finally{M--}},V=function(p){return X&&Gs?O(p):p},G=function(p){I(),M++;try{return X.createScriptURL(p)}finally{M--}},W=function(){return S||(Z=y_(u,n),S=!0),Z},te=i,ae=te.implementation,De=te.createNodeIterator,ce=te.createDocumentFragment,ke=te.getElementsByTagName,Fe=r.importNode,q=rf();e.isSupported=typeof nf=="function"&&typeof v=="function"&&ae&&ae.createHTMLDocument!==void 0;let Me=r_,ii=n_,_n=o_,m0=a_,x0=l_,y0=c_,S0=u_,v0=h_,qu=Jh,de=null,zs=re({},[...Kh,...Ja,...el,...tl,...qh]),he=null,Ws=re({},[...Zh,...il,...Qh,...oo]),dt=null,dr=null,Zu=null,Lt=Object.seal(Xt(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),Qu=!0,Vs=!0,Ju=!1,Hs=!0,Rt=!1,ri=!0,ni=!1,$s=!1,Tn=null,Pn=null,Xs=!1,Ri=!1,Cn=!1,Gs=!1,ed=!0,td=!1,id="user-content-",Ys=!0,js=!1,oi=null,ki=!1,si=null,rd=re({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]),nd=null,od=re({},["audio","video","img","source","image","track"]),sd=null,ad=re({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),An="http://www.w3.org/1998/Math/MathML",wn="http://www.w3.org/2000/svg",ht="http://www.w3.org/1999/xhtml",Ei=ht,Ks=!1,ld=null,b0=re({},[An,wn,ht],Za),_0=Te(re({},["mi","mo","mn","ms","mtext"])),qs=null,T0=Te(re({},["annotation-xml"])),Zs=null,P0=Te(Xt(null)),C0=re({},["title","style","font","a","script"]),hr=null,A0=["application/xhtml+xml","text/html"],w0="text/html",pe=null,Rn=null,R0=i.createElement("form"),cd=function(p){return p instanceof RegExp||p instanceof Function},Qs=function(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(!p||typeof p!="object")&&(p={}),p=ao(p),hr=A0.indexOf(p.PARSER_MEDIA_TYPE)===-1?w0:p.PARSER_MEDIA_TYPE,pe=hr==="application/xhtml+xml"?Za:gi,de=$t(p,"ALLOWED_TAGS",zs,{transform:pe}),he=$t(p,"ALLOWED_ATTR",Ws,{transform:pe}),ld=$t(p,"ALLOWED_NAMESPACES",b0,{transform:Za}),sd=$t(p,"ADD_URI_SAFE_ATTR",ad,{transform:pe,base:ad}),nd=$t(p,"ADD_DATA_URI_TAGS",od,{transform:pe,base:od}),si=$t(p,"FORBID_CONTENTS",rd,{transform:pe}),dr=$t(p,"FORBID_TAGS",Xt(null),{transform:pe}),Zu=$t(p,"FORBID_ATTR",Xt(null),{transform:pe}),ki=we(p,"USE_PROFILES")?p.USE_PROFILES&&typeof p.USE_PROFILES=="object"?ao(p.USE_PROFILES):p.USE_PROFILES:!1,Qu=p.ALLOW_ARIA_ATTR!==!1,Vs=p.ALLOW_DATA_ATTR!==!1,Ju=p.ALLOW_UNKNOWN_PROTOCOLS||!1,Hs=p.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Rt=p.SAFE_FOR_TEMPLATES||!1,ri=p.SAFE_FOR_XML!==!1,ni=p.WHOLE_DOCUMENT||!1,Ri=p.RETURN_DOM||!1,Cn=p.RETURN_DOM_FRAGMENT||!1,Gs=p.RETURN_TRUSTED_TYPE||!1,Xs=p.FORCE_BODY||!1,ed=p.SANITIZE_DOM!==!1,td=p.SANITIZE_NAMED_PROPS||!1,Ys=p.KEEP_CONTENT!==!1,js=p.IN_PLACE||!1,qu=e_(p.ALLOWED_URI_REGEXP)?p.ALLOWED_URI_REGEXP:Jh,Ei=typeof p.NAMESPACE=="string"?p.NAMESPACE:ht,qs=nl(p,"MATHML_TEXT_INTEGRATION_POINTS",_0),Zs=nl(p,"HTML_INTEGRATION_POINTS",T0);let m=nl(p,"CUSTOM_ELEMENT_HANDLING",P0);if(dt=Xt(null),we(m,"tagNameCheck")&&cd(m.tagNameCheck)&&(dt.tagNameCheck=m.tagNameCheck),we(m,"attributeNameCheck")&&cd(m.attributeNameCheck)&&(dt.attributeNameCheck=m.attributeNameCheck),we(m,"allowCustomizedBuiltInElements")&&typeof m.allowCustomizedBuiltInElements=="boolean"&&(dt.allowCustomizedBuiltInElements=m.allowCustomizedBuiltInElements),xe(dt),Rt&&(Vs=!1),Cn&&(Ri=!0),ki&&((we(p,"ALLOWED_TAGS")||we(p,"ALLOWED_ATTR"))&&typeof console<"u"&&typeof console.warn=="function"&&console.warn("DOMPurify: USE_PROFILES overrides ALLOWED_TAGS and ALLOWED_ATTR. Do not use these options together."),de=re({},qh),he=Xt(null),ki.html===!0&&(re(de,Kh),re(he,Zh)),ki.svg===!0&&(re(de,Ja),re(he,il),re(he,oo)),ki.svgFilters===!0&&(re(de,el),re(he,il),re(he,oo)),ki.mathMl===!0&&(re(de,tl),re(he,Qh),re(he,oo))),Lt.tagCheck=null,Lt.attributeCheck=null,we(p,"ADD_TAGS")&&(typeof p.ADD_TAGS=="function"?Lt.tagCheck=p.ADD_TAGS:Wi(p.ADD_TAGS)&&(de===zs&&(de=Er(de)),re(de,p.ADD_TAGS,pe))),we(p,"ADD_ATTR")&&(typeof p.ADD_ATTR=="function"?Lt.attributeCheck=p.ADD_ATTR:Wi(p.ADD_ATTR)&&(he===Ws&&(he=Er(he)),re(he,p.ADD_ATTR,pe))),we(p,"ADD_FORBID_CONTENTS")&&Wi(p.ADD_FORBID_CONTENTS)&&(si===rd&&(si=Er(si)),re(si,p.ADD_FORBID_CONTENTS,pe)),Ys&&(de["#text"]=!0),ni&&re(de,["html","head","body"]),de.table&&(de.tbody=!0,delete dr.tbody),p.TRUSTED_TYPES_POLICY){if(typeof p.TRUSTED_TYPES_POLICY.createHTML!="function")throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof p.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');let w=X;X=p.TRUSTED_TYPES_POLICY;try{B=O("")}catch(D){throw X=w,D}}else p.TRUSTED_TYPES_POLICY===null?(X=void 0,B=""):(X===void 0&&(X=W()),X&&typeof B=="string"&&(B=O("")));Rn=Te(p)},ud=re({},[...Ja,...el,...t_]),dd=re({},[...tl,...i_]),k0=function(p,m,w){return m===ht?p==="svg":m===An?p==="svg"&&(w==="annotation-xml"||qs[w]):!!ud[p]},E0=function(p,m,w){return m===ht?p==="math":m===wn?p==="math"&&Zs[w]:!!dd[p]},I0=function(p,m,w){return m===wn&&!Zs[w]||m===An&&!qs[w]?!1:!dd[p]&&(C0[p]||!ud[p])},D0=function(p){let m=H(p),w=gi(U(p)),D=v(p),L=Ei,Y="template";return D&&k(D)===me.element&&(L=H(D),Y=gi(U(D))),ld[m]?m===wn?k0(w,L,Y):m===An?E0(w,L,Y):m===ht?I0(w,L,Y):hr==="application/xhtml+xml":!1},zt=function(p){wr(e.removed,{element:p});try{v(p).removeChild(p)}catch{if(f(p),!v(p))throw Bt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},hd=function(p,m,w){try{g(p,m)}catch{try{p.removeAttribute(w)}catch{}}},Js=function(p){ia(p);let m=b(p);m&&Nt($b(m),w=>{try{f(w)}catch{}}),k(p)===me.element&&ea(p,!1)},Ii=function(p,m,w){if(!w)try{w=m.getAttributeNode(p)}catch{w=null}if(wr(e.removed,{attribute:w||null,from:m}),w)hd(m,w,p);else try{m.removeAttribute(p)}catch{}if(p==="is")if(Ri||Cn)try{zt(m)}catch{}else try{m.setAttribute(p,"")}catch{}},ea=function(p,m){let w=P(p);if(w)for(let D=w.length-1;D>=0;--D){let L=w[D],Y=L&&L.name;typeof Y=="string"&&!(m&&he[pe(Y)])&&hd(p,L,Y)}},ta=function(p,m){let w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,D=[p];for(;D.length>0;){let L=D.pop();if(m(L)===!1)continue;if(w&&k(L)===me.element){let j=R(L);Di(j)&&D.push(j)}let Y=b(L);if(Y)for(let j=Y.length-1;j>=0;--j)D.push(Y[j])}},ia=function(p){ta(p,m=>{k(m)===me.element&&ea(m,!0)})},ra=function(p){let m=[];return ta(p,w=>{m.push(w)},!0),m},F0=function(p,m){let w=Ka();Nt(ra(p),D=>{k(D)===me.element&&qa(w,D)}),Nt(m,D=>{k(D)===me.element&&!Rr(w,D)&&ea(D,!0)})},fd=function(p,m){let w=!1;return Nt(e.removed,D=>{D.element&&(w=w||D.element===p,ia(D.element))}),F0(p,m),w},M0=8,N0=function(p,m){let w=oi,D=null,L=()=>(D||(D=Ka(),Nt(m,Y=>{qa(D,Y)})),D);for(let Y=0;;Y++){let j=ra(p),Se=[p],kt=!1;if(Nt(j,Je=>{k(Je)===me.documentFragment?wr(Se,Je):!kt&&!Rr(w,Je)&&(kt=Rr(L(),Je))}),!kt)return;if(Y>=M0)throw Bt("the tree kept changing during in-place sanitization; refusing to return it");Nt(Se,(Je,Ue)=>{B0(Je,Ue>0,p,L())})}},B0=function(p,m,w,D){let L=kn(p),Y;for(;Y=L.nextNode();)!Rr(D,Y)||Rr(oi,Y)||(m&&Qe(q.uponSanitizeShadowNode,Y,null),aa(Y,w))},O0=function(p){oi&&qa(oi,p)},pd=function(p,m){return ri?p==="patchsrc"?!0:p==="for"&&m!=="label"&&m!=="output":!1},U0=function(p){ri&&ta(p,m=>{let w=k(m);if(w===me.processingInstruction||w===me.comment&&_e(ef,m.data)){try{f(m)}catch{}return!1}if(w===me.element){let D=m,L=pe(U(m));try{D.hasAttribute&&D.hasAttribute("patchsrc")&&D.removeAttribute("patchsrc"),D.hasAttribute&&D.hasAttribute("for")&&pd("for",L)&&D.removeAttribute("for")}catch{}}return!0})},gd=function(p){let m=null,w=null;if(Xs)p="<remove></remove>"+p;else{let Y=Gb(p,g_);w=Y&&Y[0]}hr==="application/xhtml+xml"&&Ei===ht&&(p='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+p+"</body></html>");let D=X?O(p):p;if(Ei===ht)try{m=new c().parseFromString(D,hr)}catch{}if(!m||!m.documentElement){m=ae.createDocument(Ei,"template",null);try{m.documentElement.innerHTML=Ks?B:D}catch{}}let L=m.body||m.documentElement;return p&&w&&L.insertBefore(i.createTextNode(w),L.childNodes[0]||null),Ei===ht?ke.call(m,ni?"html":"body")[0]:ni?m.documentElement:L},kn=function(p){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,w=C?C(p):p.ownerDocument;return De.call(w||p,p,(m?0:l.SHOW_ELEMENT)|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},na=function(p){return p=no(p,Me," "),p=no(p,ii," "),p=no(p,_n," "),p},oa=function(p){var m;sa(p);let w=(m=p.querySelectorAll)===null||m===void 0?void 0:m.call(p,"template");w&&Nt(w,D=>{Di(D.content)&&oa(D.content)})},sa=function(p){p.normalize();let m=kn(p,!0),w=m.nextNode();for(;w;)w.data=na(w.data),w=m.nextNode()},En=function(p){let m=T?T(p):null;return typeof m!="string"||pe(m)!=="form"?!1:typeof p.nodeName!="string"||typeof p.textContent!="string"||typeof p.removeChild!="function"||p.attributes!==P(p)||typeof p.removeAttribute!="function"||typeof p.removeAttributeNode!="function"||typeof p.getAttributeNode!="function"||typeof p.setAttribute!="function"||typeof p.namespaceURI!="string"||typeof p.insertBefore!="function"||typeof p.hasChildNodes!="function"||p.nodeType!==y(p)||p.childNodes!==b(p)},md=function(p){if(!y||typeof p!="object"||p===null)return null;try{let m=y(p);return typeof m=="number"?m:null}catch{return null}},Di=function(p){return md(p)===me.documentFragment},fr=function(p){return md(p)!==null};function Qe(E,p,m){E.length!==0&&Nt(E,w=>{w.call(e,p,m,Rn)})}let L0=function(p,m,w){return!!(ri&&w===me.element&&p.hasChildNodes()&&!fr(p.firstElementChild)&&_e(rl,p.textContent)&&_e(rl,p.innerHTML)||ri&&m_[m]&&w===me.element&&H(p)===ht&&(fr(p.firstElementChild)||typeof p.textContent=="string"&&_e(rl,p.textContent))||w===me.processingInstruction||ri&&w===me.comment&&_e(ef,p.data))},In=function(p,m){if(p instanceof RegExp)return _e(p,m);if(p instanceof Function){for(var w=arguments.length,D=new Array(w>2?w-2:0),L=2;L<w;L++)D[L-2]=arguments[L];return!!p(m,...D)}return!1},z0=function(p,m,w){if(!dr[m]&&Sd(m)&&In(dt.tagNameCheck,m))return!1;if(Ys&&!si[m]&&!si[gi(m)]){let D=v(p),L=b(p);if(L&&D){let Y=L.length;for(let j=Y-1;j>=0;--j){let Se=p===w?h(L[j],!0):L[j];D.insertBefore(Se,x(p))}}}return zt(p),!0},xd=function(p,m,w,D){return p.length===0?m:m===w||m===D?Er(m):m},Fi=function(p,m){return p===m||v(p)!==null?!1:(js&&ia(p),!0)},W0=function(p,m){if(O0(p),Qe(q.beforeSanitizeElements,p,null),Fi(p,m))return!0;if(En(p))return zt(p),!0;let w=pe(U(p)),D=k(p);if(de=xd(q.uponSanitizeElement,de,zs,Tn),Qe(q.uponSanitizeElement,p,{tagName:w,allowedTags:de}),Fi(p,m))return!0;if(L0(p,w,D))return zt(p),!0;if(dr[w]||!(Lt.tagCheck instanceof Function&&Lt.tagCheck(w))&&!de[w]){let L=z0(p,w,m);return L===!1&&(Qe(q.afterSanitizeElements,p,null),Fi(p,m))?!0:L}if(D===me.element&&!D0(p)||(w==="noscript"||w==="noembed"||w==="noframes")&&_e(f_,p.innerHTML))return zt(p),!0;if(Rt&&D===me.text){let L=p.textContent,Y=na(L);L!==Y&&(wr(e.removed,{element:p.cloneNode()}),p.textContent=Y)}return Qe(q.afterSanitizeElements,p,null),Fi(p,m)},yd=function(p,m,w){if(Zu[m]||pd(m,p)||ed&&(m==="id"||m==="name")&&(w in i||w in R0))return!1;let D=he[m]||Lt.attributeCheck instanceof Function&&Lt.attributeCheck(m,p);if(Vs&&_e(m0,m)||Qu&&_e(x0,m))return!0;if(!D)return Sd(p)&&In(dt.tagNameCheck,p)&&In(dt.attributeNameCheck,m,p)||m==="is"&&dt.allowCustomizedBuiltInElements&&In(dt.tagNameCheck,w);if(sd[m])return!0;let L=no(w,S0,"");return _e(qu,L)||(m==="src"||m==="xlink:href"||m==="href")&&p!=="script"&&Qa(w,"data:")===0&&nd[p]||Ju&&!_e(y0,L)?!0:!w},V0=re({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Sd=function(p){return!V0[gi(p)]&&_e(v0,p)},H0=function(p,m,w,D){if(X&&typeof u=="object"&&typeof u.getAttributeType=="function"&&!w)switch(u.getAttributeType(p,m)){case"TrustedHTML":return O(D);case"TrustedScriptURL":return G(D)}return D},$0=function(p,m,w,D){try{return w?p.setAttributeNS(w,m,D):p.setAttribute(m,D),En(p)?(zt(p),!1):!0}catch{return Ii(m,p),!1}},vd=function(p,m){return ri&&_e(p_,m)?!0:gi(p)==="attributename"&&Qa(m,"href")!==-1},X0=function(p,m){if(Qe(q.beforeSanitizeAttributes,p,null),Fi(p,m))return;let w=p.attributes;if(!w||En(p))return;he=xd(q.uponSanitizeAttribute,he,Ws,Pn);let D={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:he,forceKeepAttr:void 0},L=w.length,Y=pe(U(p));for(;L--;){let j=w[L],Se=j.name,kt=j.namespaceURI,Je=j.value,Ue=pe(Se),ft=Je,Pe=Se==="value"?ft:Yb(ft),bd=!1;if(D.attrName=Ue,D.attrValue=Pe,D.keepAttr=!0,D.forceKeepAttr=void 0,Qe(q.uponSanitizeAttribute,p,D),Pe=D.attrValue,td&&(Ue==="id"||Ue==="name")&&Qa(Pe,id)!==0&&(Ii(Se,p,j),Pe=id+Pe,bd=!0),vd(Se,Pe)){Ii(Se,p,j);continue}if(!D.forceKeepAttr){if(!D.keepAttr){Ii(Se,p,j);continue}if(!Hs&&_e(tf,Pe)){Ii(Se,p,j);continue}if(Rt&&(Pe=na(Pe)),!yd(Y,Ue,Pe)){Ii(Se,p,j);continue}Pe=H0(Y,Ue,kt,Pe),Pe!==ft&&$0(p,Se,kt,Pe)&&bd&&Gh(e.removed)}}Qe(q.afterSanitizeAttributes,p,null),Fi(p,m)},aa=function(p,m){W0(p,m),X0(p,m),Di(p.content)&&la(p.content)},la=function(p){let m=null,w=kn(p);for(Qe(q.beforeSanitizeShadowDOM,p,null);m=w.nextNode();)if(Qe(q.uponSanitizeShadowNode,m,null),aa(m,p),k(m)===me.element){let D=R(m);Di(D)&&(ca(D),la(D))}Rt&&sa(p),Qe(q.afterSanitizeShadowDOM,p,null)},ca=function(p){let m=[{node:p,shadow:null}];for(;m.length>0;){let w=m.pop();if(w.shadow){la(w.shadow);continue}let D=w.node,L=k(D)===me.element,Y=b(D);if(Y)for(let j=Y.length-1;j>=0;--j)m.push({node:Y[j],shadow:null});if(L){let j=T?T(D):null;if(typeof j=="string"&&pe(j)==="template"){let Se=D.content;Di(Se)&&m.push({node:Se,shadow:null})}}if(L){let j=R(D);Di(j)&&m.push({node:null,shadow:j},{node:j,shadow:null})}}};return e.sanitize=function(E){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=null,w=null,D=null,L=null;if(Ks=!E,Ks&&(E="<!-->"),typeof E!="string"&&!fr(E)&&(E=Qb(E),typeof E!="string"))throw Bt("dirty is not a string, aborting");if(!e.isSupported)return E;$s?(de=Tn,he=Pn):Qs(p),e.removed=[];let Y=js&&typeof E!="string"&&fr(E),j=[],Se=oi;if(Y){U0(E);let ft=U(E);if(typeof ft=="string"){let Pe=pe(ft);if(!de[Pe]||dr[Pe])throw Js(E),Bt("root node is forbidden and cannot be sanitized in-place")}if(En(E))throw Js(E),Bt("root node is clobbered and cannot be sanitized in-place");j=ra(E),oi=Ka()}else if(fr(E))m=gd("<!---->"),w=m.ownerDocument.importNode(E,!0),w.nodeType===me.element&&w.nodeName==="BODY"||w.nodeName==="HTML"?m=w:m.appendChild(w),ca(m);else{if(!Ri&&!Rt&&!ni&&E.indexOf("<")===-1)return V(E);if(m=gd(E),!m)return Ri?null:Gs?B:""}m&&Xs&&zt(m.firstChild);let kt=Y?E:m;try{Y&&ca(E);let ft=kn(kt);for(;D=ft.nextNode();)aa(D,kt);Y&&N0(E,j)}catch(ft){throw Y&&(Js(E),fd(E,j)),ft}finally{oi=Se}if(Y){if(fd(E,j))throw Bt("a node selected for removal could not be safely returned; refusing to sanitize in place");return Rt&&oa(E),E}if(Ri){if(Rt&&oa(m),Cn)for(L=ce.call(m.ownerDocument);m.firstChild;)L.appendChild(m.firstChild);else L=m;return(he.shadowroot||he.shadowrootmode)&&(L=Fe.call(r,L,!0)),L}let Je=()=>ni?m.outerHTML:m.innerHTML,Ue=Je();return Rt&&_e(s_,Ue)&&(sa(m),Ue=Je()),ni&&de["!doctype"]&&m.ownerDocument&&m.ownerDocument.doctype&&m.ownerDocument.doctype.name&&_e(d_,m.ownerDocument.doctype.name)&&(Ue="<!DOCTYPE "+m.ownerDocument.doctype.name+`>
`+Ue),V(Ue)},e.setConfig=function(){let E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Qs(E),$s=!0,Tn=de,Pn=he},e.clearConfig=function(){Rn=null,$s=!1,Tn=null,Pn=null,X=Z,B=""},e.isValidAttribute=function(E,p,m){Rn||Qs({});let w=pe(E),D=pe(p);return typeof m=="string"&&(vd(p,m)||!Hs&&_e(tf,m))?!1:yd(w,D,m)},e.addHook=function(E,p){typeof p=="function"&&we(q,E)&&wr(q[E],p)},e.removeHook=function(E,p){if(we(q,E)){if(p!==void 0){let m=Hb(q[E],p);return m===-1?void 0:Xb(q[E],m,1)[0]}return Gh(q[E])}},e.removeHooks=function(E){we(q,E)&&(q[E]=[])},e.removeAllHooks=function(){q=rf()},e}var uf=cf();var xt=1e-6,Ir=typeof Float32Array<"u"?Float32Array:Array;var _2=Math.PI/180,T2=180/Math.PI;var yt={};_d(yt,{add:()=>H_,adjoint:()=>k_,clone:()=>__,copy:()=>T_,create:()=>v_,determinant:()=>E_,equals:()=>Y_,exactEquals:()=>G_,frob:()=>V_,fromMat2d:()=>O_,fromMat4:()=>b_,fromQuat:()=>U_,fromRotation:()=>N_,fromScaling:()=>B_,fromTranslation:()=>M_,fromValues:()=>P_,identity:()=>A_,invert:()=>R_,mul:()=>j_,multiply:()=>df,multiplyScalar:()=>$_,multiplyScalarAndAdd:()=>X_,normalFromMat4:()=>L_,projection:()=>z_,rotate:()=>D_,scale:()=>F_,set:()=>C_,str:()=>W_,sub:()=>K_,subtract:()=>hf,translate:()=>I_,transpose:()=>w_});function v_(){var t=new Ir(9);return Ir!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function b_(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function __(t){var e=new Ir(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function T_(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function P_(t,e,i,r,n,o,s,a,l){var c=new Ir(9);return c[0]=t,c[1]=e,c[2]=i,c[3]=r,c[4]=n,c[5]=o,c[6]=s,c[7]=a,c[8]=l,c}function C_(t,e,i,r,n,o,s,a,l,c){return t[0]=e,t[1]=i,t[2]=r,t[3]=n,t[4]=o,t[5]=s,t[6]=a,t[7]=l,t[8]=c,t}function A_(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function w_(t,e){if(t===e){var i=e[1],r=e[2],n=e[5];t[1]=e[3],t[2]=e[6],t[3]=i,t[5]=e[7],t[6]=r,t[7]=n}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t}function R_(t,e){var i=e[0],r=e[1],n=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,h=-u*o+a*l,f=c*o-s*l,g=i*d+r*h+n*f;return g?(g=1/g,t[0]=d*g,t[1]=(-u*r+n*c)*g,t[2]=(a*r-n*s)*g,t[3]=h*g,t[4]=(u*i-n*l)*g,t[5]=(-a*i+n*o)*g,t[6]=f*g,t[7]=(-c*i+r*l)*g,t[8]=(s*i-r*o)*g,t):null}function k_(t,e){var i=e[0],r=e[1],n=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t[0]=s*u-a*c,t[1]=n*c-r*u,t[2]=r*a-n*s,t[3]=a*l-o*u,t[4]=i*u-n*l,t[5]=n*o-i*a,t[6]=o*c-s*l,t[7]=r*l-i*c,t[8]=i*s-r*o,t}function E_(t){var e=t[0],i=t[1],r=t[2],n=t[3],o=t[4],s=t[5],a=t[6],l=t[7],c=t[8];return e*(c*o-s*l)+i*(-c*n+s*a)+r*(l*n-o*a)}function df(t,e,i){var r=e[0],n=e[1],o=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],d=e[8],h=i[0],f=i[1],g=i[2],x=i[3],b=i[4],v=i[5],R=i[6],P=i[7],y=i[8];return t[0]=h*r+f*s+g*c,t[1]=h*n+f*a+g*u,t[2]=h*o+f*l+g*d,t[3]=x*r+b*s+v*c,t[4]=x*n+b*a+v*u,t[5]=x*o+b*l+v*d,t[6]=R*r+P*s+y*c,t[7]=R*n+P*a+y*u,t[8]=R*o+P*l+y*d,t}function I_(t,e,i){var r=e[0],n=e[1],o=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],d=e[8],h=i[0],f=i[1];return t[0]=r,t[1]=n,t[2]=o,t[3]=s,t[4]=a,t[5]=l,t[6]=h*r+f*s+c,t[7]=h*n+f*a+u,t[8]=h*o+f*l+d,t}function D_(t,e,i){var r=e[0],n=e[1],o=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],d=e[8],h=Math.sin(i),f=Math.cos(i);return t[0]=f*r+h*s,t[1]=f*n+h*a,t[2]=f*o+h*l,t[3]=f*s-h*r,t[4]=f*a-h*n,t[5]=f*l-h*o,t[6]=c,t[7]=u,t[8]=d,t}function F_(t,e,i){var r=i[0],n=i[1];return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=n*e[3],t[4]=n*e[4],t[5]=n*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function M_(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=e[0],t[7]=e[1],t[8]=1,t}function N_(t,e){var i=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=i,t[2]=0,t[3]=-i,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function B_(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=e[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function O_(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t}function U_(t,e){var i=e[0],r=e[1],n=e[2],o=e[3],s=i+i,a=r+r,l=n+n,c=i*s,u=r*s,d=r*a,h=n*s,f=n*a,g=n*l,x=o*s,b=o*a,v=o*l;return t[0]=1-d-g,t[3]=u-v,t[6]=h+b,t[1]=u+v,t[4]=1-c-g,t[7]=f-x,t[2]=h-b,t[5]=f+x,t[8]=1-c-d,t}function L_(t,e){var i=e[0],r=e[1],n=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],x=e[13],b=e[14],v=e[15],R=i*a-r*s,P=i*l-n*s,y=i*c-o*s,T=r*l-n*a,C=r*c-o*a,k=n*c-o*l,U=u*x-d*g,z=u*b-h*g,H=u*v-f*g,X=d*b-h*x,B=d*v-f*x,Z=h*v-f*b,S=R*Z-P*B+y*X+T*H-C*z+k*U;return S?(S=1/S,t[0]=(a*Z-l*B+c*X)*S,t[1]=(l*H-s*Z-c*z)*S,t[2]=(s*B-a*H+c*U)*S,t[3]=(n*B-r*Z-o*X)*S,t[4]=(i*Z-n*H+o*z)*S,t[5]=(r*H-i*B-o*U)*S,t[6]=(x*k-b*C+v*T)*S,t[7]=(b*y-g*k-v*P)*S,t[8]=(g*C-x*y+v*R)*S,t):null}function z_(t,e,i){return t[0]=2/e,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/i,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function W_(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function V_(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]+t[3]*t[3]+t[4]*t[4]+t[5]*t[5]+t[6]*t[6]+t[7]*t[7]+t[8]*t[8])}function H_(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t[3]=e[3]+i[3],t[4]=e[4]+i[4],t[5]=e[5]+i[5],t[6]=e[6]+i[6],t[7]=e[7]+i[7],t[8]=e[8]+i[8],t}function hf(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t[3]=e[3]-i[3],t[4]=e[4]-i[4],t[5]=e[5]-i[5],t[6]=e[6]-i[6],t[7]=e[7]-i[7],t[8]=e[8]-i[8],t}function $_(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*i,t}function X_(t,e,i,r){return t[0]=e[0]+i[0]*r,t[1]=e[1]+i[1]*r,t[2]=e[2]+i[2]*r,t[3]=e[3]+i[3]*r,t[4]=e[4]+i[4]*r,t[5]=e[5]+i[5]*r,t[6]=e[6]+i[6]*r,t[7]=e[7]+i[7]*r,t[8]=e[8]+i[8]*r,t}function G_(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]}function Y_(t,e){var i=t[0],r=t[1],n=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=e[0],h=e[1],f=e[2],g=e[3],x=e[4],b=e[5],v=e[6],R=e[7],P=e[8];return Math.abs(i-d)<=xt*Math.max(1,Math.abs(i),Math.abs(d))&&Math.abs(r-h)<=xt*Math.max(1,Math.abs(r),Math.abs(h))&&Math.abs(n-f)<=xt*Math.max(1,Math.abs(n),Math.abs(f))&&Math.abs(o-g)<=xt*Math.max(1,Math.abs(o),Math.abs(g))&&Math.abs(s-x)<=xt*Math.max(1,Math.abs(s),Math.abs(x))&&Math.abs(a-b)<=xt*Math.max(1,Math.abs(a),Math.abs(b))&&Math.abs(l-v)<=xt*Math.max(1,Math.abs(l),Math.abs(v))&&Math.abs(c-R)<=xt*Math.max(1,Math.abs(c),Math.abs(R))&&Math.abs(u-P)<=xt*Math.max(1,Math.abs(u),Math.abs(P))}var j_=df,K_=hf;var Ff=Q0(kf(),1);function Ef(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,rT(r.key),r)}}function fl(t,e,i){return e&&Ef(t.prototype,e),i&&Ef(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function Mf(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,hl(t,e)}function hl(t,e){return hl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},hl(t,e)}function iT(t,e){if(typeof t!="object"||t===null)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function rT(t){var e=iT(t,"string");return typeof e=="symbol"?e:String(e)}var co=(function(){function t(){}var e=t.prototype;return e._seed=function(r,n){if(r===(r||0))return r;for(var o=""+r,s=0,a=0;a<o.length;++a)s^=o.charCodeAt(a)|0;return s},t})(),If=(function(t){Mf(e,t);function e(r,n){var o;return o=t.call(this)||this,o._rng=void 0,o.seed(r,n),o}var i=e.prototype;return i.next=function(){return this._rng()},i.seed=function(n,o){this._rng=n},i.clone=function(n,o){return new e(this._rng,o)},fl(e,[{key:"name",get:function(){return"function"}}]),e})(co),Df=(function(){var t=[].slice.call(arguments),e=t,i=e[0],r=i===void 0?"default":i;switch(typeof r){case"object":if(r instanceof co)return r;break;case"function":return new If(r);default:return new If(Ff.default.apply(void 0,t))}throw new Error('invalid RNG "'+r+'"')}),nT=(function(t,e,i){return e===void 0&&(e=0),i===void 0&&(i=1),function(){return t.next()*(i-e)+e}});function nt(t){return new oT(t)}var oT=function(e){var i=this;this.n=void 0,this.isInt=function(){if(Number.isInteger(i.n))return i;throw new Error("Expected number to be an integer, got "+i.n)},this.isPositive=function(){if(i.n>0)return i;throw new Error("Expected number to be positive, got "+i.n)},this.lessThan=function(r){if(i.n<r)return i;throw new Error("Expected number to be less than "+r+", got "+i.n)},this.greaterThanOrEqual=function(r){if(i.n>=r)return i;throw new Error("Expected number to be greater than or equal to "+r+", got "+i.n)},this.greaterThan=function(r){if(i.n>r)return i;throw new Error("Expected number to be greater than "+r+", got "+i.n)},this.n=e},sT=(function(t,e,i){return e===void 0&&(e=0),i===void 0&&(i=1),i===void 0&&(i=e===void 0?1:e,e=0),nt(e).isInt(),nt(i).isInt(),function(){return Math.floor(t.next()*(i-e+1)+e)}}),aT=(function(t){return function(){return t.next()>=.5}}),lT=(function(t,e,i){return e===void 0&&(e=0),i===void 0&&(i=1),function(){var r,n,o;do r=t.next()*2-1,n=t.next()*2-1,o=r*r+n*n;while(!o||o>1);return e+i*n*Math.sqrt(-2*Math.log(o)/o)}}),cT=(function(t,e,i){e===void 0&&(e=0),i===void 0&&(i=1);var r=t.normal(e,i);return function(){return Math.exp(r())}}),uT=(function(t,e){return e===void 0&&(e=.5),nt(e).greaterThanOrEqual(0).lessThan(1),function(){return Math.floor(t.next()+e)}}),dT=(function(t,e,i){return e===void 0&&(e=1),i===void 0&&(i=.5),nt(e).isInt().isPositive(),nt(i).greaterThanOrEqual(0).lessThan(1),function(){for(var r=0,n=0;r++<e;)t.next()<i&&n++;return n}}),hT=(function(t,e){e===void 0&&(e=.5),nt(e).greaterThan(0).lessThan(1);var i=1/Math.log(1-e);return function(){return Math.floor(1+Math.log(t.next())*i)}}),fT=[0,0,.6931471805599453,1.791759469228055,3.1780538303479458,4.787491742782046,6.579251212010101,8.525161361065415,10.60460290274525,12.801827480081469],pT=function(e){return fT[e]},gT=.9189385332046727,mT=(function(t,e){if(e===void 0&&(e=1),nt(e).isPositive(),e<10){var i=Math.exp(-e);return function(){for(var l=i,c=0,u=t.next();u>l;)u=u-l,l=e*l/++c;return c}}else{var r=Math.sqrt(e),n=.931+2.53*r,o=-.059+.02483*n,s=1.1239+1.1328/(n-3.4),a=.9277-3.6224/(n-2);return function(){for(;;){var l=void 0,c=t.next();if(c<=.86*a)return l=c/a-.43,Math.floor((2*o/(.5-Math.abs(l))+n)*l+e+.445);c>=a?l=t.next()-.5:(l=c/a-.93,l=(l<0?-.5:.5)-l,c=t.next()*a);var u=.5-Math.abs(l);if(!(u<.013&&c>u)){var d=Math.floor((2*o/u+n)*l+e+.445);if(c=c*s/(o/(u*u)+n),d>=10){var h=(d+.5)*Math.log(e/d)-e-gT+d-(.08333333333333333-(.002777777777777778-1/(1260*d*d))/(d*d))/d;if(Math.log(c*r)<=h)return d}else if(d>=0){var f,g=(f=pT(d))!=null?f:0;if(Math.log(c)<=d*Math.log(e)-e-g)return d}}}}}}),xT=(function(t,e){return e===void 0&&(e=1),nt(e).isPositive(),function(){return-Math.log(1-t.next())/e}}),yT=(function(t,e){return e===void 0&&(e=1),nt(e).isInt().greaterThanOrEqual(0),function(){for(var i=0,r=0;r<e;++r)i+=t.next();return i}}),ST=(function(t,e){e===void 0&&(e=1),nt(e).isInt().isPositive();var i=t.irwinHall(e);return function(){return i()/e}}),vT=(function(t,e){e===void 0&&(e=1),nt(e).greaterThanOrEqual(0);var i=1/e;return function(){return 1/Math.pow(1-t.next(),i)}}),bT=(function(t){Mf(e,t);function e(){return t.apply(this,arguments)||this}var i=e.prototype;return i.next=function(){return Math.random()},i.seed=function(n,o){},i.clone=function(){return new e},fl(e,[{key:"name",get:function(){return"default"}}]),e})(co),pl=(function(){function t(i){var r=this;this._rng=void 0,this._patch=void 0,this._cache={},this.next=function(){return r._rng.next()},this.float=function(n,o){return r.uniform(n,o)()},this.int=function(n,o){return r.uniformInt(n,o)()},this.integer=function(n,o){return r.uniformInt(n,o)()},this.bool=function(){return r.uniformBoolean()()},this.boolean=function(){return r.uniformBoolean()()},this.uniform=function(n,o){return r._memoize("uniform",nT,n,o)},this.uniformInt=function(n,o){return r._memoize("uniformInt",sT,n,o)},this.uniformBoolean=function(){return r._memoize("uniformBoolean",aT)},this.normal=function(n,o){return lT(r,n,o)},this.logNormal=function(n,o){return cT(r,n,o)},this.bernoulli=function(n){return uT(r,n)},this.binomial=function(n,o){return dT(r,n,o)},this.geometric=function(n){return hT(r,n)},this.poisson=function(n){return mT(r,n)},this.exponential=function(n){return xT(r,n)},this.irwinHall=function(n){return yT(r,n)},this.bates=function(n){return ST(r,n)},this.pareto=function(n){return vT(r,n)},i&&i instanceof co?this.use(i):this.use(new bT),this._cache={}}var e=t.prototype;return e.clone=function(){var r=[].slice.call(arguments);return r.length?new t(Df.apply(void 0,r)):new t(this.rng.clone())},e.use=function(){this._rng=Df.apply(void 0,[].slice.call(arguments))},e.patch=function(){if(this._patch)throw new Error("Math.random already patched");this._patch=Math.random,Math.random=this.uniform()},e.unpatch=function(){this._patch&&(Math.random=this._patch,delete this._patch)},e.choice=function(r){if(!Array.isArray(r))throw new Error("Random.choice expected input to be an array, got "+typeof r);var n=r?.length;if(n>0){var o=this.uniformInt(0,n-1)();return r[o]}else return},e._memoize=function(r,n){var o=[].slice.call(arguments,2),s=""+o.join(";"),a=this._cache[r];return(a===void 0||a.key!==s)&&(a={key:s,distribution:n.apply(void 0,[this].concat(o))},this._cache[r]=a),a.distribution},fl(t,[{key:"rng",get:function(){return this._rng}}]),t})(),R2=new pl;var _T=`<div class="gl-box">
  <svg viewBox="0 0 55 60">
    <text x="27" y="56" class="gl-fps">00 FPS</text>
    <text x="28" y="8" class="gl-mem"></text>
    <rect x="0" y="14" rx="4" ry="4" width="55" height="32"></rect>
    <polyline class="gl-chart"></polyline>
  </svg>
  <svg viewBox="0 0 14 60" class="gl-cpu-svg">
    <line x1="7" y1="38" x2="7" y2="11" class="opacity"/>
    <line x1="7" y1="38" x2="7" y2="11" class="gl-cpu" stroke-dasharray="0 27"/>
    <path d="M5.35 43c-.464 0-.812.377-.812.812v1.16c-.783.1972-1.421.812-1.595 1.624h-1.16c-.435 0-.812.348-.812.812s.348.812.812.812h1.102v1.653H1.812c-.464 0-.812.377-.812.812 0 .464.377.812.812.812h1.131c.1943.783.812 1.392 1.595 1.595v1.131c0 .464.377.812.812.812.464 0 .812-.377.812-.812V53.15h1.653v1.073c0 .464.377.812.812.812.464 0 .812-.377.812-.812v-1.131c.783-.1943 1.392-.812 1.595-1.595h1.131c.464 0 .812-.377.812-.812 0-.464-.377-.812-.812-.812h-1.073V48.22h1.102c.435 0 .812-.348.812-.812s-.348-.812-.812-.812h-1.16c-.1885-.783-.812-1.421-1.595-1.624v-1.131c0-.464-.377-.812-.812-.812-.464 0-.812.377-.812.812v1.073H6.162v-1.073c0-.464-.377-.812-.812-.812zm.58 3.48h2.088c.754 0 1.363.609 1.363 1.363v2.088c0 .754-.609 1.363-1.363 1.363H5.93c-.754 0-1.363-.609-1.363-1.363v-2.088c0-.754.609-1.363 1.363-1.363z"/>
  </svg>
  <svg viewBox="0 0 14 60" class="gl-gpu-svg">
    <line x1="7" y1="38" x2="7" y2="11" class="opacity"/>
    <line x1="7" y1="38" x2="7" y2="11" class="gl-gpu" stroke-dasharray="0 27"/>
    <path d="M1.94775 43.3772a.736.736 0 10-.00416 1.472c.58535.00231.56465.1288.6348.3197.07015.18975.04933.43585.04933.43585l-.00653.05405v8.671a.736.736 0 101.472 0v-1.4145c.253.09522.52785.1495.81765.1495h5.267c1.2535 0 2.254-.9752 2.254-2.185v-3.105c0-1.2075-1.00625-2.185-2.254-2.185h-5.267c-.28865 0-.5635.05405-.8165.1495.01806-.16445.04209-.598-.1357-1.0787-.22425-.6072-.9499-1.2765-2.0125-1.2765zm2.9095 3.6455c.42435 0 .7659.36225.7659.8119v2.9785c0 .44965-.34155.8119-.7659.8119s-.7659-.36225-.7659-.8119v-2.9785c0-.44965.34155-.8119.7659-.8119zm4.117 0a2.3 2.3 0 012.3 2.3 2.3 2.3 0 01-2.3 2.3 2.3 2.3 0 01-2.3-2.3 2.3 2.3 0 012.3-2.3z"/>
  </svg>
</div>`,TT=`#gl-bench {
  position:absolute;
  left:0;
  top:0;
  z-index:1000;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

#gl-bench div {
  position: relative;
  display: block;
  margin: 4px;
  padding: 0 7px 0 10px;
  background: #6c6;
  border-radius: 15px;
  cursor: pointer;
  opacity: 0.9;
}

#gl-bench svg {
  height: 60px;
  margin: 0 -1px;
}

#gl-bench text {
  font-size: 12px;
  font-family: Helvetica,Arial,sans-serif;
  font-weight: 700;
  dominant-baseline: middle;
  text-anchor: middle;
}

#gl-bench .gl-mem {
  font-size: 9px;
}

#gl-bench line {
  stroke-width: 5;
  stroke: #112211;
  stroke-linecap: round;
}

#gl-bench polyline {
  fill: none;
  stroke: #112211;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3.5;
}

#gl-bench rect {
  fill: #448844;
}

#gl-bench .opacity {
  stroke: #448844;
}
`,gl=class{constructor(e,i={}){this.css=TT,this.svg=_T,this.paramLogger=()=>{},this.chartLogger=()=>{},this.chartLen=20,this.chartHz=20,this.names=[],this.cpuAccums=[],this.gpuAccums=[],this.activeAccums=[],this.chart=new Array(this.chartLen),this.now=()=>performance&&performance.now?performance.now():Date.now(),this.updateUI=()=>{[].forEach.call(this.nodes["gl-gpu-svg"],a=>{a.style.display=this.trackGPU?"inline":"none"})},Object.assign(this,i),this.detected=0,this.finished=[],this.isFramebuffer=0,this.frameId=0;let r,n=0,o,s=a=>{++n<20?r=requestAnimationFrame(s):(this.detected=Math.ceil(1e3*n/(a-o)/70),cancelAnimationFrame(r)),o||(o=a)};if(requestAnimationFrame(s),e){let a=async(c,u)=>Promise.resolve(setTimeout(()=>{e.getError();let d=this.now()-c;u.forEach((h,f)=>{h&&(this.gpuAccums[f]+=d)})},0)),l=(c,u,d)=>function(){let h=u.now();c.apply(d,arguments),u.trackGPU&&u.finished.push(a(h,u.activeAccums.slice(0)))};["drawArrays","drawElements","drawArraysInstanced","drawBuffers","drawElementsInstanced","drawRangeElements"].forEach(c=>{e[c]&&(e[c]=l(e[c],this,e))}),e.getExtension=((c,u)=>function(){let d=c.apply(e,arguments);return d&&["drawElementsInstancedANGLE","drawBuffersWEBGL"].forEach(h=>{d[h]&&(d[h]=l(d[h],u,d))}),d})(e.getExtension,this)}if(!this.withoutUI){this.dom||(this.dom=document.body);let a=document.createElement("div");a.id="gl-bench",this.dom.appendChild(a),this.dom.insertAdjacentHTML("afterbegin",'<style id="gl-bench-style">'+this.css+"</style>"),this.dom=a,this.dom.addEventListener("click",()=>{this.trackGPU=!this.trackGPU,this.updateUI()}),this.paramLogger=((l,c,u)=>{let d=["gl-cpu","gl-gpu","gl-mem","gl-fps","gl-gpu-svg","gl-chart"],h=Object.assign({},d);return d.forEach(f=>h[f]=c.getElementsByClassName(f)),this.nodes=h,(f,g,x,b,v,R,P)=>{h["gl-cpu"][f].style.strokeDasharray=(g*.27).toFixed(0)+" 100",h["gl-gpu"][f].style.strokeDasharray=(x*.27).toFixed(0)+" 100",h["gl-mem"][f].innerHTML=u[f]?u[f]:b?"mem: "+b.toFixed(0)+"mb":"",h["gl-fps"][f].innerHTML=v.toFixed(0)+" FPS",l(u[f],g,x,b,v,R,P)}})(this.paramLogger,this.dom,this.names),this.chartLogger=((l,c)=>{let u={"gl-chart":c.getElementsByClassName("gl-chart")};return(d,h,f)=>{let g="",x=h.length;for(let b=0;b<x;b++){let v=(f+b+1)%x;h[v]!=null&&(g=g+" "+(55*b/(x-1)).toFixed(1)+","+(45-h[v]*22/60/this.detected).toFixed(1))}u["gl-chart"][d].setAttribute("points",g),l(this.names[d],h,f)}})(this.chartLogger,this.dom)}}addUI(e){this.names.indexOf(e)==-1&&(this.names.push(e),this.dom&&(this.dom.insertAdjacentHTML("beforeend",this.svg),this.updateUI()),this.cpuAccums.push(0),this.gpuAccums.push(0),this.activeAccums.push(!1))}nextFrame(e){this.frameId++;let i=e||this.now();if(this.frameId<=1)this.paramFrame=this.frameId,this.paramTime=i;else{let r=i-this.paramTime;if(r>=1e3){let n=this.frameId-this.paramFrame,o=n/r*1e3;for(let s=0;s<this.names.length;s++){let a=this.cpuAccums[s]/r*100,l=this.gpuAccums[s]/r*100,c=performance&&performance.memory?performance.memory.usedJSHeapSize/(1<<20):0;this.paramLogger(s,a,l,c,o,r,n),this.cpuAccums[s]=0,Promise.all(this.finished).then(()=>{this.gpuAccums[s]=0,this.finished=[]})}this.paramFrame=this.frameId,this.paramTime=i}}if(!this.detected||!this.chartFrame)this.chartFrame=this.frameId,this.chartTime=i,this.circularId=0;else{let r=i-this.chartTime,n=this.chartHz*r/1e3;for(;--n>0&&this.detected;){let s=(this.frameId-this.chartFrame)/r*1e3;this.chart[this.circularId%this.chartLen]=s;for(let a=0;a<this.names.length;a++)this.chartLogger(a,this.chart,this.circularId);this.circularId++,this.chartFrame=this.frameId,this.chartTime=i}}}begin(e){this.updateAccums(e)}end(e){this.updateAccums(e)}updateAccums(e){let i=this.names.indexOf(e);i==-1&&(i=this.names.length,this.addUI(e));let r=this.now(),n=r-this.t0;for(let o=0;o<i+1;o++)this.activeAccums[o]&&(this.cpuAccums[o]+=n);this.activeAccums[i]=!this.activeAccums[i],this.t0=r}},Nf=gl;ee();ee();function _i(t,e){if(!t){let i=new Error(e||"shadertools: assertion failed.");throw Error.captureStackTrace?.(i,_i),i}}var fc={number:{type:"number",validate(t,e){return Number.isFinite(t)&&typeof e=="object"&&(e.max===void 0||t<=e.max)&&(e.min===void 0||t>=e.min)}},array:{type:"array",validate(t,e){return Array.isArray(t)||ArrayBuffer.isView(t)}}};function ig(t){let e={};for(let[i,r]of Object.entries(t))e[i]=GP(r);return e}function GP(t){let e=tg(t);if(e!=="object")return{value:t,...fc[e],type:e};if(typeof t=="object")return t?t.type!==void 0?{...t,...fc[t.type],type:t.type}:t.value===void 0?{type:"object",value:t}:(e=tg(t.value),{...t,...fc[e],type:e}):{type:"object",value:null};throw new Error("props")}function tg(t){return Array.isArray(t)||ArrayBuffer.isView(t)?"array":typeof t}var rg=`#ifdef MODULE_LOGDEPTH
  logdepth_adjustPosition(gl_Position);
#endif
`,ng=`#ifdef MODULE_MATERIAL
  fragColor = material_filterColor(fragColor);
#endif

#ifdef MODULE_LIGHTING
  fragColor = lighting_filterColor(fragColor);
#endif

#ifdef MODULE_FOG
  fragColor = fog_filterColor(fragColor);
#endif

#ifdef MODULE_PICKING
  fragColor = picking_filterHighlightColor(fragColor);
  fragColor = picking_filterPickingColor(fragColor);
#endif

#ifdef MODULE_LOGDEPTH
  logdepth_setFragDepth();
#endif
`;var YP={vertex:rg,fragment:ng},og=/void\s+main\s*\([^)]*\)\s*\{\n?/,sg=/}\n?[^{}]*$/,pc=[],en="__LUMA_INJECT_DECLARATIONS__";function ag(t){let e={vertex:{},fragment:{}};for(let i in t){let r=t[i],n=jP(i);typeof r=="string"&&(r={order:0,injection:r}),e[n][i]=r}return e}function jP(t){let e=t.slice(0,2);switch(e){case"vs":return"vertex";case"fs":return"fragment";default:throw new Error(e)}}function tn(t,e,i,r=!1){let n=e==="vertex";for(let o in i){let s=i[o];s.sort((l,c)=>l.order-c.order),pc.length=s.length;for(let l=0,c=s.length;l<c;++l)pc[l]=s[l].injection;let a=`${pc.join(`
`)}
`;switch(o){case"vs:#decl":n&&(t=t.replace(en,a));break;case"vs:#main-start":n&&(t=t.replace(og,l=>l+a));break;case"vs:#main-end":n&&(t=t.replace(sg,l=>a+l));break;case"fs:#decl":n||(t=t.replace(en,a));break;case"fs:#main-start":n||(t=t.replace(og,l=>l+a));break;case"fs:#main-end":n||(t=t.replace(sg,l=>a+l));break;default:t=t.replace(o,l=>l+a)}}return t=t.replace(en,""),r&&(t=t.replace(/\}\s*$/,o=>o+YP[e])),t}function Ki(t){t.map(e=>KP(e))}function KP(t){if(t.instance)return;Ki(t.dependencies||[]);let{propTypes:e={},deprecations:i=[],inject:r={}}=t,n={normalizedInjections:ag(r),parsedDeprecations:qP(i)};e&&(n.propValidators=ig(e)),t.instance=n;let o={};e&&(o=Object.entries(e).reduce((s,[a,l])=>{let c=l?.value;return c&&(s[a]=c),s},{})),t.defaultUniforms={...t.defaultUniforms,...o}}function gc(t,e,i){t.deprecations?.forEach(r=>{r.regex?.test(e)&&(r.deprecated?i.deprecated(r.old,r.new)():i.removed(r.old,r.new)())})}function qP(t){return t.forEach(e=>{e.type==="function"?e.regex=new RegExp(`\\b${e.old}\\(`):e.regex=new RegExp(`${e.type} ${e.old};`)}),t}function qi(t){Ki(t);let e={},i={};lg({modules:t,level:0,moduleMap:e,moduleDepth:i});let r=Object.keys(i).sort((n,o)=>i[o]-i[n]).map(n=>e[n]);return Ki(r),r}function lg(t){let{modules:e,level:i,moduleMap:r,moduleDepth:n}=t;if(i>=5)throw new Error("Possible loop in shader dependency graph");for(let o of e)r[o.name]=o,(n[o.name]===void 0||n[o.name]<i)&&(n[o.name]=i);for(let o of e)o.dependencies&&lg({modules:o.dependencies,level:i+1,moduleMap:r,moduleDepth:n})}var ZP=/^(?:uniform\s+)?(?:(?:lowp|mediump|highp)\s+)?[A-Za-z0-9_]+(?:<[^>]+>)?\s+([A-Za-z0-9_]+)(?:\s*\[[^\]]+\])?\s*;/,QP=/((?:layout\s*\([^)]*\)\s*)*)uniform\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{([\s\S]*?)\}\s*([A-Za-z_][A-Za-z0-9_]*)?\s*;/g;function ug(t){return`${t.name}Uniforms`}function JP(t,e){let i=e==="wgsl"?t.source:e==="vertex"?t.vs:t.fs;if(!i)return null;let r=ug(t);return tC(i,e==="wgsl"?"wgsl":"glsl",r)}function eC(t,e){let i=Object.keys(t.uniformTypes||{});if(!i.length)return null;let r=JP(t,e);return r?{moduleName:t.name,uniformBlockName:ug(t),stage:e,expectedUniformNames:i,actualUniformNames:r,matches:nC(i,r)}:null}function dg(t,e,i={}){let r=eC(t,e);if(!r||r.matches)return r;let n=oC(r);return i.log?.error?.(n,r)(),i.throwOnError!==!1&&_i(!1,n),r}function hg(t){let e=[],i=sC(t);for(let r of i.matchAll(QP)){let n=r[1]?.trim()||null;e.push({blockName:r[2],body:r[3],instanceName:r[4]||null,layoutQualifier:n,hasLayoutQualifier:!!n,isStd140:!!(n&&/\blayout\s*\([^)]*\bstd140\b[^)]*\)/.exec(n))})}return e}function fg(t,e,i,r){let n=hg(t).filter(s=>!s.isStd140),o=new Set;for(let s of n){if(o.has(s.blockName))continue;o.add(s.blockName);let a=r?.label?`${r.label} `:"",l=s.hasLayoutQualifier?`declares ${aC(s.layoutQualifier)} instead of layout(std140)`:"does not declare layout(std140)",c=`${a}${e} shader uniform block ${s.blockName} ${l}. luma.gl host-side shader block packing assumes explicit layout(std140) for GLSL uniform blocks. Add \`layout(std140)\` to the block declaration.`;i?.warn?.(c,s)()}return n}function tC(t,e,i){let r=e==="wgsl"?iC(t,i):rC(t,i);if(!r)return null;let n=[];for(let o of r.split(`
`)){let s=o.replace(/\/\/.*$/,"").trim();if(!s||s.startsWith("#"))continue;let a=e==="wgsl"?s.match(/^([A-Za-z0-9_]+)\s*:/):s.match(ZP);a&&n.push(a[1])}return n}function iC(t,e){let i=new RegExp(`\\bstruct\\s+${e}\\b`,"m").exec(t);if(!i)return null;let r=t.indexOf("{",i.index);if(r<0)return null;let n=0;for(let o=r;o<t.length;o++){let s=t[o];if(s==="{"){n++;continue}if(s==="}"&&(n--,n===0))return t.slice(r+1,o)}return null}function rC(t,e){return hg(t).find(r=>r.blockName===e)?.body||null}function nC(t,e){if(t.length!==e.length)return!1;for(let i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}function oC(t){let{expectedUniformNames:e,actualUniformNames:i}=t,r=e.filter(a=>!i.includes(a)),n=i.filter(a=>!e.includes(a)),o=[`Expected ${e.length} fields, found ${i.length}.`],s=lC(e,i);return s&&o.push(s),r.length&&o.push(`Missing from shader block (${r.length}): ${cg(r)}.`),n.length&&o.push(`Unexpected in shader block (${n.length}): ${cg(n)}.`),e.length<=12&&i.length<=12&&(r.length||n.length)&&(o.push(`Expected: ${e.join(", ")}.`),o.push(`Actual: ${i.join(", ")}.`)),`${t.moduleName}: ${t.stage} shader uniform block ${t.uniformBlockName} does not match module.uniformTypes. ${o.join(" ")}`}function sC(t){return t.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\/\/.*$/gm,"")}function aC(t){return t.replace(/\s+/g," ").trim()}function lC(t,e){let i=Math.min(t.length,e.length);for(let r=0;r<i;r++)if(t[r]!==e[r])return`First mismatch at field ${r+1}: expected ${t[r]}, found ${e[r]}.`;return t.length>e.length?`Shader block ends after field ${e.length}; expected next field ${t[e.length]}.`:e.length>t.length?`Shader block has extra field ${e.length}: ${e[t.length]}.`:null}function cg(t,e=8){if(t.length<=e)return t.join(", ");let i=t.length-e;return`${t.slice(0,e).join(", ")}, ... (${i} more)`}function pg(t){switch(t?.gpu.toLowerCase()){case"apple":return`#define APPLE_GPU
// Apple optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case"nvidia":return`#define NVIDIA_GPU
// Nvidia optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
`;case"intel":return`#define INTEL_GPU
// Intel optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Intel's built-in 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case"amd":return`#define AMD_GPU
`;default:return`#define DEFAULT_GPU
// Prevent driver from optimizing away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Headless Chrome's software shader 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// If the GPU doesn't have full 32 bits precision, will causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`}}function mg(t,e){if(Number(t.match(/^#version[ \t]+(\d+)/m)?.[1]||100)!==300)throw new Error("luma.gl v9 only supports GLSL 3.00 shader sources");switch(e){case"vertex":return t=gg(t,cC),t;case"fragment":return t=gg(t,uC),t;default:throw new Error(e)}}var xg=[[/^(#version[ \t]+(100|300[ \t]+es))?[ \t]*\n/,`#version 300 es
`],[/\btexture(2D|2DProj|Cube)Lod(EXT)?\(/g,"textureLod("],[/\btexture(2D|2DProj|Cube)(EXT)?\(/g,"texture("]],cC=[...xg,[mc("attribute"),"in $1"],[mc("varying"),"out $1"]],uC=[...xg,[mc("varying"),"in $1"]];function gg(t,e){for(let[i,r]of e)t=t.replace(i,r);return t}function mc(t){return new RegExp(`\\b${t}[ \\t]+(\\w+[ \\t]+\\w+(\\[\\w+\\])?;)`,"g")}function xc(t,e){let i="";for(let r in t){let n=t[r];if(i+=`void ${n.signature} {
`,n.header&&(i+=`  ${n.header}`),e[r]){let o=e[r];o.sort((s,a)=>s.order-a.order);for(let s of o)i+=`  ${s.injection}
`}n.footer&&(i+=`  ${n.footer}`),i+=`}
`}return i}function yc(t){let e={vertex:{},fragment:{}};for(let i of t){let r,n;typeof i!="string"?(r=i,n=r.hook):(r={},n=i),n=n.trim();let[o,s]=n.split(":"),a=n.replace(/\(.+/,""),l=Object.assign(r,{signature:s});switch(o){case"vs":e.vertex[a]=l;break;case"fs":e.fragment[a]=l;break;default:throw new Error(o)}}return e}function yg(t,e){return{name:dC(t,e),language:"glsl",version:hC(t)}}function dC(t,e="unnamed"){let r=/#define[^\S\r\n]*SHADER_NAME[^\S\r\n]*([A-Za-z0-9_-]+)\s*/.exec(t);return r?r[1]:e}function hC(t){let e=100,i=t.match(/[^\s]+/g);if(i&&i.length>=2&&i[0]==="#version"){let r=parseInt(i[1],10);Number.isFinite(r)&&(e=r)}if(e!==100&&e!==300)throw new Error(`Invalid GLSL version ${e}`);return e}var We="(?:var<\\s*(uniform|storage(?:\\s*,\\s*[A-Za-z_][A-Za-z0-9_]*)?)\\s*>|var)\\s+([A-Za-z_][A-Za-z0-9_]*)";var Zi=[new RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${We}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*${We}`,"g")],Mo=[new RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${We}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto|\\d+)\\s*\\)\\s*${We}`,"g")],Sg=[new RegExp(`@binding\\(\\s*(\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${We}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(\\d+)\\s*\\)\\s*${We}`,"g")],fC=[new RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${We}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)\\s*${We}`,"g"),new RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${We}`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${We}`,"g")];function No(t){let e=t.split(""),i=0,r=0,n=!1,o=!1,s=!1;for(;i<t.length;){let a=t[i],l=t[i+1];if(o){s?s=!1:a==="\\"?s=!0:a==='"'&&(o=!1),i++;continue}if(n){a===`
`||a==="\r"?n=!1:e[i]=" ",i++;continue}if(r>0){if(a==="/"&&l==="*"){e[i]=" ",e[i+1]=" ",r++,i+=2;continue}if(a==="*"&&l==="/"){e[i]=" ",e[i+1]=" ",r--,i+=2;continue}a!==`
`&&a!=="\r"&&(e[i]=" "),i++;continue}if(a==='"'){o=!0,i++;continue}if(a==="/"&&l==="/"){e[i]=" ",e[i+1]=" ",n=!0,i+=2;continue}if(a==="/"&&l==="*"){e[i]=" ",e[i+1]=" ",r=1,i+=2;continue}i++}return e.join("")}function Ti(t,e){let i=No(t),r=[];for(let n of e){n.lastIndex=0;let o;for(o=n.exec(i);o;){let s=n===e[0],a=o.index,l=o[0].length;r.push({match:t.slice(a,a+l),index:a,length:l,bindingToken:o[s?1:2],groupToken:o[s?2:1],accessDeclaration:o[3]?.trim(),name:o[4]}),o=n.exec(i)}}return r.sort((n,o)=>n.index-o.index)}function Sc(t,e,i){let r=Ti(t,e);if(!r.length)return t;let n="",o=0;for(let s of r)n+=t.slice(o,s.index),n+=i(s),o=s.index+s.length;return n+=t.slice(o),n}function vc(t){return/@binding\(\s*auto\s*\)/.test(No(t))}function vg(t,e){return Ti(t,e===Zi||e===Mo?fC:e).find(r=>r.bindingToken==="auto")}var bg=[new RegExp(`@binding\\(\\s*(\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${We}\\s*:\\s*([^;]+);`,"g"),new RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(\\d+)\\s*\\)\\s*${We}\\s*:\\s*([^;]+);`,"g")];function Bo(t,e=[]){let i=No(t),r=new Map;for(let o of e)r.set(_g(o.name,o.group,o.location),o.moduleName);let n=[];for(let o of bg){o.lastIndex=0;let s;for(s=o.exec(i);s;){let a=o===bg[0],l=Number(s[a?1:2]),c=Number(s[a?2:1]),u=s[3]?.trim(),d=s[4],h=s[5].trim(),f=r.get(_g(d,c,l));n.push(pC({name:d,group:c,binding:l,owner:f?"module":"application",moduleName:f,accessDeclaration:u,resourceType:h})),s=o.exec(i)}}return n.sort((o,s)=>o.group!==s.group?o.group-s.group:o.binding!==s.binding?o.binding-s.binding:o.name.localeCompare(s.name))}function pC(t){let e={name:t.name,group:t.group,binding:t.binding,owner:t.owner,kind:"unknown",moduleName:t.moduleName,resourceType:t.resourceType};if(t.accessDeclaration){let i=t.accessDeclaration.split(",").map(r=>r.trim());if(i[0]==="uniform")return{...e,kind:"uniform",access:"uniform"};if(i[0]==="storage"){let r=i[1]||"read_write";return{...e,kind:r==="read"?"read-only-storage":"storage",access:r}}}return t.resourceType==="sampler"||t.resourceType==="sampler_comparison"?{...e,kind:"sampler",samplerKind:t.resourceType==="sampler_comparison"?"comparison":"filtering"}:t.resourceType.startsWith("texture_storage_")?{...e,kind:"storage-texture",access:mC(t.resourceType),viewDimension:Tg(t.resourceType)}:t.resourceType.startsWith("texture_")?{...e,kind:"texture",viewDimension:Tg(t.resourceType),sampleType:gC(t.resourceType),multisampled:t.resourceType.startsWith("texture_multisampled_")}:e}function _g(t,e,i){return`${e}:${i}:${t}`}function Tg(t){if(t.includes("cube_array"))return"cube-array";if(t.includes("2d_array"))return"2d-array";if(t.includes("cube"))return"cube";if(t.includes("3d"))return"3d";if(t.includes("2d"))return"2d";if(t.includes("1d"))return"1d"}function gC(t){if(t.startsWith("texture_depth_"))return"depth";if(t.includes("<i32>"))return"sint";if(t.includes("<u32>"))return"uint";if(t.includes("<f32>"))return"float"}function mC(t){return/,\s*([A-Za-z_][A-Za-z0-9_]*)\s*>$/.exec(t)?.[1]}var bc=`

${en}
`,rn=100,xC=`precision highp float;
`;function wg(t){let e=qi(t.modules||[]),{source:i,bindingAssignments:r}=yC(t.platformInfo,{...t,source:t.source,stage:"vertex",modules:e});return{source:i,getUniforms:kg(e),bindingAssignments:r,bindingTable:Bo(i,r)}}function Rg(t){let{vs:e,fs:i}=t,r=qi(t.modules||[]);return{vs:Pg(t.platformInfo,{...t,source:e,stage:"vertex",modules:r}),fs:Pg(t.platformInfo,{...t,source:i,stage:"fragment",modules:r}),getUniforms:kg(r)}}function yC(t,e){let{source:i,stage:r,modules:n,hookFunctions:o=[],inject:s={},log:a}=e;_i(typeof i=="string","shader source must be a string");let l=i,c="",u=yc(o),d={},h={},f={};for(let P in s){let y=typeof s[P]=="string"?{injection:s[P],order:0}:s[P],T=/^(v|f)s:(#)?([\w-]+)$/.exec(P);if(T){let C=T[2],k=T[3];C?k==="decl"?h[P]=[y]:f[P]=[y]:d[P]=[y]}else f[P]=[y]}let g=n,x=bC(l),b=vC(x.source),v=CC(g,e._bindingRegistry,b),R=[];for(let P of g){a&&gc(P,l,a);let y=_C(Eg(P,"wgsl",a),P,{usedBindingsByGroup:b,bindingRegistry:e._bindingRegistry,reservedBindingKeysByGroup:v});R.push(...y.bindingAssignments);let T=y.source;c+=T;let C=P.injections?.[r]||{};for(let k in C){let U=/^(v|f)s:#([\w-]+)$/.exec(k);if(U){let H=U[2]==="decl"?h:f;H[k]=H[k]||[],H[k].push(C[k])}else d[k]=d[k]||[],d[k].push(C[k])}}return c+=bc,c=tn(c,r,h),c+=xc(u[r],d),c+=EC(R),c+=x.source,c=tn(c,r,f),kC(c),{source:c,bindingAssignments:R}}function Pg(t,e){let{source:i,stage:r,language:n="glsl",modules:o,defines:s={},hookFunctions:a=[],inject:l={},prologue:c=!0,log:u}=e;_i(typeof i=="string","shader source must be a string");let d=n==="glsl"?yg(i).version:-1,h=t.shaderLanguageVersion,f=d===100?"#version 100":"#version 300 es",x=i.split(`
`).slice(1).join(`
`),b={};o.forEach(C=>{Object.assign(b,C.defines)}),Object.assign(b,s);let v="";switch(n){case"wgsl":break;case"glsl":v=c?`${f}

// ----- PROLOGUE -------------------------
${`#define SHADER_TYPE_${r.toUpperCase()}`}

${pg(t)}
${r==="fragment"?xC:""}

// ----- APPLICATION DEFINES -------------------------

${SC(b)}

`:`${f}
`;break}let R=yc(a),P={},y={},T={};for(let C in l){let k=typeof l[C]=="string"?{injection:l[C],order:0}:l[C],U=/^(v|f)s:(#)?([\w-]+)$/.exec(C);if(U){let z=U[2],H=U[3];z?H==="decl"?y[C]=[k]:T[C]=[k]:P[C]=[k]}else T[C]=[k]}for(let C of o){u&&gc(C,x,u);let k=Eg(C,r,u);v+=k;let U=C.instance?.normalizedInjections[r]||{};for(let z in U){let H=/^(v|f)s:#([\w-]+)$/.exec(z);if(H){let B=H[2]==="decl"?y:T;B[z]=B[z]||[],B[z].push(U[z])}else P[z]=P[z]||[],P[z].push(U[z])}}return v+="// ----- MAIN SHADER SOURCE -------------------------",v+=bc,v=tn(v,r,y),v+=xc(R[r],P),v+=x,v=tn(v,r,T),n==="glsl"&&d!==h&&(v=mg(v,r)),n==="glsl"&&fg(v,r,u),v.trim()}function kg(t){return function(i){let r={};for(let n of t){let o=n.getUniforms?.(i,r);Object.assign(r,o)}return r}}function SC(t={}){let e="";for(let i in t){let r=t[i];(r||Number.isFinite(r))&&(e+=`#define ${i.toUpperCase()} ${t[i]}
`)}return e}function Eg(t,e,i){let r;switch(e){case"vertex":r=t.vs||"";break;case"fragment":r=t.fs||"";break;case"wgsl":r=t.source||"";break;default:_i(!1)}if(!t.name)throw new Error("Shader module must have a name");dg(t,e,{log:i});let n=t.name.toUpperCase().replace(/[^0-9a-z]/gi,"_"),o=`// ----- MODULE ${t.name} ---------------

`;return e!=="wgsl"&&(o+=`#define MODULE_${n}
`),o+=`${r}
`,o}function vC(t){let e=new Map;for(let i of Ti(t,Sg)){let r=Number(i.bindingToken),n=Number(i.groupToken);_c(n,r,i.name),Qi(e,n,r,`application binding "${i.name}"`)}return e}function bC(t){let e=Ti(t,Mo),i=new Map;for(let o of e){if(o.bindingToken==="auto")continue;let s=Number(o.bindingToken),a=Number(o.groupToken);_c(a,s,o.name),Qi(i,a,s,`application binding "${o.name}"`)}let r={sawSupportedBindingDeclaration:e.length>0},n=Sc(t,Mo,o=>PC(o,i,r));if(vc(t)&&!r.sawSupportedBindingDeclaration)throw new Error('Unsupported @binding(auto) declaration form in application WGSL. Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.');return{source:n}}function _C(t,e,i){let r=[],o={sawSupportedBindingDeclaration:Ti(t,Zi).length>0,nextHintedBindingLocation:typeof e.firstBindingSlot=="number"?e.firstBindingSlot:null},s=Sc(t,Zi,a=>TC(a,{module:e,context:i,bindingAssignments:r,relocationState:o}));if(vc(t)&&!o.sawSupportedBindingDeclaration)throw new Error(`Unsupported @binding(auto) declaration form in module "${e.name}". Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.`);return{source:s,bindingAssignments:r}}function TC(t,e){let{module:i,context:r,bindingAssignments:n,relocationState:o}=e,{match:s,bindingToken:a,groupToken:l,name:c}=t,u=Number(l);if(a==="auto"){let h=Ig(u,i.name,c),f=r.bindingRegistry?.get(h),g=f!==void 0?f:o.nextHintedBindingLocation===null?Ag(u,r.usedBindingsByGroup):Ag(u,r.usedBindingsByGroup,o.nextHintedBindingLocation);return Cg(i.name,u,g,c),f!==void 0&&AC(r.reservedBindingKeysByGroup,u,g,h)?(n.push({moduleName:i.name,name:c,group:u,location:g}),s.replace(/@binding\(\s*auto\s*\)/,`@binding(${g})`)):(Qi(r.usedBindingsByGroup,u,g,`module "${i.name}" binding "${c}"`),r.bindingRegistry?.set(h,g),n.push({moduleName:i.name,name:c,group:u,location:g}),o.nextHintedBindingLocation!==null&&f===void 0&&(o.nextHintedBindingLocation=g+1),s.replace(/@binding\(\s*auto\s*\)/,`@binding(${g})`))}let d=Number(a);return Cg(i.name,u,d,c),Qi(r.usedBindingsByGroup,u,d,`module "${i.name}" binding "${c}"`),n.push({moduleName:i.name,name:c,group:u,location:d}),s}function PC(t,e,i){let{match:r,bindingToken:n,groupToken:o,name:s}=t,a=Number(o);if(n==="auto"){let l=RC(a,e);return _c(a,l,s),Qi(e,a,l,`application binding "${s}"`),r.replace(/@binding\(\s*auto\s*\)/,`@binding(${l})`)}return i.sawSupportedBindingDeclaration=!0,r}function CC(t,e,i){let r=new Map;if(!e)return r;for(let n of t)for(let o of wC(n)){let s=Ig(o.group,n.name,o.name),a=e.get(s);if(a!==void 0){let l=r.get(o.group)||new Map,c=l.get(a);if(c&&c!==s)throw new Error(`Duplicate WGSL binding reservation for modules "${c}" and "${s}": group ${o.group}, binding ${a}.`);Qi(i,o.group,a,`registered module binding "${s}"`),l.set(a,s),r.set(o.group,l)}}return r}function AC(t,e,i,r){let n=t.get(e);if(!n)return!1;let o=n.get(i);if(!o)return!1;if(o!==r)throw new Error(`Registered module binding "${r}" collided with "${o}": group ${e}, binding ${i}.`);return!0}function wC(t){let e=[],i=t.source||"";for(let r of Ti(i,Zi))e.push({name:r.name,group:Number(r.groupToken)});return e}function _c(t,e,i){if(t===0&&e>=rn)throw new Error(`Application binding "${i}" in group 0 uses reserved binding ${e}. Application-owned explicit group-0 bindings must stay below ${rn}.`)}function Cg(t,e,i,r){if(e===0&&i<rn)throw new Error(`Module "${t}" binding "${r}" in group 0 uses reserved application binding ${i}. Module-owned explicit group-0 bindings must be ${rn} or higher.`)}function Qi(t,e,i,r){let n=t.get(e)||new Set;if(n.has(i))throw new Error(`Duplicate WGSL binding assignment for ${r}: group ${e}, binding ${i}.`);n.add(i),t.set(e,n)}function Ag(t,e,i){let r=e.get(t)||new Set,n=i??(t===0?rn:r.size>0?Math.max(...r)+1:0);for(;r.has(n);)n++;return n}function RC(t,e){let i=e.get(t)||new Set,r=0;for(;i.has(r);)r++;return r}function kC(t){let e=vg(t,Zi);if(!e)return;let i=IC(t,e.index);throw i?new Error(`Unresolved @binding(auto) for module "${i}" binding "${e.name}" remained in assembled WGSL source.`):DC(t,e.index)?new Error(`Unresolved @binding(auto) for application binding "${e.name}" remained in assembled WGSL source.`):new Error(`Unresolved @binding(auto) remained in assembled WGSL source near "${FC(e.match)}".`)}function EC(t){if(t.length===0)return"";let e=`// ----- MODULE WGSL BINDING ASSIGNMENTS ---------------
`;for(let i of t)e+=`// ${i.moduleName}.${i.name} -> @group(${i.group}) @binding(${i.location})
`;return e+=`
`,e}function Ig(t,e,i){return`${t}:${e}:${i}`}function IC(t,e){let i=/^\/\/ ----- MODULE ([^\n]+) ---------------$/gm,r,n;for(n=i.exec(t);n&&n.index<=e;)r=n[1],n=i.exec(t);return r}function DC(t,e){let i=t.indexOf(bc);return i>=0?e>i:!0}function FC(t){return t.replace(/\s+/g," ").trim()}var Tc="([a-zA-Z_][a-zA-Z0-9_]*)",MC=new RegExp(`^\\s*\\#\\s*ifdef\\s*${Tc}\\s*$`),NC=new RegExp(`^\\s*\\#\\s*ifndef\\s*${Tc}\\s*(?:\\/\\/.*)?$`),BC=/^\s*\#\s*else\s*(?:\/\/.*)?$/,OC=/^\s*\#\s*endif\s*$/,UC=new RegExp(`^\\s*\\#\\s*ifdef\\s*${Tc}\\s*(?:\\/\\/.*)?$`),LC=/^\s*\#\s*endif\s*(?:\/\/.*)?$/;function Dg(t,e){let i=t.split(`
`),r=[],n=[],o=!0;for(let s of i){let a=s.match(UC)||s.match(MC),l=s.match(NC),c=s.match(BC),u=s.match(LC)||s.match(OC);if(a||l){let d=(a||l)?.[1],h=!!e?.defines?.[d],f=a?h:!h,g=o&&f;n.push({parentActive:o,branchTaken:f,active:g}),o=g}else if(c){let d=n[n.length-1];if(!d)throw new Error("Encountered #else without matching #ifdef or #ifndef");d.active=d.parentActive&&!d.branchTaken,d.branchTaken=!0,o=d.active}else u?(n.pop(),o=n.length?n[n.length-1].active:!0):o&&r.push(s)}if(n.length>0)throw new Error("Unterminated conditional block in shader source");return r.join(`
`)}var nn=class t{static defaultShaderAssembler;_hookFunctions=[];_defaultModules=[];_wgslBindingRegistry=new Map;static getDefaultShaderAssembler(){return t.defaultShaderAssembler=t.defaultShaderAssembler||new t,t.defaultShaderAssembler}addDefaultModule(e){this._defaultModules.find(i=>i.name===(typeof e=="string"?e:e.name))||this._defaultModules.push(e)}removeDefaultModule(e){let i=typeof e=="string"?e:e.name;this._defaultModules=this._defaultModules.filter(r=>r.name!==i)}addShaderHook(e,i){i&&(e=Object.assign(i,{hook:e})),this._hookFunctions.push(e)}assembleWGSLShader(e){let i=this._getModuleList(e.modules),r=this._hookFunctions,{source:n,getUniforms:o,bindingAssignments:s}=wg({...e,source:e.source,_bindingRegistry:this._wgslBindingRegistry,modules:i,hookFunctions:r}),a={...i.reduce((c,u)=>(Object.assign(c,u.defines),c),{}),...e.defines},l=e.platformInfo.shaderLanguage==="wgsl"?Dg(n,{defines:a}):n;return{source:l,getUniforms:o,modules:i,bindingAssignments:s,bindingTable:Bo(l,s)}}assembleGLSLShaderPair(e){let i=this._getModuleList(e.modules),r=this._hookFunctions;return{...Rg({...e,vs:e.vs,fs:e.fs,modules:i,hookFunctions:r}),modules:i}}_getModuleList(e=[]){let i=new Array(this._defaultModules.length+e.length),r={},n=0;for(let o=0,s=this._defaultModules.length;o<s;++o){let a=this._defaultModules[o],l=a.name;i[n++]=a,r[l]=!0}for(let o=0,s=e.length;o<s;++o){let a=e[o],l=a.name;r[l]||(i[n++]=a,r[l]=!0)}return i.length=n,Ki(i),i}};ee();var Pc={};function Ji(t="id"){Pc[t]=Pc[t]||1;let e=Pc[t]++;return`${t}-${e}`}var Oo=class{id;userData={};topology;bufferLayout=[];vertexCount;indices;attributes;constructor(e){if(this.id=e.id||Ji("geometry"),this.topology=e.topology,this.indices=e.indices||null,this.attributes=e.attributes,this.vertexCount=e.vertexCount,this.bufferLayout=e.bufferLayout||[],this.indices&&!(this.indices.usage&N.INDEX))throw new Error("Index buffer must have INDEX usage")}destroy(){this.indices?.destroy();for(let e of Object.values(this.attributes))e.destroy()}getVertexCount(){return this.vertexCount}getAttributes(){return this.attributes}getIndexes(){return this.indices||null}_calculateVertexCount(e){return e.byteLength/12}};function Fg(t,e){if(e instanceof Oo)return e;let i=zC(t,e),{attributes:r,bufferLayout:n}=WC(t,e);return new Oo({topology:e.topology||"triangle-list",bufferLayout:n,vertexCount:e.vertexCount,indices:i,attributes:r})}function zC(t,e){if(!e.indices)return;let i=e.indices.value;return t.createBuffer({usage:N.INDEX,data:i})}function WC(t,e){let i=[],r={};for(let[o,s]of Object.entries(e.attributes)){let a=o;switch(o){case"POSITION":a="positions";break;case"NORMAL":a="normals";break;case"TEXCOORD_0":a="texCoords";break;case"TEXCOORD_1":a="texCoords1";break;case"COLOR_0":a="colors";break}if(s){r[a]=t.createBuffer({data:s.value,id:`${o}-buffer`});let{value:l,size:c,normalized:u}=s;if(c===void 0)throw new Error(`Attribute ${o} is missing a size`);i.push({name:a,format:Ut.getVertexFormatFromAttribute(l,c,u)})}}let n=e._calculateVertexCount(e.attributes,e.indices);return{attributes:r,bufferLayout:i,vertexCount:n}}function Mg(t,e){let i={},r="Values";if(t.attributes.length===0&&!t.varyings?.length)return{"No attributes or varyings":{[r]:"N/A"}};for(let n of t.attributes)if(n){let o=`${n.location} ${n.name}: ${n.type}`;i[`in ${o}`]={[r]:n.stepMode||"vertex"}}for(let n of t.varyings||[]){let o=`${n.location} ${n.name}`;i[`out ${o}`]={[r]:JSON.stringify(n)}}return i}var Ng="__debugFramebufferState";function Og(t,e,i){if(t.device.type!=="webgl")return;let r=$C(t.device);if(!r.flushing){if(GC(t)){VC(t,i,r);return}e&&XC(e)&&e.handle!==null&&(r.queuedFramebuffers.includes(e)||r.queuedFramebuffers.push(e))}}function VC(t,e,i){if(i.queuedFramebuffers.length===0)return;let r=t.device,{gl:n}=r,o=n.getParameter(36010),s=n.getParameter(36006),[a,l]=t.device.getDefaultCanvasContext().getDrawingBufferSize(),c=Bg(e.top,8),u=Bg(e.left,8);i.flushing=!0;try{for(let d of i.queuedFramebuffers){let[h,f,g,x,b]=HC({framebuffer:d,targetWidth:a,targetHeight:l,topPx:c,leftPx:u,minimap:e.minimap});n.bindFramebuffer(36008,d.handle),n.bindFramebuffer(36009,null),n.blitFramebuffer(0,0,d.width,d.height,h,f,g,x,16384,9728),c+=b+8}}finally{n.bindFramebuffer(36008,o),n.bindFramebuffer(36009,s),i.flushing=!1}}function HC(t){let{framebuffer:e,targetWidth:i,targetHeight:r,topPx:n,leftPx:o,minimap:s}=t,a=s?Math.max(Math.floor(i/4),1):i,l=s?Math.max(Math.floor(r/4),1):r,c=Math.min(a/e.width,l/e.height),u=Math.max(Math.floor(e.width*c),1),d=Math.max(Math.floor(e.height*c),1),h=o,f=Math.max(r-n-d,0),g=h+u,x=f+d;return[h,f,g,x,d]}function $C(t){return t.userData[Ng]||={flushing:!1,queuedFramebuffers:[]},t.userData[Ng]}function XC(t){return"colorAttachments"in t}function GC(t){let e=t.props.framebuffer;return!e||e.handle===null}function Bg(t,e){if(!t)return e;let i=Number.parseInt(t,10);return Number.isFinite(i)?i:e}function Uo(t,e,i){if(t===e)return!0;if(!i||!t||!e)return!1;if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(!Uo(t[r],e[r],i-1))return!1;return!0}if(Array.isArray(e))return!1;if(typeof t=="object"&&typeof e=="object"){let r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(let o of r)if(!e.hasOwnProperty(o)||!Uo(t[o],e[o],i-1))return!1;return!0}return!1}ee();var er=class{bufferLayouts;constructor(e){this.bufferLayouts=e}getBufferLayout(e){return this.bufferLayouts.find(i=>i.name===e)||null}getAttributeNamesForBuffer(e){return e.attributes?e.attributes?.map(i=>i.attribute):[e.name]}mergeBufferLayouts(e,i){let r=[...e];for(let n of i){let o=r.findIndex(s=>s.name===n.name);o<0?r.push(n):r[o]=n}return r}getBufferIndex(e){let i=this.bufferLayouts.findIndex(r=>r.name===e);return i===-1&&_.warn(`BufferLayout: Missing buffer for "${e}".`)(),i}};function Ug(t,e){let i=1/0;for(let r of t){let n=e[r];n!==void 0&&(i=Math.min(i,n))}return i}function Lg(t,e){let i=Object.fromEntries(t.attributes.map(n=>[n.name,n.location])),r=e.slice();return r.sort((n,o)=>{let s=n.attributes?n.attributes.map(u=>u.attribute):[n.name],a=o.attributes?o.attributes.map(u=>u.attribute):[o.name],l=Ug(s,i),c=Ug(a,i);return l-c}),r}function Cc(t,e){if(!t||!e.some(r=>r.bindingLayout?.length))return t;let i={...t,bindings:t.bindings.map(r=>({...r}))};"attributes"in(t||{})&&(i.attributes=t?.attributes||[]);for(let r of e)for(let n of r.bindingLayout||[])for(let o of YC(n.name)){let s=i.bindings.find(a=>a.name===o);s?.group===0&&(s.group=n.group)}return i}function zg(t){return!!(t.uniformTypes&&!jC(t.uniformTypes))}function YC(t){let e=new Set([t,`${t}Uniforms`]);return t.endsWith("Uniforms")||e.add(`${t}Sampler`),[...e]}function jC(t){for(let e in t)return!1;return!0}ee();function Wg(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Vg(t){return Array.isArray(t)?t.length===0||typeof t[0]=="number":!1}function Ac(t){return Wg(t)||Vg(t)}function KC(t){return Ac(t)||typeof t=="number"||typeof t=="boolean"}function Hg(t,e={}){let i={bindings:{},uniforms:{}};return Object.keys(t).forEach(r=>{let n=t[r];Object.prototype.hasOwnProperty.call(e,r)||KC(n)?i.uniforms[r]=n:i.bindings[r]=n}),i}var Lo=class{options={disableWarnings:!1};modules;moduleUniforms;moduleBindings;constructor(e,i){Object.assign(this.options,i);let r=qi(Object.values(e).filter(qC));for(let n of r)e[n.name]=n;_.log(1,"Creating ShaderInputs with modules",Object.keys(e))(),this.modules=e,this.moduleUniforms={},this.moduleBindings={};for(let[n,o]of Object.entries(e))o&&(this._addModule(o),o.name&&n!==o.name&&!this.options.disableWarnings&&_.warn(`Module name: ${n} vs ${o.name}`)())}destroy(){}setProps(e){for(let i of Object.keys(e)){let r=i,n=e[r]||{},o=this.modules[r];if(!o)this.options.disableWarnings||_.warn(`Module ${i} not found`)();else{let s=this.moduleUniforms[r],a=this.moduleBindings[r],l=o.getUniforms?.(n,s)||n,{uniforms:c,bindings:u}=Hg(l,o.uniformTypes);this.moduleUniforms[r]=$g(s,c,o.uniformTypes),this.moduleBindings[r]={...a,...u}}}}getModules(){return Object.values(this.modules)}getUniformValues(){return this.moduleUniforms}getBindingValues(){let e={};for(let i of Object.values(this.moduleBindings))Object.assign(e,i);return e}getDebugTable(){let e={};for(let[i,r]of Object.entries(this.moduleUniforms))for(let[n,o]of Object.entries(r))e[`${i}.${n}`]={type:this.modules[i].uniformTypes?.[n],value:String(o)};return e}_addModule(e){let i=e.name;this.moduleUniforms[i]=$g({},e.defaultUniforms||{},e.uniformTypes),this.moduleBindings[i]={}}};function $g(t={},e={},i={}){let r={...t};for(let[n,o]of Object.entries(e))o!==void 0&&(r[n]=wc(t[n],o,i[n]));return r}function wc(t,e,i){if(!i||typeof i=="string")return on(e);if(Array.isArray(i)){if(Rc(e)||!Array.isArray(e))return on(e);let s=Array.isArray(t)&&!Rc(t)?[...t]:[],a=s.slice();for(let l=0;l<e.length;l++){let c=e[l];c!==void 0&&(a[l]=wc(s[l],c,i[0]))}return a}if(!kc(e))return on(e);let r=i,n=kc(t)?t:{},o={...n};for(let[s,a]of Object.entries(e))a!==void 0&&(o[s]=wc(n[s],a,r[s]));return o}function on(t){return ArrayBuffer.isView(t)?Array.prototype.slice.call(t):Array.isArray(t)?Rc(t)?t.slice():t.map(i=>i===void 0?void 0:on(i)):kc(t)?Object.fromEntries(Object.entries(t).map(([e,i])=>[e,i===void 0?void 0:on(i)])):t}function Rc(t){return ArrayBuffer.isView(t)||Array.isArray(t)&&(t.length===0||typeof t[0]=="number")}function kc(t){return!!t&&typeof t=="object"&&!Array.isArray(t)&&!ArrayBuffer.isView(t)}function qC(t){return!!t?.dependencies}ee();ee();var Ec={"+X":0,"-X":1,"+Y":2,"-Y":3,"+Z":4,"-Z":5};function sn(t){return t?Array.isArray(t)?t[0]??null:t:null}function Xg(t){let{dimension:e,data:i}=t;if(!i)return null;switch(e){case"1d":{let r=sn(i);if(!r)return null;let{width:n}=an(r);return{width:n,height:1}}case"2d":{let r=sn(i);return r?an(r):null}case"3d":case"2d-array":{if(!Array.isArray(i)||i.length===0)return null;let r=sn(i[0]);return r?an(r):null}case"cube":{let r=Object.keys(i)[0]??null;if(!r)return null;let n=i[r],o=sn(n);return o?an(o):null}case"cube-array":{if(!Array.isArray(i)||i.length===0)return null;let r=i[0],n=Object.keys(r)[0]??null;if(!n)return null;let o=sn(r[n]);return o?an(o):null}default:return null}}function an(t){if(Gi(t))return Nr(t);if(typeof t=="object"&&"width"in t&&"height"in t)return{width:t.width,height:t.height};throw new Error("Unsupported mip-level data")}function ZC(t){return typeof t=="object"&&t!==null&&"data"in t&&"width"in t&&"height"in t}function QC(t){return ArrayBuffer.isView(t)}function Ic(t){let{textureFormat:e,format:i}=t;if(e&&i&&e!==i)throw new Error(`Conflicting texture formats "${e}" and "${i}" provided for the same mip level`);return e??i}function Gg(t){let e=Ec[t];if(e===void 0)throw new Error(`Invalid cube face: ${t}`);return e}function JC(t,e){return 6*t+Gg(e)}function Dc(t){throw new Error("setTexture1DData not supported in WebGL.")}function eA(t){return Array.isArray(t)?t:[t]}function Pi(t,e,i,r){let n=eA(e),o=t,s=[];for(let a=0;a<n.length;a++){let l=n[a];if(Gi(l))s.push({type:"external-image",image:l,z:o,mipLevel:a});else if(ZC(l))s.push({type:"texture-data",data:l,textureFormat:Ic(l),z:o,mipLevel:a});else if(QC(l)&&i)s.push({type:"texture-data",data:{data:l,width:Math.max(1,i.width>>a),height:Math.max(1,i.height>>a),...r?{format:r}:{}},textureFormat:r,z:o,mipLevel:a});else throw new Error("Unsupported 2D mip-level payload")}return s}function Fc(t){let e=[];for(let i=0;i<t.length;i++)e.push(...Pi(i,t[i]));return e}function Mc(t){let e=[];for(let i=0;i<t.length;i++)e.push(...Pi(i,t[i]));return e}function Nc(t){let e=[];for(let[i,r]of Object.entries(t)){let n=Gg(i);e.push(...Pi(n,r))}return e}function Bc(t){let e=[];return t.forEach((i,r)=>{for(let[n,o]of Object.entries(i)){let s=JC(r,n);e.push(...Pi(s,o))}}),e}var Ci=class t{device;id;props;_texture=null;_sampler=null;_view=null;ready;isReady=!1;destroyed=!1;resolveReady=()=>{};rejectReady=()=>{};get texture(){if(!this._texture)throw new Error("Texture not initialized yet");return this._texture}get sampler(){if(!this._sampler)throw new Error("Sampler not initialized yet");return this._sampler}get view(){if(!this._view)throw new Error("View not initialized yet");return this._view}get[Symbol.toStringTag](){return"DynamicTexture"}toString(){let e=this._texture?.width??this.props.width??"?",i=this._texture?.height??this.props.height??"?";return`DynamicTexture:"${this.id}":${e}x${i}px:(${this.isReady?"ready":"loading..."})`}constructor(e,i){this.device=e;let r=Ji("dynamic-texture"),n=i;this.props={...t.defaultProps,id:r,...i,data:null},this.id=this.props.id,this.ready=new Promise((o,s)=>{this.resolveReady=o,this.rejectReady=s}),this.initAsync(n)}async initAsync(e){try{let i=await this._loadAllData(e);this._checkNotDestroyed();let r=i.data?tA({...i,width:e.width,height:e.height,format:e.format}):[],n="format"in e&&e.format!==void 0,o="usage"in e&&e.usage!==void 0,a=(()=>{if(this.props.width&&this.props.height)return{width:this.props.width,height:this.props.height};let x=Xg(i);return x||{width:this.props.width||1,height:this.props.height||1}})();if(!a||a.width<=0||a.height<=0)throw new Error(`${this} size could not be determined or was zero`);let l=iA(this.device,r,a,{format:n?e.format:void 0}),c=l.format??this.props.format,u={...this.props,...a,format:c,mipLevels:1,data:void 0};this.device.isTextureFormatCompressed(c)&&!o&&(u.usage=F.SAMPLE|F.COPY_DST);let d=this.props.mipmaps&&!l.hasExplicitMipChain&&!this.device.isTextureFormatCompressed(c);if(this.device.type==="webgpu"&&d){let x=this.props.dimension==="3d"?F.SAMPLE|F.STORAGE|F.COPY_DST|F.COPY_SRC:F.SAMPLE|F.RENDER|F.COPY_DST|F.COPY_SRC;u.usage|=x}let h=this.device.getMipLevelCount(u.width,u.height),f=l.hasExplicitMipChain?l.mipLevels:this.props.mipLevels==="auto"?h:Math.max(1,Math.min(h,this.props.mipLevels??1)),g={...u,mipLevels:f};this._texture=this.device.createTexture(g),this._sampler=this.texture.sampler,this._view=this.texture.view,l.subresources.length&&this._setTextureSubresources(l.subresources),this.props.mipmaps&&!l.hasExplicitMipChain&&!d&&_.warn(`${this} skipping auto-generated mipmaps for compressed texture format`)(),d&&this.generateMipmaps(),this.isReady=!0,this.resolveReady(this.texture),_.info(0,`${this} created`)()}catch(i){let r=i instanceof Error?i:new Error(String(i));this.rejectReady(r)}}destroy(){this._texture&&(this._texture.destroy(),this._texture=null,this._sampler=null,this._view=null),this.destroyed=!0}generateMipmaps(){this.device.type==="webgl"?this.texture.generateMipmapsWebGL():this.device.type==="webgpu"?this.device.generateMipmapsWebGPU(this.texture):_.warn(`${this} mipmaps not supported on ${this.device.type}`)}setSampler(e={}){this._checkReady();let i=e instanceof st?e:this.device.createSampler(e);this.texture.setSampler(i),this._sampler=i}async readBuffer(e={}){this.isReady||await this.ready;let i=e.width??this.texture.width,r=e.height??this.texture.height,n=e.depthOrArrayLayers??this.texture.depth,o=this.texture.computeMemoryLayout({width:i,height:r,depthOrArrayLayers:n}),s=this.device.createBuffer({byteLength:o.byteLength,usage:N.COPY_DST|N.MAP_READ});this.texture.readBuffer({...e,width:i,height:r,depthOrArrayLayers:n},s);let a=this.device.createFence();return await a.signaled,a.destroy(),s}async readAsync(e={}){this.isReady||await this.ready;let i=e.width??this.texture.width,r=e.height??this.texture.height,n=e.depthOrArrayLayers??this.texture.depth,o=this.texture.computeMemoryLayout({width:i,height:r,depthOrArrayLayers:n}),s=await this.readBuffer(e),a=await s.readAsync(0,o.byteLength);return s.destroy(),a.buffer}resize(e){if(this._checkReady(),e.width===this.texture.width&&e.height===this.texture.height)return!1;let i=this.texture;return this._texture=i.clone(e),this._sampler=this.texture.sampler,this._view=this.texture.view,i.destroy(),_.info(`${this} resized`),!0}getCubeFaceIndex(e){let i=Ec[e];if(i===void 0)throw new Error(`Invalid cube face: ${e}`);return i}getCubeArrayFaceIndex(e,i){return 6*e+this.getCubeFaceIndex(i)}setTexture1DData(e){if(this._checkReady(),this.texture.props.dimension!=="1d")throw new Error(`${this} is not 1d`);let i=Dc(e);this._setTextureSubresources(i)}setTexture2DData(e,i=0){if(this._checkReady(),this.texture.props.dimension!=="2d")throw new Error(`${this} is not 2d`);let r=Pi(i,e);this._setTextureSubresources(r)}setTexture3DData(e){if(this.texture.props.dimension!=="3d")throw new Error(`${this} is not 3d`);let i=Fc(e);this._setTextureSubresources(i)}setTextureArrayData(e){if(this.texture.props.dimension!=="2d-array")throw new Error(`${this} is not 2d-array`);let i=Mc(e);this._setTextureSubresources(i)}setTextureCubeData(e){if(this.texture.props.dimension!=="cube")throw new Error(`${this} is not cube`);let i=Nc(e);this._setTextureSubresources(i)}setTextureCubeArrayData(e){if(this.texture.props.dimension!=="cube-array")throw new Error(`${this} is not cube-array`);let i=Bc(e);this._setTextureSubresources(i)}_setTextureSubresources(e){for(let i of e){let{z:r,mipLevel:n}=i;switch(i.type){case"external-image":let{image:o,flipY:s}=i;this.texture.copyExternalImage({image:o,z:r,mipLevel:n,flipY:s});break;case"texture-data":let{data:a,textureFormat:l}=i;if(l&&l!==this.texture.format)throw new Error(`${this} mip level ${n} uses format "${l}" but texture format is "${this.texture.format}"`);this.texture.writeData(a.data,{x:0,y:0,z:r,width:a.width,height:a.height,depthOrArrayLayers:1,mipLevel:n});break;default:throw new Error("Unsupported 2D mip-level payload")}}}async _loadAllData(e){let i=await Oc(e.data);return{dimension:e.dimension??"2d",data:i??null}}_checkNotDestroyed(){this.destroyed&&_.warn(`${this} already destroyed`)}_checkReady(){this.isReady||_.warn(`${this} Cannot perform this operation before ready`)}static defaultProps={...F.defaultProps,dimension:"2d",data:null,mipmaps:!1}};function tA(t){if(!t.data)return[];let e=t.width&&t.height?{width:t.width,height:t.height}:void 0,i="format"in t?t.format:void 0;switch(t.dimension){case"1d":return Dc(t.data);case"2d":return Pi(0,t.data,e,i);case"3d":return Fc(t.data);case"2d-array":return Mc(t.data);case"cube":return Nc(t.data);case"cube-array":return Bc(t.data);default:throw new Error(`Unhandled dimension ${t.dimension}`)}}function iA(t,e,i,r){if(e.length===0)return{subresources:e,mipLevels:1,format:r.format,hasExplicitMipChain:!1};let n=new Map;for(let u of e){let d=n.get(u.z)??[];d.push(u),n.set(u.z,d)}let o=e.some(u=>u.mipLevel>0),s=r.format,a=Number.POSITIVE_INFINITY,l=[];for(let[u,d]of n){let h=[...d].sort((R,P)=>R.mipLevel-P.mipLevel),f=h[0];if(!f||f.mipLevel!==0)throw new Error(`DynamicTexture: slice ${u} is missing mip level 0`);let g=jg(t,f);if(g.width!==i.width||g.height!==i.height)throw new Error(`DynamicTexture: slice ${u} base level dimensions ${g.width}x${g.height} do not match expected ${i.width}x${i.height}`);let x=Yg(f);if(x){if(s&&s!==x)throw new Error(`DynamicTexture: slice ${u} base level format "${x}" does not match texture format "${s}"`);s=x}let b=s&&t.isTextureFormatCompressed(s)?rA(t,g.width,g.height,s):t.getMipLevelCount(g.width,g.height),v=0;for(let R=0;R<h.length;R++){let P=h[R];if(!P||P.mipLevel!==R||R>=b)break;let y=jg(t,P),T=Math.max(1,g.width>>R),C=Math.max(1,g.height>>R);if(y.width!==T||y.height!==C)break;let k=Yg(P);if(k&&(s||(s=k),k!==s))break;v++,l.push(P)}a=Math.min(a,v)}let c=Number.isFinite(a)?Math.max(1,a):1;return{subresources:l.filter(u=>u.mipLevel<c),mipLevels:c,format:s,hasExplicitMipChain:o}}function Yg(t){if(t.type==="texture-data")return t.textureFormat??Ic(t.data)}function jg(t,e){switch(e.type){case"external-image":return t.getExternalImageSize(e.image);case"texture-data":return{width:e.data.width,height:e.data.height};default:throw new Error("Unsupported texture subresource")}}function rA(t,e,i,r){let{blockWidth:n=1,blockHeight:o=1}=t.getTextureFormatInfo(r),s=1;for(let a=1;;a++){let l=Math.max(1,e>>a),c=Math.max(1,i>>a);if(l<n||c<o)break;s++}return s}async function Oc(t){if(t=await t,Array.isArray(t))return await Promise.all(t.map(Oc));if(t&&typeof t=="object"&&t.constructor===Object){let e=t,i=await Promise.all(Object.values(e).map(Oc)),r=Object.keys(e),n={};for(let o=0;o<r.length;o++)n[r[o]]=i[o];return n}return t}var Qt=2,nA=1e4,Kg="render pipeline initialization failed",J=class t{static defaultProps={...Ke.defaultProps,source:void 0,vs:null,fs:null,id:"unnamed",handle:void 0,userData:{},defines:{},modules:[],geometry:null,indexBuffer:null,attributes:{},constantAttributes:{},bindings:{},uniforms:{},varyings:[],isInstanced:void 0,instanceCount:0,vertexCount:0,shaderInputs:void 0,material:void 0,pipelineFactory:void 0,shaderFactory:void 0,transformFeedback:void 0,shaderAssembler:nn.getDefaultShaderAssembler(),debugShaders:void 0,disableWarnings:void 0};device;id;source;vs;fs;pipelineFactory;shaderFactory;userData={};parameters;topology;bufferLayout;isInstanced=void 0;instanceCount=0;vertexCount;indexBuffer=null;bufferAttributes={};constantAttributes={};bindings={};vertexArray;transformFeedback=null;pipeline;shaderInputs;material=null;_uniformStore;_attributeInfos={};_gpuGeometry=null;props;_pipelineNeedsUpdate="newly created";_needsRedraw="initializing";_destroyed=!1;_lastDrawTimestamp=-1;_bindingTable=[];get[Symbol.toStringTag](){return"Model"}toString(){return`Model(${this.id})`}constructor(e,i){this.props={...t.defaultProps,...i},i=this.props,this.id=i.id||Ji("model"),this.device=e,Object.assign(this.userData,i.userData),this.material=i.material||null;let r=Object.fromEntries(this.props.modules?.map(l=>[l.name,l])||[]),n=i.shaderInputs||new Lo(r,{disableWarnings:this.props.disableWarnings});this.setShaderInputs(n);let o=oA(e),s=(this.props.modules?.length>0?this.props.modules:this.shaderInputs?.getModules())||[];if(this.props.shaderLayout=Cc(this.props.shaderLayout,s)||null,this.device.type==="webgpu"&&this.props.source){let{source:l,getUniforms:c,bindingTable:u}=this.props.shaderAssembler.assembleWGSLShader({platformInfo:o,...this.props,modules:s});this.source=l,this._getModuleUniforms=c,this._bindingTable=u;let d=e.getShaderLayout?.(this.source);this.props.shaderLayout=Cc(this.props.shaderLayout||d||null,s)||null}else{let{vs:l,fs:c,getUniforms:u}=this.props.shaderAssembler.assembleGLSLShaderPair({platformInfo:o,...this.props,modules:s});this.vs=l,this.fs=c,this._getModuleUniforms=u,this._bindingTable=[]}this.vertexCount=this.props.vertexCount,this.instanceCount=this.props.instanceCount,this.topology=this.props.topology,this.bufferLayout=this.props.bufferLayout,this.parameters=this.props.parameters,i.geometry&&this.setGeometry(i.geometry),this.pipelineFactory=i.pipelineFactory||Hr.getDefaultPipelineFactory(this.device),this.shaderFactory=i.shaderFactory||$r.getDefaultShaderFactory(this.device),this.pipeline=this._updatePipeline(),this.vertexArray=e.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry),"isInstanced"in i&&(this.isInstanced=i.isInstanced),i.instanceCount&&this.setInstanceCount(i.instanceCount),i.vertexCount&&this.setVertexCount(i.vertexCount),i.indexBuffer&&this.setIndexBuffer(i.indexBuffer),i.attributes&&this.setAttributes(i.attributes),i.constantAttributes&&this.setConstantAttributes(i.constantAttributes),i.bindings&&this.setBindings(i.bindings),i.transformFeedback&&(this.transformFeedback=i.transformFeedback)}destroy(){this._destroyed||(this.pipelineFactory.release(this.pipeline),this.shaderFactory.release(this.pipeline.vs),this.pipeline.fs&&this.pipeline.fs!==this.pipeline.vs&&this.shaderFactory.release(this.pipeline.fs),this._uniformStore.destroy(),this._gpuGeometry?.destroy(),this._destroyed=!0)}needsRedraw(){this._getBindingsUpdateTimestamp()>this._lastDrawTimestamp&&this.setNeedsRedraw("contents of bound textures or buffers updated");let e=this._needsRedraw;return this._needsRedraw=!1,e}setNeedsRedraw(e){this._needsRedraw||=e}getBindingDebugTable(){return this._bindingTable}predraw(){this.updateShaderInputs(),this.pipeline=this._updatePipeline()}draw(e){let i=this._areBindingsLoading();if(i)return _.info(Qt,`>>> DRAWING ABORTED ${this.id}: ${i} not loaded`)(),!1;try{e.pushDebugGroup(`${this}.predraw(${e})`),this.predraw()}finally{e.popDebugGroup()}let r,n=this.pipeline.isErrored;try{if(e.pushDebugGroup(`${this}.draw(${e})`),this._logDrawCallStart(),this.pipeline=this._updatePipeline(),n=this.pipeline.isErrored,n)_.info(Qt,`>>> DRAWING ABORTED ${this.id}: ${Kg}`)(),r=!1;else{let o=this._getBindings(),s=this._getBindGroups(),{indexBuffer:a}=this.vertexArray,l=a?a.byteLength/(a.indexType==="uint32"?4:2):void 0;r=this.pipeline.draw({renderPass:e,vertexArray:this.vertexArray,isInstanced:this.isInstanced,vertexCount:this.vertexCount,instanceCount:this.instanceCount,indexCount:l,transformFeedback:this.transformFeedback||void 0,bindings:o,bindGroups:s,_bindGroupCacheKeys:this._getBindGroupCacheKeys(),uniforms:this.props.uniforms,parameters:this.parameters,topology:this.topology})}}finally{e.popDebugGroup(),this._logDrawCallEnd()}return this._logFramebuffer(e),r?(this._lastDrawTimestamp=this.device.timestamp,this._needsRedraw=!1):n?this._needsRedraw=Kg:this._needsRedraw="waiting for resource initialization",r}setGeometry(e){this._gpuGeometry?.destroy();let i=e&&Fg(this.device,e);if(i){this.setTopology(i.topology||"triangle-list");let r=new er(this.bufferLayout);this.bufferLayout=r.mergeBufferLayouts(i.bufferLayout,this.bufferLayout),this.vertexArray&&this._setGeometryAttributes(i)}this._gpuGeometry=i}setTopology(e){e!==this.topology&&(this.topology=e,this._setPipelineNeedsUpdate("topology"))}setBufferLayout(e){let i=new er(this.bufferLayout);this.bufferLayout=this._gpuGeometry?i.mergeBufferLayouts(e,this._gpuGeometry.bufferLayout):e,this._setPipelineNeedsUpdate("bufferLayout"),this.pipeline=this._updatePipeline(),this.vertexArray=this.device.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry)}setParameters(e){Uo(e,this.parameters,2)||(this.parameters=e,this._setPipelineNeedsUpdate("parameters"))}setInstanceCount(e){this.instanceCount=e,this.isInstanced===void 0&&e>0&&(this.isInstanced=!0),this.setNeedsRedraw("instanceCount")}setVertexCount(e){this.vertexCount=e,this.setNeedsRedraw("vertexCount")}setShaderInputs(e){this.shaderInputs=e,this._uniformStore=new Q(this.device,this.shaderInputs.modules);for(let[i,r]of Object.entries(this.shaderInputs.modules))if(zg(r)&&!this.material?.ownsModule(i)){let n=this._uniformStore.getManagedUniformBuffer(i);this.bindings[`${i}Uniforms`]=n}this.setNeedsRedraw("shaderInputs")}setMaterial(e){this.material=e,this.setNeedsRedraw("material")}updateShaderInputs(){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues()),this.setBindings(this._getNonMaterialBindings(this.shaderInputs.getBindingValues())),this.setNeedsRedraw("shaderInputs")}setBindings(e){Object.assign(this.bindings,e),this.setNeedsRedraw("bindings")}setTransformFeedback(e){this.transformFeedback=e,this.setNeedsRedraw("transformFeedback")}setIndexBuffer(e){this.vertexArray.setIndexBuffer(e),this.setNeedsRedraw("indexBuffer")}setAttributes(e,i){let r=i?.disableWarnings??this.props.disableWarnings;e.indices&&_.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`)(),this.bufferLayout=Lg(this.pipeline.shaderLayout,this.bufferLayout);let n=new er(this.bufferLayout);for(let[o,s]of Object.entries(e)){let a=n.getBufferLayout(o);if(!a){r||_.warn(`Model(${this.id}): Missing layout for buffer "${o}".`)();continue}let l=n.getAttributeNamesForBuffer(a),c=!1;for(let u of l){let d=this._attributeInfos[u];if(d){let h=this.device.type==="webgpu"?n.getBufferIndex(d.bufferName):d.location;this.vertexArray.setBuffer(h,s),c=!0}}!c&&!r&&_.warn(`Model(${this.id}): Ignoring buffer "${s.id}" for unknown attribute "${o}"`)()}this.setNeedsRedraw("attributes")}setConstantAttributes(e,i){for(let[r,n]of Object.entries(e)){let o=this._attributeInfos[r];o?this.vertexArray.setConstantWebGL(o.location,n):(i?.disableWarnings??this.props.disableWarnings)||_.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${r}"`)()}this.setNeedsRedraw("constants")}_areBindingsLoading(){for(let e of Object.values(this.bindings))if(e instanceof Ci&&!e.isReady)return e.id;for(let e of Object.values(this.material?.bindings||{}))if(e instanceof Ci&&!e.isReady)return e.id;return!1}_getBindings(){let e={};for(let[i,r]of Object.entries(this.bindings))r instanceof Ci?r.isReady&&(e[i]=r.texture):e[i]=r;return e}_getBindGroups(){let e=this.pipeline?.shaderLayout||this.props.shaderLayout||{bindings:[]},i=e.bindings.length?Xr(e,this._getBindings()):{0:this._getBindings()};if(!this.material)return i;for(let[r,n]of Object.entries(this.material.getBindingsByGroup())){let o=Number(r);i[o]={...i[o]||{},...n}}return i}_getBindGroupCacheKeys(){let e=this.material?.getBindGroupCacheKey(3);return e?{3:e}:{}}_getBindingsUpdateTimestamp(){let e=0;for(let i of Object.values(this.bindings))i instanceof Si?e=Math.max(e,i.texture.updateTimestamp):i instanceof N||i instanceof F?e=Math.max(e,i.updateTimestamp):i instanceof Ci?e=i.texture?Math.max(e,i.texture.updateTimestamp):1/0:i instanceof st||(e=Math.max(e,i.buffer.updateTimestamp));return Math.max(e,this.material?.getBindingsUpdateTimestamp()||0)}_setGeometryAttributes(e){let i={...e.attributes};for(let[r]of Object.entries(i))!this.pipeline.shaderLayout.attributes.find(n=>n.name===r)&&r!=="positions"&&delete i[r];this.vertexCount=e.vertexCount,this.setIndexBuffer(e.indices||null),this.setAttributes(e.attributes,{disableWarnings:!0}),this.setAttributes(i,{disableWarnings:this.props.disableWarnings}),this.setNeedsRedraw("geometry attributes")}_setPipelineNeedsUpdate(e){this._pipelineNeedsUpdate||=e,this.setNeedsRedraw(e)}_updatePipeline(){if(this._pipelineNeedsUpdate){let e=null,i=null;this.pipeline&&(_.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),e=this.pipeline.vs,i=this.pipeline.fs),this._pipelineNeedsUpdate=!1;let r=this.shaderFactory.createShader({id:`${this.id}-vertex`,stage:"vertex",source:this.source||this.vs,debugShaders:this.props.debugShaders}),n=null;this.source?n=r:this.fs&&(n=this.shaderFactory.createShader({id:`${this.id}-fragment`,stage:"fragment",source:this.source||this.fs,debugShaders:this.props.debugShaders})),this.pipeline=this.pipelineFactory.createRenderPipeline({...this.props,bindings:void 0,bufferLayout:this.bufferLayout,topology:this.topology,parameters:this.parameters,bindGroups:this._getBindGroups(),vs:r,fs:n}),this._attributeInfos=Eo(this.pipeline.shaderLayout,this.bufferLayout),e&&this.shaderFactory.release(e),i&&i!==e&&this.shaderFactory.release(i)}return this.pipeline}_lastLogTime=0;_logOpen=!1;_logDrawCallStart(){let e=_.level>3?0:nA;_.level<2||Date.now()-this._lastLogTime<e||(this._lastLogTime=Date.now(),this._logOpen=!0,_.group(Qt,`>>> DRAWING MODEL ${this.id}`,{collapsed:_.level<=2})())}_logDrawCallEnd(){if(this._logOpen){let e=Mg(this.pipeline.shaderLayout,this.id);_.table(Qt,e)();let i=this.shaderInputs.getDebugTable();_.table(Qt,i)();let r=this._getAttributeDebugTable();_.table(Qt,this._attributeInfos)(),_.table(Qt,r)(),_.groupEnd(Qt)(),this._logOpen=!1}}_drawCount=0;_logFramebuffer(e){let i=this.device.props.debugFramebuffers;if(this._drawCount++,!i)return;let r=e.props.framebuffer;Og(e,r,{id:r?.id||`${this.id}-framebuffer`,minimap:!0})}_getAttributeDebugTable(){let e={};for(let[i,r]of Object.entries(this._attributeInfos)){let n=this.vertexArray.attributes[r.location];e[r.location]={name:i,type:r.shaderType,values:n?this._getBufferOrConstantValues(n,r.bufferDataType):"null"}}if(this.vertexArray.indexBuffer){let{indexBuffer:i}=this.vertexArray,r=i.indexType==="uint32"?new Uint32Array(i.debugData):new Uint16Array(i.debugData);e.indices={name:"indices",type:i.indexType,values:r.toString()}}return e}_getBufferOrConstantValues(e,i){let r=je.getTypedArrayConstructor(i);return(e instanceof N?new r(e.debugData):e).toString()}_getNonMaterialBindings(e){if(!this.material)return e;let i={};for(let[r,n]of Object.entries(e))this.material.ownsBinding(r)||(i[r]=n);return i}};function oA(t){return{type:t.type,shaderLanguage:t.info.shadingLanguage,shaderLanguageVersion:t.info.shadingLanguageVersion,gpu:t.info.gpu,features:t.features}}function ln(t,e){return t==null||e==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function sA(t,e){return t==null||e==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function qg(t){let e,i,r;t.length!==2?(e=ln,i=(a,l)=>ln(t(a),l),r=(a,l)=>t(a)-l):(e=t===ln||t===sA?t:aA,i=t,r=t);function n(a,l,c=0,u=a.length){if(c<u){if(e(l,l)!==0)return u;do{let d=c+u>>>1;i(a[d],l)<0?c=d+1:u=d}while(c<u)}return c}function o(a,l,c=0,u=a.length){if(c<u){if(e(l,l)!==0)return u;do{let d=c+u>>>1;i(a[d],l)<=0?c=d+1:u=d}while(c<u)}return c}function s(a,l,c=0,u=a.length){let d=n(a,l,c,u-1);return d>c&&r(a[d-1],l)>-r(a[d],l)?d-1:d}return{left:n,center:s,right:o}}function aA(){return 0}function lA(t){return t===null?NaN:+t}var Zg=qg(ln),Qg=Zg.right,YD=Zg.left,jD=qg(lA).center;var KD=Jg(em),qD=Jg(cA);function Jg(t){return function(e,i,r=i){if(!((i=+i)>=0))throw new RangeError("invalid rx");if(!((r=+r)>=0))throw new RangeError("invalid ry");let{data:n,width:o,height:s}=e;if(!((o=Math.floor(o))>=0))throw new RangeError("invalid width");if(!((s=Math.floor(s!==void 0?s:n.length/o))>=0))throw new RangeError("invalid height");if(!o||!s||!i&&!r)return e;let a=i&&t(i),l=r&&t(r),c=n.slice();return a&&l?(tr(a,c,n,o,s),tr(a,n,c,o,s),tr(a,c,n,o,s),ir(l,n,c,o,s),ir(l,c,n,o,s),ir(l,n,c,o,s)):a?(tr(a,n,c,o,s),tr(a,c,n,o,s),tr(a,n,c,o,s)):l&&(ir(l,n,c,o,s),ir(l,c,n,o,s),ir(l,n,c,o,s)),e}}function tr(t,e,i,r,n){for(let o=0,s=r*n;o<s;)t(e,i,o,o+=r,1)}function ir(t,e,i,r,n){for(let o=0,s=r*n;o<r;++o)t(e,i,o,o+s,r)}function cA(t){let e=em(t);return(i,r,n,o,s)=>{n<<=2,o<<=2,s<<=2,e(i,r,n+0,o+0,s),e(i,r,n+1,o+1,s),e(i,r,n+2,o+2,s),e(i,r,n+3,o+3,s)}}function em(t){let e=Math.floor(t);if(e===t)return uA(t);let i=t-e,r=2*t+1;return(n,o,s,a,l)=>{if(!((a-=l)>=s))return;let c=e*o[s],u=l*e,d=u+l;for(let h=s,f=s+u;h<f;h+=l)c+=o[Math.min(a,h)];for(let h=s,f=a;h<=f;h+=l)c+=o[Math.min(a,h+u)],n[h]=(c+i*(o[Math.max(s,h-d)]+o[Math.min(a,h+d)]))/r,c-=o[Math.max(s,h-u)]}}function uA(t){let e=2*t+1;return(i,r,n,o,s)=>{if(!((o-=s)>=n))return;let a=t*r[n],l=s*t;for(let c=n,u=n+l;c<u;c+=s)a+=r[Math.min(o,c)];for(let c=n,u=o;c<=u;c+=s)a+=r[Math.min(o,c+l)],i[c]=a/e,a-=r[Math.max(n,c-l)]}}var dA=Array.prototype,ZD=dA.slice;var hA=Math.sqrt(50),fA=Math.sqrt(10),pA=Math.sqrt(2);function zo(t,e,i){let r=(e-t)/Math.max(0,i),n=Math.floor(Math.log10(r)),o=r/Math.pow(10,n),s=o>=hA?10:o>=fA?5:o>=pA?2:1,a,l,c;return n<0?(c=Math.pow(10,-n)/s,a=Math.round(t*c),l=Math.round(e*c),a/c<t&&++a,l/c>e&&--l,c=-c):(c=Math.pow(10,n)*s,a=Math.round(t/c),l=Math.round(e/c),a*c<t&&++a,l*c>e&&--l),l<a&&.5<=i&&i<2?zo(t,e,i*2):[a,l,c]}function tm(t,e,i){if(e=+e,t=+t,i=+i,!(i>0))return[];if(t===e)return[t];let r=e<t,[n,o,s]=r?zo(e,t,i):zo(t,e,i);if(!(o>=n))return[];let a=o-n+1,l=new Array(a);if(r)if(s<0)for(let c=0;c<a;++c)l[c]=(o-c)/-s;else for(let c=0;c<a;++c)l[c]=(o-c)*s;else if(s<0)for(let c=0;c<a;++c)l[c]=(n+c)/-s;else for(let c=0;c<a;++c)l[c]=(n+c)*s;return l}function Wo(t,e,i){return e=+e,t=+t,i=+i,zo(t,e,i)[2]}function im(t,e,i){e=+e,t=+t,i=+i;let r=e<t,n=r?Wo(e,t,i):Wo(t,e,i);return(r?-1:1)*(n<0?1/-n:n)}function Uc(t,e,i){t=+t,e=+e,i=(n=arguments.length)<2?(e=t,t=0,1):n<3?1:+i;for(var r=-1,n=Math.max(0,Math.ceil((e-t)/i))|0,o=new Array(n);++r<n;)o[r]=t+r*i;return o}var QD=gA(Math.random);function gA(t){return function(i,r=0,n=i.length){let o=n-(r=+r);for(;o;){let s=t()*o--|0,a=i[o+r];i[o+r]=i[s+r],i[s+r]=a}return i}}function mA(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function Ho(t,e){if(!isFinite(t)||t===0)return null;var i=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"),r=t.slice(0,i);return[r.length>1?r[0]+r.slice(2):r,+t.slice(i+1)]}function rr(t){return t=Ho(Math.abs(t)),t?t[1]:NaN}function xA(t,e){return function(i,r){for(var n=i.length,o=[],s=0,a=t[0],l=0;n>0&&a>0&&(l+a+1>r&&(a=Math.max(1,r-l)),o.push(i.substring(n-=a,n+a)),!((l+=a+1)>r));)a=t[s=(s+1)%t.length];return o.reverse().join(e)}}function yA(t){return function(e){return e.replace(/[0-9]/g,function(i){return t[+i]})}}var SA=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function cn(t){if(!(e=SA.exec(t)))throw new Error("invalid format: "+t);var e;return new Lc({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}cn.prototype=Lc.prototype;function Lc(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}Lc.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function vA(t){e:for(var e=t.length,i=1,r=-1,n;i<e;++i)switch(t[i]){case".":r=n=i;break;case"0":r===0&&(r=i),n=i;break;default:if(!+t[i])break e;r>0&&(r=0);break}return r>0?t.slice(0,r)+t.slice(n+1):t}var $o;function bA(t,e){var i=Ho(t,e);if(!i)return $o=void 0,t.toPrecision(e);var r=i[0],n=i[1],o=n-($o=Math.max(-8,Math.min(8,Math.floor(n/3)))*3)+1,s=r.length;return o===s?r:o>s?r+new Array(o-s+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+Ho(t,Math.max(0,e+o-1))[0]}function rm(t,e){var i=Ho(t,e);if(!i)return t+"";var r=i[0],n=i[1];return n<0?"0."+new Array(-n).join("0")+r:r.length>n+1?r.slice(0,n+1)+"."+r.slice(n+1):r+new Array(n-r.length+2).join("0")}var nm={"%":(t,e)=>(t*100).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:mA,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>rm(t*100,e),r:rm,s:bA,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function om(t){return t}var sm=Array.prototype.map,am=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function _A(t){var e=t.grouping===void 0||t.thousands===void 0?om:xA(sm.call(t.grouping,Number),t.thousands+""),i=t.currency===void 0?"":t.currency[0]+"",r=t.currency===void 0?"":t.currency[1]+"",n=t.decimal===void 0?".":t.decimal+"",o=t.numerals===void 0?om:yA(sm.call(t.numerals,String)),s=t.percent===void 0?"%":t.percent+"",a=t.minus===void 0?"\u2212":t.minus+"",l=t.nan===void 0?"NaN":t.nan+"";function c(d,h){d=cn(d);var f=d.fill,g=d.align,x=d.sign,b=d.symbol,v=d.zero,R=d.width,P=d.comma,y=d.precision,T=d.trim,C=d.type;C==="n"?(P=!0,C="g"):nm[C]||(y===void 0&&(y=12),T=!0,C="g"),(v||f==="0"&&g==="=")&&(v=!0,f="0",g="=");var k=(h&&h.prefix!==void 0?h.prefix:"")+(b==="$"?i:b==="#"&&/[boxX]/.test(C)?"0"+C.toLowerCase():""),U=(b==="$"?r:/[%p]/.test(C)?s:"")+(h&&h.suffix!==void 0?h.suffix:""),z=nm[C],H=/[defgprs%]/.test(C);y=y===void 0?6:/[gprs]/.test(C)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y));function X(B){var Z=k,S=U,M,I,O;if(C==="c")S=z(B)+S,B="";else{B=+B;var V=B<0||1/B<0;if(B=isNaN(B)?l:z(Math.abs(B),y),T&&(B=vA(B)),V&&+B==0&&x!=="+"&&(V=!1),Z=(V?x==="("?x:a:x==="-"||x==="("?"":x)+Z,S=(C==="s"&&!isNaN(B)&&$o!==void 0?am[8+$o/3]:"")+S+(V&&x==="("?")":""),H){for(M=-1,I=B.length;++M<I;)if(O=B.charCodeAt(M),48>O||O>57){S=(O===46?n+B.slice(M+1):B.slice(M))+S,B=B.slice(0,M);break}}}P&&!v&&(B=e(B,1/0));var G=Z.length+B.length+S.length,W=G<R?new Array(R-G+1).join(f):"";switch(P&&v&&(B=e(W+B,W.length?R-S.length:1/0),W=""),g){case"<":B=Z+B+S+W;break;case"=":B=Z+W+B+S;break;case"^":B=W.slice(0,G=W.length>>1)+Z+B+S+W.slice(G);break;default:B=W+Z+B+S;break}return o(B)}return X.toString=function(){return d+""},X}function u(d,h){var f=Math.max(-8,Math.min(8,Math.floor(rr(h)/3)))*3,g=Math.pow(10,-f),x=c((d=cn(d),d.type="f",d),{suffix:am[8+f/3]});return function(b){return x(g*b)}}return{format:c,formatPrefix:u}}var Vo,zc,Wc;TA({thousands:",",grouping:[3],currency:["$",""]});function TA(t){return Vo=_A(t),zc=Vo.format,Wc=Vo.formatPrefix,Vo}function lm(t){return Math.max(0,-rr(Math.abs(t)))}function cm(t,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(rr(e)/3)))*3-rr(Math.abs(t)))}function um(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,rr(e)-rr(t))+1}function PA(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}function CA(t){return function(){return t}}function AA(t){return+t}var dm=[0,1];function Jt(t){return t}function Vc(t,e){return(e-=t=+t)?function(i){return(i-t)/e}:CA(isNaN(e)?NaN:.5)}function wA(t,e){var i;return t>e&&(i=t,t=e,e=i),function(r){return Math.max(t,Math.min(e,r))}}function RA(t,e,i){var r=t[0],n=t[1],o=e[0],s=e[1];return n<r?(r=Vc(n,r),o=i(s,o)):(r=Vc(r,n),o=i(o,s)),function(a){return o(r(a))}}function kA(t,e,i){var r=Math.min(t.length,e.length)-1,n=new Array(r),o=new Array(r),s=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++s<r;)n[s]=Vc(t[s],t[s+1]),o[s]=i(e[s],e[s+1]);return function(a){var l=Qg(t,a,1,r)-1;return o[l](n[l](a))}}function EA(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function IA(){var t=dm,e=dm,i=qn,r,n,o,s=Jt,a,l,c;function u(){var h=Math.min(t.length,e.length);return s!==Jt&&(s=wA(t[0],t[h-1])),a=h>2?kA:RA,l=c=null,d}function d(h){return h==null||isNaN(h=+h)?o:(l||(l=a(t.map(r),e,i)))(r(s(h)))}return d.invert=function(h){return s(n((c||(c=a(e,t.map(r),ze)))(h)))},d.domain=function(h){return arguments.length?(t=Array.from(h,AA),u()):t.slice()},d.range=function(h){return arguments.length?(e=Array.from(h),u()):e.slice()},d.rangeRound=function(h){return e=Array.from(h),i=hh,u()},d.clamp=function(h){return arguments.length?(s=h?!0:Jt,u()):s!==Jt},d.interpolate=function(h){return arguments.length?(i=h,u()):i},d.unknown=function(h){return arguments.length?(o=h,d):o},function(h,f){return r=h,n=f,u()}}function DA(t,e,i,r){var n=im(t,e,i),o;switch(r=cn(r??",f"),r.type){case"s":{var s=Math.max(Math.abs(t),Math.abs(e));return r.precision==null&&!isNaN(o=cm(n,s))&&(r.precision=o),Wc(r,s)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(o=um(n,Math.max(Math.abs(t),Math.abs(e))))&&(r.precision=o-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(o=lm(n))&&(r.precision=o-(r.type==="%")*2);break}}return zc(r)}function FA(t){var e=t.domain;return t.ticks=function(i){var r=e();return tm(r[0],r[r.length-1],i??10)},t.tickFormat=function(i,r){var n=e();return DA(n[0],n[n.length-1],i??10,r)},t.nice=function(i){i==null&&(i=10);var r=e(),n=0,o=r.length-1,s=r[n],a=r[o],l,c,u=10;for(a<s&&(c=s,s=a,a=c,c=n,n=o,o=c);u-- >0;){if(c=Wo(s,a,i),c===l)return r[n]=s,r[o]=a,e(r);if(c>0)s=Math.floor(s/c)*c,a=Math.ceil(a/c)*c;else if(c<0)s=Math.ceil(s*c)/c,a=Math.floor(a*c)/c;else break;l=c}return t},t}function hm(t){return function(e){return e<0?-Math.pow(-e,t):Math.pow(e,t)}}function MA(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function NA(t){return t<0?-t*t:t*t}function BA(t){var e=t(Jt,Jt),i=1;function r(){return i===1?t(Jt,Jt):i===.5?t(MA,NA):t(hm(i),hm(1/i))}return e.exponent=function(n){return arguments.length?(i=+n,r()):i},FA(e)}function Hc(){var t=BA(IA());return t.copy=function(){return EA(t,Hc()).exponent(t.exponent())},PA.apply(t,arguments),t}hu();var ur=.001,Ms=64,Bx=2**21,Gw=1,Yw=1e3,e0=8,jw=4,Rs=2,Pu=class{constructor(){this.pointsTextureSize=0,this.linksTextureSize=0,this.alpha=1,this.transform=yt.create(),this.screenSize=[0,0],this.mousePosition=[0,0],this.screenMousePosition=[0,0],this.searchArea=[[0,0],[0,0]],this.isSimulationRunning=!1,this.simulationProgress=0,this.maxPointSize=Ms,this.hoveredPoint=void 0,this.focusedPoint=void 0,this.draggingPointIndex=void 0,this.hoveredLinkIndex=void 0,this.hostHoveredPointIndex=void 0,this.hostHoveredLinkIndex=void 0,this.worldOrigin=[Ie.spaceSize/2,Ie.spaceSize/2],this.isSpaceKeyPressed=!1,this.webglMaxTextureSize=16384,this.hoveredPointRingColor=[1,1,1,t1],this.focusedPointRingColor=[1,1,1,i1],this.outlinedPointRingColor=[1,1,1,1],this.pointDefaultStrokeShade=0,this.pointDefaultStrokeRgba=void 0,this.highlightedPointSet=void 0,this.outlinedPointSet=void 0,this.hoveredLinkColor=[-1,-1,-1,-1],this.greyoutPointColor=[-1,-1,-1,-1],this.isDarkenGreyout=!1,this.isLinkHoveringEnabled=!1,this.alphaTarget=0,this.random=new pl,this._referenceLength=Ie.spaceSize,this._backgroundColor=[0,0,0,0],this.alphaDecay=e=>1-Math.pow(ur,1/e)}get referenceLength(){return this._referenceLength}get stepGuard(){return this._referenceLength}get kickSpan(){return 2*this._referenceLength}get infiniteInputEdge(){return this._referenceLength}get backgroundColor(){return this._backgroundColor}get transformationMatrix4x4(){let e=this.transform;if(e.length!==9)throw new Error(`Transform must be a 9-element array (3x3 matrix), got ${e.length} elements`);return[e[0],e[1],e[2],0,e[3],e[4],e[5],0,e[6],e[7],e[8],0,0,0,0,1]}set backgroundColor(e){this._backgroundColor=e;let i=qw(e[0],e[1],e[2]);if(this.div){let r=i>.65?"black":"white";this.div.style.setProperty("--cosmosgl-attribution-color",r),this.div.style.setProperty("--cosmosgl-error-message-color",r),this.div.style.backgroundColor=`rgba(${e[0]*255}, ${e[1]*255}, ${e[2]*255}, ${e[3]})`}this.isDarkenGreyout=i<.65}addRandomSeed(e){this.random=this.random.clone(e)}getRandomFloat(e,i){return this.random.float(e,i)}adjustSpaceSize(e){(e<=0||!isFinite(e))&&(console.error(`Invalid spaceSize value: ${e}. Using default value of ${Ie.spaceSize}`),e=Ie.spaceSize);let i=2;e<i&&(console.warn(`spaceSize (${e}) is too small. Using minimum value of ${i}`),e=i),e!==Ie.spaceSize&&console.warn(`spaceSize (${e}) is deprecated and goes away in the next major. It bounds nothing: it places the world origin, where gravity pulls, at spaceSize / 2, and scales the initial rescale and a few step guards. Leave it at the default (${Ie.spaceSize}); a layout saved around another origin will need shifting when the key goes.`),e>Bx&&console.warn(`spaceSize (${e}) puts the world origin at ${e/2}, where float32 positions are too coarse for the simulation; keep spaceSize at most ${Bx}`),this._referenceLength=e,this.worldOrigin=[e/2,e/2]}setWebGLMaxTextureSize(e){this.webglMaxTextureSize=e}updateScreenSize(e,i){this.screenSize=[e,i]}scaleX(e){return e-this.worldOrigin[0]+this.screenSize[0]/2}scaleY(e){return this.worldOrigin[1]-e+this.screenSize[1]/2}setHoveredPointRingColor(e){let i=qe(e);this.hoveredPointRingColor[0]=i[0],this.hoveredPointRingColor[1]=i[1],this.hoveredPointRingColor[2]=i[2]}setFocusedPointRingColor(e){let i=qe(e);this.focusedPointRingColor[0]=i[0],this.focusedPointRingColor[1]=i[1],this.focusedPointRingColor[2]=i[2]}setOutlinedPointRingColor(e){let i=qe(e);this.outlinedPointRingColor[0]=i[0],this.outlinedPointRingColor[1]=i[1],this.outlinedPointRingColor[2]=i[2],this.outlinedPointRingColor[3]=i[3]}setPointDefaultStrokeColor(e){e==="auto"||e==="darken"||e==="lighten"?(this.pointDefaultStrokeShade=e==="auto"?0:e==="darken"?-1:1,this.pointDefaultStrokeRgba=void 0):(this.pointDefaultStrokeShade=2,this.pointDefaultStrokeRgba=qe(e))}setHighlightedPointSet(e){this.highlightedPointSet=e?new Set(e):void 0}setOutlinedPointSet(e){this.outlinedPointSet=e?new Set(e):void 0}setGreyoutPointColor(e){if(e===void 0){this.greyoutPointColor=[-1,-1,-1,-1];return}let i=qe(e);this.greyoutPointColor[0]=i[0],this.greyoutPointColor[1]=i[1],this.greyoutPointColor[2]=i[2],this.greyoutPointColor[3]=i[3]}updateLinkHoveringEnabled(e){this.isLinkHoveringEnabled=!!(e.onLinkClick||e.onLinkContextMenu||e.onLinkMouseOver||e.onLinkMouseOut),this.isLinkHoveringEnabled||(this.hoveredLinkIndex=void 0)}setHoveredLinkColor(e){if(e===void 0){this.hoveredLinkColor=[-1,-1,-1,-1];return}let i=qe(e);this.hoveredLinkColor[0]=i[0],this.hoveredLinkColor[1]=i[1],this.hoveredLinkColor[2]=i[2],this.hoveredLinkColor[3]=i[3]}setFocusedPoint(e){e!==void 0?this.focusedPoint={index:e}:this.focusedPoint=void 0}addAlpha(e){return(this.alphaTarget-this.alpha)*this.alphaDecay(e)}};var Kw=t=>Array.isArray(t);function qe(t){let e;if(Kw(t))e=t;else{let i=it(t),r=i?.rgb();e=[(r?.r??0)/255,(r?.g??0)/255,(r?.b??0)/255,i?.opacity??1]}return e}function qw(t,e,i){return .2126*t+.7152*e+.0722*i}function Xe(t,e,i=0,r=0,n,o){return t.readPixelsToArrayWebGL(e,{sourceX:i,sourceY:r,sourceWidth:n,sourceHeight:o})}function Zw(){let t=new Uint32Array(2);return crypto.getRandomValues(t),Array.from(t,e=>e.toString(36).padStart(7,"0")).join("")}function Ox(t,e){let i=[],r=Math.min(t.length/4,e??1/0);for(let n=0;n<r;n+=1)t[n*4]!==0&&i.push(n);return i}function t0(t,e){switch(t.info.type){case"webgl":{let i=t.gl,r=i.getParameter(i.ALIASED_POINT_SIZE_RANGE);return(r?.[1]??Ms)/e}case"webgpu":return Ms/e;default:return Ms/e}}function Qw(t,e,i){return Math.min(Math.max(t,e),i)}function xn(t){return t!=null&&!Number.isNaN(t)}function $e(t,e){return Number.isNaN(t[e*2])||Number.isNaN(t[e*2+1])}function Jw(t,e){return uf.sanitize(t,{ALLOWED_TAGS:["a","b","i","em","strong","span","div","p","br"],ALLOWED_ATTR:["href","target","class","id","style"],ALLOW_DATA_ATTR:!1,...e})}var i0=(t=>(t[t.Circle=0]="Circle",t[t.Square=1]="Square",t[t.Triangle=2]="Triangle",t[t.Diamond=3]="Diamond",t[t.Pentagon=4]="Pentagon",t[t.Hexagon=5]="Hexagon",t[t.Star=6]="Star",t[t.Cross=7]="Cross",t[t.None=8]="None",t))(i0||{}),r0=(t=>(t[t.Solid=0]="Solid",t[t.Dashed=1]="Dashed",t[t.Dotted=2]="Dotted",t))(r0||{}),Ux=t=>{if(!t)return;let{offsets:e,neighbors:i,linkIndices:r}=t,n=new Array(e.length-1).fill(void 0);for(let o=0;o<n.length;o++){let s=e[o],a=e[o+1];if(s===a)continue;let l=new Array(a-s);for(let c=s;c<a;c++)l[c-s]=[i[c],r[c]];n[o]=l}return n},Cu=class{constructor(e){this.hasPositiveStrokeWidth=!1,this.sourcePointsNumber=0,this.targetPointsNumber=0,this._isLinkGroupingStale=!0,this._isPointRenderOrderStale=!0,this._config=e}get hasPointStroke(){return this._config.pointDefaultStrokeWidth>0||this.hasPositiveStrokeWidth}get pointsNumber(){return this.pointPositions&&this.pointPositions.length/2}get linksNumber(){return this.links&&this.links.length/2}get sourceIndexToTargetIndices(){return this._sourceIndexToTargetIndices??(this._sourceIndexToTargetIndices=Ux(this.linksBySource)),this._sourceIndexToTargetIndices}get targetIndexToSourceIndices(){return this._targetIndexToSourceIndices??(this._targetIndexToSourceIndices=Ux(this.linksByTarget)),this._targetIndexToSourceIndices}get defaultRgba(){return this._defaultRgba??(this._defaultRgba=qe(this._config.pointDefaultColor)),this._defaultRgba}get inputLinks(){return this._inputLinks}get inputPointRenderOrder(){return this._inputPointRenderOrder}get linkDefaultRgba(){return this._linkDefaultRgba??(this._linkDefaultRgba=[...qe(this._config.linkDefaultColor)]),this._linkDefaultRgba}set inputLinks(e){this._inputLinks=e,this._isLinkGroupingStale=!0}set inputPointRenderOrder(e){this._inputPointRenderOrder=e,this._isPointRenderOrderStale=!0}invalidateLinkDefaultColor(){this._linkDefaultRgba=void 0}getResolvedLinkColorChannel(e,i){var r;let n=(r=this.linkColors)==null?void 0:r[e*4+i];return xn(n)?n:this.linkDefaultRgba[i]}getResolvedLinkWidth(e){var i;let r=(i=this.linkWidths)==null?void 0:i[e];return xn(r)?r:this._config.linkDefaultWidth}updatePoints(){this.inputPointPositions!==void 0&&this.inputPointPositions.length%2!==0&&(console.warn(`Invalid point positions length: ${this.inputPointPositions.length}. The array must hold [x, y] pairs \u2014 the trailing value was ignored.`),this.inputPointPositions=this.inputPointPositions.subarray(0,this.inputPointPositions.length-1)),this.pointPositions!==this.inputPointPositions&&(this.sourcePointsNumber=this.pointPositions?this.pointPositions.length/2:0,this.pointPositions=this.inputPointPositions,this.targetPointsNumber=this.pointPositions?this.pointPositions.length/2:0)}updatePointColor(){if(this.pointsNumber===void 0){this.pointColors=void 0;return}this._defaultRgba=void 0,this.inputPointColors===void 0||this.inputPointColors.length/4!==this.pointsNumber?this.pointColors=new Float32Array(this.pointsNumber*4).fill(NaN):this.pointColors=this.inputPointColors}getResolvedPointColorChannel(e,i){var r;let n=(r=this.pointColors)==null?void 0:r[e*4+i];return xn(n)?n:this.pointPositions&&$e(this.pointPositions,e)?Yu:this.defaultRgba[i]}updatePointSize(){if(this.pointsNumber===void 0){this.pointSizes=void 0;return}this.inputPointSizes===void 0||this.inputPointSizes.length!==this.pointsNumber?this.pointSizes=new Float32Array(this.pointsNumber).fill(NaN):this.pointSizes=this.inputPointSizes}getResolvedPointSize(e){var i;return this.resolvePointSize(e,(i=this.pointSizes)==null?void 0:i[e])}resolvePointSize(e,i){return xn(i)?i:this.pointPositions&&$e(this.pointPositions,e)?o0:this._config.pointDefaultSize}updatePointStrokeColor(){if(this.pointsNumber===void 0){this.pointStrokeColors=void 0;return}this.inputPointStrokeColors===void 0||this.inputPointStrokeColors.length/4!==this.pointsNumber?this.pointStrokeColors=new Float32Array(this.pointsNumber*4).fill(NaN):this.pointStrokeColors=this.inputPointStrokeColors}updatePointStrokeWidth(){if(this.pointsNumber===void 0){this.pointStrokeWidths=void 0;return}this.inputPointStrokeWidths===void 0||this.inputPointStrokeWidths.length!==this.pointsNumber?(this.pointStrokeWidths=new Float32Array(this.pointsNumber).fill(NaN),this.hasPositiveStrokeWidth=!1):(this.pointStrokeWidths=this.inputPointStrokeWidths,this.hasPositiveStrokeWidth=this.pointStrokeWidths.some(e=>e>0))}updatePointShape(){if(this.pointsNumber===void 0){this.pointShapes=void 0;return}let{pointDefaultShape:e}=this._config,i=typeof e=="string"?Number(e):e,r=Number.isInteger(i)&&i>=0&&i<=8?i:Ie.pointDefaultShape;if(this.inputPointShapes===void 0||this.inputPointShapes.length!==this.pointsNumber)this.pointShapes=new Float32Array(this.pointsNumber).fill(r);else{this.pointShapes=new Float32Array(this.inputPointShapes);let n=this.pointShapes;for(let o=0;o<n.length;o++){let s=n[o]??-1;(!Number.isInteger(s)||s<0||s>8)&&(n[o]=r)}}}updatePointImageIndices(){if(this.pointsNumber===void 0){this.pointImageIndices=void 0;return}if(this.inputPointImageIndices===void 0||this.inputPointImageIndices.length!==this.pointsNumber)this.pointImageIndices=new Float32Array(this.pointsNumber).fill(-1);else{let e=new Float32Array(this.inputPointImageIndices);for(let i=0;i<e.length;i++){let r=e[i],n=r===void 0?NaN:r;!Number.isFinite(n)||n<0?e[i]=-1:e[i]=Math.trunc(n)}this.pointImageIndices=e}}updatePointImageSizes(){if(this.pointsNumber===void 0){this.pointImageSizes=void 0;return}if(this.inputPointImageSizes===void 0||this.inputPointImageSizes.length!==this.pointsNumber){this.pointImageSizes=new Float32Array(this.pointsNumber);for(let e=0;e<this.pointsNumber;e++)this.pointImageSizes[e]=this.getResolvedPointSize(e)}else{this.pointImageSizes=new Float32Array(this.inputPointImageSizes);for(let e=0;e<this.pointImageSizes.length;e++)xn(this.pointImageSizes[e])||(this.pointImageSizes[e]=this.getResolvedPointSize(e))}}updatePointRenderOrder(){if(!this._isPointRenderOrderStale&&this._pointRenderOrderPointsNumber===this.pointsNumber)return;this._isPointRenderOrderStale=!1,this._pointRenderOrderPointsNumber=this.pointsNumber;let e=this.pointsNumber??0,i=this._inputPointRenderOrder;if(!i||i.length===0||e===0){this.pointRenderOrder=void 0;return}let r=new Uint32Array(e),n=new Uint8Array(e),o=e;for(let l=i.length-1;l>=0;l--){let c=i[l];!this.isPointIndex(c)||n[c]||(n[c]=1,r[--o]=c)}let s=0;for(let l=0;l<e&&s<o;l++)n[l]||(r[s++]=l);let a=!0;for(let l=0;l<e;l++)if(r[l]!==l){a=!1;break}this.pointRenderOrder=a?void 0:r}pointDrawsImage(e){var i,r;let n=((i=this.pointImageIndices)==null?void 0:i[e])??-1;return n>=0&&n<(((r=this.inputImageData)==null?void 0:r.length)??0)}getResolvedPointFootprint(e,i){var r;let n=this.pointDrawsImage(e)?(r=this.pointImageSizes)==null?void 0:r[e]:void 0;return Math.max(i??this.getResolvedPointSize(e),n??0)}isPointIndex(e){return e!==void 0&&Number.isInteger(e)&&e>=0&&e<(this.pointsNumber??0)}updateLinks(){this.inputLinks!==void 0&&this.inputLinks.length%2!==0&&(console.warn(`Invalid links length: ${this.inputLinks.length}. The array must hold [source, target] pairs \u2014 the trailing value was ignored.`),this.inputLinks=this.inputLinks.subarray(0,this.inputLinks.length-1)),this.links=this.inputLinks}updateLinkColor(){var e;if(this.linksNumber===void 0){this.linkColors=void 0;return}this.linkColors=((e=this.inputLinkColors)==null?void 0:e.length)===this.linksNumber*4?this.inputLinkColors:new Float32Array(this.linksNumber*4).fill(NaN)}updateLinkWidth(){var e;if(this.linksNumber===void 0){this.linkWidths=void 0;return}this.linkWidths=((e=this.inputLinkWidths)==null?void 0:e.length)===this.linksNumber?this.inputLinkWidths:new Float32Array(this.linksNumber).fill(NaN)}updateLinkStyles(){if(this.linksNumber===void 0){this.linkStyles=void 0;return}let{linkDefaultStyle:e}=this._config,i=typeof e=="string"?Number(e):e,r=Number.isInteger(i)&&i>=0&&i<=2?i:Ie.linkDefaultStyle;if(this.inputLinkStyles===void 0||this.inputLinkStyles.length!==this.linksNumber)this.linkStyles=new Float32Array(this.linksNumber).fill(r);else{this.linkStyles=new Float32Array(this.inputLinkStyles);let n=this.linkStyles;for(let o=0;o<n.length;o++){let s=n[o]??-1;(!Number.isInteger(s)||s<0||s>2)&&(n[o]=r)}}}updateArrows(){if(this.linksNumber===void 0){this.linkArrows=void 0;return}let e=this._config.linkDefaultArrows;this.linkArrowsBoolean===void 0||this.linkArrowsBoolean.length!==this.linksNumber?this.linkArrows=new Array(this.linksNumber).fill(+e):this.linkArrows=this.linkArrowsBoolean.map(i=>+i)}updateLinkStrength(){this.linksNumber===void 0&&(this.linkStrength=void 0),this.inputLinkStrength===void 0||this.inputLinkStrength.length!==this.linksNumber?this.linkStrength=void 0:this.linkStrength=this.inputLinkStrength}updateClusters(){if(this.pointsNumber===void 0){this.pointClusters=void 0,this.clusterPositions=void 0;return}this.inputPointClusters===void 0||this.inputPointClusters.length!==this.pointsNumber?this.pointClusters=void 0:this.pointClusters=this.inputPointClusters,this.inputClusterPositions===void 0?this.clusterPositions=void 0:this.clusterPositions=this.inputClusterPositions,this.inputClusterStrength===void 0||this.inputClusterStrength.length!==this.pointsNumber?this.clusterStrength=void 0:this.clusterStrength=this.inputClusterStrength}updateAttractors(){if(this.pointsNumber===void 0){this.pointAttractors=void 0,this.pointAttractorStrength=void 0;return}this.inputPointAttractors===void 0||this.inputPointAttractors.length!==this.pointsNumber*2?this.pointAttractors=void 0:this.pointAttractors=this.inputPointAttractors,this.inputPointAttractorStrength===void 0||this.inputPointAttractorStrength.length!==this.pointsNumber?this.pointAttractorStrength=void 0:this.pointAttractorStrength=this.inputPointAttractorStrength}update(){this.updatePoints(),this.updatePointColor(),this.updatePointSize(),this.updatePointStrokeColor(),this.updatePointStrokeWidth(),this.updatePointShape(),this.updatePointImageIndices(),this.updatePointImageSizes(),this.updatePointRenderOrder(),this.updateLinks(),this.updateLinkColor(),this.updateLinkWidth(),this.updateArrows(),this.updateLinkStyles(),this.updateLinkStrength(),this.updateClusters(),this.updateAttractors(),(this._isLinkGroupingStale||this._linkGroupingPointsNumber!==this.pointsNumber)&&(this._groupLinksByPoint(),this._calculateDegrees())}getNeighboringPointIndices(e){let i=Array.isArray(e)?e:[e],r=new Set,n=[this.linksBySource,this.linksByTarget];for(let o of i)if(this.isPointIndex(o))for(let s of n){if(!s)continue;let{offsets:a,neighbors:l}=s,c=a[o+1];for(let u=a[o];u<c;u++)r.add(l[u])}return[...r]}getConnectedLinkIndices(e){let i=Array.isArray(e)?e:[e],r=new Set(i),n=[];if(!this.linksBySource)return n;let{offsets:o,neighbors:s,linkIndices:a}=this.linksBySource;for(let l of r){if(!this.isPointIndex(l))continue;let c=o[l+1];for(let u=o[l];u<c;u++)r.has(s[u])&&n.push(a[u])}return n}getConnectedPointIndices(e){let i=Array.isArray(e)?e:[e],r=new Set;if(this.links===void 0)return[];let n=this.linksNumber??0;for(let o of i){if(!Number.isInteger(o)||o<0||o>=n)continue;let s=this.links[o*2],a=this.links[o*2+1];!this.isPointIndex(s)||!this.isPointIndex(a)||(r.add(s),r.add(a))}return[...r]}_groupLinksByPoint(){let{links:e,linksNumber:i,pointsNumber:r}=this;if(this._isLinkGroupingStale=!1,this._linkGroupingPointsNumber=r,this._sourceIndexToTargetIndices=void 0,this._targetIndexToSourceIndices=void 0,e===void 0||i===void 0||r===void 0){this.linksBySource=void 0,this.linksByTarget=void 0;return}let n=new Uint32Array(r+1),o=new Uint32Array(r+1);for(let d=0;d<i;d++){let h=e[d*2],f=e[d*2+1];!this.isPointIndex(h)||!this.isPointIndex(f)||(n[h+1]=n[h+1]+1,o[f+1]=o[f+1]+1)}for(let d=0;d<r;d++)n[d+1]=n[d+1]+n[d],o[d+1]=o[d+1]+o[d];let s=n[r],a={offsets:n,neighbors:new Uint32Array(s),linkIndices:new Uint32Array(s)},l={offsets:o,neighbors:new Uint32Array(s),linkIndices:new Uint32Array(s)},c=n.slice(0,r),u=o.slice(0,r);for(let d=0;d<i;d++){let h=e[d*2],f=e[d*2+1];if(!this.isPointIndex(h)||!this.isPointIndex(f))continue;let g=c[h];c[h]=g+1,a.neighbors[g]=f,a.linkIndices[g]=d;let x=u[f];u[f]=x+1,l.neighbors[x]=h,l.linkIndices[x]=d}this.linksBySource=a,this.linksByTarget=l}_calculateDegrees(){var e,i;let r=this.pointsNumber;if(r===void 0){this.degree=void 0,this.inDegree=void 0,this.outDegree=void 0;return}this.degree=new Array(r).fill(0),this.inDegree=new Array(r).fill(0),this.outDegree=new Array(r).fill(0);let n=(e=this.linksBySource)==null?void 0:e.offsets,o=(i=this.linksByTarget)==null?void 0:i.offsets;if(!(!n||!o))for(let s=0;s<r;s++){let a=o[s+1]-o[s],l=n[s+1]-n[s];this.inDegree[s]=a,this.outDegree[s]=l,this.degree[s]=a+l}}},ne=(t=>(t.Positions="positions",t.PointColors="pointColors",t.PointSizes="pointSizes",t.PointStrokeColors="pointStrokeColors",t.PointStrokeWidths="pointStrokeWidths",t.LinkColors="linkColors",t.LinkWidths="linkWidths",t))(ne||{}),n0=(t=>(t.Linear="linear",t.QuadIn="quad-in",t.QuadOut="quad-out",t.QuadInOut="quad-in-out",t.CubicIn="cubic-in",t.CubicOut="cubic-out",t.CubicInOut="cubic-in-out",t.SinIn="sin-in",t.SinOut="sin-out",t.SinInOut="sin-in-out",t.ExpIn="exp-in",t.ExpOut="exp-out",t.ExpInOut="exp-in-out",t.CircleIn="circle-in",t.CircleOut="circle-out",t.CircleInOut="circle-in-out",t))(n0||{}),e1={linear:Da,"quad-in":Fa,"quad-out":Ma,"quad-in-out":Na,"cubic-in":_h,"cubic-out":Th,"cubic-in-out":Zn,"sin-in":Ah,"sin-out":wh,"sin-in-out":Rh,"exp-in":kh,"exp-out":Eh,"exp-in-out":Ih,"circle-in":Dh,"circle-out":Fh,"circle-in-out":Mh},Au=class{constructor(e){this.progress=1,this.startTime=0,this.pendingProperties=new Set,this.activeProperties=new Set,this.activeDuration=0,this.config=e}get duration(){return this.overrideDuration??this.config.transitionDuration}get isPending(){return this.pendingProperties.size>0}get isActive(){return this.activeProperties.size>0}setDurationOverride(e){this.overrideDuration=e!==void 0&&Number.isFinite(e)?e:void 0}isPendingFor(e){return this.pendingProperties.has(e)}isActiveFor(e){return this.activeProperties.has(e)}queue(e){this.pendingProperties.add(e)}dequeueAll(){this.pendingProperties.clear()}dequeue(e){this.pendingProperties.delete(e)}start(){var e,i,r,n;let o=this.duration;if(this.overrideDuration=void 0,!!this.isPending){if(o<=0){let s=this.isActive;this.pendingProperties.clear(),this.clearActiveCycle(),s&&((i=(e=this.config).onTransitionEnd)==null||i.call(e,!0));return}this.isActive&&this.end(!0),this.activeDuration=o,this.startTime=performance.now(),this.progress=0,this.activeProperties=new Set(this.pendingProperties),this.pendingProperties.clear(),(n=(r=this.config).onTransitionStart)==null||n.call(r)}}step(){var e,i;if(!this.isActive)return;let r=this.activeDuration;if(r<=0){this.end(!0);return}let n=Math.min((performance.now()-this.startTime)/r,1),o=this.applyEasing(n);this.progress=o,(i=(e=this.config).onTransition)==null||i.call(e,o),n>=1&&this.end(!1)}end(e){var i,r;this.isActive&&(this.clearActiveCycle(),(r=(i=this.config).onTransitionEnd)==null||r.call(i,e))}abort(){this.pendingProperties.clear(),this.overrideDuration=void 0,this.clearActiveCycle()}applyEasing(e){return(e1[this.config.transitionEasing]??Da)(e)}clearActiveCycle(){this.startTime=0,this.progress=1,this.activeProperties.clear()}},Ie={enableSimulation:!0,enableRenderLoop:!0,transitionDuration:800,transitionEasing:n0.CubicInOut,backgroundColor:"#222222",spaceSize:4096,pointDefaultColor:"#b3b3b3",pointDefaultSize:4,pointDefaultShape:i0.Circle,pointOpacity:1,pointGreyoutOpacity:void 0,pointGreyoutColor:void 0,pointSizeScale:1,pointDefaultStrokeWidth:0,pointDefaultStrokeColor:"auto",pointStrokeContrast:.03,pointOcclusionCulling:!0,scalePointsOnZoom:!1,hoveredPointCursor:"auto",renderHoveredPointRing:!1,hoveredPointRingColor:"white",focusedPointRingColor:"white",focusedPointIndex:void 0,highlightedPointIndices:void 0,outlinedPointIndices:void 0,outlinedPointRingColor:"white",renderLinks:!0,linkDefaultColor:"#666666",linkDefaultWidth:1,linkDefaultStyle:r0.Solid,linkDashLength:8,linkDashGap:4,linkColorInterpolateFromEndpoints:!1,linkOpacity:1,linkGreyoutOpacity:.1,linkWidthScale:1,scaleLinksOnZoom:!1,linkBlending:!0,curvedLinks:!1,curvedLinkSegments:19,curvedLinkWeight:.8,curvedLinkControlPointDistance:.5,linkDefaultArrows:!1,linkArrowsSizeScale:1,linkVisibilityDistanceRange:[50,150],linkVisibilityMinTransparency:.25,hoveredLinkCursor:"auto",hoveredLinkColor:void 0,hoveredLinkWidthIncrease:5,highlightedLinkIndices:void 0,focusedLinkIndex:void 0,focusedLinkWidthIncrease:5,simulationDecay:5e3,simulationGravity:.25,simulationCenter:0,simulationRepulsion:1,simulationRepulsionSamples:void 0,simulationRepulsionTheta:1.15,simulationRepulsionQuality:"auto",simulationLinkSpring:1,simulationLinkDistance:10,simulationLinkDistRandomVariationRange:[1,1.2],simulationRepulsionFromMouse:2,simulationFriction:.85,simulationCluster:.1,simulationAttractor:.1,simulationCollision:0,simulationCollisionRadius:void 0,simulationCollisionPadding:0,simulationCollisionIterations:1,simulationCollisionCooling:0,enableRightClickRepulsion:!1,onSimulationStart:void 0,onSimulationTick:void 0,onSimulationEnd:void 0,onSimulationPause:void 0,onSimulationUnpause:void 0,onTransitionStart:void 0,onTransition:void 0,onTransitionEnd:void 0,onClick:void 0,onPointClick:void 0,onLinkClick:void 0,onBackgroundClick:void 0,onContextMenu:void 0,onPointContextMenu:void 0,onLinkContextMenu:void 0,onBackgroundContextMenu:void 0,onMouseMove:void 0,onPointMouseOver:void 0,onPointMouseOut:void 0,onLinkMouseOver:void 0,onLinkMouseOut:void 0,onZoomStart:void 0,onZoom:void 0,onZoomEnd:void 0,onDragStart:void 0,onDrag:void 0,onDragEnd:void 0,showFPSMonitor:!1,pixelRatio:typeof window<"u"&&window.devicePixelRatio||2,enableZoom:!0,enableSimulationDuringZoom:!1,initialZoomLevel:void 0,enableDrag:!1,fitViewOnInit:!0,fitViewDelay:250,fitViewPadding:.1,fitViewDuration:250,fitViewByPointsInRect:void 0,fitViewByPointIndices:void 0,pointSamplingDistance:100,linkSamplingDistance:100,randomSeed:void 0,rescalePositions:void 0,attribution:""},t1=.7,i1=.95,o0=0,Yu=0,s0=1,r1=1.3,ju=64,a0=2;function Ku(){let t={};for(let[e,i]of Object.entries(Ie))t[e]=Array.isArray(i)?[...i]:i;return t}function n1(t){Object.assign(t,Ku())}var wu=t=>typeof t=="number"&&Number.isSafeInteger(t)&&t>=a0&&t<=ju;function Ns(t){let e=t.simulationRepulsionSamples;if(e!==void 0&&!wu(e))throw new RangeError(`simulationRepulsionSamples must be an integer from ${a0} to ${ju}`)}function Sn(t,e,i=!1){Ns(e);let r={};for(let[n,o]of Object.entries(e))if(o!==void 0)r[n]=o;else if(i){let s=Ie[n];r[n]=Array.isArray(s)?[...s]:s}Object.assign(t,r)}var o1=`
  #gl-bench {
    position:absolute;
    right:0;
    top:0;
    z-index:1000;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
  #gl-bench div {
    position: relative;
    display: block;
    margin: 4px;
    padding: 0 7px 0 10px;
    background: #5f69de;
    border-radius: 15px;
    cursor: pointer;
    opacity: 0.9;
  }
  #gl-bench svg {
    height: 60px;
    margin: 0 -1px;
  }
  #gl-bench text {
    font-size: 12px;
    font-family: Helvetica,Arial,sans-serif;
    font-weight: 700;
    dominant-baseline: middle;
    text-anchor: middle;
  }
  #gl-bench .gl-mem {
    font-size: 9px;
  }
  #gl-bench line {
    stroke-width: 5;
    stroke: #112211;
    stroke-linecap: round;
  }
  #gl-bench polyline {
    fill: none;
    stroke: #112211;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3.5;
  }
  #gl-bench rect {
    fill: #8288e4;
  }
  #gl-bench .opacity {
    stroke: #8288e4;
  }
`,Bs=class{constructor(e,i){this.container=i??document.body,this.destroy();let r=e.getContext("webgl")||e.getContext("experimental-webgl");this.bench=new Nf(r,{css:o1,dom:this.container})}begin(){var e;(e=this.bench)==null||e.begin("frame")}end(e){var i,r;(i=this.bench)==null||i.end("frame"),(r=this.bench)==null||r.nextFrame(e)}destroy(){var e,i;this.bench=void 0,(e=this.container.querySelector(":scope > #gl-bench"))==null||e.remove(),(i=this.container.querySelector(":scope > #gl-bench-style"))==null||i.remove()}},ie=Object.freeze({blend:!1,depthWriteEnabled:!1,depthCompare:"always",stencilCompare:"always",cullMode:"none",frontFace:"ccw"}),Ze=class{constructor(e,i,r,n,o){this._debugRandomNumber=Math.floor(Math.random()*1e3),this.device=e,this.config=i,this.store=r,this.data=n,o&&(this.points=o)}},s1=`
vec2 conicParametricCurve(vec2 A, vec2 B, vec2 ControlPoint, float t, float w) {
  vec2 divident = (1.0 - t) * (1.0 - t) * A + 2.0 * (1.0 - t) * t * w * ControlPoint + t * t * B;
  float divisor = (1.0 - t) * (1.0 - t) + 2.0 * (1.0 - t) * t * w + t * t;
  return divident / divisor;
}
`,Lx={name:"conicParametricCurve",vs:s1},a1=`
vec3 encodePickingColor(float index) {
  float i = index + 1.0;
  return vec3(mod(i, 256.0), mod(floor(i / 256.0), 256.0), floor(i / 65536.0)) / 255.0;
}
`,l0={name:"pickingColor",fs:a1},l1=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec4 rgbaColor;
in vec2 pos;
in float arrowLength;
in float useArrow;
in float smoothing;
in float arrowWidthFactor;
in float linkIndex;
flat in float vLinkStyle;
flat in float vLinkDashSpan;
flat in float vLinkDashWidth;
flat in vec4 vEndpointColorA;
flat in vec4 vEndpointColorB;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform drawLineFragmentUniforms {
  float renderMode;
  float linkDashLength;
  float linkDashGap;
  float linkColorInterpolateFromEndpoints;
  float hoveredLinkIndex;
  vec4 hoveredLinkColor;
  float linkBlending;
  float pickingAlpha;
  float pickingIndexOffset;
} drawLineFrag;

#define renderMode drawLineFrag.renderMode
#define linkDashLength drawLineFrag.linkDashLength
#define linkDashGap drawLineFrag.linkDashGap
#define linkColorInterpolateFromEndpoints drawLineFrag.linkColorInterpolateFromEndpoints
#define hoveredLinkIndex drawLineFrag.hoveredLinkIndex
#define hoveredLinkColor drawLineFrag.hoveredLinkColor
#define linkBlending drawLineFrag.linkBlending
#define pickingAlpha drawLineFrag.pickingAlpha
#define pickingIndexOffset drawLineFrag.pickingIndexOffset
#else
// renderMode: 0.0 = normal rendering, 1.0 = index buffer rendering for picking, 3.0 = host picking colors
uniform float renderMode;
uniform float linkDashLength;
uniform float linkDashGap;
uniform float linkColorInterpolateFromEndpoints;
uniform float hoveredLinkIndex;
uniform vec4 hoveredLinkColor;
uniform float linkBlending;
uniform float pickingAlpha;
uniform float pickingIndexOffset;
#endif

out vec4 fragColor;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

// LinkStyle enum values (must match \`LinkStyle\` in modules/GraphData). Compared with
// exact equality, like the point shapes: the CPU sanitizer guarantees exact integers
// and vLinkStyle is flat, so an unknown future style matches nothing and renders solid.
const float LINK_STYLE_DASHED = 1.0;
const float LINK_STYLE_DOTTED = 2.0;

// Anti-aliased on/off mask for one dash period. \`phase\` is distance-along-line in px,
// \`on\` is the lit dash length, \`period\` is on + gap, \`aa\` is the smoothing half-width in px.
float strokeMask(float phase, float on, float period, float aa) {
  float m = mod(phase, period);
  return smoothstep(-aa, aa, m) * (1.0 - smoothstep(on - aa, on + aa, m));
}

void main() {
  // Geometric coverage only (stroke / arrow / dash). Color alpha is applied after.
  float coverage = 1.0;
  vec3 color = rgbaColor.rgb;

  // Arrowhead extent along the link (pos.x space) \u2014 used by the arrow rendering
  // and by the dash mask, which leaves the arrowhead solid.
  float end_arrow = 0.5 + arrowLength / 2.0;
  float start_arrow = end_arrow - arrowLength;

  // Gradient links: interpolate RGB from the source point color to the target point color
  // along the link. Opacity (visibility / greyout) still comes from rgbaColor.a.
  if (linkColorInterpolateFromEndpoints > 0.5) {
    color = mix(vEndpointColorA.rgb, vEndpointColorB.rgb, clamp(pos.x, 0.0, 1.0));
  }

  if (useArrow > 0.5) {
    // pos.y spans the quad, which is the arrow width plus a ramp. arrowWidthFactor is a fraction
    // of the arrow width alone, so edges derived from it scale by (1 - smoothing) = arrow / quad.
    float preRamp = 1.0 - smoothing;
    float bodyEdge = (0.5 - arrowWidthFactor / 2.0) * preRamp;
    float headBase = 0.5 * preRamp;
    // Body edge, ramp centred on it as for the plain stroke.
    float linkCoverage = smoothstep(bodyEdge + smoothing / 2.0, bodyEdge - smoothing / 2.0, abs(pos.y));
    float arrowCoverage = 1.0;
    if (pos.x > start_arrow && pos.x < start_arrow + arrowLength) {
      // Arrowhead taper, from headBase at its base to the centreline at its tip; ramp centred on it.
      float taper = headBase * (1.0 - map(pos.x, start_arrow, end_arrow, 0.0, 1.0));
      arrowCoverage = 1.0 - smoothstep(taper - smoothing / 2.0, taper + smoothing / 2.0, abs(pos.y));
      if (linkCoverage != arrowCoverage) {
        linkCoverage = max(linkCoverage, arrowCoverage);
      }
    }
    coverage = linkCoverage;
  } else coverage = smoothstep(0.5, 0.5 - smoothing, abs(pos.y));

  // Dashed / dotted stroke patterns. Applied to the visible pass only (renderMode == 0.0)
  // so that gaps stay fully pickable in the index pass. The arrowhead region is left solid.
  if (renderMode < 0.5 && (vLinkStyle == LINK_STYLE_DASHED || vLinkStyle == LINK_STYLE_DOTTED)) {
    bool inArrowHead = (useArrow > 0.5) && (pos.x > start_arrow) && (pos.x < end_arrow);
    if (!inArrowHead) {
      // Distance along the link in the dash pattern's space (screen px or world units; see the vertex shader).
      // fwidth() gives the screen-space rate of change, so the ramp is EDGE_RAMP_PX device pixels in either space.
      float phase = clamp(pos.x, 0.0, 1.0) * vLinkDashSpan;
      if (vLinkStyle == LINK_STYLE_DASHED) {
        float period = max(linkDashLength + linkDashGap, 0.001);
        // Half a ramp in the pattern's units: fwidth(phase) is the change in phase per device pixel.
        float aa = max(fwidth(phase), 1e-4) * (EDGE_RAMP_PX * 0.5);
        coverage *= strokeMask(phase, linkDashLength, period, aa);
      } else {
        // Dotted: round dots sized to the stroke, the quad less its ramp; spaced by diameter + gap.
        float diameter = vLinkDashWidth * (1.0 - smoothing);
        if (linkBlending < 0.5) {
          // Unblended keeps only pixels whose centre is inside the dot. A dot under \u221A2 device
          // px can miss every pixel centre and vanish; at \u221A2 it always holds one. Pattern units
          // per device pixel from the phase's gradient (the pattern space is isotropic).
          float pxInPattern = max(length(vec2(dFdx(phase), dFdy(phase))), 1e-4);
          diameter = max(diameter, 1.4142136 * pxInPattern);
        }
        float period = max(diameter + linkDashGap, 0.001);
        float localX = mod(phase, period) - period * 0.5;
        float localY = pos.y * vLinkDashWidth;
        float r = length(vec2(localX, localY));
        // Half a ramp in the pattern's units: fwidth(r) is the change in r per device pixel.
        float aa = max(fwidth(r), 1e-4) * (EDGE_RAMP_PX * 0.5);
        coverage *= 1.0 - smoothstep(diameter * 0.5 - aa, diameter * 0.5 + aa, r);
      }
    }
  }

  float opacity = rgbaColor.a * coverage;

  // Apply hover color if this is the hovered link and hover color is defined.
  // Done last \u2014 after the gradient and the dash mask \u2014 so hover wins over every
  // color source (per-link color from the vertex stage and the endpoint gradient
  // alike), while the dash pattern and AA stay intact in the hover color.
  if (hoveredLinkIndex == linkIndex && hoveredLinkColor.a > -0.5) {
    color = hoveredLinkColor.rgb;
    opacity *= hoveredLinkColor.a;
  }

  if (renderMode > 2.5) {
    // Host picking: the link's index and the host's alpha, where the stroke covers at
    // least half the fragment and the link is not fully transparent; dash gaps stay
    // pickable, as in the engine's own index pass
    if (coverage < 0.5 || rgbaColor.a <= 0.0) discard;
    fragColor = vec4(encodePickingColor(linkIndex + pickingIndexOffset), pickingAlpha);
  } else if (renderMode > 0.0) {
    if (opacity <= 0.0) discard;
    fragColor = vec4(linkIndex, 0.0, 0.0, 1.0);
  } else if (linkBlending < 0.5) {
    // Unblended: opaque, hard edges. Soft fringes would write full RGB with partial
    // alpha; canvas compositing treats that as premultiplied and the edge reads
    // brighter than the solid core. Every fade is centred on its geometric edge, so
    // coverage 0.5 is that edge: keep the pixels whose centre is inside the stroke.
    // The vertex stage keeps unblended strokes at least a device pixel wide.
    if (coverage < 0.5 || opacity <= 0.0) discard;
    fragColor = vec4(color, 1.0);
  } else {
    fragColor = vec4(color, opacity);
  }

}
`,c1=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec2 position, pointA, pointB;
in vec4 sourceColor;
in vec4 targetColor;
in float sourceWidth;
in float targetWidth;
in float arrow;
in float linkIndices;
in float linkStyle;

uniform sampler2D positionsTexture;
uniform sampler2D linkStatus;
uniform sampler2D exitTexture;
uniform sampler2D pointColorsTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform drawLineUniforms {
  mat4 transformationMatrix;
  float widthScale;
  float linkArrowsSizeScale;
  vec2 worldOrigin;
  vec2 screenSize;
  vec2 linkVisibilityDistanceRange;
  float linkVisibilityMinTransparency;
  float linkOpacity;
  float greyoutOpacity;
  float curvedWeight;
  float curvedLinkControlPointDistance;
  float curvedLinkSegments;
  float scaleLinksOnZoom;
  float maxPointSize;
  float renderMode;
  float hoveredLinkIndex;
  float hoveredLinkWidthIncrease;
  float isLinkHighlightingActive;
  float linkStatusTextureSize;
  float focusedLinkIndex;
  float focusedLinkWidthIncrease;
  float transitionProgress;
  float animateColors;
  float animateWidths;
  float animatePositions;
  vec4 pointDefaultColor;
  vec4 linkDefaultColor;
  float linkDefaultWidth;
  float linkColorInterpolateFromEndpoints;
  float linkBlending;
  float pixelRatio;
} drawLine;

#define transformationMatrix drawLine.transformationMatrix
#define widthScale drawLine.widthScale
#define linkArrowsSizeScale drawLine.linkArrowsSizeScale
#define worldOrigin drawLine.worldOrigin
#define screenSize drawLine.screenSize
#define linkVisibilityDistanceRange drawLine.linkVisibilityDistanceRange
#define linkVisibilityMinTransparency drawLine.linkVisibilityMinTransparency
#define linkOpacity drawLine.linkOpacity
#define greyoutOpacity drawLine.greyoutOpacity
#define curvedWeight drawLine.curvedWeight
#define curvedLinkControlPointDistance drawLine.curvedLinkControlPointDistance
#define curvedLinkSegments drawLine.curvedLinkSegments
#define scaleLinksOnZoom drawLine.scaleLinksOnZoom
#define maxPointSize drawLine.maxPointSize
#define renderMode drawLine.renderMode
#define hoveredLinkIndex drawLine.hoveredLinkIndex
#define hoveredLinkWidthIncrease drawLine.hoveredLinkWidthIncrease
#define isLinkHighlightingActive drawLine.isLinkHighlightingActive
#define linkStatusTextureSize drawLine.linkStatusTextureSize
#define focusedLinkIndex drawLine.focusedLinkIndex
#define focusedLinkWidthIncrease drawLine.focusedLinkWidthIncrease
#define transitionProgress drawLine.transitionProgress
#define animateColors drawLine.animateColors
#define animateWidths drawLine.animateWidths
#define animatePositions drawLine.animatePositions
#define pointDefaultColor drawLine.pointDefaultColor
#define linkDefaultColor drawLine.linkDefaultColor
#define linkDefaultWidth drawLine.linkDefaultWidth
#define linkColorInterpolateFromEndpoints drawLine.linkColorInterpolateFromEndpoints
#define linkBlending drawLine.linkBlending
#define pixelRatio drawLine.pixelRatio
#else
uniform mat3 transformationMatrix;
uniform float widthScale;
uniform float linkArrowsSizeScale;
uniform vec2 worldOrigin;
uniform vec2 screenSize;
uniform vec2 linkVisibilityDistanceRange;
uniform float linkVisibilityMinTransparency;
uniform float linkOpacity;
uniform float greyoutOpacity;
uniform float curvedWeight;
uniform float curvedLinkControlPointDistance;
uniform float curvedLinkSegments;
uniform bool scaleLinksOnZoom;
uniform float maxPointSize;
// renderMode: 0.0 = normal rendering, 1.0 = index buffer rendering for picking
uniform float renderMode;
uniform float hoveredLinkIndex;
uniform float hoveredLinkWidthIncrease;
uniform float isLinkHighlightingActive;
uniform float linkStatusTextureSize;
uniform float focusedLinkIndex;
uniform float focusedLinkWidthIncrease;
uniform float transitionProgress;
uniform float animateColors;
uniform float animateWidths;
uniform float animatePositions;
uniform vec4 pointDefaultColor;
uniform vec4 linkDefaultColor;
uniform float linkDefaultWidth;
uniform float linkColorInterpolateFromEndpoints;
uniform float linkBlending;
uniform float pixelRatio;
#endif

out vec4 rgbaColor;
out vec2 pos;
out float arrowLength;
out float useArrow;
out float smoothing;
out float arrowWidthFactor;
out float linkIndex;
// Per-instance constants (no per-vertex variation), so \`flat\` skips interpolation.
flat out float vLinkStyle;
flat out float vLinkDashSpan;
flat out float vLinkDashWidth;
flat out vec4 vEndpointColorA;
flat out vec4 vEndpointColorB;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

// Resolves NaN color channels the way the point draw shader does: NaN means "use the
// default" \u2014 the config default, blended toward the exit default as the endpoint fades
// out. Mirrors resolveColor in draw-points.vert.
vec4 resolveColor(vec4 color, float exitRamp) {
  vec4 defaultColor = mix(pointDefaultColor, vec4(EXIT_DEFAULT_COLOR_CHANNEL), exitRamp);
  return mix(color, defaultColor, isnan(color));
}

float calculateLinkWidth(float width) {
  float linkWidth;
  if (scaleLinksOnZoom > 0.0) {
    // Use original width if links should scale with zoom
    linkWidth = width;
  } else {
    // Adjust width based on zoom level to maintain visual size
    linkWidth = width / transformationMatrix[0][0];
    // Apply a non-linear scaling to avoid extreme widths
    linkWidth *= min(5.0, max(1.0, transformationMatrix[0][0] * 0.01));
  }
  // Limit link width based on whether it has an arrow
  if (useArrow > 0.5) {
    return min(linkWidth, (maxPointSize * 2.0) / transformationMatrix[0][0]);
  } else {
    return min(linkWidth, maxPointSize / transformationMatrix[0][0]);
  }
}

float calculateArrowWidth(float arrowWidth) {
  if (scaleLinksOnZoom > 0.0) {
    return arrowWidth;
  } else {
    // Apply the same scaling logic as calculateLinkWidth to maintain proportionality
    arrowWidth = arrowWidth / transformationMatrix[0][0];
    // Apply the same non-linear scaling to avoid extreme widths
    arrowWidth *= min(5.0, max(1.0, transformationMatrix[0][0] * 0.01));
    return arrowWidth;
  }
}

void main() {
  pos = position;
  linkIndex = linkIndices;
  vLinkStyle = linkStyle;

  ivec2 pointTexelA = ivec2(pointA);
  ivec2 pointTexelB = ivec2(pointB);

  vec4 pointPositionA = texelFetch(positionsTexture, pointTexelA, 0);
  vec4 pointPositionB = texelFetch(positionsTexture, pointTexelB, 0);
  vec2 a = pointPositionA.xy;
  vec2 b = pointPositionB.xy;

  // Skip links touching an absent (NaN position) point \u2014 interpolating from a NaN
  // endpoint would produce garbage geometry. Collapse the link off-screen. This only
  // catches snap removals: an animated removal freezes the endpoint at its last real
  // position, so absence must be read from the exit texture below.
  if (isnan(a.x) || isnan(a.y) || isnan(b.x) || isnan(b.y)) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  // Exit status of both endpoints (R = previous absence, G = current absence). A link
  // is only as present as its endpoints.
  vec4 exitStatusA = texelFetch(exitTexture, pointTexelA, 0);
  vec4 exitStatusB = texelFetch(exitTexture, pointTexelB, 0);

  // Picking must not report a link to a removed point even mid-fade \u2014 same rule as
  // point picking, which excludes on current absence.
  if (renderMode > 0.0 && (exitStatusA.g > 0.5 || exitStatusB.g > 0.5)) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  // Visible pass: fade the link with the same animated exit ramp the point fade uses
  // (blend R\u2192G during a position transition, settled G otherwise), so a removed
  // point's links fade out in sync with it instead of dangling at full opacity.
  float exitA = animatePositions > 0.0 ? mix(exitStatusA.r, exitStatusA.g, transitionProgress) : exitStatusA.g;
  float exitB = animatePositions > 0.0 ? mix(exitStatusB.r, exitStatusB.g, transitionProgress) : exitStatusB.g;
  float exitPresence = (1.0 - exitA) * (1.0 - exitB);
  if (exitPresence <= 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  // Sample the source/target point colors so the fragment shader can build a gradient
  // along the link. Skipped entirely when the gradient is off \u2014 the fragment shader
  // only reads these varyings inside its own gradient branch, keyed on the same flag.
  // The texture mirrors GraphData.pointColors, so channels may be NaN ("use the
  // default") \u2014 resolve them with the endpoint's exit ramp, like the point draw.
  if (linkColorInterpolateFromEndpoints > 0.5) {
    vEndpointColorA = resolveColor(texelFetch(pointColorsTexture, pointTexelA, 0), exitA);
    vEndpointColorB = resolveColor(texelFetch(pointColorsTexture, pointTexelB, 0), exitB);
  }

  // Calculate direction vector and its perpendicular
  vec2 xBasis = b - a;
  vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));

  // Calculate link distance and control point for curved link
  float linkDist = length(xBasis);
  float h = curvedLinkControlPointDistance;
  vec2 controlPoint = (a + b) / 2.0 + yBasis * linkDist * h;

  // Convert link distance to screen pixels
  float linkDistPx = linkDist * transformationMatrix[0][0];

  // Dash/dot pattern space. When links keep a constant on-screen size (scaleLinksOnZoom = false)
  // the pattern is measured in screen pixels (fixed dash size, but it slides as the link's
  // on-screen length changes with zoom). When links scale with zoom it is measured in world units,
  // which locks the pattern to the link so it scales with zoom instead of crawling.
  float dashUnitScale = scaleLinksOnZoom > 0.0 ? 1.0 : transformationMatrix[0][0];
  vLinkDashSpan = linkDist * dashUnitScale;

  // Defaults stay live during a data transition, matching point fill, size, and stroke
  // channels: a config change applies immediately rather than becoming part of the queued
  // data transition. Capturing only the source default here would still let a NaN target
  // move, and would make links disagree with points.
  float lineWidthBase = animateWidths > 0.0
    ? mix(isnan(sourceWidth) ? linkDefaultWidth : sourceWidth, isnan(targetWidth) ? linkDefaultWidth : targetWidth, transitionProgress)
    : (isnan(targetWidth) ? linkDefaultWidth : targetWidth);
  vec4 lineColor = animateColors > 0.0
    ? mix(mix(sourceColor, linkDefaultColor, isnan(sourceColor)), mix(targetColor, linkDefaultColor, isnan(targetColor)), transitionProgress)
    : mix(targetColor, linkDefaultColor, isnan(targetColor));
  
  // Calculate line width using the width scale
  float linkWidth = lineWidthBase * widthScale;
  // A width of 0 draws nothing, as a point of size 0 does: culled here, before the hover and
  // focus increases and the one-pixel floor could widen an absent link. Not pickable either.
  if (linkWidth <= 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }
  float k = 2.0;
  // Arrow width is proportionally larger than the line width
  float arrowWidth = linkWidth * k;
  arrowWidth *= linkArrowsSizeScale;

  // Ensure arrow width difference is non-negative to prevent unwanted changes to link width
  float arrowWidthDifference = max(0.0, arrowWidth - linkWidth);

  // Calculate arrow width in pixels
  float arrowWidthPx = calculateArrowWidth(arrowWidth);

  // Calculate arrow length proportional to its width
  // 0.866 is approximately sqrt(3)/2 - related to equilateral triangle geometry
  // Cap the length to avoid overly long arrows on short links
  arrowLength = min(0.3, (0.866 * arrowWidthPx * 2.0) / linkDist);

  useArrow = arrow;
  if (useArrow > 0.5) {
    linkWidth += arrowWidthDifference;
  }

  arrowWidthFactor = arrowWidthDifference / linkWidth;

  // Calculate final link width in pixels with smoothing
  float linkWidthPx = calculateLinkWidth(linkWidth);
    
  if (renderMode > 0.0) {
    // Add 5 pixels padding for better hover detection
    linkWidthPx += 5.0 / transformationMatrix[0][0];
    // Match the visible-pass width increases so the pickable area covers the full rendered link
    if (hoveredLinkIndex == linkIndex) {
      linkWidthPx += hoveredLinkWidthIncrease / transformationMatrix[0][0];
    }
    if (focusedLinkIndex == linkIndex) {
      linkWidthPx += focusedLinkWidthIncrease / transformationMatrix[0][0];
    }
  } else {
    // Add pixel increase if this is the hovered link
    if (hoveredLinkIndex == linkIndex) {
      linkWidthPx += hoveredLinkWidthIncrease / transformationMatrix[0][0];
    }
    // Add pixel increase if this is the focused link
    if (focusedLinkIndex == linkIndex) {
      linkWidthPx += focusedLinkWidthIncrease / transformationMatrix[0][0];
    }
  }
  // Center a one-ramp-wide fade on each stroke edge.
  // Strokes thinner than the ramp use the ramp width with reduced alpha.
  // Units: EDGE_RAMP_PX is device px; / pixelRatio \u2192 CSS px; / k \u2192 world, k = transformationMatrix[0][0]
  // (the matrix carries no DPR). Widths are extruded in world space, so unlike gl_PointSize they
  // never multiply by pixelRatio. The *Px values below are world units.
  float smoothingPx = (EDGE_RAMP_PX / pixelRatio) / transformationMatrix[0][0];
  float thinAlpha = min(linkWidthPx / smoothingPx, 1.0);
  float minWidthPx = smoothingPx;
  if (linkBlending < 0.5) {
    // Unblended strokes cannot be dimmed: the fragment cuts them at the edge instead, and a
    // stroke under a device pixel is drawn one pixel wide (its body, when it has an arrowhead).
    thinAlpha = 1.0;
    float bodyShare = useArrow > 0.5 ? 1.0 - arrowWidthFactor : 1.0;
    // One device px \u2192 world, the same chain as the ramp.
    minWidthPx = (1.0 / pixelRatio) / transformationMatrix[0][0] / bodyShare;
  }
  linkWidthPx = max(linkWidthPx, minWidthPx) + smoothingPx;
  smoothing = smoothingPx / linkWidthPx;

  // Quad width (stroke + ramp) in vLinkDashSpan's pattern-space units; the fragment takes the ramp back off.
  vLinkDashWidth = linkWidthPx * dashUnitScale;



  // Calculate final color with opacity based on link distance
  vec3 rgbColor = lineColor.rgb;
  // Adjust opacity based on link distance
  float opacity = lineColor.a * linkOpacity * max(linkVisibilityMinTransparency, map(linkDistPx, linkVisibilityDistanceRange.g, linkVisibilityDistanceRange.r, 0.0, 1.0));
  // Fade with the exit ramp of the endpoints (1 = both fully present).
  opacity *= exitPresence;
  // A stroke drawn at ramp width: alpha scales it back to its true width.
  opacity *= thinAlpha;

  // Apply greyed-out status from the link status texture. Blended rendering dims
  // greyed links by greyoutOpacity. Unblended rendering hides them instead: alpha is
  // ignored at write time, links render opaque and can only overwrite each other, so a
  // dimmed link drawn later would cut into highlighted links; collapsing the instance
  // also skips its fill cost. Runs in the picking pass too \u2014 a hidden link is not
  // hoverable, matching what is on screen.
  if (isLinkHighlightingActive > 0.0 && linkStatusTextureSize > 0.0) {
    int statusTexSize = int(linkStatusTextureSize);
    int statusIndex = int(linkIndices);
    ivec2 statusTexel = ivec2(statusIndex % statusTexSize, statusIndex / statusTexSize);
    vec4 linkStatusValue = texelFetch(linkStatus, statusTexel, 0);
    if (linkStatusValue.r > 0.0) {
      if (linkBlending < 0.5) {
        gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
        return;
      }
      opacity *= greyoutOpacity;
    }
  }

  // Pass final color to fragment shader. Hover color is applied in the fragment
  // shader, after the endpoint gradient, so it wins for gradient links too.
  rgbaColor = vec4(rgbColor, opacity);

  // Calculate position on the curved path
  float t = position.x;
  float w = curvedWeight;
  
  float tPrev = t - 1.0 / curvedLinkSegments;
  float tNext = t + 1.0 / curvedLinkSegments;
  
  vec2 pointCurr = conicParametricCurve(a, b, controlPoint, t, w);
  
  vec2 pointPrev = conicParametricCurve(a, b, controlPoint, max(0.0, tPrev), w);
  vec2 pointNext = conicParametricCurve(a, b, controlPoint, min(tNext, 1.0), w);
  
  vec2 xBasisCurved = pointNext - pointPrev;
  vec2 yBasisCurved = normalize(vec2(-xBasisCurved.y, xBasisCurved.x));
  
  pointCurr += yBasisCurved * linkWidthPx * position.y;
  
  // World space to normalized device coordinates (worldOrigin at the screen centre)
  vec2 p = (pointCurr - worldOrigin) * (2.0 / screenSize);
  
  #ifdef USE_UNIFORM_BUFFERS
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 final = transformMat3 * vec3(p, 1);
  #else
  vec3 final = transformationMatrix * vec3(p, 1);
  #endif
  
  gl_Position = vec4(final.rg, 0, 1);
}
`,u1=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec4 rgba;

out vec4 fragColor;

void main() {
  fragColor = rgba;
}
`,d1=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec2 pointA;
in vec2 pointB;
in float linkIndices;

uniform sampler2D positionsTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform fillSampledLinksUniforms {
  mat4 transformationMatrix;
  vec2 worldOrigin;
  vec2 screenSize;
  float curvedWeight;
  float curvedLinkControlPointDistance;
  float curvedLinkSegments;
} fillSampledLinks;

#define transformationMatrix fillSampledLinks.transformationMatrix
#define worldOrigin fillSampledLinks.worldOrigin
#define screenSize fillSampledLinks.screenSize
#define curvedWeight fillSampledLinks.curvedWeight
#define curvedLinkControlPointDistance fillSampledLinks.curvedLinkControlPointDistance
#define curvedLinkSegments fillSampledLinks.curvedLinkSegments
#else
uniform vec2 worldOrigin;
uniform vec2 screenSize;
uniform float curvedWeight;
uniform float curvedLinkControlPointDistance;
uniform float curvedLinkSegments;
uniform mat3 transformationMatrix;
#endif

out vec4 rgba;

void main() {
  ivec2 pointTexelA = ivec2(pointA);
  ivec2 pointTexelB = ivec2(pointB);

  // Skip a link touching an absent (faded-out) point. exit.G = current absence.
  if (texelFetch(exitTexture, pointTexelA, 0).g > 0.5 ||
      texelFetch(exitTexture, pointTexelB, 0).g > 0.5) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  vec4 posA = texelFetch(positionsTexture, pointTexelA, 0);
  vec4 posB = texelFetch(positionsTexture, pointTexelB, 0);
  vec2 a = posA.rg;
  vec2 b = posB.rg;

  vec2 tangent = b - a;
  float angle = -atan(tangent.y, tangent.x);

  vec2 mid;
  if (curvedLinkSegments <= 1.0) {
    mid = (a + b) * 0.5;
  } else if (curvedLinkControlPointDistance != 0.0 && curvedWeight != 0.0) {
    vec2 xBasis = b - a;
    vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
    float linkDist = length(xBasis);
    float h = curvedLinkControlPointDistance;
    vec2 controlPoint = (a + b) / 2.0 + yBasis * linkDist * h;
    mid = conicParametricCurve(a, b, controlPoint, 0.5, curvedWeight);
  } else {
    mid = (a + b) * 0.5;
  }

  // World space to normalized device coordinates (worldOrigin at the screen centre)
  vec2 p = (mid - worldOrigin) * (2.0 / screenSize);
  #ifdef USE_UNIFORM_BUFFERS
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 final = transformMat3 * vec3(p, 1);
  #else
  vec3 final = transformationMatrix * vec3(p, 1);
  #endif

  vec2 pointScreenPosition = (final.xy + 1.0) * screenSize / 2.0;
  rgba = vec4(linkIndices, mid.x, mid.y, angle);
  float i = (pointScreenPosition.x + 0.5) / screenSize.x;
  float j = (pointScreenPosition.y + 0.5) / screenSize.y;
  gl_Position = vec4(2.0 * vec2(i, j) - 1.0, 0.0, 1.0);

  gl_PointSize = 1.0;
}
`,ti=class{constructor(e,i){this.buffer=null,this.sync=null,this.isInFlight=!1,this.gl=e,this.data=new Float32Array(i)}get inFlight(){return this.isInFlight}get isPending(){return!this.isInFlight||!this.sync?!1:this.gl.clientWaitSync(this.sync,0,0)===this.gl.TIMEOUT_EXPIRED}issue(e,i,r,n,o){if(this.isInFlight)return!1;let{gl:s}=this;if(n*o*4>this.data.length||(this.buffer||(this.buffer=s.createBuffer()),!this.buffer))return!1;let a=s.getParameter(s.READ_FRAMEBUFFER_BINDING);return s.bindFramebuffer(s.READ_FRAMEBUFFER,e),s.bindBuffer(s.PIXEL_PACK_BUFFER,this.buffer),s.bufferData(s.PIXEL_PACK_BUFFER,this.data.byteLength,s.STREAM_READ),s.readPixels(i,r,n,o,s.RGBA,s.FLOAT,0),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,a),this.sync=s.fenceSync(s.SYNC_GPU_COMMANDS_COMPLETE,0),s.flush(),this.isInFlight=this.sync!==null,this.isInFlight}poll(){if(!this.isInFlight||!this.sync||!this.buffer)return null;let{gl:e}=this,i=e.clientWaitSync(this.sync,0,0);return i===e.TIMEOUT_EXPIRED||(e.deleteSync(this.sync),this.sync=null,this.isInFlight=!1,i!==e.ALREADY_SIGNALED&&i!==e.CONDITION_SATISFIED)?null:(e.bindBuffer(e.PIXEL_PACK_BUFFER,this.buffer),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,this.data),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),this.data)}cancel(){this.sync&&(this.gl.deleteSync(this.sync),this.sync=null),this.isInFlight=!1}destroy(){this.cancel(),this.buffer&&(this.gl.deleteBuffer(this.buffer),this.buffer=null)}},Ru=.5,h1=1536,Oe=9;function f1(t,e){if(t.length!==e.length)return!1;for(let[i,r]of t.entries())if(r!==e[i])return!1;return!0}function p1(t,e){let i=Math.min(Ru,h1/Math.max(t,e));return{width:Math.max(Oe,Math.ceil(t*i)),height:Math.max(Oe,Math.ceil(e*i))}}function g1(t,e,i,r,n,o){let s=i*(t/n),a=r*(e/o),l=Math.floor(Oe/2),c=Math.min(Math.max(Math.round(s)-l,0),t-Oe),u=Math.min(Math.max(Math.round(a)-l,0),e-Oe);return{x:c,y:u,centerX:s,centerY:a}}function zx(t){let e=t[0];return t[3]>0&&e>=0?e:void 0}function Wx(t,e,i){let r=-1,n=[0,0],o=1/0;for(let s=0;s<Oe;s+=1)for(let a=0;a<Oe;a+=1){let l=(s*Oe+a)*4,c=t[l];if(c<0)continue;let u=a+.5-e,d=s+.5-i,h=u*u+d*d;h<o&&(o=h,r=c,n=[t[l+1],t[l+2]])}if(!(r<0))return{index:r,position:n}}var m1=t=>{let e=Hc().exponent(2).range([0,1]).domain([-1,1]),i=Uc(0,t).map(n=>-.5+n/t);i.push(.5);let r=new Array(i.length*2);return i.forEach((n,o)=>{r[o*2]=[e(n*2),.5],r[o*2+1]=[e(n*2),-.5]}),r};function bn(t){let e=new Float32Array(t*t*2);for(let i=0;i<t;i++)for(let r=0;r<t;r++){let n=i*t*2+r*2;e[n+0]=r,e[n+1]=i}return e}function ku(t,e,i){return!e||e.byteLength!==i.byteLength?(e&&!e.destroyed&&e.destroy(),t.createBuffer({data:i,usage:N.VERTEX|N.COPY_DST})):(e.write(i),e)}function lr(t,e,i,r,n,o){let s=n?n.length/o:0,a=e.length/o;if(s===a&&i&&!i.destroyed&&r&&!r.destroyed){let u=r,d=i;return d.write(e),{source:u,target:d,previous:new Float32Array(e),sourceData:n??new Float32Array(e)}}let l=new Float32Array(e.length),c=Math.min(s,a);for(let u=0;u<c*o;u+=1)l[u]=n?.[u]??e[u]??0;for(let u=c*o;u<e.length;u+=1)l[u]=e[u]??0;return i&&!i.destroyed&&i.destroy(),r&&!r.destroyed&&r.destroy(),{source:t.createBuffer({data:l,usage:N.VERTEX|N.COPY_DST}),target:t.createBuffer({data:e,usage:N.VERTEX|N.COPY_DST}),previous:new Float32Array(e),sourceData:l}}function K(t,e){let i=Ae.getInfo(t);return e*(i.bytesPerPixel??0)}function oe(t,e){return!t||t.length!==2?e:[t[0],t[1]]}function le(t,e){return!t||t.length!==4?e:[t[0],t[1],t[2],t[3]]}var cr=t=>Number.isInteger(t)?t.toFixed(1):String(t),Eu=class extends Ze{constructor(){super(...arguments),this.isLinkIndexBufferStale=!0,this.linkStatusTextureSize=0,this.transitionProgress=1,this.shouldAnimateLinkColors=!1,this.shouldAnimateLinkWidths=!1,this.shouldAnimatePositions=!1}get hasPendingPickReadback(){var e;return((e=this.pickingReadback)==null?void 0:e.inFlight)??!1}get isPickReadbackPending(){var e;return((e=this.pickingReadback)==null?void 0:e.isPending)??!1}initPrograms(){let{device:e,config:i,store:r,data:n}=this;this.updateLinkIndexFbo(),this.isLinkIndexBufferStale=!0,this.curveLineGeometry||this.updateCurveLineGeometry();let o=this.data.linksNumber??0;this.pointABuffer||(this.pointABuffer=e.createBuffer({data:new Float32Array(o*2),usage:N.VERTEX|N.COPY_DST})),this.pointBBuffer||(this.pointBBuffer=e.createBuffer({data:new Float32Array(o*2),usage:N.VERTEX|N.COPY_DST})),this.arrowBuffer||(this.arrowBuffer=e.createBuffer({data:new Float32Array(o),usage:N.VERTEX|N.COPY_DST})),this.linkStyleBuffer||(this.linkStyleBuffer=e.createBuffer({data:new Float32Array(o),usage:N.VERTEX|N.COPY_DST})),this.linkIndexBuffer||(this.linkIndexBuffer=e.createBuffer({data:new Float32Array(o),usage:N.VERTEX|N.COPY_DST})),this.drawLineUniformStore||(this.drawLineUniformStore=new Q(e,{drawLineUniforms:{uniformTypes:{transformationMatrix:"mat4x4<f32>",widthScale:"f32",linkArrowsSizeScale:"f32",worldOrigin:"vec2<f32>",screenSize:"vec2<f32>",linkVisibilityDistanceRange:"vec2<f32>",linkVisibilityMinTransparency:"f32",linkOpacity:"f32",greyoutOpacity:"f32",curvedWeight:"f32",curvedLinkControlPointDistance:"f32",curvedLinkSegments:"f32",scaleLinksOnZoom:"f32",maxPointSize:"f32",renderMode:"f32",hoveredLinkIndex:"f32",hoveredLinkWidthIncrease:"f32",isLinkHighlightingActive:"f32",linkStatusTextureSize:"f32",focusedLinkIndex:"f32",focusedLinkWidthIncrease:"f32",transitionProgress:"f32",animateColors:"f32",animateWidths:"f32",animatePositions:"f32",pointDefaultColor:"vec4<f32>",linkDefaultColor:"vec4<f32>",linkDefaultWidth:"f32",linkColorInterpolateFromEndpoints:"f32",linkBlending:"f32",pixelRatio:"f32"},defaultUniforms:{transformationMatrix:r.transformationMatrix4x4,widthScale:i.linkWidthScale,linkArrowsSizeScale:i.linkArrowsSizeScale,worldOrigin:r.worldOrigin,screenSize:oe(r.screenSize,[0,0]),linkVisibilityDistanceRange:oe(i.linkVisibilityDistanceRange,[0,0]),linkVisibilityMinTransparency:i.linkVisibilityMinTransparency,linkOpacity:i.linkOpacity,greyoutOpacity:i.linkGreyoutOpacity,curvedWeight:i.curvedLinkWeight,curvedLinkControlPointDistance:i.curvedLinkControlPointDistance,curvedLinkSegments:i.curvedLinks?i.curvedLinkSegments:1,scaleLinksOnZoom:i.scaleLinksOnZoom?1:0,maxPointSize:r.maxPointSize,renderMode:0,hoveredLinkIndex:r.hoveredLinkIndex??-1,hoveredLinkWidthIncrease:i.hoveredLinkWidthIncrease,isLinkHighlightingActive:0,linkStatusTextureSize:0,focusedLinkIndex:i.focusedLinkIndex??-1,focusedLinkWidthIncrease:i.focusedLinkWidthIncrease,transitionProgress:1,animateColors:0,animateWidths:0,animatePositions:0,pointDefaultColor:le(qe(i.pointDefaultColor),[0,0,0,1]),linkDefaultColor:le(this.data.linkDefaultRgba,[0,0,0,1]),linkDefaultWidth:i.linkDefaultWidth,linkColorInterpolateFromEndpoints:i.linkColorInterpolateFromEndpoints?1:0,linkBlending:i.linkBlending?1:0,pixelRatio:i.pixelRatio}},drawLineFragmentUniforms:{uniformTypes:{renderMode:"f32",linkDashLength:"f32",linkDashGap:"f32",linkColorInterpolateFromEndpoints:"f32",hoveredLinkIndex:"f32",hoveredLinkColor:"vec4<f32>",linkBlending:"f32",pickingAlpha:"f32",pickingIndexOffset:"f32"},defaultUniforms:{pickingAlpha:1,pickingIndexOffset:0,renderMode:0,linkDashLength:i.linkDashLength,linkDashGap:i.linkDashGap,linkColorInterpolateFromEndpoints:i.linkColorInterpolateFromEndpoints?1:0,hoveredLinkIndex:r.hoveredLinkIndex??-1,hoveredLinkColor:le(r.hoveredLinkColor,[-1,-1,-1,-1]),linkBlending:i.linkBlending?1:0}}})),this.drawCurveCommand||(this.drawCurveCommand=this.createDrawCurveCommand(this.getLinkBlendParameters(this.config.linkBlending))),this.isLinkBlendingActive=this.config.linkBlending,this.fillSampledLinksUniformStore||(this.fillSampledLinksUniformStore=new Q(e,{fillSampledLinksUniforms:{uniformTypes:{transformationMatrix:"mat4x4<f32>",worldOrigin:"vec2<f32>",screenSize:"vec2<f32>",curvedWeight:"f32",curvedLinkControlPointDistance:"f32",curvedLinkSegments:"f32"},defaultUniforms:{transformationMatrix:r.transformationMatrix4x4,worldOrigin:r.worldOrigin,screenSize:oe(r.screenSize,[0,0]),curvedWeight:i.curvedLinkWeight,curvedLinkControlPointDistance:i.curvedLinkControlPointDistance,curvedLinkSegments:i.curvedLinks?i.curvedLinkSegments:1}}})),this.fillSampledLinksFboCommand||(this.fillSampledLinksFboCommand=new J(e,{fs:u1,vs:d1,modules:[Lx],topology:"point-list",vertexCount:n.linksNumber??0,attributes:{...this.pointABuffer&&{pointA:this.pointABuffer},...this.pointBBuffer&&{pointB:this.pointBBuffer},...this.linkIndexBuffer&&{linkIndices:this.linkIndexBuffer}},bufferLayout:[{name:"pointA",format:"float32x2"},{name:"pointB",format:"float32x2"},{name:"linkIndices",format:"float32"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{fillSampledLinksUniforms:this.fillSampledLinksUniformStore.getManagedUniformBuffer("fillSampledLinksUniforms")},parameters:ie})),this.updateSampledLinksGrid(),this.updateLinkStatus()}drawPicking(e,i,r=0){var n;let{points:o}=this;if(!o||!o.currentPositionTexture||o.currentPositionTexture.destroyed||(o.exitTexture||o.updateExit(),!o.exitTexture||o.exitTexture.destroyed)||((!this.pointABuffer||!this.pointBBuffer)&&this.updatePointsBuffer(),this.targetColorBuffer||this.updateColor(),this.targetWidthBuffer||this.updateWidth(),this.arrowBuffer||this.updateArrow(),this.linkStyleBuffer||this.updateStyle(),this.curveLineGeometry||this.updateCurveLineGeometry(),!this.drawLineUniformStore||!this.linkStatusTexture)||!this.data.linksNumber)return;this.drawPickingCommand||(this.drawPickingCommand=this.createDrawCurveCommand(ie)),this.drawPickingCommand.setAttributes(this.getDrawCurveCommandAttributes()),this.drawPickingCommand.setVertexCount(((n=this.curveLineGeometry)==null?void 0:n.length)??0);let s=this.getDrawUniforms();this.drawLineUniformStore.setUniforms({drawLineUniforms:{...s.drawLineUniforms,renderMode:3},drawLineFragmentUniforms:{...s.drawLineFragmentUniforms,renderMode:3,pickingAlpha:i,pickingIndexOffset:r}}),this.drawPickingCommand.setBindings(this.getDrawBindings(o)),this.drawPickingCommand.setInstanceCount(this.data.linksNumber),this.drawPickingCommand.draw(e)}draw(e){let{points:i}=this;i&&(!i.currentPositionTexture||i.currentPositionTexture.destroyed||(i.exitTexture||i.updateExit(),!(!i.exitTexture||i.exitTexture.destroyed)&&((!this.pointABuffer||!this.pointBBuffer)&&this.updatePointsBuffer(),this.targetColorBuffer||this.updateColor(),this.targetWidthBuffer||this.updateWidth(),this.arrowBuffer||this.updateArrow(),this.linkStyleBuffer||this.updateStyle(),this.curveLineGeometry||this.updateCurveLineGeometry(),!(!this.drawCurveCommand||!this.drawLineUniformStore||!this.linkStatusTexture)&&(this.updateLinkBlending(),this.drawLineUniformStore.setUniforms(this.getDrawUniforms()),this.drawCurveCommand.setBindings(this.getDrawBindings(i)),this.drawCurveCommand.setInstanceCount(this.data.linksNumber??0),this.drawCurveCommand.draw(e)))))}updateLinkIndexFbo(){var e,i,r;let{device:n,store:o}=this;if(!this.store.isLinkHoveringEnabled)return;let s=o.screenSize??[0,0],a=s[0],l=s[1];if(!a||!l)return;let c=((e=this.previousScreenSize)==null?void 0:e[0])!==a||((i=this.previousScreenSize)==null?void 0:i[1])!==l;(!this.linkIndexTexture||c)&&((r=this.pickingReadback)==null||r.cancel(),this.linkIndexFbo&&!this.linkIndexFbo.destroyed&&this.linkIndexFbo.destroy(),this.linkIndexTexture&&!this.linkIndexTexture.destroyed&&this.linkIndexTexture.destroy(),this.linkIndexTexture=n.createTexture({width:a,height:l,format:"rgba32float",usage:F.SAMPLE|F.RENDER|F.COPY_DST}),this.linkIndexTexture.copyImageData({data:new Float32Array(a*l*4).fill(0),bytesPerRow:K("rgba32float",a),mipLevel:0,x:0,y:0}),this.linkIndexFbo=n.createFramebuffer({width:a,height:l,colorAttachments:[this.linkIndexTexture]}),this.previousScreenSize=[a,l],this.isLinkIndexBufferStale=!0)}updateSampledLinksGrid(){let{store:{screenSize:e},config:{linkSamplingDistance:i},device:r}=this,n=i??Math.min(...e)/2;n===0&&(n=Ie.linkSamplingDistance);let o=Math.ceil(e[0]/n),s=Math.ceil(e[1]/n);o===0||s===0||(!this.sampledLinksFbo||this.sampledLinksFbo.width!==o||this.sampledLinksFbo.height!==s)&&(this.sampledLinksFbo&&!this.sampledLinksFbo.destroyed&&this.sampledLinksFbo.destroy(),this.sampledLinksFbo=r.createFramebuffer({width:o,height:s,colorAttachments:["rgba32float"]}))}updatePointsBuffer(){var e;let{device:i,data:r,store:n}=this;if(r.linksNumber===void 0||r.links===void 0||!n.pointsTextureSize)return;this.isLinkIndexBufferStale=!0,this.discardPendingPick();let o=new Float32Array(r.linksNumber*2),s=new Float32Array(r.linksNumber*2);for(let c=0;c<r.linksNumber;c++){let u=r.links[c*2],d=r.links[c*2+1],h=r.isPointIndex(u)&&r.isPointIndex(d),f=h?u:0,g=h?d:0,x=f%n.pointsTextureSize,b=Math.floor(f/n.pointsTextureSize),v=g%n.pointsTextureSize,R=Math.floor(g/n.pointsTextureSize);o[c*2]=x,o[c*2+1]=b,s[c*2]=v,s[c*2+1]=R}let a=(((e=this.pointABuffer)==null?void 0:e.byteLength)??0)/(Float32Array.BYTES_PER_ELEMENT*2);!this.pointABuffer||a!==r.linksNumber?(this.pointABuffer&&!this.pointABuffer.destroyed&&this.pointABuffer.destroy(),this.pointABuffer=i.createBuffer({data:o,usage:N.VERTEX|N.COPY_DST})):this.pointABuffer.write(o),!this.pointBBuffer||a!==r.linksNumber?(this.pointBBuffer&&!this.pointBBuffer.destroyed&&this.pointBBuffer.destroy(),this.pointBBuffer=i.createBuffer({data:s,usage:N.VERTEX|N.COPY_DST})):this.pointBBuffer.write(s);let l=new Float32Array(r.linksNumber);for(let c=0;c<r.linksNumber;c++)l[c]=c;!this.linkIndexBuffer||a!==r.linksNumber?(this.linkIndexBuffer&&!this.linkIndexBuffer.destroyed&&this.linkIndexBuffer.destroy(),this.linkIndexBuffer=i.createBuffer({data:l,usage:N.VERTEX|N.COPY_DST})):this.linkIndexBuffer.write(l),this.setDrawCurveCommandAttributes({pointA:this.pointABuffer,pointB:this.pointBBuffer,linkIndices:this.linkIndexBuffer}),this.fillSampledLinksFboCommand&&this.fillSampledLinksFboCommand.setAttributes({pointA:this.pointABuffer,pointB:this.pointBBuffer,linkIndices:this.linkIndexBuffer}),this.updateSampledLinksGrid(),this.config.highlightedLinkIndices!==void 0&&this.updateLinkStatus()}updateColor(){let{data:e}=this,i=e.linksNumber??0;this.isLinkIndexBufferStale=!0;let r=e.linkColors??new Float32Array(i*4).fill(0),{source:n,target:o,previous:s}=lr(this.device,r,this.sourceColorBuffer,this.targetColorBuffer,this.previousColorData,4);this.sourceColorBuffer=n,this.targetColorBuffer=o,this.previousColorData=s,this.setDrawCurveCommandAttributes({...this.sourceColorBuffer&&{sourceColor:this.sourceColorBuffer},...this.targetColorBuffer&&{targetColor:this.targetColorBuffer}})}updateWidth(){let{data:e}=this,i=e.linksNumber??0;this.isLinkIndexBufferStale=!0;let r=e.linkWidths??new Float32Array(i).fill(0),{source:n,target:o,previous:s,sourceData:a}=lr(this.device,r,this.sourceWidthBuffer,this.targetWidthBuffer,this.previousWidthData,1);this.sourceWidthBuffer=n,this.targetWidthBuffer=o,this.previousWidthData=s,this.sourceWidthData=a,this.setDrawCurveCommandAttributes({...this.sourceWidthBuffer&&{sourceWidth:this.sourceWidthBuffer},...this.targetWidthBuffer&&{targetWidth:this.targetWidthBuffer}})}updateArrow(){let{device:e,data:i}=this;this.isLinkIndexBufferStale=!0;let r=i.linksNumber??0,n=i.linkArrows?new Float32Array(i.linkArrows):new Float32Array(r);this.arrowBuffer=ku(e,this.arrowBuffer,n),this.setDrawCurveCommandAttributes({arrow:this.arrowBuffer})}updateStyle(){let{device:e,data:i}=this;i.linksNumber===void 0||i.linkStyles===void 0||(this.linkStyleBuffer=ku(e,this.linkStyleBuffer,i.linkStyles),this.setDrawCurveCommandAttributes({linkStyle:this.linkStyleBuffer}))}updateLinkStatus(){let{device:e,config:i,data:r}=this,n=r.linksNumber??0;if(this.isLinkIndexBufferStale=!0,!n){this.linkStatusTexture||this.ensureLinkStatusPlaceholder();return}let{highlightedLinkIndices:o}=i;if(o===void 0){this.linkStatusTexture||this.ensureLinkStatusPlaceholder(),this.linkStatusTextureSize=0;return}let s=Math.ceil(Math.sqrt(n));this.linkStatusTextureSize=s;let a=new Float32Array(s*s*4);for(let c=0;c<n;c++)a[c*4]=1;for(let c of o)c>=0&&c<n&&(a[c*4]=0);let l={data:a,bytesPerRow:K("rgba32float",s),mipLevel:0,x:0,y:0};!this.linkStatusTexture||this.linkStatusTexture.width!==s||this.linkStatusTexture.height!==s?(this.linkStatusTexture&&!this.linkStatusTexture.destroyed&&this.linkStatusTexture.destroy(),this.linkStatusTexture=e.createTexture({width:s,height:s,format:"rgba32float",usage:F.SAMPLE|F.RENDER|F.COPY_DST}),this.linkStatusTexture.copyImageData(l)):this.linkStatusTexture.copyImageData(l)}updateCurveLineGeometry(){var e,i;let{device:r,config:{curvedLinks:n,curvedLinkSegments:o}}=this;this.isLinkIndexBufferStale=!0,this.curveLineGeometry=m1(n?o:1);let s=new Float32Array(this.curveLineGeometry.length*2);for(let a=0;a<this.curveLineGeometry.length;a++)s[a*2]=this.curveLineGeometry[a][0],s[a*2+1]=this.curveLineGeometry[a][1];!this.curveLineBuffer||this.curveLineBuffer.byteLength!==s.byteLength?(this.curveLineBuffer&&!this.curveLineBuffer.destroyed&&this.curveLineBuffer.destroy(),this.curveLineBuffer=r.createBuffer({data:s,usage:N.VERTEX|N.COPY_DST})):this.curveLineBuffer.write(s),this.setDrawCurveCommandAttributes({position:this.curveLineBuffer}),(e=this.drawCurveCommand)==null||e.setVertexCount(this.curveLineGeometry.length),(i=this.drawCurvePickingCommand)==null||i.setVertexCount(this.curveLineGeometry.length)}updateLinkBlending(){var e;let i=this.config.linkBlending;i!==this.isLinkBlendingActive&&((e=this.drawCurveCommand)==null||e.setParameters(this.getLinkBlendParameters(i)),this.isLinkBlendingActive=i,this.isLinkIndexBufferStale=!0)}getSampledLinkPositionsMap(){let e=new Map;if(!this.sampledLinksFbo||this.sampledLinksFbo.destroyed)return e;let i=this.points;if(!(i!=null&&i.currentPositionTexture)||i.currentPositionTexture.destroyed||!i.exitTexture||i.exitTexture.destroyed)return e;if(this.fillSampledLinksFboCommand&&this.fillSampledLinksUniformStore&&this.sampledLinksFbo){this.fillSampledLinksFboCommand.setVertexCount(this.data.linksNumber??0),this.fillSampledLinksUniformStore.setUniforms({fillSampledLinksUniforms:{transformationMatrix:this.store.transformationMatrix4x4,worldOrigin:this.store.worldOrigin,screenSize:oe(this.store.screenSize,[0,0]),curvedWeight:this.config.curvedLinkWeight,curvedLinkControlPointDistance:this.config.curvedLinkControlPointDistance,curvedLinkSegments:this.config.curvedLinks?this.config.curvedLinkSegments:1}}),this.fillSampledLinksFboCommand.setBindings({positionsTexture:i.currentPositionTexture,exitTexture:i.exitTexture});let n=this.device.beginRenderPass({framebuffer:this.sampledLinksFbo,clearColor:[-1,-1,-1,-1]});this.fillSampledLinksFboCommand.draw(n),n.end()}let r=Xe(this.device,this.sampledLinksFbo);for(let n=0;n<r.length/4;n++){let o=r[n*4],s=r[n*4+1],a=r[n*4+2],l=r[n*4+3];o!==void 0&&o>=0&&s!==void 0&&a!==void 0&&l!==void 0&&e.set(Math.round(o),[s,a,l])}return e}getSampledLinks(){let e=[],i=[],r=[];if(!this.sampledLinksFbo||this.sampledLinksFbo.destroyed)return{indices:e,positions:i,angles:r};let n=this.points;if(!(n!=null&&n.currentPositionTexture)||n.currentPositionTexture.destroyed)return{indices:e,positions:i,angles:r};if(!n.exitTexture||n.exitTexture.destroyed)return{indices:e,positions:i,angles:r};if(this.fillSampledLinksFboCommand&&this.fillSampledLinksUniformStore&&this.sampledLinksFbo){this.fillSampledLinksFboCommand.setVertexCount(this.data.linksNumber??0),this.fillSampledLinksUniformStore.setUniforms({fillSampledLinksUniforms:{transformationMatrix:this.store.transformationMatrix4x4,worldOrigin:this.store.worldOrigin,screenSize:oe(this.store.screenSize,[0,0]),curvedWeight:this.config.curvedLinkWeight,curvedLinkControlPointDistance:this.config.curvedLinkControlPointDistance,curvedLinkSegments:this.config.curvedLinks?this.config.curvedLinkSegments:1}}),this.fillSampledLinksFboCommand.setBindings({positionsTexture:n.currentPositionTexture,exitTexture:n.exitTexture});let s=this.device.beginRenderPass({framebuffer:this.sampledLinksFbo,clearColor:[-1,-1,-1,-1]});this.fillSampledLinksFboCommand.draw(s),s.end()}let o=Xe(this.device,this.sampledLinksFbo);for(let s=0;s<o.length/4;s++){let a=o[s*4],l=o[s*4+1],c=o[s*4+2],u=o[s*4+3];a!==void 0&&a>=0&&l!==void 0&&c!==void 0&&u!==void 0&&(e.push(Math.round(a)),i.push(l,c),r.push(u))}return{indices:e,positions:i,angles:r}}updateLinkIndexBuffer(){if(!this.isLinkIndexBufferStale)return;this.updateLinkIndexFbo();let{config:e,points:i,store:r}=this;if(!i||!i.currentPositionTexture||i.currentPositionTexture.destroyed||(i.exitTexture||i.updateExit(),!i.exitTexture||i.exitTexture.destroyed)||!this.data.linksNumber||!this.store.isLinkHoveringEnabled||!this.linkIndexFbo||!this.drawLineUniformStore||!this.linkStatusTexture||!this.linkIndexTexture||this.linkIndexTexture.destroyed)return;this.drawCurvePickingCommand||(this.drawCurvePickingCommand=this.createDrawCurveCommand(this.getLinkBlendParameters(!1)));let n=e.highlightedLinkIndices!==void 0;this.drawLineUniformStore.setUniforms({drawLineUniforms:{transformationMatrix:r.transformationMatrix4x4,widthScale:e.linkWidthScale,linkArrowsSizeScale:e.linkArrowsSizeScale,worldOrigin:r.worldOrigin,screenSize:oe(r.screenSize,[0,0]),linkVisibilityDistanceRange:oe(e.linkVisibilityDistanceRange,[0,0]),linkVisibilityMinTransparency:e.linkVisibilityMinTransparency,linkOpacity:e.linkOpacity,greyoutOpacity:e.linkGreyoutOpacity,curvedWeight:e.curvedLinkWeight,curvedLinkControlPointDistance:e.curvedLinkControlPointDistance,curvedLinkSegments:e.curvedLinks?e.curvedLinkSegments:1,scaleLinksOnZoom:e.scaleLinksOnZoom?1:0,maxPointSize:r.maxPointSize,renderMode:1,hoveredLinkIndex:r.hoveredLinkIndex??-1,hoveredLinkWidthIncrease:e.hoveredLinkWidthIncrease,isLinkHighlightingActive:n?1:0,linkStatusTextureSize:this.linkStatusTextureSize,focusedLinkIndex:e.focusedLinkIndex??-1,focusedLinkWidthIncrease:e.focusedLinkWidthIncrease,transitionProgress:this.transitionProgress,animateColors:this.shouldAnimateLinkColors?1:0,animateWidths:this.shouldAnimateLinkWidths?1:0,animatePositions:this.shouldAnimatePositions?1:0,pointDefaultColor:le(this.data.defaultRgba,[0,0,0,1]),linkDefaultColor:le(this.data.linkDefaultRgba,[0,0,0,1]),linkDefaultWidth:e.linkDefaultWidth,linkColorInterpolateFromEndpoints:e.linkColorInterpolateFromEndpoints?1:0,linkBlending:e.linkBlending?1:0,pixelRatio:e.pixelRatio},drawLineFragmentUniforms:{renderMode:1,linkDashLength:e.linkDashLength,linkDashGap:e.linkDashGap,linkColorInterpolateFromEndpoints:e.linkColorInterpolateFromEndpoints?1:0,hoveredLinkIndex:r.hoveredLinkIndex??-1,hoveredLinkColor:le(r.hoveredLinkColor,[-1,-1,-1,-1]),linkBlending:e.linkBlending?1:0}}),this.drawCurvePickingCommand.setBindings({positionsTexture:i.currentPositionTexture,linkStatus:this.linkStatusTexture,exitTexture:i.exitTexture,pointColorsTexture:i.pointColorsTexture??i.currentPositionTexture}),this.drawCurvePickingCommand.setInstanceCount(this.data.linksNumber??0);let o=this.device.beginRenderPass({framebuffer:this.linkIndexFbo,clearColor:[0,0,0,0]});this.drawCurvePickingCommand.draw(o),o.end(),this.isLinkIndexBufferStale=!1}pickLinkSync(){this.updateLinkIndexBuffer();let e=this.getCursorPickingPixel();if(!e||!this.linkIndexFbo||this.linkIndexFbo.destroyed)return;let i=Xe(this.device,this.linkIndexFbo,e.x,e.y,1,1);return zx(i)}requestPickLink(){var e;if((e=this.pickingReadback)!=null&&e.inFlight)return!1;if(this.updateLinkIndexBuffer(),!this.linkIndexFbo||this.linkIndexFbo.destroyed)return!0;let i=this.device.gl,r=this.linkIndexFbo.handle;if(!i||!r)return!0;this.pickingReadback||(this.pickingReadback=new ti(i,4));let n=this.getCursorPickingPixel();return n?this.pickingReadback.issue(r,n.x,n.y,1,1):!0}discardPendingPick(){var e;(e=this.pickingReadback)==null||e.cancel()}takePickLinkResult(){if(!this.pickingReadback)return;let e=this.pickingReadback.poll();if(e)return zx(e)??null}getAnimatedWidth(e,i){var r;let n=this.data.getResolvedLinkWidth(e),o=(r=this.sourceWidthData)==null?void 0:r[e],s=o===void 0||Number.isNaN(o)?this.config.linkDefaultWidth:o;return o===void 0?n:s+(n-s)*i}setTransitionProgress(e,i=!1,r=!1,n=!1){e!==this.transitionProgress&&(i||r||n)&&(this.isLinkIndexBufferStale=!0),this.transitionProgress=e,this.shouldAnimateLinkColors=i,this.shouldAnimateLinkWidths=r,this.shouldAnimatePositions=n}destroy(){var e,i,r,n,o,s,a;(e=this.drawCurveCommand)==null||e.destroy(),this.drawCurveCommand=void 0,(i=this.drawPickingCommand)==null||i.destroy(),this.drawPickingCommand=void 0,(r=this.drawCurvePickingCommand)==null||r.destroy(),this.drawCurvePickingCommand=void 0,this.isLinkBlendingActive=void 0,(n=this.fillSampledLinksFboCommand)==null||n.destroy(),this.fillSampledLinksFboCommand=void 0,(o=this.pickingReadback)==null||o.destroy(),this.pickingReadback=void 0,this.linkIndexFbo&&!this.linkIndexFbo.destroyed&&this.linkIndexFbo.destroy(),this.linkIndexFbo=void 0,this.sampledLinksFbo&&!this.sampledLinksFbo.destroyed&&this.sampledLinksFbo.destroy(),this.sampledLinksFbo=void 0,this.linkIndexTexture&&!this.linkIndexTexture.destroyed&&this.linkIndexTexture.destroy(),this.linkIndexTexture=void 0,this.linkStatusTexture&&!this.linkStatusTexture.destroyed&&this.linkStatusTexture.destroy(),this.linkStatusTexture=void 0,(s=this.drawLineUniformStore)==null||s.destroy(),this.drawLineUniformStore=void 0,(a=this.fillSampledLinksUniformStore)==null||a.destroy(),this.fillSampledLinksUniformStore=void 0,this.pointABuffer&&!this.pointABuffer.destroyed&&this.pointABuffer.destroy(),this.pointABuffer=void 0,this.pointBBuffer&&!this.pointBBuffer.destroyed&&this.pointBBuffer.destroy(),this.pointBBuffer=void 0,this.sourceColorBuffer&&!this.sourceColorBuffer.destroyed&&this.sourceColorBuffer.destroy(),this.sourceColorBuffer=void 0,this.targetColorBuffer&&!this.targetColorBuffer.destroyed&&this.targetColorBuffer.destroy(),this.targetColorBuffer=void 0,this.previousColorData=void 0,this.sourceWidthBuffer&&!this.sourceWidthBuffer.destroyed&&this.sourceWidthBuffer.destroy(),this.sourceWidthBuffer=void 0,this.targetWidthBuffer&&!this.targetWidthBuffer.destroyed&&this.targetWidthBuffer.destroy(),this.targetWidthBuffer=void 0,this.previousWidthData=void 0,this.sourceWidthData=void 0,this.arrowBuffer&&!this.arrowBuffer.destroyed&&this.arrowBuffer.destroy(),this.arrowBuffer=void 0,this.linkStyleBuffer&&!this.linkStyleBuffer.destroyed&&this.linkStyleBuffer.destroy(),this.linkStyleBuffer=void 0,this.curveLineBuffer&&!this.curveLineBuffer.destroyed&&this.curveLineBuffer.destroy(),this.curveLineBuffer=void 0,this.linkIndexBuffer&&!this.linkIndexBuffer.destroyed&&this.linkIndexBuffer.destroy(),this.linkIndexBuffer=void 0}getCursorPickingPixel(){if(!this.linkIndexFbo||this.linkIndexFbo.destroyed)return;let[e,i]=this.store.screenSize;if(!e||!i)return;let r=Math.floor(this.store.screenMousePosition[0]*(this.linkIndexFbo.width/e)),n=Math.floor(this.store.screenMousePosition[1]*(this.linkIndexFbo.height/i));return{x:Math.min(Math.max(r,0),this.linkIndexFbo.width-1),y:Math.min(Math.max(n,0),this.linkIndexFbo.height-1)}}createDrawCurveCommand(e){var i;if(!this.drawLineUniformStore)throw new Error("Draw line uniforms must be initialized before creating link draw commands");return new J(this.device,{vs:c1,fs:l1,modules:[Lx,l0],topology:"triangle-strip",vertexCount:((i=this.curveLineGeometry)==null?void 0:i.length)??0,attributes:this.getDrawCurveCommandAttributes(),bufferLayout:[{name:"position",format:"float32x2"},{name:"pointA",format:"float32x2",stepMode:"instance"},{name:"pointB",format:"float32x2",stepMode:"instance"},{name:"sourceColor",format:"float32x4",stepMode:"instance"},{name:"targetColor",format:"float32x4",stepMode:"instance"},{name:"sourceWidth",format:"float32",stepMode:"instance"},{name:"targetWidth",format:"float32",stepMode:"instance"},{name:"arrow",format:"float32",stepMode:"instance"},{name:"linkIndices",format:"float32",stepMode:"instance"},{name:"linkStyle",format:"float32",stepMode:"instance"}],defines:{USE_UNIFORM_BUFFERS:!0,EXIT_DEFAULT_COLOR_CHANNEL:cr(Yu),EDGE_RAMP_PX:cr(s0)},bindings:{drawLineUniforms:this.drawLineUniformStore.getManagedUniformBuffer("drawLineUniforms"),drawLineFragmentUniforms:this.drawLineUniformStore.getManagedUniformBuffer("drawLineFragmentUniforms")},parameters:e})}getDrawCurveCommandAttributes(){let e={};return this.curveLineBuffer&&(e.position=this.curveLineBuffer),this.pointABuffer&&(e.pointA=this.pointABuffer),this.pointBBuffer&&(e.pointB=this.pointBBuffer),this.sourceColorBuffer&&(e.sourceColor=this.sourceColorBuffer),this.targetColorBuffer&&(e.targetColor=this.targetColorBuffer),this.sourceWidthBuffer&&(e.sourceWidth=this.sourceWidthBuffer),this.targetWidthBuffer&&(e.targetWidth=this.targetWidthBuffer),this.arrowBuffer&&(e.arrow=this.arrowBuffer),this.linkIndexBuffer&&(e.linkIndices=this.linkIndexBuffer),this.linkStyleBuffer&&(e.linkStyle=this.linkStyleBuffer),e}setDrawCurveCommandAttributes(e){var i,r;(i=this.drawCurveCommand)==null||i.setAttributes(e),(r=this.drawCurvePickingCommand)==null||r.setAttributes(e)}getLinkBlendParameters(e){let i={...ie,cullMode:"back"};return e?{...i,blend:!0,blendColorOperation:"add",blendColorSrcFactor:"src-alpha",blendColorDstFactor:"one-minus-src-alpha",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one-minus-src-alpha"}:{...i,blend:!1}}ensureLinkStatusPlaceholder(){this.linkStatusTexture&&!this.linkStatusTexture.destroyed||(this.linkStatusTexture=this.device.createTexture({width:1,height:1,format:"rgba32float",usage:F.SAMPLE|F.RENDER|F.COPY_DST,data:new Float32Array(4).fill(0)}),this.linkStatusTextureSize=0)}getDrawUniforms(){let{config:e,store:i}=this,r=e.highlightedLinkIndices!==void 0,n=i.hostHoveredLinkIndex??i.hoveredLinkIndex??-1;return{drawLineUniforms:{transformationMatrix:i.transformationMatrix4x4,widthScale:e.linkWidthScale,linkArrowsSizeScale:e.linkArrowsSizeScale,worldOrigin:i.worldOrigin,screenSize:oe(i.screenSize,[0,0]),linkVisibilityDistanceRange:oe(e.linkVisibilityDistanceRange,[0,0]),linkVisibilityMinTransparency:e.linkVisibilityMinTransparency,linkOpacity:e.linkOpacity,greyoutOpacity:e.linkGreyoutOpacity,curvedWeight:e.curvedLinkWeight,curvedLinkControlPointDistance:e.curvedLinkControlPointDistance,curvedLinkSegments:e.curvedLinks?e.curvedLinkSegments:1,scaleLinksOnZoom:e.scaleLinksOnZoom?1:0,maxPointSize:i.maxPointSize,renderMode:0,hoveredLinkIndex:n,hoveredLinkWidthIncrease:e.hoveredLinkWidthIncrease,isLinkHighlightingActive:r?1:0,linkStatusTextureSize:this.linkStatusTextureSize,focusedLinkIndex:e.focusedLinkIndex??-1,focusedLinkWidthIncrease:e.focusedLinkWidthIncrease,transitionProgress:this.transitionProgress,animateColors:this.shouldAnimateLinkColors?1:0,animateWidths:this.shouldAnimateLinkWidths?1:0,animatePositions:this.shouldAnimatePositions?1:0,pointDefaultColor:le(this.data.defaultRgba,[0,0,0,1]),linkDefaultColor:le(this.data.linkDefaultRgba,[0,0,0,1]),linkDefaultWidth:e.linkDefaultWidth,linkColorInterpolateFromEndpoints:e.linkColorInterpolateFromEndpoints?1:0,linkBlending:e.linkBlending?1:0,pixelRatio:e.pixelRatio},drawLineFragmentUniforms:{renderMode:0,linkDashLength:e.linkDashLength,linkDashGap:e.linkDashGap,linkColorInterpolateFromEndpoints:e.linkColorInterpolateFromEndpoints?1:0,hoveredLinkIndex:n,hoveredLinkColor:le(i.hoveredLinkColor,[-1,-1,-1,-1]),linkBlending:e.linkBlending?1:0}}}getDrawBindings(e){return{positionsTexture:e.currentPositionTexture,linkStatus:this.linkStatusTexture,exitTexture:e.exitTexture,pointColorsTexture:e.pointColorsTexture??e.currentPositionTexture}}},Iu=class{constructor(e,i){this.eventTransform=Ht,this.behavior=Hh().scaleExtent([1e-6,1/0]).filter(r=>!this.config.enableZoom&&(r.type==="wheel"||r.type==="dblclick"||r.type==="touchend"||"touches"in r&&r.touches.length>1)?!1:(!r.ctrlKey||r.type==="wheel")&&(r.button??0)===0).on("start",r=>{var n,o;this.isRunning=!0;let s=!!r.sourceEvent;s&&(this.shouldEnableSimulationDuringZoomOverride=void 0),(o=(n=this.config).onZoomStart)==null||o.call(n,r,s)}).on("zoom",r=>{var n,o;this.applyEventTransform(r.transform);let s=!!r.sourceEvent;(o=(n=this.config).onZoom)==null||o.call(n,r,s)}).on("end",r=>{var n,o;this.isRunning=!1;let s=!!r.sourceEvent;(o=(n=this.config).onZoomEnd)==null||o.call(n,r,s)}),this.isRunning=!1,this.shouldEnableSimulationDuringZoomOverride=void 0,this.store=e,this.config=i}applyEventTransform(e){this.eventTransform=e;let{eventTransform:{x:i,y:r,k:n},store:{transform:o,screenSize:s}}=this,a=s[0],l=s[1];!a||!l||(yt.projection(o,a,l),yt.translate(o,o,[i,r]),yt.scale(o,o,[n,n]),yt.translate(o,o,[a/2,l/2]),yt.scale(o,o,[a/2,l/2]),yt.scale(o,o,[1,-1]))}getTransform(e,i,r=.1){if(e.length===0)return this.eventTransform;let{store:{screenSize:n}}=this,o=n[0],s=n[1],a=1/0,l=-1/0,c=1/0,u=-1/0;for(let y=0;y<e.length;y+=2){let T=e[y],C=e[y+1];!Number.isFinite(T)||!Number.isFinite(C)||(T<a&&(a=T),T>l&&(l=T),C<c&&(c=C),C>u&&(u=C))}if(!Number.isFinite(a)||!Number.isFinite(c))return this.eventTransform;let d=[this.store.scaleX(a),this.store.scaleX(l)],h=[this.store.scaleY(c),this.store.scaleY(u)];d[0]===d[1]&&(d[0]-=.5,d[1]+=.5),h[0]===h[1]&&(h[0]+=.5,h[1]-=.5);let f=o*(1-r*2)/(d[1]-d[0]),g=s*(1-r*2)/(h[0]-h[1]),x=Qw(i??Math.min(f,g),...this.behavior.scaleExtent()),b=(d[1]+d[0])/2,v=(h[1]+h[0])/2,R=o/2-b*x,P=s/2-v*x;return Ht.translate(R,P).scale(x)}getDistanceToPoint(e){let{x:i,y:r,k:n}=this.eventTransform,o=this.getTransform(e,n),s=i-o.x,a=r-o.y;return Math.sqrt(s*s+a*a)}getMiddlePointTransform(e){if(!Number.isFinite(e[0])||!Number.isFinite(e[1]))return this.eventTransform;let{store:{screenSize:i},eventTransform:{x:r,y:n,k:o}}=this,s=i[0],a=i[1],l=(s/2-r)/o,c=(a/2-n)/o,u=this.store.scaleX(e[0]),d=this.store.scaleY(e[1]),h=(l+u)/2,f=(c+d)/2,g=1,x=s/2-h*g,b=a/2-f*g;return Ht.translate(x,b).scale(g)}convertScreenToSpacePosition(e){let{eventTransform:{x:i,y:r,k:n},store:{screenSize:o,worldOrigin:s}}=this,a=o[0],l=o[1],c=(e[0]-i)/n,u=(e[1]-r)/n,d=s[0]-a/2,h=s[1]+l/2;return[d+c,h-u]}convertSpaceToScreenPosition(e){let i=this.eventTransform.applyX(this.store.scaleX(e[0])),r=this.eventTransform.applyY(this.store.scaleY(e[1]));return[i,r]}convertSpaceToScreenRadius(e){let{config:{scalePointsOnZoom:i,pixelRatio:r},store:{maxPointSize:n},eventTransform:{k:o}}=this,s=e*2;return i?s*=o:s*=Math.min(5,Math.max(1,o*.01)),s<=0?0:Math.min(Math.max(s,1/r),n)/2}},Du=class{constructor(e,i,r){this.isActive=!1,this.behavior=Wh().subject(n=>{if(!(this.transition.isActiveFor(ne.Positions)||this.transition.isActiveFor(ne.PointSizes)))return this.store.hoveredPoint&&!this.store.isSpaceKeyPressed?{x:n.x,y:n.y}:void 0}).on("start",n=>{var o,s;this.store.hoveredPoint&&(this.store.draggingPointIndex=this.store.hoveredPoint.index,this.isActive=!0,(s=(o=this.config).onDragStart)==null||s.call(o,n))}).on("drag",n=>{var o,s;(s=(o=this.config).onDrag)==null||s.call(o,n)}).on("end",n=>{var o,s;this.isActive=!1,this.store.draggingPointIndex=void 0,(s=(o=this.config).onDragEnd)==null||s.call(o,n)}),this.store=e,this.config=i,this.transition=r}},x1=`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;
// Per point: (targetX, targetY, strength, hasTarget). \`hasTarget\` is 0 for a point
// without an attractor, so the pass writes zero velocity for it.
uniform sampler2D attractorTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceAttractorUniforms {
  float alpha;
  float attractorCoefficient;
} forceAttractor;

#define alpha forceAttractor.alpha
#define attractorCoefficient forceAttractor.attractorCoefficient
#else
uniform float alpha;
uniform float attractorCoefficient;
#endif

out vec4 fragColor;

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec4 attractor = texelFetch(attractorTexture, pointTexel, 0);
  vec4 velocity = vec4(0.0);

  // no attractor, so no force
  if (attractor.a > 0.5) {
    vec2 distVector = attractor.xy - pointPosition.xy;
    float dist = length(distVector);
    // A point sitting on its target has no direction to normalize; the same test is
    // false for a NaN position, which the integrator leaves untouched anyway.
    if (dist > 0.0) {
      float addV = alpha * dist * attractorCoefficient * attractor.b;
      velocity.rg += addV * normalize(distVector);
    }
  }

  fragColor = velocity;
}
`,ve=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec2 vertexCoord; // Vertex coordinates in normalized device coordinates

void main() {
    gl_Position = vec4(vertexCoord, 0, 1);
}
`,Fu=class extends Ze{constructor(){super(...arguments),this.hasTargets=!1}get isActive(){return this.data.pointAttractors!==void 0&&this.hasTargets}create(){let{device:e,store:i,data:r}=this,{pointsTextureSize:n}=i,{pointsNumber:o,pointAttractors:s,pointAttractorStrength:a}=r;if(this.hasTargets=!1,o===void 0||!n||s===void 0)return;let l=new Float32Array(n*n*4);for(let u=0;u<o;++u){let d=s[u*2],h=s[u*2+1];if(d===void 0||h===void 0||!Number.isFinite(d)||!Number.isFinite(h))continue;let f=a?.[u];l[u*4+0]=d,l[u*4+1]=h,l[u*4+2]=f!==void 0&&Number.isFinite(f)?f:1,l[u*4+3]=1,this.hasTargets=!0}let c=this.previousPointsTextureSize!==n;(!this.attractorTexture||this.attractorTexture.destroyed||c)&&(this.attractorTexture&&!this.attractorTexture.destroyed&&this.attractorTexture.destroy(),this.attractorTexture=e.createTexture({width:n,height:n,format:"rgba32float",usage:F.SAMPLE|F.COPY_DST})),this.attractorTexture.copyImageData({data:l,bytesPerRow:K("rgba32float",n),mipLevel:0,x:0,y:0}),this.previousPointsTextureSize=n}initPrograms(){let{device:e,points:i,store:r}=this;!i||!r.pointsTextureSize||(this.vertexCoordBuffer||(this.vertexCoordBuffer=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.uniformStore||(this.uniformStore=new Q(e,{forceAttractorUniforms:{uniformTypes:{alpha:"f32",attractorCoefficient:"f32"}}})),this.runCommand||(this.runCommand=new J(e,{fs:x1,vs:ve,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.vertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceAttractorUniforms:this.uniformStore.getManagedUniformBuffer("forceAttractorUniforms")},parameters:ie})))}run(){let{device:e,points:i,store:r}=this;if(!i||!this.isActive||!this.runCommand||!this.uniformStore||!this.attractorTexture||this.attractorTexture.destroyed||!i.previousPositionTexture||i.previousPositionTexture.destroyed||!i.velocityFbo||i.velocityFbo.destroyed)return;this.uniformStore.setUniforms({forceAttractorUniforms:{alpha:r.alpha,attractorCoefficient:this.config.simulationAttractor}}),this.runCommand.setBindings({positionsTexture:i.previousPositionTexture,attractorTexture:this.attractorTexture});let n=e.beginRenderPass({framebuffer:i.velocityFbo,clearColor:[0,0,0,0]});this.runCommand.draw(n),n.end()}destroy(){var e,i;(e=this.runCommand)==null||e.destroy(),this.runCommand=void 0,this.attractorTexture&&!this.attractorTexture.destroyed&&this.attractorTexture.destroy(),this.attractorTexture=void 0,this.previousPointsTextureSize=void 0,this.hasTargets=!1,(i=this.uniformStore)==null||i.destroy(),this.uniformStore=void 0,this.vertexCoordBuffer&&!this.vertexCoordBuffer.destroyed&&this.vertexCoordBuffer.destroy(),this.vertexCoordBuffer=void 0}},y1=`#version 300 es
precision highp float;

in vec4 rgba;
out vec4 fragColor;

void main() {
  fragColor = rgba;
}`,S1=`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;
uniform sampler2D exitTexture;

in vec2 pointIndices;

out vec4 rgba;

void main() {
  rgba = vec4(0.0);

  ivec2 pointTexel = ivec2(pointIndices);

  // Absent points must not contribute to the centroid \u2014 a NaN position would
  // poison the sum and break the force for every point. (exit.G = current absence)
  vec4 exitStatus = texelFetch(exitTexture, pointTexel, 0);
  if (exitStatus.g > 0.5) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  rgba = vec4(pointPosition.xy, 1.0, 0.0);

  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`,v1=`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;
uniform sampler2D centermassTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceCenterUniforms {
  float centerForce;
  float alpha;
} forceCenter;

#define centerForce forceCenter.centerForce
#define alpha forceCenter.alpha
#else
uniform float centerForce;
uniform float alpha;
#endif

out vec4 fragColor;

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec4 velocity = vec4(0.0);
  vec4 centermassValues = texelFetch(centermassTexture, ivec2(0), 0);
  vec2 centermassPosition = centermassValues.xy / centermassValues.b;
  vec2 distVector = centermassPosition - pointPosition.xy;
  float dist = sqrt(dot(distVector, distVector));
  if (dist > 0.0) {
    float angle = atan(distVector.y, distVector.x);
    float addV = alpha * centerForce * dist * 0.01;
    velocity.rg += addV * vec2(cos(angle), sin(angle));
  }

  fragColor = velocity;
}`,Mu=class extends Ze{create(){var e;let{device:i,store:r}=this,{pointsTextureSize:n}=r;if(n){if(this.centermassTexture||(this.centermassTexture=i.createTexture({width:1,height:1,format:"rgba32float",usage:F.SAMPLE|F.RENDER|F.COPY_DST})),this.centermassTexture.copyImageData({data:new Float32Array(4).fill(0),bytesPerRow:K("rgba32float",1),mipLevel:0,x:0,y:0}),this.centermassFbo||(this.centermassFbo=i.createFramebuffer({width:1,height:1,colorAttachments:[this.centermassTexture]})),!this.pointIndices||this.previousPointsTextureSize!==r.pointsTextureSize){this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy();let o=bn(r.pointsTextureSize);this.pointIndices=i.createBuffer({data:o,usage:N.VERTEX|N.COPY_DST}),(e=this.calculateCentermassCommand)==null||e.setAttributes({pointIndices:this.pointIndices})}this.previousPointsTextureSize=n}}initPrograms(){let{device:e,store:i,points:r}=this;!r||!i.pointsTextureSize||!this.centermassFbo||this.centermassFbo.destroyed||!this.centermassTexture||this.centermassTexture.destroyed||(this.forceVertexCoordBuffer||(this.forceVertexCoordBuffer=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.forceUniformStore||(this.forceUniformStore=new Q(e,{forceCenterUniforms:{uniformTypes:{centerForce:"f32",alpha:"f32"}}})),this.calculateCentermassCommand||(this.calculateCentermassCommand=new J(e,{fs:y1,vs:S1,topology:"point-list",attributes:{...this.pointIndices&&{pointIndices:this.pointIndices}},bufferLayout:[{name:"pointIndices",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{},parameters:{...ie,blend:!0,blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",depthWriteEnabled:!1,depthCompare:"always"}})),this.calculateCentermassCommand.setVertexCount(this.data.pointsNumber??0),this.runCommand||(this.runCommand=new J(e,{fs:v1,vs:ve,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.forceVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceCenterUniforms:this.forceUniformStore.getManagedUniformBuffer("forceCenterUniforms")},parameters:ie})))}run(){let{device:e,store:i,points:r}=this;if(!r||!this.calculateCentermassCommand||!this.runCommand||!this.forceUniformStore||!this.centermassFbo||!this.centermassTexture||!r.previousPositionTexture||r.previousPositionTexture.destroyed||!r.velocityFbo||r.velocityFbo.destroyed||!r.exitTexture||r.exitTexture.destroyed||i.pointsTextureSize!==this.previousPointsTextureSize||!this.pointIndices)return;let n=e.beginRenderPass({framebuffer:this.centermassFbo,clearColor:[0,0,0,0]});this.calculateCentermassCommand.setBindings({positionsTexture:r.previousPositionTexture,exitTexture:r.exitTexture}),this.calculateCentermassCommand.draw(n),n.end(),this.forceUniformStore.setUniforms({forceCenterUniforms:{centerForce:this.config.simulationCenter,alpha:i.alpha}}),this.runCommand.setBindings({positionsTexture:r.previousPositionTexture,centermassTexture:this.centermassTexture});let o=e.beginRenderPass({framebuffer:r.velocityFbo,clearColor:[0,0,0,0]});this.runCommand.draw(o),o.end()}destroy(){var e,i,r;(e=this.calculateCentermassCommand)==null||e.destroy(),this.calculateCentermassCommand=void 0,(i=this.runCommand)==null||i.destroy(),this.runCommand=void 0,this.centermassFbo&&!this.centermassFbo.destroyed&&this.centermassFbo.destroy(),this.centermassFbo=void 0,this.centermassTexture&&!this.centermassTexture.destroyed&&this.centermassTexture.destroy(),this.centermassTexture=void 0,(r=this.forceUniformStore)==null||r.destroy(),this.forceUniformStore=void 0,this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy(),this.pointIndices=void 0,this.forceVertexCoordBuffer&&!this.forceVertexCoordBuffer.destroyed&&this.forceVertexCoordBuffer.destroy(),this.forceVertexCoordBuffer=void 0,this.previousPointsTextureSize=void 0}},b1=`#version 300 es
precision highp float;
// Fragment shaders default int to mediump, guaranteed only to 32767 \u2014
// point indices go far higher.
precision highp int;

// Exact pairwise collision for small graphs: one fragment per point, looping
// over every other point. Used at or below ALL_PAIRS_MAX_POINTS (index.ts);
// above it, force-collision-slots.frag tests real per-cell neighbours instead.
//
// Both replaced a grid that reacted to each cell's *average* occupant. In a
// dense pile that stalled: a point got no push unless it overlapped an
// average, so two points could sit inside each other while every cell mean was
// out of range, and near-coincident points saw the same field and never parted.
// Here every overlapping pair is resolved directly, d3-force style: the pair
// is projected to contact along the line between the centers, and the
// correction is split by r\xB2 so the smaller disc yields to the bigger one.
//
// The output is a position correction, not a force: by default it is not
// scaled by alpha (collision is a constraint that must hold while the layout
// cools; \`collisionCooling\` opts into alpha^cooling), the integrator applies it
// with friction 1, and its magnitude is capped at one own radius per pass so a
// deep pile unwinds over a few passes instead of flinging apart.
// \`collisionStrength\` is the relaxation factor (1 = full projection per pass).

uniform sampler2D positionsTexture;
uniform sampler2D sizeTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceCollisionAllPairsUniforms {
  float pointsTextureSize;
  float pointsNumber;
  float collisionStrength;
  float collisionRadius;
  float collisionPadding;
  float maxRadius; // the largest effective radius in the graph: the pair-reject bound
  float alpha;
  float collisionCooling; // 0: full strength at every alpha; 1: scaled by alpha like the other forces
} forceCollisionAllPairs;

#define pointsTextureSize forceCollisionAllPairs.pointsTextureSize
#define pointsNumber forceCollisionAllPairs.pointsNumber
#define collisionStrength forceCollisionAllPairs.collisionStrength
#define collisionRadius forceCollisionAllPairs.collisionRadius
#define collisionPadding forceCollisionAllPairs.collisionPadding
#define maxRadius forceCollisionAllPairs.maxRadius
#define alpha forceCollisionAllPairs.alpha
#define collisionCooling forceCollisionAllPairs.collisionCooling
#else
uniform float pointsTextureSize;
uniform float pointsNumber;
uniform float collisionStrength;
uniform float collisionRadius;
uniform float collisionPadding;
uniform float maxRadius;
uniform float alpha;
uniform float collisionCooling;
#endif

out vec4 fragColor;

// Effective collision radius: the fixed radius or half the size, plus padding.
// Must match the grid path and the link force's rest-length floor.
float effectiveRadius(float size) {
  return (collisionRadius > 0.0 ? collisionRadius : size * 0.5) + collisionPadding;
}

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);
  int size = int(pointsTextureSize);
  int selfIndex = pointTexel.y * size + pointTexel.x;
  int count = int(pointsNumber);

  // Fragments beyond the point count are unused texture pixels.
  if (selfIndex >= count) {
    fragColor = vec4(0.0);
    return;
  }

  // An absent point neither moves nor blocks (its position is NaN).
  if (texelFetch(exitTexture, pointTexel, 0).g > 0.5) {
    fragColor = vec4(0.0);
    return;
  }

  vec2 position = texelFetch(positionsTexture, pointTexel, 0).rg;
  float selfRadius = effectiveRadius(texelFetch(sizeTexture, pointTexel, 0).r);
  float selfRadius2 = selfRadius * selfRadius;

  // No pair can touch beyond selfRadius + maxRadius: reject on the position
  // alone before paying for the size and exit fetches.
  float rejectDistance = selfRadius + maxRadius;
  float rejectDistance2 = rejectDistance * rejectDistance;

  vec2 correction = vec2(0.0);
  for (int i = 0; i < count; i += 1) {
    if (i == selfIndex) continue;
    ivec2 texel = ivec2(i % size, i / size);
    vec2 otherPosition = texelFetch(positionsTexture, texel, 0).rg;
    vec2 distVector = position - otherPosition;
    float dist2 = dot(distVector, distVector);
    // Written as \`!(dist2 < bound)\` so a NaN position is rejected too \u2014 a NaN
    // fails every comparison, and \`>=\` would let it through.
    if (!(dist2 < rejectDistance2)) continue;
    // Absent points are skipped through exit.G, never by their position: a point
    // removed with an animated setPointPositions keeps its last finite position
    // on the GPU after the fade. Same test as the slot peel and the many-body pass.
    if (texelFetch(exitTexture, texel, 0).g > 0.5) continue;

    float otherRadius = effectiveRadius(texelFetch(sizeTexture, texel, 0).r);
    float contact = selfRadius + otherRadius;
    if (dist2 >= contact * contact) continue;

    float dist = sqrt(dist2);
    vec2 direction;
    if (dist > 1e-4) {
      direction = distVector / dist;
    } else {
      // Coincident points have no separation direction. Push along a
      // per-point golden-angle direction: consecutive indices fan out in
      // well-separated directions, so a stack disperses deterministically.
      float angle = float(selfIndex) * 2.399963229728653;
      direction = vec2(cos(angle), sin(angle));
      dist = 0.0;
    }

    // Project the pair to contact; the bigger disc yields less (d3's r\xB2 split).
    float otherRadius2 = otherRadius * otherRadius;
    float overlap = contact - dist;
    correction += direction * (overlap * otherRadius2 / (selfRadius2 + otherRadius2));
  }

  // Optional cooling: alpha^cooling, 1 at cooling 0 (the branch avoids pow(0, 0)).
  float cooling = collisionCooling > 0.0 ? pow(max(alpha, 0.0), collisionCooling) : 1.0;
  correction *= collisionStrength * cooling;

  // Cap the per-pass correction at one own radius. A point deep in a pile sums
  // many overlapping pairs into one large vector; the cap keeps the direction
  // (away from where the pile is densest) and bounds the step, so the pile
  // inflates over a few passes instead of exploding and ping-ponging back.
  float maxStep = selfRadius;
  float speed = length(correction);
  if (speed > maxStep) correction *= maxStep / speed;

  fragColor = vec4(correction, 0.0, 0.0);
}
`,_1=`#version 300 es
precision highp float;
// Fragment shaders default int to mediump, guaranteed only to 32767 \u2014
// point indices go far higher.
precision highp int;

// Pairwise collision for large graphs, against depth-peeled per-cell slots.
// Used above ALL_PAIRS_MAX_POINTS (index.ts); below it the all-pairs pass tests
// every pair instead.
//
// The grid cell spans the contact range (\u2265 2 \xD7 the largest radius), so every
// point this one can touch is in the 3\xD73 block around its cell. Each hash
// bucket's K slots hold a uniform random K-subset of its occupants, re-drawn
// every pass (build-nearfield-slots.vert). A bucket with K or fewer points is
// listed in full; denser buckets supply a fresh sample. Distant cells share
// this slot budget; the world-cell check below rejects aliased candidates.
// The cap below keeps each step bounded. No cell mean is ever used \u2014 a contact test
// against a mean cannot see a pair that overlaps while the mean sits out of
// range, which is how the previous grid path stalled in dense piles.
//
// The pairwise response is the all-pairs shader's and must stay identical to
// it: project the pair to contact along the line of centers, split by r\xB2 so
// the smaller disc yields, scale by \`collisionStrength\`, cap at one own radius
// per pass. Like it, this is a position correction and not a force: no alpha
// unless \`collisionCooling\` opts in, integrated with friction 1.

uniform sampler2D positionsTexture;
uniform sampler2D sizeTexture;
uniform sampler2D exitTexture;
// One layer per peeling pass, [point index, hash] per cell. Float data \u2014
// highp, the default sampler precision is lowp.
uniform highp sampler2DArray slotsTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceCollisionSlotsUniforms {
  float pointsTextureSize;
  float gridSize;
  float slotCount;
  float collisionStrength;
  float collisionRadius;
  float collisionPadding;
  float alpha;
  float collisionCooling; // 0: full strength at every alpha; 1: scaled by alpha like the other forces
  float cellsPerUnit;
  float rotationSeed;
  vec2 collisionOrigin; // the world origin: where cells are counted from (collision-grid.ts)
} forceCollisionSlots;

#define pointsTextureSize forceCollisionSlots.pointsTextureSize
#define gridSize forceCollisionSlots.gridSize
#define slotCount forceCollisionSlots.slotCount
#define collisionStrength forceCollisionSlots.collisionStrength
#define collisionRadius forceCollisionSlots.collisionRadius
#define collisionPadding forceCollisionSlots.collisionPadding
#define alpha forceCollisionSlots.alpha
#define collisionCooling forceCollisionSlots.collisionCooling
#define cellsPerUnit forceCollisionSlots.cellsPerUnit
#define rotationSeed forceCollisionSlots.rotationSeed
#define collisionOrigin forceCollisionSlots.collisionOrigin
#else
uniform float pointsTextureSize;
uniform float gridSize;
uniform float slotCount;
uniform float collisionStrength;
uniform float collisionRadius;
uniform float collisionPadding;
uniform float alpha;
uniform float collisionCooling;
uniform float cellsPerUnit;
uniform float rotationSeed;
uniform vec2 collisionOrigin;
#endif

// @collision-grid

out vec4 fragColor;

// Effective collision radius: the fixed radius or half the size, plus padding.
// Must match the all-pairs path and the link force's rest-length floor.
float effectiveRadius(float size) {
  return (collisionRadius > 0.0 ? collisionRadius : size * 0.5) + collisionPadding;
}

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);
  int size = int(pointsTextureSize);
  int selfIndex = pointTexel.y * size + pointTexel.x;

  // An absent point neither moves nor blocks (its position is NaN).
  if (texelFetch(exitTexture, pointTexel, 0).g > 0.5) {
    fragColor = vec4(0.0);
    return;
  }

  vec2 position = texelFetch(positionsTexture, pointTexel, 0).rg;
  float selfRadius = effectiveRadius(texelFetch(sizeTexture, pointTexel, 0).r);
  float selfRadius2 = selfRadius * selfRadius;

  // Must match the cell formula of the peel pass exactly.
  int cells = int(gridSize);
  highp ivec2 pointCell = collisionCell(position, collisionOrigin, cellsPerUnit);

  vec2 correction = vec2(0.0);
  int slots = int(slotCount);

  for (int j = -1; j <= 1; j += 1) {
    for (int i = -1; i <= 1; i += 1) {
      highp ivec2 cell = pointCell + ivec2(i, j);
      ivec2 slotCell = collisionTexel(cell, rotationSeed, cells);

      // An exhausted cell peels empty slots (index -1) for the remaining
      // layers; empty layers can't be followed by occupied ones within a cell.
      for (int s = 0; s < slots; s += 1) {
        float slotIndex = texelFetch(slotsTexture, ivec3(slotCell, s), 0).r;
        if (slotIndex < 0.0) break;
        // Exact \`==\` on a float-stored index holds for whole numbers below 2^24
        // \u2014 every realistic graph (a points texture bigger than 4096\xB2).
        int other = int(slotIndex);
        if (other == selfIndex) continue;

        ivec2 otherTexel = ivec2(other % size, other / size);
        vec2 otherPosition = texelFetch(positionsTexture, otherTexel, 0).rg;
        // Hash aliases share the slot budget, but never create a phantom contact
        // or count one neighbour twice when two scanned cells share a texel.
        if (any(notEqual(collisionCell(otherPosition, collisionOrigin, cellsPerUnit), cell))) continue;
        vec2 distVector = position - otherPosition;
        float dist2 = dot(distVector, distVector);

        float otherRadius = effectiveRadius(texelFetch(sizeTexture, otherTexel, 0).r);
        float contact = selfRadius + otherRadius;
        if (dist2 >= contact * contact) continue;

        float dist = sqrt(dist2);
        vec2 direction;
        if (dist > 1e-4) {
          direction = distVector / dist;
        } else {
          // Coincident points have no separation direction. Push along a
          // per-point golden-angle direction: consecutive indices fan out in
          // well-separated directions, so a stack disperses deterministically.
          float angle = float(selfIndex) * 2.399963229728653;
          direction = vec2(cos(angle), sin(angle));
          dist = 0.0;
        }

        // Project the pair to contact; the bigger disc yields less (d3's r\xB2 split).
        float otherRadius2 = otherRadius * otherRadius;
        float overlap = contact - dist;
        correction += direction * (overlap * otherRadius2 / (selfRadius2 + otherRadius2));
      }
    }
  }

  // Optional cooling: alpha^cooling, 1 at cooling 0 (the branch avoids pow(0, 0)).
  float cooling = collisionCooling > 0.0 ? pow(max(alpha, 0.0), collisionCooling) : 1.0;
  correction *= collisionStrength * cooling;

  // Cap the per-pass correction at one own radius. A point deep in a pile sums
  // many overlapping pairs into one large vector; the cap keeps the direction
  // (away from where the pile is densest) and bounds the step, so the pile
  // inflates over a few passes instead of exploding and ping-ponging back.
  float maxStep = selfRadius;
  float speed = length(correction);
  if (speed > maxStep) correction *= maxStep / speed;

  fragColor = vec4(correction, 0.0, 0.0);
}
`,c0=`#version 300 es
precision highp float;

// One depth-peeling pass of a per-cell point-slot build. Shared by the
// many-body near field and the collision force (ForceCollision/index.ts),
// which bind their own grid size, splice in their own cell formula, and hand
// the previous pass over in their own kind of target (COLLISION_SLOTS).
//
// A grid's near field needs actual point-to-point interactions (cell centroids
// alone exert a purely radial force that flattens dense hubs into disks and
// spikes, and a contact test against a centroid cannot see a pair that overlaps
// while the cell mean sits out of range). Each peeling pass selects, per cell,
// the not-yet-peeled point with the smallest per-tick random hash: the depth
// test keeps the smallest \`hashValue\` among eligible points, and eligibility
// excludes points already captured by the previous slot (hash <= previous
// slot's hash). Running K passes yields a uniform random K-subset per cell,
// re-randomized every tick via \`randomSeed\`; force-nearfield.frag turns it into
// an unbiased estimate of the cell's exact all-pairs repulsion (Monte-Carlo
// P3M), and force-collision-slots.frag resolves contacts against it directly.

uniform sampler2D positionsTexture;
#ifdef COLLISION_SLOTS
// The collision force peels into a pair of 2D targets and copies each pass into
// its layer of the array it reads (ForceCollision/index.ts): pass k\u22121's target.
uniform sampler2D previousSlot;
#else
// The slot array holding pass k\u22121 (the other one of the two, see NearFieldSlots
// in index.ts); previousLayer is its layer. Float data \u2014 highp.
uniform highp sampler2DArray previousSlot;
#endif
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform buildNearFieldSlotsUniforms {
  float pointsTextureSize;
  float levelGridSize;
  float hasPreviousSlot;
  float randomSeed;
#ifdef COLLISION_SLOTS
  float cellsPerUnit;
  float rotationSeed;
  vec2 collisionOrigin; // the world origin: where cells are counted from (collision-grid.ts)
#else
  float previousLayer;
#endif
} buildNearFieldSlots;

#define pointsTextureSize buildNearFieldSlots.pointsTextureSize
#define levelGridSize buildNearFieldSlots.levelGridSize
#define hasPreviousSlot buildNearFieldSlots.hasPreviousSlot
#define randomSeed buildNearFieldSlots.randomSeed
#ifdef COLLISION_SLOTS
#define collisionScale buildNearFieldSlots.cellsPerUnit
#define rotationSeed buildNearFieldSlots.rotationSeed
#define collisionOrigin buildNearFieldSlots.collisionOrigin
#else
#define previousLayer buildNearFieldSlots.previousLayer
#endif
#else
uniform float pointsTextureSize;
uniform float levelGridSize;
uniform float hasPreviousSlot;
uniform float randomSeed;
#ifdef COLLISION_SLOTS
uniform float collisionScale;
uniform float rotationSeed;
uniform vec2 collisionOrigin;
#else
uniform float previousLayer;
#endif
#endif

#ifdef COLLISION_SLOTS
// @collision-grid
#else
// @grid-cell
#endif

in vec2 pointIndices;

out vec2 slotData; // [point index, hash]

void main() {
  ivec2 pointTexel = ivec2(pointIndices);

  // Absent points must not be captured as neighbors \u2014 a NaN position bins to an
  // undefined cell and its distance poisons the force of every point sampling
  // that slot. Same guard as calculate-level.vert. (exit.G = absent)
  vec4 exitStatus = texelFetch(exitTexture, pointTexel, 0);
  if (exitStatus.g > 0.5) {
    slotData = vec2(-1.0, 1.0);
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 1.0;
    return;
  }

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  float index = pointIndices.y * pointsTextureSize + pointIndices.x;

  // Per-tick random ordering via an integer hash (lowbias32). A fract(sin(...))
  // hash breaks down here: at large point indices GPU sin() loses precision
  // (differently per vendor), producing correlated or colliding hashes \u2014 and a
  // hash collision makes the peeling test below silently drop a point from the
  // sample. Integer ops are exact everywhere, and both inputs are exact (the
  // index is an integer-valued float; floatBitsToUint reinterprets seed bits).
  uint h = uint(index) ^ floatBitsToUint(randomSeed);
  h ^= h >> 16u;
  h *= 0x7feb352du;
  h ^= h >> 15u;
  h *= 0x846ca68bu;
  h ^= h >> 16u;
  // Top 24 bits only, so the value is exactly representable in a float32 and
  // round-trips bit-exactly through the slot texture into the next pass's
  // comparison. Kept strictly inside (0, 1) so the depth range is safe.
  float hashValue = (float(h >> 8u) + 0.5) / 16777216.0;
  hashValue = 0.001 + hashValue * 0.998;

  // The cell formula shared with the aggregation and force shaders (grid-cell.ts).
#ifdef COLLISION_SLOTS
  highp ivec2 worldCell = collisionCell(pointPosition.rg, collisionOrigin, collisionScale);
  ivec2 cell = collisionTexel(worldCell, rotationSeed, int(levelGridSize));
#else
  ivec2 cell = gridCell(pointPosition.rg, levelGridSize);
#endif

  if (hasPreviousSlot > 0.5) {
#ifdef COLLISION_SLOTS
    vec2 previous = texelFetch(previousSlot, cell, 0).rg;
#else
    vec2 previous = texelFetch(previousSlot, ivec3(cell, int(previousLayer)), 0).rg;
#endif
    // Eligible only if the previous slot captured a point with a smaller hash.
    // An empty previous slot (index -1) means the cell is exhausted \u2014 otherwise
    // this pass would re-capture already-peeled points and double-count them.
    if (previous.x < 0.0 || hashValue <= previous.y) {
      slotData = vec2(-1.0, 1.0);
      gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      gl_PointSize = 1.0;
      return;
    }
  }

  slotData = vec2(index, hashValue);
  vec2 ndc = 2.0 * (vec2(cell) + 0.5) / levelGridSize - 1.0;
  // The depth test (less) keeps the eligible point with the smallest hash.
  gl_Position = vec4(ndc, hashValue * 2.0 - 1.0, 1.0);
  gl_PointSize = 1.0;
}
`,u0=`#version 300 es
precision highp float;

in vec2 slotData;
out vec4 fragColor;

void main() {
  fragColor = vec4(slotData, 0.0, 0.0);
}
`,T1=1024,ks=[[667,902],[155,118]],P1=t=>t*397&T1-1,Su="// @collision-grid",d0=`
// The cell holding a world position, counted from the anchor \u2014 the world
// origin, bound by the host as a uniform and passed in \u2014 unbounded:
// collisionTexel wraps it onto the grid. contactPerUnit is 1 / the cell size,
// the same bits in every program.
highp ivec2 collisionCell(vec2 worldPosition, vec2 anchor, float contactPerUnit) {
  // The only rounded steps: one subtraction, one multiplication, one floor.
  vec2 cell = floor((worldPosition - anchor) * contactPerUnit);
  // Bounded to whole numbers an int holds exactly, so an infinite position
  // lands on a cell instead of an undefined conversion.
  return ivec2(clamp(cell, vec2(-16777216.0), vec2(16777216.0)));
}

// How far one axis of a cell's texel is rotated: by r(k) = a\xB7k\xB2 + b\xB7k (mod the
// grid), k the cell's block along the OTHER axis, counted from the anchor's
// block (whose r is 0). Quadratic, so the centroid of two cells symmetric
// about a third never lands on it. uint arithmetic: it wraps modulo 2^32,
// which keeps the low bits \u2014 all the mask keeps \u2014 exact.
highp int collisionRotation(highp int block, highp uint square, highp uint linear, highp int texelMask) {
  highp uint k = uint(block);
  return int((square * k * k + linear * k) & uint(texelMask));
}

// The texel a cell hashes to this tick: the cell, rotated by its blocks,
// modulo the grid per axis \u2014 in [0, texelsPerAxis - 1] for any cell, negative
// ones included. Inside the anchor's block it is the cell itself. tickSeed is
// this tick's collisionRotationSeed, the same bits in every program.
highp ivec2 collisionTexel(highp ivec2 cell, float tickSeed, highp int texelsPerAxis) {
  highp int texelMask = texelsPerAxis - 1;
  highp ivec2 block = cell >> int(log2(float(texelsPerAxis)) + 0.5);
  highp uint tick = uint(tickSeed);
  highp ivec2 rotation = ivec2(
    collisionRotation(block.y, ${ks[0][0]}u, ${ks[0][1]}u + tick, texelMask),
    collisionRotation(block.x, ${ks[1][0]}u, ${ks[1][1]}u + tick, texelMask));
  return (cell + rotation) & texelMask;
}
`,C1=new Set(d0.replace(/\/\/.*$/gm,"").match(/\b[A-Za-z_]\w*\b/g));function Vx(t){if(!t.includes(Su))throw new Error(`Shader is missing the "${Su}" marker for the shared collision-grid code`);for(let e of t.match(/^[ \t]*#define[ \t]+\w+/gm)??[]){let i=e.replace(/^[ \t]*#define[ \t]+/,"");if(C1.has(i))throw new Error(`Shader macro "${i}" collides with an identifier of the shared collision-grid code`)}return t.replace(Su,d0)}var A1=512,vn=t=>Math.min(A1,Math.max(8,Math.pow(2,Math.ceil(Math.log2(2*Math.sqrt(t)))))),h0=t=>t<=16384?32:t<=65536?16:8,w1=4096,yn=2,Nu=class extends Ze{constructor(){super(...arguments),this.tick=0,this.slotCount=0,this.peelTargets=[],this.gridSize=0,this.cellSize=0,this.maxRadius=0}get resolvedSizeTexture(){if(!(!this.sizeTexture||this.sizeTexture.destroyed))return this.sizeTexture}get usesAllPairs(){return(this.data.pointsNumber??0)<=w1}create(){var e;let{device:i,store:r,data:n,config:o}=this;if(!r.pointsTextureSize||n.pointsNumber===void 0)return;let s=o.pointDefaultSize??Ie.pointDefaultSize;if(n.pointSizes&&n.pointsNumber!==void 0)for(let u=0;u<n.pointsNumber;u++)s=Math.max(s,n.getResolvedPointSize(u));let a=o.simulationCollisionRadius??0,l=o.simulationCollisionPadding??0;this.maxRadius=(a>0?a:s*.5)+l,this.usesAllPairs?(this.destroySlotTargets(),this.gridSize=0,this.cellSize=0):(this.gridSize=vn(n.pointsNumber),this.cellSize=Math.max(this.maxRadius*2,8),this.createSlotTargets());let c=new Float32Array(r.pointsTextureSize*r.pointsTextureSize*4);for(let u=0;u<n.pointsNumber;u++)c[u*4]=n.getResolvedPointSize(u);(!this.sizeTexture||this.sizeTexture.destroyed||this.sizeTexture.width!==r.pointsTextureSize||this.sizeTexture.height!==r.pointsTextureSize)&&(this.sizeTexture&&!this.sizeTexture.destroyed&&this.sizeTexture.destroy(),this.sizeTexture=i.createTexture({width:r.pointsTextureSize,height:r.pointsTextureSize,format:"rgba32float",usage:F.SAMPLE|F.COPY_DST})),this.sizeTexture.copyImageData({data:c,bytesPerRow:K("rgba32float",r.pointsTextureSize),mipLevel:0,x:0,y:0}),(!this.pointIndices||this.previousPointsTextureSize!==r.pointsTextureSize)&&(this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy(),this.pointIndices=i.createBuffer({data:bn(r.pointsTextureSize),usage:N.VERTEX|N.COPY_DST}),(e=this.peelCommand)==null||e.setAttributes({pointIndices:this.pointIndices})),this.previousPointsTextureSize=r.pointsTextureSize}initPrograms(){let{device:e,store:i,data:r}=this;!r.pointsNumber||!i.pointsTextureSize||(this.vertexCoordBuffer||(this.vertexCoordBuffer=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.forceAllPairsUniformStore||(this.forceAllPairsUniformStore=new Q(e,{forceCollisionAllPairsUniforms:{uniformTypes:{pointsTextureSize:"f32",pointsNumber:"f32",collisionStrength:"f32",collisionRadius:"f32",collisionPadding:"f32",maxRadius:"f32",alpha:"f32",collisionCooling:"f32"}}})),this.forceAllPairsCommand||(this.forceAllPairsCommand=new J(e,{fs:b1,vs:ve,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.vertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceCollisionAllPairsUniforms:this.forceAllPairsUniformStore.getManagedUniformBuffer("forceCollisionAllPairsUniforms")},parameters:ie})),this.peelUniformStore||(this.peelUniformStore=new Q(e,{buildNearFieldSlotsUniforms:{uniformTypes:{pointsTextureSize:"f32",levelGridSize:"f32",hasPreviousSlot:"f32",randomSeed:"f32",cellsPerUnit:"f32",rotationSeed:"f32",collisionOrigin:"vec2<f32>"}}})),this.peelCommand||(this.peelCommand=new J(e,{fs:u0,vs:Vx(c0),topology:"point-list",vertexCount:r.pointsNumber,attributes:{...this.pointIndices&&{pointIndices:this.pointIndices}},bufferLayout:[{name:"pointIndices",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0,COLLISION_SLOTS:!0},bindings:{buildNearFieldSlotsUniforms:this.peelUniformStore.getManagedUniformBuffer("buildNearFieldSlotsUniforms")},parameters:{...ie,blend:!1,depthWriteEnabled:!0,depthCompare:"less"}})),this.forceSlotsUniformStore||(this.forceSlotsUniformStore=new Q(e,{forceCollisionSlotsUniforms:{uniformTypes:{pointsTextureSize:"f32",gridSize:"f32",slotCount:"f32",collisionStrength:"f32",collisionRadius:"f32",collisionPadding:"f32",alpha:"f32",collisionCooling:"f32",cellsPerUnit:"f32",rotationSeed:"f32",collisionOrigin:"vec2<f32>"}}})),this.forceSlotsCommand||(this.forceSlotsCommand=new J(e,{fs:Vx(_1),vs:ve,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.vertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceCollisionSlotsUniforms:this.forceSlotsUniformStore.getManagedUniformBuffer("forceCollisionSlotsUniforms")},parameters:ie})))}run(){let{store:e,data:i,points:r}=this;r&&i.pointsNumber!==void 0&&(!r.previousPositionTexture||r.previousPositionTexture.destroyed||!r.exitTexture||r.exitTexture.destroyed||!r.velocityFbo||r.velocityFbo.destroyed||!this.sizeTexture||this.sizeTexture.destroyed||e.pointsTextureSize===this.previousPointsTextureSize&&(this.usesAllPairs?this.drawAllPairs():this.drawSlots()))}destroy(){var e,i,r,n,o,s;(e=this.peelCommand)==null||e.destroy(),this.peelCommand=void 0,(i=this.forceSlotsCommand)==null||i.destroy(),this.forceSlotsCommand=void 0,(r=this.forceAllPairsCommand)==null||r.destroy(),this.forceAllPairsCommand=void 0,this.destroySlotTargets(),this.sizeTexture&&!this.sizeTexture.destroyed&&this.sizeTexture.destroy(),this.sizeTexture=void 0,(n=this.peelUniformStore)==null||n.destroy(),this.peelUniformStore=void 0,(o=this.forceSlotsUniformStore)==null||o.destroy(),this.forceSlotsUniformStore=void 0,(s=this.forceAllPairsUniformStore)==null||s.destroy(),this.forceAllPairsUniformStore=void 0,this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy(),this.pointIndices=void 0,this.vertexCoordBuffer&&!this.vertexCoordBuffer.destroyed&&this.vertexCoordBuffer.destroy(),this.vertexCoordBuffer=void 0}drawAllPairs(){let{device:e,store:i,data:r,points:n,config:o}=this;if(!n||!n.previousPositionTexture||!n.exitTexture||!n.velocityFbo||!this.sizeTexture||!this.forceAllPairsCommand||!this.forceAllPairsUniformStore||!r.pointsNumber)return;this.forceAllPairsUniformStore.setUniforms({forceCollisionAllPairsUniforms:{pointsTextureSize:i.pointsTextureSize??0,pointsNumber:r.pointsNumber,collisionStrength:o.simulationCollision??0,collisionRadius:o.simulationCollisionRadius??0,collisionPadding:o.simulationCollisionPadding??0,maxRadius:this.maxRadius,alpha:i.alpha,collisionCooling:o.simulationCollisionCooling??0}}),this.forceAllPairsCommand.setBindings({positionsTexture:n.previousPositionTexture,sizeTexture:this.sizeTexture,exitTexture:n.exitTexture});let s=e.beginRenderPass({framebuffer:n.velocityFbo,clearColor:[0,0,0,0]});this.forceAllPairsCommand.draw(s),s.end()}drawSlots(){let{device:e,store:i,data:r,points:n,config:o}=this;if(!n||!n.previousPositionTexture||!n.exitTexture||!n.velocityFbo||!this.sizeTexture||!this.peelCommand||!this.peelUniformStore||!this.forceSlotsCommand||!this.forceSlotsUniformStore||!this.pointIndices||!r.pointsNumber||this.peelTargets.length!==yn||!this.slotsArrayTexture||this.slotsArrayTexture.destroyed||!this.gridSize||!this.slotCount)return;let s=1/this.cellSize,a=P1(this.tick++),l=i.getRandomFloat(0,1);this.peelCommand.setVertexCount(r.pointsNumber);for(let u=0;u<this.slotCount;u+=1){let d=this.peelTargets[u%yn],h=this.peelTargets[(u+1)%yn];if(!d||d.fbo.destroyed||!h||h.texture.destroyed)continue;this.peelUniformStore.setUniforms({buildNearFieldSlotsUniforms:{pointsTextureSize:i.pointsTextureSize??0,levelGridSize:this.gridSize,hasPreviousSlot:u===0?0:1,randomSeed:l,cellsPerUnit:s,rotationSeed:a,collisionOrigin:i.worldOrigin}}),this.peelCommand.setBindings({positionsTexture:n.previousPositionTexture,exitTexture:n.exitTexture,previousSlot:u===0?n.previousPositionTexture:h.texture});let f=e.beginRenderPass({framebuffer:d.fbo,clearColor:[-1,1,0,0],clearDepth:1});this.peelCommand.draw(f),f.end();let g=e.createCommandEncoder();g.copyTextureToTexture({sourceTexture:d.texture,destinationTexture:this.slotsArrayTexture,destinationOrigin:[0,0,u],width:this.gridSize,height:this.gridSize}),e.submit(g.finish())}this.forceSlotsUniformStore.setUniforms({forceCollisionSlotsUniforms:{pointsTextureSize:i.pointsTextureSize??0,gridSize:this.gridSize,slotCount:this.slotCount,collisionStrength:o.simulationCollision??0,collisionRadius:o.simulationCollisionRadius??0,collisionPadding:o.simulationCollisionPadding??0,alpha:i.alpha,collisionCooling:o.simulationCollisionCooling??0,cellsPerUnit:s,rotationSeed:a,collisionOrigin:i.worldOrigin}}),this.forceSlotsCommand.setBindings({positionsTexture:n.previousPositionTexture,sizeTexture:this.sizeTexture,exitTexture:n.exitTexture,slotsTexture:this.slotsArrayTexture});let c=e.beginRenderPass({framebuffer:n.velocityFbo,clearColor:[0,0,0,0]});this.forceSlotsCommand.draw(c),c.end()}createSlotTargets(){let{device:e}=this,i=h0(this.data.pointsNumber??0),r=this.peelTargets[0];if(!(r&&!r.texture.destroyed&&r.texture.width===this.gridSize&&r.texture.height===this.gridSize&&this.peelTargets.length===yn&&this.slotsArrayTexture&&!this.slotsArrayTexture.destroyed&&this.slotCount===i)){this.destroySlotTargets(),this.slotCount=i;for(let n=0;n<yn;n+=1){let o=e.createTexture({width:this.gridSize,height:this.gridSize,format:"rg32float",usage:F.SAMPLE|F.RENDER|F.COPY_SRC}),s=e.createFramebuffer({width:this.gridSize,height:this.gridSize,colorAttachments:[o],depthStencilAttachment:"depth24plus"});this.peelTargets.push({texture:o,fbo:s})}this.slotsArrayTexture=e.createTexture({dimension:"2d-array",width:this.gridSize,height:this.gridSize,depth:i,format:"rg32float",usage:F.SAMPLE|F.COPY_DST})}}destroySlotTargets(){for(let e of this.peelTargets)e.fbo.destroyed||e.fbo.destroy();for(let e of this.peelTargets)e.texture.destroyed||e.texture.destroy();this.peelTargets=[],this.slotsArrayTexture&&!this.slotsArrayTexture.destroyed&&this.slotsArrayTexture.destroy(),this.slotsArrayTexture=void 0,this.slotCount=0}},R1=`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceGravityUniforms {
  float gravity;
  vec2 worldOrigin;
  float alpha;
} forceGravity;

#define gravity forceGravity.gravity
#define worldOrigin forceGravity.worldOrigin
#define alpha forceGravity.alpha
#else
uniform float gravity;
uniform vec2 worldOrigin;
uniform float alpha;
#endif

out vec4 fragColor;

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);

  vec4 velocity = vec4(0.0);

  // A linear spring toward the fixed world origin (the centre of the space)
  vec2 distVector = worldOrigin - pointPosition.rg;
  float dist = sqrt(dot(distVector, distVector));
  if (dist > 0.0) {
    float angle = atan(distVector.y, distVector.x);
    float additionalVelocity = alpha * gravity * dist * 0.1;
    velocity.rg += additionalVelocity * vec2(cos(angle), sin(angle));
  }

  fragColor = velocity;
}`,Bu=class extends Ze{initPrograms(){let{device:e,points:i,store:r}=this;!i||!r.pointsTextureSize||(this.vertexCoordBuffer||(this.vertexCoordBuffer=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.uniformStore||(this.uniformStore=new Q(e,{forceGravityUniforms:{uniformTypes:{gravity:"f32",worldOrigin:"vec2<f32>",alpha:"f32"}}})),this.runCommand||(this.runCommand=new J(e,{fs:R1,vs:ve,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.vertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceGravityUniforms:this.uniformStore.getManagedUniformBuffer("forceGravityUniforms")},parameters:ie})))}run(){let{device:e,points:i,store:r}=this;if(!i||!this.runCommand||!this.uniformStore||!i.previousPositionTexture||i.previousPositionTexture.destroyed||!i.velocityFbo||i.velocityFbo.destroyed)return;this.uniformStore.setUniforms({forceGravityUniforms:{gravity:this.config.simulationGravity,worldOrigin:r.worldOrigin,alpha:r.alpha}}),this.runCommand.setBindings({positionsTexture:i.previousPositionTexture});let n=e.beginRenderPass({framebuffer:i.velocityFbo,clearColor:[0,0,0,0]});this.runCommand.draw(n),n.end()}destroy(){var e,i;(e=this.runCommand)==null||e.destroy(),this.runCommand=void 0,(i=this.uniformStore)==null||i.destroy(),this.uniformStore=void 0,this.vertexCoordBuffer&&!this.vertexCoordBuffer.destroyed&&this.vertexCoordBuffer.destroy(),this.vertexCoordBuffer=void 0}};function k1(t){return`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;
uniform sampler2D exitTexture;
uniform sampler2D linkInfoTexture; // Texture storing first link indices and amount
uniform sampler2D linkIndicesTexture;
uniform sampler2D linkPropertiesTexture; // Texture storing link bias and strength
uniform sampler2D linkRandomDistanceTexture;
// Resolved point sizes (r channel), laid out like the positions texture. Only
// read while useCollisionRadii is set; otherwise a placeholder is bound.
uniform sampler2D sizeTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceLinkUniforms {
  float linkSpring;
  float linkDistance;
  vec2 linkDistRandomVariationRange;
  float linksTextureSize;
  float alpha;
  float collisionRadius;   // > 0: one fixed radius for every point; 0: size / 2
  float collisionPadding;
  float useCollisionRadii; // 1 while collision is on: rest length >= contact distance
} forceLink;

#define linkSpring forceLink.linkSpring
#define linkDistance forceLink.linkDistance
#define linkDistRandomVariationRange forceLink.linkDistRandomVariationRange
#define linksTextureSize forceLink.linksTextureSize
#define alpha forceLink.alpha
#define collisionRadius forceLink.collisionRadius
#define collisionPadding forceLink.collisionPadding
#define useCollisionRadii forceLink.useCollisionRadii
#else
uniform float linkSpring;
uniform float linkDistance;
uniform vec2 linkDistRandomVariationRange;
uniform float linksTextureSize;
uniform float alpha;
uniform float collisionRadius;
uniform float collisionPadding;
uniform float useCollisionRadii;
#endif

out vec4 fragColor;

const float MAX_LINKS = ${t}.0;

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec4 velocity = vec4(0.0);

  // This point's collision radius, for the rest-length floor below.
  float selfRadius = 0.0;
  if (useCollisionRadii > 0.5) {
    float selfSize = texelFetch(sizeTexture, pointTexel, 0).r;
    selfRadius = (collisionRadius > 0.0 ? collisionRadius : selfSize * 0.5) + collisionPadding;
  }

  vec4 linkInfo = texelFetch(linkInfoTexture, pointTexel, 0);
  float iCount = linkInfo.r;
  float jCount = linkInfo.g;
  float linkAmount = linkInfo.b;
  if (linkAmount > 0.0) {
    for (float i = 0.0; i < MAX_LINKS; i += 1.0) {
      if (i < linkAmount) {
        if (iCount >= linksTextureSize) {
          iCount = 0.0;
          jCount += 1.0;
        }
        ivec2 linkTexel = ivec2(iCount, jCount);
        vec4 connectedPointIndex = texelFetch(linkIndicesTexture, linkTexel, 0);
        vec4 biasAndStrength = texelFetch(linkPropertiesTexture, linkTexel, 0);
        vec4 randomMinDistance = texelFetch(linkRandomDistanceTexture, linkTexel, 0);
        float bias = biasAndStrength.r;
        float strength = biasAndStrength.g;
        float randomMinLinkDist = randomMinDistance.r * (linkDistRandomVariationRange.g - linkDistRandomVariationRange.r) + linkDistRandomVariationRange.r;
        randomMinLinkDist *= linkDistance;

        iCount += 1.0;

        // linkIndicesTexture stores whole texel coordinates, so truncating is exact.
        ivec2 connectedTexel = ivec2(connectedPointIndex.rg);

        // Skip a link to an absent point \u2014 its position would poison the spring
        // force. (exit.G = current absence)
        vec4 connectedExit = texelFetch(exitTexture, connectedTexel, 0);
        if (connectedExit.g > 0.5) {
          continue;
        }

        // While collision is on, a spring must never ask for less than the
        // contact distance: a rest length inside the two radii pulls the pair
        // into overlap every tick, and the two forces settle wherever they
        // balance \u2014 a guaranteed partial overlap. Lifting the rest length to the
        // contact distance removes the fight instead of relying on collision to
        // win it; collision then only cleans up transients.
        if (useCollisionRadii > 0.5) {
          float otherSize = texelFetch(sizeTexture, connectedTexel, 0).r;
          float otherRadius = (collisionRadius > 0.0 ? collisionRadius : otherSize * 0.5) + collisionPadding;
          randomMinLinkDist = max(randomMinLinkDist, selfRadius + otherRadius);
        }

        vec4 connectedPointPosition = texelFetch(positionsTexture, connectedTexel, 0);
        float x = connectedPointPosition.x - (pointPosition.x + velocity.x);
        float y = connectedPointPosition.y - (pointPosition.y + velocity.y);
        float l = sqrt(x * x + y * y);

        // Apply the link force
        l = max(l, randomMinLinkDist * 0.99);
        l = (l - randomMinLinkDist) / l;
        l *= linkSpring * alpha;
        l *= strength;
        l *= bias;
        x *= l;
        y *= l;
        velocity.x += x;
        velocity.y += y;
      }
    }
  }

  fragColor = vec4(velocity.rg, 0.0, 0.0);
}
  `}var Ou=(t=>(t.OUTGOING="outgoing",t.INCOMING="incoming",t))(Ou||{}),Os=class extends Ze{constructor(){super(...arguments),this.linkFirstIndicesAndAmount=new Float32Array,this.indices=new Float32Array,this.maxPointDegree=0}create(e){var i,r,n,o;let{device:s,store:{pointsTextureSize:a,linksTextureSize:l},data:c}=this;if(!a||!l)return;this.linkFirstIndicesAndAmount=new Float32Array(a*a*4),this.indices=new Float32Array(l*l*4);let u=new Float32Array(l*l*4),d=new Float32Array(l*l*4),h=e==="incoming"?c.linksBySource:c.linksByTarget;if(this.maxPointDegree=0,h){let{offsets:x,neighbors:b,linkIndices:v}=h;for(let R=0;R<x.length-1;R++){let P=x[R],y=x[R+1],T=y-P;if(T!==0){this.linkFirstIndicesAndAmount[R*4+0]=P%l,this.linkFirstIndicesAndAmount[R*4+1]=Math.floor(P/l),this.linkFirstIndicesAndAmount[R*4+2]=T;for(let C=P;C<y;C++){let k=b[C],U=v[C];this.indices[C*4+0]=k%a,this.indices[C*4+1]=Math.floor(k/a);let z=((i=c.degree)==null?void 0:i[k])??0,H=((r=c.degree)==null?void 0:r[R])??0,X=z+H,B=X!==0?z/X:.5,Z=Math.min(z,H),S=(n=c.linkStrength)==null?void 0:n[U];(S===void 0||!Number.isFinite(S)||S<0)&&(S=1/Math.max(Z,1)),S=Math.sqrt(S),u[C*4+0]=B,u[C*4+1]=S,d[C*4]=this.store.getRandomFloat(0,1)}this.maxPointDegree=Math.max(this.maxPointDegree,T)}}}let f=!this.linkFirstIndicesAndAmountTexture||this.linkFirstIndicesAndAmountTexture.width!==a||this.linkFirstIndicesAndAmountTexture.height!==a,g=!this.indicesTexture||this.indicesTexture.width!==l||this.indicesTexture.height!==l;f&&(this.linkFirstIndicesAndAmountTexture&&!this.linkFirstIndicesAndAmountTexture.destroyed&&this.linkFirstIndicesAndAmountTexture.destroy(),this.linkFirstIndicesAndAmountTexture=s.createTexture({width:a,height:a,format:"rgba32float",usage:F.SAMPLE|F.COPY_DST})),this.linkFirstIndicesAndAmountTexture.copyImageData({data:this.linkFirstIndicesAndAmount,bytesPerRow:K("rgba32float",a),mipLevel:0,x:0,y:0}),g&&(this.indicesTexture&&!this.indicesTexture.destroyed&&this.indicesTexture.destroy(),this.biasAndStrengthTexture&&!this.biasAndStrengthTexture.destroyed&&this.biasAndStrengthTexture.destroy(),this.randomDistanceTexture&&!this.randomDistanceTexture.destroyed&&this.randomDistanceTexture.destroy(),this.indicesTexture=s.createTexture({width:l,height:l,format:"rgba32float",usage:F.SAMPLE|F.COPY_DST}),this.biasAndStrengthTexture=s.createTexture({width:l,height:l,format:"rgba32float",usage:F.SAMPLE|F.COPY_DST}),this.randomDistanceTexture=s.createTexture({width:l,height:l,format:"rgba32float",usage:F.SAMPLE|F.COPY_DST})),this.indicesTexture.copyImageData({data:this.indices,bytesPerRow:K("rgba32float",l),mipLevel:0,x:0,y:0}),this.biasAndStrengthTexture.copyImageData({data:u,bytesPerRow:K("rgba32float",l),mipLevel:0,x:0,y:0}),this.randomDistanceTexture.copyImageData({data:d,bytesPerRow:K("rgba32float",l),mipLevel:0,x:0,y:0}),this.previousMaxPointDegree!==void 0&&this.previousMaxPointDegree!==this.maxPointDegree&&((o=this.runCommand)==null||o.destroy(),this.runCommand=void 0),this.previousMaxPointDegree=this.maxPointDegree,this.previousPointsTextureSize=a,this.previousLinksTextureSize=l}initPrograms(){let{device:e,store:i,points:r}=this;!r||!i.pointsTextureSize||!i.linksTextureSize||!this.linkFirstIndicesAndAmountTexture||!this.indicesTexture||!this.biasAndStrengthTexture||!this.randomDistanceTexture||(this.vertexCoordBuffer||(this.vertexCoordBuffer=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.uniformStore||(this.uniformStore=new Q(e,{forceLinkUniforms:{uniformTypes:{linkSpring:"f32",linkDistance:"f32",linkDistRandomVariationRange:"vec2<f32>",linksTextureSize:"f32",alpha:"f32",collisionRadius:"f32",collisionPadding:"f32",useCollisionRadii:"f32"}}})),this.runCommand||(this.runCommand=new J(e,{fs:k1(this.maxPointDegree),vs:ve,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.vertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceLinkUniforms:this.uniformStore.getManagedUniformBuffer("forceLinkUniforms")},parameters:ie})))}run(e){let{device:i,store:r,points:n,config:o}=this;if(!n||!this.runCommand||!this.uniformStore||!n.previousPositionTexture||n.previousPositionTexture.destroyed||!n.exitTexture||n.exitTexture.destroyed||!this.linkFirstIndicesAndAmountTexture||!this.indicesTexture||!this.biasAndStrengthTexture||!this.randomDistanceTexture||!n.velocityFbo||n.velocityFbo.destroyed||r.pointsTextureSize!==this.previousPointsTextureSize||r.linksTextureSize!==this.previousLinksTextureSize)return;let s=(o.simulationCollision??0)>0&&e!==void 0&&!e.destroyed;this.uniformStore.setUniforms({forceLinkUniforms:{linkSpring:o.simulationLinkSpring,linkDistance:o.simulationLinkDistance,linkDistRandomVariationRange:oe(o.simulationLinkDistRandomVariationRange,[0,0]),linksTextureSize:r.linksTextureSize,alpha:r.alpha,collisionRadius:o.simulationCollisionRadius??0,collisionPadding:o.simulationCollisionPadding??0,useCollisionRadii:s?1:0}}),this.runCommand.setBindings({positionsTexture:n.previousPositionTexture,exitTexture:n.exitTexture,linkInfoTexture:this.linkFirstIndicesAndAmountTexture,linkIndicesTexture:this.indicesTexture,linkPropertiesTexture:this.biasAndStrengthTexture,linkRandomDistanceTexture:this.randomDistanceTexture,sizeTexture:s?e:n.previousPositionTexture});let a=i.beginRenderPass({framebuffer:n.velocityFbo,clearColor:[0,0,0,0]});this.runCommand.draw(a),a.end()}destroy(){var e,i;(e=this.runCommand)==null||e.destroy(),this.runCommand=void 0,this.linkFirstIndicesAndAmountTexture&&!this.linkFirstIndicesAndAmountTexture.destroyed&&this.linkFirstIndicesAndAmountTexture.destroy(),this.linkFirstIndicesAndAmountTexture=void 0,this.indicesTexture&&!this.indicesTexture.destroyed&&this.indicesTexture.destroy(),this.indicesTexture=void 0,this.biasAndStrengthTexture&&!this.biasAndStrengthTexture.destroyed&&this.biasAndStrengthTexture.destroy(),this.biasAndStrengthTexture=void 0,this.randomDistanceTexture&&!this.randomDistanceTexture.destroyed&&this.randomDistanceTexture.destroy(),this.randomDistanceTexture=void 0,(i=this.uniformStore)==null||i.destroy(),this.uniformStore=void 0,this.vertexCoordBuffer&&!this.vertexCoordBuffer.destroyed&&this.vertexCoordBuffer.destroy(),this.vertexCoordBuffer=void 0}},E1=`#version 300 es
precision highp float;

in vec4 vColor;
out vec4 fragColor;

void main() {
  fragColor = vColor;
}`,I1=`#version 300 es
precision highp float;

// Aggregates each point into its grid cell. A level is a plain 2D grid of
// \`levelGridSize\` cells per axis over this tick's data bounds, rendered one
// texel per cell; additive blending accumulates [sum(x), sum(y), count, 0] per
// cell via calculate-level.frag.

uniform sampler2D positionsTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform calculateLevelsPreciseUniforms {
  float levelGridSize;
} calculateLevelsPrecise;

#define levelGridSize calculateLevelsPrecise.levelGridSize
#else
uniform float levelGridSize;
#endif

// @grid-cell

in vec2 pointIndices;

out vec4 vColor;

void main() {
  vColor = vec4(0.0);

  ivec2 pointTexel = ivec2(pointIndices);

  // Absent points must not enter the grid \u2014 a NaN position bins to a NaN cell and
  // poisons the centermass that drives repulsion for every point. (exit.G = absent)
  vec4 exitStatus = texelFetch(exitTexture, pointTexel, 0);
  if (exitStatus.g > 0.5) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vColor = vec4(pointPosition.rg, 1.0, 0.0);

  // The shared cell formula (grid-cell.ts): the force shaders must bin every
  // point exactly as the aggregation does, or it falls out of the level
  // decomposition's exactly-once coverage.
  ivec2 cell = gridCell(pointPosition.rg, levelGridSize);

  vec2 levelPosition = 2.0 * (vec2(cell) + 0.5) / levelGridSize - 1.0;
  gl_Position = vec4(levelPosition, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`,D1=`#version 300 es
precision highp float;

// One grid level of precise many-body repulsion (Barnes-Hut-style approximation).
//
// Levels are 2D grids of increasing resolution (8\xB2, 16\xB2, \u2026) holding
// [sum(x), sum(y), count, 0] per cell. The decomposition tiles space exactly
// once across the level passes: after level L the only un-accumulated region is
// a shell of Chebyshev radius r around the point's cell \u2014 5\xD75 or 3\xD73 on every
// level but the finest by simulationRepulsionQuality, 3\xD73 there (getShellRadius
// in index.ts) \u2014 which the next level
// refines as its aligned (4r+2)\xB2 child block, and which force-nearfield.frag
// finally covers at the finest level. Every level divides this tick's data
// bounds (grid-cell.ts), not the space, shifted by a fresh random offset every
// tick so the boundaries where that split changes never stay on one line
// (ForceManyBody's class doc).

uniform sampler2D positionsTexture;
uniform sampler2D levelTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceLevelPreciseUniforms {
  float levelGridSize;
  float isFirstLevel;
  float alpha;
  float repulsion;
  float shellRadius;
  float parentShellRadius;
} forceLevelPrecise;

#define levelGridSize forceLevelPrecise.levelGridSize
#define isFirstLevel forceLevelPrecise.isFirstLevel
#define alpha forceLevelPrecise.alpha
#define repulsion forceLevelPrecise.repulsion
#define shellRadius forceLevelPrecise.shellRadius
#define parentShellRadius forceLevelPrecise.parentShellRadius
#else
uniform float levelGridSize;
uniform float isFirstLevel;
uniform float alpha;
uniform float repulsion;
// Chebyshev radius of the shell this level leaves to the next (2 = 5\xD75,
// 1 = 3\xD73), and the radius the coarser level left, which sizes the child block
// refined here (0 on the coarsest level, which has no parent).
uniform float shellRadius;
uniform float parentShellRadius;
#endif

// @grid-cell

out vec4 fragColor;

// Repulsion from one cell's center of mass \u2014 a d3-style clamped
// inverse-distance falloff.
vec2 cellVelocity(ivec2 cell, vec2 position) {
  vec4 centermass = texelFetch(levelTexture, cell, 0);
  // Count-only guard: zero coordinate sums are legitimate, but dividing by a zero
  // count would produce NaN that additive blending propagates into the velocity FBO.
  if (centermass.b <= 0.0) return vec2(0.0);
  vec2 centermassPosition = centermass.rg / centermass.b;
  vec2 distVector = position - centermassPosition;
  float l = dot(distVector, distVector);
  if (l <= 0.0) return vec2(0.0);
  float distanceMin2 = 1.0;
  if (l < distanceMin2) l = sqrt(distanceMin2 * l);
  float addV = alpha * repulsion * centermass.b / sqrt(l);
  return addV * normalize(distVector);
}

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec2 position = pointPosition.rg;

  int gridSize = int(levelGridSize);
  // The aggregation shader's cell formula (grid-cell.ts), shared exactly.
  ivec2 pointCell = gridCell(position, levelGridSize);

  vec2 velocity = vec2(0.0);

  // The shell is the cells left to the next level. A centroid is only ever used
  // from outside it, so from at least shellRadius cells away.
  int shell = int(shellRadius);
  if (isFirstLevel > 0.5) {
    // Coarsest level: every cell except the shell, which finer levels refine.
    for (int j = 0; j < gridSize; j += 1) {
      for (int i = 0; i < gridSize; i += 1) {
        ivec2 cell = ivec2(i, j);
        ivec2 cellDist = abs(cell - pointCell);
        if (max(cellDist.x, cellDist.y) <= shell) continue;
        velocity += cellVelocity(cell, position);
      }
    }
  } else {
    // The coarser level left its (2r+1)\xB2 shell unhandled; those cells refine to
    // the aligned (4r+2)\xB2 child block at this level. Sample it minus this
    // level's own shell (always strictly inside the block).
    int parentShell = int(parentShellRadius);
    int blockSize = 2 * (2 * parentShell + 1);
    ivec2 base = (pointCell / 2) * 2 - 2 * parentShell;
    for (int j = 0; j < blockSize; j += 1) {
      for (int i = 0; i < blockSize; i += 1) {
        ivec2 cell = base + ivec2(i, j);
        // Bounds check must precede texelFetch (out-of-range fetches are undefined).
        if (any(lessThan(cell, ivec2(0))) || any(greaterThanEqual(cell, ivec2(gridSize)))) continue;
        ivec2 cellDist = abs(cell - pointCell);
        if (max(cellDist.x, cellDist.y) <= shell) continue;
        velocity += cellVelocity(cell, position);
      }
    }
  }

  fragColor = vec4(velocity, 0.0, 0.0);
}
`,F1=`#version 300 es
precision highp float;
// Fragment shaders default int to mediump, guaranteed only to 32767 \u2014
// point indices go far higher.
precision highp int;

// Near-field pass of the precise grid repulsion (P3M-style). After the finest
// level pass, the only un-accumulated region is the 3\xD73 neighborhood of the
// point's cell.
//
// Cell centroids exert a purely radial force there, which flattens dense hubs
// into disks and petals \u2014 even as a residual for unsampled mass, the centroid
// bias dominates (tangential repulsion scaled by ~K/n never spreads a dense
// clump before alpha decays). So the near field is a pure Monte-Carlo estimator
// instead: the K depth-peeled points of a cell are a uniform random subset
// (re-drawn every tick by build-nearfield-slots.vert), and weighting each
// sampled pairwise force by count/sampled makes the expected force equal the
// exact all-pairs sum \u2014 unbiased, no centroid term. Cells holding \u2264 K points
// are sampled exhaustively, so their forces are exact. The per-tick sampling
// noise acts as annealed jitter: it shrinks with alpha and is precisely what
// breaks clumps apart. The point itself is excluded from both the sample and
// the count.

uniform sampler2D positionsTexture;
uniform sampler2D levelTexture;
uniform sampler2D randomValues;
// The near-field slots live in two array textures (one layer per depth-peeling
// pass), so the slot count is a runtime uniform instead of a hard-wired list
// of sampler2Ds: even slots in one array, odd slots in the other, slot s at
// layer s / 2 (see NearFieldSlots in index.ts). Float data \u2014 highp, the
// default sampler precision is lowp.
uniform highp sampler2DArray slotsEven;
uniform highp sampler2DArray slotsOdd;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceNearFieldUniforms {
  float pointsTextureSize;
  float levelGridSize;
  float maxStep;
  float alpha;
  float repulsion;
  float slotCount;
} forceNearField;

#define pointsTextureSize forceNearField.pointsTextureSize
#define levelGridSize forceNearField.levelGridSize
#define maxStep forceNearField.maxStep
#define alpha forceNearField.alpha
#define repulsion forceNearField.repulsion
#define slotCount forceNearField.slotCount
#else
uniform float pointsTextureSize;
uniform float levelGridSize;
uniform float maxStep;
uniform float alpha;
uniform float repulsion;
uniform float slotCount;
#endif

// @grid-cell

out vec4 fragColor;

// Same clamped inverse-distance falloff as the level passes (must stay identical).
vec2 pairwiseVelocity(vec2 position, vec2 otherPosition, vec2 randomDir) {
  vec2 distVector = position - otherPosition;
  float l = dot(distVector, distVector);
  if (l <= 0.0) {
    // Exactly coincident points have no separation direction, so an inverse-distance
    // force is undefined and they would stay stacked forever \u2014 a stack's cell count
    // then repels everything around it, carving a void ring. Kick along this point's
    // random vector instead (each point has a different one, so a pile disperses).
    distVector = randomDir;
    l = dot(distVector, distVector);
    if (l <= 0.0) return vec2(0.0);
  }
  float distanceMin2 = 1.0;
  if (l < distanceMin2) l = sqrt(distanceMin2 * l);
  float addV = alpha * repulsion / sqrt(l);
  return addV * normalize(distVector);
}

// One peeled slot of a cell: the unweighted pairwise force from the sampled
// point, counting it toward the sample size. Empty slots and the point itself
// contribute nothing.
vec2 slotVelocity(vec2 slot, vec2 position, float selfIndex, vec2 randomDir, inout float sampled) {
  float index = slot.x;
  // Skip empty slots (index -1) and the point itself. This exact \`==\` \u2014 and the
  // texel math just below \u2014 count on a point index fitting exactly in a float,
  // which only holds for whole numbers up to ~16.7M (2^24). That's every
  // realistic graph; you'd need a points texture bigger than 4096\xB2 to get there.
  // Past that, indices start rounding, so a point could sample the wrong texel or
  // fail to skip itself \u2014 but you'd hit memory limits long before it matters.
  if (index < 0.0 || index == selfIndex) return vec2(0.0);
  int size = int(pointsTextureSize);
  int i = int(index);
  vec4 other = texelFetch(positionsTexture, ivec2(i % size, i / size), 0);
  sampled += 1.0;
  return pairwiseVelocity(position, other.rg, randomDir);
}

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec2 position = pointPosition.rg;
  // One fragment per point: the fragment's pixel is the point's texel.
  float selfIndex = floor(gl_FragCoord.y) * pointsTextureSize + floor(gl_FragCoord.x);
  vec4 random = texelFetch(randomValues, pointTexel, 0);

  int gridSize = int(levelGridSize);
  ivec2 pointCell = gridCell(position, levelGridSize);

  vec2 velocity = vec2(0.0);

  for (int j = -1; j <= 1; j += 1) {
    for (int i = -1; i <= 1; i += 1) {
      ivec2 cell = pointCell + ivec2(i, j);
      if (any(lessThan(cell, ivec2(0))) || any(greaterThanEqual(cell, ivec2(gridSize)))) continue;

      // [sum(x), sum(y), count, 0] \u2014 only the count is used here.
      vec4 aggregate = texelFetch(levelTexture, cell, 0);
      // The count never includes the point itself in the estimate.
      bool ownCell = (i == 0 && j == 0);
      float others = aggregate.b - (ownCell ? 1.0 : 0.0);
      if (others <= 0.0) continue;

      vec2 pairSum = vec2(0.0);
      float sampled = 0.0;
      // One layer per depth-peeling pass. An exhausted cell peels empty slots
      // (index -1) for the remaining layers; the early break skips them \u2014
      // empty layers can't be followed by occupied ones within a cell.
      int slots = int(slotCount);
      for (int s = 0; s < slots; s += 1) {
        ivec3 layer = ivec3(cell, s >> 1);
        vec2 slot = (s & 1) == 0 ? texelFetch(slotsEven, layer, 0).rg : texelFetch(slotsOdd, layer, 0).rg;
        if (slot.x < 0.0) break;
        pairSum += slotVelocity(slot, position, selfIndex, random.rg, sampled);
      }

      // Horvitz\u2013Thompson weighting: the sample is uniform among the cell's
      // other points (conditioned on whether the point itself was peeled),
      // so scaling by others/sampled gives E[force] = exact all-pairs sum.
      // Exhaustively peeled cells (others == sampled) are exact. The
      // conditioning needs a sampled other whenever the cell has one, which
      // two or more slots guarantee (MIN_REPULSION_SAMPLES): a single slot can
      // hold the point itself, and skipping that tick would bias the sum low.
      if (sampled > 0.0) velocity += (others / sampled) * pairSum;
    }
  }

  // Random jitter proportional to the velocity, to keep points from sticking.
  velocity += velocity * random.rg;

  // Bound the per-tick kick to a fixed length. The estimator is unbiased
  // but high-variance: in a cell holding far more points than sampled slots, the
  // count/sampled weight can turn a few close samples into a huge one-tick kick.
  // Unbounded, that flings points across the screen at startup and \u2014 because the
  // weight is largest where density is highest \u2014 ejects points from dense cluster
  // centers, leaving voids. Clamping the magnitude keeps the spreading direction
  // while capping the fling; genuine spreading kicks are far below this bound and
  // pass through untouched. The far-field grid levels still drive bulk expansion.
  //
  // maxStep is 2 \xD7 spaceSize / the finest grid size (getMaxStep, index.ts), not
  // 2 \xD7 this tick's cell: the grid follows the data, and a cell-relative
  // bound would tighten as a layout contracts \u2014 throttling the kicks that break
  // dense clumps apart exactly when they are needed \u2014 and would stop matching
  // the all-pairs pass's bound, which keeps the dynamics continuous across the
  // point-count threshold between the two paths.
  float speed = length(velocity);
  if (speed > maxStep) velocity *= maxStep / speed;

  fragColor = vec4(velocity, 0.0, 0.0);
}
`,M1=`#version 300 es
precision highp float;
// Fragment shaders default int to mediump, guaranteed only to 32767 \u2014
// point indices go far higher.
precision highp int;

// Exact all-pairs repulsion for small graphs. One fragment per point, looping
// over every other point \u2014 O(n\xB2) total, but below the brute-force threshold a
// single pass is both cheaper than the grid pyramid's sequential depth-peeling
// passes and exact at any cell occupancy: no Monte-Carlo sampling, hence none
// of the per-tick re-sampling noise that shows up as shimmer in dense layouts
// (see force-nearfield.frag for the sampled path used above the threshold).

uniform sampler2D positionsTexture;
uniform sampler2D randomValues;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceAllPairsUniforms {
  float pointsTextureSize;
  float pointsNumber;
  float alpha;
  float repulsion;
  float maxStep;
} forceAllPairs;

#define pointsTextureSize forceAllPairs.pointsTextureSize
#define pointsNumber forceAllPairs.pointsNumber
#define alpha forceAllPairs.alpha
#define repulsion forceAllPairs.repulsion
#define maxStep forceAllPairs.maxStep
#else
uniform float pointsTextureSize;
uniform float pointsNumber;
uniform float alpha;
uniform float repulsion;
uniform float maxStep;
#endif

out vec4 fragColor;

// Same clamped inverse-distance falloff as the grid-path shaders (must stay identical).
vec2 pairwiseVelocity(vec2 position, vec2 otherPosition, vec2 randomDir) {
  vec2 distVector = position - otherPosition;
  float l = dot(distVector, distVector);
  if (l <= 0.0) {
    // Exactly coincident points have no separation direction, so an
    // inverse-distance force is undefined and they would stay stacked forever.
    // Kick along this point's random vector instead (each point has a
    // different one, so a pile disperses).
    distVector = randomDir;
    l = dot(distVector, distVector);
    if (l <= 0.0) return vec2(0.0);
  }
  float distanceMin2 = 1.0;
  if (l < distanceMin2) l = sqrt(distanceMin2 * l);
  float addV = alpha * repulsion / sqrt(l);
  return addV * normalize(distVector);
}

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);
  int size = int(pointsTextureSize);
  int selfIndex = pointTexel.y * size + pointTexel.x;
  int count = int(pointsNumber);

  // Fragments beyond the point count are unused texture pixels.
  if (selfIndex >= count) {
    fragColor = vec4(0.0);
    return;
  }

  // An absent point must neither move nor repel (its position is NaN).
  vec4 selfExit = texelFetch(exitTexture, pointTexel, 0);
  if (selfExit.g > 0.5) {
    fragColor = vec4(0.0);
    return;
  }

  vec2 position = texelFetch(positionsTexture, pointTexel, 0).rg;
  vec4 random = texelFetch(randomValues, pointTexel, 0);

  // Pairs are split at maxStep (getMaxStep in index.ts): 2 \xD7 the finest cell
  // of a layout spanning the space at this point count, the fixed length the
  // grid path's near-field pass bounds its kick with. Closer pairs are treated
  // the way that pass treats its sum \u2014 jittered and bounded below \u2014 farther
  // pairs the way its level passes are, unbounded. Sharing that length keeps
  // the dynamics continuous across the point-count threshold between the two
  // paths.
  vec2 nearVelocity = vec2(0.0);
  vec2 farVelocity = vec2(0.0);
  float nearRadius2 = maxStep * maxStep;
  for (int i = 0; i < count; i += 1) {
    if (i == selfIndex) continue;
    ivec2 texel = ivec2(i % size, i / size);
    if (texelFetch(exitTexture, texel, 0).g > 0.5) continue;
    vec2 otherPosition = texelFetch(positionsTexture, texel, 0).rg;
    vec2 distVector = position - otherPosition;
    vec2 pairVelocity = pairwiseVelocity(position, otherPosition, random.rg);
    if (dot(distVector, distVector) < nearRadius2) nearVelocity += pairVelocity;
    else farVelocity += pairVelocity;
  }

  // Random jitter proportional to the near velocity, to keep points from
  // sticking (same as the near-field pass).
  nearVelocity += nearVelocity * random.rg;

  // Bound the per-tick near kick. Exactness alone does not bound it: the
  // falloff still diverges at near-zero separations, and a coincident stack
  // sums n\u22121 same-direction random kicks into one fling. The clamp caps the
  // magnitude and keeps the direction.
  float speed = length(nearVelocity);
  if (speed > maxStep) nearVelocity *= maxStep / speed;

  fragColor = vec4(farVelocity + nearVelocity, 0.0, 0.0);
}
`,N1=`#version 300 es
precision highp float;
precision highp int;
// @min-auto-slots

// Finest-cell occupancy statistics for the near-field sample count. The
// finest level texture holds [sum(x), sum(y), count, \u2026] per cell; this pass
// reduces its count channel over blocks of cells, one fragment per block, into
// [points, points in cells of more than MIN_AUTO_SLOTS, twice and four times it].
// A point in a cell fuller than the sample count is sampled rather than listed,
// and its force jitters from tick to tick; the CPU sums the blocks and picks the
// smallest count that leaves few enough points so (getWantedSlotCount). The
// thresholds are the automatic counts below the ceiling of 64: MIN_AUTO_SLOTS,
// defined from index.ts at the marker above, and its doublings. One pass over 512\xB2 cells into 16\xB2 blocks is
// 1024 fetches per fragment, well under a tenth of a millisecond.

uniform sampler2D levelTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform occupancyUniforms {
  float levelTextureWidth;
  float levelTextureHeight;
  float blockWidth;
  float blockHeight;
} occupancy;

#define levelTextureWidth occupancy.levelTextureWidth
#define levelTextureHeight occupancy.levelTextureHeight
#define blockWidth occupancy.blockWidth
#define blockHeight occupancy.blockHeight
#else
uniform float levelTextureWidth;
uniform float levelTextureHeight;
uniform float blockWidth;
uniform float blockHeight;
#endif

out vec4 fragColor;

void main() {
  ivec2 block = ivec2(gl_FragCoord.xy);
  ivec2 size = ivec2(levelTextureWidth, levelTextureHeight);
  ivec2 origin = block * ivec2(blockWidth, blockHeight);
  ivec2 end = min(origin + ivec2(blockWidth, blockHeight), size);

  vec4 points = vec4(0.0);
  for (int y = origin.y; y < end.y; y += 1) {
    for (int x = origin.x; x < end.x; x += 1) {
      float count = texelFetch(levelTexture, ivec2(x, y), 0).b;
      if (count <= 0.0) continue;
      // Counts are whole numbers: a step at n + 0.5 is "more than n"
      points += count * vec4(1.0, step(float(MIN_AUTO_SLOTS) + 0.5, count),
        step(float(MIN_AUTO_SLOTS * 2) + 0.5, count), step(float(MIN_AUTO_SLOTS * 4) + 0.5, count));
    }
  }

  fragColor = points;
}
`,vu="// @grid-cell",f0=`
// This tick's data bounds, one texel: [originX, originY, extent, 1 / extent]
// (DataBounds). Float data \u2014 highp, the default sampler precision is lowp.
uniform highp sampler2D dataBoundsTexture;

// The cell holding a world position on a level of cellsPerAxis\xB2 cells covering
// the data bounds. Positions outside the box clamp to the edge cells. No
// division: see grid-cell.ts for why every operation here is correctly rounded.
ivec2 gridCell(vec2 worldPosition, float cellsPerAxis) {
  vec4 dataBox = texelFetch(dataBoundsTexture, ivec2(0), 0);
  // Cells per world unit: the shared reciprocal times a power of two \u2014 exact.
  float cellsPerUnit = dataBox.w * cellsPerAxis;
  ivec2 lastCell = ivec2(int(cellsPerAxis) - 1);
  return clamp(ivec2(floor((worldPosition - dataBox.xy) * cellsPerUnit)), ivec2(0), lastCell);
}
`,B1=new Set(f0.replace(/\/\/.*$/gm,"").match(/\b[A-Za-z_]\w*\b/g));function Es(t){if(!t.includes(vu))throw new Error(`Shader is missing the "${vu}" marker for the shared grid-cell code`);for(let e of t.match(/^[ \t]*#define[ \t]+\w+/gm)??[]){let i=e.replace(/^[ \t]*#define[ \t]+/,"");if(B1.has(i))throw new Error(`Shader macro "${i}" collides with an identifier of the shared grid-cell code`)}return t.replace(vu,f0)}var O1=`#version 300 es
precision highp float;
// Fragment shaders default int to mediump, guaranteed only to 32767 \u2014 the
// point index below runs up to the point count.
precision highp int;

// First pass of the data-bounds reduction (see data-bounds.ts): every live
// point folded into a small grid of partial boxes, one per fragment. Each
// fragment strides through the point list (bucket b takes points b, b + B\xB2,
// b + 2\xB7B\xB2, \u2026), so the work splits evenly however the points are laid out in
// the texture or in space.

uniform sampler2D positionsTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform reduceBoundsBucketsUniforms {
  float pointsTextureSize;
  float pointsNumber;
  float bucketGridSize;
} reduceBoundsBuckets;

#define pointsTextureSize reduceBoundsBuckets.pointsTextureSize
#define pointsNumber reduceBoundsBuckets.pointsNumber
#define bucketGridSize reduceBoundsBuckets.bucketGridSize
#else
uniform float pointsTextureSize;
uniform float pointsNumber;
uniform float bucketGridSize;
#endif

// Larger than any coordinate a layout can usefully reach (float32 resolves
// nothing near the force kernel's 1-unit scale past ~1e7), small enough that
// the last pass's sums and differences of two such values stay finite.
const float BOUNDS_LIMIT = 1.0e30;

out vec4 bounds; // [minX, minY, maxX, maxY]

// A coordinate the box may include: finite and within BOUNDS_LIMIT. The
// infinity/NaN test reads the exponent bits rather than comparing: a compiler
// allowed to assume no NaNs may fold a comparison-based test away, and a
// single NaN taken into the box would make every cell index of the whole grid
// undefined.
bool isUsable(vec2 position) {
  uvec2 exponent = floatBitsToUint(position) & 0x7f800000u;
  if (any(equal(exponent, uvec2(0x7f800000u)))) return false;
  return all(lessThanEqual(abs(position), vec2(BOUNDS_LIMIT)));
}

void main() {
  int size = int(pointsTextureSize);
  int buckets = int(bucketGridSize);
  int count = int(pointsNumber);

  ivec2 bucket = ivec2(gl_FragCoord.xy);
  int stride = buckets * buckets;

  // An empty bucket stays neutral under the second pass's min/max.
  vec2 lo = vec2(BOUNDS_LIMIT);
  vec2 hi = vec2(-BOUNDS_LIMIT);

  for (int i = bucket.y * buckets + bucket.x; i < count; i += stride) {
    ivec2 texel = ivec2(i % size, i / size);

    // Absent points hold no live coordinate (NaN, or a stale last position).
    // Same guard as calculate-level.vert. (exit.G = absent)
    if (texelFetch(exitTexture, texel, 0).g > 0.5) continue;

    vec2 position = texelFetch(positionsTexture, texel, 0).rg;
    if (!isUsable(position)) continue;

    lo = min(lo, position);
    hi = max(hi, position);
  }

  bounds = vec4(lo, hi);
}
`,U1=`#version 300 es
precision highp float;
// Fragment shaders default int to mediump; keep the loop counters highp like
// the other two passes'.
precision highp int;

// Middle pass of the data-bounds reduction (see data-bounds.ts): each fragment
// folds one blockSize \xD7 blockSize block of the first pass's partial boxes into
// one, so the final pass's single fragment reads a handful of texels instead of
// every partial box in sequence.

uniform sampler2D partialsTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform reduceBoundsBlocksUniforms {
  float blockSize;
} reduceBoundsBlocks;

#define blockSize reduceBoundsBlocks.blockSize
#else
uniform float blockSize;
#endif

// The first pass's empty-bucket sentinel (must match reduce-bounds-buckets.frag).
const float BOUNDS_LIMIT = 1.0e30;

out vec4 bounds; // [minX, minY, maxX, maxY]

void main() {
  int size = int(blockSize);
  ivec2 first = ivec2(gl_FragCoord.xy) * size;

  // Empty partial boxes carry [+limit, +limit, -limit, -limit], neutral here.
  vec2 lo = vec2(BOUNDS_LIMIT);
  vec2 hi = vec2(-BOUNDS_LIMIT);
  for (int y = 0; y < size; y += 1) {
    for (int x = 0; x < size; x += 1) {
      vec4 partial = texelFetch(partialsTexture, first + ivec2(x, y), 0);
      lo = min(lo, partial.xy);
      hi = max(hi, partial.zw);
    }
  }

  bounds = vec4(lo, hi);
}
`,L1=`#version 300 es
precision highp float;
// Fragment shaders default int to mediump; keep the loop counters highp like
// the other two passes'.
precision highp int;

// Last pass of the data-bounds reduction (see data-bounds.ts): the middle
// pass's partial boxes folded into the one texel every consumer reads,
// [originX, originY, extent, 1 / extent] \u2014 a square of side \`extent\` whose
// lower-left corner is the origin. Optionally padded by one cell of the
// consumer's coarsest grid and shifted by the part of it the consumer asks for
// (DataBoundsRunOptions.originShift).

uniform sampler2D partialsTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform reduceBoundsFinalUniforms {
  float partialGridSize;
  float minExtent;
  float shiftCellsPerAxis;
  float shiftOffsetX;
  float shiftOffsetY;
} reduceBoundsFinal;

#define partialGridSize reduceBoundsFinal.partialGridSize
#define minExtent reduceBoundsFinal.minExtent
#define shiftCellsPerAxis reduceBoundsFinal.shiftCellsPerAxis
#define shiftOffsetX reduceBoundsFinal.shiftOffsetX
#define shiftOffsetY reduceBoundsFinal.shiftOffsetY
#else
uniform float partialGridSize;
uniform float minExtent;
// 0 = no shift: the box is fitted to the points.
uniform float shiftCellsPerAxis;
// How far the origin slides back inside the padding cell, per axis, in [0, 1).
uniform float shiftOffsetX;
uniform float shiftOffsetY;
#endif

// The first pass's empty-bucket sentinel (must match reduce-bounds-buckets.frag).
const float BOUNDS_LIMIT = 1.0e30;

out vec4 bounds; // [originX, originY, extent, 1 / extent]

void main() {
  int size = int(partialGridSize);

  // Empty partial boxes carry [+limit, +limit, -limit, -limit], neutral here.
  vec2 lo = vec2(BOUNDS_LIMIT);
  vec2 hi = vec2(-BOUNDS_LIMIT);
  for (int y = 0; y < size; y += 1) {
    for (int x = 0; x < size; x += 1) {
      vec4 partial = texelFetch(partialsTexture, ivec2(x, y), 0);
      lo = min(lo, partial.xy);
      hi = max(hi, partial.zw);
    }
  }

  // No usable point at all (every point absent or non-finite): collapse to a
  // degenerate box at the origin rather than turning the sentinels into an
  // extent; the floor below makes it a valid grid.
  if (hi.x < lo.x) {
    lo = vec2(0.0);
    hi = vec2(0.0);
  }

  // Square, because the consumers' grids are square and halve exactly level
  // to level; a non-square box would give non-square cells.
  vec2 centre = 0.5 * (lo + hi);
  float span = max(hi.x - lo.x, hi.y - lo.y);

  // Fitted to the points, with no margin: the outermost points sit on the
  // box's edge, where the consumers' edge clamp files them into the last cell
  // the same way on every level. A margin would only widen the cells over the
  // data and leave the layout's edge mid-cell on every level, which measurably
  // costs the far field accuracy at the edge. The origin shift below accepts
  // that cost to move the cell boundaries off fixed lines.
  //
  // The floor is what makes a zero-size box (one point, or every point
  // stacked) usable: consumers divide the extent into cells and need a
  // non-zero cell size. The caller sets it from its own smallest meaningful
  // cell.
  float extent = max(span, minExtent);
  vec2 origin = centre - 0.5 * extent;

  // Origin shift: grow the box by one cell of the consumer's coarsest grid and
  // slide it back by the given part of that cell. The fitted square stays
  // inside whatever the offset, since the padding is exactly the slide's range,
  // while every cell boundary of every level lands somewhere new. With G cells
  // per axis over the padded box, one cell is extent / (G - 1) of the fitted one.
  if (shiftCellsPerAxis > 1.0) {
    float cell = extent / (shiftCellsPerAxis - 1.0);
    origin -= vec2(shiftOffsetX, shiftOffsetY) * cell;
    extent += cell;
  }

  // The reciprocal is the one inexact step of the consumers' cell formula,
  // taken once here so every shader that bins a point reads the same bits
  // (grid-cell.ts).
  bounds = vec4(origin, extent, 1.0 / extent);
}
`,Is=8,Uu=64,z1=128,W1=64,V1=t=>Math.max(Uu,Math.min(z1,2**Math.ceil(Math.log2(Math.sqrt(t/W1))))),Lu=class{constructor(e){this.device=e}get texture(){var e;let i=(e=this.boundsTarget)==null?void 0:e.texture;return i&&!i.destroyed?i:void 0}run(e){let{device:i}=this,{positionsTexture:r,exitTexture:n,pointsTextureSize:o,pointsNumber:s,minExtent:a,originShift:l}=e;if(!s||!o||r.destroyed||n.destroyed)return;let c=V1(s),u=c/Is;this.ensureResources(c,u);let d=this.bucketsTarget,h=this.blocksTarget,f=this.boundsTarget;if(!d||d.fbo.destroyed||!h||h.fbo.destroyed||!f||f.fbo.destroyed||!this.bucketsCommand||!this.bucketsUniformStore||!this.blocksCommand||!this.blocksUniformStore||!this.finalCommand||!this.finalUniformStore)return;this.bucketsUniformStore.setUniforms({reduceBoundsBucketsUniforms:{pointsTextureSize:o,pointsNumber:s,bucketGridSize:c}}),this.bucketsCommand.setBindings({positionsTexture:r,exitTexture:n});let g=i.beginRenderPass({framebuffer:d.fbo,clearColor:[0,0,0,0]});this.bucketsCommand.draw(g),g.end(),this.blocksUniformStore.setUniforms({reduceBoundsBlocksUniforms:{blockSize:Is}}),this.blocksCommand.setBindings({partialsTexture:d.texture});let x=i.beginRenderPass({framebuffer:h.fbo,clearColor:[0,0,0,0]});this.blocksCommand.draw(x),x.end(),this.finalUniformStore.setUniforms({reduceBoundsFinalUniforms:{partialGridSize:u,minExtent:a,shiftCellsPerAxis:l?.cellsPerAxis??0,shiftOffsetX:l?.offset[0]??0,shiftOffsetY:l?.offset[1]??0}}),this.finalCommand.setBindings({partialsTexture:h.texture});let b=i.beginRenderPass({framebuffer:f.fbo,clearColor:[0,0,0,0]});this.finalCommand.draw(b),b.end()}destroy(){var e,i,r,n,o,s;(e=this.bucketsCommand)==null||e.destroy(),this.bucketsCommand=void 0,(i=this.blocksCommand)==null||i.destroy(),this.blocksCommand=void 0,(r=this.finalCommand)==null||r.destroy(),this.finalCommand=void 0;for(let a of[this.bucketsTarget,this.blocksTarget,this.boundsTarget])a&&(a.fbo.destroyed||a.fbo.destroy(),a.texture.destroyed||a.texture.destroy());this.bucketsTarget=void 0,this.blocksTarget=void 0,this.boundsTarget=void 0,(n=this.bucketsUniformStore)==null||n.destroy(),this.bucketsUniformStore=void 0,(o=this.blocksUniformStore)==null||o.destroy(),this.blocksUniformStore=void 0,(s=this.finalUniformStore)==null||s.destroy(),this.finalUniformStore=void 0,this.vertexCoordBuffer&&!this.vertexCoordBuffer.destroyed&&this.vertexCoordBuffer.destroy(),this.vertexCoordBuffer=void 0}ensureResources(e,i){let{device:r}=this;this.bucketsTarget=this.ensureTarget(this.bucketsTarget,e),this.blocksTarget=this.ensureTarget(this.blocksTarget,i),this.boundsTarget=this.ensureTarget(this.boundsTarget,1),this.vertexCoordBuffer||(this.vertexCoordBuffer=r.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.bucketsUniformStore||(this.bucketsUniformStore=new Q(r,{reduceBoundsBucketsUniforms:{uniformTypes:{pointsTextureSize:"f32",pointsNumber:"f32",bucketGridSize:"f32"},defaultUniforms:{pointsTextureSize:0,pointsNumber:0,bucketGridSize:Uu}}})),this.bucketsCommand||(this.bucketsCommand=this.createPass(O1,{reduceBoundsBucketsUniforms:this.bucketsUniformStore.getManagedUniformBuffer("reduceBoundsBucketsUniforms")})),this.blocksUniformStore||(this.blocksUniformStore=new Q(r,{reduceBoundsBlocksUniforms:{uniformTypes:{blockSize:"f32"},defaultUniforms:{blockSize:Is}}})),this.blocksCommand||(this.blocksCommand=this.createPass(U1,{reduceBoundsBlocksUniforms:this.blocksUniformStore.getManagedUniformBuffer("reduceBoundsBlocksUniforms")})),this.finalUniformStore||(this.finalUniformStore=new Q(r,{reduceBoundsFinalUniforms:{uniformTypes:{partialGridSize:"f32",minExtent:"f32",shiftCellsPerAxis:"f32",shiftOffsetX:"f32",shiftOffsetY:"f32"},defaultUniforms:{partialGridSize:Uu/Is,minExtent:1,shiftCellsPerAxis:0,shiftOffsetX:0,shiftOffsetY:0}}})),this.finalCommand||(this.finalCommand=this.createPass(L1,{reduceBoundsFinalUniforms:this.finalUniformStore.getManagedUniformBuffer("reduceBoundsFinalUniforms")}))}ensureTarget(e,i){return e&&!e.texture.destroyed&&!e.fbo.destroyed&&e.texture.width===i?e:(e&&(e.fbo.destroyed||e.fbo.destroy(),e.texture.destroyed||e.texture.destroy()),this.createTarget(i))}createTarget(e){let i=this.device.createTexture({width:e,height:e,format:"rgba32float",usage:F.SAMPLE|F.RENDER}),r=this.device.createFramebuffer({width:e,height:e,colorAttachments:[i]});return{texture:i,fbo:r}}createPass(e,i){return new J(this.device,{fs:e,vs:ve,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.vertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:i,parameters:ie})}},bu=8,H1=25e3,Hx=(t,e,i)=>i&&t!==e-1?2:1,$x=(t,e)=>t/vn(e),$1=.25,Ls=8,p0=ju,X1=16e5,G1=32*1024*1024,Y1=30,j1=.01,K1=.01,q1=N1.replace("// @min-auto-slots",`#define MIN_AUTO_SLOTS ${Ls}`),ut=16,Z1=(t,e,i)=>Math.min(i,Math.max(e,Math.pow(2,Math.floor(Math.log2(t))))),Xx=t=>{let e=vn(t)**2*8,i=Math.min(X1/Math.max(1,t),G1/e);return Z1(i,Ls,p0)},Q1=(t,e)=>{let i=Ls;for(let r of e){if(r<=K1*t)return i;i*=2}return Math.min(i,p0)},J1=4096,Ds=2,zu=class extends Ze{constructor(){super(...arguments),this.levels=0,this.levelTargets=new Map,this.isOccupancyIssueWanted=!1,this.occupancyTick=0,this.occupancyNotBefore=0}get isOccupancyReadbackPending(){var e;return((e=this.occupancyReadback)==null?void 0:e.isPending)??!1}get hasPendingOccupancyReadback(){var e;return((e=this.occupancyReadback)==null?void 0:e.inFlight)??!1}get usesAllPairs(){return(this.data.pointsNumber??0)<=J1}get preciseFarField(){let e=this.config.simulationRepulsionQuality;return e==="precise"?!0:e==="fast"?!1:(this.data.pointsNumber??0)<=H1}get nearFieldSlotCount(){let e=this.config.simulationRepulsionSamples;if(wu(e))return e;let i=this.data.pointsNumber??0;return Math.min(this.autoSlotCount??h0(i),Xx(i))}get usesAutoSlotCount(){return!wu(this.config.simulationRepulsionSamples)}create(){var e,i;let{device:r,store:n}=this;if(!n.pointsTextureSize)return;this.data.pointsNumber!==this.previousPointsNumber&&this.restartOccupancyMeasurement(),this.usesAllPairs?(this.destroyLevelTargets(),this.levels=0):this.createLevels();let o=n.pointsTextureSize*n.pointsTextureSize,s=new Float32Array(o*4);for(let a=0;a<o;++a)s[a*4]=n.getRandomFloat(-1,1)*1e-5,s[a*4+1]=n.getRandomFloat(-1,1)*1e-5;if((!this.randomValuesTexture||this.randomValuesTexture.destroyed||this.randomValuesTexture.width!==n.pointsTextureSize||this.randomValuesTexture.height!==n.pointsTextureSize)&&(this.randomValuesTexture&&!this.randomValuesTexture.destroyed&&this.randomValuesTexture.destroy(),this.randomValuesTexture=r.createTexture({width:n.pointsTextureSize,height:n.pointsTextureSize,format:"rgba32float",usage:F.SAMPLE|F.COPY_DST})),this.randomValuesTexture.copyImageData({data:s,bytesPerRow:K("rgba32float",n.pointsTextureSize),mipLevel:0,x:0,y:0}),!this.pointIndices||this.previousPointsTextureSize!==n.pointsTextureSize){this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy();let a=bn(n.pointsTextureSize);this.pointIndices=r.createBuffer({data:a,usage:N.VERTEX|N.COPY_DST}),(e=this.calculateLevelsCommand)==null||e.setAttributes({pointIndices:this.pointIndices}),(i=this.buildNearFieldSlotsCommand)==null||i.setAttributes({pointIndices:this.pointIndices})}this.previousPointsTextureSize=n.pointsTextureSize,this.previousPointsNumber=this.data.pointsNumber}initPrograms(){let{device:e,store:i,data:r,points:n}=this;if(!(!r.pointsNumber||!n||!i.pointsTextureSize)){if(this.forceVertexCoordBuffer||(this.forceVertexCoordBuffer=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.dataBounds||(this.dataBounds=new Lu(e)),this.occupancyUniformStore||(this.occupancyUniformStore=new Q(e,{occupancyUniforms:{uniformTypes:{levelTextureWidth:"f32",levelTextureHeight:"f32",blockWidth:"f32",blockHeight:"f32"},defaultUniforms:{levelTextureWidth:0,levelTextureHeight:0,blockWidth:0,blockHeight:0}}})),this.occupancyCommand||(this.occupancyCommand=new J(e,{fs:q1,vs:ve,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.forceVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{occupancyUniforms:this.occupancyUniformStore.getManagedUniformBuffer("occupancyUniforms")},parameters:{...ie,depthWriteEnabled:!1,depthCompare:"always"}})),!this.occupancyTarget||this.occupancyTarget.texture.destroyed){let o=e.createTexture({width:ut,height:ut,format:"rgba32float",usage:F.SAMPLE|F.RENDER}),s=e.createFramebuffer({width:ut,height:ut,colorAttachments:[o]});this.occupancyTarget={texture:o,fbo:s}}this.calculateLevelsUniformStore||(this.calculateLevelsUniformStore=new Q(e,{calculateLevelsPreciseUniforms:{uniformTypes:{levelGridSize:"f32"},defaultUniforms:{levelGridSize:0}}})),this.calculateLevelsCommand||(this.calculateLevelsCommand=new J(e,{fs:E1,vs:Es(I1),topology:"point-list",vertexCount:r.pointsNumber,attributes:{...this.pointIndices&&{pointIndices:this.pointIndices}},bufferLayout:[{name:"pointIndices",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{calculateLevelsPreciseUniforms:this.calculateLevelsUniformStore.getManagedUniformBuffer("calculateLevelsPreciseUniforms")},parameters:{...ie,blend:!0,blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",depthWriteEnabled:!1,depthCompare:"always"}})),this.forceLevelUniformStore||(this.forceLevelUniformStore=new Q(e,{forceLevelPreciseUniforms:{uniformTypes:{levelGridSize:"f32",isFirstLevel:"f32",alpha:"f32",repulsion:"f32",shellRadius:"f32",parentShellRadius:"f32"},defaultUniforms:{levelGridSize:0,isFirstLevel:0,alpha:i.alpha,repulsion:this.config.simulationRepulsion,shellRadius:2,parentShellRadius:0}}})),this.forceLevelCommand||(this.forceLevelCommand=new J(e,{fs:Es(D1),vs:ve,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.forceVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceLevelPreciseUniforms:this.forceLevelUniformStore.getManagedUniformBuffer("forceLevelPreciseUniforms")},parameters:{...ie,blend:!0,blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",depthWriteEnabled:!1,depthCompare:"always"}})),this.buildNearFieldSlotsUniformStore||(this.buildNearFieldSlotsUniformStore=new Q(e,{buildNearFieldSlotsUniforms:{uniformTypes:{pointsTextureSize:"f32",levelGridSize:"f32",hasPreviousSlot:"f32",randomSeed:"f32",previousLayer:"f32"},defaultUniforms:{pointsTextureSize:i.pointsTextureSize,levelGridSize:0,hasPreviousSlot:0,randomSeed:0,previousLayer:0}}})),this.buildNearFieldSlotsCommand||(this.buildNearFieldSlotsCommand=new J(e,{fs:u0,vs:Es(c0),topology:"point-list",vertexCount:r.pointsNumber,attributes:{...this.pointIndices&&{pointIndices:this.pointIndices}},bufferLayout:[{name:"pointIndices",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{buildNearFieldSlotsUniforms:this.buildNearFieldSlotsUniformStore.getManagedUniformBuffer("buildNearFieldSlotsUniforms")},parameters:{...ie,blend:!1,depthWriteEnabled:!0,depthCompare:"less"}})),this.forceNearFieldUniformStore||(this.forceNearFieldUniformStore=new Q(e,{forceNearFieldUniforms:{uniformTypes:{pointsTextureSize:"f32",levelGridSize:"f32",maxStep:"f32",alpha:"f32",repulsion:"f32",slotCount:"f32"},defaultUniforms:{pointsTextureSize:i.pointsTextureSize,levelGridSize:0,maxStep:0,alpha:i.alpha,repulsion:this.config.simulationRepulsion,slotCount:0}}})),this.forceAllPairsUniformStore||(this.forceAllPairsUniformStore=new Q(e,{forceAllPairsUniforms:{uniformTypes:{pointsTextureSize:"f32",pointsNumber:"f32",alpha:"f32",repulsion:"f32",maxStep:"f32"},defaultUniforms:{pointsTextureSize:i.pointsTextureSize,pointsNumber:r.pointsNumber,alpha:i.alpha,repulsion:this.config.simulationRepulsion,maxStep:0}}})),this.forceAllPairsCommand||(this.forceAllPairsCommand=new J(e,{fs:M1,vs:ve,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.forceVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceAllPairsUniforms:this.forceAllPairsUniformStore.getManagedUniformBuffer("forceAllPairsUniforms")},parameters:ie})),this.forceNearFieldCommand||(this.forceNearFieldCommand=new J(e,{fs:Es(F1),vs:ve,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.forceVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceNearFieldUniforms:this.forceNearFieldUniformStore.getManagedUniformBuffer("forceNearFieldUniforms")},parameters:{...ie,blend:!0,blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",depthWriteEnabled:!1,depthCompare:"always"}}))}}run(e=!1){var i;if(this.store.pointsTextureSize!==this.previousPointsTextureSize||this.data.pointsNumber!==this.previousPointsNumber)return;if(this.usesAllPairs){this.drawAllPairsForce();return}this.nearField&&this.nearField.count!==this.nearFieldSlotCount&&this.createLevels();let r=this.levelTargets.get(this.levels-1);!r||!this.nearField||(this.drawBounds(),(i=this.dataBounds)!=null&&i.texture&&(this.drawLevels(),this.measureOccupancy(r.texture,r.gridSize,e),this.drawNearFieldSlots(),this.drawForces()))}destroy(){var e,i,r,n,o,s,a,l,c,u,d,h,f,g;(e=this.calculateLevelsCommand)==null||e.destroy(),this.calculateLevelsCommand=void 0,(i=this.forceLevelCommand)==null||i.destroy(),this.forceLevelCommand=void 0,(r=this.buildNearFieldSlotsCommand)==null||r.destroy(),this.buildNearFieldSlotsCommand=void 0,(n=this.forceNearFieldCommand)==null||n.destroy(),this.forceNearFieldCommand=void 0,(o=this.forceAllPairsCommand)==null||o.destroy(),this.forceAllPairsCommand=void 0,(s=this.occupancyCommand)==null||s.destroy(),this.occupancyCommand=void 0,(a=this.occupancyReadback)==null||a.destroy(),this.occupancyReadback=void 0,this.randomValuesTexture&&!this.randomValuesTexture.destroyed&&this.randomValuesTexture.destroy(),this.randomValuesTexture=void 0,this.destroyLevelTargets(),this.occupancyTarget&&(this.occupancyTarget.fbo.destroyed||this.occupancyTarget.fbo.destroy(),this.occupancyTarget.texture.destroyed||this.occupancyTarget.texture.destroy(),this.occupancyTarget=void 0),(l=this.dataBounds)==null||l.destroy(),this.dataBounds=void 0,(c=this.calculateLevelsUniformStore)==null||c.destroy(),this.calculateLevelsUniformStore=void 0,(u=this.forceLevelUniformStore)==null||u.destroy(),this.forceLevelUniformStore=void 0,(d=this.buildNearFieldSlotsUniformStore)==null||d.destroy(),this.buildNearFieldSlotsUniformStore=void 0,(h=this.forceNearFieldUniformStore)==null||h.destroy(),this.forceNearFieldUniformStore=void 0,(f=this.forceAllPairsUniformStore)==null||f.destroy(),this.forceAllPairsUniformStore=void 0,(g=this.occupancyUniformStore)==null||g.destroy(),this.occupancyUniformStore=void 0,this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy(),this.pointIndices=void 0,this.forceVertexCoordBuffer&&!this.forceVertexCoordBuffer.destroyed&&this.forceVertexCoordBuffer.destroy(),this.forceVertexCoordBuffer=void 0}issueOccupancy(){var e;if(!this.isOccupancyIssueWanted||(e=this.occupancyReadback)!=null&&e.inFlight||(this.isOccupancyIssueWanted=!1,!this.occupancyTarget||this.occupancyTarget.fbo.destroyed))return;let i=this.device.gl,r=this.occupancyTarget.fbo.handle;!i||!r||(this.occupancyReadback||(this.occupancyReadback=new ti(i,ut*ut*4)),this.occupancyReadback.issue(r,0,0,ut,ut))}collectOccupancy(e=0){var i;let r=(i=this.occupancyReadback)==null?void 0:i.poll();if((r||e>0)&&(this.occupancyNotBefore=performance.now()+e/j1),!r)return;let n=0,o=[0,0,0];for(let a=0;a<ut*ut;a+=1){n+=r[a*4];for(let l=0;l<o.length;l+=1)o[l]=o[l]+r[a*4+1+l]}if(!(n>0)||!o.every(Number.isFinite))return;let s=Q1(n,o);this.autoSlotCount===void 0||s===this.proposedSlotCount?(this.autoSlotCount=s,this.proposedSlotCount=void 0):s!==this.autoSlotCount?this.proposedSlotCount=s:this.proposedSlotCount=void 0}cancelOccupancyReadback(){var e;(e=this.occupancyReadback)==null||e.cancel()}restartOccupancyMeasurement(){var e;(e=this.occupancyReadback)==null||e.cancel(),this.isOccupancyIssueWanted=!1,this.occupancyTick=0,this.lastOccupancyTick=void 0,this.proposedSlotCount=void 0,this.autoSlotCount=void 0}measureOccupancy(e,i,r){var n;let{device:o}=this;if(!this.usesAutoSlotCount||!r||Xx(this.data.pointsNumber??0)<=Ls)return;let s=this.occupancyTick;if(this.occupancyTick+=1,this.lastOccupancyTick!==void 0&&s-this.lastOccupancyTick<Y1||performance.now()<this.occupancyNotBefore||!this.occupancyCommand||!this.occupancyUniformStore||!this.occupancyTarget||this.occupancyTarget.fbo.destroyed||e.destroyed||(n=this.occupancyReadback)!=null&&n.inFlight)return;let a=Math.ceil(i/ut);this.occupancyUniformStore.setUniforms({occupancyUniforms:{levelTextureWidth:i,levelTextureHeight:i,blockWidth:a,blockHeight:a}}),this.occupancyCommand.setBindings({levelTexture:e});let l=o.beginRenderPass({framebuffer:this.occupancyTarget.fbo,clearColor:[0,0,0,0]});this.occupancyCommand.draw(l),l.end(),this.lastOccupancyTick=s,this.isOccupancyIssueWanted=!0}drawAllPairsForce(){let{device:e,store:i,data:r,points:n}=this;if(!n||!this.forceAllPairsCommand||!this.forceAllPairsUniformStore||!n.previousPositionTexture||n.previousPositionTexture.destroyed||!n.exitTexture||n.exitTexture.destroyed||!this.randomValuesTexture||this.randomValuesTexture.destroyed||!n.velocityFbo||n.velocityFbo.destroyed||!r.pointsNumber)return;this.forceAllPairsUniformStore.setUniforms({forceAllPairsUniforms:{pointsTextureSize:i.pointsTextureSize??0,pointsNumber:r.pointsNumber,alpha:i.alpha,repulsion:this.config.simulationRepulsion,maxStep:$x(i.kickSpan,r.pointsNumber)}}),this.forceAllPairsCommand.setBindings({positionsTexture:n.previousPositionTexture,randomValues:this.randomValuesTexture,exitTexture:n.exitTexture});let o=e.beginRenderPass({framebuffer:n.velocityFbo,clearColor:[0,0,0,0]});this.forceAllPairsCommand.draw(o),o.end()}drawBounds(){let{store:e,data:i,points:r}=this;!r||!this.dataBounds||!r.previousPositionTexture||r.previousPositionTexture.destroyed||!r.exitTexture||r.exitTexture.destroyed||!i.pointsNumber||!e.pointsTextureSize||this.dataBounds.run({positionsTexture:r.previousPositionTexture,exitTexture:r.exitTexture,pointsTextureSize:e.pointsTextureSize,pointsNumber:i.pointsNumber,minExtent:vn(i.pointsNumber)*$1,originShift:{cellsPerAxis:bu,offset:[e.getRandomFloat(0,1),e.getRandomFloat(0,1)]}})}drawLevels(){var e;let{device:i,data:r,points:n}=this;if(!n||!this.calculateLevelsCommand||!this.calculateLevelsUniformStore)return;let o=(e=this.dataBounds)==null?void 0:e.texture;if(o&&!(!n.previousPositionTexture||n.previousPositionTexture.destroyed)&&!(!n.exitTexture||n.exitTexture.destroyed)&&r.pointsNumber&&this.pointIndices)for(let s=0;s<this.levels;s+=1){let a=this.levelTargets.get(s);if(!a||a.fbo.destroyed||a.texture.destroyed)continue;this.calculateLevelsUniformStore.setUniforms({calculateLevelsPreciseUniforms:{levelGridSize:a.gridSize}}),this.calculateLevelsCommand.setVertexCount(r.pointsNumber),this.calculateLevelsCommand.setBindings({positionsTexture:n.previousPositionTexture,exitTexture:n.exitTexture,dataBoundsTexture:o});let l=i.beginRenderPass({framebuffer:a.fbo,clearColor:[0,0,0,0]});this.calculateLevelsCommand.draw(l),l.end()}}drawNearFieldSlots(){var e;let{device:i,store:r,data:n,points:o,nearField:s}=this;if(!o||!this.buildNearFieldSlotsCommand||!this.buildNearFieldSlotsUniformStore||!o.previousPositionTexture||o.previousPositionTexture.destroyed||!o.exitTexture||o.exitTexture.destroyed||!n.pointsNumber||!this.pointIndices||!s||s.arrays.some(u=>u.destroyed))return;let a=this.levelTargets.get(this.levels-1);if(!a||a.texture.destroyed)return;let l=(e=this.dataBounds)==null?void 0:e.texture;if(!l)return;let c=r.getRandomFloat(0,1);for(let u=0;u<s.count;u+=1){let d=s.fbos[u],h=s.arrays[(u+1)%Ds];if(!d||d.destroyed||!h)continue;this.buildNearFieldSlotsUniformStore.setUniforms({buildNearFieldSlotsUniforms:{pointsTextureSize:r.pointsTextureSize??0,levelGridSize:a.gridSize,hasPreviousSlot:u===0?0:1,randomSeed:c,previousLayer:Math.max(0,u-1)>>1}}),this.buildNearFieldSlotsCommand.setVertexCount(n.pointsNumber),this.buildNearFieldSlotsCommand.setBindings({positionsTexture:o.previousPositionTexture,exitTexture:o.exitTexture,previousSlot:h,dataBoundsTexture:l});let f=i.beginRenderPass({framebuffer:d,clearColor:[-1,1,0,0],clearDepth:1});this.buildNearFieldSlotsCommand.draw(f),f.end()}}drawForces(){var e;let{device:i,store:r,data:n,points:o,nearField:s}=this;if(!o||!this.forceLevelCommand||!this.forceLevelUniformStore||!this.forceNearFieldCommand||!this.forceNearFieldUniformStore||!s||s.arrays.some(u=>u.destroyed)||!o.previousPositionTexture||o.previousPositionTexture.destroyed||!this.randomValuesTexture||this.randomValuesTexture.destroyed||!o.velocityFbo||o.velocityFbo.destroyed)return;let a=(e=this.dataBounds)==null?void 0:e.texture;if(!a)return;let l=i.beginRenderPass({framebuffer:o.velocityFbo,clearColor:[0,0,0,0]}),c=this.preciseFarField;for(let u=0;u<this.levels;u+=1){let d=this.levelTargets.get(u);!d||d.texture.destroyed||(this.forceLevelUniformStore.setUniforms({forceLevelPreciseUniforms:{levelGridSize:d.gridSize,isFirstLevel:u===0?1:0,alpha:r.alpha,repulsion:this.config.simulationRepulsion,shellRadius:Hx(u,this.levels,c),parentShellRadius:u===0?0:Hx(u-1,this.levels,c)}}),this.forceLevelCommand.setBindings({positionsTexture:o.previousPositionTexture,levelTexture:d.texture,dataBoundsTexture:a}),this.forceLevelCommand.draw(l),u===this.levels-1&&(this.forceNearFieldUniformStore.setUniforms({forceNearFieldUniforms:{pointsTextureSize:r.pointsTextureSize??0,levelGridSize:d.gridSize,maxStep:$x(r.kickSpan,n.pointsNumber??0),alpha:r.alpha,repulsion:this.config.simulationRepulsion,slotCount:s.count}}),this.forceNearFieldCommand.setBindings({positionsTexture:o.previousPositionTexture,levelTexture:d.texture,randomValues:this.randomValuesTexture,slotsEven:s.arrays[0],slotsOdd:s.arrays[1],dataBoundsTexture:a}),this.forceNearFieldCommand.draw(l)))}l.end()}createLevels(){let{device:e}=this,i=this.data.pointsNumber??0,r=vn(i);this.levels=Math.log2(r/bu)+1;for(let o=0;o<this.levels;o+=1){if(this.levelTargets.has(o))continue;let s=bu*Math.pow(2,o),a=e.createTexture({width:s,height:s,format:"rgba32float",usage:F.SAMPLE|F.RENDER}),l=e.createFramebuffer({width:s,height:s,colorAttachments:[a]});this.levelTargets.set(o,{texture:a,fbo:l,gridSize:s})}for(let[o,s]of Array.from(this.levelTargets.entries()))o>=this.levels&&(s.fbo.destroyed||s.fbo.destroy(),s.texture.destroyed||s.texture.destroy(),this.levelTargets.delete(o));let n=this.levelTargets.get(this.levels-1);n&&this.createNearFieldSlots(n)}createNearFieldSlots(e){let{device:i}=this,r=this.nearFieldSlotCount,n=this.nearField;if(n&&n.gridSize===e.gridSize&&n.count===r&&n.fbos.every(u=>!u.destroyed)&&n.arrays.every(u=>!u.destroyed)&&!n.depth.destroyed)return;this.destroyNearFieldSlots();let o=Math.ceil(r/Ds),s=[];for(let u=0;u<Ds;u+=1)s.push(i.createTexture({dimension:"2d-array",width:e.gridSize,height:e.gridSize,depth:o,format:"rg32float",usage:F.SAMPLE|F.RENDER}));let a=i.createTexture({width:e.gridSize,height:e.gridSize,format:"depth24plus",usage:F.RENDER}),l=[],c=[];for(let u=0;u<r;u+=1){let d=s[u%Ds].createView({dimension:"2d",baseArrayLayer:u>>1,arrayLayerCount:1,mipLevelCount:1});l.push(d),c.push(i.createFramebuffer({width:e.gridSize,height:e.gridSize,colorAttachments:[d],depthStencilAttachment:a}))}this.nearField={count:r,gridSize:e.gridSize,arrays:s,depth:a,views:l,fbos:c}}destroyNearFieldSlots(){let{nearField:e}=this;if(e){for(let i of e.fbos)i.destroyed||i.destroy();for(let i of e.views)i.destroyed||i.destroy();for(let i of e.arrays)i.destroyed||i.destroy();e.depth.destroyed||e.depth.destroy(),this.nearField=void 0}}destroyLevelTargets(){for(let e of this.levelTargets.values())e.fbo.destroyed||e.fbo.destroy(),e.texture.destroyed||e.texture.destroy();this.levelTargets.clear(),this.destroyNearFieldSlots()}},eR=`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceMouseUniforms {
  float repulsion;
  vec2 mousePos;
} forceMouse;

#define repulsion forceMouse.repulsion
#define mousePos forceMouse.mousePos
#else
uniform float repulsion;
uniform vec2 mousePos;
#endif

out vec4 fragColor;

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec4 velocity = vec4(0.0);
  vec2 mouse = mousePos;
  // Move particles away from the mouse position using a repulsive force
  vec2 distVector = mouse - pointPosition.rg;
  float dist = sqrt(dot(distVector, distVector));
  dist = max(dist, 10.0);
  float angle = atan(distVector.y, distVector.x);
  float addV = 100.0 * repulsion / (dist * dist);
  velocity.rg -= addV * vec2(cos(angle), sin(angle));

  fragColor = velocity;
}`,Wu=class extends Ze{initPrograms(){let{device:e,points:i}=this;i&&(this.vertexCoordBuffer||(this.vertexCoordBuffer=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.uniformStore||(this.uniformStore=new Q(e,{forceMouseUniforms:{uniformTypes:{repulsion:"f32",mousePos:"vec2<f32>"}}})),this.runCommand||(this.runCommand=new J(e,{fs:eR,vs:ve,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.vertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceMouseUniforms:this.uniformStore.getManagedUniformBuffer("forceMouseUniforms")},parameters:ie})))}run(){let{device:e,points:i,store:r}=this;if(!i||!this.runCommand||!this.uniformStore||!i.previousPositionTexture||i.previousPositionTexture.destroyed||!i.velocityFbo||i.velocityFbo.destroyed)return;this.uniformStore.setUniforms({forceMouseUniforms:{repulsion:this.config.simulationRepulsionFromMouse,mousePos:oe(r.mousePosition,[0,0])}}),this.runCommand.setBindings({positionsTexture:i.previousPositionTexture});let n=e.beginRenderPass({framebuffer:i.velocityFbo,clearColor:[0,0,0,0]});this.runCommand.draw(n),n.end()}destroy(){var e,i;(e=this.runCommand)==null||e.destroy(),this.runCommand=void 0,(i=this.uniformStore)==null||i.destroy(),this.uniformStore=void 0,this.vertexCoordBuffer&&!this.vertexCoordBuffer.destroyed&&this.vertexCoordBuffer.destroy(),this.vertexCoordBuffer=void 0}},tR=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec4 rgba;

out vec4 fragColor;

void main() {
  fragColor = rgba;
}`,iR=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;
uniform sampler2D clusterTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform calculateCentermassUniforms {
  float clustersTextureSize;
} calculateCentermass;

#define clustersTextureSize calculateCentermass.clustersTextureSize
#else
uniform float clustersTextureSize;
#endif

in vec2 pointIndices;

out vec4 rgba;

void main() {
  rgba = vec4(0.0);

  ivec2 pointTexel = ivec2(pointIndices);

  // Absent points must not contribute to their cluster's centroid. (exit.G = absent)
  vec4 exitStatus = texelFetch(exitTexture, pointTexel, 0);
  if (exitStatus.g > 0.5) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  // Unclustered points ([-1, -1]) must not contribute mass to any cluster \u2014
  // a default position of (0, 0) is the framebuffer's center texel, a real
  // cluster's slot, so cull them off-screen instead.
  vec4 pointClusterIndices = texelFetch(clusterTexture, pointTexel, 0);
  if (pointClusterIndices.x < 0.0 || pointClusterIndices.y < 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  rgba = vec4(pointPosition.xy, 1.0, 0.0);

  vec2 xy = 2.0 * (pointClusterIndices.xy + 0.5) / clustersTextureSize - 1.0;
  gl_Position = vec4(xy, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`,rR=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;
uniform sampler2D centermassTexture;
uniform sampler2D clusterTexture;
uniform sampler2D clusterPositionsTexture;
uniform sampler2D clusterForceCoefficient;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform applyForcesUniforms {
  float alpha;
  float clusterCoefficient;
} applyForces;

#define alpha applyForces.alpha
#define clusterCoefficient applyForces.clusterCoefficient
#else
uniform float alpha;
uniform float clusterCoefficient;
#endif

out vec4 fragColor;


void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec4 velocity = vec4(0.0);
  vec4 pointClusterIndices = texelFetch(clusterTexture, pointTexel, 0);
  // no cluster, so no forces
  if (pointClusterIndices.x >= 0.0 && pointClusterIndices.y >= 0.0) {
    // clusterTexture stores whole texel coordinates, so truncating to int is exact.
    ivec2 clusterTexel = ivec2(pointClusterIndices.xy);
    // Pulled to the cluster's custom position if it has one (.z = 1, set on the CPU:
    // any coordinate, negative ones included, is a position), else to its centre of mass
    vec3 clusterPosition = texelFetch(clusterPositionsTexture, clusterTexel, 0).xyz;
    vec2 clusterPositions = clusterPosition.xy;
    if (clusterPosition.z < 0.5) {
      vec4 centermassValues = texelFetch(centermassTexture, clusterTexel, 0);
      clusterPositions = centermassValues.xy / centermassValues.b;
    }
    vec4 clusterCustomCoeff = texelFetch(clusterForceCoefficient, pointTexel, 0);
    vec2 distVector = clusterPositions.xy - pointPosition.xy;
    float dist = length(distVector);
    if (dist > 0.0) {
      float addV = alpha * dist * clusterCoefficient * clusterCustomCoeff.r;
      velocity.rg += addV * normalize(distVector);
    }
  }

  fragColor = velocity;
}`,Vu=class extends Ze{constructor(){super(...arguments),this.cachedCentroidPositions=null,this.isCentroidReadbackWanted=!1,this.lastCentroidReadStep=-1}get hasPendingCentroidReadback(){var e;return((e=this.centroidReadback)==null?void 0:e.inFlight)??!1}get isCentroidReadbackPending(){var e;return((e=this.centroidReadback)==null?void 0:e.isPending)??!1}get needsCentroidReadback(){var e;return this.isCentroidReadbackWanted&&((e=this.points)==null?void 0:e.areClusterCentroidsUpToDate)===!1}cancelCentroidReadback(){var e;(e=this.centroidReadback)!=null&&e.inFlight&&(this.centroidReadback.cancel(),this.points&&(this.points.areClusterCentroidsUpToDate=!1))}create(){var e,i,r;this.cachedCentroidPositions=null,(e=this.centroidReadback)==null||e.destroy(),this.centroidReadback=void 0;let{device:n,store:o,data:s}=this,{pointsTextureSize:a}=o;if(s.pointsNumber===void 0||!s.pointClusters&&!s.clusterPositions)return;this.clusterCount=(s.pointClusters??[]).reduce((g,x)=>x===void 0||x<0?g:Math.max(g,x),0)+1,this.clustersTextureSize=Math.ceil(Math.sqrt(this.clusterCount));let l=this.previousPointsTextureSize!==a||this.previousClustersTextureSize!==this.clustersTextureSize||this.previousClusterCount!==this.clusterCount,c=a*a*4,u=this.clustersTextureSize*this.clustersTextureSize*4,d=new Float32Array(c),h=new Float32Array(u),f=new Float32Array(c).fill(1);if(s.clusterPositions)for(let g=0;g<this.clusterCount;++g){let x=s.clusterPositions[g*2+0],b=s.clusterPositions[g*2+1];!Number.isFinite(x)||!Number.isFinite(b)||(h[g*4+0]=x,h[g*4+1]=b,h[g*4+2]=1)}for(let g=0;g<s.pointsNumber;++g){let x=(i=s.pointClusters)==null?void 0:i[g];x===void 0?(d[g*4+0]=-1,d[g*4+1]=-1):(d[g*4+0]=x%this.clustersTextureSize,d[g*4+1]=Math.floor(x/this.clustersTextureSize)),s.clusterStrength&&(f[g*4+0]=s.clusterStrength[g]??1)}if(!this.clusterTexture||l?(this.clusterTexture&&!this.clusterTexture.destroyed&&this.clusterTexture.destroy(),this.clusterTexture=n.createTexture({width:a,height:a,format:"rgba32float",usage:F.SAMPLE|F.RENDER|F.COPY_DST}),this.clusterTexture.copyImageData({data:d,bytesPerRow:K("rgba32float",a),mipLevel:0,x:0,y:0})):this.clusterTexture.copyImageData({data:d,bytesPerRow:K("rgba32float",a),mipLevel:0,x:0,y:0}),!this.clusterPositionsTexture||l?(this.clusterPositionsTexture&&!this.clusterPositionsTexture.destroyed&&this.clusterPositionsTexture.destroy(),this.clusterPositionsTexture=n.createTexture({width:this.clustersTextureSize,height:this.clustersTextureSize,format:"rgba32float",usage:F.SAMPLE|F.RENDER|F.COPY_DST}),this.clusterPositionsTexture.copyImageData({data:h,bytesPerRow:K("rgba32float",this.clustersTextureSize),mipLevel:0,x:0,y:0})):this.clusterPositionsTexture.copyImageData({data:h,bytesPerRow:K("rgba32float",this.clustersTextureSize),mipLevel:0,x:0,y:0}),!this.clusterForceCoefficientTexture||l?(this.clusterForceCoefficientTexture&&!this.clusterForceCoefficientTexture.destroyed&&this.clusterForceCoefficientTexture.destroy(),this.clusterForceCoefficientTexture=n.createTexture({width:a,height:a,format:"rgba32float",usage:F.SAMPLE|F.RENDER|F.COPY_DST}),this.clusterForceCoefficientTexture.copyImageData({data:f,bytesPerRow:K("rgba32float",a),mipLevel:0,x:0,y:0})):this.clusterForceCoefficientTexture.copyImageData({data:f,bytesPerRow:K("rgba32float",a),mipLevel:0,x:0,y:0}),!this.centermassTexture||this.previousClustersTextureSize!==this.clustersTextureSize?(this.centermassFbo&&!this.centermassFbo.destroyed&&this.centermassFbo.destroy(),this.centermassTexture&&!this.centermassTexture.destroyed&&this.centermassTexture.destroy(),this.centermassTexture=n.createTexture({width:this.clustersTextureSize,height:this.clustersTextureSize,format:"rgba32float",usage:F.SAMPLE|F.RENDER|F.COPY_DST}),this.centermassTexture.copyImageData({data:new Float32Array(u).fill(0),bytesPerRow:K("rgba32float",this.clustersTextureSize),mipLevel:0,x:0,y:0}),this.centermassFbo=n.createFramebuffer({width:this.clustersTextureSize,height:this.clustersTextureSize,colorAttachments:[this.centermassTexture]})):this.centermassTexture.copyImageData({data:new Float32Array(u).fill(0),bytesPerRow:K("rgba32float",this.clustersTextureSize),mipLevel:0,x:0,y:0}),!this.pointIndices||this.previousPointsTextureSize!==a){this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy();let g=bn(o.pointsTextureSize);this.pointIndices=n.createBuffer({data:g,usage:N.VERTEX|N.COPY_DST}),(r=this.calculateCentermassCommand)==null||r.setAttributes({pointIndices:this.pointIndices})}this.previousPointsTextureSize=a,this.previousClustersTextureSize=this.clustersTextureSize,this.previousClusterCount=this.clusterCount}initPrograms(){let{device:e,store:i,data:r}=this;r.pointsNumber===void 0||!r.pointClusters&&!r.clusterPositions||(this.calculateCentermassUniformStore||(this.calculateCentermassUniformStore=new Q(e,{calculateCentermassUniforms:{uniformTypes:{clustersTextureSize:"f32"},defaultUniforms:{clustersTextureSize:this.clustersTextureSize??0}}})),this.calculateCentermassCommand||(this.calculateCentermassCommand=new J(e,{fs:tR,vs:iR,topology:"point-list",vertexCount:r.pointsNumber??0,attributes:{...this.pointIndices&&{pointIndices:this.pointIndices}},bufferLayout:[{name:"pointIndices",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{calculateCentermassUniforms:this.calculateCentermassUniformStore.getManagedUniformBuffer("calculateCentermassUniforms")},parameters:{...ie,blend:!0,blendColorOperation:"add",blendColorSrcFactor:"one",blendColorDstFactor:"one",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one",depthWriteEnabled:!1,depthCompare:"always"}})),this.applyForcesUniformStore||(this.applyForcesUniformStore=new Q(e,{applyForcesUniforms:{uniformTypes:{alpha:"f32",clusterCoefficient:"f32"},defaultUniforms:{alpha:i.alpha,clusterCoefficient:this.config.simulationCluster}}})),this.applyForcesVertexCoordBuffer||(this.applyForcesVertexCoordBuffer=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.applyForcesCommand||(this.applyForcesCommand=new J(e,{fs:rR,vs:ve,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.applyForcesVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{applyForcesUniforms:this.applyForcesUniformStore.getManagedUniformBuffer("applyForcesUniforms")},parameters:ie})))}calculateCentermass(e){let{device:i,points:r}=this;if(!r||!this.calculateCentermassCommand||!this.calculateCentermassUniformStore||!this.pointIndices||!this.centermassFbo||this.centermassFbo.destroyed||!this.clusterTexture||this.clusterTexture.destroyed||!e||e.destroyed||!r.exitTexture||r.exitTexture.destroyed)return!1;this.calculateCentermassCommand.setVertexCount(this.data.pointsNumber??0),this.calculateCentermassUniformStore.setUniforms({calculateCentermassUniforms:{clustersTextureSize:this.clustersTextureSize??0}}),this.calculateCentermassCommand.setBindings({clusterTexture:this.clusterTexture,positionsTexture:e,exitTexture:r.exitTexture});let n=i.beginRenderPass({framebuffer:this.centermassFbo,clearColor:[0,0,0,0]});return this.calculateCentermassCommand.draw(n),n.end(),!0}getCentroidPositions(e=!1){var i,r,n,o;let s=((i=this.points)==null?void 0:i.stepVersion)??0,a=s-this.lastCentroidReadStep>e0;if(this.lastCentroidReadStep=s,(r=this.points)!=null&&r.areClusterCentroidsUpToDate&&this.cachedCentroidPositions&&!this.hasPendingCentroidReadback)return this.cachedCentroidPositions;if(e&&this.cachedCentroidPositions&&!a)return this.isCentroidReadbackWanted=!0,this.cachedCentroidPositions;if(this.isCentroidReadbackWanted=!1,(n=this.centroidReadback)==null||n.cancel(),this.calculateCentermass((o=this.points)==null?void 0:o.currentPositionTexture),!this.centermassFbo||this.centermassFbo.destroyed||this.clusterCount===void 0)return[];let l=this.cacheCentroidPositions(Xe(this.device,this.centermassFbo));return this.points&&(this.points.areClusterCentroidsUpToDate=!0),l}requestCentroidReadback(){var e,i,r;if(!this.isCentroidReadbackWanted||((e=this.points)==null?void 0:e.areClusterCentroidsUpToDate)!==!1||(i=this.centroidReadback)!=null&&i.inFlight||!this.centermassFbo||this.centermassFbo.destroyed||this.clusterCount===void 0)return;let n=this.device.gl,o=this.centermassFbo.handle;if(!n||!o||!this.calculateCentermass((r=this.points)==null?void 0:r.currentPositionTexture))return;let{width:s,height:a}=this.centermassFbo;this.centroidReadback||(this.centroidReadback=new ti(n,s*a*4)),this.centroidReadback.issue(o,0,0,s,a)&&(this.isCentroidReadbackWanted=!1,this.points&&(this.points.areClusterCentroidsUpToDate=!0))}resolveCentroidReadback(){var e;if(!((e=this.centroidReadback)!=null&&e.inFlight))return;let i=this.centroidReadback.poll();i?this.cacheCentroidPositions(i):!this.centroidReadback.inFlight&&this.points&&(this.points.areClusterCentroidsUpToDate=!1)}run(){var e,i;if(!this.data.pointClusters&&!this.data.clusterPositions||(this.calculateCentermass((e=this.points)==null?void 0:e.previousPositionTexture),!this.applyForcesCommand||!this.applyForcesUniformStore)||!this.clusterTexture||this.clusterTexture.destroyed||!this.centermassTexture||this.centermassTexture.destroyed||!this.clusterPositionsTexture||this.clusterPositionsTexture.destroyed||!this.clusterForceCoefficientTexture||this.clusterForceCoefficientTexture.destroyed||!((i=this.points)!=null&&i.previousPositionTexture)||this.points.previousPositionTexture.destroyed||!this.points.velocityFbo||this.points.velocityFbo.destroyed)return;this.applyForcesUniformStore.setUniforms({applyForcesUniforms:{alpha:this.store.alpha,clusterCoefficient:this.config.simulationCluster}}),this.applyForcesCommand.setBindings({clusterTexture:this.clusterTexture,centermassTexture:this.centermassTexture,clusterPositionsTexture:this.clusterPositionsTexture,clusterForceCoefficient:this.clusterForceCoefficientTexture,positionsTexture:this.points.previousPositionTexture});let r=this.device.beginRenderPass({framebuffer:this.points.velocityFbo,clearColor:[0,0,0,0]});this.applyForcesCommand.draw(r),r.end()}destroy(){var e,i,r,n,o;this.cachedCentroidPositions=null,(e=this.centroidReadback)==null||e.destroy(),this.centroidReadback=void 0,(i=this.calculateCentermassCommand)==null||i.destroy(),this.calculateCentermassCommand=void 0,(r=this.applyForcesCommand)==null||r.destroy(),this.applyForcesCommand=void 0,this.centermassFbo&&!this.centermassFbo.destroyed&&this.centermassFbo.destroy(),this.centermassFbo=void 0,this.clusterTexture&&!this.clusterTexture.destroyed&&this.clusterTexture.destroy(),this.clusterTexture=void 0,this.clusterPositionsTexture&&!this.clusterPositionsTexture.destroyed&&this.clusterPositionsTexture.destroy(),this.clusterPositionsTexture=void 0,this.clusterForceCoefficientTexture&&!this.clusterForceCoefficientTexture.destroyed&&this.clusterForceCoefficientTexture.destroy(),this.clusterForceCoefficientTexture=void 0,this.centermassTexture&&!this.centermassTexture.destroyed&&this.centermassTexture.destroy(),this.centermassTexture=void 0,(n=this.calculateCentermassUniformStore)==null||n.destroy(),this.calculateCentermassUniformStore=void 0,(o=this.applyForcesUniformStore)==null||o.destroy(),this.applyForcesUniformStore=void 0,this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy(),this.pointIndices=void 0,this.applyForcesVertexCoordBuffer&&!this.applyForcesVertexCoordBuffer.destroyed&&this.applyForcesVertexCoordBuffer.destroy(),this.applyForcesVertexCoordBuffer=void 0}cacheCentroidPositions(e){let i=[];i.length=(this.clusterCount??0)*2;for(let r=0;r<i.length/2;r+=1){let n=e[r*4+0],o=e[r*4+1],s=e[r*4+2];n!==void 0&&o!==void 0&&s!==void 0&&(i[r*2]=n/s,i[r*2+1]=o/s)}return this.cachedCentroidPositions=i,i}},_u=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D imageAtlasTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform drawFragmentUniforms {
  float greyoutOpacity;
  float pointOpacity;
  float isDarkenGreyout;
  vec4 backgroundColor;
  vec4 outlineColor;
  float outlineWidth;
  float renderMode;
  float pickingAlpha;
  float pickingIndexOffset;
} drawFragment;

#define greyoutOpacity drawFragment.greyoutOpacity
#define pointOpacity drawFragment.pointOpacity
#define isDarkenGreyout drawFragment.isDarkenGreyout
#define backgroundColor drawFragment.backgroundColor
#define outlineColor drawFragment.outlineColor
#define outlineWidth drawFragment.outlineWidth
#define renderMode drawFragment.renderMode
#define pickingAlpha drawFragment.pickingAlpha
#define pickingIndexOffset drawFragment.pickingIndexOffset
#else
uniform float greyoutOpacity;
uniform float pointOpacity;
uniform float isDarkenGreyout;
uniform vec4 backgroundColor;
uniform vec4 outlineColor;
uniform float outlineWidth;
uniform float renderMode;
uniform float pickingAlpha;
uniform float pickingIndexOffset;
#endif


in float pointShape;
in float isGreyedOut;
in float isOutlined;
in vec4 shapeColor;
in vec4 imageAtlasUV;
in float shapeSize;
in float imageSizeVarying;
in float overallSize;
#ifdef POINT_STROKE
in vec4 strokeColor;
in float strokeWidthPx;
#endif
flat in float vPointIndex;

out vec4 fragColor;

// Occlusion culling splits fragments between the opaque core pass (renderMode 1)
// and the blended fringe pass (renderMode 2) at this final-alpha threshold
const float OPAQUE_ALPHA_THRESHOLD = 0.999;

// Shape constants
const float CIRCLE = 0.0;
const float SQUARE = 1.0;
const float TRIANGLE = 2.0;
const float DIAMOND = 3.0;
const float PENTAGON = 4.0;
const float HEXAGON = 5.0;
const float STAR = 6.0;
const float CROSS = 7.0;
const float NONE = 8.0;

// Distance functions for different shapes
float circleDistance(vec2 p) {
    return dot(p, p);
}

// Function to apply greyout logic to image colors
vec4 applyGreyoutToImage(vec4 imageColor, float isGreyedOutValue) {
    vec3 finalColor = imageColor.rgb;
    float finalAlpha = imageColor.a;
    
    if (isGreyedOutValue > 0.0) {
        float blendFactor = 0.65; // Controls how much to modify (0.0 = original, 1.0 = target color)
        
        if (isDarkenGreyout > 0.0) {
            finalColor = mix(finalColor, vec3(0.2), blendFactor);
        } else {
            finalColor = mix(finalColor, max(backgroundColor.rgb, vec3(0.8)), blendFactor);
        }
    }
    
    return vec4(finalColor, finalAlpha);
}

// The shapes' sizes (SQUARE_HALF_SIZE, \u2026) come from the shapeGeometry module, shared with the
// vertex stage, which caps the stroke by each shape's inradius. Every function returns the exact
// Euclidean distance to the shape's edge in core units (negative inside), so the edge ramp and
// the stroke band can scale it to pixels by the core's size alone (see edgeDistancePx).
float squareDistance(vec2 p) {
    vec2 d = abs(p) - vec2(SQUARE_HALF_SIZE);
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

float triangleDistance(vec2 p) {
    const float k = sqrt(3.0);   // \u22481.732; slope of 60\xB0 lines for an equilateral triangle
    const float r = TRIANGLE_HALF_EDGE; // half the edge length; each edge is 2r
    p.x = abs(p.x) - r;          // fold the X axis and shift: the base corner is at the origin
    p.y += 0.55;                 // move the base (y = -0.55 in the core) to y = 0. The centred offset is
                                 // r/k = 0.52; 0.55 keeps the apex at 1.01 rather than 1.04

    // Reflect across the corner's bisector: the slanted edge maps onto the x axis,
    // corner at x = 0, apex at x = -2r
    if (p.x + k * p.y > 0.0)
        p = vec2(p.x - k * p.y,  -k * p.x - p.y) / 2.0;

    // Distance to the edge as the segment [-2r, 0] on the x axis
    p.x -= clamp(p.x, -2.0 * r, 0.0);

    // Return signed distance: negative = inside; positive = outside
    return -length(p) * sign(p.y);
}

float diamondDistance(vec2 p) {
    // Rhombus signed-distance (Inigo Quilez): b holds the half-diagonals
    const vec2 b = vec2(DIAMOND_HALF_WIDTH, DIAMOND_HALF_WIDTH * DIAMOND_ASPECT);
    p = abs(p);
    float h = clamp(((b.x - 2.0 * p.x) * b.x - (b.y - 2.0 * p.y) * b.y) / dot(b, b), -1.0, 1.0);
    float d = length(p - 0.5 * b * vec2(1.0 - h, 1.0 + h));
    return d * sign(p.x * b.y + p.y * b.x - b.x * b.y);
}

float pentagonDistance(vec2 p) {
    // Regular pentagon signed-distance (Inigo Quilez)
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528); // cos 36\xB0, sin 36\xB0, tan 36\xB0
    const float r = PENTAGON_APOTHEM;                           // the flat edge is at y = r; equal to k.z by
                                                                // coincidence of the chosen size, not by construction
    p.x = abs(p.x);

    // Reflect across the two tilted edges \u2500 only if point is outside
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2( k.x, k.y), p), 0.0) * vec2( k.x, k.y);

    // distance to the flat edge as a segment: every corner folds onto x = \xB1r\xB7tan 36\xB0
    p -= vec2(clamp(p.x, -r * k.z, r * k.z), r);

    // Return signed distance (negative \u2192 inside, positive \u2192 outside)
    return length(p) * sign(p.y);
}

float hexagonDistance(vec2 p) {
    const vec3 k = vec3(-0.866025404, 0.5, 0.577350269);
    p = abs(p);
    p -= 2.0 * min(dot(k.xy, p), 0.0) * k.xy;
    p -= vec2(clamp(p.x, -k.z * HEXAGON_APOTHEM, k.z * HEXAGON_APOTHEM), HEXAGON_APOTHEM);
    return length(p) * sign(p.y);
}

float starDistance(vec2 p) {
    // 5-point star signed-distance function (adapted from Inigo Quilez)
    // r  \u2013 outer radius, rf \u2013 inner/outer radius ratio
    const float r  = STAR_OUTER_RADIUS;
    const float rf = STAR_INNER_RATIO;

    // Pre-computed rotation vectors for the star arms (36\xB0 increments)
    const vec2 k1 = vec2(0.809016994, -0.587785252);
    const vec2 k2 = vec2(-k1.x, k1.y);

    // Fold the plane into a single arm sector
    p.x = abs(p.x);
    p -= 2.0 * max(dot(k1, p), 0.0) * k1;
    p -= 2.0 * max(dot(k2, p), 0.0) * k2;
    p.x = abs(p.x);

    // Translate so the top tip of the star lies on the X-axis
    p.y -= r;

    // Vector describing the edge between an outer tip and its adjacent inner point
    vec2 ba = rf * vec2(-k1.y, k1.x) - vec2(0.0, 1.0);
    // Project the point onto that edge and clamp the projection to the segment
    float h = clamp(dot(p, ba) / dot(ba, ba), 0.0, r);

    // Return signed distance (negative => inside, positive => outside)
    return length(p - ba * h) * sign(p.y * ba.x - p.x * ba.y);
}

float crossDistance(vec2 p) {
    // Signed distance function for a cross (union of two rectangles)
    // Adapted from Inigo Quilez (https://iquilezles.org/)
    // Each arm has half-sizes CROSS_HALF_THICKNESS and CROSS_HALF_LENGTH
    p = abs(p);
    if (p.y > p.x) p = p.yx;       // exploit symmetry

    vec2 q = p - vec2(CROSS_HALF_LENGTH, CROSS_HALF_THICKNESS); // subtract half-sizes (length, thickness)

    // Standard rectangle SDF, then take union of the two arms
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
}

float getShapeDistance(vec2 p, float shape) {
    if (shape == SQUARE) return squareDistance(p);
    else if (shape == TRIANGLE) return triangleDistance(p);
    else if (shape == DIAMOND) return diamondDistance(p);
    else if (shape == PENTAGON) return pentagonDistance(p);
    else if (shape == HEXAGON) return hexagonDistance(p);
    else if (shape == STAR) return starDistance(p);
    else if (shape == CROSS) return crossDistance(p);
    else return circleDistance(p); // Default to circle
}

void main() {
    // Discard the fragment if the point is fully transparent and has no image
    if (shapeColor.a == 0.0 && imageAtlasUV.x == -1.0) {
        discard;
    }

    // Discard the fragment if the point has no shape and no image
    if (pointShape == NONE && imageAtlasUV.x == -1.0) {
        discard;
    }

    // Calculate coordinates within the point
    vec2 pointCoord = 2.0 * gl_PointCoord - 1.0;

    // pointCoord covers the full sprite, which is larger than the shape when the point is
    // outlined, carries a bigger image, or is under a pixel. Rescale it so the shape keeps
    // its intended size.
    vec2 shapeCoord = pointCoord;
    float shapeDiameterPx = overallSize;
    if (overallSize > shapeSize && shapeSize > 0.0) {
        shapeCoord = pointCoord * (overallSize / shapeSize);
        shapeDiameterPx = shapeSize;
    }

    vec4 finalShapeColor = vec4(0.0);
    vec4 finalImageColor = vec4(0.0);
    // Geometric coverage, before color alpha: what the host picking pass decides on
    float shapeCoverage = 0.0;
    bool imageCovered = false;
    
    // Ramp of EDGE_RAMP_PX device pixels centred on the shape edge. The sprite is the shape's own
    // size: the outer half of the ramp is clipped only where the shape touches the sprite's sides.
    // A shape under one device pixel is drawn as a one-pixel core with alpha shape\xB2 / core\xB2, the
    // ink of its true area; a size of 0 has no shape.
    if (pointShape != NONE && shapeSize > 0.0) {
        float coreDiameterPx = max(shapeDiameterPx, 1.0);
        float smallAlpha = min(1.0, (shapeDiameterPx * shapeDiameterPx) / (coreDiameterPx * coreDiameterPx));
        vec2 coreCoord = shapeCoord * (shapeDiameterPx / coreDiameterPx); // -1..1 across the core
        float halfRampPx = EDGE_RAMP_PX * 0.5;

        // Signed distance to the edge in device pixels (negative inside). The fill ramp and the
        // stroke band below are both read off it, so they anti-alias identically.
        float edgeDistancePx;
        if (pointShape == CIRCLE) {
            // Along the radius: a ramp in r\xB2 skews coverage outward on small discs.
            float rPx = length(coreCoord) * coreDiameterPx * 0.5;
            edgeDistancePx = rPx - coreDiameterPx * 0.5;
        } else {
            // The field is a true distance in core units, and the core spans -1..1 over
            // coreDiameterPx, so the pixel distance is the field times the core's radius. No
            // screen-space derivative: one taken across a fold of the field (a corner diagonal,
            // where the nearest edge changes) comes out short and would push band pixels to fill.
            edgeDistancePx = getShapeDistance(coreCoord, pointShape) * coreDiameterPx * 0.5;
        }
        float opacity = 1.0 - smoothstep(-halfRampPx, halfRampPx, edgeDistancePx);
        shapeCoverage = opacity;
        opacity *= smallAlpha * shapeColor.a;

        // Edge stroke: an inset band [-strokeWidthPx, 0] along the edge in the per-point stroke
        // color (resolved in the vertex stage: explicit, or a lightness step from the fill).
        // Inset, so the point never grows and the sprite needs no room for it. The width arrives
        // already capped by the shape's depth (vertex stage), so fill always remains inside it.
        vec3 shapeRgb = shapeColor.rgb;
#ifdef POINT_STROKE
        if (strokeWidthPx > 0.0) {
            float bandDistancePx = abs(edgeDistancePx + strokeWidthPx * 0.5) - strokeWidthPx * 0.5;
            float stroke = 1.0 - smoothstep(-halfRampPx, halfRampPx, bandDistancePx);
            shapeRgb = mix(shapeRgb, strokeColor.rgb, stroke * strokeColor.a);
        }
#endif

        finalShapeColor = vec4(shapeRgb, opacity);
    }

    // Handle image rendering with centering logic
    if (imageAtlasUV.x != -1.0) {
        // Calculate image coordinates with centering
        vec2 imageCoord = pointCoord;
        if (overallSize > imageSizeVarying && imageSizeVarying > 0.0) {
            // Image is smaller than overall size, center it
            float scale = imageSizeVarying / overallSize;
            imageCoord = pointCoord / scale;
            
            // Check if we're outside the valid image area
            if (abs(imageCoord.x) > 1.0 || abs(imageCoord.y) > 1.0) {
                // We're outside the image bounds, don't render the image
                finalImageColor = vec4(0.0);
            } else {
                // Sample from texture atlas
                vec2 atlasUV = mix(imageAtlasUV.xy, imageAtlasUV.zw, (imageCoord + 1.0) * 0.5);
                vec4 imageColor = texture(imageAtlasTexture, atlasUV);
                finalImageColor = applyGreyoutToImage(imageColor, isGreyedOut);
                imageCovered = true;
            }
        } else {
            // Image is same size or larger than overall size, no scaling needed
            // Sample from texture atlas
            vec2 atlasUV = mix(imageAtlasUV.xy, imageAtlasUV.zw, (imageCoord + 1.0) * 0.5);
            vec4 imageColor = texture(imageAtlasTexture, atlasUV);
            finalImageColor = applyGreyoutToImage(imageColor, isGreyedOut);
            imageCovered = true;
        }
    }

    // Host picking: a fragment counts where the shape covers at least half of it (and the
    // point is not fully transparent) or an image does; it carries the index and the host's
    // alpha, with no blending and no ramp \u2014 the hard edge is the picked outline
    if (renderMode > 2.5) {
        bool covered = (shapeCoverage >= 0.5 && shapeColor.a > 0.0) || imageCovered;
        if (!covered) discard;
        fragColor = vec4(encodePickingColor(vPointIndex + pickingIndexOffset), pickingAlpha);
        return;
    }

    float finalPointAlpha = max(finalShapeColor.a, finalImageColor.a);
    if (isGreyedOut > 0.0 && greyoutOpacity != -1.0) {
        finalPointAlpha *= greyoutOpacity;
    } else {
        finalPointAlpha *= pointOpacity;
    }

    // Blend image color above point color
    fragColor = vec4(
        mix(finalShapeColor.rgb, finalImageColor.rgb, finalImageColor.a),
        finalPointAlpha
    );

    // Outline ring: band [outlineWidth \xD7 R, R], R = POINT_RING_SCALE \xD7 point radius, device px.
    // Core at least a ramp wide, centred on the band, ramp centred on both edges. A ring is an
    // interface mark: thinner than the ramp it is widened at full alpha, not dimmed.
    //
    //          inner R      outer R
    //   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2591\u2591\u2524\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u251C\u2591\u2591\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
    //            fade  core   fade
    if (isOutlined > 0.0) {
        // Sized from the drawn core (a shape under a pixel is drawn as one), inside the sprite,
        // which the hardware cap can clamp: the ring then tightens onto the body.
        float ringOuterPx = min(POINT_RING_SCALE * max(max(shapeSize, 1.0), imageSizeVarying), overallSize - EDGE_RAMP_PX) * 0.5;
        float ringInnerPx = outlineWidth * ringOuterPx;
        float ringCentrePx = (ringOuterPx + ringInnerPx) * 0.5;
        float ringHalfCorePx = max(ringOuterPx - ringInnerPx, EDGE_RAMP_PX) * 0.5;
        float rPx = length(pointCoord) * overallSize * 0.5;
        float ringAlpha = 1.0 - smoothstep(-EDGE_RAMP_PX * 0.5, EDGE_RAMP_PX * 0.5, abs(rPx - ringCentrePx) - ringHalfCorePx);

        // Grey out the ring color when the point is greyed
        vec3 ringColor = outlineColor.rgb;
        if (isGreyedOut > 0.0) {
            float blendFactor = 0.65;
            if (isDarkenGreyout > 0.0) {
                ringColor = mix(ringColor, vec3(0.2), blendFactor);
            } else {
                ringColor = mix(ringColor, max(backgroundColor.rgb, vec3(0.8)), blendFactor);
            }
        }

        float ringOpacity = ringAlpha * outlineColor.a;
        // Source-over of the ring onto the fragment. A plain mix would tint the ring with a
        // transparent body's colour, and the blend would then apply the ring's alpha twice.
        float outAlpha = ringOpacity + fragColor.a * (1.0 - ringOpacity);
        vec3 outRgb = outAlpha > 0.0
            ? (ringColor * ringOpacity + fragColor.rgb * fragColor.a * (1.0 - ringOpacity)) / outAlpha
            : fragColor.rgb;
        fragColor = vec4(outRgb, outAlpha);
    }

    // Occlusion culling: split every fragment between the opaque core pass
    // (depth-writing, unblended) and the blended fringe pass. The same
    // final-alpha rule runs in both passes so each fragment renders exactly once.
    if (renderMode > 1.5) {
        if (fragColor.a >= OPAQUE_ALPHA_THRESHOLD) discard; // already drawn by core pass
    } else if (renderMode > 0.5) {
        if (fragColor.a < OPAQUE_ALPHA_THRESHOLD) discard;  // left for fringe pass
    }
}
`,Tu=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec2 pointIndices;
in float sourceSize;
in float targetSize;
in vec4 sourceColor;
in vec4 targetColor;
in float shape;
in float imageIndex;
in float imageSize;
#ifdef POINT_STROKE
in vec4 sourceStrokeColor;
in vec4 targetStrokeColor;
in float sourceStrokeWidth;
in float targetStrokeWidth;
#endif
// Position of this point in the render order: 0 is drawn first (bottom)
in float renderRank;

uniform sampler2D positionsTexture;
uniform sampler2D pointStatus;
uniform sampler2D exitTexture;
uniform sampler2D imageAtlasCoords;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform drawVertexUniforms {
  float ratio;
  mat4 transformationMatrix;
  float pointsTextureSize;
  float sizeScale;
  vec2 worldOrigin;
  vec2 screenSize;
  vec4 greyoutColor;
  vec4 backgroundColor;
  float scalePointsOnZoom;
  float maxPointSize;
  float isDarkenGreyout;
  float skipHighlighted;
  float skipGreyed;
  float hasImages;
  float imageCount;
  float imageAtlasCoordsTextureSize;
  float transitionProgress;
  float animateColors;
  float animateSizes;
  float animatePositions;
  vec4 pointDefaultColor;
  float pointDefaultSize;
  float pointsNumber;
  float strokeContrast;
  float strokeDefaultShade;
  float strokeDefaultWidth;
  vec4 strokeDefaultColor;
  float animateStrokeColors;
  float animateStrokeWidths;
} drawVertex;

#define ratio drawVertex.ratio
#define transformationMatrix drawVertex.transformationMatrix
#define pointsTextureSize drawVertex.pointsTextureSize
#define sizeScale drawVertex.sizeScale
#define worldOrigin drawVertex.worldOrigin
#define screenSize drawVertex.screenSize
#define greyoutColor drawVertex.greyoutColor
#define backgroundColor drawVertex.backgroundColor
#define scalePointsOnZoom drawVertex.scalePointsOnZoom
#define maxPointSize drawVertex.maxPointSize
#define isDarkenGreyout drawVertex.isDarkenGreyout
#define skipHighlighted drawVertex.skipHighlighted
#define skipGreyed drawVertex.skipGreyed
#define hasImages drawVertex.hasImages
#define imageCount drawVertex.imageCount
#define imageAtlasCoordsTextureSize drawVertex.imageAtlasCoordsTextureSize
#define transitionProgress drawVertex.transitionProgress
#define animateColors drawVertex.animateColors
#define animateSizes drawVertex.animateSizes
#define animatePositions drawVertex.animatePositions
#define pointDefaultColor drawVertex.pointDefaultColor
#define pointDefaultSize drawVertex.pointDefaultSize
#define pointsNumber drawVertex.pointsNumber
#define strokeContrast drawVertex.strokeContrast
#define strokeDefaultShade drawVertex.strokeDefaultShade
#define strokeDefaultWidth drawVertex.strokeDefaultWidth
#define strokeDefaultColor drawVertex.strokeDefaultColor
#define animateStrokeColors drawVertex.animateStrokeColors
#define animateStrokeWidths drawVertex.animateStrokeWidths
#else
uniform float ratio;
uniform mat3 transformationMatrix;
uniform float pointsTextureSize;
uniform float sizeScale;
uniform vec2 worldOrigin;
uniform vec2 screenSize;
uniform vec4 greyoutColor;
uniform vec4 backgroundColor;
uniform float scalePointsOnZoom;
uniform float maxPointSize;
uniform float isDarkenGreyout;
uniform float skipHighlighted;
uniform float skipGreyed;
uniform float hasImages;
uniform float imageCount;
uniform float imageAtlasCoordsTextureSize;
uniform float transitionProgress;
uniform float animateColors;
uniform float animateSizes;
uniform float animatePositions;
uniform vec4 pointDefaultColor;
uniform float pointDefaultSize;
uniform float pointsNumber;
uniform float strokeContrast;
uniform float strokeDefaultShade;
uniform float strokeDefaultWidth;
uniform vec4 strokeDefaultColor;
uniform float animateStrokeColors;
uniform float animateStrokeWidths;
#endif

out float pointShape;
out float isGreyedOut;
out float isOutlined;
out vec4 shapeColor;
out vec4 imageAtlasUV;
out float shapeSize;
out float imageSizeVarying;
out float overallSize;
// The stroke is compiled in only while some point can have one (POINT_STROKE, see
// Points.isStrokeWanted): without it the draw carries no stroke attributes, varyings or
// per-fragment branch, so a graph that never strokes pays nothing for the feature.
#ifdef POINT_STROKE
out vec4 strokeColor;
out float strokeWidthPx;

// Points lighter than this OKLab lightness get a darker stroke in 'auto' mode, darker ones a
// lighter stroke. 0.6 is roughly sRGB mid-grey, so saturated blues lighten and yellows darken.
const float STROKE_AUTO_LIGHTNESS_THRESHOLD = 0.6;

// Derived stroke color: a constant perceptual step in OKLab lightness from the fill (oklab
// module), chroma reduced only if the shifted color leaves the sRGB gamut so the hue survives.
// \`direction\` is -1 darken, 1 lighten, 0 decide from the fill's own lightness.
vec3 shadeStrokeColor(vec3 fill, float direction) {
  vec3 lab = srgbToOklab(fill);
  if (direction == 0.0) direction = lab.x > STROKE_AUTO_LIGHTNESS_THRESHOLD ? -1.0 : 1.0;
  lab.x += direction * strokeContrast;
  return oklabToSrgb(oklabClampChroma(lab));
}

// Per-point stroke color. An explicit per-point color (no NaN channel) wins; otherwise the
// default: an explicit default color (shade 2), or a shade derived from the fill. A greyed-out
// point always gets the derived shade of its greyed fill, so the stroke fades with the point
// instead of staying a bright rim. Per point in the vertex stage: the color depends on nothing
// the fragment knows.
vec4 resolveStrokeColor(vec4 explicit, vec3 fill, float greyed) {
  if (greyed <= 0.0) {
    if (!any(isnan(explicit))) return explicit;
    if (strokeDefaultShade > 1.5) return strokeDefaultColor;
  }
  float direction = strokeDefaultShade > 1.5 ? 0.0 : strokeDefaultShade;
  return vec4(shadeStrokeColor(fill, direction), 1.0);
}

// Per-point stroke width in CSS px; NaN = the config default.
float resolveStrokeWidth(float width) {
  return isnan(width) ? strokeDefaultWidth : width;
}
#endif
// The point's index, for the host picking pass
flat out float vPointIndex;

// The size rule is the shared pointSize module, so drawing, picking and selection agree on it.
float calculatePointSize(float size) {
  return pointSizePx(size, ratio, transformationMatrix[0][0], scalePointsOnZoom, maxPointSize);
}

// Read-time resolution of NaN channels \u2014 input arrays are used verbatim and never
// edited, so "use the default" stays encoded as NaN all the way to the GPU. A NaN
// resolves to the config default blended toward the exit default along the animated
// exit ramp (0 = present, 1 = gone), so the enter/exit fade of default-valued
// channels drives itself \u2014 no size/color transition needed for a removal. Explicit
// (real) values pass through. EXIT_DEFAULT_* are #defines injected from variables.ts,
// shared with the CPU resolvers (GraphData.getResolvedPoint*). The ramp and the size
// rule are the shared exitRamp module (exit-ramp.glsl), which the hover/focus ring
// draws by too; only the sprite resolves colors.
vec4 resolveColor(vec4 color, float exit) {
  vec4 defaultColor = mix(pointDefaultColor, vec4(EXIT_DEFAULT_COLOR_CHANNEL), exit);
  return mix(color, defaultColor, isnan(color));
}

void main() {
  ivec2 pointTexel = ivec2(pointIndices);

  // Read point status texture: R = greyout, G = outlined
  vec4 status = texelFetch(pointStatus, pointTexel, 0);
  isGreyedOut = status.r;
  isOutlined = status.g;
  float isHighlighted = (status.r == 0.0) ? 1.0 : 0.0;

  // Discard point based on rendering mode
  if (skipHighlighted > 0.0 && isHighlighted > 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }
  if (skipGreyed > 0.0 && isHighlighted <= 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  // Exit ramp (exit-ramp.glsl): 0 = present, 1 = gone. The caller drives the visual
  // fade via setPointSizes/setPointColors; here we only remove the point once it is
  // fully gone.
  float exit = exitRamp(texelFetch(exitTexture, pointTexel, 0), animatePositions, transitionProgress);
  if (exit >= 1.0) {
    // Fully gone \u2014 skip. Also avoids using a NaN position on the snapped path.
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  // Position
  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec2 point = pointPosition.rg;

  // World space to normalized device coordinates: worldOrigin lands at the centre of
  // the screen and one world unit spans one CSS pixel at zoom 1, whatever the space
  // size. The transformation matrix applies zoom and pan on top.
  vec2 normalizedPosition = (point - worldOrigin) * (2.0 / screenSize);

  #ifdef USE_UNIFORM_BUFFERS
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 finalPosition = transformMat3 * vec3(normalizedPosition, 1);
  #else
  vec3 finalPosition = transformationMatrix * vec3(normalizedPosition, 1);
  #endif
  vPointIndex = pointIndices.y * pointsTextureSize + pointIndices.x;
  // Depth encodes stacking order: later in the render order = drawn on top = nearer
  // (smaller z). The rank equals the point index unless setPointRenderOrder is used.
  // Harmless when depth testing is off (depthCompare 'always').
  float depthZ = 1.0 - 2.0 * (renderRank + 0.5) / max(pointsNumber, 1.0);
  gl_Position = vec4(finalPosition.rg, depthZ, 1.0);

  // Resolve NaN channels against the animated exit ramp before mixing \u2014 default
  // sizes/colors of an entering or leaving point fade with the ramp regardless of
  // whether a size/color transition is active.
  float pointSize = transitionedSize(sourceSize, targetSize, animateSizes, transitionProgress, exit, pointDefaultSize);
  vec4 pointColor = animateColors > 0.0
    ? mix(resolveColor(sourceColor, exit), resolveColor(targetColor, exit), transitionProgress)
    : resolveColor(targetColor, exit);


  // Calculate sizes for shape and image. A point without an image has no image
  // size: the attribute still holds a value (a copy of the target point size when
  // none was given), and letting it into the sprite footprint would hold the
  // outline ring at the target while the shape is still transitioning.
  bool hasImage = hasImages > 0.0 && imageIndex >= 0.0 && imageIndex < imageCount;
  float shapeSizeValue = calculatePointSize(pointSize * sizeScale);
  float imageSizeValue = hasImage ? calculatePointSize(imageSize * sizeScale) : 0.0;

  // A size of 0 draws nothing; the sprite below is never smaller than a pixel.
  if (max(shapeSizeValue, imageSizeValue) <= 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  // Use the larger of the shape, image, and 1-pixel minimum. The sprite is the shape's own size:
  // the ramp stays centred on the edge, and its outer half is clipped where the shape meets the
  // sprite's sides.
  float overallSizeValue = max(max(shapeSizeValue, 1.0), imageSizeValue);

  // Outlined: scale the drawn core (a shape is never under a pixel) to the ring size, then add
  // ramp room on both sides.
  if (isOutlined > 0.0) {
    overallSizeValue = POINT_RING_SCALE * max(max(shapeSizeValue, 1.0), imageSizeValue) + 2.0 * EDGE_RAMP_PX;
  }
  // Clamp to the hardware limit; the fragment shader preserves the shape size.
  overallSizeValue = min(overallSizeValue, maxPointSize * ratio);

  gl_PointSize = overallSizeValue;

  // Pass size information to fragment shader
  shapeSize = shapeSizeValue;
  imageSizeVarying = imageSizeValue;
  overallSize = overallSizeValue;

  shapeColor = pointColor;
  pointShape = shape;

  // Adjust color of greyed-out points
  if (isGreyedOut > 0.0) {
    if (greyoutColor[0] != -1.0) {
      shapeColor = greyoutColor;
    } else {
      // If greyoutColor is not set, make color lighter or darker based on isDarkenGreyout
      float blendFactor = 0.65;

      if (isDarkenGreyout > 0.0) {
        shapeColor.rgb = mix(shapeColor.rgb, vec3(0.2), blendFactor);
      } else {
        shapeColor.rgb = mix(shapeColor.rgb, max(backgroundColor.rgb, vec3(0.8)), blendFactor);
      }
    }
  }

#ifdef POINT_STROKE
  // Stroke: the per-point channels have their own transition properties, so a stroke change
  // never restarts the fill's transition (whose source buffer holds older colors) and vice versa.
  float strokeWidth = animateStrokeWidths > 0.0
    ? mix(resolveStrokeWidth(sourceStrokeWidth), resolveStrokeWidth(targetStrokeWidth), transitionProgress)
    : resolveStrokeWidth(targetStrokeWidth);
  // Capped at STROKE_MAX_DEPTH of the shape's depth (shapeGeometry module): a small point keeps
  // a narrower band and its fill, and the band never switches off as a point shrinks.
  strokeWidthPx = min(max(strokeWidth, 0.0) * ratio, shapeSizeValue * 0.5 * shapeInradius(shape) * STROKE_MAX_DEPTH);
  strokeColor = vec4(0.0);
  if (strokeWidthPx > 0.0) {
    strokeColor = animateStrokeColors > 0.0
      ? mix(resolveStrokeColor(sourceStrokeColor, shapeColor.rgb, isGreyedOut),
            resolveStrokeColor(targetStrokeColor, shapeColor.rgb, isGreyedOut), transitionProgress)
      : resolveStrokeColor(targetStrokeColor, shapeColor.rgb, isGreyedOut);
  }
#endif

  if (!hasImage) {
    imageAtlasUV = vec4(-1.0);
  } else {
    int atlasTexSize = int(imageAtlasCoordsTextureSize);
    int atlasCoordIndex = int(imageIndex);
    ivec2 atlasTexel = ivec2(atlasCoordIndex % atlasTexSize, atlasCoordIndex / atlasTexSize);
    vec4 atlasCoords = texelFetch(imageAtlasCoords, atlasTexel, 0);
    imageAtlasUV = atlasCoords;
  }
}
`,Gx=`
vec3 srgbToLinear(vec3 c) {
  vec3 lo = c / 12.92;
  vec3 hi = pow((c + 0.055) / 1.055, vec3(2.4));
  return mix(lo, hi, step(0.04045, c));
}

vec3 linearToSrgb(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  vec3 lo = c * 12.92;
  vec3 hi = 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055;
  return mix(lo, hi, step(0.0031308, c));
}

vec3 linearToOklab(vec3 c) {
  const mat3 rgbToLms = mat3(
    0.4122214708, 0.2119034982, 0.0883024619,
    0.5363325363, 0.6806995451, 0.2817188376,
    0.0514459929, 0.1073969566, 0.6299787005
  );
  const mat3 lmsToLab = mat3(
     0.2104542553,  1.9779984951,  0.0259040371,
     0.7936177850, -2.4285922050,  0.7827717662,
    -0.0040720468,  0.4505937099, -0.8086757660
  );
  vec3 lms = rgbToLms * c;
  lms = sign(lms) * pow(abs(lms), vec3(1.0 / 3.0)); // cube root, safe for tiny negatives
  return lmsToLab * lms;
}

vec3 oklabToLinear(vec3 lab) {
  const mat3 labToLms = mat3(
    1.0,           1.0,           1.0,
    0.3963377774, -0.1055613458, -0.0894841775,
    0.2158037573, -0.0638541728, -1.2914855480
  );
  const mat3 lmsToRgb = mat3(
     4.0767416621, -1.2684380046, -0.0041960863,
    -3.3077115913,  2.6097574011, -0.7034186147,
     0.2309699292, -0.3413193965,  1.7076147010
  );
  vec3 lms = labToLms * lab;
  return lmsToRgb * (lms * lms * lms);
}

vec3 srgbToOklab(vec3 srgb) { return linearToOklab(srgbToLinear(srgb)); }
vec3 oklabToSrgb(vec3 lab) { return linearToSrgb(oklabToLinear(lab)); }

bool isInSrgbGamut(vec3 linear) {
  const float eps = 1e-4;
  return all(greaterThanEqual(linear, vec3(-eps))) && all(lessThanEqual(linear, vec3(1.0 + eps)));
}

// Gamut mapping that keeps lightness and hue: scale chroma down until the color fits in
// sRGB. The grey axis (chroma 0) is always in gamut for L in 0..1, so the bisection always
// converges; 8 steps give a chroma scale accurate to 1/256.
vec3 oklabClampChroma(vec3 lab) {
  lab.x = clamp(lab.x, 0.0, 1.0);
  if (isInSrgbGamut(oklabToLinear(lab))) return lab;
  float lo = 0.0;
  float hi = 1.0;
  for (int i = 0; i < 8; i++) {
    float mid = 0.5 * (lo + hi);
    if (isInSrgbGamut(oklabToLinear(vec3(lab.x, lab.yz * mid)))) lo = mid; else hi = mid;
  }
  return vec3(lab.x, lab.yz * lo);
}
`,nR={name:"oklab",vs:Gx,fs:Gx},Yx=`
const float SQUARE_HALF_SIZE = 0.8;
const float TRIANGLE_HALF_EDGE = 0.9;
const float DIAMOND_HALF_WIDTH = 0.8;
const float DIAMOND_ASPECT = 1.2;        // > 1: taller than wide
const float PENTAGON_APOTHEM = 0.726542528;
const float HEXAGON_APOTHEM = 0.8;
const float STAR_OUTER_RADIUS = 0.9;
const float STAR_INNER_RATIO = 0.45;     // inner / outer radius
const float CROSS_HALF_LENGTH = 0.8;
const float CROSS_HALF_THICKNESS = 0.3;

// The stroke band takes at most this fraction of a shape's depth, so a point is never more
// than half stroke: a small point keeps a narrower band and its fill rather than losing the
// stroke, and nothing switches on or off while zooming.
const float STROKE_MAX_DEPTH = 0.5;

// Depth of a shape's deepest interior point, as a fraction of the sprite radius: how far the
// centre of the fill sits from the nearest edge (a circle's centre is a full radius in; a cross
// arm is only its half-thickness). Shape ids as in the PointShape enum.
float shapeInradius(float shape) {
  if (shape == 1.0) return SQUARE_HALF_SIZE;
  else if (shape == 2.0) return TRIANGLE_HALF_EDGE / sqrt(3.0);     // equilateral: inradius = edge / (2 sqrt 3)
  else if (shape == 3.0) return DIAMOND_HALF_WIDTH * DIAMOND_ASPECT / sqrt(DIAMOND_ASPECT * DIAMOND_ASPECT + 1.0);
  else if (shape == 4.0) return PENTAGON_APOTHEM;
  else if (shape == 5.0) return HEXAGON_APOTHEM;
  else if (shape == 6.0) return STAR_OUTER_RADIUS * STAR_INNER_RATIO;   // the inner vertices
  else if (shape == 7.0) return CROSS_HALF_THICKNESS;
  else return 1.0;                                                        // circle
}
`,oR={name:"shapeGeometry",vs:Yx,fs:Yx},sR=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;
uniform sampler2D pointSize;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform findPointsInRectUniforms {
  float sizeScale;
  vec2 worldOrigin;
  vec2 screenSize;
  float ratio;
  mat4 transformationMatrix;
  vec2 rect0;
  vec2 rect1;
  float scalePointsOnZoom;
  float maxPointSize;
} findPointsInRect;

#define sizeScale findPointsInRect.sizeScale
#define worldOrigin findPointsInRect.worldOrigin
#define screenSize findPointsInRect.screenSize
#define ratio findPointsInRect.ratio
#define transformationMatrix findPointsInRect.transformationMatrix
#define rect0 findPointsInRect.rect0
#define rect1 findPointsInRect.rect1
#define scalePointsOnZoom findPointsInRect.scalePointsOnZoom
#define maxPointSize findPointsInRect.maxPointSize
#else
uniform float sizeScale;
uniform vec2 worldOrigin;
uniform vec2 screenSize;
uniform float ratio;
uniform mat3 transformationMatrix;
uniform vec2 rect0;
uniform vec2 rect1;
uniform float scalePointsOnZoom;
uniform float maxPointSize;
#endif

out vec4 fragColor;

// The drawn size (draw-points.vert), so the selection footprint is the rendered point: a shape
// under a device pixel is drawn as one. In CSS px, the units of the rectangle and screenSize.
float pointSizeF(float size) {
  return max(pointSizePx(size, ratio, transformationMatrix[0][0], scalePointsOnZoom, maxPointSize), 1.0) / ratio;
}

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  // Skip absent (faded-out) points \u2014 never select a removed point. exit.G = absent.
  if (texelFetch(exitTexture, pointTexel, 0).g > 0.5) {
    fragColor = vec4(0.0);
    return;
  }

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  // World space to normalized device coordinates (worldOrigin at the screen centre)
  vec2 p = (pointPosition.rg - worldOrigin) * (2.0 / screenSize);
  #ifdef USE_UNIFORM_BUFFERS
  // Convert mat4 to mat3 for vec3 multiplication
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 final = transformMat3 * vec3(p, 1);
  #else
  vec3 final = transformationMatrix * vec3(p, 1);
  #endif

  vec4 pSize = texelFetch(pointSize, pointTexel, 0);
  float size = pSize.r * sizeScale;
  // A size of 0 draws nothing (draw-points.vert), so it is not selectable either.
  if (size <= 0.0) {
    fragColor = vec4(0.0);
    return;
  }

  float left = 2.0 * (rect0.x - 0.5 * pointSizeF(size)) / screenSize.x - 1.0;
  float right = 2.0 * (rect1.x + 0.5 * pointSizeF(size)) / screenSize.x - 1.0;
  float top =  2.0 * (rect0.y - 0.5 * pointSizeF(size)) / screenSize.y - 1.0;
  float bottom =  2.0 * (rect1.y + 0.5 * pointSizeF(size)) / screenSize.y - 1.0;

  fragColor = vec4(0.0, 0.0, pointPosition.r, pointPosition.g);
  if (final.x >= left && final.x <= right && final.y >= top && final.y <= bottom) {
    fragColor.r = 1.0;
  }
}

`,aR=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;
uniform sampler2D polygonPathTexture; // Texture containing polygon path points
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform findPointsInPolygonUniforms {
  vec2 worldOrigin;
  vec2 screenSize;
  mat4 transformationMatrix;
  float polygonPathLength;
} findPointsInPolygon;

#define worldOrigin findPointsInPolygon.worldOrigin
#define screenSize findPointsInPolygon.screenSize
#define transformationMatrix findPointsInPolygon.transformationMatrix
#define polygonPathLength int(findPointsInPolygon.polygonPathLength)
#else
uniform int polygonPathLength;
uniform vec2 worldOrigin;
uniform vec2 screenSize;
uniform mat3 transformationMatrix;
#endif

out vec4 fragColor;

// Get a point from the polygon path texture at a specific index
vec2 getPolygonPoint(sampler2D pathTexture, int index, int pathLength) {
  if (index >= pathLength) return vec2(0.0);

  // The path is written row-major into a square texture. Ask the texture how wide it
  // is rather than re-deriving ceil(sqrt(pathLength)) \u2014 that duplicates the formula
  // the allocation used, and a local named textureSize would shadow this builtin.
  int width = textureSize(pathTexture, 0).x;

  vec4 pathData = texelFetch(pathTexture, ivec2(index % width, index / width), 0);

  return pathData.xy;
}

// Point-in-polygon algorithm using ray casting
bool pointInPolygon(vec2 point, sampler2D pathTexture, int pathLength) {
  bool inside = false;
  
  for (int i = 0; i < 2048; i++) {
    if (i >= pathLength) break;
    
    int j = (i + 1) % pathLength;
    
    vec2 pi = getPolygonPoint(pathTexture, i, pathLength);
    vec2 pj = getPolygonPoint(pathTexture, j, pathLength);
    
    if (((pi.y > point.y) != (pj.y > point.y)) &&
        (point.x < (pj.x - pi.x) * (point.y - pi.y) / (pj.y - pi.y) + pi.x)) {
      inside = !inside;
    }
  }
  
  return inside;
}

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  // Skip absent (faded-out) points \u2014 never select a removed point. exit.G = absent.
  if (texelFetch(exitTexture, pointTexel, 0).g > 0.5) {
    fragColor = vec4(0.0);
    return;
  }

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  // World space to normalized device coordinates (worldOrigin at the screen centre)
  vec2 p = (pointPosition.rg - worldOrigin) * (2.0 / screenSize);
  #ifdef USE_UNIFORM_BUFFERS
  // Convert mat4 to mat3 for vec3 multiplication
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 final = transformMat3 * vec3(p, 1);
  #else
  vec3 final = transformationMatrix * vec3(p, 1);
  #endif

  // Convert to screen coordinates for polygon check
  vec2 screenPos = (final.xy + 1.0) * screenSize / 2.0;
  
  fragColor = vec4(0.0, 0.0, pointPosition.r, pointPosition.g);
  
  // Check if point center is inside the polygon
  if (pointInPolygon(screenPos, polygonPathTexture, polygonPathLength)) {
    fragColor.r = 1.0;
  }
} `,lR=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform drawHighlightedUniforms {
  float sourceSize;
  float targetSize;
  float imageSize;
  mat4 transformationMatrix;
  float pointsTextureSize;
  float sizeScale;
  vec2 worldOrigin;
  vec2 screenSize;
  float scalePointsOnZoom;
  float pointIndex;
  float maxPointSize;
  vec4 color;
  float universalPointOpacity;
  float greyoutOpacity;
  float isDarkenGreyout;
  vec4 backgroundColor;
  vec4 greyoutColor;
  float animatePositions;
  float transitionProgress;
  float animateSizes;
  float pointDefaultSize;
  float width;
  float pixelRatio;
} drawHighlighted;

#define width drawHighlighted.width
#else
uniform float width;
uniform float pixelRatio;
#endif

in vec2 vertexPosition;
in float pointOpacity;
in vec3 rgbColor;
flat in float ringRadiusPx;
flat in float quadHalfPx;

out vec4 fragColor;

// Ring band [sqrt(width) \xD7 R, R], R the outer radius in device px (\`width\` is the inner
// edge as a squared radius). Core at least EDGE_RAMP_PX wide, centred on the band, ramp
// centred on both edges. A ring is an interface mark: thinner than the ramp it is widened
// at full alpha, not dimmed.
void main () {
  float rPx = length(vertexPosition) * quadHalfPx;
  float innerPx = sqrt(width) * ringRadiusPx;
  float centrePx = (ringRadiusPx + innerPx) * 0.5;
  float halfCorePx = max(ringRadiusPx - innerPx, EDGE_RAMP_PX) * 0.5;
  float ring = 1.0 - smoothstep(-EDGE_RAMP_PX * 0.5, EDGE_RAMP_PX * 0.5, abs(rPx - centrePx) - halfCorePx);
  fragColor = vec4(rgbColor, ring * pointOpacity);
}`,cR=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec2 vertexCoord;

uniform sampler2D positionsTexture;
uniform sampler2D pointStatus;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform drawHighlightedUniforms {
  float sourceSize;
  float targetSize;
  float imageSize;
  mat4 transformationMatrix;
  float pointsTextureSize;
  float sizeScale;
  vec2 worldOrigin;
  vec2 screenSize;
  float scalePointsOnZoom;
  float pointIndex;
  float maxPointSize;
  vec4 color;
  float universalPointOpacity;
  float greyoutOpacity;
  float isDarkenGreyout;
  vec4 backgroundColor;
  vec4 greyoutColor;
  float animatePositions;
  float transitionProgress;
  float animateSizes;
  float pointDefaultSize;
  float width;
  float pixelRatio;
} drawHighlighted;

#define sourceSize drawHighlighted.sourceSize
#define targetSize drawHighlighted.targetSize
#define imageSize drawHighlighted.imageSize
#define pixelRatio drawHighlighted.pixelRatio
#define transformationMatrix drawHighlighted.transformationMatrix
#define pointsTextureSize drawHighlighted.pointsTextureSize
#define sizeScale drawHighlighted.sizeScale
#define worldOrigin drawHighlighted.worldOrigin
#define screenSize drawHighlighted.screenSize
#define scalePointsOnZoom drawHighlighted.scalePointsOnZoom
#define pointIndex drawHighlighted.pointIndex
#define maxPointSize drawHighlighted.maxPointSize
#define color drawHighlighted.color
#define universalPointOpacity drawHighlighted.universalPointOpacity
#define greyoutOpacity drawHighlighted.greyoutOpacity
#define isDarkenGreyout drawHighlighted.isDarkenGreyout
#define backgroundColor drawHighlighted.backgroundColor
#define greyoutColor drawHighlighted.greyoutColor
#define animatePositions drawHighlighted.animatePositions
#define transitionProgress drawHighlighted.transitionProgress
#define animateSizes drawHighlighted.animateSizes
#define pointDefaultSize drawHighlighted.pointDefaultSize
#else
uniform float sourceSize;
uniform float targetSize;
uniform float imageSize;
uniform mat3 transformationMatrix;
uniform float pointsTextureSize;
uniform float sizeScale;
uniform vec2 worldOrigin;
uniform vec2 screenSize;
uniform float scalePointsOnZoom;
uniform float pointIndex;
uniform float maxPointSize;
uniform vec4 color;
uniform float universalPointOpacity;
uniform float greyoutOpacity;
uniform float isDarkenGreyout;
uniform vec4 backgroundColor;
uniform vec4 greyoutColor;
uniform float animatePositions;
uniform float transitionProgress;
uniform float animateSizes;
uniform float pointDefaultSize;
uniform float width;
uniform float pixelRatio;
#endif
out vec2 vertexPosition;
out float pointOpacity;
out vec3 rgbColor;
// Ring outer radius and quad half-size, device px: the ring plus a full ramp per side.
flat out float ringRadiusPx;
flat out float quadHalfPx;

// The drawn size (draw-points.vert), so the ring follows it. The sizes are uniforms here.
float calculatePointSize(float pointSize) {
  return pointSizePx(pointSize, pixelRatio, transformationMatrix[0][0], scalePointsOnZoom, maxPointSize);
}

void main () {
  vertexPosition = vertexCoord;

  int pointTexSize = int(pointsTextureSize);
  int pointLinearIndex = int(pointIndex);
  // Integer % and / are undefined on a negative or zero operand, and pointIndex
  // defaults to -1 (no point highlighted). Nothing to draw in that case anyway.
  if (pointLinearIndex < 0 || pointTexSize <= 0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }
  ivec2 pointTexel = ivec2(pointLinearIndex % pointTexSize, pointLinearIndex / pointTexSize);

  // Exit ramp (exit-ramp.glsl), the sprite's: drop the ring only once the point is fully
  // gone, so it stays on the body while that fades out or in.
  float exit = exitRamp(texelFetch(exitTexture, pointTexel, 0), animatePositions, transitionProgress);
  if (exit >= 1.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);

  rgbColor = color.rgb;
  pointOpacity = color.a * universalPointOpacity;
  vec4 greyoutStatus = texelFetch(pointStatus, pointTexel, 0);
  if (greyoutStatus.r > 0.0) {
    if (greyoutColor[0] != -1.0) {
      rgbColor = greyoutColor.rgb;
      pointOpacity = greyoutColor.a;
    } else {
      // If greyoutColor is not set, make color lighter or darker based on isDarkenGreyout
      float blendFactor = 0.65; // Controls how much to modify (0.0 = original, 1.0 = target color)
      
      if (isDarkenGreyout > 0.0) {
        // Darken the color
        rgbColor = mix(rgbColor, vec3(0.2), blendFactor);
      } else {
        // Lighten the color
        rgbColor = mix(rgbColor, max(backgroundColor.rgb, vec3(0.8)), blendFactor);
      }
    }

    if (greyoutOpacity != -1.0) {
      pointOpacity *= greyoutOpacity;
    }
  }

  // The sprite's footprint this frame: its size by the shared rule (exit-ramp.glsl), and
  // the image size (0 for a point without an image) when larger.
  float pointSize = transitionedSize(sourceSize, targetSize, animateSizes, transitionProgress, exit, pointDefaultSize);
  float footprint = max(calculatePointSize(pointSize * sizeScale), calculatePointSize(imageSize * sizeScale));

  // A size of 0 draws nothing (draw-points.vert culls the sprite), so it has no ring; the
  // quad below is never narrower than the ramp.
  if (footprint <= 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  // Ring radius from the drawn core, device px: a shape under a device pixel is drawn as one.
  ringRadiusPx = max(footprint, 1.0) * POINT_RING_SCALE * 0.5;
  quadHalfPx = ringRadiusPx + EDGE_RAMP_PX;
  float radius = quadHalfPx / pixelRatio / transformationMatrix[0][0];

  // Calculate point position in screen space
  vec2 a = pointPosition.xy;
  vec2 b = pointPosition.xy + vec2(0.0, radius);
  vec2 xBasis = b - a;
  vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
  vec2 pointPositionInScreenSpace = a + xBasis * vertexCoord.x + yBasis * radius * vertexCoord.y;

  // World space to normalized device coordinates (worldOrigin at the screen centre)
  vec2 p = (pointPositionInScreenSpace - worldOrigin) * (2.0 / screenSize);
  #ifdef USE_UNIFORM_BUFFERS
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 final = transformMat3 * vec3(p, 1);
  #else
  vec3 final = transformationMatrix * vec3(p, 1);
  #endif
  
  gl_Position = vec4(final.rg, 0, 1);
}`,uR=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec4 rgba;

out vec4 fragColor;

void main() {
  // Circular sprite: hover is radius-based, like the rendered point shape.
  vec2 fromCenter = 2.0 * gl_PointCoord - 1.0;
  if (dot(fromCenter, fromCenter) > 1.0) discard;
  fragColor = rgba;
}
`,dR=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

// Fills the screen-space picking buffer: every point rasterizes its sprite at
// its projected screen position, carrying [index, x, y] to the fragment shader.
// Hover detection then only reads a small window of this buffer under the
// cursor \u2014 it never has to touch the point set again until the scene changes
// (see Points.updatePickingBuffer / Graph.findHoveredItem).
//
// The two-pass highlight priority mirrors the draw order: greyed first, then
// highlighted (top-most wins), since later points overwrite earlier ones with
// the depth test off.

in vec2 pointIndices;
in float size;
in float imageSize;
in float imageIndex;

uniform sampler2D positionsTexture;
uniform sampler2D pointStatus;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform fillPickingBufferUniforms {
  float pointsTextureSize;
  float sizeScale;
  vec2 worldOrigin;
  vec2 screenSize;
  float ratio;
  float pickingPixelRatio;
  mat4 transformationMatrix;
  float scalePointsOnZoom;
  float maxPointSize;
  float skipHighlighted;
  float skipGreyed;
  float pointDefaultSize;
  float hasImages;
  float imageCount;
} fillPickingBuffer;

#define pointsTextureSize fillPickingBuffer.pointsTextureSize
#define sizeScale fillPickingBuffer.sizeScale
#define worldOrigin fillPickingBuffer.worldOrigin
#define screenSize fillPickingBuffer.screenSize
#define ratio fillPickingBuffer.ratio
#define pickingPixelRatio fillPickingBuffer.pickingPixelRatio
#define transformationMatrix fillPickingBuffer.transformationMatrix
#define scalePointsOnZoom fillPickingBuffer.scalePointsOnZoom
#define maxPointSize fillPickingBuffer.maxPointSize
#define skipHighlighted fillPickingBuffer.skipHighlighted
#define skipGreyed fillPickingBuffer.skipGreyed
#define pointDefaultSize fillPickingBuffer.pointDefaultSize
#define hasImages fillPickingBuffer.hasImages
#define imageCount fillPickingBuffer.imageCount
#else
uniform float pointsTextureSize;
uniform float sizeScale;
uniform vec2 worldOrigin;
uniform vec2 screenSize;
uniform float ratio;
uniform float pickingPixelRatio;
uniform mat3 transformationMatrix;
uniform float scalePointsOnZoom;
uniform float maxPointSize;
uniform float skipHighlighted;
uniform float skipGreyed;
uniform float pointDefaultSize;
uniform float hasImages;
uniform float imageCount;
#endif

out vec4 rgba;

// Keep tiny points pickable: below this sprite footprint (in picking-buffer
// pixels) a point could fall between the buffer's texels.
const float minPickingSize = 2.0;

// The drawn size (draw-points.vert), so the pickable footprint is the rendered point.
float calculatePointSize(float size, float pxPerUnit) {
  return pointSizePx(size, ratio, pxPerUnit, scalePointsOnZoom, maxPointSize);
}

void main() {
  // Fully clipped: a skipped point must not rasterize anywhere in the buffer.
  rgba = vec4(-1.0);
  gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
  gl_PointSize = 1.0;

  ivec2 pointTexel = ivec2(pointIndices);

  // Skip absent (faded-out) points so hover never lands on a removed one. Their
  // size/position may still look hittable mid-fade (only alpha faded), so the exit
  // status is the reliable signal. exit.G = current absence.
  vec4 exitStatus = texelFetch(exitTexture, pointTexel, 0);
  if (exitStatus.g > 0.5) return;

  vec4 greyoutStatus = texelFetch(pointStatus, pointTexel, 0);
  float isHighlighted = (greyoutStatus.r == 0.0) ? 1.0 : 0.0;

  if (skipHighlighted > 0.0 && isHighlighted > 0.0) return;
  if (skipGreyed > 0.0 && isHighlighted <= 0.0) return;

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec2 point = pointPosition.rg;

  // World space to normalized device coordinates (worldOrigin at the screen centre)
  vec2 normalizedPosition = (point - worldOrigin) * (2.0 / screenSize);

  #ifdef USE_UNIFORM_BUFFERS
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 finalPosition = transformMat3 * vec3(normalizedPosition, 1);
  #else
  vec3 finalPosition = transformationMatrix * vec3(normalizedPosition, 1);
  #endif
  float pxPerUnit = transformationMatrix[0][0];
  vec2 ndc = finalPosition.xy;

  // Resolve a NaN size at read time. The absent-point guard above already returned,
  // so a NaN here means "use the config default".
  float resolvedSize = isnan(size) ? pointDefaultSize : size;

  // Same footprint as draw-points.vert: the image size counts only for a point
  // that draws an image.
  bool hasImage = hasImages > 0.0 && imageIndex >= 0.0 && imageIndex < imageCount;
  float shapeSizeValue = calculatePointSize(resolvedSize * sizeScale, pxPerUnit);
  float imageSizeValue = hasImage ? calculatePointSize(imageSize * sizeScale, pxPerUnit) : 0.0;
  // A size of 0 draws nothing (draw-points.vert), so it is not hoverable either.
  if (max(shapeSizeValue, imageSizeValue) <= 0.0) return;

  // Device px \u2192 CSS px \u2192 picking-buffer px (the buffer is smaller than the screen)
  float spriteSize = max(shapeSizeValue, imageSizeValue) / ratio * pickingPixelRatio;

  float index = pointIndices.g * pointsTextureSize + pointIndices.r;
  rgba = vec4(index, pointPosition.rg, 0.0);
  gl_PointSize = max(spriteSize, minPickingSize);
  // 2D: later points overwrite earlier ones (depth test off), matching draw order.
  gl_Position = vec4(ndc, 0.0, 1.0);
}
`,jx=`// A point's size in device pixels: the size (CSS px) by the pixel ratio and the zoom \u2014 1:1 with
// scalePointsOnZoom, otherwise held near constant \u2014 capped at the hardware sprite limit.
// pxPerUnit is the zoom scale. Module code precedes each shader's own uniforms, so they come in
// as parameters.
float pointSizePx(float size, float ratio, float pxPerUnit, float scalePointsOnZoom, float maxPointSize) {
  float zoom = scalePointsOnZoom > 0.0 ? pxPerUnit : min(5.0, max(1.0, pxPerUnit * 0.01));
  return min(size * ratio * zoom, maxPointSize * ratio);
}
`,Fs={name:"pointSize",vs:jx,fs:jx},hR=`// Shared by draw-points.vert and draw-highlighted.vert, so the sprite and its hover/focus ring
// fade and mix sizes by one rule. Module code precedes each shader's own uniforms, so they come
// in as parameters; EXIT_DEFAULT_SIZE is a #define injected from variables.ts.

// How gone a point is, 0 = present, 1 = gone, from its exit-texture texel (R = previous absence,
// G = current absence). During a position transition the enter/exit fade blends R\u2192G; otherwise
// the settled G, so an unrelated color or size transition cannot replay the fade.
float exitRamp(vec4 exitStatus, float animatePositions, float transitionProgress) {
  return animatePositions > 0.0 ? mix(exitStatus.r, exitStatus.g, transitionProgress) : exitStatus.g;
}

// A NaN size means "use the default": the config default blended toward the exit default along
// the ramp, so a default-sized point grows in and shrinks out with its fade. Explicit values
// pass through.
float resolveSize(float size, float exit, float pointDefaultSize) {
  return isnan(size) ? mix(pointDefaultSize, EXIT_DEFAULT_SIZE, exit) : size;
}

// The point's size this frame: the source\u2192target mix by progress during a size transition,
// else the target, each resolved along the exit ramp.
float transitionedSize(float sourceSize, float targetSize, float animateSizes, float transitionProgress, float exit, float pointDefaultSize) {
  return animateSizes > 0.0
    ? mix(resolveSize(sourceSize, exit, pointDefaultSize), resolveSize(targetSize, exit, pointDefaultSize), transitionProgress)
    : resolveSize(targetSize, exit, pointDefaultSize);
}
`,Kx={name:"exitRamp",vs:hR},fR=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec4 rgba;

out vec4 fragColor;

void main() {
  fragColor = rgba;
}`,pR=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec2 pointIndices;

uniform sampler2D positionsTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform fillSampledPointsUniforms {
  float pointsTextureSize;
  mat4 transformationMatrix;
  vec2 worldOrigin;
  vec2 screenSize;
} fillSampledPoints;

#define pointsTextureSize fillSampledPoints.pointsTextureSize
#define transformationMatrix fillSampledPoints.transformationMatrix
#define worldOrigin fillSampledPoints.worldOrigin
#define screenSize fillSampledPoints.screenSize
#else
uniform float pointsTextureSize;
uniform vec2 worldOrigin;
uniform vec2 screenSize;
uniform mat3 transformationMatrix;
#endif

out vec4 rgba;

void main() {
  ivec2 pointTexel = ivec2(pointIndices);

  // Keep absent (faded-out) points out of the sample. exit.G = current absence.
  if (texelFetch(exitTexture, pointTexel, 0).g > 0.5) {
    rgba = vec4(0.0);
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  // World space to normalized device coordinates (worldOrigin at the screen centre)
  vec2 p = (pointPosition.rg - worldOrigin) * (2.0 / screenSize);
  #ifdef USE_UNIFORM_BUFFERS
  // Convert mat4 to mat3 for vec3 multiplication
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 final = transformMat3 * vec3(p, 1);
  #else
  vec3 final = transformationMatrix * vec3(p, 1);
  #endif

  vec2 pointScreenPosition = (final.xy + 1.0) * screenSize / 2.0;
  float index = pointIndices.g * pointsTextureSize + pointIndices.r;
  rgba = vec4(index, 1.0, pointPosition.xy);
  float i = (pointScreenPosition.x + 0.5) / screenSize.x;
  float j = (pointScreenPosition.y + 0.5) / screenSize.y;
  gl_Position = vec4(2.0 * vec2(i, j) - 1.0, 0.0, 1.0);

  gl_PointSize = 1.0;
}`,gR=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;
uniform sampler2D velocity;
uniform sampler2D pinnedStatusTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform updatePositionUniforms {
  float friction;
  float maxStep;
} updatePosition;

#define friction updatePosition.friction
#define maxStep updatePosition.maxStep
#else
uniform float friction;
uniform float maxStep;
#endif

out vec4 fragColor;

// Neither component is NaN or an infinity. Read from the exponent bits, as the
// data bounds do (reduce-bounds-buckets.frag): ANGLE's Metal backend compiles
// with fast math, which may assume no NaNs and fold a comparison-based test
// away. Only ever applied to a value loaded from a texture, which a compiler
// cannot assume to be finite.
bool isFiniteVector(vec2 v) {
  uvec2 exponent = floatBitsToUint(v) & 0x7f800000u;
  return all(notEqual(exponent, uvec2(0x7f800000u)));
}

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec4 pointVelocity = texelFetch(velocity, pointTexel, 0);

  // Check if point is pinned
  // pinnedStatusTexture has the same size and layout as positionsTexture
  // Each pixel corresponds to a point: red channel > 0.5 means the point is pinned
  vec4 pinnedStatus = texelFetch(pinnedStatusTexture, pointTexel, 0);
  
  // If pinned, don't update position
  if (pinnedStatus.r > 0.5) {
    fragColor = pointPosition;
    return;
  }

  // If absent (current absence = exit.G), leave it untouched \u2014 don't integrate
  // it (a NaN position plus a step is still NaN, and the point must keep it).
  vec4 exitStatus = texelFetch(exitTexture, pointTexel, 0);
  if (exitStatus.g > 0.5) {
    fragColor = pointPosition;
    return;
  }

  // Positions are not bounded: a layout grows as far as its forces take it, and
  // \`spaceSize\` only places the world origin. What is bounded is one sub-step.
  //
  // A non-finite velocity is dropped \u2014 the point does not move this sub-step.
  // There is no direction in a NaN or an infinity to keep, and integrating one
  // would leave the position non-finite for good, and with it, through the
  // many-body and collision sums, every other point's forces. This, not the
  // length bound below, is what guards against a diverged force: positions
  // start finite (an infinite input coordinate is placed on the space's edge
  // when it is uploaded) and a finite step keeps them finite.
  if (!isFiniteVector(pointVelocity.rg)) {
    fragColor = pointPosition;
    return;
  }

  // A step longer than maxStep is shortened to maxStep, keeping its direction.
  // maxStep is the width of the space: the per-axis ceiling the position clamp
  // this replaces implied, since neither coordinate of a point inside the space
  // could move further than that in one sub-step (a diagonal step of that size
  // is \u221A2 longer and is shortened here; no settling layout takes one). It is
  // not a stability bound \u2014 a 4096-unit step contains nothing \u2014 only a ceiling
  // on how far one runaway sub-step throws a point.
  //
  // The step is velocity \xD7 friction (at most 1). Its length is never more than
  // \u221A2 times its largest component, so only a step whose largest component
  // exceeds half of maxStep can be too long, and only those take the length \u2014
  // off a direction scaled to that component, so it cannot overflow however
  // large a finite velocity is. The step itself is formed only on the common
  // path below, exactly as it always was, so a step whose largest component is
  // at most half of maxStep \u2014 every step of a settling layout \u2014 moves a point by
  // the same bits as before. A step past that half that still fits the bound
  // takes the same path, but a compiler may then fuse its friction and position
  // update into one rounding (ANGLE's Metal backend does): a last-bit
  // difference, and only on steps of thousands of units.
  float largestVelocity = max(abs(pointVelocity.r), abs(pointVelocity.g));
  float largest = largestVelocity * abs(friction);
  if (largest > 0.5 * maxStep) {
    // Brought below 1e30 before dividing by its largest component: under fast
    // math a division by a value past 2^126 can go through its reciprocal, a
    // denormal, flushed to zero \u2014 and the direction with it.
    vec2 scaled = largestVelocity > 1.0e30 ? pointVelocity.rg * 1.0e-30 : pointVelocity.rg;
    vec2 direction = scaled / max(abs(scaled.x), abs(scaled.y)) * sign(friction);
    float directionLength = length(direction); // 1 \u2026 \u221A2
    if (largest > maxStep / directionLength) {
      pointPosition.rg += direction * (maxStep / directionLength);
      fragColor = pointPosition;
      return;
    }
  }

  // Friction
  pointVelocity.rg *= friction;

  pointPosition.rg += pointVelocity.rg;

  fragColor = pointPosition;
}
`,mR=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D sourceTexture;
uniform sampler2D targetTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform interpolatePositionUniforms {
  float progress;
} interpolatePosition;

#define progress interpolatePosition.progress
#else
uniform float progress;
#endif

out vec4 fragColor;

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 source = texelFetch(sourceTexture, pointTexel, 0);
  vec4 target = texelFetch(targetTexture, pointTexel, 0);
  // NaN means absent (ingest normalizes half-NaN to full-NaN, so checking one
  // channel suffices). Hold the real side so the point stays put while it fades,
  // never interpolating to/from NaN:
  //   \xB7 exiting  (target NaN): freeze at source.
  //   \xB7 entering (source NaN): appear at target (no slide in from NaN).
  vec2 src = isnan(source.r) ? target.rg : source.rg;
  vec2 tgt = isnan(target.r) ? src : target.rg;
  vec2 position = mix(src, tgt, progress);
  fragColor = vec4(position, source.b, 1.0);
}
`,xR=`#version 300 es
#ifdef GL_ES
precision highp float;
// Fragment shaders default int to mediump, guaranteed only to 32767 \u2014
// point indices go far higher.
precision highp int;
#endif

uniform sampler2D positionsTexture;
uniform sampler2D trackedIndices;

out vec4 fragColor;

void main() {
  ivec2 trackedTexel = ivec2(gl_FragCoord.xy);

  // The table holds raw point indices (-1 = unused slot). The texel is derived
  // here, from the width the positions texture has right now \u2014 the grid relayouts
  // when the point count changes, so a texel computed at bake time would keep
  // addressing the old layout. textureSize() is valid here because this shader
  // samples positionsTexture itself.
  float index = texelFetch(trackedIndices, trackedTexel, 0).r;
  if (index < 0.0) discard;

  int i = int(index);
  int w = textureSize(positionsTexture, 0).x;
  // An index past the point count fetches out of range and yields zeros; the
  // CPU readback owns range validation and drops such entries.
  vec4 pointPosition = texelFetch(positionsTexture, ivec2(i % w, i / w), 0);

  fragColor = vec4(pointPosition.rg, 1.0, 1.0);
}
`,yR=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform dragPointUniforms {
  vec2 mousePos;
  float index;
} dragPoint;

#define mousePos dragPoint.mousePos
#define index dragPoint.index
#else
uniform vec2 mousePos;
uniform float index;
#endif

out vec4 fragColor;

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);

  // Check if a point is being dragged
  if (index >= 0.0 && index == pointPosition.b) {
    pointPosition.rg = mousePos.rg;
  }

  fragColor = pointPosition;
}`;function SR(t,e=16384){if(!(t!=null&&t.length))return null;let i=0;for(let c of t){let u=Math.max(c.width,c.height);u>i&&(i=u)}if(i===0)return console.warn("Invalid image dimensions: all images have zero width or height"),null;let r=i,n=Math.ceil(Math.sqrt(t.length)),o=n*i,s=1;o>e&&(s=e/o,i=Math.max(1,Math.floor(i*s)),o=Math.max(1,Math.floor(o*s)),console.warn(`\u{1F5BC}\uFE0F  Atlas scaling required: Original size ${(r*n).toLocaleString()}px exceeds WebGL limit ${e.toLocaleString()}px. Scaling down to ${o.toLocaleString()}px (${Math.round(s*100)}% of original quality)`));let a=new Uint8Array(o*o*4).fill(0),l=new Float32Array(n*n*4).fill(-1);for(let[c,u]of t.entries()){let d=u.width,h=u.height;if(d===0||h===0)continue;let f=Math.min(1,i/Math.max(d,h)),g=Math.floor(d*f),x=Math.floor(h*f),b=Math.floor(c/n),v=c%n*i,R=b*i;l[c*4]=v/o,l[c*4+1]=R/o,l[c*4+2]=(v+g)/o,l[c*4+3]=(R+x)/o;for(let P=0;P<x;P++)for(let y=0;y<g;y++){let T=Math.floor(y*(d/g)),C=(Math.floor(P*(h/x))*d+T)*4,k=((R+P)*o+(v+y))*4;a[k]=u.data[C]??0,a[k+1]=u.data[C+1]??0,a[k+2]=u.data[C+2]??0,a[k+3]=u.data[C+3]??255}}return{atlasData:a,atlasSize:o,atlasCoords:l,atlasCoordsSize:n}}function Us(t,e){return t===1/0?e:t===-1/0?0:t}function vR(t,e,i,r){let n=new Float32Array(e*e*4);if(!t)return n;for(let o=0;o<i;++o){let s=$e(t,o);n[o*4+0]=s?NaN:Us(t[o*2+0],r),n[o*4+1]=s?NaN:Us(t[o*2+1],r),n[o*4+2]=o}return n}function bR(t,e,i,r,n){let o=new Float32Array(n*n*4);for(let s=0;s<i;s+=1)o[s*4+0]=t[s*4+0],o[s*4+1]=t[s*4+1],o[s*4+2]=s;for(let s=i;s<r;s+=1)o[s*4+0]=e[s*4+0],o[s*4+1]=e[s*4+1],o[s*4+2]=s;return o}var g0={blend:!0,blendColorOperation:"add",blendColorSrcFactor:"src-alpha",blendColorDstFactor:"one-minus-src-alpha",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one-minus-src-alpha"},qx={...ie,...g0},_R={...ie,blend:!1,depthWriteEnabled:!0,depthCompare:"less"},TR={...ie,...g0,depthCompare:"less"},Zx={EXIT_DEFAULT_SIZE:cr(o0),EXIT_DEFAULT_COLOR_CHANNEL:cr(Yu),EDGE_RAMP_PX:cr(s0),POINT_RING_SCALE:cr(r1)};function Qx(t){return Number.isFinite(t)?t:Ie.simulationFriction}var Hu=class extends Ze{constructor(){super(...arguments),this.isPickingBufferStale=!0,this.imageCount=0,this.positionVersion=0,this.pointListVersion=0,this.stepVersion=0,this.areClusterCentroidsUpToDate=!1,this.hasAnyAbsentPoint=!1,this.pointListCount=0,this.trackers=new Set,this.isSampledReadbackWanted=!1,this.sampledOrderVersion=0,this.isSizeTextureStale=!0,this.polygonPathLength=0,this.isOcclusionCullingActive=!1,this.transitionProgress=1,this.shouldAnimatePointColors=!1,this.shouldAnimatePointSizes=!1,this.shouldAnimateStrokeColors=!1,this.shouldAnimateStrokeWidths=!1,this.isStrokeCompiled=!1,this.shouldAnimatePointPositions=!1}get hasPendingPickReadback(){var e;return((e=this.pickingReadback)==null?void 0:e.inFlight)??!1}get hasPendingTrackedReadback(){for(let e of this.trackers)if(e.hasPendingReadback)return!0;return!1}get hasPendingSampledReadback(){var e;return this.isSampledReadbackWanted||(((e=this.sampledReadback)==null?void 0:e.inFlight)??!1)}get isReadbackPending(){var e,i;if((e=this.pickingReadback)!=null&&e.isPending||(i=this.sampledReadback)!=null&&i.isPending)return!0;for(let r of this.trackers)if(r.isReadbackPending)return!0;return!1}get isStrokeWanted(){return this.data.hasPointStroke}cancelPendingReadbacks(){var e;this.discardPendingPick(),(e=this.sampledReadback)==null||e.cancel(),this.isSampledReadbackWanted=!1;for(let i of this.trackers)i.cancelReadback()}updatePositions(){var e,i;this.resetSampledReadback();let{device:r,store:n,data:o,config:{rescalePositions:s,enableSimulation:a}}=this,{pointsTextureSize:l}=n;if(!l||!o.pointPositions||o.pointsNumber===void 0)return this.pointListCount!==0&&(this.pointListCount=0,this.pointListVersion++),!1;let c=s;s===void 0&&!a&&(c=!0),this.shouldSkipRescale&&(c=!1),c?this.rescaleInitialNodePositions():this.shouldSkipRescale||(this.scaleX=void 0,this.scaleY=void 0),this.shouldSkipRescale=void 0;let u=o.sourcePointsNumber,d=o.targetPointsNumber,h=u===d,f=((e=this.transition)==null?void 0:e.isPendingFor(ne.Positions))===!0&&(((i=this.transition)==null?void 0:i.duration)??this.config.transitionDuration)>0&&!!this.currentPositionTexture,g=vR(o.pointPositions,l,d,n.infiniteInputEdge),x;if(f&&(this.createTransitionResources(),this.sourcePositionTexture&&this.targetPositionTexture)){if(h){let R=this.currentPositionTexture;if(R&&!R.destroyed){let P=this.device.createCommandEncoder();P.copyTextureToTexture({sourceTexture:R,destinationTexture:this.sourcePositionTexture,width:l,height:l}),this.device.submit(P.finish())}}else if(this.currentPositionFbo){let R=Xe(r,this.currentPositionFbo);x=bR(R,g,Math.min(u,d),d,l),this.writePositionTexture(this.sourcePositionTexture,x,l)}else this.writePositionTexture(this.sourcePositionTexture,g,l);this.writePositionTexture(this.targetPositionTexture,g,l)}this.ensurePositionTextures(l),f?x&&(this.writePositionTexture(this.currentPositionTexture,x,l),this.writePositionTexture(this.previousPositionTexture,x,l)):(this.writePositionTexture(this.currentPositionTexture,g,l),this.writePositionTexture(this.previousPositionTexture,g,l)),this.areClusterCentroidsUpToDate=!1,this.markPositionsChanged(),!this.searchTexture||this.searchTexture.width!==l||this.searchTexture.height!==l?(this.searchTexture&&!this.searchTexture.destroyed&&this.searchTexture.destroy(),this.searchFbo&&!this.searchFbo.destroyed&&this.searchFbo.destroy(),this.searchTexture=r.createTexture({width:l,height:l,format:"rgba32float"}),this.searchTexture.copyImageData({data:g,bytesPerRow:K("rgba32float",l),mipLevel:0,x:0,y:0}),this.searchFbo=r.createFramebuffer({width:l,height:l,colorAttachments:[this.searchTexture]})):this.searchTexture.copyImageData({data:g,bytesPerRow:K("rgba32float",l),mipLevel:0,x:0,y:0}),this.isPickingBufferStale=!0,this.discardPendingPick();let b=bn(n.pointsTextureSize),v=b.byteLength;return!this.drawPointIndices||this.drawPointIndices.byteLength!==v?(this.drawPointIndices&&!this.drawPointIndices.destroyed&&this.drawPointIndices.destroy(),this.drawPointIndices=r.createBuffer({data:b,usage:N.VERTEX|N.COPY_DST})):this.drawPointIndices.write(b),this.drawCommand&&this.drawCommand.setAttributes({pointIndices:this.drawPointIndices}),this.drawCoreCommand&&this.drawCoreCommand.setAttributes({pointIndices:this.drawPointIndices}),this.updateRenderOrder(),!this.hoveredPointIndices||this.hoveredPointIndices.byteLength!==v?(this.hoveredPointIndices&&!this.hoveredPointIndices.destroyed&&this.hoveredPointIndices.destroy(),this.hoveredPointIndices=r.createBuffer({data:b,usage:N.VERTEX|N.COPY_DST})):this.hoveredPointIndices.write(b),!this.sampledPointIndices||this.sampledPointIndices.byteLength!==v?(this.sampledPointIndices&&!this.sampledPointIndices.destroyed&&this.sampledPointIndices.destroy(),this.sampledPointIndices=r.createBuffer({data:b,usage:N.VERTEX|N.COPY_DST})):this.sampledPointIndices.write(b),this.fillSampledPointsFboCommand&&this.fillSampledPointsFboCommand.setAttributes({pointIndices:this.sampledPointIndices}),this.updatePointStatus(),this.updatePinnedStatus(),this.updateExit(),this.updateSampledPointsGrid(),f||this.gatherTrackers(),f}initPrograms(){var e,i,r;let{device:n,config:o,store:s,data:a}=this;(!this.imageAtlasCoordsTexture||!this.imageAtlasTexture)&&this.createAtlas(),this.targetColorBuffer||this.updateColor(),this.targetSizeBuffer||this.updateSize(),this.targetStrokeColorBuffer||this.updateStrokeColor(),this.targetStrokeWidthBuffer||this.updateStrokeWidth(),this.shapeBuffer||this.updateShape(),this.imageIndicesBuffer||this.updateImageIndices(),this.imageSizesBuffer||this.updateImageSizes(),this.renderRankBuffer||this.updateRenderOrder(),this.pointStatusTexture||this.updatePointStatus(),o.enableSimulation&&this.ensureUpdatePositionProgram(),this.dragPointVertexCoordBuffer||(this.dragPointVertexCoordBuffer=n.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.dragPointUniformStore||(this.dragPointUniformStore=new Q(n,{dragPointUniforms:{uniformTypes:{mousePos:"vec2<f32>",index:"f32"},defaultUniforms:{mousePos:oe(s.mousePosition,[0,0]),index:((e=s.hoveredPoint)==null?void 0:e.index)??-1}}})),this.dragPointCommand||(this.dragPointCommand=new J(n,{fs:yR,vs:ve,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.dragPointVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{dragPointUniforms:this.dragPointUniformStore.getManagedUniformBuffer("dragPointUniforms")},parameters:ie})),this.drawUniformStore||(this.drawUniformStore=new Q(n,{drawVertexUniforms:{uniformTypes:{ratio:"f32",transformationMatrix:"mat4x4<f32>",pointsTextureSize:"f32",sizeScale:"f32",worldOrigin:"vec2<f32>",screenSize:"vec2<f32>",greyoutColor:"vec4<f32>",backgroundColor:"vec4<f32>",scalePointsOnZoom:"f32",maxPointSize:"f32",isDarkenGreyout:"f32",skipHighlighted:"f32",skipGreyed:"f32",hasImages:"f32",imageCount:"f32",imageAtlasCoordsTextureSize:"f32",transitionProgress:"f32",animateColors:"f32",animateSizes:"f32",animatePositions:"f32",pointDefaultColor:"vec4<f32>",pointDefaultSize:"f32",pointsNumber:"f32",strokeContrast:"f32",strokeDefaultShade:"f32",strokeDefaultWidth:"f32",strokeDefaultColor:"vec4<f32>",animateStrokeColors:"f32",animateStrokeWidths:"f32"},defaultUniforms:{ratio:o.pixelRatio,transformationMatrix:(()=>{let l=s.transform??[1,0,0,0,1,0,0,0,1];return[l[0],l[1],l[2],0,l[3],l[4],l[5],0,l[6],l[7],l[8],0,0,0,0,1]})(),pointsTextureSize:s.pointsTextureSize??0,sizeScale:o.pointSizeScale,worldOrigin:s.worldOrigin,screenSize:oe(s.screenSize,[0,0]),greyoutColor:le(s.greyoutPointColor,[0,0,0,1]),backgroundColor:le(s.backgroundColor,[0,0,0,1]),scalePointsOnZoom:o.scalePointsOnZoom?1:0,maxPointSize:s.maxPointSize,isDarkenGreyout:s.isDarkenGreyout??!1?1:0,skipHighlighted:0,skipGreyed:0,hasImages:this.imageCount>0?1:0,imageCount:this.imageCount,imageAtlasCoordsTextureSize:this.imageAtlasCoordsTextureSize??0,transitionProgress:1,animateColors:0,animateSizes:0,animatePositions:0,pointDefaultColor:le(qe(o.pointDefaultColor),[0,0,0,1]),pointDefaultSize:o.pointDefaultSize,pointsNumber:a.pointsNumber??0,...this.getStrokeUniforms(),animateStrokeColors:0,animateStrokeWidths:0}},drawFragmentUniforms:{uniformTypes:{greyoutOpacity:"f32",pointOpacity:"f32",isDarkenGreyout:"f32",backgroundColor:"vec4<f32>",outlineColor:"vec4<f32>",outlineWidth:"f32",renderMode:"f32",pickingAlpha:"f32",pickingIndexOffset:"f32"},defaultUniforms:{pickingAlpha:1,pickingIndexOffset:0,greyoutOpacity:o.pointGreyoutOpacity??-1,pointOpacity:o.pointOpacity,isDarkenGreyout:s.isDarkenGreyout??!1?1:0,backgroundColor:le(s.backgroundColor,[0,0,0,1]),outlineColor:le(s.outlinedPointRingColor,[1,1,1,1]),outlineWidth:.9,renderMode:0}}})),this.drawCommand||(this.isStrokeCompiled=this.isStrokeWanted),this.drawCommand||(this.drawCommand=new J(n,{fs:_u,vs:Tu,modules:this.getDrawCommandModules(),topology:"point-list",vertexCount:a.pointsNumber??0,indexBuffer:this.pointRenderOrderBuffer??null,attributes:this.getDrawCommandAttributes(),bufferLayout:this.getDrawCommandBufferLayout(),defines:this.getDrawCommandDefines(),bindings:{drawVertexUniforms:this.drawUniformStore.getManagedUniformBuffer("drawVertexUniforms"),drawFragmentUniforms:this.drawUniformStore.getManagedUniformBuffer("drawFragmentUniforms")},parameters:qx})),this.drawCoreCommand||(this.drawCoreCommand=new J(n,{fs:_u,vs:Tu,modules:this.getDrawCommandModules(),topology:"point-list",vertexCount:a.pointsNumber??0,indexBuffer:this.reversedPointIndexBuffer??null,attributes:this.getDrawCommandAttributes(),bufferLayout:this.getDrawCommandBufferLayout(),defines:this.getDrawCommandDefines(),bindings:{drawVertexUniforms:this.drawUniformStore.getManagedUniformBuffer("drawVertexUniforms"),drawFragmentUniforms:this.drawUniformStore.getManagedUniformBuffer("drawFragmentUniforms")},parameters:_R})),this.findPointsInRectVertexCoordBuffer||(this.findPointsInRectVertexCoordBuffer=n.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.findPointsInRectUniformStore||(this.findPointsInRectUniformStore=new Q(n,{findPointsInRectUniforms:{uniformTypes:{sizeScale:"f32",worldOrigin:"vec2<f32>",screenSize:"vec2<f32>",ratio:"f32",transformationMatrix:"mat4x4<f32>",rect0:"vec2<f32>",rect1:"vec2<f32>",scalePointsOnZoom:"f32",maxPointSize:"f32"},defaultUniforms:{sizeScale:o.pointSizeScale,worldOrigin:s.worldOrigin,screenSize:oe(s.screenSize,[0,0]),ratio:o.pixelRatio,transformationMatrix:s.transformationMatrix4x4,rect0:oe((i=s.searchArea)==null?void 0:i[0],[0,0]),rect1:oe((r=s.searchArea)==null?void 0:r[1],[0,0]),scalePointsOnZoom:o.scalePointsOnZoom?1:0,maxPointSize:s.maxPointSize}}})),this.findPointsInRectCommand||(this.findPointsInRectCommand=new J(n,{fs:sR,vs:ve,modules:[Fs],topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.findPointsInRectVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{findPointsInRectUniforms:this.findPointsInRectUniformStore.getManagedUniformBuffer("findPointsInRectUniforms")},parameters:ie})),this.findPointsInPolygonVertexCoordBuffer||(this.findPointsInPolygonVertexCoordBuffer=n.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.findPointsInPolygonUniformStore||(this.findPointsInPolygonUniformStore=new Q(n,{findPointsInPolygonUniforms:{uniformTypes:{worldOrigin:"vec2<f32>",screenSize:"vec2<f32>",transformationMatrix:"mat4x4<f32>",polygonPathLength:"f32"},defaultUniforms:{worldOrigin:s.worldOrigin,screenSize:oe(s.screenSize,[0,0]),transformationMatrix:s.transformationMatrix4x4,polygonPathLength:this.polygonPathLength}}})),this.findPointsInPolygonCommand||(this.findPointsInPolygonCommand=new J(n,{fs:aR,vs:ve,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.findPointsInPolygonVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{findPointsInPolygonUniforms:this.findPointsInPolygonUniformStore.getManagedUniformBuffer("findPointsInPolygonUniforms")},parameters:ie})),this.fillPickingBufferUniformStore||(this.fillPickingBufferUniformStore=new Q(n,{fillPickingBufferUniforms:{uniformTypes:{pointsTextureSize:"f32",sizeScale:"f32",worldOrigin:"vec2<f32>",screenSize:"vec2<f32>",ratio:"f32",pickingPixelRatio:"f32",transformationMatrix:"mat4x4<f32>",scalePointsOnZoom:"f32",maxPointSize:"f32",skipHighlighted:"f32",skipGreyed:"f32",pointDefaultSize:"f32",hasImages:"f32",imageCount:"f32"},defaultUniforms:{pointsTextureSize:s.pointsTextureSize??0,sizeScale:o.pointSizeScale,worldOrigin:s.worldOrigin,screenSize:oe(s.screenSize,[0,0]),ratio:o.pixelRatio,pickingPixelRatio:Ru,transformationMatrix:s.transformationMatrix4x4,scalePointsOnZoom:o.scalePointsOnZoom?1:0,maxPointSize:s.maxPointSize,skipHighlighted:0,skipGreyed:0,pointDefaultSize:o.pointDefaultSize,hasImages:0,imageCount:0}}})),this.fillPickingBufferCommand||(this.fillPickingBufferCommand=new J(n,{fs:uR,vs:dR,modules:[Fs],topology:"point-list",vertexCount:a.pointsNumber??0,indexBuffer:this.pointRenderOrderBuffer??null,attributes:{...this.hoveredPointIndices&&{pointIndices:this.hoveredPointIndices},...this.targetSizeBuffer&&{size:this.targetSizeBuffer},...this.imageSizesBuffer&&{imageSize:this.imageSizesBuffer},...this.imageIndicesBuffer&&{imageIndex:this.imageIndicesBuffer}},bufferLayout:[{name:"pointIndices",format:"float32x2"},{name:"size",format:"float32"},{name:"imageSize",format:"float32"},{name:"imageIndex",format:"float32"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{fillPickingBufferUniforms:this.fillPickingBufferUniformStore.getManagedUniformBuffer("fillPickingBufferUniforms")},parameters:ie})),this.fillSampledPointsUniformStore||(this.fillSampledPointsUniformStore=new Q(n,{fillSampledPointsUniforms:{uniformTypes:{pointsTextureSize:"f32",transformationMatrix:"mat4x4<f32>",worldOrigin:"vec2<f32>",screenSize:"vec2<f32>"},defaultUniforms:{pointsTextureSize:s.pointsTextureSize??0,transformationMatrix:s.transformationMatrix4x4,worldOrigin:s.worldOrigin,screenSize:oe(s.screenSize,[0,0])}}})),this.fillSampledPointsFboCommand||(this.fillSampledPointsFboCommand=new J(n,{fs:fR,vs:pR,topology:"point-list",vertexCount:a.pointsNumber??0,indexBuffer:this.pointRenderOrderBuffer??null,attributes:{...this.sampledPointIndices&&{pointIndices:this.sampledPointIndices}},bufferLayout:[{name:"pointIndices",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{fillSampledPointsUniforms:this.fillSampledPointsUniformStore.getManagedUniformBuffer("fillSampledPointsUniforms")},parameters:ie})),this.drawHighlightedVertexCoordBuffer||(this.drawHighlightedVertexCoordBuffer=n.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.drawHighlightedUniformStore||(this.drawHighlightedUniformStore=new Q(n,{drawHighlightedUniforms:{uniformTypes:{sourceSize:"f32",targetSize:"f32",imageSize:"f32",transformationMatrix:"mat4x4<f32>",pointsTextureSize:"f32",sizeScale:"f32",worldOrigin:"vec2<f32>",screenSize:"vec2<f32>",scalePointsOnZoom:"f32",pointIndex:"f32",maxPointSize:"f32",color:"vec4<f32>",universalPointOpacity:"f32",greyoutOpacity:"f32",isDarkenGreyout:"f32",backgroundColor:"vec4<f32>",greyoutColor:"vec4<f32>",animatePositions:"f32",transitionProgress:"f32",animateSizes:"f32",pointDefaultSize:"f32",width:"f32",pixelRatio:"f32"},defaultUniforms:{sourceSize:1,targetSize:1,imageSize:0,transformationMatrix:s.transformationMatrix4x4,pointsTextureSize:s.pointsTextureSize??0,sizeScale:o.pointSizeScale,worldOrigin:s.worldOrigin,screenSize:oe(s.screenSize,[0,0]),scalePointsOnZoom:o.scalePointsOnZoom?1:0,pointIndex:-1,maxPointSize:s.maxPointSize,color:[0,0,0,1],universalPointOpacity:o.pointOpacity,greyoutOpacity:o.pointGreyoutOpacity??-1,isDarkenGreyout:s.isDarkenGreyout??!1?1:0,backgroundColor:le(s.backgroundColor,[0,0,0,1]),greyoutColor:le(s.greyoutPointColor,[0,0,0,1]),animatePositions:0,transitionProgress:1,animateSizes:0,pointDefaultSize:o.pointDefaultSize,width:.85,pixelRatio:o.pixelRatio}}})),this.drawHighlightedCommand||(this.drawHighlightedCommand=new J(n,{fs:lR,vs:cR,modules:[Fs,Kx],topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.drawHighlightedVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0,...Zx},bindings:{drawHighlightedUniforms:this.drawHighlightedUniformStore.getManagedUniformBuffer("drawHighlightedUniforms")},parameters:{...ie,blend:!0,blendColorOperation:"add",blendColorSrcFactor:"src-alpha",blendColorDstFactor:"one-minus-src-alpha",blendAlphaOperation:"add",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one-minus-src-alpha",depthWriteEnabled:!1,depthCompare:"always"}})),this.trackPointsVertexCoordBuffer||(this.trackPointsVertexCoordBuffer=n.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.trackPointsCommand||(this.trackPointsCommand=new J(n,{fs:xR,vs:ve,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.trackPointsVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{},parameters:ie}))}updateColor(){let{device:e,store:{pointsTextureSize:i},data:r}=this;if(!i)return;let n=r.pointColors,{source:o,target:s,previous:a}=lr(this.device,n,this.sourceColorBuffer,this.targetColorBuffer,this.previousColorData,4);this.sourceColorBuffer=o,this.targetColorBuffer=s,this.previousColorData=a;let l={...this.sourceColorBuffer&&{sourceColor:this.sourceColorBuffer},...this.targetColorBuffer&&{targetColor:this.targetColorBuffer}};if(this.drawCommand&&this.drawCommand.setAttributes(l),this.drawCoreCommand&&this.drawCoreCommand.setAttributes(l),this.config.linkColorInterpolateFromEndpoints){let c=new Float32Array(i*i*4);c.set(n.subarray(0,Math.min(n.length,c.length))),(!this.pointColorsTexture||this.pointColorsTexture.width!==i||this.pointColorsTexture.height!==i)&&(this.pointColorsTexture&&!this.pointColorsTexture.destroyed&&this.pointColorsTexture.destroy(),this.pointColorsTexture=e.createTexture({width:i,height:i,format:"rgba32float"})),this.pointColorsTexture.copyImageData({data:c,bytesPerRow:K("rgba32float",i),mipLevel:0,x:0,y:0})}else this.pointColorsTexture&&(this.pointColorsTexture.destroyed||this.pointColorsTexture.destroy(),this.pointColorsTexture=void 0)}updatePointStatus(){let{device:e,config:i,data:r,store:{pointsTextureSize:n}}=this;if(!n||r.pointsNumber===void 0)return;this.isPickingBufferStale=!0;let{highlightedPointIndices:o,outlinedPointIndices:s}=i,a=o!==void 0,l=s!==void 0,c=new Float32Array(n*n*4);if(a){for(let d=0;d<c.length;d+=4)c[d]=1;for(let d of o)d>=0&&d<r.pointsNumber&&(c[d*4]=0)}if(l)for(let d of s)d>=0&&d<r.pointsNumber&&(c[d*4+1]=1);let u={data:c,bytesPerRow:K("rgba32float",n),mipLevel:0,x:0,y:0};!this.pointStatusTexture||this.pointStatusTexture.width!==n||this.pointStatusTexture.height!==n?(this.pointStatusTexture&&!this.pointStatusTexture.destroyed&&this.pointStatusTexture.destroy(),this.pointStatusTexture=e.createTexture({width:n,height:n,format:"rgba32float"}),this.pointStatusTexture.copyImageData(u)):this.pointStatusTexture.copyImageData(u)}updatePinnedStatus(){let{device:e,store:{pointsTextureSize:i},data:r}=this;if(!i)return;let n=new Float32Array(i*i*4).fill(0);if(r.inputPinnedPoints&&r.pointsNumber!==void 0)for(let o of r.inputPinnedPoints)o>=0&&o<r.pointsNumber&&(n[o*4]=1);!this.pinnedStatusTexture||this.pinnedStatusTexture.width!==i||this.pinnedStatusTexture.height!==i?(this.pinnedStatusTexture&&!this.pinnedStatusTexture.destroyed&&this.pinnedStatusTexture.destroy(),this.pinnedStatusTexture=e.createTexture({width:i,height:i,format:"rgba32float"}),this.pinnedStatusTexture.copyImageData({data:n,bytesPerRow:K("rgba32float",i),mipLevel:0,x:0,y:0})):this.pinnedStatusTexture.copyImageData({data:n,bytesPerRow:K("rgba32float",i),mipLevel:0,x:0,y:0})}updateExit(){let{device:e,store:{pointsTextureSize:i},data:r}=this;if(!i)return;let n=r.pointsNumber??0,o=this.previousExitData,s=this.hasAnyAbsentPoint,a=new Float32Array(n),l=!1,c=n!==this.pointListCount;for(let h=0;h<n;h++){let f=r.pointPositions&&$e(r.pointPositions,h)?1:0;a[h]=f,f&&(l=!0),!c&&o?.[h]!==f&&(c=!0)}if(this.previousExitData=a,this.hasAnyAbsentPoint=l,c&&(this.pointListCount=n,this.pointListVersion++),!l&&!s){if(this.exitTexture&&!this.exitTexture.destroyed&&this.exitTexture.width===1)return;this.exitTexture&&!this.exitTexture.destroyed&&this.exitTexture.destroy(),this.exitTexture=e.createTexture({width:1,height:1,format:"rg32float"}),this.exitTexture.copyImageData({data:new Float32Array(2),bytesPerRow:K("rg32float",1),mipLevel:0,x:0,y:0});return}let u=new Float32Array(i*i*2);for(let h=0;h<n;h++){let f=a[h],g=h<(o?.length??0)?o[h]:f;u[h*2]=g,u[h*2+1]=f}let d=!!this.exitTexture&&this.exitTexture.width===i&&this.exitTexture.height===i;(!this.exitTexture||!d)&&(this.exitTexture&&!this.exitTexture.destroyed&&this.exitTexture.destroy(),this.exitTexture=e.createTexture({width:i,height:i,format:"rg32float"})),this.exitTexture.copyImageData({data:u,bytesPerRow:K("rg32float",i),mipLevel:0,x:0,y:0})}updateSize(){let{store:{pointsTextureSize:e},data:i}=this;if(!e||i.pointsNumber===void 0)return;this.markFootprintsStale();let r=i.pointSizes,{source:n,target:o,previous:s,sourceData:a}=lr(this.device,r,this.sourceSizeBuffer,this.targetSizeBuffer,this.previousSizeData,1);this.sourceSizeBuffer=n,this.targetSizeBuffer=o,this.previousSizeData=s,this.sourceSizeData=a;let l={...this.sourceSizeBuffer&&{sourceSize:this.sourceSizeBuffer},...this.targetSizeBuffer&&{targetSize:this.targetSizeBuffer}};this.drawCommand&&this.drawCommand.setAttributes(l),this.drawCoreCommand&&this.drawCoreCommand.setAttributes(l)}updateStrokeColor(){var e,i;let{store:{pointsTextureSize:r},data:n}=this;if(!r||!this.isStrokeWanted&&!this.isStrokeCompiled)return;let o=n.pointStrokeColors,{source:s,target:a,previous:l}=lr(this.device,o,this.sourceStrokeColorBuffer,this.targetStrokeColorBuffer,this.previousStrokeColorData??new Float32Array(o.length).fill(NaN),4);if(this.sourceStrokeColorBuffer=s,this.targetStrokeColorBuffer=a,this.previousStrokeColorData=l,!this.isStrokeCompiled)return;let c={...this.sourceStrokeColorBuffer&&{sourceStrokeColor:this.sourceStrokeColorBuffer},...this.targetStrokeColorBuffer&&{targetStrokeColor:this.targetStrokeColorBuffer}};(e=this.drawCommand)==null||e.setAttributes(c),(i=this.drawCoreCommand)==null||i.setAttributes(c)}updateStrokeWidth(){var e,i;let{store:{pointsTextureSize:r},data:n}=this;if(!r||!this.isStrokeWanted&&!this.isStrokeCompiled)return;let o=n.pointStrokeWidths,{source:s,target:a,previous:l}=lr(this.device,o,this.sourceStrokeWidthBuffer,this.targetStrokeWidthBuffer,this.previousStrokeWidthData??new Float32Array(o.length).fill(NaN),1);if(this.sourceStrokeWidthBuffer=s,this.targetStrokeWidthBuffer=a,this.previousStrokeWidthData=l,!this.isStrokeCompiled)return;let c={...this.sourceStrokeWidthBuffer&&{sourceStrokeWidth:this.sourceStrokeWidthBuffer},...this.targetStrokeWidthBuffer&&{targetStrokeWidth:this.targetStrokeWidthBuffer}};(e=this.drawCommand)==null||e.setAttributes(c),(i=this.drawCoreCommand)==null||i.setAttributes(c)}updateShape(){let{device:e,data:i}=this;if(i.pointsNumber===void 0||i.pointShapes===void 0)return;let r=i.pointShapes,n=r.byteLength;!this.shapeBuffer||this.shapeBuffer.byteLength!==n?(this.shapeBuffer&&!this.shapeBuffer.destroyed&&this.shapeBuffer.destroy(),this.shapeBuffer=e.createBuffer({data:r,usage:N.VERTEX|N.COPY_DST})):this.shapeBuffer.write(r),this.drawCommand&&this.drawCommand.setAttributes({shape:this.shapeBuffer}),this.drawCoreCommand&&this.drawCoreCommand.setAttributes({shape:this.shapeBuffer})}updateImageIndices(){let{device:e,data:i}=this;if(i.pointsNumber===void 0||i.pointImageIndices===void 0)return;let r=i.pointImageIndices,n=r.byteLength;!this.imageIndicesBuffer||this.imageIndicesBuffer.byteLength!==n?(this.imageIndicesBuffer&&!this.imageIndicesBuffer.destroyed&&this.imageIndicesBuffer.destroy(),this.imageIndicesBuffer=e.createBuffer({data:r,usage:N.VERTEX|N.COPY_DST})):this.imageIndicesBuffer.write(r),this.drawCommand&&this.drawCommand.setAttributes({imageIndex:this.imageIndicesBuffer}),this.drawCoreCommand&&this.drawCoreCommand.setAttributes({imageIndex:this.imageIndicesBuffer}),this.fillPickingBufferCommand&&this.fillPickingBufferCommand.setAttributes({imageIndex:this.imageIndicesBuffer}),this.markFootprintsStale()}updateImageSizes(){let{device:e,data:i}=this;if(i.pointsNumber===void 0||i.pointImageSizes===void 0)return;let r=i.pointImageSizes,n=r.byteLength;!this.imageSizesBuffer||this.imageSizesBuffer.byteLength!==n?(this.imageSizesBuffer&&!this.imageSizesBuffer.destroyed&&this.imageSizesBuffer.destroy(),this.imageSizesBuffer=e.createBuffer({data:r,usage:N.VERTEX|N.COPY_DST})):this.imageSizesBuffer.write(r),this.drawCommand&&this.drawCommand.setAttributes({imageSize:this.imageSizesBuffer}),this.drawCoreCommand&&this.drawCoreCommand.setAttributes({imageSize:this.imageSizesBuffer}),this.fillPickingBufferCommand&&this.fillPickingBufferCommand.setAttributes({imageSize:this.imageSizesBuffer}),this.markFootprintsStale()}updateRenderOrder(){var e,i,r,n,o,s,a,l,c,u;let{device:d,data:h}=this,f=h.pointsNumber??0;if(f===0)return;let g=f*4,x=((e=h.pointRenderOrder)==null?void 0:e.length)===f?h.pointRenderOrder:void 0;if(x===this.appliedRenderOrder&&((i=this.renderRankBuffer)==null?void 0:i.byteLength)===g&&((r=this.reversedPointIndexBuffer)==null?void 0:r.byteLength)===g)return;this.appliedRenderOrder=x;let b=new Float32Array(f),v=new Uint32Array(f);if(x)for(let y=0;y<f;y++){let T=x[y];b[T]=y,v[f-1-y]=T}else for(let y=0;y<f;y++)b[y]=y,v[y]=f-1-y;this.renderRankBuffer=ku(d,this.renderRankBuffer,b),(n=this.drawCommand)==null||n.setAttributes({renderRank:this.renderRankBuffer}),(o=this.drawCoreCommand)==null||o.setAttributes({renderRank:this.renderRankBuffer}),this.reversedPointIndexBuffer=this.writeIndexBuffer(this.reversedPointIndexBuffer,v),(s=this.drawCoreCommand)==null||s.setIndexBuffer(this.reversedPointIndexBuffer);let R=this.pointRenderOrderBuffer;this.pointRenderOrderBuffer=x?this.writeIndexBuffer(R,x):void 0;let P=this.pointRenderOrderBuffer??null;(a=this.drawCommand)==null||a.setIndexBuffer(P),(l=this.drawPickingCommand)==null||l.setIndexBuffer(P),(c=this.fillPickingBufferCommand)==null||c.setIndexBuffer(P),(u=this.fillSampledPointsFboCommand)==null||u.setIndexBuffer(P),this.sampledOrderVersion++,!x&&R&&!R.destroyed&&R.destroy(),this.isPickingBufferStale=!0}createAtlas(){var e;let{device:i,data:r,store:n}=this;if(this.markFootprintsStale(),!((e=r.inputImageData)!=null&&e.length))return this.imageCount=0,this.imageAtlasCoordsTextureSize=0,this.imageAtlasCoordsTexture||(this.imageAtlasCoordsTexture=i.createTexture({data:new Float32Array(4).fill(0),width:1,height:1,format:"rgba32float"})),this.imageAtlasTexture||(this.imageAtlasTexture=i.createTexture({data:new Uint8Array(4).fill(0),width:1,height:1,format:"rgba8unorm"})),!0;let o=SR(r.inputImageData,n.webglMaxTextureSize);if(!o)return console.warn("Failed to create atlas from image data"),!1;this.imageCount=r.inputImageData.length;let{atlasData:s,atlasSize:a,atlasCoords:l,atlasCoordsSize:c}=o;return this.imageAtlasCoordsTextureSize=c,this.imageAtlasTexture&&!this.imageAtlasTexture.destroyed&&this.imageAtlasTexture.destroy(),this.imageAtlasTexture=i.createTexture({width:a,height:a,format:"rgba8unorm"}),this.imageAtlasTexture.copyImageData({data:s,bytesPerRow:K("rgba8unorm",a),rowsPerImage:a,mipLevel:0,x:0,y:0}),this.imageAtlasCoordsTexture&&!this.imageAtlasCoordsTexture.destroyed&&this.imageAtlasCoordsTexture.destroy(),this.imageAtlasCoordsTexture=i.createTexture({width:c,height:c,format:"rgba32float"}),this.imageAtlasCoordsTexture.copyImageData({data:l,bytesPerRow:K("rgba32float",c),rowsPerImage:c,mipLevel:0,x:0,y:0}),!0}updateSampledPointsGrid(){let{store:{screenSize:e},config:{pointSamplingDistance:i},device:r}=this,n=i??Math.min(...e)/2;n===0&&(n=Ie.pointSamplingDistance);let o=Math.ceil(e[0]/n),s=Math.ceil(e[1]/n);o===0||s===0||(!this.sampledPointsFbo||this.sampledPointsFbo.width!==o||this.sampledPointsFbo.height!==s)&&(this.resetSampledReadback(),this.sampledPointsFbo&&!this.sampledPointsFbo.destroyed&&this.sampledPointsFbo.destroy(),this.sampledPointsFbo=r.createFramebuffer({width:o,height:s,colorAttachments:["rgba32float"]}))}gatherTrackers(){for(let e of this.trackers)e.gather()}gatherTrackedPositions(e,i){if(!this.trackPointsCommand||!this.currentPositionTexture||this.currentPositionTexture.destroyed)return!1;let r=this.trackPointsCommand,n=this.currentPositionTexture,o=()=>{r.setBindings({positionsTexture:n,trackedIndices:e});let s=this.device.beginRenderPass({framebuffer:i});r.draw(s),s.end()};return this.withHostState?this.withHostState(o):o(),!0}addTracker(e){e.attach(this)&&this.trackers.add(e)}removeTracker(e){this.trackers.delete(e)}getAnimatedSize(e,i){var r;let n=this.data.getResolvedPointSize(e),o=(r=this.sourceSizeData)==null?void 0:r[e];if(o===void 0)return n;let s=this.data.resolvePointSize(e,o);return s+(n-s)*i}setTransitionProgress(e,i=!1,r=!1,n=!1,o=!1,s=!1){this.transitionProgress=e,this.shouldAnimatePointColors=i,this.shouldAnimatePointSizes=r,this.shouldAnimateStrokeColors=o,this.shouldAnimateStrokeWidths=s,this.shouldAnimatePointPositions=n}drawPicking(e,i,r=0){let{data:n,store:o}=this;if(this.ensureStrokeVariant(),this.targetColorBuffer||this.updateColor(),this.targetSizeBuffer||this.updateSize(),this.targetStrokeColorBuffer||this.updateStrokeColor(),this.targetStrokeWidthBuffer||this.updateStrokeWidth(),this.exitTexture||this.updateExit(),this.shapeBuffer||this.updateShape(),this.imageIndicesBuffer||this.updateImageIndices(),this.imageSizesBuffer||this.updateImageSizes(),!this.drawCommand||!this.drawUniformStore||!this.currentPositionTexture||this.currentPositionTexture.destroyed||!this.pointStatusTexture||this.pointStatusTexture.destroyed||!this.exitTexture||this.exitTexture.destroyed||((!this.imageAtlasTexture||!this.imageAtlasCoordsTexture)&&this.createAtlas(),!this.imageAtlasTexture||!this.imageAtlasCoordsTexture)||this.imageAtlasTexture.destroyed||this.imageAtlasCoordsTexture.destroyed||!n.pointsNumber||!o.screenSize||o.screenSize[0]===0||o.screenSize[1]===0)return;this.drawPickingCommand||(this.drawPickingCommand=new J(this.device,{fs:_u,vs:Tu,modules:this.getDrawCommandModules(),topology:"point-list",vertexCount:n.pointsNumber,indexBuffer:this.pointRenderOrderBuffer??null,attributes:this.getDrawCommandAttributes(),bufferLayout:this.getDrawCommandBufferLayout(),defines:this.getDrawCommandDefines(),bindings:{drawVertexUniforms:this.drawUniformStore.getManagedUniformBuffer("drawVertexUniforms"),drawFragmentUniforms:this.drawUniformStore.getManagedUniformBuffer("drawFragmentUniforms")},parameters:ie})),this.drawPickingCommand.setAttributes(this.getDrawCommandAttributes()),this.drawPickingCommand.setVertexCount(n.pointsNumber);let{vertex:s,fragment:a}=this.getDrawUniforms(),l={...a,renderMode:3,pickingAlpha:i,pickingIndexOffset:r};this.drawPickingCommand.setBindings(this.getDrawTextureBindings());let c=this.config.highlightedPointIndices!==void 0?[{skipHighlighted:1,skipGreyed:0},{skipHighlighted:0,skipGreyed:1}]:[{skipHighlighted:0,skipGreyed:0}];for(let u of c)this.drawUniformStore.setUniforms({drawVertexUniforms:{...s,...u},drawFragmentUniforms:l}),this.drawPickingCommand.draw(e)}draw(e){var i,r;let{data:n,config:o,store:s}=this;if(this.ensureStrokeVariant(),this.targetColorBuffer||this.updateColor(),this.targetSizeBuffer||this.updateSize(),this.targetStrokeColorBuffer||this.updateStrokeColor(),this.targetStrokeWidthBuffer||this.updateStrokeWidth(),this.exitTexture||this.updateExit(),this.shapeBuffer||this.updateShape(),this.imageIndicesBuffer||this.updateImageIndices(),this.imageSizesBuffer||this.updateImageSizes(),this.renderRankBuffer||this.updateRenderOrder(),!this.drawCommand||!this.drawUniformStore||!this.currentPositionTexture||this.currentPositionTexture.destroyed||!this.pointStatusTexture||this.pointStatusTexture.destroyed||!this.exitTexture||this.exitTexture.destroyed||(!this.imageAtlasTexture||!this.imageAtlasCoordsTexture)&&(this.createAtlas(),!this.imageAtlasTexture||!this.imageAtlasCoordsTexture)||this.imageAtlasTexture.destroyed||this.imageAtlasCoordsTexture.destroyed||!n.pointsNumber||n.pointsNumber===0||!s.screenSize||s.screenSize[0]===0||s.screenSize[1]===0)return;this.drawCommand.setVertexCount(n.pointsNumber);let{vertex:a,fragment:l}=this.getDrawUniforms(),c=this.getDrawTextureBindings(),u=o.highlightedPointIndices!==void 0,d=o.pointOcclusionCulling&&o.pointOpacity>=1&&!u&&!!this.drawCoreCommand&&((i=this.reversedPointIndexBuffer)==null?void 0:i.byteLength)===n.pointsNumber*4;d!==this.isOcclusionCullingActive&&(this.drawCommand.setParameters(d?TR:qx),this.isOcclusionCullingActive=d),d&&this.drawCoreCommand?(this.drawUniformStore.setUniforms({drawVertexUniforms:{...a,skipHighlighted:0,skipGreyed:0},drawFragmentUniforms:{...l,renderMode:1}}),this.drawCoreCommand.setVertexCount(n.pointsNumber),this.drawCoreCommand.setBindings(c),this.drawCoreCommand.draw(e),this.drawUniformStore.setUniforms({drawFragmentUniforms:{...l,renderMode:2}}),this.drawCommand.setBindings(c),this.drawCommand.draw(e)):u?(this.drawUniformStore.setUniforms({drawVertexUniforms:{...a,skipHighlighted:1,skipGreyed:0},drawFragmentUniforms:l}),this.drawCommand.setBindings(c),this.drawCommand.draw(e),this.drawUniformStore.setUniforms({drawVertexUniforms:{...a,skipHighlighted:0,skipGreyed:1},drawFragmentUniforms:l}),this.drawCommand.setBindings(c),this.drawCommand.draw(e)):(this.drawUniformStore.setUniforms({drawVertexUniforms:{...a,skipHighlighted:0,skipGreyed:0},drawFragmentUniforms:l}),this.drawCommand.setBindings(c),this.drawCommand.draw(e));let h=o.renderHoveredPointRing?(r=s.hoveredPoint)==null?void 0:r.index:void 0,f=s.hostHoveredPointIndex,g=f!==void 0&&Number.isInteger(f)&&f>=0&&f<(this.data.pointsNumber??0)?f:void 0;h!==void 0&&this.drawPointRing(e,h,s.hoveredPointRingColor),g!==void 0&&g!==h&&this.drawPointRing(e,g,s.hoveredPointRingColor),s.focusedPoint&&this.drawPointRing(e,s.focusedPoint.index,s.focusedPointRingColor)}updatePosition(e=this.config.simulationFriction){if(!this.updatePositionCommand||!this.updatePositionUniformStore||!this.currentPositionFbo||this.currentPositionFbo.destroyed||!this.previousPositionTexture||this.previousPositionTexture.destroyed||!this.velocityTexture||this.velocityTexture.destroyed||!this.pinnedStatusTexture||this.pinnedStatusTexture.destroyed||!this.exitTexture||this.exitTexture.destroyed)return;this.updatePositionUniformStore.setUniforms({updatePositionUniforms:{friction:Qx(e),maxStep:this.store.stepGuard}}),this.updatePositionCommand.setBindings({positionsTexture:this.previousPositionTexture,velocity:this.velocityTexture,pinnedStatusTexture:this.pinnedStatusTexture,exitTexture:this.exitTexture});let i=this.device.beginRenderPass({framebuffer:this.currentPositionFbo});this.updatePositionCommand.draw(i),i.end(),this.markPositionsChanged()}drag(){var e;if(!this.dragPointCommand||!this.dragPointUniformStore||!this.currentPositionFbo||this.currentPositionFbo.destroyed||!this.previousPositionTexture||this.previousPositionTexture.destroyed)return;this.dragPointUniformStore.setUniforms({dragPointUniforms:{mousePos:oe(this.store.mousePosition,[0,0]),index:((e=this.store.hoveredPoint)==null?void 0:e.index)??-1}}),this.dragPointCommand.setBindings({positionsTexture:this.previousPositionTexture});let i=this.device.beginRenderPass({framebuffer:this.currentPositionFbo});this.dragPointCommand.draw(i),i.end(),this.markPositionsChanged()}setPointPositionsByIndices(e,i){var r,n;let{store:{pointsTextureSize:o},data:s}=this;if(!o||s.pointsNumber===void 0||!this.currentPositionTexture||this.currentPositionTexture.destroyed)return;let a=[this.currentPositionTexture];if((r=this.transition)!=null&&r.isActiveFor(ne.Positions)||(n=this.transition)!=null&&n.isPendingFor(ne.Positions))for(let c of[this.sourcePositionTexture,this.targetPositionTexture])c&&!c.destroyed&&a.push(c);let l=new Float32Array(4);for(let c=0,u=e.length;c<u;c+=1){let d=e[c];if(!(!Number.isInteger(d)||d<0||d>=s.pointsNumber)&&!(s.pointPositions&&$e(s.pointPositions,d))&&(l[0]=i[c*2],l[1]=i[c*2+1],!(Number.isNaN(l[0])||Number.isNaN(l[1])))){l[0]=Us(l[0],this.store.infiniteInputEdge),l[1]=Us(l[1],this.store.infiniteInputEdge),l[2]=d;for(let h of a)h.copyImageData({data:l,x:d%o,y:Math.floor(d/o),width:1,height:1,bytesPerRow:K("rgba32float",1),mipLevel:0})}}this.markPositionsChanged(),this.areClusterCentroidsUpToDate=!1}setPointPinnedStatus(e,i){let{store:{pointsTextureSize:r},data:n}=this;if(!(!r||n.pointsNumber===void 0)&&!(e<0||e>=n.pointsNumber)){if(!this.pinnedStatusTexture||this.pinnedStatusTexture.destroyed||this.pinnedStatusTexture.width!==r||this.pinnedStatusTexture.height!==r){this.updatePinnedStatus();return}this.pinnedStatusTexture.copyImageData({data:new Float32Array([i?1:0,0,0,0]),x:e%r,y:Math.floor(e/r),width:1,height:1,bytesPerRow:K("rgba32float",1),mipLevel:0})}}async readPositionPixelsAsync(){let{device:e,store:{pointsTextureSize:i},data:{pointsNumber:r}}=this;if(!i||!this.currentPositionFbo||this.currentPositionFbo.destroyed)return;let n=i*i*4*4,o=e.createBuffer({byteLength:n,usage:N.COPY_DST|N.MAP_READ});try{let s=e.createCommandEncoder();if(s.copyTextureToBuffer({sourceTexture:this.currentPositionFbo,width:i,height:i,destinationBuffer:o}),e.submit(s.finish()),await this.waitForGpu(),this.store.pointsTextureSize!==i||this.data.pointsNumber!==r||!this.currentPositionFbo||this.currentPositionFbo.destroyed)return;let a=await o.readAsync();return new Float32Array(a.buffer,a.byteOffset,n/4)}finally{o.destroy()}}findPointsInRect(){var e,i;if(!this.findPointsInRectCommand||!this.findPointsInRectUniformStore||!this.searchFbo||this.searchFbo.destroyed||!this.currentPositionTexture||this.currentPositionTexture.destroyed||(this.isSizeTextureStale&&this.updateSizeTexture(),!this.sizeTexture||this.sizeTexture.destroyed)||(this.exitTexture||this.updateExit(),!this.exitTexture||this.exitTexture.destroyed))return!1;this.findPointsInRectUniformStore.setUniforms({findPointsInRectUniforms:{worldOrigin:this.store.worldOrigin,screenSize:oe(this.store.screenSize,[0,0]),sizeScale:this.config.pointSizeScale,transformationMatrix:this.store.transformationMatrix4x4,ratio:this.config.pixelRatio,rect0:oe((e=this.store.searchArea)==null?void 0:e[0],[0,0]),rect1:oe((i=this.store.searchArea)==null?void 0:i[1],[0,0]),scalePointsOnZoom:this.config.scalePointsOnZoom?1:0,maxPointSize:this.store.maxPointSize}}),this.findPointsInRectCommand.setBindings({positionsTexture:this.currentPositionTexture,pointSize:this.sizeTexture,exitTexture:this.exitTexture});let r=this.device.beginRenderPass({framebuffer:this.searchFbo});return this.findPointsInRectCommand.draw(r),r.end(),!0}findPointsInPolygon(){if(!this.findPointsInPolygonCommand||!this.findPointsInPolygonUniformStore||!this.searchFbo||this.searchFbo.destroyed||!this.currentPositionTexture||this.currentPositionTexture.destroyed||!this.polygonPathTexture||this.polygonPathTexture.destroyed||(this.exitTexture||this.updateExit(),!this.exitTexture||this.exitTexture.destroyed))return!1;this.findPointsInPolygonUniformStore.setUniforms({findPointsInPolygonUniforms:{worldOrigin:this.store.worldOrigin,screenSize:oe(this.store.screenSize,[0,0]),transformationMatrix:this.store.transformationMatrix4x4,polygonPathLength:this.polygonPathLength}}),this.findPointsInPolygonCommand.setBindings({positionsTexture:this.currentPositionTexture,polygonPathTexture:this.polygonPathTexture,exitTexture:this.exitTexture});let e=this.device.beginRenderPass({framebuffer:this.searchFbo});return this.findPointsInPolygonCommand.draw(e),e.end(),!0}updatePolygonPath(e){let{device:i}=this;if(this.polygonPathLength=e.length,e.length===0){this.polygonPathTexture&&!this.polygonPathTexture.destroyed&&this.polygonPathTexture.destroy(),this.polygonPathTexture=void 0;return}let r=Math.ceil(Math.sqrt(e.length)),n=new Float32Array(r*r*4);for(let[o,s]of e.entries()){let[a,l]=s;n[o*4]=a,n[o*4+1]=l,n[o*4+2]=0,n[o*4+3]=0}!this.polygonPathTexture||this.polygonPathTexture.width!==r||this.polygonPathTexture.height!==r?(this.polygonPathTexture&&!this.polygonPathTexture.destroyed&&this.polygonPathTexture.destroy(),this.polygonPathTexture=i.createTexture({width:r,height:r,format:"rgba32float"}),this.polygonPathTexture.copyImageData({data:n,bytesPerRow:K("rgba32float",r),mipLevel:0,x:0,y:0})):this.polygonPathTexture.copyImageData({data:n,bytesPerRow:K("rgba32float",r),mipLevel:0,x:0,y:0})}updatePickingBuffer(){if(!this.isPickingBufferStale||!this.ensurePickingBuffer()||!this.pickingFbo||this.pickingFbo.destroyed||!this.fillPickingBufferCommand||!this.fillPickingBufferUniformStore||!this.currentPositionTexture||this.currentPositionTexture.destroyed||(this.pointStatusTexture||this.updatePointStatus(),!this.pointStatusTexture||this.pointStatusTexture.destroyed)||(this.exitTexture||this.updateExit(),!this.exitTexture||this.exitTexture.destroyed))return;this.fillPickingBufferCommand.setVertexCount(this.data.pointsNumber??0),this.fillPickingBufferCommand.setAttributes({...this.hoveredPointIndices&&{pointIndices:this.hoveredPointIndices},...this.targetSizeBuffer&&{size:this.targetSizeBuffer},...this.imageSizesBuffer&&{imageSize:this.imageSizesBuffer},...this.imageIndicesBuffer&&{imageIndex:this.imageIndicesBuffer}});let e=oe(this.store.screenSize,[0,0]),i={ratio:this.config.pixelRatio,sizeScale:this.config.pointSizeScale,pointsTextureSize:this.store.pointsTextureSize??0,transformationMatrix:this.store.transformationMatrix4x4,worldOrigin:this.store.worldOrigin,screenSize:e,scalePointsOnZoom:this.config.scalePointsOnZoom?1:0,pickingPixelRatio:e[0]>0?this.pickingFbo.width/e[0]:Ru,maxPointSize:this.store.maxPointSize,pointDefaultSize:this.config.pointDefaultSize,hasImages:this.imageCount>0?1:0,imageCount:this.imageCount},r={positionsTexture:this.currentPositionTexture,pointStatus:this.pointStatusTexture,exitTexture:this.exitTexture},n=this.device.beginRenderPass({framebuffer:this.pickingFbo,clearColor:[-1,0,0,0],clearDepth:1});this.config.highlightedPointIndices!==void 0?(this.fillPickingBufferUniformStore.setUniforms({fillPickingBufferUniforms:{...i,skipHighlighted:1,skipGreyed:0}}),this.fillPickingBufferCommand.setBindings(r),this.fillPickingBufferCommand.draw(n),this.fillPickingBufferUniformStore.setUniforms({fillPickingBufferUniforms:{...i,skipHighlighted:0,skipGreyed:1}}),this.fillPickingBufferCommand.setBindings(r),this.fillPickingBufferCommand.draw(n)):(this.fillPickingBufferUniformStore.setUniforms({fillPickingBufferUniforms:{...i,skipHighlighted:0,skipGreyed:0}}),this.fillPickingBufferCommand.setBindings(r),this.fillPickingBufferCommand.draw(n)),n.end(),this.isPickingBufferStale=!1}pickPointSync(){this.updatePickingBuffer();let e=this.getCursorPickingWindow();if(!e||!this.pickingFbo||this.pickingFbo.destroyed)return;let i=Xe(this.device,this.pickingFbo,e.x,e.y,Oe,Oe);return Wx(i,e.centerX-e.x,e.centerY-e.y)}requestPickPoint(){var e;if((e=this.pickingReadback)!=null&&e.inFlight)return!1;if(this.updatePickingBuffer(),!this.pickingFbo||this.pickingFbo.destroyed)return!0;let i=this.device.gl,r=this.pickingFbo.handle;if(!i||!r)return!0;this.pickingReadback||(this.pickingReadback=new ti(i,Oe*Oe*4));let n=this.getCursorPickingWindow();return n?this.pickingReadback.issue(r,n.x,n.y,Oe,Oe)?(this.issuedPickingWindow=n,!0):!1:!0}discardPendingPick(){var e;(e=this.pickingReadback)==null||e.cancel(),this.issuedPickingWindow=void 0}takePickResult(){if(!this.pickingReadback||!this.issuedPickingWindow)return;let e=this.pickingReadback.poll();if(!e)return;let i=this.issuedPickingWindow;return this.issuedPickingWindow=void 0,Wx(e,i.centerX-i.x,i.centerY-i.y)??null}requestTrackedPositionsReadback(){for(let e of this.trackers)e.requestReadback()}resolveTrackedPositionsReadback(){for(let e of this.trackers)e.resolveReadback()}getSampledPointPositionsMap(e=!1){let i=new Map,r=this.readSampledPoints(e);if(!r)return i;for(let n=0;n<r.length;n+=4)r[n+1]&&i.set(r[n],[r[n+2],r[n+3]]);return i}getSampledPoints(e=!1){let i=[],r=[],n=this.readSampledPoints(e);if(n)for(let o=0;o<n.length;o+=4)n[o+1]&&(i.push(n[o]),r.push(n[o+2],n[o+3]));return{indices:i,positions:r}}requestSampledReadback(){var e,i;if(!this.isSampledReadbackWanted||(e=this.sampledReadback)!=null&&e.inFlight)return;this.isSampledReadbackWanted=!1;let r=this.sampledPointsFbo,n=this.device.gl,o=r?.handle;if(!r||r.destroyed||!n||!o||!this.data.pointsNumber)return;let s=this.sampledPointsKey();if(((i=this.sampledCache)==null?void 0:i.key)===s||!this.drawSampledPoints(r))return;let{width:a,height:l}=r;this.sampledReadback||(this.sampledReadback=new ti(n,a*l*4)),this.sampledReadback.issue(o,0,0,a,l)&&(this.sampledReadbackKey=s)}resolveSampledReadback(){var e;let i=(e=this.sampledReadback)==null?void 0:e.poll();i&&this.sampledReadbackKey!==void 0&&(this.sampledCache={key:this.sampledReadbackKey,pixels:i})}resetSampledReadback(){var e;(e=this.sampledReadback)==null||e.destroy(),this.sampledReadback=void 0,this.sampledReadbackKey=void 0,this.isSampledReadbackWanted=!1,this.sampledCache=void 0}destroy(){var e,i,r,n,o,s,a,l,c,u,d,h,f,g,x,b,v,R,P,y,T,C;this.resetSampledReadback(),(e=this.drawCommand)==null||e.destroy(),(i=this.drawPickingCommand)==null||i.destroy(),this.drawPickingCommand=void 0,this.drawCommand=void 0,(r=this.drawCoreCommand)==null||r.destroy(),this.drawCoreCommand=void 0,this.isOcclusionCullingActive=!1,(n=this.drawHighlightedCommand)==null||n.destroy(),this.drawHighlightedCommand=void 0,(o=this.interpolatePositionCommand)==null||o.destroy(),this.interpolatePositionCommand=void 0,(s=this.updatePositionCommand)==null||s.destroy(),this.updatePositionCommand=void 0,(a=this.dragPointCommand)==null||a.destroy(),this.dragPointCommand=void 0,(l=this.findPointsInRectCommand)==null||l.destroy(),this.findPointsInRectCommand=void 0,(c=this.findPointsInPolygonCommand)==null||c.destroy(),this.findPointsInPolygonCommand=void 0,(u=this.fillPickingBufferCommand)==null||u.destroy(),this.fillPickingBufferCommand=void 0,(d=this.fillSampledPointsFboCommand)==null||d.destroy(),this.fillSampledPointsFboCommand=void 0,(h=this.trackPointsCommand)==null||h.destroy(),this.trackPointsCommand=void 0,(f=this.pickingReadback)==null||f.destroy(),this.pickingReadback=void 0;for(let k of this.trackers)k.release();this.trackers.clear(),this.issuedPickingWindow=void 0,this.currentPositionFbo&&!this.currentPositionFbo.destroyed&&this.currentPositionFbo.destroy(),this.currentPositionFbo=void 0,this.previousPositionFbo&&!this.previousPositionFbo.destroyed&&this.previousPositionFbo.destroy(),this.previousPositionFbo=void 0,this.sourcePositionFbo&&!this.sourcePositionFbo.destroyed&&this.sourcePositionFbo.destroy(),this.sourcePositionFbo=void 0,this.targetPositionFbo&&!this.targetPositionFbo.destroyed&&this.targetPositionFbo.destroy(),this.targetPositionFbo=void 0,this.velocityFbo&&!this.velocityFbo.destroyed&&this.velocityFbo.destroy(),this.velocityFbo=void 0,this.searchFbo&&!this.searchFbo.destroyed&&this.searchFbo.destroy(),this.searchFbo=void 0,this.pickingFbo&&!this.pickingFbo.destroyed&&this.pickingFbo.destroy(),this.pickingFbo=void 0,this.sampledPointsFbo&&!this.sampledPointsFbo.destroyed&&this.sampledPointsFbo.destroy(),this.sampledPointsFbo=void 0,this.currentPositionTexture&&!this.currentPositionTexture.destroyed&&this.currentPositionTexture.destroy(),this.currentPositionTexture=void 0,this.previousPositionTexture&&!this.previousPositionTexture.destroyed&&this.previousPositionTexture.destroy(),this.previousPositionTexture=void 0,this.sourcePositionTexture&&!this.sourcePositionTexture.destroyed&&this.sourcePositionTexture.destroy(),this.sourcePositionTexture=void 0,this.targetPositionTexture&&!this.targetPositionTexture.destroyed&&this.targetPositionTexture.destroy(),this.targetPositionTexture=void 0,this.velocityTexture&&!this.velocityTexture.destroyed&&this.velocityTexture.destroy(),this.velocityTexture=void 0,this.searchTexture&&!this.searchTexture.destroyed&&this.searchTexture.destroy(),this.searchTexture=void 0,this.pickingTexture&&!this.pickingTexture.destroyed&&this.pickingTexture.destroy(),this.pickingTexture=void 0,this.pointStatusTexture&&!this.pointStatusTexture.destroyed&&this.pointStatusTexture.destroy(),this.pointStatusTexture=void 0,this.pointColorsTexture&&!this.pointColorsTexture.destroyed&&this.pointColorsTexture.destroy(),this.pointColorsTexture=void 0,this.sizeTexture&&!this.sizeTexture.destroyed&&this.sizeTexture.destroy(),this.sizeTexture=void 0,this.isSizeTextureStale=!0,this.polygonPathTexture&&!this.polygonPathTexture.destroyed&&this.polygonPathTexture.destroy(),this.polygonPathTexture=void 0,this.imageAtlasTexture&&!this.imageAtlasTexture.destroyed&&this.imageAtlasTexture.destroy(),this.imageAtlasTexture=void 0,this.imageAtlasCoordsTexture&&!this.imageAtlasCoordsTexture.destroyed&&this.imageAtlasCoordsTexture.destroy(),this.imageAtlasCoordsTexture=void 0,this.pinnedStatusTexture&&!this.pinnedStatusTexture.destroyed&&this.pinnedStatusTexture.destroy(),this.pinnedStatusTexture=void 0,this.exitTexture&&!this.exitTexture.destroyed&&this.exitTexture.destroy(),this.exitTexture=void 0,this.hasAnyAbsentPoint=!1,(g=this.interpolatePositionUniformStore)==null||g.destroy(),this.interpolatePositionUniformStore=void 0,(x=this.updatePositionUniformStore)==null||x.destroy(),this.updatePositionUniformStore=void 0,(b=this.dragPointUniformStore)==null||b.destroy(),this.dragPointUniformStore=void 0,(v=this.drawUniformStore)==null||v.destroy(),this.drawUniformStore=void 0,(R=this.findPointsInRectUniformStore)==null||R.destroy(),this.findPointsInRectUniformStore=void 0,(P=this.findPointsInPolygonUniformStore)==null||P.destroy(),this.findPointsInPolygonUniformStore=void 0,(y=this.fillPickingBufferUniformStore)==null||y.destroy(),this.fillPickingBufferUniformStore=void 0,(T=this.fillSampledPointsUniformStore)==null||T.destroy(),this.fillSampledPointsUniformStore=void 0,(C=this.drawHighlightedUniformStore)==null||C.destroy(),this.drawHighlightedUniformStore=void 0,this.sourceColorBuffer&&!this.sourceColorBuffer.destroyed&&this.sourceColorBuffer.destroy(),this.sourceColorBuffer=void 0,this.targetColorBuffer&&!this.targetColorBuffer.destroyed&&this.targetColorBuffer.destroy(),this.targetColorBuffer=void 0,this.previousColorData=void 0,this.destroyStrokeBuffers(),this.sourceSizeBuffer&&!this.sourceSizeBuffer.destroyed&&this.sourceSizeBuffer.destroy(),this.sourceSizeBuffer=void 0,this.targetSizeBuffer&&!this.targetSizeBuffer.destroyed&&this.targetSizeBuffer.destroy(),this.targetSizeBuffer=void 0,this.previousSizeData=void 0,this.sourceSizeData=void 0,this.previousExitData=void 0,this.shapeBuffer&&!this.shapeBuffer.destroyed&&this.shapeBuffer.destroy(),this.shapeBuffer=void 0,this.imageIndicesBuffer&&!this.imageIndicesBuffer.destroyed&&this.imageIndicesBuffer.destroy(),this.imageIndicesBuffer=void 0,this.imageSizesBuffer&&!this.imageSizesBuffer.destroyed&&this.imageSizesBuffer.destroy(),this.imageSizesBuffer=void 0,this.drawPointIndices&&!this.drawPointIndices.destroyed&&this.drawPointIndices.destroy(),this.drawPointIndices=void 0,this.reversedPointIndexBuffer&&!this.reversedPointIndexBuffer.destroyed&&this.reversedPointIndexBuffer.destroy(),this.reversedPointIndexBuffer=void 0,this.pointRenderOrderBuffer&&!this.pointRenderOrderBuffer.destroyed&&this.pointRenderOrderBuffer.destroy(),this.pointRenderOrderBuffer=void 0,this.renderRankBuffer&&!this.renderRankBuffer.destroyed&&this.renderRankBuffer.destroy(),this.renderRankBuffer=void 0,this.appliedRenderOrder=void 0,this.hoveredPointIndices&&!this.hoveredPointIndices.destroyed&&this.hoveredPointIndices.destroy(),this.hoveredPointIndices=void 0,this.sampledPointIndices&&!this.sampledPointIndices.destroyed&&this.sampledPointIndices.destroy(),this.sampledPointIndices=void 0,this.updatePositionVertexCoordBuffer&&!this.updatePositionVertexCoordBuffer.destroyed&&this.updatePositionVertexCoordBuffer.destroy(),this.updatePositionVertexCoordBuffer=void 0,this.interpolatePositionVertexCoordBuffer&&!this.interpolatePositionVertexCoordBuffer.destroyed&&this.interpolatePositionVertexCoordBuffer.destroy(),this.interpolatePositionVertexCoordBuffer=void 0,this.dragPointVertexCoordBuffer&&!this.dragPointVertexCoordBuffer.destroyed&&this.dragPointVertexCoordBuffer.destroy(),this.dragPointVertexCoordBuffer=void 0,this.findPointsInRectVertexCoordBuffer&&!this.findPointsInRectVertexCoordBuffer.destroyed&&this.findPointsInRectVertexCoordBuffer.destroy(),this.findPointsInRectVertexCoordBuffer=void 0,this.findPointsInPolygonVertexCoordBuffer&&!this.findPointsInPolygonVertexCoordBuffer.destroyed&&this.findPointsInPolygonVertexCoordBuffer.destroy(),this.findPointsInPolygonVertexCoordBuffer=void 0,this.drawHighlightedVertexCoordBuffer&&!this.drawHighlightedVertexCoordBuffer.destroyed&&this.drawHighlightedVertexCoordBuffer.destroy(),this.drawHighlightedVertexCoordBuffer=void 0,this.trackPointsVertexCoordBuffer&&!this.trackPointsVertexCoordBuffer.destroyed&&this.trackPointsVertexCoordBuffer.destroy(),this.trackPointsVertexCoordBuffer=void 0}ensureSimulationResources(){let{store:{pointsTextureSize:e},device:i}=this;e&&(this.ensureUpdatePositionProgram(),!(this.velocityTexture&&this.velocityTexture.width===e&&this.velocityTexture.height===e)&&(this.velocityFbo&&!this.velocityFbo.destroyed&&this.velocityFbo.destroy(),this.velocityTexture&&!this.velocityTexture.destroyed&&this.velocityTexture.destroy(),this.velocityTexture=i.createTexture({width:e,height:e,format:"rgba32float"}),this.velocityTexture.copyImageData({data:new Float32Array(e*e*4),bytesPerRow:K("rgba32float",e),mipLevel:0,x:0,y:0}),this.velocityFbo=i.createFramebuffer({width:e,height:e,colorAttachments:[this.velocityTexture]})))}createTransitionResources(){let{store:{pointsTextureSize:e},device:i}=this;if(!e)return;let r=new Float32Array(e*e*4).fill(0),n=F.SAMPLE|F.RENDER|F.COPY_SRC|F.COPY_DST;(!this.sourcePositionTexture||this.sourcePositionTexture.width!==e||this.sourcePositionTexture.height!==e)&&(this.sourcePositionFbo&&!this.sourcePositionFbo.destroyed&&this.sourcePositionFbo.destroy(),this.sourcePositionTexture&&!this.sourcePositionTexture.destroyed&&this.sourcePositionTexture.destroy(),this.sourcePositionTexture=i.createTexture({width:e,height:e,format:"rgba32float",usage:n}),this.sourcePositionFbo=i.createFramebuffer({width:e,height:e,colorAttachments:[this.sourcePositionTexture]})),this.sourcePositionTexture.copyImageData({data:r,bytesPerRow:K("rgba32float",e),mipLevel:0,x:0,y:0}),(!this.targetPositionTexture||this.targetPositionTexture.width!==e||this.targetPositionTexture.height!==e)&&(this.targetPositionFbo&&!this.targetPositionFbo.destroyed&&this.targetPositionFbo.destroy(),this.targetPositionTexture&&!this.targetPositionTexture.destroyed&&this.targetPositionTexture.destroy(),this.targetPositionTexture=i.createTexture({width:e,height:e,format:"rgba32float",usage:n}),this.targetPositionFbo=i.createFramebuffer({width:e,height:e,colorAttachments:[this.targetPositionTexture]})),this.targetPositionTexture.copyImageData({data:r,bytesPerRow:K("rgba32float",e),mipLevel:0,x:0,y:0}),this.interpolatePositionVertexCoordBuffer||(this.interpolatePositionVertexCoordBuffer=i.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.interpolatePositionUniformStore||(this.interpolatePositionUniformStore=new Q(i,{interpolatePositionUniforms:{uniformTypes:{progress:"f32"},defaultUniforms:{progress:0}}})),this.interpolatePositionCommand||(this.interpolatePositionCommand=new J(i,{fs:mR,vs:ve,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.interpolatePositionVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{interpolatePositionUniforms:this.interpolatePositionUniformStore.getManagedUniformBuffer("interpolatePositionUniforms")},parameters:ie}))}destroyTransitionResources(){var e,i;(e=this.interpolatePositionCommand)==null||e.destroy(),this.interpolatePositionCommand=void 0,(i=this.interpolatePositionUniformStore)==null||i.destroy(),this.interpolatePositionUniformStore=void 0,this.interpolatePositionVertexCoordBuffer&&!this.interpolatePositionVertexCoordBuffer.destroyed&&this.interpolatePositionVertexCoordBuffer.destroy(),this.interpolatePositionVertexCoordBuffer=void 0,this.sourcePositionFbo&&!this.sourcePositionFbo.destroyed&&this.sourcePositionFbo.destroy(),this.sourcePositionFbo=void 0,this.sourcePositionTexture&&!this.sourcePositionTexture.destroyed&&this.sourcePositionTexture.destroy(),this.sourcePositionTexture=void 0,this.targetPositionFbo&&!this.targetPositionFbo.destroyed&&this.targetPositionFbo.destroy(),this.targetPositionFbo=void 0,this.targetPositionTexture&&!this.targetPositionTexture.destroyed&&this.targetPositionTexture.destroy(),this.targetPositionTexture=void 0}interpolatePosition(e){if(!this.interpolatePositionCommand||!this.interpolatePositionUniformStore||!this.sourcePositionTexture||this.sourcePositionTexture.destroyed||!this.targetPositionTexture||this.targetPositionTexture.destroyed||!this.currentPositionFbo||this.currentPositionFbo.destroyed)return;this.interpolatePositionUniformStore.setUniforms({interpolatePositionUniforms:{progress:e}}),this.interpolatePositionCommand.setBindings({sourceTexture:this.sourcePositionTexture,targetTexture:this.targetPositionTexture});let i=this.device.beginRenderPass({framebuffer:this.currentPositionFbo});this.interpolatePositionCommand.draw(i),i.end(),this.markPositionsChanged(),this.areClusterCentroidsUpToDate=!1}destroySimulationResources(){var e,i;(e=this.updatePositionCommand)==null||e.destroy(),this.updatePositionCommand=void 0,(i=this.updatePositionUniformStore)==null||i.destroy(),this.updatePositionUniformStore=void 0,this.updatePositionVertexCoordBuffer&&!this.updatePositionVertexCoordBuffer.destroyed&&this.updatePositionVertexCoordBuffer.destroy(),this.updatePositionVertexCoordBuffer=void 0,this.velocityFbo&&!this.velocityFbo.destroyed&&this.velocityFbo.destroy(),this.velocityFbo=void 0,this.velocityTexture&&!this.velocityTexture.destroyed&&this.velocityTexture.destroy(),this.velocityTexture=void 0}swapFbo(){if(!this.currentPositionTexture||this.currentPositionTexture.destroyed||!this.previousPositionTexture||this.previousPositionTexture.destroyed||!this.currentPositionFbo||this.currentPositionFbo.destroyed||!this.previousPositionFbo||this.previousPositionFbo.destroyed)return;let e=this.previousPositionTexture,i=this.previousPositionFbo;this.previousPositionTexture=this.currentPositionTexture,this.previousPositionFbo=this.currentPositionFbo,this.currentPositionTexture=e,this.currentPositionFbo=i,this.areClusterCentroidsUpToDate=!1,this.positionVersion++}readSampledPoints(e){var i,r,n,o;let s=this.sampledPointsFbo;if(!this.data.pointsNumber||!s||s.destroyed)return;if(!e)return this.drawSampledPoints(s)?Xe(this.device,s):void 0;this.resolveSampledReadback();let a=this.sampledPointsKey(),l=(i=this.sampledReadback)!=null&&i.inFlight?this.sampledReadbackKey:(r=this.sampledCache)==null?void 0:r.key;return this.isSampledReadbackWanted=l!==a,this.isSampledReadbackWanted&&!((n=this.requestTick)!=null&&n.call(this))&&this.requestSampledReadback(),(o=this.sampledCache)==null?void 0:o.pixels}sampledPointsKey(){let{screenSize:e,worldOrigin:i,transform:r}=this.store;return[this.positionVersion,this.pointListVersion,this.sampledOrderVersion,...e,...i,...r].join(",")}drawSampledPoints(e){let i=this.fillSampledPointsFboCommand,r=this.fillSampledPointsUniformStore;if(!i||!r||!this.currentPositionTexture||this.currentPositionTexture.destroyed||(this.exitTexture||this.updateExit(),!this.exitTexture||this.exitTexture.destroyed))return!1;i.setVertexCount(this.data.pointsNumber??0),r.setUniforms({fillSampledPointsUniforms:{pointsTextureSize:this.store.pointsTextureSize??0,transformationMatrix:this.store.transformationMatrix4x4,worldOrigin:this.store.worldOrigin,screenSize:oe(this.store.screenSize,[0,0])}}),i.setBindings({positionsTexture:this.currentPositionTexture,exitTexture:this.exitTexture});let n=this.device.beginRenderPass({framebuffer:e,clearColor:[0,0,0,0]});return i.draw(n),n.end(),!0}markFootprintsStale(){this.isPickingBufferStale=!0,this.isSizeTextureStale=!0}updateSizeTexture(){let{device:e,store:{pointsTextureSize:i},data:r}=this;if(!i||r.pointsNumber===void 0)return;let n=new Float32Array(i*i*4);for(let o=0;o<r.pointsNumber;o++)n[o*4]=r.getResolvedPointFootprint(o);(!this.sizeTexture||this.sizeTexture.width!==i||this.sizeTexture.height!==i)&&(this.sizeTexture&&!this.sizeTexture.destroyed&&this.sizeTexture.destroy(),this.sizeTexture=e.createTexture({width:i,height:i,format:"rgba32float"})),this.sizeTexture.copyImageData({data:n,bytesPerRow:K("rgba32float",i),mipLevel:0,x:0,y:0}),this.isSizeTextureStale=!1}markPositionsChanged(){this.positionVersion++}drawPointRing(e,i,r){let{config:n,store:o}=this;!this.drawHighlightedCommand||!this.drawHighlightedUniformStore||!this.currentPositionTexture||this.currentPositionTexture.destroyed||!this.pointStatusTexture||this.pointStatusTexture.destroyed||!this.exitTexture||this.exitTexture.destroyed||(this.drawHighlightedUniformStore.setUniforms({drawHighlightedUniforms:{...this.getRingSizeUniforms(i),transformationMatrix:o.transformationMatrix4x4,pointsTextureSize:o.pointsTextureSize??0,sizeScale:n.pointSizeScale,worldOrigin:o.worldOrigin,screenSize:oe(o.screenSize,[0,0]),scalePointsOnZoom:n.scalePointsOnZoom?1:0,pointIndex:i,maxPointSize:o.maxPointSize,color:le(r,[0,0,0,1]),universalPointOpacity:n.pointOpacity,greyoutOpacity:n.pointGreyoutOpacity??-1,isDarkenGreyout:o.isDarkenGreyout??!1?1:0,backgroundColor:le(o.backgroundColor,[0,0,0,1]),greyoutColor:le(o.greyoutPointColor,[0,0,0,1]),animatePositions:this.shouldAnimatePointPositions?1:0,transitionProgress:this.transitionProgress,animateSizes:this.shouldAnimatePointSizes?1:0,pointDefaultSize:n.pointDefaultSize,width:.85,pixelRatio:n.pixelRatio}}),this.drawHighlightedCommand.setBindings({positionsTexture:this.currentPositionTexture,pointStatus:this.pointStatusTexture,exitTexture:this.exitTexture}),this.drawHighlightedCommand.draw(e))}getRingSizeUniforms(e){var i,r,n;let{data:o}=this,s=((i=o.pointSizes)==null?void 0:i[e])??NaN;return{sourceSize:((r=this.sourceSizeData)==null?void 0:r[e])??s,targetSize:s,imageSize:o.pointDrawsImage(e)?((n=o.pointImageSizes)==null?void 0:n[e])??0:0}}ensureStrokeVariant(){var e,i,r,n;if(!this.drawCommand||this.isStrokeCompiled===this.isStrokeWanted)return;let o=((e=this.transition)==null?void 0:e.isActiveFor(ne.PointStrokeWidths))===!0||((i=this.transition)==null?void 0:i.isActiveFor(ne.PointStrokeColors))===!0;!this.isStrokeWanted&&o||(this.drawCommand.destroy(),this.drawCommand=void 0,(r=this.drawCoreCommand)==null||r.destroy(),this.drawCoreCommand=void 0,(n=this.drawPickingCommand)==null||n.destroy(),this.drawPickingCommand=void 0,this.isOcclusionCullingActive=!1,this.isStrokeCompiled=this.isStrokeWanted,this.isStrokeWanted||this.destroyStrokeBuffers(),this.initPrograms())}destroyStrokeBuffers(){for(let e of[this.sourceStrokeColorBuffer,this.targetStrokeColorBuffer,this.sourceStrokeWidthBuffer,this.targetStrokeWidthBuffer])e&&!e.destroyed&&e.destroy();this.sourceStrokeColorBuffer=void 0,this.targetStrokeColorBuffer=void 0,this.previousStrokeColorData=void 0,this.sourceStrokeWidthBuffer=void 0,this.targetStrokeWidthBuffer=void 0,this.previousStrokeWidthData=void 0}getDrawCommandDefines(){return{USE_UNIFORM_BUFFERS:!0,...Zx,...this.isStrokeCompiled&&{POINT_STROKE:!0}}}getDrawCommandModules(){return[oR,Fs,Kx,...this.isStrokeCompiled?[nR]:[],l0]}getDrawCommandBufferLayout(){let e=this.isStrokeCompiled?[{name:"sourceStrokeColor",format:"float32x4"},{name:"targetStrokeColor",format:"float32x4"},{name:"sourceStrokeWidth",format:"float32"},{name:"targetStrokeWidth",format:"float32"}]:[];return[{name:"pointIndices",format:"float32x2"},{name:"sourceSize",format:"float32"},{name:"targetSize",format:"float32"},{name:"sourceColor",format:"float32x4"},{name:"targetColor",format:"float32x4"},{name:"shape",format:"float32"},{name:"imageIndex",format:"float32"},{name:"imageSize",format:"float32"},...e,{name:"renderRank",format:"float32"}]}getStrokeUniforms(){let{config:e,store:i}=this;return{strokeContrast:Math.min(1,Math.max(0,e.pointStrokeContrast)),strokeDefaultShade:i.pointDefaultStrokeShade,strokeDefaultWidth:Math.max(0,e.pointDefaultStrokeWidth),strokeDefaultColor:i.pointDefaultStrokeRgba??[0,0,0,1]}}ensurePositionTextures(e){(!this.currentPositionTexture||this.currentPositionTexture.width!==e||this.currentPositionTexture.height!==e)&&(this.currentPositionTexture&&!this.currentPositionTexture.destroyed&&this.currentPositionTexture.destroy(),this.currentPositionFbo&&!this.currentPositionFbo.destroyed&&this.currentPositionFbo.destroy(),this.currentPositionTexture=this.device.createTexture({width:e,height:e,format:"rgba32float"}),this.currentPositionFbo=this.device.createFramebuffer({width:e,height:e,colorAttachments:[this.currentPositionTexture]})),(!this.previousPositionTexture||this.previousPositionTexture.width!==e||this.previousPositionTexture.height!==e)&&(this.previousPositionTexture&&!this.previousPositionTexture.destroyed&&this.previousPositionTexture.destroy(),this.previousPositionFbo&&!this.previousPositionFbo.destroyed&&this.previousPositionFbo.destroy(),this.previousPositionTexture=this.device.createTexture({width:e,height:e,format:"rgba32float"}),this.previousPositionFbo=this.device.createFramebuffer({width:e,height:e,colorAttachments:[this.previousPositionTexture]}))}async waitForGpu(e=1e3){let i=this.device.createFence(),r;try{await Promise.race([i.signaled,new Promise(n=>{r=setTimeout(n,e)})])}finally{clearTimeout(r),i.destroy()}}writePositionTexture(e,i,r){e.copyImageData({data:i,bytesPerRow:K("rgba32float",r),mipLevel:0,x:0,y:0})}ensurePickingBuffer(){var e;let{device:i,store:r}=this,[n,o]=r.screenSize;if(!n||!o)return!1;let{width:s,height:a}=p1(n,o);return this.pickingTexture&&!this.pickingTexture.destroyed&&this.pickingTexture.width===s&&this.pickingTexture.height===a||((e=this.pickingReadback)==null||e.cancel(),this.issuedPickingWindow=void 0,this.pickingFbo&&!this.pickingFbo.destroyed&&this.pickingFbo.destroy(),this.pickingTexture&&!this.pickingTexture.destroyed&&this.pickingTexture.destroy(),this.pickingTexture=i.createTexture({width:s,height:a,format:"rgba32float",usage:F.SAMPLE|F.RENDER}),this.pickingFbo=i.createFramebuffer({width:s,height:a,colorAttachments:[this.pickingTexture],depthStencilAttachment:"depth16unorm"}),this.isPickingBufferStale=!0),!0}getCursorPickingWindow(){if(!this.pickingFbo||this.pickingFbo.destroyed)return;let[e,i]=this.store.screenSize;if(!(!e||!i))return g1(this.pickingFbo.width,this.pickingFbo.height,this.store.screenMousePosition[0],this.store.screenMousePosition[1],e,i)}ensureUpdatePositionProgram(){let{device:e,config:i,store:r}=this;this.updatePositionVertexCoordBuffer||(this.updatePositionVertexCoordBuffer=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])})),this.updatePositionUniformStore||(this.updatePositionUniformStore=new Q(e,{updatePositionUniforms:{uniformTypes:{friction:"f32",maxStep:"f32"},defaultUniforms:{friction:Qx(i.simulationFriction),maxStep:r.stepGuard}}})),this.updatePositionCommand||(this.updatePositionCommand=new J(e,{fs:gR,vs:ve,topology:"triangle-strip",vertexCount:4,attributes:{vertexCoord:this.updatePositionVertexCoordBuffer},bufferLayout:[{name:"vertexCoord",format:"float32x2"}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{updatePositionUniforms:this.updatePositionUniformStore.getManagedUniformBuffer("updatePositionUniforms")},parameters:ie}))}rescaleInitialNodePositions(){if(!this.data.pointPositions)return;let e=this.data.pointPositions,i=e.length/2,r=this.store.referenceLength,n=r,o=r*r*.001,s=r*.1,a=r*Math.max(1.2,Math.sqrt(i)/r),[l,c]=this.store.worldOrigin,u=1/0,d=-1/0,h=1/0,f=-1/0;for(let T=0;T<e.length;T+=2){let C=e[T],k=e[T+1];$e(e,T/2)||(u=Math.min(u,C),d=Math.max(d,C),h=Math.min(h,k),f=Math.max(f,k))}if(!Number.isFinite(u)){this.scaleX=void 0,this.scaleY=void 0;return}let g=d-u,x=f-h,b=Math.max(g,x);if(b===0){this.scaleX=T=>T-u+l,this.scaleY=T=>T-h+c;for(let T=0;T<i;T++)$e(e,T)||(this.data.pointPositions[T*2]=this.scaleX(e[T*2]),this.data.pointPositions[T*2+1]=this.scaleY(e[T*2+1]));return}if(b>n){this.scaleX=void 0,this.scaleY=void 0;return}let v=i>o?a:s,R=v/b,P=(b-g)/2*R+(l-v/2),y=(b-x)/2*R+(c-v/2);this.scaleX=T=>(T-u)*R+P,this.scaleY=T=>(T-h)*R+y;for(let T=0;T<i;T++)$e(e,T)||(this.data.pointPositions[T*2]=this.scaleX(e[T*2]),this.data.pointPositions[T*2+1]=this.scaleY(e[T*2+1]))}writeIndexBuffer(e,i){return!e||e.destroyed||e.byteLength!==i.byteLength?(e&&!e.destroyed&&e.destroy(),this.device.createBuffer({data:i,usage:N.INDEX|N.COPY_DST})):(e.write(i),e)}getDrawUniforms(){let{data:e,config:i,store:r}=this,n={ratio:i.pixelRatio,transformationMatrix:r.transformationMatrix4x4,pointsTextureSize:r.pointsTextureSize??0,sizeScale:i.pointSizeScale,worldOrigin:r.worldOrigin,screenSize:oe(r.screenSize,[0,0]),greyoutColor:le(r.greyoutPointColor,[-1,-1,-1,-1]),backgroundColor:le(r.backgroundColor,[0,0,0,1]),scalePointsOnZoom:i.scalePointsOnZoom?1:0,maxPointSize:r.maxPointSize,isDarkenGreyout:r.isDarkenGreyout??!1?1:0,hasImages:this.imageCount>0?1:0,imageCount:this.imageCount,imageAtlasCoordsTextureSize:this.imageAtlasCoordsTextureSize??0,transitionProgress:this.transitionProgress,animateColors:this.shouldAnimatePointColors?1:0,animateSizes:this.shouldAnimatePointSizes?1:0,animatePositions:this.shouldAnimatePointPositions?1:0,pointDefaultColor:le(e.defaultRgba,[0,0,0,1]),pointDefaultSize:i.pointDefaultSize,pointsNumber:e.pointsNumber,...this.getStrokeUniforms(),animateStrokeColors:this.shouldAnimateStrokeColors?1:0,animateStrokeWidths:this.shouldAnimateStrokeWidths?1:0},o={greyoutOpacity:i.pointGreyoutOpacity??-1,pointOpacity:i.pointOpacity,isDarkenGreyout:r.isDarkenGreyout??!1?1:0,backgroundColor:le(r.backgroundColor,[0,0,0,1]),outlineColor:le(r.outlinedPointRingColor,[1,1,1,1]),outlineWidth:.9,renderMode:0};return{vertex:n,fragment:o}}getDrawTextureBindings(){return{positionsTexture:this.currentPositionTexture,pointStatus:this.pointStatusTexture,exitTexture:this.exitTexture,imageAtlasTexture:this.imageAtlasTexture,imageAtlasCoords:this.imageAtlasCoordsTexture}}getDrawCommandAttributes(){return{...this.drawPointIndices&&{pointIndices:this.drawPointIndices},...this.sourceSizeBuffer&&{sourceSize:this.sourceSizeBuffer},...this.targetSizeBuffer&&{targetSize:this.targetSizeBuffer},...this.sourceColorBuffer&&{sourceColor:this.sourceColorBuffer},...this.targetColorBuffer&&{targetColor:this.targetColorBuffer},...this.shapeBuffer&&{shape:this.shapeBuffer},...this.imageIndicesBuffer&&{imageIndex:this.imageIndicesBuffer},...this.imageSizesBuffer&&{imageSize:this.imageSizesBuffer},...this.sourceStrokeColorBuffer&&{sourceStrokeColor:this.sourceStrokeColorBuffer},...this.targetStrokeColorBuffer&&{targetStrokeColor:this.targetStrokeColorBuffer},...this.sourceStrokeWidthBuffer&&{sourceStrokeWidth:this.sourceStrokeWidthBuffer},...this.targetStrokeWidthBuffer&&{targetStrokeWidth:this.targetStrokeWidthBuffer},...this.renderRankBuffer&&{renderRank:this.renderRankBuffer}}}},$u=class{constructor(e){this.isDestroyed=!1,this.gatheredVersion=-1,this.cachedVersion=-1,this.cachedPointList=-1,this.issuedVersion=-1,this.issuedPointList=-1,this.isReadbackWanted=!1,this.lastReadStep=-1,this.indices=[...e]}get hasPendingReadback(){var e;return((e=this.readback)==null?void 0:e.inFlight)??!1}get isReadbackPending(){var e;return((e=this.readback)==null?void 0:e.isPending)??!1}cancelReadback(){var e;(e=this.readback)!=null&&e.inFlight&&(this.readback.cancel(),this.issuedVersion=-1)}positions(e){var i,r;let{host:n}=this;if(!n||!this.indices.length)return new Map;this.resolveReadback();let o=n.positionVersion,s=n.pointListVersion,a=n.stepVersion,l=a-this.lastReadStep>e0;return this.lastReadStep=a,this.cached&&this.cachedVersion===o&&this.cachedPointList===s?this.cached:e!=null&&e.nonBlocking&&this.cached&&!l?(this.cachedPointList!==s&&this.dropGonePoints(),this.isReadbackWanted=!0,this.issuedVersion!==o&&!(((i=n.requestTick)==null?void 0:i.call(n))??!1)&&this.requestReadback(),this.cached):!this.positionsFbo||this.positionsFbo.destroyed?new Map:(this.isReadbackWanted=!1,(r=this.readback)==null||r.cancel(),this.gather(),this.cached=this.buildMap(Xe(n.device,this.positionsFbo)),this.cachedVersion=o,this.cachedPointList=s,this.issuedVersion=o,this.cached)}positionsArray(){let{host:e,indices:i}=this;if(!e||!i.length||!this.positionsFbo||this.positionsFbo.destroyed)return[];let r=new Array(i.length*2);this.gather();let n=Xe(e.device,this.positionsFbo);for(let o=0,s=i.length;o<s;o+=1){let a=i[o],l=!e.data.isPointIndex(a)||e.data.pointPositions!==void 0&&$e(e.data.pointPositions,a);r[o*2]=l?NaN:n[o*4],r[o*2+1]=l?NaN:n[o*4+1]}return r}setIndices(e){var i;this.indices=[...e],this.cached=void 0,this.cachedVersion=-1,this.issuedVersion=-1,this.isReadbackWanted=!1,(i=this.readback)==null||i.destroy(),this.readback=void 0,this.allocate()}destroy(){if(this.isDestroyed)return;this.isDestroyed=!0;let{host:e}=this;this.release(),e?.removeTracker(this)}attach(e){return this.isDestroyed?!1:(this.host=e,this.allocate(),!0)}release(){var e;(e=this.readback)==null||e.destroy(),this.readback=void 0,this.positionsFbo&&!this.positionsFbo.destroyed&&this.positionsFbo.destroy(),this.positionsFbo=void 0,this.indicesTexture&&!this.indicesTexture.destroyed&&this.indicesTexture.destroy(),this.indicesTexture=void 0,this.cached=void 0,this.host=void 0}gather(){let{host:e}=this;!e||!this.indices.length||this.gatheredVersion!==e.positionVersion&&(!this.indicesTexture||this.indicesTexture.destroyed||!this.positionsFbo||this.positionsFbo.destroyed||e.gatherTrackedPositions(this.indicesTexture,this.positionsFbo)&&(this.gatheredVersion=e.positionVersion))}requestReadback(){let{host:e}=this;if(!e||!this.isReadbackWanted||!this.indices.length)return;let i=e.positionVersion;if(this.issuedVersion===i||!this.positionsFbo||this.positionsFbo.destroyed)return;let r=e.device.gl,n=this.positionsFbo.handle;if(!r||!n)return;this.gather();let{width:o,height:s}=this.positionsFbo;this.readback||(this.readback=new ti(r,o*s*4)),this.readback.issue(n,0,0,o,s)&&(this.issuedVersion=i,this.issuedPointList=e.pointListVersion,this.isReadbackWanted=!1)}resolveReadback(){var e;let{host:i}=this;if(!i||!((e=this.readback)!=null&&e.inFlight))return;if(this.issuedPointList!==i.pointListVersion){this.readback.cancel(),this.issuedVersion=-1,this.isReadbackWanted=!0;return}let r=this.readback.poll();r?(this.cached=this.buildMap(r),this.cachedVersion=this.issuedVersion,this.cachedPointList=this.issuedPointList):this.readback.inFlight||(this.issuedVersion=-1)}allocate(){let{host:e,indices:i}=this;if(!e||!i.length)return;let r=Math.ceil(Math.sqrt(i.length)),n=new Float32Array(r*r*4).fill(-1);for(let[o,s]of i.entries())n[o*4]=s;(!this.indicesTexture||this.indicesTexture.destroyed||this.indicesTexture.width!==r)&&(this.indicesTexture&&!this.indicesTexture.destroyed&&this.indicesTexture.destroy(),this.indicesTexture=e.device.createTexture({width:r,height:r,format:"rgba32float"})),this.indicesTexture.copyImageData({data:n,bytesPerRow:K("rgba32float",r),mipLevel:0,x:0,y:0}),(!this.positionsFbo||this.positionsFbo.destroyed||this.positionsFbo.width!==r)&&(this.positionsFbo&&!this.positionsFbo.destroyed&&this.positionsFbo.destroy(),this.positionsFbo=e.device.createFramebuffer({width:r,height:r,colorAttachments:["rgba32float"]})),this.gatheredVersion=-1,this.gather()}dropGonePoints(){let{host:e,cached:i}=this;if(!e||!i)return;let r=new Map;for(let[n,o]of i)e.data.isPointIndex(n)&&(e.data.pointPositions&&$e(e.data.pointPositions,n)||r.set(n,o));this.cached=r,this.cachedPointList=e.pointListVersion}buildMap(e){let{host:i,indices:r}=this,n=new Map;if(!i)return n;for(let o=0,s=r.length;o<s;o+=1){let a=r[o],l=e[o*4],c=e[o*4+1];l===void 0||c===void 0||i.data.isPointIndex(a)&&(i.data.pointPositions&&$e(i.data.pointPositions,a)||n.set(a,[l,c]))}return n}},Xu=class{constructor(e,i,r){if(this.isReady=!1,this.isPointPositionsUpdateNeeded=!1,this.isPointSizeUpdateNeeded=!1,this.isForceManyBodyUpdateNeeded=!1,this.isForceLinkUpdateNeeded=!1,this.isForceCenterUpdateNeeded=!1,this.isForceAttractorUpdateNeeded=!1,this.isPointClusterUpdateNeeded=!1,this.isForceCollisionReady=!1,this._isDestroyed=!1,r?this.config=r:(this.config=Ku(),e&&Sn(this.config,e)),this.store=new Pu,this.store.adjustSpaceSize(this.config.spaceSize),this.data=new Cu(this.config),i)this.deviceInitPromise=i,this.shouldDestroyDevice=!1;else{let o=document.createElement("canvas");this.deviceInitPromise=this.createDevice(o),this.shouldDestroyDevice=!0}let n=this.deviceInitPromise.then(o=>{var s;return this._isDestroyed?(this.shouldDestroyDevice&&((s=o.canvasContext)==null||s.destroy(),o.destroy()),o):(this._device=o,this.store.setWebGLMaxTextureSize(o.limits.maxTextureDimension2D),this.store.maxPointSize=t0(o,this.config.pixelRatio),this.store.isSimulationRunning=this.config.enableSimulation,this.points=new Hu(o,this.config,this.store,this.data),this.points.withHostState=a=>this.withExternalDeviceState(a),this.config.enableSimulation&&this.ensureSimulationModules(),this.clusters=new Vu(o,this.config,this.store,this.data,this.points),this.config.randomSeed!==void 0&&this.store.addRandomSeed(this.config.randomSeed),this.isReady=!0,o)}).catch(o=>{throw this._device=void 0,this.isReady=!1,console.error("Device initialization failed:",o),o});this.ready=n.then(()=>{})}get device(){return this._device}get ownsDevice(){return this.shouldDestroyDevice}get progress(){return this._isDestroyed?0:this.store.simulationProgress}get isSimulationRunning(){return this._isDestroyed?!1:this.store.isSimulationRunning}get hasPendingCentroidReadback(){var e;return((e=this.clusters)==null?void 0:e.hasPendingCentroidReadback)??!1}get hasPendingOccupancyReadback(){var e;return((e=this.forceManyBody)==null?void 0:e.hasPendingOccupancyReadback)??!1}get isReadbackPending(){var e,i,r;return(((e=this.points)==null?void 0:e.isReadbackPending)??!1)||(((i=this.clusters)==null?void 0:i.isCentroidReadbackPending)??!1)||(((r=this.forceManyBody)==null?void 0:r.isOccupancyReadbackPending)??!1)}restartOccupancyMeasurement(){var e;(e=this.forceManyBody)==null||e.restartOccupancyMeasurement()}cancelPendingReadbacks(){var e,i,r;(e=this.points)==null||e.cancelPendingReadbacks(),(i=this.clusters)==null||i.cancelCentroidReadback(),(r=this.forceManyBody)==null||r.cancelOccupancyReadback()}setConfig(e){var i;if(this._isDestroyed||(Ns(e),this.ensureDevice(()=>this.setConfig(e))))return;let r={...this.config};Sn(this.config,e,!0),this.applyEnableSimulationConfigChange(r),r.simulationRepulsionSamples!==this.config.simulationRepulsionSamples&&this.restartOccupancyMeasurement(),r.pointDefaultSize!==this.config.pointDefaultSize&&(this.data.updatePointSize(),(i=this.points)==null||i.updateSize()),(r.simulationCollisionRadius!==this.config.simulationCollisionRadius||r.simulationCollisionPadding!==this.config.simulationCollisionPadding||(this.config.simulationCollisionRadius===void 0||this.config.simulationCollisionRadius===0)&&r.pointDefaultSize!==this.config.pointDefaultSize)&&(this.isForceCollisionReady=!1),r.spaceSize!==this.config.spaceSize&&(this.store.adjustSpaceSize(this.config.spaceSize),this.update(this.store.isSimulationRunning?this.store.alpha:0))}setPointPositions(e,i){this._isDestroyed||this.ensureDevice(()=>this.setPointPositions(e,i))||(this.data.inputPointPositions=e,this.points&&(this.points.shouldSkipRescale=i),this.isPointPositionsUpdateNeeded=!0,this.isPointSizeUpdateNeeded=!0,this.isPointClusterUpdateNeeded=!0,this.isForceManyBodyUpdateNeeded=!0,this.isForceLinkUpdateNeeded=!0,this.isForceCenterUpdateNeeded=!0,this.isForceAttractorUpdateNeeded=!0)}setPointSizes(e){this._isDestroyed||this.ensureDevice(()=>this.setPointSizes(e))||(this.data.inputPointSizes=e,this.isPointSizeUpdateNeeded=!0)}setLinks(e){this._isDestroyed||this.ensureDevice(()=>this.setLinks(e))||(this.data.inputLinks=e,this.isForceLinkUpdateNeeded=!0)}setLinkStrength(e){this._isDestroyed||this.ensureDevice(()=>this.setLinkStrength(e))||(this.data.inputLinkStrength=e,this.isForceLinkUpdateNeeded=!0)}setPointClusters(e){this._isDestroyed||this.ensureDevice(()=>this.setPointClusters(e))||(this.data.inputPointClusters=e,this.isPointClusterUpdateNeeded=!0)}setClusterPositions(e){this._isDestroyed||this.ensureDevice(()=>this.setClusterPositions(e))||(this.data.inputClusterPositions=e,this.isPointClusterUpdateNeeded=!0)}setPointClusterStrength(e){this._isDestroyed||this.ensureDevice(()=>this.setPointClusterStrength(e))||(this.data.inputClusterStrength=e,this.isPointClusterUpdateNeeded=!0)}setPointAttractors(e){this._isDestroyed||this.ensureDevice(()=>this.setPointAttractors(e))||(this.data.inputPointAttractors=e,this.isForceAttractorUpdateNeeded=!0)}setPointAttractorStrength(e){this._isDestroyed||this.ensureDevice(()=>this.setPointAttractorStrength(e))||(this.data.inputPointAttractorStrength=e,this.isForceAttractorUpdateNeeded=!0)}setPinnedPoints(e){var i;if(this._isDestroyed||this.ensureDevice(()=>this.setPinnedPoints(e)))return;let r=e?.filter(o=>Number.isInteger(o)&&o>=0),n=r&&r.length>0?[...new Set(r)]:void 0;this.data.inputPinnedPoints=n,(i=this.points)==null||i.updatePinnedStatus()}setPinnedPoint(e,i){var r;if(this._isDestroyed||this.ensureDevice(()=>this.setPinnedPoint(e,i))||!Number.isInteger(e)||e<0)return;let n=new Set(this.data.inputPinnedPoints);i?n.add(e):n.delete(e),this.data.inputPinnedPoints=n.size>0?[...n]:void 0,(r=this.points)==null||r.setPointPinnedStatus(e,i)}isPointPinned(e){var i;return this._isDestroyed?!1:((i=this.data.inputPinnedPoints)==null?void 0:i.includes(e))??!1}setPointPosition(e,i,r){this.setPointPositionsByIndices([e],[i,r])}setPointPositionsByIndices(e,i){if(this._isDestroyed||this.ensureDevice(()=>this.setPointPositionsByIndices(e,i)))return;if(e.length*2!==i.length){console.warn(`setPointPositionsByIndices: expected ${e.length*2} coordinates for ${e.length} indices, got ${i.length}. Call ignored.`);return}let r=this.points;r&&this.withExternalDeviceState(()=>{r.setPointPositionsByIndices(e,i),r.gatherTrackers()})}applyData(e){this._isDestroyed||this.ensureDevice(()=>this.applyData(e))||this.update(e)}start(e=1){var i,r;if(this._isDestroyed||this.ensureDevice(()=>this.start(e))||!this.config.enableSimulation||!this.data.pointsNumber)return;let n=this.store.isSimulationRunning;this.store.isSimulationRunning=!0,this.store.simulationProgress=0,this.store.alpha=e,n||(r=(i=this.config).onSimulationStart)==null||r.call(i)}stop(){var e,i;if(this._isDestroyed||this.ensureDevice(()=>this.stop()))return;let r=this.store.isSimulationRunning||this.store.alpha>0||this.store.simulationProgress>0;this.store.isSimulationRunning=!1,this.store.simulationProgress=0,this.store.alpha=0,r&&((i=(e=this.config).onSimulationEnd)==null||i.call(e))}pause(){var e,i;this._isDestroyed||this.ensureDevice(()=>this.pause())||this.store.isSimulationRunning&&(this.store.isSimulationRunning=!1,(i=(e=this.config).onSimulationPause)==null||i.call(e))}unpause(){var e,i;this._isDestroyed||this.ensureDevice(()=>this.unpause())||this.config.enableSimulation&&(this.store.isSimulationRunning||(this.store.isSimulationRunning=!0,(i=(e=this.config).onSimulationUnpause)==null||i.call(e)))}step(){this._isDestroyed||this.ensureDevice(()=>this.step())||this.config.enableSimulation&&this.store.pointsTextureSize&&(this.runSimulationStep(!0),this.store.alpha<ur&&this.store.isSimulationRunning&&this.end())}getPointPositions(){return Array.from(this.getPointPositionsArray())}getPointPositionsArray(e){if(this._isDestroyed||!this._device||!this.points)return new Float32Array(0);if(this.data.pointsNumber===void 0||!this.points.currentPositionFbo)return new Float32Array(0);let i=Xe(this._device,this.points.currentPositionFbo);return this.composePointPositions(i,e)}async getPointPositionsAsync(e){if(this._isDestroyed||!this._device||!this.points)return new Float32Array(0);if(this.data.pointsNumber===void 0)return new Float32Array(0);let i=await this.points.readPositionPixelsAsync();return!i||this._isDestroyed?new Float32Array(0):this.composePointPositions(i,e)}getPointPositionTexture(){if(this._isDestroyed||!this.points)return;let e=this.points.currentPositionTexture;if(!(!e||e.destroyed||!this.store.pointsTextureSize))return{texture:e,pointCount:this.data.pointsNumber??0,textureSize:this.store.pointsTextureSize,version:this.points.positionVersion}}trackPoints(e){let i=new $u(e);if(this._isDestroyed)return i;let r=()=>{var n;return(n=this.points)==null?void 0:n.addTracker(i)};return this.isReady?r():this.ensureDevice(r),i}getClusterPositions(e){if(this._isDestroyed||!this._device||!this.clusters)return[];if(this.data.pointClusters===void 0||this.clusters.clusterCount===void 0)return[];let i=this.clusters;return this.withExternalDeviceState(()=>{var r,n;e!=null&&e.nonBlocking&&i.resolveCentroidReadback();let o=i.getCentroidPositions(e?.nonBlocking);return e!=null&&e.nonBlocking&&i.needsCentroidReadback&&!(((n=(r=this.points)==null?void 0:r.requestTick)==null?void 0:n.call(r))??!1)&&i.requestCentroidReadback(),o})}collectReadbacks(e){var i,r,n,o,s;(i=this.points)==null||i.resolveTrackedPositionsReadback(),(r=this.points)==null||r.resolveSampledReadback(),(n=this.clusters)==null||n.resolveCentroidReadback(),e===void 0?(o=this.forceManyBody)==null||o.cancelOccupancyReadback():(s=this.forceManyBody)==null||s.collectOccupancy(e)}issueReadbacks(){var e,i,r,n;(e=this.points)==null||e.requestTrackedPositionsReadback(),(i=this.points)==null||i.requestSampledReadback(),(r=this.clusters)==null||r.requestCentroidReadback(),(n=this.forceManyBody)==null||n.issueOccupancy()}destroy(){var e,i,r,n;this._isDestroyed||(this._isDestroyed=!0,this.isReady=!1,(e=this.points)==null||e.destroy(),(i=this.clusters)==null||i.destroy(),this.destroySimulationModules(),(r=this.forceMouse)==null||r.destroy(),this.forceMouse=void 0,this._device&&this.shouldDestroyDevice&&(this._device.beginRenderPass({clearColor:this.store.backgroundColor,clearDepth:1,clearStencil:0}).end(),this._device.submit(),(n=this._device.canvasContext)==null||n.destroy(),this._device.destroy()))}updateTextureSizes(){this.store.pointsTextureSize=Math.ceil(Math.sqrt(this.data.pointsNumber??0)),this.store.linksTextureSize=Math.ceil(Math.sqrt((this.data.linksNumber??0)*2))}applyDataUpdates(){var e,i,r,n,o,s;let a=this.isPointPositionsUpdateNeeded;return this.points?(this.config.enableSimulation&&this.points.ensureSimulationResources(),this.isPointPositionsUpdateNeeded&&this.points.updatePositions(),this.isPointSizeUpdateNeeded&&this.points.updateSize(),this.isForceManyBodyUpdateNeeded&&((e=this.forceManyBody)==null||e.create()),(this.isForceManyBodyUpdateNeeded||this.isPointSizeUpdateNeeded)&&(this.isForceCollisionReady=!1),this.isForceLinkUpdateNeeded&&((i=this.forceLinkIncoming)==null||i.create(Ou.INCOMING),(r=this.forceLinkOutgoing)==null||r.create(Ou.OUTGOING)),this.isForceCenterUpdateNeeded&&((n=this.forceCenter)==null||n.create()),this.isForceAttractorUpdateNeeded&&(this.data.updateAttractors(),(o=this.forceAttractor)==null||o.create()),this.isPointClusterUpdateNeeded&&((s=this.clusters)==null||s.create()),this.isPointPositionsUpdateNeeded=!1,this.isPointSizeUpdateNeeded=!1,this.isForceManyBodyUpdateNeeded=!1,this.isForceLinkUpdateNeeded=!1,this.isForceCenterUpdateNeeded=!1,this.isForceAttractorUpdateNeeded=!1,this.isPointClusterUpdateNeeded=!1,{positionsUpdated:a}):{positionsUpdated:!1}}initPrograms(){var e,i,r,n,o,s,a;this._isDestroyed||!this.points||!this.clusters||(this.points.initPrograms(),(e=this.forceGravity)==null||e.initPrograms(),(i=this.forceManyBody)==null||i.initPrograms(),(r=this.forceCenter)==null||r.initPrograms(),(n=this.forceLinkIncoming)==null||n.initPrograms(),(o=this.forceLinkOutgoing)==null||o.initPrograms(),(s=this.forceMouse)==null||s.initPrograms(),(a=this.forceAttractor)==null||a.initPrograms(),this.clusters.initPrograms())}runSimulationStep(e=!1,i){var r;return i!=null&&i.held||(r=this.forceManyBody)==null||r.cancelOccupancyReadback(),this.config.enableSimulation?this.withExternalDeviceState(()=>this.runStepPasses(e,i)):!1}end(){var e,i;this.store.isSimulationRunning=!1,this.store.simulationProgress=1,(i=(e=this.config).onSimulationEnd)==null||i.call(e)}withExternalDeviceState(e){let i=this._device;if(this.shouldDestroyDevice||!i)return e();let r=i.gl,n=r?Be.get(r):void 0,o=n?.stateStack.length??0;try{return i.withParametersWebGL({blend:!1,depthTest:!1,depthMask:!0,scissorTest:!1,stencilTest:!1,cull:!1,colorMask:[!0,!0,!0,!0],nocatch:!0},e)}finally{if(n)for(;n.stateStack.length>o;)n.pop()}}ensureSimulationModules(){!this._device||!this.points||(this.forceGravity||(this.forceGravity=new Bu(this._device,this.config,this.store,this.data,this.points)),this.forceCenter||(this.forceCenter=new Mu(this._device,this.config,this.store,this.data,this.points)),this.forceManyBody||(this.forceManyBody=new zu(this._device,this.config,this.store,this.data,this.points)),this.forceLinkIncoming||(this.forceLinkIncoming=new Os(this._device,this.config,this.store,this.data,this.points)),this.forceLinkOutgoing||(this.forceLinkOutgoing=new Os(this._device,this.config,this.store,this.data,this.points)),this.forceMouse||(this.forceMouse=new Wu(this._device,this.config,this.store,this.data,this.points)),this.forceCollision||(this.forceCollision=new Nu(this._device,this.config,this.store,this.data,this.points)),this.forceAttractor||(this.forceAttractor=new Fu(this._device,this.config,this.store,this.data,this.points)))}destroySimulationModules(){var e,i,r,n,o,s,a,l,c;(e=this.forceGravity)==null||e.destroy(),this.forceGravity=void 0,(i=this.forceCenter)==null||i.destroy(),this.forceCenter=void 0,(r=this.forceManyBody)==null||r.destroy(),this.forceManyBody=void 0,(n=this.forceLinkIncoming)==null||n.destroy(),this.forceLinkIncoming=void 0,(o=this.forceLinkOutgoing)==null||o.destroy(),this.forceLinkOutgoing=void 0,(s=this.forceMouse)==null||s.destroy(),this.forceMouse=void 0,(a=this.forceCollision)==null||a.destroy(),this.forceCollision=void 0,(l=this.forceAttractor)==null||l.destroy(),this.forceAttractor=void 0,this.isForceCollisionReady=!1,(c=this.points)==null||c.destroySimulationResources()}markForcesDirty(){this.isForceManyBodyUpdateNeeded=!0,this.isForceLinkUpdateNeeded=!0,this.isForceCenterUpdateNeeded=!0,this.isForceAttractorUpdateNeeded=!0}invalidateCollisionResources(){this.isForceCollisionReady=!1}runStepPasses(e,i){var r,n,o,s,a,l,c,u,d,h,f,g,x,b,v,R,P,y,T,C,k,U,z,H,X,B,Z,S,M,I,O,V,G,W,te;let{config:{simulationGravity:ae,simulationCenter:De,simulationCollision:ce},store:{isSimulationRunning:ke}}=this;i!=null&&i.applyMouseRepulsion&&((r=this.points)==null||r.swapFbo(),(n=this.forceMouse)==null||n.run(),(o=this.points)==null||o.updatePosition());let Fe=e||ke&&!(i!=null&&i.blockedByInteraction);if(Fe){ce&&!this.isForceCollisionReady&&((s=this.forceCollision)==null||s.create(),(a=this.forceCollision)==null||a.initPrograms(),this.isForceCollisionReady=!0);let q=ce?(l=this.forceCollision)==null?void 0:l.resolvedSizeTexture:void 0;if(ae&&((c=this.points)==null||c.swapFbo(),(u=this.forceGravity)==null||u.run(),(d=this.points)==null||d.updatePosition()),De&&((h=this.points)==null||h.swapFbo(),(f=this.forceCenter)==null||f.run(),(g=this.points)==null||g.updatePosition()),(x=this.points)==null||x.swapFbo(),(b=this.forceManyBody)==null||b.run(i?.held===!0),(v=this.points)==null||v.updatePosition(),this.store.linksTextureSize&&((R=this.points)==null||R.swapFbo(),(P=this.forceLinkIncoming)==null||P.run(q),(y=this.points)==null||y.updatePosition(),(T=this.points)==null||T.swapFbo(),(C=this.forceLinkOutgoing)==null||C.run(q),(k=this.points)==null||k.updatePosition()),(this.data.pointClusters||this.data.clusterPositions)&&((U=this.points)==null||U.swapFbo(),(z=this.clusters)==null||z.run(),(H=this.points)==null||H.updatePosition()),(X=this.forceAttractor)!=null&&X.isActive&&((B=this.points)==null||B.swapFbo(),this.forceAttractor.run(),(Z=this.points)==null||Z.updatePosition()),ce){let Me=this.config.simulationCollisionIterations,ii=Number.isFinite(Me)?Math.max(1,Math.floor(Me)):1;for(let _n=0;_n<ii;_n++)(S=this.points)==null||S.swapFbo(),(M=this.forceCollision)==null||M.run(),(I=this.points)==null||I.updatePosition(1)}this.store.alpha+=this.store.addAlpha(this.config.simulationDecay),i!=null&&i.applyMouseRepulsion&&(this.store.alpha=Math.max(this.store.alpha,.1)),this.store.simulationProgress=Math.sqrt(Math.min(1,ur/this.store.alpha)),this.points&&(this.points.stepVersion+=1),(W=(G=this.config).onSimulationTick)==null||W.call(G,this.store.alpha,(O=this.store.hoveredPoint)==null?void 0:O.index,(V=this.store.hoveredPoint)==null?void 0:V.position)}return(te=this.points)==null||te.gatherTrackers(),Fe}applyEnableSimulationConfigChange(e){var i,r,n,o;if(e.enableSimulation===this.config.enableSimulation)return;if(this.config.enableSimulation){this.ensureSimulationModules(),this.markForcesDirty(),this.update(1),this.store.simulationProgress=0,this.store.isSimulationRunning=!0,(r=(i=this.config).onSimulationStart)==null||r.call(i);return}let s=this.store.isSimulationRunning||this.store.alpha>0||this.store.simulationProgress>0;this.store.isSimulationRunning=!1,this.store.alpha=0,this.store.simulationProgress=0,s&&((o=(n=this.config).onSimulationEnd)==null||o.call(n)),this.destroySimulationModules()}update(e=this.store.alpha){this.data.update(),this.updateTextureSizes(),this.applyDataUpdates(),this.initPrograms(),this.store.alpha=e}ensureDevice(e){return this.isReady?!1:(this.ready.then(()=>{this._isDestroyed||e()}).catch(i=>{console.error("Device initialization failed",i)}),!0)}async createDevice(e){return await Gl.createDevice({type:"webgl",adapters:[yu],webgl:{antialias:!1},createCanvasContext:{canvas:e,useDevicePixels:this.config.pixelRatio,autoResize:!0,width:void 0,height:void 0}})}composePointPositions(e,i){let r=this.data.pointsNumber??0,n=i&&i.length>=r*2?i:new Float32Array(r*2);for(let o=0;o<r;o+=1){if(this.data.pointPositions&&$e(this.data.pointPositions,o)){n[o*2]=NaN,n[o*2+1]=NaN;continue}n[o*2]=e[o*4+0],n[o*2+1]=e[o*4+1]}return n}},PR=500,Jx=10,Gu=class{constructor(e,i,r){this.config=Ku(),this.isReady=!1,this.requestAnimationFrameId=0,this.readbackWaitTimeoutId=0,this.readbackWaitStartedAt=0,this._shouldSyncScreenSize=!1,this.isRightClickMouse=!1,this._longPressStartX=0,this._longPressStartY=0,this._shouldSuppressNextClick=!1,this._instanceId=Zw(),this._findHoveredItemExecutionCount=0,this._isPointerOnCanvas=!1,this._lastMouseX=0,this._lastMouseY=0,this._lastCheckedMouseX=0,this._lastCheckedMouseY=0,this._shouldForceHoverDetection=!1,this._lastPickingMatrix=[],this._isFirstRenderAfterInit=!0,this.isPointColorUpdateNeeded=!1,this.isPointStrokeColorUpdateNeeded=!1,this.isPointStrokeWidthUpdateNeeded=!1,this.isPointShapeUpdateNeeded=!1,this.isPointImageIndicesUpdateNeeded=!1,this.isLinksUpdateNeeded=!1,this.isLinkColorUpdateNeeded=!1,this.isLinkWidthUpdateNeeded=!1,this.isLinkArrowUpdateNeeded=!1,this.isLinkStyleUpdateNeeded=!1,this.isPointImageSizesUpdateNeeded=!1,this._isDestroyed=!1,i&&Sn(this.config,i),this._isHeadless=!e,this.simulation=new Xu(void 0,r,this.config),this.store=this.simulation.store,this.graph=this.simulation.data,this.zoomInstance=new Iu(this.store,this.config),this.transition=new Au(this.config),this.dragInstance=new Du(this.store,this.config,this.transition);let n=this.simulation.ready.then(async()=>{let o=this.simulation.device;if(!(this._isDestroyed||!o)){if(this.device=o,!this._isHeadless){let s=this.validateDevice(o);r&&s.setProps({useDevicePixels:this.config.pixelRatio}),this.store.div=e;let a=s.canvas;if(a.parentNode!==this.store.div&&(a.parentNode&&a.parentNode.removeChild(a),this.store.div.appendChild(a)),this.addAttribution(),a.style.width="100%",a.style.height="100%",this.canvas=a,this.updateCanvasTouchAction(),await Promise.race([s.initialized,new Promise(l=>{setTimeout(l,500)})]),this._isDestroyed)return;typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>{this._shouldSyncScreenSize=!0,this.requestRender()}),this.resizeObserver.observe(this.canvas))}this._isHeadless||this.initInteractions(),this.points=this.simulation.points,this.points&&(this.points.transition=this.transition),this.points&&(this.points.requestTick=()=>this._isHeadless||!this.config.enableRenderLoop?!1:(this.requestRender(),!0)),this.lines=new Eu(o,this.config,this.store,this.graph,this.points),this.store.backgroundColor=qe(this.config.backgroundColor),this.store.setHoveredPointRingColor(this.config.hoveredPointRingColor),this.store.setFocusedPointRingColor(this.config.focusedPointRingColor),this.config.focusedPointIndex!==void 0&&this.store.setFocusedPoint(this.config.focusedPointIndex),this.store.setGreyoutPointColor(this.config.pointGreyoutColor),this.store.setOutlinedPointRingColor(this.config.outlinedPointRingColor),this.store.setPointDefaultStrokeColor(this.config.pointDefaultStrokeColor),this.store.setHighlightedPointSet(this.config.highlightedPointIndices),this.store.setOutlinedPointSet(this.config.outlinedPointIndices),this.store.setHoveredLinkColor(this.config.hoveredLinkColor),this.store.updateLinkHoveringEnabled(this.config),!this._isHeadless&&this.config.showFPSMonitor&&(this.fpsMonitor=new Bs(this.canvas,this.store.div)),this.isReady=!0,this.setZoomLevel(this.config.initialZoomLevel??1)}}).catch(o=>{throw this.device=void 0,this.isReady=!1,console.error("Device initialization failed:",o),o});this.ready=n.then(()=>{})}get progress(){return this._isDestroyed?0:this.store.simulationProgress}get isSimulationRunning(){return this._isDestroyed?!1:this.store.isSimulationRunning}get maxPointSize(){return this._isDestroyed?0:this.store.maxPointSize}setConfig(e){if(this._isDestroyed||(Ns(e),this.ensureDevice(()=>this.setConfig(e))))return;let i={...this.config};n1(this.config),Sn(this.config,e),this.preserveInitOnlyFields(i),this.graph.invalidateLinkDefaultColor(),this.lines&&(this.lines.isLinkIndexBufferStale=!0),this.updateStateFromConfig(i)}setConfigPartial(e){if(this._isDestroyed||(Ns(e),this.ensureDevice(()=>this.setConfigPartial(e))))return;let i={...this.config};Sn(this.config,e,!0),this.preserveInitOnlyFields(i),"linkDefaultColor"in e&&(this.graph.invalidateLinkDefaultColor(),this.lines&&(this.lines.isLinkIndexBufferStale=!0)),this.updateStateFromConfig(i)}setPointPositions(e,i){var r;if(this._isDestroyed||this.ensureDevice(()=>this.setPointPositions(e,i)))return;this.simulation.setPointPositions(e,i);let n=(r=this.points)==null?void 0:r.currentPositionTexture;n&&!n.destroyed&&this.transition.queue(ne.Positions),this.isLinksUpdateNeeded=!0,this.isPointColorUpdateNeeded=!0,this.isPointStrokeColorUpdateNeeded=!0,this.isPointStrokeWidthUpdateNeeded=!0,this.isPointShapeUpdateNeeded=!0,this.isPointImageIndicesUpdateNeeded=!0,this.isPointImageSizesUpdateNeeded=!0}setPointColors(e){this._isDestroyed||this.ensureDevice(()=>this.setPointColors(e))||(this.graph.inputPointColors=e,this.isPointColorUpdateNeeded=!0,this.transition.queue(ne.PointColors))}getPointColors(){if(this._isDestroyed)return new Float32Array;if(this.graph.pointColors===void 0||this.graph.pointsNumber===void 0)return new Float32Array;let e=new Float32Array(this.graph.pointsNumber*4);for(let i=0;i<this.graph.pointsNumber;i++)for(let r=0;r<4;r++)e[i*4+r]=this.graph.getResolvedPointColorChannel(i,r);return e}setPointSizes(e){this._isDestroyed||this.ensureDevice(()=>this.setPointSizes(e))||(this.simulation.setPointSizes(e),this.isPointImageSizesUpdateNeeded=!0,this.transition.queue(ne.PointSizes))}setPointStrokeColors(e){this._isDestroyed||this.ensureDevice(()=>this.setPointStrokeColors(e))||(this.graph.inputPointStrokeColors=e,this.isPointStrokeColorUpdateNeeded=!0,this.graph.hasPointStroke&&this.transition.queue(ne.PointStrokeColors))}setPointStrokeWidths(e){if(this._isDestroyed||this.ensureDevice(()=>this.setPointStrokeWidths(e)))return;let i=this.graph.hasPointStroke;this.graph.inputPointStrokeWidths=e,this.graph.hasPositiveStrokeWidth=e.some(r=>r>0),this.isPointStrokeWidthUpdateNeeded=!0,(i||this.graph.hasPointStroke)&&this.transition.queue(ne.PointStrokeWidths)}setPointShapes(e){this._isDestroyed||this.ensureDevice(()=>this.setPointShapes(e))||(this.graph.inputPointShapes=e,this.isPointShapeUpdateNeeded=!0)}setImageData(e){var i;if(this._isDestroyed||this.ensureDevice(()=>this.setImageData(e)))return;let r=this.graph.inputImageData;this.graph.inputImageData=e,((i=this.points)==null?void 0:i.createAtlas())===!1&&(this.graph.inputImageData=r),this.requestRender()}setPointImageIndices(e){this._isDestroyed||this.ensureDevice(()=>this.setPointImageIndices(e))||(this.graph.inputPointImageIndices=e,this.isPointImageIndicesUpdateNeeded=!0)}setPointImageSizes(e){this._isDestroyed||this.ensureDevice(()=>this.setPointImageSizes(e))||(this.graph.inputPointImageSizes=e,this.isPointImageSizesUpdateNeeded=!0)}setPointRenderOrder(e){this._isDestroyed||this.ensureDevice(()=>this.setPointRenderOrder(e))||(this.graph.inputPointRenderOrder=e??void 0)}getPointSizes(){if(this._isDestroyed)return new Float32Array;if(this.graph.pointSizes===void 0||this.graph.pointsNumber===void 0)return new Float32Array;let e=new Float32Array(this.graph.pointsNumber);for(let i=0;i<this.graph.pointsNumber;i++)e[i]=this.graph.getResolvedPointSize(i);return e}setLinks(e){this._isDestroyed||this.ensureDevice(()=>this.setLinks(e))||(this.simulation.setLinks(e),this.isLinksUpdateNeeded=!0,this.isLinkColorUpdateNeeded=!0,this.isLinkWidthUpdateNeeded=!0,this.isLinkArrowUpdateNeeded=!0,this.isLinkStyleUpdateNeeded=!0)}setLinkColors(e){this._isDestroyed||this.ensureDevice(()=>this.setLinkColors(e))||(this.graph.inputLinkColors=e,this.isLinkColorUpdateNeeded=!0,this.transition.queue(ne.LinkColors))}getLinkColors(){if(this._isDestroyed)return new Float32Array;let e=this.graph.linkColors;if(!e)return new Float32Array;let i=new Float32Array(e.length);for(let r=0;r<e.length;r++)i[r]=this.graph.getResolvedLinkColorChannel(Math.floor(r/4),r%4);return i}setLinkWidths(e){this._isDestroyed||this.ensureDevice(()=>this.setLinkWidths(e))||(this.graph.inputLinkWidths=e,this.isLinkWidthUpdateNeeded=!0,this.transition.queue(ne.LinkWidths))}getLinkWidths(){if(this._isDestroyed)return new Float32Array;let e=this.graph.linkWidths;return e?Float32Array.from(e,(i,r)=>this.graph.getResolvedLinkWidth(r)):new Float32Array}getLinkWidthByIndex(e){var i;if(!(this._isDestroyed||((i=this.graph.linkWidths)==null?void 0:i[e])===void 0))return this.lines&&this.transition.isActiveFor(ne.LinkWidths)?this.lines.getAnimatedWidth(e,this.transition.progress):this.graph.getResolvedLinkWidth(e)}setLinkArrows(e){this._isDestroyed||this.ensureDevice(()=>this.setLinkArrows(e))||(this.graph.linkArrowsBoolean=e,this.isLinkArrowUpdateNeeded=!0)}setLinkStyles(e){this._isDestroyed||this.ensureDevice(()=>this.setLinkStyles(e))||(this.graph.inputLinkStyles=e,this.isLinkStyleUpdateNeeded=!0)}getLinkStyles(){return this._isDestroyed?new Float32Array:this.graph.linkStyles??new Float32Array}setLinkStrength(e){this._isDestroyed||this.ensureDevice(()=>this.setLinkStrength(e))||this.simulation.setLinkStrength(e)}setPointClusters(e){this._isDestroyed||this.ensureDevice(()=>this.setPointClusters(e))||this.simulation.setPointClusters(e)}setClusterPositions(e){this._isDestroyed||this.ensureDevice(()=>this.setClusterPositions(e))||this.simulation.setClusterPositions(e)}setPointClusterStrength(e){this._isDestroyed||this.ensureDevice(()=>this.setPointClusterStrength(e))||this.simulation.setPointClusterStrength(e)}setPointAttractors(e){this._isDestroyed||this.ensureDevice(()=>this.setPointAttractors(e))||this.simulation.setPointAttractors(e)}setPointAttractorStrength(e){this._isDestroyed||this.ensureDevice(()=>this.setPointAttractorStrength(e))||this.simulation.setPointAttractorStrength(e)}setPinnedPoints(e){this._isDestroyed||this.ensureDevice(()=>this.setPinnedPoints(e))||(this.simulation.setPinnedPoints(e),this.requestRender())}setPinnedPoint(e,i){this._isDestroyed||this.ensureDevice(()=>this.setPinnedPoint(e,i))||(this.simulation.setPinnedPoint(e,i),this.requestRender())}isPointPinned(e){return this._isDestroyed?!1:this.simulation.isPointPinned(e)}setPointPosition(e,i,r){this.setPointPositionsByIndices([e],[i,r])}setPointPositionsByIndices(e,i){this._isDestroyed||this.ensureDevice(()=>this.setPointPositionsByIndices(e,i))||(this.simulation.setPointPositionsByIndices(e,i),this.markPickingBuffersStale(),this.requestRender())}render(e,i){var r,n,o,s;if(this._isDestroyed||this.ensureDevice(()=>this.render(e,i)))return;this.graph.updatePoints(),this.graph.updateLinks();let{fitViewOnInit:a,fitViewDelay:l,fitViewPadding:c,fitViewDuration:u,fitViewByPointsInRect:d,fitViewByPointIndices:h,initialZoomLevel:f}=this.config;if(!this.graph.pointsNumber&&!this.graph.linksNumber){this.graph.update(),(r=this.points)==null||r.resetSampledReadback(),this.stopFrames(),this._isHeadless||(ge(this.canvas).style("cursor",null),this.device&&(this.device.beginRenderPass({clearColor:this.store.backgroundColor,clearDepth:1,clearStencil:0}).end(),this.device.submit()));return}!this._isHeadless&&this._isFirstRenderAfterInit&&a&&f===void 0&&(this._fitViewOnInitTimeoutID=window.setTimeout(()=>{h?this.fitViewByPointIndices(h,u,c):d?this.setZoomTransformByPointPositions(new Float32Array(this.flatten(d)),u,void 0,c):this.fitView(u,c)},l)),this.transition.setDurationOverride(this._isHeadless?0:i),this.update(e,{animate:!0}),this.transition.isPendingFor(ne.Positions)&&this.store.isSimulationRunning&&this.transition.duration>0&&!this._isFirstRenderAfterInit&&(this.store.isSimulationRunning=!1,(o=(n=this.config).onSimulationPause)==null||o.call(n));let g=(s=this.points)==null?void 0:s.currentPositionTexture;this.transition.isPending&&(!g||g.destroyed)&&this.transition.abort(),this.transition.start(),this._shouldForceHoverDetection=!0,this.requestRender(),this._isFirstRenderAfterInit=!1}zoomToPointByIndex(e,i=700,r=3,n=!0,o=!0){if(this._isDestroyed||this.ensureDevice(()=>this.zoomToPointByIndex(e,i,r,n,o))||!this.device||!this.points||!this.canvasD3Selection)return;let s=this.graph.pointPositions;if(!s||$e(s,e))return;let{store:{screenSize:a}}=this,l=Xe(this.device,this.points.currentPositionFbo);if(e===void 0)return;let c=l[e*4+0],u=l[e*4+1];if(c===void 0||u===void 0)return;let d=this.zoomInstance.getDistanceToPoint([c,u]),h=n?r:Math.max(this.getZoomLevel(),r);if(d<Math.min(a[0],a[1]))this.setZoomTransformByPointPositions(new Float32Array([c,u]),i,h,void 0,o);else{this.zoomInstance.shouldEnableSimulationDuringZoomOverride=o;let f=this.zoomInstance.getTransform([c,u],h),g=this.zoomInstance.getMiddlePointTransform([c,u]);this.canvasD3Selection.transition().ease(Fa).duration(i/2).call(this.zoomInstance.behavior.transform,g).transition().ease(Ma).duration(i/2).call(this.zoomInstance.behavior.transform,f)}}zoom(e,i=0,r=!0){this._isDestroyed||this.setZoomLevel(e,i,r)}setZoomLevel(e,i=0,r=!0){this._isDestroyed||this.ensureDevice(()=>this.setZoomLevel(e,i,r))||this.canvasD3Selection&&(this.zoomInstance.shouldEnableSimulationDuringZoomOverride=r,i===0?this.canvasD3Selection.call(this.zoomInstance.behavior.scaleTo,e):this.canvasD3Selection.transition().duration(i).call(this.zoomInstance.behavior.scaleTo,e))}getZoomLevel(){return this._isDestroyed?0:this.zoomInstance.eventTransform.k}getPointPositions(){return this._isDestroyed?[]:this.simulation.getPointPositions()}getPointPositionsArray(e){return this._isDestroyed?new Float32Array(0):this.simulation.getPointPositionsArray(e)}async getPointPositionsAsync(e){return this._isDestroyed?new Float32Array(0):await this.simulation.getPointPositionsAsync(e)}getPointPositionTexture(){if(!this._isDestroyed)return this.simulation.getPointPositionTexture()}getClusterPositions(e){return this._isDestroyed?[]:this.simulation.getClusterPositions(e)}fitView(e=250,i=.1,r=!0){this._isDestroyed||this.ensureDevice(()=>this.fitView(e,i,r))||this.setZoomTransformByPointPositions(this.getFitViewPositions(),e,void 0,i,r)}fitViewByPointIndices(e,i=250,r=.1,n=!0){if(this._isDestroyed||this.ensureDevice(()=>this.fitViewByPointIndices(e,i,r,n)))return;let o=this.getFitViewPositions(),s=new Float32Array(e.length*2);for(let[a,l]of e.entries())s[a*2]=o[l*2],s[a*2+1]=o[l*2+1];this.setZoomTransformByPointPositions(s,i,void 0,r,n)}fitViewByPointPositions(e,i=250,r=.1,n=!0){this._isDestroyed||this.ensureDevice(()=>this.fitViewByPointPositions(e,i,r,n))||this.setZoomTransformByPointPositions(new Float32Array(e),i,void 0,r,n)}setZoomTransformByPointPositions(e,i=250,r,n=.1,o=!0){var s;if(this._isDestroyed||this.ensureDevice(()=>this.setZoomTransformByPointPositions(e,i,r,n,o)))return;this.zoomInstance.shouldEnableSimulationDuringZoomOverride=o,this.syncScreenSize();let a=this.zoomInstance.getTransform(e,r,n);(s=this.canvasD3Selection)==null||s.transition().ease(Na).duration(i).call(this.zoomInstance.behavior.transform,a)}findPointsInRect(e){if(this._isDestroyed)return[];if(!this.isReady||!this.device||!this.points)return[];let i=this.store.screenSize[1];return this.store.searchArea=[[e[0][0],i-e[1][1]],[e[1][0],i-e[0][1]]],this.points.findPointsInRect()?Ox(Xe(this.device,this.points.searchFbo),this.graph.pointsNumber):[]}findPointsInPolygon(e){if(this._isDestroyed)return[];if(!this.isReady||!this.device||!this.points)return[];if(e.length<3)return console.warn("Polygon path requires at least 3 points to form a polygon."),[];let i=this.store.screenSize[1],r=e.map(([n,o])=>[n,i-o]);return this.points.updatePolygonPath(r),this.points.findPointsInPolygon()?Ox(Xe(this.device,this.points.searchFbo),this.graph.pointsNumber):[]}getNeighboringPointIndices(e){return this._isDestroyed?[]:this.graph.getNeighboringPointIndices(e)}getConnectedLinkIndices(e){return this._isDestroyed?[]:this.graph.getConnectedLinkIndices(e)}getConnectedPointIndices(e){return this._isDestroyed?[]:this.graph.getConnectedPointIndices(e)}spaceToScreenPosition(e){return this._isDestroyed?[0,0]:this.zoomInstance.convertSpaceToScreenPosition(e)}screenToSpacePosition(e){return this._isDestroyed?[0,0]:this.zoomInstance.convertScreenToSpacePosition(e)}spaceToScreenRadius(e){return this._isDestroyed?0:this.zoomInstance.convertSpaceToScreenRadius(e)}getPointRadiusByIndex(e){if(this._isDestroyed||this.graph.pointSizes===void 0&&this.graph.pointImageSizes===void 0||!this.graph.isPointIndex(e))return;let i=this.points&&this.transition.isActiveFor(ne.PointSizes)?this.points.getAnimatedSize(e,this.transition.progress):void 0;return this.graph.getResolvedPointFootprint(e,i)}trackPointPositionsByIndices(e){if(this._isDestroyed)return;let i=e??[];this.tracker?this.tracker.setIndices(i):this.tracker=this.simulation.trackPoints(i)}getTrackedPointPositionsMap(e){return this._isDestroyed||!this.tracker?new Map:this.tracker.positions(e)}getTrackedPointPositionsArray(){return this._isDestroyed||!this.tracker?[]:this.tracker.positionsArray()}getSampledPointPositionsMap(e){let i=this.points;return this._isDestroyed||!i?new Map:this.simulation.withExternalDeviceState(()=>i.getSampledPointPositionsMap(e?.nonBlocking))}getSampledPoints(e){let i=this.points;return this._isDestroyed||!i?{indices:[],positions:[]}:this.simulation.withExternalDeviceState(()=>i.getSampledPoints(e?.nonBlocking))}getSampledLinkPositionsMap(){return this._isDestroyed||!this.lines?new Map:this.lines.getSampledLinkPositionsMap()}getSampledLinks(){return this._isDestroyed||!this.lines?{indices:[],positions:[],angles:[]}:this.lines.getSampledLinks()}getScaleX(){if(!(this._isDestroyed||!this.points))return this.points.scaleX}getScaleY(){if(!(this._isDestroyed||!this.points))return this.points.scaleY}start(e=1){this._isDestroyed||this.ensureDevice(()=>this.start(e))||this.config.enableSimulation&&this.graph.pointsNumber&&(this.transition.isActiveFor(ne.Positions)&&this.transition.end(!0),this.simulation.start(e),this.requestRender())}stop(){this._isDestroyed||this.simulation.stop()}pause(){this._isDestroyed||this.ensureDevice(()=>this.pause())||this.simulation.pause()}unpause(){this._isDestroyed||this.ensureDevice(()=>this.unpause())||this.config.enableSimulation&&(this.store.isSimulationRunning||(this.transition.isActiveFor(ne.Positions)&&this.transition.end(!0),this.simulation.unpause(),this.requestRender()))}step(){this._isDestroyed||this.ensureDevice(()=>this.step())||this.config.enableSimulation&&this.store.pointsTextureSize&&(this.runSimulationStep(!0),(this._isHeadless||!this.config.enableRenderLoop)&&this.store.alpha<ur&&this.store.isSimulationRunning&&this.end(),this.requestRender())}setViewTransform(e,i){var r;if(!this._isDestroyed&&!this.ensureDevice(()=>this.setViewTransform(e,i))){if(i){let[n,o]=i,[s,a]=this.store.screenSize;this.store.updateScreenSize(n,o),(n!==s||o!==a)&&((r=this.points)==null||r.updateSampledPointsGrid())}this.zoomInstance.applyEventTransform(Ht.translate(e.x,e.y).scale(e.k)),this.markPickingBuffersStale(),this.requestRender()}}drawToRenderPass(e,i){var r,n,o,s;if(this._isDestroyed||!this.device||!this.store.pointsTextureSize)return;let a=(i?.links??!0)&&this.config.renderLinks!==!1&&!!this.store.linksTextureSize&&!!this.graph.linksNumber&&this.graph.linksNumber>0;if(i!=null&&i.picking){let{alpha:l,linkIndexOffset:c=0}=i.picking;a&&((r=this.lines)==null||r.drawPicking(e,l,c)),(i.points??!0)&&((n=this.points)==null||n.drawPicking(e,l));return}a&&((o=this.lines)==null||o.draw(e)),(i?.points??!0)&&((s=this.points)==null||s.draw(e))}setHostHoveredPoint(e){this._isDestroyed||(this.store.hostHoveredPointIndex=e,this.requestRender())}setHostHoveredLink(e){this._isDestroyed||(this.store.hostHoveredLinkIndex=e,this.requestRender())}renderOneFrame(){this._isDestroyed||this.ensureDevice(()=>this.renderOneFrame())||this._isHeadless||!this.store.pointsTextureSize||!this.graph.pointsNumber&&!this.graph.linksNumber||(this.store.alpha<ur&&this.store.isSimulationRunning&&this.end(),this.renderFrame())}destroy(){var e,i,r,n,o;this._isDestroyed||(this._isDestroyed=!0,this.isReady=!1,this.transition.abort(),window.clearTimeout(this._fitViewOnInitTimeoutID),this.cancelLongPress(),this.stopFrames(),(e=this.resizeObserver)==null||e.disconnect(),this.resizeObserver=void 0,this.canvasD3Selection&&this.canvasD3Selection.on(".cosmos",null).on(".drag",null).on(".zoom",null),ge(document).on(`.cosmos-${this._instanceId}`,null),(i=this.zoomInstance)!=null&&i.behavior&&this.zoomInstance.behavior.on("start.detect",null).on("zoom.detect",null).on("end.detect",null),(r=this.dragInstance)!=null&&r.behavior&&this.dragInstance.behavior.on("start.detect",null).on("drag.detect",null).on("end.detect",null),(n=this.fpsMonitor)==null||n.destroy(),(o=this.lines)==null||o.destroy(),this.simulation.destroy(),this.simulation.ownsDevice&&this.canvas&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.attributionDivElement&&this.attributionDivElement.parentNode&&this.attributionDivElement.parentNode.removeChild(this.attributionDivElement),this.canvasD3Selection=void 0,this.attributionDivElement=void 0)}create(){if(this._isDestroyed||this.ensureDevice(()=>this.create())||!this.points||!this.lines)return;let{positionsUpdated:e}=this.simulation.applyDataUpdates();e&&(this.lines.isLinkIndexBufferStale=!0),this.isPointColorUpdateNeeded&&this.points.updateColor(),this.isPointStrokeColorUpdateNeeded&&this.points.updateStrokeColor(),this.isPointStrokeWidthUpdateNeeded&&this.points.updateStrokeWidth(),this.isPointShapeUpdateNeeded&&this.points.updateShape(),this.isPointImageIndicesUpdateNeeded&&this.points.updateImageIndices(),this.isPointImageSizesUpdateNeeded&&this.points.updateImageSizes(),this.points.updateRenderOrder(),this.isLinksUpdateNeeded&&this.lines.updatePointsBuffer(),this.isLinkColorUpdateNeeded&&this.lines.updateColor(),this.isLinkWidthUpdateNeeded&&this.lines.updateWidth(),this.isLinkArrowUpdateNeeded&&this.lines.updateArrow(),this.isLinkStyleUpdateNeeded&&this.lines.updateStyle(),this.isPointColorUpdateNeeded=!1,this.isPointStrokeColorUpdateNeeded=!1,this.isPointStrokeWidthUpdateNeeded=!1,this.isPointShapeUpdateNeeded=!1,this.isPointImageIndicesUpdateNeeded=!1,this.isPointImageSizesUpdateNeeded=!1,this.isLinksUpdateNeeded=!1,this.isLinkColorUpdateNeeded=!1,this.isLinkWidthUpdateNeeded=!1,this.isLinkArrowUpdateNeeded=!1,this.isLinkStyleUpdateNeeded=!1,this.requestRender()}flatten(e){return e.flat()}pair(e){let i=Math.floor(e.length/2),r=new Array(i);for(let n=0;n<i;n++)r[n]=[e[n*2],e[n*2+1]];return r}preserveInitOnlyFields(e){this.config.initialZoomLevel=e.initialZoomLevel,this.config.randomSeed=e.randomSeed,this.config.attribution=e.attribution}getFitViewPositions(){return this.transition.isActive&&this.transition.isActiveFor(ne.Positions)&&this.graph.pointPositions&&this.graph.pointPositions?new Float32Array(this.graph.pointPositions):new Float32Array(this.getPointPositions())}updateStateFromConfig(e){var i,r,n,o,s,a,l,c,u,d,h,f,g,x,b;this.applyEnableSimulationConfigChange(e),e.simulationRepulsionSamples!==this.config.simulationRepulsionSamples&&this.simulation.restartOccupancyMeasurement(),e.pointDefaultColor!==this.config.pointDefaultColor&&(this.graph.updatePointColor(),(i=this.points)==null||i.updateColor()),e.pointDefaultSize!==this.config.pointDefaultSize&&(this.graph.updatePointSize(),(r=this.points)==null||r.updateSize(),this.graph.updatePointImageSizes(),(n=this.points)==null||n.updateImageSizes()),e.pointDefaultShape!==this.config.pointDefaultShape&&(this.graph.updatePointShape(),(o=this.points)==null||o.updateShape()),e.linkDefaultColor!==this.config.linkDefaultColor&&(this.graph.invalidateLinkDefaultColor(),this.lines&&(this.lines.isLinkIndexBufferStale=!0)),e.linkDefaultWidth!==this.config.linkDefaultWidth&&this.lines&&(this.lines.isLinkIndexBufferStale=!0),e.linkDefaultArrows!==this.config.linkDefaultArrows&&(this.graph.updateArrows(),(s=this.lines)==null||s.updateArrow()),e.linkDefaultStyle!==this.config.linkDefaultStyle&&(this.graph.updateLinkStyles(),(a=this.lines)==null||a.updateStyle()),e.linkColorInterpolateFromEndpoints!==this.config.linkColorInterpolateFromEndpoints&&((l=this.points)==null||l.updateColor()),e.linkBlending!==this.config.linkBlending&&((c=this.lines)==null||c.updateLinkBlending()),(e.curvedLinkSegments!==this.config.curvedLinkSegments||e.curvedLinks!==this.config.curvedLinks)&&((u=this.lines)==null||u.updateCurveLineGeometry()),e.backgroundColor!==this.config.backgroundColor&&(this.store.backgroundColor=qe(this.config.backgroundColor)),e.hoveredPointRingColor!==this.config.hoveredPointRingColor&&this.store.setHoveredPointRingColor(this.config.hoveredPointRingColor),e.focusedPointRingColor!==this.config.focusedPointRingColor&&this.store.setFocusedPointRingColor(this.config.focusedPointRingColor),e.pointGreyoutColor!==this.config.pointGreyoutColor&&this.store.setGreyoutPointColor(this.config.pointGreyoutColor),e.hoveredLinkColor!==this.config.hoveredLinkColor&&this.store.setHoveredLinkColor(this.config.hoveredLinkColor),e.focusedPointIndex!==this.config.focusedPointIndex&&this.store.setFocusedPoint(this.config.focusedPointIndex),e.outlinedPointRingColor!==this.config.outlinedPointRingColor&&this.store.setOutlinedPointRingColor(this.config.outlinedPointRingColor),e.pointDefaultStrokeColor!==this.config.pointDefaultStrokeColor&&this.store.setPointDefaultStrokeColor(this.config.pointDefaultStrokeColor),e.highlightedPointIndices!==this.config.highlightedPointIndices&&this.store.setHighlightedPointSet(this.config.highlightedPointIndices),e.outlinedPointIndices!==this.config.outlinedPointIndices&&this.store.setOutlinedPointSet(this.config.outlinedPointIndices),(e.highlightedPointIndices!==this.config.highlightedPointIndices||e.outlinedPointIndices!==this.config.outlinedPointIndices)&&((d=this.points)==null||d.updatePointStatus()),e.highlightedLinkIndices!==this.config.highlightedLinkIndices&&((h=this.lines)==null||h.updateLinkStatus()),(e.simulationCollisionRadius!==this.config.simulationCollisionRadius||e.simulationCollisionPadding!==this.config.simulationCollisionPadding||(this.config.simulationCollisionRadius===void 0||this.config.simulationCollisionRadius===0)&&e.pointDefaultSize!==this.config.pointDefaultSize)&&this.simulation.invalidateCollisionResources(),e.pixelRatio!==this.config.pixelRatio&&(f=this.device)!=null&&f.canvasContext&&(this.device.canvasContext.setProps({useDevicePixels:this.config.pixelRatio}),this.store.maxPointSize=t0(this.device,this.config.pixelRatio)),e.spaceSize!==this.config.spaceSize&&(this.store.adjustSpaceSize(this.config.spaceSize),this.syncScreenSize(!0),this.update(this.store.isSimulationRunning?this.store.alpha:0)),e.showFPSMonitor!==this.config.showFPSMonitor&&!this._isHeadless&&(this.config.showFPSMonitor?this.fpsMonitor=new Bs(this.canvas,this.store.div):((g=this.fpsMonitor)==null||g.destroy(),this.fpsMonitor=void 0)),e.enableRenderLoop!==this.config.enableRenderLoop&&!this.config.enableRenderLoop&&this.stopFrames(),(e.enableZoom!==this.config.enableZoom||e.enableDrag!==this.config.enableDrag)&&this.updateZoomDragBehaviors(),e.pointSamplingDistance!==this.config.pointSamplingDistance&&((x=this.points)==null||x.updateSampledPointsGrid()),e.linkSamplingDistance!==this.config.linkSamplingDistance&&((b=this.lines)==null||b.updateSampledLinksGrid()),(e.onLinkClick!==this.config.onLinkClick||e.onLinkContextMenu!==this.config.onLinkContextMenu||e.onLinkMouseOver!==this.config.onLinkMouseOver||e.onLinkMouseOut!==this.config.onLinkMouseOut)&&this.store.updateLinkHoveringEnabled(this.config),this.markPickingBuffersStale(),this.requestRender()}applyEnableSimulationConfigChange(e){var i,r,n,o;if(e.enableSimulation===this.config.enableSimulation)return;if(this.config.enableSimulation){this.transition.end(!0),this.simulation.ensureSimulationModules(),this.simulation.markForcesDirty(),this.update(1),this.store.simulationProgress=0,this.store.isSimulationRunning=!0,this._shouldForceHoverDetection=!0,(r=(i=this.config).onSimulationStart)==null||r.call(i);return}let s=this.store.isSimulationRunning||this.store.alpha>0||this.store.simulationProgress>0;this.store.isSimulationRunning=!1,this.store.alpha=0,this.store.simulationProgress=0,this._shouldForceHoverDetection=!0,s&&((o=(n=this.config).onSimulationEnd)==null||o.call(n)),this.simulation.destroySimulationModules()}ensureDevice(e){return this.isReady?!1:(this.ready.then(()=>{this._isDestroyed||e()}).catch(i=>{console.error("Device initialization failed",i)}),!0)}initInteractions(){let e=this.canvas.clientWidth,i=this.canvas.clientHeight;this.store.updateScreenSize(e,i),this.canvasD3Selection=ge(this.canvas).call(this.dragInstance.behavior).call(this.zoomInstance.behavior).on("pointerenter.cosmos",r=>{r.isPrimary&&(this._isPointerOnCanvas=!0,this._lastMouseX=r.clientX,this._lastMouseY=r.clientY,this.requestRender())}).on("pointermove.cosmos",r=>{var n,o,s,a;if(r.isPrimary){if(this._isPointerOnCanvas=!0,this._lastMouseX=r.clientX,this._lastMouseY=r.clientY,this.currentEvent=r,this.updateMousePosition(r),this.isRightClickMouse=(r.buttons&2)!==0,this._longPressTimerId!==void 0){let l=Math.abs(r.clientX-this._longPressStartX),c=Math.abs(r.clientY-this._longPressStartY);(l>Jx||c>Jx)&&this.cancelLongPress()}(a=(s=this.config).onMouseMove)==null||a.call(s,(n=this.store.hoveredPoint)==null?void 0:n.index,(o=this.store.hoveredPoint)==null?void 0:o.position,this.currentEvent),this.requestRender()}}).on("pointerleave.cosmos pointercancel.cosmos",r=>{r.isPrimary&&(this.cancelLongPress(),this._isPointerOnCanvas=!1,r.pointerType==="mouse"&&(this.currentEvent=r,this.store.hoveredPoint!==void 0&&this.config.onPointMouseOut&&this.config.onPointMouseOut(r),this.store.hoveredLinkIndex!==void 0&&this.config.onLinkMouseOut&&this.config.onLinkMouseOut(r),this.isRightClickMouse=!1,this.store.hoveredPoint=void 0,this.store.hoveredLinkIndex=void 0,this.lines&&(this.lines.isLinkIndexBufferStale=!0),this.updateCanvasCursor(),this.requestRender()))}).on("pointerdown.cosmos",r=>{r.isPrimary&&(this.currentEvent=r,this._shouldSuppressNextClick=!1,this._lastMouseX=r.clientX,this._lastMouseY=r.clientY,this.updateMousePosition(r),this.findHoveredItem(!0),this.requestRender(),r.pointerType!=="mouse"&&(this._longPressStartX=r.clientX,this._longPressStartY=r.clientY,this.cancelLongPress(),this._longPressTimerId=window.setTimeout(()=>{this._longPressTimerId=void 0,!this._isDestroyed&&(this.findHoveredItem(!0),this.requestRender(),this._shouldSuppressNextClick=!0,this.fireContextMenu(r))},PR)))}).on("pointerup.cosmos",r=>{r.isPrimary&&(this.cancelLongPress(),this.isRightClickMouse=(r.buttons&2)!==0)}).on("click.cosmos",this.onClick.bind(this)).on("contextmenu.cosmos",this.onContextMenu.bind(this)),ge(document).on(`keydown.cosmos-${this._instanceId}`,r=>{r.code==="Space"&&(this.store.isSpaceKeyPressed=!0)}).on(`keyup.cosmos-${this._instanceId}`,r=>{r.code==="Space"&&(this.store.isSpaceKeyPressed=!1)}),this.zoomInstance.behavior.on("start.detect",r=>{this.currentEvent=r,this.requestRender()}).on("zoom.detect",r=>{r.sourceEvent&&this.updateMousePosition(r.sourceEvent),this.currentEvent=r,this.requestRender()}).on("end.detect",r=>{this.currentEvent=r,this._shouldForceHoverDetection=!0,this.requestRender()}),this.dragInstance.behavior.on("start.detect",r=>{this.currentEvent=r,this.updateCanvasCursor(),this.requestRender()}).on("drag.detect",r=>{this.dragInstance.isActive&&this.updateMousePosition(r),this.currentEvent=r,this.requestRender()}).on("end.detect",r=>{this.currentEvent=r,this.updateCanvasCursor(),this.requestRender()}),(!this.config.enableZoom||!this.config.enableDrag)&&this.updateZoomDragBehaviors()}validateDevice(e){let i=e.canvasContext;if(i===null||i.type==="offscreen-canvas")throw new Error("Device must have an HTMLCanvasElement canvas context. OffscreenCanvas and compute-only devices are not supported.");return i}update(e=this.store.alpha,{animate:i=!1}={}){!i&&this.transition.isPending&&(this.transition.end(!0),this.transition.dequeueAll()),this.graph.update(),this.simulation.updateTextureSizes(),this.create(),this.initPrograms(),this.store.alpha=e}runSimulationStep(e=!1,i=!1){if(!this.config.enableSimulation)return;let r=this.isRightClickMouse&&this.config.enableRightClickRepulsion,n=this.zoomInstance.shouldEnableSimulationDuringZoomOverride??this.config.enableSimulationDuringZoom,o=this.zoomInstance.isRunning&&!n;(this.simulation.runSimulationStep(e,{applyMouseRepulsion:r,blockedByInteraction:o,held:i})||r)&&this.markPickingBuffersStale()}initPrograms(){this._isDestroyed||!this.points||!this.lines||(this.simulation.initPrograms(),this.lines.initPrograms())}frame(){this._isDestroyed||this._isHeadless||!this.config.enableRenderLoop||this.requestAnimationFrameId||this.readbackWaitTimeoutId||!this.store.pointsTextureSize||!this.graph.pointsNumber&&!this.graph.linksNumber||(this.requestAnimationFrameId=window.requestAnimationFrame(e=>{this.requestAnimationFrameId=0,this.runFrame(e)}))}runFrame(e){var i,r;if(this._isDestroyed)return;let n=this.simulation.hasPendingOccupancyReadback;if(this.simulation.isReadbackPending||(i=this.lines)!=null&&i.isPickReadbackPending){if(this.readbackWaitStartedAt||(this.readbackWaitStartedAt=e),e-this.readbackWaitStartedAt<Yw){this.readbackWaitTimeoutId=window.setTimeout(()=>{this.readbackWaitTimeoutId=0,this.runFrame(performance.now())},Gw);return}this.simulation.cancelPendingReadbacks(),(r=this.lines)==null||r.discardPendingPick()}let o=this.readbackWaitStartedAt&&n?e-this.readbackWaitStartedAt:0;this.readbackWaitStartedAt=0;let{store:{alpha:s,isSimulationRunning:a}}=this;s<ur&&a&&this.end(),this.renderFrame(e,this.simulation.ownsDevice?o:void 0),!this._isDestroyed&&this.shouldKeepRendering()&&this.frame()}requestRender(){this._isDestroyed||this.frame()}shouldKeepRendering(){var e,i,r,n;return!this.resizeObserver||this.fpsMonitor||this.store.isSimulationRunning||this.transition.isActive||this.dragInstance.isActive||this.zoomInstance.isRunning||this.isRightClickMouse&&this.config.enableRightClickRepulsion||(e=this.points)!=null&&e.hasPendingPickReadback||(i=this.lines)!=null&&i.hasPendingPickReadback||(r=this.points)!=null&&r.hasPendingTrackedReadback||(n=this.points)!=null&&n.hasPendingSampledReadback||this.simulation.hasPendingCentroidReadback||this.simulation.hasPendingOccupancyReadback?!0:this.hasPendingHoverWork()}hasPendingHoverWork(){if(!this._isPointerOnCanvas)return!1;if(this._shouldForceHoverDetection)return!0;let e=Math.abs(this._lastMouseX-this._lastCheckedMouseX),i=Math.abs(this._lastMouseY-this._lastCheckedMouseY);return e>Rs||i>Rs}renderFrame(e,i){this._isDestroyed||this.store.pointsTextureSize&&this.simulation.withExternalDeviceState(()=>this.drawFrame(e,i))}drawFrame(e,i){var r,n,o,s,a,l,c,u,d;let h=e??performance.now();(r=this.fpsMonitor)==null||r.begin(),(this._shouldSyncScreenSize||!this.resizeObserver)&&(this._shouldSyncScreenSize=!1,this.syncScreenSize()),this.simulation.collectReadbacks(i);let f=this.transition.isActiveFor(ne.Positions),g=this.transition.isActiveFor(ne.PointColors),x=this.transition.isActiveFor(ne.PointSizes),b=this.transition.isActiveFor(ne.PointStrokeColors),v=this.transition.isActiveFor(ne.PointStrokeWidths),R=this.transition.isActiveFor(ne.LinkColors),P=this.transition.isActiveFor(ne.LinkWidths);if(this.transition.isActive&&(this.transition.step(),f&&((n=this.points)==null||n.interpolatePosition(this.transition.progress),(o=this.points)==null||o.gatherTrackers(),this.markPickingBuffersStale())),(s=this.points)==null||s.setTransitionProgress(this.transition.progress,g,x,f,b,v),(a=this.lines)==null||a.setTransitionProgress(this.transition.progress,R,P,f),this.dragInstance.isActive||(this.resolvePendingPick(),this.findHoveredItem()),this.runSimulationStep(!1,i!==void 0),this.device){let y=this.store.backgroundColor??[0,0,0,1],T=this.device.beginRenderPass({clearColor:y,clearDepth:1,clearStencil:0});this.drawToRenderPass(T),this.dragInstance.isActive&&((l=this.points)==null||l.swapFbo(),(c=this.points)==null||c.drag(),(u=this.points)==null||u.gatherTrackers(),this.markPickingBuffersStale()),T.end(),this.device.submit()}this.simulation.issueReadbacks(),(d=this.fpsMonitor)==null||d.end(h),this.currentEvent=void 0}stopFrames(){this.requestAnimationFrameId&&(window.cancelAnimationFrame(this.requestAnimationFrameId),this.requestAnimationFrameId=0),this.readbackWaitTimeoutId&&(window.clearTimeout(this.readbackWaitTimeoutId),this.readbackWaitTimeoutId=0),this.readbackWaitStartedAt=0}end(){this.simulation.end(),this._shouldForceHoverDetection=!0}onClick(e){var i,r,n,o,s,a,l,c,u,d;if(this._shouldSuppressNextClick){this._shouldSuppressNextClick=!1;return}(o=(n=this.config).onClick)==null||o.call(n,(i=this.store.hoveredPoint)==null?void 0:i.index,(r=this.store.hoveredPoint)==null?void 0:r.position,e),this.store.hoveredPoint?(a=(s=this.config).onPointClick)==null||a.call(s,this.store.hoveredPoint.index,this.store.hoveredPoint.position,e):this.store.hoveredLinkIndex!==void 0?(c=(l=this.config).onLinkClick)==null||c.call(l,this.store.hoveredLinkIndex,e):(d=(u=this.config).onBackgroundClick)==null||d.call(u,e)}updateMousePosition(e){if(!e)return;let i=e.offsetX??e.x,r=e.offsetY??e.y;i===void 0||r===void 0||(this.store.mousePosition=this.zoomInstance.convertScreenToSpacePosition([i,r]),this.store.screenMousePosition=[i,this.store.screenSize[1]-r])}onContextMenu(e){e.preventDefault(),this.cancelLongPress(),this._shouldSuppressNextClick=!0,this.fireContextMenu(e)}cancelLongPress(){this._longPressTimerId!==void 0&&(window.clearTimeout(this._longPressTimerId),this._longPressTimerId=void 0)}fireContextMenu(e){var i,r,n,o,s,a,l,c,u,d;(o=(n=this.config).onContextMenu)==null||o.call(n,(i=this.store.hoveredPoint)==null?void 0:i.index,(r=this.store.hoveredPoint)==null?void 0:r.position,e),this.store.hoveredPoint?(a=(s=this.config).onPointContextMenu)==null||a.call(s,this.store.hoveredPoint.index,this.store.hoveredPoint.position,e):this.store.hoveredLinkIndex!==void 0?(c=(l=this.config).onLinkContextMenu)==null||c.call(l,this.store.hoveredLinkIndex,e):(d=(u=this.config).onBackgroundContextMenu)==null||d.call(u,e)}syncScreenSize(e=!1){var i,r,n,o;if(this._isHeadless||!this.canvas||this._isDestroyed)return;let s=this.canvas.clientWidth,a=this.canvas.clientHeight,[l,c]=this.store.screenSize;if(e||l!==s||c!==a){let{k:u}=this.zoomInstance.eventTransform,d=this.zoomInstance.convertScreenToSpacePosition([l/2,c/2]);this.store.updateScreenSize(s,a),(i=this.canvasD3Selection)==null||i.call(this.zoomInstance.behavior.transform,this.zoomInstance.getTransform(d,u)),(r=this.points)==null||r.updateSampledPointsGrid(),(n=this.lines)==null||n.updateSampledLinksGrid(),this.store.isLinkHoveringEnabled&&((o=this.lines)==null||o.updateLinkIndexFbo()),this.markPickingBuffersStale()}}updateZoomDragBehaviors(){var e,i,r,n;this._isHeadless||(this.config.enableDrag?(e=this.canvasD3Selection)==null||e.call(this.dragInstance.behavior):(i=this.canvasD3Selection)==null||i.call(this.dragInstance.behavior).on(".drag",null),this.config.enableZoom?(r=this.canvasD3Selection)==null||r.call(this.zoomInstance.behavior):(n=this.canvasD3Selection)==null||n.call(this.zoomInstance.behavior).on("wheel.zoom",null),this.updateCanvasTouchAction())}updateCanvasTouchAction(){this.canvas.style.touchAction=this.config.enableDrag||this.config.enableZoom?"none":""}findHoveredItem(e=!1){var i,r,n,o;if(this._isDestroyed||!e&&!this._isPointerOnCanvas||this.transition.isActiveFor(ne.PointSizes))return;if(!e&&this._findHoveredItemExecutionCount<jw){this._findHoveredItemExecutionCount+=1;return}let s=Math.abs(this._lastMouseX-this._lastCheckedMouseX),a=Math.abs(this._lastMouseY-this._lastCheckedMouseY),l=s>Rs||a>Rs;if(!e&&!l&&!this._shouldForceHoverDetection)return;this.updatePickingBufferStaleness();let c=!!this.graph.linksNumber&&this.store.isLinkHoveringEnabled;if(e){(i=this.points)==null||i.discardPendingPick(),(r=this.lines)==null||r.discardPendingPick();let u=((n=this.points)==null?void 0:n.pickPointSync())??null,d;!u&&c&&(d=((o=this.lines)==null?void 0:o.pickLinkSync())??null),this.processHoverResult(u,d)}else{let u=this.points?this.points.requestPickPoint():!0,d=c&&this.lines?this.lines.requestPickLink():!0;if(!u||!d)return}this._findHoveredItemExecutionCount=0,this._lastCheckedMouseX=this._lastMouseX,this._lastCheckedMouseY=this._lastMouseY,this._shouldForceHoverDetection=!1}updatePickingBufferStaleness(){let e=this.store.transformationMatrix4x4;f1(this._lastPickingMatrix,e)||(this._lastPickingMatrix=Array.from(e),this.markPickingBuffersStale())}markPickingBuffersStale(){this.points&&(this.points.isPickingBufferStale=!0),this.lines&&(this.lines.isLinkIndexBufferStale=!0)}resolvePendingPick(){var e,i;let r=(e=this.points)==null?void 0:e.takePickResult(),n=(i=this.lines)==null?void 0:i.takePickLinkResult();r===void 0&&n===void 0||this._isPointerOnCanvas&&this.processHoverResult(r,n)}processHoverResult(e,i){var r,n,o,s,a,l,c,u,d,h;if(this._isDestroyed)return;let f=e===void 0?{mouseover:!1,mouseout:!1}:this.applyPickedPoint(e),g={mouseover:!1,mouseout:!1};if(this.graph.linksNumber&&this.store.isLinkHoveringEnabled?this.store.hoveredPoint?g=this.applyPickedLink(null):i!==void 0&&(g=this.applyPickedLink(i)):this.store.hoveredLinkIndex!==void 0&&(g=this.applyPickedLink(null)),f.mouseout&&((n=(r=this.config).onPointMouseOut)==null||n.call(r,this.currentEvent)),g.mouseout&&((s=(o=this.config).onLinkMouseOut)==null||s.call(o,this.currentEvent)),f.mouseover&&this.store.hoveredPoint){let x=this.store.hoveredPoint.index;(u=(c=this.config).onPointMouseOver)==null||u.call(c,this.store.hoveredPoint.index,this.store.hoveredPoint.position,this.currentEvent,((a=this.store.highlightedPointSet)==null?void 0:a.has(x))??!1,((l=this.store.outlinedPointSet)==null?void 0:l.has(x))??!1)}g.mouseover&&this.store.hoveredLinkIndex!==void 0&&((h=(d=this.config).onLinkMouseOver)==null||h.call(d,this.store.hoveredLinkIndex)),this.updateCanvasCursor()}applyPickedPoint(e){let i=!1,r=!1;return e&&e.index>=(this.graph.pointsNumber??0)&&(e=null),e?((this.store.hoveredPoint===void 0||this.store.hoveredPoint.index!==e.index)&&(i=!0),this.store.hoveredPoint=e):(this.store.hoveredPoint&&(r=!0),this.store.hoveredPoint=void 0),{mouseover:i,mouseout:r}}applyPickedLink(e){let i=!1,r=!1;return e!==null&&e>=(this.graph.linksNumber??0)&&(e=null),e!==null?(this.store.hoveredLinkIndex!==e&&(i=!0),this.store.hoveredLinkIndex=e):(this.store.hoveredLinkIndex!==void 0&&(r=!0),this.store.hoveredLinkIndex=void 0),(i||r)&&this.lines&&(this.lines.isLinkIndexBufferStale=!0),{mouseover:i,mouseout:r}}updateCanvasCursor(){let{hoveredPointCursor:e,hoveredLinkCursor:i}=this.config;this.dragInstance.isActive?ge(this.canvas).style("cursor","grabbing"):this.store.hoveredPoint?!this.config.enableDrag||this.store.isSpaceKeyPressed?ge(this.canvas).style("cursor",e):ge(this.canvas).style("cursor","grab"):this.store.isLinkHoveringEnabled&&this.store.hoveredLinkIndex!==void 0?ge(this.canvas).style("cursor",i):ge(this.canvas).style("cursor",null)}addAttribution(){var e;this.config.attribution&&(this.attributionDivElement=document.createElement("div"),this.attributionDivElement.style.cssText=`
      user-select: none;
      position: absolute;
      bottom: 0;
      right: 0;
      color: var(--cosmosgl-attribution-color);
      margin: 0 0.6rem 0.6rem 0;
      font-size: 0.7rem;
      font-family: inherit;
    `,this.attributionDivElement.innerHTML=Jw(this.config.attribution,{ALLOWED_TAGS:["a","b","i","em","strong","span","div","p","br","img"],ALLOWED_ATTR:["href","target","class","id","style","src","alt","title"]}),(e=this.store.div)==null||e.appendChild(this.attributionDivElement))}};export{Gu as Graph};
/*! Bundled license information:

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.4.18 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.18/LICENSE *)
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE *)
*/
