import{a as ve,b as at,c as ct,d as w,g as H,o as lt,q as $,r as ee}from"./chunk-YVATBKZN.js";import{$ as O,$a as Qe,C as Ue,Cc as rt,Dc as ge,Ec as st,F as Be,Ha as he,Ja as C,Ka as fe,L as le,Nc as ot,Oa as Je,Oc as it,Pa as pe,Qa as We,Ra as N,Ta as ye,Ua as me,V as ze,Va as j,Wa as F,Xa as Ze,Y as Ve,Ya as Ke,Za as Ye,_a as qe,ab as He,bb as et,ca as v,cb as L,d as ce,da as de,fa as E,ha as d,ia as m,ib as V,m as Fe,n as q,na as z,pa as ue,pb as tt,s as B,sa as Q,sb as nt,ua as $e,va as Xe,wa as Ge}from"./chunk-NURSLYAJ.js";import{a as x,b as xe,c as je,f as ae}from"./chunk-EQDQRRRY.js";var G=class{},J=class{},M=class r{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let s=e.slice(0,n),o=s.toLowerCase(),i=e.slice(n+1).trim();this.maybeSetNormalizedName(s,o),this.headers.has(o)?this.headers.get(o).push(i):this.headers.set(o,[i])}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,n)=>{this.setHeaderEntries(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof r?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new r;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof r?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,e);let s=(t.op==="a"?this.headers.get(e):void 0)||[];s.push(...n),this.headers.set(e,s);break;case"d":let o=t.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let i=this.headers.get(e);if(!i)return;i=i.filter(c=>o.indexOf(c)===-1),i.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,i)}break}}setHeaderEntries(t,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),s=t.toLowerCase();this.headers.set(s,n),this.maybeSetNormalizedName(t,s)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var Ee=class{encodeKey(t){return dt(t)}encodeValue(t){return dt(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function zt(r,t){let e=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(s=>{let o=s.indexOf("="),[i,c]=o==-1?[t.decodeKey(s),""]:[t.decodeKey(s.slice(0,o)),t.decodeValue(s.slice(o+1))],a=e.get(i)||[];a.push(c),e.set(i,a)}),e}var Vt=/%(\d[a-f0-9])/gi,$t={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function dt(r){return encodeURIComponent(r).replace(Vt,(t,e)=>$t[e]??t)}function te(r){return`${r}`}var S=class r{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new Ee,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=zt(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let n=t.fromObject[e],s=Array.isArray(n)?n.map(te):[te(n)];this.map.set(e,s)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(n=>{let s=t[n];Array.isArray(s)?s.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:s,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new r({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(te(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],s=n.indexOf(te(t.value));s!==-1&&n.splice(s,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var we=class{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function Xt(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ut(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function ht(r){return typeof Blob<"u"&&r instanceof Blob}function ft(r){return typeof FormData<"u"&&r instanceof FormData}function Gt(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}var X=class r{constructor(t,e,n,s){this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase();let o;if(Xt(this.method)||s?(this.body=n!==void 0?n:null,o=s):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new M,this.context??=new we,!this.params)this.params=new S,this.urlWithParams=e;else{let i=this.params.toString();if(i.length===0)this.urlWithParams=e;else{let c=e.indexOf("?"),a=c===-1?"?":c<e.length-1?"&":"";this.urlWithParams=e+a+i}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ut(this.body)||ht(this.body)||ft(this.body)||Gt(this.body)?this.body:this.body instanceof S?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ft(this.body)?null:ht(this.body)?this.body.type||null:ut(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof S?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(t={}){let e=t.method||this.method,n=t.url||this.url,s=t.responseType||this.responseType,o=t.transferCache??this.transferCache,i=t.body!==void 0?t.body:this.body,c=t.withCredentials??this.withCredentials,a=t.reportProgress??this.reportProgress,l=t.headers||this.headers,f=t.params||this.params,p=t.context??this.context;return t.setHeaders!==void 0&&(l=Object.keys(t.setHeaders).reduce((R,y)=>R.set(y,t.setHeaders[y]),l)),t.setParams&&(f=Object.keys(t.setParams).reduce((R,y)=>R.set(y,t.setParams[y]),f)),new r(e,n,i,{params:f,headers:l,context:p,reportProgress:a,responseType:s,withCredentials:c,transferCache:o})}},_=function(r){return r[r.Sent=0]="Sent",r[r.UploadProgress=1]="UploadProgress",r[r.ResponseHeader=2]="ResponseHeader",r[r.DownloadProgress=3]="DownloadProgress",r[r.Response=4]="Response",r[r.User=5]="User",r}(_||{}),W=class{constructor(t,e=200,n="OK"){this.headers=t.headers||new M,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},re=class r extends W{constructor(t={}){super(t),this.type=_.ResponseHeader}clone(t={}){return new r({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},k=class r extends W{constructor(t={}){super(t),this.type=_.Response,this.body=t.body!==void 0?t.body:null}clone(t={}){return new r({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},P=class extends W{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},At=200,Jt=204;function Te(r,t){return{body:t,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials,transferCache:r.transferCache}}var Wt=(()=>{class r{constructor(e){this.handler=e}request(e,n,s={}){let o;if(e instanceof X)o=e;else{let a;s.headers instanceof M?a=s.headers:a=new M(s.headers);let l;s.params&&(s.params instanceof S?l=s.params:l=new S({fromObject:s.params})),o=new X(e,n,s.body!==void 0?s.body:null,{headers:a,context:s.context,params:l,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let i=q(o).pipe(Be(a=>this.handler.handle(a)));if(e instanceof X||s.observe==="events")return i;let c=i.pipe(Ue(a=>a instanceof k));switch(s.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(B(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return c.pipe(B(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return c.pipe(B(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return c.pipe(B(a=>a.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new S().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,s={}){return this.request("PATCH",e,Te(s,n))}post(e,n,s={}){return this.request("POST",e,Te(s,n))}put(e,n,s={}){return this.request("PUT",e,Te(s,n))}static{this.\u0275fac=function(n){return new(n||r)(d(G))}}static{this.\u0275prov=v({token:r,factory:r.\u0275fac})}}return r})(),Zt=/^\)\]\}',?\n/,Kt="X-Request-URL";function pt(r){if(r.url)return r.url;let t=Kt.toLocaleLowerCase();return r.headers.get(t)}var Re=(()=>{class r{constructor(){this.fetchImpl=m(be,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e)),this.ngZone=m(C)}handle(e){return new ce(n=>{let s=new AbortController;return this.doRequest(e,s.signal,n).then(Me,o=>n.error(new P({error:o}))),()=>s.abort()})}doRequest(e,n,s){return ae(this,null,function*(){let o=this.createRequestInit(e),i;try{let y=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,x({signal:n},o)));Yt(y),s.next({type:_.Sent}),i=yield y}catch(y){s.error(new P({error:y,status:y.status??0,statusText:y.statusText,url:e.urlWithParams,headers:y.headers}));return}let c=new M(i.headers),a=i.statusText,l=pt(i)??e.urlWithParams,f=i.status,p=null;if(e.reportProgress&&s.next(new re({headers:c,status:f,statusText:a,url:l})),i.body){let y=i.headers.get("content-length"),T=[],u=i.body.getReader(),h=0,b,I,g=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>ae(this,null,function*(){for(;;){let{done:D,value:U}=yield u.read();if(D)break;if(T.push(U),h+=U.length,e.reportProgress){I=e.responseType==="text"?(I??"")+(b??=new TextDecoder).decode(U,{stream:!0}):void 0;let ke=()=>s.next({type:_.DownloadProgress,total:y?+y:void 0,loaded:h,partialText:I});g?g.run(ke):ke()}}}));let A=this.concatChunks(T,h);try{let D=i.headers.get("Content-Type")??"";p=this.parseBody(e,A,D)}catch(D){s.error(new P({error:D,headers:new M(i.headers),status:i.status,statusText:i.statusText,url:pt(i)??e.urlWithParams}));return}}f===0&&(f=p?At:0),f>=200&&f<300?(s.next(new k({body:p,headers:c,status:f,statusText:a,url:l})),s.complete()):s.error(new P({error:p,headers:c,status:f,statusText:a,url:l}))})}parseBody(e,n,s){switch(e.responseType){case"json":let o=new TextDecoder().decode(n).replace(Zt,"");return o===""?null:JSON.parse(o);case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:s});case"arraybuffer":return n.buffer}}createRequestInit(e){let n={},s=e.withCredentials?"include":void 0;if(e.headers.forEach((o,i)=>n[o]=i.join(",")),e.headers.has("Accept")||(n.Accept="application/json, text/plain, */*"),!e.headers.has("Content-Type")){let o=e.detectContentTypeHeader();o!==null&&(n["Content-Type"]=o)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:s}}concatChunks(e,n){let s=new Uint8Array(n),o=0;for(let i of e)s.set(i,o),o+=i.length;return s}static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275prov=v({token:r,factory:r.\u0275fac})}}return r})(),be=class{};function Me(){}function Yt(r){r.then(Me,Me)}function Dt(r,t){return t(r)}function qt(r,t){return(e,n)=>t.intercept(e,{handle:s=>r(s,n)})}function Qt(r,t,e){return(n,s)=>Ge(e,()=>t(n,o=>r(o,s)))}var Ht=new E(""),Ae=new E(""),Ot=new E(""),It=new E("",{providedIn:"root",factory:()=>!0});function en(){let r=null;return(t,e)=>{r===null&&(r=(m(Ht,{optional:!0})??[]).reduceRight(qt,Dt));let n=m(he);if(m(It)){let o=n.add();return r(t,e).pipe(le(()=>n.remove(o)))}else return r(t,e)}}var yt=(()=>{class r extends G{constructor(e,n){super(),this.backend=e,this.injector=n,this.chain=null,this.pendingTasks=m(he),this.contributeToStability=m(It)}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Ae),...this.injector.get(Ot,[])]));this.chain=n.reduceRight((s,o)=>Qt(s,o,this.injector),Dt)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,s=>this.backend.handle(s)).pipe(le(()=>this.pendingTasks.remove(n)))}else return this.chain(e,n=>this.backend.handle(n))}static{this.\u0275fac=function(n){return new(n||r)(d(J),d(Xe))}}static{this.\u0275prov=v({token:r,factory:r.\u0275fac})}}return r})();var tn=/^\)\]\}',?\n/;function nn(r){return"responseURL"in r&&r.responseURL?r.responseURL:/^X-Request-URL:/m.test(r.getAllResponseHeaders())?r.getResponseHeader("X-Request-URL"):null}var mt=(()=>{class r{constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new O(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?Fe(n.\u0275loadImpl()):q(null)).pipe(ze(()=>new ce(o=>{let i=n.build();if(i.open(e.method,e.urlWithParams),e.withCredentials&&(i.withCredentials=!0),e.headers.forEach((u,h)=>i.setRequestHeader(u,h.join(","))),e.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){let u=e.detectContentTypeHeader();u!==null&&i.setRequestHeader("Content-Type",u)}if(e.responseType){let u=e.responseType.toLowerCase();i.responseType=u!=="json"?u:"text"}let c=e.serializeBody(),a=null,l=()=>{if(a!==null)return a;let u=i.statusText||"OK",h=new M(i.getAllResponseHeaders()),b=nn(i)||e.url;return a=new re({headers:h,status:i.status,statusText:u,url:b}),a},f=()=>{let{headers:u,status:h,statusText:b,url:I}=l(),g=null;h!==Jt&&(g=typeof i.response>"u"?i.responseText:i.response),h===0&&(h=g?At:0);let A=h>=200&&h<300;if(e.responseType==="json"&&typeof g=="string"){let D=g;g=g.replace(tn,"");try{g=g!==""?JSON.parse(g):null}catch(U){g=D,A&&(A=!1,g={error:U,text:g})}}A?(o.next(new k({body:g,headers:u,status:h,statusText:b,url:I||void 0})),o.complete()):o.error(new P({error:g,headers:u,status:h,statusText:b,url:I||void 0}))},p=u=>{let{url:h}=l(),b=new P({error:u,status:i.status||0,statusText:i.statusText||"Unknown Error",url:h||void 0});o.error(b)},R=!1,y=u=>{R||(o.next(l()),R=!0);let h={type:_.DownloadProgress,loaded:u.loaded};u.lengthComputable&&(h.total=u.total),e.responseType==="text"&&i.responseText&&(h.partialText=i.responseText),o.next(h)},T=u=>{let h={type:_.UploadProgress,loaded:u.loaded};u.lengthComputable&&(h.total=u.total),o.next(h)};return i.addEventListener("load",f),i.addEventListener("error",p),i.addEventListener("timeout",p),i.addEventListener("abort",p),e.reportProgress&&(i.addEventListener("progress",y),c!==null&&i.upload&&i.upload.addEventListener("progress",T)),i.send(c),o.next({type:_.Sent}),()=>{i.removeEventListener("error",p),i.removeEventListener("abort",p),i.removeEventListener("load",f),i.removeEventListener("timeout",p),e.reportProgress&&(i.removeEventListener("progress",y),c!==null&&i.upload&&i.upload.removeEventListener("progress",T)),i.readyState!==i.DONE&&i.abort()}})))}static{this.\u0275fac=function(n){return new(n||r)(d(ee))}}static{this.\u0275prov=v({token:r,factory:r.\u0275fac})}}return r})(),Nt=new E(""),rn="XSRF-TOKEN",sn=new E("",{providedIn:"root",factory:()=>rn}),on="X-XSRF-TOKEN",an=new E("",{providedIn:"root",factory:()=>on}),se=class{},cn=(()=>{class r{constructor(e,n,s){this.doc=e,this.platform=n,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=H(e,this.cookieName),this.lastCookieString=e),this.lastToken}static{this.\u0275fac=function(n){return new(n||r)(d(w),d(N),d(sn))}}static{this.\u0275prov=v({token:r,factory:r.\u0275fac})}}return r})();function ln(r,t){let e=r.url.toLowerCase();if(!m(Nt)||r.method==="GET"||r.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return t(r);let n=m(se).getToken(),s=m(an);return n!=null&&!r.headers.has(s)&&(r=r.clone({headers:r.headers.set(s,n)})),t(r)}var De=function(r){return r[r.Interceptors=0]="Interceptors",r[r.LegacyInterceptors=1]="LegacyInterceptors",r[r.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",r[r.NoXsrfProtection=3]="NoXsrfProtection",r[r.JsonpSupport=4]="JsonpSupport",r[r.RequestsMadeViaParent=5]="RequestsMadeViaParent",r[r.Fetch=6]="Fetch",r}(De||{});function Pt(r,t){return{\u0275kind:r,\u0275providers:t}}function dn(...r){let t=[Wt,mt,yt,{provide:G,useExisting:yt},{provide:J,useFactory:()=>m(Re,{optional:!0})??m(mt)},{provide:Ae,useValue:ln,multi:!0},{provide:Nt,useValue:!0},{provide:se,useClass:cn}];for(let e of r)t.push(...e.\u0275providers);return Q(t)}var gt=new E("");function un(){return Pt(De.LegacyInterceptors,[{provide:gt,useFactory:en},{provide:Ae,useExisting:gt,multi:!0}])}function Hn(){return Pt(De.Fetch,[Re,{provide:J,useExisting:Re}])}var er=(()=>{class r{static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275mod=ue({type:r})}static{this.\u0275inj=de({providers:[dn(un())]})}}return r})();var hn=new E(""),vt="b",Tt="h",Et="s",wt="st",Rt="u",bt="rt",ne=new E(""),fn=["GET","HEAD"];function pn(r,t){let y=m(ne),{isCacheActive:e}=y,n=je(y,["isCacheActive"]),{transferCache:s,method:o}=r;if(!e||s===!1||o==="POST"&&!n.includePostRequests&&!s||o!=="POST"&&!fn.includes(o)||!n.includeRequestsWithAuthHeaders&&yn(r)||n.filter?.(r)===!1)return t(r);let i=m(me),c=m(hn,{optional:!0}),a=$(m(N));if(c&&!a)throw new O(2803,!1);let l=a&&c?Tn(r.url,c):r.url,f=gn(r,l),p=i.get(f,null),R=n.includeHeaders;if(typeof s=="object"&&s.includeHeaders&&(R=s.includeHeaders),p){let{[vt]:T,[bt]:u,[Tt]:h,[Et]:b,[wt]:I,[Rt]:g}=p,A=T;switch(u){case"arraybuffer":A=new TextEncoder().encode(T).buffer;break;case"blob":A=new Blob([T]);break}let D=new M(h);return q(new k({body:A,headers:D,status:b,statusText:I,url:g}))}return t(r).pipe(Ve(T=>{T instanceof k&&a&&i.set(f,{[vt]:T.body,[Tt]:mn(T.headers,R),[Et]:T.status,[wt]:T.statusText,[Rt]:l,[bt]:r.responseType})}))}function yn(r){return r.headers.has("authorization")||r.headers.has("proxy-authorization")}function mn(r,t){if(!t)return{};let e={};for(let n of t){let s=r.getAll(n);s!==null&&(e[n]=s)}return e}function Mt(r){return[...r.keys()].sort().map(t=>`${t}=${r.getAll(t)}`).join("&")}function gn(r,t){let{params:e,method:n,responseType:s}=r,o=Mt(e),i=r.serializeBody();i instanceof URLSearchParams?i=Mt(i):typeof i!="string"&&(i="");let c=[n,s,t,i,o].join("|"),a=vn(c);return a}function vn(r){let t=0;for(let e of r)t=Math.imul(31,t)+e.charCodeAt(0)<<0;return t+=2147483648,t.toString()}function St(r){return[{provide:ne,useFactory:()=>(nt("NgHttpTransferCache"),x({isCacheActive:!0},r))},{provide:Ot,useValue:pn,multi:!0,deps:[me,ne]},{provide:rt,multi:!0,useFactory:()=>{let t=m(ge),e=m(ne);return()=>{st(t).then(()=>{e.isCacheActive=!1})}}}]}function Tn(r,t){let e=new URL(r,"resolve://").origin,n=t[e];return n?r.replace(e,n):r}var Ne=class extends ct{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Pe=class r extends Ne{static makeCurrent(){at(new r)}onAndCancel(t,e,n){return t.addEventListener(e,n),()=>{t.removeEventListener(e,n)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=wn();return e==null?null:Rn(e)}resetBaseElement(){Z=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return H(document.cookie,t)}},Z=null;function wn(){return Z=Z||document.querySelector("base"),Z?Z.getAttribute("href"):null}function Rn(r){return new URL(r,document.baseURI).pathname}var bn=(()=>{class r{build(){return new XMLHttpRequest}static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275prov=v({token:r,factory:r.\u0275fac})}}return r})(),Se=new E(""),kt=(()=>{class r{constructor(e,n){this._zone=n,this._eventNameToPlugin=new Map,e.forEach(s=>{s.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,s){return this._findPluginFor(n).addEventListener(e,n,s)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new O(5101,!1);return this._eventNameToPlugin.set(e,n),n}static{this.\u0275fac=function(n){return new(n||r)(d(Se),d(C))}}static{this.\u0275prov=v({token:r,factory:r.\u0275fac})}}return r})(),oe=class{constructor(t){this._doc=t}},Oe="ng-app-id",xt=(()=>{class r{constructor(e,n,s,o={}){this.doc=e,this.appId=n,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=$(o),this.resetHostNodes()}addStyles(e){for(let n of e)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(e){for(let n of e)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let e=this.styleNodesInDOM;e&&(e.forEach(n=>n.remove()),e.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(let n of this.getAllStyles())this.addStyleToHost(e,n)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(let n of this.hostNodes)this.addStyleToHost(n,e)}onStyleRemoved(e){let n=this.styleRef;n.get(e)?.elements?.forEach(s=>s.remove()),n.delete(e)}collectServerRenderedStyles(){let e=this.doc.head?.querySelectorAll(`style[${Oe}="${this.appId}"]`);if(e?.length){let n=new Map;return e.forEach(s=>{s.textContent!=null&&n.set(s.textContent,s)}),n}return null}changeUsageCount(e,n){let s=this.styleRef;if(s.has(e)){let o=s.get(e);return o.usage+=n,o.usage}return s.set(e,{usage:n,elements:[]}),n}getStyleElement(e,n){let s=this.styleNodesInDOM,o=s?.get(n);if(o?.parentNode===e)return s.delete(n),o.removeAttribute(Oe),o;{let i=this.doc.createElement("style");return this.nonce&&i.setAttribute("nonce",this.nonce),i.textContent=n,this.platformIsServer&&i.setAttribute(Oe,this.appId),e.appendChild(i),i}}addStyleToHost(e,n){let s=this.getStyleElement(e,n),o=this.styleRef,i=o.get(n)?.elements;i?i.push(s):o.set(n,{elements:[s],usage:1})}resetHostNodes(){let e=this.hostNodes;e.clear(),e.add(this.doc.head)}static{this.\u0275fac=function(n){return new(n||r)(d(w),d(pe),d(ye,8),d(N))}}static{this.\u0275prov=v({token:r,factory:r.\u0275fac})}}return r})(),Ie={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Le=/%COMP%/g,jt="%COMP%",Mn=`_nghost-${jt}`,An=`_ngcontent-${jt}`,Dn=!0,On=new E("",{providedIn:"root",factory:()=>Dn});function In(r){return An.replace(Le,r)}function Nn(r){return Mn.replace(Le,r)}function Ft(r,t){return t.map(e=>e.replace(Le,r))}var _t=(()=>{class r{constructor(e,n,s,o,i,c,a,l=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=i,this.platformId=c,this.ngZone=a,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=$(c),this.defaultRenderer=new K(e,i,a,this.platformIsServer)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===z.ShadowDom&&(n=xe(x({},n),{encapsulation:z.Emulated}));let s=this.getOrCreateRenderer(e,n);return s instanceof ie?s.applyToHost(e):s instanceof Y&&s.applyStyles(),s}getOrCreateRenderer(e,n){let s=this.rendererByCompId,o=s.get(n.id);if(!o){let i=this.doc,c=this.ngZone,a=this.eventManager,l=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,p=this.platformIsServer;switch(n.encapsulation){case z.Emulated:o=new ie(a,l,n,this.appId,f,i,c,p);break;case z.ShadowDom:return new _e(a,l,e,n,i,c,this.nonce,p);default:o=new Y(a,l,n,f,i,c,p);break}s.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(n){return new(n||r)(d(kt),d(xt),d(pe),d(On),d(w),d(N),d(C),d(ye))}}static{this.\u0275prov=v({token:r,factory:r.\u0275fac})}}return r})(),K=class{constructor(t,e,n,s){this.eventManager=t,this.doc=e,this.ngZone=n,this.platformIsServer=s,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(t,e){return e?this.doc.createElementNS(Ie[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(Ct(t)?t.content:t).appendChild(e)}insertBefore(t,e,n){t&&(Ct(t)?t.content:t).insertBefore(e,n)}removeChild(t,e){e.remove()}selectRootElement(t,e){let n=typeof t=="string"?this.doc.querySelector(t):t;if(!n)throw new O(-5104,!1);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,s){if(s){e=s+":"+e;let o=Ie[s];o?t.setAttributeNS(o,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){let s=Ie[n];s?t.removeAttributeNS(s,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,s){s&(V.DashCase|V.Important)?t.style.setProperty(e,n,s&V.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&V.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t!=null&&(t[e]=n)}setValue(t,e){t.nodeValue=e}listen(t,e,n){if(typeof t=="string"&&(t=ve().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${e}`);return this.eventManager.addEventListener(t,e,this.decoratePreventDefault(n))}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(e)):t(e))===!1&&e.preventDefault()}}};function Ct(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var _e=class extends K{constructor(t,e,n,s,o,i,c,a){super(t,o,i,a),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=Ft(s.id,s.styles);for(let f of l){let p=document.createElement("style");c&&p.setAttribute("nonce",c),p.textContent=f,this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Y=class extends K{constructor(t,e,n,s,o,i,c,a){super(t,o,i,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=s,this.styles=a?Ft(a,n.styles):n.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},ie=class extends Y{constructor(t,e,n,s,o,i,c,a){let l=s+"-"+n.id;super(t,e,n,o,i,c,a,l),this.contentAttr=In(l),this.hostAttr=Nn(l)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}},Pn=(()=>{class r extends oe{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,s){return e.addEventListener(n,s,!1),()=>this.removeEventListener(e,n,s)}removeEventListener(e,n,s){return e.removeEventListener(n,s)}static{this.\u0275fac=function(n){return new(n||r)(d(w))}}static{this.\u0275prov=v({token:r,factory:r.\u0275fac})}}return r})(),Lt=["alt","control","meta","shift"],Sn={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},_n={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},Cn=(()=>{class r extends oe{constructor(e){super(e)}supports(e){return r.parseEventName(e)!=null}addEventListener(e,n,s){let o=r.parseEventName(n),i=r.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ve().onAndCancel(e,o.domEventName,i))}static parseEventName(e){let n=e.toLowerCase().split("."),s=n.shift();if(n.length===0||!(s==="keydown"||s==="keyup"))return null;let o=r._normalizeKey(n.pop()),i="",c=n.indexOf("code");if(c>-1&&(n.splice(c,1),i="code."),Lt.forEach(l=>{let f=n.indexOf(l);f>-1&&(n.splice(f,1),i+=l+".")}),i+=o,n.length!=0||o.length===0)return null;let a={};return a.domEventName=s,a.fullKey=i,a}static matchEventFullKeyCode(e,n){let s=Sn[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(s=e.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),Lt.forEach(i=>{if(i!==s){let c=_n[i];c(e)&&(o+=i+".")}}),o+=s,o===n)}static eventCallback(e,n,s){return o=>{r.matchEventFullKeyCode(o,e)&&s.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static{this.\u0275fac=function(n){return new(n||r)(d(w))}}static{this.\u0275prov=v({token:r,factory:r.\u0275fac})}}return r})();function Or(r,t){return ot(x({rootComponent:r},Ln(t)))}function Ln(r){return{appProviders:[...Un,...r?.providers??[]],platformProviders:Fn}}function kn(){Pe.makeCurrent()}function xn(){return new fe}function jn(){return Je(document),document}var Fn=[{provide:N,useValue:lt},{provide:We,useValue:kn,multi:!0},{provide:w,useFactory:jn,deps:[]}];var Un=[{provide:$e,useValue:"root"},{provide:fe,useFactory:xn,deps:[]},{provide:Se,useClass:Pn,multi:!0,deps:[w,C,N]},{provide:Se,useClass:Cn,multi:!0,deps:[w]},_t,xt,kt,{provide:tt,useExisting:_t},{provide:ee,useClass:bn,deps:[]},[]];var Ir=(()=>{class r{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static{this.\u0275fac=function(n){return new(n||r)(d(w))}}static{this.\u0275prov=v({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();var Bn=(()=>{class r{static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275prov=v({token:r,factory:function(n){let s=null;return n?s=new(n||r):s=d(zn),s},providedIn:"root"})}}return r})(),zn=(()=>{class r extends Bn{constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case L.NONE:return n;case L.HTML:return F(n,"HTML")?j(n):et(this._doc,String(n)).toString();case L.STYLE:return F(n,"Style")?j(n):n;case L.SCRIPT:if(F(n,"Script"))return j(n);throw new O(5200,!1);case L.URL:return F(n,"URL")?j(n):He(String(n));case L.RESOURCE_URL:if(F(n,"ResourceURL"))return j(n);throw new O(5201,!1);default:throw new O(5202,!1)}}bypassSecurityTrustHtml(e){return Ze(e)}bypassSecurityTrustStyle(e){return Ke(e)}bypassSecurityTrustScript(e){return Ye(e)}bypassSecurityTrustUrl(e){return qe(e)}bypassSecurityTrustResourceUrl(e){return Qe(e)}static{this.\u0275fac=function(n){return new(n||r)(d(w))}}static{this.\u0275prov=v({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})(),Ce=function(r){return r[r.NoHttpTransferCache=0]="NoHttpTransferCache",r[r.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",r[r.I18nSupport=2]="I18nSupport",r[r.EventReplay=3]="EventReplay",r}(Ce||{});function Nr(...r){let t=[],e=new Set,n=e.has(Ce.HttpTransferCacheOptions);for(let{\u0275providers:s,\u0275kind:o}of r)e.add(o),s.length&&t.push(s);return Q([[],it(),e.has(Ce.NoHttpTransferCache)||n?[]:St({}),t])}export{Wt as a,dn as b,Hn as c,er as d,_t as e,Or as f,Ir as g,Bn as h,Nr as i};