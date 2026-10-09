var Ou=r=>{throw TypeError(r)};var Vi=(r,e,t)=>e.has(r)?Ou("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t);function Fu(r,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in r)){const s=Object.getOwnPropertyDescriptor(n,i);s&&Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ia="170",Bu=0,mc=1,ku=2,Gl=1,zu=2,un=3,Dn=0,wt=1,Yt=2,wn=0,Ei=1,bo=2,gc=3,_c=4,Hu=5,Xn=100,Gu=101,Vu=102,Wu=103,Xu=104,$u=200,Yu=201,qu=202,Ku=203,Co=204,Ao=205,ju=206,Ju=207,Zu=208,Qu=209,ed=210,td=211,nd=212,id=213,rd=214,Ro=0,wo=1,Po=2,Ai=3,Lo=4,Io=5,Do=6,Uo=7,Vl=0,sd=1,od=2,Pn=0,ad=1,cd=2,ld=3,hd=4,ud=5,dd=6,fd=7,Wl=300,Ri=301,wi=302,No=303,Oo=304,Es=306,Fo=1e3,qn=1001,Bo=1002,jt=1003,pd=1004,xr=1005,qt=1006,Ns=1007,Kn=1008,mn=1009,Xl=1010,$l=1011,ar=1012,Da=1013,jn=1014,dn=1015,ur=1016,Ua=1017,Na=1018,Pi=1020,Yl=35902,ql=1021,Kl=1022,Kt=1023,jl=1024,Jl=1025,Ti=1026,Li=1027,Zl=1028,Oa=1029,Ql=1030,Fa=1031,Ba=1033,ns=33776,is=33777,rs=33778,ss=33779,ko=35840,zo=35841,Ho=35842,Go=35843,Vo=36196,Wo=37492,Xo=37496,$o=37808,Yo=37809,qo=37810,Ko=37811,jo=37812,Jo=37813,Zo=37814,Qo=37815,ea=37816,ta=37817,na=37818,ia=37819,ra=37820,sa=37821,os=36492,oa=36494,aa=36495,eh=36283,ca=36284,la=36285,ha=36286,md=3200,gd=3201,th=0,_d=1,bn="",Tt="srgb",Bi="srgb-linear",Ts="linear",Ye="srgb",ii=7680,vc=519,vd=512,yd=513,xd=514,nh=515,Sd=516,Md=517,Ed=518,Td=519,ua=35044,yc="300 es",fn=2e3,ms=2001;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],as=Math.PI/180,da=180/Math.PI;function Ln(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[r&255]+_t[r>>8&255]+_t[r>>16&255]+_t[r>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function mt(r,e,t){return Math.max(e,Math.min(t,r))}function bd(r,e){return(r%e+e)%e}function Os(r,e,t){return(1-t)*r+t*e}function Qt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function qe(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,n,i,s,o,a,c,l){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],T=i[1],E=i[4],y=i[7],R=i[2],C=i[5],A=i[8];return s[0]=o*_+a*T+c*R,s[3]=o*m+a*E+c*C,s[6]=o*p+a*y+c*A,s[1]=l*_+h*T+u*R,s[4]=l*m+h*E+u*C,s[7]=l*p+h*y+u*A,s[2]=d*_+f*T+g*R,s[5]=d*m+f*E+g*C,s[8]=d*p+f*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fs.makeScale(e,t)),this}rotate(e){return this.premultiply(Fs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fs=new Le;function ih(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function cr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Cd(){const r=cr("canvas");return r.style.display="block",r}const xc={};function Qi(r){r in xc||(xc[r]=!0,console.warn(r))}function Ad(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Rd(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wd(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ge={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ye&&(r.r=pn(r.r),r.g=pn(r.g),r.b=pn(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ye&&(r.r=bi(r.r),r.g=bi(r.g),r.b=bi(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bn?Ts:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function pn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Sc=[.64,.33,.3,.6,.15,.06],Mc=[.2126,.7152,.0722],Ec=[.3127,.329],Tc=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ge.define({[Bi]:{primaries:Sc,whitePoint:Ec,transfer:Ts,toXYZ:Tc,fromXYZ:bc,luminanceCoefficients:Mc,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:Sc,whitePoint:Ec,transfer:Ye,toXYZ:Tc,fromXYZ:bc,luminanceCoefficients:Mc,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}});let ri;class Pd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ri===void 0&&(ri=cr("canvas")),ri.width=e.width,ri.height=e.height;const n=ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=pn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pn(t[n]/255)*255):t[n]=pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ld=0;class rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Bs(i[o].image)):s.push(Bs(i[o]))}else s=Bs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Bs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Pd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Id=0;class xt extends ki{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,n=qn,i=qn,s=qt,o=Kn,a=Kt,c=mn,l=xt.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Ln(),this.name="",this.source=new rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fo:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fo:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=Wl;xt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,y=(f+1)/2,R=(p+1)/2,C=(h+d)/4,A=(u+_)/4,L=(g+m)/4;return E>y&&E>R?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=C/n,s=A/n):y>R?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=C/i,s=L/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=A/s,i=L/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(d-h)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dd extends ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new xt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends Dd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sh extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ud extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const R=Math.sqrt(E),C=Math.atan2(R,p*T);m=Math.sin(m*C)/R,a=Math.sin(a*C)/R}const y=a*T;if(c=c*m+d*y,l=l*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ks.copy(this).projectOnVector(e),this.sub(ks)}reflect(e){return this.sub(ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ks=new P,Cc=new dr;class fr{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wt):Wt.fromBufferAttribute(s,o),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wi),Mr.subVectors(this.max,Wi),si.subVectors(e.a,Wi),oi.subVectors(e.b,Wi),ai.subVectors(e.c,Wi),vn.subVectors(oi,si),yn.subVectors(ai,oi),Bn.subVectors(si,ai);let t=[0,-vn.z,vn.y,0,-yn.z,yn.y,0,-Bn.z,Bn.y,vn.z,0,-vn.x,yn.z,0,-yn.x,Bn.z,0,-Bn.x,-vn.y,vn.x,0,-yn.y,yn.x,0,-Bn.y,Bn.x,0];return!zs(t,si,oi,ai,Mr)||(t=[1,0,0,0,1,0,0,0,1],!zs(t,si,oi,ai,Mr))?!1:(Er.crossVectors(vn,yn),t=[Er.x,Er.y,Er.z],zs(t,si,oi,ai,Mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const on=[new P,new P,new P,new P,new P,new P,new P,new P],Wt=new P,Sr=new fr,si=new P,oi=new P,ai=new P,vn=new P,yn=new P,Bn=new P,Wi=new P,Mr=new P,Er=new P,kn=new P;function zs(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){kn.fromArray(r,s);const a=i.x*Math.abs(kn.x)+i.y*Math.abs(kn.y)+i.z*Math.abs(kn.z),c=e.dot(kn),l=t.dot(kn),h=n.dot(kn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Nd=new fr,Xi=new P,Hs=new P;class pr{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);const t=Xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(Hs)),this.expandByPoint(Xi.copy(e.center).sub(Hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new P,Gs=new P,Tr=new P,xn=new P,Vs=new P,br=new P,Ws=new P;class bs{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Gs.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Gs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Tr),a=xn.dot(this.direction),c=-xn.dot(Tr),l=xn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Gs).addScaledVector(Tr,d),f}intersectSphere(e,t){an.subVectors(e.center,this.origin);const n=an.dot(this.direction),i=an.dot(an)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,n,i,s){Vs.subVectors(t,e),br.subVectors(n,e),Ws.crossVectors(Vs,br);let o=this.direction.dot(Ws),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,e);const c=a*this.direction.dot(br.crossVectors(xn,br));if(c<0)return null;const l=a*this.direction.dot(Vs.cross(xn));if(l<0||c+l>o)return null;const h=-a*xn.dot(Ws);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,m){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ci.setFromMatrixColumn(e,0).length(),s=1/ci.setFromMatrixColumn(e,1).length(),o=1/ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Od,e,Fd)}lookAt(e,t,n){const i=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),Sn.crossVectors(n,Lt),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),Sn.crossVectors(n,Lt)),Sn.normalize(),Cr.crossVectors(Lt,Sn),i[0]=Sn.x,i[4]=Cr.x,i[8]=Lt.x,i[1]=Sn.y,i[5]=Cr.y,i[9]=Lt.y,i[2]=Sn.z,i[6]=Cr.z,i[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],E=n[7],y=n[11],R=n[15],C=i[0],A=i[4],L=i[8],M=i[12],S=i[1],w=i[5],z=i[9],O=i[13],W=i[2],K=i[6],V=i[10],J=i[14],G=i[3],ie=i[7],he=i[11],Se=i[15];return s[0]=o*C+a*S+c*W+l*G,s[4]=o*A+a*w+c*K+l*ie,s[8]=o*L+a*z+c*V+l*he,s[12]=o*M+a*O+c*J+l*Se,s[1]=h*C+u*S+d*W+f*G,s[5]=h*A+u*w+d*K+f*ie,s[9]=h*L+u*z+d*V+f*he,s[13]=h*M+u*O+d*J+f*Se,s[2]=g*C+_*S+m*W+p*G,s[6]=g*A+_*w+m*K+p*ie,s[10]=g*L+_*z+m*V+p*he,s[14]=g*M+_*O+m*J+p*Se,s[3]=T*C+E*S+y*W+R*G,s[7]=T*A+E*w+y*K+R*ie,s[11]=T*L+E*z+y*V+R*he,s[15]=T*M+E*O+y*J+R*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+s*o*d-i*o*f+i*l*h-s*c*h)+m*(+t*l*u-t*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,E=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,y=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,R=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,C=t*T+n*E+i*y+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=T*A,e[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*A,e[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*p+n*c*p)*A,e[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*A,e[4]=E*A,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*A,e[6]=(g*c*s-o*m*s-g*i*l+t*m*l+o*i*p-t*c*p)*A,e[7]=(o*d*s-h*c*s+h*i*l-t*d*l-o*i*f+t*c*f)*A,e[8]=y*A,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*p-t*u*p)*A,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*p+t*a*p)*A,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*f-t*a*f)*A,e[12]=R*A,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*A,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*A,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,g=s*u,_=o*h,m=o*u,p=a*u,T=c*l,E=c*h,y=c*u,R=n.x,C=n.y,A=n.z;return i[0]=(1-(_+p))*R,i[1]=(f+y)*R,i[2]=(g-E)*R,i[3]=0,i[4]=(f-y)*C,i[5]=(1-(d+p))*C,i[6]=(m+T)*C,i[7]=0,i[8]=(g+E)*A,i[9]=(m-T)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ci.set(i[0],i[1],i[2]).length();const o=ci.set(i[4],i[5],i[6]).length(),a=ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Xt.copy(this);const l=1/s,h=1/o,u=1/a;return Xt.elements[0]*=l,Xt.elements[1]*=l,Xt.elements[2]*=l,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=u,Xt.elements[9]*=u,Xt.elements[10]*=u,t.setFromRotationMatrix(Xt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=fn){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===fn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ms)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=fn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*l,f=(n+i)*h;let g,_;if(a===fn)g=(o+s)*u,_=-2*u;else if(a===ms)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ci=new P,Xt=new je,Od=new P(0,0,0),Fd=new P(1,1,1),Sn=new P,Cr=new P,Lt=new P,Ac=new je,Rc=new dr;class en{constructor(e=0,t=0,n=0,i=en.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ac,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class ka{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bd=0;const wc=new P,li=new dr,cn=new je,Ar=new P,$i=new P,kd=new P,zd=new dr,Pc=new P(1,0,0),Lc=new P(0,1,0),Ic=new P(0,0,1),Dc={type:"added"},Hd={type:"removed"},hi={type:"childadded",child:null},Xs={type:"childremoved",child:null};class ht extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new P,t=new en,n=new dr,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new Le}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(Pc,e)}rotateY(e){return this.rotateOnAxis(Lc,e)}rotateZ(e){return this.rotateOnAxis(Ic,e)}translateOnAxis(e,t){return wc.copy(e).applyQuaternion(this.quaternion),this.position.add(wc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pc,e)}translateY(e){return this.translateOnAxis(Lc,e)}translateZ(e){return this.translateOnAxis(Ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ar.copy(e):Ar.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt($i,Ar,this.up):cn.lookAt(Ar,$i,this.up),this.quaternion.setFromRotationMatrix(cn),i&&(cn.extractRotation(i.matrixWorld),li.setFromRotationMatrix(cn),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dc),hi.child=e,this.dispatchEvent(hi),hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dc),hi.child=e,this.dispatchEvent(hi),hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,kd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,zd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ht.DEFAULT_UP=new P(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new P,ln=new P,$s=new P,hn=new P,ui=new P,di=new P,Uc=new P,Ys=new P,qs=new P,Ks=new P,js=new ot,Js=new ot,Zs=new ot;class Dt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$t.subVectors(e,t),i.cross($t);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){$t.subVectors(i,t),ln.subVectors(n,t),$s.subVectors(e,t);const o=$t.dot($t),a=$t.dot(ln),c=$t.dot($s),l=ln.dot(ln),h=ln.dot($s),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,hn.x),c.addScaledVector(o,hn.y),c.addScaledVector(a,hn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return js.setScalar(0),Js.setScalar(0),Zs.setScalar(0),js.fromBufferAttribute(e,t),Js.fromBufferAttribute(e,n),Zs.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(js,s.x),o.addScaledVector(Js,s.y),o.addScaledVector(Zs,s.z),o}static isFrontFacing(e,t,n,i){return $t.subVectors(n,t),ln.subVectors(e,t),$t.cross(ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),$t.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Dt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Dt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ui.subVectors(i,n),di.subVectors(s,n),Ys.subVectors(e,n);const c=ui.dot(Ys),l=di.dot(Ys);if(c<=0&&l<=0)return t.copy(n);qs.subVectors(e,i);const h=ui.dot(qs),u=di.dot(qs);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ui,o);Ks.subVectors(e,s);const f=ui.dot(Ks),g=di.dot(Ks);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(di,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Uc.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Uc,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(ui,o).addScaledVector(di,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function Qs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ge.workingColorSpace){if(e=bd(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Qs(o,s,e+1/3),this.g=Qs(o,s,e),this.b=Qs(o,s,e-1/3)}return Ge.toWorkingColorSpace(this,i),this}setStyle(e,t=Tt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=oh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Ge.fromWorkingColorSpace(vt.copy(this),e),Math.round(mt(vt.r*255,0,255))*65536+Math.round(mt(vt.g*255,0,255))*256+Math.round(mt(vt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.fromWorkingColorSpace(vt.copy(this),t);const n=vt.r,i=vt.g,s=vt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=Tt){Ge.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,i=vt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(Rr);const n=Os(Mn.h,Rr.h,t),i=Os(Mn.s,Rr.s,t),s=Os(Mn.l,Rr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new ke;ke.NAMES=oh;let Gd=0;class Nn extends ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Ln(),this.name="",this.blending=Ei,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Ao,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Co&&(n.blendSrc=this.blendSrc),this.blendDst!==Ao&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rt extends Nn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new P,wr=new ce;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ua,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),i=qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),i=qe(i,this.array),s=qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ua&&(e.usage=this.usage),e}}class ah extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ch extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rt extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Vd=0;const Ft=new je,eo=new ht,fi=new P,It=new fr,Yi=new fr,ft=new P;class pt extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ih(e)?ch:ah)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Le().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return eo.lookAt(e),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];It.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Yi.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(It.min,Yi.min),It.expandByPoint(ft),ft.addVectors(It.max,Yi.max),It.expandByPoint(ft)):(It.expandByPoint(Yi.min),It.expandByPoint(Yi.max))}It.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ft.fromBufferAttribute(a,l),c&&(fi.fromBufferAttribute(e,l),ft.add(fi)),i=Math.max(i,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new P,c[L]=new P;const l=new P,h=new P,u=new P,d=new ce,f=new ce,g=new ce,_=new P,m=new P;function p(L,M,S){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),d.fromBufferAttribute(s,L),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(w),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),a[L].add(_),a[M].add(_),a[S].add(_),c[L].add(m),c[M].add(m),c[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,M=T.length;L<M;++L){const S=T[L],w=S.start,z=S.count;for(let O=w,W=w+z;O<W;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new P,y=new P,R=new P,C=new P;function A(L){R.fromBufferAttribute(i,L),C.copy(R);const M=a[L];E.copy(M),E.sub(R.multiplyScalar(R.dot(M))).normalize(),y.crossVectors(C,M);const w=y.dot(c[L])<0?-1:1;o.setXYZW(L,E.x,E.y,E.z,w)}for(let L=0,M=T.length;L<M;++L){const S=T[L],w=S.start,z=S.count;for(let O=w,W=w+z;O<W;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Ht(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nc=new je,zn=new bs,Pr=new pr,Oc=new P,Lr=new P,Ir=new P,Dr=new P,to=new P,Ur=new P,Fc=new P,Nr=new P;class nt extends ht{constructor(e=new pt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ur.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(to.fromBufferAttribute(u,e),o?Ur.addScaledVector(to,h):Ur.addScaledVector(to.sub(t),h))}t.add(Ur)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(s),zn.copy(e.ray).recast(e.near),!(Pr.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Pr,Oc)===null||zn.origin.distanceToSquared(Oc)>(e.far-e.near)**2))&&(Nc.copy(s).invert(),zn.copy(e.ray).applyMatrix4(Nc),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,R=E;y<R;y+=3){const C=a.getX(y),A=a.getX(y+1),L=a.getX(y+2);i=Or(this,p,e,n,l,h,u,C,A,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);i=Or(this,o,e,n,l,h,u,T,E,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,R=E;y<R;y+=3){const C=y,A=y+1,L=y+2;i=Or(this,p,e,n,l,h,u,C,A,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=m,E=m+1,y=m+2;i=Or(this,o,e,n,l,h,u,T,E,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Wd(r,e,t,n,i,s,o,a){let c;if(e.side===wt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Dn,a),c===null)return null;Nr.copy(a),Nr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Nr);return l<t.near||l>t.far?null:{distance:l,point:Nr.clone(),object:r}}function Or(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Lr),r.getVertexPosition(c,Ir),r.getVertexPosition(l,Dr);const h=Wd(r,e,t,n,Lr,Ir,Dr,Fc);if(h){const u=new P;Dt.getBarycoord(Fc,Lr,Ir,Dr,u),i&&(h.uv=Dt.getInterpolatedAttribute(i,a,c,l,u,new ce)),s&&(h.uv1=Dt.getInterpolatedAttribute(s,a,c,l,u,new ce)),o&&(h.normal=Dt.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new P,materialIndex:0};Dt.getNormal(Lr,Ir,Dr,d.normal),h.face=d,h.barycoord=u}return h}class Zn extends pt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function g(_,m,p,T,E,y,R,C,A,L,M){const S=y/A,w=R/L,z=y/2,O=R/2,W=C/2,K=A+1,V=L+1;let J=0,G=0;const ie=new P;for(let he=0;he<V;he++){const Se=he*w-O;for(let Ue=0;Ue<K;Ue++){const Ke=Ue*S-z;ie[_]=Ke*T,ie[m]=Se*E,ie[p]=W,l.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[p]=C>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(Ue/A),u.push(1-he/L),J+=1}}for(let he=0;he<L;he++)for(let Se=0;Se<A;Se++){const Ue=d+Se+K*he,Ke=d+Se+K*(he+1),$=d+(Se+1)+K*(he+1),ee=d+(Se+1)+K*he;c.push(Ue,Ke,ee),c.push(Ke,$,ee),G+=6}a.addGroup(f,G,M),f+=G,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Et(r){const e={};for(let t=0;t<r.length;t++){const n=Ii(r[t]);for(const i in n)e[i]=n[i]}return e}function Xd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function lh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const $d={clone:Ii,merge:Et};var Yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Nn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yd,this.fragmentShader=qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=Xd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hh extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new P,Bc=new ce,kc=new ce;class kt extends hh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return da*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,Bc,kc),t.subVectors(kc,Bc)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(as*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pi=-90,mi=1;class Kd extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kt(pi,mi,e,t);i.layers=this.layers,this.add(i);const s=new kt(pi,mi,e,t);s.layers=this.layers,this.add(s);const o=new kt(pi,mi,e,t);o.layers=this.layers,this.add(o);const a=new kt(pi,mi,e,t);a.layers=this.layers,this.add(a);const c=new kt(pi,mi,e,t);c.layers=this.layers,this.add(c);const l=new kt(pi,mi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class uh extends xt{constructor(e,t,n,i,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ri,super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jd extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new uh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Zn(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:wn});s.uniforms.tEquirect.value=t;const o=new nt(i,s),a=t.minFilter;return t.minFilter===Kn&&(t.minFilter=qt),new Kd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const no=new P,Jd=new P,Zd=new Le;class Tn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=no.subVectors(n,t).cross(Jd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(no),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zd.getNormalMatrix(e),i=this.coplanarPoint(no).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new pr,Fr=new P;class za{constructor(e=new Tn,t=new Tn,n=new Tn,i=new Tn,s=new Tn,o=new Tn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],T=i[13],E=i[14],y=i[15];if(n[0].setComponents(c-s,d-l,m-f,y-p).normalize(),n[1].setComponents(c+s,d+l,m+f,y+p).normalize(),n[2].setComponents(c+o,d+h,m+g,y+T).normalize(),n[3].setComponents(c-o,d-h,m-g,y-T).normalize(),n[4].setComponents(c-a,d-u,m-_,y-E).normalize(),t===fn)n[5].setComponents(c+a,d+u,m+_,y+E).normalize();else if(t===ms)n[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Fr.x=i.normal.x>0?e.max.x:e.min.x,Fr.y=i.normal.y>0?e.max.y:e.min.y,Fr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Qd(r){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}class mr extends pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const T=p*d-o;for(let E=0;E<l;E++){const y=E*u-s;g.push(y,-T,0),_.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const E=T+l*p,y=T+l*(p+1),R=T+1+l*(p+1),C=T+1+l*p;f.push(E,y,C),f.push(y,R,C)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.width,e.height,e.widthSegments,e.heightSegments)}}var ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,af=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ff=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",If=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$f=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ep=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ip=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ep=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,am=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ym=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Im=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:ef,alphahash_pars_fragment:tf,alphamap_fragment:nf,alphamap_pars_fragment:rf,alphatest_fragment:sf,alphatest_pars_fragment:of,aomap_fragment:af,aomap_pars_fragment:cf,batching_pars_vertex:lf,batching_vertex:hf,begin_vertex:uf,beginnormal_vertex:df,bsdfs:ff,iridescence_fragment:pf,bumpmap_pars_fragment:mf,clipping_planes_fragment:gf,clipping_planes_pars_fragment:_f,clipping_planes_pars_vertex:vf,clipping_planes_vertex:yf,color_fragment:xf,color_pars_fragment:Sf,color_pars_vertex:Mf,color_vertex:Ef,common:Tf,cube_uv_reflection_fragment:bf,defaultnormal_vertex:Cf,displacementmap_pars_vertex:Af,displacementmap_vertex:Rf,emissivemap_fragment:wf,emissivemap_pars_fragment:Pf,colorspace_fragment:Lf,colorspace_pars_fragment:If,envmap_fragment:Df,envmap_common_pars_fragment:Uf,envmap_pars_fragment:Nf,envmap_pars_vertex:Of,envmap_physical_pars_fragment:Yf,envmap_vertex:Ff,fog_vertex:Bf,fog_pars_vertex:kf,fog_fragment:zf,fog_pars_fragment:Hf,gradientmap_pars_fragment:Gf,lightmap_pars_fragment:Vf,lights_lambert_fragment:Wf,lights_lambert_pars_fragment:Xf,lights_pars_begin:$f,lights_toon_fragment:qf,lights_toon_pars_fragment:Kf,lights_phong_fragment:jf,lights_phong_pars_fragment:Jf,lights_physical_fragment:Zf,lights_physical_pars_fragment:Qf,lights_fragment_begin:ep,lights_fragment_maps:tp,lights_fragment_end:np,logdepthbuf_fragment:ip,logdepthbuf_pars_fragment:rp,logdepthbuf_pars_vertex:sp,logdepthbuf_vertex:op,map_fragment:ap,map_pars_fragment:cp,map_particle_fragment:lp,map_particle_pars_fragment:hp,metalnessmap_fragment:up,metalnessmap_pars_fragment:dp,morphinstance_vertex:fp,morphcolor_vertex:pp,morphnormal_vertex:mp,morphtarget_pars_vertex:gp,morphtarget_vertex:_p,normal_fragment_begin:vp,normal_fragment_maps:yp,normal_pars_fragment:xp,normal_pars_vertex:Sp,normal_vertex:Mp,normalmap_pars_fragment:Ep,clearcoat_normal_fragment_begin:Tp,clearcoat_normal_fragment_maps:bp,clearcoat_pars_fragment:Cp,iridescence_pars_fragment:Ap,opaque_fragment:Rp,packing:wp,premultiplied_alpha_fragment:Pp,project_vertex:Lp,dithering_fragment:Ip,dithering_pars_fragment:Dp,roughnessmap_fragment:Up,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Op,shadowmap_pars_vertex:Fp,shadowmap_vertex:Bp,shadowmask_pars_fragment:kp,skinbase_vertex:zp,skinning_pars_vertex:Hp,skinning_vertex:Gp,skinnormal_vertex:Vp,specularmap_fragment:Wp,specularmap_pars_fragment:Xp,tonemapping_fragment:$p,tonemapping_pars_fragment:Yp,transmission_fragment:qp,transmission_pars_fragment:Kp,uv_pars_fragment:jp,uv_pars_vertex:Jp,uv_vertex:Zp,worldpos_vertex:Qp,background_vert:em,background_frag:tm,backgroundCube_vert:nm,backgroundCube_frag:im,cube_vert:rm,cube_frag:sm,depth_vert:om,depth_frag:am,distanceRGBA_vert:cm,distanceRGBA_frag:lm,equirect_vert:hm,equirect_frag:um,linedashed_vert:dm,linedashed_frag:fm,meshbasic_vert:pm,meshbasic_frag:mm,meshlambert_vert:gm,meshlambert_frag:_m,meshmatcap_vert:vm,meshmatcap_frag:ym,meshnormal_vert:xm,meshnormal_frag:Sm,meshphong_vert:Mm,meshphong_frag:Em,meshphysical_vert:Tm,meshphysical_frag:bm,meshtoon_vert:Cm,meshtoon_frag:Am,points_vert:Rm,points_frag:wm,shadow_vert:Pm,shadow_frag:Lm,sprite_vert:Im,sprite_frag:Dm},te={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Zt={basic:{uniforms:Et([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Et([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new ke(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Et([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Et([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Et([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new ke(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Et([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Et([te.points,te.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Et([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Et([te.common,te.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Et([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Et([te.sprite,te.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Et([te.common,te.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Et([te.lights,te.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Zt.physical={uniforms:Et([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Br={r:0,b:0,g:0},Gn=new en,Um=new je;function Nm(r,e,t,n,i,s,o){const a=new ke(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function _(T){let E=!1;const y=g(T);y===null?p(a,c):y&&y.isColor&&(p(y,1),E=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(T,E){const y=g(E);y&&(y.isCubeTexture||y.mapping===Es)?(h===void 0&&(h=new nt(new Zn(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ii(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Gn.copy(E.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Um.makeRotationFromEuler(Gn)),h.material.toneMapped=Ge.getTransfer(y.colorSpace)!==Ye,(u!==y||d!==y.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new nt(new mr(2,2),new Un({name:"BackgroundMaterial",uniforms:Ii(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(y.colorSpace)!==Ye,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,E){T.getRGB(Br,lh(r)),n.buffers.color.setClear(Br.r,Br.g,Br.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),c=E,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:_,addToRenderList:m}}function Om(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(S,w,z,O,W){let K=!1;const V=u(O,z,w);s!==V&&(s=V,l(s.object)),K=f(S,O,z,W),K&&g(S,O,z,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(S,w,z,O),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return r.createVertexArray()}function l(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,w,z){const O=z.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let K=W[w.id];K===void 0&&(K={},W[w.id]=K);let V=K[O];return V===void 0&&(V=d(c()),K[O]=V),V}function d(S){const w=[],z=[],O=[];for(let W=0;W<t;W++)w[W]=0,z[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:z,attributeDivisors:O,object:S,attributes:{},index:null}}function f(S,w,z,O){const W=s.attributes,K=w.attributes;let V=0;const J=z.getAttributes();for(const G in J)if(J[G].location>=0){const he=W[G];let Se=K[G];if(Se===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Se=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Se=S.instanceColor)),he===void 0||he.attribute!==Se||Se&&he.data!==Se.data)return!0;V++}return s.attributesNum!==V||s.index!==O}function g(S,w,z,O){const W={},K=w.attributes;let V=0;const J=z.getAttributes();for(const G in J)if(J[G].location>=0){let he=K[G];he===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(he=S.instanceColor));const Se={};Se.attribute=he,he&&he.data&&(Se.data=he.data),W[G]=Se,V++}s.attributes=W,s.attributesNum=V,s.index=O}function _(){const S=s.newAttributes;for(let w=0,z=S.length;w<z;w++)S[w]=0}function m(S){p(S,0)}function p(S,w){const z=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;z[S]=1,O[S]===0&&(r.enableVertexAttribArray(S),O[S]=1),W[S]!==w&&(r.vertexAttribDivisor(S,w),W[S]=w)}function T(){const S=s.newAttributes,w=s.enabledAttributes;for(let z=0,O=w.length;z<O;z++)w[z]!==S[z]&&(r.disableVertexAttribArray(z),w[z]=0)}function E(S,w,z,O,W,K,V){V===!0?r.vertexAttribIPointer(S,w,z,W,K):r.vertexAttribPointer(S,w,z,O,W,K)}function y(S,w,z,O){_();const W=O.attributes,K=z.getAttributes(),V=w.defaultAttributeValues;for(const J in K){const G=K[J];if(G.location>=0){let ie=W[J];if(ie===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){const he=ie.normalized,Se=ie.itemSize,Ue=e.get(ie);if(Ue===void 0)continue;const Ke=Ue.buffer,$=Ue.type,ee=Ue.bytesPerElement,ve=$===r.INT||$===r.UNSIGNED_INT||ie.gpuType===Da;if(ie.isInterleavedBufferAttribute){const re=ie.data,be=re.stride,Re=ie.offset;if(re.isInstancedInterleavedBuffer){for(let Ne=0;Ne<G.locationSize;Ne++)p(G.location+Ne,re.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ne=0;Ne<G.locationSize;Ne++)m(G.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,Ke);for(let Ne=0;Ne<G.locationSize;Ne++)E(G.location+Ne,Se/G.locationSize,$,he,be*ee,(Re+Se/G.locationSize*Ne)*ee,ve)}else{if(ie.isInstancedBufferAttribute){for(let re=0;re<G.locationSize;re++)p(G.location+re,ie.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let re=0;re<G.locationSize;re++)m(G.location+re);r.bindBuffer(r.ARRAY_BUFFER,Ke);for(let re=0;re<G.locationSize;re++)E(G.location+re,Se/G.locationSize,$,he,Se*ee,Se/G.locationSize*re*ee,ve)}}else if(V!==void 0){const he=V[J];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(G.location,he);break;case 3:r.vertexAttrib3fv(G.location,he);break;case 4:r.vertexAttrib4fv(G.location,he);break;default:r.vertexAttrib1fv(G.location,he)}}}}T()}function R(){L();for(const S in n){const w=n[S];for(const z in w){const O=w[z];for(const W in O)h(O[W].object),delete O[W];delete w[z]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const w=n[S.id];for(const z in w){const O=w[z];for(const W in O)h(O[W].object),delete O[W];delete w[z]}delete n[S.id]}function A(S){for(const w in n){const z=n[w];if(z[S.id]===void 0)continue;const O=z[S.id];for(const W in O)h(O[W].object),delete O[W];delete z[S.id]}}function L(){M(),o=!0,s!==i&&(s=i,l(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Fm(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Bm(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Kt&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==mn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==dn&&!L)}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:R,maxSamples:C}}function km(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Tn,a=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const T=s?0:n,E=T*4;let y=p.clippingState||null;c.value=y,y=h(g,d,E,f);for(let R=0;R!==E;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=f;E!==_;++E,y+=4)o.copy(u[E]).applyMatrix4(T,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function zm(r){let e=new WeakMap;function t(o,a){return a===No?o.mapping=Ri:a===Oo&&(o.mapping=wi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===No||a===Oo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new jd(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ha extends hh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mi=4,zc=[.125,.215,.35,.446,.526,.582],$n=20,io=new Ha,Hc=new ke;let ro=null,so=0,oo=0,ao=!1;const Wn=(1+Math.sqrt(5))/2,gi=1/Wn,Gc=[new P(-Wn,gi,0),new P(Wn,gi,0),new P(-gi,0,Wn),new P(gi,0,Wn),new P(0,Wn,-gi),new P(0,Wn,gi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,so,oo),this._renderer.xr.enabled=ao,e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:ur,format:Kt,colorSpace:Bi,depthBuffer:!1},i=Wc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hm(s)),this._blurMaterial=Gm(s,e,t)}return i}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,n,i){const a=new kt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Hc),h.toneMapping=Pn,h.autoClear=!1;const f=new Rt({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),g=new nt(new Zn,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Hc),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):T===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const E=this._cubeSize;kr(i,T*E,p>2?E:0,E,E),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ri||e.mapping===wi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;kr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,io)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Gc[(i-s-1)%Gc.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new nt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*$n-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):$n;m>$n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const p=[];let T=0;for(let A=0;A<$n;++A){const L=A/_,M=Math.exp(-L*L/2);p.push(M),A===0?T+=M:A<m&&(T+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const y=this._sizeLods[i],R=3*y*(i>E-Mi?i-E+Mi:0),C=4*(this._cubeSize-y);kr(t,R,C,3*y,2*y),c.setRenderTarget(t),c.render(u,io)}}function Hm(r){const e=[],t=[],n=[];let i=r;const s=r-Mi+1+zc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Mi?c=zc[o-r+Mi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*f),E=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let C=0;C<f;C++){const A=C%3*2/3-1,L=C>2?0:-1,M=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];T.set(M,_*g*C),E.set(d,m*g*C);const S=[C,C,C,C,C,C];y.set(S,p*g*C)}const R=new pt;R.setAttribute("position",new Ht(T,_)),R.setAttribute("uv",new Ht(E,m)),R.setAttribute("faceIndex",new Ht(y,p)),e.push(R),i>Mi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wc(r,e,t){const n=new Jn(r,e,t);return n.texture.mapping=Es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Gm(r,e,t){const n=new Float32Array($n),i=new P(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Xc(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function $c(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ga(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vm(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===No||c===Oo,h=c===Ri||c===wi;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Vc(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Vc(r)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Wm(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Qi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xm(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const T=f.array;_=f.version;for(let E=0,y=T.length;E<y;E+=3){const R=T[E+0],C=T[E+1],A=T[E+2];d.push(R,C,C,A,A,R)}}else if(g!==void 0){const T=g.array;_=g.version;for(let E=0,y=T.length/3-1;E<y;E+=3){const R=E+0,C=E+1,A=E+2;d.push(R,C,C,A,A,R)}}else return;const m=new(ih(d)?ch:ah)(d,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function $m(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*_[T];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ym(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qm(r,e,t){const n=new WeakMap,i=new ot;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let R=a.attributes.position.count*y,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*C*4*u),L=new sh(A,R,C,u);L.type=dn,L.needsUpdate=!0;const M=y*4;for(let w=0;w<u;w++){const z=p[w],O=T[w],W=E[w],K=R*C*4*w;for(let V=0;V<z.count;V++){const J=V*M;g===!0&&(i.fromBufferAttribute(z,V),A[K+J+0]=i.x,A[K+J+1]=i.y,A[K+J+2]=i.z,A[K+J+3]=0),_===!0&&(i.fromBufferAttribute(O,V),A[K+J+4]=i.x,A[K+J+5]=i.y,A[K+J+6]=i.z,A[K+J+7]=0),m===!0&&(i.fromBufferAttribute(W,V),A[K+J+8]=i.x,A[K+J+9]=i.y,A[K+J+10]=i.z,A[K+J+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:L,size:new ce(R,C)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Km(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class fh extends xt{constructor(e,t,n,i,s,o,a,c,l,h=Ti){if(h!==Ti&&h!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ti&&(n=jn),n===void 0&&h===Li&&(n=Pi),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ph=new xt,Yc=new fh(1,1),mh=new sh,gh=new Ud,_h=new uh,qc=[],Kc=[],jc=new Float32Array(16),Jc=new Float32Array(9),Zc=new Float32Array(4);function zi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=qc[i];if(s===void 0&&(s=new Float32Array(i),qc[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function ut(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function dt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Cs(r,e){let t=Kc[e];t===void 0&&(t=new Int32Array(e),Kc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function jm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Jm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2fv(this.addr,e),dt(t,e)}}function Zm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;r.uniform3fv(this.addr,e),dt(t,e)}}function Qm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4fv(this.addr,e),dt(t,e)}}function eg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;Zc.set(n),r.uniformMatrix2fv(this.addr,!1,Zc),dt(t,n)}}function tg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;Jc.set(n),r.uniformMatrix3fv(this.addr,!1,Jc),dt(t,n)}}function ng(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;jc.set(n),r.uniformMatrix4fv(this.addr,!1,jc),dt(t,n)}}function ig(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function rg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2iv(this.addr,e),dt(t,e)}}function sg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;r.uniform3iv(this.addr,e),dt(t,e)}}function og(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4iv(this.addr,e),dt(t,e)}}function ag(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function cg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2uiv(this.addr,e),dt(t,e)}}function lg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;r.uniform3uiv(this.addr,e),dt(t,e)}}function hg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4uiv(this.addr,e),dt(t,e)}}function ug(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Yc.compareFunction=nh,s=Yc):s=ph,t.setTexture2D(e||s,i)}function dg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||gh,i)}function fg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||_h,i)}function pg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||mh,i)}function mg(r){switch(r){case 5126:return jm;case 35664:return Jm;case 35665:return Zm;case 35666:return Qm;case 35674:return eg;case 35675:return tg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return rg;case 35668:case 35672:return sg;case 35669:case 35673:return og;case 5125:return ag;case 36294:return cg;case 36295:return lg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}function gg(r,e){r.uniform1fv(this.addr,e)}function _g(r,e){const t=zi(e,this.size,2);r.uniform2fv(this.addr,t)}function vg(r,e){const t=zi(e,this.size,3);r.uniform3fv(this.addr,t)}function yg(r,e){const t=zi(e,this.size,4);r.uniform4fv(this.addr,t)}function xg(r,e){const t=zi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Sg(r,e){const t=zi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Mg(r,e){const t=zi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Eg(r,e){r.uniform1iv(this.addr,e)}function Tg(r,e){r.uniform2iv(this.addr,e)}function bg(r,e){r.uniform3iv(this.addr,e)}function Cg(r,e){r.uniform4iv(this.addr,e)}function Ag(r,e){r.uniform1uiv(this.addr,e)}function Rg(r,e){r.uniform2uiv(this.addr,e)}function wg(r,e){r.uniform3uiv(this.addr,e)}function Pg(r,e){r.uniform4uiv(this.addr,e)}function Lg(r,e,t){const n=this.cache,i=e.length,s=Cs(t,i);ut(n,s)||(r.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ph,s[o])}function Ig(r,e,t){const n=this.cache,i=e.length,s=Cs(t,i);ut(n,s)||(r.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||gh,s[o])}function Dg(r,e,t){const n=this.cache,i=e.length,s=Cs(t,i);ut(n,s)||(r.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||_h,s[o])}function Ug(r,e,t){const n=this.cache,i=e.length,s=Cs(t,i);ut(n,s)||(r.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||mh,s[o])}function Ng(r){switch(r){case 5126:return gg;case 35664:return _g;case 35665:return vg;case 35666:return yg;case 35674:return xg;case 35675:return Sg;case 35676:return Mg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return bg;case 35669:case 35673:return Cg;case 5125:return Ag;case 36294:return Rg;case 36295:return wg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ug}}class Og{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mg(t.type)}}class Fg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ng(t.type)}}class Bg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const co=/(\w+)(\])?(\[|\.)?/g;function Qc(r,e){r.seq.push(e),r.map[e.id]=e}function kg(r,e,t){const n=r.name,i=n.length;for(co.lastIndex=0;;){const s=co.exec(n),o=co.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Qc(t,l===void 0?new Og(a,r,e):new Fg(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Bg(a),Qc(t,u)),t=u}}}class cs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);kg(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function el(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const zg=37297;let Hg=0;function Gg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const tl=new Le;function Vg(r){Ge._getMatrix(tl,Ge.workingColorSpace,r);const e=`mat3( ${tl.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(r)){case Ts:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function nl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Gg(r.getShaderSource(e),o)}else return i}function Wg(r,e){const t=Vg(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xg(r,e){let t;switch(e){case ad:t="Linear";break;case cd:t="Reinhard";break;case ld:t="Cineon";break;case hd:t="ACESFilmic";break;case dd:t="AgX";break;case fd:t="Neutral";break;case ud:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zr=new P;function $g(){Ge.getLuminanceCoefficients(zr);const r=zr.x.toFixed(4),e=zr.y.toFixed(4),t=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function qg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kg(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function er(r){return r!==""}function il(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(r){return r.replace(jg,Zg)}const Jg=new Map;function Zg(r,e){let t=De[e];if(t===void 0){const n=Jg.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fa(t)}const Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sl(r){return r.replace(Qg,e_)}function e_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ol(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function t_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Gl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===zu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function n_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ri:case wi:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function i_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case wi:e="ENVMAP_MODE_REFRACTION";break}return e}function r_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Vl:e="ENVMAP_BLENDING_MULTIPLY";break;case sd:e="ENVMAP_BLENDING_MIX";break;case od:e="ENVMAP_BLENDING_ADD";break}return e}function s_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function o_(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=t_(t),l=n_(t),h=i_(t),u=r_(t),d=s_(t),f=Yg(t),g=qg(s),_=i.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),p.length>0&&(p+=`
`)):(m=[ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),p=[ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?De.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Xg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Wg("linearToOutputTexel",t.outputColorSpace),$g(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),o=fa(o),o=il(o,t),o=rl(o,t),a=fa(a),a=il(a,t),a=rl(a,t),o=sl(o),a=sl(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+m+o,y=T+p+a,R=el(i,i.VERTEX_SHADER,E),C=el(i,i.FRAGMENT_SHADER,y);i.attachShader(_,R),i.attachShader(_,C),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(w){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(R).trim(),W=i.getShaderInfoLog(C).trim();let K=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,R,C);else{const J=nl(i,R,"vertex"),G=nl(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+z+`
`+J+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||W==="")&&(V=!1);V&&(w.diagnostics={runnable:K,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(R),i.deleteShader(C),L=new cs(i,_),M=Kg(i,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,zg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let a_=0;class c_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new l_(e),t.set(e,n)),n}}class l_{constructor(e){this.id=a_++,this.code=e,this.usedTimes=0}}function h_(r,e,t,n,i,s,o){const a=new ka,c=new c_,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,w,z,O){const W=z.fog,K=O.geometry,V=M.isMeshStandardMaterial?z.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),G=J&&J.mapping===Es?J.image.height:null,ie=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const he=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Se=he!==void 0?he.length:0;let Ue=0;K.morphAttributes.position!==void 0&&(Ue=1),K.morphAttributes.normal!==void 0&&(Ue=2),K.morphAttributes.color!==void 0&&(Ue=3);let Ke,$,ee,ve;if(ie){const $e=Zt[ie];Ke=$e.vertexShader,$=$e.fragmentShader}else Ke=M.vertexShader,$=M.fragmentShader,c.update(M),ee=c.getVertexShaderID(M),ve=c.getFragmentShaderID(M);const re=r.getRenderTarget(),be=r.state.buffers.depth.getReversed(),Re=O.isInstancedMesh===!0,Ne=O.isBatchedMesh===!0,it=!!M.map,ze=!!M.matcap,at=!!J,N=!!M.aoMap,Nt=!!M.lightMap,Oe=!!M.bumpMap,Fe=!!M.normalMap,Ee=!!M.displacementMap,Qe=!!M.emissiveMap,Me=!!M.metalnessMap,b=!!M.roughnessMap,v=M.anisotropy>0,F=M.clearcoat>0,Y=M.dispersion>0,j=M.iridescence>0,X=M.sheen>0,ye=M.transmission>0,se=v&&!!M.anisotropyMap,ue=F&&!!M.clearcoatMap,He=F&&!!M.clearcoatNormalMap,Z=F&&!!M.clearcoatRoughnessMap,de=j&&!!M.iridescenceMap,Te=j&&!!M.iridescenceThicknessMap,Ce=X&&!!M.sheenColorMap,fe=X&&!!M.sheenRoughnessMap,Be=!!M.specularMap,Ie=!!M.specularColorMap,Je=!!M.specularIntensityMap,I=ye&&!!M.transmissionMap,ne=ye&&!!M.thicknessMap,H=!!M.gradientMap,q=!!M.alphaMap,le=M.alphaTest>0,oe=!!M.alphaHash,we=!!M.extensions;let st=Pn;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(st=r.toneMapping);const gt={shaderID:ie,shaderType:M.type,shaderName:M.name,vertexShader:Ke,fragmentShader:$,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&O._colorsTexture!==null,instancing:Re,instancingColor:Re&&O.instanceColor!==null,instancingMorph:Re&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Bi,alphaToCoverage:!!M.alphaToCoverage,map:it,matcap:ze,envMap:at,envMapMode:at&&J.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:Nt,bumpMap:Oe,normalMap:Fe,displacementMap:d&&Ee,emissiveMap:Qe,normalMapObjectSpace:Fe&&M.normalMapType===_d,normalMapTangentSpace:Fe&&M.normalMapType===th,metalnessMap:Me,roughnessMap:b,anisotropy:v,anisotropyMap:se,clearcoat:F,clearcoatMap:ue,clearcoatNormalMap:He,clearcoatRoughnessMap:Z,dispersion:Y,iridescence:j,iridescenceMap:de,iridescenceThicknessMap:Te,sheen:X,sheenColorMap:Ce,sheenRoughnessMap:fe,specularMap:Be,specularColorMap:Ie,specularIntensityMap:Je,transmission:ye,transmissionMap:I,thicknessMap:ne,gradientMap:H,opaque:M.transparent===!1&&M.blending===Ei&&M.alphaToCoverage===!1,alphaMap:q,alphaTest:le,alphaHash:oe,combine:M.combine,mapUv:it&&_(M.map.channel),aoMapUv:N&&_(M.aoMap.channel),lightMapUv:Nt&&_(M.lightMap.channel),bumpMapUv:Oe&&_(M.bumpMap.channel),normalMapUv:Fe&&_(M.normalMap.channel),displacementMapUv:Ee&&_(M.displacementMap.channel),emissiveMapUv:Qe&&_(M.emissiveMap.channel),metalnessMapUv:Me&&_(M.metalnessMap.channel),roughnessMapUv:b&&_(M.roughnessMap.channel),anisotropyMapUv:se&&_(M.anisotropyMap.channel),clearcoatMapUv:ue&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:He&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(M.sheenRoughnessMap.channel),specularMapUv:Be&&_(M.specularMap.channel),specularColorMapUv:Ie&&_(M.specularColorMap.channel),specularIntensityMapUv:Je&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:ne&&_(M.thicknessMap.channel),alphaMapUv:q&&_(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Fe||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!K.attributes.uv&&(it||q),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:be,skinning:O.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ue,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&w.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,decodeVideoTexture:it&&M.map.isVideoTexture===!0&&Ge.getTransfer(M.map.colorSpace)===Ye,decodeVideoTextureEmissive:Qe&&M.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(M.emissiveMap.colorSpace)===Ye,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Yt,flipSided:M.side===wt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:we&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&M.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const w in M.defines)S.push(w),S.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(T(S,M),E(S,M),S.push(r.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function T(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function E(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const S=g[M.type];let w;if(S){const z=Zt[S];w=$d.clone(z.uniforms)}else w=M.uniforms;return w}function R(M,S){let w;for(let z=0,O=h.length;z<O;z++){const W=h[z];if(W.cacheKey===S){w=W,++w.usedTimes;break}}return w===void 0&&(w=new o_(r,S,M,s),h.push(w)),w}function C(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function A(M){c.remove(M)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:C,releaseShaderCache:A,programs:h,dispose:L}}function u_(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function d_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function al(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function cl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||d_),n.length>1&&n.sort(d||al),i.length>1&&i.sort(d||al)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function f_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new cl,r.set(n,[o])):i>=s.length?(o=new cl,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function p_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ke};break;case"SpotLight":t={position:new P,direction:new P,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function m_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let g_=0;function __(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function v_(r){const e=new p_,t=m_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,s=new je,o=new je;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,T=0,E=0,y=0,R=0,C=0,A=0;l.sort(__);for(let M=0,S=l.length;M<S;M++){const w=l[M],z=w.color,O=w.intensity,W=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=z.r*O,u+=z.g*O,d+=z.b*O;else if(w.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(w.sh.coefficients[V],O);A++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const J=w.shadow,G=t.get(w);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=w.shadow.matrix,T++}n.directional[f]=V,f++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(z).multiplyScalar(O),V.distance=W,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,n.spot[_]=V;const J=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,J.updateMatrices(w),w.castShadow&&C++),n.spotLightMatrix[_]=J.matrix,w.castShadow){const G=t.get(w);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=K,y++}_++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(z).multiplyScalar(O),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=V,m++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const J=w.shadow,G=t.get(w);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=w.shadow.matrix,E++}n.point[g]=V,g++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(O),V.groundColor.copy(w.groundColor).multiplyScalar(O),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==T||L.numPointShadows!==E||L.numSpotShadows!==y||L.numSpotMaps!==R||L.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+R-C,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=T,L.numPointShadows=E,L.numSpotShadows=y,L.numSpotMaps=R,L.numLightProbes=A,n.version=g_++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const E=l[p];if(E.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(E.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function ll(r){const e=new v_(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function y_(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new ll(r),e.set(i,[a])):s>=o.length?(a=new ll(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class x_ extends Nn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class S_ extends Nn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const M_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function T_(r,e,t){let n=new za;const i=new ce,s=new ce,o=new ot,a=new x_({depthPacking:gd}),c=new S_,l={},h=t.maxTextureSize,u={[Dn]:wt,[wt]:Dn,[Yt]:Yt},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:M_,fragmentShader:E_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new pt;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let p=this.type;this.render=function(C,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=r.getRenderTarget(),S=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),z=r.state;z.setBlending(wn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==un&&this.type===un,W=p===un&&this.type!==un;for(let K=0,V=C.length;K<V;K++){const J=C[K],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ie=G.getFrameExtents();if(i.multiply(ie),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ie.x),i.x=s.x*ie.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ie.y),i.y=s.y*ie.y,G.mapSize.y=s.y)),G.map===null||O===!0||W===!0){const Se=this.type!==un?{minFilter:jt,magFilter:jt}:{};G.map!==null&&G.map.dispose(),G.map=new Jn(i.x,i.y,Se),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const he=G.getViewportCount();for(let Se=0;Se<he;Se++){const Ue=G.getViewport(Se);o.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),z.viewport(o),G.updateMatrices(J,Se),n=G.getFrustum(),y(A,L,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===un&&T(G,L),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,S,w)};function T(C,A){const L=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Jn(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(A,null,L,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(A,null,L,f,_,null)}function E(C,A,L,M){let S=null;const w=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)S=w;else if(S=L.isPointLight===!0?c:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=S.uuid,O=A.uuid;let W=l[z];W===void 0&&(W={},l[z]=W);let K=W[O];K===void 0&&(K=S.clone(),W[O]=K,A.addEventListener("dispose",R)),S=K}if(S.visible=A.visible,S.wireframe=A.wireframe,M===un?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=r.properties.get(S);z.light=L}return S}function y(C,A,L,M,S){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===un)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const O=e.update(C),W=C.material;if(Array.isArray(W)){const K=O.groups;for(let V=0,J=K.length;V<J;V++){const G=K[V],ie=W[G.materialIndex];if(ie&&ie.visible){const he=E(C,ie,M,S);C.onBeforeShadow(r,C,A,L,O,he,G),r.renderBufferDirect(L,null,O,he,C,G),C.onAfterShadow(r,C,A,L,O,he,G)}}}else if(W.visible){const K=E(C,W,M,S);C.onBeforeShadow(r,C,A,L,O,K,null),r.renderBufferDirect(L,null,O,K,C,null),C.onAfterShadow(r,C,A,L,O,K,null)}}const z=C.children;for(let O=0,W=z.length;O<W;O++)y(z[O],A,L,M,S)}function R(C){C.target.removeEventListener("dispose",R);for(const L in l){const M=l[L],S=C.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const b_={[Ro]:wo,[Po]:Do,[Lo]:Uo,[Ai]:Io,[wo]:Ro,[Do]:Po,[Uo]:Lo,[Io]:Ai};function C_(r,e){function t(){let I=!1;const ne=new ot;let H=null;const q=new ot(0,0,0,0);return{setMask:function(le){H!==le&&!I&&(r.colorMask(le,le,le,le),H=le)},setLocked:function(le){I=le},setClear:function(le,oe,we,st,gt){gt===!0&&(le*=st,oe*=st,we*=st),ne.set(le,oe,we,st),q.equals(ne)===!1&&(r.clearColor(le,oe,we,st),q.copy(ne))},reset:function(){I=!1,H=null,q.set(-1,0,0,0)}}}function n(){let I=!1,ne=!1,H=null,q=null,le=null;return{setReversed:function(oe){if(ne!==oe){const we=e.get("EXT_clip_control");ne?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT);const st=le;le=null,this.setClear(st)}ne=oe},getReversed:function(){return ne},setTest:function(oe){oe?re(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(oe){H!==oe&&!I&&(r.depthMask(oe),H=oe)},setFunc:function(oe){if(ne&&(oe=b_[oe]),q!==oe){switch(oe){case Ro:r.depthFunc(r.NEVER);break;case wo:r.depthFunc(r.ALWAYS);break;case Po:r.depthFunc(r.LESS);break;case Ai:r.depthFunc(r.LEQUAL);break;case Lo:r.depthFunc(r.EQUAL);break;case Io:r.depthFunc(r.GEQUAL);break;case Do:r.depthFunc(r.GREATER);break;case Uo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}q=oe}},setLocked:function(oe){I=oe},setClear:function(oe){le!==oe&&(ne&&(oe=1-oe),r.clearDepth(oe),le=oe)},reset:function(){I=!1,H=null,q=null,le=null,ne=!1}}}function i(){let I=!1,ne=null,H=null,q=null,le=null,oe=null,we=null,st=null,gt=null;return{setTest:function($e){I||($e?re(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function($e){ne!==$e&&!I&&(r.stencilMask($e),ne=$e)},setFunc:function($e,Gt,rn){(H!==$e||q!==Gt||le!==rn)&&(r.stencilFunc($e,Gt,rn),H=$e,q=Gt,le=rn)},setOp:function($e,Gt,rn){(oe!==$e||we!==Gt||st!==rn)&&(r.stencilOp($e,Gt,rn),oe=$e,we=Gt,st=rn)},setLocked:function($e){I=$e},setClear:function($e){gt!==$e&&(r.clearStencil($e),gt=$e)},reset:function(){I=!1,ne=null,H=null,q=null,le=null,oe=null,we=null,st=null,gt=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,E=null,y=null,R=null,C=null,A=new ke(0,0,0),L=0,M=!1,S=null,w=null,z=null,O=null,W=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,J=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=J>=2);let ie=null,he={};const Se=r.getParameter(r.SCISSOR_BOX),Ue=r.getParameter(r.VIEWPORT),Ke=new ot().fromArray(Se),$=new ot().fromArray(Ue);function ee(I,ne,H,q){const le=new Uint8Array(4),oe=r.createTexture();r.bindTexture(I,oe),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let we=0;we<H;we++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ne,0,r.RGBA,1,1,q,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(ne+we,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return oe}const ve={};ve[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),ve[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ve[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(r.DEPTH_TEST),o.setFunc(Ai),Oe(!1),Fe(mc),re(r.CULL_FACE),N(wn);function re(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function be(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function Re(I,ne){return u[I]!==ne?(r.bindFramebuffer(I,ne),u[I]=ne,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ne),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ne(I,ne){let H=f,q=!1;if(I){H=d.get(ne),H===void 0&&(H=[],d.set(ne,H));const le=I.textures;if(H.length!==le.length||H[0]!==r.COLOR_ATTACHMENT0){for(let oe=0,we=le.length;oe<we;oe++)H[oe]=r.COLOR_ATTACHMENT0+oe;H.length=le.length,q=!0}}else H[0]!==r.BACK&&(H[0]=r.BACK,q=!0);q&&r.drawBuffers(H)}function it(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const ze={[Xn]:r.FUNC_ADD,[Gu]:r.FUNC_SUBTRACT,[Vu]:r.FUNC_REVERSE_SUBTRACT};ze[Wu]=r.MIN,ze[Xu]=r.MAX;const at={[$u]:r.ZERO,[Yu]:r.ONE,[qu]:r.SRC_COLOR,[Co]:r.SRC_ALPHA,[ed]:r.SRC_ALPHA_SATURATE,[Zu]:r.DST_COLOR,[ju]:r.DST_ALPHA,[Ku]:r.ONE_MINUS_SRC_COLOR,[Ao]:r.ONE_MINUS_SRC_ALPHA,[Qu]:r.ONE_MINUS_DST_COLOR,[Ju]:r.ONE_MINUS_DST_ALPHA,[td]:r.CONSTANT_COLOR,[nd]:r.ONE_MINUS_CONSTANT_COLOR,[id]:r.CONSTANT_ALPHA,[rd]:r.ONE_MINUS_CONSTANT_ALPHA};function N(I,ne,H,q,le,oe,we,st,gt,$e){if(I===wn){_===!0&&(be(r.BLEND),_=!1);return}if(_===!1&&(re(r.BLEND),_=!0),I!==Hu){if(I!==m||$e!==M){if((p!==Xn||y!==Xn)&&(r.blendEquation(r.FUNC_ADD),p=Xn,y=Xn),$e)switch(I){case Ei:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bo:r.blendFunc(r.ONE,r.ONE);break;case gc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _c:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ei:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case gc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _c:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,E=null,R=null,C=null,A.set(0,0,0),L=0,m=I,M=$e}return}le=le||ne,oe=oe||H,we=we||q,(ne!==p||le!==y)&&(r.blendEquationSeparate(ze[ne],ze[le]),p=ne,y=le),(H!==T||q!==E||oe!==R||we!==C)&&(r.blendFuncSeparate(at[H],at[q],at[oe],at[we]),T=H,E=q,R=oe,C=we),(st.equals(A)===!1||gt!==L)&&(r.blendColor(st.r,st.g,st.b,gt),A.copy(st),L=gt),m=I,M=!1}function Nt(I,ne){I.side===Yt?be(r.CULL_FACE):re(r.CULL_FACE);let H=I.side===wt;ne&&(H=!H),Oe(H),I.blending===Ei&&I.transparent===!1?N(wn):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const q=I.stencilWrite;a.setTest(q),q&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Qe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(I){S!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),S=I)}function Fe(I){I!==Bu?(re(r.CULL_FACE),I!==w&&(I===mc?r.cullFace(r.BACK):I===ku?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),w=I}function Ee(I){I!==z&&(V&&r.lineWidth(I),z=I)}function Qe(I,ne,H){I?(re(r.POLYGON_OFFSET_FILL),(O!==ne||W!==H)&&(r.polygonOffset(ne,H),O=ne,W=H)):be(r.POLYGON_OFFSET_FILL)}function Me(I){I?re(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function b(I){I===void 0&&(I=r.TEXTURE0+K-1),ie!==I&&(r.activeTexture(I),ie=I)}function v(I,ne,H){H===void 0&&(ie===null?H=r.TEXTURE0+K-1:H=ie);let q=he[H];q===void 0&&(q={type:void 0,texture:void 0},he[H]=q),(q.type!==I||q.texture!==ne)&&(ie!==H&&(r.activeTexture(H),ie=H),r.bindTexture(I,ne||ve[I]),q.type=I,q.texture=ne)}function F(){const I=he[ie];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function He(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(I){Ke.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Ke.copy(I))}function fe(I){$.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Be(I,ne){let H=l.get(ne);H===void 0&&(H=new WeakMap,l.set(ne,H));let q=H.get(I);q===void 0&&(q=r.getUniformBlockIndex(ne,I.name),H.set(I,q))}function Ie(I,ne){const q=l.get(ne).get(I);c.get(ne)!==q&&(r.uniformBlockBinding(ne,q,I.__bindingPointIndex),c.set(ne,q))}function Je(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ie=null,he={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,E=null,y=null,R=null,C=null,A=new ke(0,0,0),L=0,M=!1,S=null,w=null,z=null,O=null,W=null,Ke.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:be,bindFramebuffer:Re,drawBuffers:Ne,useProgram:it,setBlending:N,setMaterial:Nt,setFlipSided:Oe,setCullFace:Fe,setLineWidth:Ee,setPolygonOffset:Qe,setScissorTest:Me,activeTexture:b,bindTexture:v,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:de,texImage3D:Te,updateUBOMapping:Be,uniformBlockBinding:Ie,texStorage2D:He,texStorage3D:Z,texSubImage2D:X,texSubImage3D:ye,compressedTexSubImage2D:se,compressedTexSubImage3D:ue,scissor:Ce,viewport:fe,reset:Je}}function hl(r,e,t,n){const i=A_(n);switch(t){case ql:return r*e;case jl:return r*e;case Jl:return r*e*2;case Zl:return r*e/i.components*i.byteLength;case Oa:return r*e/i.components*i.byteLength;case Ql:return r*e*2/i.components*i.byteLength;case Fa:return r*e*2/i.components*i.byteLength;case Kl:return r*e*3/i.components*i.byteLength;case Kt:return r*e*4/i.components*i.byteLength;case Ba:return r*e*4/i.components*i.byteLength;case ns:case is:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case rs:case ss:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zo:case Go:return Math.max(r,16)*Math.max(e,8)/4;case ko:case Ho:return Math.max(r,8)*Math.max(e,8)/2;case Vo:case Wo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case qo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case jo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ea:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ta:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case na:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ia:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ra:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case sa:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case os:case oa:case aa:return Math.ceil(r/4)*Math.ceil(e/4)*16;case eh:case ca:return Math.ceil(r/4)*Math.ceil(e/4)*8;case la:case ha:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function A_(r){switch(r){case mn:case Xl:return{byteLength:1,components:1};case ar:case $l:case ur:return{byteLength:2,components:1};case Ua:case Na:return{byteLength:2,components:4};case jn:case Da:case dn:return{byteLength:4,components:1};case Yl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function R_(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return f?new OffscreenCanvas(b,v):cr("canvas")}function _(b,v,F){let Y=1;const j=Me(b);if((j.width>F||j.height>F)&&(Y=F/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const X=Math.floor(Y*j.width),ye=Math.floor(Y*j.height);u===void 0&&(u=g(X,ye));const se=v?g(X,ye):u;return se.width=X,se.height=ye,se.getContext("2d").drawImage(b,0,0,X,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+ye+")."),se}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){r.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?r.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(b,v,F,Y,j=!1){if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=v;if(v===r.RED&&(F===r.FLOAT&&(X=r.R32F),F===r.HALF_FLOAT&&(X=r.R16F),F===r.UNSIGNED_BYTE&&(X=r.R8)),v===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.R8UI),F===r.UNSIGNED_SHORT&&(X=r.R16UI),F===r.UNSIGNED_INT&&(X=r.R32UI),F===r.BYTE&&(X=r.R8I),F===r.SHORT&&(X=r.R16I),F===r.INT&&(X=r.R32I)),v===r.RG&&(F===r.FLOAT&&(X=r.RG32F),F===r.HALF_FLOAT&&(X=r.RG16F),F===r.UNSIGNED_BYTE&&(X=r.RG8)),v===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RG8UI),F===r.UNSIGNED_SHORT&&(X=r.RG16UI),F===r.UNSIGNED_INT&&(X=r.RG32UI),F===r.BYTE&&(X=r.RG8I),F===r.SHORT&&(X=r.RG16I),F===r.INT&&(X=r.RG32I)),v===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RGB8UI),F===r.UNSIGNED_SHORT&&(X=r.RGB16UI),F===r.UNSIGNED_INT&&(X=r.RGB32UI),F===r.BYTE&&(X=r.RGB8I),F===r.SHORT&&(X=r.RGB16I),F===r.INT&&(X=r.RGB32I)),v===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),F===r.UNSIGNED_INT&&(X=r.RGBA32UI),F===r.BYTE&&(X=r.RGBA8I),F===r.SHORT&&(X=r.RGBA16I),F===r.INT&&(X=r.RGBA32I)),v===r.RGB&&F===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),v===r.RGBA){const ye=j?Ts:Ge.getTransfer(Y);F===r.FLOAT&&(X=r.RGBA32F),F===r.HALF_FLOAT&&(X=r.RGBA16F),F===r.UNSIGNED_BYTE&&(X=ye===Ye?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(b,v){let F;return b?v===null||v===jn||v===Pi?F=r.DEPTH24_STENCIL8:v===dn?F=r.DEPTH32F_STENCIL8:v===ar&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===jn||v===Pi?F=r.DEPTH_COMPONENT24:v===dn?F=r.DEPTH_COMPONENT32F:v===ar&&(F=r.DEPTH_COMPONENT16),F}function R(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==jt&&b.minFilter!==qt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function C(b){const v=b.target;v.removeEventListener("dispose",C),L(v),v.isVideoTexture&&h.delete(v)}function A(b){const v=b.target;v.removeEventListener("dispose",A),S(v)}function L(b){const v=n.get(b);if(v.__webglInit===void 0)return;const F=b.source,Y=d.get(F);if(Y){const j=Y[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(b),Object.keys(Y).length===0&&d.delete(F)}n.remove(b)}function M(b){const v=n.get(b);r.deleteTexture(v.__webglTexture);const F=b.source,Y=d.get(F);delete Y[v.__cacheKey],o.memory.textures--}function S(b){const v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let j=0;j<v.__webglFramebuffer[Y].length;j++)r.deleteFramebuffer(v.__webglFramebuffer[Y][j]);else r.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)r.deleteFramebuffer(v.__webglFramebuffer[Y]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=b.textures;for(let Y=0,j=F.length;Y<j;Y++){const X=n.get(F[Y]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(F[Y])}n.remove(b)}let w=0;function z(){w=0}function O(){const b=w;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),w+=1,b}function W(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function K(b,v){const F=n.get(b);if(b.isVideoTexture&&Ee(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,b,v);return}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+v)}function V(b,v){const F=n.get(b);if(b.version>0&&F.__version!==b.version){$(F,b,v);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+v)}function J(b,v){const F=n.get(b);if(b.version>0&&F.__version!==b.version){$(F,b,v);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+v)}function G(b,v){const F=n.get(b);if(b.version>0&&F.__version!==b.version){ee(F,b,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+v)}const ie={[Fo]:r.REPEAT,[qn]:r.CLAMP_TO_EDGE,[Bo]:r.MIRRORED_REPEAT},he={[jt]:r.NEAREST,[pd]:r.NEAREST_MIPMAP_NEAREST,[xr]:r.NEAREST_MIPMAP_LINEAR,[qt]:r.LINEAR,[Ns]:r.LINEAR_MIPMAP_NEAREST,[Kn]:r.LINEAR_MIPMAP_LINEAR},Se={[vd]:r.NEVER,[Td]:r.ALWAYS,[yd]:r.LESS,[nh]:r.LEQUAL,[xd]:r.EQUAL,[Ed]:r.GEQUAL,[Sd]:r.GREATER,[Md]:r.NOTEQUAL};function Ue(b,v){if(v.type===dn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===qt||v.magFilter===Ns||v.magFilter===xr||v.magFilter===Kn||v.minFilter===qt||v.minFilter===Ns||v.minFilter===xr||v.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(b,r.TEXTURE_WRAP_S,ie[v.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,ie[v.wrapT]),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,ie[v.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,he[v.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,he[v.minFilter]),v.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,Se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===jt||v.minFilter!==xr&&v.minFilter!==Kn||v.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ke(b,v){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",C));const Y=v.source;let j=d.get(Y);j===void 0&&(j={},d.set(Y,j));const X=W(v);if(X!==b.__cacheKey){j[X]===void 0&&(j[X]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[X].usedTimes++;const ye=j[b.__cacheKey];ye!==void 0&&(j[b.__cacheKey].usedTimes--,ye.usedTimes===0&&M(v)),b.__cacheKey=X,b.__webglTexture=j[X].texture}return F}function $(b,v,F){let Y=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=r.TEXTURE_3D);const j=Ke(b,v),X=v.source;t.bindTexture(Y,b.__webglTexture,r.TEXTURE0+F);const ye=n.get(X);if(X.version!==ye.__version||j===!0){t.activeTexture(r.TEXTURE0+F);const se=Ge.getPrimaries(Ge.workingColorSpace),ue=v.colorSpace===bn?null:Ge.getPrimaries(v.colorSpace),He=v.colorSpace===bn||se===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Z=_(v.image,!1,i.maxTextureSize);Z=Qe(v,Z);const de=s.convert(v.format,v.colorSpace),Te=s.convert(v.type);let Ce=E(v.internalFormat,de,Te,v.colorSpace,v.isVideoTexture);Ue(Y,v);let fe;const Be=v.mipmaps,Ie=v.isVideoTexture!==!0,Je=ye.__version===void 0||j===!0,I=X.dataReady,ne=R(v,Z);if(v.isDepthTexture)Ce=y(v.format===Li,v.type),Je&&(Ie?t.texStorage2D(r.TEXTURE_2D,1,Ce,Z.width,Z.height):t.texImage2D(r.TEXTURE_2D,0,Ce,Z.width,Z.height,0,de,Te,null));else if(v.isDataTexture)if(Be.length>0){Ie&&Je&&t.texStorage2D(r.TEXTURE_2D,ne,Ce,Be[0].width,Be[0].height);for(let H=0,q=Be.length;H<q;H++)fe=Be[H],Ie?I&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,fe.width,fe.height,de,Te,fe.data):t.texImage2D(r.TEXTURE_2D,H,Ce,fe.width,fe.height,0,de,Te,fe.data);v.generateMipmaps=!1}else Ie?(Je&&t.texStorage2D(r.TEXTURE_2D,ne,Ce,Z.width,Z.height),I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Z.width,Z.height,de,Te,Z.data)):t.texImage2D(r.TEXTURE_2D,0,Ce,Z.width,Z.height,0,de,Te,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ie&&Je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,Ce,Be[0].width,Be[0].height,Z.depth);for(let H=0,q=Be.length;H<q;H++)if(fe=Be[H],v.format!==Kt)if(de!==null)if(Ie){if(I)if(v.layerUpdates.size>0){const le=hl(fe.width,fe.height,v.format,v.type);for(const oe of v.layerUpdates){const we=fe.data.subarray(oe*le/fe.data.BYTES_PER_ELEMENT,(oe+1)*le/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,oe,fe.width,fe.height,1,de,we)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,Z.depth,de,fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,H,Ce,fe.width,fe.height,Z.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?I&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,Z.depth,de,Te,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,H,Ce,fe.width,fe.height,Z.depth,0,de,Te,fe.data)}else{Ie&&Je&&t.texStorage2D(r.TEXTURE_2D,ne,Ce,Be[0].width,Be[0].height);for(let H=0,q=Be.length;H<q;H++)fe=Be[H],v.format!==Kt?de!==null?Ie?I&&t.compressedTexSubImage2D(r.TEXTURE_2D,H,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,H,Ce,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?I&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,fe.width,fe.height,de,Te,fe.data):t.texImage2D(r.TEXTURE_2D,H,Ce,fe.width,fe.height,0,de,Te,fe.data)}else if(v.isDataArrayTexture)if(Ie){if(Je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,Ce,Z.width,Z.height,Z.depth),I)if(v.layerUpdates.size>0){const H=hl(Z.width,Z.height,v.format,v.type);for(const q of v.layerUpdates){const le=Z.data.subarray(q*H/Z.data.BYTES_PER_ELEMENT,(q+1)*H/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,q,Z.width,Z.height,1,de,Te,le)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,de,Te,Z.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ce,Z.width,Z.height,Z.depth,0,de,Te,Z.data);else if(v.isData3DTexture)Ie?(Je&&t.texStorage3D(r.TEXTURE_3D,ne,Ce,Z.width,Z.height,Z.depth),I&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,de,Te,Z.data)):t.texImage3D(r.TEXTURE_3D,0,Ce,Z.width,Z.height,Z.depth,0,de,Te,Z.data);else if(v.isFramebufferTexture){if(Je)if(Ie)t.texStorage2D(r.TEXTURE_2D,ne,Ce,Z.width,Z.height);else{let H=Z.width,q=Z.height;for(let le=0;le<ne;le++)t.texImage2D(r.TEXTURE_2D,le,Ce,H,q,0,de,Te,null),H>>=1,q>>=1}}else if(Be.length>0){if(Ie&&Je){const H=Me(Be[0]);t.texStorage2D(r.TEXTURE_2D,ne,Ce,H.width,H.height)}for(let H=0,q=Be.length;H<q;H++)fe=Be[H],Ie?I&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,de,Te,fe):t.texImage2D(r.TEXTURE_2D,H,Ce,de,Te,fe);v.generateMipmaps=!1}else if(Ie){if(Je){const H=Me(Z);t.texStorage2D(r.TEXTURE_2D,ne,Ce,H.width,H.height)}I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,Te,Z)}else t.texImage2D(r.TEXTURE_2D,0,Ce,de,Te,Z);m(v)&&p(Y),ye.__version=X.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ee(b,v,F){if(v.image.length!==6)return;const Y=Ke(b,v),j=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture,r.TEXTURE0+F);const X=n.get(j);if(j.version!==X.__version||Y===!0){t.activeTexture(r.TEXTURE0+F);const ye=Ge.getPrimaries(Ge.workingColorSpace),se=v.colorSpace===bn?null:Ge.getPrimaries(v.colorSpace),ue=v.colorSpace===bn||ye===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const He=v.isCompressedTexture||v.image[0].isCompressedTexture,Z=v.image[0]&&v.image[0].isDataTexture,de=[];for(let q=0;q<6;q++)!He&&!Z?de[q]=_(v.image[q],!0,i.maxCubemapSize):de[q]=Z?v.image[q].image:v.image[q],de[q]=Qe(v,de[q]);const Te=de[0],Ce=s.convert(v.format,v.colorSpace),fe=s.convert(v.type),Be=E(v.internalFormat,Ce,fe,v.colorSpace),Ie=v.isVideoTexture!==!0,Je=X.__version===void 0||Y===!0,I=j.dataReady;let ne=R(v,Te);Ue(r.TEXTURE_CUBE_MAP,v);let H;if(He){Ie&&Je&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ne,Be,Te.width,Te.height);for(let q=0;q<6;q++){H=de[q].mipmaps;for(let le=0;le<H.length;le++){const oe=H[le];v.format!==Kt?Ce!==null?Ie?I&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,oe.width,oe.height,Ce,oe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,Be,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,oe.width,oe.height,Ce,fe,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,Be,oe.width,oe.height,0,Ce,fe,oe.data)}}}else{if(H=v.mipmaps,Ie&&Je){H.length>0&&ne++;const q=Me(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ne,Be,q.width,q.height)}for(let q=0;q<6;q++)if(Z){Ie?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,de[q].width,de[q].height,Ce,fe,de[q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Be,de[q].width,de[q].height,0,Ce,fe,de[q].data);for(let le=0;le<H.length;le++){const we=H[le].image[q].image;Ie?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,we.width,we.height,Ce,fe,we.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,Be,we.width,we.height,0,Ce,fe,we.data)}}else{Ie?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ce,fe,de[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Be,Ce,fe,de[q]);for(let le=0;le<H.length;le++){const oe=H[le];Ie?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,Ce,fe,oe.image[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,Be,Ce,fe,oe.image[q])}}}m(v)&&p(r.TEXTURE_CUBE_MAP),X.__version=j.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ve(b,v,F,Y,j,X){const ye=s.convert(F.format,F.colorSpace),se=s.convert(F.type),ue=E(F.internalFormat,ye,se,F.colorSpace),He=n.get(v),Z=n.get(F);if(Z.__renderTarget=v,!He.__hasExternalTextures){const de=Math.max(1,v.width>>X),Te=Math.max(1,v.height>>X);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,X,ue,de,Te,v.depth,0,ye,se,null):t.texImage2D(j,X,ue,de,Te,0,ye,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),Fe(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,j,Z.__webglTexture,0,Oe(v)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,j,Z.__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(b,v,F){if(r.bindRenderbuffer(r.RENDERBUFFER,b),v.depthBuffer){const Y=v.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,X=y(v.stencilBuffer,j),ye=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=Oe(v);Fe(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,X,v.width,v.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,X,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,X,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,b)}else{const Y=v.textures;for(let j=0;j<Y.length;j++){const X=Y[j],ye=s.convert(X.format,X.colorSpace),se=s.convert(X.type),ue=E(X.internalFormat,ye,se,X.colorSpace),He=Oe(v);F&&Fe(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,He,ue,v.width,v.height):Fe(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,He,ue,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ue,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const j=Y.__webglTexture,X=Oe(v);if(v.depthTexture.format===Ti)Fe(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(v.depthTexture.format===Li)Fe(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Re(b){const v=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=Y}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");be(v.__webglFramebuffer,b)}else if(F){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=r.createRenderbuffer(),re(v.__webglDepthbuffer[Y],b,!1);else{const j=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,X)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),re(v.__webglDepthbuffer,b,!1);else{const Y=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,j)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(b,v,F){const Y=n.get(b);v!==void 0&&ve(Y.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Re(b)}function it(b){const v=b.texture,F=n.get(b),Y=n.get(v);b.addEventListener("dispose",A);const j=b.textures,X=b.isWebGLCubeRenderTarget===!0,ye=j.length>1;if(ye||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=v.version,o.memory.textures++),X){F.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[se]=[];for(let ue=0;ue<v.mipmaps.length;ue++)F.__webglFramebuffer[se][ue]=r.createFramebuffer()}else F.__webglFramebuffer[se]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)F.__webglFramebuffer[se]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(ye)for(let se=0,ue=j.length;se<ue;se++){const He=n.get(j[se]);He.__webglTexture===void 0&&(He.__webglTexture=r.createTexture(),o.memory.textures++)}if(b.samples>0&&Fe(b)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const ue=j[se];F.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[se]);const He=s.convert(ue.format,ue.colorSpace),Z=s.convert(ue.type),de=E(ue.internalFormat,He,Z,ue.colorSpace,b.isXRRenderTarget===!0),Te=Oe(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,de,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,F.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),re(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Ue(r.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)ve(F.__webglFramebuffer[se][ue],b,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue);else ve(F.__webglFramebuffer[se],b,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(v)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let se=0,ue=j.length;se<ue;se++){const He=j[se],Z=n.get(He);t.bindTexture(r.TEXTURE_2D,Z.__webglTexture),Ue(r.TEXTURE_2D,He),ve(F.__webglFramebuffer,b,He,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,0),m(He)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(se=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,Y.__webglTexture),Ue(se,v),v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)ve(F.__webglFramebuffer[ue],b,v,r.COLOR_ATTACHMENT0,se,ue);else ve(F.__webglFramebuffer,b,v,r.COLOR_ATTACHMENT0,se,0);m(v)&&p(se),t.unbindTexture()}b.depthBuffer&&Re(b)}function ze(b){const v=b.textures;for(let F=0,Y=v.length;F<Y;F++){const j=v[F];if(m(j)){const X=T(b),ye=n.get(j).__webglTexture;t.bindTexture(X,ye),p(X),t.unbindTexture()}}}const at=[],N=[];function Nt(b){if(b.samples>0){if(Fe(b)===!1){const v=b.textures,F=b.width,Y=b.height;let j=r.COLOR_BUFFER_BIT;const X=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(b),se=v.length>1;if(se)for(let ue=0;ue<v.length;ue++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ue=0;ue<v.length;ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[ue]);const He=n.get(v[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,He,0)}r.blitFramebuffer(0,0,F,Y,0,0,F,Y,j,r.NEAREST),c===!0&&(at.length=0,N.length=0,at.push(r.COLOR_ATTACHMENT0+ue),b.depthBuffer&&b.resolveDepthBuffer===!1&&(at.push(X),N.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let ue=0;ue<v.length;ue++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,ye.__webglColorRenderbuffer[ue]);const He=n.get(v[ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,He,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const v=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function Oe(b){return Math.min(i.maxSamples,b.samples)}function Fe(b){const v=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ee(b){const v=o.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function Qe(b,v){const F=b.colorSpace,Y=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Bi&&F!==bn&&(Ge.getTransfer(F)===Ye?(Y!==Kt||j!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function Me(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=Ne,this.setupRenderTarget=it,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Fe}function w_(r,e){function t(n,i=bn){let s;const o=Ge.getTransfer(i);if(n===mn)return r.UNSIGNED_BYTE;if(n===Ua)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Na)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Yl)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Xl)return r.BYTE;if(n===$l)return r.SHORT;if(n===ar)return r.UNSIGNED_SHORT;if(n===Da)return r.INT;if(n===jn)return r.UNSIGNED_INT;if(n===dn)return r.FLOAT;if(n===ur)return r.HALF_FLOAT;if(n===ql)return r.ALPHA;if(n===Kl)return r.RGB;if(n===Kt)return r.RGBA;if(n===jl)return r.LUMINANCE;if(n===Jl)return r.LUMINANCE_ALPHA;if(n===Ti)return r.DEPTH_COMPONENT;if(n===Li)return r.DEPTH_STENCIL;if(n===Zl)return r.RED;if(n===Oa)return r.RED_INTEGER;if(n===Ql)return r.RG;if(n===Fa)return r.RG_INTEGER;if(n===Ba)return r.RGBA_INTEGER;if(n===ns||n===is||n===rs||n===ss)if(o===Ye)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ns)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ns)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ko||n===zo||n===Ho||n===Go)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ko)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ho)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Go)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===Wo||n===Xo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vo||n===Wo)return o===Ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Xo)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$o||n===Yo||n===qo||n===Ko||n===jo||n===Jo||n===Zo||n===Qo||n===ea||n===ta||n===na||n===ia||n===ra||n===sa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$o)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yo)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qo)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jo)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qo)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ea)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ta)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===na)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ia)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ra)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sa)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===os||n===oa||n===aa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===os)return o===Ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===aa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eh||n===ca||n===la||n===ha)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===os)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ca)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===la)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ha)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class P_ extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zt extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L_={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const I_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class U_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new xt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Un({vertexShader:I_,fragmentShader:D_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new mr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N_ extends ki{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new U_,m=t.getContextAttributes();let p=null,T=null;const E=[],y=[],R=new ce;let C=null;const A=new kt;A.viewport=new ot;const L=new kt;L.viewport=new ot;const M=[A,L],S=new P_;let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=E[$];return ee===void 0&&(ee=new lo,E[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=E[$];return ee===void 0&&(ee=new lo,E[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=E[$];return ee===void 0&&(ee=new lo,E[$]=ee),ee.getHandSpace()};function O($){const ee=y.indexOf($.inputSource);if(ee===-1)return;const ve=E[ee];ve!==void 0&&(ve.update($.inputSource,$.frame,l||o),ve.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",K);for(let $=0;$<E.length;$++){const ee=y[$];ee!==null&&(y[$]=null,E[$].disconnect(ee))}w=null,z=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,T=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",W),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Jn(f.framebufferWidth,f.framebufferHeight,{format:Kt,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,ve=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Li:Ti,ve=m.stencil?Pi:jn);const be={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Jn(d.textureWidth,d.textureHeight,{format:Kt,type:mn,depthTexture:new fh(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K($){for(let ee=0;ee<$.removed.length;ee++){const ve=$.removed[ee],re=y.indexOf(ve);re>=0&&(y[re]=null,E[re].disconnect(ve))}for(let ee=0;ee<$.added.length;ee++){const ve=$.added[ee];let re=y.indexOf(ve);if(re===-1){for(let Re=0;Re<E.length;Re++)if(Re>=y.length){y.push(ve),re=Re;break}else if(y[Re]===null){y[Re]=ve,re=Re;break}if(re===-1)break}const be=E[re];be&&be.connect(ve)}}const V=new P,J=new P;function G($,ee,ve){V.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(ve.matrixWorld);const re=V.distanceTo(J),be=ee.projectionMatrix.elements,Re=ve.projectionMatrix.elements,Ne=be[14]/(be[10]-1),it=be[14]/(be[10]+1),ze=(be[9]+1)/be[5],at=(be[9]-1)/be[5],N=(be[8]-1)/be[0],Nt=(Re[8]+1)/Re[0],Oe=Ne*N,Fe=Ne*Nt,Ee=re/(-N+Nt),Qe=Ee*-N;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Qe),$.translateZ(Ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),be[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Me=Ne+Ee,b=it+Ee,v=Oe-Qe,F=Fe+(re-Qe),Y=ze*it/b*Me,j=at*it/b*Me;$.projectionMatrix.makePerspective(v,F,Y,j,Me,b),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ie($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ee=$.near,ve=$.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),S.near=L.near=A.near=ee,S.far=L.far=A.far=ve,(w!==S.near||z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,z=S.far),A.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,S.layers.mask=A.layers.mask|L.layers.mask;const re=$.parent,be=S.cameras;ie(S,re);for(let Re=0;Re<be.length;Re++)ie(be[Re],re);be.length===2?G(S,A,L):S.projectionMatrix.copy(A.projectionMatrix),he($,S,re)};function he($,ee,ve){ve===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(ve.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=da*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Se=null;function Ue($,ee){if(h=ee.getViewerPose(l||o),g=ee,h!==null){const ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let re=!1;ve.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let Re=0;Re<ve.length;Re++){const Ne=ve[Re];let it=null;if(f!==null)it=f.getViewport(Ne);else{const at=u.getViewSubImage(d,Ne);it=at.viewport,Re===0&&(e.setRenderTargetTextures(T,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(T))}let ze=M[Re];ze===void 0&&(ze=new kt,ze.layers.enable(Re),ze.viewport=new ot,M[Re]=ze),ze.matrix.fromArray(Ne.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ne.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(it.x,it.y,it.width,it.height),Re===0&&(S.matrix.copy(ze.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),re===!0&&S.cameras.push(ze)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")){const Re=u.getDepthInformation(ve[0]);Re&&Re.isValid&&Re.texture&&_.init(e,Re,i.renderState)}}for(let ve=0;ve<E.length;ve++){const re=y[ve],be=E[ve];re!==null&&be!==void 0&&be.update(re,ee,l||o)}Se&&Se($,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ke=new dh;Ke.setAnimationLoop(Ue),this.setAnimationLoop=function($){Se=$},this.dispose=function(){}}}const Vn=new en,O_=new je;function F_(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),E=T.envMap,y=T.envMapRotation;E&&(m.envMap.value=E,Vn.copy(y),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),m.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(Vn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function B_(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,E){const y=E.program;n.uniformBlockBinding(T,y)}function l(T,E){let y=i[T.id];y===void 0&&(g(T),y=h(T),i[T.id]=y,T.addEventListener("dispose",m));const R=E.program;n.updateUBOMapping(T,R);const C=e.render.frame;s[T.id]!==C&&(d(T),s[T.id]=C)}function h(T){const E=u();T.__bindingPointIndex=E;const y=r.createBuffer(),R=T.__size,C=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,R,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,y),y}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=i[T.id],y=T.uniforms,R=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let C=0,A=y.length;C<A;C++){const L=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,S=L.length;M<S;M++){const w=L[M];if(f(w,C,M,R)===!0){const z=w.__offset,O=Array.isArray(w.value)?w.value:[w.value];let W=0;for(let K=0;K<O.length;K++){const V=O[K],J=_(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,z+W,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(T,E,y,R){const C=T.value,A=E+"_"+y;if(R[A]===void 0)return typeof C=="number"||typeof C=="boolean"?R[A]=C:R[A]=C.clone(),!0;{const L=R[A];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return R[A]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(T){const E=T.uniforms;let y=0;const R=16;for(let A=0,L=E.length;A<L;A++){const M=Array.isArray(E[A])?E[A]:[E[A]];for(let S=0,w=M.length;S<w;S++){const z=M[S],O=Array.isArray(z.value)?z.value:[z.value];for(let W=0,K=O.length;W<K;W++){const V=O[W],J=_(V),G=y%R,ie=G%J.boundary,he=G+ie;y+=ie,he!==0&&R-he<J.storage&&(y+=R-he),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=J.storage}}}const C=y%R;return C>0&&(y+=R-C),T.__size=y,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function p(){for(const T in i)r.deleteBuffer(i[T]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class k_{constructor(e={}){const{canvas:t=Cd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=Pn,this.toneMappingExposure=1;const y=this;let R=!1,C=0,A=0,L=null,M=-1,S=null;const w=new ot,z=new ot;let O=null;const W=new ke(0);let K=0,V=t.width,J=t.height,G=1,ie=null,he=null;const Se=new ot(0,0,V,J),Ue=new ot(0,0,V,J);let Ke=!1;const $=new za;let ee=!1,ve=!1;const re=new je,be=new je,Re=new P,Ne=new ot,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function at(){return L===null?G:1}let N=n;function Nt(x,D){return t.getContext(x,D)}try{const x={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ia}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",oe,!1),N===null){const D="webgl2";if(N=Nt(D,x),N===null)throw Nt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Oe,Fe,Ee,Qe,Me,b,v,F,Y,j,X,ye,se,ue,He,Z,de,Te,Ce,fe,Be,Ie,Je,I;function ne(){Oe=new Wm(N),Oe.init(),Ie=new w_(N,Oe),Fe=new Bm(N,Oe,e,Ie),Ee=new C_(N,Oe),Fe.reverseDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),Qe=new Ym(N),Me=new u_,b=new R_(N,Oe,Ee,Me,Fe,Ie,Qe),v=new zm(y),F=new Vm(y),Y=new Qd(N),Je=new Om(N,Y),j=new Xm(N,Y,Qe,Je),X=new Km(N,j,Y,Qe),Ce=new qm(N,Fe,b),Z=new km(Me),ye=new h_(y,v,F,Oe,Fe,Je,Z),se=new F_(y,Me),ue=new f_,He=new y_(Oe),Te=new Nm(y,v,F,Ee,X,f,c),de=new T_(y,X,Fe),I=new B_(N,Qe,Fe,Ee),fe=new Fm(N,Oe,Qe),Be=new $m(N,Oe,Qe),Qe.programs=ye.programs,y.capabilities=Fe,y.extensions=Oe,y.properties=Me,y.renderLists=ue,y.shadowMap=de,y.state=Ee,y.info=Qe}ne();const H=new N_(y,N);this.xr=H,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const x=Oe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Oe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(x){x!==void 0&&(G=x,this.setSize(V,J,!1))},this.getSize=function(x){return x.set(V,J)},this.setSize=function(x,D,B=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=x,J=D,t.width=Math.floor(x*G),t.height=Math.floor(D*G),B===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(V*G,J*G).floor()},this.setDrawingBufferSize=function(x,D,B){V=x,J=D,G=B,t.width=Math.floor(x*B),t.height=Math.floor(D*B),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(w)},this.getViewport=function(x){return x.copy(Se)},this.setViewport=function(x,D,B,k){x.isVector4?Se.set(x.x,x.y,x.z,x.w):Se.set(x,D,B,k),Ee.viewport(w.copy(Se).multiplyScalar(G).round())},this.getScissor=function(x){return x.copy(Ue)},this.setScissor=function(x,D,B,k){x.isVector4?Ue.set(x.x,x.y,x.z,x.w):Ue.set(x,D,B,k),Ee.scissor(z.copy(Ue).multiplyScalar(G).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(x){Ee.setScissorTest(Ke=x)},this.setOpaqueSort=function(x){ie=x},this.setTransparentSort=function(x){he=x},this.getClearColor=function(x){return x.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(x=!0,D=!0,B=!0){let k=0;if(x){let U=!1;if(L!==null){const Q=L.texture.format;U=Q===Ba||Q===Fa||Q===Oa}if(U){const Q=L.texture.type,ae=Q===mn||Q===jn||Q===ar||Q===Pi||Q===Ua||Q===Na,me=Te.getClearColor(),ge=Te.getClearAlpha(),Ae=me.r,Pe=me.g,_e=me.b;ae?(g[0]=Ae,g[1]=Pe,g[2]=_e,g[3]=ge,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Ae,_[1]=Pe,_[2]=_e,_[3]=ge,N.clearBufferiv(N.COLOR,0,_))}else k|=N.COLOR_BUFFER_BIT}D&&(k|=N.DEPTH_BUFFER_BIT),B&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ue.dispose(),He.dispose(),Me.dispose(),v.dispose(),F.dispose(),X.dispose(),Je.dispose(),I.dispose(),ye.dispose(),H.dispose(),H.removeEventListener("sessionstart",ac),H.removeEventListener("sessionend",cc),Fn.stop()};function q(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const x=Qe.autoReset,D=de.enabled,B=de.autoUpdate,k=de.needsUpdate,U=de.type;ne(),Qe.autoReset=x,de.enabled=D,de.autoUpdate=B,de.needsUpdate=k,de.type=U}function oe(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function we(x){const D=x.target;D.removeEventListener("dispose",we),st(D)}function st(x){gt(x),Me.remove(x)}function gt(x){const D=Me.get(x).programs;D!==void 0&&(D.forEach(function(B){ye.releaseProgram(B)}),x.isShaderMaterial&&ye.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,B,k,U,Q){D===null&&(D=it);const ae=U.isMesh&&U.matrixWorld.determinant()<0,me=Du(x,D,B,k,U);Ee.setMaterial(k,ae);let ge=B.index,Ae=1;if(k.wireframe===!0){if(ge=j.getWireframeAttribute(B),ge===void 0)return;Ae=2}const Pe=B.drawRange,_e=B.attributes.position;let Ve=Pe.start*Ae,Ze=(Pe.start+Pe.count)*Ae;Q!==null&&(Ve=Math.max(Ve,Q.start*Ae),Ze=Math.min(Ze,(Q.start+Q.count)*Ae)),ge!==null?(Ve=Math.max(Ve,0),Ze=Math.min(Ze,ge.count)):_e!=null&&(Ve=Math.max(Ve,0),Ze=Math.min(Ze,_e.count));const et=Ze-Ve;if(et<0||et===1/0)return;Je.setup(U,k,me,B,ge);let Ct,We=fe;if(ge!==null&&(Ct=Y.get(ge),We=Be,We.setIndex(Ct)),U.isMesh)k.wireframe===!0?(Ee.setLineWidth(k.wireframeLinewidth*at()),We.setMode(N.LINES)):We.setMode(N.TRIANGLES);else if(U.isLine){let xe=k.linewidth;xe===void 0&&(xe=1),Ee.setLineWidth(xe*at()),U.isLineSegments?We.setMode(N.LINES):U.isLineLoop?We.setMode(N.LINE_LOOP):We.setMode(N.LINE_STRIP)}else U.isPoints?We.setMode(N.POINTS):U.isSprite&&We.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)We.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))We.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const xe=U._multiDrawStarts,sn=U._multiDrawCounts,Xe=U._multiDrawCount,Vt=ge?Y.get(ge).bytesPerElement:1,ni=Me.get(k).currentProgram.getUniforms();for(let Pt=0;Pt<Xe;Pt++)ni.setValue(N,"_gl_DrawID",Pt),We.render(xe[Pt]/Vt,sn[Pt])}else if(U.isInstancedMesh)We.renderInstances(Ve,et,U.count);else if(B.isInstancedBufferGeometry){const xe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,sn=Math.min(B.instanceCount,xe);We.renderInstances(Ve,et,sn)}else We.render(Ve,et)};function $e(x,D,B){x.transparent===!0&&x.side===Yt&&x.forceSinglePass===!1?(x.side=wt,x.needsUpdate=!0,yr(x,D,B),x.side=Dn,x.needsUpdate=!0,yr(x,D,B),x.side=Yt):yr(x,D,B)}this.compile=function(x,D,B=null){B===null&&(B=x),p=He.get(B),p.init(D),E.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),x!==B&&x.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const k=new Set;return x.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let ae=0;ae<Q.length;ae++){const me=Q[ae];$e(me,B,U),k.add(me)}else $e(Q,B,U),k.add(Q)}),E.pop(),p=null,k},this.compileAsync=function(x,D,B=null){const k=this.compile(x,D,B);return new Promise(U=>{function Q(){if(k.forEach(function(ae){Me.get(ae).currentProgram.isReady()&&k.delete(ae)}),k.size===0){U(x);return}setTimeout(Q,10)}Oe.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Gt=null;function rn(x){Gt&&Gt(x)}function ac(){Fn.stop()}function cc(){Fn.start()}const Fn=new dh;Fn.setAnimationLoop(rn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(x){Gt=x,H.setAnimationLoop(x),x===null?Fn.stop():Fn.start()},H.addEventListener("sessionstart",ac),H.addEventListener("sessionend",cc),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,D,L),p=He.get(x,E.length),p.init(D),E.push(p),be.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$.setFromProjectionMatrix(be),ve=this.localClippingEnabled,ee=Z.init(this.clippingPlanes,ve),m=ue.get(x,T.length),m.init(),T.push(m),H.enabled===!0&&H.isPresenting===!0){const Q=y.xr.getDepthSensingMesh();Q!==null&&Us(Q,D,-1/0,y.sortObjects)}Us(x,D,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ie,he),ze=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,ze&&Te.addToRenderList(m,x),this.info.render.frame++,ee===!0&&Z.beginShadows();const B=p.state.shadowsArray;de.render(B,x,D),ee===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(p.setupLights(),D.isArrayCamera){const Q=D.cameras;if(U.length>0)for(let ae=0,me=Q.length;ae<me;ae++){const ge=Q[ae];hc(k,U,x,ge)}ze&&Te.render(x);for(let ae=0,me=Q.length;ae<me;ae++){const ge=Q[ae];lc(m,x,ge,ge.viewport)}}else U.length>0&&hc(k,U,x,D),ze&&Te.render(x),lc(m,x,D);L!==null&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(y,x,D),Je.resetDefaultState(),M=-1,S=null,E.pop(),E.length>0?(p=E[E.length-1],ee===!0&&Z.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Us(x,D,B,k){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||$.intersectsSprite(x)){k&&Ne.setFromMatrixPosition(x.matrixWorld).applyMatrix4(be);const ae=X.update(x),me=x.material;me.visible&&m.push(x,ae,me,B,Ne.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||$.intersectsObject(x))){const ae=X.update(x),me=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ne.copy(x.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Ne.copy(ae.boundingSphere.center)),Ne.applyMatrix4(x.matrixWorld).applyMatrix4(be)),Array.isArray(me)){const ge=ae.groups;for(let Ae=0,Pe=ge.length;Ae<Pe;Ae++){const _e=ge[Ae],Ve=me[_e.materialIndex];Ve&&Ve.visible&&m.push(x,ae,Ve,B,Ne.z,_e)}}else me.visible&&m.push(x,ae,me,B,Ne.z,null)}}const Q=x.children;for(let ae=0,me=Q.length;ae<me;ae++)Us(Q[ae],D,B,k)}function lc(x,D,B,k){const U=x.opaque,Q=x.transmissive,ae=x.transparent;p.setupLightsView(B),ee===!0&&Z.setGlobalState(y.clippingPlanes,B),k&&Ee.viewport(w.copy(k)),U.length>0&&vr(U,D,B),Q.length>0&&vr(Q,D,B),ae.length>0&&vr(ae,D,B),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function hc(x,D,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Jn(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?ur:mn,minFilter:Kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));const Q=p.state.transmissionRenderTarget[k.id],ae=k.viewport||w;Q.setSize(ae.z,ae.w);const me=y.getRenderTarget();y.setRenderTarget(Q),y.getClearColor(W),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),ze&&Te.render(B);const ge=y.toneMapping;y.toneMapping=Pn;const Ae=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),ee===!0&&Z.setGlobalState(y.clippingPlanes,k),vr(x,B,k),b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let _e=0,Ve=D.length;_e<Ve;_e++){const Ze=D[_e],et=Ze.object,Ct=Ze.geometry,We=Ze.material,xe=Ze.group;if(We.side===Yt&&et.layers.test(k.layers)){const sn=We.side;We.side=wt,We.needsUpdate=!0,uc(et,B,k,Ct,We,xe),We.side=sn,We.needsUpdate=!0,Pe=!0}}Pe===!0&&(b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q))}y.setRenderTarget(me),y.setClearColor(W,K),Ae!==void 0&&(k.viewport=Ae),y.toneMapping=ge}function vr(x,D,B){const k=D.isScene===!0?D.overrideMaterial:null;for(let U=0,Q=x.length;U<Q;U++){const ae=x[U],me=ae.object,ge=ae.geometry,Ae=k===null?ae.material:k,Pe=ae.group;me.layers.test(B.layers)&&uc(me,D,B,ge,Ae,Pe)}}function uc(x,D,B,k,U,Q){x.onBeforeRender(y,D,B,k,U,Q),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(y,D,B,k,x,Q),U.transparent===!0&&U.side===Yt&&U.forceSinglePass===!1?(U.side=wt,U.needsUpdate=!0,y.renderBufferDirect(B,D,k,U,x,Q),U.side=Dn,U.needsUpdate=!0,y.renderBufferDirect(B,D,k,U,x,Q),U.side=Yt):y.renderBufferDirect(B,D,k,U,x,Q),x.onAfterRender(y,D,B,k,U,Q)}function yr(x,D,B){D.isScene!==!0&&(D=it);const k=Me.get(x),U=p.state.lights,Q=p.state.shadowsArray,ae=U.state.version,me=ye.getParameters(x,U.state,Q,D,B),ge=ye.getProgramCacheKey(me);let Ae=k.programs;k.environment=x.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(x.isMeshStandardMaterial?F:v).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Ae===void 0&&(x.addEventListener("dispose",we),Ae=new Map,k.programs=Ae);let Pe=Ae.get(ge);if(Pe!==void 0){if(k.currentProgram===Pe&&k.lightsStateVersion===ae)return fc(x,me),Pe}else me.uniforms=ye.getUniforms(x),x.onBeforeCompile(me,y),Pe=ye.acquireProgram(me,ge),Ae.set(ge,Pe),k.uniforms=me.uniforms;const _e=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(_e.clippingPlanes=Z.uniform),fc(x,me),k.needsLights=Nu(x),k.lightsStateVersion=ae,k.needsLights&&(_e.ambientLightColor.value=U.state.ambient,_e.lightProbe.value=U.state.probe,_e.directionalLights.value=U.state.directional,_e.directionalLightShadows.value=U.state.directionalShadow,_e.spotLights.value=U.state.spot,_e.spotLightShadows.value=U.state.spotShadow,_e.rectAreaLights.value=U.state.rectArea,_e.ltc_1.value=U.state.rectAreaLTC1,_e.ltc_2.value=U.state.rectAreaLTC2,_e.pointLights.value=U.state.point,_e.pointLightShadows.value=U.state.pointShadow,_e.hemisphereLights.value=U.state.hemi,_e.directionalShadowMap.value=U.state.directionalShadowMap,_e.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_e.spotShadowMap.value=U.state.spotShadowMap,_e.spotLightMatrix.value=U.state.spotLightMatrix,_e.spotLightMap.value=U.state.spotLightMap,_e.pointShadowMap.value=U.state.pointShadowMap,_e.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Pe,k.uniformsList=null,Pe}function dc(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=cs.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function fc(x,D){const B=Me.get(x);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Du(x,D,B,k,U){D.isScene!==!0&&(D=it),b.resetTextureUnits();const Q=D.fog,ae=k.isMeshStandardMaterial?D.environment:null,me=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Bi,ge=(k.isMeshStandardMaterial?F:v).get(k.envMap||ae),Ae=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pe=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),_e=!!B.morphAttributes.position,Ve=!!B.morphAttributes.normal,Ze=!!B.morphAttributes.color;let et=Pn;k.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(et=y.toneMapping);const Ct=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,We=Ct!==void 0?Ct.length:0,xe=Me.get(k),sn=p.state.lights;if(ee===!0&&(ve===!0||x!==S)){const Ot=x===S&&k.id===M;Z.setState(k,x,Ot)}let Xe=!1;k.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==sn.state.version||xe.outputColorSpace!==me||U.isBatchedMesh&&xe.batching===!1||!U.isBatchedMesh&&xe.batching===!0||U.isBatchedMesh&&xe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&xe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&xe.instancing===!1||!U.isInstancedMesh&&xe.instancing===!0||U.isSkinnedMesh&&xe.skinning===!1||!U.isSkinnedMesh&&xe.skinning===!0||U.isInstancedMesh&&xe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&xe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&xe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&xe.instancingMorph===!1&&U.morphTexture!==null||xe.envMap!==ge||k.fog===!0&&xe.fog!==Q||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Z.numPlanes||xe.numIntersection!==Z.numIntersection)||xe.vertexAlphas!==Ae||xe.vertexTangents!==Pe||xe.morphTargets!==_e||xe.morphNormals!==Ve||xe.morphColors!==Ze||xe.toneMapping!==et||xe.morphTargetsCount!==We)&&(Xe=!0):(Xe=!0,xe.__version=k.version);let Vt=xe.currentProgram;Xe===!0&&(Vt=yr(k,D,U));let ni=!1,Pt=!1,Hi=!1;const tt=Vt.getUniforms(),Jt=xe.uniforms;if(Ee.useProgram(Vt.program)&&(ni=!0,Pt=!0,Hi=!0),k.id!==M&&(M=k.id,Pt=!0),ni||S!==x){Ee.buffers.depth.getReversed()?(re.copy(x.projectionMatrix),Rd(re),wd(re),tt.setValue(N,"projectionMatrix",re)):tt.setValue(N,"projectionMatrix",x.projectionMatrix),tt.setValue(N,"viewMatrix",x.matrixWorldInverse);const gn=tt.map.cameraPosition;gn!==void 0&&gn.setValue(N,Re.setFromMatrixPosition(x.matrixWorld)),Fe.logarithmicDepthBuffer&&tt.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&tt.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,Pt=!0,Hi=!0)}if(U.isSkinnedMesh){tt.setOptional(N,U,"bindMatrix"),tt.setOptional(N,U,"bindMatrixInverse");const Ot=U.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),tt.setValue(N,"boneTexture",Ot.boneTexture,b))}U.isBatchedMesh&&(tt.setOptional(N,U,"batchingTexture"),tt.setValue(N,"batchingTexture",U._matricesTexture,b),tt.setOptional(N,U,"batchingIdTexture"),tt.setValue(N,"batchingIdTexture",U._indirectTexture,b),tt.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&tt.setValue(N,"batchingColorTexture",U._colorsTexture,b));const Gi=B.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&Ce.update(U,B,Vt),(Pt||xe.receiveShadow!==U.receiveShadow)&&(xe.receiveShadow=U.receiveShadow,tt.setValue(N,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Jt.envMap.value=ge,Jt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(Jt.envMapIntensity.value=D.environmentIntensity),Pt&&(tt.setValue(N,"toneMappingExposure",y.toneMappingExposure),xe.needsLights&&Uu(Jt,Hi),Q&&k.fog===!0&&se.refreshFogUniforms(Jt,Q),se.refreshMaterialUniforms(Jt,k,G,J,p.state.transmissionRenderTarget[x.id]),cs.upload(N,dc(xe),Jt,b)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(cs.upload(N,dc(xe),Jt,b),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&tt.setValue(N,"center",U.center),tt.setValue(N,"modelViewMatrix",U.modelViewMatrix),tt.setValue(N,"normalMatrix",U.normalMatrix),tt.setValue(N,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ot=k.uniformsGroups;for(let gn=0,_n=Ot.length;gn<_n;gn++){const pc=Ot[gn];I.update(pc,Vt),I.bind(pc,Vt)}}return Vt}function Uu(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function Nu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,D,B){Me.get(x.texture).__webglTexture=D,Me.get(x.depthTexture).__webglTexture=B;const k=Me.get(x);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,D){const B=Me.get(x);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,B=0){L=x,C=D,A=B;let k=!0,U=null,Q=!1,ae=!1;if(x){const ge=Me.get(x);if(ge.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(N.FRAMEBUFFER,null),k=!1;else if(ge.__webglFramebuffer===void 0)b.setupRenderTarget(x);else if(ge.__hasExternalTextures)b.rebindTextures(x,Me.get(x.texture).__webglTexture,Me.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const _e=x.depthTexture;if(ge.__boundDepthTexture!==_e){if(_e!==null&&Me.has(_e)&&(x.width!==_e.image.width||x.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(x)}}const Ae=x.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ae=!0);const Pe=Me.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Pe[D])?U=Pe[D][B]:U=Pe[D],Q=!0):x.samples>0&&b.useMultisampledRTT(x)===!1?U=Me.get(x).__webglMultisampledFramebuffer:Array.isArray(Pe)?U=Pe[B]:U=Pe,w.copy(x.viewport),z.copy(x.scissor),O=x.scissorTest}else w.copy(Se).multiplyScalar(G).floor(),z.copy(Ue).multiplyScalar(G).floor(),O=Ke;if(Ee.bindFramebuffer(N.FRAMEBUFFER,U)&&k&&Ee.drawBuffers(x,U),Ee.viewport(w),Ee.scissor(z),Ee.setScissorTest(O),Q){const ge=Me.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,ge.__webglTexture,B)}else if(ae){const ge=Me.get(x.texture),Ae=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ge.__webglTexture,B||0,Ae)}M=-1},this.readRenderTargetPixels=function(x,D,B,k,U,Q,ae){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Me.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ae!==void 0&&(me=me[ae]),me){Ee.bindFramebuffer(N.FRAMEBUFFER,me);try{const ge=x.texture,Ae=ge.format,Pe=ge.type;if(!Fe.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-k&&B>=0&&B<=x.height-U&&N.readPixels(D,B,k,U,Ie.convert(Ae),Ie.convert(Pe),Q)}finally{const ge=L!==null?Me.get(L).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(x,D,B,k,U,Q,ae){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Me.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ae!==void 0&&(me=me[ae]),me){const ge=x.texture,Ae=ge.format,Pe=ge.type;if(!Fe.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=x.width-k&&B>=0&&B<=x.height-U){Ee.bindFramebuffer(N.FRAMEBUFFER,me);const _e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.bufferData(N.PIXEL_PACK_BUFFER,Q.byteLength,N.STREAM_READ),N.readPixels(D,B,k,U,Ie.convert(Ae),Ie.convert(Pe),0);const Ve=L!==null?Me.get(L).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,Ve);const Ze=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ad(N,Ze,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Q),N.deleteBuffer(_e),N.deleteSync(Ze),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,D=null,B=0){x.isTexture!==!0&&(Qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,x=arguments[1]);const k=Math.pow(2,-B),U=Math.floor(x.image.width*k),Q=Math.floor(x.image.height*k),ae=D!==null?D.x:0,me=D!==null?D.y:0;b.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,ae,me,U,Q),Ee.unbindTexture()},this.copyTextureToTexture=function(x,D,B=null,k=null,U=0){x.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,x=arguments[1],D=arguments[2],U=arguments[3]||0,B=null);let Q,ae,me,ge,Ae,Pe,_e,Ve,Ze;const et=x.isCompressedTexture?x.mipmaps[U]:x.image;B!==null?(Q=B.max.x-B.min.x,ae=B.max.y-B.min.y,me=B.isBox3?B.max.z-B.min.z:1,ge=B.min.x,Ae=B.min.y,Pe=B.isBox3?B.min.z:0):(Q=et.width,ae=et.height,me=et.depth||1,ge=0,Ae=0,Pe=0),k!==null?(_e=k.x,Ve=k.y,Ze=k.z):(_e=0,Ve=0,Ze=0);const Ct=Ie.convert(D.format),We=Ie.convert(D.type);let xe;D.isData3DTexture?(b.setTexture3D(D,0),xe=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(b.setTexture2DArray(D,0),xe=N.TEXTURE_2D_ARRAY):(b.setTexture2D(D,0),xe=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const sn=N.getParameter(N.UNPACK_ROW_LENGTH),Xe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Vt=N.getParameter(N.UNPACK_SKIP_PIXELS),ni=N.getParameter(N.UNPACK_SKIP_ROWS),Pt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,et.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,et.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ge),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ae),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pe);const Hi=x.isDataArrayTexture||x.isData3DTexture,tt=D.isDataArrayTexture||D.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const Jt=Me.get(x),Gi=Me.get(D),Ot=Me.get(Jt.__renderTarget),gn=Me.get(Gi.__renderTarget);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,Ot.__webglFramebuffer),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,gn.__webglFramebuffer);for(let _n=0;_n<me;_n++)Hi&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.get(x).__webglTexture,U,Pe+_n),x.isDepthTexture?(tt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.get(D).__webglTexture,U,Ze+_n),N.blitFramebuffer(ge,Ae,Q,ae,_e,Ve,Q,ae,N.DEPTH_BUFFER_BIT,N.NEAREST)):tt?N.copyTexSubImage3D(xe,U,_e,Ve,Ze+_n,ge,Ae,Q,ae):N.copyTexSubImage2D(xe,U,_e,Ve,Ze+_n,ge,Ae,Q,ae);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else tt?x.isDataTexture||x.isData3DTexture?N.texSubImage3D(xe,U,_e,Ve,Ze,Q,ae,me,Ct,We,et.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(xe,U,_e,Ve,Ze,Q,ae,me,Ct,et.data):N.texSubImage3D(xe,U,_e,Ve,Ze,Q,ae,me,Ct,We,et):x.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,_e,Ve,Q,ae,Ct,We,et.data):x.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,_e,Ve,et.width,et.height,Ct,et.data):N.texSubImage2D(N.TEXTURE_2D,U,_e,Ve,Q,ae,Ct,We,et);N.pixelStorei(N.UNPACK_ROW_LENGTH,sn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Xe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Vt),N.pixelStorei(N.UNPACK_SKIP_ROWS,ni),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pt),U===0&&D.generateMipmaps&&N.generateMipmap(xe),Ee.unbindTexture()},this.copyTextureToTexture3D=function(x,D,B=null,k=null,U=0){return x.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,x=arguments[2],D=arguments[3],U=arguments[4]||0),Qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,D,B,k,U)},this.initRenderTarget=function(x){Me.get(x).__webglFramebuffer===void 0&&b.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?b.setTextureCube(x,0):x.isData3DTexture?b.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?b.setTexture2DArray(x,0):b.setTexture2D(x,0),Ee.unbindTexture()},this.resetState=function(){C=0,A=0,L=null,Ee.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}class z_ extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class H_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ua,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mt=new P;class gs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),i=qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),i=qe(i,this.array),s=qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class As extends Nn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _i;const qi=new P,vi=new P,yi=new P,xi=new ce,Ki=new ce,vh=new je,Hr=new P,ji=new P,Gr=new P,ul=new ce,ho=new ce,dl=new ce;class Va extends ht{constructor(e=new As){if(super(),this.isSprite=!0,this.type="Sprite",_i===void 0){_i=new pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new H_(t,5);_i.setIndex([0,1,2,0,2,3]),_i.setAttribute("position",new gs(n,3,0,!1)),_i.setAttribute("uv",new gs(n,2,3,!1))}this.geometry=_i,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vi.setFromMatrixScale(this.matrixWorld),vh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vi.multiplyScalar(-yi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Vr(Hr.set(-.5,-.5,0),yi,o,vi,i,s),Vr(ji.set(.5,-.5,0),yi,o,vi,i,s),Vr(Gr.set(.5,.5,0),yi,o,vi,i,s),ul.set(0,0),ho.set(1,0),dl.set(1,1);let a=e.ray.intersectTriangle(Hr,ji,Gr,!1,qi);if(a===null&&(Vr(ji.set(-.5,.5,0),yi,o,vi,i,s),ho.set(0,1),a=e.ray.intersectTriangle(Hr,Gr,ji,!1,qi),a===null))return;const c=e.ray.origin.distanceTo(qi);c<e.near||c>e.far||t.push({distance:c,point:qi.clone(),uv:Dt.getInterpolation(qi,Hr,ji,Gr,ul,ho,dl,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Vr(r,e,t,n,i,s){xi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Ki.x=s*xi.x-i*xi.y,Ki.y=i*xi.x+s*xi.y):Ki.copy(xi),r.copy(e),r.x+=Ki.x,r.y+=Ki.y,r.applyMatrix4(vh)}class Rs extends Nn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _s=new P,vs=new P,fl=new je,Ji=new bs,Wr=new pr,uo=new P,pl=new P;class yh extends ht{constructor(e=new pt,t=new Rs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)_s.fromBufferAttribute(t,i-1),vs.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=_s.distanceTo(vs);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(i),Wr.radius+=s,e.ray.intersectsSphere(Wr)===!1)return;fl.copy(i).invert(),Ji.copy(e.ray).applyMatrix4(fl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),T=h.getX(_+1),E=Xr(this,e,Ji,c,p,T);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Xr(this,e,Ji,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Xr(this,e,Ji,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Xr(this,e,Ji,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xr(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(_s.fromBufferAttribute(o,i),vs.fromBufferAttribute(o,s),t.distanceSqToSegment(_s,vs,uo,pl)>n)return;uo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(uo);if(!(c<e.near||c>e.far))return{distance:c,point:pl.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const ml=new P,gl=new P;class xh extends yh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ml.fromBufferAttribute(t,i),gl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ml.distanceTo(gl);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sh extends Nn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _l=new je,pa=new bs,$r=new pr,Yr=new P;class G_ extends ht{constructor(e=new pt,t=new Sh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=s,e.ray.intersectsSphere($r)===!1)return;_l.copy(i).invert(),pa.copy(e.ray).applyMatrix4(_l);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Yr.fromBufferAttribute(u,m),vl(Yr,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Yr.fromBufferAttribute(u,g),vl(Yr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vl(r,e,t,n,i,s,o){const a=pa.distanceSqToPoint(r);if(a<t){const c=new P;pa.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Wa extends xt{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=t||(o.isVector2?new ce:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,i=[],s=[],o=[],a=new P,c=new je;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new P)}s[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(mt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(mt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Xa extends tn{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ce){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class V_ extends Xa{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function $a(){let r=0,e=0,t=0,n=0;function i(s,o,a,c){r=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const qr=new P,fo=new $a,po=new $a,mo=new $a;class Mh extends tn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(qr.subVectors(i[0],i[1]).add(i[0]),l=qr);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(qr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=qr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),fo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),po.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),mo.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(fo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),po.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),mo.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(fo.calc(c),po.calc(c),mo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function yl(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,c=r*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*r+t}function W_(r,e){const t=1-r;return t*t*e}function X_(r,e){return 2*(1-r)*r*e}function $_(r,e){return r*r*e}function nr(r,e,t,n){return W_(r,e)+X_(r,t)+$_(r,n)}function Y_(r,e){const t=1-r;return t*t*t*e}function q_(r,e){const t=1-r;return 3*t*t*r*e}function K_(r,e){return 3*(1-r)*r*r*e}function j_(r,e){return r*r*r*e}function ir(r,e,t,n,i){return Y_(r,e)+q_(r,t)+K_(r,n)+j_(r,i)}class Eh extends tn{constructor(e=new ce,t=new ce,n=new ce,i=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ce){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ir(e,i.x,s.x,o.x,a.x),ir(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class J_ extends tn{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ir(e,i.x,s.x,o.x,a.x),ir(e,i.y,s.y,o.y,a.y),ir(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Th extends tn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Z_ extends tn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bh extends tn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(nr(e,i.x,s.x,o.x),nr(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Q_ extends tn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(nr(e,i.x,s.x,o.x),nr(e,i.y,s.y,o.y),nr(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ch extends tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(yl(a,c.x,l.x,h.x,u.x),yl(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ce().fromArray(i))}return this}}var xl=Object.freeze({__proto__:null,ArcCurve:V_,CatmullRomCurve3:Mh,CubicBezierCurve:Eh,CubicBezierCurve3:J_,EllipseCurve:Xa,LineCurve:Th,LineCurve3:Z_,QuadraticBezierCurve:bh,QuadraticBezierCurve3:Q_,SplineCurve:Ch});class e0 extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new xl[i.type]().fromJSON(i))}return this}}class t0 extends e0{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Th(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new bh(this.currentPoint.clone(),new ce(e,t),new ce(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Eh(this.currentPoint.clone(),new ce(e,t),new ce(n,i),new ce(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ch(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,o,a,c),this}absellipse(e,t,n,i,s,o,a,c){const l=new Xa(e,t,n,i,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ya extends pt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=mt(i,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],h=1/t,u=new P,d=new ce,f=new P,g=new P,_=new P;let m=0,p=0;for(let T=0;T<=e.length-1;T++)switch(T){case 0:m=e[T+1].x-e[T].x,p=e[T+1].y-e[T].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[T+1].x-e[T].x,p=e[T+1].y-e[T].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let T=0;T<=t;T++){const E=n+T*h*i,y=Math.sin(E),R=Math.cos(E);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*y,u.y=e[C].y,u.z=e[C].x*R,o.push(u.x,u.y,u.z),d.x=T/t,d.y=C/(e.length-1),a.push(d.x,d.y);const A=c[3*C+0]*y,L=c[3*C+1],M=c[3*C+0]*R;l.push(A,L,M)}}for(let T=0;T<t;T++)for(let E=0;E<e.length-1;E++){const y=E+T*e.length,R=y,C=y+e.length,A=y+e.length+1,L=y+1;s.push(R,C,L),s.push(A,L,C)}this.setIndex(s),this.setAttribute("position",new rt(o,3)),this.setAttribute("uv",new rt(a,2)),this.setAttribute("normal",new rt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.points,e.segments,e.phiStart,e.phiLength)}}class qa extends Ya{constructor(e=1,t=1,n=4,i=8){const s=new t0;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new qa(e.radius,e.length,e.capSegments,e.radialSegments)}}class Cn extends pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new P,h=new ce;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ka extends pt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;T(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(f,2));function T(){const y=new P,R=new P;let C=0;const A=(t-e)/n;for(let L=0;L<=s;L++){const M=[],S=L/s,w=S*(t-e)+e;for(let z=0;z<=i;z++){const O=z/i,W=O*c+a,K=Math.sin(W),V=Math.cos(W);R.x=w*K,R.y=-S*n+m,R.z=w*V,u.push(R.x,R.y,R.z),y.set(K,A,V).normalize(),d.push(y.x,y.y,y.z),f.push(O,1-S),M.push(g++)}_.push(M)}for(let L=0;L<i;L++)for(let M=0;M<s;M++){const S=_[M][L],w=_[M+1][L],z=_[M+1][L+1],O=_[M][L+1];(e>0||M!==0)&&(h.push(S,w,O),C+=3),(t>0||M!==s-1)&&(h.push(w,z,O),C+=3)}l.addGroup(p,C,0),p+=C}function E(y){const R=g,C=new ce,A=new P;let L=0;const M=y===!0?e:t,S=y===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const w=g;for(let z=0;z<=i;z++){const W=z/i*c+a,K=Math.cos(W),V=Math.sin(W);A.x=M*V,A.y=m*S,A.z=M*K,u.push(A.x,A.y,A.z),d.push(0,S,0),C.x=K*.5+.5,C.y=V*.5*S+.5,f.push(C.x,C.y),g++}for(let z=0;z<i;z++){const O=R+z,W=w+z;y===!0?h.push(W,W+1,O):h.push(W+1,W,O),L+=3}l.addGroup(p,L,y===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Kr=new P,jr=new P,go=new P,Jr=new Dt;class n0 extends pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(as*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:p}=Jr;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Jr.getNormal(go),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let T=0;T<3;T++){const E=(T+1)%3,y=u[T],R=u[E],C=Jr[h[T]],A=Jr[h[E]],L=`${y}_${R}`,M=`${R}_${y}`;M in d&&d[M]?(go.dot(d[M].normal)<=s&&(f.push(C.x,C.y,C.z),f.push(A.x,A.y,A.z)),d[M]=null):L in d||(d[L]={index0:l[T],index1:l[E],normal:go.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];Kr.fromBufferAttribute(a,_),jr.fromBufferAttribute(a,m),f.push(Kr.x,Kr.y,Kr.z),f.push(jr.x,jr.y,jr.z)}this.setAttribute("position",new rt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Di extends pt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new P,g=new ce;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const T=p+m,E=T,y=T+n+1,R=T+n+2,C=T+1;a.push(E,y,C),a.push(y,R,C)}}this.setIndex(a),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Zr extends Nn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class i0 extends Rs{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Sl={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class r0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const s0=new r0;class ja{constructor(e){this.manager=e!==void 0?e:s0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ja.DEFAULT_MATERIAL_NAME="__DEFAULT";class o0 extends ja{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Sl.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=cr("img");function c(){h(),Sl.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class a0 extends ja{constructor(e){super(e)}load(e,t,n,i){const s=new xt,o=new o0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ah extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const _o=new je,Ml=new P,El=new P;class c0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new za,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ml.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ml),El.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(El),t.updateMatrixWorld(),_o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class l0 extends c0{constructor(){super(new Ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tl extends Ah{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new l0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class h0 extends Ah{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const bl=new je;class Rh{constructor(e,t,n=0,i=1/0){this.ray=new bs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bl),this}intersectObject(e,t=!0,n=[]){return ma(e,this,n,t),n.sort(Cl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ma(e[i],this,n,t);return n.sort(Cl),n}}function Cl(r,e){return r.distance-e.distance}function ma(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)ma(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ia);const u0=[{x:-7.45,y:.8,z:0},{x:-7.3,y:2.3,z:0},{x:-6.2,y:3.3,z:0},{x:-4.6,y:3.25,z:0},{x:-3.2,y:1.9,z:0},{x:-2.2,y:1.05,z:0},{x:-1.2,y:1.05,z:0},{x:0,y:1.1,z:0},{x:1.1,y:.85,z:0},{x:2,y:.2,z:0},{x:2.8,y:.15,z:0},{x:3.5,y:.35,z:0},{x:4.5,y:1.15,z:0},{x:6.2,y:1.6,z:0},{x:7.6,y:.6,z:0},{x:7.6,y:-.8,z:0},{x:6.8,y:-2.15,z:0},{x:5.5,y:-2.35,z:0},{x:3.8,y:-1.95,z:0},{x:2.3,y:-1.25,z:0},{x:1.1,y:-2.35,z:0},{x:-.5,y:-2.48,z:0},{x:-2.5,y:-2.3,z:0},{x:-4.8,y:-2.55,z:0},{x:-6.8,y:-2.48,z:0},{x:-7.9,y:-1,z:0},{x:-7.45,y:.8,z:0}];class d0{constructor(e){this.scene=e,this.waypoints=u0.map(t=>new P(t.x,t.y,t.z)),this.curve=null,this.trackLineMesh=null,this.handleGroup=new zt,this.handleMeshes=[],this.editorVisible=!1,this.gridGroup=new zt,this.gridVisible=!0,this.scene.add(this.gridGroup),this.scene.add(this.handleGroup),this.rebuildCurve()}rebuildCurve(){this.curve=new Mh(this.waypoints,!1,"centripetal",.5),this.trackLineMesh&&(this.scene.remove(this.trackLineMesh),this.trackLineMesh.geometry.dispose(),this.trackLineMesh.material.dispose());const e=this.curve.getPoints(200),t=new pt().setFromPoints(e),n=new i0({color:16498468,dashSize:.2,gapSize:.1,linewidth:2,opacity:.4,transparent:!0});this.trackLineMesh=new yh(t,n),this.trackLineMesh.computeLineDistances(),this.trackLineMesh.position.z=.05,this.trackLineMesh.visible=this.editorVisible,this.scene.add(this.trackLineMesh),this.updateHandles(),this.buildTrackGrid()}buildTrackGrid(){for(;this.gridGroup.children.length>0;){const h=this.gridGroup.children[0];this.gridGroup.remove(h),h.geometry&&h.geometry.dispose(),h.material&&h.material.dispose()}if(!this.gridVisible||!this.curve)return;const e=[],t=.19,n=4*t,i=320;for(let h=0;h<=8;h++){const u=(h-4)*t;for(let d=0;d<i;d++){const f=d/i,g=(d+1)/i,_=this.getPositionWithCustomOffset(f,u).position,m=this.getPositionWithCustomOffset(g,u).position;e.push(_.x,_.y,.04),e.push(m.x,m.y,.04)}}const s=28;for(let h=0;h<s;h++){const u=h/s,d=this.getPositionWithCustomOffset(u,-n).position,f=this.getPositionWithCustomOffset(u,n).position;e.push(d.x,d.y,.04),e.push(f.x,f.y,.04)}const o=new pt;o.setAttribute("position",new rt(e,3));const a=new Rs({color:16707722,transparent:!0,opacity:.4,depthTest:!1}),c=new xh(o,a);this.gridGroup.add(c);const l=["#f472b6","#3b82f6","#a855f7","#22c55e","#eab308","#f97316","#ef4444","#64748b"];for(let h=0;h<8;h++){const u=(h-3.5)*t,d=this.getPositionWithCustomOffset(.015,u).position,f=this.createNumberSprite(h+1,l[h]);f.position.set(d.x,d.y,.06),this.gridGroup.add(f)}}createNumberSprite(e,t){const n=document.createElement("canvas");n.width=128,n.height=128;const i=n.getContext("2d");i.fillStyle="rgba(15, 23, 42, 0.9)",i.strokeStyle=t,i.lineWidth=7,i.beginPath(),i.arc(64,64,52,0,Math.PI*2),i.fill(),i.stroke(),i.fillStyle=t,i.font="900 58px Outfit, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(String(e),64,64);const s=new Wa(n);s.colorSpace=Tt;const o=new As({map:s,transparent:!0,depthTest:!1}),a=new Va(o);return a.scale.set(.28,.28,1),a}toggleGrid(){return this.gridVisible=!this.gridVisible,this.gridGroup.visible=this.gridVisible,this.gridVisible&&this.gridGroup.children.length===0&&this.buildTrackGrid(),this.gridVisible}updateHandles(){for(;this.handleGroup.children.length>0;){const e=this.handleGroup.children[0];this.handleGroup.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}this.handleMeshes=[],this.editorVisible&&this.waypoints.forEach((e,t)=>{const n=new Cn(.2,16),i=new Rt({color:t===0?15680580:440020,depthTest:!1}),s=new nt(n,i);s.position.copy(e),s.position.z=.2,s.userData={index:t},this.handleGroup.add(s),this.handleMeshes.push(s)})}setEditorVisible(e){this.editorVisible=e,this.trackLineMesh&&(this.trackLineMesh.visible=e),this.handleGroup.visible=e,this.updateHandles()}getPointAndTangentAt(e){const t=Math.min(1,Math.max(0,e)),n=this.curve.getPointAt(t),i=this.curve.getTangentAt(t);return{point:n,tangent:i}}getPositionWithCustomOffset(e,t){const{point:n,tangent:i}=this.getPointAndTangentAt(e),s=new P(-i.y,i.x,0).normalize(),o=n.clone().add(s.multiplyScalar(t)),a=Math.atan2(i.y,i.x);return{position:o,angle:a,tangent:i}}getPositionWithLaneOffset(e,t,n=6){const{point:i,tangent:s}=this.getPointAndTangentAt(e),o=new P(-s.y,s.x,0).normalize(),c=(t-(n-1)/2)*.16,l=i.clone().add(o.multiplyScalar(c)),h=Math.atan2(s.y,s.x);return{position:l,angle:h,tangent:s}}updateWaypoint(e,t,n){e>=0&&e<this.waypoints.length&&(this.waypoints[e].x=t,this.waypoints[e].y=n,this.rebuildCurve())}setVisible(e){this.gridGroup.visible=e&&this.gridVisible,this.handleGroup.visible=e&&this.editorVisible,this.trackLineMesh&&(this.trackLineMesh.visible=e&&this.editorVisible)}}const Qr={rosa:{hex:16020150,name:"1. Shellymuh (Rosa)",css:"#f472b6"},blau:{hex:3900150,name:"2. Flinkfuß (Blau)",css:"#3b82f6"},violett:{hex:11032055,name:"3. Hoher Pfad (Violett)",css:"#a855f7"},gruen:{hex:2278750,name:"4. Schnellblatt (Grün)",css:"#22c55e"},gelb:{hex:15381256,name:"5. Blumenblitz (Gelb)",css:"#eab308"},orange:{hex:16347926,name:"6. Flitzi (Orange)",css:"#f97316"},rot:{hex:15680580,name:"7. Halsbrecher (Rot)",css:"#ef4444"},schwarz:{hex:3359061,name:"8. Majestät (Schwarz)",css:"#334155"}};class f0{constructor(e,t,n,i,s,o=0){this.id=e,this.colorKey=t,this.colorData=Qr[t]||Qr.rot,this.isPlayer=n,this.laneIndex=i,this.trackManager=s,this.dndModifier=o,this.progress=0,this.speed=0,this.stuckProgress=0,this.baseScale=.52,this.baseLaneOffset=(i-3.5)*.19,this.laneOffset=this.baseLaneOffset,this.isStunned=!1,this.stunEndTime=0,this.stunCount=0,this.lastKeyPressTime=0,this.lastKeyPressed=null,this.aiBaseSpeed=35e-5+Math.random()*15e-5,this.aiNoiseOffset=Math.random()*100,this.group=new zt,this.createGraphics(),this.trackManager.scene.add(this.group),this.trailPoints=[],this.maxTrailPoints=35,this.createTrail(),this.colorKey==="rosa"&&this.activateShield(),this.updatePosition(0)}createGraphics(){this.visualContainer=new zt,this.visualContainer.scale.set(this.baseScale,this.baseScale,1),this.group.add(this.visualContainer);const e=new qa(.24,.55,8,16);e.rotateZ(Math.PI/2);const t=new Rt({color:15857145}),n=new nt(e,t);n.position.set(-.05,0,0),this.visualContainer.add(n);const i=.42,s=new Cn(i,32),o=new Rt({color:this.colorData.hex,transparent:!0,opacity:.95});this.shellMesh=new nt(s,o),this.shellMesh.position.set(-.12,.1,.02),this.visualContainer.add(this.shellMesh);const a=new Cn(i*.55,16),c=new Rt({color:16777215,opacity:.4,transparent:!0}),l=new nt(a,c);l.position.set(-.12,.1,.03),this.visualContainer.add(l);const h=new Di(i,i+.06,32),u=new Rt({color:16777215,opacity:.8,transparent:!0}),d=new nt(h,u);d.position.set(-.12,.1,.01),this.visualContainer.add(d);const f=new Rt({color:988970}),g=new Cn(.05,12),_=new nt(g,f);_.position.set(.3,.25,.05),this.visualContainer.add(_);const m=new nt(g,f);m.position.set(.3,.1,.05),this.visualContainer.add(m);const p=this.isPlayer?"👑 DU":"🤖 KI",T=this.isPlayer?"#fbbf24":"#94a3b8";this.labelSprite=this.createTextSprite(p,T),this.group.add(this.labelSprite),this.hasShield=!1,this.isTurboActive=!1,this.turboEndTime=0;const E=new Di(.44,.52,32),y=new Rt({color:3718648,opacity:.85,transparent:!0});this.shieldMesh=new nt(E,y),this.shieldMesh.position.set(-.12,.1,.04),this.shieldMesh.visible=!1,this.visualContainer.add(this.shieldMesh),this.stunGroup=new zt;for(let R=0;R<3;R++){const C=new Cn(.09,5),A=new Rt({color:16498468}),L=new nt(C,A);L.position.set(Math.cos(R*2)*.35,.45+Math.sin(R*2)*.12,.1),this.stunGroup.add(L)}this.stunGroup.visible=!1,this.visualContainer.add(this.stunGroup),this.group.position.z=.1+(4-this.laneIndex)*.01}activateShield(){this.hasShield=!0,this.shieldMesh&&(this.shieldMesh.visible=!0)}activateTurbo(e=2500){this.isTurboActive=!0,this.turboEndTime=performance.now()+e,this.squishAnimation()}createTextSprite(e,t){const n=document.createElement("canvas");n.width=160,n.height=56;const i=n.getContext("2d");i.fillStyle="rgba(15, 23, 42, 0.85)",i.strokeStyle=t,i.lineWidth=4,i.beginPath(),i.roundRect(4,4,152,48,10),i.fill(),i.stroke(),i.fillStyle="#ffffff",i.font="bold 22px Outfit, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(e,80,28);const s=new Wa(n);s.colorSpace=Tt;const o=new As({map:s,transparent:!0,depthTest:!1}),a=new Va(o);return a.scale.set(.62,.2,1),a.position.set(0,.44,.2),a}setColor(e){this.colorKey=e,this.colorData=Qr[e]||Qr.rot,this.shellMesh.material.color.setHex(this.colorData.hex),this.trailMesh.material.color.setHex(this.colorData.hex)}createTrail(){const e=new pt,t=new Float32Array(this.maxTrailPoints*3);e.setAttribute("position",new Ht(t,3));const n=new Sh({color:this.colorData.hex,size:.05,transparent:!0,opacity:.5,blending:bo});this.trailMesh=new G_(e,n),this.trackManager.scene.add(this.trailMesh)}updateTrail(e){this.trailPoints.unshift(e.clone()),this.trailPoints.length>this.maxTrailPoints&&this.trailPoints.pop();const t=this.trailMesh.geometry.attributes.position.array;for(let n=0;n<this.maxTrailPoints;n++)n<this.trailPoints.length?(t[n*3]=this.trailPoints[n].x,t[n*3+1]=this.trailPoints[n].y,t[n*3+2]=.05):(t[n*3]=e.x,t[n*3+1]=e.y,t[n*3+2]=.05);this.trailMesh.geometry.attributes.position.needsUpdate=!0}handleD20Roll(e,t=0,n=[]){if(this.isStunned||this.progress>=1)return;let i=e;this.colorKey==="blau"&&i<5&&(i=5),this.colorKey==="gruen"&&(i+=1),this.colorKey==="orange"&&i<=2&&(i=Math.floor(Math.random()*20)+1),this.colorKey==="schwarz"&&i===1&&(i=4);const s=typeof t=="number"?t:this.dndModifier||0,o=i+s;let a=.025;const c=e===20||o>=22||this.colorKey==="gelb"&&i>=19,l=i===1;if(c){if(a=.052,this.activateTurbo(1500),this.colorKey==="rot"&&n&&n.length>0){const h=n.filter(u=>u!==this&&u.progress>this.progress);h.length>0&&(h.sort((u,d)=>u.progress-d.progress),h[0].progress=Math.max(0,h[0].progress-.02))}}else o>=15?a=.04:o>=10?a=.03:o>=2?a=.02:l&&(a=.005,this.triggerStun(2e3));if(n&&n.length>1){const h=[...n].sort((g,_)=>_.progress-g.progress),u=h.indexOf(this)+1,f=h[0].progress-this.progress;if(u>=5&&f>.06){const g=Math.min(.016,f*.12);a+=g}}this.progress=Math.min(1,this.progress+a),this.squishAnimation()}handleSpellCast(e,t=[]){if(!(this.isStunned||this.progress>=1)){if(e==="lettuce")this.progress=Math.min(1,this.progress+.035),this.squishAnimation();else if(e==="mage_hand"){const n=t.filter(i=>i!==this&&i.progress>this.progress);n.length>0&&(n.sort((i,s)=>i.progress-s.progress),n[0].progress=Math.max(0,n[0].progress-.03))}else if(e==="sleep"){const n=[...t].sort((i,s)=>s.progress-i.progress);n.length>0&&n[0]!==this&&n[0].triggerStun(2200)}}}handlePlayerInput(e){if(this.isStunned||this.progress>=1)return{success:!1,reason:"blocked"};const t=performance.now(),n=t-this.lastKeyPressTime;if(this.lastKeyPressed===e)return{success:!1,reason:"same_key"};if(this.lastKeyPressTime>0&&n<120)return this.triggerStun(2500),{success:!1,reason:"panic_stun"};e==="A"?this.laneOffset=Math.max(-1.1,this.laneOffset-.14):e==="D"&&(this.laneOffset=Math.min(1.1,this.laneOffset+.14));const i=Math.abs(this.laneOffset)>.65,s=i?.005:.018;return this.lastKeyPressTime=t,this.lastKeyPressed=e,this.progress=Math.min(1,this.progress+s),this.speed=.02,this.squishAnimation(),{success:!0,nextKey:e==="A"?"D":"A",progress:this.progress,isOffRoad:i}}triggerStun(e=2500){if(this.hasShield){this.hasShield=!1,this.shieldMesh&&(this.shieldMesh.visible=!1);return}this.isStunned=!0,this.stunEndTime=performance.now()+e,this.stunCount++,this.lastKeyPressTime=0,this.lastKeyPressed=null,this.shellMesh.material.opacity=.4,this.stunGroup.visible=!0}checkStunRecovery(){this.isStunned&&performance.now()>=this.stunEndTime&&(this.isStunned=!1,this.shellMesh.material.opacity=.95,this.stunGroup.visible=!1)}squishAnimation(){this.visualContainer.scale.set(this.baseScale*1.25,this.baseScale*.8,1)}update(e,t,n=!1){this.checkStunRecovery(),this.laneOffset+=(this.baseLaneOffset-this.laneOffset)*.08,this.isTurboActive&&performance.now()>=this.turboEndTime&&(this.isTurboActive=!1),this.visualContainer.scale.x+=(this.baseScale-this.visualContainer.scale.x)*.15,this.visualContainer.scale.y+=(this.baseScale-this.visualContainer.scale.y)*.15,this.isStunned?(this.visualContainer.position.x=(Math.random()-.5)*.08,this.visualContainer.position.y=(Math.random()-.5)*.08,this.stunGroup.rotation.z+=.1):this.visualContainer.position.set(0,0,0),this.updatePosition(this.progress)}updatePosition(e){const t=this.trackManager.getPositionWithCustomOffset(e,this.laneOffset);this.group.position.x=t.position.x,this.group.position.y=t.position.y,this.group.rotation.z=t.angle,this.updateTrail(t.position)}reset(){this.progress=0,this.speed=0,this.isStunned=!1,this.stunEndTime=0,this.stunCount=0,this.lastKeyPressTime=0,this.lastKeyPressed=null,this.shellMesh.material.opacity=.95,this.stunGroup.visible=!1,this.trailPoints=[],this.colorKey==="rosa"?this.activateShield():(this.hasShield=!1,this.shieldMesh&&(this.shieldMesh.visible=!1)),this.updatePosition(0)}dispose(){this.trackManager.scene.remove(this.group),this.trackManager.scene.remove(this.trailMesh)}setVisible(e){this.group.visible=e,this.trailMesh&&(this.trailMesh.visible=e)}}class p0{constructor(){this.ctx=null,this.enabled=!0}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playStepSound(e){if(!this.enabled||(this.init(),!this.ctx))return;const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine";const i=e==="A"?320:440;t.frequency.setValueAtTime(i,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(i*1.5,this.ctx.currentTime+.08),n.gain.setValueAtTime(.15,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.08),t.connect(n),n.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.09)}playPanicSound(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(180,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(90,this.ctx.currentTime+.3),t.gain.setValueAtTime(.3,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.3),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.35)}playVictorySound(){if(!this.enabled||(this.init(),!this.ctx))return;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(t,this.ctx.currentTime+n*.12),s.gain.setValueAtTime(.2,this.ctx.currentTime+n*.12),s.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+n*.12+.35),i.connect(s),s.connect(this.ctx.destination),i.start(this.ctx.currentTime+n*.12),i.stop(this.ctx.currentTime+n*.12+.4)})}}const Al=new p0,Bt=8,Rl=1.15,Si=1.25,wl={KRIEGER:{id:"KRIEGER",name:"Krieger (Fighter)",icon:"🛡️",colorHex:3900150,defaultHp:14,speed:6,actions:[{id:"attack_melee",name:"⚔️ Nahkampf-Hieb",type:"ATTACK",dice:"1d8+3",range:1,desc:"Schlägt ein angrenzendes Ziel (1d8+3 Schaden)"},{id:"action_push",name:"💥 Stoß-Angriff",type:"PUSH",range:1,desc:"Stößt ein Ziel 1 Feld nach hinten"}]},MAGIER:{id:"MAGIER",name:"Magier (Wizard)",icon:"🔮",colorHex:9133302,defaultHp:8,speed:6,actions:[{id:"spell_firebolt",name:"🔥 Feuerblitz",type:"ATTACK",dice:"1d10",range:5,desc:"Fernkampf-Zauber auf bis zu 5 Felder Distanz"},{id:"spell_push",name:"💨 Windstoß",type:"PUSH",range:3,desc:"Stößt Ziel 1 Feld weg"}]},SCHURKE:{id:"SCHURKE",name:"Schurke (Rogue)",icon:"🗡️",colorHex:16096779,defaultHp:10,speed:7,actions:[{id:"attack_sneak",name:"🗡️ Hinterhalt",type:"ATTACK",dice:"1d6+1d6",range:1,desc:"Nahkampf mit Sneak Attack"},{id:"action_push",name:"💨 Trick-Stoß",type:"PUSH",range:1,desc:"Stößt Ziel aus dem Gleichgewicht"}]},KLERIKER:{id:"KLERIKER",name:"Kleriker (Cleric)",icon:"✨",colorHex:440020,defaultHp:11,speed:6,actions:[{id:"spell_flame",name:"✨ Heilige Flamme",type:"ATTACK",dice:"1d8",range:4,desc:"Göttlicher Strahl auf bis zu 4 Felder"},{id:"spell_heal",name:"💚 Heilung",type:"HEAL",dice:"1d8+2",range:1,desc:"Heilt ein Ziel um 1d8+2 LP"}]},WALDLAEUFER:{id:"WALDLAEUFER",name:"Waldläufer (Ranger)",icon:"🏹",colorHex:2278750,defaultHp:11,speed:6,actions:[{id:"attack_bow",name:"🏹 Langbogen",type:"ATTACK",dice:"1d8+2",range:6,desc:"Präziser Schuss aus der Ferne"},{id:"action_push",name:"🎯 Stoß-Pfeil",type:"PUSH",range:4,desc:"Schießt und stößt Ziel 1 Feld zurück"}]},BARBAR:{id:"BARBAR",name:"Barbar (Barbarian)",icon:"🪓",colorHex:15680580,defaultHp:16,speed:7,actions:[{id:"attack_rage",name:"🪓 Wut-Schlag",type:"ATTACK",dice:"1d12+3",range:1,desc:"Schwerer Schlag mit der Streitaxt"},{id:"action_push",name:"💥 Rammbock-Stoß",type:"PUSH",range:1,desc:"Wuchtiger Stoß 1 Feld weit"}]}},Pl={GOBLIN:{id:"GOBLIN",name:"Goblin",icon:"👺",colorHex:8702998,hp:7,maxHp:7,speed:6,desc:"Kleiner flinker Plünderer"},WOLF:{id:"WOLF",name:"Schattenwolf",icon:"🐺",colorHex:6583435,hp:11,maxHp:11,speed:8,desc:"Raubtier mit schnellem Antritt"},BUGBEAR:{id:"BUGBEAR",name:"Bugbear-Hüne",icon:"👹",colorHex:14251782,hp:27,maxHp:27,speed:6,desc:"Muskulöser Schläger mit Morgenstern"},ZOMBIE:{id:"ZOMBIE",name:"Zombie",icon:"🧟",colorHex:1096065,hp:22,maxHp:22,speed:4,desc:"Zäher Untoter mit fauligem Griff"},BOSS:{id:"BOSS",name:"Hexenmeister / Boss",icon:"🧙",colorHex:11032055,hp:45,maxHp:45,speed:6,desc:"Mächtiger Anführer mit finsterer Magie"}};class m0{constructor(e){this.gameEngine=e,this.scene=e.scene,this.group=new zt,this.group.visible=!1,this.scene.add(this.group),this.tacticalCamera=new kt(42,window.innerWidth/window.innerHeight,.1,1e3),this.tacticalCamera.position.set(0,-12,13),this.tacticalCamera.lookAt(0,-.4,0),this.tacticalCamera.up.set(0,0,1),this.grid=[],this.tileMeshes=[],this.units=[],this.floatingTexts=[],this.dmToolMode="PLACE_MONSTER",this.selectedMonsterType="GOBLIN",this.selectedUnit=null,this.currentRound=1,this.raycaster=new Rh,this.mouse=new ce,this.hoverTile=null;const t=new Di(.35,.48,16),n=new Rt({color:16498468,side:Yt,transparent:!0,opacity:.6});this.hoverMesh=new nt(t,n),this.hoverMesh.position.z=.22,this.hoverMesh.visible=!1,this.group.add(this.hoverMesh),this.setupTacticalLighting(),this.initBoard(),window.addEventListener("resize",()=>{this.tacticalCamera.aspect=window.innerWidth/window.innerHeight,this.tacticalCamera.updateProjectionMatrix()})}setupTacticalLighting(){this.tacticalLightGroup=new zt;const e=new h0(14870768,.85);this.tacticalLightGroup.add(e);const t=new Tl(16707722,1.2);t.position.set(8,-10,16),t.castShadow=!0,this.tacticalLightGroup.add(t);const n=new Tl(3718648,.6);n.position.set(-8,8,10),this.tacticalLightGroup.add(n),this.group.add(this.tacticalLightGroup)}gridToWorld(e,t,n=0){return new P((e-(Bt-1)/2)*Si,(t-(Bt-1)/2)*Si,n)}worldToGrid(e,t){const n=Math.round(e/Si+(Bt-1)/2),i=Math.round(t/Si+(Bt-1)/2);return this.inBounds(n,i)?{x:n,y:i}:null}inBounds(e,t){return e>=0&&e<Bt&&t>=0&&t<Bt}initBoard(){this.tileMeshes.forEach(h=>this.group.remove(h)),this.tileMeshes=[],this.grid=[];const e=new Zn(Bt*Si+.6,Bt*Si+.6,.5),t=new Zr({color:988970,roughness:.8}),n=new nt(e,t);n.position.set(0,0,-.35),this.group.add(n);const i=new n0(e),s=new Rs({color:16096779,linewidth:2}),o=new xh(i,s);o.position.copy(n.position),this.group.add(o);const a=new Zn(Rl,Rl,.25),c=new Zr({color:3359061,roughness:.6}),l=new Zr({color:1976635,roughness:.6});for(let h=0;h<Bt;h++){this.grid[h]=[];for(let u=0;u<Bt;u++){const d=(h+u)%2===0?c:l,f=new nt(a,d.clone()),g=this.gridToWorld(h,u,0);f.position.copy(g),f.userData={gridX:h,gridY:u},this.group.add(f),this.tileMeshes.push(f),this.grid[h][u]={x:h,y:u,mesh:f,unit:null}}}}startTacticalBattle(){this.group.visible=!0,this.updateTVHud(),this.syncStateWithControllers()}stopTacticalBattle(){this.group.visible=!1}resetBattle(){[...this.units].forEach(e=>this.removeUnit(e)),this.units=[],this.selectedUnit=null,this.currentRound=1,this.updateTVHud(),this.syncStateWithControllers()}handleCanvasClick(e){if(!this.group.visible)return;this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.tacticalCamera);const t=this.raycaster.intersectObjects(this.tileMeshes);if(t.length>0){const{gridX:n,gridY:i}=t[0].object.userData;this.onDMCellClicked(n,i)}}handleCanvasPointerMove(e){if(!this.group.visible)return;this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.tacticalCamera);const t=this.raycaster.intersectObjects(this.tileMeshes);if(t.length>0){const{gridX:n,gridY:i}=t[0].object.userData,s=this.gridToWorld(n,i,.16);this.hoverMesh.position.set(s.x,s.y,.16),this.hoverMesh.visible=!0}else this.hoverMesh.visible=!1}onDMCellClicked(e,t){const n=this.grid[e][t];if(this.dmToolMode==="PLACE_MONSTER"){if(n.unit){alert("Auf diesem Feld steht bereits eine Einheit!");return}this.spawnMonster(this.selectedMonsterType,e,t)}else this.dmToolMode==="REMOVE"?n.unit&&this.removeUnit(n.unit):this.dmToolMode==="SELECT_MOVE"&&(n.unit?this.selectUnit(n.unit):this.selectedUnit&&this.moveUnit(this.selectedUnit,e,t));this.updateTVHud(),this.syncStateWithControllers()}spawnMonster(e,t,n){const i=Pl[e]||Pl.GOBLIN,s=`mob_${Date.now()}_${Math.random().toString(36).substring(2,6)}`,o=this.createTokenMesh({id:s,name:i.name,icon:i.icon,colorHex:i.colorHex,hp:i.hp,maxHp:i.maxHp,speed:i.speed,isMonster:!0,gridX:t,gridY:n});return this.grid[t][n].unit=o,this.units.push(o),this.showFloatingText(t,n,`+ ${i.name}`,"#ef4444"),o}deployPlayerCharacter(e,t,n,i,s){const o=wl[n]||wl.KRIEGER,a=this.units.find(l=>l.id===e);if(a&&this.removeUnit(a),!this.inBounds(i,s)||this.grid[i][s].unit)for(let l=0;l<Bt;l++){for(let h=0;h<Bt;h++)if(!this.grid[h][l].unit){i=h,s=l;break}if(!this.grid[i][s].unit)break}const c=this.createTokenMesh({id:e,name:t||"Held",classKey:o.id,className:o.name,icon:o.icon,colorHex:o.colorHex,hp:o.defaultHp,maxHp:o.defaultHp,speed:o.speed,isMonster:!1,gridX:i,gridY:s});return this.grid[i][s].unit=c,this.units.push(c),this.showFloatingText(i,s,`🛡️ ${c.name} bereit!`,"#38bdf8"),this.updateTVHud(),this.syncStateWithControllers(),c}createTokenMesh(e){const t=new zt,n=this.gridToWorld(e.gridX,e.gridY,.15);t.position.copy(n);const i=new Ka(.44,.46,.15,24),s=new Zr({color:e.colorHex,roughness:.3,metalness:.2}),o=new nt(i,s);o.rotation.x=Math.PI/2,o.position.z=.08,t.add(o);const a=new Di(.44,.49,24),c=new Rt({color:e.isMonster?15680580:3718648,side:Yt}),l=new nt(a,c);l.position.z=.16,t.add(l);const h=new Cn(.4,24),u=new Rt({color:988970}),d=new nt(h,u);d.position.z=.165,t.add(d);const f=this.createTextSprite(`${e.icon} ${e.name} (${e.hp}/${e.maxHp} LP)`,e.isMonster?"#f87171":"#38bdf8",.24);return f.position.set(0,0,1.15),t.add(f),this.group.add(t),{...e,group:t,hpSprite:f}}removeUnit(e){var t;e&&(this.grid[e.gridX][e.gridY].unit=null,this.group.remove(e.group),this.units=this.units.filter(n=>n.id!==e.id),((t=this.selectedUnit)==null?void 0:t.id)===e.id&&(this.selectedUnit=null))}selectUnit(e){this.selectedUnit=e,this.showFloatingText(e.gridX,e.gridY,`Ausgewählt: ${e.name}`,"#fbbf24"),this.updateTVHud()}moveUnit(e,t,n){if(!this.inBounds(t,n))return!1;const i=this.grid[t][n];if(i.unit)return!1;this.grid[e.gridX][e.gridY].unit=null,e.gridX=t,e.gridY=n,i.unit=e;const s=this.gridToWorld(t,n,.15);return e.group.position.copy(s),this.showFloatingText(t,n,"🏃 Schritt","#94a3b8"),this.syncStateWithControllers(),this.updateTVHud(),!0}pushUnit(e,t,n){const i=e.gridX+t,s=e.gridY+n;if(!this.inBounds(i,s)){this.showFloatingText(e.gridX,e.gridY,"💥 WAND! (-2 LP)","#f59e0b"),this.applyDamage(e,2);return}const o=this.grid[i][s];if(o.unit){this.showFloatingText(e.gridX,e.gridY,"💥 KOLLISION! (-2 LP)","#f59e0b"),this.applyDamage(e,2),this.applyDamage(o.unit,2);return}this.grid[e.gridX][e.gridY].unit=null,e.gridX=i,e.gridY=s,o.unit=e,e.group.position.copy(this.gridToWorld(i,s,.15)),this.showFloatingText(i,s,"💨 WEGGESTOSSEN!","#38bdf8"),this.syncStateWithControllers(),this.updateTVHud()}applyDamage(e,t){e&&(e.hp=Math.max(0,e.hp-t),this.updateUnitSprite(e),this.showFloatingText(e.gridX,e.gridY,`-${t} LP`,"#ef4444"),e.hp<=0&&(this.showFloatingText(e.gridX,e.gridY,"💀 K.o.!","#dc2626"),setTimeout(()=>{this.removeUnit(e),this.syncStateWithControllers(),this.updateTVHud()},900)))}applyHeal(e,t){e&&(e.hp=Math.min(e.maxHp,e.hp+t),this.updateUnitSprite(e),this.showFloatingText(e.gridX,e.gridY,`+${t} LP`,"#22c55e"),this.syncStateWithControllers(),this.updateTVHud())}updateUnitSprite(e){if(!e.hpSprite)return;e.group.remove(e.hpSprite);const t=e.isMonster?"#f87171":"#38bdf8";e.hpSprite=this.createTextSprite(`${e.icon} ${e.name} (${e.hp}/${e.maxHp} LP)`,t,.24),e.hpSprite.position.set(0,0,1.15),e.group.add(e.hpSprite)}createTextSprite(e,t="#ffffff",n=.3){const i=document.createElement("canvas");i.width=256,i.height=64;const s=i.getContext("2d");s.clearRect(0,0,256,64),s.fillStyle="rgba(15, 23, 42, 0.88)",s.roundRect(4,4,248,56,12),s.fill(),s.lineWidth=3,s.strokeStyle=t,s.stroke(),s.font="bold 24px sans-serif",s.fillStyle=t,s.textAlign="center",s.textBaseline="middle",s.fillText(e,128,32);const o=new Wa(i);o.minFilter=qt;const a=new As({map:o,depthTest:!1}),c=new Va(a);return c.scale.set(n*4,n,1),c}showFloatingText(e,t,n,i="#ffffff"){const s=this.gridToWorld(e,t,.8),o=this.createTextSprite(n,i,.26);o.position.copy(s),this.group.add(o);const a=performance.now();this.floatingTexts.push({sprite:o,startTime:a,duration:1300})}updateFloatingTexts(e){for(let t=this.floatingTexts.length-1;t>=0;t--){const n=this.floatingTexts[t];e-n.startTime>n.duration?(this.group.remove(n.sprite),this.floatingTexts.splice(t,1)):n.sprite.position.z+=.012}}getSerializedState(){return{round:this.currentRound,units:this.units.map(e=>({id:e.id,name:e.name,icon:e.icon,isMonster:e.isMonster,className:e.className||null,classKey:e.classKey||null,hp:e.hp,maxHp:e.maxHp,x:e.gridX,y:e.gridY}))}}syncStateWithControllers(){const e=this.getSerializedState(),t={type:"TACTICAL_STATE_UPDATE",payload:e};this.gameEngine.peerConnections.forEach(n=>{if(n&&n.open)try{n.send(t)}catch{}}),this.gameEngine.ws&&this.gameEngine.ws.readyState===WebSocket.OPEN&&this.gameEngine.ws.send(JSON.stringify({type:"HOST_SYNC_TACTICAL_STATE",payload:e}))}updateTVHud(){const e=document.getElementById("tact-selected-unit-info");e&&(this.selectedUnit?e.innerHTML=`
          <span style="color: #fbbf24; font-weight: 800;">${this.selectedUnit.icon} ${this.selectedUnit.name}</span>
          <span style="color: #94a3b8; font-size: 0.85rem; margin-left: 8px;">(${this.selectedUnit.hp}/${this.selectedUnit.maxHp} LP)</span>
        `:e.innerText="Keine Einheit gewählt");const t=document.getElementById("tact-round-display");t&&(t.innerText=`Runde ${this.currentRound}`)}update(e,t){this.group.visible&&this.updateFloatingTexts(t)}}class g0{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return _0(e).buffer}}function _0(r){let e=0;for(const i of r)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of r){const s=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);t.set(s,n),n+=i.byteLength}return t}function wh(r){return new v0(r).unpack()}function Ph(r){const e=new y0,t=e.pack(r);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class v0{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,i="",s,o;for(;n<e;)s=t[n],s<160?(o=s,n++):(s^192)<32?(o=(s&31)<<6|t[n+1]&63,n+=2):(s^224)<16?(o=(s&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(s&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),i+=String.fromCodePoint(o);return this.index+=e,i}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const i=this.unpack();t[i]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,i=e&8388607|8388608;return(t===0?1:-1)*i*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,i=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(i-20)+t*2**(i-52);return(n===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class y0{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=i=>{if(i<t){const s=this.pack(e[i]);return s instanceof Promise?s.then(()=>n(i+1)):n(i+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),i=e/2**n-1,s=Math.floor(i*2**52),o=2**32,a=t<<31|n+1023<<20|s/o&1048575,c=s%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const i=s=>{if(s<t.length){const o=t[s];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>i(s+1))}return i(s+1)}};return i(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new g0,this._textEncoder=new TextEncoder}}let Lh=!0,Ih=!0;function tr(r,e,t){const n=r.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function Qn(r,e,t){if(!r.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Ja("Unable to polyfill events");return}const i=r.RTCPeerConnection.prototype,s=i.addEventListener;i.addEventListener=function(a,c){if(a!==e)return s.apply(this,arguments);const l=h=>{const u=t(h);u&&(c.handleEvent?c.handleEvent(u):c(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),s.apply(this,[a,l])};const o=i.removeEventListener;i.removeEventListener=function(a,c){if(a!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(c))return o.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[a,l])},Object.defineProperty(i,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function x0(r){return typeof r!="boolean"?new Error("Argument type: "+typeof r+". Please use a boolean."):(Lh=r,r?"adapter.js logging disabled":"adapter.js logging enabled")}function S0(r){return typeof r!="boolean"?new Error("Argument type: "+typeof r+". Please use a boolean."):(Ih=!r,"adapter.js deprecation warnings "+(r?"disabled":"enabled"))}function Ja(){if(typeof window=="object"){if(Lh)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Za(r,e){Ih&&console.warn(r+" is deprecated, please use "+e+" instead.")}function M0(r){const e={browser:null,version:null};if(typeof r>"u"||!r.navigator||!r.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=r;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(i=>i.brand==="Chromium");if(n){const i=parseInt(n.version,10);if(i>=90)return{browser:"chrome",version:i}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(tr(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||r.isSecureContext===!1&&r.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(tr(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(r.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(tr(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=r.RTCRtpTransceiver&&"currentDirection"in r.RTCRtpTransceiver.prototype,e._safariVersion=tr(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Ll(r){return Object.prototype.toString.call(r)==="[object Object]"}function Dh(r){return Ll(r)?Object.keys(r).reduce(function(e,t){const n=Ll(r[t]),i=n?Dh(r[t]):r[t],s=n&&!Object.keys(i).length;return i===void 0||s?e:Object.assign(e,{[t]:i})},{}):r}function ga(r,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?ga(r,r.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(i=>{ga(r,r.get(i),t)})}))}function Il(r,e,t){const n=t?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;const s=[];return r.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&s.push(o)}),s.forEach(o=>{r.forEach(a=>{a.type===n&&a.trackId===o.id&&ga(r,a,i)})}),i}const Dl=Ja;function Uh(r,e){if(e.version>=64)return;const t=r&&r.navigator;if(!t.mediaDevices)return;const n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const c={};return Object.keys(a).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const h=typeof a[l]=="object"?a[l]:{ideal:a[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);const u=function(d,f){return d?d+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(h.ideal!==void 0){c.optional=c.optional||[];let d={};typeof h.ideal=="number"?(d[u("min",l)]=h.ideal,c.optional.push(d),d={},d[u("max",l)]=h.ideal,c.optional.push(d)):(d[u("",l)]=h.ideal,c.optional.push(d))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",l)]=h.exact):["min","max"].forEach(d=>{h[d]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(d,l)]=h[d])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},i=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const l=function(h,u,d){u in h&&!(d in h)&&(h[d]=h[u],delete h[u])};a=JSON.parse(JSON.stringify(a)),l(a.audio,"autoGainControl","googAutoGainControl"),l(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let l=a.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const h=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete a.video.facingMode;let u;if(l.exact==="environment"||l.ideal==="environment"?u=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(g=>g.kind==="videoinput");let f=d.find(g=>u.some(_=>g.label.toLowerCase().includes(_)));return!f&&d.length&&u.includes("back")&&(f=d[d.length-1]),f&&(a.video.deviceId=l.exact?{exact:f.deviceId}:{ideal:f.deviceId}),a.video=n(a.video),Dl("chrome: "+JSON.stringify(a)),c(a)})}a.video=n(a.video)}return Dl("chrome: "+JSON.stringify(a)),c(a)},s=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,l){i(a,h=>{t.webkitGetUserMedia(h,c,u=>{l&&l(s(u))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return i(c,l=>a(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(s(h))))}}}function Nh(r){r.MediaStream=r.MediaStream||r.webkitMediaStream}function Oh(r,e){if(!(e.version>102))if(typeof r=="object"&&r.RTCPeerConnection&&!("ontrack"in r.RTCPeerConnection.prototype)){Object.defineProperty(r.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=r.RTCPeerConnection.prototype.setRemoteDescription;r.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=i=>{i.stream.addEventListener("addtrack",s=>{let o;r.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===s.track.id):o={track:s.track};const a=new Event("track");a.track=s.track,a.receiver=o,a.transceiver={receiver:o},a.streams=[i.stream],this.dispatchEvent(a)}),i.stream.getTracks().forEach(s=>{let o;r.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===s.id):o={track:s};const a=new Event("track");a.track=s,a.receiver=o,a.transceiver={receiver:o},a.streams=[i.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else Qn(r,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Fh(r){if(typeof r=="object"&&r.RTCPeerConnection&&!("getSenders"in r.RTCPeerConnection.prototype)&&"createDTMFSender"in r.RTCPeerConnection.prototype){const e=function(i,s){return{track:s,get dtmf(){return this._dtmf===void 0&&(s.kind==="audio"?this._dtmf=i.createDTMFSender(s):this._dtmf=null),this._dtmf},_pc:i}};if(!r.RTCPeerConnection.prototype.getSenders){r.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const i=r.RTCPeerConnection.prototype.addTrack;r.RTCPeerConnection.prototype.addTrack=function(a,c){let l=i.apply(this,arguments);return l||(l=e(this,a),this._senders.push(l)),l};const s=r.RTCPeerConnection.prototype.removeTrack;r.RTCPeerConnection.prototype.removeTrack=function(a){s.apply(this,arguments);const c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}const t=r.RTCPeerConnection.prototype.addStream;r.RTCPeerConnection.prototype.addStream=function(s){this._senders=this._senders||[],t.apply(this,[s]),s.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const n=r.RTCPeerConnection.prototype.removeStream;r.RTCPeerConnection.prototype.removeStream=function(s){this._senders=this._senders||[],n.apply(this,[s]),s.getTracks().forEach(o=>{const a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof r=="object"&&r.RTCPeerConnection&&"getSenders"in r.RTCPeerConnection.prototype&&"createDTMFSender"in r.RTCPeerConnection.prototype&&r.RTCRtpSender&&!("dtmf"in r.RTCRtpSender.prototype)){const e=r.RTCPeerConnection.prototype.getSenders;r.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n},Object.defineProperty(r.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Bh(r,e){if(e.version>=67||!(typeof r=="object"&&r.RTCPeerConnection&&r.RTCRtpSender&&r.RTCRtpReceiver))return;if(!("getStats"in r.RTCRtpSender.prototype)){const n=r.RTCPeerConnection.prototype.getSenders;n&&(r.RTCPeerConnection.prototype.getSenders=function(){const o=n.apply(this,[]);return o.forEach(a=>a._pc=this),o});const i=r.RTCPeerConnection.prototype.addTrack;i&&(r.RTCPeerConnection.prototype.addTrack=function(){const o=i.apply(this,arguments);return o._pc=this,o}),r.RTCRtpSender.prototype.getStats=function(){const o=this;return this._pc.getStats().then(a=>Il(a,o.track,!0))}}if(!("getStats"in r.RTCRtpReceiver.prototype)){const n=r.RTCPeerConnection.prototype.getReceivers;n&&(r.RTCPeerConnection.prototype.getReceivers=function(){const s=n.apply(this,[]);return s.forEach(o=>o._pc=this),s}),Qn(r,"track",i=>(i.receiver._pc=i.srcElement,i)),r.RTCRtpReceiver.prototype.getStats=function(){const s=this;return this._pc.getStats().then(o=>Il(o,s.track,!1))}}if(!("getStats"in r.RTCRtpSender.prototype&&"getStats"in r.RTCRtpReceiver.prototype))return;const t=r.RTCPeerConnection.prototype.getStats;r.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof r.MediaStreamTrack){const i=arguments[0];let s,o,a;return this.getSenders().forEach(c=>{c.track===i&&(s?a=!0:s=c)}),this.getReceivers().forEach(c=>(c.track===i&&(o?a=!0:o=c),c.track===i)),a||s&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):s?s.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function kh(r){r.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=r.RTCPeerConnection.prototype.addTrack;r.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};const t=r.RTCPeerConnection.prototype.addStream;r.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(l=>{if(this.getSenders().find(u=>u.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>a.indexOf(l)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};const n=r.RTCPeerConnection.prototype.removeStream;r.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};const i=r.RTCPeerConnection.prototype.removeTrack;r.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),i.apply(this,arguments)}}function zh(r,e){if(!r.RTCPeerConnection)return;if(r.RTCPeerConnection.prototype.addTrack&&e.version>=65)return kh(r);const t=r.RTCPeerConnection.prototype.getLocalStreams;r.RTCPeerConnection.prototype.getLocalStreams=function(){const h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(u=>this._reverseStreams[u.id])};const n=r.RTCPeerConnection.prototype.addStream;r.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(u=>{if(this.getSenders().find(f=>f.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){const u=new r.MediaStream(h.getTracks());this._streams[h.id]=u,this._reverseStreams[u.id]=h,h=u}n.apply(this,[h])};const i=r.RTCPeerConnection.prototype.removeStream;r.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},i.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},r.RTCPeerConnection.prototype.addTrack=function(h,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(_=>_===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(_=>_.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[u.id];if(g)g.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const _=new r.MediaStream([h]);this._streams[u.id]=_,this._reverseStreams[_.id]=u,this.addStream(_)}return this.getSenders().find(_=>_.track===h)};function s(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const f=l._reverseStreams[d],g=l._streams[f.id];u=u.replace(new RegExp(g.id,"g"),f.id)}),new RTCSessionDescription({type:h.type,sdp:u})}function o(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const f=l._reverseStreams[d],g=l._streams[f.id];u=u.replace(new RegExp(f.id,"g"),g.id)}),new RTCSessionDescription({type:h.type,sdp:u})}["createOffer","createAnswer"].forEach(function(l){const h=r.RTCPeerConnection.prototype[l],u={[l](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[g=>{const _=s(this,g);d[0].apply(null,[_])},g=>{d[1]&&d[1].apply(null,g)},arguments[2]]):h.apply(this,arguments).then(g=>s(this,g))}};r.RTCPeerConnection.prototype[l]=u[l]});const a=r.RTCPeerConnection.prototype.setLocalDescription;r.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(r.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(r.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:s(this,l)}}),r.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(_=>h.track===_)&&(d=this._streams[f])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function _a(r,e){!r.RTCPeerConnection&&r.webkitRTCPeerConnection&&(r.RTCPeerConnection=r.webkitRTCPeerConnection),r.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=r.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?r.RTCIceCandidate:r.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};r.RTCPeerConnection.prototype[t]=i[t]})}function Hh(r,e){e.version>102||Qn(r,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const Ul=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:Hh,shimAddTrackRemoveTrack:zh,shimAddTrackRemoveTrackWithNative:kh,shimGetSendersWithDtmf:Fh,shimGetUserMedia:Uh,shimMediaStream:Nh,shimOnTrack:Oh,shimPeerConnection:_a,shimSenderReceiverGetStats:Bh},Symbol.toStringTag,{value:"Module"}));function Gh(r,e){const t=r&&r.navigator;if(!t.mediaDevices)return;const n=r&&r.MediaStreamTrack;if(t.getUserMedia=function(i,s,o){Za("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(i).then(s,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const i=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},s=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),i(o.audio,"autoGainControl","mozAutoGainControl"),i(o.audio,"noiseSuppression","mozNoiseSuppression")),s(o)},n&&n.prototype.getSettings){const o=n.prototype.getSettings;n.prototype.getSettings=function(){const a=o.apply(this,arguments);return i(a,"mozAutoGainControl","autoGainControl"),i(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){const o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),i(a,"autoGainControl","mozAutoGainControl"),i(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function E0(r,e){r.navigator.mediaDevices&&(r.navigator.mediaDevices&&"getDisplayMedia"in r.navigator.mediaDevices||(r.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const i=new DOMException("getDisplayMedia without video constraints is undefined");return i.name="NotFoundError",i.code=8,Promise.reject(i)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,r.navigator.mediaDevices.getUserMedia(n)}))}function Vh(r){typeof r=="object"&&r.RTCTrackEvent&&"receiver"in r.RTCTrackEvent.prototype&&!("transceiver"in r.RTCTrackEvent.prototype)&&Object.defineProperty(r.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function va(r,e){typeof r!="object"||!(r.RTCPeerConnection||r.mozRTCPeerConnection)||(!r.RTCPeerConnection&&r.mozRTCPeerConnection&&(r.RTCPeerConnection=r.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=r.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?r.RTCIceCandidate:r.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};r.RTCPeerConnection.prototype[t]=i[t]}))}function Wh(r,e){if(typeof r!="object"||!(r.RTCPeerConnection||r.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=r.RTCPeerConnection.prototype.getStats;r.RTCPeerConnection.prototype.getStats=function(){const[s,o,a]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[s||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,u)=>{c.set(u,Object.assign({},h,{type:t[h.type]||h.type}))})}return c}).then(o,a)}}function Xh(r){if(!(typeof r=="object"&&r.RTCPeerConnection&&r.RTCRtpSender)||r.RTCRtpSender&&"getStats"in r.RTCRtpSender.prototype)return;const e=r.RTCPeerConnection.prototype.getSenders;e&&(r.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(s=>s._pc=this),i});const t=r.RTCPeerConnection.prototype.addTrack;t&&(r.RTCPeerConnection.prototype.addTrack=function(){const i=t.apply(this,arguments);return i._pc=this,i}),r.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function $h(r){if(!(typeof r=="object"&&r.RTCPeerConnection&&r.RTCRtpSender)||r.RTCRtpSender&&"getStats"in r.RTCRtpReceiver.prototype)return;const e=r.RTCPeerConnection.prototype.getReceivers;e&&(r.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n}),Qn(r,"track",t=>(t.receiver._pc=t.srcElement,t)),r.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Yh(r){!r.RTCPeerConnection||"removeStream"in r.RTCPeerConnection.prototype||(r.RTCPeerConnection.prototype.removeStream=function(t){Za("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function qh(r){r.DataChannel&&!r.RTCDataChannel&&(r.RTCDataChannel=r.DataChannel)}function Kh(r,e){if(!(typeof r=="object"&&r.RTCPeerConnection)||e.version>=110)return;const t=r.RTCPeerConnection.prototype.addTransceiver;t&&(r.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let i=arguments[1]&&arguments[1].sendEncodings;i===void 0&&(i=[]),i=[...i];const s=i.length>0;s&&i.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const o=t.apply(this,arguments);if(s){const{sender:a}=o,c=a.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=i,a.sendEncodings=i,this.setParametersPromises.push(a.setParameters(c).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return o})}function jh(r,e){if(!(typeof r=="object"&&r.RTCRtpSender)||e.version>=110)return;const t=r.RTCRtpSender.prototype.getParameters;t&&(r.RTCRtpSender.prototype.getParameters=function(){const i=t.apply(this,arguments);return"encodings"in i||(i.encodings=[].concat(this.sendEncodings||[{}])),i})}function Jh(r,e){if(!(typeof r=="object"&&r.RTCPeerConnection)||e.version>=110)return;const t=r.RTCPeerConnection.prototype.createOffer;r.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function Zh(r,e){if(!(typeof r=="object"&&r.RTCPeerConnection)||e.version>=110)return;const t=r.RTCPeerConnection.prototype.createAnswer;r.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const Nl=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Kh,shimCreateAnswer:Zh,shimCreateOffer:Jh,shimGetDisplayMedia:E0,shimGetParameters:jh,shimGetStats:Wh,shimGetUserMedia:Gh,shimOnTrack:Vh,shimPeerConnection:va,shimRTCDataChannel:qh,shimReceiverGetStats:$h,shimRemoveStream:Yh,shimSenderGetStats:Xh},Symbol.toStringTag,{value:"Module"}));function Qh(r){if(!(typeof r!="object"||!r.RTCPeerConnection)){if("getLocalStreams"in r.RTCPeerConnection.prototype||(r.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in r.RTCPeerConnection.prototype)){const e=r.RTCPeerConnection.prototype.addTrack;r.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(i=>e.call(this,i,n)),n.getVideoTracks().forEach(i=>e.call(this,i,n))},r.RTCPeerConnection.prototype.addTrack=function(n,...i){return i&&i.forEach(s=>{this._localStreams?this._localStreams.includes(s)||this._localStreams.push(s):this._localStreams=[s]}),e.apply(this,arguments)}}"removeStream"in r.RTCPeerConnection.prototype||(r.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const i=t.getTracks();this.getSenders().forEach(s=>{i.includes(s.track)&&this.removeTrack(s)})})}}function eu(r){if(!(typeof r!="object"||!r.RTCPeerConnection)&&("getRemoteStreams"in r.RTCPeerConnection.prototype||(r.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in r.RTCPeerConnection.prototype))){Object.defineProperty(r.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(i=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(i))return;this._remoteStreams.push(i);const s=new Event("addstream");s.stream=i,this.dispatchEvent(s)})})}});const e=r.RTCPeerConnection.prototype.setRemoteDescription;r.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(s=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(s)>=0)return;n._remoteStreams.push(s);const o=new Event("addstream");o.stream=s,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function tu(r){if(typeof r!="object"||!r.RTCPeerConnection)return;const e=r.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,i=e.setLocalDescription,s=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[u]);return h?(d.then(l,h),Promise.resolve()):d},e.createAnswer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],d=n.apply(this,[u]);return h?(d.then(l,h),Promise.resolve()):d};let a=function(c,l,h){const u=i.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u};e.setLocalDescription=a,a=function(c,l,h){const u=s.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.setRemoteDescription=a,a=function(c,l,h){const u=o.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.addIceCandidate=a}function nu(r){const e=r&&r.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=i=>n(iu(i))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,i,s){e.mediaDevices.getUserMedia(n).then(i,s)}).bind(e))}function iu(r){return r&&r.video!==void 0?Object.assign({},r,{video:Dh(r.video)}):r}function ru(r){if(!r.RTCPeerConnection)return;const e=r.RTCPeerConnection;r.RTCPeerConnection=function(n,i){if(n&&n.iceServers){const s=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(Za("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,s.push(a)):s.push(n.iceServers[o])}n.iceServers=s}return new e(n,i)},r.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(r.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function su(r){typeof r=="object"&&r.RTCTrackEvent&&"receiver"in r.RTCTrackEvent.prototype&&!("transceiver"in r.RTCTrackEvent.prototype)&&Object.defineProperty(r.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function ou(r){const e=r.RTCPeerConnection.prototype.createOffer;r.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const i=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveAudio===!0&&!i&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const s=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveVideo===!0&&!s&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function au(r){typeof r!="object"||r.AudioContext||(r.AudioContext=r.webkitAudioContext)}const Ol=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:au,shimCallbacksAPI:tu,shimConstraints:iu,shimCreateOfferLegacy:ou,shimGetUserMedia:nu,shimLocalStreamsAPI:Qh,shimRTCIceServerUrls:ru,shimRemoteStreamsAPI:eu,shimTrackEventTransceiver:su},Symbol.toStringTag,{value:"Module"}));function T0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var cu={exports:{}};(function(r){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((i,s)=>(s>0?"m="+i:i).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(i=>i.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const i={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let s=8;s<n.length;s+=2)switch(n[s]){case"raddr":i.relatedAddress=n[s+1];break;case"rport":i.relatedPort=parseInt(n[s+1],10);break;case"tcptype":i.tcpType=n[s+1];break;case"ufrag":i.ufrag=n[s+1],i.usernameFragment=n[s+1];break;default:i[n[s]]===void 0&&(i[n[s]]=n[s+1]);break}return i},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const i=t.component;i==="rtp"?n.push(1):i==="rtcp"?n.push(2):n.push(i),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const s=t.type;return n.push("typ"),n.push(s),s!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const i={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),i.name=n[0],i.clockRate=parseInt(n[1],10),i.channels=n.length===3?parseInt(n[2],10):1,i.numChannels=i.channels,i},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const i=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(i!==1?"/"+i:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let i;const s=t.substring(t.indexOf(" ")+1).split(";");for(let o=0;o<s.length;o++)i=s[o].trim().split("="),n[i[0].trim()]=i[1];return n},e.writeFmtp=function(t){let n="",i=t.payloadType;if(t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const s=[];Object.keys(t.parameters).forEach(o=>{t.parameters[o]!==void 0?s.push(o+"="+t.parameters[o]):s.push(o)}),n+="a=fmtp:"+i+" "+s.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",i=t.payloadType;return t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(s=>{n+="a=rtcp-fb:"+i+" "+s.type+(s.parameter&&s.parameter.length?" "+s.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),i={ssrc:parseInt(t.substring(7,n),10)},s=t.indexOf(":",n);return s>-1?(i.attribute=t.substring(n+1,s),i.value=t.substring(s+1)):i.attribute=t.substring(n+1),i},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(i=>parseInt(i,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let i="a=setup:"+n+`\r
`;return t.fingerprints.forEach(s=>{i+="a=fingerprint:"+s.algorithm+" "+s.value+`\r
`}),i},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const i=e.matchPrefix(t+n,"a=ice-ufrag:")[0],s=e.matchPrefix(t+n,"a=ice-pwd:")[0];return i&&s?{usernameFragment:i.substring(12),password:s.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},s=e.splitLines(t)[0].split(" ");n.profile=s[2];for(let a=3;a<s.length;a++){const c=s[a],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const h=e.parseRtpMap(l),u=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(h.parameters=u.length?e.parseFmtp(u[0]):{},h.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(h),h.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(h.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{n.headerExtensions.push(e.parseExtmap(a))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(a=>{o.forEach(c=>{a.rtcpFeedback.find(h=>h.type===c.type&&h.parameter===c.parameter)||a.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let i="";i+="m="+t+" ",i+=n.codecs.length>0?"9":"0",i+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",i+=n.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,i+=`c=IN IP4 0.0.0.0\r
`,i+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(o=>{i+=e.writeRtpMap(o),i+=e.writeFmtp(o),i+=e.writeRtcpFb(o)});let s=0;return n.codecs.forEach(o=>{o.maxptime>s&&(s=o.maxptime)}),s>0&&(i+="a=maxptime:"+s+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(o=>{i+=e.writeExtmap(o)}),i},e.parseRtpEncodingParameters=function(t){const n=[],i=e.parseRtpParameters(t),s=i.fecMechanisms.indexOf("RED")!==-1,o=i.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname"),c=a.length>0&&a[0].ssrc;let l;const h=e.matchPrefix(t,"a=ssrc-group:FID").map(d=>d.substring(17).split(" ").map(g=>parseInt(g,10)));h.length>0&&h[0].length>1&&h[0][0]===c&&(l=h[0][1]),i.codecs.forEach(d=>{if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){let f={ssrc:c,codecPayloadType:parseInt(d.parameters.apt,10)};c&&l&&(f.rtx={ssrc:l}),n.push(f),s&&(f=JSON.parse(JSON.stringify(f)),f.fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},n.push(f))}}),n.length===0&&c&&n.push({ssrc:c});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-50*40*8:u=void 0,n.forEach(d=>{d.maxBitrate=u})),n},e.parseRtcpParameters=function(t){const n={},i=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];i&&(n.cname=i.value,n.ssrc=i.ssrc);const s=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=s.length>0,n.compound=s.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return n.mux=o.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const i=e.matchPrefix(t,"a=msid:");if(i.length===1)return n=i[0].substring(7).split(" "),{stream:n[0],track:n[1]};const s=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="msid");if(s.length>0)return n=s[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),i=e.matchPrefix(t,"a=max-message-size:");let s;i.length>0&&(s=parseInt(i[0].substring(19),10)),isNaN(s)&&(s=65536);const o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substring(12),10),protocol:n.fmt,maxMessageSize:s};const a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){const c=a[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:s}}},e.writeSctpDescription=function(t,n){let i=[];return t.protocol!=="DTLS/SCTP"?i=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:i=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&i.push("a=max-message-size:"+n.maxMessageSize+`\r
`),i.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,i){let s;const o=n!==void 0?n:2;return t?s=t:s=e.generateSessionId(),`v=0\r
o=`+(i||"thisisadapterortc")+" "+s+" "+o+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const i=e.splitLines(t);for(let s=0;s<i.length;s++)switch(i[s]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return i[s].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const i=e.splitLines(t)[0].substring(2).split(" ");return{kind:i[0],port:parseInt(i[1],10),protocol:i[2],fmt:i.slice(3).join(" ")}},e.parseOLine=function(t){const i=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:i[0],sessionId:i[1],sessionVersion:parseInt(i[2],10),netType:i[3],addressType:i[4],address:i[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let i=0;i<n.length;i++)if(n[i].length<2||n[i].charAt(1)!=="=")return!1;return!0},r.exports=e})(cu);var lu=cu.exports;const Ci=T0(lu),b0=Fu({__proto__:null,default:Ci},[lu]);function ls(r){if(!r.RTCIceCandidate||r.RTCIceCandidate&&"foundation"in r.RTCIceCandidate.prototype)return;const e=r.RTCIceCandidate;r.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const i=new e(n),s=Ci.parseCandidate(n.candidate);for(const o in s)o in i||Object.defineProperty(i,o,{value:s[o]});return i.toJSON=function(){return{candidate:i.candidate,sdpMid:i.sdpMid,sdpMLineIndex:i.sdpMLineIndex,usernameFragment:i.usernameFragment}},i}return new e(n)},r.RTCIceCandidate.prototype=e.prototype,Qn(r,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new r.RTCIceCandidate(t.candidate),writable:"false"}),t))}function ya(r){!r.RTCIceCandidate||r.RTCIceCandidate&&"relayProtocol"in r.RTCIceCandidate.prototype||Qn(r,"icecandidate",e=>{if(e.candidate){const t=Ci.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function hs(r,e){if(!r.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in r.RTCPeerConnection.prototype||Object.defineProperty(r.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const c=Ci.splitSections(a.sdp);return c.shift(),c.some(l=>{const h=Ci.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(a){const c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},i=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},s=function(a,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const h=Ci.matchPrefix(a.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},o=r.RTCPeerConnection.prototype.setRemoteDescription;r.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=i(c),h=s(arguments[0],c);let u;l===0&&h===0?u=Number.POSITIVE_INFINITY:l===0||h===0?u=Math.max(l,h):u=Math.min(l,h);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return u}}),this._sctp=d}return o.apply(this,arguments)}}function us(r,e){if(!(r.RTCPeerConnection&&"createDataChannel"in r.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(i,s){const o=i.send;i.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(i.readyState==="open"&&s.sctp&&l>s.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+s.sctp.maxMessageSize+" bytes)");return o.apply(i,arguments)}}const n=r.RTCPeerConnection.prototype.createDataChannel;r.RTCPeerConnection.prototype.createDataChannel=function(){const s=n.apply(this,arguments);return t(s,this),s},Qn(r,"datachannel",i=>(t(i.channel,i.target),i))}function xa(r){if(!r.RTCPeerConnection||"connectionState"in r.RTCPeerConnection.prototype)return;const e=r.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=i=>{const s=i.target;if(s._lastConnectionState!==s.connectionState){s._lastConnectionState=s.connectionState;const o=new Event("connectionstatechange",i);s.dispatchEvent(o)}return i},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function Sa(r,e){if(!r.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=r.RTCPeerConnection.prototype.setRemoteDescription;r.RTCPeerConnection.prototype.setRemoteDescription=function(i){if(i&&i.sdp&&i.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const s=i.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);r.RTCSessionDescription&&i instanceof r.RTCSessionDescription?arguments[0]=new r.RTCSessionDescription({type:i.type,sdp:s}):i.sdp=s}return t.apply(this,arguments)}}function ds(r,e){if(!(r.RTCPeerConnection&&r.RTCPeerConnection.prototype))return;const t=r.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(r.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function fs(r,e){if(!(r.RTCPeerConnection&&r.RTCPeerConnection.prototype))return;const t=r.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(r.RTCPeerConnection.prototype.setLocalDescription=function(){let i=arguments[0]||{};if(typeof i!="object"||i.type&&i.sdp)return t.apply(this,arguments);if(i={type:i.type,sdp:i.sdp},!i.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":i.type="offer";break;default:i.type="answer";break}return i.sdp||i.type!=="offer"&&i.type!=="answer"?t.apply(this,[i]):(i.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const C0=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Sa,shimAddIceCandidateNullOrEmpty:ds,shimConnectionState:xa,shimMaxMessageSize:hs,shimParameterlessSetLocalDescription:fs,shimRTCIceCandidate:ls,shimRTCIceCandidateRelayProtocol:ya,shimSendThrowTypeError:us},Symbol.toStringTag,{value:"Module"}));function A0({window:r}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Ja,n=M0(r),i={browserDetails:n,commonShim:C0,extractVersion:tr,disableLog:x0,disableWarnings:S0,sdp:b0};switch(n.browser){case"chrome":if(!Ul||!_a||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),i;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),i;t("adapter.js shimming chrome."),i.browserShim=Ul,ds(r,n),fs(r),Uh(r,n),Nh(r),_a(r,n),Oh(r,n),zh(r,n),Fh(r),Bh(r,n),Hh(r,n),ls(r),ya(r),xa(r),hs(r,n),us(r,n),Sa(r,n);break;case"firefox":if(!Nl||!va||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),i;t("adapter.js shimming firefox."),i.browserShim=Nl,ds(r,n),fs(r),Gh(r,n),va(r,n),Wh(r,n),Vh(r),Yh(r),Xh(r),$h(r),qh(r),Kh(r,n),jh(r,n),Jh(r,n),Zh(r,n),ls(r),xa(r),hs(r,n),us(r,n);break;case"safari":if(!Ol||!e.shimSafari)return t("Safari shim is not included in this adapter release."),i;t("adapter.js shimming safari."),i.browserShim=Ol,ds(r,n),fs(r),ru(r),ou(r),tu(r),Qh(r),eu(r),su(r),nu(r),au(r),ls(r),ya(r),hs(r,n),us(r,n),Sa(r,n);break;default:t("Unsupported browser!");break}return i}const Fl=A0({window:typeof window>"u"?void 0:window});function ei(r,e,t,n){Object.defineProperty(r,e,{get:t,set:n,enumerable:!0,configurable:!0})}class hu{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,i=Math.ceil(n/this.chunkedMTU);let s=0,o=0;for(;o<n;){const a=Math.min(n,o+this.chunkedMTU),c=e.slice(o,a),l={__peerData:this._dataCount,n:s,data:c,total:i};t.push(l),o=a,s++}return this._dataCount++,t}}}function R0(r){let e=0;for(const i of r)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of r)t.set(i,n),n+=i.byteLength;return t}const vo=Fl.default||Fl,Zi=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const r=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(r)?r==="chrome"?e>=this.minChromeVersion:r==="firefox"?e>=this.minFirefoxVersion:r==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return vo.browserDetails.browser}getVersion(){return vo.browserDetails.version||0}isUnifiedPlanSupported(){const r=this.getBrowser(),e=vo.browserDetails.version||0;if(r==="chrome"&&e<this.minChromeVersion)return!1;if(r==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},w0=r=>!r||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(r),uu=()=>Math.random().toString(36).slice(2),Bl={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class P0 extends hu{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(i){i.target&&t(i.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Bl,this.browser=Zi.getBrowser(),this.browserVersion=Zi.getVersion(),this.pack=Ph,this.unpack=wh,this.supports=function(){const t={browser:Zi.isBrowserSupported(),webRTC:Zi.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(Bl),t.audioVideo=!0;let i;try{i=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!i.ordered;try{i.binaryType="blob",t.binaryBlob=!Zi.isIOS}catch{}}catch{}finally{i&&i.close()}}catch{}finally{n&&n.close()}return t}(),this.validateId=w0,this.randomToken=uu}}const At=new P0,L0="PeerJS: ";class I0{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[L0,...t];for(const i in n)n[i]instanceof Error&&(n[i]="("+n[i].name+") "+n[i].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var pe=new I0,Qa={},D0=Object.prototype.hasOwnProperty,bt="~";function lr(){}Object.create&&(lr.prototype=Object.create(null),new lr().__proto__||(bt=!1));function U0(r,e,t){this.fn=r,this.context=e,this.once=t||!1}function du(r,e,t,n,i){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new U0(t,n||r,i),o=bt?bt+e:e;return r._events[o]?r._events[o].fn?r._events[o]=[r._events[o],s]:r._events[o].push(s):(r._events[o]=s,r._eventsCount++),r}function ps(r,e){--r._eventsCount===0?r._events=new lr:delete r._events[e]}function St(){this._events=new lr,this._eventsCount=0}St.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)D0.call(t,n)&&e.push(bt?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};St.prototype.listeners=function(e){var t=bt?bt+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,s=n.length,o=new Array(s);i<s;i++)o[i]=n[i].fn;return o};St.prototype.listenerCount=function(e){var t=bt?bt+e:e,n=this._events[t];return n?n.fn?1:n.length:0};St.prototype.emit=function(e,t,n,i,s,o){var a=bt?bt+e:e;if(!this._events[a])return!1;var c=this._events[a],l=arguments.length,h,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,i),!0;case 5:return c.fn.call(c.context,t,n,i,s),!0;case 6:return c.fn.call(c.context,t,n,i,s,o),!0}for(u=1,h=new Array(l-1);u<l;u++)h[u-1]=arguments[u];c.fn.apply(c.context,h)}else{var d=c.length,f;for(u=0;u<d;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),l){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,i);break;default:if(!h)for(f=1,h=new Array(l-1);f<l;f++)h[f-1]=arguments[f];c[u].fn.apply(c[u].context,h)}}return!0};St.prototype.on=function(e,t,n){return du(this,e,t,n,!1)};St.prototype.once=function(e,t,n){return du(this,e,t,n,!0)};St.prototype.removeListener=function(e,t,n,i){var s=bt?bt+e:e;if(!this._events[s])return this;if(!t)return ps(this,s),this;var o=this._events[s];if(o.fn)o.fn===t&&(!i||o.once)&&(!n||o.context===n)&&ps(this,s);else{for(var a=0,c=[],l=o.length;a<l;a++)(o[a].fn!==t||i&&!o[a].once||n&&o[a].context!==n)&&c.push(o[a]);c.length?this._events[s]=c.length===1?c[0]:c:ps(this,s)}return this};St.prototype.removeAllListeners=function(e){var t;return e?(t=bt?bt+e:e,this._events[t]&&ps(this,t)):(this._events=new lr,this._eventsCount=0),this};St.prototype.off=St.prototype.removeListener;St.prototype.addListener=St.prototype.on;St.prefixed=bt;St.EventEmitter=St;Qa=St;var ti={};ei(ti,"ConnectionType",()=>In);ei(ti,"PeerErrorType",()=>lt);ei(ti,"BaseConnectionErrorType",()=>Ma);ei(ti,"DataConnectionErrorType",()=>ec);ei(ti,"SerializationType",()=>ws);ei(ti,"SocketEventType",()=>An);ei(ti,"ServerMessageType",()=>yt);var In=function(r){return r.Data="data",r.Media="media",r}({}),lt=function(r){return r.BrowserIncompatible="browser-incompatible",r.Disconnected="disconnected",r.InvalidID="invalid-id",r.InvalidKey="invalid-key",r.Network="network",r.PeerUnavailable="peer-unavailable",r.SslUnavailable="ssl-unavailable",r.ServerError="server-error",r.SocketError="socket-error",r.SocketClosed="socket-closed",r.UnavailableID="unavailable-id",r.WebRTC="webrtc",r}({}),Ma=function(r){return r.NegotiationFailed="negotiation-failed",r.ConnectionClosed="connection-closed",r}({}),ec=function(r){return r.NotOpenYet="not-open-yet",r.MessageToBig="message-too-big",r}({}),ws=function(r){return r.Binary="binary",r.BinaryUTF8="binary-utf8",r.JSON="json",r.None="raw",r}({}),An=function(r){return r.Message="message",r.Disconnected="disconnected",r.Error="error",r.Close="close",r}({}),yt=function(r){return r.Heartbeat="HEARTBEAT",r.Candidate="CANDIDATE",r.Offer="OFFER",r.Answer="ANSWER",r.Open="OPEN",r.Error="ERROR",r.IdTaken="ID-TAKEN",r.InvalidKey="INVALID-KEY",r.Leave="LEAVE",r.Expire="EXPIRE",r}({});const fu="1.5.5";class N0 extends Qa.EventEmitter{constructor(e,t,n,i,s,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+i+"peerjs?key="+s}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+fu),this._disconnected=!1,this._socket.onmessage=i=>{let s;try{s=JSON.parse(i.data),pe.log("Server message received:",s)}catch{pe.log("Invalid server message",i.data);return}this.emit(An.Message,s)},this._socket.onclose=i=>{this._disconnected||(pe.log("Socket closed.",i),this._cleanup(),this._disconnected=!0,this.emit(An.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),pe.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){pe.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:yt.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(An.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class pu{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===In.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,i={ordered:!!e.reliable},s=t.createDataChannel(n.label,i);n._initializeDataChannel(s),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){pe.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,i=this.connection.type,s=this.connection.provider;pe.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(pe.log(`Received ICE candidates for ${t}:`,o.candidate),s.socket.send({type:yt.Candidate,payload:{candidate:o.candidate,type:i,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":pe.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Ma.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":pe.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Ma.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":pe.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},pe.log("Listening for data channel"),e.ondatachannel=o=>{pe.log("Received data channel");const a=o.channel;s.getConnection(t,n)._initializeDataChannel(a)},pe.log("Listening for remote stream"),e.ontrack=o=>{pe.log("Received remote stream");const a=o.streams[0],c=s.getConnection(t,n);if(c.type===In.Media){const l=c;this._addStreamToMediaConnection(a,l)}}}cleanup(){pe.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const i=this.connection.dataChannel;i&&(n=!!i.readyState&&i.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);pe.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),pe.log("Set localDescription:",n,`for:${this.connection.peer}`);let i={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===In.Data){const s=this.connection;i={...i,label:s.label,reliable:s.reliable,serialization:s.serialization}}t.socket.send({type:yt.Offer,payload:i,dst:this.connection.peer})}catch(i){i!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(lt.WebRTC,i),pe.log("Failed to setLocalDescription, ",i))}}catch(n){t.emitError(lt.WebRTC,n),pe.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();pe.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),pe.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:yt.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(i){t.emitError(lt.WebRTC,i),pe.log("Failed to setLocalDescription, ",i)}}catch(n){t.emitError(lt.WebRTC,n),pe.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,i=this.connection.provider;pe.log("Setting remote description",t);const s=this;try{await n.setRemoteDescription(t),pe.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await s._makeAnswer()}catch(o){i.emitError(lt.WebRTC,o),pe.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){pe.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),pe.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(lt.WebRTC,t),pe.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(pe.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return pe.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){pe.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class mu extends Qa.EventEmitter{emitError(e,t){pe.error("Error:",t),this.emit("error",new O0(`${e}`,t))}}class O0 extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class gu extends mu{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var Ra;const sr=class sr extends gu{get type(){return In.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||sr.ID_PREFIX+At.randomToken(),this._negotiator=new pu(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{pe.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{pe.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){pe.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case yt.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case yt.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:pe.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){pe.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const i of n)this.handleMessage(i);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};Ra=new WeakMap,Vi(sr,Ra,sr.ID_PREFIX="mc_");let ys=sr;class F0{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:i,path:s,key:o}=this._options,a=new URL(`${t}://${n}:${i}${s}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",fu),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){pe.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==At.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===At.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw pe.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var wa,Pa;const Yn=class Yn extends gu{get type(){return In.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||Yn.ID_PREFIX+uu(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new pu(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{pe.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{pe.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{pe.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(ec.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case yt.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case yt.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:pe.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};wa=new WeakMap,Pa=new WeakMap,Vi(Yn,wa,Yn.ID_PREFIX="dc_"),Vi(Yn,Pa,Yn.MAX_BUFFERED_AMOUNT=8388608);let xs=Yn;class tc extends xs{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>xs.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return pe.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class yo extends tc{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new hu,this.serialization=ws.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=wh(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const i=R0(n.data);this._handleDataMessage({data:i})}}_send(e,t){const n=Ph(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);pe.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class B0 extends tc{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=ws.None}}class k0 extends tc{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=At.chunkedMTU){this.emitError(ec.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=ws.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var La;const or=class or extends mu{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:B0,json:k0,binary:yo,"binary-utf8":yo,default:yo},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:At.CLOUD_HOST,port:At.CLOUD_PORT,path:"/",key:or.DEFAULT_KEY,token:At.randomToken(),config:At.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==At.CLOUD_HOST?this._options.secure=At.isSecure():this._options.host==At.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&pe.setLogFunction(this._options.logFunction),pe.logLevel=this._options.debug||0,this._api=new F0(t),this._socket=this._createServerConnection(),!At.supports.audioVideo&&!At.supports.data){this._delayedAbort(lt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!At.validateId(n)){this._delayedAbort(lt.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(i=>this._initialize(i)).catch(i=>this._abort(lt.ServerError,i))}_createServerConnection(){const e=new N0(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(An.Message,t=>{this._handleMessage(t)}),e.on(An.Error,t=>{this._abort(lt.SocketError,t)}),e.on(An.Disconnected,()=>{this.disconnected||(this.emitError(lt.Network,"Lost connection to server."),this.disconnect())}),e.on(An.Close,()=>{this.disconnected||this._abort(lt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,i=e.src;switch(t){case yt.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case yt.Error:this._abort(lt.ServerError,n.msg);break;case yt.IdTaken:this._abort(lt.UnavailableID,`ID "${this.id}" is taken`);break;case yt.InvalidKey:this._abort(lt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case yt.Leave:pe.log(`Received leave message from ${i}`),this._cleanupPeer(i),this._connections.delete(i);break;case yt.Expire:this.emitError(lt.PeerUnavailable,`Could not connect to peer ${i}`);break;case yt.Offer:{const s=n.connectionId;let o=this.getConnection(i,s);if(o&&(o.close(),pe.warn(`Offer received for existing Connection ID:${s}`)),n.type===In.Media){const c=new ys(i,this,{connectionId:s,_payload:n,metadata:n.metadata});o=c,this._addConnection(i,o),this.emit("call",c)}else if(n.type===In.Data){const c=new this._serializers[n.serialization](i,this,{connectionId:s,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=c,this._addConnection(i,o),this.emit("connection",c)}else{pe.warn(`Received malformed connection type:${n.type}`);return}const a=this._getMessages(s);for(const c of a)o.handleMessage(c);break}default:{if(!n){pe.warn(`You received a malformed message from ${i} of type ${t}`);return}const s=n.connectionId,o=this.getConnection(i,s);o&&o.peerConnection?o.handleMessage(e):s?this._storeMessage(s,e):pe.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){pe.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(lt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){pe.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(lt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){pe.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const i=new ys(e,this,{...n,_stream:t});return this._addConnection(e,i),i}_addConnection(e,t){pe.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const i of n)if(i.connectionId===t)return i;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){pe.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(pe.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;pe.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)pe.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)pe.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(lt.ServerError,t))}};La=new WeakMap,Vi(or,La,or.DEFAULT_KEY="peerjs");let Ea=or;var z0=Ea,gr={},H0=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},_u={},Ut={};let nc;const G0=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Ut.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};Ut.getSymbolTotalCodewords=function(e){return G0[e]};Ut.getBCHDigit=function(r){let e=0;for(;r!==0;)e++,r>>>=1;return e};Ut.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');nc=e};Ut.isKanjiModeEnabled=function(){return typeof nc<"u"};Ut.toSJIS=function(e){return nc(e)};var Ps={};(function(r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+t)}}r.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},r.from=function(n,i){if(r.isValid(n))return n;try{return e(n)}catch{return i}}})(Ps);function vu(){this.buffer=[],this.length=0}vu.prototype={get:function(r){const e=Math.floor(r/8);return(this.buffer[e]>>>7-r%8&1)===1},put:function(r,e){for(let t=0;t<e;t++)this.putBit((r>>>e-t-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(r){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),r&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var V0=vu;function _r(r){if(!r||r<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=r,this.data=new Uint8Array(r*r),this.reservedBit=new Uint8Array(r*r)}_r.prototype.set=function(r,e,t,n){const i=r*this.size+e;this.data[i]=t,n&&(this.reservedBit[i]=!0)};_r.prototype.get=function(r,e){return this.data[r*this.size+e]};_r.prototype.xor=function(r,e,t){this.data[r*this.size+e]^=t};_r.prototype.isReserved=function(r,e){return this.reservedBit[r*this.size+e]};var W0=_r,yu={};(function(r){const e=Ut.getSymbolSize;r.getRowColCoords=function(n){if(n===1)return[];const i=Math.floor(n/7)+2,s=e(n),o=s===145?26:Math.ceil((s-13)/(2*i-2))*2,a=[s-7];for(let c=1;c<i-1;c++)a[c]=a[c-1]-o;return a.push(6),a.reverse()},r.getPositions=function(n){const i=[],s=r.getRowColCoords(n),o=s.length;for(let a=0;a<o;a++)for(let c=0;c<o;c++)a===0&&c===0||a===0&&c===o-1||a===o-1&&c===0||i.push([s[a],s[c]]);return i}})(yu);var xu={};const X0=Ut.getSymbolSize,kl=7;xu.getPositions=function(e){const t=X0(e);return[[0,0],[t-kl,0],[0,t-kl]]};var Su={};(function(r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};r.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},r.from=function(i){return r.isValid(i)?parseInt(i,10):void 0},r.getPenaltyN1=function(i){const s=i.size;let o=0,a=0,c=0,l=null,h=null;for(let u=0;u<s;u++){a=c=0,l=h=null;for(let d=0;d<s;d++){let f=i.get(u,d);f===l?a++:(a>=5&&(o+=e.N1+(a-5)),l=f,a=1),f=i.get(d,u),f===h?c++:(c>=5&&(o+=e.N1+(c-5)),h=f,c=1)}a>=5&&(o+=e.N1+(a-5)),c>=5&&(o+=e.N1+(c-5))}return o},r.getPenaltyN2=function(i){const s=i.size;let o=0;for(let a=0;a<s-1;a++)for(let c=0;c<s-1;c++){const l=i.get(a,c)+i.get(a,c+1)+i.get(a+1,c)+i.get(a+1,c+1);(l===4||l===0)&&o++}return o*e.N2},r.getPenaltyN3=function(i){const s=i.size;let o=0,a=0,c=0;for(let l=0;l<s;l++){a=c=0;for(let h=0;h<s;h++)a=a<<1&2047|i.get(l,h),h>=10&&(a===1488||a===93)&&o++,c=c<<1&2047|i.get(h,l),h>=10&&(c===1488||c===93)&&o++}return o*e.N3},r.getPenaltyN4=function(i){let s=0;const o=i.data.length;for(let c=0;c<o;c++)s+=i.data[c];return Math.abs(Math.ceil(s*100/o/5)-10)*e.N4};function t(n,i,s){switch(n){case r.Patterns.PATTERN000:return(i+s)%2===0;case r.Patterns.PATTERN001:return i%2===0;case r.Patterns.PATTERN010:return s%3===0;case r.Patterns.PATTERN011:return(i+s)%3===0;case r.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case r.Patterns.PATTERN101:return i*s%2+i*s%3===0;case r.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case r.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}r.applyMask=function(i,s){const o=s.size;for(let a=0;a<o;a++)for(let c=0;c<o;c++)s.isReserved(c,a)||s.xor(c,a,t(i,c,a))},r.getBestMask=function(i,s){const o=Object.keys(r.Patterns).length;let a=0,c=1/0;for(let l=0;l<o;l++){s(l),r.applyMask(l,i);const h=r.getPenaltyN1(i)+r.getPenaltyN2(i)+r.getPenaltyN3(i)+r.getPenaltyN4(i);r.applyMask(l,i),h<c&&(c=h,a=l)}return a}})(Su);var Ls={};const Rn=Ps,es=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],ts=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Ls.getBlocksCount=function(e,t){switch(t){case Rn.L:return es[(e-1)*4+0];case Rn.M:return es[(e-1)*4+1];case Rn.Q:return es[(e-1)*4+2];case Rn.H:return es[(e-1)*4+3];default:return}};Ls.getTotalCodewordsCount=function(e,t){switch(t){case Rn.L:return ts[(e-1)*4+0];case Rn.M:return ts[(e-1)*4+1];case Rn.Q:return ts[(e-1)*4+2];case Rn.H:return ts[(e-1)*4+3];default:return}};var Mu={},Is={};const rr=new Uint8Array(512),Ss=new Uint8Array(256);(function(){let e=1;for(let t=0;t<255;t++)rr[t]=e,Ss[e]=t,e<<=1,e&256&&(e^=285);for(let t=255;t<512;t++)rr[t]=rr[t-255]})();Is.log=function(e){if(e<1)throw new Error("log("+e+")");return Ss[e]};Is.exp=function(e){return rr[e]};Is.mul=function(e,t){return e===0||t===0?0:rr[Ss[e]+Ss[t]]};(function(r){const e=Is;r.mul=function(n,i){const s=new Uint8Array(n.length+i.length-1);for(let o=0;o<n.length;o++)for(let a=0;a<i.length;a++)s[o+a]^=e.mul(n[o],i[a]);return s},r.mod=function(n,i){let s=new Uint8Array(n);for(;s.length-i.length>=0;){const o=s[0];for(let c=0;c<i.length;c++)s[c]^=e.mul(i[c],o);let a=0;for(;a<s.length&&s[a]===0;)a++;s=s.slice(a)}return s},r.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let s=0;s<n;s++)i=r.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(Mu);const Eu=Mu;function ic(r){this.genPoly=void 0,this.degree=r,this.degree&&this.initialize(this.degree)}ic.prototype.initialize=function(e){this.degree=e,this.genPoly=Eu.generateECPolynomial(this.degree)};ic.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const n=Eu.mod(t,this.genPoly),i=this.degree-n.length;if(i>0){const s=new Uint8Array(this.degree);return s.set(n,i),s}return n};var $0=ic,Tu={},On={},rc={};rc.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var nn={};const bu="[0-9]+",Y0="[A-Z $%*+\\-./:]+";let hr="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";hr=hr.replace(/u/g,"\\u");const q0="(?:(?![A-Z0-9 $%*+\\-./:]|"+hr+`)(?:.|[\r
]))+`;nn.KANJI=new RegExp(hr,"g");nn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");nn.BYTE=new RegExp(q0,"g");nn.NUMERIC=new RegExp(bu,"g");nn.ALPHANUMERIC=new RegExp(Y0,"g");const K0=new RegExp("^"+hr+"$"),j0=new RegExp("^"+bu+"$"),J0=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");nn.testKanji=function(e){return K0.test(e)};nn.testNumeric=function(e){return j0.test(e)};nn.testAlphanumeric=function(e){return J0.test(e)};(function(r){const e=rc,t=nn;r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(s,o){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?s.ccBits[0]:o<27?s.ccBits[1]:s.ccBits[2]},r.getBestModeForData=function(s){return t.testNumeric(s)?r.NUMERIC:t.testAlphanumeric(s)?r.ALPHANUMERIC:t.testKanji(s)?r.KANJI:r.BYTE},r.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},r.isValid=function(s){return s&&s.bit&&s.ccBits};function n(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+i)}}r.from=function(s,o){if(r.isValid(s))return s;try{return n(s)}catch{return o}}})(On);(function(r){const e=Ut,t=Ls,n=Ps,i=On,s=rc,o=7973,a=e.getBCHDigit(o);function c(d,f,g){for(let _=1;_<=40;_++)if(f<=r.getCapacity(_,g,d))return _}function l(d,f){return i.getCharCountIndicator(d,f)+4}function h(d,f){let g=0;return d.forEach(function(_){const m=l(_.mode,f);g+=m+_.getBitsLength()}),g}function u(d,f){for(let g=1;g<=40;g++)if(h(d,g)<=r.getCapacity(g,f,i.MIXED))return g}r.from=function(f,g){return s.isValid(f)?parseInt(f,10):g},r.getCapacity=function(f,g,_){if(!s.isValid(f))throw new Error("Invalid QR Code version");typeof _>"u"&&(_=i.BYTE);const m=e.getSymbolTotalCodewords(f),p=t.getTotalCodewordsCount(f,g),T=(m-p)*8;if(_===i.MIXED)return T;const E=T-l(_,f);switch(_){case i.NUMERIC:return Math.floor(E/10*3);case i.ALPHANUMERIC:return Math.floor(E/11*2);case i.KANJI:return Math.floor(E/13);case i.BYTE:default:return Math.floor(E/8)}},r.getBestVersionForData=function(f,g){let _;const m=n.from(g,n.M);if(Array.isArray(f)){if(f.length>1)return u(f,m);if(f.length===0)return 1;_=f[0]}else _=f;return c(_.mode,_.getLength(),m)},r.getEncodedBits=function(f){if(!s.isValid(f)||f<7)throw new Error("Invalid QR Code version");let g=f<<12;for(;e.getBCHDigit(g)-a>=0;)g^=o<<e.getBCHDigit(g)-a;return f<<12|g}})(Tu);var Cu={};const Ta=Ut,Au=1335,Z0=21522,zl=Ta.getBCHDigit(Au);Cu.getEncodedBits=function(e,t){const n=e.bit<<3|t;let i=n<<10;for(;Ta.getBCHDigit(i)-zl>=0;)i^=Au<<Ta.getBCHDigit(i)-zl;return(n<<10|i)^Z0};var Ru={};const Q0=On;function Ui(r){this.mode=Q0.NUMERIC,this.data=r.toString()}Ui.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Ui.prototype.getLength=function(){return this.data.length};Ui.prototype.getBitsLength=function(){return Ui.getBitsLength(this.data.length)};Ui.prototype.write=function(e){let t,n,i;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),i=parseInt(n,10),e.put(i,10);const s=this.data.length-t;s>0&&(n=this.data.substr(t),i=parseInt(n,10),e.put(i,s*3+1))};var ev=Ui;const tv=On,xo=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Ni(r){this.mode=tv.ALPHANUMERIC,this.data=r}Ni.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Ni.prototype.getLength=function(){return this.data.length};Ni.prototype.getBitsLength=function(){return Ni.getBitsLength(this.data.length)};Ni.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let n=xo.indexOf(this.data[t])*45;n+=xo.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(xo.indexOf(this.data[t]),6)};var nv=Ni;const iv=On;function Oi(r){this.mode=iv.BYTE,typeof r=="string"?this.data=new TextEncoder().encode(r):this.data=new Uint8Array(r)}Oi.getBitsLength=function(e){return e*8};Oi.prototype.getLength=function(){return this.data.length};Oi.prototype.getBitsLength=function(){return Oi.getBitsLength(this.data.length)};Oi.prototype.write=function(r){for(let e=0,t=this.data.length;e<t;e++)r.put(this.data[e],8)};var rv=Oi;const sv=On,ov=Ut;function Fi(r){this.mode=sv.KANJI,this.data=r}Fi.getBitsLength=function(e){return e*13};Fi.prototype.getLength=function(){return this.data.length};Fi.prototype.getBitsLength=function(){return Fi.getBitsLength(this.data.length)};Fi.prototype.write=function(r){let e;for(e=0;e<this.data.length;e++){let t=ov.toSJIS(this.data[e]);if(t>=33088&&t<=40956)t-=33088;else if(t>=57408&&t<=60351)t-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);t=(t>>>8&255)*192+(t&255),r.put(t,13)}};var av=Fi,wu={exports:{}};(function(r){var e={single_source_shortest_paths:function(t,n,i){var s={},o={};o[n]=0;var a=e.PriorityQueue.make();a.push(n,0);for(var c,l,h,u,d,f,g,_,m;!a.empty();){c=a.pop(),l=c.value,u=c.cost,d=t[l]||{};for(h in d)d.hasOwnProperty(h)&&(f=d[h],g=u+f,_=o[h],m=typeof o[h]>"u",(m||_>g)&&(o[h]=g,a.push(h,g),s[h]=l))}if(typeof i<"u"&&typeof o[i]>"u"){var p=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(p)}return s},extract_shortest_path_from_predecessor_list:function(t,n){for(var i=[],s=n;s;)i.push(s),t[s],s=t[s];return i.reverse(),i},find_path:function(t,n,i){var s=e.single_source_shortest_paths(t,n,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,i={},s;t=t||{};for(s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);return i.queue=[],i.sorter=t.sorter||n.default_sorter,i},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var i={value:t,cost:n};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};r.exports=e})(wu);var cv=wu.exports;(function(r){const e=On,t=ev,n=nv,i=rv,s=av,o=nn,a=Ut,c=cv;function l(p){return unescape(encodeURIComponent(p)).length}function h(p,T,E){const y=[];let R;for(;(R=p.exec(E))!==null;)y.push({data:R[0],index:R.index,mode:T,length:R[0].length});return y}function u(p){const T=h(o.NUMERIC,e.NUMERIC,p),E=h(o.ALPHANUMERIC,e.ALPHANUMERIC,p);let y,R;return a.isKanjiModeEnabled()?(y=h(o.BYTE,e.BYTE,p),R=h(o.KANJI,e.KANJI,p)):(y=h(o.BYTE_KANJI,e.BYTE,p),R=[]),T.concat(E,y,R).sort(function(A,L){return A.index-L.index}).map(function(A){return{data:A.data,mode:A.mode,length:A.length}})}function d(p,T){switch(T){case e.NUMERIC:return t.getBitsLength(p);case e.ALPHANUMERIC:return n.getBitsLength(p);case e.KANJI:return s.getBitsLength(p);case e.BYTE:return i.getBitsLength(p)}}function f(p){return p.reduce(function(T,E){const y=T.length-1>=0?T[T.length-1]:null;return y&&y.mode===E.mode?(T[T.length-1].data+=E.data,T):(T.push(E),T)},[])}function g(p){const T=[];for(let E=0;E<p.length;E++){const y=p[E];switch(y.mode){case e.NUMERIC:T.push([y,{data:y.data,mode:e.ALPHANUMERIC,length:y.length},{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.ALPHANUMERIC:T.push([y,{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.KANJI:T.push([y,{data:y.data,mode:e.BYTE,length:l(y.data)}]);break;case e.BYTE:T.push([{data:y.data,mode:e.BYTE,length:l(y.data)}])}}return T}function _(p,T){const E={},y={start:{}};let R=["start"];for(let C=0;C<p.length;C++){const A=p[C],L=[];for(let M=0;M<A.length;M++){const S=A[M],w=""+C+M;L.push(w),E[w]={node:S,lastCount:0},y[w]={};for(let z=0;z<R.length;z++){const O=R[z];E[O]&&E[O].node.mode===S.mode?(y[O][w]=d(E[O].lastCount+S.length,S.mode)-d(E[O].lastCount,S.mode),E[O].lastCount+=S.length):(E[O]&&(E[O].lastCount=S.length),y[O][w]=d(S.length,S.mode)+4+e.getCharCountIndicator(S.mode,T))}}R=L}for(let C=0;C<R.length;C++)y[R[C]].end=0;return{map:y,table:E}}function m(p,T){let E;const y=e.getBestModeForData(p);if(E=e.from(T,y),E!==e.BYTE&&E.bit<y.bit)throw new Error('"'+p+'" cannot be encoded with mode '+e.toString(E)+`.
 Suggested mode is: `+e.toString(y));switch(E===e.KANJI&&!a.isKanjiModeEnabled()&&(E=e.BYTE),E){case e.NUMERIC:return new t(p);case e.ALPHANUMERIC:return new n(p);case e.KANJI:return new s(p);case e.BYTE:return new i(p)}}r.fromArray=function(T){return T.reduce(function(E,y){return typeof y=="string"?E.push(m(y,null)):y.data&&E.push(m(y.data,y.mode)),E},[])},r.fromString=function(T,E){const y=u(T,a.isKanjiModeEnabled()),R=g(y),C=_(R,E),A=c.find_path(C.map,"start","end"),L=[];for(let M=1;M<A.length-1;M++)L.push(C.table[A[M]].node);return r.fromArray(f(L))},r.rawSplit=function(T){return r.fromArray(u(T,a.isKanjiModeEnabled()))}})(Ru);const Ds=Ut,So=Ps,lv=V0,hv=W0,uv=yu,dv=xu,ba=Su,Ca=Ls,fv=$0,Ms=Tu,pv=Cu,mv=On,Mo=Ru;function gv(r,e){const t=r.size,n=dv.getPositions(e);for(let i=0;i<n.length;i++){const s=n[i][0],o=n[i][1];for(let a=-1;a<=7;a++)if(!(s+a<=-1||t<=s+a))for(let c=-1;c<=7;c++)o+c<=-1||t<=o+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?r.set(s+a,o+c,!0,!0):r.set(s+a,o+c,!1,!0))}}function _v(r){const e=r.size;for(let t=8;t<e-8;t++){const n=t%2===0;r.set(t,6,n,!0),r.set(6,t,n,!0)}}function vv(r,e){const t=uv.getPositions(e);for(let n=0;n<t.length;n++){const i=t[n][0],s=t[n][1];for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)o===-2||o===2||a===-2||a===2||o===0&&a===0?r.set(i+o,s+a,!0,!0):r.set(i+o,s+a,!1,!0)}}function yv(r,e){const t=r.size,n=Ms.getEncodedBits(e);let i,s,o;for(let a=0;a<18;a++)i=Math.floor(a/3),s=a%3+t-8-3,o=(n>>a&1)===1,r.set(i,s,o,!0),r.set(s,i,o,!0)}function Eo(r,e,t){const n=r.size,i=pv.getEncodedBits(e,t);let s,o;for(s=0;s<15;s++)o=(i>>s&1)===1,s<6?r.set(s,8,o,!0):s<8?r.set(s+1,8,o,!0):r.set(n-15+s,8,o,!0),s<8?r.set(8,n-s-1,o,!0):s<9?r.set(8,15-s-1+1,o,!0):r.set(8,15-s-1,o,!0);r.set(n-8,8,1,!0)}function xv(r,e){const t=r.size;let n=-1,i=t-1,s=7,o=0;for(let a=t-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!r.isReserved(i,a-c)){let l=!1;o<e.length&&(l=(e[o]>>>s&1)===1),r.set(i,a-c,l),s--,s===-1&&(o++,s=7)}if(i+=n,i<0||t<=i){i-=n,n=-n;break}}}function Sv(r,e,t){const n=new lv;t.forEach(function(c){n.put(c.mode.bit,4),n.put(c.getLength(),mv.getCharCountIndicator(c.mode,r)),c.write(n)});const i=Ds.getSymbolTotalCodewords(r),s=Ca.getTotalCodewordsCount(r,e),o=(i-s)*8;for(n.getLengthInBits()+4<=o&&n.put(0,4);n.getLengthInBits()%8!==0;)n.putBit(0);const a=(o-n.getLengthInBits())/8;for(let c=0;c<a;c++)n.put(c%2?17:236,8);return Mv(n,r,e)}function Mv(r,e,t){const n=Ds.getSymbolTotalCodewords(e),i=Ca.getTotalCodewordsCount(e,t),s=n-i,o=Ca.getBlocksCount(e,t),a=n%o,c=o-a,l=Math.floor(n/o),h=Math.floor(s/o),u=h+1,d=l-h,f=new fv(d);let g=0;const _=new Array(o),m=new Array(o);let p=0;const T=new Uint8Array(r.buffer);for(let A=0;A<o;A++){const L=A<c?h:u;_[A]=T.slice(g,g+L),m[A]=f.encode(_[A]),g+=L,p=Math.max(p,L)}const E=new Uint8Array(n);let y=0,R,C;for(R=0;R<p;R++)for(C=0;C<o;C++)R<_[C].length&&(E[y++]=_[C][R]);for(R=0;R<d;R++)for(C=0;C<o;C++)E[y++]=m[C][R];return E}function Ev(r,e,t,n){let i;if(Array.isArray(r))i=Mo.fromArray(r);else if(typeof r=="string"){let l=e;if(!l){const h=Mo.rawSplit(r);l=Ms.getBestVersionForData(h,t)}i=Mo.fromString(r,l||40)}else throw new Error("Invalid data");const s=Ms.getBestVersionForData(i,t);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=s;else if(e<s)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+s+`.
`);const o=Sv(e,t,i),a=Ds.getSymbolSize(e),c=new hv(a);return gv(c,e),_v(c),vv(c,e),Eo(c,t,0),e>=7&&yv(c,e),xv(c,o),isNaN(n)&&(n=ba.getBestMask(c,Eo.bind(null,c,t))),ba.applyMask(n,c),Eo(c,t,n),{modules:c,version:e,errorCorrectionLevel:t,maskPattern:n,segments:i}}_u.create=function(e,t){if(typeof e>"u"||e==="")throw new Error("No input text");let n=So.M,i,s;return typeof t<"u"&&(n=So.from(t.errorCorrectionLevel,So.M),i=Ms.from(t.version),s=ba.from(t.maskPattern),t.toSJISFunc&&Ds.setToSJISFunction(t.toSJISFunc)),Ev(e,i,n,s)};var Pu={},sc={};(function(r){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(s){return[s,s]}))),n.length===6&&n.push("F","F");const i=parseInt(n.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+n.slice(0,6).join("")}}r.getOptions=function(n){n||(n={}),n.color||(n.color={});const i=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,s=n.width&&n.width>=21?n.width:void 0,o=n.scale||4;return{width:s,scale:s?4:o,margin:i,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},r.getScale=function(n,i){return i.width&&i.width>=n+i.margin*2?i.width/(n+i.margin*2):i.scale},r.getImageWidth=function(n,i){const s=r.getScale(n,i);return Math.floor((n+i.margin*2)*s)},r.qrToImageData=function(n,i,s){const o=i.modules.size,a=i.modules.data,c=r.getScale(o,s),l=Math.floor((o+s.margin*2)*c),h=s.margin*c,u=[s.color.light,s.color.dark];for(let d=0;d<l;d++)for(let f=0;f<l;f++){let g=(d*l+f)*4,_=s.color.light;if(d>=h&&f>=h&&d<l-h&&f<l-h){const m=Math.floor((d-h)/c),p=Math.floor((f-h)/c);_=u[a[m*o+p]?1:0]}n[g++]=_.r,n[g++]=_.g,n[g++]=_.b,n[g]=_.a}}})(sc);(function(r){const e=sc;function t(i,s,o){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=o,s.width=o,s.style.height=o+"px",s.style.width=o+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}r.render=function(s,o,a){let c=a,l=o;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),o||(l=n()),c=e.getOptions(c);const h=e.getImageWidth(s.modules.size,c),u=l.getContext("2d"),d=u.createImageData(h,h);return e.qrToImageData(d.data,s,c),t(u,l,h),u.putImageData(d,0,0),l},r.renderToDataURL=function(s,o,a){let c=a;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),c||(c={});const l=r.render(s,o,c),h=c.type||"image/png",u=c.rendererOpts||{};return l.toDataURL(h,u.quality)}})(Pu);var Lu={};const Tv=sc;function Hl(r,e){const t=r.a/255,n=e+'="'+r.hex+'"';return t<1?n+" "+e+'-opacity="'+t.toFixed(2).slice(1)+'"':n}function To(r,e,t){let n=r+e;return typeof t<"u"&&(n+=" "+t),n}function bv(r,e,t){let n="",i=0,s=!1,o=0;for(let a=0;a<r.length;a++){const c=Math.floor(a%e),l=Math.floor(a/e);!c&&!s&&(s=!0),r[a]?(o++,a>0&&c>0&&r[a-1]||(n+=s?To("M",c+t,.5+l+t):To("m",i,0),i=0,s=!1),c+1<e&&r[a+1]||(n+=To("h",o),o=0)):i++}return n}Lu.render=function(e,t,n){const i=Tv.getOptions(t),s=e.modules.size,o=e.modules.data,a=s+i.margin*2,c=i.color.light.a?"<path "+Hl(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+Hl(i.color.dark,"stroke")+' d="'+bv(o,s,i.margin)+'"/>',h='viewBox="0 0 '+a+" "+a+'"',d='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+h+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof n=="function"&&n(null,d),d};const Cv=H0,Aa=_u,Iu=Pu,Av=Lu;function oc(r,e,t,n,i){const s=[].slice.call(arguments,1),o=s.length,a=typeof s[o-1]=="function";if(!a&&!Cv())throw new Error("Callback required as last argument");if(a){if(o<2)throw new Error("Too few arguments provided");o===2?(i=t,t=e,e=n=void 0):o===3&&(e.getContext&&typeof i>"u"?(i=n,n=void 0):(i=n,n=t,t=e,e=void 0))}else{if(o<1)throw new Error("Too few arguments provided");return o===1?(t=e,e=n=void 0):o===2&&!e.getContext&&(n=t,t=e,e=void 0),new Promise(function(c,l){try{const h=Aa.create(t,n);c(r(h,e,n))}catch(h){l(h)}})}try{const c=Aa.create(t,n);i(null,r(c,e,n))}catch(c){i(c)}}gr.create=Aa.create;gr.toCanvas=oc.bind(null,Iu.render);gr.toDataURL=oc.bind(null,Iu.renderToDataURL);gr.toString=oc.bind(null,function(r,e,t){return Av.render(r,t)});class Rv{constructor(){this.container=document.getElementById("canvas-container"),this.scene=new z_,this.gameMode="RACE",this.gameState="LOBBY",this.aspect=window.innerWidth/window.innerHeight,this.orthoHeight=5.625,this.orthoWidth=this.orthoHeight*this.aspect,this.camera=new Ha(-this.orthoWidth,this.orthoWidth,this.orthoHeight,-this.orthoHeight,.1,100),this.camera.position.set(0,0,10),this.camera.lookAt(0,0,0),this.renderer=new k_({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.container.appendChild(this.renderer.domElement),this.renderer.domElement.addEventListener("pointermove",e=>{this.gameMode==="TACTICAL"&&this.tacticalManager.handleCanvasPointerMove(e)}),this.renderer.domElement.addEventListener("click",e=>{this.gameMode==="TACTICAL"&&this.tacticalManager.handleCanvasClick(e)}),this.trackManager=new d0(this.scene),this.snails=[],this.remotePlayers=new Map,this.connectedPlayerData=new Map,this.ws=null,this.peer=null,this.peerConnections=new Map,this.roomCode=this.generateRoomCode(),this.raceStartTime=0,this.raceElapsedTime=0,this.turnBased=!0,this.turnOrder=[],this.currentTurnIndex=0,this.currentRound=1,this.editorMode=!1,this.draggedHandleIndex=-1,this.tacticalManager=new m0(this),this.initServerAndWebSocket(),this.loadBackgroundMap(),this.setupUI(),this.setupInputs(),this.setupEditorDragging(),this.setupSnails(),window.addEventListener("resize",()=>this.onWindowResize()),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}generateRoomCode(){const e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let t="";for(let n=0;n<4;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}loadBackgroundMap(){new a0().load("/snail_race_map.jpg",t=>{t.colorSpace=Tt;const n=new mr(20,11.25),i=new Rt({map:t}),s=new nt(n,i);s.position.set(0,0,0),this.bgMesh=s,this.bgMesh.visible=this.gameMode==="RACE",this.scene.add(s)},void 0,t=>console.warn("Could not load background texture:",t))}getTakenSnailsMap(){const e={};for(const[t,n]of this.remotePlayers)n&&n.colorKey&&(e[n.colorKey]=n.playerName||"Spieler");return e}broadcastTakenSnails(){const t={type:"ROOM_PLAYERS_UPDATE",payload:{takenSnails:this.getTakenSnailsMap()}};this.peerConnections.forEach(n=>{if(n&&n.open)try{n.send(t)}catch{}})}setGameMode(e){if(this.gameMode===e)return;this.gameMode=e,console.log("Switching Game Mode to:",e);const t=document.getElementById("btn-mode-race"),n=document.getElementById("btn-mode-tactical"),i=document.getElementById("tactical-hud"),s=document.getElementById("game-hud"),o=document.getElementById("start-lobby"),a=document.getElementById("end-screen"),c=document.getElementById("editor-panel");e==="TACTICAL"?(t==null||t.classList.remove("active"),n==null||n.classList.add("active"),this.bgMesh&&(this.bgMesh.visible=!1),this.trackManager&&this.trackManager.setVisible(!1),this.snails.forEach(l=>l.setVisible(!1)),s&&(s.classList.add("hidden"),s.style.display="none"),o&&(o.classList.remove("active"),o.classList.add("hidden"),o.style.display="none"),a&&(a.classList.remove("active"),a.classList.add("hidden"),a.style.display="none"),c&&(c.classList.add("hidden"),c.style.display="none"),i&&(i.classList.remove("hidden"),i.style.display="block"),this.tacticalManager.startTacticalBattle()):(n==null||n.classList.remove("active"),t==null||t.classList.add("active"),this.bgMesh&&(this.bgMesh.visible=!0),this.trackManager&&this.trackManager.setVisible(!0),this.snails.forEach(l=>l.setVisible(!0)),i&&(i.classList.add("hidden"),i.style.display="none"),this.tacticalManager.stopTacticalBattle(),this.gameState==="RACING"?s&&(s.classList.remove("hidden"),s.style.display="block"):this.gameState==="FINISHED"?a&&(a.classList.remove("hidden"),a.classList.add("active"),a.style.display="flex"):o&&(o.classList.remove("hidden"),o.classList.add("active"),o.style.display="flex")),this.broadcastModeChange(e)}broadcastModeChange(e){const t={type:"MODE_CHANGED",payload:{mode:e}};this.peerConnections.forEach(n=>{if(n&&n.open)try{n.send(t)}catch{}}),this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({type:"HOST_CHANGE_MODE",payload:{mode:e}}))}async updateRoomDisplayAndQR(){const e=document.getElementById("room-code-display");e&&(e.innerText=`RAUM: ${this.roomCode}`);const i=`${window.location.hostname.includes("vercel.app")?"https://witchlightsnailrace.vercel.app/controller.html":`${window.location.origin}/controller.html`}?room=${this.roomCode}`,s=document.getElementById("qr-image"),o=document.getElementById("controller-url-display");if(o&&(o.innerText=i),s)try{const a=await gr.toDataURL(i,{width:260,margin:1,color:{dark:"#0f172a",light:"#ffffff"}});s.src=a,s.style.display="block"}catch(a){console.warn("QR code generation fallback:",a),s.src=`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(i)}`,s.style.display="block"}}initPeerHost(){const t=`witchlight_host_${(this.roomCode||"").toLowerCase()}`;if(console.log("Initializing PeerJS Host with ID:",t),this.peer)try{this.peer.destroy()}catch{}try{this.peer=new z0(t,{debug:1}),this.peer.on("open",n=>{console.log("🚀 PeerJS Host is online with ID:",n)}),this.peer.on("connection",n=>{console.log("📱 Remote player connecting via WebRTC:",n.peer),n.on("open",()=>{console.log("✅ Remote player WebRTC data channel open:",n.peer)}),n.on("data",i=>{try{const s=typeof i=="string"?JSON.parse(i):i;this.handlePeerMessage(s,n)}catch(s){console.error("Peer data parse error:",s)}}),n.on("close",()=>{console.log("Remote player disconnected:",n.peer),n.playerId&&(this.handleWsMessage({type:"PLAYER_DISCONNECTED",payload:{playerId:n.playerId}}),this.peerConnections.delete(n.playerId),this.broadcastTakenSnails())}),n.on("error",i=>{console.warn("Peer connection error:",i)})}),this.peer.on("error",n=>{console.warn("PeerJS host error:",n),n.type==="unavailable-id"&&(console.warn("Peer ID taken, generating fresh room code..."),this.roomCode=this.generateRoomCode(),this.updateRoomDisplayAndQR(),setTimeout(()=>this.initPeerHost(),500))})}catch(n){console.warn("PeerJS initialization error:",n)}}handlePeerMessage(e,t){const{type:n,payload:i}=e;if(n==="PLAYER_JOIN"){const s="p_"+Math.random().toString(36).substring(2,8);t.playerId=s,this.peerConnections.set(s,t);const o={id:s,name:i.playerName||"Spieler",colorKey:null,dndModifier:i.dndModifier||0,progress:0,isStunned:!1};if(t.send({type:"JOINED_SUCCESS",payload:{playerId:s,roomCode:this.roomCode,player:o,takenSnails:this.getTakenSnailsMap()}}),this.onRemotePlayerConnected(o),this.gameMode==="TACTICAL"&&(t.send({type:"MODE_CHANGED",payload:{mode:"TACTICAL"}}),t.send({type:"TACTICAL_STATE_UPDATE",payload:this.tacticalManager.getSerializedState()})),this.gameState==="RACING"){const a=this.turnOrder[this.currentTurnIndex],c=a?a.isPlayer?`${a.playerName} (${a.colorData.name})`:a.colorData.name:"";t.send({type:"RACE_STATE_UPDATE",payload:{gameState:this.gameState,activePlayerId:a==null?void 0:a.id,activeSnailName:c,currentRound:this.currentRound}})}return}if(n==="PLAYER_SELECT_COLOR"){const{colorKey:s}=i;let o=null;for(const[a,c]of this.remotePlayers)if(a!==t.playerId&&c&&c.colorKey===s){o=c.playerName||"Ein anderer Spieler";break}if(o){t.send({type:"ERROR",payload:{message:`Diese Schnecke ist bereits vergeben an "${o}"!`}});return}t.send({type:"COLOR_SELECTED_SUCCESS",payload:{colorKey:s}}),this.handleWsMessage({type:"PLAYER_COLOR_CHANGED",payload:{playerId:t.playerId,colorKey:s}}),this.broadcastTakenSnails();return}if(n==="PLAYER_ROLL_D20"){this.handleWsMessage({type:"PLAYER_ROLL_D20",payload:{playerId:t.playerId,rollValue:i.rollValue,dndModifier:i.dndModifier}});return}if(n==="PLAYER_CAST_SPELL"){this.handleWsMessage({type:"PLAYER_CAST_SPELL",payload:{playerId:t.playerId,spellId:i.spellId}});return}if(n==="TACTICAL_DEPLOY"){this.tacticalManager.deployPlayerCharacter(t.playerId,i.playerName,i.classKey,i.x,i.y);return}if(n==="TACTICAL_MOVE"){const s=this.tacticalManager.units.find(o=>o.id===t.playerId);s&&this.tacticalManager.moveUnit(s,i.destX,i.destY);return}if(n==="TACTICAL_ACTION"){const{actionType:s,targetId:o,dirX:a,dirY:c,dice:l}=i,h=this.tacticalManager.units.find(d=>d.id===t.playerId),u=this.tacticalManager.units.find(d=>d.id===o);if(s==="PUSH")u&&this.tacticalManager.pushUnit(u,a||0,c||-1);else if(s==="ATTACK"){if(u){const d=Math.floor(Math.random()*8)+3;this.tacticalManager.applyDamage(u,d)}}else if(s==="HEAL"){const d=Math.floor(Math.random()*8)+2;u?this.tacticalManager.applyHeal(u,d):h&&this.tacticalManager.applyHeal(h,d)}return}if(n==="TACTICAL_HP_CHANGE"){const s=this.tacticalManager.units.find(o=>o.id===t.playerId);s&&(i.delta<0?this.tacticalManager.applyDamage(s,Math.abs(i.delta)):this.tacticalManager.applyHeal(s,i.delta));return}}broadcastRaceState(e){this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({type:"HOST_SYNC_RACE_STATE",payload:e}));const t={type:"RACE_STATE_UPDATE",payload:e};this.peerConnections.forEach(n=>{if(n&&n.open)try{n.send(t)}catch(i){console.warn("Failed to send state to peer:",n.peer,i)}})}async initServerAndWebSocket(){if(await this.updateRoomDisplayAndQR(),this.initPeerHost(),!window.location.hostname.includes("vercel.app")){try{const t=await fetch("/api/info");if(t.ok){const n=await t.json(),i=document.getElementById("controller-url-display");n.controllerUrl&&i&&(i.innerText=`${n.controllerUrl}?room=${this.roomCode}`)}}catch{console.log("API info fetch skipped in standalone mode.")}try{const t=window.location.protocol==="https:"?"wss:":"ws:";this.ws=new WebSocket(`${t}//${window.location.host}/ws`),this.ws.onopen=()=>{console.log("Host WebSocket connected to local Bun server!"),this.ws.send(JSON.stringify({type:"HOST_CREATE_ROOM"}))},this.ws.onmessage=n=>{try{const i=JSON.parse(n.data);this.handleWsMessage(i)}catch(i){console.error("WS parse error:",i)}},this.ws.onerror=()=>{console.log("Local WebSocket server unavailable, PeerJS WebRTC active.")}}catch{console.log("WS init skipped, PeerJS WebRTC active.")}}}handleWsMessage(e){const{type:t,payload:n}=e;if(t==="ROOM_CREATED")this.roomCode=n.roomCode,this.updateRoomDisplayAndQR(),this.initPeerHost();else if(t==="PLAYER_CONNECTED")this.onRemotePlayerConnected(n.player);else if(t==="PLAYER_COLOR_CHANGED"){const{playerId:i,colorKey:s}=n,o=this.connectedPlayerData.get(i)||{},a=this.remotePlayers.get(i);a&&a.colorKey!==s&&(a.id=`ai_${a.laneIndex+1}`,a.isPlayer=!1,a.playerName=null,a.dndModifier=0,a.labelSprite&&(a.group.remove(a.labelSprite),a.labelSprite=null));const c=this.snails.find(l=>l.colorKey===s);c&&(c.id=i,c.isPlayer=!0,c.playerName=o.name||"Spieler",c.dndModifier=o.dndModifier||0,this.remotePlayers.set(i,c),c.labelSprite&&c.group.remove(c.labelSprite),c.labelSprite=c.createTextSprite(`📱 ${c.playerName}`,c.colorData.css),c.group.add(c.labelSprite)),this.renderRosterUI(),this.broadcastTakenSnails()}else if(t==="PLAYER_ROLL_D20"){const i=this.remotePlayers.get(n.playerId);i&&this.gameState==="RACING"&&(this.turnOrder[this.currentTurnIndex]===i||!this.turnBased)&&(i.handleD20Roll(n.rollValue,i.dndModifier,this.snails),setTimeout(()=>this.nextTurn(),1400))}else if(t==="PLAYER_CAST_SPELL"){const i=this.remotePlayers.get(n.playerId);i&&this.gameState==="RACING"&&i.handleSpellCast(n.spellId,this.snails)}else if(t==="PLAYER_DISCONNECTED"){const i=this.remotePlayers.get(n.playerId);i&&(i.id=`ai_${i.laneIndex+1}`,i.isPlayer=!1,i.playerName=null,i.dndModifier=0,i.labelSprite&&(i.group.remove(i.labelSprite),i.labelSprite=null),this.remotePlayers.delete(n.playerId)),this.connectedPlayerData.delete(n.playerId),this.renderRosterUI(),this.broadcastTakenSnails()}else if(t==="TACTICAL_DEPLOY")this.tacticalManager.deployPlayerCharacter(n.playerId,n.playerName,n.classKey,n.x,n.y);else if(t==="TACTICAL_MOVE"){const i=this.tacticalManager.units.find(s=>s.id===n.playerId);i&&this.tacticalManager.moveUnit(i,n.destX,n.destY)}else if(t==="TACTICAL_ACTION"){const{actionType:i,targetId:s,dirX:o,dirY:a,dice:c}=n,l=this.tacticalManager.units.find(u=>u.id===n.playerId),h=this.tacticalManager.units.find(u=>u.id===s);if(i==="PUSH")h&&this.tacticalManager.pushUnit(h,o||0,a||-1);else if(i==="ATTACK"){if(h){const u=Math.floor(Math.random()*8)+3;this.tacticalManager.applyDamage(h,u)}}else if(i==="HEAL"){const u=Math.floor(Math.random()*8)+2;h?this.tacticalManager.applyHeal(h,u):l&&this.tacticalManager.applyHeal(l,u)}}else if(t==="TACTICAL_HP_CHANGE"){const i=this.tacticalManager.units.find(s=>s.id===n.playerId);i&&(n.delta<0?this.tacticalManager.applyDamage(i,Math.abs(n.delta)):this.tacticalManager.applyHeal(i,n.delta))}}onRemotePlayerConnected(e){this.connectedPlayerData.set(e.id,e),this.renderRosterUI()}renderRosterUI(){const e=document.getElementById("roster-list");e&&(e.innerHTML="",this.snails.forEach(t=>{const n=document.createElement("div");n.style.padding="8px 12px",n.style.borderRadius="10px",n.style.background=t.isPlayer?"rgba(34, 197, 94, 0.2)":"rgba(255, 255, 255, 0.05)",n.style.border=t.isPlayer?"1px solid #22c55e":"1px solid rgba(255, 255, 255, 0.1)",n.style.color=t.colorData.css,n.style.fontWeight="700",n.style.display="flex",n.style.justifyContent="space-between",n.style.alignItems="center";const i=t.colorData.name,s=t.isPlayer?`<span style="color: #4ade80;">📱 ${t.playerName||"Spieler"} (+${t.dndModifier||0})</span>`:'<span style="color: #94a3b8; font-size: 0.8rem;">🤖 NPC Schnecke</span>';n.innerHTML=`<span>🐌 ${i}</span> ${s}`,e.appendChild(n)}))}setupSnails(){this.snails.forEach(t=>t.dispose()),this.snails=[],this.remotePlayers.clear(),["rosa","blau","violett","gruen","gelb","orange","rot","schwarz"].forEach((t,n)=>{const i=n%2===0?1:2,s=new f0(`ai_${n+1}`,t,!1,n,this.trackManager,i);this.snails.push(s)}),this.renderRosterUI()}setupUI(){var _,m,p,T,E,y;const e=document.getElementById("btn-start");e&&e.addEventListener("click",()=>{Al.init(),this.startRace()});const t=document.getElementById("btn-restart");t&&t.addEventListener("click",()=>{this.startRace()});const n=document.getElementById("btn-toggle-editor"),i=document.getElementById("btn-close-editor"),s=document.getElementById("btn-export-points"),o=()=>{var R;this.editorMode=!this.editorMode,this.trackManager.setEditorVisible(this.editorMode),(R=document.getElementById("editor-panel"))==null||R.classList.toggle("hidden",!this.editorMode),this.editorMode&&this.renderEditorWaypointsList()};n&&n.addEventListener("click",o),i&&i.addEventListener("click",o),s&&s.addEventListener("click",()=>{const R=JSON.stringify(this.trackManager.waypoints.map(C=>({x:Number(C.x.toFixed(2)),y:Number(C.y.toFixed(2)),z:0})),null,2);navigator.clipboard.writeText(R),alert(`Koordinaten wurden in die Zwischenablage kopiert! 📋

`+R)});const a=document.getElementById("btn-toggle-grid");a&&a.addEventListener("click",()=>{this.trackManager.toggleGrid()});const c=document.getElementById("btn-mode-race"),l=document.getElementById("btn-mode-tactical");c&&c.addEventListener("click",()=>this.setGameMode("RACE")),l&&l.addEventListener("click",()=>this.setGameMode("TACTICAL"));const h=document.getElementById("tool-mode-place"),u=document.getElementById("tool-mode-move"),d=document.getElementById("tool-mode-remove"),f=document.getElementById("monster-palette-bar"),g=R=>{this.tacticalManager.dmToolMode=R,[h,u,d].forEach(C=>{C&&(C.classList.remove("active"),C.style.background="rgba(255,255,255,0.08)",C.style.borderColor="rgba(255,255,255,0.2)",C.style.color="#cbd5e1")}),R==="PLACE_MONSTER"&&h?(h.classList.add("active"),h.style.background="#8b5cf6",h.style.borderColor="#a855f7",h.style.color="#fff",f&&(f.style.display="flex")):R==="SELECT_MOVE"&&u?(u.classList.add("active"),u.style.background="#3b82f6",u.style.borderColor="#60a5fa",u.style.color="#fff",f&&(f.style.display="none")):R==="REMOVE"&&d&&(d.classList.add("active"),d.style.background="#ef4444",d.style.borderColor="#f87171",d.style.color="#fff",f&&(f.style.display="none"))};h&&h.addEventListener("click",()=>g("PLACE_MONSTER")),u&&u.addEventListener("click",()=>g("SELECT_MOVE")),d&&d.addEventListener("click",()=>g("REMOVE")),document.querySelectorAll(".monster-pick-btn").forEach(R=>{R.addEventListener("click",()=>{document.querySelectorAll(".monster-pick-btn").forEach(C=>{C.classList.remove("active"),C.style.borderColor="rgba(255,255,255,0.2)"}),R.classList.add("active"),R.style.borderColor="#fbbf24",this.tacticalManager.selectedMonsterType=R.dataset.type})}),(_=document.getElementById("btn-dm-dmg-1"))==null||_.addEventListener("click",()=>{this.tacticalManager.selectedUnit&&this.tacticalManager.applyDamage(this.tacticalManager.selectedUnit,1)}),(m=document.getElementById("btn-dm-dmg-5"))==null||m.addEventListener("click",()=>{this.tacticalManager.selectedUnit&&this.tacticalManager.applyDamage(this.tacticalManager.selectedUnit,5)}),(p=document.getElementById("btn-dm-heal"))==null||p.addEventListener("click",()=>{this.tacticalManager.selectedUnit&&this.tacticalManager.applyHeal(this.tacticalManager.selectedUnit,5)}),(T=document.getElementById("btn-dm-delete"))==null||T.addEventListener("click",()=>{this.tacticalManager.selectedUnit&&(this.tacticalManager.removeUnit(this.tacticalManager.selectedUnit),this.tacticalManager.updateTVHud(),this.tacticalManager.syncStateWithControllers())}),(E=document.getElementById("btn-tact-next-round"))==null||E.addEventListener("click",()=>{this.tacticalManager.currentRound++,this.tacticalManager.showFloatingText(3,3,`Runde ${this.tacticalManager.currentRound}`,"#fbbf24"),this.tacticalManager.updateTVHud(),this.tacticalManager.syncStateWithControllers()}),(y=document.getElementById("btn-tact-reset"))==null||y.addEventListener("click",()=>{confirm("D&D Gefecht zurücksetzen? Alle Einheiten werden vom Spielplan entfernt.")&&this.tacticalManager.resetBattle()}),window.addEventListener("keydown",R=>{R.key==="e"||R.key==="E"?o():R.key==="g"||R.key==="G"?this.trackManager.toggleGrid():(R.key==="m"||R.key==="M")&&this.setGameMode(this.gameMode==="RACE"?"TACTICAL":"RACE")})}setupEditorDragging(){const e=new Rh,t=new ce,n=new Tn(new P(0,0,1),0);window.addEventListener("pointerdown",i=>{if(!this.editorMode)return;t.x=i.clientX/window.innerWidth*2-1,t.y=-(i.clientY/window.innerHeight)*2+1,e.setFromCamera(t,this.camera);const s=e.intersectObjects(this.trackManager.handleMeshes);s.length>0&&(this.draggedHandleIndex=s[0].object.userData.index)}),window.addEventListener("pointermove",i=>{if(!this.editorMode||this.draggedHandleIndex<0)return;t.x=i.clientX/window.innerWidth*2-1,t.y=-(i.clientY/window.innerHeight)*2+1,e.setFromCamera(t,this.camera);const s=new P;e.ray.intersectPlane(n,s),s&&(this.trackManager.updateWaypoint(this.draggedHandleIndex,s.x,s.y),this.renderEditorWaypointsList(),this.snails&&this.snails.forEach(o=>o.updatePosition(o.progress)))}),window.addEventListener("pointerup",()=>{this.draggedHandleIndex=-1})}setupInputs(){window.addEventListener("keydown",e=>{var t;if(this.gameState==="LOBBY"){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),(t=document.getElementById("btn-start"))==null||t.click());return}if(this.gameState==="RACING"&&(e.key===" "||e.key==="Enter")){e.preventDefault();const n=this.turnOrder[this.currentTurnIndex];if(n){const i=Math.floor(Math.random()*20)+1;n.handleD20Roll(i,n.dndModifier,this.snails),setTimeout(()=>this.nextTurn(),1400)}}})}startRace(){var e,t,n,i,s;this.snails.forEach(o=>o.reset()),this.gameState="RACING",this.currentRound=1,this.raceStartTime=performance.now(),this.snails.forEach(o=>{o.initiative=Math.floor(Math.random()*20)+1+(o.dndModifier||0)}),this.turnOrder=[...this.snails].sort((o,a)=>a.initiative-o.initiative),this.currentTurnIndex=0,(e=document.getElementById("start-lobby"))==null||e.classList.remove("active"),(t=document.getElementById("start-lobby"))==null||t.classList.add("hidden"),(n=document.getElementById("end-screen"))==null||n.classList.remove("active"),(i=document.getElementById("end-screen"))==null||i.classList.add("hidden"),(s=document.getElementById("game-hud"))==null||s.classList.remove("hidden"),this.startActiveTurn()}startActiveTurn(){if(this.gameState!=="RACING")return;const e=this.turnOrder[this.currentTurnIndex];if(!e)return;const t=document.getElementById("turn-banner"),n=e.isPlayer?`${e.playerName} (${e.colorData.name})`:e.colorData.name;t&&(t.innerText=`🎲 RUNDE ${this.currentRound} | ZUG VON: ${n.toUpperCase()}`,t.style.color=e.colorData.css),this.broadcastRaceState({gameState:this.gameState,activePlayerId:e.id,activeSnailName:n,currentRound:this.currentRound}),e.isPlayer||setTimeout(()=>{if(this.gameState==="RACING"){const i=Math.floor(Math.random()*20)+1;e.handleD20Roll(i,e.dndModifier,this.snails),setTimeout(()=>this.nextTurn(),1400)}},900)}nextTurn(){if(this.gameState!=="RACING")return;const e=this.snails.find(t=>t.progress>=1);if(e){this.finishRace(e);return}this.currentTurnIndex++,this.currentTurnIndex>=this.turnOrder.length&&(this.currentTurnIndex=0,this.currentRound++),this.startActiveTurn()}updateHUD(){if(this.gameState!=="RACING")return;const e=[...this.snails].sort((i,s)=>s.progress-i.progress),t=document.getElementById("leaderboard-list");t&&(t.innerHTML="",e.forEach((i,s)=>{const o=document.createElement("div");o.className="lb-row";const a=Math.round(i.progress*100);o.innerHTML=`
          <span class="lb-rank">${s+1}.</span>
          <div class="lb-dot" style="background-color: ${i.colorData.css}"></div>
          <span class="lb-name">${i.colorData.name} ${i.isPlayer?`(${i.playerName||"Spieler"})`:""}</span>
          <div class="lb-progress-bar">
            <div class="lb-progress-fill" style="width: ${a}%; background-color: ${i.colorData.css}"></div>
          </div>
        `,t.appendChild(o)}));const n=e.find(i=>i.progress>=1);n&&this.finishRace(n)}finishRace(e){var c,l,h;this.gameState="FINISHED",Al.playVictorySound(),this.raceElapsedTime=(performance.now()-this.raceStartTime)/1e3;const t=document.getElementById("winner-text"),n=e.isPlayer?`${e.playerName} (${e.colorData.name})`:e.colorData.name;t&&(t.innerText=`🎉 ${n} gewinnt das Rennen! 🏆`,t.style.color=e.colorData.css);const i=Math.floor(this.raceElapsedTime/60),s=(this.raceElapsedTime%60).toFixed(1),o=document.getElementById("stat-time");o&&(o.innerText=`${i<10?"0":""}${i}:${s<10?"0":""}${s}`);const a=document.getElementById("stat-rank");a&&(a.innerText=`${n}`),(c=document.getElementById("game-hud"))==null||c.classList.add("hidden"),(l=document.getElementById("end-screen"))==null||l.classList.remove("hidden"),(h=document.getElementById("end-screen"))==null||h.classList.add("active"),this.broadcastRaceState({gameState:this.gameState,winnerName:n})}renderEditorWaypointsList(){const e=document.getElementById("waypoints-list");e&&(e.innerHTML="",this.trackManager.waypoints.forEach((t,n)=>{const i=document.createElement("div");i.className="wp-item",i.innerHTML=`
        <label>P${n+1}:</label>
        X: <input type="number" step="0.1" value="${t.x.toFixed(2)}" data-idx="${n}" data-axis="x" />
        Y: <input type="number" step="0.1" value="${t.y.toFixed(2)}" data-idx="${n}" data-axis="y" />
      `,e.appendChild(i)}),e.querySelectorAll("input").forEach(t=>{t.addEventListener("change",n=>{const i=parseInt(n.target.dataset.idx),s=n.target.dataset.axis,o=parseFloat(n.target.value);s==="x"?this.trackManager.updateWaypoint(i,o,this.trackManager.waypoints[i].y):this.trackManager.updateWaypoint(i,this.trackManager.waypoints[i].x,o)})}))}onWindowResize(){var e;this.aspect=window.innerWidth/window.innerHeight,this.orthoWidth=this.orthoHeight*this.aspect,this.camera.left=-this.orthoWidth,this.camera.right=this.orthoWidth,this.camera.top=this.orthoHeight,this.camera.bottom=-this.orthoHeight,this.camera.updateProjectionMatrix(),(e=this.tacticalManager)!=null&&e.tacticalCamera&&(this.tacticalManager.tacticalCamera.aspect=this.aspect,this.tacticalManager.tacticalCamera.updateProjectionMatrix()),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(e){requestAnimationFrame(this.animate);const t=.016;if(this.gameMode==="TACTICAL"){this.tacticalManager.update(t,e),this.renderer.render(this.scene,this.tacticalManager.tacticalCamera);return}this.gameState==="RACING"?(this.snails.forEach(n=>n.update(t,e,!0)),this.updateHUD()):this.gameState==="LOBBY"&&this.snails.forEach(n=>n.update(t,e,!1)),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new Rv});
