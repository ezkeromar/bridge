/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qo="169";const uu="attached",fg="detached";const cI=1003;const Cn="",me="srgb",he="srgb-linear",Xo="display-p3",na="display-p3-linear",Bo="linear",fe="srgb",Ro="rec709",Do="p3";const du="300 es";class Tn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Au=1234567;const Wr=Math.PI/180,Xs=180/Math.PI;function wn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[r&255]+Ue[r>>8&255]+Ue[r>>16&255]+Ue[r>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Te(r,t,e){return Math.max(t,Math.min(e,r))}function Uh(r,t){return(r%t+t)%t}function mg(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function gg(r,t,e){return r!==t?(e-r)/(t-r):0}function qr(r,t,e){return(1-e)*r+e*t}function _g(r,t,e,n){return qr(r,t,1-Math.exp(-e*n))}function vg(r,t=1){return t-Math.abs(Uh(r,t*2)-t)}function Eg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function yg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function xg(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Sg(r,t){return r+Math.random()*(t-r)}function Cg(r){return r*(.5-Math.random())}function Mg(r){r!==void 0&&(Au=r);let t=Au+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ig(r){return r*Wr}function wg(r){return r*Xs}function bg(r){return(r&r-1)===0&&r!==0}function Tg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Bg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Rg(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),d=a((t-n)/2),A=s((n-t)/2),m=a((n-t)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*A,o*c);break;case"YXY":r.set(l*A,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*A,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ae(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const po={DEG2RAD:Wr,RAD2DEG:Xs,generateUUID:wn,clamp:Te,euclideanModulo:Uh,mapLinear:mg,inverseLerp:gg,lerp:qr,damp:_g,pingpong:vg,smoothstep:Eg,smootherstep:yg,randInt:xg,randFloat:Sg,randFloatSpread:Cg,seededRandom:Mg,degToRad:Ig,radToDeg:wg,isPowerOfTwo:bg,ceilPowerOfTwo:Tg,floorPowerOfTwo:Bg,setQuaternionFromProperEuler:Rg,normalize:ae,denormalize:Mn};class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,i,s,a,o,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],A=n[5],m=n[8],g=i[0],p=i[3],f=i[6],E=i[1],_=i[4],y=i[7],M=i[2],C=i[5],x=i[8];return s[0]=a*g+o*E+l*M,s[3]=a*p+o*_+l*C,s[6]=a*f+o*y+l*x,s[1]=c*g+h*E+u*M,s[4]=c*p+h*_+u*C,s[7]=c*f+h*y+u*x,s[2]=d*g+A*E+m*M,s[5]=d*p+A*_+m*C,s[8]=d*f+A*y+m*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,A=c*s-a*l,m=e*u+n*d+i*A;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=A*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(il.makeScale(t,e)),this}rotate(t){return this.premultiply(il.makeRotation(-t)),this}translate(t,e){return this.premultiply(il.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const il=new Nt;function yf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Kr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Dg(){const r=Kr("canvas");return r.style.display="block",r}const pu={};function fo(r){r in pu||(pu[r]=!0,console.warn(r))}function Lg(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Fg(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pg(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const fu=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mu=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ar={[he]:{transfer:Bo,primaries:Ro,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[me]:{transfer:fe,primaries:Ro,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[na]:{transfer:Bo,primaries:Do,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(mu),fromReference:r=>r.applyMatrix3(fu)},[Xo]:{transfer:fe,primaries:Do,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(mu),fromReference:r=>r.applyMatrix3(fu).convertLinearToSRGB()}},Ug=new Set([he,na]),Kt={enabled:!0,_workingColorSpace:he,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Ug.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=ar[t].toReference,i=ar[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return ar[r].primaries},getTransfer:function(r){return r===Cn?Bo:ar[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(ar[t].luminanceCoefficients)}};function Vs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function sl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ss;class Ng{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=Kr("canvas")),ss.width=t.width,ss.height=t.height;const n=ss.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Kr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Vs(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vs(e[n]/255)*255):e[n]=Vs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qg=0;class Nh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=wn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(rl(i[a].image)):s.push(rl(i[a]))}else s=rl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function rl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ng.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Og=0;class oe extends Tn{constructor(t=oe.DEFAULT_IMAGE,e=oe.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=oe.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=wn(),this.name="",this.source=new Nh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}oe.DEFAULT_IMAGE=null;oe.DEFAULT_MAPPING=300;oe.DEFAULT_ANISOTROPY=1;class jt{constructor(t=0,e=0,n=0,i=1){jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],A=l[5],m=l[9],g=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+p)<.1&&Math.abs(c+A+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,y=(A+1)/2,M=(f+1)/2,C=(h+d)/4,x=(u+g)/4,T=(m+p)/4;return _>y&&_>M?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=C/n,s=x/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=C/i,s=T/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=x/s,i=T/s),this.set(n,i,s,e),this}let E=Math.sqrt((p-m)*(p-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(p-m)/E,this.y=(u-g)/E,this.z=(d-h)/E,this.w=Math.acos((c+A+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kg extends Tn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new oe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends kg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xf extends oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sf extends oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $e{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],A=s[a+1],m=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=A,t[e+2]=m,t[e+3]=g;return}if(u!==g||l!==d||c!==A||h!==m){let p=1-o;const f=l*d+c*A+h*m+u*g,E=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const M=Math.sqrt(_),C=Math.atan2(M,f*E);p=Math.sin(p*C)/M,o=Math.sin(o*C)/M}const y=o*E;if(l=l*p+d*y,c=c*p+A*y,h=h*p+m*y,u=u*p+g*y,p===1-o){const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],A=s[a+2],m=s[a+3];return t[e]=o*m+h*u+l*A-c*d,t[e+1]=l*m+h*d+c*u-o*A,t[e+2]=c*m+h*A+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*A,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),A=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*A*m,this._y=c*A*u-d*h*m,this._z=c*h*m+d*A*u,this._w=c*h*u-d*A*m;break;case"YXZ":this._x=d*h*u+c*A*m,this._y=c*A*u-d*h*m,this._z=c*h*m-d*A*u,this._w=c*h*u+d*A*m;break;case"ZXY":this._x=d*h*u-c*A*m,this._y=c*A*u+d*h*m,this._z=c*h*m+d*A*u,this._w=c*h*u-d*A*m;break;case"ZYX":this._x=d*h*u-c*A*m,this._y=c*A*u+d*h*m,this._z=c*h*m-d*A*u,this._w=c*h*u+d*A*m;break;case"YZX":this._x=d*h*u+c*A*m,this._y=c*A*u+d*h*m,this._z=c*h*m-d*A*u,this._w=c*h*u-d*A*m;break;case"XZY":this._x=d*h*u-c*A*m,this._y=c*A*u-d*h*m,this._z=c*h*m+d*A*u,this._w=c*h*u+d*A*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const A=.5/Math.sqrt(d+1);this._w=.25/A,this._x=(h-l)*A,this._y=(s-c)*A,this._z=(a-i)*A}else if(n>o&&n>u){const A=2*Math.sqrt(1+n-o-u);this._w=(h-l)/A,this._x=.25*A,this._y=(i+a)/A,this._z=(s+c)/A}else if(o>u){const A=2*Math.sqrt(1+o-n-u);this._w=(s-c)/A,this._x=(i+a)/A,this._y=.25*A,this._z=(l+h)/A}else{const A=2*Math.sqrt(1+u-n-o);this._w=(a-i)/A,this._x=(s+c)/A,this._y=(l+h)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const A=1-e;return this._w=A*a+e*this._w,this._x=A*n+e*this._x,this._y=A*i+e*this._y,this._z=A*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return al.copy(this).projectOnVector(t),this.sub(al)}reflect(t){return this.sub(al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const al=new B,gu=new $e;class Ke{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(s,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ha.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ha.copy(n.boundingBox)),ha.applyMatrix4(t.matrixWorld),this.union(ha)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),ua.subVectors(this.max,or),rs.subVectors(t.a,or),as.subVectors(t.b,or),os.subVectors(t.c,or),hi.subVectors(as,rs),ui.subVectors(os,as),Ti.subVectors(rs,os);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Ti.z,Ti.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Ti.z,0,-Ti.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Ti.y,Ti.x,0];return!ol(e,rs,as,os,ua)||(e=[1,0,0,0,1,0,0,0,1],!ol(e,rs,as,os,ua))?!1:(da.crossVectors(hi,ui),e=[da.x,da.y,da.z],ol(e,rs,as,os,ua))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vn=[new B,new B,new B,new B,new B,new B,new B,new B],vn=new B,ha=new Ke,rs=new B,as=new B,os=new B,hi=new B,ui=new B,Ti=new B,or=new B,ua=new B,da=new B,Bi=new B;function ol(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Bi.fromArray(r,s);const o=i.x*Math.abs(Bi.x)+i.y*Math.abs(Bi.y)+i.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Gg=new Ke,lr=new B,ll=new B;class gn{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gg.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lr.subVectors(t,this.center);const e=lr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(lr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lr.copy(t.center).add(ll)),this.expandByPoint(lr.copy(t.center).sub(ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new B,cl=new B,Aa=new B,di=new B,hl=new B,pa=new B,ul=new B;class ia{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){cl.copy(t).add(e).multiplyScalar(.5),Aa.copy(e).sub(t).normalize(),di.copy(this.origin).sub(cl);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Aa),o=di.dot(this.direction),l=-di.dot(Aa),c=di.lengthSq(),h=Math.abs(1-a*a);let u,d,A,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const g=1/h;u*=g,d*=g,A=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),A=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),A=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),A=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),A=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),A=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),A=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(cl).addScaledVector(Aa,d),A}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),i=zn.dot(zn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,i,s){hl.subVectors(e,t),pa.subVectors(n,t),ul.crossVectors(hl,pa);let a=this.direction.dot(ul),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,t);const l=o*this.direction.dot(pa.crossVectors(di,pa));if(l<0)return null;const c=o*this.direction.dot(hl.cross(di));if(c<0||l+c>a)return null;const h=-o*di.dot(ul);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(t,e,n,i,s,a,o,l,c,h,u,d,A,m,g,p){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,d,A,m,g,p)}set(t,e,n,i,s,a,o,l,c,h,u,d,A,m,g,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=A,f[7]=m,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ls.setFromMatrixColumn(t,0).length(),s=1/ls.setFromMatrixColumn(t,1).length(),a=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,A=a*u,m=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=A+m*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=m+A*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,A=l*u,m=c*h,g=c*u;e[0]=d+g*o,e[4]=m*o-A,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=A*o-m,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,A=l*u,m=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=m+A*o,e[1]=A+m*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,A=a*u,m=o*h,g=o*u;e[0]=l*h,e[4]=m*c-A,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=A*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,A=a*c,m=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=m*u+A,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=A*u+m,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,A=a*c,m=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=A*u-m,e[2]=m*u-A,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hg,t,Vg)}lookAt(t,e,n){const i=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Ai.crossVectors(n,rn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Ai.crossVectors(n,rn)),Ai.normalize(),fa.crossVectors(rn,Ai),i[0]=Ai.x,i[4]=fa.x,i[8]=rn.x,i[1]=Ai.y,i[5]=fa.y,i[9]=rn.y,i[2]=Ai.z,i[6]=fa.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],A=n[13],m=n[2],g=n[6],p=n[10],f=n[14],E=n[3],_=n[7],y=n[11],M=n[15],C=i[0],x=i[4],T=i[8],k=i[12],v=i[1],I=i[5],N=i[9],U=i[13],G=i[2],q=i[6],L=i[10],Y=i[14],z=i[3],Z=i[7],tt=i[11],nt=i[15];return s[0]=a*C+o*v+l*G+c*z,s[4]=a*x+o*I+l*q+c*Z,s[8]=a*T+o*N+l*L+c*tt,s[12]=a*k+o*U+l*Y+c*nt,s[1]=h*C+u*v+d*G+A*z,s[5]=h*x+u*I+d*q+A*Z,s[9]=h*T+u*N+d*L+A*tt,s[13]=h*k+u*U+d*Y+A*nt,s[2]=m*C+g*v+p*G+f*z,s[6]=m*x+g*I+p*q+f*Z,s[10]=m*T+g*N+p*L+f*tt,s[14]=m*k+g*U+p*Y+f*nt,s[3]=E*C+_*v+y*G+M*z,s[7]=E*x+_*I+y*q+M*Z,s[11]=E*T+_*N+y*L+M*tt,s[15]=E*k+_*U+y*Y+M*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],A=t[14],m=t[3],g=t[7],p=t[11],f=t[15];return m*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*A-n*l*A)+g*(+e*l*A-e*c*d+s*a*d-i*a*A+i*c*h-s*l*h)+p*(+e*c*u-e*o*A-s*a*u+n*a*A+s*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],A=t[11],m=t[12],g=t[13],p=t[14],f=t[15],E=u*p*c-g*d*c+g*l*A-o*p*A-u*l*f+o*d*f,_=m*d*c-h*p*c-m*l*A+a*p*A+h*l*f-a*d*f,y=h*g*c-m*u*c+m*o*A-a*g*A-h*o*f+a*u*f,M=m*u*l-h*g*l-m*o*d+a*g*d+h*o*p-a*u*p,C=e*E+n*_+i*y+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/C;return t[0]=E*x,t[1]=(g*d*s-u*p*s-g*i*A+n*p*A+u*i*f-n*d*f)*x,t[2]=(o*p*s-g*l*s+g*i*c-n*p*c-o*i*f+n*l*f)*x,t[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*A-n*l*A)*x,t[4]=_*x,t[5]=(h*p*s-m*d*s+m*i*A-e*p*A-h*i*f+e*d*f)*x,t[6]=(m*l*s-a*p*s-m*i*c+e*p*c+a*i*f-e*l*f)*x,t[7]=(a*d*s-h*l*s+h*i*c-e*d*c-a*i*A+e*l*A)*x,t[8]=y*x,t[9]=(m*u*s-h*g*s-m*n*A+e*g*A+h*n*f-e*u*f)*x,t[10]=(a*g*s-m*o*s+m*n*c-e*g*c-a*n*f+e*o*f)*x,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*A-e*o*A)*x,t[12]=M*x,t[13]=(h*g*i-m*u*i+m*n*d-e*g*d-h*n*p+e*u*p)*x,t[14]=(m*o*i-a*g*i-m*n*l+e*g*l+a*n*p-e*o*p)*x,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*x,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,A=s*h,m=s*u,g=a*h,p=a*u,f=o*u,E=l*c,_=l*h,y=l*u,M=n.x,C=n.y,x=n.z;return i[0]=(1-(g+f))*M,i[1]=(A+y)*M,i[2]=(m-_)*M,i[3]=0,i[4]=(A-y)*C,i[5]=(1-(d+f))*C,i[6]=(p+E)*C,i[7]=0,i[8]=(m+_)*x,i[9]=(p-E)*x,i[10]=(1-(d+g))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ls.set(i[0],i[1],i[2]).length();const a=ls.set(i[4],i[5],i[6]).length(),o=ls.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],En.copy(this);const c=1/s,h=1/a,u=1/o;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=2e3){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let A,m;if(o===2e3)A=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===2001)A=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=A,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=2e3){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),d=(e+t)*c,A=(n+i)*h;let m,g;if(o===2e3)m=(a+s)*u,g=-2*u;else if(o===2001)m=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-A,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ls=new B,En=new Rt,Hg=new B(0,0,0),Vg=new B(1,1,1),Ai=new B,fa=new B,rn=new B,_u=new Rt,vu=new $e;class mn{constructor(t=0,e=0,n=0,i=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],A=i[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,A),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,A),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,A),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,A),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,A));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,A),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _u.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_u,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vu.setFromEuler(this),this.setFromQuaternion(vu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Qh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zg=0;const Eu=new B,cs=new $e,Wn=new Rt,ma=new B,cr=new B,Wg=new B,qg=new $e,yu=new B(1,0,0),xu=new B(0,1,0),Su=new B(0,0,1),Cu={type:"added"},Xg={type:"removed"},hs={type:"childadded",child:null},dl={type:"childremoved",child:null};class ue extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new B,e=new mn,n=new $e,i=new B(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Nt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(yu,t)}rotateY(t){return this.rotateOnAxis(xu,t)}rotateZ(t){return this.rotateOnAxis(Su,t)}translateOnAxis(t,e){return Eu.copy(t).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yu,t)}translateY(t){return this.translateOnAxis(xu,t)}translateZ(t){return this.translateOnAxis(Su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ma.copy(t):ma.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(cr,ma,this.up):Wn.lookAt(ma,cr,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),cs.setFromRotationMatrix(Wn),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cu),hs.child=t,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xg),dl.child=t,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cu),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,Wg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,qg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),A=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),A.length>0&&(n.animations=A),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ue.DEFAULT_UP=new B(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new B,qn=new B,Al=new B,Xn=new B,us=new B,ds=new B,Mu=new B,pl=new B,fl=new B,ml=new B,gl=new jt,_l=new jt,vl=new jt;class ln{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yn.subVectors(t,e),i.cross(yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){yn.subVectors(i,e),qn.subVectors(n,e),Al.subVectors(t,e);const a=yn.dot(yn),o=yn.dot(qn),l=yn.dot(Al),c=qn.dot(qn),h=qn.dot(Al),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,A=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-A-m,m,A)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return gl.setScalar(0),_l.setScalar(0),vl.setScalar(0),gl.fromBufferAttribute(t,e),_l.fromBufferAttribute(t,n),vl.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(gl,s.x),a.addScaledVector(_l,s.y),a.addScaledVector(vl,s.z),a}static isFrontFacing(t,e,n,i){return yn.subVectors(n,e),qn.subVectors(t,e),yn.cross(qn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),yn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;us.subVectors(i,n),ds.subVectors(s,n),pl.subVectors(t,n);const l=us.dot(pl),c=ds.dot(pl);if(l<=0&&c<=0)return e.copy(n);fl.subVectors(t,i);const h=us.dot(fl),u=ds.dot(fl);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(us,a);ml.subVectors(t,s);const A=us.dot(ml),m=ds.dot(ml);if(m>=0&&A<=m)return e.copy(s);const g=A*c-l*m;if(g<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(ds,o);const p=h*m-A*u;if(p<=0&&u-h>=0&&A-m>=0)return Mu.subVectors(s,i),o=(u-h)/(u-h+(A-m)),e.copy(i).addScaledVector(Mu,o);const f=1/(p+g+d);return a=g*f,o=d*f,e.copy(n).addScaledVector(us,a).addScaledVector(ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},ga={h:0,s:0,l:0};function El(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Kt.workingColorSpace){if(t=Uh(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=El(a,s,t+1/3),this.g=El(a,s,t),this.b=El(a,s,t-1/3)}return Kt.toWorkingColorSpace(this,i),this}setStyle(t,e=me){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){const n=Cf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}copyLinearToSRGB(t){return this.r=sl(t.r),this.g=sl(t.g),this.b=sl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return Kt.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Te(Ne.r*255,0,255))*65536+Math.round(Te(Ne.g*255,0,255))*256+Math.round(Te(Ne.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,i=Ne.g,s=Ne.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=me){Kt.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,i=Ne.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(ga);const n=qr(pi.h,ga.h,e),i=qr(pi.s,ga.s,e),s=qr(pi.l,ga.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Mt;Mt.NAMES=Cf;let Yg=0;class bn extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class An extends bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ri=Kg();function Kg(){const r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function $g(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Te(r,-65504,65504),ri.floatView[0]=r;const t=ri.uint32View[0],e=t>>23&511;return ri.baseTable[e]+((t&8388607)>>ri.shiftTable[e])}function Jg(r){const t=r>>10;return ri.uint32View[0]=ri.mantissaTable[ri.offsetTable[t]+(r&1023)]+ri.exponentTable[t],ri.floatView[0]}const _a={toHalfFloat:$g,fromHalfFloat:Jg},Ce=new B,va=new Ut;class ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)va.fromBufferAttribute(this,e),va.applyMatrix3(t),this.setXY(e,va.x,va.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class Mf extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class If extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class cn extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jg=0;const un=new Rt,yl=new ue,As=new B,an=new Ke,hr=new Ke,be=new B;class en extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yf(t)?If:Mf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return yl.lookAt(t),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new cn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ke);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(an.min,hr.min),an.expandByPoint(be),be.addVectors(an.max,hr.max),an.expandByPoint(be)):(an.expandByPoint(hr.min),an.expandByPoint(hr.max))}an.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)be.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(be));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)be.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(t,c),be.add(As)),i=Math.max(i,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<n.count;T++)o[T]=new B,l[T]=new B;const c=new B,h=new B,u=new B,d=new Ut,A=new Ut,m=new Ut,g=new B,p=new B;function f(T,k,v){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,k),u.fromBufferAttribute(n,v),d.fromBufferAttribute(s,T),A.fromBufferAttribute(s,k),m.fromBufferAttribute(s,v),h.sub(c),u.sub(c),A.sub(d),m.sub(d);const I=1/(A.x*m.y-m.x*A.y);isFinite(I)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(u,-A.y).multiplyScalar(I),p.copy(u).multiplyScalar(A.x).addScaledVector(h,-m.x).multiplyScalar(I),o[T].add(g),o[k].add(g),o[v].add(g),l[T].add(p),l[k].add(p),l[v].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let T=0,k=E.length;T<k;++T){const v=E[T],I=v.start,N=v.count;for(let U=I,G=I+N;U<G;U+=3)f(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const _=new B,y=new B,M=new B,C=new B;function x(T){M.fromBufferAttribute(i,T),C.copy(M);const k=o[T];_.copy(k),_.sub(M.multiplyScalar(M.dot(k))).normalize(),y.crossVectors(C,k);const I=y.dot(l[T])<0?-1:1;a.setXYZW(T,_.x,_.y,_.z,I)}for(let T=0,k=E.length;T<k;++T){const v=E[T],I=v.start,N=v.count;for(let U=I,G=I+N;U<G;U+=3)x(t.getX(U+0)),x(t.getX(U+1)),x(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,A=n.count;d<A;d++)n.setXYZ(d,0,0,0);const i=new B,s=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(t)for(let d=0,A=t.count;d<A;d+=3){const m=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,A=e.count;d<A;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let A=0,m=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?A=l[g]*o.data.stride+o.offset:A=l[g]*h;for(let f=0;f<h;f++)d[m++]=c[A++]}return new ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new en,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],A=t(d,n);l.push(A)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const A=c[u];h.push(A.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,A=u.length;d<A;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Iu=new Rt,Ri=new ia,Ea=new gn,wu=new B,ya=new B,xa=new B,Sa=new B,xl=new B,Ca=new B,bu=new B,Ma=new B;class le extends ue{constructor(t=new en,e=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Ca.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(xl.fromBufferAttribute(u,t),a?Ca.addScaledVector(xl,h):Ca.addScaledVector(xl.sub(e),h))}e.add(Ca)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ri.copy(t.ray).recast(t.near),!(Ea.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Ea,wu)===null||Ri.origin.distanceToSquared(wu)>(t.far-t.near)**2))&&(Iu.copy(s).invert(),Ri.copy(t.ray).applyMatrix4(Iu),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,A=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const p=d[m],f=a[p.materialIndex],E=Math.max(p.start,A.start),_=Math.min(o.count,Math.min(p.start+p.count,A.start+A.count));for(let y=E,M=_;y<M;y+=3){const C=o.getX(y),x=o.getX(y+1),T=o.getX(y+2);i=Ia(this,f,t,n,c,h,u,C,x,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,A.start),g=Math.min(o.count,A.start+A.count);for(let p=m,f=g;p<f;p+=3){const E=o.getX(p),_=o.getX(p+1),y=o.getX(p+2);i=Ia(this,a,t,n,c,h,u,E,_,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const p=d[m],f=a[p.materialIndex],E=Math.max(p.start,A.start),_=Math.min(l.count,Math.min(p.start+p.count,A.start+A.count));for(let y=E,M=_;y<M;y+=3){const C=y,x=y+1,T=y+2;i=Ia(this,f,t,n,c,h,u,C,x,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,A.start),g=Math.min(l.count,A.start+A.count);for(let p=m,f=g;p<f;p+=3){const E=p,_=p+1,y=p+2;i=Ia(this,a,t,n,c,h,u,E,_,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Zg(r,t,e,n,i,s,a,o){let l;if(t.side===1?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===0,o),l===null)return null;Ma.copy(o),Ma.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ma);return c<e.near||c>e.far?null:{distance:c,point:Ma.clone(),object:r}}function Ia(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,ya),r.getVertexPosition(l,xa),r.getVertexPosition(c,Sa);const h=Zg(r,t,e,n,ya,xa,Sa,bu);if(h){const u=new B;ln.getBarycoord(bu,ya,xa,Sa,u),i&&(h.uv=ln.getInterpolatedAttribute(i,o,l,c,u,new Ut)),s&&(h.uv1=ln.getInterpolatedAttribute(s,o,l,c,u,new Ut)),a&&(h.normal=ln.getInterpolatedAttribute(a,o,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new B,materialIndex:0};ln.getNormal(ya,xa,Sa,d.normal),h.face=d,h.barycoord=u}return h}class li extends en{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,A=0;m("z","y","x",-1,-1,n,e,t,a,s,0),m("z","y","x",1,-1,n,e,-t,a,s,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(u,2));function m(g,p,f,E,_,y,M,C,x,T,k){const v=y/x,I=M/T,N=y/2,U=M/2,G=C/2,q=x+1,L=T+1;let Y=0,z=0;const Z=new B;for(let tt=0;tt<L;tt++){const nt=tt*I-U;for(let Et=0;Et<q;Et++){const mt=Et*v-N;Z[g]=mt*E,Z[p]=nt*_,Z[f]=G,c.push(Z.x,Z.y,Z.z),Z[g]=0,Z[p]=0,Z[f]=C>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Et/x),u.push(1-tt/T),Y+=1}}for(let tt=0;tt<T;tt++)for(let nt=0;nt<x;nt++){const Et=d+nt+q*tt,mt=d+nt+q*(tt+1),Q=d+(nt+1)+q*(tt+1),X=d+(nt+1)+q*tt;l.push(Et,mt,X),l.push(mt,Q,X),z+=6}o.addGroup(A,z,k),A+=z,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ys(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function We(r){const t={};for(let e=0;e<r.length;e++){const n=Ys(r[e]);for(const i in n)t[i]=n[i]}return t}function t0(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function wf(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const e0={clone:Ys,merge:We};var n0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n0,this.fragmentShader=i0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=t0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bf extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new B,Tu=new Ut,Bu=new Ut;class Be extends bf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,Tu,Bu),e.subVectors(Bu,Tu)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Wr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ps=-90,fs=1;class dh extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Be(ps,fs,t,e);i.layers=this.layers,this.add(i);const s=new Be(ps,fs,t,e);s.layers=this.layers,this.add(s);const a=new Be(ps,fs,t,e);a.layers=this.layers,this.add(a);const o=new Be(ps,fs,t,e);o.layers=this.layers,this.add(o);const l=new Be(ps,fs,t,e);l.layers=this.layers,this.add(l);const c=new Be(ps,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,A),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Tf extends oe{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Oh extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Tf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new li(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=e;const a=new le(i,s),o=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new dh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Sl=new B,s0=new B,r0=new Nt;class Hi{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Sl.subVectors(n,e).cross(s0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Sl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||r0.getNormalMatrix(t),i=this.coplanarPoint(Sl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new gn,wa=new B;class kh{constructor(t=new Hi,e=new Hi,n=new Hi,i=new Hi,s=new Hi,a=new Hi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],A=i[8],m=i[9],g=i[10],p=i[11],f=i[12],E=i[13],_=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,p-A,y-f).normalize(),n[1].setComponents(l+s,d+c,p+A,y+f).normalize(),n[2].setComponents(l+a,d+h,p+m,y+E).normalize(),n[3].setComponents(l-a,d-h,p-m,y-E).normalize(),n[4].setComponents(l-o,d-u,p-g,y-_).normalize(),e===2e3)n[5].setComponents(l+o,d+u,p+g,y+_).normalize();else if(e===2001)n[5].setComponents(o,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(wa.x=i.normal.x>0?t.max.x:t.min.x,wa.y=i.normal.y>0?t.max.y:t.min.y,wa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(wa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bf(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function a0(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let A;if(c instanceof Float32Array)A=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?A=r.HALF_FLOAT:A=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)A=r.SHORT;else if(c instanceof Uint32Array)A=r.UNSIGNED_INT;else if(c instanceof Int32Array)A=r.INT;else if(c instanceof Int8Array)A=r.BYTE;else if(c instanceof Uint8Array)A=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)A=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:A,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((A,m)=>A.start-m.start);let d=0;for(let A=1;A<u.length;A++){const m=u[d],g=u[A];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,u[d]=g)}u.length=d+1;for(let A=0,m=u.length;A<m;A++){const g=u[A];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Qn extends en{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,A=[],m=[],g=[],p=[];for(let f=0;f<h;f++){const E=f*d-a;for(let _=0;_<c;_++){const y=_*u-s;m.push(y,-E,0),g.push(0,0,1),p.push(_/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){const _=E+c*f,y=E+c*(f+1),M=E+1+c*(f+1),C=E+1+c*f;A.push(_,y,C),A.push(y,M,C)}this.setIndex(A),this.setAttribute("position",new cn(m,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.width,t.height,t.widthSegments,t.heightSegments)}}var o0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l0=`#ifdef USE_ALPHAHASH
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
#endif`,c0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A0=`#ifdef USE_AOMAP
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
#endif`,p0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f0=`#ifdef USE_BATCHING
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
#endif`,m0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E0=`#ifdef USE_IRIDESCENCE
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
#endif`,y0=`#ifdef USE_BUMPMAP
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,B0=`#define PI 3.141592653589793
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
} // validated`,R0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D0=`vec3 transformedNormal = objectNormal;
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
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,O0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,H0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y0=`#ifdef USE_GRADIENTMAP
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
}`,K0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
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
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,t_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s_=`PhysicalMaterial material;
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
#endif`,r_=`struct PhysicalMaterial {
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
}`,a_=`
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
#endif`,o_=`#if defined( RE_IndirectDiffuse )
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
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m_=`#if defined( USE_POINTS_UV )
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
#endif`,g_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,__=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x_=`#ifdef USE_MORPHTARGETS
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
#endif`,S_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T_=`#ifdef USE_NORMALMAP
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
#endif`,B_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W_=`float getShadowMask() {
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
}`,q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X_=`#ifdef USE_SKINNING
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
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K_=`#ifdef USE_SKINNING
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
#endif`,$_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tv=`#ifdef USE_TRANSMISSION
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
#endif`,ev=`#ifdef USE_TRANSMISSION
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
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ov=`uniform sampler2D t2D;
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
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
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
}`,Av=`#if DEPTH_PACKING == 3200
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
}`,pv=`#define DISTANCE
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
}`,fv=`#define DISTANCE
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
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`uniform float scale;
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
}`,vv=`uniform vec3 diffuse;
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
}`,Ev=`#include <common>
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
}`,yv=`uniform vec3 diffuse;
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
}`,xv=`#define LAMBERT
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
}`,Sv=`#define LAMBERT
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
}`,Cv=`#define MATCAP
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
}`,Mv=`#define MATCAP
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
}`,Iv=`#define NORMAL
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
}`,wv=`#define NORMAL
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
}`,bv=`#define PHONG
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
}`,Tv=`#define PHONG
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
}`,Bv=`#define STANDARD
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
}`,Rv=`#define STANDARD
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
}`,Dv=`#define TOON
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
}`,Lv=`#define TOON
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
}`,Fv=`uniform float size;
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
}`,Pv=`uniform vec3 diffuse;
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
}`,Uv=`#include <common>
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
}`,Nv=`uniform vec3 color;
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
}`,Qv=`uniform float rotation;
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
}`,Ov=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:o0,alphahash_pars_fragment:l0,alphamap_fragment:c0,alphamap_pars_fragment:h0,alphatest_fragment:u0,alphatest_pars_fragment:d0,aomap_fragment:A0,aomap_pars_fragment:p0,batching_pars_vertex:f0,batching_vertex:m0,begin_vertex:g0,beginnormal_vertex:_0,bsdfs:v0,iridescence_fragment:E0,bumpmap_pars_fragment:y0,clipping_planes_fragment:x0,clipping_planes_pars_fragment:S0,clipping_planes_pars_vertex:C0,clipping_planes_vertex:M0,color_fragment:I0,color_pars_fragment:w0,color_pars_vertex:b0,color_vertex:T0,common:B0,cube_uv_reflection_fragment:R0,defaultnormal_vertex:D0,displacementmap_pars_vertex:L0,displacementmap_vertex:F0,emissivemap_fragment:P0,emissivemap_pars_fragment:U0,colorspace_fragment:N0,colorspace_pars_fragment:Q0,envmap_fragment:O0,envmap_common_pars_fragment:k0,envmap_pars_fragment:G0,envmap_pars_vertex:H0,envmap_physical_pars_fragment:Z0,envmap_vertex:V0,fog_vertex:z0,fog_pars_vertex:W0,fog_fragment:q0,fog_pars_fragment:X0,gradientmap_pars_fragment:Y0,lightmap_pars_fragment:K0,lights_lambert_fragment:$0,lights_lambert_pars_fragment:J0,lights_pars_begin:j0,lights_toon_fragment:t_,lights_toon_pars_fragment:e_,lights_phong_fragment:n_,lights_phong_pars_fragment:i_,lights_physical_fragment:s_,lights_physical_pars_fragment:r_,lights_fragment_begin:a_,lights_fragment_maps:o_,lights_fragment_end:l_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:h_,logdepthbuf_pars_vertex:u_,logdepthbuf_vertex:d_,map_fragment:A_,map_pars_fragment:p_,map_particle_fragment:f_,map_particle_pars_fragment:m_,metalnessmap_fragment:g_,metalnessmap_pars_fragment:__,morphinstance_vertex:v_,morphcolor_vertex:E_,morphnormal_vertex:y_,morphtarget_pars_vertex:x_,morphtarget_vertex:S_,normal_fragment_begin:C_,normal_fragment_maps:M_,normal_pars_fragment:I_,normal_pars_vertex:w_,normal_vertex:b_,normalmap_pars_fragment:T_,clearcoat_normal_fragment_begin:B_,clearcoat_normal_fragment_maps:R_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:L_,opaque_fragment:F_,packing:P_,premultiplied_alpha_fragment:U_,project_vertex:N_,dithering_fragment:Q_,dithering_pars_fragment:O_,roughnessmap_fragment:k_,roughnessmap_pars_fragment:G_,shadowmap_pars_fragment:H_,shadowmap_pars_vertex:V_,shadowmap_vertex:z_,shadowmask_pars_fragment:W_,skinbase_vertex:q_,skinning_pars_vertex:X_,skinning_vertex:Y_,skinnormal_vertex:K_,specularmap_fragment:$_,specularmap_pars_fragment:J_,tonemapping_fragment:j_,tonemapping_pars_fragment:Z_,transmission_fragment:tv,transmission_pars_fragment:ev,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:sv,worldpos_vertex:rv,background_vert:av,background_frag:ov,backgroundCube_vert:lv,backgroundCube_frag:cv,cube_vert:hv,cube_frag:uv,depth_vert:dv,depth_frag:Av,distanceRGBA_vert:pv,distanceRGBA_frag:fv,equirect_vert:mv,equirect_frag:gv,linedashed_vert:_v,linedashed_frag:vv,meshbasic_vert:Ev,meshbasic_frag:yv,meshlambert_vert:xv,meshlambert_frag:Sv,meshmatcap_vert:Cv,meshmatcap_frag:Mv,meshnormal_vert:Iv,meshnormal_frag:wv,meshphong_vert:bv,meshphong_frag:Tv,meshphysical_vert:Bv,meshphysical_frag:Rv,meshtoon_vert:Dv,meshtoon_frag:Lv,points_vert:Fv,points_frag:Pv,shadow_vert:Uv,shadow_frag:Nv,sprite_vert:Qv,sprite_frag:Ov},ot={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Fn={basic:{uniforms:We([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:We([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Mt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:We([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:We([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:We([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Mt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:We([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:We([ot.points,ot.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:We([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:We([ot.common,ot.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:We([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:We([ot.sprite,ot.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:We([ot.common,ot.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:We([ot.lights,ot.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Fn.physical={uniforms:We([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const ba={r:0,b:0,g:0},Li=new mn,kv=new Rt;function Gv(r,t,e,n,i,s,a){const o=new Mt(0);let l=s===!0?0:1,c,h,u=null,d=0,A=null;function m(E){let _=E.isScene===!0?E.background:null;return _&&_.isTexture&&(_=(E.backgroundBlurriness>0?e:t).get(_)),_}function g(E){let _=!1;const y=m(E);y===null?f(o,l):y&&y.isColor&&(f(y,1),_=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(E,_){const y=m(_);y&&(y.isCubeTexture||y.mapping===306)?(h===void 0&&(h=new le(new li(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Ys(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Li.copy(_.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kv.makeRotationFromEuler(Li)),h.material.toneMapped=Kt.getTransfer(y.colorSpace)!==fe,(u!==y||d!==y.version||A!==r.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,A=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new le(new Qn(2,2),new tn({name:"BackgroundMaterial",uniforms:Ys(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(y.colorSpace)!==fe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||A!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,A=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,_){E.getRGB(ba,wf(r)),n.buffers.color.setClear(ba.r,ba.g,ba.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(E,_=1){o.set(E),l=_,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:g,addToRenderList:p}}function Hv(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(v,I,N,U,G){let q=!1;const L=u(U,N,I);s!==L&&(s=L,c(s.object)),q=A(v,U,N,G),q&&m(v,U,N,G),G!==null&&t.update(G,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(v,I,N,U),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function u(v,I,N){const U=N.wireframe===!0;let G=n[v.id];G===void 0&&(G={},n[v.id]=G);let q=G[I.id];q===void 0&&(q={},G[I.id]=q);let L=q[U];return L===void 0&&(L=d(l()),q[U]=L),L}function d(v){const I=[],N=[],U=[];for(let G=0;G<e;G++)I[G]=0,N[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:U,object:v,attributes:{},index:null}}function A(v,I,N,U){const G=s.attributes,q=I.attributes;let L=0;const Y=N.getAttributes();for(const z in Y)if(Y[z].location>=0){const tt=G[z];let nt=q[z];if(nt===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(nt=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(nt=v.instanceColor)),tt===void 0||tt.attribute!==nt||nt&&tt.data!==nt.data)return!0;L++}return s.attributesNum!==L||s.index!==U}function m(v,I,N,U){const G={},q=I.attributes;let L=0;const Y=N.getAttributes();for(const z in Y)if(Y[z].location>=0){let tt=q[z];tt===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(tt=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(tt=v.instanceColor));const nt={};nt.attribute=tt,tt&&tt.data&&(nt.data=tt.data),G[z]=nt,L++}s.attributes=G,s.attributesNum=L,s.index=U}function g(){const v=s.newAttributes;for(let I=0,N=v.length;I<N;I++)v[I]=0}function p(v){f(v,0)}function f(v,I){const N=s.newAttributes,U=s.enabledAttributes,G=s.attributeDivisors;N[v]=1,U[v]===0&&(r.enableVertexAttribArray(v),U[v]=1),G[v]!==I&&(r.vertexAttribDivisor(v,I),G[v]=I)}function E(){const v=s.newAttributes,I=s.enabledAttributes;for(let N=0,U=I.length;N<U;N++)I[N]!==v[N]&&(r.disableVertexAttribArray(N),I[N]=0)}function _(v,I,N,U,G,q,L){L===!0?r.vertexAttribIPointer(v,I,N,G,q):r.vertexAttribPointer(v,I,N,U,G,q)}function y(v,I,N,U){g();const G=U.attributes,q=N.getAttributes(),L=I.defaultAttributeValues;for(const Y in q){const z=q[Y];if(z.location>=0){let Z=G[Y];if(Z===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(Z=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(Z=v.instanceColor)),Z!==void 0){const tt=Z.normalized,nt=Z.itemSize,Et=t.get(Z);if(Et===void 0)continue;const mt=Et.buffer,Q=Et.type,X=Et.bytesPerElement,rt=Q===r.INT||Q===r.UNSIGNED_INT||Z.gpuType===1013;if(Z.isInterleavedBufferAttribute){const at=Z.data,At=at.stride,It=Z.offset;if(at.isInstancedInterleavedBuffer){for(let zt=0;zt<z.locationSize;zt++)f(z.location+zt,at.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let zt=0;zt<z.locationSize;zt++)p(z.location+zt);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let zt=0;zt<z.locationSize;zt++)_(z.location+zt,nt/z.locationSize,Q,tt,At*X,(It+nt/z.locationSize*zt)*X,rt)}else{if(Z.isInstancedBufferAttribute){for(let at=0;at<z.locationSize;at++)f(z.location+at,Z.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let at=0;at<z.locationSize;at++)p(z.location+at);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let at=0;at<z.locationSize;at++)_(z.location+at,nt/z.locationSize,Q,tt,nt*X,nt/z.locationSize*at*X,rt)}}else if(L!==void 0){const tt=L[Y];if(tt!==void 0)switch(tt.length){case 2:r.vertexAttrib2fv(z.location,tt);break;case 3:r.vertexAttrib3fv(z.location,tt);break;case 4:r.vertexAttrib4fv(z.location,tt);break;default:r.vertexAttrib1fv(z.location,tt)}}}}E()}function M(){T();for(const v in n){const I=n[v];for(const N in I){const U=I[N];for(const G in U)h(U[G].object),delete U[G];delete I[N]}delete n[v]}}function C(v){if(n[v.id]===void 0)return;const I=n[v.id];for(const N in I){const U=I[N];for(const G in U)h(U[G].object),delete U[G];delete I[N]}delete n[v.id]}function x(v){for(const I in n){const N=n[I];if(N[v.id]===void 0)continue;const U=N[v.id];for(const G in U)h(U[G].object),delete U[G];delete N[v.id]}}function T(){k(),a=!0,s!==i&&(s=i,c(s.object))}function k(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:k,dispose:M,releaseStatesOfGeometry:C,releaseStatesOfProgram:x,initAttributes:g,enableAttribute:p,disableUnusedAttributes:E}}function Vv(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let A=0;for(let m=0;m<u;m++)A+=h[m];e.update(A,n,1)}function l(c,h,u,d){if(u===0)return;const A=t.get("WEBGL_multi_draw");if(A===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{A.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];for(let g=0;g<d.length;g++)e.update(m,n,d[g])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function zv(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==1023&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const T=x===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==1009&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&x!==1015&&!T)}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const x=t.get("EXT_clip_control");x.clipControlEXT(x.LOWER_LEFT_EXT,x.ZERO_TO_ONE_EXT)}const A=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:A,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:M,maxSamples:C}}function Wv(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Hi,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const A=u.length!==0||d||n!==0||i;return i=d,n=u.length,A},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,A){const m=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,f=r.get(u);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{const E=s?0:n,_=E*4;let y=f.clippingState||null;l.value=y,y=h(m,d,_,A);for(let M=0;M!==_;++M)y[M]=e[M];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,A,m){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,m!==!0||p===null){const f=A+g*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let _=0,y=A;_!==g;++_,y+=4)a.copy(u[_]).applyMatrix4(E,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function qv(r){let t=new WeakMap;function e(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Oh(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class er extends bf{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ns=4,Ru=[.125,.215,.35,.446,.526,.582],Ki=20,Cl=new er,Du=new Mt;let Ml=null,Il=0,wl=0,bl=!1;const Vi=(1+Math.sqrt(5))/2,ms=1/Vi,Lu=[new B(-Vi,ms,0),new B(Vi,ms,0),new B(-ms,0,Vi),new B(ms,0,Vi),new B(0,Vi,-ms),new B(0,Vi,ms),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Fu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ml=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ml,Il,wl),this._renderer.xr.enabled=bl,t.scissorTest=!1,Ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ml=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:he,depthBuffer:!1},i=Pu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xv(s)),this._blurMaterial=Yv(s,t,e)}return i}_compileMaterial(t){const e=new le(this._lodPlanes[0],t);this._renderer.compile(e,Cl)}_sceneToCubeUV(t,e,n,i){const o=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Du),h.toneMapping=0,h.autoClear=!1;const A=new An({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),m=new le(new li,A);let g=!1;const p=t.background;p?p.isColor&&(A.color.copy(p),t.background=null,g=!0):(A.color.copy(Du),g=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):E===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const _=this._cubeSize;Ta(i,E*_,f>2?_:0,_,_),h.setRenderTarget(i),g&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===301||t.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ta(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Cl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Lu[(i-s-1)%Lu.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new le(this._lodPlanes[i],c),d=c.uniforms,A=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*A):2*Math.PI/(2*Ki-1),g=s/m,p=isFinite(s)?1+Math.floor(h*g):Ki;p>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ki}`);const f=[];let E=0;for(let x=0;x<Ki;++x){const T=x/g,k=Math.exp(-T*T/2);f.push(k),x===0?E+=k:x<p&&(E+=2*k)}for(let x=0;x<f.length;x++)f[x]=f[x]/E;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const y=this._sizeLods[i],M=3*y*(i>_-Ns?i-_+Ns:0),C=4*(this._cubeSize-y);Ta(e,M,C,3*y,2*y),l.setRenderTarget(e),l.render(u,Cl)}}function Xv(r){const t=[],e=[],n=[];let i=r;const s=r-Ns+1+Ru.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Ns?l=Ru[a-r+Ns-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],A=6,m=6,g=3,p=2,f=1,E=new Float32Array(g*m*A),_=new Float32Array(p*m*A),y=new Float32Array(f*m*A);for(let C=0;C<A;C++){const x=C%3*2/3-1,T=C>2?0:-1,k=[x,T,0,x+2/3,T,0,x+2/3,T+1,0,x,T,0,x+2/3,T+1,0,x,T+1,0];E.set(k,g*m*C),_.set(d,p*m*C);const v=[C,C,C,C,C,C];y.set(v,f*m*C)}const M=new en;M.setAttribute("position",new ve(E,g)),M.setAttribute("uv",new ve(_,p)),M.setAttribute("faceIndex",new ve(y,f)),t.push(M),i>Ns&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pu(r,t,e){const n=new fn(r,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ta(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Yv(r,t,e){const n=new Float32Array(Ki),i=new B(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Uu(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Nu(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Gh(){return`

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
	`}function Kv(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Fu(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const A=o.image;return c&&A&&A.height>0||h&&A&&i(A)?(e===null&&(e=new Fu(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function $v(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&fo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jv(r,t,e,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const g=d.morphAttributes[m];for(let p=0,f=g.length;p<f;p++)t.remove(g[p])}d.removeEventListener("dispose",a),delete i[d.id];const A=s.get(d);A&&(t.remove(A),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)t.update(d[m],r.ARRAY_BUFFER);const A=u.morphAttributes;for(const m in A){const g=A[m];for(let p=0,f=g.length;p<f;p++)t.update(g[p],r.ARRAY_BUFFER)}}function c(u){const d=[],A=u.index,m=u.attributes.position;let g=0;if(A!==null){const E=A.array;g=A.version;for(let _=0,y=E.length;_<y;_+=3){const M=E[_+0],C=E[_+1],x=E[_+2];d.push(M,C,C,x,x,M)}}else if(m!==void 0){const E=m.array;g=m.version;for(let _=0,y=E.length/3-1;_<y;_+=3){const M=_+0,C=_+1,x=_+2;d.push(M,C,C,x,x,M)}}else return;const p=new(yf(d)?If:Mf)(d,1);p.version=g;const f=s.get(u);f&&t.remove(f),s.set(u,p)}function h(u){const d=s.get(u);if(d){const A=u.index;A!==null&&d.version<A.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function jv(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,A){r.drawElements(n,A,s,d*a),e.update(A,n,1)}function c(d,A,m){m!==0&&(r.drawElementsInstanced(n,A,s,d*a,m),e.update(A,n,m))}function h(d,A,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,A,0,s,d,0,m);let p=0;for(let f=0;f<m;f++)p+=A[f];e.update(p,n,1)}function u(d,A,m,g){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/a,A[f],g[f]);else{p.multiDrawElementsInstancedWEBGL(n,A,0,s,d,0,g,0,m);let f=0;for(let E=0;E<m;E++)f+=A[E];for(let E=0;E<g.length;E++)e.update(f,n,g[E])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Zv(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function tE(r,t,e){const n=new WeakMap,i=new jt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let k=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",k)};d!==void 0&&d.texture.dispose();const A=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let _=0;A===!0&&(_=1),m===!0&&(_=2),g===!0&&(_=3);let y=o.attributes.position.count*_,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const C=new Float32Array(y*M*4*u),x=new xf(C,y,M,u);x.type=1015,x.needsUpdate=!0;const T=_*4;for(let v=0;v<u;v++){const I=p[v],N=f[v],U=E[v],G=y*M*4*v;for(let q=0;q<I.count;q++){const L=q*T;A===!0&&(i.fromBufferAttribute(I,q),C[G+L+0]=i.x,C[G+L+1]=i.y,C[G+L+2]=i.z,C[G+L+3]=0),m===!0&&(i.fromBufferAttribute(N,q),C[G+L+4]=i.x,C[G+L+5]=i.y,C[G+L+6]=i.z,C[G+L+7]=0),g===!0&&(i.fromBufferAttribute(U,q),C[G+L+8]=i.x,C[G+L+9]=i.y,C[G+L+10]=i.z,C[G+L+11]=U.itemSize===4?i.w:1)}}d={count:u,texture:x,size:new Ut(y,M)},n.set(o,d),o.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let A=0;for(let g=0;g<c.length;g++)A+=c[g];const m=o.morphTargetsRelative?1:1-A;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function eE(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Rf extends oe{constructor(t,e,n,i,s,a,o,l,c,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Df=new oe,Qu=new Rf(1,1),Lf=new xf,Ff=new Sf,Pf=new Tf,Ou=[],ku=[],Gu=new Float32Array(16),Hu=new Float32Array(9),Vu=new Float32Array(4);function nr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Ou[i];if(s===void 0&&(s=new Float32Array(i),Ou[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ie(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function we(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Yo(r,t){let e=ku[t];e===void 0&&(e=new Int32Array(t),ku[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function nE(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function iE(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2fv(this.addr,t),we(e,t)}}function sE(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;r.uniform3fv(this.addr,t),we(e,t)}}function rE(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4fv(this.addr,t),we(e,t)}}function aE(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ie(e,n))return;Vu.set(n),r.uniformMatrix2fv(this.addr,!1,Vu),we(e,n)}}function oE(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ie(e,n))return;Hu.set(n),r.uniformMatrix3fv(this.addr,!1,Hu),we(e,n)}}function lE(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ie(e,n))return;Gu.set(n),r.uniformMatrix4fv(this.addr,!1,Gu),we(e,n)}}function cE(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function hE(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2iv(this.addr,t),we(e,t)}}function uE(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;r.uniform3iv(this.addr,t),we(e,t)}}function dE(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4iv(this.addr,t),we(e,t)}}function AE(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function pE(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2uiv(this.addr,t),we(e,t)}}function fE(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;r.uniform3uiv(this.addr,t),we(e,t)}}function mE(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4uiv(this.addr,t),we(e,t)}}function gE(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Qu.compareFunction=515,s=Qu):s=Df,e.setTexture2D(t||s,i)}function _E(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ff,i)}function vE(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Pf,i)}function EE(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Lf,i)}function yE(r){switch(r){case 5126:return nE;case 35664:return iE;case 35665:return sE;case 35666:return rE;case 35674:return aE;case 35675:return oE;case 35676:return lE;case 5124:case 35670:return cE;case 35667:case 35671:return hE;case 35668:case 35672:return uE;case 35669:case 35673:return dE;case 5125:return AE;case 36294:return pE;case 36295:return fE;case 36296:return mE;case 35678:case 36198:case 36298:case 36306:case 35682:return gE;case 35679:case 36299:case 36307:return _E;case 35680:case 36300:case 36308:case 36293:return vE;case 36289:case 36303:case 36311:case 36292:return EE}}function xE(r,t){r.uniform1fv(this.addr,t)}function SE(r,t){const e=nr(t,this.size,2);r.uniform2fv(this.addr,e)}function CE(r,t){const e=nr(t,this.size,3);r.uniform3fv(this.addr,e)}function ME(r,t){const e=nr(t,this.size,4);r.uniform4fv(this.addr,e)}function IE(r,t){const e=nr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function wE(r,t){const e=nr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function bE(r,t){const e=nr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function TE(r,t){r.uniform1iv(this.addr,t)}function BE(r,t){r.uniform2iv(this.addr,t)}function RE(r,t){r.uniform3iv(this.addr,t)}function DE(r,t){r.uniform4iv(this.addr,t)}function LE(r,t){r.uniform1uiv(this.addr,t)}function FE(r,t){r.uniform2uiv(this.addr,t)}function PE(r,t){r.uniform3uiv(this.addr,t)}function UE(r,t){r.uniform4uiv(this.addr,t)}function NE(r,t,e){const n=this.cache,i=t.length,s=Yo(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Df,s[a])}function QE(r,t,e){const n=this.cache,i=t.length,s=Yo(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Ff,s[a])}function OE(r,t,e){const n=this.cache,i=t.length,s=Yo(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Pf,s[a])}function kE(r,t,e){const n=this.cache,i=t.length,s=Yo(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Lf,s[a])}function GE(r){switch(r){case 5126:return xE;case 35664:return SE;case 35665:return CE;case 35666:return ME;case 35674:return IE;case 35675:return wE;case 35676:return bE;case 5124:case 35670:return TE;case 35667:case 35671:return BE;case 35668:case 35672:return RE;case 35669:case 35673:return DE;case 5125:return LE;case 36294:return FE;case 36295:return PE;case 36296:return UE;case 35678:case 36198:case 36298:case 36306:case 35682:return NE;case 35679:case 36299:case 36307:return QE;case 35680:case 36300:case 36308:case 36293:return OE;case 36289:case 36303:case 36311:case 36292:return kE}}class HE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yE(e.type)}}class VE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=GE(e.type)}}class zE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function zu(r,t){r.seq.push(t),r.map[t.id]=t}function WE(r,t,e){const n=r.name,i=n.length;for(Tl.lastIndex=0;;){const s=Tl.exec(n),a=Tl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){zu(e,c===void 0?new HE(o,r,t):new VE(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new zE(o),zu(e,u)),e=u}}}class mo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);WE(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Wu(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const qE=37297;let XE=0;function YE(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function KE(r){const t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(r);let n;switch(t===e?n="":t===Do&&e===Ro?n="LinearDisplayP3ToLinearSRGB":t===Ro&&e===Do&&(n="LinearSRGBToLinearDisplayP3"),r){case he:case na:return[n,"LinearTransferOETF"];case me:case Xo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function qu(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+YE(r.getShaderSource(t),a)}else return i}function $E(r,t){const e=KE(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function JE(r,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ba=new B;function jE(){Kt.getLuminanceCoefficients(Ba);const r=Ba.x.toFixed(4),t=Ba.y.toFixed(4),e=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function ty(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ey(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Qr(r){return r!==""}function Xu(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ny=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(r){return r.replace(ny,sy)}const iy=new Map;function sy(r,t){let e=kt[t];if(e===void 0){const n=iy.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ah(e)}const ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(r){return r.replace(ry,ay)}function ay(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function $u(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function oy(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function ly(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cy(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function hy(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function uy(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function dy(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=oy(e),c=ly(e),h=cy(e),u=hy(e),d=uy(e),A=ZE(e),m=ty(s),g=i.createProgram();let p,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Qr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Qr).join(`
`),f.length>0&&(f+=`
`)):(p=[$u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),f=[$u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?kt.tonemapping_pars_fragment:"",e.toneMapping!==0?JE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,$E("linearToOutputTexel",e.outputColorSpace),jE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qr).join(`
`)),a=Ah(a),a=Xu(a,e),a=Yu(a,e),o=Ah(o),o=Xu(o,e),o=Yu(o,e),a=Ku(a),o=Ku(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=E+p+a,y=E+f+o,M=Wu(i,i.VERTEX_SHADER,_),C=Wu(i,i.FRAGMENT_SHADER,y);i.attachShader(g,M),i.attachShader(g,C),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function x(I){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g).trim(),U=i.getShaderInfoLog(M).trim(),G=i.getShaderInfoLog(C).trim();let q=!0,L=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,M,C);else{const Y=qu(i,M,"vertex"),z=qu(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+Y+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||G==="")&&(L=!1);L&&(I.diagnostics={runnable:q,programLog:N,vertexShader:{log:U,prefix:p},fragmentShader:{log:G,prefix:f}})}i.deleteShader(M),i.deleteShader(C),T=new mo(i,g),k=ey(i,g)}let T;this.getUniforms=function(){return T===void 0&&x(this),T};let k;this.getAttributes=function(){return k===void 0&&x(this),k};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,qE)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=XE++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=C,this}let Ay=0;class py{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new fy(t),e.set(t,n)),n}}class fy{constructor(t){this.id=Ay++,this.code=t,this.usedTimes=0}}function my(r,t,e,n,i,s,a){const o=new Qh,l=new py,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,A=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function f(v,I,N,U,G){const q=U.fog,L=G.geometry,Y=v.isMeshStandardMaterial?U.environment:null,z=(v.isMeshStandardMaterial?e:t).get(v.envMap||Y),Z=z&&z.mapping===306?z.image.height:null,tt=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const nt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Et=nt!==void 0?nt.length:0;let mt=0;L.morphAttributes.position!==void 0&&(mt=1),L.morphAttributes.normal!==void 0&&(mt=2),L.morphAttributes.color!==void 0&&(mt=3);let Q,X,rt,at;if(tt){const je=Fn[tt];Q=je.vertexShader,X=je.fragmentShader}else Q=v.vertexShader,X=v.fragmentShader,l.update(v),rt=l.getVertexShaderID(v),at=l.getFragmentShaderID(v);const At=r.getRenderTarget(),It=G.isInstancedMesh===!0,zt=G.isBatchedMesh===!0,Zt=!!v.map,Qt=!!v.matcap,R=!!z,Pe=!!v.aoMap,Ht=!!v.lightMap,Wt=!!v.bumpMap,bt=!!v.normalMap,ce=!!v.displacementMap,Tt=!!v.emissiveMap,b=!!v.metalnessMap,S=!!v.roughnessMap,O=v.anisotropy>0,$=v.clearcoat>0,j=v.dispersion>0,K=v.iridescence>0,xt=v.sheen>0,lt=v.transmission>0,pt=O&&!!v.anisotropyMap,$t=$&&!!v.clearcoatMap,et=$&&!!v.clearcoatNormalMap,gt=$&&!!v.clearcoatRoughnessMap,Ft=K&&!!v.iridescenceMap,Pt=K&&!!v.iridescenceThicknessMap,_t=xt&&!!v.sheenColorMap,qt=xt&&!!v.sheenRoughnessMap,Ot=!!v.specularMap,de=!!v.specularColorMap,D=!!v.specularIntensityMap,ut=lt&&!!v.transmissionMap,W=lt&&!!v.thicknessMap,J=!!v.gradientMap,ct=!!v.alphaMap,dt=v.alphaTest>0,Yt=!!v.alphaHash,Se=!!v.extensions;let Je=0;v.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(Je=r.toneMapping);const Jt={shaderID:tt,shaderType:v.type,shaderName:v.name,vertexShader:Q,fragmentShader:X,defines:v.defines,customVertexShaderID:rt,customFragmentShaderID:at,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:zt,batchingColor:zt&&G._colorsTexture!==null,instancing:It,instancingColor:It&&G.instanceColor!==null,instancingMorph:It&&G.morphTexture!==null,supportsVertexTextures:A,outputColorSpace:At===null?r.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:he,alphaToCoverage:!!v.alphaToCoverage,map:Zt,matcap:Qt,envMap:R,envMapMode:R&&z.mapping,envMapCubeUVHeight:Z,aoMap:Pe,lightMap:Ht,bumpMap:Wt,normalMap:bt,displacementMap:A&&ce,emissiveMap:Tt,normalMapObjectSpace:bt&&v.normalMapType===1,normalMapTangentSpace:bt&&v.normalMapType===0,metalnessMap:b,roughnessMap:S,anisotropy:O,anisotropyMap:pt,clearcoat:$,clearcoatMap:$t,clearcoatNormalMap:et,clearcoatRoughnessMap:gt,dispersion:j,iridescence:K,iridescenceMap:Ft,iridescenceThicknessMap:Pt,sheen:xt,sheenColorMap:_t,sheenRoughnessMap:qt,specularMap:Ot,specularColorMap:de,specularIntensityMap:D,transmission:lt,transmissionMap:ut,thicknessMap:W,gradientMap:J,opaque:v.transparent===!1&&v.blending===1&&v.alphaToCoverage===!1,alphaMap:ct,alphaTest:dt,alphaHash:Yt,combine:v.combine,mapUv:Zt&&p(v.map.channel),aoMapUv:Pe&&p(v.aoMap.channel),lightMapUv:Ht&&p(v.lightMap.channel),bumpMapUv:Wt&&p(v.bumpMap.channel),normalMapUv:bt&&p(v.normalMap.channel),displacementMapUv:ce&&p(v.displacementMap.channel),emissiveMapUv:Tt&&p(v.emissiveMap.channel),metalnessMapUv:b&&p(v.metalnessMap.channel),roughnessMapUv:S&&p(v.roughnessMap.channel),anisotropyMapUv:pt&&p(v.anisotropyMap.channel),clearcoatMapUv:$t&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:et&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:qt&&p(v.sheenRoughnessMap.channel),specularMapUv:Ot&&p(v.specularMap.channel),specularColorMapUv:de&&p(v.specularColorMap.channel),specularIntensityMapUv:D&&p(v.specularIntensityMap.channel),transmissionMapUv:ut&&p(v.transmissionMap.channel),thicknessMapUv:W&&p(v.thicknessMap.channel),alphaMapUv:ct&&p(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(bt||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!L.attributes.uv&&(Zt||ct),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:mt,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:Je,decodeVideoTexture:Zt&&v.map.isVideoTexture===!0&&Kt.getTransfer(v.map.colorSpace)===fe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===2,flipSided:v.side===1,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Se&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&v.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function E(v){const I=[];if(v.shaderID?I.push(v.shaderID):(I.push(v.customVertexShaderID),I.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)I.push(N),I.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(_(I,v),y(I,v),I.push(r.outputColorSpace)),I.push(v.customProgramCacheKey),I.join()}function _(v,I){v.push(I.precision),v.push(I.outputColorSpace),v.push(I.envMapMode),v.push(I.envMapCubeUVHeight),v.push(I.mapUv),v.push(I.alphaMapUv),v.push(I.lightMapUv),v.push(I.aoMapUv),v.push(I.bumpMapUv),v.push(I.normalMapUv),v.push(I.displacementMapUv),v.push(I.emissiveMapUv),v.push(I.metalnessMapUv),v.push(I.roughnessMapUv),v.push(I.anisotropyMapUv),v.push(I.clearcoatMapUv),v.push(I.clearcoatNormalMapUv),v.push(I.clearcoatRoughnessMapUv),v.push(I.iridescenceMapUv),v.push(I.iridescenceThicknessMapUv),v.push(I.sheenColorMapUv),v.push(I.sheenRoughnessMapUv),v.push(I.specularMapUv),v.push(I.specularColorMapUv),v.push(I.specularIntensityMapUv),v.push(I.transmissionMapUv),v.push(I.thicknessMapUv),v.push(I.combine),v.push(I.fogExp2),v.push(I.sizeAttenuation),v.push(I.morphTargetsCount),v.push(I.morphAttributeCount),v.push(I.numDirLights),v.push(I.numPointLights),v.push(I.numSpotLights),v.push(I.numSpotLightMaps),v.push(I.numHemiLights),v.push(I.numRectAreaLights),v.push(I.numDirLightShadows),v.push(I.numPointLightShadows),v.push(I.numSpotLightShadows),v.push(I.numSpotLightShadowsWithMaps),v.push(I.numLightProbes),v.push(I.shadowMapType),v.push(I.toneMapping),v.push(I.numClippingPlanes),v.push(I.numClipIntersection),v.push(I.depthPacking)}function y(v,I){o.disableAll(),I.supportsVertexTextures&&o.enable(0),I.instancing&&o.enable(1),I.instancingColor&&o.enable(2),I.instancingMorph&&o.enable(3),I.matcap&&o.enable(4),I.envMap&&o.enable(5),I.normalMapObjectSpace&&o.enable(6),I.normalMapTangentSpace&&o.enable(7),I.clearcoat&&o.enable(8),I.iridescence&&o.enable(9),I.alphaTest&&o.enable(10),I.vertexColors&&o.enable(11),I.vertexAlphas&&o.enable(12),I.vertexUv1s&&o.enable(13),I.vertexUv2s&&o.enable(14),I.vertexUv3s&&o.enable(15),I.vertexTangents&&o.enable(16),I.anisotropy&&o.enable(17),I.alphaHash&&o.enable(18),I.batching&&o.enable(19),I.dispersion&&o.enable(20),I.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),I.fog&&o.enable(0),I.useFog&&o.enable(1),I.flatShading&&o.enable(2),I.logarithmicDepthBuffer&&o.enable(3),I.reverseDepthBuffer&&o.enable(4),I.skinning&&o.enable(5),I.morphTargets&&o.enable(6),I.morphNormals&&o.enable(7),I.morphColors&&o.enable(8),I.premultipliedAlpha&&o.enable(9),I.shadowMapEnabled&&o.enable(10),I.doubleSided&&o.enable(11),I.flipSided&&o.enable(12),I.useDepthPacking&&o.enable(13),I.dithering&&o.enable(14),I.transmission&&o.enable(15),I.sheen&&o.enable(16),I.opaque&&o.enable(17),I.pointsUvs&&o.enable(18),I.decodeVideoTexture&&o.enable(19),I.alphaToCoverage&&o.enable(20),v.push(o.mask)}function M(v){const I=g[v.type];let N;if(I){const U=Fn[I];N=e0.clone(U.uniforms)}else N=v.uniforms;return N}function C(v,I){let N;for(let U=0,G=h.length;U<G;U++){const q=h[U];if(q.cacheKey===I){N=q,++N.usedTimes;break}}return N===void 0&&(N=new dy(r,I,v,s),h.push(N)),N}function x(v){if(--v.usedTimes===0){const I=h.indexOf(v);h[I]=h[h.length-1],h.pop(),v.destroy()}}function T(v){l.remove(v)}function k(){l.dispose()}return{getParameters:f,getProgramCacheKey:E,getUniforms:M,acquireProgram:C,releaseProgram:x,releaseShaderCache:T,programs:h,dispose:k}}function gy(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function _y(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ju(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ju(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,A,m,g,p){let f=r[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:A,groupOrder:m,renderOrder:u.renderOrder,z:g,group:p},r[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=A,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=g,f.group=p),t++,f}function o(u,d,A,m,g,p){const f=a(u,d,A,m,g,p);A.transmission>0?n.push(f):A.transparent===!0?i.push(f):e.push(f)}function l(u,d,A,m,g,p){const f=a(u,d,A,m,g,p);A.transmission>0?n.unshift(f):A.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||_y),n.length>1&&n.sort(d||Ju),i.length>1&&i.sort(d||Ju)}function h(){for(let u=t,d=r.length;u<d;u++){const A=r[u];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function vy(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new ju,r.set(n,[a])):i>=s.length?(a=new ju,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Ey(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Mt};break;case"SpotLight":e={position:new B,direction:new B,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new B,halfWidth:new B,halfHeight:new B};break}return r[t.id]=e,e}}}function yy(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let xy=0;function Sy(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Cy(r){const t=new Ey,e=yy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new Rt,a=new Rt;function o(c){let h=0,u=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let A=0,m=0,g=0,p=0,f=0,E=0,_=0,y=0,M=0,C=0,x=0;c.sort(Sy);for(let k=0,v=c.length;k<v;k++){const I=c[k],N=I.color,U=I.intensity,G=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*U,u+=N.g*U,d+=N.b*U;else if(I.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(I.sh.coefficients[L],U);x++}else if(I.isDirectionalLight){const L=t.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Y=I.shadow,z=e.get(I);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.directionalShadow[A]=z,n.directionalShadowMap[A]=q,n.directionalShadowMatrix[A]=I.shadow.matrix,E++}n.directional[A]=L,A++}else if(I.isSpotLight){const L=t.get(I);L.position.setFromMatrixPosition(I.matrixWorld),L.color.copy(N).multiplyScalar(U),L.distance=G,L.coneCos=Math.cos(I.angle),L.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),L.decay=I.decay,n.spot[g]=L;const Y=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,Y.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[g]=Y.matrix,I.castShadow){const z=e.get(I);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=q,y++}g++}else if(I.isRectAreaLight){const L=t.get(I);L.color.copy(N).multiplyScalar(U),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=L,p++}else if(I.isPointLight){const L=t.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),L.distance=I.distance,L.decay=I.decay,I.castShadow){const Y=I.shadow,z=e.get(I);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=I.shadow.matrix,_++}n.point[m]=L,m++}else if(I.isHemisphereLight){const L=t.get(I);L.skyColor.copy(I.color).multiplyScalar(U),L.groundColor.copy(I.groundColor).multiplyScalar(U),n.hemi[f]=L,f++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const T=n.hash;(T.directionalLength!==A||T.pointLength!==m||T.spotLength!==g||T.rectAreaLength!==p||T.hemiLength!==f||T.numDirectionalShadows!==E||T.numPointShadows!==_||T.numSpotShadows!==y||T.numSpotMaps!==M||T.numLightProbes!==x)&&(n.directional.length=A,n.spot.length=g,n.rectArea.length=p,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+M-C,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=x,T.directionalLength=A,T.pointLength=m,T.spotLength=g,T.rectAreaLength=p,T.hemiLength=f,T.numDirectionalShadows=E,T.numPointShadows=_,T.numSpotShadows=y,T.numSpotMaps=M,T.numLightProbes=x,n.version=xy++)}function l(c,h){let u=0,d=0,A=0,m=0,g=0;const p=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const _=c[f];if(_.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),u++}else if(_.isSpotLight){const y=n.spot[A];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),A++}else if(_.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(_.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Zu(r){const t=new Cy(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function My(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Zu(r),t.set(i,[o])):s>=a.length?(o=new Zu(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Uf extends bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Iy extends bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const wy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,by=`uniform sampler2D shadow_pass;
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
}`;function Ty(r,t,e){let n=new kh;const i=new Ut,s=new Ut,a=new jt,o=new Uf({depthPacking:3201}),l=new Iy,c={},h=e.maxTextureSize,u={0:1,1:0,2:2},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:wy,fragmentShader:by}),A=d.clone();A.defines.HORIZONTAL_PASS=1;const m=new en;m.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new le(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(C,x,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const k=r.getRenderTarget(),v=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),N=r.state;N.setBlending(0),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=f!==3&&this.type===3,G=f===3&&this.type!==3;for(let q=0,L=C.length;q<L;q++){const Y=C[q],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const Z=z.getFrameExtents();if(i.multiply(Z),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,z.mapSize.y=s.y)),z.map===null||U===!0||G===!0){const nt=this.type!==3?{minFilter:1003,magFilter:1003}:{};z.map!==null&&z.map.dispose(),z.map=new fn(i.x,i.y,nt),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const tt=z.getViewportCount();for(let nt=0;nt<tt;nt++){const Et=z.getViewport(nt);a.set(s.x*Et.x,s.y*Et.y,s.x*Et.z,s.y*Et.w),N.viewport(a),z.updateMatrices(Y,nt),n=z.getFrustum(),y(x,T,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===3&&E(z,T),z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,r.setRenderTarget(k,v,I)};function E(C,x){const T=t.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,A.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,A.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new fn(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(x,null,T,d,g,null),A.uniforms.shadow_pass.value=C.mapPass.texture,A.uniforms.resolution.value=C.mapSize,A.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(x,null,T,A,g,null)}function _(C,x,T,k){let v=null;const I=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)v=I;else if(v=T.isPointLight===!0?l:o,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const N=v.uuid,U=x.uuid;let G=c[N];G===void 0&&(G={},c[N]=G);let q=G[U];q===void 0&&(q=v.clone(),G[U]=q,x.addEventListener("dispose",M)),v=q}if(v.visible=x.visible,v.wireframe=x.wireframe,k===3?v.side=x.shadowSide!==null?x.shadowSide:x.side:v.side=x.shadowSide!==null?x.shadowSide:u[x.side],v.alphaMap=x.alphaMap,v.alphaTest=x.alphaTest,v.map=x.map,v.clipShadows=x.clipShadows,v.clippingPlanes=x.clippingPlanes,v.clipIntersection=x.clipIntersection,v.displacementMap=x.displacementMap,v.displacementScale=x.displacementScale,v.displacementBias=x.displacementBias,v.wireframeLinewidth=x.wireframeLinewidth,v.linewidth=x.linewidth,T.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=r.properties.get(v);N.light=T}return v}function y(C,x,T,k,v){if(C.visible===!1)return;if(C.layers.test(x.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===3)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);const U=t.update(C),G=C.material;if(Array.isArray(G)){const q=U.groups;for(let L=0,Y=q.length;L<Y;L++){const z=q[L],Z=G[z.materialIndex];if(Z&&Z.visible){const tt=_(C,Z,k,v);C.onBeforeShadow(r,C,x,T,U,tt,z),r.renderBufferDirect(T,null,U,tt,C,z),C.onAfterShadow(r,C,x,T,U,tt,z)}}}else if(G.visible){const q=_(C,G,k,v);C.onBeforeShadow(r,C,x,T,U,q,null),r.renderBufferDirect(T,null,U,q,C,null),C.onAfterShadow(r,C,x,T,U,q,null)}}const N=C.children;for(let U=0,G=N.length;U<G;U++)y(N[U],x,T,k,v)}function M(C){C.target.removeEventListener("dispose",M);for(const T in c){const k=c[T],v=C.target.uuid;v in k&&(k[v].dispose(),delete k[v])}}}const By={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Ry(r){function t(){let D=!1;const ut=new jt;let W=null;const J=new jt(0,0,0,0);return{setMask:function(ct){W!==ct&&!D&&(r.colorMask(ct,ct,ct,ct),W=ct)},setLocked:function(ct){D=ct},setClear:function(ct,dt,Yt,Se,Je){Je===!0&&(ct*=Se,dt*=Se,Yt*=Se),ut.set(ct,dt,Yt,Se),J.equals(ut)===!1&&(r.clearColor(ct,dt,Yt,Se),J.copy(ut))},reset:function(){D=!1,W=null,J.set(-1,0,0,0)}}}function e(){let D=!1,ut=!1,W=null,J=null,ct=null;return{setReversed:function(dt){ut=dt},setTest:function(dt){dt?rt(r.DEPTH_TEST):at(r.DEPTH_TEST)},setMask:function(dt){W!==dt&&!D&&(r.depthMask(dt),W=dt)},setFunc:function(dt){if(ut&&(dt=By[dt]),J!==dt){switch(dt){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=dt}},setLocked:function(dt){D=dt},setClear:function(dt){ct!==dt&&(r.clearDepth(dt),ct=dt)},reset:function(){D=!1,W=null,J=null,ct=null}}}function n(){let D=!1,ut=null,W=null,J=null,ct=null,dt=null,Yt=null,Se=null,Je=null;return{setTest:function(Jt){D||(Jt?rt(r.STENCIL_TEST):at(r.STENCIL_TEST))},setMask:function(Jt){ut!==Jt&&!D&&(r.stencilMask(Jt),ut=Jt)},setFunc:function(Jt,je,Hn){(W!==Jt||J!==je||ct!==Hn)&&(r.stencilFunc(Jt,je,Hn),W=Jt,J=je,ct=Hn)},setOp:function(Jt,je,Hn){(dt!==Jt||Yt!==je||Se!==Hn)&&(r.stencilOp(Jt,je,Hn),dt=Jt,Yt=je,Se=Hn)},setLocked:function(Jt){D=Jt},setClear:function(Jt){Je!==Jt&&(r.clearStencil(Jt),Je=Jt)},reset:function(){D=!1,ut=null,W=null,J=null,ct=null,dt=null,Yt=null,Se=null,Je=null}}}const i=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],A=null,m=!1,g=null,p=null,f=null,E=null,_=null,y=null,M=null,C=new Mt(0,0,0),x=0,T=!1,k=null,v=null,I=null,N=null,U=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,L=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=L>=1):Y.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=L>=2);let z=null,Z={};const tt=r.getParameter(r.SCISSOR_BOX),nt=r.getParameter(r.VIEWPORT),Et=new jt().fromArray(tt),mt=new jt().fromArray(nt);function Q(D,ut,W,J){const ct=new Uint8Array(4),dt=r.createTexture();r.bindTexture(D,dt),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Yt=0;Yt<W;Yt++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,ct):r.texImage2D(ut+Yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ct);return dt}const X={};X[r.TEXTURE_2D]=Q(r.TEXTURE_2D,r.TEXTURE_2D,1),X[r.TEXTURE_CUBE_MAP]=Q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[r.TEXTURE_2D_ARRAY]=Q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),X[r.TEXTURE_3D]=Q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),rt(r.DEPTH_TEST),s.setFunc(3),Ht(!1),Wt(1),rt(r.CULL_FACE),R(0);function rt(D){c[D]!==!0&&(r.enable(D),c[D]=!0)}function at(D){c[D]!==!1&&(r.disable(D),c[D]=!1)}function At(D,ut){return h[D]!==ut?(r.bindFramebuffer(D,ut),h[D]=ut,D===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ut),D===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function It(D,ut){let W=d,J=!1;if(D){W=u.get(ut),W===void 0&&(W=[],u.set(ut,W));const ct=D.textures;if(W.length!==ct.length||W[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,Yt=ct.length;dt<Yt;dt++)W[dt]=r.COLOR_ATTACHMENT0+dt;W.length=ct.length,J=!0}}else W[0]!==r.BACK&&(W[0]=r.BACK,J=!0);J&&r.drawBuffers(W)}function zt(D){return A!==D?(r.useProgram(D),A=D,!0):!1}const Zt={100:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};Zt[103]=r.MIN,Zt[104]=r.MAX;const Qt={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,204:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,205:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function R(D,ut,W,J,ct,dt,Yt,Se,Je,Jt){if(D===0){m===!0&&(at(r.BLEND),m=!1);return}if(m===!1&&(rt(r.BLEND),m=!0),D!==5){if(D!==g||Jt!==T){if((p!==100||_!==100)&&(r.blendEquation(r.FUNC_ADD),p=100,_=100),Jt)switch(D){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}f=null,E=null,y=null,M=null,C.set(0,0,0),x=0,g=D,T=Jt}return}ct=ct||ut,dt=dt||W,Yt=Yt||J,(ut!==p||ct!==_)&&(r.blendEquationSeparate(Zt[ut],Zt[ct]),p=ut,_=ct),(W!==f||J!==E||dt!==y||Yt!==M)&&(r.blendFuncSeparate(Qt[W],Qt[J],Qt[dt],Qt[Yt]),f=W,E=J,y=dt,M=Yt),(Se.equals(C)===!1||Je!==x)&&(r.blendColor(Se.r,Se.g,Se.b,Je),C.copy(Se),x=Je),g=D,T=!1}function Pe(D,ut){D.side===2?at(r.CULL_FACE):rt(r.CULL_FACE);let W=D.side===1;ut&&(W=!W),Ht(W),D.blending===1&&D.transparent===!1?R(0):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),i.setMask(D.colorWrite);const J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ce(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(r.SAMPLE_ALPHA_TO_COVERAGE):at(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(D){k!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),k=D)}function Wt(D){D!==0?(rt(r.CULL_FACE),D!==v&&(D===1?r.cullFace(r.BACK):D===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):at(r.CULL_FACE),v=D}function bt(D){D!==I&&(q&&r.lineWidth(D),I=D)}function ce(D,ut,W){D?(rt(r.POLYGON_OFFSET_FILL),(N!==ut||U!==W)&&(r.polygonOffset(ut,W),N=ut,U=W)):at(r.POLYGON_OFFSET_FILL)}function Tt(D){D?rt(r.SCISSOR_TEST):at(r.SCISSOR_TEST)}function b(D){D===void 0&&(D=r.TEXTURE0+G-1),z!==D&&(r.activeTexture(D),z=D)}function S(D,ut,W){W===void 0&&(z===null?W=r.TEXTURE0+G-1:W=z);let J=Z[W];J===void 0&&(J={type:void 0,texture:void 0},Z[W]=J),(J.type!==D||J.texture!==ut)&&(z!==W&&(r.activeTexture(W),z=W),r.bindTexture(D,ut||X[D]),J.type=D,J.texture=ut)}function O(){const D=Z[z];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(D){Et.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Et.copy(D))}function _t(D){mt.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),mt.copy(D))}function qt(D,ut){let W=l.get(ut);W===void 0&&(W=new WeakMap,l.set(ut,W));let J=W.get(D);J===void 0&&(J=r.getUniformBlockIndex(ut,D.name),W.set(D,J))}function Ot(D,ut){const J=l.get(ut).get(D);o.get(ut)!==J&&(r.uniformBlockBinding(ut,J,D.__bindingPointIndex),o.set(ut,J))}function de(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},z=null,Z={},h={},u=new WeakMap,d=[],A=null,m=!1,g=null,p=null,f=null,E=null,_=null,y=null,M=null,C=new Mt(0,0,0),x=0,T=!1,k=null,v=null,I=null,N=null,U=null,Et.set(0,0,r.canvas.width,r.canvas.height),mt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:rt,disable:at,bindFramebuffer:At,drawBuffers:It,useProgram:zt,setBlending:R,setMaterial:Pe,setFlipSided:Ht,setCullFace:Wt,setLineWidth:bt,setPolygonOffset:ce,setScissorTest:Tt,activeTexture:b,bindTexture:S,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:gt,texImage3D:Ft,updateUBOMapping:qt,uniformBlockBinding:Ot,texStorage2D:$t,texStorage3D:et,texSubImage2D:K,texSubImage3D:xt,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:Pt,viewport:_t,reset:de}}function td(r,t,e,n){const i=Dy(n);switch(e){case 1021:return r*t;case 1024:return r*t;case 1025:return r*t*2;case 1028:return r*t/i.components*i.byteLength;case 1029:return r*t/i.components*i.byteLength;case 1030:return r*t*2/i.components*i.byteLength;case 1031:return r*t*2/i.components*i.byteLength;case 1022:return r*t*3/i.components*i.byteLength;case 1023:return r*t*4/i.components*i.byteLength;case 1033:return r*t*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dy(r){switch(r){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Ly(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,h=new WeakMap;let u;const d=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,S){return A?new OffscreenCanvas(b,S):Kr("canvas")}function g(b,S,O){let $=1;const j=Tt(b);if((j.width>O||j.height>O)&&($=O/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const K=Math.floor($*j.width),xt=Math.floor($*j.height);u===void 0&&(u=m(K,xt));const lt=S?m(K,xt):u;return lt.width=K,lt.height=xt,lt.getContext("2d").drawImage(b,0,0,K,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+xt+")."),lt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==1003&&b.minFilter!==1006}function f(b){r.generateMipmap(b)}function E(b,S,O,$,j=!1){if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let K=S;if(S===r.RED&&(O===r.FLOAT&&(K=r.R32F),O===r.HALF_FLOAT&&(K=r.R16F),O===r.UNSIGNED_BYTE&&(K=r.R8)),S===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(K=r.R8UI),O===r.UNSIGNED_SHORT&&(K=r.R16UI),O===r.UNSIGNED_INT&&(K=r.R32UI),O===r.BYTE&&(K=r.R8I),O===r.SHORT&&(K=r.R16I),O===r.INT&&(K=r.R32I)),S===r.RG&&(O===r.FLOAT&&(K=r.RG32F),O===r.HALF_FLOAT&&(K=r.RG16F),O===r.UNSIGNED_BYTE&&(K=r.RG8)),S===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(K=r.RG8UI),O===r.UNSIGNED_SHORT&&(K=r.RG16UI),O===r.UNSIGNED_INT&&(K=r.RG32UI),O===r.BYTE&&(K=r.RG8I),O===r.SHORT&&(K=r.RG16I),O===r.INT&&(K=r.RG32I)),S===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(K=r.RGB8UI),O===r.UNSIGNED_SHORT&&(K=r.RGB16UI),O===r.UNSIGNED_INT&&(K=r.RGB32UI),O===r.BYTE&&(K=r.RGB8I),O===r.SHORT&&(K=r.RGB16I),O===r.INT&&(K=r.RGB32I)),S===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),O===r.UNSIGNED_INT&&(K=r.RGBA32UI),O===r.BYTE&&(K=r.RGBA8I),O===r.SHORT&&(K=r.RGBA16I),O===r.INT&&(K=r.RGBA32I)),S===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),S===r.RGBA){const xt=j?Bo:Kt.getTransfer($);O===r.FLOAT&&(K=r.RGBA32F),O===r.HALF_FLOAT&&(K=r.RGBA16F),O===r.UNSIGNED_BYTE&&(K=xt===fe?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(b,S){let O;return b?S===null||S===1014||S===1020?O=r.DEPTH24_STENCIL8:S===1015?O=r.DEPTH32F_STENCIL8:S===1012&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===1014||S===1020?O=r.DEPTH_COMPONENT24:S===1015?O=r.DEPTH_COMPONENT32F:S===1012&&(O=r.DEPTH_COMPONENT16),O}function y(b,S){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==1003&&b.minFilter!==1006?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function M(b){const S=b.target;S.removeEventListener("dispose",M),x(S),S.isVideoTexture&&h.delete(S)}function C(b){const S=b.target;S.removeEventListener("dispose",C),k(S)}function x(b){const S=n.get(b);if(S.__webglInit===void 0)return;const O=b.source,$=d.get(O);if($){const j=$[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&T(b),Object.keys($).length===0&&d.delete(O)}n.remove(b)}function T(b){const S=n.get(b);r.deleteTexture(S.__webglTexture);const O=b.source,$=d.get(O);delete $[S.__cacheKey],a.memory.textures--}function k(b){const S=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let j=0;j<S.__webglFramebuffer[$].length;j++)r.deleteFramebuffer(S.__webglFramebuffer[$][j]);else r.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)r.deleteFramebuffer(S.__webglFramebuffer[$]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=b.textures;for(let $=0,j=O.length;$<j;$++){const K=n.get(O[$]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(O[$])}n.remove(b)}let v=0;function I(){v=0}function N(){const b=v;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),v+=1,b}function U(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function G(b,S){const O=n.get(b);if(b.isVideoTexture&&bt(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(O,b,S);return}}e.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+S)}function q(b,S){const O=n.get(b);if(b.version>0&&O.__version!==b.version){mt(O,b,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+S)}function L(b,S){const O=n.get(b);if(b.version>0&&O.__version!==b.version){mt(O,b,S);return}e.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+S)}function Y(b,S){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Q(O,b,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+S)}const z={1e3:r.REPEAT,1001:r.CLAMP_TO_EDGE,1002:r.MIRRORED_REPEAT},Z={1003:r.NEAREST,1004:r.NEAREST_MIPMAP_NEAREST,1005:r.NEAREST_MIPMAP_LINEAR,1006:r.LINEAR,1007:r.LINEAR_MIPMAP_NEAREST,1008:r.LINEAR_MIPMAP_LINEAR},tt={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function nt(b,S){if(S.type===1015&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===1006||S.magFilter===1007||S.magFilter===1005||S.magFilter===1008||S.minFilter===1006||S.minFilter===1007||S.minFilter===1005||S.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(b,r.TEXTURE_WRAP_S,z[S.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,z[S.wrapT]),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,z[S.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,Z[S.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,Z[S.minFilter]),S.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,tt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===1003||S.minFilter!==1005&&S.minFilter!==1008||S.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");r.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Et(b,S){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",M));const $=S.source;let j=d.get($);j===void 0&&(j={},d.set($,j));const K=U(S);if(K!==b.__cacheKey){j[K]===void 0&&(j[K]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[K].usedTimes++;const xt=j[b.__cacheKey];xt!==void 0&&(j[b.__cacheKey].usedTimes--,xt.usedTimes===0&&T(S)),b.__cacheKey=K,b.__webglTexture=j[K].texture}return O}function mt(b,S,O){let $=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=r.TEXTURE_3D);const j=Et(b,S),K=S.source;e.bindTexture($,b.__webglTexture,r.TEXTURE0+O);const xt=n.get(K);if(K.version!==xt.__version||j===!0){e.activeTexture(r.TEXTURE0+O);const lt=Kt.getPrimaries(Kt.workingColorSpace),pt=S.colorSpace===Cn?null:Kt.getPrimaries(S.colorSpace),$t=S.colorSpace===Cn||lt===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let et=g(S.image,!1,i.maxTextureSize);et=ce(S,et);const gt=s.convert(S.format,S.colorSpace),Ft=s.convert(S.type);let Pt=E(S.internalFormat,gt,Ft,S.colorSpace,S.isVideoTexture);nt($,S);let _t;const qt=S.mipmaps,Ot=S.isVideoTexture!==!0,de=xt.__version===void 0||j===!0,D=K.dataReady,ut=y(S,et);if(S.isDepthTexture)Pt=_(S.format===1027,S.type),de&&(Ot?e.texStorage2D(r.TEXTURE_2D,1,Pt,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,Pt,et.width,et.height,0,gt,Ft,null));else if(S.isDataTexture)if(qt.length>0){Ot&&de&&e.texStorage2D(r.TEXTURE_2D,ut,Pt,qt[0].width,qt[0].height);for(let W=0,J=qt.length;W<J;W++)_t=qt[W],Ot?D&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,_t.width,_t.height,gt,Ft,_t.data):e.texImage2D(r.TEXTURE_2D,W,Pt,_t.width,_t.height,0,gt,Ft,_t.data);S.generateMipmaps=!1}else Ot?(de&&e.texStorage2D(r.TEXTURE_2D,ut,Pt,et.width,et.height),D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,et.width,et.height,gt,Ft,et.data)):e.texImage2D(r.TEXTURE_2D,0,Pt,et.width,et.height,0,gt,Ft,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ot&&de&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,Pt,qt[0].width,qt[0].height,et.depth);for(let W=0,J=qt.length;W<J;W++)if(_t=qt[W],S.format!==1023)if(gt!==null)if(Ot){if(D)if(S.layerUpdates.size>0){const ct=td(_t.width,_t.height,S.format,S.type);for(const dt of S.layerUpdates){const Yt=_t.data.subarray(dt*ct/_t.data.BYTES_PER_ELEMENT,(dt+1)*ct/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,dt,_t.width,_t.height,1,gt,Yt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,_t.width,_t.height,et.depth,gt,_t.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,Pt,_t.width,_t.height,et.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?D&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,_t.width,_t.height,et.depth,gt,Ft,_t.data):e.texImage3D(r.TEXTURE_2D_ARRAY,W,Pt,_t.width,_t.height,et.depth,0,gt,Ft,_t.data)}else{Ot&&de&&e.texStorage2D(r.TEXTURE_2D,ut,Pt,qt[0].width,qt[0].height);for(let W=0,J=qt.length;W<J;W++)_t=qt[W],S.format!==1023?gt!==null?Ot?D&&e.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(r.TEXTURE_2D,W,Pt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?D&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,_t.width,_t.height,gt,Ft,_t.data):e.texImage2D(r.TEXTURE_2D,W,Pt,_t.width,_t.height,0,gt,Ft,_t.data)}else if(S.isDataArrayTexture)if(Ot){if(de&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,Pt,et.width,et.height,et.depth),D)if(S.layerUpdates.size>0){const W=td(et.width,et.height,S.format,S.type);for(const J of S.layerUpdates){const ct=et.data.subarray(J*W/et.data.BYTES_PER_ELEMENT,(J+1)*W/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,gt,Ft,ct)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,gt,Ft,et.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,et.width,et.height,et.depth,0,gt,Ft,et.data);else if(S.isData3DTexture)Ot?(de&&e.texStorage3D(r.TEXTURE_3D,ut,Pt,et.width,et.height,et.depth),D&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,gt,Ft,et.data)):e.texImage3D(r.TEXTURE_3D,0,Pt,et.width,et.height,et.depth,0,gt,Ft,et.data);else if(S.isFramebufferTexture){if(de)if(Ot)e.texStorage2D(r.TEXTURE_2D,ut,Pt,et.width,et.height);else{let W=et.width,J=et.height;for(let ct=0;ct<ut;ct++)e.texImage2D(r.TEXTURE_2D,ct,Pt,W,J,0,gt,Ft,null),W>>=1,J>>=1}}else if(qt.length>0){if(Ot&&de){const W=Tt(qt[0]);e.texStorage2D(r.TEXTURE_2D,ut,Pt,W.width,W.height)}for(let W=0,J=qt.length;W<J;W++)_t=qt[W],Ot?D&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,gt,Ft,_t):e.texImage2D(r.TEXTURE_2D,W,Pt,gt,Ft,_t);S.generateMipmaps=!1}else if(Ot){if(de){const W=Tt(et);e.texStorage2D(r.TEXTURE_2D,ut,Pt,W.width,W.height)}D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,gt,Ft,et)}else e.texImage2D(r.TEXTURE_2D,0,Pt,gt,Ft,et);p(S)&&f($),xt.__version=K.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Q(b,S,O){if(S.image.length!==6)return;const $=Et(b,S),j=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture,r.TEXTURE0+O);const K=n.get(j);if(j.version!==K.__version||$===!0){e.activeTexture(r.TEXTURE0+O);const xt=Kt.getPrimaries(Kt.workingColorSpace),lt=S.colorSpace===Cn?null:Kt.getPrimaries(S.colorSpace),pt=S.colorSpace===Cn||xt===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const $t=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,gt=[];for(let J=0;J<6;J++)!$t&&!et?gt[J]=g(S.image[J],!0,i.maxCubemapSize):gt[J]=et?S.image[J].image:S.image[J],gt[J]=ce(S,gt[J]);const Ft=gt[0],Pt=s.convert(S.format,S.colorSpace),_t=s.convert(S.type),qt=E(S.internalFormat,Pt,_t,S.colorSpace),Ot=S.isVideoTexture!==!0,de=K.__version===void 0||$===!0,D=j.dataReady;let ut=y(S,Ft);nt(r.TEXTURE_CUBE_MAP,S);let W;if($t){Ot&&de&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ut,qt,Ft.width,Ft.height);for(let J=0;J<6;J++){W=gt[J].mipmaps;for(let ct=0;ct<W.length;ct++){const dt=W[ct];S.format!==1023?Pt!==null?Ot?D&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,0,0,dt.width,dt.height,Pt,dt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,qt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,0,0,dt.width,dt.height,Pt,_t,dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,qt,dt.width,dt.height,0,Pt,_t,dt.data)}}}else{if(W=S.mipmaps,Ot&&de){W.length>0&&ut++;const J=Tt(gt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ut,qt,J.width,J.height)}for(let J=0;J<6;J++)if(et){Ot?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,gt[J].width,gt[J].height,Pt,_t,gt[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qt,gt[J].width,gt[J].height,0,Pt,_t,gt[J].data);for(let ct=0;ct<W.length;ct++){const Yt=W[ct].image[J].image;Ot?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,0,0,Yt.width,Yt.height,Pt,_t,Yt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,qt,Yt.width,Yt.height,0,Pt,_t,Yt.data)}}else{Ot?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pt,_t,gt[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qt,Pt,_t,gt[J]);for(let ct=0;ct<W.length;ct++){const dt=W[ct];Ot?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,0,0,Pt,_t,dt.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,qt,Pt,_t,dt.image[J])}}}p(S)&&f(r.TEXTURE_CUBE_MAP),K.__version=j.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function X(b,S,O,$,j,K){const xt=s.convert(O.format,O.colorSpace),lt=s.convert(O.type),pt=E(O.internalFormat,xt,lt,O.colorSpace);if(!n.get(S).__hasExternalTextures){const et=Math.max(1,S.width>>K),gt=Math.max(1,S.height>>K);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,K,pt,et,gt,S.depth,0,xt,lt,null):e.texImage2D(j,K,pt,et,gt,0,xt,lt,null)}e.bindFramebuffer(r.FRAMEBUFFER,b),Wt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,j,n.get(O).__webglTexture,0,Ht(S)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,j,n.get(O).__webglTexture,K),e.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(b,S,O){if(r.bindRenderbuffer(r.RENDERBUFFER,b),S.depthBuffer){const $=S.depthTexture,j=$&&$.isDepthTexture?$.type:null,K=_(S.stencilBuffer,j),xt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=Ht(S);Wt(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,lt,K,S.width,S.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,lt,K,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,K,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,b)}else{const $=S.textures;for(let j=0;j<$.length;j++){const K=$[j],xt=s.convert(K.format,K.colorSpace),lt=s.convert(K.type),pt=E(K.internalFormat,xt,lt,K.colorSpace),$t=Ht(S);O&&Wt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$t,pt,S.width,S.height):Wt(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$t,pt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,pt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function at(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const $=n.get(S.depthTexture).__webglTexture,j=Ht(S);if(S.depthTexture.format===1026)Wt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(S.depthTexture.format===1027)Wt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function At(b){const S=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=$}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");at(S.__webglFramebuffer,b)}else if(O){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=r.createRenderbuffer(),rt(S.__webglDepthbuffer[$],b,!1);else{const j=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,K)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),rt(S.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,j)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function It(b,S,O){const $=n.get(b);S!==void 0&&X($.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&At(b)}function zt(b){const S=b.texture,O=n.get(b),$=n.get(S);b.addEventListener("dispose",C);const j=b.textures,K=b.isWebGLCubeRenderTarget===!0,xt=j.length>1;if(xt||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=S.version,a.memory.textures++),K){O.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[lt]=[];for(let pt=0;pt<S.mipmaps.length;pt++)O.__webglFramebuffer[lt][pt]=r.createFramebuffer()}else O.__webglFramebuffer[lt]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)O.__webglFramebuffer[lt]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(xt)for(let lt=0,pt=j.length;lt<pt;lt++){const $t=n.get(j[lt]);$t.__webglTexture===void 0&&($t.__webglTexture=r.createTexture(),a.memory.textures++)}if(b.samples>0&&Wt(b)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let lt=0;lt<j.length;lt++){const pt=j[lt];O.__webglColorRenderbuffer[lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[lt]);const $t=s.convert(pt.format,pt.colorSpace),et=s.convert(pt.type),gt=E(pt.internalFormat,$t,et,pt.colorSpace,b.isXRRenderTarget===!0),Ft=Ht(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft,gt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,O.__webglColorRenderbuffer[lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),rt(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),nt(r.TEXTURE_CUBE_MAP,S);for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)X(O.__webglFramebuffer[lt][pt],b,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else X(O.__webglFramebuffer[lt],b,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(S)&&f(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let lt=0,pt=j.length;lt<pt;lt++){const $t=j[lt],et=n.get($t);e.bindTexture(r.TEXTURE_2D,et.__webglTexture),nt(r.TEXTURE_2D,$t),X(O.__webglFramebuffer,b,$t,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,0),p($t)&&f(r.TEXTURE_2D)}e.unbindTexture()}else{let lt=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(lt=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),nt(lt,S),S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)X(O.__webglFramebuffer[pt],b,S,r.COLOR_ATTACHMENT0,lt,pt);else X(O.__webglFramebuffer,b,S,r.COLOR_ATTACHMENT0,lt,0);p(S)&&f(lt),e.unbindTexture()}b.depthBuffer&&At(b)}function Zt(b){const S=b.textures;for(let O=0,$=S.length;O<$;O++){const j=S[O];if(p(j)){const K=b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,xt=n.get(j).__webglTexture;e.bindTexture(K,xt),f(K),e.unbindTexture()}}}const Qt=[],R=[];function Pe(b){if(b.samples>0){if(Wt(b)===!1){const S=b.textures,O=b.width,$=b.height;let j=r.COLOR_BUFFER_BIT;const K=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=n.get(b),lt=S.length>1;if(lt)for(let pt=0;pt<S.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let pt=0;pt<S.length;pt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xt.__webglColorRenderbuffer[pt]);const $t=n.get(S[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$t,0)}r.blitFramebuffer(0,0,O,$,0,0,O,$,j,r.NEAREST),l===!0&&(Qt.length=0,R.length=0,Qt.push(r.COLOR_ATTACHMENT0+pt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Qt.push(K),R.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,R)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),lt)for(let pt=0;pt<S.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,xt.__webglColorRenderbuffer[pt]);const $t=n.get(S[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,$t,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const S=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Ht(b){return Math.min(i.maxSamples,b.samples)}function Wt(b){const S=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function bt(b){const S=a.render.frame;h.get(b)!==S&&(h.set(b,S),b.update())}function ce(b,S){const O=b.colorSpace,$=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==he&&O!==Cn&&(Kt.getTransfer(O)===fe?($!==1023||j!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Tt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=L,this.setTextureCube=Y,this.rebindTextures=It,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=X,this.useMultisampledRTT=Wt}function Fy(r,t){function e(n,i=Cn){let s;const a=Kt.getTransfer(i);if(n===1009)return r.UNSIGNED_BYTE;if(n===1017)return r.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return r.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return r.BYTE;if(n===1011)return r.SHORT;if(n===1012)return r.UNSIGNED_SHORT;if(n===1013)return r.INT;if(n===1014)return r.UNSIGNED_INT;if(n===1015)return r.FLOAT;if(n===1016)return r.HALF_FLOAT;if(n===1021)return r.ALPHA;if(n===1022)return r.RGB;if(n===1023)return r.RGBA;if(n===1024)return r.LUMINANCE;if(n===1025)return r.LUMINANCE_ALPHA;if(n===1026)return r.DEPTH_COMPONENT;if(n===1027)return r.DEPTH_STENCIL;if(n===1028)return r.RED;if(n===1029)return r.RED_INTEGER;if(n===1030)return r.RG;if(n===1031)return r.RG_INTEGER;if(n===1033)return r.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===36492)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Py extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xi extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uy={type:"move"};class Bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),f=this._getHandJoint(c,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),A=.02,m=.005;c.inputState.pinching&&d>A+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=A-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uy)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ny=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qy=`
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

}`;class Oy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new oe,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new tn({vertexShader:Ny,fragmentShader:Qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new Qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ky extends Tn{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,A=null,m=null;const g=new Oy,p=e.getContextAttributes();let f=null,E=null;const _=[],y=[],M=new Ut;let C=null;const x=new Be;x.layers.enable(1),x.viewport=new jt;const T=new Be;T.layers.enable(2),T.viewport=new jt;const k=[x,T],v=new Py;v.layers.enable(1),v.layers.enable(2);let I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let X=_[Q];return X===void 0&&(X=new Bl,_[Q]=X),X.getTargetRaySpace()},this.getControllerGrip=function(Q){let X=_[Q];return X===void 0&&(X=new Bl,_[Q]=X),X.getGripSpace()},this.getHand=function(Q){let X=_[Q];return X===void 0&&(X=new Bl,_[Q]=X),X.getHandSpace()};function U(Q){const X=y.indexOf(Q.inputSource);if(X===-1)return;const rt=_[X];rt!==void 0&&(rt.update(Q.inputSource,Q.frame,c||a),rt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",q);for(let Q=0;Q<_.length;Q++){const X=y[Q];X!==null&&(y[Q]=null,_[Q].disconnect(X))}I=null,N=null,g.reset(),t.setRenderTarget(f),A=null,d=null,u=null,i=null,E=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:A},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",G),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(M),i.renderState.layers===void 0){const X={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};A=new XRWebGLLayer(i,e,X),i.updateRenderState({baseLayer:A}),t.setPixelRatio(1),t.setSize(A.framebufferWidth,A.framebufferHeight,!1),E=new fn(A.framebufferWidth,A.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let X=null,rt=null,at=null;p.depth&&(at=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=p.stencil?1027:1026,rt=p.stencil?1020:1014);const At={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(At),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new fn(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new Rf(d.textureWidth,d.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),mt.setContext(i),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(Q){for(let X=0;X<Q.removed.length;X++){const rt=Q.removed[X],at=y.indexOf(rt);at>=0&&(y[at]=null,_[at].disconnect(rt))}for(let X=0;X<Q.added.length;X++){const rt=Q.added[X];let at=y.indexOf(rt);if(at===-1){for(let It=0;It<_.length;It++)if(It>=y.length){y.push(rt),at=It;break}else if(y[It]===null){y[It]=rt,at=It;break}if(at===-1)break}const At=_[at];At&&At.connect(rt)}}const L=new B,Y=new B;function z(Q,X,rt){L.setFromMatrixPosition(X.matrixWorld),Y.setFromMatrixPosition(rt.matrixWorld);const at=L.distanceTo(Y),At=X.projectionMatrix.elements,It=rt.projectionMatrix.elements,zt=At[14]/(At[10]-1),Zt=At[14]/(At[10]+1),Qt=(At[9]+1)/At[5],R=(At[9]-1)/At[5],Pe=(At[8]-1)/At[0],Ht=(It[8]+1)/It[0],Wt=zt*Pe,bt=zt*Ht,ce=at/(-Pe+Ht),Tt=ce*-Pe;if(X.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Tt),Q.translateZ(ce),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),At[10]===-1)Q.projectionMatrix.copy(X.projectionMatrix),Q.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const b=zt+ce,S=Zt+ce,O=Wt-Tt,$=bt+(at-Tt),j=Qt*Zt/S*b,K=R*Zt/S*b;Q.projectionMatrix.makePerspective(O,$,j,K,b,S),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Z(Q,X){X===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(X.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let X=Q.near,rt=Q.far;g.texture!==null&&(g.depthNear>0&&(X=g.depthNear),g.depthFar>0&&(rt=g.depthFar)),v.near=T.near=x.near=X,v.far=T.far=x.far=rt,(I!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),I=v.near,N=v.far);const at=Q.parent,At=v.cameras;Z(v,at);for(let It=0;It<At.length;It++)Z(At[It],at);At.length===2?z(v,x,T):v.projectionMatrix.copy(x.projectionMatrix),tt(Q,v,at)};function tt(Q,X,rt){rt===null?Q.matrix.copy(X.matrixWorld):(Q.matrix.copy(rt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(X.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(X.projectionMatrix),Q.projectionMatrixInverse.copy(X.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Xs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&A===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let nt=null;function Et(Q,X){if(h=X.getViewerPose(c||a),m=X,h!==null){const rt=h.views;A!==null&&(t.setRenderTargetFramebuffer(E,A.framebuffer),t.setRenderTarget(E));let at=!1;rt.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let It=0;It<rt.length;It++){const zt=rt[It];let Zt=null;if(A!==null)Zt=A.getViewport(zt);else{const R=u.getViewSubImage(d,zt);Zt=R.viewport,It===0&&(t.setRenderTargetTextures(E,R.colorTexture,d.ignoreDepthValues?void 0:R.depthStencilTexture),t.setRenderTarget(E))}let Qt=k[It];Qt===void 0&&(Qt=new Be,Qt.layers.enable(It),Qt.viewport=new jt,k[It]=Qt),Qt.matrix.fromArray(zt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(zt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),It===0&&(v.matrix.copy(Qt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(Qt)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){const It=u.getDepthInformation(rt[0]);It&&It.isValid&&It.texture&&g.init(t,It,i.renderState)}}for(let rt=0;rt<_.length;rt++){const at=y[rt],At=_[rt];at!==null&&At!==void 0&&At.update(at,X,c||a)}nt&&nt(Q,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),m=null}const mt=new Bf;mt.setAnimationLoop(Et),this.setAnimationLoop=function(Q){nt=Q},this.dispose=function(){}}}const Fi=new mn,Gy=new Rt;function Hy(r,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,wf(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,E,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&A(p,f,y)):f.isMeshMatcapMaterial?(s(p,f),m(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),g(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,E,_):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===1&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===1&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=t.get(f),_=E.envMap,y=E.envMapRotation;_&&(p.envMap.value=_,Fi.copy(y),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),p.envMapRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(Fi)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,E,_){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=_*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function A(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){const E=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Vy(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,_){const y=_.program;n.uniformBlockBinding(E,y)}function c(E,_){let y=i[E.id];y===void 0&&(m(E),y=h(E),i[E.id]=y,E.addEventListener("dispose",p));const M=_.program;n.updateUBOMapping(E,M);const C=t.render.frame;s[E.id]!==C&&(d(E),s[E.id]=C)}function h(E){const _=u();E.__bindingPointIndex=_;const y=r.createBuffer(),M=E.__size,C=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,M,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,y),y}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const _=i[E.id],y=E.uniforms,M=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let C=0,x=y.length;C<x;C++){const T=Array.isArray(y[C])?y[C]:[y[C]];for(let k=0,v=T.length;k<v;k++){const I=T[k];if(A(I,C,k,M)===!0){const N=I.__offset,U=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let q=0;q<U.length;q++){const L=U[q],Y=g(L);typeof L=="number"||typeof L=="boolean"?(I.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,N+G,I.__data)):L.isMatrix3?(I.__data[0]=L.elements[0],I.__data[1]=L.elements[1],I.__data[2]=L.elements[2],I.__data[3]=0,I.__data[4]=L.elements[3],I.__data[5]=L.elements[4],I.__data[6]=L.elements[5],I.__data[7]=0,I.__data[8]=L.elements[6],I.__data[9]=L.elements[7],I.__data[10]=L.elements[8],I.__data[11]=0):(L.toArray(I.__data,G),G+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function A(E,_,y,M){const C=E.value,x=_+"_"+y;if(M[x]===void 0)return typeof C=="number"||typeof C=="boolean"?M[x]=C:M[x]=C.clone(),!0;{const T=M[x];if(typeof C=="number"||typeof C=="boolean"){if(T!==C)return M[x]=C,!0}else if(T.equals(C)===!1)return T.copy(C),!0}return!1}function m(E){const _=E.uniforms;let y=0;const M=16;for(let x=0,T=_.length;x<T;x++){const k=Array.isArray(_[x])?_[x]:[_[x]];for(let v=0,I=k.length;v<I;v++){const N=k[v],U=Array.isArray(N.value)?N.value:[N.value];for(let G=0,q=U.length;G<q;G++){const L=U[G],Y=g(L),z=y%M,Z=z%Y.boundary,tt=z+Z;y+=Z,tt!==0&&M-tt<Y.storage&&(y+=M-tt),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=Y.storage}}}const C=y%M;return C>0&&(y+=M-C),E.__size=y,E.__cache={},this}function g(E){const _={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),_}function p(E){const _=E.target;_.removeEventListener("dispose",p);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function f(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:l,update:c,dispose:f}}class Hh{constructor(t={}){const{canvas:e=Dg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const A=new Uint32Array(4),m=new Int32Array(4);let g=null,p=null;const f=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this.toneMapping=0,this.toneMappingExposure=1;const _=this;let y=!1,M=0,C=0,x=null,T=-1,k=null;const v=new jt,I=new jt;let N=null;const U=new Mt(0);let G=0,q=e.width,L=e.height,Y=1,z=null,Z=null;const tt=new jt(0,0,q,L),nt=new jt(0,0,q,L);let Et=!1;const mt=new kh;let Q=!1,X=!1;const rt=new Rt,at=new Rt,At=new B,It=new jt,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function Qt(){return x===null?Y:1}let R=n;function Pe(w,F){return e.getContext(w,F)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qo}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",dt,!1),R===null){const F="webgl2";if(R=Pe(F,w),R===null)throw Pe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ht,Wt,bt,ce,Tt,b,S,O,$,j,K,xt,lt,pt,$t,et,gt,Ft,Pt,_t,qt,Ot,de,D;function ut(){Ht=new $v(R),Ht.init(),Ot=new Fy(R,Ht),Wt=new zv(R,Ht,t,Ot),bt=new Ry(R),Wt.reverseDepthBuffer&&bt.buffers.depth.setReversed(!0),ce=new Zv(R),Tt=new gy,b=new Ly(R,Ht,bt,Tt,Wt,Ot,ce),S=new qv(_),O=new Kv(_),$=new a0(R),de=new Hv(R,$),j=new Jv(R,$,ce,de),K=new eE(R,j,$,ce),Pt=new tE(R,Wt,b),et=new Wv(Tt),xt=new my(_,S,O,Ht,Wt,de,et),lt=new Hy(_,Tt),pt=new vy,$t=new My(Ht),Ft=new Gv(_,S,O,bt,K,d,l),gt=new Ty(_,K,Wt),D=new Vy(R,ce,Wt,bt),_t=new Vv(R,Ht,ce),qt=new jv(R,Ht,ce),ce.programs=xt.programs,_.capabilities=Wt,_.extensions=Ht,_.properties=Tt,_.renderLists=pt,_.shadowMap=gt,_.state=bt,_.info=ce}ut();const W=new ky(_,R);this.xr=W,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const w=Ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(q,L,!1))},this.getSize=function(w){return w.set(q,L)},this.setSize=function(w,F,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,L=F,e.width=Math.floor(w*Y),e.height=Math.floor(F*Y),H===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(q*Y,L*Y).floor()},this.setDrawingBufferSize=function(w,F,H){q=w,L=F,Y=H,e.width=Math.floor(w*H),e.height=Math.floor(F*H),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(v)},this.getViewport=function(w){return w.copy(tt)},this.setViewport=function(w,F,H,V){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,F,H,V),bt.viewport(v.copy(tt).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(nt)},this.setScissor=function(w,F,H,V){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,F,H,V),bt.scissor(I.copy(nt).multiplyScalar(Y).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(w){bt.setScissorTest(Et=w)},this.setOpaqueSort=function(w){z=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(w=!0,F=!0,H=!0){let V=0;if(w){let P=!1;if(x!==null){const it=x.texture.format;P=it===1033||it===1031||it===1029}if(P){const it=x.texture.type,ht=it===1009||it===1014||it===1012||it===1020||it===1017||it===1018,vt=Ft.getClearColor(),yt=Ft.getClearAlpha(),Dt=vt.r,Lt=vt.g,St=vt.b;ht?(A[0]=Dt,A[1]=Lt,A[2]=St,A[3]=yt,R.clearBufferuiv(R.COLOR,0,A)):(m[0]=Dt,m[1]=Lt,m[2]=St,m[3]=yt,R.clearBufferiv(R.COLOR,0,m))}else V|=R.COLOR_BUFFER_BIT}F&&(V|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),pt.dispose(),$t.dispose(),Tt.dispose(),S.dispose(),O.dispose(),K.dispose(),de.dispose(),D.dispose(),xt.dispose(),W.dispose(),W.removeEventListener("sessionstart",iu),W.removeEventListener("sessionend",su),bi.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=ce.autoReset,F=gt.enabled,H=gt.autoUpdate,V=gt.needsUpdate,P=gt.type;ut(),ce.autoReset=w,gt.enabled=F,gt.autoUpdate=H,gt.needsUpdate=V,gt.type=P}function dt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Yt(w){const F=w.target;F.removeEventListener("dispose",Yt),Se(F)}function Se(w){Je(w),Tt.remove(w)}function Je(w){const F=Tt.get(w).programs;F!==void 0&&(F.forEach(function(H){xt.releaseProgram(H)}),w.isShaderMaterial&&xt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,H,V,P,it){F===null&&(F=zt);const ht=P.isMesh&&P.matrixWorld.determinant()<0,vt=ug(w,F,H,V,P);bt.setMaterial(V,ht);let yt=H.index,Dt=1;if(V.wireframe===!0){if(yt=j.getWireframeAttribute(H),yt===void 0)return;Dt=2}const Lt=H.drawRange,St=H.attributes.position;let ie=Lt.start*Dt,Ae=(Lt.start+Lt.count)*Dt;it!==null&&(ie=Math.max(ie,it.start*Dt),Ae=Math.min(Ae,(it.start+it.count)*Dt)),yt!==null?(ie=Math.max(ie,0),Ae=Math.min(Ae,yt.count)):St!=null&&(ie=Math.max(ie,0),Ae=Math.min(Ae,St.count));const ye=Ae-ie;if(ye<0||ye===1/0)return;de.setup(P,V,vt,H,yt);let nn,te=_t;if(yt!==null&&(nn=$.get(yt),te=qt,te.setIndex(nn)),P.isMesh)V.wireframe===!0?(bt.setLineWidth(V.wireframeLinewidth*Qt()),te.setMode(R.LINES)):te.setMode(R.TRIANGLES);else if(P.isLine){let Ct=V.linewidth;Ct===void 0&&(Ct=1),bt.setLineWidth(Ct*Qt()),P.isLineSegments?te.setMode(R.LINES):P.isLineLoop?te.setMode(R.LINE_LOOP):te.setMode(R.LINE_STRIP)}else P.isPoints?te.setMode(R.POINTS):P.isSprite&&te.setMode(R.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)te.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))te.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const Ct=P._multiDrawStarts,Le=P._multiDrawCounts,ee=P._multiDrawCount,_n=yt?$.get(yt).bytesPerElement:1,is=Tt.get(V).currentProgram.getUniforms();for(let sn=0;sn<ee;sn++)is.setValue(R,"_gl_DrawID",sn),te.render(Ct[sn]/_n,Le[sn])}else if(P.isInstancedMesh)te.renderInstances(ie,ye,P.count);else if(H.isInstancedBufferGeometry){const Ct=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Le=Math.min(H.instanceCount,Ct);te.renderInstances(ie,ye,Le)}else te.render(ie,ye)};function Jt(w,F,H){w.transparent===!0&&w.side===2&&w.forceSinglePass===!1?(w.side=1,w.needsUpdate=!0,ca(w,F,H),w.side=0,w.needsUpdate=!0,ca(w,F,H),w.side=2):ca(w,F,H)}this.compile=function(w,F,H=null){H===null&&(H=w),p=$t.get(H),p.init(F),E.push(p),H.traverseVisible(function(P){P.isLight&&P.layers.test(F.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),w!==H&&w.traverseVisible(function(P){P.isLight&&P.layers.test(F.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),p.setupLights();const V=new Set;return w.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const it=P.material;if(it)if(Array.isArray(it))for(let ht=0;ht<it.length;ht++){const vt=it[ht];Jt(vt,H,P),V.add(vt)}else Jt(it,H,P),V.add(it)}),E.pop(),p=null,V},this.compileAsync=function(w,F,H=null){const V=this.compile(w,F,H);return new Promise(P=>{function it(){if(V.forEach(function(ht){Tt.get(ht).currentProgram.isReady()&&V.delete(ht)}),V.size===0){P(w);return}setTimeout(it,10)}Ht.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let je=null;function Hn(w){je&&je(w)}function iu(){bi.stop()}function su(){bi.start()}const bi=new Bf;bi.setAnimationLoop(Hn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(w){je=w,W.setAnimationLoop(w),w===null?bi.stop():bi.start()},W.addEventListener("sessionstart",iu),W.addEventListener("sessionend",su),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(F),F=W.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,F,x),p=$t.get(w,E.length),p.init(F),E.push(p),at.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),mt.setFromProjectionMatrix(at),X=this.localClippingEnabled,Q=et.init(this.clippingPlanes,X),g=pt.get(w,f.length),g.init(),f.push(g),W.enabled===!0&&W.isPresenting===!0){const it=_.xr.getDepthSensingMesh();it!==null&&Zo(it,F,-1/0,_.sortObjects)}Zo(w,F,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(z,Z),Zt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Zt&&Ft.addToRenderList(g,w),this.info.render.frame++,Q===!0&&et.beginShadows();const H=p.state.shadowsArray;gt.render(H,w,F),Q===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,P=g.transmissive;if(p.setupLights(),F.isArrayCamera){const it=F.cameras;if(P.length>0)for(let ht=0,vt=it.length;ht<vt;ht++){const yt=it[ht];au(V,P,w,yt)}Zt&&Ft.render(w);for(let ht=0,vt=it.length;ht<vt;ht++){const yt=it[ht];ru(g,w,yt,yt.viewport)}}else P.length>0&&au(V,P,w,F),Zt&&Ft.render(w),ru(g,w,F);x!==null&&(b.updateMultisampleRenderTarget(x),b.updateRenderTargetMipmap(x)),w.isScene===!0&&w.onAfterRender(_,w,F),de.resetDefaultState(),T=-1,k=null,E.pop(),E.length>0?(p=E[E.length-1],Q===!0&&et.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Zo(w,F,H,V){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||mt.intersectsSprite(w)){V&&It.setFromMatrixPosition(w.matrixWorld).applyMatrix4(at);const ht=K.update(w),vt=w.material;vt.visible&&g.push(w,ht,vt,H,It.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||mt.intersectsObject(w))){const ht=K.update(w),vt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),It.copy(w.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),It.copy(ht.boundingSphere.center)),It.applyMatrix4(w.matrixWorld).applyMatrix4(at)),Array.isArray(vt)){const yt=ht.groups;for(let Dt=0,Lt=yt.length;Dt<Lt;Dt++){const St=yt[Dt],ie=vt[St.materialIndex];ie&&ie.visible&&g.push(w,ht,ie,H,It.z,St)}}else vt.visible&&g.push(w,ht,vt,H,It.z,null)}}const it=w.children;for(let ht=0,vt=it.length;ht<vt;ht++)Zo(it[ht],F,H,V)}function ru(w,F,H,V){const P=w.opaque,it=w.transmissive,ht=w.transparent;p.setupLightsView(H),Q===!0&&et.setGlobalState(_.clippingPlanes,H),V&&bt.viewport(v.copy(V)),P.length>0&&la(P,F,H),it.length>0&&la(it,F,H),ht.length>0&&la(ht,F,H),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function au(w,F,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new fn(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const it=p.state.transmissionRenderTarget[V.id],ht=V.viewport||v;it.setSize(ht.z,ht.w);const vt=_.getRenderTarget();_.setRenderTarget(it),_.getClearColor(U),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),Zt&&Ft.render(H);const yt=_.toneMapping;_.toneMapping=0;const Dt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),Q===!0&&et.setGlobalState(_.clippingPlanes,V),la(w,H,V),b.updateMultisampleRenderTarget(it),b.updateRenderTargetMipmap(it),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let St=0,ie=F.length;St<ie;St++){const Ae=F[St],ye=Ae.object,nn=Ae.geometry,te=Ae.material,Ct=Ae.group;if(te.side===2&&ye.layers.test(V.layers)){const Le=te.side;te.side=1,te.needsUpdate=!0,ou(ye,H,V,nn,te,Ct),te.side=Le,te.needsUpdate=!0,Lt=!0}}Lt===!0&&(b.updateMultisampleRenderTarget(it),b.updateRenderTargetMipmap(it))}_.setRenderTarget(vt),_.setClearColor(U,G),Dt!==void 0&&(V.viewport=Dt),_.toneMapping=yt}function la(w,F,H){const V=F.isScene===!0?F.overrideMaterial:null;for(let P=0,it=w.length;P<it;P++){const ht=w[P],vt=ht.object,yt=ht.geometry,Dt=V===null?ht.material:V,Lt=ht.group;vt.layers.test(H.layers)&&ou(vt,F,H,yt,Dt,Lt)}}function ou(w,F,H,V,P,it){w.onBeforeRender(_,F,H,V,P,it),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),P.onBeforeRender(_,F,H,V,w,it),P.transparent===!0&&P.side===2&&P.forceSinglePass===!1?(P.side=1,P.needsUpdate=!0,_.renderBufferDirect(H,F,V,P,w,it),P.side=0,P.needsUpdate=!0,_.renderBufferDirect(H,F,V,P,w,it),P.side=2):_.renderBufferDirect(H,F,V,P,w,it),w.onAfterRender(_,F,H,V,P,it)}function ca(w,F,H){F.isScene!==!0&&(F=zt);const V=Tt.get(w),P=p.state.lights,it=p.state.shadowsArray,ht=P.state.version,vt=xt.getParameters(w,P.state,it,F,H),yt=xt.getProgramCacheKey(vt);let Dt=V.programs;V.environment=w.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(w.isMeshStandardMaterial?O:S).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Dt===void 0&&(w.addEventListener("dispose",Yt),Dt=new Map,V.programs=Dt);let Lt=Dt.get(yt);if(Lt!==void 0){if(V.currentProgram===Lt&&V.lightsStateVersion===ht)return cu(w,vt),Lt}else vt.uniforms=xt.getUniforms(w),w.onBeforeCompile(vt,_),Lt=xt.acquireProgram(vt,yt),Dt.set(yt,Lt),V.uniforms=vt.uniforms;const St=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(St.clippingPlanes=et.uniform),cu(w,vt),V.needsLights=Ag(w),V.lightsStateVersion=ht,V.needsLights&&(St.ambientLightColor.value=P.state.ambient,St.lightProbe.value=P.state.probe,St.directionalLights.value=P.state.directional,St.directionalLightShadows.value=P.state.directionalShadow,St.spotLights.value=P.state.spot,St.spotLightShadows.value=P.state.spotShadow,St.rectAreaLights.value=P.state.rectArea,St.ltc_1.value=P.state.rectAreaLTC1,St.ltc_2.value=P.state.rectAreaLTC2,St.pointLights.value=P.state.point,St.pointLightShadows.value=P.state.pointShadow,St.hemisphereLights.value=P.state.hemi,St.directionalShadowMap.value=P.state.directionalShadowMap,St.directionalShadowMatrix.value=P.state.directionalShadowMatrix,St.spotShadowMap.value=P.state.spotShadowMap,St.spotLightMatrix.value=P.state.spotLightMatrix,St.spotLightMap.value=P.state.spotLightMap,St.pointShadowMap.value=P.state.pointShadowMap,St.pointShadowMatrix.value=P.state.pointShadowMatrix),V.currentProgram=Lt,V.uniformsList=null,Lt}function lu(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=mo.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function cu(w,F){const H=Tt.get(w);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function ug(w,F,H,V,P){F.isScene!==!0&&(F=zt),b.resetTextureUnits();const it=F.fog,ht=V.isMeshStandardMaterial?F.environment:null,vt=x===null?_.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:he,yt=(V.isMeshStandardMaterial?O:S).get(V.envMap||ht),Dt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Lt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),St=!!H.morphAttributes.position,ie=!!H.morphAttributes.normal,Ae=!!H.morphAttributes.color;let ye=0;V.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(ye=_.toneMapping);const nn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,te=nn!==void 0?nn.length:0,Ct=Tt.get(V),Le=p.state.lights;if(Q===!0&&(X===!0||w!==k)){const hn=w===k&&V.id===T;et.setState(V,w,hn)}let ee=!1;V.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Le.state.version||Ct.outputColorSpace!==vt||P.isBatchedMesh&&Ct.batching===!1||!P.isBatchedMesh&&Ct.batching===!0||P.isBatchedMesh&&Ct.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Ct.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Ct.instancing===!1||!P.isInstancedMesh&&Ct.instancing===!0||P.isSkinnedMesh&&Ct.skinning===!1||!P.isSkinnedMesh&&Ct.skinning===!0||P.isInstancedMesh&&Ct.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Ct.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Ct.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Ct.instancingMorph===!1&&P.morphTexture!==null||Ct.envMap!==yt||V.fog===!0&&Ct.fog!==it||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==et.numPlanes||Ct.numIntersection!==et.numIntersection)||Ct.vertexAlphas!==Dt||Ct.vertexTangents!==Lt||Ct.morphTargets!==St||Ct.morphNormals!==ie||Ct.morphColors!==Ae||Ct.toneMapping!==ye||Ct.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Ct.__version=V.version);let _n=Ct.currentProgram;ee===!0&&(_n=ca(V,F,P));let is=!1,sn=!1,tl=!1;const xe=_n.getUniforms(),ci=Ct.uniforms;if(bt.useProgram(_n.program)&&(is=!0,sn=!0,tl=!0),V.id!==T&&(T=V.id,sn=!0),is||k!==w){Wt.reverseDepthBuffer?(rt.copy(w.projectionMatrix),Fg(rt),Pg(rt),xe.setValue(R,"projectionMatrix",rt)):xe.setValue(R,"projectionMatrix",w.projectionMatrix),xe.setValue(R,"viewMatrix",w.matrixWorldInverse);const hn=xe.map.cameraPosition;hn!==void 0&&hn.setValue(R,At.setFromMatrixPosition(w.matrixWorld)),Wt.logarithmicDepthBuffer&&xe.setValue(R,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xe.setValue(R,"isOrthographic",w.isOrthographicCamera===!0),k!==w&&(k=w,sn=!0,tl=!0)}if(P.isSkinnedMesh){xe.setOptional(R,P,"bindMatrix"),xe.setOptional(R,P,"bindMatrixInverse");const hn=P.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),xe.setValue(R,"boneTexture",hn.boneTexture,b))}P.isBatchedMesh&&(xe.setOptional(R,P,"batchingTexture"),xe.setValue(R,"batchingTexture",P._matricesTexture,b),xe.setOptional(R,P,"batchingIdTexture"),xe.setValue(R,"batchingIdTexture",P._indirectTexture,b),xe.setOptional(R,P,"batchingColorTexture"),P._colorsTexture!==null&&xe.setValue(R,"batchingColorTexture",P._colorsTexture,b));const el=H.morphAttributes;if((el.position!==void 0||el.normal!==void 0||el.color!==void 0)&&Pt.update(P,H,_n),(sn||Ct.receiveShadow!==P.receiveShadow)&&(Ct.receiveShadow=P.receiveShadow,xe.setValue(R,"receiveShadow",P.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ci.envMap.value=yt,ci.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(ci.envMapIntensity.value=F.environmentIntensity),sn&&(xe.setValue(R,"toneMappingExposure",_.toneMappingExposure),Ct.needsLights&&dg(ci,tl),it&&V.fog===!0&&lt.refreshFogUniforms(ci,it),lt.refreshMaterialUniforms(ci,V,Y,L,p.state.transmissionRenderTarget[w.id]),mo.upload(R,lu(Ct),ci,b)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(mo.upload(R,lu(Ct),ci,b),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xe.setValue(R,"center",P.center),xe.setValue(R,"modelViewMatrix",P.modelViewMatrix),xe.setValue(R,"normalMatrix",P.normalMatrix),xe.setValue(R,"modelMatrix",P.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const hn=V.uniformsGroups;for(let nl=0,pg=hn.length;nl<pg;nl++){const hu=hn[nl];D.update(hu,_n),D.bind(hu,_n)}}return _n}function dg(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Ag(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(w,F,H){Tt.get(w.texture).__webglTexture=F,Tt.get(w.depthTexture).__webglTexture=H;const V=Tt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const H=Tt.get(w);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,H=0){x=w,M=F,C=H;let V=!0,P=null,it=!1,ht=!1;if(w){const yt=Tt.get(w);if(yt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(R.FRAMEBUFFER,null),V=!1;else if(yt.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(yt.__hasExternalTextures)b.rebindTextures(w,Tt.get(w.texture).__webglTexture,Tt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const St=w.depthTexture;if(yt.__boundDepthTexture!==St){if(St!==null&&Tt.has(St)&&(w.width!==St.image.width||w.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const Dt=w.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ht=!0);const Lt=Tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Lt[F])?P=Lt[F][H]:P=Lt[F],it=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?P=Tt.get(w).__webglMultisampledFramebuffer:Array.isArray(Lt)?P=Lt[H]:P=Lt,v.copy(w.viewport),I.copy(w.scissor),N=w.scissorTest}else v.copy(tt).multiplyScalar(Y).floor(),I.copy(nt).multiplyScalar(Y).floor(),N=Et;if(bt.bindFramebuffer(R.FRAMEBUFFER,P)&&V&&bt.drawBuffers(w,P),bt.viewport(v),bt.scissor(I),bt.setScissorTest(N),it){const yt=Tt.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+F,yt.__webglTexture,H)}else if(ht){const yt=Tt.get(w.texture),Dt=F||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,yt.__webglTexture,H||0,Dt)}T=-1},this.readRenderTargetPixels=function(w,F,H,V,P,it,ht){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(vt=vt[ht]),vt){bt.bindFramebuffer(R.FRAMEBUFFER,vt);try{const yt=w.texture,Dt=yt.format,Lt=yt.type;if(!Wt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-V&&H>=0&&H<=w.height-P&&R.readPixels(F,H,V,P,Ot.convert(Dt),Ot.convert(Lt),it)}finally{const yt=x!==null?Tt.get(x).__webglFramebuffer:null;bt.bindFramebuffer(R.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(w,F,H,V,P,it,ht){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(vt=vt[ht]),vt){const yt=w.texture,Dt=yt.format,Lt=yt.type;if(!Wt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-V&&H>=0&&H<=w.height-P){bt.bindFramebuffer(R.FRAMEBUFFER,vt);const St=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,St),R.bufferData(R.PIXEL_PACK_BUFFER,it.byteLength,R.STREAM_READ),R.readPixels(F,H,V,P,Ot.convert(Dt),Ot.convert(Lt),0);const ie=x!==null?Tt.get(x).__webglFramebuffer:null;bt.bindFramebuffer(R.FRAMEBUFFER,ie);const Ae=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Lg(R,Ae,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,St),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,it),R.deleteBuffer(St),R.deleteSync(Ae),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,H=0){w.isTexture!==!0&&(fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-H),P=Math.floor(w.image.width*V),it=Math.floor(w.image.height*V),ht=F!==null?F.x:0,vt=F!==null?F.y:0;b.setTexture2D(w,0),R.copyTexSubImage2D(R.TEXTURE_2D,H,0,0,ht,vt,P,it),bt.unbindTexture()},this.copyTextureToTexture=function(w,F,H=null,V=null,P=0){w.isTexture!==!0&&(fo("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],F=arguments[2],P=arguments[3]||0,H=null);let it,ht,vt,yt,Dt,Lt;H!==null?(it=H.max.x-H.min.x,ht=H.max.y-H.min.y,vt=H.min.x,yt=H.min.y):(it=w.image.width,ht=w.image.height,vt=0,yt=0),V!==null?(Dt=V.x,Lt=V.y):(Dt=0,Lt=0);const St=Ot.convert(F.format),ie=Ot.convert(F.type);b.setTexture2D(F,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);const Ae=R.getParameter(R.UNPACK_ROW_LENGTH),ye=R.getParameter(R.UNPACK_IMAGE_HEIGHT),nn=R.getParameter(R.UNPACK_SKIP_PIXELS),te=R.getParameter(R.UNPACK_SKIP_ROWS),Ct=R.getParameter(R.UNPACK_SKIP_IMAGES),Le=w.isCompressedTexture?w.mipmaps[P]:w.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Le.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Le.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,vt),R.pixelStorei(R.UNPACK_SKIP_ROWS,yt),w.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,P,Dt,Lt,it,ht,St,ie,Le.data):w.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,P,Dt,Lt,Le.width,Le.height,St,Le.data):R.texSubImage2D(R.TEXTURE_2D,P,Dt,Lt,it,ht,St,ie,Le),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ae),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ye),R.pixelStorei(R.UNPACK_SKIP_PIXELS,nn),R.pixelStorei(R.UNPACK_SKIP_ROWS,te),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ct),P===0&&F.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),bt.unbindTexture()},this.copyTextureToTexture3D=function(w,F,H=null,V=null,P=0){w.isTexture!==!0&&(fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],F=arguments[3],P=arguments[4]||0);let it,ht,vt,yt,Dt,Lt,St,ie,Ae;const ye=w.isCompressedTexture?w.mipmaps[P]:w.image;H!==null?(it=H.max.x-H.min.x,ht=H.max.y-H.min.y,vt=H.max.z-H.min.z,yt=H.min.x,Dt=H.min.y,Lt=H.min.z):(it=ye.width,ht=ye.height,vt=ye.depth,yt=0,Dt=0,Lt=0),V!==null?(St=V.x,ie=V.y,Ae=V.z):(St=0,ie=0,Ae=0);const nn=Ot.convert(F.format),te=Ot.convert(F.type);let Ct;if(F.isData3DTexture)b.setTexture3D(F,0),Ct=R.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)b.setTexture2DArray(F,0),Ct=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);const Le=R.getParameter(R.UNPACK_ROW_LENGTH),ee=R.getParameter(R.UNPACK_IMAGE_HEIGHT),_n=R.getParameter(R.UNPACK_SKIP_PIXELS),is=R.getParameter(R.UNPACK_SKIP_ROWS),sn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ye.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ye.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,yt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Dt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Lt),w.isDataTexture||w.isData3DTexture?R.texSubImage3D(Ct,P,St,ie,Ae,it,ht,vt,nn,te,ye.data):F.isCompressedArrayTexture?R.compressedTexSubImage3D(Ct,P,St,ie,Ae,it,ht,vt,nn,ye.data):R.texSubImage3D(Ct,P,St,ie,Ae,it,ht,vt,nn,te,ye),R.pixelStorei(R.UNPACK_ROW_LENGTH,Le),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ee),R.pixelStorei(R.UNPACK_SKIP_PIXELS,_n),R.pixelStorei(R.UNPACK_SKIP_ROWS,is),R.pixelStorei(R.UNPACK_SKIP_IMAGES,sn),P===0&&F.generateMipmaps&&R.generateMipmap(Ct),bt.unbindTexture()},this.initRenderTarget=function(w){Tt.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),bt.unbindTexture()},this.resetState=function(){M=0,C=0,x=null,bt.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Xo?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===na?"display-p3":"srgb"}}class Ii extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zy{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ve=new B;class Vh{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Vh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ed=new B,nd=new jt,id=new jt,Wy=new B,sd=new Rt,Ra=new B,Rl=new gn,rd=new Rt,Dl=new ia;class qy extends le{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uu,this.bindMatrix=new Rt,this.bindMatrixInverse=new Rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ke),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ra),this.boundingBox.expandByPoint(Ra)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ra),this.boundingSphere.expandByPoint(Ra)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rl.copy(this.boundingSphere),Rl.applyMatrix4(i),t.ray.intersectsSphere(Rl)!==!1&&(rd.copy(i).invert(),Dl.copy(t.ray).applyMatrix4(rd),!(this.boundingBox!==null&&Dl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Dl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new jt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===uu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;nd.fromBufferAttribute(i.attributes.skinIndex,t),id.fromBufferAttribute(i.attributes.skinWeight,t),ed.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const a=id.getComponent(s);if(a!==0){const o=nd.getComponent(s);sd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Wy.copy(ed).applyMatrix4(sd),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Nf extends ue{constructor(){super(),this.isBone=!0,this.type="Bone"}}class sa extends oe{constructor(t=null,e=1,n=1,i,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ad=new Rt,Xy=new Rt;class zh{constructor(t=[],e=[]){this.uuid=wn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Rt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Rt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:Xy;ad.multiplyMatrices(o,e[s]),ad.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new zh(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new sa(e,t,t,1023,1015);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Nf),this.bones.push(a),this.boneInverses.push(new Rt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class ph extends ve{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const gs=new Rt,od=new Rt,Da=[],ld=new Ke,Yy=new Rt,ur=new le,dr=new gn;class Ky extends le{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ph(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Yy)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ke),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),ld.copy(t.boundingBox).applyMatrix4(gs),this.boundingBox.union(ld)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),dr.copy(t.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(n),t.ray.intersectsSphere(dr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,gs),od.multiplyMatrices(n,gs),ur.matrixWorld=od,ur.raycast(t,Da);for(let a=0,o=Da.length;a<o;a++){const l=Da[a];l.instanceId=s,l.object=this,e.push(l)}Da.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ph(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new sa(new Float32Array(i*this.count),i,this.count,1028,1015));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Qf extends bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lo=new B,Fo=new B,cd=new Rt,Ar=new ia,La=new gn,Ll=new B,hd=new B;class $r extends ue{constructor(t=new en,e=new Qf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Lo.fromBufferAttribute(e,i-1),Fo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Lo.distanceTo(Fo);t.setAttribute("lineDistance",new cn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(i),La.radius+=s,t.ray.intersectsSphere(La)===!1)return;cd.copy(i).invert(),Ar.copy(t.ray).applyMatrix4(cd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const A=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=A,p=m-1;g<p;g+=c){const f=h.getX(g),E=h.getX(g+1),_=Fa(this,t,Ar,l,f,E);_&&e.push(_)}if(this.isLineLoop){const g=h.getX(m-1),p=h.getX(A),f=Fa(this,t,Ar,l,g,p);f&&e.push(f)}}else{const A=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=A,p=m-1;g<p;g+=c){const f=Fa(this,t,Ar,l,g,g+1);f&&e.push(f)}if(this.isLineLoop){const g=Fa(this,t,Ar,l,m-1,A);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fa(r,t,e,n,i,s){const a=r.geometry.attributes.position;if(Lo.fromBufferAttribute(a,i),Fo.fromBufferAttribute(a,s),e.distanceSqToSegment(Lo,Fo,Ll,hd)>n)return;Ll.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Ll);if(!(l<t.near||l>t.far))return{distance:l,point:hd.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const ud=new B,dd=new B;class $y extends $r{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)ud.fromBufferAttribute(e,i),dd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ud.distanceTo(dd);t.setAttribute("lineDistance",new cn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jy extends $r{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Of extends bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ad=new Rt,fh=new ia,Pa=new gn,Ua=new B;class jy extends ue{constructor(t=new en,e=new Of){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(i),Pa.radius+=s,t.ray.intersectsSphere(Pa)===!1)return;Ad.copy(i).invert(),fh.copy(t.ray).applyMatrix4(Ad);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),A=Math.min(c.count,a.start+a.count);for(let m=d,g=A;m<g;m++){const p=c.getX(m);Ua.fromBufferAttribute(u,p),pd(Ua,p,l,i,t,e,this)}}else{const d=Math.max(0,a.start),A=Math.min(u.count,a.start+a.count);for(let m=d,g=A;m<g;m++)Ua.fromBufferAttribute(u,m),pd(Ua,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function pd(r,t,e,n,i,s,a){const o=fh.distanceSqToPoint(r);if(o<e){const l=new B;fh.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Zy extends oe{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:1006,this.magFilter=s!==void 0?s:1006,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class ts extends oe{constructor(t,e,n,i,s,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class tx extends ts{constructor(t,e,n,i,s,a){super(t,e,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=1001,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ex extends ts{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,301),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class kf extends oe{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wh extends en{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new B,d=new B,A=[],m=[],g=[],p=[];for(let f=0;f<=n;f++){const E=[],_=f/n;let y=0;f===0&&a===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let M=0;M<=e;M++){const C=M/e;u.x=-t*Math.cos(i+C*s)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(i+C*s)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),p.push(C+y,1-_),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){const _=h[f][E+1],y=h[f][E],M=h[f+1][E],C=h[f+1][E+1];(f!==0||a>0)&&A.push(_,y,C),(f!==n-1||l<Math.PI)&&A.push(y,M,C)}this.setIndex(A),this.setAttribute("position",new cn(m,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jr extends bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class On extends Jr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function Na(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function nx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ix(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function fd(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=e[s]*t;for(let l=0;l!==t;++l)i[a++]=r[o+l]}return i}function Gf(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),e.push(a)),s=r[i++];while(s!==void 0)}class ra{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=s)){const o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sx extends ra{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,o=2*e-n;break;case 2402:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:a=t,l=2*n-e;break;case 2402:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,A=this._weightNext,m=(n-e)/(i-e),g=m*m,p=g*m,f=-d*p+2*d*g-d*m,E=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*m+1,_=(-1-A)*p+(1.5+A)*g+.5*m,y=A*p-A*g;for(let M=0;M!==o;++M)s[M]=f*a[h+M]+E*a[c+M]+_*a[l+M]+y*a[u+M];return s}}class Hf extends ra{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class rx extends ra{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class kn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Na(e,this.TimeBufferType),this.values=Na(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Na(t.times,Array),values:Na(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new rx(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Hf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sx(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&nx(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{const u=o*n,d=u-n,A=u+n;for(let m=0;m!==n;++m){const g=e[u+m];if(g!==e[d+m]||g!==e[A+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const u=o*n,d=a*n;for(let A=0;A!==n;++A)e[d+A]=e[u+A]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=2301;class ir extends kn{constructor(t,e,n){super(t,e,n)}}ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=2300;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class Vf extends kn{}Vf.prototype.ValueTypeName="color";class Ks extends kn{}Ks.prototype.ValueTypeName="number";class ax extends ra{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let h=c+o;c!==h;c+=4)$e.slerpFlat(s,0,a,c-o,a,c,l);return s}}class $s extends kn{InterpolantFactoryMethodLinear(t){return new ax(this.times,this.values,this.getValueSize(),t)}}$s.prototype.ValueTypeName="quaternion";$s.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends kn{constructor(t,e,n){super(t,e,n)}}sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=2300;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends kn{}Js.prototype.ValueTypeName="vector";class mh{constructor(t="",e=-1,n=[],i=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=wn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(lx(n[a]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=n.length;s!==a;++s)e.push(kn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=ix(l);l=fd(l,1,h),c=fd(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ks(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,A,m,g){if(A.length!==0){const p=[],f=[];Gf(A,p,f,m),p.length!==0&&g.push(new u(d,p,f))}},i=[],s=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const A={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let g=0;g<d[m].morphTargets.length;g++)A[d[m].morphTargets[g]]=-1;for(const g in A){const p=[],f=[];for(let E=0;E!==d[m].morphTargets.length;++E){const _=d[m];p.push(_.time),f.push(_.morphTarget===g?1:0)}i.push(new Ks(".morphTargetInfluence["+g+"]",p,f))}l=A.length*a}else{const A=".bones["+e[u].name+"]";n(Js,A+".position",d,"pos",i),n($s,A+".quaternion",d,"rot",i),n(Js,A+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ox(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ks;case"vector":case"vector2":case"vector3":case"vector4":return Js;case"color":return Vf;case"quaternion":return $s;case"bool":case"boolean":return ir;case"string":return sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function lx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=ox(r.type);if(r.times===void 0){const e=[],n=[];Gf(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const Si={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class zf{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const A=c[u],m=c[u+1];if(A.global&&(A.lastIndex=0),A.test(h))return m}return null}}}const cx=new zf;class Gn{constructor(t){this.manager=t!==void 0?t:cx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Gn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yn={};class hx extends Error{constructor(t,e){super(t),this.response=e}}class oi extends Gn{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Si.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Yn[t]!==void 0){Yn[t].push({onLoad:e,onProgress:n,onError:i});return}Yn[t]=[],Yn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Yn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),A=d?parseInt(d):0,m=A!==0;let g=0;const p=new ReadableStream({start(f){E();function E(){u.read().then(({done:_,value:y})=>{if(_)f.close();else{g+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:A});for(let C=0,x=h.length;C<x;C++){const T=h[C];T.onProgress&&T.onProgress(M)}f.enqueue(y),E()}},_=>{f.error(_)})}}});return new Response(p)}else throw new hx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,A=new TextDecoder(d);return c.arrayBuffer().then(m=>A.decode(m))}}}).then(c=>{Si.add(t,c);const h=Yn[t];delete Yn[t];for(let u=0,d=h.length;u<d;u++){const A=h[u];A.onLoad&&A.onLoad(c)}}).catch(c=>{const h=Yn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Yn[t];for(let u=0,d=h.length;u<d;u++){const A=h[u];A.onError&&A.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class ux extends Gn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Si.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Kr("img");function l(){h(),Si.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class dx extends Gn{constructor(t){super(t)}load(t,e,n,i){const s=this,a=new sa,o=new oi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(t,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:1001,a.wrapT=c.wrapT!==void 0?c.wrapT:1001,a.magFilter=c.magFilter!==void 0?c.magFilter:1006,a.minFilter=c.minFilter!==void 0?c.minFilter:1006,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=1008),c.mipmapCount===1&&(a.minFilter=1006),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,e&&e(a,c)},n,i),a}}class Wf extends Gn{constructor(t){super(t)}load(t,e,n,i){const s=new oe,a=new ux(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Ko extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Fl=new Rt,md=new B,gd=new B;class qh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kh,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;md.setFromMatrixPosition(t.matrixWorld),e.position.copy(md),gd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gd),e.updateMatrixWorld(),Fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ax extends qh{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Xs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class px extends Ko{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Ax}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const _d=new Rt,pr=new B,Pl=new B;class fx extends qh{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),pr.setFromMatrixPosition(t.matrixWorld),n.position.copy(pr),Pl.copy(n.position),Pl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Pl),n.updateMatrixWorld(),i.makeTranslation(-pr.x,-pr.y,-pr.z),_d.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_d)}}class qf extends Ko{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class mx extends qh{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xf extends Ko{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new mx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class gx{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new B)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,s=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*s),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*s)),e.addScaledVector(a[6],.315392*(3*s*s-1)),e.addScaledVector(a[7],1.092548*(n*s)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,s=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*s),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*s),e.addScaledVector(a[6],.743125*s*s-.247708),e.addScaledVector(a[7],2*.429043*n*s),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,s=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*s,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*s,e[6]=.315392*(3*s*s-1),e[7]=1.092548*n*s,e[8]=.546274*(n*n-i*i)}}class _x extends Ko{constructor(t=new gx,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class Xr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class vx extends Gn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Si.get(t);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Si.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Si.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});Si.add(t,l),s.manager.itemStart(t)}}class Ex{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,a;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-s,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,a=i;s!==a;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){$e.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const a=this._workIndex*s;$e.multiplyQuaternionsFlat(t,a,t,e,t,n),$e.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=e+o;t[l]=t[l]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,s){for(let a=0;a!==s;++a){const o=e+a;t[o]=t[o]+t[n+a]*i}}}const Xh="\\[\\]\\.:\\/",yx=new RegExp("["+Xh+"]","g"),Yh="[^"+Xh+"]",xx="[^"+Xh.replace("\\.","")+"]",Sx=/((?:WC+[\/:])*)/.source.replace("WC",Yh),Cx=/(WCOD+)?/.source.replace("WCOD",xx),Mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yh),Ix=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yh),wx=new RegExp("^"+Sx+Cx+Mx+Ix+"$"),bx=["material","materials","bones","map"];class Tx{constructor(t,e,n){const i=n||Xt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Xt{constructor(t,e,n){this.path=e,this.parsedPath=n||Xt.parseTrackName(e),this.node=Xt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Xt.Composite(t,e,n):new Xt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yx,"")}static parseTrackName(t){const e=wx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);bx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=Xt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Xt.Composite=Tx;Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Bx{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,a=s.length,o=new Array(a),l={endingStart:2400,endingEnd:2400};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,a=s/i,o=i/s;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case 2501:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case 2500:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const a=n===2202;if(t===0)return s===-1?i:a&&(s&1)===1?e-i:i;if(n===2200){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const o=Math.floor(i/e);i-=e*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=2401,i.endingEnd=2401):(t?i.endingStart=this.zeroSlopeAtStart?2401:2400:i.endingStart=2402,e?i.endingEnd=this.zeroSlopeAtEnd?2401:2400:i.endingEnd=2402)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=e,o[1]=s+t,l[1]=n,this}}const Rx=new Float32Array(1);class Dx extends Tn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],A=d.name;let m=h[A];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,A));continue}const g=e&&e._propertyBindings[u].binding.parsedPath;m=new Ex(Xt.create(n,A,g),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,A),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Hf(new Float32Array(2),new Float32Array(2),1,Rx),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let a=typeof t=="string"?mh.findByName(i,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=2500),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Bx(this,a,e,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?mh.findByName(n,t):t,a=s?s.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Kh{constructor(t){this.value=t}clone(){return new Kh(this.value.clone===void 0?this.value:this.value.clone())}}const vd=new Rt;class Lx{constructor(t,e,n=0,i=1/0){this.ray=new ia(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Qh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vd),this}intersectObject(t,e=!0,n=[]){return gh(t,this,n,e),n.sort(Ed),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)gh(t[i],this,n,e);return n.sort(Ed),n}}function Ed(r,t){return r.distance-t.distance}function gh(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)gh(s[a],t,e,!0)}}class go{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qo);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fx=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function wt(r){return(t,e)=>e!==void 0?((n,i,s)=>{i.constructor.createProperty(s,n)})(r,t,e):Fx(r,t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var Ul;(Ul=window.HTMLSlotElement)===null||Ul===void 0||Ul.prototype.assignedElements;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _o=window,$h=_o.ShadowRoot&&(_o.ShadyCSS===void 0||_o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yf=Symbol(),yd=new WeakMap;class Px{constructor(t,e,n){if(this._$cssResult$=!0,n!==Yf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if($h&&t===void 0){const n=e!==void 0&&e.length===1;n&&(t=yd.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&yd.set(e,t))}return t}toString(){return this.cssText}}const xd=$h?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(n=>new Px(typeof n=="string"?n:n+"",void 0,Yf))(e)})(r):r;var Nl;const Po=window,Sd=Po.trustedTypes,Ux=Sd?Sd.emptyScript:"",Cd=Po.reactiveElementPolyfillSupport,_h={toAttribute(r,t){switch(t){case Boolean:r=r?Ux:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Kf=(r,t)=>t!==r&&(t==t||r==r),Ql={attribute:!0,type:String,converter:_h,reflect:!1,hasChanged:Kf},vh="finalized";class fr extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,n)=>{const i=this._$Ep(n,e);i!==void 0&&(this._$Ev.set(i,n),t.push(i))}),t}static createProperty(t,e=Ql){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ql}static finalize(){if(this.hasOwnProperty(vh))return!1;this[vh]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,n=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of n)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)e.unshift(xd(i))}else t!==void 0&&e.push(xd(t));return e}static _$Ep(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,n;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return((n,i)=>{$h?n.adoptedStyleSheets=i.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):i.forEach(s=>{const a=document.createElement("style"),o=_o.litNonce;o!==void 0&&a.setAttribute("nonce",o),a.textContent=s.cssText,n.appendChild(a)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var n;return(n=e.hostConnected)===null||n===void 0?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var n;return(n=e.hostDisconnected)===null||n===void 0?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EO(t,e,n=Ql){var i;const s=this.constructor._$Ep(t,n);if(s!==void 0&&n.reflect===!0){const a=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:_h).toAttribute(e,n.type);this._$El=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(t,e){var n;const i=this.constructor,s=i._$Ev.get(t);if(s!==void 0&&this._$El!==s){const a=i.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:_h;this._$El=s,this[s]=o.fromAttribute(e,a.type),this._$El=null}}requestUpdate(t,e,n){let i=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Kf)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(n)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,n)=>this._$EO(n,this[n],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ol;fr[vh]=!0,fr.elementProperties=new Map,fr.elementStyles=[],fr.shadowRootOptions={mode:"open"},Cd==null||Cd({ReactiveElement:fr}),((Nl=Po.reactiveElementVersions)!==null&&Nl!==void 0?Nl:Po.reactiveElementVersions=[]).push("1.6.3");const Uo=window,js=Uo.trustedTypes,Md=js?js.createPolicy("lit-html",{createHTML:r=>r}):void 0,Eh="$lit$",yi=`lit$${(Math.random()+"").slice(9)}$`,$f="?"+yi,Nx=`<${$f}>`,es=document,jr=()=>es.createComment(""),Zr=r=>r===null||typeof r!="object"&&typeof r!="function",Id=Array.isArray,kl=`[ 	
\f\r]`,mr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wd=/-->/g,bd=/>/g,Pi=RegExp(`>|${kl}(?:([^\\s"'>=/]+)(${kl}*=${kl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Td=/'/g,Bd=/"/g,Jf=/^(?:script|style|textarea|title)$/i,Qa=(r=>(t,...e)=>({_$litType$:r,strings:t,values:e}))(1),Zs=Symbol.for("lit-noChange"),Re=Symbol.for("lit-nothing"),Rd=new WeakMap,Zi=es.createTreeWalker(es,129,null,!1);function jf(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Md!==void 0?Md.createHTML(t):t}const Qx=(r,t)=>{const e=r.length-1,n=[];let i,s=t===2?"<svg>":"",a=mr;for(let o=0;o<e;o++){const l=r[o];let c,h,u=-1,d=0;for(;d<l.length&&(a.lastIndex=d,h=a.exec(l),h!==null);)d=a.lastIndex,a===mr?h[1]==="!--"?a=wd:h[1]!==void 0?a=bd:h[2]!==void 0?(Jf.test(h[2])&&(i=RegExp("</"+h[2],"g")),a=Pi):h[3]!==void 0&&(a=Pi):a===Pi?h[0]===">"?(a=i??mr,u=-1):h[1]===void 0?u=-2:(u=a.lastIndex-h[2].length,c=h[1],a=h[3]===void 0?Pi:h[3]==='"'?Bd:Td):a===Bd||a===Td?a=Pi:a===wd||a===bd?a=mr:(a=Pi,i=void 0);const A=a===Pi&&r[o+1].startsWith("/>")?" ":"";s+=a===mr?l+Nx:u>=0?(n.push(c),l.slice(0,u)+Eh+l.slice(u)+yi+A):l+yi+(u===-2?(n.push(void 0),o):A)}return[jf(r,s+(r[e]||"<?>")+(t===2?"</svg>":"")),n]};class ta{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let s=0,a=0;const o=t.length-1,l=this.parts,[c,h]=Qx(t,e);if(this.el=ta.createElement(c,n),Zi.currentNode=this.el.content,e===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(i=Zi.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes()){const u=[];for(const d of i.getAttributeNames())if(d.endsWith(Eh)||d.startsWith(yi)){const A=h[a++];if(u.push(d),A!==void 0){const m=i.getAttribute(A.toLowerCase()+Eh).split(yi),g=/([.?@])?(.*)/.exec(A);l.push({type:1,index:s,name:g[2],strings:m,ctor:g[1]==="."?kx:g[1]==="?"?Hx:g[1]==="@"?Vx:$o})}else l.push({type:6,index:s})}for(const d of u)i.removeAttribute(d)}if(Jf.test(i.tagName)){const u=i.textContent.split(yi),d=u.length-1;if(d>0){i.textContent=js?js.emptyScript:"";for(let A=0;A<d;A++)i.append(u[A],jr()),Zi.nextNode(),l.push({type:2,index:++s});i.append(u[d],jr())}}}else if(i.nodeType===8)if(i.data===$f)l.push({type:2,index:s});else{let u=-1;for(;(u=i.data.indexOf(yi,u+1))!==-1;)l.push({type:7,index:s}),u+=yi.length-1}s++}}static createElement(t,e){const n=es.createElement("template");return n.innerHTML=t,n}}function tr(r,t,e=r,n){var i,s,a,o;if(t===Zs)return t;let l=n!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[n]:e._$Cl;const c=Zr(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(r),l._$AT(r,e,n)),n!==void 0?((a=(o=e)._$Co)!==null&&a!==void 0?a:o._$Co=[])[n]=l:e._$Cl=l),l!==void 0&&(t=tr(r,l._$AS(r,t.values),l,n)),t}class Ox{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:n},parts:i}=this._$AD,s=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:es).importNode(n,!0);Zi.currentNode=s;let a=Zi.nextNode(),o=0,l=0,c=i[0];for(;c!==void 0;){if(o===c.index){let h;c.type===2?h=new aa(a,a.nextSibling,this,t):c.type===1?h=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(h=new zx(a,this,t)),this._$AV.push(h),c=i[++l]}o!==(c==null?void 0:c.index)&&(a=Zi.nextNode(),o++)}return Zi.currentNode=es,s}v(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class aa{constructor(t,e,n,i){var s;this.type=2,this._$AH=Re,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=tr(this,t,e),Zr(t)?t===Re||t==null||t===""?(this._$AH!==Re&&this._$AR(),this._$AH=Re):t!==this._$AH&&t!==Zs&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):(n=>Id(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function")(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Re&&Zr(this._$AH)?this._$AA.nextSibling.data=t:this.$(es.createTextNode(t)),this._$AH=t}g(t){var e;const{values:n,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ta.createElement(jf(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(n);else{const a=new Ox(s,this),o=a.u(this.options);a.v(n),this.$(o),this._$AH=a}}_$AC(t){let e=Rd.get(t.strings);return e===void 0&&Rd.set(t.strings,e=new ta(t)),e}T(t){Id(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const s of t)i===e.length?e.push(n=new aa(this.k(jr()),this.k(jr()),this,this.options)):n=e[i],n._$AI(s),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class $o{constructor(t,e,n,i,s){this.type=1,this._$AH=Re,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Re}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,i){const s=this.strings;let a=!1;if(s===void 0)t=tr(this,t,e,0),a=!Zr(t)||t!==this._$AH&&t!==Zs,a&&(this._$AH=t);else{const o=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=tr(this,o[n+l],e,l),c===Zs&&(c=this._$AH[l]),a||(a=!Zr(c)||c!==this._$AH[l]),c===Re?t=Re:t!==Re&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}a&&!i&&this.j(t)}j(t){t===Re?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class kx extends $o{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Re?void 0:t}}const Gx=js?js.emptyScript:"";class Hx extends $o{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Re?this.element.setAttribute(this.name,Gx):this.element.removeAttribute(this.name)}}class Vx extends $o{constructor(t,e,n,i,s){super(t,e,n,i,s),this.type=5}_$AI(t,e=this){var n;if((t=(n=tr(this,t,e,0))!==null&&n!==void 0?n:Re)===Zs)return;const i=this._$AH,s=t===Re&&i!==Re||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==Re&&(i===Re||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;typeof this._$AH=="function"?this._$AH.call((n=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class zx{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){tr(this,t)}}const Dd=Uo.litHtmlPolyfillSupport;Dd==null||Dd(ta,aa),((Ol=Uo.litHtmlVersions)!==null&&Ol!==void 0?Ol:Uo.litHtmlVersions=[]).push("2.8.0");const Zf=(r,t,e)=>{var n,i;const s=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:t;let a=s._$litPart$;if(a===void 0){const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=a=new aa(t.insertBefore(jr(),o),o,void 0,e??{})}return a._$AI(r),a;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */},vo=window,Jh=vo.ShadowRoot&&(vo.ShadyCSS===void 0||vo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tm=Symbol(),Ld=new WeakMap;class Wx{constructor(t,e,n){if(this._$cssResult$=!0,n!==tm)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Jh&&t===void 0){const n=e!==void 0&&e.length===1;n&&(t=Ld.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ld.set(e,t))}return t}toString(){return this.cssText}}const Fd=Jh?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(n=>new Wx(typeof n=="string"?n:n+"",void 0,tm))(e)})(r):r;var Gl;const No=window,Pd=No.trustedTypes,qx=Pd?Pd.emptyScript:"",Ud=No.reactiveElementPolyfillSupport,yh={toAttribute(r,t){switch(t){case Boolean:r=r?qx:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},em=(r,t)=>t!==r&&(t==t||r==r),Hl={attribute:!0,type:String,converter:yh,reflect:!1,hasChanged:em},xh="finalized";class $i extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,n)=>{const i=this._$Ep(n,e);i!==void 0&&(this._$Ev.set(i,n),t.push(i))}),t}static createProperty(t,e=Hl){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Hl}static finalize(){if(this.hasOwnProperty(xh))return!1;this[xh]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,n=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of n)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)e.unshift(Fd(i))}else t!==void 0&&e.push(Fd(t));return e}static _$Ep(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,n;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return((n,i)=>{Jh?n.adoptedStyleSheets=i.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):i.forEach(s=>{const a=document.createElement("style"),o=vo.litNonce;o!==void 0&&a.setAttribute("nonce",o),a.textContent=s.cssText,n.appendChild(a)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var n;return(n=e.hostConnected)===null||n===void 0?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var n;return(n=e.hostDisconnected)===null||n===void 0?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EO(t,e,n=Hl){var i;const s=this.constructor._$Ep(t,n);if(s!==void 0&&n.reflect===!0){const a=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:yh).toAttribute(e,n.type);this._$El=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(t,e){var n;const i=this.constructor,s=i._$Ev.get(t);if(s!==void 0&&this._$El!==s){const a=i.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:yh;this._$El=s,this[s]=o.fromAttribute(e,a.type),this._$El=null}}requestUpdate(t,e,n){let i=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||em)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(n)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,n)=>this._$EO(n,this[n],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vl,zl;$i[xh]=!0,$i.elementProperties=new Map,$i.elementStyles=[],$i.shadowRootOptions={mode:"open"},Ud==null||Ud({ReactiveElement:$i}),((Gl=No.reactiveElementVersions)!==null&&Gl!==void 0?Gl:No.reactiveElementVersions=[]).push("1.6.3");class Eo extends $i{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Zf(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Zs}}Eo.finalized=!0,Eo._$litElement$=!0,(Vl=globalThis.litElementHydrateSupport)===null||Vl===void 0||Vl.call(globalThis,{LitElement:Eo});const Nd=globalThis.litElementPolyfillSupport;Nd==null||Nd({LitElement:Eo}),((zl=globalThis.litElementVersions)!==null&&zl!==void 0?zl:globalThis.litElementVersions=[]).push("3.3.3");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=navigator.xr!=null&&self.XRSession!=null&&navigator.xr.isSessionSupported!=null,im=nm&&self.XRSession.prototype.requestHitTestSource!=null,Wl=self.ResizeObserver!=null,ql=self.IntersectionObserver!=null,sm=im;(()=>{const r=navigator.userAgent||navigator.vendor||self.opera;/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))})();const Xx=/android/i.test(navigator.userAgent),Yx=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!self.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Kx=/firefox/i.test(navigator.userAgent),$x=/OculusBrowser/.test(navigator.userAgent),Jx=Xx&&!Kx&&!$x,jx=!!(window.webkit&&window.webkit.messageHandlers),Qd=(()=>{if(Yx){if(jx)return!!/CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(navigator.userAgent);{const r=document.createElement("a");return!!(r.relList&&r.relList.supports&&r.relList.supports("ar"))}}return!1})(),rm=r=>r&&r!=="null"?Zx(r):null,Od=()=>{if(sm)return;const r=[];throw nm||r.push("WebXR Device API"),im||r.push("WebXR Hit Test API"),new Error(`The following APIs are required for AR, but are missing in this browser: ${r.join(", ")}`)},Zx=r=>new URL(r,window.location.toString()).toString(),kd=(r,t)=>{let e=null;return(...n)=>{e!=null&&self.clearTimeout(e),e=self.setTimeout(()=>{e=null,r(...n)},t)}},Pn=(r,t,e)=>Math.max(t,Math.min(e,r)),Gd=(()=>{const r=new RegExp("[?&]model-viewer-debug-mode(&|$)");return()=>self.ModelViewerElement&&self.ModelViewerElement.debugMode||self.location&&self.location.search&&self.location.search.match(r)})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ui=function(r,t,e,n){for(var i,s=arguments.length,a=s<3?t:n,o=r.length-1;o>=0;o--)(i=r[o])&&(a=(s<3?i(a):s>3?i(t,e,a):i(t,e))||a);return s>3&&a&&Object.defineProperty(t,e,a),a};const Or=Symbol("currentEnvironmentMap"),yo=Symbol("currentBackground"),Qo=Symbol("updateEnvironment"),Oa=Symbol("cancelEnvironmentUpdate");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=Qa`
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

.container {
  position: relative;
  overflow: hidden;
}

.userInput {
  width: 100%;
  height: 100%;
  display: none;
  position: relative;
  outline-offset: -1px;
  outline-width: 1px;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  left: 0;
  top: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  pointer-events: none;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  display: none;
  background-color: inherit;
}

.slot.poster.show {
  display: inherit;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff0;
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.centered {
  align-items: center;
  justify-content: center;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  overflow: hidden;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.animated-container {
  will-change: transform, opacity;
  opacity: 0;
  transition: opacity 0.3s;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.pan-target {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s;
}

#default-pan-target {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8);
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: env(safe-area-inset-top, 16px);
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="3D model">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>

  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Loading 3D model"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          role="button"
          href="javascript:void(0);"
          aria-label="View in your space">
        ${Qa`
<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>
<g id="Art_layer">
	<path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>
	<path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>
	<path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>
	<path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>
	<g>
		<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
			l5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62
			l4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>
	</g>
</g>
</svg>`}
      </a>
    </slot>
  </div>

  <div class="slot pan-target">
    <slot name="pan-target">
      <div id="default-pan-target">
      </div>
    </slot>
  </div>

  <div class="slot interaction-prompt cover centered">
    <div id="prompt" class="animated-container">
      <slot name="interaction-prompt" aria-hidden="true">
        ${Qa`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`}
      </slot>
    </div>
  </div>

  <div id="finger0" class="animated-container cover">
    <slot name="finger0" aria-hidden="true">
    </slot>
  </div>
  <div id="finger1" class="animated-container cover">
    <slot name="finger1" aria-hidden="true">
    </slot>
  </div>

  <div class="slot default">
    <slot></slot>

    <div class="slot progress-bar">
      <slot name="progress-bar">
        <div id="default-progress-bar" aria-hidden="true">
          <div class="bar" part="default-progress-bar"></div>
        </div>
      </slot>
    </div>

    <div class="slot exit-webxr-ar-button">
      <slot name="exit-webxr-ar-button">
        <a id="default-exit-webxr-ar-button" part="default-exit-webxr-ar-button"
            tabindex="3"
            aria-label="Exit AR"
            aria-hidden="true">
          ${Qa`
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`}
        </a>
      </slot>
    </div>
  </div>
</div>
<div class="screen-reader-only" role="region" aria-label="Live announcements">
  <span id="status" role="status"></span>
</div>`,Xl=new WeakMap;function eS(){let r,t;function e(n,i,s,a,o,l){const c=l.num_components(),h=s.num_points()*c,u=h*o.BYTES_PER_ELEMENT,d=function(g,p){switch(p){case Float32Array:return g.DT_FLOAT32;case Int8Array:return g.DT_INT8;case Int16Array:return g.DT_INT16;case Int32Array:return g.DT_INT32;case Uint8Array:return g.DT_UINT8;case Uint16Array:return g.DT_UINT16;case Uint32Array:return g.DT_UINT32}}(n,o),A=n._malloc(u);i.GetAttributeDataArrayForAllPoints(s,l,d,u,A);const m=new o(n.HEAPF32.buffer,A,h).slice();return n._free(A),{name:a,array:m,itemSize:c}}onmessage=function(n){const i=n.data;switch(i.type){case"init":r=i.decoderConfig,t=new Promise(function(o){r.onModuleLoaded=function(l){o({draco:l})},DracoDecoderModule(r)});break;case"decode":const s=i.buffer,a=i.taskConfig;t.then(o=>{const l=o.draco,c=new l.Decoder;try{const h=function(d,A,m,g){const p=g.attributeIDs,f=g.attributeTypes;let E,_;const y=A.GetEncodedGeometryType(m);if(y===d.TRIANGULAR_MESH)E=new d.Mesh,_=A.DecodeArrayToMesh(m,m.byteLength,E);else{if(y!==d.POINT_CLOUD)throw new Error("THREE.DRACOLoader: Unexpected geometry type.");E=new d.PointCloud,_=A.DecodeArrayToPointCloud(m,m.byteLength,E)}if(!_.ok()||E.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+_.error_msg());const M={index:null,attributes:[]};for(const C in p){const x=self[f[C]];let T,k;if(g.useUniqueIDs)k=p[C],T=A.GetAttributeByUniqueId(E,k);else{if(k=A.GetAttributeId(E,d[p[C]]),k===-1)continue;T=A.GetAttribute(E,k)}const v=e(d,A,E,C,x,T);C==="color"&&(v.vertexColorSpace=g.vertexColorSpace),M.attributes.push(v)}return y===d.TRIANGULAR_MESH&&(M.index=function(C,x,T){const k=T.num_faces(),v=3*k,I=4*v,N=C._malloc(I);x.GetTrianglesUInt32Array(T,I,N);const U=new Uint32Array(C.HEAPF32.buffer,N,v).slice();return C._free(N),{array:U,itemSize:1}}(d,A,E)),d.destroy(E),M}(l,c,new Int8Array(s),a),u=h.attributes.map(d=>d.array.buffer);h.index&&u.push(h.index.array.buffer),self.postMessage({type:"decode",id:i.id,geometry:h},u)}catch(h){console.error(h),self.postMessage({type:"error",id:i.id,error:h.message})}finally{l.destroy(c)}})}}}function Hd(r,t){if(t===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===2||t===1){let e=r.getIndex();if(e===null){const a=[],o=r.getAttribute("position");if(o===void 0)return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r;for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),e=r.getIndex()}const n=e.count-2,i=[];if(t===2)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2==0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class nS extends Gn{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new oS(e)}),this.register(function(e){return new lS(e)}),this.register(function(e){return new gS(e)}),this.register(function(e){return new _S(e)}),this.register(function(e){return new vS(e)}),this.register(function(e){return new hS(e)}),this.register(function(e){return new uS(e)}),this.register(function(e){return new dS(e)}),this.register(function(e){return new AS(e)}),this.register(function(e){return new aS(e)}),this.register(function(e){return new pS(e)}),this.register(function(e){return new cS(e)}),this.register(function(e){return new mS(e)}),this.register(function(e){return new fS(e)}),this.register(function(e){return new sS(e)}),this.register(function(e){return new ES(e)}),this.register(function(e){return new yS(e)})}load(t,e,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Xr.extractUrlBase(t);a=Xr.resolveURL(c,this.path)}else a=Xr.extractUrlBase(t);this.manager.itemStart(t);const o=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new oi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,a,function(h){e(h),s.manager.itemEnd(t)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===am){try{a[Vt.KHR_BINARY_GLTF]=new CS(t)}catch(h){return void(i&&i(h))}s=JSON.parse(a[Vt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2)return void(i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")));const c=new QS(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Vt.KHR_MATERIALS_UNLIT:a[u]=new rS;break;case Vt.KHR_DRACO_MESH_COMPRESSION:a[u]=new MS(s,this.dracoLoader);break;case Vt.KHR_TEXTURE_TRANSFORM:a[u]=new IS;break;case Vt.KHR_MESH_QUANTIZATION:a[u]=new wS;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function iS(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const Vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class sS{constructor(t){this.parser=t,this.name=Vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,a=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let o;const l=new Mt(16777215);a.color!==void 0&&l.setRGB(a.color[0],a.color[1],a.color[2],he);const c=a.range!==void 0?a.range:0;switch(a.type){case"directional":o=new Xf(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new qf(l),o.distance=c;break;case"spot":o=new px(l),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return o.position.set(0,0,0),o.decay=2,si(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=e.createUniqueName(a.name||"light_"+t),i=Promise.resolve(o),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,i=n.json.nodes[t],s=(i.extensions&&i.extensions[this.name]||{}).light;return s===void 0?null:this._loadLight(s).then(function(a){return n._getNodeRef(e.cache,s,a)})}}class rS{constructor(){this.name=Vt.KHR_MATERIALS_UNLIT}getMaterialType(){return An}extendParams(t,e,n){const i=[];t.color=new Mt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],he),t.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,me))}return Promise.all(i)}}class aS{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name].emissiveStrength;return i!==void 0&&(e.emissiveIntensity=i),Promise.resolve()}}class oS{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const e=this.parser.json.materials[t];return e.extensions&&e.extensions[this.name]?On:null}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Ut(o,o)}return Promise.all(s)}}class lS{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const e=this.parser.json.materials[t];return e.extensions&&e.extensions[this.name]?On:null}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name];return e.dispersion=i.dispersion!==void 0?i.dispersion:0,Promise.resolve()}}class cS{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const e=this.parser.json.materials[t];return e.extensions&&e.extensions[this.name]?On:null}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class hS{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SHEEN}getMaterialType(t){const e=this.parser.json.materials[t];return e.extensions&&e.extensions[this.name]?On:null}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new Mt(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],he)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,me)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class uS{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const e=this.parser.json.materials[t];return e.extensions&&e.extensions[this.name]?On:null}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class dS{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_VOLUME}getMaterialType(t){const e=this.parser.json.materials[t];return e.extensions&&e.extensions[this.name]?On:null}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new Mt().setRGB(o[0],o[1],o[2],he),Promise.all(s)}}class AS{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IOR}getMaterialType(t){const e=this.parser.json.materials[t];return e.extensions&&e.extensions[this.name]?On:null}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name];return e.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class pS{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const e=this.parser.json.materials[t];return e.extensions&&e.extensions[this.name]?On:null}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new Mt().setRGB(o[0],o[1],o[2],he),a.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,me)),Promise.all(s)}}class fS{constructor(t){this.parser=t,this.name=Vt.EXT_MATERIALS_BUMP}getMaterialType(t){const e=this.parser.json.materials[t];return e.extensions&&e.extensions[this.name]?On:null}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(s)}}class mS{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const e=this.parser.json.materials[t];return e.extensions&&e.extensions[this.name]?On:null}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class gS{constructor(t){this.parser=t,this.name=Vt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,a)}}class _S{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const a=s.extensions[e],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class vS{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const a=s.extensions[e],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class ES{constructor(t){this.name=Vt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(A){return A.buffer}):a.ready.then(function(){const A=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(A),h,u,d,i.mode,i.filter),A})})}return null}}class yS{constructor(t){this.name=Vt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==dn.TRIANGLES&&l.mode!==dn.TRIANGLE_STRIP&&l.mode!==dn.TRIANGLE_FAN&&l.mode!==void 0)return null;const s=n.extensions[this.name].attributes,a=[],o={};for(const l in s)a.push(this.parser.getDependency("accessor",s[l]).then(c=>(o[l]=c,o[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const c=l.pop(),h=c.isGroup?c.children:[c],u=l[0].count,d=[];for(const A of h){const m=new Rt,g=new B,p=new $e,f=new B(1,1,1),E=new Ky(A.geometry,A.material,u);for(let _=0;_<u;_++)o.TRANSLATION&&g.fromBufferAttribute(o.TRANSLATION,_),o.ROTATION&&p.fromBufferAttribute(o.ROTATION,_),o.SCALE&&f.fromBufferAttribute(o.SCALE,_),E.setMatrixAt(_,m.compose(g,p,f));for(const _ in o)if(_==="_COLOR_0"){const y=o[_];E.instanceColor=new ph(y.array,y.itemSize,y.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&A.geometry.setAttribute(_,o[_]);ue.prototype.copy.call(E,A),this.parser.assignFinalMaterial(E),d.push(E)}return c.isGroup?(c.clear(),c.add(...d),c):d[0]}))}}const am="glTF",xS=1313821514,SS=5130562;class CS{constructor(t){this.name=Vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,12),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==am)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-12,s=new DataView(t,12);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===xS){const c=new Uint8Array(t,12+a,o);this.content=n.decode(c)}else if(l===SS){const c=12+a;this.body=t.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class MS{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Vt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Sh[h]||h.toLowerCase();o[u]=a[h]}for(const h in t.attributes){const u=Sh[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[t.attributes[h]],A=zs[d.componentType];c[u]=A.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(A){for(const m in A.attributes){const g=A.attributes[m],p=l[m];p!==void 0&&(g.normalized=p)}u(A)},o,c,he,d)})})}}class IS{constructor(){this.name=Vt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord!==void 0&&e.texCoord!==t.channel||e.offset!==void 0||e.rotation!==void 0||e.scale!==void 0)&&(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class wS{constructor(){this.name=Vt.KHR_MESH_QUANTIZATION}}class om extends ra{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[s+a];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=2*o,c=3*o,h=i-e,u=(n-e)/h,d=u*u,A=d*u,m=t*c,g=m-c,p=-2*A+3*d,f=A-d,E=1-p,_=f-d+u;for(let y=0;y!==o;y++){const M=a[g+y+o],C=a[g+y+l]*h,x=a[m+y+o],T=a[m+y]*h;s[y]=E*M+_*C+p*x+f*T}return s}}const bS=new $e;class TS extends om{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return bS.fromArray(s).normalize().toArray(s),s}}const dn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vd={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},zd={33071:1001,33648:1002,10497:1e3},Yl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},BS={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},RS="OPAQUE",DS="MASK",LS="BLEND";function FS(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Jr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),r.DefaultMaterial}function Ni(r,t,e){for(const n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function si(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function PS(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function US(r){let t;const e=r.extensions&&r.extensions[Vt.KHR_DRACO_MESH_COMPRESSION];if(t=e?"draco:"+e.bufferView+":"+e.indices+":"+Kl(e.attributes):r.indices+":"+Kl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+Kl(r.targets[n]);return t}function Kl(r){let t="";const e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function Ch(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}const NS=new Rt;class QS{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new iS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Wf(this.options.manager):this.textureLoader=new vx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new oi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ni(s,o,i),si(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const a=e[i].joints;for(let o=0,l=a.length;o<l;o++)t[a[o]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t)}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Vt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Xr.resolveURL(e.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const a=Yl[i.type],o=zs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new ve(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Yl[i.type],c=zs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,A=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let g,p;if(A&&A!==u){const f=Math.floor(d/A),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let _=e.cache.get(E);_||(g=new c(o,f*A,i.count*A/h),_=new zy(g,A/h),e.cache.add(E,_)),p=new Vh(_,l,d%A/h,m)}else g=o===null?new c(i.count*l):new c(o,d,i.count*l),p=new ve(g,l,m);if(i.sparse!==void 0){const f=Yl.SCALAR,E=zs[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,M=new E(a[1],_,i.sparse.count*f),C=new c(a[2],y,i.sparse.count*l);o!==null&&(p=new ve(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let x=0,T=M.length;x<T;x++){const k=M[x];if(p.setX(k,C[x*l]),l>=2&&p.setY(k,C[x*l+1]),l>=3&&p.setZ(k,C[x*l+2]),l>=4&&p.setW(k,C[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(t){const e=this.json,n=this.options,i=e.textures[t].source,s=e.images[i];let a=this.textureLoader;if(s.uri){const o=n.manager.getHandler(s.uri);o!==null&&(a=o)}return this.loadTextureImage(t,i,a)}loadTextureImage(t,e,n){const i=this,s=this.json,a=s.textures[t],o=s.images[e],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(s.samplers||{})[a.sampler]||{};return h.magFilter=Vd[u.magFilter]||1006,h.minFilter=Vd[u.minFilter]||1008,h.wrapS=zd[u.wrapS]||1e3,h.wrapT=zd[u.wrapT]||1e3,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const a=i.images[t],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,A){let m=d;e.isImageBitmapLoader===!0&&(m=function(g){const p=new oe(g);p.needsUpdate=!0,d(p)}),e.load(Xr.resolveURL(u,s.path),m,void 0,A)})}).then(function(u){var d;return c===!0&&o.revokeObjectURL(l),si(u,a),u.userData.mimeType=a.mimeType||((d=a.uri).search(/\.jpe?g($|\?)/i)>0||d.search(/^data\:image\/jpeg/)===0?"image/jpeg":d.search(/\.webp($|\?)/i)>0||d.search(/^data\:image\/webp/)===0?"image/webp":"image/png"),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&((a=a.clone()).channel=n.texCoord),s.extensions[Vt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Vt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Vt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Of,bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(t.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Qf,bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return Jr}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let a;const o={},l=[];if((s.extensions||{})[Vt.KHR_MATERIALS_UNLIT]){const h=i[Vt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,s,e))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Mt(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],he),o.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",h.baseColorTexture,me)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=2);const c=s.alphaMode||RS;if(c===LS?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===DS&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==An&&(l.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ut(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==An&&(l.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==An){const h=s.emissiveFactor;o.emissive=new Mt().setRGB(h[0],h[1],h[2],he)}return s.emissiveTexture!==void 0&&a!==An&&l.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,me)),Promise.all(l).then(function(){const h=new a(o);return s.name&&(h.name=s.name),si(h,s),e.associations.set(h,{materials:t}),s.extensions&&Ni(i,h,s),h})}createUniqueName(t){const e=Xt.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(l){return Wd(l,o,e)})}const a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o],h=US(c),u=i[h];if(u)a.push(u.promise);else{let d;d=c.extensions&&c.extensions[Vt.KHR_DRACO_MESH_COMPRESSION]?s(c):Wd(new en,c,e),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?FS(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let A=0,m=h.length;A<m;A++){const g=h[A],p=a[A];let f;const E=c[A];if(p.mode===dn.TRIANGLES||p.mode===dn.TRIANGLE_STRIP||p.mode===dn.TRIANGLE_FAN||p.mode===void 0)f=s.isSkinnedMesh===!0?new qy(g,E):new le(g,E),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),p.mode===dn.TRIANGLE_STRIP?f.geometry=Hd(f.geometry,1):p.mode===dn.TRIANGLE_FAN&&(f.geometry=Hd(f.geometry,2));else if(p.mode===dn.LINES)f=new $y(g,E);else if(p.mode===dn.LINE_STRIP)f=new $r(g,E);else if(p.mode===dn.LINE_LOOP)f=new Jy(g,E);else{if(p.mode!==dn.POINTS)throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);f=new jy(g,E)}Object.keys(f.geometry.morphAttributes).length>0&&PS(f,s),f.name=e.createUniqueName(s.name||"mesh_"+t),si(f,s),p.extensions&&Ni(i,f,p),e.assignFinalMaterial(f),u.push(f)}for(let A=0,m=u.length;A<m;A++)e.associations.set(u[A],{meshes:t,primitives:A});if(u.length===1)return s.extensions&&Ni(i,u[0],s),u[0];const d=new xi;s.extensions&&Ni(i,d,s),e.associations.set(d,{meshes:t});for(let A=0,m=u.length;A<m;A++)d.add(u[A]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(i)return n.type==="perspective"?e=new Be(po.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new er(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),si(e,n),Promise.resolve(e);console.warn("THREE.GLTFLoader: Missing camera parameters.")}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Rt;s!==null&&d.fromArray(s.array,16*c),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new zh(o,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const A=i.channels[u],m=i.samplers[A.sampler],g=A.target,p=g.node,f=i.parameters!==void 0?i.parameters[m.input]:m.input,E=i.parameters!==void 0?i.parameters[m.output]:m.output;g.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",E)),c.push(m),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],A=u[1],m=u[2],g=u[3],p=u[4],f=[];for(let E=0,_=d.length;E<_;E++){const y=d[E],M=A[E],C=m[E],x=g[E],T=p[E];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const k=n._createAnimationTracks(y,M,C,x,T);if(k)for(let v=0;v<k.length;v++)f.push(k[v])}return new mh(s,void 0,f)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(t){const e=this,n=this.json.nodes[t],i=e._loadNodeShallow(t),s=[],a=n.children||[];for(let l=0,c=a.length;l<c;l++)s.push(e.getDependency("node",a[l]));const o=n.skin===void 0?Promise.resolve(null):e.getDependency("skin",n.skin);return Promise.all([i,Promise.all(s),o]).then(function(l){const c=l[0],h=l[1],u=l[2];u!==null&&c.traverse(function(d){d.isSkinnedMesh&&d.bind(u,NS)});for(let d=0,A=h.length;d<A;d++)c.add(h[d]);return c})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){o.push(c)}),this.nodeCache[t]=Promise.all(o).then(function(c){let h;if(h=s.isBone===!0?new Nf:c.length>1?new xi:c.length===1?c[0]:new ue,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),si(h,s),s.extensions&&Ni(n,h,s),s.matrix!==void 0){const u=new Rt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new xi;n.name&&(s.name=i.createUniqueName(n.name)),si(s,n),n.extensions&&Ni(e,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let c=0,h=l.length;c<h;c++)s.add(l[c]);return i.associations=(c=>{const h=new Map;for(const[u,d]of i.associations)(u instanceof bn||u instanceof oe)&&h.set(u,d);return c.traverse(u=>{const d=i.associations.get(u);d!=null&&h.set(u,d)}),h})(s),s})}_createAnimationTracks(t,e,n,i,s){const a=[],o=t.name?t.name:t.uuid,l=[];let c;switch(mi[s.path]===mi.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o),mi[s.path]){case mi.weights:c=Ks;break;case mi.rotation:c=$s;break;case mi.position:case mi.scale:c=Js;break;default:n.itemSize===1?c=Ks:c=Js}const h=i.interpolation!==void 0?BS[i.interpolation]:2301,u=this._getArrayFromAccessor(n);for(let d=0,A=l.length;d<A;d++){const m=new c(l[d]+"."+mi[s.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Ch(e.constructor),i=new Float32Array(e.length);for(let s=0,a=e.length;s<a;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(e){return new(this instanceof $s?TS:om)(this.times,this.values,this.getValueSize()/3,e)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Wd(r,t,e){const n=t.attributes,i=[];function s(a,o){return e.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Sh[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(t.indices!==void 0&&!r.index){const a=e.getDependency("accessor",t.indices).then(function(o){r.setIndex(o)});i.push(a)}return Kt.workingColorSpace!==he&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Kt.workingColorSpace}" not supported.`),si(r,t),function(a,o,l){const c=o.attributes,h=new Ke;if(c.POSITION===void 0)return;{const A=l.json.accessors[c.POSITION],m=A.min,g=A.max;if(m===void 0||g===void 0)return void console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");if(h.set(new B(m[0],m[1],m[2]),new B(g[0],g[1],g[2])),A.normalized){const p=Ch(zs[A.componentType]);h.min.multiplyScalar(p),h.max.multiplyScalar(p)}}const u=o.targets;if(u!==void 0){const A=new B,m=new B;for(let g=0,p=u.length;g<p;g++){const f=u[g];if(f.POSITION!==void 0){const E=l.json.accessors[f.POSITION],_=E.min,y=E.max;if(_!==void 0&&y!==void 0){if(m.setX(Math.max(Math.abs(_[0]),Math.abs(y[0]))),m.setY(Math.max(Math.abs(_[1]),Math.abs(y[1]))),m.setZ(Math.max(Math.abs(_[2]),Math.abs(y[2]))),E.normalized){const M=Ch(zs[E.componentType]);m.multiplyScalar(M)}A.max(m)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}h.expandByVector(A)}a.boundingBox=h;const d=new gn;h.getCenter(d.center),d.radius=h.min.distanceTo(h.max)/2,a.boundingSphere=d}(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?function(a,o,l){let c=!1,h=!1,u=!1;for(let g=0,p=o.length;g<p;g++){const f=o[g];if(f.POSITION!==void 0&&(c=!0),f.NORMAL!==void 0&&(h=!0),f.COLOR_0!==void 0&&(u=!0),c&&h&&u)break}if(!c&&!h&&!u)return Promise.resolve(a);const d=[],A=[],m=[];for(let g=0,p=o.length;g<p;g++){const f=o[g];if(c){const E=f.POSITION!==void 0?l.getDependency("accessor",f.POSITION):a.attributes.position;d.push(E)}if(h){const E=f.NORMAL!==void 0?l.getDependency("accessor",f.NORMAL):a.attributes.normal;A.push(E)}if(u){const E=f.COLOR_0!==void 0?l.getDependency("accessor",f.COLOR_0):a.attributes.color;m.push(E)}}return Promise.all([Promise.all(d),Promise.all(A),Promise.all(m)]).then(function(g){const p=g[0],f=g[1],E=g[2];return c&&(a.morphAttributes.position=p),h&&(a.morphAttributes.normal=f),u&&(a.morphAttributes.color=E),a.morphTargetsRelative=!0,a})}(r,t.targets,e):r})}class OS{constructor(t=4){this.pool=t,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(t){if(!this.workers[t]){const e=this.workerCreator();e.addEventListener("message",this._onMessage.bind(this,t)),this.workers[t]=e}}_getIdleWorker(){for(let t=0;t<this.pool;t++)if(!(this.workerStatus&1<<t))return t;return-1}_onMessage(t,e){const n=this.workersResolve[t];if(n&&n(e),this.queue.length){const{resolve:i,msg:s,transfer:a}=this.queue.shift();this.workersResolve[t]=i,this.workers[t].postMessage(s,a)}else this.workerStatus^=1<<t}setWorkerCreator(t){this.workerCreator=t}setWorkerLimit(t){this.pool=t}postMessage(t,e){return new Promise(n=>{const i=this._getIdleWorker();i!==-1?(this._initWorker(i),this.workerStatus|=1<<i,this.workersResolve[i]=n,this.workers[i].postMessage(t,e)):this.queue.push({resolve:n,msg:t,transfer:e})})}dispose(){this.workers.forEach(t=>t.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const lm=9,cm=15,hm=16,um=22,dm=37,Am=43,pm=76,fm=83,mm=97,gm=100,_m=103,vm=109,Em=165,ym=166,xm=1000066e3;class kS{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class gr{constructor(t,e,n,i){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(t.buffer,t.byteOffset+e,n),this._littleEndian=i,this._offset=0}_nextUint8(){const t=this._dataView.getUint8(this._offset);return this._offset+=1,t}_nextUint16(){const t=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,t}_nextUint32(){const t=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,t}_nextUint64(){const t=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,t}_nextInt32(){const t=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,t}_nextUint8Array(t){const e=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,t);return this._offset+=t,e}_skip(t){return this._offset+=t,this}_scan(t,e){e===void 0&&(e=0);const n=this._offset;let i=0;for(;this._dataView.getUint8(this._offset)!==e&&i<t;)i++,this._offset++;return i<t&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,i)}}const ze=[171,75,84,88,32,50,48,187,13,10,26,10];function qd(r){return new TextDecoder().decode(r)}let $l,ii,Mh;const Jl={env:{emscripten_notify_memory_growth:function(r){Mh=new Uint8Array(ii.exports.memory.buffer)}}};class GS{init(){return $l||($l=typeof fetch<"u"?fetch("data:application/wasm;base64,"+Xd).then(t=>t.arrayBuffer()).then(t=>WebAssembly.instantiate(t,Jl)).then(this._init):WebAssembly.instantiate(Buffer.from(Xd,"base64"),Jl).then(this._init),$l)}_init(t){ii=t.instance,Jl.env.emscripten_notify_memory_growth(0)}decode(t,e=0){if(!ii)throw new Error("ZSTDDecoder: Await .init() before decoding.");const n=t.byteLength,i=ii.exports.malloc(n);Mh.set(t,i),e=e||Number(ii.exports.ZSTD_findDecompressedSize(i,n));const s=ii.exports.malloc(e),a=ii.exports.ZSTD_decompress(s,e,i,n),o=Mh.slice(s,s+a);return ii.exports.free(i),ii.exports.free(s),o}}const Xd="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",jl=new WeakMap;let Zl,tc=0;class Un extends Gn{constructor(t){super(t),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new OS,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(t){return this.transcoderPath=t,this}setWorkerLimit(t){return this.workerPool.setWorkerLimit(t),this}async detectSupportAsync(t){return this.workerConfig={astcSupported:await t.hasFeatureAsync("texture-compression-astc"),etc1Supported:await t.hasFeatureAsync("texture-compression-etc1"),etc2Supported:await t.hasFeatureAsync("texture-compression-etc2"),dxtSupported:await t.hasFeatureAsync("texture-compression-bc"),bptcSupported:await t.hasFeatureAsync("texture-compression-bptc"),pvrtcSupported:await t.hasFeatureAsync("texture-compression-pvrtc")},this}detectSupport(t){return t.isWebGPURenderer===!0?this.workerConfig={astcSupported:t.hasFeature("texture-compression-astc"),etc1Supported:t.hasFeature("texture-compression-etc1"),etc2Supported:t.hasFeature("texture-compression-etc2"),dxtSupported:t.hasFeature("texture-compression-bc"),bptcSupported:t.hasFeature("texture-compression-bptc"),pvrtcSupported:t.hasFeature("texture-compression-pvrtc")}:this.workerConfig={astcSupported:t.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:t.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:t.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:t.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:t.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:t.extensions.has("WEBGL_compressed_texture_pvrtc")||t.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this}init(){if(!this.transcoderPending){const t=new oi(this.manager);t.setPath(this.transcoderPath),t.setWithCredentials(this.withCredentials);const e=t.loadAsync("basis_transcoder.js"),n=new oi(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const i=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([e,i]).then(([s,a])=>{const o=Un.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(Un.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(Un.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(Un.BasisFormat),"/* basis_transcoder.js */",s,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{const c=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),c})}),tc>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),tc++}return this.transcoderPending}load(t,e,n,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const s=new oi(this.manager);s.setResponseType("arraybuffer"),s.setWithCredentials(this.withCredentials),s.load(t,a=>{this.parse(a,e,i)},n,i)}parse(t,e,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(jl.has(t))return jl.get(t).promise.then(e).catch(n);this._createTexture(t).then(i=>e?e(i):null).catch(n)}_createTextureFrom(t,e){const{faces:n,width:i,height:s,format:a,type:o,error:l,dfdFlags:c}=t;if(o==="error")return Promise.reject(l);let h;if(e.faceCount===6)h=new ex(n,a,1009);else{const u=n[0].mipmaps;h=e.layerCount>1?new tx(u,i,s,e.layerCount,a,1009):new ts(u,i,s,a,1009)}return h.minFilter=n[0].mipmaps.length===1?1006:1008,h.magFilter=1006,h.generateMipmaps=!1,h.needsUpdate=!0,h.colorSpace=Yd(e),h.premultiplyAlpha=!!(1&c),h}async _createTexture(t,e={}){const n=function(a){const o=new Uint8Array(a.buffer,a.byteOffset,ze.length);if(o[0]!==ze[0]||o[1]!==ze[1]||o[2]!==ze[2]||o[3]!==ze[3]||o[4]!==ze[4]||o[5]!==ze[5]||o[6]!==ze[6]||o[7]!==ze[7]||o[8]!==ze[8]||o[9]!==ze[9]||o[10]!==ze[10]||o[11]!==ze[11])throw new Error("Missing KTX 2.0 identifier.");const l=new kS,c=17*Uint32Array.BYTES_PER_ELEMENT,h=new gr(a,ze.length,c,!0);l.vkFormat=h._nextUint32(),l.typeSize=h._nextUint32(),l.pixelWidth=h._nextUint32(),l.pixelHeight=h._nextUint32(),l.pixelDepth=h._nextUint32(),l.layerCount=h._nextUint32(),l.faceCount=h._nextUint32();const u=h._nextUint32();l.supercompressionScheme=h._nextUint32();const d=h._nextUint32(),A=h._nextUint32(),m=h._nextUint32(),g=h._nextUint32(),p=h._nextUint64(),f=h._nextUint64(),E=new gr(a,ze.length+c,3*u*8,!0);for(let mt=0;mt<u;mt++)l.levels.push({levelData:new Uint8Array(a.buffer,a.byteOffset+E._nextUint64(),E._nextUint64()),uncompressedByteLength:E._nextUint64()});const _=new gr(a,d,A,!0),y={vendorId:_._skip(4)._nextUint16(),descriptorType:_._nextUint16(),versionNumber:_._nextUint16(),descriptorBlockSize:_._nextUint16(),colorModel:_._nextUint8(),colorPrimaries:_._nextUint8(),transferFunction:_._nextUint8(),flags:_._nextUint8(),texelBlockDimension:[_._nextUint8(),_._nextUint8(),_._nextUint8(),_._nextUint8()],bytesPlane:[_._nextUint8(),_._nextUint8(),_._nextUint8(),_._nextUint8(),_._nextUint8(),_._nextUint8(),_._nextUint8(),_._nextUint8()],samples:[]},M=(y.descriptorBlockSize/4-6)/4;for(let mt=0;mt<M;mt++){const Q={bitOffset:_._nextUint16(),bitLength:_._nextUint8(),channelType:_._nextUint8(),samplePosition:[_._nextUint8(),_._nextUint8(),_._nextUint8(),_._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&Q.channelType?(Q.sampleLower=_._nextInt32(),Q.sampleUpper=_._nextInt32()):(Q.sampleLower=_._nextUint32(),Q.sampleUpper=_._nextUint32()),y.samples[mt]=Q}l.dataFormatDescriptor.length=0,l.dataFormatDescriptor.push(y);const C=new gr(a,m,g,!0);for(;C._offset<g;){const mt=C._nextUint32(),Q=C._scan(mt),X=qd(Q);if(l.keyValue[X]=C._nextUint8Array(mt-Q.byteLength-1),X.match(/^ktx/i)){const rt=qd(l.keyValue[X]);l.keyValue[X]=rt.substring(0,rt.lastIndexOf("\0"))}C._skip(mt%4?4-mt%4:0)}if(f<=0)return l;const x=new gr(a,p,f,!0),T=x._nextUint16(),k=x._nextUint16(),v=x._nextUint32(),I=x._nextUint32(),N=x._nextUint32(),U=x._nextUint32(),G=[];for(let mt=0;mt<u;mt++)G.push({imageFlags:x._nextUint32(),rgbSliceByteOffset:x._nextUint32(),rgbSliceByteLength:x._nextUint32(),alphaSliceByteOffset:x._nextUint32(),alphaSliceByteLength:x._nextUint32()});const q=p+x._offset,L=q+v,Y=L+I,z=Y+N,Z=new Uint8Array(a.buffer,a.byteOffset+q,v),tt=new Uint8Array(a.buffer,a.byteOffset+L,I),nt=new Uint8Array(a.buffer,a.byteOffset+Y,N),Et=new Uint8Array(a.buffer,a.byteOffset+z,U);return l.globalData={endpointCount:T,selectorCount:k,imageDescs:G,endpointsData:Z,selectorsData:tt,tablesData:nt,extendedData:Et},l}(new Uint8Array(t));if(n.vkFormat!==0)return async function(a){const{vkFormat:o}=a;if(ec[o]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let l;a.supercompressionScheme===2&&(Zl||(Zl=new Promise(async u=>{const d=new GS;await d.init(),u(d)})),l=await Zl);const c=[];for(let u=0;u<a.levels.length;u++){const d=Math.max(1,a.pixelWidth>>u),A=Math.max(1,a.pixelHeight>>u),m=a.pixelDepth?Math.max(1,a.pixelDepth>>u):0,g=a.levels[u];let p,f;if(a.supercompressionScheme===0)p=g.levelData;else{if(a.supercompressionScheme!==2)throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");p=l.decode(g.levelData,g.uncompressedByteLength)}f=nc[o]===1015?new Float32Array(p.buffer,p.byteOffset,p.byteLength/Float32Array.BYTES_PER_ELEMENT):nc[o]===1016?new Uint16Array(p.buffer,p.byteOffset,p.byteLength/Uint16Array.BYTES_PER_ELEMENT):p,c.push({data:f,width:d,height:A,depth:m})}let h;if(HS.has(ec[o]))h=a.pixelDepth===0?new sa(c[0].data,a.pixelWidth,a.pixelHeight):new Sf(c[0].data,a.pixelWidth,a.pixelHeight,a.pixelDepth);else{if(a.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");h=new ts(c,a.pixelWidth,a.pixelHeight)}return h.mipmaps=c,h.type=nc[o],h.format=ec[o],h.colorSpace=Yd(a),h.needsUpdate=!0,Promise.resolve(h)}(n);const i=e,s=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:t,taskConfig:i},[t])).then(a=>this._createTextureFrom(a.data,n));return jl.set(t,{promise:s}),s}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),tc--,this}}Un.BasisFormat={ETC1S:0,UASTC_4x4:1},Un.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16},Un.EngineFormat={RGBAFormat:1023,RGBA_ASTC_4x4_Format:37808,RGBA_BPTC_Format:36492,RGBA_ETC2_EAC_Format:37496,RGBA_PVRTC_4BPPV1_Format:35842,RGBA_S3TC_DXT5_Format:33779,RGB_ETC1_Format:36196,RGB_ETC2_Format:37492,RGB_PVRTC_4BPPV1_Format:35840,RGBA_S3TC_DXT1_Format:33777},Un.BasisWorker=function(){let r,t,e;const n=_EngineFormat,i=_TranscoderFormat,s=_BasisFormat;self.addEventListener("message",function(u){const d=u.data;switch(d.type){case"init":r=d.config,A=d.transcoderBinary,t=new Promise(m=>{e={wasmBinary:A,onRuntimeInitialized:m},BASIS(e)}).then(()=>{e.initializeBasis(),e.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")});break;case"transcode":t.then(()=>{try{const{faces:m,buffers:g,width:p,height:f,hasAlpha:E,format:_,dfdFlags:y}=function(M){const C=new e.KTX2File(new Uint8Array(M));function x(){C.close(),C.delete()}if(!C.isValid())throw x(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");const T=C.isUASTC()?s.UASTC_4x4:s.ETC1S,k=C.getWidth(),v=C.getHeight(),I=C.getLayers()||1,N=C.getLevels(),U=C.getFaces(),G=C.getHasAlpha(),q=C.getDFDFlags(),{transcoderFormat:L,engineFormat:Y}=function(tt,nt,Et,mt){let Q,X;const rt=tt===s.ETC1S?o:l;for(let at=0;at<rt.length;at++){const At=rt[at];if(r[At.if]&&At.basisFormat.includes(tt)&&!(mt&&At.transcoderFormat.length<2)&&(!At.needsPowerOfTwo||c(nt)&&c(Et)))return Q=At.transcoderFormat[mt?1:0],X=At.engineFormat[mt?1:0],{transcoderFormat:Q,engineFormat:X}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),Q=i.RGBA32,X=n.RGBAFormat,{transcoderFormat:Q,engineFormat:X}}(T,k,v,G);if(!k||!v||!N)throw x(),new Error("THREE.KTX2Loader:	Invalid texture");if(!C.startTranscoding())throw x(),new Error("THREE.KTX2Loader: .startTranscoding failed");const z=[],Z=[];for(let tt=0;tt<U;tt++){const nt=[];for(let Et=0;Et<N;Et++){const mt=[];let Q,X;for(let at=0;at<I;at++){const At=C.getImageLevelInfo(Et,at,tt);tt!==0||Et!==0||at!==0||At.origWidth%4==0&&At.origHeight%4==0||console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),N>1?(Q=At.origWidth,X=At.origHeight):(Q=At.width,X=At.height);const It=new Uint8Array(C.getImageTranscodedSizeInBytes(Et,at,0,L));if(!C.transcodeImage(It,Et,at,tt,L,0,-1,-1))throw x(),new Error("THREE.KTX2Loader: .transcodeImage failed.");mt.push(It)}const rt=h(mt);nt.push({data:rt,width:Q,height:X}),Z.push(rt.buffer)}z.push({mipmaps:nt,width:k,height:v,format:Y})}return x(),{faces:z,buffers:Z,width:k,height:v,hasAlpha:G,format:Y,dfdFlags:q}}(d.buffer);self.postMessage({type:"transcode",id:d.id,faces:m,width:p,height:f,hasAlpha:E,format:_,dfdFlags:y},g)}catch(m){console.error(m),self.postMessage({type:"error",id:d.id,error:m.message})}})}var A});const a=[{if:"astcSupported",basisFormat:[s.UASTC_4x4],transcoderFormat:[i.ASTC_4x4,i.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.BC7_M5,i.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.BC1,i.BC3],engineFormat:[n.RGBA_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.ETC1,i.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.ETC1],engineFormat:[n.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[i.PVRTC1_4_RGB,i.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],o=a.sort(function(u,d){return u.priorityETC1S-d.priorityETC1S}),l=a.sort(function(u,d){return u.priorityUASTC-d.priorityUASTC});function c(u){return u<=2||!(u&u-1)&&u!==0}function h(u){if(u.length===1)return u[0];let d=0;for(let g=0;g<u.length;g++)d+=u[g].byteLength;const A=new Uint8Array(d);let m=0;for(let g=0;g<u.length;g++){const p=u[g];A.set(p,m),m+=p.byteLength}return A}};const HS=new Set([1023,1030,1028]),ec={[vm]:1023,[mm]:1023,[dm]:1023,[Am]:1023,[_m]:1030,[fm]:1030,[hm]:1030,[um]:1030,[gm]:1028,[pm]:1028,[cm]:1028,[lm]:1028,[xm]:37808,[ym]:37812,[Em]:37812},nc={[vm]:1015,[mm]:1016,[dm]:1009,[Am]:1009,[_m]:1015,[fm]:1016,[hm]:1009,[um]:1009,[gm]:1015,[pm]:1016,[cm]:1009,[lm]:1009,[xm]:1016,[ym]:1009,[Em]:1009};function Yd(r){const t=r.dataFormatDescriptor[0];return t.colorPrimaries===1?t.transferFunction===2?me:he:t.colorPrimaries===10?t.transferFunction===2?Xo:na:(t.colorPrimaries===0||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${t.colorPrimaries}"`),Cn)}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kd,$d;const xn=Symbol("retainerCount"),Kn=Symbol("recentlyUsed"),ka=Symbol("evict"),_r=Symbol("evictionThreshold"),ic=Symbol("cache");class VS{constructor(t,e=5){this[Kd]=new Map,this[$d]=[],this[ic]=t,this[_r]=e}set evictionThreshold(t){this[_r]=t,this[ka]()}get evictionThreshold(){return this[_r]}get cache(){return this[ic]}retainerCount(t){return this[xn].get(t)||0}reset(){this[xn].clear(),this[Kn]=[]}retain(t){this[xn].has(t)||this[xn].set(t,0),this[xn].set(t,this[xn].get(t)+1);const e=this[Kn].indexOf(t);e!==-1&&this[Kn].splice(e,1),this[Kn].unshift(t),this[ka]()}release(t){this[xn].has(t)&&this[xn].set(t,Math.max(this[xn].get(t)-1,0)),this[ka]()}[(Kd=xn,$d=Kn,ka)](){if(!(this[Kn].length<this[_r]))for(let t=this[Kn].length-1;t>=this[_r];--t){const e=this[Kn][t];this[xn].get(e)===0&&(this[ic].delete(e),this[Kn].splice(t,1))}}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=r=>{const t=new Map;for(const e of r.mappings)for(const n of e.variants)t.set(n,{material:null,gltfMaterialIndex:e.material});return t};class WS{constructor(t){this.parser=t,this.name="KHR_materials_variants"}afterRoot(t){const e=this.parser,n=e.json;if(n.extensions===void 0||n.extensions[this.name]===void 0)return null;const i=(s=>{const a=[],o=new Set;for(const l of s){let c=l,h=0;for(;o.has(c);)c=l+"."+ ++h;o.add(c),a.push(c)}return a})((n.extensions[this.name].variants||[]).map(s=>s.name));for(const s of t.scenes)s.traverse(a=>{const o=a;if(!o.material)return;const l=e.associations.get(o);if(l==null||l.meshes==null||l.primitives==null)return;const c=n.meshes[l.meshes].primitives[l.primitives].extensions;c&&c[this.name]&&(o.userData.variantMaterials=zS(c[this.name]))});return t.userData.variants=i,Promise.resolve()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sm,Jd;oe.DEFAULT_ANISOTROPY=4;const $n=new Map,sc=new Map;let jd;const Zd=new class extends Gn{constructor(r){super(r),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(r){return this.decoderPath=r,this}setDecoderConfig(r){return this.decoderConfig=r,this}setWorkerLimit(r){return this.workerLimit=r,this}load(r,t,e,n){const i=new oi(this.manager);i.setPath(this.path),i.setResponseType("arraybuffer"),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(r,s=>{this.parse(s,t,n)},e,n)}parse(r,t,e=()=>{}){this.decodeDracoFile(r,t,null,null,me,e).catch(e)}decodeDracoFile(r,t,e,n,i=he,s=()=>{}){const a={attributeIDs:e||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!e,vertexColorSpace:i};return this.decodeGeometry(r,a).then(t).catch(s)}decodeGeometry(r,t){const e=JSON.stringify(t);if(Xl.has(r)){const o=Xl.get(r);if(o.key===e)return o.promise;if(r.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const i=this.workerNextTaskID++,s=r.byteLength,a=this._getWorker(i,s).then(o=>(n=o,new Promise((l,c)=>{n._callbacks[i]={resolve:l,reject:c},n.postMessage({type:"decode",id:i,taskConfig:t,buffer:r},[r])}))).then(o=>this._createGeometry(o.geometry));return a.catch(()=>!0).then(()=>{n&&i&&this._releaseTask(n,i)}),Xl.set(r,{key:e,promise:a}),a}_createGeometry(r){const t=new en;r.index&&t.setIndex(new ve(r.index.array,1));for(let e=0;e<r.attributes.length;e++){const n=r.attributes[e],i=n.name,s=n.array,a=n.itemSize,o=new ve(s,a);i==="color"&&(this._assignVertexColorSpace(o,n.vertexColorSpace),o.normalized=!(s instanceof Float32Array)),t.setAttribute(i,o)}return t}_assignVertexColorSpace(r,t){if(t!==me)return;const e=new Mt;for(let n=0,i=r.count;n<i;n++)e.fromBufferAttribute(r,n),Kt.toWorkingColorSpace(e,me),r.setXYZ(n,e.r,e.g,e.b)}_loadLibrary(r,t){const e=new oi(this.manager);return e.setPath(this.decoderPath),e.setResponseType(t),e.setWithCredentials(this.withCredentials),new Promise((n,i)=>{e.load(r,n,void 0,i)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const r=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return r?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(e=>{const n=e[0];r||(this.decoderConfig.wasmBinary=e[1]);const i=eS.toString(),s=["/* draco decoder */",n,"","/* worker */",i.substring(i.indexOf("{")+1,i.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(r,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(i){const s=i.data;switch(s.type){case"decode":n._callbacks[s.id].resolve(s);break;case"error":n._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,i){return n._taskLoad>i._taskLoad?-1:1});const e=this.workerPool[this.workerPool.length-1];return e._taskCosts[r]=t,e._taskLoad+=t,e})}_releaseTask(r,t){r._taskLoad-=r._taskCosts[t],delete r._callbacks[t],delete r._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(r=>r._taskLoad))}dispose(){for(let r=0;r<this.workerPool.length;++r)this.workerPool[r].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};let tA;const rc=new Un;let ac,oc;const zi=Symbol("loader"),Ei=Symbol("evictionPolicy"),eA=Symbol("GLTFInstance");class Xe extends Tn{constructor(t){super(),this[Jd]=new nS().register(e=>new WS(e)),this[eA]=t,this[zi].setDRACOLoader(Zd),this[zi].setKTX2Loader(rc)}static setDRACODecoderLocation(t){jd=t,Zd.setDecoderPath(t)}static getDRACODecoderLocation(){return jd}static setKTX2TranscoderLocation(t){tA=t,rc.setTranscoderPath(t)}static getKTX2TranscoderLocation(){return tA}static setMeshoptDecoderLocation(t){var e;ac!==t&&(ac=t,oc=(e=t,new Promise((n,i)=>{const s=document.createElement("script");document.body.appendChild(s),s.onload=n,s.onerror=i,s.async=!0,s.src=e})).then(()=>MeshoptDecoder.ready).then(()=>MeshoptDecoder))}static getMeshoptDecoderLocation(){return ac}static initializeKTX2Loader(t){rc.detectSupport(t)}static get cache(){return $n}static clearCache(){$n.forEach((t,e)=>{this.delete(e)}),this[Ei].reset()}static has(t){return $n.has(t)}static async delete(t){if(!this.has(t))return;const e=$n.get(t);sc.delete(t),$n.delete(t),(await e).dispose()}static hasFinishedLoading(t){return!!sc.get(t)}get[(Sm=Ei,Jd=zi,Ei)](){return this.constructor[Ei]}async preload(t,e,n=()=>{}){if(this[zi].setWithCredentials(e.withCredentials),this.dispatchEvent({type:"preload",element:e,src:t}),!$n.has(t)){oc!=null&&this[zi].setMeshoptDecoder(await oc);const i=((o,l,c=()=>{})=>{const h=u=>{const d=u.loaded/u.total;c(Math.max(0,Math.min(1,isFinite(d)?d:1)))};return new Promise((u,d)=>{l.load(o,u,h,d)})})(t,this[zi],o=>{n(.8*o)}),s=this[eA],a=i.then(o=>s.prepare(o)).then(o=>(n(.9),new s(o))).catch(o=>(console.error(o),new s));$n.set(t,a)}await $n.get(t),sc.set(t,!0),n&&n(1)}async load(t,e,n=()=>{}){await this.preload(t,e,n);const i=await $n.get(t),s=await i.clone();return this[Ei].retain(t),s.dispose=()=>{this[Ei].release(t)},s}}Xe[Sm]=new VS(Xe);class qS extends ue{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ut(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const _s=new B,nA=new Rt,iA=new Rt,sA=new B,rA=new B;class XS{constructor(t={}){const e=this;let n,i,s,a;const o={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");function c(d){d.isCSS2DObject&&(d.element.style.display="none");for(let A=0,m=d.children.length;A<m;A++)c(d.children[A])}function h(d,A,m){if(d.visible!==!1){if(d.isCSS2DObject){_s.setFromMatrixPosition(d.matrixWorld),_s.applyMatrix4(iA);const g=_s.z>=-1&&_s.z<=1&&d.layers.test(m.layers)===!0,p=d.element;p.style.display=g===!0?"":"none",g===!0&&(d.onBeforeRender(e,A,m),p.style.transform="translate("+-100*d.center.x+"%,"+-100*d.center.y+"%)translate("+(_s.x*s+s)+"px,"+(-_s.y*a+a)+"px)",p.parentNode!==l&&l.appendChild(p),d.onAfterRender(e,A,m));const f={distanceToCameraSquared:u(m,d)};o.objects.set(d,f)}for(let g=0,p=d.children.length;g<p;g++)h(d.children[g],A,m)}else c(d)}function u(d,A){return sA.setFromMatrixPosition(d.matrixWorld),rA.setFromMatrixPosition(A.matrixWorld),sA.distanceToSquared(rA)}l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:i}},this.render=function(d,A){d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),nA.copy(A.matrixWorldInverse),iA.multiplyMatrices(A.projectionMatrix,nA),h(d,d,A),function(m){const g=function(f){const E=[];return f.traverseVisible(function(_){_.isCSS2DObject&&E.push(_)}),E}(m).sort(function(f,E){return f.renderOrder!==E.renderOrder?E.renderOrder-f.renderOrder:o.objects.get(f).distanceToCameraSquared-o.objects.get(E).distanceToCameraSquared}),p=g.length;for(let f=0,E=g.length;f<E;f++)g[f].element.style.zIndex=p-f}(d)},this.setSize=function(d,A){n=d,i=A,s=n/2,a=i/2,l.style.width=d+"px",l.style.height=A+"px"}}}function Ga(r,t,e){let n=e;const i=new B;return r.updateWorldMatrix(!0,!0),r.traverseVisible(s=>{const{geometry:a}=s;if(a!==void 0){const{position:o}=a.attributes;if(o!==void 0)for(let l=0,c=o.count;l<c;l++)s.isMesh?s.getVertexPosition(l,i):i.fromBufferAttribute(o,l),s.isSkinnedMesh||i.applyMatrix4(s.matrixWorld),n=t(n,i)}}),n}let vr,lc,vs,Ha;function xo(r,t=1/0,e=null){lc||(lc=new Qn(2,2,1,1)),vs||(vs=new tn({uniforms:{blitTexture:new Kh(r)},vertexShader:`
			varying vec2 vUv;
			void main(){
				vUv = uv;
				gl_Position = vec4(position.xy * 1.0,0.,.999999);
			}`,fragmentShader:`
			uniform sampler2D blitTexture; 
			varying vec2 vUv;

			void main(){ 
				gl_FragColor = vec4(vUv.xy, 0, 1);
				
				#ifdef IS_SRGB
				gl_FragColor = sRGBTransferOETF( texture2D( blitTexture, vUv) );
				#else
				gl_FragColor = texture2D( blitTexture, vUv);
				#endif
			}`})),vs.uniforms.blitTexture.value=r,vs.defines.IS_SRGB=r.colorSpace==me,vs.needsUpdate=!0,Ha||(Ha=new le(lc,vs),Ha.frustumCulled=!1);const n=new Be,i=new Ii;i.add(Ha),e===null&&(e=vr=new Hh({antialias:!1}));const s=Math.min(r.image.width,t),a=Math.min(r.image.height,t);e.setSize(s,a),e.clear(),e.render(i,n);const o=document.createElement("canvas"),l=o.getContext("2d");o.width=s,o.height=a,l.drawImage(e.domElement,0,0,s,a);const c=new kf(o);return c.minFilter=r.minFilter,c.magFilter=r.magFilter,c.wrapS=r.wrapS,c.wrapT=r.wrapT,c.colorSpace=r.colorSpace,c.name=r.name,vr&&(vr.forceContextLoss(),vr.dispose(),vr=null),c}const aA={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class jh{constructor(){this.pluginCallbacks=[],this.register(function(t){return new hC(t)}),this.register(function(t){return new uC(t)}),this.register(function(t){return new fC(t)}),this.register(function(t){return new mC(t)}),this.register(function(t){return new gC(t)}),this.register(function(t){return new _C(t)}),this.register(function(t){return new dC(t)}),this.register(function(t){return new AC(t)}),this.register(function(t){return new pC(t)}),this.register(function(t){return new vC(t)}),this.register(function(t){return new EC(t)}),this.register(function(t){return new yC(t)}),this.register(function(t){return new xC(t)}),this.register(function(t){return new SC(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){const s=new cC,a=[];for(let o=0,l=this.pluginCallbacks.length;o<l;o++)a.push(this.pluginCallbacks[o](s));s.setPlugins(a),s.write(t,e,i).catch(n)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,i,s,e)})}}const YS=0,oA=1,KS=2,$S=3,JS=4,cc=5120,hc=5121,uc=5122,dc=5123,lA=5124,cA=5125,hA=5126,Ac=34962,jS=34963,ZS=9728,tC=9729,eC=9984,nC=9985,iC=9986,sC=9987,rC=33071,aC=33648,oC=10497,pc="KHR_mesh_quantization",on={};on[1003]=ZS,on[1004]=eC,on[1005]=iC,on[1006]=tC,on[1007]=nC,on[1008]=sC,on[1001]=rC,on[1e3]=oC,on[1002]=aC;const uA={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},lC=new Mt;function Er(r,t){return r.length===t.length&&r.every(function(e,n){return e===t[n]})}function Cm(r){return 4*Math.ceil(r/4)}function fc(r,t=0){const e=Cm(r.byteLength);if(e!==r.byteLength){const n=new Uint8Array(e);if(n.set(new Uint8Array(r)),t!==0)for(let i=r.byteLength;i<e;i++)n[i]=t;return n.buffer}return r}function dA(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function AA(r,t){if(r.toBlob!==void 0)return new Promise(n=>r.toBlob(n,t));let e;return t==="image/jpeg"?e=.92:t==="image/webp"&&(e=.8),r.convertToBlob({type:t,quality:e})}class cC{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+qo}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(t){this.plugins=t}async write(t,e,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(t),await Promise.all(this.pending);const i=this,s=i.buffers,a=i.json;n=i.options;const o=i.extensionsUsed,l=i.extensionsRequired,c=new Blob(s,{type:"application/octet-stream"}),h=Object.keys(o),u=Object.keys(l);if(h.length>0&&(a.extensionsUsed=h),u.length>0&&(a.extensionsRequired=u),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.binary===!0){const d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){const A=fc(d.result),m=new DataView(new ArrayBuffer(8));m.setUint32(0,A.byteLength,!0),m.setUint32(4,5130562,!0);const g=fc((p=JSON.stringify(a),new TextEncoder().encode(p).buffer),32);var p;const f=new DataView(new ArrayBuffer(8));f.setUint32(0,g.byteLength,!0),f.setUint32(4,1313821514,!0);const E=new ArrayBuffer(12),_=new DataView(E);_.setUint32(0,1179937895,!0),_.setUint32(4,2,!0);const y=12+f.byteLength+g.byteLength+m.byteLength+A.byteLength;_.setUint32(8,y,!0);const M=new Blob([E,f,g,m,A],{type:"application/octet-stream"}),C=new FileReader;C.readAsArrayBuffer(M),C.onloadend=function(){e(C.result)}}}else if(a.buffers&&a.buffers.length>0){const d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){const A=d.result;a.buffers[0].uri=A,e(a)}}else e(a)}serializeUserData(t,e){if(Object.keys(t.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const s=JSON.parse(JSON.stringify(t.userData));if(n.includeCustomExtensions&&s.gltfExtensions){e.extensions===void 0&&(e.extensions={});for(const a in s.gltfExtensions)e.extensions[a]=s.gltfExtensions[a],i[a]=!0;delete s.gltfExtensions}Object.keys(s).length>0&&(e.extras=s)}catch(s){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+s.message)}}getUID(t,e=!1){if(this.uids.has(t)===!1){const n=new Map;n.set(!0,this.uid++),n.set(!1,this.uid++),this.uids.set(t,n)}return this.uids.get(t).get(e)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;const e=new B;for(let n=0,i=t.count;n<i;n++)if(Math.abs(e.fromBufferAttribute(t,n).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){const e=this.cache;if(e.attributesNormalized.has(t))return e.attributesNormalized.get(t);const n=t.clone(),i=new B;for(let s=0,a=n.count;s<a;s++)i.fromBufferAttribute(n,s),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(s,i.x,i.y,i.z);return e.attributesNormalized.set(t,n),n}applyTextureTransform(t,e){let n=!1;const i={};e.offset.x===0&&e.offset.y===0||(i.offset=e.offset.toArray(),n=!0),e.rotation!==0&&(i.rotation=e.rotation,n=!0),e.repeat.x===1&&e.repeat.y===1||(i.scale=e.repeat.toArray(),n=!0),n&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(t,e){if(t===e)return t;function n(d){return d.colorSpace===me?function(A){return A<.04045?.0773993808*A:Math.pow(.9478672986*A+.0521327014,2.4)}:function(A){return A}}console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),t instanceof ts&&(t=xo(t)),e instanceof ts&&(e=xo(e));const i=t?t.image:null,s=e?e.image:null,a=Math.max(i?i.width:0,s?s.width:0),o=Math.max(i?i.height:0,s?s.height:0),l=dA();l.width=a,l.height=o;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,o);const h=c.getImageData(0,0,a,o);if(i){c.drawImage(i,0,0,a,o);const d=n(t),A=c.getImageData(0,0,a,o).data;for(let m=2;m<A.length;m+=4)h.data[m]=256*d(A[m]/256)}if(s){c.drawImage(s,0,0,a,o);const d=n(e),A=c.getImageData(0,0,a,o).data;for(let m=1;m<A.length;m+=4)h.data[m]=256*d(A[m]/256)}c.putImageData(h,0,0);const u=(t||e).clone();return u.source=new Nh(l),u.colorSpace=Cn,u.channel=(t||e).channel,t&&e&&t.channel!==e.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),u}processBuffer(t){const e=this.json,n=this.buffers;return e.buffers||(e.buffers=[{byteLength:0}]),n.push(t),0}processBufferView(t,e,n,i,s){const a=this.json;let o;switch(a.bufferViews||(a.bufferViews=[]),e){case cc:case hc:o=1;break;case uc:case dc:o=2;break;default:o=4}let l=t.itemSize*o;s===Ac&&(l=4*Math.ceil(l/4));const c=Cm(i*l),h=new DataView(new ArrayBuffer(c));let u=0;for(let A=n;A<n+i;A++){for(let m=0;m<t.itemSize;m++){let g;t.itemSize>4?g=t.array[A*t.itemSize+m]:(m===0?g=t.getX(A):m===1?g=t.getY(A):m===2?g=t.getZ(A):m===3&&(g=t.getW(A)),t.normalized===!0&&(g=po.normalize(g,t.array))),e===hA?h.setFloat32(u,g,!0):e===lA?h.setInt32(u,g,!0):e===cA?h.setUint32(u,g,!0):e===uc?h.setInt16(u,g,!0):e===dc?h.setUint16(u,g,!0):e===cc?h.setInt8(u,g):e===hc&&h.setUint8(u,g),u+=o}u%l!=0&&(u+=l-u%l)}const d={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return s!==void 0&&(d.target=s),s===Ac&&(d.byteStride=l),this.byteOffset+=c,a.bufferViews.push(d),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){const e=this,n=e.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){const s=new FileReader;s.readAsArrayBuffer(t),s.onloadend=function(){const a=fc(s.result),o={buffer:e.processBuffer(a),byteOffset:e.byteOffset,byteLength:a.byteLength};e.byteOffset+=a.byteLength,i(n.bufferViews.push(o)-1)}})}processAccessor(t,e,n,i){const s=this.json;let a;if(t.array.constructor===Float32Array)a=hA;else if(t.array.constructor===Int32Array)a=lA;else if(t.array.constructor===Uint32Array)a=cA;else if(t.array.constructor===Int16Array)a=uc;else if(t.array.constructor===Uint16Array)a=dc;else if(t.array.constructor===Int8Array)a=cc;else{if(t.array.constructor!==Uint8Array)throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);a=hc}if(n===void 0&&(n=0),i!==void 0&&i!==1/0||(i=t.count),i===0)return null;const o=function(u,d,A){const m={min:new Array(u.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(u.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let g=d;g<d+A;g++)for(let p=0;p<u.itemSize;p++){let f;u.itemSize>4?f=u.array[g*u.itemSize+p]:(p===0?f=u.getX(g):p===1?f=u.getY(g):p===2?f=u.getZ(g):p===3&&(f=u.getW(g)),u.normalized===!0&&(f=po.normalize(f,u.array))),m.min[p]=Math.min(m.min[p],f),m.max[p]=Math.max(m.max[p],f)}return m}(t,n,i);let l;e!==void 0&&(l=t===e.index?jS:Ac);const c=this.processBufferView(t,a,n,i,l),h={bufferView:c.id,byteOffset:c.byteOffset,componentType:a,count:i,max:o.max,min:o.min,type:{1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"}[t.itemSize]};return t.normalized===!0&&(h.normalized=!0),s.accessors||(s.accessors=[]),s.accessors.push(h)-1}processImage(t,e,n,i="image/png"){if(t!==null){const s=this,a=s.cache,o=s.json,l=s.options,c=s.pending;a.images.has(t)||a.images.set(t,{});const h=a.images.get(t),u=i+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];o.images||(o.images=[]);const d={mimeType:i},A=dA();A.width=Math.min(t.width,l.maxTextureSize),A.height=Math.min(t.height,l.maxTextureSize);const m=A.getContext("2d",{willReadFrequently:!0});if(n===!0&&(m.translate(0,A.height),m.scale(1,-1)),t.data!==void 0){e!==1023&&console.error("GLTFExporter: Only RGBAFormat is supported.",e),(t.width>l.maxTextureSize||t.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);const p=new Uint8ClampedArray(t.height*t.width*4);for(let f=0;f<p.length;f+=4)p[f+0]=t.data[f+0],p[f+1]=t.data[f+1],p[f+2]=t.data[f+2],p[f+3]=t.data[f+3];m.putImageData(new ImageData(p,t.width,t.height),0,0)}else{if(!(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas))throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");m.drawImage(t,0,0,A.width,A.height)}l.binary===!0?c.push(AA(A,i).then(p=>s.processBufferViewImage(p)).then(p=>{d.bufferView=p})):A.toDataURL!==void 0?d.uri=A.toDataURL(i):c.push(AA(A,i).then(p=>new FileReader().readAsDataURL(p)).then(p=>{d.uri=p}));const g=o.images.push(d)-1;return h[u]=g,g}throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){const e=this.json;e.samplers||(e.samplers=[]);const n={magFilter:on[t.magFilter],minFilter:on[t.minFilter],wrapS:on[t.wrapS],wrapT:on[t.wrapT]};return e.samplers.push(n)-1}processTexture(t){const e=this.options,n=this.cache,i=this.json;if(n.textures.has(t))return n.textures.get(t);i.textures||(i.textures=[]),t instanceof ts&&(t=xo(t,e.maxTextureSize));let s=t.userData.mimeType;s==="image/webp"&&(s="image/png");const a={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,s)};t.name&&(a.name=t.name),this._invokeAll(function(l){l.writeTexture&&l.writeTexture(t,a)});const o=i.textures.push(a)-1;return n.textures.set(t,o),o}processMaterial(t){const e=this.cache,n=this.json;if(e.materials.has(t))return e.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const s=t.color.toArray().concat([t.opacity]);if(Er(s,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=s),t.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=t.metalness,i.pbrMetallicRoughness.roughnessFactor=t.roughness):(i.pbrMetallicRoughness.metallicFactor=.5,i.pbrMetallicRoughness.roughnessFactor=.5),t.metalnessMap||t.roughnessMap){const o=this.buildMetalRoughTexture(t.metalnessMap,t.roughnessMap),l={index:this.processTexture(o),channel:o.channel};this.applyTextureTransform(l,o),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(t.map){const o={index:this.processTexture(t.map),texCoord:t.map.channel};this.applyTextureTransform(o,t.map),i.pbrMetallicRoughness.baseColorTexture=o}if(t.emissive){const o=t.emissive;if(Math.max(o.r,o.g,o.b)>0&&(i.emissiveFactor=t.emissive.toArray()),t.emissiveMap){const l={index:this.processTexture(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(l,t.emissiveMap),i.emissiveTexture=l}}if(t.normalMap){const o={index:this.processTexture(t.normalMap),texCoord:t.normalMap.channel};t.normalScale&&t.normalScale.x!==1&&(o.scale=t.normalScale.x),this.applyTextureTransform(o,t.normalMap),i.normalTexture=o}if(t.aoMap){const o={index:this.processTexture(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(o.strength=t.aoMapIntensity),this.applyTextureTransform(o,t.aoMap),i.occlusionTexture=o}t.transparent?i.alphaMode="BLEND":t.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=t.alphaTest),t.side===2&&(i.doubleSided=!0),t.name!==""&&(i.name=t.name),this.serializeUserData(t,i),this._invokeAll(function(o){o.writeMaterial&&o.writeMaterial(t,i)});const a=n.materials.push(i)-1;return e.materials.set(t,a),a}processMesh(t){const e=this.cache,n=this.json,i=[t.geometry.uuid];if(Array.isArray(t.material))for(let y=0,M=t.material.length;y<M;y++)i.push(t.material[y].uuid);else i.push(t.material.uuid);const s=i.join(":");if(e.meshes.has(s))return e.meshes.get(s);const a=t.geometry;let o;o=t.isLineSegments?oA:t.isLineLoop?KS:t.isLine?$S:t.isPoints?YS:t.material.wireframe?oA:JS;const l={},c={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},A=a.getAttribute("normal");A===void 0||this.isNormalizedNormalAttribute(A)||(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(A)));let m=null;for(let y in a.attributes){if(y.slice(0,5)==="morph")continue;const M=a.attributes[y];if(y=d[y]||y.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(y)||(y="_"+y),e.attributes.has(this.getUID(M))){c[y]=e.attributes.get(this.getUID(M));continue}m=null;const C=M.array;y!=="JOINTS_0"||C instanceof Uint16Array||C instanceof Uint8Array||(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),m=new ve(new Uint16Array(C),M.itemSize,M.normalized));const x=this.processAccessor(m||M,a);x!==null&&(y.startsWith("_")||this.detectMeshQuantization(y,M),c[y]=x,e.attributes.set(this.getUID(M),x))}if(A!==void 0&&a.setAttribute("normal",A),Object.keys(c).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){const y=[],M=[],C={};if(t.morphTargetDictionary!==void 0)for(const x in t.morphTargetDictionary)C[t.morphTargetDictionary[x]]=x;for(let x=0;x<t.morphTargetInfluences.length;++x){const T={};let k=!1;for(const v in a.morphAttributes){if(v!=="position"&&v!=="normal"){k||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),k=!0);continue}const I=a.morphAttributes[v][x],N=v.toUpperCase(),U=a.attributes[v];if(e.attributes.has(this.getUID(I,!0))){T[N]=e.attributes.get(this.getUID(I,!0));continue}const G=I.clone();if(!a.morphTargetsRelative)for(let q=0,L=I.count;q<L;q++)for(let Y=0;Y<I.itemSize;Y++)Y===0&&G.setX(q,I.getX(q)-U.getX(q)),Y===1&&G.setY(q,I.getY(q)-U.getY(q)),Y===2&&G.setZ(q,I.getZ(q)-U.getZ(q)),Y===3&&G.setW(q,I.getW(q)-U.getW(q));T[N]=this.processAccessor(G,a),e.attributes.set(this.getUID(U,!0),T[N])}u.push(T),y.push(t.morphTargetInfluences[x]),t.morphTargetDictionary!==void 0&&M.push(C[x])}l.weights=y,M.length>0&&(l.extras={},l.extras.targetNames=M)}const g=Array.isArray(t.material);if(g&&a.groups.length===0)return null;let p=!1;if(g&&a.index===null){const y=[];for(let M=0,C=a.attributes.position.count;M<C;M++)y[M]=M;a.setIndex(y),p=!0}const f=g?t.material:[t.material],E=g?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let y=0,M=E.length;y<M;y++){const C={mode:o,attributes:c};if(this.serializeUserData(a,C),u.length>0&&(C.targets=u),a.index!==null){let T=this.getUID(a.index);E[y].start===void 0&&E[y].count===void 0||(T+=":"+E[y].start+":"+E[y].count),e.attributes.has(T)?C.indices=e.attributes.get(T):(C.indices=this.processAccessor(a.index,a,E[y].start,E[y].count),e.attributes.set(T,C.indices)),C.indices===null&&delete C.indices}const x=this.processMaterial(f[E[y].materialIndex]);x!==null&&(C.material=x),h.push(C)}p===!0&&a.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),this._invokeAll(function(y){y.writeMesh&&y.writeMesh(t,l)});const _=n.meshes.push(l)-1;return e.meshes.set(s,_),_}detectMeshQuantization(t,e){if(this.extensionsUsed[pc])return;let n;switch(e.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}e.normalized&&(n+=" normalized");const i=t.split("_",1)[0];aA[i]&&aA[i].includes(n)&&(this.extensionsUsed[pc]=!0,this.extensionsRequired[pc]=!0)}processCamera(t){const e=this.json;e.cameras||(e.cameras=[]);const n=t.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:2*t.right,ymag:2*t.top,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:i.perspective={aspectRatio:t.aspect,yfov:po.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(i.name=t.type),e.cameras.push(i)-1}processAnimation(t,e){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]);const s=(t=jh.Utils.mergeMorphTargetTracks(t.clone(),e)).tracks,a=[],o=[];for(let l=0;l<s.length;++l){const c=s[l],h=Xt.parseTrackName(c.name);let u=Xt.findNode(e,h.nodeName);const d=uA[h.propertyName];if(h.objectName==="bones"&&(u=u.isSkinnedMesh===!0?u.skeleton.getBoneByName(h.objectIndex):void 0),!u||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name);continue}const A=1;let m,g=c.values.length/c.times.length;d===uA.morphTargetInfluences&&(g/=u.morphTargetInfluences.length),c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(m="CUBICSPLINE",g/=3):m=c.getInterpolation()===2300?"STEP":"LINEAR",o.push({input:this.processAccessor(new ve(c.times,A)),output:this.processAccessor(new ve(c.values,g)),interpolation:m}),a.push({sampler:o.length-1,target:{node:i.get(u),path:d}})}return n.animations.push({name:t.name||"clip_"+n.animations.length,samplers:o,channels:a}),n.animations.length-1}processSkin(t){const e=this.json,n=this.nodeMap,i=e.nodes[n.get(t)],s=t.skeleton;if(s===void 0)return null;const a=t.skeleton.bones[0];if(a===void 0)return null;const o=[],l=new Float32Array(16*s.bones.length),c=new Rt;for(let h=0;h<s.bones.length;++h)o.push(n.get(s.bones[h])),c.copy(s.boneInverses[h]),c.multiply(t.bindMatrix).toArray(l,16*h);return e.skins===void 0&&(e.skins=[]),e.skins.push({inverseBindMatrices:this.processAccessor(new ve(l,16)),joints:o,skeleton:n.get(a)}),i.skin=e.skins.length-1}processNode(t){const e=this.json,n=this.options,i=this.nodeMap;e.nodes||(e.nodes=[]);const s={};if(n.trs){const o=t.quaternion.toArray(),l=t.position.toArray(),c=t.scale.toArray();Er(o,[0,0,0,1])||(s.rotation=o),Er(l,[0,0,0])||(s.translation=l),Er(c,[1,1,1])||(s.scale=c)}else t.matrixAutoUpdate&&t.updateMatrix(),Er(t.matrix.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])===!1&&(s.matrix=t.matrix.elements);if(t.name!==""&&(s.name=String(t.name)),this.serializeUserData(t,s),t.isMesh||t.isLine||t.isPoints){const o=this.processMesh(t);o!==null&&(s.mesh=o)}else t.isCamera&&(s.camera=this.processCamera(t));if(t.isSkinnedMesh&&this.skins.push(t),t.children.length>0){const o=[];for(let l=0,c=t.children.length;l<c;l++){const h=t.children[l];if(h.visible||n.onlyVisible===!1){const u=this.processNode(h);u!==null&&o.push(u)}}o.length>0&&(s.children=o)}this._invokeAll(function(o){o.writeNode&&o.writeNode(t,s)});const a=e.nodes.push(s)-1;return i.set(t,a),a}processScene(t){const e=this.json,n=this.options;e.scenes||(e.scenes=[],e.scene=0);const i={};t.name!==""&&(i.name=t.name),e.scenes.push(i);const s=[];for(let a=0,o=t.children.length;a<o;a++){const l=t.children[a];if(l.visible||n.onlyVisible===!1){const c=this.processNode(l);c!==null&&s.push(c)}}s.length>0&&(i.nodes=s),this.serializeUserData(t,i)}processObjects(t){const e=new Ii;e.name="AuxScene";for(let n=0;n<t.length;n++)e.children.push(t[n]);this.processScene(e)}processInput(t){const e=this.options;t=t instanceof Array?t:[t],this._invokeAll(function(i){i.beforeParse&&i.beforeParse(t)});const n=[];for(let i=0;i<t.length;i++)t[i]instanceof Ii?this.processScene(t[i]):n.push(t[i]);n.length>0&&this.processObjects(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<e.animations.length;++i)this.processAnimation(e.animations[i],t[0]);this._invokeAll(function(i){i.afterParse&&i.afterParse(t)})}_invokeAll(t){for(let e=0,n=this.plugins.length;e<n;e++)t(this.plugins[e])}}class hC{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,e){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight)return void console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);const n=this.writer,i=n.json,s=n.extensionsUsed,a={};t.name&&(a.name=t.name),a.color=t.color.toArray(),a.intensity=t.intensity,t.isDirectionalLight?a.type="directional":t.isPointLight?(a.type="point",t.distance>0&&(a.range=t.distance)):t.isSpotLight&&(a.type="spot",t.distance>0&&(a.range=t.distance),a.spot={},a.spot.innerConeAngle=(1-t.penumbra)*t.angle,a.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),!t.target||t.target.parent===t&&t.target.position.x===0&&t.target.position.y===0&&t.target.position.z===-1||console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),s[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},s[this.name]=!0);const o=i.extensions[this.name].lights;o.push(a),e.extensions=e.extensions||{},e.extensions[this.name]={light:o.length-1}}}class uC{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}writeMaterial(t,e){if(!t.isMeshBasicMaterial)return;const n=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},n[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}}class dC{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}writeMaterial(t,e){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.clearcoatFactor=t.clearcoat,t.clearcoatMap){const a={index:n.processTexture(t.clearcoatMap),texCoord:t.clearcoatMap.channel};n.applyTextureTransform(a,t.clearcoatMap),s.clearcoatTexture=a}if(s.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){const a={index:n.processTexture(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,t.clearcoatRoughnessMap),s.clearcoatRoughnessTexture=a}if(t.clearcoatNormalMap){const a={index:n.processTexture(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(a.scale=t.clearcoatNormalScale.x),n.applyTextureTransform(a,t.clearcoatNormalMap),s.clearcoatNormalTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class AC{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}writeMaterial(t,e){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;const n=this.writer.extensionsUsed,i={};i.dispersion=t.dispersion,e.extensions=e.extensions||{},e.extensions[this.name]=i,n[this.name]=!0}}class pC{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}writeMaterial(t,e){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.iridescenceFactor=t.iridescence,t.iridescenceMap){const a={index:n.processTexture(t.iridescenceMap),texCoord:t.iridescenceMap.channel};n.applyTextureTransform(a,t.iridescenceMap),s.iridescenceTexture=a}if(s.iridescenceIor=t.iridescenceIOR,s.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],s.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){const a={index:n.processTexture(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};n.applyTextureTransform(a,t.iridescenceThicknessMap),s.iridescenceThicknessTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class fC{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}writeMaterial(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.transmissionFactor=t.transmission,t.transmissionMap){const a={index:n.processTexture(t.transmissionMap),texCoord:t.transmissionMap.channel};n.applyTextureTransform(a,t.transmissionMap),s.transmissionTexture=a}e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class mC{constructor(t){this.writer=t,this.name="KHR_materials_volume"}writeMaterial(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.thicknessFactor=t.thickness,t.thicknessMap){const a={index:n.processTexture(t.thicknessMap),texCoord:t.thicknessMap.channel};n.applyTextureTransform(a,t.thicknessMap),s.thicknessTexture=a}t.attenuationDistance!==1/0&&(s.attenuationDistance=t.attenuationDistance),s.attenuationColor=t.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class gC{constructor(t){this.writer=t,this.name="KHR_materials_ior"}writeMaterial(t,e){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;const n=this.writer.extensionsUsed,i={};i.ior=t.ior,e.extensions=e.extensions||{},e.extensions[this.name]=i,n[this.name]=!0}}class _C{constructor(t){this.writer=t,this.name="KHR_materials_specular"}writeMaterial(t,e){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(lC)&&!t.specularIntensityMap&&!t.specularColorMap)return;const n=this.writer,i=n.extensionsUsed,s={};if(t.specularIntensityMap){const a={index:n.processTexture(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};n.applyTextureTransform(a,t.specularIntensityMap),s.specularTexture=a}if(t.specularColorMap){const a={index:n.processTexture(t.specularColorMap),texCoord:t.specularColorMap.channel};n.applyTextureTransform(a,t.specularColorMap),s.specularColorTexture=a}s.specularFactor=t.specularIntensity,s.specularColorFactor=t.specularColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class vC{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}writeMaterial(t,e){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;const n=this.writer,i=n.extensionsUsed,s={};if(t.sheenRoughnessMap){const a={index:n.processTexture(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};n.applyTextureTransform(a,t.sheenRoughnessMap),s.sheenRoughnessTexture=a}if(t.sheenColorMap){const a={index:n.processTexture(t.sheenColorMap),texCoord:t.sheenColorMap.channel};n.applyTextureTransform(a,t.sheenColorMap),s.sheenColorTexture=a}s.sheenRoughnessFactor=t.sheenRoughness,s.sheenColorFactor=t.sheenColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class EC{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}writeMaterial(t,e){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;const n=this.writer,i=n.extensionsUsed,s={};if(t.anisotropyMap){const a={index:n.processTexture(t.anisotropyMap)};n.applyTextureTransform(a,t.anisotropyMap),s.anisotropyTexture=a}s.anisotropyStrength=t.anisotropy,s.anisotropyRotation=t.anisotropyRotation,e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class yC{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}writeMaterial(t,e){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;const n=this.writer.extensionsUsed,i={};i.emissiveStrength=t.emissiveIntensity,e.extensions=e.extensions||{},e.extensions[this.name]=i,n[this.name]=!0}}class xC{constructor(t){this.writer=t,this.name="EXT_materials_bump"}writeMaterial(t,e){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;const n=this.writer,i=n.extensionsUsed,s={};if(t.bumpMap){const a={index:n.processTexture(t.bumpMap),texCoord:t.bumpMap.channel};n.applyTextureTransform(a,t.bumpMap),s.bumpTexture=a}s.bumpFactor=t.bumpScale,e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class SC{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,e){if(!t.isInstancedMesh)return;const n=this.writer,i=t,s=new Float32Array(3*i.count),a=new Float32Array(4*i.count),o=new Float32Array(3*i.count),l=new Rt,c=new B,h=new $e,u=new B;for(let A=0;A<i.count;A++)i.getMatrixAt(A,l),l.decompose(c,h,u),c.toArray(s,3*A),h.toArray(a,4*A),u.toArray(o,3*A);const d={TRANSLATION:n.processAccessor(new ve(s,3)),ROTATION:n.processAccessor(new ve(a,4)),SCALE:n.processAccessor(new ve(o,3))};i.instanceColor&&(d._COLOR_0=n.processAccessor(i.instanceColor)),e.extensions=e.extensions||{},e.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}jh.Utils={insertKeyframe:function(r,t){const n=r.getValueSize(),i=new r.TimeBufferType(r.times.length+1),s=new r.ValueBufferType(r.values.length+n),a=r.createInterpolant(new r.ValueBufferType(n));let o;if(r.times.length===0){i[0]=t;for(let l=0;l<n;l++)s[l]=0;o=0}else if(t<r.times[0]){if(Math.abs(r.times[0]-t)<.001)return 0;i[0]=t,i.set(r.times,1),s.set(a.evaluate(t),0),s.set(r.values,n),o=0}else if(t>r.times[r.times.length-1]){if(Math.abs(r.times[r.times.length-1]-t)<.001)return r.times.length-1;i[i.length-1]=t,i.set(r.times,0),s.set(r.values,0),s.set(a.evaluate(t),r.values.length),o=i.length-1}else for(let l=0;l<r.times.length;l++){if(Math.abs(r.times[l]-t)<.001)return l;if(r.times[l]<t&&r.times[l+1]>t){i.set(r.times.slice(0,l+1),0),i[l+1]=t,i.set(r.times.slice(l+1),l+2),s.set(r.values.slice(0,(l+1)*n),0),s.set(a.evaluate(t),(l+1)*n),s.set(r.values.slice((l+1)*n),(l+2)*n),o=l+1;break}}return r.times=i,r.values=s,o},mergeMorphTargetTracks:function(r,t){const e=[],n={},i=r.tracks;for(let s=0;s<i.length;++s){let a=i[s];const o=Xt.parseTrackName(a.name),l=Xt.findNode(t,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){e.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(2301)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[o.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let u;if(n[l.uuid]===void 0){u=a.clone();const A=new u.ValueBufferType(c*u.times.length);for(let m=0;m<u.times.length;m++)A[m*c+h]=u.values[m];u.name=(o.nodeName||"")+".morphTargetInfluences",u.values=A,n[l.uuid]=u,e.push(u);continue}const d=a.createInterpolant(new a.ValueBufferType(1));u=n[l.uuid];for(let A=0;A<u.times.length;A++)u.values[A*c+h]=d.evaluate(u.times[A]);for(let A=0;A<a.times.length;A++){const m=this.insertKeyframe(u,a.times[A]);u.values[m*c+h]=a.values[A]}}return r.tracks=e,r}};/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=r=>r.material!==void 0&&r.userData&&r.userData.variantMaterials&&!!Array.from(r.userData.variantMaterials.values()).filter(t=>So(t.material)),So=r=>r&&r.isMaterial&&!Array.isArray(r);class CC{constructor(t){this.writer=t,this.name="KHR_materials_variants",this.variantNames=[]}beforeParse(t){const e=new Set;for(const n of t)n.traverse(i=>{if(!pA(i))return;const s=i.userData.variantMaterials,a=i.userData.variantData;for(const[o,l]of a){const c=s.get(l.index);c&&So(c.material)&&e.add(o)}});e.forEach(n=>this.variantNames.push(n))}writeMesh(t,e){if(!pA(t))return;const n=t.userData,i=n.variantMaterials,s=n.variantData,a=new Map,o=new Map,l=Array.from(s.values()).sort((u,d)=>u.index-d.index);for(const[u,d]of l.entries())o.set(d.index,u);for(const u of s.values()){const d=i.get(u.index);if(!d||!So(d.material))continue;const A=this.writer.processMaterial(d.material);a.has(A)||a.set(A,{material:A,variants:[]}),a.get(A).variants.push(o.get(u.index))}const c=Array.from(a.values()).map(u=>u.variants.sort((d,A)=>d-A)&&u).sort((u,d)=>u.material-d.material);if(c.length===0)return;const h=So(n.originalMaterial)?this.writer.processMaterial(n.originalMaterial):-1;for(const u of e.primitives)h>=0&&(u.material=h),u.extensions=u.extensions||{},u.extensions[this.name]={mappings:c}}afterParse(){if(this.variantNames.length===0)return;const t=this.writer.json;t.extensions=t.extensions||{};const e=this.variantNames.map(n=>({name:n}));t.extensions[this.name]={variants:e},this.writer.extensionsUsed[this.name]=!0}}class MC{constructor(t,e,n,i,s){this.xrLight=t,this.renderer=e,this.lightProbe=n,this.xrWebGLBinding=null,this.estimationStartCallback=s,this.frameCallback=this.onXRFrame.bind(this);const a=e.xr.getSession();if(i&&"XRWebGLBinding"in window){const o=new Oh(16);t.environment=o.texture;const l=e.getContext();switch(a.preferredReflectionFormat){case"srgba8":l.getExtension("EXT_sRGB");break;case"rgba16f":l.getExtension("OES_texture_half_float")}this.xrWebGLBinding=new XRWebGLBinding(a,l),this.lightProbe.addEventListener("reflectionchange",()=>{this.updateReflection()})}a.requestAnimationFrame(this.frameCallback)}updateReflection(){const t=this.renderer.properties.get(this.xrLight.environment);if(t){const e=this.xrWebGLBinding.getReflectionCubeMap(this.lightProbe);e&&(t.__webglTexture=e,this.xrLight.environment.needsPMREMUpdate=!0)}}onXRFrame(t,e){if(!this.xrLight)return;e.session.requestAnimationFrame(this.frameCallback);const n=e.getLightEstimate(this.lightProbe);if(n){this.xrLight.lightProbe.sh.fromArray(n.sphericalHarmonicsCoefficients),this.xrLight.lightProbe.intensity=1;const i=Math.max(1,Math.max(n.primaryLightIntensity.x,Math.max(n.primaryLightIntensity.y,n.primaryLightIntensity.z)));this.xrLight.directionalLight.color.setRGB(n.primaryLightIntensity.x/i,n.primaryLightIntensity.y/i,n.primaryLightIntensity.z/i),this.xrLight.directionalLight.intensity=i,this.xrLight.directionalLight.position.copy(n.primaryLightDirection),this.estimationStartCallback&&(this.estimationStartCallback(),this.estimationStartCallback=null)}}dispose(){this.xrLight=null,this.renderer=null,this.lightProbe=null,this.xrWebGLBinding=null}}class IC extends xi{constructor(t,e=!0){super(),this.lightProbe=new _x,this.lightProbe.intensity=0,this.add(this.lightProbe),this.directionalLight=new Xf,this.directionalLight.intensity=0,this.add(this.directionalLight),this.environment=null;let n=null,i=!1;t.xr.addEventListener("sessionstart",()=>{const s=t.xr.getSession();"requestLightProbe"in s&&s.requestLightProbe({reflectionFormat:s.preferredReflectionFormat}).then(a=>{n=new MC(this,t,a,e,()=>{i=!0,this.dispatchEvent({type:"estimationstart"})})})}),t.xr.addEventListener("sessionend",()=>{n&&(n.dispose(),n=null),i&&this.dispatchEvent({type:"estimationend"})}),this.dispose=()=>{n&&(n.dispose(),n=null),this.remove(this.lightProbe),this.lightProbe=null,this.remove(this.directionalLight),this.directionalLight=null,this.environment=null}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t=50){this.velocity=0,this.naturalFrequency=0,this.setDecayTime(t)}setDecayTime(t){this.naturalFrequency=1/Math.max(.001,t)}update(t,e,n,i){const s=2e-4*this.naturalFrequency;if(t==null||i===0||t===e&&this.velocity===0)return e;if(n<0)return t;const a=t-e,o=this.velocity+this.naturalFrequency*a,l=a+n*o,c=Math.exp(-this.naturalFrequency*n),h=(o-this.naturalFrequency*l)*c,u=-this.naturalFrequency*(h+o*c);return Math.abs(h)<s*Math.abs(i)&&u*a>=0?(this.velocity=0,e):(this.velocity=h,e+l*c)}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=.2,wC=Math.PI/24,fA=new Ut,Va=(r,t,e)=>{let n=t>0?e>0?0:-Math.PI/2:e>0?Math.PI/2:Math.PI;for(let i=0;i<=12;++i)r.push(t+.17*Math.cos(n),e+.17*Math.sin(n),0,t+Qs*Math.cos(n),e+Qs*Math.sin(n),0),n+=wC};class mA extends le{constructor(t,e){const n=new en,i=[],s=[],{size:a,boundingBox:o}=t,l=a.x/2,c=(e==="back"?a.y:a.z)/2;Va(s,l,c),Va(s,-l,c),Va(s,-l,-c),Va(s,l,-c);const h=s.length/3;for(let A=0;A<h-2;A+=2)i.push(A,A+1,A+3,A,A+3,A+2);const u=h-2;i.push(u,u+1,1,u,1,0),n.setAttribute("position",new cn(s,3)),n.setIndex(i),super(n),this.side=e;const d=this.material;switch(d.side=2,d.transparent=!0,d.opacity=0,this.goalOpacity=0,this.opacityDamper=new Ye,this.hitPlane=new le(new Qn(2*(l+Qs),2*(c+Qs))),this.hitPlane.visible=!1,this.hitPlane.material.side=2,this.add(this.hitPlane),this.hitBox=new le(new li(a.x+.4,a.y+Qs,a.z+.4)),this.hitBox.visible=!1,this.hitBox.material.side=2,this.add(this.hitBox),o.getCenter(this.position),e){case"bottom":this.rotateX(-Math.PI/2),this.shadowHeight=o.min.y,this.position.y=this.shadowHeight;break;case"back":this.shadowHeight=o.min.z,this.position.z=this.shadowHeight}t.target.add(this),this.hitBox.position.y=(a.y+Qs)/2+o.min.y,t.target.add(this.hitBox),this.offsetHeight=0}getHit(t,e,n){fA.set(e,-n),this.hitPlane.visible=!0;const i=t.positionAndNormalFromPoint(fA,this.hitPlane);return this.hitPlane.visible=!1,i==null?null:i.position}getExpandedHit(t,e,n){this.hitPlane.scale.set(1e3,1e3,1e3),this.hitPlane.updateMatrixWorld();const i=this.getHit(t,e,n);return this.hitPlane.scale.set(1,1,1),i}controllerIntersection(t,e){this.hitBox.visible=!0;const n=t.hitFromController(e,this.hitBox);return this.hitBox.visible=!1,n}set offsetHeight(t){t-=.001,this.side==="back"?this.position.z=this.shadowHeight+t:this.position.y=this.shadowHeight+t}get offsetHeight(){return this.side==="back"?this.position.z-this.shadowHeight:this.position.y-this.shadowHeight}set show(t){this.goalOpacity=t?.75:0}updateOpacity(t){const e=this.material;e.opacity=this.opacityDamper.update(e.opacity,this.goalOpacity,t,1),this.visible=e.opacity>0}dispose(){const{geometry:t,material:e}=this.hitPlane;t.dispose(),e.dispose(),this.hitBox.geometry.dispose(),this.hitBox.material.dispose(),this.geometry.dispose(),this.material.dispose(),this.hitBox.removeFromParent(),this.removeFromParent()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=(r,t)=>({type:"number",number:r,unit:t}),ai=(()=>{const r={};return t=>{const e=t;if(e in r)return r[e];const n=[];let i=0;for(;t;){if(++i>1e3){t="";break}const s=Mm(t),a=s.nodes[0];if(a==null||a.terms.length===0)break;n.push(a),t=s.remainingInput}return r[e]=n}})(),Mm=(()=>{const r=/^(\-\-|[a-z\u0240-\uffff])/i,t=/^([\*\+\/]|[\-]\s)/i,e=/^[\),]/;return n=>{const i=[];for(;n.length&&(n=n.trim(),!e.test(n));)if(n[0]==="("){const{nodes:s,remainingInput:a}=gA(n);n=a,i.push({type:"function",name:{type:"ident",value:"calc"},arguments:s})}else if(r.test(n)){const s=bC(n),a=s.nodes[0];if((n=s.remainingInput)[0]==="("){const{nodes:o,remainingInput:l}=gA(n);i.push({type:"function",name:a,arguments:o}),n=l}else i.push(a)}else if(t.test(n))i.push({type:"operator",value:n[0]}),n=n.slice(1);else{const{nodes:s,remainingInput:a}=n[0]==="#"?BC(n):TC(n);if(s.length===0)break;i.push(s[0]),n=a}return{nodes:[{type:"expression",terms:i}],remainingInput:n}}})(),bC=(()=>{const r=/[^a-z0-9_\-\u0240-\uffff]/i;return t=>{const e=t.match(r);return{nodes:[{type:"ident",value:e==null?t:t.substr(0,e.index)}],remainingInput:e==null?"":t.substr(e.index)}}})(),TC=(()=>{const r=/[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,t=/^[a-z%]+/i,e=/^(m|mm|cm|rad|deg|[%])$/;return n=>{const i=n.match(r),s=i==null?"0":i[0],a=(n=s==null?n:n.slice(s.length)).match(t);let o=a!=null&&a[0]!==""?a[0]:null;const l=a==null?n:n.slice(o.length);return o==null||e.test(o)||(o=null),{nodes:[{type:"number",number:parseFloat(s)||0,unit:o}],remainingInput:l}}})(),BC=(()=>{const r=/^[a-f0-9]*/i;return t=>{const e=(t=t.slice(1).trim()).match(r);return{nodes:e==null?[]:[{type:"hex",value:e[0]}],remainingInput:e==null?t:t.slice(e[0].length)}}})(),gA=r=>{const t=[];for(r=r.slice(1).trim();r.length;){const e=Mm(r);if(t.push(e.nodes[0]),(r=e.remainingInput.trim())[0]===",")r=r.slice(1).trim();else if(r[0]===")"){r=r.slice(1);break}}return{nodes:t,remainingInput:r}},_A=Symbol("visitedTypes");class RC{constructor(t){this[_A]=t}walk(t,e){const n=t.slice();for(;n.length;){const i=n.shift();switch(this[_A].indexOf(i.type)>-1&&e(i),i.type){case"expression":n.unshift(...i.terms);break;case"function":n.unshift(i.name,...i.arguments)}}}}const wi=Object.freeze({type:"number",number:0,unit:null}),Jo=(r,t=0)=>{let{number:e,unit:n}=r;if(isFinite(e)){if(r.unit==="rad"||r.unit==null)return r}else e=t,n="rad";return{type:"number",number:(n==="deg"&&e!=null?e:0)*Math.PI/180,unit:"rad"}},vA=(r,t=0)=>{let e,{number:n,unit:i}=r;if(isFinite(n)){if(r.unit==="m")return r}else n=t,i="m";switch(i){default:e=1;break;case"cm":e=.01;break;case"mm":e=.001}return{type:"number",number:e*n,unit:"m"}},Nn=(()=>{const r=e=>e,t={rad:r,deg:Jo,m:r,mm:vA,cm:vA};return(e,n=wi)=>{isFinite(e.number)||(e.number=n.number,e.unit=n.unit);const{unit:i}=e;if(i==null)return e;const s=t[i];return s==null?n:s(e)}})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Im,EA,yA;const rr=Symbol("evaluate"),Co=Symbol("lastValue");class _e{constructor(){this[Im]=null}static evaluatableFor(t,e=wi){if(t instanceof _e)return t;if(t.type==="number")return t.unit==="%"?new DC(t,e):t;switch(t.name.value){case"calc":return new PC(t,e);case"env":return new LC(t)}return wi}static evaluate(t){return t instanceof _e?t.evaluate():t}static isConstant(t){return!(t instanceof _e)||t.isConstant}static applyIntrinsics(t,e){const{basis:n,keywords:i}=e,{auto:s}=i;return n.map((a,o)=>{const l=s[o]==null?a:s[o];let c=t[o]?t[o]:l;if(c.type==="ident"){const h=c.value;h in i&&(c=i[h][o])}return c!=null&&c.type!=="ident"||(c=l),c.unit==="%"?Ge(c.number/100*a.number,a.unit):(c=Nn(c,a),c.unit!==a.unit?a:c)})}get isConstant(){return!1}evaluate(){return this.isConstant&&this[Co]!=null||(this[Co]=this[rr]()),this[Co]}}Im=Co;const xA=Symbol("percentage"),mc=Symbol("basis");class DC extends _e{constructor(t,e){super(),this[xA]=t,this[mc]=e}get isConstant(){return!0}[rr](){return Ge(this[xA].number/100*this[mc].number,this[mc].unit)}}const za=Symbol("identNode");class LC extends _e{constructor(t){super(),this[EA]=null;const e=t.arguments.length?t.arguments[0].terms[0]:null;e!=null&&e.type==="ident"&&(this[za]=e)}get isConstant(){return!1}[(EA=za,rr)](){return this[za]!=null&&this[za].value==="window-scroll-y"?{type:"number",number:window.pageYOffset/(Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight)||0,unit:null}:wi}}const FC=/[\*\/]/,Es=Symbol("evaluator");class PC extends _e{constructor(t,e=wi){if(super(),this[yA]=null,t.arguments.length!==1)return;const n=t.arguments[0].terms.slice(),i=[];for(;n.length;){const s=n.shift();if(i.length>0){const a=i[i.length-1];if(a.type==="operator"&&FC.test(a.value)){const o=i.pop(),l=i.pop();if(l==null)return;i.push(new CA(o,_e.evaluatableFor(l,e),_e.evaluatableFor(s,e)));continue}}i.push(s.type==="operator"?s:_e.evaluatableFor(s,e))}for(;i.length>2;){const[s,a,o]=i.splice(0,3);if(a.type!=="operator")return;i.unshift(new CA(a,_e.evaluatableFor(s,e),_e.evaluatableFor(o,e)))}i.length===1&&(this[Es]=i[0])}get isConstant(){return this[Es]==null||_e.isConstant(this[Es])}[(yA=Es,rr)](){return this[Es]!=null?_e.evaluate(this[Es]):wi}}const SA=Symbol("operator"),gc=Symbol("left"),_c=Symbol("right");class CA extends _e{constructor(t,e,n){super(),this[SA]=t,this[gc]=e,this[_c]=n}get isConstant(){return _e.isConstant(this[gc])&&_e.isConstant(this[_c])}[rr](){const t=Nn(_e.evaluate(this[gc])),e=Nn(_e.evaluate(this[_c])),{number:n,unit:i}=t,{number:s,unit:a}=e;if(a!=null&&i!=null&&a!=i)return wi;const o=i||a;let l;switch(this[SA].value){case"+":l=n+s;break;case"-":l=n-s;break;case"/":l=n/s;break;case"*":l=n*s;break;default:return wi}return{type:"number",number:l,unit:o}}}const vc=Symbol("evaluatables"),MA=Symbol("intrinsics");class wm extends _e{constructor(t,e){super(),this[MA]=e;const n=t[0],i=n!=null?n.terms:[];this[vc]=e.basis.map((s,a)=>{const o=i[a];return o==null?{type:"ident",value:"auto"}:o.type==="ident"?o:_e.evaluatableFor(o,s)})}get isConstant(){for(const t of this[vc])if(!_e.isConstant(t))return!1;return!0}[rr](){const t=this[vc].map(e=>_e.evaluate(e));return _e.applyIntrinsics(t,this[MA]).map(e=>e.number)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bm,Tm,Bm,Rm;const ys=Symbol("instances"),IA=Symbol("activateListener"),wA=Symbol("deactivateListener"),Ec=Symbol("notifyInstances"),bA=Symbol("notify"),TA=Symbol("callback");class Ln{constructor(t){this[TA]=t}static[Ec](){for(const t of Ln[ys])t[bA]()}static[(bm=ys,IA)](){window.addEventListener("scroll",this[Ec],{passive:!0})}static[wA](){window.removeEventListener("scroll",this[Ec])}observe(){Ln[ys].size===0&&Ln[IA](),Ln[ys].add(this)}disconnect(){Ln[ys].delete(this),Ln[ys].size===0&&Ln[wA]()}[bA](){this[TA]()}}Ln[bm]=new Set;const BA=Symbol("computeStyleCallback"),Dm=Symbol("astWalker"),kr=Symbol("dependencies"),Lm=Symbol("onScroll");class UC{constructor(t){this[Tm]={},this[Bm]=new RC(["function"]),this[Rm]=()=>{this[BA]({relatedState:"window-scroll"})},this[BA]=t}observeEffectsFor(t){const e={},n=this[kr];this[Dm].walk(t,i=>{const{name:s}=i,a=i.arguments[0].terms[0];if(s.value==="env"&&a!=null&&a.type==="ident"&&a.value==="window-scroll-y"&&e["window-scroll"]==null){const o="window-scroll"in n?n["window-scroll"]:new Ln(this[Lm]);o.observe(),delete n["window-scroll"],e["window-scroll"]=o}});for(const i in n)n[i].disconnect();this[kr]=e}dispose(){for(const t in this[kr])this[kr][t].disconnect()}}Tm=kr,Bm=Dm,Rm=Lm;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=r=>{const t=r.observeEffects||!1,e=r.intrinsics instanceof Function?r.intrinsics:()=>r.intrinsics;return(n,i)=>{const s=n.updated,a=n.connectedCallback,o=n.disconnectedCallback,l=Symbol(`${i}StyleEffector`),c=Symbol(`${i}StyleEvaluator`),h=Symbol(`${i}UpdateEvaluator`),u=Symbol(`${i}EvaluateAndSync`);Object.defineProperties(n,{[l]:{value:null,writable:!0},[c]:{value:null,writable:!0},[h]:{value:function(){const d=ai(this[i]);this[c]=new wm(d,e(this)),this[l]==null&&t&&(this[l]=new UC(()=>this[u]())),this[l]!=null&&this[l].observeEffectsFor(d)}},[u]:{value:function(){if(this[c]==null)return;const d=this[c].evaluate();this[r.updateHandler](d)}},updated:{value:function(d){d.has(i)&&(this[h](),this[u]()),s.call(this,d)}},connectedCallback:{value:function(){a.call(this),this.requestUpdate(i,this[i])}},disconnectedCallback:{value:function(){o.call(this),this[l]!=null&&(this[l].dispose(),this[l]=null)}}})}},Fm=r=>r<.5?2*r*r:(4-2*r)*r-1,NC=(r,t,e=Fm)=>n=>r+(t-r)*e(n),Os=r=>{const t=[],e=[];let n=r.initialValue;for(let i=0;i<r.keyframes.length;++i){const s=r.keyframes[i],{value:a,frames:o}=s,l=s.ease||Fm,c=NC(n,a,l);t.push(c),e.push(o),n=a}return((i,s)=>{const a=s.map((o=0,l=>o+=l));var o;return l=>{l=Pn(l,0,1),l*=a[a.length-1];const c=a.findIndex(d=>d>=l),h=c<1?0:a[c-1],u=a[c];return i[c]((l-h)/(u-h))}})(t,e)};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me=function(r,t,e,n){for(var i,s=arguments.length,a=s<3?t:n,o=r.length-1;o>=0;o--)(i=r[o])&&(a=(s<3?i(a):s>3?i(t,e,a):i(t,e))||a);return s>3&&a&&Object.defineProperty(t,e,a),a};const QC=Os({initialValue:0,keyframes:[{frames:5,value:-1},{frames:1,value:-1},{frames:8,value:1},{frames:1,value:1},{frames:5,value:0},{frames:18,value:0}]}),OC=Os({initialValue:0,keyframes:[{frames:1,value:1},{frames:5,value:1},{frames:1,value:0},{frames:6,value:0}]}),Pm="0deg 75deg 105%",kC=["front","right","back","left"],GC=["upper-","","lower-"],Wa="auto",HC="basic",RA="wiggle",VC="none",DA=()=>({basis:[Jo(Ge(30,"deg"))],keywords:{auto:[null]}}),zC=()=>({basis:[Jo(Ge(12,"deg"))],keywords:{auto:[null]}}),Um=(()=>{const r=ai(Pm)[0].terms,t=Nn(r[0]),e=Nn(r[1]);return n=>{const i=n[st].idealCameraDistance();return{basis:[t,e,Ge(i,"m")],keywords:{auto:[null,null,Ge(105,"%")]}}}})(),WC=r=>{const t=2.2*r[st].boundingSphere.radius;return{basis:[Ge(-1/0,"rad"),Ge(0,"rad"),Ge(t,"m")],keywords:{auto:[null,null,null]}}},qC=r=>{const t=Um(r),e=new wm([],t).evaluate()[2];return{basis:[Ge(1/0,"rad"),Ge(Math.PI,"rad"),Ge(e,"m")],keywords:{auto:[null,null,null]}}},XC=r=>{const t=r[st].boundingBox.getCenter(new B);return{basis:[Ge(t.x,"m"),Ge(t.y,"m"),Ge(t.z,"m")],keywords:{auto:[null,null,null]}}},Nm=Math.PI/2,YC=Math.PI/3,KC=Nm/2,$C=2*Math.PI,se=Symbol("controls"),Mo=Symbol("panElement"),yc=Symbol("promptElement"),qa=Symbol("promptAnimatedContainer"),xc=Symbol("fingerAnimatedContainers"),Xa=Symbol("deferInteractionPrompt"),LA=Symbol("updateAria"),Jn=Symbol("a11y"),FA=Symbol("updateA11y"),PA=Symbol("updateCameraForRadius"),xs=Symbol("cancelPrompts"),Sc=Symbol("onChange"),yr=Symbol("onPointerChange"),Qi=Symbol("waitingToPromptUser"),Ya=Symbol("userHasInteracted"),Ss=Symbol("promptElementVisibleTime"),xr=Symbol("lastPromptOffset"),Ka=Symbol("cancellationSource"),Cc=Symbol("lastSpherical"),Sr=Symbol("jumpCamera"),Mc=Symbol("initialized"),Cr=Symbol("maintainThetaPhi"),UA=Symbol("syncCameraOrbit"),NA=Symbol("syncFieldOfView"),QA=Symbol("syncCameraTarget"),OA=Symbol("syncMinCameraOrbit"),kA=Symbol("syncMaxCameraOrbit"),GA=Symbol("syncMinFieldOfView"),HA=Symbol("syncMaxFieldOfView"),JC=new Ut,VA=new B,zA=Object.freeze({minimumRadius:0,maximumRadius:1/0,minimumPolarAngle:0,maximumPolarAngle:Math.PI,minimumAzimuthalAngle:-1/0,maximumAzimuthalAngle:1/0,minimumFieldOfView:10,maximumFieldOfView:45,touchAction:"none"}),$a=Math.PI/8,Ic=.04,Ee={USER_INTERACTION:"user-interaction",NONE:"none",AUTOMATIC:"automatic"};class jC extends Tn{constructor(t,e,n){super(),this.camera=t,this.element=e,this.scene=n,this.orbitSensitivity=1,this.zoomSensitivity=1,this.panSensitivity=1,this.inputSensitivity=1,this.changeSource=Ee.NONE,this._interactionEnabled=!1,this._disableZoom=!1,this.isUserPointing=!1,this.enablePan=!0,this.enableTap=!0,this.panProjection=new Nt,this.panPerPixel=0,this.spherical=new go,this.goalSpherical=new go,this.thetaDamper=new Ye,this.phiDamper=new Ye,this.radiusDamper=new Ye,this.logFov=Math.log(zA.maximumFieldOfView),this.goalLogFov=this.logFov,this.fovDamper=new Ye,this.touchMode=null,this.pointers=[],this.startTime=0,this.startPointerPosition={clientX:0,clientY:0},this.lastSeparation=0,this.touchDecided=!1,this.onContext=i=>{if(this.enablePan)i.preventDefault();else for(const s of this.pointers)this.onPointerUp(new PointerEvent("pointercancel",Object.assign(Object.assign({},this.startPointerPosition),{pointerId:s.id})))},this.touchModeZoom=(i,s)=>{if(!this._disableZoom){const a=this.twoTouchDistance(this.pointers[0],this.pointers[1]),o=Ic*this.zoomSensitivity*(this.lastSeparation-a)*50/this.scene.height;this.lastSeparation=a,this.userAdjustOrbit(0,0,o)}this.panPerPixel>0&&this.movePan(i,s)},this.disableScroll=i=>{i.preventDefault()},this.touchModeRotate=(i,s)=>{const{touchAction:a}=this._options;if(!this.touchDecided&&a!=="none"){this.touchDecided=!0;const o=Math.abs(i),l=Math.abs(s);if(this.changeSource===Ee.USER_INTERACTION&&(a==="pan-y"&&l>o||a==="pan-x"&&o>l))return void(this.touchMode=null);this.element.addEventListener("touchmove",this.disableScroll,{passive:!1})}this.handleSinglePointerMove(i,s)},this.onPointerDown=i=>{if(this.pointers.length>2)return;const{element:s}=this;this.pointers.length===0&&(s.addEventListener("pointermove",this.onPointerMove),s.addEventListener("pointerup",this.onPointerUp),this.touchMode=null,this.touchDecided=!1,this.startPointerPosition.clientX=i.clientX,this.startPointerPosition.clientY=i.clientY,this.startTime=performance.now());try{s.setPointerCapture(i.pointerId)}catch{}this.pointers.push({clientX:i.clientX,clientY:i.clientY,id:i.pointerId}),this.isUserPointing=!1,i.pointerType==="touch"?(this.changeSource=i.altKey?Ee.AUTOMATIC:Ee.USER_INTERACTION,this.onTouchChange(i)):(this.changeSource=Ee.USER_INTERACTION,this.onMouseDown(i)),this.changeSource===Ee.USER_INTERACTION&&this.dispatchEvent({type:"user-interaction"})},this.onPointerMove=i=>{const s=this.pointers.find(c=>c.id===i.pointerId);if(s==null)return;if(i.pointerType==="mouse"&&i.buttons===0)return void this.onPointerUp(i);const a=this.pointers.length,o=(i.clientX-s.clientX)/a,l=(i.clientY-s.clientY)/a;o===0&&l===0||(s.clientX=i.clientX,s.clientY=i.clientY,i.pointerType==="touch"?(this.changeSource=i.altKey?Ee.AUTOMATIC:Ee.USER_INTERACTION,this.touchMode!==null&&this.touchMode(o,l)):(this.changeSource=Ee.USER_INTERACTION,this.panPerPixel>0?this.movePan(o,l):this.handleSinglePointerMove(o,l)))},this.onPointerUp=i=>{const{element:s}=this,a=this.pointers.findIndex(o=>o.id===i.pointerId);a!==-1&&this.pointers.splice(a,1),this.panPerPixel>0&&!i.altKey&&this.resetRadius(),this.pointers.length===0?(s.removeEventListener("pointermove",this.onPointerMove),s.removeEventListener("pointerup",this.onPointerUp),s.removeEventListener("touchmove",this.disableScroll),this.enablePan&&this.enableTap&&this.recenter(i)):this.touchMode!==null&&this.onTouchChange(i),this.scene.element[Mo].style.opacity=0,s.style.cursor="grab",this.panPerPixel=0,this.isUserPointing&&this.dispatchEvent({type:"pointer-change-end"})},this.onWheel=i=>{this.changeSource=Ee.USER_INTERACTION;const s=i.deltaY*(i.deltaMode==1?18:1)*Ic*this.zoomSensitivity/30;this.userAdjustOrbit(0,0,s),i.preventDefault(),this.dispatchEvent({type:"user-interaction"})},this.onKeyDown=i=>{const{changeSource:s}=this;this.changeSource=Ee.USER_INTERACTION,(i.shiftKey&&this.enablePan?this.panKeyCodeHandler(i):this.orbitZoomKeyCodeHandler(i))?(i.preventDefault(),this.dispatchEvent({type:"user-interaction"})):this.changeSource=s},this._options=Object.assign({},zA),this.setOrbit(0,Math.PI/2,1),this.setFieldOfView(100),this.jumpToGoal()}get interactionEnabled(){return this._interactionEnabled}enableInteraction(){if(this._interactionEnabled===!1){const{element:t}=this;t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointercancel",this.onPointerUp),this._disableZoom||t.addEventListener("wheel",this.onWheel),t.addEventListener("keydown",this.onKeyDown),t.addEventListener("touchmove",()=>{},{passive:!1}),t.addEventListener("contextmenu",this.onContext),this.element.style.cursor="grab",this._interactionEnabled=!0,this.updateTouchActionStyle()}}disableInteraction(){if(this._interactionEnabled===!0){const{element:t}=this;t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointermove",this.onPointerMove),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointercancel",this.onPointerUp),t.removeEventListener("wheel",this.onWheel),t.removeEventListener("keydown",this.onKeyDown),t.removeEventListener("contextmenu",this.onContext),t.style.cursor="",this.touchMode=null,this._interactionEnabled=!1,this.updateTouchActionStyle()}}get options(){return this._options}set disableZoom(t){this._disableZoom!=t&&(this._disableZoom=t,t===!0?this.element.removeEventListener("wheel",this.onWheel):this.element.addEventListener("wheel",this.onWheel),this.updateTouchActionStyle())}getCameraSpherical(t=new go){return t.copy(this.spherical)}getFieldOfView(){return this.camera.fov}applyOptions(t){Object.assign(this._options,t),this.setOrbit(),this.setFieldOfView(Math.exp(this.goalLogFov))}updateNearFar(t,e){this.camera.far=e===0?2:e,this.camera.near=Math.max(t,this.camera.far/1e3),this.camera.updateProjectionMatrix()}updateAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}setOrbit(t=this.goalSpherical.theta,e=this.goalSpherical.phi,n=this.goalSpherical.radius){const{minimumAzimuthalAngle:i,maximumAzimuthalAngle:s,minimumPolarAngle:a,maximumPolarAngle:o,minimumRadius:l,maximumRadius:c}=this._options,{theta:h,phi:u,radius:d}=this.goalSpherical,A=Pn(t,i,s);isFinite(i)||isFinite(s)||(this.spherical.theta=this.wrapAngle(this.spherical.theta-A)+A);const m=Pn(e,a,o),g=Pn(n,l,c);return(A!==h||m!==u||g!==d)&&!!(isFinite(A)&&isFinite(m)&&isFinite(g))&&(this.goalSpherical.theta=A,this.goalSpherical.phi=m,this.goalSpherical.radius=g,this.goalSpherical.makeSafe(),!0)}setRadius(t){this.goalSpherical.radius=t,this.setOrbit()}setFieldOfView(t){const{minimumFieldOfView:e,maximumFieldOfView:n}=this._options;t=Pn(t,e,n),this.goalLogFov=Math.log(t)}setDamperDecayTime(t){this.thetaDamper.setDecayTime(t),this.phiDamper.setDecayTime(t),this.radiusDamper.setDecayTime(t),this.fovDamper.setDecayTime(t)}adjustOrbit(t,e,n){const{theta:i,phi:s,radius:a}=this.goalSpherical,{minimumRadius:o,maximumRadius:l,minimumFieldOfView:c,maximumFieldOfView:h}=this._options,u=this.spherical.theta-i,d=Math.PI-.001,A=i-Pn(t,-d-u,d-u),m=s-e,g=n===0?0:((n>0?l:o)-a)/(Math.log(n>0?h:c)-this.goalLogFov),p=a+n*(isFinite(g)?g:2*(l-o));if(this.setOrbit(A,m,p),n!==0){const f=this.goalLogFov+n;this.setFieldOfView(Math.exp(f))}}jumpToGoal(){this.update(0,1e4)}update(t,e){if(this.isStationary())return!1;const{maximumPolarAngle:n,maximumRadius:i}=this._options,s=this.spherical.theta-this.goalSpherical.theta;return Math.abs(s)>Math.PI&&!isFinite(this._options.minimumAzimuthalAngle)&&!isFinite(this._options.maximumAzimuthalAngle)&&(this.spherical.theta-=2*Math.sign(s)*Math.PI),this.spherical.theta=this.thetaDamper.update(this.spherical.theta,this.goalSpherical.theta,e,Math.PI),this.spherical.phi=this.phiDamper.update(this.spherical.phi,this.goalSpherical.phi,e,n),this.spherical.radius=this.radiusDamper.update(this.spherical.radius,this.goalSpherical.radius,e,i),this.logFov=this.fovDamper.update(this.logFov,this.goalLogFov,e,1),this.moveCamera(),!0}updateTouchActionStyle(){const{style:t}=this.element;if(this._interactionEnabled){const{touchAction:e}=this._options;this._disableZoom&&e!=="none"?t.touchAction="manipulation":t.touchAction=e}else t.touchAction=""}isStationary(){return this.goalSpherical.theta===this.spherical.theta&&this.goalSpherical.phi===this.spherical.phi&&this.goalSpherical.radius===this.spherical.radius&&this.goalLogFov===this.logFov}moveCamera(){this.spherical.makeSafe(),this.camera.position.setFromSpherical(this.spherical),this.camera.setRotationFromEuler(new mn(this.spherical.phi-Math.PI/2,this.spherical.theta,0,"YXZ")),this.camera.fov!==Math.exp(this.logFov)&&(this.camera.fov=Math.exp(this.logFov),this.camera.updateProjectionMatrix())}userAdjustOrbit(t,e,n){this.adjustOrbit(t*this.orbitSensitivity*this.inputSensitivity,e*this.orbitSensitivity*this.inputSensitivity,n*this.inputSensitivity)}wrapAngle(t){const e=(t+Math.PI)/(2*Math.PI);return 2*(e-Math.floor(e))*Math.PI-Math.PI}pixelLengthToSphericalAngle(t){return 2*Math.PI*t/this.scene.height}twoTouchDistance(t,e){const{clientX:n,clientY:i}=t,{clientX:s,clientY:a}=e,o=s-n,l=a-i;return Math.sqrt(o*o+l*l)}handleSinglePointerMove(t,e){const n=this.pixelLengthToSphericalAngle(t),i=this.pixelLengthToSphericalAngle(e);this.isUserPointing===!1&&(this.isUserPointing=!0,this.dispatchEvent({type:"pointer-change-start"})),this.userAdjustOrbit(n,i,0)}initializePan(){const{theta:t,phi:e}=this.spherical,n=t-this.scene.yaw;this.panPerPixel=.018*this.panSensitivity/this.scene.height,this.panProjection.set(-Math.cos(n),-Math.cos(e)*Math.sin(n),0,0,Math.sin(e),0,Math.sin(n),-Math.cos(e)*Math.cos(n),0)}movePan(t,e){const{scene:n}=this,i=VA.set(t,e,0).multiplyScalar(this.inputSensitivity),s=this.spherical.radius*Math.exp(this.logFov)*this.panPerPixel;i.multiplyScalar(s);const a=n.getTarget();a.add(i.applyMatrix3(this.panProjection)),n.boundingSphere.clampPoint(a,a),n.setTarget(a.x,a.y,a.z)}recenter(t){if(performance.now()>this.startTime+300||Math.abs(t.clientX-this.startPointerPosition.clientX)>2||Math.abs(t.clientY-this.startPointerPosition.clientY)>2)return;const{scene:e}=this,n=e.positionAndNormalFromPoint(e.getNDC(t.clientX,t.clientY));if(n==null){const{cameraTarget:i}=e.element;e.element.cameraTarget="",e.element.cameraTarget=i,this.userAdjustOrbit(0,0,1)}else e.target.worldToLocal(n.position),e.setTarget(n.position.x,n.position.y,n.position.z)}resetRadius(){const{scene:t}=this,e=t.positionAndNormalFromPoint(JC.set(0,0));if(e==null)return;t.target.worldToLocal(e.position);const n=t.getTarget(),{theta:i,phi:s}=this.spherical,a=i-t.yaw,o=VA.set(Math.sin(s)*Math.sin(a),Math.cos(s),Math.sin(s)*Math.cos(a)),l=o.dot(e.position.sub(n));n.add(o.multiplyScalar(l)),t.setTarget(n.x,n.y,n.z),this.setOrbit(void 0,void 0,this.goalSpherical.radius-l)}onTouchChange(t){if(this.pointers.length===1)this.touchMode=this.touchModeRotate;else{if(this._disableZoom)return this.touchMode=null,void this.element.removeEventListener("touchmove",this.disableScroll);this.touchMode=this.touchDecided&&this.touchMode===null?null:this.touchModeZoom,this.touchDecided=!0,this.element.addEventListener("touchmove",this.disableScroll,{passive:!1}),this.lastSeparation=this.twoTouchDistance(this.pointers[0],this.pointers[1]),this.enablePan&&this.touchMode!=null&&(this.initializePan(),t.altKey||(this.scene.element[Mo].style.opacity=1))}}onMouseDown(t){this.panPerPixel=0,this.enablePan&&(t.button===2||t.ctrlKey||t.metaKey||t.shiftKey)&&(this.initializePan(),this.scene.element[Mo].style.opacity=1),this.element.style.cursor="grabbing"}orbitZoomKeyCodeHandler(t){let e=!0;switch(t.key){case"PageUp":this.userAdjustOrbit(0,0,Ic*this.zoomSensitivity);break;case"PageDown":this.userAdjustOrbit(0,0,-.04*this.zoomSensitivity);break;case"ArrowUp":this.userAdjustOrbit(0,-$a,0);break;case"ArrowDown":this.userAdjustOrbit(0,$a,0);break;case"ArrowLeft":this.userAdjustOrbit(-$a,0,0);break;case"ArrowRight":this.userAdjustOrbit($a,0,0);break;default:e=!1}return e}panKeyCodeHandler(t){this.initializePan();let e=!0;switch(t.key){case"ArrowUp":this.movePan(0,-10);break;case"ArrowDown":this.movePan(0,10);break;case"ArrowLeft":this.movePan(-10,0);break;case"ArrowRight":this.movePan(10,0);break;default:e=!1}return e}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=150,Io="not-presenting",Qm="session-started",ZC="object-placed",tM="failed",Om="tracking",eM="not-tracking",Mr=new B,Ms=new $e,nM=new Rt,iM=new B,sM=new Be(45,1,.1,100),WA=new en().setFromPoints([new B(0,0,0),new B(0,0,-1)]),rM=new li;class aM extends Tn{constructor(t){super(),this.renderer=t,this.currentSession=null,this.placeOnWall=!1,this.placementBox=null,this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.initialHitSource=null,this.transientHitTestSource=null,this.inputSource=null,this._presentedScene=null,this.resolveCleanup=null,this.exitWebXRButtonContainer=null,this.overlay=null,this.xrLight=null,this.xrMode=null,this.controller1=null,this.controller2=null,this.selectedController=null,this.tracking=!0,this.frames=0,this.initialized=!1,this.oldTarget=new B,this.placementComplete=!1,this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.lastDragPosition=new B,this.relativeOrientation=new $e,this.scaleLine=new $r(WA),this.firstRatio=0,this.lastAngle=0,this.goalPosition=new B,this.goalYaw=0,this.goalScale=1,this.xDamper=new Ye,this.yDamper=new Ye,this.zDamper=new Ye,this.yawDamper=new Ye,this.pitchDamper=new Ye,this.rollDamper=new Ye,this.scaleDamper=new Ye,this.onExitWebXRButtonContainerClick=()=>this.stopPresenting(),this.onControllerSelectStart=e=>{const n=this.presentedScene,i=e.target;if(this.placementBox.controllerIntersection(n,i)!=null)this.selectedController!=null&&(this.selectedController.userData.line.visible=!1,n.canScale&&(this.isTwoFingering=!0,this.firstRatio=this.controllerSeparation()/n.pivot.scale.x,this.scaleLine.visible=!0)),i.attach(n.pivot),this.selectedController=i,n.setShadowIntensity(.01);else{const s=i===this.controller1?this.controller2:this.controller1;this.relativeOrientation.copy(i.quaternion).invert().multiply(n.pivot.getWorldQuaternion(Ms)),s.userData.turning=!1,i.userData.turning=!0,i.userData.line.visible=!1}},this.onControllerSelectEnd=e=>{const n=e.target;if(n.userData.turning=!1,n.userData.line.visible=!0,this.isTwoFingering=!1,this.scaleLine.visible=!1,this.selectedController!=null&&this.selectedController!=n)return;const i=this.presentedScene;i.attach(i.pivot),this.selectedController=null,this.goalYaw=Math.atan2(i.pivot.matrix.elements[8],i.pivot.matrix.elements[10]),this.goalPosition.x=i.pivot.position.x,this.goalPosition.z=i.pivot.position.z},this.onUpdateScene=()=>{this.placementBox!=null&&this.isPresenting&&(this.placementBox.dispose(),this.placementBox=new mA(this.presentedScene,this.placeOnWall?"back":"bottom"))},this.onSelectStart=e=>{const n=this.transientHitTestSource;if(n==null)return;const i=this.frame.getHitTestResultsForTransientInput(n),s=this.presentedScene,a=this.placementBox;if(i.length===1){this.inputSource=e.inputSource;const{axes:o}=this.inputSource.gamepad,l=a.getHit(this.presentedScene,o[0],o[1]);a.show=!0,l!=null?(this.isTranslating=!0,this.lastDragPosition.copy(l)):this.placeOnWall===!1&&(this.isRotating=!0,this.lastAngle=1.5*o[0])}else if(i.length===2){a.show=!0,this.isTwoFingering=!0;const{separation:o}=this.fingerPolar(i);this.firstRatio=o/s.pivot.scale.x}},this.onSelectEnd=()=>{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.inputSource=null,this.goalPosition.y+=this.placementBox.offsetHeight*this.presentedScene.scale.x,this.placementBox.show=!1},this.threeRenderer=t.threeRenderer,this.threeRenderer.xr.enabled=!0}async resolveARSession(){Od();const t=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","light-estimation"],domOverlay:this.overlay?{root:this.overlay}:void 0});return this.threeRenderer.xr.setReferenceSpaceType("local"),await this.threeRenderer.xr.setSession(t),this.threeRenderer.xr.cameraAutoUpdate=!1,t}get presentedScene(){return this._presentedScene}async supportsPresentation(){try{return Od(),await navigator.xr.isSessionSupported("immersive-ar")}catch(t){return console.warn("Request to present in WebXR denied:"),console.warn(t),console.warn("Falling back to next ar-mode"),!1}}async present(t,e=!1){this.isPresenting&&console.warn("Cannot present while a model is already presenting");let n=new Promise((c,h)=>{requestAnimationFrame(()=>c())});t.setHotspotsVisibility(!1),t.queueRender(),await n,this._presentedScene=t,this.overlay=t.element.shadowRoot.querySelector("div.default"),e===!0&&(this.xrLight=new IC(this.threeRenderer),this.xrLight.addEventListener("estimationstart",()=>{if(!this.isPresenting||this.xrLight==null)return;const c=this.presentedScene;c.add(this.xrLight),c.environment=this.xrLight.environment}));const i=await this.resolveARSession();i.addEventListener("end",()=>{this.postSessionCleanup()},{once:!0});const s=t.element.shadowRoot.querySelector(".slot.exit-webxr-ar-button");s.classList.add("enabled"),s.addEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=s;const a=await i.requestReferenceSpace("viewer");this.xrMode=i.interactionMode,this.tracking=!0,this.frames=0,this.initialized=!1,this.turntableRotation=t.yaw,this.goalYaw=t.yaw,this.goalScale=1,t.setBackground(null),this.oldShadowIntensity=t.shadowIntensity,t.setShadowIntensity(.01),this.oldTarget.copy(t.getTarget()),t.element.addEventListener("load",this.onUpdateScene);const o=20*Math.PI/180,l=this.placeOnWall===!0?void 0:new XRRay(new DOMPoint(0,0,0),{x:0,y:-Math.sin(o),z:-Math.cos(o)});i.requestHitTestSource({space:a,offsetRay:l}).then(c=>{this.initialHitSource=c}),this.xrMode!=="screen-space"&&(this.setupControllers(),this.xDamper.setDecayTime(Cs),this.yDamper.setDecayTime(Cs),this.zDamper.setDecayTime(Cs),this.yawDamper.setDecayTime(Cs),this.pitchDamper.setDecayTime(Cs),this.rollDamper.setDecayTime(Cs)),this.currentSession=i,this.placementBox=new mA(t,this.placeOnWall?"back":"bottom"),this.placementComplete=!1,this.lastTick=performance.now(),this.dispatchEvent({type:"status",status:Qm})}setupControllers(){this.controller1=this.threeRenderer.xr.getController(0),this.controller1.addEventListener("selectstart",this.onControllerSelectStart),this.controller1.addEventListener("selectend",this.onControllerSelectEnd),this.controller2=this.threeRenderer.xr.getController(1),this.controller2.addEventListener("selectstart",this.onControllerSelectStart),this.controller2.addEventListener("selectend",this.onControllerSelectEnd);const t=this.presentedScene;if(t.add(this.controller1),t.add(this.controller2),!this.controller1.userData.line){const e=new $r(WA);e.name="line",e.scale.z=5,this.controller1.userData.turning=!1,this.controller1.userData.line=e,this.controller1.add(e),this.controller2.userData.turning=!1;const n=e.clone();this.controller2.userData.line=n,this.controller2.add(n),this.scaleLine.name="scale line",this.scaleLine.visible=!1,this.controller1.add(this.scaleLine);const{size:i}=t,s=.1/Math.max(i.x,i.y,i.z),a=new le(rM);a.name="box",a.scale.copy(i).multiplyScalar(s),a.visible=!1,this.controller1.userData.box=a,t.add(a);const o=a.clone();this.controller2.userData.box=o,t.add(o)}}hover(t){if(this.xrMode==="screen-space"||this.selectedController==t)return!1;const e=this.presentedScene,n=this.placementBox.controllerIntersection(e,t);return t.userData.box.visible=(n==null||t.userData.turning)&&!this.isTwoFingering,t.userData.line.scale.z=n==null?5:n.distance,n!=null}controllerSeparation(){return this.controller1.position.distanceTo(this.controller2.position)}async stopPresenting(){if(!this.isPresenting)return;const t=new Promise(e=>{this.resolveCleanup=e});try{await this.currentSession.end(),await t}catch(e){console.warn("Error while trying to end WebXR AR session"),console.warn(e),this.postSessionCleanup()}}get isPresenting(){return this.presentedScene!=null}get target(){return this.oldTarget}updateTarget(){const t=this.presentedScene;if(t!=null){const e=t.getTarget();this.oldTarget.copy(e),this.placeOnWall?e.z=t.boundingBox.min.z:e.y=t.boundingBox.min.y,t.setTarget(e.x,e.y,e.z)}}postSessionCleanup(){const t=this.currentSession;t!=null&&(t.removeEventListener("selectstart",this.onSelectStart),t.removeEventListener("selectend",this.onSelectEnd),this.currentSession=null);const e=this.presentedScene;if(this._presentedScene=null,e!=null){const{element:a}=e;this.xrLight!=null&&(e.remove(this.xrLight),this.xrLight.dispose(),this.xrLight=null),e.add(e.pivot),e.pivot.quaternion.set(0,0,0,1),e.pivot.position.set(0,0,0),e.pivot.scale.set(1,1,1),e.setShadowOffset(0);const o=this.turntableRotation;o!=null&&(e.yaw=o);const l=this.oldShadowIntensity;l!=null&&e.setShadowIntensity(l),e.setEnvironmentAndSkybox(a[Or],a[yo]);const c=this.oldTarget;e.setTarget(c.x,c.y,c.z),e.xrCamera=null,e.element.removeEventListener("load",this.onUpdateScene),e.orientHotspots(0);const{width:h,height:u}=a.getBoundingClientRect();e.setSize(h,u),requestAnimationFrame(()=>{e.element.dispatchEvent(new CustomEvent("camera-change",{detail:{source:Ee.NONE}}))})}this.renderer.height=0;const n=this.exitWebXRButtonContainer;n!=null&&(n.classList.remove("enabled"),n.removeEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=null);const i=this.transientHitTestSource;i!=null&&(i.cancel(),this.transientHitTestSource=null);const s=this.initialHitSource;s!=null&&(s.cancel(),this.initialHitSource=null),this.placementBox!=null&&(this.placementBox.dispose(),this.placementBox=null),this.xrMode!=="screen-space"&&(this.controller1!=null&&(this.controller1.userData.turning=!1,this.controller1.userData.box.visible=!1,this.controller1.userData.line.visible=!0,this.controller1.removeEventListener("selectstart",this.onControllerSelectStart),this.controller1.removeEventListener("selectend",this.onControllerSelectEnd),this.controller1.removeFromParent(),this.controller1=null),this.controller2!=null&&(this.controller2.userData.turning=!1,this.controller2.userData.box.visible=!1,this.controller2.userData.line.visible=!0,this.controller2.removeEventListener("selectstart",this.onControllerSelectStart),this.controller2.removeEventListener("selectend",this.onControllerSelectEnd),this.controller2.removeFromParent(),this.controller2=null),this.selectedController=null,this.scaleLine.visible=!1),this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.inputSource=null,this.overlay=null,this.resolveCleanup!=null&&this.resolveCleanup(),this.dispatchEvent({type:"status",status:Io})}updateView(t){const e=this.presentedScene,n=this.threeRenderer.xr;n.updateCamera(sM),e.xrCamera=n.getCamera();const{elements:i}=e.getCamera().matrixWorld;if(e.orientHotspots(Math.atan2(i[1],i[5])),this.initialized||(this.placeInitially(),this.initialized=!0),t.requestViewportScale&&t.recommendedViewportScale){const a=t.recommendedViewportScale;t.requestViewportScale(Math.max(a,.25))}const s=n.getBaseLayer();if(s!=null){const a=s instanceof XRWebGLLayer?s.getViewport(t):n.getBinding().getViewSubImage(s,t).viewport;this.threeRenderer.setViewport(a.x,a.y,a.width,a.height)}}placeInitially(){const t=this.presentedScene,{pivot:e,element:n}=t,{position:i}=e,s=t.getCamera(),{width:a,height:o}=this.overlay.getBoundingClientRect();t.setSize(a,o),s.projectionMatrixInverse.copy(s.projectionMatrix).invert();const{theta:l}=n.getCameraOrbit(),c=s.getWorldDirection(Mr);t.yaw=Math.atan2(-c.x,-c.z)-l,this.goalYaw=t.yaw;const h=Math.max(1,2*t.boundingSphere.radius);i.copy(s.position).add(c.multiplyScalar(h)),this.updateTarget();const u=t.getTarget();if(i.add(u).sub(this.oldTarget),this.goalPosition.copy(i),t.setHotspotsVisibility(!0),this.xrMode==="screen-space"){const{session:d}=this.frame;d.addEventListener("selectstart",this.onSelectStart),d.addEventListener("selectend",this.onSelectEnd),d.requestHitTestSourceForTransientInput({profile:"generic-touchscreen"}).then(A=>{this.transientHitTestSource=A})}}getTouchLocation(){const{axes:t}=this.inputSource.gamepad;let e=this.placementBox.getExpandedHit(this.presentedScene,t[0],t[1]);return e!=null&&(Mr.copy(e).sub(this.presentedScene.getCamera().position),Mr.length()>10)?null:e}getHitPoint(t){const e=this.threeRenderer.xr.getReferenceSpace(),n=t.getPose(e);if(n==null)return null;const i=nM.fromArray(n.transform.matrix);return this.placeOnWall===!0&&(this.goalYaw=Math.atan2(i.elements[4],i.elements[6])),i.elements[5]>.75!==this.placeOnWall?iM.setFromMatrixPosition(i):null}moveToFloor(t){const e=this.initialHitSource;if(e==null)return;const n=t.getHitTestResults(e);if(n.length==0)return;const i=n[0],s=this.getHitPoint(i);s!=null&&(this.placementBox.show=!0,this.isTranslating||(this.placeOnWall?this.goalPosition.copy(s):this.goalPosition.y=s.y),e.cancel(),this.initialHitSource=null,this.dispatchEvent({type:"status",status:ZC}))}fingerPolar(t){const e=t[0].inputSource.gamepad.axes,n=t[1].inputSource.gamepad.axes,i=n[0]-e[0],s=n[1]-e[1],a=Math.atan2(s,i);let o=this.lastAngle-a;return o>Math.PI?o-=2*Math.PI:o<-Math.PI&&(o+=2*Math.PI),this.lastAngle=a,{separation:Math.sqrt(i*i+s*s),deltaYaw:o}}setScale(t){const e=t/this.firstRatio;this.goalScale=Math.abs(e-1)<.2?1:e}processInput(t){const e=this.transientHitTestSource;if(e==null||!this.isTranslating&&!this.isTwoFingering&&!this.isRotating)return;const n=t.getHitTestResultsForTransientInput(e),i=this.presentedScene,s=i.pivot.scale.x;if(this.isTwoFingering)if(n.length<2)this.isTwoFingering=!1;else{const{separation:a,deltaYaw:o}=this.fingerPolar(n);this.placeOnWall===!1&&(this.goalYaw+=o),i.canScale&&this.setScale(a)}else if(n.length!==2)if(this.isRotating){const a=1.5*this.inputSource.gamepad.axes[0];this.goalYaw+=a-this.lastAngle,this.lastAngle=a}else this.isTranslating&&n.forEach(a=>{if(a.inputSource!==this.inputSource)return;let o=null;if(a.results.length>0&&(o=this.getHitPoint(a.results[0])),o==null&&(o=this.getTouchLocation()),o!=null){if(this.goalPosition.sub(this.lastDragPosition),this.placeOnWall===!1){const l=o.y-this.lastDragPosition.y;if(l<0){this.placementBox.offsetHeight=l/s,this.presentedScene.setShadowOffset(l);const c=Mr.copy(i.getCamera().position),h=-l/(c.y-o.y);c.multiplyScalar(h),o.multiplyScalar(1-h).add(c)}}this.goalPosition.add(o),this.lastDragPosition.copy(o)}});else{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!0;const{separation:a}=this.fingerPolar(n);this.firstRatio=a/s}}moveScene(t){const e=this.presentedScene,{pivot:n}=e,i=this.placementBox;if(i.updateOpacity(t),this.controller1&&(this.controller1.userData.turning&&(n.quaternion.copy(this.controller1.quaternion).multiply(this.relativeOrientation),this.selectedController&&this.selectedController===this.controller2&&n.quaternion.premultiply(Ms.copy(this.controller2.quaternion).invert())),this.controller1.userData.box.position.copy(this.controller1.position),n.getWorldQuaternion(this.controller1.userData.box.quaternion)),this.controller2&&(this.controller2.userData.turning&&(n.quaternion.copy(this.controller2.quaternion).multiply(this.relativeOrientation),this.selectedController&&this.selectedController===this.controller1&&n.quaternion.premultiply(Ms.copy(this.controller1.quaternion).invert())),this.controller2.userData.box.position.copy(this.controller2.position),n.getWorldQuaternion(this.controller2.userData.box.quaternion)),this.controller1&&this.controller2&&this.isTwoFingering){const d=this.controllerSeparation();this.setScale(d),this.scaleLine.scale.z=-d,this.scaleLine.lookAt(this.controller2.position)}const s=e.pivot.scale.x;if(this.goalScale!==s){const d=this.scaleDamper.update(s,this.goalScale,t,1);e.pivot.scale.set(d,d,d)}if(n.parent!==e)return;const{position:a}=n,o=e.boundingSphere.radius,l=this.goalPosition;let c=Ee.NONE;if(!l.equals(a)){c=Ee.USER_INTERACTION;let{x:d,y:A,z:m}=a;if(d=this.xDamper.update(d,l.x,t,o),A=this.yDamper.update(A,l.y,t,o),m=this.zDamper.update(m,l.z,t,o),a.set(d,A,m),this.xrMode==="screen-space"&&!this.isTranslating){const g=l.y-A;this.placementComplete&&this.placeOnWall===!1?(i.offsetHeight=g/e.pivot.scale.x,e.setShadowOffset(g)):g===0&&(this.placementComplete=!0,i.show=!1,e.setShadowIntensity(.8))}this.xrMode!=="screen-space"&&l.equals(a)&&e.setShadowIntensity(.8)}e.updateTarget(t),Ms.setFromAxisAngle(Mr.set(0,1,0),this.goalYaw);const h=e.pivot.quaternion.angleTo(Ms),u=h-this.yawDamper.update(h,0,t,Math.PI);e.pivot.quaternion.rotateTowards(Ms,u),e.element.dispatchEvent(new CustomEvent("camera-change",{detail:{source:c}}))}onWebXRFrame(t,e){if(this.xrMode!=="screen-space"){const o=this.hover(this.controller1),l=this.hover(this.controller2);this.placementBox.show=(o||l)&&!this.isTwoFingering}this.frame=e,++this.frames;const n=this.threeRenderer.xr.getReferenceSpace(),i=e.getViewerPose(n);i==null&&this.tracking===!0&&this.frames>30&&(this.tracking=!1,this.dispatchEvent({type:"tracking",status:eM}));const s=this.presentedScene;if(i==null||s==null||!s.element.loaded)return void this.threeRenderer.clear();this.tracking===!1&&(this.tracking=!0,this.dispatchEvent({type:"tracking",status:Om}));let a=!0;for(const o of i.views){if(this.updateView(o),a){this.moveToFloor(e),this.processInput(e);const l=t-this.lastTick;this.moveScene(l),this.renderer.preRender(s,t,l),this.lastTick=t,s.renderShadow(this.threeRenderer)}this.threeRenderer.render(s,s.getCamera()),a=!1}}}function oM(r){const t=new Map,e=new Map,n=r.clone();return km(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=t.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return e.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function km(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)km(r.children[n],t.children[n],e)}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=Symbol("prepared"),Oo=Symbol("prepare"),Bn=Symbol("preparedGLTF"),ko=Symbol("clone");class lM{constructor(t){this[Bn]=t}static prepare(t){if(t.scene==null)throw new Error("Model does not have a scene");if(t[qA])return t;const e=this[Oo](t);return e[qA]=!0,e}static[Oo](t){const{scene:e}=t,n=[e];return Object.assign(Object.assign({},t),{scene:e,scenes:n})}get parser(){return this[Bn].parser}get animations(){return this[Bn].animations}get scene(){return this[Bn].scene}get scenes(){return this[Bn].scenes}get cameras(){return this[Bn].cameras}get asset(){return this[Bn].asset}get userData(){return this[Bn].userData}clone(){return new this.constructor(this[ko]())}dispose(){this.scenes.forEach(t=>{t.traverse(e=>{const n=e;n.material&&((Array.isArray(n.material)?n.material:[n.material]).forEach(i=>{for(const s in i){const a=i[s];if(a instanceof oe){const o=a.source.data;o.close!=null&&o.close(),a.dispose()}}i.dispose()}),n.geometry.dispose())})})}[ko](){const t=this[Bn],e=oM(this.scene);cM(e,this.scene);const n=[e],i=t.userData?Object.assign({},t.userData):{};return Object.assign(Object.assign({},t),{scene:e,scenes:n,userData:i})}}const cM=(r,t)=>{Gm(r,t,(e,n)=>{n.userData.variantMaterials!==void 0&&(e.userData.variantMaterials=new Map(n.userData.variantMaterials)),n.userData.variantData!==void 0&&(e.userData.variantData=n.userData.variantData),n.userData.originalMaterial!==void 0&&(e.userData.originalMaterial=n.userData.originalMaterial)})},Gm=(r,t,e)=>{e(r,t);for(let n=0;n<r.children.length;n++)Gm(r.children[n],t.children[n],e)},XA=Symbol("threeGLTF"),YA=Symbol("gltf"),KA=Symbol("gltfElementMap"),$A=Symbol("threeObjectMap"),JA=Symbol("parallelTraverseThreeScene"),jA=Symbol("correlateOriginalThreeGLTF"),ZA=Symbol("correlateCloneThreeGLTF");class ea{constructor(t,e,n,i){this[XA]=t,this[YA]=e,this[KA]=i,this[$A]=n}static from(t,e){return e!=null?this[ZA](t,e):this[jA](t)}static[jA](t){const e=t.parser.json,n=t.parser.associations,i=new Map,s={name:"Default"},a={type:"materials",index:-1};for(const o of n.keys())o instanceof bn&&n.get(o)==null&&(a.index<0&&(e.materials==null&&(e.materials=[]),a.index=e.materials.length,e.materials.push(s)),o.name=s.name,n.set(o,{materials:a.index}));for(const[o,l]of n){l&&(o.userData=o.userData||{},o.userData.associations=l);for(const c in l)if(c!=null&&c!=="primitives"){const h=c,u=(e[h]||[])[l[h]];if(u==null)continue;let d=i.get(u);d==null&&(d=new Set,i.set(u,d)),d.add(o)}}return new ea(t,e,n,i)}static[ZA](t,e){const n=e.threeGLTF,i=e.gltf,s=JSON.parse(JSON.stringify(i)),a=new Map,o=new Map;for(let l=0;l<n.scenes.length;l++)this[JA](n.scenes[l],t.scenes[l],(c,h)=>{const u=e.threeObjectMap.get(c);if(u!=null){for(const d in u)if(d!=null&&d!=="primitives"){const A=d,m=u[A],g=s[A][m],p=a.get(h)||{};p[A]=m,a.set(h,p);const f=o.get(g)||new Set;f.add(h),o.set(g,f)}}});return new ea(t,s,a,o)}static[JA](t,e,n){const i=(s,a)=>{if(n(s,a),s.isObject3D){const o=s,l=a;if(o.material)if(Array.isArray(o.material))for(let c=0;c<o.material.length;++c)n(o.material[c],l.material[c]);else n(o.material,l.material);for(let c=0;c<s.children.length;++c)i(s.children[c],a.children[c])}};i(t,e)}get threeGLTF(){return this[XA]}get gltf(){return this[YA]}get gltfElementMap(){return this[KA]}get threeObjectMap(){return this[$A]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=Symbol("correlatedSceneGraph");class hM extends lM{static[Oo](t){const e=super[Oo](t);e[Ir]==null&&(e[Ir]=ea.from(e));const{scene:n}=e,i=new gn(void 0,1/0);return n.traverse(s=>{s.renderOrder=1e3,s.frustumCulled=!1,s.name||(s.name=s.uuid);const a=s;if(a.material){const{geometry:o}=a;a.castShadow=!0,a.isSkinnedMesh&&(o.boundingSphere=i,o.boundingBox=null);const l=a.material;if(l.isMeshBasicMaterial===!0&&(l.toneMapped=!1),l.shadowSide=0,l.aoMap){const{gltf:c,threeObjectMap:h}=e[Ir],u=h.get(l);if(c.materials!=null&&u!=null&&u.materials!=null){const d=c.materials[u.materials];d.occlusionTexture&&d.occlusionTexture.texCoord===0&&o.attributes.uv!=null&&o.setAttribute("uv2",o.attributes.uv)}}}}),e}get correlatedSceneGraph(){return this[Bn][Ir]}[ko](){const t=super[ko](),e=new Map;return t.scene.traverse(n=>{const i=n;if(i.material){const a=i.material;if(a!=null){if(e.has(a.uuid))return void(i.material=e.get(a.uuid));i.material=a.clone(),e.set(a.uuid,i.material)}}const s=n;s.target!==void 0&&s.add(s.target)}),t[Ir]=ea.from(t,this.correlatedSceneGraph),t}}const tp=(r,t,e)=>{let n;switch(r){case 1009:n=new Uint8ClampedArray(t*e*4);break;case 1016:n=new Uint16Array(t*e*4);break;case 1014:n=new Uint32Array(t*e*4);break;case 1010:n=new Int8Array(t*e*4);break;case 1011:n=new Int16Array(t*e*4);break;case 1013:n=new Int32Array(t*e*4);break;case 1015:n=new Float32Array(t*e*4);break;default:throw new Error("Unsupported data type")}return n};let Ja;class Zh{constructor(t){var e,n,i,s,a,o,l,c,h,u,d,A,m,g,p,f;this._rendererIsDisposable=!1,this._supportsReadPixels=!0,this.render=()=>{this._renderer.setRenderTarget(this._renderTarget);try{this._renderer.render(this._scene,this._camera)}catch(_){throw this._renderer.setRenderTarget(null),_}this._renderer.setRenderTarget(null)},this._width=t.width,this._height=t.height,this._type=t.type,this._colorSpace=t.colorSpace;const E={format:1023,depthBuffer:!1,stencilBuffer:!1,type:this._type,colorSpace:this._colorSpace,anisotropy:((e=t.renderTargetOptions)===null||e===void 0?void 0:e.anisotropy)!==void 0?(n=t.renderTargetOptions)===null||n===void 0?void 0:n.anisotropy:1,generateMipmaps:((i=t.renderTargetOptions)===null||i===void 0?void 0:i.generateMipmaps)!==void 0&&((s=t.renderTargetOptions)===null||s===void 0?void 0:s.generateMipmaps),magFilter:((a=t.renderTargetOptions)===null||a===void 0?void 0:a.magFilter)!==void 0?(o=t.renderTargetOptions)===null||o===void 0?void 0:o.magFilter:1006,minFilter:((l=t.renderTargetOptions)===null||l===void 0?void 0:l.minFilter)!==void 0?(c=t.renderTargetOptions)===null||c===void 0?void 0:c.minFilter:1006,samples:((h=t.renderTargetOptions)===null||h===void 0?void 0:h.samples)!==void 0?(u=t.renderTargetOptions)===null||u===void 0?void 0:u.samples:void 0,wrapS:((d=t.renderTargetOptions)===null||d===void 0?void 0:d.wrapS)!==void 0?(A=t.renderTargetOptions)===null||A===void 0?void 0:A.wrapS:1001,wrapT:((m=t.renderTargetOptions)===null||m===void 0?void 0:m.wrapT)!==void 0?(g=t.renderTargetOptions)===null||g===void 0?void 0:g.wrapT:1001};if(this._material=t.material,t.renderer?this._renderer=t.renderer:(this._renderer=Zh.instantiateRenderer(),this._rendererIsDisposable=!0),this._scene=new Ii,this._camera=new er,this._camera.position.set(0,0,10),this._camera.left=-.5,this._camera.right=.5,this._camera.top=.5,this._camera.bottom=-.5,this._camera.updateProjectionMatrix(),!((_,y,M,C)=>{if(Ja!==void 0)return Ja;const x=new fn(1,1,C);y.setRenderTarget(x);const T=new le(new Qn,new An({color:16777215}));y.render(T,M),y.setRenderTarget(null);const k=tp(_,x.width,x.height);return y.readRenderTargetPixels(x,0,0,x.width,x.height,k),x.dispose(),T.geometry.dispose(),T.material.dispose(),Ja=k[0]!==0,Ja})(this._type,this._renderer,this._camera,E)){let _;this._type===1016&&(_=this._renderer.extensions.has("EXT_color_buffer_float")?1015:void 0),_!==void 0?(console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to 1015`),this._type=_):(this._supportsReadPixels=!1,console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"))}this._quad=new le(new Qn,this._material),this._quad.geometry.computeBoundingBox(),this._scene.add(this._quad),this._renderTarget=new fn(this.width,this.height,E),this._renderTarget.texture.mapping=((p=t.renderTargetOptions)===null||p===void 0?void 0:p.mapping)!==void 0?(f=t.renderTargetOptions)===null||f===void 0?void 0:f.mapping:300}static instantiateRenderer(){const t=new Hh;return t.setSize(128,128),t}toArray(){if(!this._supportsReadPixels)throw new Error("Can't read pixels in this browser");const t=tp(this._type,this._width,this._height);return this._renderer.readRenderTargetPixels(this._renderTarget,0,0,this._width,this._height,t),t}toDataTexture(t){const e=new sa(this.toArray(),this.width,this.height,1023,this._type,(t==null?void 0:t.mapping)||300,(t==null?void 0:t.wrapS)||1001,(t==null?void 0:t.wrapT)||1001,(t==null?void 0:t.magFilter)||1006,(t==null?void 0:t.minFilter)||1006,(t==null?void 0:t.anisotropy)||1,he);return e.generateMipmaps=(t==null?void 0:t.generateMipmaps)!==void 0&&(t==null?void 0:t.generateMipmaps),e}disposeOnDemandRenderer(){this._renderer.setRenderTarget(null),this._rendererIsDisposable&&(this._renderer.dispose(),this._renderer.forceContextLoss())}dispose(t){this.disposeOnDemandRenderer(),t&&this.renderTarget.dispose(),this.material instanceof tn&&Object.values(this.material.uniforms).forEach(e=>{e.value instanceof oe&&e.value.dispose()}),Object.values(this.material).forEach(e=>{e instanceof oe&&e.dispose()}),this.material.dispose(),this._quad.geometry.dispose()}get width(){return this._width}set width(t){this._width=t,this._renderTarget.setSize(this._width,this._height)}get height(){return this._height}set height(t){this._height=t,this._renderTarget.setSize(this._width,this._height)}get renderer(){return this._renderer}get renderTarget(){return this._renderTarget}set renderTarget(t){this._renderTarget=t,this._width=t.width,this._height=t.height}get material(){return this._material}get type(){return this._type}get colorSpace(){return this._colorSpace}}class uM extends tn{constructor({gamma:t,offsetHdr:e,offsetSdr:n,gainMapMin:i,gainMapMax:s,maxDisplayBoost:a,hdrCapacityMin:o,hdrCapacityMax:l,sdr:c,gainMap:h}){super({name:"GainMapDecoderMaterial",vertexShader:`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,fragmentShader:`
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`,uniforms:{sdr:{value:c},gainMap:{value:h},gamma:{value:new B(1/t[0],1/t[1],1/t[2])},offsetHdr:{value:new B().fromArray(e)},offsetSdr:{value:new B().fromArray(n)},gainMapMin:{value:new B().fromArray(i)},gainMapMax:{value:new B().fromArray(s)},weightFactor:{value:(Math.log2(a)-o)/(l-o)}},blending:0,depthTest:!1,depthWrite:!1}),this._maxDisplayBoost=a,this._hdrCapacityMin=o,this._hdrCapacityMax=l,this.needsUpdate=!0,this.uniformsNeedUpdate=!0}get sdr(){return this.uniforms.sdr.value}set sdr(t){this.uniforms.sdr.value=t}get gainMap(){return this.uniforms.gainMap.value}set gainMap(t){this.uniforms.gainMap.value=t}get offsetHdr(){return this.uniforms.offsetHdr.value.toArray()}set offsetHdr(t){this.uniforms.offsetHdr.value.fromArray(t)}get offsetSdr(){return this.uniforms.offsetSdr.value.toArray()}set offsetSdr(t){this.uniforms.offsetSdr.value.fromArray(t)}get gainMapMin(){return this.uniforms.gainMapMin.value.toArray()}set gainMapMin(t){this.uniforms.gainMapMin.value.fromArray(t)}get gainMapMax(){return this.uniforms.gainMapMax.value.toArray()}set gainMapMax(t){this.uniforms.gainMapMax.value.fromArray(t)}get gamma(){const t=this.uniforms.gamma.value;return[1/t.x,1/t.y,1/t.z]}set gamma(t){const e=this.uniforms.gamma.value;e.x=1/t[0],e.y=1/t[1],e.z=1/t[2]}get hdrCapacityMin(){return this._hdrCapacityMin}set hdrCapacityMin(t){this._hdrCapacityMin=t,this.calculateWeight()}get hdrCapacityMax(){return this._hdrCapacityMax}set hdrCapacityMax(t){this._hdrCapacityMax=t,this.calculateWeight()}get maxDisplayBoost(){return this._maxDisplayBoost}set maxDisplayBoost(t){this._maxDisplayBoost=Math.max(1,Math.min(65504,t)),this.calculateWeight()}calculateWeight(){const t=(Math.log2(this._maxDisplayBoost)-this._hdrCapacityMin)/(this._hdrCapacityMax-this._hdrCapacityMin);this.uniforms.weightFactor.value=Math.max(0,Math.min(1,t))}}class Hm extends Error{}class Vm extends Error{}const wr=(r,t,e)=>{var n;let i;const s=(n=r.attributes.getNamedItem(t))===null||n===void 0?void 0:n.nodeValue;if(s)i=s;else{const a=r.getElementsByTagName(t)[0];if(!a){if(e)return e;throw new Error(`Can't find ${t} in gainmap metadata`)}{const o=a.getElementsByTagName("rdf:li");if(o.length!==3)throw new Error(`Gainmap metadata contains an array of items for ${t} but its length is not 3`);i=Array.from(o).map(l=>l.innerHTML)}}return i};class dM{constructor(t){this.options={debug:!(!t||t.debug===void 0)&&t.debug,extractFII:!t||t.extractFII===void 0||t.extractFII,extractNonFII:!t||t.extractNonFII===void 0||t.extractNonFII}}extract(t){return new Promise((e,n)=>{const i=this.options.debug,s=new DataView(t.buffer);if(s.getUint16(0)!==65496)return void n(new Error("Not a valid jpeg"));const a=s.byteLength;let o,l=2,c=0;for(;l<a;){if(++c>250)return void n(new Error(`Found no marker after ${c} loops 😵`));if(s.getUint8(l)!==255)return void n(new Error(`Not a valid marker at offset 0x${l.toString(16)}, found: 0x${s.getUint8(l).toString(16)}`));if(o=s.getUint8(l+1),i&&console.log(`Marker: ${o.toString(16)}`),o===226){i&&console.log("Found APP2 marker (0xffe2)");const h=l+4;if(s.getUint32(h)===1297106432){const u=h+4;let d;if(s.getUint16(u)===18761)d=!1;else{if(s.getUint16(u)!==19789)return void n(new Error("No valid endianness marker found in TIFF header"));d=!0}if(s.getUint16(u+2,!d)!==42)return void n(new Error("Not valid TIFF data! (no 0x002A marker)"));const A=s.getUint32(u+4,!d);if(A<8)return void n(new Error("Not valid TIFF data! (First offset less than 8)"));const m=u+A,g=s.getUint16(m,!d),p=m+2;let f=0;for(let y=p;y<p+12*g;y+=12)s.getUint16(y,!d)===45057&&(f=s.getUint32(y+8,!d));const E=m+2+12*g+4,_=[];for(let y=E;y<E+16*f;y+=16){const M={MPType:s.getUint32(y,!d),size:s.getUint32(y+4,!d),dataOffset:s.getUint32(y+8,!d),dependantImages:s.getUint32(y+12,!d),start:-1,end:-1,isFII:!1};M.dataOffset?(M.start=u+M.dataOffset,M.isFII=!1):(M.start=0,M.isFII=!0),M.end=M.start+M.size,_.push(M)}if(this.options.extractNonFII&&_.length){const y=new Blob([s]),M=[];for(const C of _){if(C.isFII&&!this.options.extractFII)continue;const x=y.slice(C.start,C.end+1,"image/jpeg");M.push(x)}e(M)}}}l+=2+s.getUint16(l+2)}})}}const AM=async r=>{const t=(i=>{var s,a;let o;o=typeof TextDecoder<"u"?new TextDecoder().decode(i):i.toString();let l=o.indexOf("<x:xmpmeta");const c=new DOMParser;for(;l!==-1;){const h=o.indexOf("x:xmpmeta>",l);o.slice(l,h+10);const u=o.slice(l,h+10);try{const d=c.parseFromString(u,"text/xml").getElementsByTagName("rdf:Description")[0],A=wr(d,"hdrgm:GainMapMin","0"),m=wr(d,"hdrgm:GainMapMax"),g=wr(d,"hdrgm:Gamma","1"),p=wr(d,"hdrgm:OffsetSDR","0.015625"),f=wr(d,"hdrgm:OffsetHDR","0.015625");let E=(s=d.attributes.getNamedItem("hdrgm:HDRCapacityMin"))===null||s===void 0?void 0:s.nodeValue;E||(E="0");const _=(a=d.attributes.getNamedItem("hdrgm:HDRCapacityMax"))===null||a===void 0?void 0:a.nodeValue;if(!_)throw new Error("Incomplete gainmap metadata");return{gainMapMin:Array.isArray(A)?A.map(y=>parseFloat(y)):[parseFloat(A),parseFloat(A),parseFloat(A)],gainMapMax:Array.isArray(m)?m.map(y=>parseFloat(y)):[parseFloat(m),parseFloat(m),parseFloat(m)],gamma:Array.isArray(g)?g.map(y=>parseFloat(y)):[parseFloat(g),parseFloat(g),parseFloat(g)],offsetSdr:Array.isArray(p)?p.map(y=>parseFloat(y)):[parseFloat(p),parseFloat(p),parseFloat(p)],offsetHdr:Array.isArray(f)?f.map(y=>parseFloat(y)):[parseFloat(f),parseFloat(f),parseFloat(f)],hdrCapacityMin:parseFloat(E),hdrCapacityMax:parseFloat(_)}}catch{}l=o.indexOf("<x:xmpmeta",h)}})(r);if(!t)throw new Vm("Gain map XMP metadata not found");const e=new dM({extractFII:!0,extractNonFII:!0}),n=await e.extract(r);if(n.length!==2)throw new Hm("Gain map recovery image not found");return{sdr:new Uint8Array(await n[0].arrayBuffer()),gainMap:new Uint8Array(await n[1].arrayBuffer()),metadata:t}},ep=r=>new Promise((t,e)=>{const n=document.createElement("img");n.onload=()=>{t(n)},n.onerror=i=>{e(i)},n.src=URL.createObjectURL(r)});class pM extends Gn{constructor(t,e){super(e),t&&(this._renderer=t),this._internalLoadingManager=new zf}setRenderer(t){return this._renderer=t,this}setRenderTargetOptions(t){return this._renderTargetOptions=t,this}prepareQuadRenderer(){this._renderer||console.warn("WARNING: An existing WebGL Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");const t=new uM({gainMapMax:[1,1,1],gainMapMin:[0,0,0],gamma:[1,1,1],offsetHdr:[1,1,1],offsetSdr:[1,1,1],hdrCapacityMax:1,hdrCapacityMin:0,maxDisplayBoost:1,gainMap:new oe,sdr:new oe});return new Zh({width:16,height:16,type:1016,colorSpace:he,material:t,renderer:this._renderer,renderTargetOptions:this._renderTargetOptions})}async render(t,e,n,i){const s=i?new Blob([i],{type:"image/jpeg"}):void 0,a=new Blob([n],{type:"image/jpeg"});let o,l,c=!1;if(typeof createImageBitmap>"u"){const d=await Promise.all([s?ep(s):Promise.resolve(void 0),ep(a)]);l=d[0],o=d[1],c=!0}else{const d=await Promise.all([s?createImageBitmap(s,{imageOrientation:"flipY"}):Promise.resolve(void 0),createImageBitmap(a,{imageOrientation:"flipY"})]);l=d[0],o=d[1]}const h=new oe(l||new ImageData(2,2),300,1001,1001,1006,1008,1023,1009,1,he);h.flipY=c,h.needsUpdate=!0;const u=new oe(o,300,1001,1001,1006,1008,1023,1009,1,me);u.flipY=c,u.needsUpdate=!0,t.width=o.width,t.height=o.height,t.material.gainMap=h,t.material.sdr=u,t.material.gainMapMin=e.gainMapMin,t.material.gainMapMax=e.gainMapMax,t.material.offsetHdr=e.offsetHdr,t.material.offsetSdr=e.offsetSdr,t.material.gamma=e.gamma,t.material.hdrCapacityMin=e.hdrCapacityMin,t.material.hdrCapacityMax=e.hdrCapacityMax,t.material.maxDisplayBoost=Math.pow(2,e.hdrCapacityMax),t.material.needsUpdate=!0,t.render()}}class fM extends pM{load(t,e,n,i){const s=this.prepareQuadRenderer(),a=new oi(this._internalLoadingManager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),this.manager.itemStart(t),a.load(t,async o=>{if(typeof o=="string")throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");const l=new Uint8Array(o);let c,h,u;try{const d=await AM(l);c=d.sdr,h=d.gainMap,u=d.metadata}catch(d){if(!(d instanceof Vm||d instanceof Hm))throw d;console.warn(`Failure to reconstruct an HDR image from ${t}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`),u={gainMapMin:[0,0,0],gainMapMax:[1,1,1],gamma:[1,1,1],hdrCapacityMin:0,hdrCapacityMax:1,offsetHdr:[0,0,0],offsetSdr:[0,0,0]},c=l}try{await this.render(s,u,c,h)}catch(d){return this.manager.itemError(t),typeof i=="function"&&i(d),void s.disposeOnDemandRenderer()}typeof e=="function"&&e(s),this.manager.itemEnd(t),s.disposeOnDemandRenderer()},n,o=>{this.manager.itemError(t),typeof i=="function"&&i(o)}),s}}class mM extends dx{constructor(t){super(t),this.type=1016}parse(t){const e=function(m,g){switch(m){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(g||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(g||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(g||""));default:throw new Error("THREE.RGBELoader: Memory Error: "+(g||""))}},n=function(m,g,p){g=g||1024;let f=m.pos,E=-1,_=0,y="",M=String.fromCharCode.apply(null,new Uint16Array(m.subarray(f,f+128)));for(;0>(E=M.indexOf(`
`))&&_<g&&f<m.byteLength;)y+=M,_+=M.length,f+=128,M+=String.fromCharCode.apply(null,new Uint16Array(m.subarray(f,f+128)));return-1<E&&(m.pos+=_+E+1,y+M.slice(0,E))},i=function(m,g,p,f){const E=m[g+3],_=Math.pow(2,E-128)/255;p[f+0]=m[g+0]*_,p[f+1]=m[g+1]*_,p[f+2]=m[g+2]*_,p[f+3]=1},s=function(m,g,p,f){const E=m[g+3],_=Math.pow(2,E-128)/255;p[f+0]=_a.toHalfFloat(Math.min(m[g+0]*_,65504)),p[f+1]=_a.toHalfFloat(Math.min(m[g+1]*_,65504)),p[f+2]=_a.toHalfFloat(Math.min(m[g+2]*_,65504)),p[f+3]=_a.toHalfFloat(1)},a=new Uint8Array(t);a.pos=0;const o=function(m){const g=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,p=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,f=/^\s*FORMAT=(\S+)\s*$/,E=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,_={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let y,M;for((m.pos>=m.byteLength||!(y=n(m)))&&e(1,"no header found"),(M=y.match(/^#\?(\S+)/))||e(3,"bad initial token"),_.valid|=1,_.programtype=M[1],_.string+=y+`
`;y=n(m),y!==!1;)if(_.string+=y+`
`,y.charAt(0)!=="#"){if((M=y.match(g))&&(_.gamma=parseFloat(M[1])),(M=y.match(p))&&(_.exposure=parseFloat(M[1])),(M=y.match(f))&&(_.valid|=2,_.format=M[1]),(M=y.match(E))&&(_.valid|=4,_.height=parseInt(M[1],10),_.width=parseInt(M[2],10)),2&_.valid&&4&_.valid)break}else _.comments+=y+`
`;return 2&_.valid||e(3,"missing format specifier"),4&_.valid||e(3,"missing image size specifier"),_}(a),l=o.width,c=o.height,h=function(m,g,p){const f=g;if(f<8||f>32767||m[0]!==2||m[1]!==2||128&m[2])return new Uint8Array(m);f!==(m[2]<<8|m[3])&&e(3,"wrong scanline width");const E=new Uint8Array(4*g*p);E.length||e(4,"unable to allocate buffer space");let _=0,y=0;const M=4*f,C=new Uint8Array(4),x=new Uint8Array(M);let T=p;for(;T>0&&y<m.byteLength;){y+4>m.byteLength&&e(1),C[0]=m[y++],C[1]=m[y++],C[2]=m[y++],C[3]=m[y++],C[0]==2&&C[1]==2&&(C[2]<<8|C[3])==f||e(3,"bad rgbe scanline format");let k,v=0;for(;v<M&&y<m.byteLength;){k=m[y++];const N=k>128;if(N&&(k-=128),(k===0||v+k>M)&&e(3,"bad scanline data"),N){const U=m[y++];for(let G=0;G<k;G++)x[v++]=U}else x.set(m.subarray(y,y+k),v),v+=k,y+=k}const I=f;for(let N=0;N<I;N++){let U=0;E[_]=x[N+U],U+=f,E[_+1]=x[N+U],U+=f,E[_+2]=x[N+U],U+=f,E[_+3]=x[N+U],_+=4}T--}return E}(a.subarray(a.pos),l,c);let u,d,A;switch(this.type){case 1015:A=h.length/4;const m=new Float32Array(4*A);for(let p=0;p<A;p++)i(h,4*p,m,4*p);u=m,d=1015;break;case 1016:A=h.length/4;const g=new Uint16Array(4*A);for(let p=0;p<A;p++)s(h,4*p,g,4*p);u=g,d=1016;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:l,height:c,data:u,header:o.string,gamma:o.gamma,exposure:o.exposure,type:d}}setDataType(t){return this.type=t,this}load(t,e,n,i){return super.load(t,function(s,a){switch(s.type){case 1015:case 1016:s.colorSpace=he,s.minFilter=1006,s.magFilter=1006,s.generateMipmaps=!1,s.flipY=!0}e&&e(s,a)},n,i)}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gM={topLight:{intensity:500,position:[.418,16.199,.3]},room:{position:[-.757,13.219,.717],scale:[31.713,28.305,28.591]},boxes:[{position:[-10.906,2.009,1.846],rotation:-.195,scale:[2.328,7.905,4.651]},{position:[-5.607,-.754,-.758],rotation:.994,scale:[1.97,1.534,3.955]},{position:[6.167,.857,7.803],rotation:.561,scale:[3.927,6.285,3.687]},{position:[-2.017,.018,6.124],rotation:.333,scale:[2.002,4.566,2.064]},{position:[2.291,-.756,-2.621],rotation:-.286,scale:[1.546,1.552,1.496]},{position:[-2.193,-.369,-5.547],rotation:.516,scale:[3.875,3.487,2.986]}],lights:[{intensity:50,position:[-16.116,14.37,8.208],scale:[.1,2.428,2.739]},{intensity:50,position:[-16.109,18.021,-8.207],scale:[.1,2.425,2.751]},{intensity:17,position:[14.904,12.198,-1.832],scale:[.15,4.265,6.331]},{intensity:43,position:[-.462,8.89,14.52],scale:[4.38,5.441,.088]},{intensity:20,position:[3.235,11.486,-12.541],scale:[2.5,2,.1]},{intensity:100,position:[0,20,0],scale:[1,.1,1]}]},_M={topLight:{intensity:400,position:[.5,14,.5]},room:{position:[0,13.2,0],scale:[31.5,28.5,31.5]},boxes:[{position:[-10.906,-1,1.846],rotation:-.195,scale:[2.328,7.905,4.651]},{position:[-5.607,-.754,-.758],rotation:.994,scale:[1.97,1.534,3.955]},{position:[6.167,-.16,7.803],rotation:.561,scale:[3.927,6.285,3.687]},{position:[-2.017,.018,6.124],rotation:.333,scale:[2.002,4.566,2.064]},{position:[2.291,-.756,-2.621],rotation:-.286,scale:[1.546,1.552,1.496]},{position:[-2.193,-.369,-5.547],rotation:.516,scale:[3.875,3.487,2.986]}],lights:[{intensity:80,position:[-14,10,8],scale:[.1,2.5,2.5]},{intensity:80,position:[-14,14,-4],scale:[.1,2.5,2.5]},{intensity:23,position:[14,12,0],scale:[.1,5,5]},{intensity:16,position:[0,9,14],scale:[5,5,.1]},{intensity:80,position:[7,8,-14],scale:[2.5,2.5,.1]},{intensity:80,position:[-7,16,-14],scale:[2.5,2.5,.1]},{intensity:1,position:[0,20,0],scale:[.1,.1,.1]}]};class np extends Ii{constructor(t){super(),this.position.y=-3.5;const e=new li;e.deleteAttribute("uv");const n=new Jr({metalness:0,side:1}),i=new Jr({metalness:0}),s=t=="legacy"?gM:_M,a=new qf(16777215,s.topLight.intensity,28,2);a.position.set(...s.topLight.position),this.add(a);const o=new le(e,n);o.position.set(...s.room.position),o.scale.set(...s.room.scale),this.add(o);for(const l of s.boxes){const c=new le(e,i);c.position.set(...l.position),c.rotation.set(0,l.rotation,0),c.scale.set(...l.scale),this.add(c)}for(const l of s.lights){const c=new le(e,this.createAreaLightMaterial(l.intensity));c.position.set(...l.position),c.scale.set(...l.scale),this.add(c)}}createAreaLightMaterial(t){const e=new An;return e.color.setScalar(t),e}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=20,vM=/\.hdr(\.js)?$/;class ip{constructor(t){this.threeRenderer=t,this.lottieLoaderUrl="",this._ldrLoader=null,this._imageLoader=null,this._hdrLoader=null,this._lottieLoader=null,this.generatedEnvironmentMap=null,this.generatedEnvironmentMapAlt=null,this.skyboxCache=new Map,this.blurMaterial=null,this.blurScene=null}ldrLoader(t){return this._ldrLoader==null&&(this._ldrLoader=new Wf),this._ldrLoader.setWithCredentials(t),this._ldrLoader}imageLoader(t){return this._imageLoader==null&&(this._imageLoader=new fM(this.threeRenderer)),this._imageLoader.setWithCredentials(t),this._imageLoader}hdrLoader(t){return this._hdrLoader==null&&(this._hdrLoader=new mM,this._hdrLoader.setDataType(1016)),this._hdrLoader.setWithCredentials(t),this._hdrLoader}async getLottieLoader(t){if(this._lottieLoader==null){const{LottieLoader:e}=await import(this.lottieLoaderUrl);this._lottieLoader=new e}return this._lottieLoader.setWithCredentials(t),this._lottieLoader}async loadImage(t,e){const n=await new Promise((i,s)=>this.ldrLoader(e).load(t,i,()=>{},s));return n.name=t,n.flipY=!1,n}async loadLottie(t,e,n){const i=await this.getLottieLoader(n);i.setQuality(e);const s=await new Promise((a,o)=>i.load(t,a,()=>{},o));return s.name=t,s}async loadEquirect(t,e=!1,n=()=>{}){try{const i=vM.test(t),s=i?this.hdrLoader(e):this.imageLoader(e),a=await new Promise((o,l)=>s.load(t,c=>{const{renderTarget:h}=c;if(h!=null){const{texture:u}=h;c.dispose(!1),o(u)}else o(c)},c=>{n(c.loaded/c.total*.9)},l));return n(1),a.name=t,a.mapping=303,i||(a.colorSpace=me),a}finally{n&&n(1)}}async generateEnvironmentMapAndSkybox(t=null,e=null,n=()=>{},i=!1){const s=e!=="legacy";e!=="legacy"&&e!=="neutral"||(e=null),e=rm(e);let a,o=Promise.resolve(null);t&&(o=this.loadEquirectFromUrl(t,i,n)),a=e?this.loadEquirectFromUrl(e,i,n):t?this.loadEquirectFromUrl(t,i,n):s?this.loadGeneratedEnvironmentMapAlt():this.loadGeneratedEnvironmentMap();const[l,c]=await Promise.all([a,o]);if(l==null)throw new Error("Failed to load environment map.");return{environmentMap:l,skybox:c}}async loadEquirectFromUrl(t,e,n){if(!this.skyboxCache.has(t)){const i=this.loadEquirect(t,e,n);this.skyboxCache.set(t,i)}return this.skyboxCache.get(t)}async GenerateEnvironmentMap(t,e){await((c=0)=>new Promise(h=>setTimeout(h,c)))();const n=this.threeRenderer,i=new Oh(256,{generateMipmaps:!1,type:1016,format:1023,colorSpace:he,depthBuffer:!0}),s=new dh(.1,100,i),a=s.renderTarget.texture;a.name=e;const o=n.outputColorSpace,l=n.toneMapping;return n.toneMapping=0,n.outputColorSpace=he,s.update(n,t),this.blurCubemap(i,.04),n.toneMapping=l,n.outputColorSpace=o,a}async loadGeneratedEnvironmentMap(){return this.generatedEnvironmentMap==null&&(this.generatedEnvironmentMap=this.GenerateEnvironmentMap(new np("legacy"),"legacy")),this.generatedEnvironmentMap}async loadGeneratedEnvironmentMapAlt(){return this.generatedEnvironmentMapAlt==null&&(this.generatedEnvironmentMapAlt=this.GenerateEnvironmentMap(new np("neutral"),"neutral")),this.generatedEnvironmentMapAlt}blurCubemap(t,e){if(this.blurMaterial==null){this.blurMaterial=this.getBlurShader(ja);const i=new li,s=new le(i,this.blurMaterial);this.blurScene=new Ii,this.blurScene.add(s)}const n=t.clone();this.halfblur(t,n,e,"latitudinal"),this.halfblur(n,t,e,"longitudinal")}halfblur(t,e,n,i){const s=t.width,a=isFinite(n)?Math.PI/(2*s):2*Math.PI/39,o=n/a,l=isFinite(n)?1+Math.floor(3*o):ja;l>ja&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${l} samples when the maximum is set to 20`);const c=[];let h=0;for(let d=0;d<ja;++d){const A=d/o,m=Math.exp(-A*A/2);c.push(m),d==0?h+=m:d<l&&(h+=2*m)}for(let d=0;d<c.length;d++)c[d]=c[d]/h;const u=this.blurMaterial.uniforms;u.envMap.value=t.texture,u.samples.value=l,u.weights.value=c,u.latitudinal.value=i==="latitudinal",u.dTheta.value=a,new dh(.1,100,e).update(this.threeRenderer,this.blurScene)}getBlurShader(t){const e=new Float32Array(t),n=new B(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},poleAxis:{value:n}},vertexShader:`
      
      varying vec3 vOutputDirection;
  
      void main() {
  
        vOutputDirection = vec3( position );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  
      }
    `,fragmentShader:`
        varying vec3 vOutputDirection;
  
        uniform samplerCube envMap;
        uniform int samples;
        uniform float weights[ n ];
        uniform bool latitudinal;
        uniform float dTheta;
        uniform vec3 poleAxis;
  
        vec3 getSample( float theta, vec3 axis ) {
  
          float cosTheta = cos( theta );
          // Rodrigues' axis-angle rotation
          vec3 sampleDirection = vOutputDirection * cosTheta
            + cross( axis, vOutputDirection ) * sin( theta )
            + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );
  
          return vec3( textureCube( envMap, sampleDirection ) );
  
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
      `,blending:0,depthTest:!1,depthWrite:!1,side:1})}async dispose(){for(const[,t]of this.skyboxCache)(await t).dispose();this.generatedEnvironmentMap!=null&&((await this.generatedEnvironmentMap).dispose(),this.generatedEnvironmentMap=null),this.generatedEnvironmentMapAlt!=null&&((await this.generatedEnvironmentMapAlt).dispose(),this.generatedEnvironmentMapAlt=null),this.blurMaterial!=null&&this.blurMaterial.dispose()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=[1,.79,.62,.5,.4,.31,.25],sp="high-performance";class In extends Tn{constructor(t){super(),this.loader=new Xe(hM),this.width=0,this.height=0,this.dpr=1,this.scenes=new Set,this.multipleScenesVisible=!1,this.lastTick=performance.now(),this.renderedLastFrame=!1,this.scaleStep=0,this.lastStep=3,this.avgFrameDuration=50,this.onWebGLContextLost=e=>{this.dispatchEvent({type:"contextlost",sourceEvent:e})},this.onWebGLContextRestored=()=>{var e;(e=this.textureUtils)===null||e===void 0||e.dispose(),this.textureUtils=new ip(this.threeRenderer);for(const n of this.scenes)n.element[Qo]()},this.dpr=window.devicePixelRatio,this.canvas3D=document.createElement("canvas"),this.canvas3D.id="webgl-canvas",this.canvas3D.classList.add("show");try{this.threeRenderer=new Hh({canvas:this.canvas3D,alpha:!0,antialias:!0,powerPreference:t.powerPreference,preserveDrawingBuffer:!0}),this.threeRenderer.autoClear=!0,this.threeRenderer.setPixelRatio(1),this.threeRenderer.debug={checkShaderErrors:!!t.debug,onShaderError:null},this.threeRenderer.toneMapping=4}catch(e){console.warn(e)}this.arRenderer=new aM(this),this.textureUtils=this.canRender?new ip(this.threeRenderer):null,Xe.initializeKTX2Loader(this.threeRenderer),this.canvas3D.addEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.addEventListener("webglcontextrestored",this.onWebGLContextRestored),this.updateRendererSize()}static get singleton(){return this._singleton||(this._singleton=new In({powerPreference:(self.ModelViewerElement||{}).powerPreference||sp,debug:Gd()})),this._singleton}static resetSingleton(){const t=this._singleton.dispose();for(const e of t)e.disconnectedCallback();this._singleton=new In({powerPreference:(self.ModelViewerElement||{}).powerPreference||sp,debug:Gd()});for(const e of t)e.connectedCallback()}get canRender(){return this.threeRenderer!=null}get scaleFactor(){return Is[this.scaleStep]}set minScale(t){let e=1;for(;e<Is.length&&!(Is[e]<t);)++e;this.lastStep=e-1}registerScene(t){this.scenes.add(t),t.forceRescale();const e=new Ut;this.threeRenderer.getSize(e),t.canvas.width=e.x,t.canvas.height=e.y,this.canRender&&this.scenes.size>0&&this.threeRenderer.setAnimationLoop((n,i)=>this.render(n,i))}unregisterScene(t){this.scenes.delete(t),this.canvas3D.parentElement===t.canvas.parentElement&&t.canvas.parentElement.removeChild(this.canvas3D),this.canRender&&this.scenes.size===0&&this.threeRenderer.setAnimationLoop(null)}displayCanvas(t){return t.element.modelIsVisible&&!this.multipleScenesVisible?this.canvas3D:t.element[Rh]}countVisibleScenes(){const{canvas3D:t}=this;let e=0,n=null;for(const s of this.scenes){const{element:a}=s;a.modelIsVisible&&s.externalRenderer==null&&++e,t.parentElement===s.canvas.parentElement&&(n=s)}const i=e>1;if(n!=null){const s=i&&!this.multipleScenesVisible,a=!n.element.modelIsVisible;if(s||a){const{width:o,height:l}=this.sceneSize(n);this.copyPixels(n,o,l),t.parentElement.removeChild(t)}}this.multipleScenesVisible=i}updateRendererSize(){var t;const e=window.devicePixelRatio;if(e!==this.dpr)for(const s of this.scenes){const{element:a}=s;a[Us](a.getBoundingClientRect())}let n=0,i=0;for(const s of this.scenes)n=Math.max(n,s.width),i=Math.max(i,s.height);if(n!==this.width||i!==this.height||e!==this.dpr){this.width=n,this.height=i,this.dpr=e,n=Math.ceil(n*e),i=Math.ceil(i*e),this.canRender&&this.threeRenderer.setSize(n,i,!1);for(const s of this.scenes){const{canvas:a}=s;a.width=n,a.height=i,s.forceRescale(),(t=s.effectRenderer)===null||t===void 0||t.setSize(n,i)}}}updateRendererScale(t){const e=this.scaleStep;this.avgFrameDuration+=Pn(.2*(t-this.avgFrameDuration),-5,5),this.avgFrameDuration>60?++this.scaleStep:this.avgFrameDuration<40&&this.scaleStep>0&&--this.scaleStep,this.scaleStep=Math.min(this.scaleStep,this.lastStep),e!==this.scaleStep&&(this.avgFrameDuration=50)}shouldRender(t){if(t.shouldRender())t.scaleStep!=this.scaleStep&&(t.scaleStep=this.scaleStep,this.rescaleCanvas(t));else{if(t.scaleStep==0)return!1;t.scaleStep=0,this.rescaleCanvas(t)}return!0}rescaleCanvas(t){const e=Is[t.scaleStep],n=Math.ceil(this.width/e),i=Math.ceil(this.height/e),{style:s}=t.canvas;s.width=`${n}px`,s.height=`${i}px`,this.canvas3D.style.width=`${n}px`,this.canvas3D.style.height=`${i}px`;const a=this.dpr*e,o=e<1?"GPU throttling":this.dpr!==window.devicePixelRatio?"No meta viewport tag":"";t.element.dispatchEvent(new CustomEvent("render-scale",{detail:{reportedDpr:window.devicePixelRatio,renderedDpr:a,minimumDpr:this.dpr*Is[this.lastStep],pixelWidth:Math.ceil(t.width*a),pixelHeight:Math.ceil(t.height*a),reason:o}}))}sceneSize(t){const{dpr:e}=this,n=Is[t.scaleStep];return{width:Math.min(Math.ceil(t.width*n*e),this.canvas3D.width),height:Math.min(Math.ceil(t.height*n*e),this.canvas3D.height)}}copyPixels(t,e,n){const i=t.context;i!=null?(i.clearRect(0,0,e,n),i.drawImage(this.canvas3D,0,0,e,n,0,0,e,n),t.canvas.classList.add("show")):console.log("could not acquire 2d context")}orderedScenes(){const t=[];for(const e of[!1,!0])for(const n of this.scenes)n.element.modelIsVisible===e&&t.push(n);return t}get isPresenting(){return this.arRenderer.isPresenting}preRender(t,e,n){const{element:i,exposure:s,toneMapping:a}=t;i[Rn](e,n);const o=typeof s=="number"&&!Number.isNaN(s),l=i.environmentImage,c=i.skyboxImage,h=a===7&&(l==="neutral"||l==="legacy"||!l&&!c);this.threeRenderer.toneMappingExposure=(o?s:1)*(h?1.3:1)}render(t,e){if(e!=null)return void this.arRenderer.onWebXRFrame(t,e);const n=t-this.lastTick;if(this.lastTick=t,!this.canRender||this.isPresenting)return;this.countVisibleScenes(),this.updateRendererSize(),this.renderedLastFrame&&(this.updateRendererScale(n),this.renderedLastFrame=!1);const{canvas3D:i}=this;for(const s of this.orderedScenes()){const{element:a}=s;if(!a.loaded||!a.modelIsVisible&&s.renderCount>0||(this.preRender(s,t,n),!this.shouldRender(s)))continue;if(s.externalRenderer!=null){const c=s.getCamera();c.updateMatrix();const{matrix:h,projectionMatrix:u}=c,d=h.elements.slice(),A=s.getTarget();d[12]+=A.x,d[13]+=A.y,d[14]+=A.z,s.externalRenderer.render({viewMatrix:d,projectionMatrix:u.elements});continue}if(!a.modelIsVisible&&!this.multipleScenesVisible)for(const c of this.scenes)c.element.modelIsVisible&&c.queueRender();const{width:o,height:l}=this.sceneSize(s);s.renderShadow(this.threeRenderer),this.threeRenderer.setRenderTarget(null),this.threeRenderer.setViewport(0,Math.ceil(this.height*this.dpr)-l,o,l),s.effectRenderer!=null?s.effectRenderer.render(n):(this.threeRenderer.autoClear=!0,this.threeRenderer.toneMapping=s.toneMapping,this.threeRenderer.render(s,s.camera)),this.multipleScenesVisible||!s.element.modelIsVisible&&s.renderCount===0?this.copyPixels(s,o,l):i.parentElement!==s.canvas.parentElement&&(s.canvas.parentElement.appendChild(i),s.canvas.classList.remove("show")),s.hasRendered(),++s.renderCount,this.renderedLastFrame=!0}}dispose(){this.textureUtils!=null&&this.textureUtils.dispose(),this.threeRenderer!=null&&this.threeRenderer.dispose(),this.textureUtils=null,this.threeRenderer=null;const t=[];for(const e of this.scenes)t.push(e.element);return this.canvas3D.removeEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.removeEventListener("webglcontextrestored",this.onWebGLContextRestored),t}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=Symbol("correlatedObjects"),ne=Symbol("onUpdate");class oa{constructor(t,e){this[ne]=t,this[Gt]=e}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=new An,EM=new Qn(2,2);let yM=0;const qe=Symbol("threeTexture"),ap=Symbol("threeTextures");class xM extends oa{get[qe](){var t;return(t=this[Gt])===null||t===void 0?void 0:t.values().next().value}get[ap](){return this[Gt]}constructor(t,e){super(t,new Set(e?[e]:[])),this[qe].image.src||(this[qe].image.src=e.name?e.name:"adhoc_image"+yM++),this[qe].image.name||(this[qe].image.name=e&&e.image&&e.image.src?e.image.src.split("/").pop():"adhoc_image")}get name(){return this[qe].image.name||""}get uri(){return this[qe].image.src}get bufferView(){return this[qe].image.bufferView}get element(){const t=this[qe];if(t&&(t.isCanvasTexture||t.isVideoTexture))return t.image}get animation(){const t=this[qe];if(t&&t.isCanvasTexture&&t.animation)return t.animation}get type(){return this.uri!=null?"external":"embedded"}set name(t){for(const e of this[ap])e.image.name=t}update(){const t=this[qe];t&&t.isCanvasTexture&&!t.animation&&(this[qe].needsUpdate=!0,this[ne]())}async createThumbnail(t,e){const n=new Ii;rp.map=this[qe];const i=new le(EM,rp);n.add(i);const s=new er(-1,1,1,-1,0,1),{threeRenderer:a}=In.singleton,o=new fn(t,e);a.setRenderTarget(o),a.render(n,s),a.setRenderTarget(null);const l=new Uint8Array(t*e*4);a.readRenderTargetPixels(o,0,0,t,e,l),Ci.width=t,Ci.height=e;const c=Ci.getContext("2d"),h=c.createImageData(t,e);return h.data.set(l),c.putImageData(h,0,0),new Promise(async(u,d)=>{Ci.toBlob(A=>{if(!A)return d("Failed to capture thumbnail.");u(URL.createObjectURL(A))},"image/png")})}}var De,Mi;(function(r){r[r.Nearest=9728]="Nearest",r[r.Linear=9729]="Linear",r[r.NearestMipmapNearest=9984]="NearestMipmapNearest",r[r.LinearMipmapNearest=9985]="LinearMipmapNearest",r[r.NearestMipmapLinear=9986]="NearestMipmapLinear",r[r.LinearMipmapLinear=9987]="LinearMipmapLinear"})(De||(De={})),function(r){r[r.ClampToEdge=33071]="ClampToEdge",r[r.MirroredRepeat=33648]="MirroredRepeat",r[r.Repeat=10497]="Repeat"}(Mi||(Mi={}));/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=new Map([[Mi.Repeat,1e3],[Mi.ClampToEdge,1001],[Mi.MirroredRepeat,1002]]),Ih=new Map([[1e3,Mi.Repeat],[1001,Mi.ClampToEdge],[1002,Mi.MirroredRepeat]]),SM=new Map([[De.Nearest,1003],[De.Linear,1006],[De.NearestMipmapNearest,1004],[De.LinearMipmapNearest,1007],[De.NearestMipmapLinear,1005],[De.LinearMipmapLinear,1008]]),zm=new Map([[1003,De.Nearest],[1006,De.Linear],[1004,De.NearestMipmapNearest],[1007,De.LinearMipmapNearest],[1005,De.NearestMipmapLinear],[1008,De.LinearMipmapLinear]]),CM=new Map([[De.Nearest,1003],[De.Linear,1006]]),Wm=new Map([[1003,De.Nearest],[1006,De.Linear]]),MM=r=>zm.has(r),IM=r=>Wm.has(r),wM=r=>Ih.has(r),jn=Symbol("threeTexture"),lp=Symbol("threeTextures"),_i=Symbol("setProperty");class bM extends oa{get[jn](){var t;return(t=this[Gt])===null||t===void 0?void 0:t.values().next().value}get[lp](){return this[Gt]}constructor(t,e){super(t,new Set(e?[e]:[]))}get name(){return this[jn].name||""}get minFilter(){return zm.get(this[jn].minFilter)}get magFilter(){return Wm.get(this[jn].magFilter)}get wrapS(){return Ih.get(this[jn].wrapS)}get wrapT(){return Ih.get(this[jn].wrapT)}get rotation(){return this[jn].rotation}get scale(){return Dh(this[jn].repeat)}get offset(){return Dh(this[jn].offset)}setMinFilter(t){this[_i]("minFilter",SM.get(t))}setMagFilter(t){this[_i]("magFilter",CM.get(t))}setWrapS(t){this[_i]("wrapS",op.get(t))}setWrapT(t){this[_i]("wrapT",op.get(t))}setRotation(t){t==null&&(t=0),this[_i]("rotation",t)}setScale(t){t==null&&(t={u:1,v:1}),this[_i]("repeat",new Ut(t.u,t.v))}setOffset(t){t==null&&(t={u:0,v:0}),this[_i]("offset",new Ut(t.u,t.v))}[_i](t,e){if(((n,i)=>{switch(n){case"minFilter":return MM(i);case"magFilter":return IM(i);case"wrapS":case"wrapT":return wM(i);case"rotation":case"repeat":case"offset":return!0;default:throw new Error(`Cannot configure property "${n}" on Sampler`)}})(t,e))for(const n of this[lp])n[t]=e,n.needsUpdate=!0;this[ne]()}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=Symbol("image"),hp=Symbol("sampler"),up=Symbol("threeTexture");class qm extends oa{constructor(t,e){super(t,new Set(e?[e]:[])),this[hp]=new bM(t,e),this[cp]=new xM(t,e)}get[up](){var t;return(t=this[Gt])===null||t===void 0?void 0:t.values().next().value}get name(){return this[up].name||""}set name(t){for(const e of this[Gt])e.name=t}get sampler(){return this[hp]}get source(){return this[cp]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xm,Ym,Km;const Wi=Symbol("texture"),qi=Symbol("transform"),wc=Symbol("materials"),dp=Symbol("usage"),ws=Symbol("onUpdate"),Gr=Symbol("activeVideo");var Bt;(function(r){r[r.Base=0]="Base",r[r.MetallicRoughness=1]="MetallicRoughness",r[r.Normal=2]="Normal",r[r.Occlusion=3]="Occlusion",r[r.Emissive=4]="Emissive",r[r.Clearcoat=5]="Clearcoat",r[r.ClearcoatRoughness=6]="ClearcoatRoughness",r[r.ClearcoatNormal=7]="ClearcoatNormal",r[r.SheenColor=8]="SheenColor",r[r.SheenRoughness=9]="SheenRoughness",r[r.Transmission=10]="Transmission",r[r.Thickness=11]="Thickness",r[r.Specular=12]="Specular",r[r.SpecularColor=13]="SpecularColor",r[r.Iridescence=14]="Iridescence",r[r.IridescenceThickness=15]="IridescenceThickness",r[r.Anisotropy=16]="Anisotropy"})(Bt||(Bt={}));class ks{constructor(t,e,n,i){this[Xm]=null,this[Ym]={rotation:0,scale:new Ut(1,1),offset:new Ut(0,0)},this[Km]=!1,n&&(this[qi].rotation=n.rotation,this[qi].scale.copy(n.repeat),this[qi].offset.copy(n.offset),this[Wi]=new qm(t,n)),this[ws]=t,this[wc]=i,this[dp]=e}get texture(){return this[Wi]}setTexture(t){var e,n;const i=t!=null?t.source[qe]:null,s=(e=this[Wi])===null||e===void 0?void 0:e.source[qe];if(s!=null&&s.isVideoTexture?this[Gr]=!1:!((n=this[Wi])===null||n===void 0)&&n.source.animation&&this[Wi].source.animation.removeEventListener("enterFrame",this[ws]),this[Wi]=t,i!=null&&i.isVideoTexture){const o=i.image;if(this[Gr]=!0,o.requestVideoFrameCallback!=null){const l=()=>{this[Gr]&&(this[ws](),o.requestVideoFrameCallback(l))};o.requestVideoFrameCallback(l)}else{const l=()=>{this[Gr]&&(this[ws](),requestAnimationFrame(l))};requestAnimationFrame(l)}}else(t==null?void 0:t.source.animation)!=null&&t.source.animation.addEventListener("enterFrame",this[ws]);let a=me;if(this[wc])for(const o of this[wc]){switch(this[dp]){case Bt.Base:o.map=i;break;case Bt.MetallicRoughness:a=he,o.metalnessMap=i,o.roughnessMap=i;break;case Bt.Normal:a=he,o.normalMap=i;break;case Bt.Occlusion:a=he,o.aoMap=i;break;case Bt.Emissive:o.emissiveMap=i;break;case Bt.Clearcoat:o.clearcoatMap=i;break;case Bt.ClearcoatRoughness:o.clearcoatRoughnessMap=i;break;case Bt.ClearcoatNormal:o.clearcoatNormalMap=i;break;case Bt.SheenColor:o.sheenColorMap=i;break;case Bt.SheenRoughness:o.sheenRoughnessMap=i;break;case Bt.Transmission:o.transmissionMap=i;break;case Bt.Thickness:o.thicknessMap=i;break;case Bt.Specular:o.specularIntensityMap=i;break;case Bt.SpecularColor:o.specularColorMap=i;break;case Bt.Iridescence:o.iridescenceMap=i;break;case Bt.IridescenceThickness:o.iridescenceThicknessMap=i;break;case Bt.Anisotropy:o.anisotropyMap=i}o.needsUpdate=!0}i&&(i.colorSpace=a,i.rotation=this[qi].rotation,i.repeat=this[qi].scale,i.offset=this[qi].offset),this[ws]()}}Xm=Wi,Ym=qi,Km=Gr;/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=Symbol("threeMaterial"),Za=Symbol("threeMaterials"),Ap=Symbol("baseColorTexture"),pp=Symbol("metallicRoughnessTexture");class TM extends oa{constructor(t,e){super(t,e);const{map:n,metalnessMap:i}=e.values().next().value;this[Ap]=new ks(t,Bt.Base,n,e),this[pp]=new ks(t,Bt.MetallicRoughness,i,e)}get[Za](){return this[Gt]}get[br](){var t;return(t=this[Gt])===null||t===void 0?void 0:t.values().next().value}get baseColorFactor(){const t=[0,0,0,this[br].opacity];return this[br].color.toArray(t),t}get metallicFactor(){return this[br].metalness}get roughnessFactor(){return this[br].roughness}get baseColorTexture(){return this[Ap]}get metallicRoughnessTexture(){return this[pp]}setBaseColorFactor(t){const e=new Mt;t instanceof Array?e.fromArray(t):e.set(t);for(const n of this[Za])n.color.set(e),t instanceof Array&&t.length>3?n.opacity=t[3]:(t=[0,0,0,n.opacity],e.toArray(t));this[ne]()}setMetallicFactor(t){for(const e of this[Za])e.metalness=t;this[ne]()}setRoughnessFactor(t){for(const e of this[Za])e.roughness=t;this[ne]()}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fp,mp;const gp=Symbol("pbrMetallicRoughness"),_p=Symbol("normalTexture"),vp=Symbol("occlusionTexture"),Ep=Symbol("emissiveTexture"),pe=Symbol("backingThreeMaterial"),yp=Symbol("applyAlphaCutoff"),bc=Symbol("getAlphaMode"),bs=Symbol("lazyLoadGLTFInfo"),Tc=Symbol("initialize"),wh=Symbol("getLoadedMaterial"),ft=Symbol("ensureMaterialIsLoaded"),xp=Symbol("gltfIndex"),Hr=Symbol("setActive"),Ws=Symbol("variantIndices"),Bc=Symbol("isActive"),Sp=Symbol("modelVariants"),Rc=Symbol("name"),Ze=Symbol("pbrTextures");class Dc extends oa{constructor(t,e,n,i,s,a,o=void 0){super(t,s),this[fp]=new Set,this[mp]=new Map,this[xp]=e,this[Bc]=n,this[Sp]=i,this[Rc]=a,o==null?this[Tc]():this[bs]=o}get[(fp=Ws,mp=Ze,pe)](){return this[Gt].values().next().value}[Tc](){const t=this[ne],e=this[Gt];this[gp]=new TM(t,e);const{normalMap:n,aoMap:i,emissiveMap:s}=e.values().next().value;this[_p]=new ks(t,Bt.Normal,n,e),this[vp]=new ks(t,Bt.Occlusion,i,e),this[Ep]=new ks(t,Bt.Emissive,s,e);const a=o=>{this[Ze].set(o,new ks(t,o,null,e))};a(Bt.Clearcoat),a(Bt.ClearcoatRoughness),a(Bt.ClearcoatNormal),a(Bt.SheenColor),a(Bt.SheenRoughness),a(Bt.Transmission),a(Bt.Thickness),a(Bt.Specular),a(Bt.SpecularColor),a(Bt.Iridescence),a(Bt.IridescenceThickness),a(Bt.Anisotropy)}async[wh](){if(this[bs]!=null){const t=await this[bs].doLazyLoad();return this[Tc](),this[bs]=void 0,this.ensureLoaded=async()=>{},t}return null}colorFromRgb(t){const e=new Mt;return t instanceof Array?e.fromArray(t):e.set(t),e}[ft](){if(this[bs]!=null)throw new Error(`Material "${this.name}" has not been loaded, call 'await
    myMaterial.ensureLoaded()' before using an unloaded material.`)}async ensureLoaded(){await this[wh]()}get isLoaded(){return this[bs]==null}get isActive(){return this[Bc]}[Hr](t){this[Bc]=t}get name(){return this[Rc]||""}set name(t){if(this[Rc]=t,this[Gt]!=null)for(const e of this[Gt])e.name=t}get pbrMetallicRoughness(){return this[ft](),this[gp]}get normalTexture(){return this[ft](),this[_p]}get occlusionTexture(){return this[ft](),this[vp]}get emissiveTexture(){return this[ft](),this[Ep]}get emissiveFactor(){return this[ft](),this[pe].emissive.toArray()}get index(){return this[xp]}hasVariant(t){const e=this[Sp].get(t);return e!=null&&this[Ws].has(e.index)}setEmissiveFactor(t){this[ft]();const e=this.colorFromRgb(t);for(const n of this[Gt])n.emissive.set(e);this[ne]()}[bc](){return this[pe].transparent?"BLEND":this[pe].alphaTest>0?"MASK":"OPAQUE"}[yp](){this[ft]();for(const t of this[Gt])this[bc]()==="MASK"?t.alphaTest==null&&(t.alphaTest=.5):t.alphaTest=void 0,t.needsUpdate=!0}setAlphaCutoff(t){this[ft]();for(const e of this[Gt])e.alphaTest=t,e.needsUpdate=!0;this[yp](),this[ne]()}getAlphaCutoff(){return this[ft](),this[pe].alphaTest}setDoubleSided(t){this[ft]();for(const e of this[Gt])e.side=t?2:0,e.needsUpdate=!0;this[ne]()}getDoubleSided(){return this[ft](),this[pe].side==2}setAlphaMode(t){this[ft]();const e=(n,i)=>{n.transparent=i,n.depthWrite=!i};for(const n of this[Gt])e(n,t==="BLEND"),n.alphaTest=t==="MASK"?.5:void 0,n.needsUpdate=!0;this[ne]()}getAlphaMode(){return this[ft](),this[bc]()}get emissiveStrength(){return this[ft](),this[pe].emissiveIntensity}setEmissiveStrength(t){this[ft]();for(const e of this[Gt])e.emissiveIntensity=t;this[ne]()}get clearcoatFactor(){return this[ft](),this[pe].clearcoat}get clearcoatRoughnessFactor(){return this[ft](),this[pe].clearcoatRoughness}get clearcoatTexture(){return this[ft](),this[Ze].get(Bt.Clearcoat)}get clearcoatRoughnessTexture(){return this[ft](),this[Ze].get(Bt.ClearcoatRoughness)}get clearcoatNormalTexture(){return this[ft](),this[Ze].get(Bt.ClearcoatNormal)}get clearcoatNormalScale(){return this[ft](),this[pe].clearcoatNormalScale.x}setClearcoatFactor(t){this[ft]();for(const e of this[Gt])e.clearcoat=t;this[ne]()}setClearcoatRoughnessFactor(t){this[ft]();for(const e of this[Gt])e.clearcoatRoughness=t;this[ne]()}setClearcoatNormalScale(t){this[ft]();for(const e of this[Gt])e.clearcoatNormalScale=new Ut(t,t);this[ne]()}get ior(){return this[ft](),this[pe].ior}setIor(t){this[ft]();for(const e of this[Gt])e.ior=t;this[ne]()}get sheenColorFactor(){return this[ft](),this[pe].sheenColor.toArray()}get sheenColorTexture(){return this[ft](),this[Ze].get(Bt.SheenColor)}get sheenRoughnessFactor(){return this[ft](),this[pe].sheenRoughness}get sheenRoughnessTexture(){return this[ft](),this[Ze].get(Bt.SheenRoughness)}setSheenColorFactor(t){this[ft]();const e=this.colorFromRgb(t);for(const n of this[Gt])n.sheenColor.set(e),n.sheen=1;this[ne]()}setSheenRoughnessFactor(t){this[ft]();for(const e of this[Gt])e.sheenRoughness=t,e.sheen=1;this[ne]()}get transmissionFactor(){return this[ft](),this[pe].transmission}get transmissionTexture(){return this[ft](),this[Ze].get(Bt.Transmission)}setTransmissionFactor(t){this[ft]();for(const e of this[Gt])e.transmission=t;this[ne]()}get thicknessFactor(){return this[ft](),this[pe].thickness}get thicknessTexture(){return this[ft](),this[Ze].get(Bt.Thickness)}get attenuationDistance(){return this[ft](),this[pe].attenuationDistance}get attenuationColor(){return this[ft](),this[pe].attenuationColor.toArray()}setThicknessFactor(t){this[ft]();for(const e of this[Gt])e.thickness=t;this[ne]()}setAttenuationDistance(t){this[ft]();for(const e of this[Gt])e.attenuationDistance=t;this[ne]()}setAttenuationColor(t){this[ft]();const e=this.colorFromRgb(t);for(const n of this[Gt])n.attenuationColor.set(e);this[ne]()}get specularFactor(){return this[ft](),this[pe].specularIntensity}get specularTexture(){return this[ft](),this[Ze].get(Bt.Specular)}get specularColorFactor(){return this[ft](),this[pe].specularColor.toArray()}get specularColorTexture(){return this[ft](),this[Ze].get(Bt.SheenColor)}setSpecularFactor(t){this[ft]();for(const e of this[Gt])e.specularIntensity=t;this[ne]()}setSpecularColorFactor(t){this[ft]();const e=this.colorFromRgb(t);for(const n of this[Gt])n.specularColor.set(e);this[ne]()}get iridescenceFactor(){return this[ft](),this[pe].iridescence}get iridescenceTexture(){return this[ft](),this[Ze].get(Bt.Iridescence)}get iridescenceIor(){return this[ft](),this[pe].iridescenceIOR}get iridescenceThicknessMinimum(){return this[ft](),this[pe].iridescenceThicknessRange[0]}get iridescenceThicknessMaximum(){return this[ft](),this[pe].iridescenceThicknessRange[1]}get iridescenceThicknessTexture(){return this[ft](),this[Ze].get(Bt.IridescenceThickness)}setIridescenceFactor(t){this[ft]();for(const e of this[Gt])e.iridescence=t;this[ne]()}setIridescenceIor(t){this[ft]();for(const e of this[Gt])e.iridescenceIOR=t;this[ne]()}setIridescenceThicknessMinimum(t){this[ft]();for(const e of this[Gt])e.iridescenceThicknessRange[0]=t;this[ne]()}setIridescenceThicknessMaximum(t){this[ft]();for(const e of this[Gt])e.iridescenceThicknessRange[1]=t;this[ne]()}get anisotropyStrength(){return this[ft](),this[pe].anisotropy}get anisotropyRotation(){return this[ft](),this[pe].anisotropyRotation}get anisotropyTexture(){return this[ft](),this[Ze].get(Bt.Anisotropy)}setAnisotropyStrength(t){this[ft]();for(const e of this[Gt])e.anisotropy=t;this[ne]()}setAnisotropyRotation(t){this[ft]();for(const e of this[Gt])e.anisotropyRotation=t;this[ne]()}}class $m{constructor(t){this.name="",this.children=new Array,this.name=t}}class Lc extends $m{constructor(t,e,n,i){super(t.name),this.materials=new Map,this.variantToMaterialMap=new Map,this.initialMaterialIdx=0,this.activeMaterialIdx=0,this.mesh=t;const{gltf:s,threeGLTF:a,threeObjectMap:o}=i;this.parser=a.parser,this.modelVariants=n,this.mesh.userData.variantData=n;const l=o.get(t.material);l.materials!=null?this.initialMaterialIdx=this.activeMaterialIdx=l.materials:console.error(`Primitive (${t.name}) missing initial material reference.`);const c=t.userData.associations||{};if(c.meshes==null)return void console.error("Mesh is missing primitive index association");const h=((s.meshes||[])[c.meshes].primitives||[])[c.primitives];if(h!=null){if(h.material!=null)this.materials.set(h.material,e[h.material]);else{const u=e.findIndex(d=>d.name==="Default");u>=0?this.materials.set(u,e[u]):console.warn("gltfPrimitive has no material!")}if(h.extensions&&h.extensions.KHR_materials_variants){const u=h.extensions.KHR_materials_variants,d=a.parser.json.extensions.KHR_materials_variants.variants;for(const A of u.mappings){const m=e[A.material];this.materials.set(A.material,m);for(const g of A.variants){const{name:p}=d[g];this.variantToMaterialMap.set(g,m),m[Ws].add(g),n.has(p)||n.set(p,{name:p,index:g})}}}}else console.error("Mesh primitive definition is missing.")}async setActiveMaterial(t){const e=this.materials.get(t);if(t!==this.activeMaterialIdx){const n=e[Gt],i=await e[wh]();this.mesh.material=i??n.values().next().value,this.parser.assignFinalMaterial(this.mesh),n.add(this.mesh.material),this.activeMaterialIdx=t}return this.mesh.material}getActiveMaterial(){return this.materials.get(this.activeMaterialIdx)}getMaterial(t){return this.materials.get(t)}async enableVariant(t){if(t==null)return this.setActiveMaterial(this.initialMaterialIdx);if(this.variantToMaterialMap!=null&&this.modelVariants.has(t)){const e=this.modelVariants.get(t);return this.enableVariantHelper(e.index)}return null}async enableVariantHelper(t){if(this.variantToMaterialMap!=null&&t!=null){const e=this.variantToMaterialMap.get(t);if(e!=null)return this.setActiveMaterial(e.index)}return null}async instantiateVariants(){if(this.variantToMaterialMap!=null)for(const t of this.variantToMaterialMap.keys()){const e=this.mesh.userData.variantMaterials.get(t);if(e.material!=null)continue;const n=await this.enableVariantHelper(t);n!=null&&(e.material=n)}}get variantInfo(){return this.variantToMaterialMap}addVariant(t,e){if(!this.ensureVariantIsUnused(e))return!1;this.modelVariants.has(e)||this.modelVariants.set(e,{name:e,index:this.modelVariants.size});const n=this.modelVariants.get(e).index;return t[Ws].add(n),this.variantToMaterialMap.set(n,t),this.materials.set(t.index,t),this.updateVariantUserData(n,t),!0}deleteVariant(t){if(this.variantInfo.has(t)){this.variantInfo.delete(t);const e=this.mesh.userData.variantMaterials;e!=null&&e.delete(t)}}updateVariantUserData(t,e){e[Ws].add(t),this.mesh.userData.variantData=this.modelVariants,this.mesh.userData.variantMaterials=this.mesh.userData.variantMaterials||new Map,this.mesh.userData.variantMaterials.set(t,{material:e[Gt].values().next().value,gltfMaterialIndex:e.index})}ensureVariantIsUnused(t){const e=this.modelVariants.get(t);return e==null||!this.variantInfo.has(e.index)||(console.warn(`Primitive cannot add variant '${t}' for this material, it already exists.`),!1)}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cp,Mp,Ip,wp,bp,Tp;const Oi=Symbol("materials"),to=Symbol("hierarchy"),Bp=Symbol("roots"),Zn=Symbol("primitives"),Jm=Symbol("prepareVariantsForExport"),jm=Symbol("switchVariant"),Zm=Symbol("materialFromPoint"),bh=Symbol("nodeFromPoint"),tg=Symbol("nodeFromIndex"),Qe=Symbol("variantData"),Th=Symbol("availableVariants"),Fc=Symbol("modelOnUpdate"),Rp=Symbol("cloneMaterial");class BM{constructor(t,e,n,i){this.gltf=t,this.gltfElementMap=e,this.mapKey=n,this.doLazyLoad=i}}class RM{constructor(t,e=()=>{}){this[Cp]=new Array,this[Mp]=new Array,this[Ip]=new Array,this[wp]=new Array,this[bp]=()=>{},this[Tp]=new Map,this[Fc]=e;const{gltf:n,threeGLTF:i,gltfElementMap:s}=t;for(const[l,c]of n.materials.entries()){const h=s.get(c);if(h!=null)this[Oi].push(new Dc(e,l,!0,this[Qe],h,c.name));else{const u=(n.materials||[])[l],d=new Set;s.set(u,d);const A=async()=>{const m=await i.parser.getDependency("material",l);return d.add(m),m};this[Oi].push(new Dc(e,l,!1,this[Qe],d,c.name,new BM(n,s,u,A)))}}const a=new Map,o=new Array;for(const l of i.scene.children)o.push(l);for(;o.length>0;){const l=o.pop();let c=null;l instanceof le?(c=new Lc(l,this.materials,this[Qe],t),this[Zn].push(c)):c=new $m(l.name);const h=a.get(l);h!=null?h.children.push(c):this[Bp].push(c),this[to].push(c);for(const u of l.children)o.push(u),a.set(l,c)}}get materials(){return this[Oi]}[(Cp=Oi,Mp=to,Ip=Bp,wp=Zn,bp=Fc,Tp=Qe,Th)](){const t=Array.from(this[Qe].values());return t.sort((e,n)=>e.index-n.index),t.map(e=>e.name)}getMaterialByName(t){const e=this[Oi].filter(n=>n.name===t);return e.length>0?e[0]:null}[tg](t,e){const n=this[to].find(i=>{if(i instanceof Lc){const{meshes:s,primitives:a}=i.mesh.userData.associations;if(s==t&&a==e)return!0}return!1});return n??null}[bh](t){return this[to].find(e=>e instanceof Lc&&e.mesh===t.object)}[Zm](t){return this[bh](t).getActiveMaterial()}async[jm](t){for(const e of this[Zn])await e.enableVariant(t);for(const e of this.materials)e[Hr](!1);for(const e of this[Zn])this.materials[e.getActiveMaterial().index][Hr](!0)}async[Jm](){const t=new Array;for(const e of this[Zn])t.push(e.instantiateVariants());await Promise.all(t)}[Rp](t,e){const n=this.materials[t];n.isLoaded||console.error(`Cloning an unloaded material,
           call 'material.ensureLoaded() before cloning the material.`);const i=n[Gt],s=new Set;for(const[o,l]of i.entries()){const c=l.clone();c.name=e+(i.size>1?"_inst"+o:""),s.add(c)}const a=new Dc(this[Fc],this[Oi].length,!1,this[Qe],s,e);return this[Oi].push(a),a}createMaterialInstanceForVariant(t,e,n,i=!0){let s=null;for(const a of this[Zn]){const o=this[Qe].get(n);o!=null&&a.variantInfo.has(o.index)||a.getMaterial(t)!=null&&(this.hasVariant(n)||this.createVariant(n),s==null&&(s=this[Rp](t,e)),a.addVariant(s,n))}if(i&&s!=null){s[Hr](!0),this.materials[t][Hr](!1);for(const a of this[Zn])a.enableVariant(n)}return s}createVariant(t){this[Qe].has(t)?console.warn(`Variant '${t}'' already exists`):this[Qe].set(t,{name:t,index:this[Qe].size})}hasVariant(t){return this[Qe].has(t)}setMaterialToVariant(t,e){if(this[Th]().find(n=>n===e)!=null)if(t<0||t>=this.materials.length)console.error("setMaterialToVariant(): materialIndex is out of bounds.");else for(const n of this[Zn]){const i=n.getMaterial(t);i!=null&&n.addVariant(i,e)}else console.warn(`Can't add material to '${e}', the variant does not exist.'`)}updateVariantName(t,e){const n=this[Qe].get(t);n!=null&&(n.name=e,this[Qe].set(e,n),this[Qe].delete(t))}deleteVariant(t){const e=this[Qe].get(t);if(e!=null){for(const n of this.materials)n.hasVariant(t)&&n[Ws].delete(e.index);for(const n of this[Zn])n.deleteVariant(e.index);this[Qe].delete(t)}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pc=function(r,t,e,n){for(var i,s=arguments.length,a=s<3?t:n,o=r.length-1;o>=0;o--)(i=r[o])&&(a=(s<3?i(a):s>3?i(t,e,a):i(t,e))||a);return s>3&&a&&Object.defineProperty(t,e,a),a};const wo=Symbol("currentGLTF"),bo=Symbol("originalGltfJson"),Xi=Symbol("model"),Uc=Symbol("getOnUpdateMethod"),Tr=Symbol("buildTexture");/* @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM extends le{constructor(){super(void 0,new An({depthWrite:!1})),this.height=0,this.radius=0,this.resolution=0,this.userData.noHit=!0}get map(){return this.material.map}set map(t){this.material.map=t}isUsable(){return this.height>0&&this.radius>0&&this.geometry!=null&&this.map!=null}updateGeometry(t=this.height,e=this.radius,n=128){t==this.height&&e==this.radius&&n==this.resolution||(this.height=t,this.radius=e,this.resolution=n,t>0&&e>0&&(this.geometry.dispose(),this.geometry=function(i,s,a){const o=new Wh(s,2*a,a);o.scale(1,1,-1);const l=o.getAttribute("position"),c=new B;for(let h=0;h<l.count;++h)if(c.fromBufferAttribute(l,h),c.y<0){const u=3*-i/2,d=c.y<u?-i/c.y:1-c.y*c.y/(3*u*u);c.multiplyScalar(d),c.toArray(l.array,3*h)}return l.needsUpdate=!0,o}(t,e,n)))}}const eo=new B,Nc=new B,Qc=new B,no=new Nt,Dp=new ln,Lp=new $e;class eg extends qS{constructor(t){super(document.createElement("div")),this.normal=new B(0,1,0),this.initialized=!1,this.referenceCount=1,this.pivot=document.createElement("div"),this.slot=document.createElement("slot"),this.element.classList.add("annotation-wrapper"),this.slot.name=t.name,this.element.appendChild(this.pivot),this.pivot.appendChild(this.slot),this.updatePosition(t.position),this.updateNormal(t.normal),this.surface=t.surface}get facingCamera(){return!this.element.classList.contains("hide")}show(){this.facingCamera&&this.initialized||this.updateVisibility(!0)}hide(){!this.facingCamera&&this.initialized||this.updateVisibility(!1)}increment(){this.referenceCount++}decrement(){return this.referenceCount>0&&--this.referenceCount,this.referenceCount===0}updatePosition(t){if(t==null)return;const e=ai(t)[0].terms;for(let n=0;n<3;++n)this.position.setComponent(n,Nn(e[n]).number);this.updateMatrixWorld()}updateNormal(t){if(t==null)return;const e=ai(t)[0].terms;for(let n=0;n<3;++n)this.normal.setComponent(n,e[n].number)}updateSurface(){const{mesh:t,tri:e,bary:n}=this;if(t==null||e==null||n==null)return;t.getVertexPosition(e.x,eo),t.getVertexPosition(e.y,Nc),t.getVertexPosition(e.z,Qc),eo.toArray(no.elements,0),Nc.toArray(no.elements,3),Qc.toArray(no.elements,6),this.position.copy(n).applyMatrix3(no);const i=this.parent;i.worldToLocal(t.localToWorld(this.position)),Dp.set(eo,Nc,Qc),Dp.getNormal(this.normal).transformDirection(t.matrixWorld);const s=i.parent;Lp.setFromAxisAngle(eo.set(0,1,0),-s.rotation.y),this.normal.applyQuaternion(Lp)}orient(t){this.pivot.style.transform=`rotate(${t}rad)`}updateVisibility(t){this.element.classList.toggle("hide",!t),this.slot.assignedNodes().forEach(e=>{if(e.nodeType!==Node.ELEMENT_NODE)return;const n=e,i=n.dataset.visibilityAttribute;if(i!=null){const s=`data-${i}`;n.toggleAttribute(s,t)}n.dispatchEvent(new CustomEvent("hotspot-visibility",{detail:{visible:t}}))}),this.initialized=!0}}const LM={name:"HorizontalBlurShader",uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},FM={name:"VerticalBlurShader",uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`};function Fp(r,t,e){return(1-e)*r+e*t}/* @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM extends ue{constructor(t,e,n){super(),this.camera=new er,this.renderTarget=null,this.renderTargetBlur=null,this.depthMaterial=new Uf,this.horizontalBlurMaterial=new tn(LM),this.verticalBlurMaterial=new tn(FM),this.intensity=0,this.softness=1,this.boundingBox=new Ke,this.size=new B,this.maxDimension=0,this.isAnimated=!1,this.needsUpdate=!1;const{camera:i}=this;i.rotation.x=Math.PI/2,i.left=-.5,i.right=.5,i.bottom=-.5,i.top=.5,this.add(i);const s=new Qn,a=new An({opacity:1,transparent:!0,side:1});this.floor=new le(s,a),this.floor.userData.noHit=!0,i.add(this.floor),this.blurPlane=new le(s),this.blurPlane.visible=!1,i.add(this.blurPlane),t.target.add(this),this.depthMaterial.onBeforeCompile=function(o){o.fragmentShader=o.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * opacity );")},this.horizontalBlurMaterial.depthTest=!1,this.verticalBlurMaterial.depthTest=!1,this.setScene(t,e,n)}setScene(t,e,n){const{boundingBox:i,size:s,rotation:a,position:o}=this;if(this.isAnimated=t.animationNames.length>0,this.boundingBox.copy(t.boundingBox),this.size.copy(t.size),this.maxDimension=Math.max(s.x,s.y,s.z)*(this.isAnimated?2:1),this.boundingBox.getCenter(o),n==="back"){const{min:l,max:c}=i;[l.y,l.z]=[l.z,l.y],[c.y,c.z]=[c.z,c.y],[s.y,s.z]=[s.z,s.y],a.x=Math.PI/2,a.y=Math.PI}else a.x=0,a.y=0;if(this.isAnimated){const l=i.min.y,c=i.max.y;s.y=this.maxDimension,i.expandByVector(s.subScalar(this.maxDimension).multiplyScalar(-.5)),i.min.y=l,i.max.y=c,s.set(this.maxDimension,c-l,this.maxDimension)}n==="bottom"?o.y=i.min.y:o.z=i.min.y,this.setSoftness(e)}setSoftness(t){this.softness=t;const{size:e,camera:n}=this,i=this.isAnimated?2:1,s=i*Math.pow(2,9-3*t);this.setMapSize(s);const a=e.y/2,o=e.y*i;n.near=0,n.far=Fp(o,a,t),this.depthMaterial.opacity=1/t,n.updateProjectionMatrix(),this.setIntensity(this.intensity),this.setOffset(0)}setMapSize(t){const{size:e}=this;this.isAnimated&&(t*=2);const n=Math.floor(e.x>e.z?t:t*e.x/e.z),i=Math.floor(e.x>e.z?t*e.z/e.x:t),s=10+n,a=10+i;if(this.renderTarget==null||this.renderTarget.width===s&&this.renderTarget.height===a||(this.renderTarget.dispose(),this.renderTarget=null,this.renderTargetBlur.dispose(),this.renderTargetBlur=null),this.renderTarget==null){const o={format:1023};this.renderTarget=new fn(s,a,o),this.renderTargetBlur=new fn(s,a,o),this.floor.material.map=this.renderTarget.texture}this.camera.scale.set(e.x*(1+10/n),e.z*(1+10/i),1),this.needsUpdate=!0}setIntensity(t){this.intensity=t,t>0?(this.visible=!0,this.floor.visible=!0,this.floor.material.opacity=t*Fp(.3,1,this.softness*this.softness)):(this.visible=!1,this.floor.visible=!1)}getIntensity(){return this.intensity}setOffset(t){this.floor.position.z=-t+this.gap()}gap(){return .001*this.maxDimension}render(t,e){e.overrideMaterial=this.depthMaterial;const n=t.getClearAlpha();t.setClearAlpha(0),this.floor.visible=!1;const i=t.xr.enabled;t.xr.enabled=!1;const s=t.getRenderTarget();t.setRenderTarget(this.renderTarget),t.render(e,this.camera),e.overrideMaterial=null,this.floor.visible=!0,this.blurShadow(t),t.xr.enabled=i,t.setRenderTarget(s),t.setClearAlpha(n)}blurShadow(t){const{camera:e,horizontalBlurMaterial:n,verticalBlurMaterial:i,renderTarget:s,renderTargetBlur:a,blurPlane:o}=this;o.visible=!0,o.material=n,n.uniforms.h.value=1/this.renderTarget.width,n.uniforms.tDiffuse.value=this.renderTarget.texture,t.setRenderTarget(a),t.render(o,e),o.material=i,i.uniforms.v.value=1/this.renderTarget.height,i.uniforms.tDiffuse.value=this.renderTargetBlur.texture,t.setRenderTarget(s),t.render(o,e),o.visible=!1}dispose(){this.renderTarget!=null&&this.renderTarget.dispose(),this.renderTargetBlur!=null&&this.renderTargetBlur.dispose(),this.depthMaterial.dispose(),this.horizontalBlurMaterial.dispose(),this.verticalBlurMaterial.dispose(),this.floor.material.dispose(),this.floor.geometry.dispose(),this.blurPlane.geometry.dispose(),this.removeFromParent()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=new B,Pp=new B,Up=new B,io=new Lx,UM=new B,Br=new Ut;class NM extends Ii{constructor({canvas:t,element:e,width:n,height:i}){super(),this.annotationRenderer=new XS,this.effectRenderer=null,this.schemaElement=document.createElement("script"),this.width=1,this.height=1,this.aspect=1,this.scaleStep=0,this.renderCount=0,this.externalRenderer=null,this.camera=new Be(45,1,.1,100),this.xrCamera=null,this.url=null,this.pivot=new ue,this.target=new ue,this.animationNames=[],this.boundingBox=new Ke,this.boundingSphere=new gn,this.size=new B,this.idealAspect=0,this.framedFoVDeg=0,this.shadow=null,this.shadowIntensity=0,this.shadowSoftness=1,this.bakedShadows=new Set,this.exposure=1,this.toneMapping=4,this.canScale=!0,this.isDirty=!1,this.goalTarget=new B,this.targetDamperX=new Ye,this.targetDamperY=new Ye,this.targetDamperZ=new Ye,this._currentGLTF=null,this._model=null,this.cancelPendingSourceChange=null,this.animationsByName=new Map,this.currentAnimationAction=null,this.groundedSkybox=new DM,this.name="ModelScene",this.element=e,this.canvas=t,this.camera=new Be(45,1,.1,100),this.camera.name="MainCamera",this.add(this.pivot),this.pivot.name="Pivot",this.pivot.add(this.target),this.setSize(n,i),this.target.name="Target",this.mixer=new Dx(this.target);const{domElement:s}=this.annotationRenderer,{style:a}=s;a.display="none",a.pointerEvents="none",a.position="absolute",a.top="0",this.element.shadowRoot.querySelector(".default").appendChild(s),this.schemaElement.setAttribute("type","application/ld+json")}get context(){return this.canvas.getContext("2d")}getCamera(){return this.xrCamera!=null?this.xrCamera:this.camera}queueRender(){this.isDirty=!0}shouldRender(){return this.isDirty}hasRendered(){this.isDirty=!1}forceRescale(){this.scaleStep=-1,this.queueRender()}async setObject(t){this.reset(),this._model=t,this.target.add(t),await this.setupScene()}async setSource(t,e=()=>{}){if(!t||t===this.url)return void e(1);if(this.reset(),this.url=t,this.externalRenderer!=null){const o=await this.externalRenderer.load(e);return this.boundingSphere.radius=o.framedRadius,void(this.idealAspect=o.fieldOfViewAspect)}let n;this.cancelPendingSourceChange!=null&&(this.cancelPendingSourceChange(),this.cancelPendingSourceChange=null);try{n=await new Promise(async(o,l)=>{this.cancelPendingSourceChange=()=>l();try{o(await this.element[re].loader.load(t,this.element,e))}catch(c){l(c)}})}catch(o){if(o==null)return;throw o}this.cancelPendingSourceChange=null,this.reset(),this.url=t,this._currentGLTF=n,n!=null&&(this._model=n.scene,this.target.add(n.scene));const{animations:i}=n,s=new Map,a=[];for(const o of i)s.set(o.name,o),a.push(o.name);this.animations=i,this.animationsByName=s,this.animationNames=a,await this.setupScene()}async setupScene(){this.applyTransform(),this.updateBoundingBox(),await this.updateFraming(),this.updateShadow(),this.setShadowIntensity(this.shadowIntensity),this.setGroundedSkybox()}reset(){this.url=null,this.renderCount=0,this.queueRender(),this.shadow!=null&&this.shadow.setIntensity(0),this.bakedShadows.clear();const{_model:t}=this;t!=null&&(t.removeFromParent(),this._model=null);const e=this._currentGLTF;e!=null&&(e.dispose(),this._currentGLTF=null),this.currentAnimationAction!=null&&(this.currentAnimationAction.stop(),this.currentAnimationAction=null),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this)}dispose(){this.reset(),this.shadow!=null&&(this.shadow.dispose(),this.shadow=null),this.element[wo]=null,this.element[bo]=null,this.element[Xi]=null}get currentGLTF(){return this._currentGLTF}setSize(t,e){if(this.width!==t||this.height!==e){if(this.width=Math.max(t,1),this.height=Math.max(e,1),this.annotationRenderer.setSize(t,e),this.aspect=this.width/this.height,this.externalRenderer!=null){const n=window.devicePixelRatio;this.externalRenderer.resize(t*n,e*n)}this.queueRender()}}markBakedShadow(t){t.userData.noHit=!0,this.bakedShadows.add(t)}unmarkBakedShadow(t){t.userData.noHit=!1,t.visible=!0,this.bakedShadows.delete(t),this.boundingBox.expandByObject(t)}findBakedShadows(t){const e=new Ke;t.traverse(n=>{const i=n;if(!i.material||!i.material.transparent)return;e.setFromObject(i);const s=e.getSize(UM),a=Math.min(s.x,s.y,s.z);Math.max(s.x,s.y,s.z)<100*a||this.markBakedShadow(i)})}checkBakedShadows(){const{min:t,max:e}=this.boundingBox,n=new Ke;this.boundingBox.getSize(this.size);for(const i of this.bakedShadows)n.setFromObject(i),n.min.y<t.y+this.size.y/100&&n.min.x<=t.x&&n.max.x>=e.x&&n.min.z<=t.z&&n.max.z>=e.z||n.min.z<t.z+this.size.z/100&&n.min.x<=t.x&&n.max.x>=e.x&&n.min.y<=t.y&&n.max.y>=e.y||this.unmarkBakedShadow(i)}applyTransform(){const{model:t}=this;if(t==null)return;const e=ai(this.element.orientation)[0].terms,n=Nn(e[0]).number,i=Nn(e[1]).number,s=Nn(e[2]).number;t.quaternion.setFromEuler(new mn(i,s,n,"YXZ"));const a=ai(this.element.scale)[0].terms;t.scale.set(a[0].number,a[1].number,a[2].number)}updateBoundingBox(){const{model:t}=this;if(t==null)return;this.target.remove(t),this.findBakedShadows(t);const e=(n,i)=>n.expandByPoint(i);this.setBakedShadowVisibility(!1),this.boundingBox=Ga(t,e,new Ke),this.boundingBox.isEmpty()&&(this.setBakedShadowVisibility(!0),this.bakedShadows.forEach(n=>this.unmarkBakedShadow(n)),this.boundingBox=Ga(t,e,new Ke)),this.checkBakedShadows(),this.setBakedShadowVisibility(),this.boundingBox.getSize(this.size),this.target.add(t)}async updateFraming(){const{model:t}=this;if(t==null)return;this.target.remove(t),this.setBakedShadowVisibility(!1);const{center:e}=this.boundingSphere;this.element.requestUpdate("cameraTarget"),await this.element.updateComplete,e.copy(this.getTarget()),this.boundingSphere.radius=Math.sqrt(Ga(t,(n,i)=>Math.max(n,e.distanceToSquared(i)),0)),this.idealAspect=Ga(t,(n,i)=>{i.sub(e);const s=Math.sqrt(i.x*i.x+i.z*i.z);return Math.max(n,s/(this.idealCameraDistance()-Math.abs(i.y)))},0)/Math.tan(this.framedFoVDeg/2*Math.PI/180),this.setBakedShadowVisibility(),this.target.add(t)}setBakedShadowVisibility(t=this.shadowIntensity<=0){for(const e of this.bakedShadows)e.visible=t}idealCameraDistance(){const t=this.framedFoVDeg/2*Math.PI/180;return this.boundingSphere.radius/Math.sin(t)}adjustedFoV(t){const e=Math.tan(t/2*Math.PI/180)*Math.max(1,this.idealAspect/this.aspect);return 2*Math.atan(e)*180/Math.PI}getNDC(t,e){if(this.xrCamera!=null)Br.set(t/window.screen.width,e/window.screen.height);else{const n=this.element.getBoundingClientRect();Br.set((t-n.x)/this.width,(e-n.y)/this.height)}return Br.multiplyScalar(2).subScalar(1),Br.y*=-1,Br}getSize(){return{width:this.width,height:this.height}}setEnvironmentAndSkybox(t,e){this.element[re].arRenderer.presentedScene!==this&&(this.environment=t,this.setBackground(e),this.queueRender())}setBackground(t){this.groundedSkybox.map=t,this.groundedSkybox.isUsable()?(this.target.add(this.groundedSkybox),this.background=null):(this.target.remove(this.groundedSkybox),this.background=t)}farRadius(){return this.boundingSphere.radius*(this.groundedSkybox.parent!=null?10:1)}setGroundedSkybox(){const t=ai(this.element.skyboxHeight)[0].terms[0],e=Nn(t).number,n=10*this.boundingSphere.radius;this.groundedSkybox.updateGeometry(e,n),this.groundedSkybox.position.y=e-(this.shadow?2*this.shadow.gap():0),this.setBackground(this.groundedSkybox.map)}setTarget(t,e,n){this.goalTarget.set(-t,-e,-n)}setTargetDamperDecayTime(t){this.targetDamperX.setDecayTime(t),this.targetDamperY.setDecayTime(t),this.targetDamperZ.setDecayTime(t)}getTarget(){return this.goalTarget.clone().multiplyScalar(-1)}getDynamicTarget(){return this.target.position.clone().multiplyScalar(-1)}jumpToGoal(){this.updateTarget(1e4)}updateTarget(t){const e=this.goalTarget,n=this.target.position;if(e.equals(n))return!1;{const i=this.boundingSphere.radius/10;let{x:s,y:a,z:o}=n;return s=this.targetDamperX.update(s,e.x,t,i),a=this.targetDamperY.update(a,e.y,t,i),o=this.targetDamperZ.update(o,e.z,t,i),this.groundedSkybox.position.x=-s,this.groundedSkybox.position.z=-o,this.target.position.set(s,a,o),this.target.updateMatrixWorld(),this.queueRender(),!0}}pointTowards(t,e){const{x:n,z:i}=this.position;this.yaw=Math.atan2(t-n,e-i)}get model(){return this._model}set yaw(t){this.pivot.rotation.y=t,this.groundedSkybox.rotation.y=-t,this.queueRender()}get yaw(){return this.pivot.rotation.y}set animationTime(t){this.mixer.setTime(t),this.queueShadowRender()}get animationTime(){if(this.currentAnimationAction!=null){const t=Math.max(this.currentAnimationAction._loopCount,0);return this.currentAnimationAction.loop!==2202||1&~t?this.currentAnimationAction.time:this.duration-this.currentAnimationAction.time}return 0}set animationTimeScale(t){this.mixer.timeScale=t}get animationTimeScale(){return this.mixer.timeScale}get duration(){return this.currentAnimationAction!=null&&this.currentAnimationAction.getClip()?this.currentAnimationAction.getClip().duration:0}get hasActiveAnimation(){return this.currentAnimationAction!=null}playAnimation(t=null,e=0,n=2201,i=1/0){if(this._currentGLTF==null)return;const{animations:s}=this;if(s==null||s.length===0)return;let a=null;if(t!=null&&(a=this.animationsByName.get(t),a==null)){const o=parseInt(t);!isNaN(o)&&o>=0&&o<s.length&&(a=s[o])}a==null&&(a=s[0]);try{const{currentAnimationAction:o}=this,l=this.mixer.clipAction(a,this);this.currentAnimationAction=l,this.element.paused?this.mixer.stopAllAction():(l.paused=!1,o!=null&&l!==o?l.crossFadeFrom(o,e,!1):this.animationTimeScale>0&&this.animationTime==this.duration&&(this.animationTime=0)),l.setLoop(n,i),l.enabled=!0,l.clampWhenFinished=!0,l.play()}catch(o){console.error(o)}}stopAnimation(){this.currentAnimationAction=null,this.mixer.stopAllAction()}updateAnimation(t){this.mixer.update(t),this.queueShadowRender()}subscribeMixerEvent(t,e){this.mixer.addEventListener(t,e)}updateShadow(){const t=this.shadow;if(t!=null){const e=this.element.arPlacement==="wall"?"back":"bottom";t.setScene(this,this.shadowSoftness,e),t.needsUpdate=!0}}renderShadow(t){const e=this.shadow;e!=null&&e.needsUpdate==1&&(e.render(t,this),e.needsUpdate=!1)}queueShadowRender(){this.shadow!=null&&(this.shadow.needsUpdate=!0)}setShadowIntensity(t){if(this.shadowIntensity=t,this._currentGLTF!=null&&(this.setBakedShadowVisibility(),!(t<=0&&this.shadow==null))){if(this.shadow==null){const e=this.element.arPlacement==="wall"?"back":"bottom";this.shadow=new PM(this,this.shadowSoftness,e)}this.shadow.setIntensity(t)}}setShadowSoftness(t){this.shadowSoftness=t;const e=this.shadow;e!=null&&e.setSoftness(t)}setShadowOffset(t){const e=this.shadow;e!=null&&e.setOffset(t)}getHit(t=this){return io.intersectObject(t,!0).find(e=>e.object.visible&&!e.object.userData.noHit)}hitFromController(t,e=this){return io.setFromXRController(t),this.getHit(e)}hitFromPoint(t,e=this){return io.setFromCamera(t,this.getCamera()),this.getHit(e)}positionAndNormalFromPoint(t,e=this){var n;const i=this.hitFromPoint(t,e);return i==null?null:{position:i.point,normal:i.face!=null?i.face.normal.clone().applyNormalMatrix(new Nt().getNormalMatrix(i.object.matrixWorld)):io.ray.direction.clone().multiplyScalar(-1),uv:(n=i.uv)!==null&&n!==void 0?n:null}}surfaceFromPoint(t,e=this){const n=this.element.model;if(n==null)return null;const i=this.hitFromPoint(t,e);if(i==null||i.face==null)return null;const s=n[bh](i),{meshes:a,primitives:o}=s.mesh.userData.associations,l=new B,c=new B,h=new B,{a:u,b:d,c:A}=i.face,m=i.object;m.getVertexPosition(u,l),m.getVertexPosition(d,c),m.getVertexPosition(A,h);const g=new ln(l,c,h),p=new B;return g.getBarycoord(m.worldToLocal(i.point),p),`${a} ${o} ${u} ${d} ${A} ${p.x.toFixed(3)} ${p.y.toFixed(3)} ${p.z.toFixed(3)}`}addHotspot(t){this.target.add(t),this.annotationRenderer.domElement.appendChild(t.element),this.updateSurfaceHotspot(t)}removeHotspot(t){this.target.remove(t)}forHotspots(t){const{children:e}=this.target;for(let n=0,i=e.length;n<i;n++){const s=e[n];s instanceof eg&&t(s)}}updateSurfaceHotspot(t){if(t.surface==null||this.element.model==null)return;const e=ai(t.surface)[0].terms;if(e.length!=8)return void console.warn(t.surface+" does not have exactly 8 numbers.");const n=this.element.model[tg](e[0].number,e[1].number);if(n==null)return void console.warn(t.surface+" does not match a node/primitive in this glTF! Skipping this hotspot.");const i=n.mesh.geometry.attributes.position.count,s=new B(e[2].number,e[3].number,e[4].number);if(s.x>=i||s.y>=i||s.z>=i)return void console.warn(t.surface+" vertex indices out of range in this glTF! Skipping this hotspot.");const a=new B(e[5].number,e[6].number,e[7].number);t.mesh=n.mesh,t.tri=s,t.bary=a,t.updateSurface()}animateSurfaceHotspots(){this.element.paused||this.forHotspots(t=>{t.updateSurface()})}updateHotspotsVisibility(t){this.forHotspots(e=>{Oc.copy(t),Pp.setFromMatrixPosition(e.matrixWorld),Oc.sub(Pp),Up.copy(e.normal).transformDirection(this.target.matrixWorld),Oc.dot(Up)<0?e.hide():e.show()})}orientHotspots(t){this.forHotspots(e=>{e.orient(t)})}setHotspotsVisibility(t){this.forHotspots(e=>{e.visible=t})}updateSchema(t){var e;const{schemaElement:n,element:i}=this,{alt:s,poster:a,iosSrc:o}=i;if(t!=null){const l=[{"@type":"MediaObject",contentUrl:t,encodingFormat:((e=t.split(".").pop())===null||e===void 0?void 0:e.toLowerCase())==="gltf"?"model/gltf+json":"model/gltf-binary"}];o&&l.push({"@type":"MediaObject",contentUrl:o,encodingFormat:"model/vnd.usdz+zip"});const c={"@context":"http://schema.org/","@type":"3DModel",image:a??void 0,name:s??void 0,encoding:l};n.textContent=JSON.stringify(c),document.head.appendChild(n)}else n.parentElement!=null&&n.parentElement.removeChild(n)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM extends EventTarget{constructor(){super(...arguments),this.ongoingActivities=new Set,this.totalProgress=0}get ongoingActivityCount(){return this.ongoingActivities.size}beginActivity(t){const e={progress:0,completed:!1};return this.ongoingActivities.add(e),this.ongoingActivityCount===1&&this.announceTotalProgress(e,0,t),n=>{let i;return i=Math.max(Pn(n,0,1),e.progress),i!==e.progress&&this.announceTotalProgress(e,i,t),e.progress}}announceTotalProgress(t,e,n){let i=0,s=0;e==1&&(t.completed=!0);for(const l of this.ongoingActivities){const{progress:c}=l;i+=1-c,l.completed&&s++}const a=t.progress;t.progress=e,this.totalProgress+=(e-a)*(1-this.totalProgress)/i;const o=s===this.ongoingActivityCount?1:this.totalProgress;this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:o,reason:n}})),s===this.ongoingActivityCount&&(this.totalProgress=0,this.ongoingActivities.clear())}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Np,Qp,Op,kp,Gp,Hp,Vp,zp,Wp,qp,Xp,Yp,Kp,so=function(r,t,e,n){for(var i,s=arguments.length,a=s<3?t:n,o=r.length-1;o>=0;o--)(i=r[o])&&(a=(s<3?i(a):s>3?i(t,e,a):i(t,e))||a);return s>3&&a&&Object.defineProperty(t,e,a),a};const Ci=document.createElement("canvas"),kc=Symbol("fallbackResizeHandler"),$p=Symbol("defaultAriaLabel"),ro=Symbol("resizeObserver"),Ts=Symbol("clearModelTimeout"),Gc=Symbol("onContextLost"),Bs=Symbol("loaded"),Hc=Symbol("status"),Vc=Symbol("onFocus"),zc=Symbol("onBlur"),Us=Symbol("updateSize"),ao=Symbol("intersectionObserver"),Yi=Symbol("isElementInViewport"),Go=Symbol("announceModelVisibility"),Gs=Symbol("ariaLabel"),Bh=Symbol("altDefaulted"),Rr=Symbol("statusElement"),Ho=Symbol("updateStatus"),Vr=Symbol("loadedTime"),qs=Symbol("updateSource"),Jp=Symbol("markLoaded"),To=Symbol("container"),Sn=Symbol("input"),Rh=Symbol("canvas"),st=Symbol("scene"),Oe=Symbol("needsRender"),Rn=Symbol("tick"),Dn=Symbol("onModelLoad"),Vo=Symbol("onResize"),re=Symbol("renderer"),Ji=Symbol("progressTracker"),jp=Symbol("getLoaded"),ji=Symbol("getModelIsVisible"),Hs=Symbol("shouldAttemptPreload"),vi=r=>({x:r.x,y:r.y,z:r.z,toString(){return`${this.x}m ${this.y}m ${this.z}m`}}),Dh=r=>({u:r.x,v:r.y,toString(){return`${this.u} ${this.v}`}});class zr extends $i{constructor(){super(),this.alt=null,this.src=null,this.withCredentials=!1,this.generateSchema=!1,this[Np]=!1,this[Qp]=!1,this[Op]=0,this[kp]="",this[Gp]=null,this[Hp]=kd(()=>{const i=this.getBoundingClientRect();this[Us](i)},50),this[Vp]=kd(i=>{const s=this.modelIsVisible;s!==i&&this.dispatchEvent(new CustomEvent("model-visibility",{detail:{visible:s}}))},0),this[zp]=null,this[Wp]=null,this[qp]=new QM,this[Xp]=()=>{this[Rr].textContent=this[Hc]},this[Yp]=()=>{this[Rr].textContent=""},this[Kp]=i=>{this.dispatchEvent(new CustomEvent("error",{detail:{type:"webglcontextlost",sourceError:i.sourceEvent}}))},this.attachShadow({mode:"open"});const t=this.shadowRoot;let e,n;if((i=>{Zf(tS,i)})(t),this[To]=t.querySelector(".container"),this[Sn]=t.querySelector(".userInput"),this[Rh]=t.querySelector("canvas"),this[Rr]=t.querySelector("#status"),this[$p]=this[Sn].getAttribute("aria-label"),this.isConnected){const i=this.getBoundingClientRect();e=i.width,n=i.height}else e=300,n=150;this[st]=new NM({canvas:this[Rh],element:this,width:e,height:n}),Promise.resolve().then(()=>{this[Us](this.getBoundingClientRect())}),Wl&&(this[ro]=new ResizeObserver(i=>{if(!this[re].isPresenting)for(let s of i)s.target===this&&this[Us](s.contentRect)})),ql?this[ao]=new IntersectionObserver(i=>{for(let s of i)if(s.target===this){const a=this.modelIsVisible;this[Yi]=s.isIntersecting,this[Go](a),this[Yi]&&!this.loaded&&this[qs]()}},{root:null,rootMargin:"0px",threshold:1e-5}):this[Yi]=!0}static get is(){return"model-viewer"}static set modelCacheSize(t){Xe[Ei].evictionThreshold=t}static get modelCacheSize(){return Xe[Ei].evictionThreshold}static set minimumRenderScale(t){t>1&&console.warn("<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."),t<=0&&console.warn("<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25."),In.singleton.minScale=t}static get minimumRenderScale(){return In.singleton.minScale}get loaded(){return this[jp]()}get[(Np=Yi,Qp=Bs,Op=Vr,kp=Hc,Gp=Ts,Hp=kc,Vp=Go,zp=ro,Wp=ao,qp=Ji,re)](){return In.singleton}get modelIsVisible(){return this[ji]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),Wl?this[ro].observe(this):self.addEventListener("resize",this[kc]),ql&&this[ao].observe(this),this.addEventListener("focus",this[Vc]),this.addEventListener("blur",this[zc]);const t=this[re];t.addEventListener("contextlost",this[Gc]),t.registerScene(this[st]),this[Ts]!=null&&(self.clearTimeout(this[Ts]),this[Ts]=null,this.requestUpdate("src",null))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),Wl?this[ro].unobserve(this):self.removeEventListener("resize",this[kc]),ql&&this[ao].unobserve(this),this.removeEventListener("focus",this[Vc]),this.removeEventListener("blur",this[zc]);const t=this[re];t.removeEventListener("contextlost",this[Gc]),t.unregisterScene(this[st]),this[Ts]=self.setTimeout(()=>{this[st].dispose(),this[Ts]=null},10)}updated(t){super.updated(t),t.has("src")&&(this.src==null?(this[Bs]=!1,this[Vr]=0,this[st].reset()):this.src!==this[st].url&&(this[Bs]=!1,this[Vr]=0,this[qs]())),t.has("alt")&&this[Sn].setAttribute("aria-label",this[Gs]),t.has("generateSchema")&&(this.generateSchema?this[st].updateSchema(this.src):this[st].updateSchema(null))}toDataURL(t,e){return this[re].displayCanvas(this[st]).toDataURL(t,e)}async toBlob(t){const e=t?t.mimeType:void 0,n=t?t.qualityArgument:void 0,i=t?t.idealAspect:void 0,{width:s,height:a,idealAspect:o,aspect:l}=this[st],{dpr:c,scaleFactor:h}=this[re];let u=s*h*c,d=a*h*c,A=0,m=0;if(i===!0)if(o>l){const g=d;d=Math.round(u/o),m=(g-d)/2}else{const g=u;u=Math.round(d*o),A=(g-u)/2}Ci.width=u,Ci.height=d;try{return new Promise(async(g,p)=>{Ci.getContext("2d").drawImage(this[re].displayCanvas(this[st]),A,m,u,d,0,0,u,d),Ci.toBlob(f=>{if(!f)return p(new Error("Unable to retrieve canvas blob"));g(f)},e,n)})}finally{this[Us]({width:s,height:a})}}registerEffectComposer(t){t.setRenderer(this[re].threeRenderer),t.setMainCamera(this[st].getCamera()),t.setMainScene(this[st]),this[st].effectRenderer=t}unregisterEffectComposer(){this[st].effectRenderer=null}registerRenderer(t){this[st].externalRenderer=t}unregisterRenderer(){this[st].externalRenderer=null}get[Gs](){return this[Bh]}get[Bh](){return this.alt==null||this.alt==="null"?this[$p]:this.alt}[jp](){return this[Bs]}[ji](){return this.loaded&&this[Yi]}[Hs](){return!!this.src&&this[Yi]}[Us]({width:t,height:e}){t!==0&&e!==0&&(this[To].style.width=`${t}px`,this[To].style.height=`${e}px`,this[Vo]({width:t,height:e}))}[Rn](t,e){var n;(n=this[st].effectRenderer)===null||n===void 0||n.beforeRender(t,e)}[Jp](){this[Bs]||(this[Bs]=!0,this[Vr]=performance.now())}[Oe](){this[st].queueRender()}[Dn](){}[Ho](t){this[Hc]=t;const e=this.getRootNode();e!=null&&e.activeElement===this&&this[Rr].textContent!=t&&(this[Rr].textContent=t)}[(Xp=Vc,Yp=zc,Vo)](t){this[st].setSize(t.width,t.height)}async[(Kp=Gc,qs)](){const t=this[st];if(this.loaded||!this[Hs]()||this.src===t.url)return;this.generateSchema&&t.updateSchema(this.src),this[Ho]("Loading"),t.stopAnimation();const e=this[Ji].beginActivity("model-load"),n=this.src;try{const i=t.setSource(n,a=>e(.95*Pn(a,0,1))),s=this[Qo]();await Promise.all([i,s]),this[Jp](),this[Dn](),this.updateComplete.then(()=>{this.dispatchEvent(new CustomEvent("before-render"))}),await new Promise(a=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("load",{detail:{url:n}})),a()})})})}catch(i){this.dispatchEvent(new CustomEvent("error",{detail:{type:"loadfailure",sourceError:i}}))}finally{e(1)}}}so([wt({type:String})],zr.prototype,"alt",void 0),so([wt({type:String})],zr.prototype,"src",void 0),so([wt({type:Boolean,attribute:"with-credentials"})],zr.prototype,"withCredentials",void 0),so([wt({type:Boolean,attribute:"generate-schema"})],zr.prototype,"generateSchema",void 0);/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wc=function(r,t,e,n){for(var i,s=arguments.length,a=s<3?t:n,o=r.length-1;o>=0;o--)(i=r[o])&&(a=(s<3?i(a):s>3?i(t,e,a):i(t,e))||a);return s>3&&a&&Object.defineProperty(t,e,a),a};const oo=Symbol("changeAnimation"),ti=Symbol("paused"),OM={repetitions:1/0,pingpong:!1},ki=Symbol("hotspotMap"),qc=Symbol("mutationCallback"),Dr=Symbol("observer"),Xc=Symbol("addHotspot"),Zp=Symbol("removeHotspot"),Yc=new Rt;/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var He=Uint8Array,pn=Uint16Array,tu=Int32Array,eu=new He([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),nu=new He([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),tf=new He([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ng=function(r,t){for(var e=new pn(31),n=0;n<31;++n)e[n]=t+=1<<r[n-1];var i=new tu(e[30]);for(n=1;n<30;++n)for(var s=e[n];s<e[n+1];++s)i[s]=s-e[n]<<5|n;return{b:e,r:i}},ig=ng(eu,2),kM=ig.b,Lh=ig.r;kM[28]=258,Lh[258]=28;for(var ef=ng(nu,0).r,sg=new pn(32768),ge=0;ge<32768;++ge){var Gi=(43690&ge)>>1|(21845&ge)<<1;Gi=(61680&(Gi=(52428&Gi)>>2|(13107&Gi)<<2))>>4|(3855&Gi)<<4,sg[ge]=((65280&Gi)>>8|(255&Gi)<<8)>>1}var Yr=function(r,t,e){for(var n=r.length,i=0,s=new pn(t);i<n;++i)r[i]&&++s[r[i]-1];var a,o=new pn(t);for(i=1;i<t;++i)o[i]=o[i-1]+s[i-1]<<1;for(a=new pn(n),i=0;i<n;++i)r[i]&&(a[i]=sg[o[r[i]-1]++]>>15-r[i]);return a},ns=new He(288);for(ge=0;ge<144;++ge)ns[ge]=8;for(ge=144;ge<256;++ge)ns[ge]=9;for(ge=256;ge<280;++ge)ns[ge]=7;for(ge=280;ge<288;++ge)ns[ge]=8;var zo=new He(32);for(ge=0;ge<32;++ge)zo[ge]=5;var GM=Yr(ns,9),HM=Yr(zo,5),rg=function(r){return(r+7)/8|0},ag=function(r,t,e){return(e==null||e>r.length)&&(e=r.length),new He(r.subarray(t,e))},VM=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],jo=function(r,t,e){var n=new Error(t||VM[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,jo),!e)throw n;return n},ei=function(r,t,e){e<<=7&t;var n=t/8|0;r[n]|=e,r[n+1]|=e>>8},Lr=function(r,t,e){e<<=7&t;var n=t/8|0;r[n]|=e,r[n+1]|=e>>8,r[n+2]|=e>>16},Kc=function(r,t){for(var e=[],n=0;n<r.length;++n)r[n]&&e.push({s:n,f:r[n]});var i=e.length,s=e.slice();if(!i)return{t:lg,l:0};if(i==1){var a=new He(e[0].s+1);return a[e[0].s]=1,{t:a,l:1}}e.sort(function(M,C){return M.f-C.f}),e.push({s:-1,f:25001});var o=e[0],l=e[1],c=0,h=1,u=2;for(e[0]={s:-1,f:o.f+l.f,l:o,r:l};h!=i-1;)o=e[e[c].f<e[u].f?c++:u++],l=e[c!=h&&e[c].f<e[u].f?c++:u++],e[h++]={s:-1,f:o.f+l.f,l:o,r:l};var d=s[0].s;for(n=1;n<i;++n)s[n].s>d&&(d=s[n].s);var A=new pn(d+1),m=Fh(e[h-1],A,0);if(m>t){n=0;var g=0,p=m-t,f=1<<p;for(s.sort(function(M,C){return A[C.s]-A[M.s]||M.f-C.f});n<i;++n){var E=s[n].s;if(!(A[E]>t))break;g+=f-(1<<m-A[E]),A[E]=t}for(g>>=p;g>0;){var _=s[n].s;A[_]<t?g-=1<<t-A[_]++-1:++n}for(;n>=0&&g;--n){var y=s[n].s;A[y]==t&&(--A[y],++g)}m=t}return{t:new He(A),l:m}},Fh=function(r,t,e){return r.s==-1?Math.max(Fh(r.l,t,e+1),Fh(r.r,t,e+1)):t[r.s]=e},nf=function(r){for(var t=r.length;t&&!r[--t];);for(var e=new pn(++t),n=0,i=r[0],s=1,a=function(l){e[n++]=l},o=1;o<=t;++o)if(r[o]==i&&o!=t)++s;else{if(!i&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(i),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(i);s=1,i=r[o]}return{c:e.subarray(0,n),n:t}},Fr=function(r,t){for(var e=0,n=0;n<t.length;++n)e+=r[n]*t[n];return e},og=function(r,t,e){var n=e.length,i=rg(t+2);r[i]=255&n,r[i+1]=n>>8,r[i+2]=255^r[i],r[i+3]=255^r[i+1];for(var s=0;s<n;++s)r[i+s+4]=e[s];return 8*(i+4+n)},sf=function(r,t,e,n,i,s,a,o,l,c,h){ei(t,h++,e),++i[256];for(var u=Kc(i,15),d=u.t,A=u.l,m=Kc(s,15),g=m.t,p=m.l,f=nf(d),E=f.c,_=f.n,y=nf(g),M=y.c,C=y.n,x=new pn(19),T=0;T<E.length;++T)++x[31&E[T]];for(T=0;T<M.length;++T)++x[31&M[T]];for(var k=Kc(x,7),v=k.t,I=k.l,N=19;N>4&&!v[tf[N-1]];--N);var U,G,q,L,Y=c+5<<3,z=Fr(i,ns)+Fr(s,zo)+a,Z=Fr(i,d)+Fr(s,g)+a+14+3*N+Fr(x,v)+2*x[16]+3*x[17]+7*x[18];if(l>=0&&Y<=z&&Y<=Z)return og(t,h,r.subarray(l,l+c));if(ei(t,h,1+(Z<z)),h+=2,Z<z){U=Yr(d,A),G=d,q=Yr(g,p),L=g;var tt=Yr(v,I);for(ei(t,h,_-257),ei(t,h+5,C-1),ei(t,h+10,N-4),h+=14,T=0;T<N;++T)ei(t,h+3*T,v[tf[T]]);h+=3*N;for(var nt=[E,M],Et=0;Et<2;++Et){var mt=nt[Et];for(T=0;T<mt.length;++T){var Q=31&mt[T];ei(t,h,tt[Q]),h+=v[Q],Q>15&&(ei(t,h,mt[T]>>5&127),h+=mt[T]>>12)}}}else U=GM,G=ns,q=HM,L=zo;for(T=0;T<o;++T){var X=n[T];if(X>255){Lr(t,h,U[(Q=X>>18&31)+257]),h+=G[Q+257],Q>7&&(ei(t,h,X>>23&31),h+=eu[Q]);var rt=31&X;Lr(t,h,q[rt]),h+=L[rt],rt>3&&(Lr(t,h,X>>5&8191),h+=nu[rt])}else Lr(t,h,U[X]),h+=G[X]}return Lr(t,h,U[256]),h+G[256]},zM=new tu([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),lg=new He(0),WM=function(){for(var r=new Int32Array(256),t=0;t<256;++t){for(var e=t,n=9;--n;)e=(1&e&&-306674912)^e>>>1;r[t]=e}return r}(),qM=function(){var r=-1;return{p:function(t){for(var e=r,n=0;n<t.length;++n)e=WM[255&e^t[n]]^e>>>8;r=e},d:function(){return~r}}},XM=function(r,t,e,n,i){if(!i&&(i={l:1},t.dictionary)){var s=t.dictionary.subarray(-32768),a=new He(s.length+r.length);a.set(s),a.set(r,s.length),r=a,i.w=s.length}return function(o,l,c,h,u,d){var A=d.z||o.length,m=new He(h+A+5*(1+Math.ceil(A/7e3))+u),g=m.subarray(h,m.length-u),p=d.l,f=7&(d.r||0);if(l){f&&(g[0]=d.r>>3);for(var E=zM[l-1],_=E>>13,y=8191&E,M=(1<<c)-1,C=d.p||new pn(32768),x=d.h||new pn(M+1),T=Math.ceil(c/3),k=2*T,v=function(b){return(o[b]^o[b+1]<<T^o[b+2]<<k)&M},I=new tu(25e3),N=new pn(288),U=new pn(32),G=0,q=0,L=d.i||0,Y=0,z=d.w||0,Z=0;L+2<A;++L){var tt=v(L),nt=32767&L,Et=x[tt];if(C[nt]=Et,x[tt]=nt,z<=L){var mt=A-L;if((G>7e3||Y>24576)&&(mt>423||!p)){f=sf(o,g,0,I,N,U,q,Y,Z,L-Z,f),Y=G=q=0,Z=L;for(var Q=0;Q<286;++Q)N[Q]=0;for(Q=0;Q<30;++Q)U[Q]=0}var X=2,rt=0,at=y,At=nt-Et&32767;if(mt>2&&tt==v(L-At))for(var It=Math.min(_,mt)-1,zt=Math.min(32767,L),Zt=Math.min(258,mt);At<=zt&&--at&&nt!=Et;){if(o[L+X]==o[L+X-At]){for(var Qt=0;Qt<Zt&&o[L+Qt]==o[L+Qt-At];++Qt);if(Qt>X){if(X=Qt,rt=At,Qt>It)break;var R=Math.min(At,Qt-2),Pe=0;for(Q=0;Q<R;++Q){var Ht=L-At+Q&32767,Wt=Ht-C[Ht]&32767;Wt>Pe&&(Pe=Wt,Et=Ht)}}}At+=(nt=Et)-(Et=C[nt])&32767}if(rt){I[Y++]=268435456|Lh[X]<<18|ef[rt];var bt=31&Lh[X],ce=31&ef[rt];q+=eu[bt]+nu[ce],++N[257+bt],++U[ce],z=L+X,++G}else I[Y++]=o[L],++N[o[L]]}}for(L=Math.max(L,z);L<A;++L)I[Y++]=o[L],++N[o[L]];f=sf(o,g,p,I,N,U,q,Y,Z,L-Z,f),p||(d.r=7&f|g[f/8|0]<<3,f-=7,d.h=x,d.p=C,d.i=L,d.w=z)}else{for(L=d.w||0;L<A+p;L+=65535){var Tt=L+65535;Tt>=A&&(g[f/8|0]=p,Tt=A),f=og(g,f+1,o.subarray(L,Tt))}d.i=A}return ag(m,0,h+rg(f)+u)}(r,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(r.length)))):20:12+t.mem,e,n,i)},cg=function(r,t){var e={};for(var n in r)e[n]=r[n];for(var n in t)e[n]=t[n];return e},Fe=function(r,t,e){for(;e;++t)r[t]=e,e>>>=8};function YM(r,t){return XM(r,t||{},0,0)}var hg=function(r,t,e,n){for(var i in r){var s=r[i],a=t+i,o=n;Array.isArray(s)&&(o=cg(n,s[1]),s=s[0]),s instanceof He?e[a]=[s,o]:(e[a+="/"]=[new He(0),o],hg(s,a,e,n))}},rf=typeof TextEncoder<"u"&&new TextEncoder,KM=typeof TextDecoder<"u"&&new TextDecoder;try{KM.decode(lg,{stream:!0})}catch{}function Wo(r,t){var e;if(rf)return rf.encode(r);var n=r.length,i=new He(r.length+(r.length>>1)),s=0,a=function(c){i[s++]=c};for(e=0;e<n;++e){if(s+5>i.length){var o=new He(s+8+(n-e<<1));o.set(i),i=o}var l=r.charCodeAt(e);l<128||t?a(l):l<2048?(a(192|l>>6),a(128|63&l)):l>55295&&l<57344?(a(240|(l=65536+(1047552&l)|1023&r.charCodeAt(++e))>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|63&l)):(a(224|l>>12),a(128|l>>6&63),a(128|63&l))}return ag(i,0,s)}var Ph=function(r){var t=0;if(r)for(var e in r){var n=r[e].length;n>65535&&jo(9),t+=n+4}return t},af=function(r,t,e,n,i,s,a,o){var l=n.length,c=e.extra,h=o&&o.length,u=Ph(c);Fe(r,t,a!=null?33639248:67324752),t+=4,a!=null&&(r[t++]=20,r[t++]=e.os),r[t]=20,t+=2,r[t++]=e.flag<<1|(s<0&&8),r[t++]=i&&8,r[t++]=255&e.compression,r[t++]=e.compression>>8;var d=new Date(e.mtime==null?Date.now():e.mtime),A=d.getFullYear()-1980;if((A<0||A>119)&&jo(10),Fe(r,t,A<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>1),t+=4,s!=-1&&(Fe(r,t,e.crc),Fe(r,t+4,s<0?-s-2:s),Fe(r,t+8,e.size)),Fe(r,t+12,l),Fe(r,t+14,u),t+=16,a!=null&&(Fe(r,t,h),Fe(r,t+6,e.attrs),Fe(r,t+10,a),t+=14),r.set(n,t),t+=l,u)for(var m in c){var g=c[m],p=g.length;Fe(r,t,+m),Fe(r,t+2,p),r.set(g,t+4),t+=4+p}return h&&(r.set(o,t),t+=h),t};function $M(r,t){var e={},n=[];hg(r,"",e,t);var i=0,s=0;for(var a in e){var o=e[a],l=o[0],c=o[1],h=c.level==0?0:8,u=(x=Wo(a)).length,d=c.comment,A=d&&Wo(d),m=A&&A.length,g=Ph(c.extra);u>65535&&jo(11);var p=h?YM(l,c):l,f=p.length,E=qM();E.p(l),n.push(cg(c,{size:l.length,crc:E.d(),c:p,f:x,m:A,u:u!=a.length||A&&d.length!=m,o:i,compression:h})),i+=30+u+g+f,s+=76+2*(u+g)+(m||0)+f}for(var _=new He(s+22),y=i,M=s-i,C=0;C<n.length;++C){var x=n[C];af(_,x.o,x,x.f,x.u,x.c.length);var T=30+x.f.length+Ph(x.extra);_.set(x.c,x.o+T),af(_,i,x,x.f,x.u,x.c.length,x.o,x.m),i+=16+T+(x.m?x.m.length:0)}return function(k,v,I,N,U){Fe(k,v,101010256),Fe(k,v+8,I),Fe(k,v+10,I),Fe(k,v+12,N),Fe(k,v+16,U)}(_,i,n.length,M,y),_}class JM{parse(t,e,n,i){this.parseAsync(t,i).then(e).catch(n)}async parseAsync(t,e={}){e=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,quickLookCompatible:!1,maxTextureSize:1024},e);const n={},i="model.usda";n[i]=null;let s=of();s+=function(c){return`def Xform "Root"
{
	def Scope "Scenes" (
		kind = "sceneLibrary"
	)
	{
		def Xform "Scene" (
			customData = {
				bool preliminary_collidesWithEnvironment = 0
				string sceneName = "Scene"
			}
			sceneName = "Scene"
		)
		{${c.includeAnchoringProperties===!0?`
		token preliminary:anchoring:type = "${c.ar.anchoring.type}"
		token preliminary:planeAnchoring:alignment = "${c.ar.planeAnchoring.alignment}"
	`:""}
`}(e);const a={},o={};t.traverseVisible(c=>{if(c.isMesh){const h=c.geometry,u=c.material;if(u.isMeshStandardMaterial){const d="geometries/Geometry_"+h.id+".usda";if(!(d in n)){const A=function(m){return`
def "Geometry"
{
${function(p){const f="Geometry",E=p.attributes,_=E.position.count;return`
	def Mesh "${f}"
	{
		int[] faceVertexCounts = [${function(y){const M=y.index!==null?y.index.count:y.attributes.position.count;return Array(M/3).fill(3).join(", ")}(p)}]
		int[] faceVertexIndices = [${function(y){const M=y.index,C=[];if(M!==null)for(let x=0;x<M.count;x++)C.push(M.getX(x));else{const x=y.attributes.position.count;for(let T=0;T<x;T++)C.push(T)}return C.join(", ")}(p)}]
		normal3f[] normals = [${$c(E.normal,_)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${$c(E.position,_)}]
${function(y){let M="";for(let x=0;x<4;x++){const T=x>0?x:"",k=y["uv"+T];k!==void 0&&(M+=`
		texCoord2f[] primvars:st${T} = [${ZM(k)}] (
			interpolation = "vertex"
		)`)}const C=y.color;return C!==void 0&&(M+=`
	color3f[] primvars:displayColor = [${$c(C,C.count)}] (
		interpolation = "vertex"
		)`),M}(E)}
		uniform token subdivisionScheme = "none"
	}
`}(m)}
}
`}(h);n[d]=function(m){let g=of();return g+=m,Wo(g)}(A)}u.uuid in a||(a[u.uuid]=u),s+=function(A,m,g){const p="Object_"+A.id,f=lf(A.matrixWorld);return A.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",A),`def Xform "${p}" (
	prepend references = @./geometries/Geometry_${m.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${f}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${g.id}>
}

`}(c,h,u)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",c)}else c.isCamera&&(s+=function(h){const u=h.name?h.name:"Camera_"+h.id,d=lf(h.matrixWorld);return h.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",h),h.isOrthographicCamera?`def Camera "${u}"
		{
			matrix4d xformOp:transform = ${d}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${h.near.toPrecision(ke)}, ${h.far.toPrecision(ke)})
			float horizontalAperture = ${(10*(Math.abs(h.left)+Math.abs(h.right))).toPrecision(ke)}
			float verticalAperture = ${(10*(Math.abs(h.top)+Math.abs(h.bottom))).toPrecision(ke)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${u}"
		{
			matrix4d xformOp:transform = ${d}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${h.near.toPrecision(ke)}, ${h.far.toPrecision(ke)})
			float focalLength = ${h.getFocalLength().toPrecision(ke)}
			float focusDistance = ${h.focus.toPrecision(ke)}
			float horizontalAperture = ${h.getFilmWidth().toPrecision(ke)}
			token projection = "perspective"
			float verticalAperture = ${h.getFilmHeight().toPrecision(ke)}
		}
	
	`}(c))}),s+=`
		}
	}
}

`,s+=function(c,h,u=!1){const d=[];for(const A in c){const m=c[A];d.push(tI(m,h,u))}return`def "Materials"
{
${d.join("")}
}

`}(a,o,e.quickLookCompatible),n[i]=Wo(s),s=null;for(const c in o){let h=o[c];h.isCompressedTexture===!0&&(h=xo(h));const u=jM(h.image,h.flipY,e.maxTextureSize),d=await new Promise(A=>u.toBlob(A,"image/png",1));n[`textures/Texture_${c}.png`]=new Uint8Array(await d.arrayBuffer())}let l=0;for(const c in n){const h=n[c];l+=34+c.length;const u=63&l;if(u!==4){const d=new Uint8Array(64-u);n[c]=[h,{extra:{12345:d}}]}l=h.length}return $M(n,{level:0})}}function jM(r,t,e){if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&r instanceof ImageBitmap){const n=e/Math.max(r.width,r.height),i=document.createElement("canvas");i.width=r.width*Math.min(1,n),i.height=r.height*Math.min(1,n);const s=i.getContext("2d");return t===!0&&(s.translate(0,i.height),s.scale(1,-1)),s.drawImage(r,0,0,i.width,i.height),i}throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}const ke=7;function of(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function lf(r){const t=r.elements;return`( ${lo(t,0)}, ${lo(t,4)}, ${lo(t,8)}, ${lo(t,12)} )`}function lo(r,t){return`(${r[t+0]}, ${r[t+1]}, ${r[t+2]}, ${r[t+3]})`}function $c(r,t){if(r===void 0)return console.warn("USDZExporter: Normals missing."),Array(t).fill("(0, 0, 0)").join(", ");const e=[];for(let n=0;n<r.count;n++){const i=r.getX(n),s=r.getY(n),a=r.getZ(n);e.push(`(${i.toPrecision(ke)}, ${s.toPrecision(ke)}, ${a.toPrecision(ke)})`)}return e.join(", ")}function ZM(r){const t=[];for(let e=0;e<r.count;e++){const n=r.getX(e),i=r.getY(e);t.push(`(${n.toPrecision(ke)}, ${1-i.toPrecision(ke)})`)}return t.join(", ")}function tI(r,t,e=!1){const n="			",i=[],s=[];function a(o,l,c){const h=o.source.id+"_"+o.flipY;t[h]=o;const u=o.channel>0?"st"+o.channel:"st",d={1e3:"repeat",1001:"clamp",1002:"mirror"},A=o.repeat.clone(),m=o.offset.clone(),g=o.rotation,p=Math.sin(g),f=Math.cos(g);return m.y=1-m.y-A.y,e?(m.x=m.x/A.x,m.y=m.y/A.y,m.x+=p/A.x,m.y+=f-1):(m.x+=p*A.x,m.y+=(1-f)*A.y),`
		def Shader "PrimvarReader_${l}"
		{
			uniform token info:id = "UsdPrimvarReader_float2"
			float2 inputs:fallback = (0.0, 0.0)
			token inputs:varname = "${u}"
			float2 outputs:result
		}

		def Shader "Transform2d_${l}"
		{
			uniform token info:id = "UsdTransform2d"
			token inputs:in.connect = </Materials/Material_${r.id}/PrimvarReader_${l}.outputs:result>
			float inputs:rotation = ${(g*(180/Math.PI)).toFixed(ke)}
			float2 inputs:scale = ${hf(A)}
			float2 inputs:translation = ${hf(m)}
			float2 outputs:result
		}

		def Shader "Texture_${o.id}_${l}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${h}.png@
			float2 inputs:st.connect = </Materials/Material_${r.id}/Transform2d_${l}.outputs:result>
			${c!==void 0?"float4 inputs:scale = "+function(E){return`(${E.r}, ${E.g}, ${E.b}, 1.0)`}(c):""}
			token inputs:sourceColorSpace = "${o.colorSpace===Cn?"raw":"sRGB"}"
			token inputs:wrapS = "${d[o.wrapS]}"
			token inputs:wrapT = "${d[o.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${r.transparent||r.alphaTest>0?"float outputs:a":""}
		}`}return r.side===2&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",r),r.map!==null?(i.push(`${n}color3f inputs:diffuseColor.connect = </Materials/Material_${r.id}/Texture_${r.map.id}_diffuse.outputs:rgb>`),r.transparent?i.push(`${n}float inputs:opacity.connect = </Materials/Material_${r.id}/Texture_${r.map.id}_diffuse.outputs:a>`):r.alphaTest>0&&(i.push(`${n}float inputs:opacity.connect = </Materials/Material_${r.id}/Texture_${r.map.id}_diffuse.outputs:a>`),i.push(`${n}float inputs:opacityThreshold = ${r.alphaTest}`)),s.push(a(r.map,"diffuse",r.color))):i.push(`${n}color3f inputs:diffuseColor = ${cf(r.color)}`),r.emissiveMap!==null?(i.push(`${n}color3f inputs:emissiveColor.connect = </Materials/Material_${r.id}/Texture_${r.emissiveMap.id}_emissive.outputs:rgb>`),s.push(a(r.emissiveMap,"emissive",new Mt(r.emissive.r*r.emissiveIntensity,r.emissive.g*r.emissiveIntensity,r.emissive.b*r.emissiveIntensity)))):r.emissive.getHex()>0&&i.push(`${n}color3f inputs:emissiveColor = ${cf(r.emissive)}`),r.normalMap!==null&&(i.push(`${n}normal3f inputs:normal.connect = </Materials/Material_${r.id}/Texture_${r.normalMap.id}_normal.outputs:rgb>`),s.push(a(r.normalMap,"normal"))),r.aoMap!==null&&(i.push(`${n}float inputs:occlusion.connect = </Materials/Material_${r.id}/Texture_${r.aoMap.id}_occlusion.outputs:r>`),s.push(a(r.aoMap,"occlusion",new Mt(r.aoMapIntensity,r.aoMapIntensity,r.aoMapIntensity)))),r.roughnessMap!==null?(i.push(`${n}float inputs:roughness.connect = </Materials/Material_${r.id}/Texture_${r.roughnessMap.id}_roughness.outputs:g>`),s.push(a(r.roughnessMap,"roughness",new Mt(r.roughness,r.roughness,r.roughness)))):i.push(`${n}float inputs:roughness = ${r.roughness}`),r.metalnessMap!==null?(i.push(`${n}float inputs:metallic.connect = </Materials/Material_${r.id}/Texture_${r.metalnessMap.id}_metallic.outputs:b>`),s.push(a(r.metalnessMap,"metallic",new Mt(r.metalness,r.metalness,r.metalness)))):i.push(`${n}float inputs:metallic = ${r.metalness}`),r.alphaMap!==null?(i.push(`${n}float inputs:opacity.connect = </Materials/Material_${r.id}/Texture_${r.alphaMap.id}_opacity.outputs:r>`),i.push(`${n}float inputs:opacityThreshold = 0.0001`),s.push(a(r.alphaMap,"opacity"))):i.push(`${n}float inputs:opacity = ${r.opacity}`),r.isMeshPhysicalMaterial&&(r.clearcoatMap!==null?(i.push(`${n}float inputs:clearcoat.connect = </Materials/Material_${r.id}/Texture_${r.clearcoatMap.id}_clearcoat.outputs:r>`),s.push(a(r.clearcoatMap,"clearcoat",new Mt(r.clearcoat,r.clearcoat,r.clearcoat)))):i.push(`${n}float inputs:clearcoat = ${r.clearcoat}`),r.clearcoatRoughnessMap!==null?(i.push(`${n}float inputs:clearcoatRoughness.connect = </Materials/Material_${r.id}/Texture_${r.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`),s.push(a(r.clearcoatRoughnessMap,"clearcoatRoughness",new Mt(r.clearcoatRoughness,r.clearcoatRoughness,r.clearcoatRoughness)))):i.push(`${n}float inputs:clearcoatRoughness = ${r.clearcoatRoughness}`),i.push(`${n}float inputs:ior = ${r.ior}`)),`
	def Material "Material_${r.id}"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${i.join(`
`)}
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${r.id}/PreviewSurface.outputs:surface>

${s.join(`
`)}

	}
`}function cf(r){return`(${r.r}, ${r.g}, ${r.b})`}function hf(r){return`(${r.x}, ${r.y})`}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rs=function(r,t,e,n){for(var i,s=arguments.length,a=s<3?t:n,o=r.length-1;o>=0;o--)(i=r[o])&&(a=(s<3?i(a):s>3?i(t,e,a):i(t,e))||a);return s>3&&a&&Object.defineProperty(t,e,a),a};let uf=!1,df=!1;const Af="#model-viewer-no-ar-fallback",eI=(pf=["quick-look","scene-viewer","webxr","none"],r=>{try{const t=ai(r),e=(t.length?t[0].terms:[]).filter(n=>n&&n.type==="ident").map(n=>n.value).filter(n=>pf.indexOf(n)>-1);return new Set(e)}catch{}return new Set});var pf;const Jc="quick-look",ff="scene-viewer",mf="webxr",Pr="none",ni=Symbol("arButtonContainer"),gf=Symbol("enterARWithWebXR"),_f=Symbol("openSceneViewer"),vf=Symbol("openIOSARQuickLook"),nI=Symbol("canActivateAR"),co=Symbol("arMode"),jc=Symbol("arModes"),Ds=Symbol("arAnchor"),ho=Symbol("preload"),uo=Symbol("onARButtonContainerClick"),Zc=Symbol("onARStatus"),th=Symbol("onARTracking"),eh=Symbol("onARTap"),Ur=Symbol("selectARMode"),nh=Symbol("triggerLoad");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ih=function(r,t,e,n){for(var i,s=arguments.length,a=s<3?t:n,o=r.length-1;o>=0;o--)(i=r[o])&&(a=(s<3?i(a):s>3?i(t,e,a):i(t,e))||a);return s>3&&a&&Object.defineProperty(t,e,a),a};const sh="auto",iI="auto",sI="eager",Ls=Symbol("defaultProgressBarElement"),rh=Symbol("posterContainerElement"),Fs=Symbol("defaultPosterElement"),Nr=Symbol("shouldDismissPoster"),ah=Symbol("hidePoster"),Ao=Symbol("modelIsRevealed"),oh=Symbol("updateProgressBar"),rI=Symbol("ariaLabelCallToAction"),lh=Symbol("onProgress");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ch=function(r,t,e,n){for(var i,s=arguments.length,a=s<3?t:n,o=r.length-1;o>=0;o--)(i=r[o])&&(a=(s<3?i(a):s>3?i(t,e,a):i(t,e))||a);return s>3&&a&&Object.defineProperty(t,e,a),a};const aI=Math.PI/32,oI={basis:[Jo(Ge(aI,"rad"))],keywords:{auto:[null]}},Ps=Symbol("autoRotateStartTime"),hh=Symbol("radiansPerSecond"),Ef=Symbol("syncRotationRate"),uh=Symbol("onCameraChange"),lI=(r=>{var t,e,n;class i extends r{constructor(){super(...arguments),this[t]=new Map,this[e]=a=>{a.forEach(o=>{o instanceof MutationRecord&&o.type!=="childList"||(o.addedNodes.forEach(l=>{this[Xc](l)}),o.removedNodes.forEach(l=>{this[Zp](l)}),this[Oe]())})},this[n]=new MutationObserver(this[qc])}connectedCallback(){super.connectedCallback();for(let o=0;o<this.children.length;++o)this[Xc](this.children[o]);const{ShadyDOM:a}=self;a==null?this[Dr].observe(this,{childList:!0}):this[Dr]=a.observeChildren(this,this[qc])}disconnectedCallback(){super.disconnectedCallback();const{ShadyDOM:a}=self;a==null?this[Dr].disconnect():a.unobserveChildren(this[Dr])}[(t=ki,e=qc,n=Dr,Dn)](){super[Dn]();const a=this[st];a.forHotspots(o=>{a.updateSurfaceHotspot(o)})}[Rn](a,o){super[Rn](a,o);const l=this[st],{annotationRenderer:c}=l,h=l.getCamera();l.shouldRender()&&(l.animateSurfaceHotspots(),l.updateHotspotsVisibility(h.position),c.domElement.style.display="",c.render(l,h))}updateHotspot(a){const o=this[ki].get(a.name);o!=null&&(o.updatePosition(a.position),o.updateNormal(a.normal),o.surface=a.surface,this[st].updateSurfaceHotspot(o),this[Oe]())}queryHotspot(a){const o=this[ki].get(a);if(o==null)return null;const l=vi(o.position),c=vi(o.normal),h=o.facingCamera,u=this[st],d=u.getCamera(),A=new B;A.setFromMatrixPosition(o.matrixWorld),A.project(d);const m=u.width/2,g=u.height/2;A.x=A.x*m+m,A.y=-A.y*g+g;const p=vi(new B(A.x,A.y,A.z));return Number.isFinite(p.x)&&Number.isFinite(p.y)?{position:l,normal:c,canvasPosition:p,facingCamera:h}:null}positionAndNormalFromPoint(a,o){const l=this[st],c=l.getNDC(a,o),h=l.positionAndNormalFromPoint(c);if(h==null)return null;Yc.copy(l.target.matrixWorld).invert();const u=vi(h.position.applyMatrix4(Yc)),d=vi(h.normal.transformDirection(Yc));let A=null;return h.uv!=null&&(A=Dh(h.uv)),{position:u,normal:d,uv:A}}surfaceFromPoint(a,o){const l=this[st],c=l.getNDC(a,o);return l.surfaceFromPoint(c)}[Xc](a){if(!(a instanceof HTMLElement&&a.slot.indexOf("hotspot")===0))return;let o=this[ki].get(a.slot);o!=null?o.increment():(o=new eg({name:a.slot,position:a.dataset.position,normal:a.dataset.normal,surface:a.dataset.surface}),this[ki].set(a.slot,o),this[st].addHotspot(o)),this[st].queueRender()}[Zp](a){if(!(a instanceof HTMLElement))return;const o=this[ki].get(a.slot);o&&(o.decrement()&&(this[st].removeHotspot(o),this[ki].delete(a.slot)),this[st].queueRender())}}return i})((r=>{var t,e,n;class i extends r{constructor(){super(...arguments),this[t]=void 0,this[e]=null,this[n]=null,this.variantName=null,this.orientation="0 0 0",this.scale="1 1 1"}get model(){return this[Xi]}get availableVariants(){return this.model?this.model[Th]():[]}get originalGltfJson(){return this[bo]}[(t=Xi,e=wo,n=bo,Uc)](){return()=>{this[Oe]()}}[Tr](a){return a.colorSpace=me,a.wrapS=1e3,a.wrapT=1e3,new qm(this[Uc](),a)}async createTexture(a,o="image/png"){const{textureUtils:l}=this[re],c=await l.loadImage(a,this.withCredentials);return c.userData.mimeType=o,this[Tr](c)}async createLottieTexture(a,o=1){const{textureUtils:l}=this[re],c=await l.loadLottie(a,o,this.withCredentials);return this[Tr](c)}createVideoTexture(a){const o=document.createElement("video");o.crossOrigin=this.withCredentials?"use-credentials":"anonymous",o.src=a,o.muted=!0,o.playsInline=!0,o.loop=!0,o.play();const l=new Zy(o);return this[Tr](l)}createCanvasTexture(){const a=document.createElement("canvas"),o=new kf(a);return this[Tr](o)}async updated(a){if(super.updated(a),a.has("variantName")){const o=this[Ji].beginActivity("variant-update");o(.1);const l=this[Xi],{variantName:c}=this;l!=null&&(await l[jm](c),this[Oe](),this.dispatchEvent(new CustomEvent("variant-applied"))),o(1)}if(a.has("orientation")||a.has("scale")){if(!this.loaded)return;const o=this[st];o.applyTransform(),o.updateBoundingBox(),o.updateShadow(),this[re].arRenderer.onUpdateScene(),this[Oe]()}}[Dn](){super[Dn]();const{currentGLTF:a}=this[st];if(a!=null){const{correlatedSceneGraph:o}=a;o!=null&&a!==this[wo]&&(this[Xi]=new RM(o,this[Uc]()),this[bo]=JSON.parse(JSON.stringify(o.gltf))),"variants"in a.userData&&this.requestUpdate("variantName")}this[wo]=a}async exportScene(a){const o=this[st];return new Promise(async(l,c)=>{const h={binary:!0,onlyVisible:!0,maxTextureSize:1/0,includeCustomExtensions:!1,forceIndices:!1};Object.assign(h,a),h.animations=o.animations,h.truncateDrawRange=!0;const u=o.shadow;let d=!1;u!=null&&(d=u.visible,u.visible=!1),await this[Xi][Jm](),new jh().register(A=>new CC(A)).parse(o.model,A=>l(new Blob([h.binary?A:JSON.stringify(A)],{type:h.binary?"application/octet-stream":"application/json"})),()=>c("glTF export failed"),h),u!=null&&(u.visible=d)})}materialFromPoint(a,o){const l=this[Xi];if(l==null)return null;const c=this[st],h=c.getNDC(a,o),u=c.hitFromPoint(h);return u==null||u.face==null?null:l[Zm](u)}}return Pc([wt({type:String,attribute:"variant-name"})],i.prototype,"variantName",void 0),Pc([wt({type:String,attribute:"orientation"})],i.prototype,"orientation",void 0),Pc([wt({type:String,attribute:"scale"})],i.prototype,"scale",void 0),i})((r=>{var t,e,n;class i extends r{constructor(){super(...arguments),this.autoRotate=!1,this.autoRotateDelay=3e3,this.rotationPerSecond="auto",this[t]=performance.now(),this[e]=0,this[n]=a=>{this.autoRotate&&a.detail.source==="user-interaction"&&(this[Ps]=performance.now())}}connectedCallback(){super.connectedCallback(),this.addEventListener("camera-change",this[uh]),this[Ps]=performance.now()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("camera-change",this[uh]),this[Ps]=performance.now()}updated(a){super.updated(a),a.has("autoRotate")&&(this[Ps]=performance.now())}[(t=Ps,e=hh,Ef)](a){this[hh]=a[0]}[Rn](a,o){if(super[Rn](a,o),!this.autoRotate||!this[ji]()||this[re].isPresenting)return;const l=Math.min(o,a-this[Ps]-this.autoRotateDelay);l>0&&(this[st].yaw=this.turntableRotation+this[hh]*l*.001)}get turntableRotation(){return this[st].yaw}resetTurntableRotation(a=0){this[st].yaw=a}}return n=uh,ch([wt({type:Boolean,attribute:"auto-rotate"})],i.prototype,"autoRotate",void 0),ch([wt({type:Number,attribute:"auto-rotate-delay"})],i.prototype,"autoRotateDelay",void 0),ch([gi({intrinsics:oI,updateHandler:Ef}),wt({type:String,attribute:"rotation-per-second"})],i.prototype,"rotationPerSecond",void 0),i})((r=>{var t,e,n;class i extends r{constructor(){super(...arguments),this.environmentImage=null,this.skyboxImage=null,this.shadowIntensity=0,this.shadowSoftness=1,this.exposure=1,this.toneMapping="auto",this.skyboxHeight="0",this[t]=null,this[e]=null,this[n]=null}updated(a){super.updated(a),a.has("shadowIntensity")&&(this[st].setShadowIntensity(.5*this.shadowIntensity),this[Oe]()),a.has("shadowSoftness")&&(this[st].setShadowSoftness(this.shadowSoftness),this[Oe]()),a.has("exposure")&&(this[st].exposure=this.exposure,this[Oe]()),a.has("toneMapping")&&(this[st].toneMapping=this.toneMapping==="aces"?4:this.toneMapping==="agx"?6:7,this[Oe]()),(a.has("environmentImage")||a.has("skyboxImage"))&&this[Hs]()&&this[Qo](),a.has("skyboxHeight")&&(this[st].setGroundedSkybox(),this[Oe]())}hasBakedShadow(){return this[st].bakedShadows.size>0}async[(t=Or,e=yo,n=Oa,Qo)](){const{skyboxImage:a,environmentImage:o}=this;this[Oa]!=null&&(this[Oa](),this[Oa]=null);const{textureUtils:l}=this[re];if(l==null)return;const c=this[Ji].beginActivity("environment-update");try{const{environmentMap:h,skybox:u}=await l.generateEnvironmentMapAndSkybox(rm(a),o,d=>c(Pn(d,0,1)),this.withCredentials);this[Or]!==h&&(this[Or]=h,this.dispatchEvent(new CustomEvent("environment-change"))),this[yo]=u!=null?u.name===h.name?h:u:null,this[st].setEnvironmentAndSkybox(this[Or],this[yo])}catch(h){if(h instanceof Error)throw this[st].setEnvironmentAndSkybox(null,null),h}finally{c(1)}}}return Ui([wt({type:String,attribute:"environment-image"})],i.prototype,"environmentImage",void 0),Ui([wt({type:String,attribute:"skybox-image"})],i.prototype,"skyboxImage",void 0),Ui([wt({type:Number,attribute:"shadow-intensity"})],i.prototype,"shadowIntensity",void 0),Ui([wt({type:Number,attribute:"shadow-softness"})],i.prototype,"shadowSoftness",void 0),Ui([wt({type:Number})],i.prototype,"exposure",void 0),Ui([wt({type:String,attribute:"tone-mapping"})],i.prototype,"toneMapping",void 0),Ui([wt({type:String,attribute:"skybox-height"})],i.prototype,"skyboxHeight",void 0),i})((r=>{var t,e,n,i,s,a,o,l,c,h,u,d,A,m,g,p,f,E;class _ extends r{constructor(){super(...arguments),this.cameraControls=!1,this.cameraOrbit=Pm,this.cameraTarget="auto auto auto",this.fieldOfView="auto",this.minCameraOrbit="auto",this.maxCameraOrbit="auto",this.minFieldOfView="auto",this.maxFieldOfView="auto",this.interactionPromptThreshold=3e3,this.interactionPrompt=Wa,this.interactionPromptStyle=RA,this.orbitSensitivity=1,this.zoomSensitivity=1,this.panSensitivity=1,this.touchAction=VC,this.disableZoom=!1,this.disablePan=!1,this.disableTap=!1,this.interpolationDecay=50,this.a11y=null,this[t]=this.shadowRoot.querySelector(".interaction-prompt"),this[e]=this.shadowRoot.querySelector("#prompt"),this[n]=[this.shadowRoot.querySelector("#finger0"),this.shadowRoot.querySelector("#finger1")],this[i]=this.shadowRoot.querySelector(".pan-target"),this[s]=0,this[a]=1/0,this[o]=!1,this[l]=!1,this[c]=Ee.AUTOMATIC,this[h]=new jC(this[st].camera,this[Sn],this[st]),this[u]=new go,this[d]=!1,this[A]=!1,this[m]=!1,this[g]={},this[p]=()=>{const M=this[se].changeSource;this[Ka]=M,M===Ee.USER_INTERACTION&&(this[Ya]=!0,this[Xa]())},this[f]=()=>{this[LA](),this[Oe]();const M=this[se].changeSource;this.dispatchEvent(new CustomEvent("camera-change",{detail:{source:M}}))},this[E]=M=>{this[To].classList.toggle("pointer-tumbling",M.type==="pointer-change-start")}}get inputSensitivity(){return this[se].inputSensitivity}set inputSensitivity(M){this[se].inputSensitivity=M}getCameraOrbit(){const{theta:M,phi:C,radius:x}=this[Cc];return{theta:M,phi:C,radius:x,toString(){return`${this.theta}rad ${this.phi}rad ${this.radius}m`}}}getCameraTarget(){return vi(this[re].isPresenting?this[re].arRenderer.target:this[st].getDynamicTarget())}getFieldOfView(){return this[se].getFieldOfView()}getMinimumFieldOfView(){return this[se].options.minimumFieldOfView}getMaximumFieldOfView(){return this[se].options.maximumFieldOfView}getIdealAspect(){return this[st].idealAspect}jumpCameraToGoal(){this[Sr]=!0,this.requestUpdate(Sr,!1)}resetInteractionPrompt(){this[xr]=0,this[Ss]=1/0,this[Ya]=!1,this[Qi]=this.interactionPrompt===Wa&&this.cameraControls}zoom(M){const C=new WheelEvent("wheel",{deltaY:-30*M});this[Sn].dispatchEvent(C)}connectedCallback(){super.connectedCallback(),this[se].addEventListener("user-interaction",this[xs]),this[se].addEventListener("pointer-change-start",this[yr]),this[se].addEventListener("pointer-change-end",this[yr])}disconnectedCallback(){super.disconnectedCallback(),this[se].removeEventListener("user-interaction",this[xs]),this[se].removeEventListener("pointer-change-start",this[yr]),this[se].removeEventListener("pointer-change-end",this[yr])}updated(M){super.updated(M);const C=this[se],x=this[st];if(M.has("cameraControls")&&(this.cameraControls?(C.enableInteraction(),this.interactionPrompt===Wa&&(this[Qi]=!0)):(C.disableInteraction(),this[Xa]()),this[Sn].setAttribute("aria-label",this[Gs])),M.has("disableZoom")&&(C.disableZoom=this.disableZoom),M.has("disablePan")&&(C.enablePan=!this.disablePan),M.has("disableTap")&&(C.enableTap=!this.disableTap),(M.has("interactionPrompt")||M.has("cameraControls")||M.has("src"))&&(this.interactionPrompt===Wa&&this.cameraControls&&!this[Ya]?this[Qi]=!0:this[Xa]()),M.has("interactionPromptStyle")&&(this[qa].style.opacity=this.interactionPromptStyle==HC?"1":"0"),M.has("touchAction")){const T=this.touchAction;C.applyOptions({touchAction:T}),C.updateTouchActionStyle()}M.has("orbitSensitivity")&&(C.orbitSensitivity=this.orbitSensitivity),M.has("zoomSensitivity")&&(C.zoomSensitivity=this.zoomSensitivity),M.has("panSensitivity")&&(C.panSensitivity=this.panSensitivity),M.has("interpolationDecay")&&(C.setDamperDecayTime(this.interpolationDecay),x.setTargetDamperDecayTime(this.interpolationDecay)),M.has("a11y")&&this[FA](),this[Sr]===!0&&Promise.resolve().then(()=>{C.jumpToGoal(),x.jumpToGoal(),this[Sc](),this[Sr]=!1})}async updateFraming(){const M=this[st],C=M.adjustedFoV(M.framedFoVDeg);await M.updateFraming();const x=M.adjustedFoV(M.framedFoVDeg),T=this[se].getFieldOfView()/C;this[se].setFieldOfView(x*T),this[Cr]=!0,this.requestUpdate("maxFieldOfView"),this.requestUpdate("fieldOfView"),this.requestUpdate("minCameraOrbit"),this.requestUpdate("maxCameraOrbit"),this.requestUpdate("cameraOrbit"),await this.updateComplete}interact(M,C,x){const T=this[Sn],k=this[xc];if(k[0].style.opacity==="1")return void console.warn("interact() failed because an existing interaction is running.");const v=new Array;v.push({x:Os(C.x),y:Os(C.y)});const I=[{x:v[0].x(0),y:v[0].y(0)}];x!=null&&(v.push({x:Os(x.x),y:Os(x.y)}),I.push({x:v[1].x(0),y:v[1].y(0)}));let N=performance.now();const{width:U,height:G}=this[st],q=this.getBoundingClientRect(),L=Z=>{for(const[tt,nt]of I.entries()){const{style:Et}=k[tt];Et.transform=`translateX(${U*nt.x}px) translateY(${G*nt.y}px)`,Z==="pointerdown"?Et.opacity="1":Z==="pointerup"&&(Et.opacity="0");const mt={pointerId:tt-5678,pointerType:"touch",target:T,clientX:U*nt.x+q.x,clientY:G*nt.y+q.y,altKey:!0};T.dispatchEvent(new PointerEvent(Z,mt))}},Y=()=>{const Z=this[Ka];if(Z!==Ee.AUTOMATIC||!T.isConnected){for(const nt of this[xc])nt.style.opacity="0";return L("pointercancel"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:Z}})),void document.removeEventListener("visibilitychange",z)}const tt=Math.min(1,(performance.now()-N)/M);for(const[nt,Et]of I.entries())Et.x=v[nt].x(tt),Et.y=v[nt].y(tt);L("pointermove"),tt<1?requestAnimationFrame(Y):(L("pointerup"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:Ee.AUTOMATIC}})),document.removeEventListener("visibilitychange",z))},z=()=>{let Z=0;document.visibilityState==="hidden"?Z=performance.now()-N:N=performance.now()-Z};document.addEventListener("visibilitychange",z),L("pointerdown"),this[Ka]=Ee.AUTOMATIC,requestAnimationFrame(Y)}[(t=yc,e=qa,n=xc,i=Mo,s=xr,a=Ss,o=Ya,l=Qi,c=Ka,h=se,u=Cc,d=Sr,A=Mc,m=Cr,g=Jn,NA)](M){const C=this[se],x=this[st];x.framedFoVDeg=180*M[0]/Math.PI,C.changeSource=Ee.NONE,C.setFieldOfView(x.adjustedFoV(x.framedFoVDeg)),this[xs]()}[UA](M){const C=this[se];if(this[Cr]){const{theta:x,phi:T}=this.getCameraOrbit();M[0]=x,M[1]=T,this[Cr]=!1}C.changeSource=Ee.NONE,C.setOrbit(M[0],M[1],M[2]),this[xs]()}[OA](M){this[se].applyOptions({minimumAzimuthalAngle:M[0],minimumPolarAngle:M[1],minimumRadius:M[2]}),this.jumpCameraToGoal()}[kA](M){this[se].applyOptions({maximumAzimuthalAngle:M[0],maximumPolarAngle:M[1],maximumRadius:M[2]}),this[PA](M[2]),this.jumpCameraToGoal()}[GA](M){this[se].applyOptions({minimumFieldOfView:180*M[0]/Math.PI}),this.jumpCameraToGoal()}[HA](M){const C=this[st].adjustedFoV(180*M[0]/Math.PI);this[se].applyOptions({maximumFieldOfView:C}),this.jumpCameraToGoal()}[QA](M){const[C,x,T]=M;this[re].arRenderer.isPresenting||this[st].setTarget(C,x,T),this[se].changeSource=Ee.NONE,this[re].arRenderer.updateTarget(),this[xs]()}[Rn](M,C){if(super[Rn](M,C),this[re].isPresenting||!this[ji]())return;const x=this[se],T=this[st],k=performance.now();if(this[Qi]&&this.loaded&&k>this[Vr]+this.interactionPromptThreshold&&(this[Qi]=!1,this[Ss]=k,this[yc].classList.add("visible")),isFinite(this[Ss])&&this.interactionPromptStyle===RA){const N=(k-this[Ss])/5e3%1,U=QC(N),G=OC(N);if(this[qa].style.opacity=`${G}`,U!==this[xr]){const q=U*T.width*.05,L=(U-this[xr])*Math.PI/16;this[qa].style.transform=`translateX(${q}px)`,x.changeSource=Ee.AUTOMATIC,x.adjustOrbit(L,0,0),this[xr]=U}}const v=x.update(M,C),I=T.updateTarget(C);(v||I)&&this[Sc]()}[Xa](){this[Qi]=!1,this[yc].classList.remove("visible"),this[Ss]=1/0}[PA](M){const C=Math.max(this[st].farRadius(),M),x=Math.abs(2*C);this[se].updateNearFar(0,x)}[LA](){const{theta:M,phi:C}=this[se].getCameraSpherical(this[Cc]),x=(4+Math.floor((M%$C+KC)/Nm))%4,T=Math.floor(C/YC),k=`${GC[T]}${kC[x]}`,v=k;v in this[Jn]?this[Ho](this[Jn][v]):this[Ho](`View from stage ${k}`)}get[Gs](){let M=". Use mouse, touch or arrow keys to move.";return"interaction-prompt"in this[Jn]&&(M=`. ${this[Jn]["interaction-prompt"]}`),super[Gs].replace(/\.$/,"")+(this.cameraControls?M:"")}async[Vo](M){const C=this[se],x=this[st],T=x.adjustedFoV(x.framedFoVDeg);super[Vo](M);const k=x.adjustedFoV(x.framedFoVDeg)/T,v=C.getFieldOfView()*(isFinite(k)?k:1);C.updateAspect(this[st].aspect),this.requestUpdate("maxFieldOfView",this.maxFieldOfView),await this.updateComplete,this[se].setFieldOfView(v),this.jumpCameraToGoal()}[Dn](){super[Dn](),this[Mc]?this[Cr]=!0:this[Mc]=!0,this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this.requestUpdate("fieldOfView",this.fieldOfView),this.requestUpdate("minCameraOrbit",this.minCameraOrbit),this.requestUpdate("maxCameraOrbit",this.maxCameraOrbit),this.requestUpdate("cameraOrbit",this.cameraOrbit),this.requestUpdate("cameraTarget",this.cameraTarget),this.jumpCameraToGoal()}[(p=xs,f=Sc,E=yr,FA)](){if(typeof this.a11y=="string")if(this.a11y.startsWith("{"))try{this[Jn]=JSON.parse(this.a11y)}catch(M){console.warn("Error parsing a11y JSON:",M)}else this.a11y.length>0?console.warn("Error not supported format, should be a JSON string:",this.a11y):this[Jn]={};else typeof this.a11y=="object"&&this.a11y!=null?this[Jn]=Object.assign({},this.a11y):this[Jn]={};this[Sn].setAttribute("aria-label",this[Gs])}}return Me([wt({type:Boolean,attribute:"camera-controls"})],_.prototype,"cameraControls",void 0),Me([gi({intrinsics:Um,observeEffects:!0,updateHandler:UA}),wt({type:String,attribute:"camera-orbit",hasChanged:()=>!0})],_.prototype,"cameraOrbit",void 0),Me([gi({intrinsics:XC,observeEffects:!0,updateHandler:QA}),wt({type:String,attribute:"camera-target",hasChanged:()=>!0})],_.prototype,"cameraTarget",void 0),Me([gi({intrinsics:DA,observeEffects:!0,updateHandler:NA}),wt({type:String,attribute:"field-of-view",hasChanged:()=>!0})],_.prototype,"fieldOfView",void 0),Me([gi({intrinsics:WC,updateHandler:OA}),wt({type:String,attribute:"min-camera-orbit",hasChanged:()=>!0})],_.prototype,"minCameraOrbit",void 0),Me([gi({intrinsics:qC,updateHandler:kA}),wt({type:String,attribute:"max-camera-orbit",hasChanged:()=>!0})],_.prototype,"maxCameraOrbit",void 0),Me([gi({intrinsics:zC,updateHandler:GA}),wt({type:String,attribute:"min-field-of-view",hasChanged:()=>!0})],_.prototype,"minFieldOfView",void 0),Me([gi({intrinsics:DA,updateHandler:HA}),wt({type:String,attribute:"max-field-of-view",hasChanged:()=>!0})],_.prototype,"maxFieldOfView",void 0),Me([wt({type:Number,attribute:"interaction-prompt-threshold"})],_.prototype,"interactionPromptThreshold",void 0),Me([wt({type:String,attribute:"interaction-prompt"})],_.prototype,"interactionPrompt",void 0),Me([wt({type:String,attribute:"interaction-prompt-style"})],_.prototype,"interactionPromptStyle",void 0),Me([wt({type:Number,attribute:"orbit-sensitivity"})],_.prototype,"orbitSensitivity",void 0),Me([wt({type:Number,attribute:"zoom-sensitivity"})],_.prototype,"zoomSensitivity",void 0),Me([wt({type:Number,attribute:"pan-sensitivity"})],_.prototype,"panSensitivity",void 0),Me([wt({type:String,attribute:"touch-action"})],_.prototype,"touchAction",void 0),Me([wt({type:Boolean,attribute:"disable-zoom"})],_.prototype,"disableZoom",void 0),Me([wt({type:Boolean,attribute:"disable-pan"})],_.prototype,"disablePan",void 0),Me([wt({type:Boolean,attribute:"disable-tap"})],_.prototype,"disableTap",void 0),Me([wt({type:Number,attribute:"interpolation-decay"})],_.prototype,"interpolationDecay",void 0),Me([wt()],_.prototype,"a11y",void 0),_})((r=>{var t,e,n,i,s,a,o,l,c,h;class u extends r{constructor(){super(...arguments),this.ar=!1,this.arScale="auto",this.arPlacement="floor",this.arModes="webxr scene-viewer quick-look",this.iosSrc=null,this.xrEnvironment=!1,this[t]=!1,this[e]=this.shadowRoot.querySelector(".ar-button"),this[n]=document.createElement("a"),this[i]=new Set,this[s]=Pr,this[a]=!1,this[o]=A=>{A.preventDefault(),this.activateAR()},this[l]=({status:A})=>{A!==Io&&this[re].arRenderer.presentedScene!==this[st]||(this.setAttribute("ar-status",A),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:A}})),A===Io?this.removeAttribute("ar-tracking"):A===Qm&&this.setAttribute("ar-tracking",Om))},this[c]=({status:A})=>{this.setAttribute("ar-tracking",A),this.dispatchEvent(new CustomEvent("ar-tracking",{detail:{status:A}}))},this[h]=A=>{A.data=="_apple_ar_quicklook_button_tapped"&&this.dispatchEvent(new CustomEvent("quick-look-button-tapped"))}}get canActivateAR(){return this[co]!==Pr}connectedCallback(){super.connectedCallback(),this[re].arRenderer.addEventListener("status",this[Zc]),this.setAttribute("ar-status",Io),this[re].arRenderer.addEventListener("tracking",this[th]),this[Ds].addEventListener("message",this[eh])}disconnectedCallback(){super.disconnectedCallback(),this[re].arRenderer.removeEventListener("status",this[Zc]),this[re].arRenderer.removeEventListener("tracking",this[th]),this[Ds].removeEventListener("message",this[eh])}update(A){super.update(A),A.has("arScale")&&(this[st].canScale=this.arScale!=="fixed"),A.has("arPlacement")&&(this[st].updateShadow(),this[Oe]()),A.has("arModes")&&(this[jc]=eI(this.arModes)),(A.has("ar")||A.has("arModes")||A.has("src")||A.has("iosSrc"))&&this[Ur]()}async activateAR(){switch(this[co]){case Jc:await this[vf]();break;case mf:await this[gf]();break;case ff:this[_f]();break;default:console.warn("No AR Mode can be activated. This is probably due to missing configuration or device capabilities")}}async[(t=nI,e=ni,n=Ds,i=jc,s=co,a=ho,o=uo,l=Zc,c=th,h=eh,Ur)](){var A;let m=Pr;if(this.ar){if(this.src!=null)for(const g of this[jc]){if(g==="webxr"&&sm&&!uf&&await this[re].arRenderer.supportsPresentation()){m=mf;break}if(g==="scene-viewer"&&!df&&(Jx||navigator.userAgentData&&navigator.userAgentData.getHighEntropyValues&&(!((A=(await navigator.userAgentData.getHighEntropyValues(["formFactor"])).formFactor)===null||A===void 0)&&A.includes("XR")))){m=ff;break}if(g==="quick-look"&&Qd){m=Jc;break}}m===Pr&&this.iosSrc!=null&&Qd&&(m=Jc)}if(m!==Pr)this[ni].classList.add("enabled"),this[ni].addEventListener("click",this[uo]);else if(this[ni].classList.contains("enabled")){this[ni].removeEventListener("click",this[uo]),this[ni].classList.remove("enabled");const g=tM;this.setAttribute("ar-status",g),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:g}}))}this[co]=m}async[gf](){console.log("Attempting to present in AR with WebXR..."),await this[nh]();try{this[ni].removeEventListener("click",this[uo]);const{arRenderer:A}=this[re];A.placeOnWall=this.arPlacement==="wall",await A.present(this[st],this.xrEnvironment)}catch(A){console.warn("Error while trying to present in AR with WebXR"),console.error(A),await this[re].arRenderer.stopPresenting(),uf=!0,console.warn("Falling back to next ar-mode"),await this[Ur](),this.activateAR()}finally{this[Ur]()}}async[nh](){this.loaded||(this[ho]=!0,this[qs](),await((A,m,g=null)=>new Promise(p=>{A.addEventListener(m,function f(E){g&&!g(E)||(p(E),A.removeEventListener(m,f))})}))(this,"load"),this[ho]=!1)}[Hs](){return super[Hs]()||this[ho]}[_f](){const A=self.location.toString(),m=new URL(A),g=new URL(this.src,A);g.hash&&(g.hash="");const p=new URLSearchParams(g.search);if(m.hash=Af,p.set("mode","ar_preferred"),p.has("disable_occlusion")||p.set("disable_occlusion","true"),this.arScale==="fixed"&&p.set("resizable","false"),this.arPlacement==="wall"&&p.set("enable_vertical_placement","true"),p.has("sound")){const E=new URL(p.get("sound"),A);p.set("sound",E.toString())}if(p.has("link")){const E=new URL(p.get("link"),A);p.set("link",E.toString())}const f=`intent://arvr.google.com/scene-viewer/1.2?${p.toString()+"&file="+encodeURIComponent(g.toString())}#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(m.toString())};end;`;self.addEventListener("hashchange",()=>{self.location.hash===Af&&(df=!0,self.history.back(),console.warn("Error while trying to present in AR with Scene Viewer"),console.warn("Falling back to next ar-mode"),this[Ur]())},{once:!0}),this[Ds].setAttribute("href",f),console.log("Attempting to present in AR with Scene Viewer..."),this[Ds].click()}async[vf](){const A=!this.iosSrc;this[ni].classList.remove("enabled");const m=A?await this.prepareUSDZ():this.iosSrc,g=new URL(m,self.location.toString());if(A){const E=self.location.toString(),_=new URL(E),y=new URL(this.src,_);y.hash&&(g.hash=y.hash)}this.arScale==="fixed"&&(g.hash&&(g.hash+="&"),g.hash+="allowsContentScaling=0");const p=this[Ds];p.setAttribute("rel","ar");const f=document.createElement("img");p.appendChild(f),p.setAttribute("href",g.toString()),A&&p.setAttribute("download","model.usdz"),p.style.display="none",p.isConnected||this.shadowRoot.appendChild(p),console.log("Attempting to present in AR with Quick Look..."),p.click(),p.removeChild(f),A&&URL.revokeObjectURL(m),this[ni].classList.add("enabled")}async prepareUSDZ(){const A=this[Ji].beginActivity("usdz-conversion");await this[nh]();const{model:m,shadow:g,target:p}=this[st];if(m==null)return"";let f=!1;g!=null&&(f=g.visible,g.visible=!1),A(.2);const E=new JM;p.remove(m),m.position.copy(p.position),m.updateWorldMatrix(!1,!0);const _=await E.parseAsync(m);m.position.set(0,0,0),p.add(m);const y=new Blob([_],{type:"model/vnd.usdz+zip"}),M=URL.createObjectURL(y);return A(1),g!=null&&(g.visible=f),M}}return Rs([wt({type:Boolean,attribute:"ar"})],u.prototype,"ar",void 0),Rs([wt({type:String,attribute:"ar-scale"})],u.prototype,"arScale",void 0),Rs([wt({type:String,attribute:"ar-placement"})],u.prototype,"arPlacement",void 0),Rs([wt({type:String,attribute:"ar-modes"})],u.prototype,"arModes",void 0),Rs([wt({type:String,attribute:"ios-src"})],u.prototype,"iosSrc",void 0),Rs([wt({type:Boolean,attribute:"xr-environment"})],u.prototype,"xrEnvironment",void 0),u})((r=>{var t,e,n,i,s,a,o,l;class c extends r{constructor(...u){super(...u),this.poster=null,this.reveal=sh,this.loading=iI,this[t]=!1,this[e]=!1,this[n]=this.shadowRoot.querySelector(".slot.poster"),this[i]=this.shadowRoot.querySelector("#default-poster"),this[s]=this.shadowRoot.querySelector("#default-progress-bar > .bar"),this[a]=this[Fs].getAttribute("aria-label"),this[o]=((p,f)=>{let E=null;const _=(...y)=>{E==null&&(p(...y),E=self.setTimeout(()=>E=null,f))};return _.flush=()=>{E!=null&&(self.clearTimeout(E),E=null)},_})(p=>{const f=this[Ls].parentNode;requestAnimationFrame(()=>{this[Ls].style.transform=`scaleX(${p})`,p===0&&(f.removeChild(this[Ls]),f.appendChild(this[Ls])),this[Ls].classList.toggle("hide",p===1)})},100),this[l]=p=>{const f=p.detail.totalProgress,E=p.detail.reason;f===1&&(this[oh].flush(),this.loaded&&(this[Nr]||this.reveal===sh)&&this[ah]()),this[oh](f),this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:f,reason:E}}))};const d=self.ModelViewerElement||{},A=d.dracoDecoderLocation||"https://www.gstatic.com/draco/versioned/decoders/1.5.6/";Xe.setDRACODecoderLocation(A);const m=d.ktx2TranscoderLocation||"https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/";Xe.setKTX2TranscoderLocation(m),d.meshoptDecoderLocation&&Xe.setMeshoptDecoderLocation(d.meshoptDecoderLocation);const g=d.lottieLoaderLocation||"https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/loaders/LottieLoader.js";In.singleton.textureUtils.lottieLoaderUrl=g}static set dracoDecoderLocation(u){Xe.setDRACODecoderLocation(u)}static get dracoDecoderLocation(){return Xe.getDRACODecoderLocation()}static set ktx2TranscoderLocation(u){Xe.setKTX2TranscoderLocation(u)}static get ktx2TranscoderLocation(){return Xe.getKTX2TranscoderLocation()}static set meshoptDecoderLocation(u){Xe.setMeshoptDecoderLocation(u)}static get meshoptDecoderLocation(){return Xe.getMeshoptDecoderLocation()}static set lottieLoaderLocation(u){In.singleton.textureUtils.lottieLoaderUrl=u}static get lottieLoaderLocation(){return In.singleton.textureUtils.lottieLoaderUrl}static mapURLs(u){In.singleton.loader[zi].manager.setURLModifier(u)}dismissPoster(){this.loaded?this[ah]():(this[Nr]=!0,this[qs]())}showPoster(){const u=this[rh];if(u.classList.contains("show"))return;u.classList.add("show"),this[Sn].classList.remove("show");const d=this[Fs];d.removeAttribute("tabindex"),d.removeAttribute("aria-hidden");const A=this.modelIsVisible;this[Ao]=!1,this[Go](A)}getDimensions(){return vi(this[st].size)}getBoundingBoxCenter(){return vi(this[st].boundingBox.getCenter(new B))}connectedCallback(){super.connectedCallback(),this.loaded||this.showPoster(),this[Ji].addEventListener("progress",this[lh])}disconnectedCallback(){super.disconnectedCallback(),this[Ji].removeEventListener("progress",this[lh])}async updated(u){super.updated(u),u.has("poster")&&this.poster!=null&&(this[Fs].style.backgroundImage=`url(${this.poster})`),u.has("alt")&&this[Fs].setAttribute("aria-label",this[Bh]),(u.has("reveal")||u.has("loading"))&&this[qs]()}[(t=Ao,e=Nr,n=rh,i=Fs,s=Ls,a=rI,o=oh,l=lh,Hs)](){return!!this.src&&(this[Nr]||this.loading===sI||this.reveal===sh&&this[Yi])}[ah](){this[Nr]=!1;const u=this[rh];if(!u.classList.contains("show"))return;u.classList.remove("show"),this[Sn].classList.add("show");const d=this.modelIsVisible;this[Ao]=!0,this[Go](d);const A=this.getRootNode();A&&A.activeElement===this&&this[Sn].focus();const m=this[Fs];m.setAttribute("aria-hidden","true"),m.tabIndex=-1,this.dispatchEvent(new CustomEvent("poster-dismissed"))}[ji](){return super[ji]()&&this[Ao]}}return ih([wt({type:String})],c.prototype,"poster",void 0),ih([wt({type:String})],c.prototype,"reveal",void 0),ih([wt({type:String})],c.prototype,"loading",void 0),c})((r=>{var t;class e extends r{constructor(...i){super(i),this.autoplay=!1,this.animationName=void 0,this.animationCrossfadeDuration=300,this[t]=!0,this[st].subscribeMixerEvent("loop",s=>{const a=s.action._loopCount;this.dispatchEvent(new CustomEvent("loop",{detail:{count:a}}))}),this[st].subscribeMixerEvent("finished",()=>{this[ti]=!0,this.dispatchEvent(new CustomEvent("finished"))})}get availableAnimations(){return this.loaded?this[st].animationNames:[]}get duration(){return this[st].duration}get paused(){return this[ti]}get currentTime(){return this[st].animationTime}set currentTime(i){this[st].animationTime=i,this[Oe]()}get timeScale(){return this[st].animationTimeScale}set timeScale(i){this[st].animationTimeScale=i}pause(){this[ti]||(this[ti]=!0,this.dispatchEvent(new CustomEvent("pause")))}play(i){this.availableAnimations.length>0&&(this[ti]=!1,this[oo](i),this.dispatchEvent(new CustomEvent("play")))}[(t=ti,Dn)](){super[Dn](),this[ti]=!0,this.animationName!=null&&this[oo](),this.autoplay&&this.play()}[Rn](i,s){super[Rn](i,s),this[ti]||!this[ji]()&&!this[re].isPresenting||(this[st].updateAnimation(s/1e3),this[Oe]())}updated(i){super.updated(i),i.has("autoplay")&&this.autoplay&&this.play(),i.has("animationName")&&this[oo]()}[oo](i=OM){var s;const a=(s=i.repetitions)!==null&&s!==void 0?s:1/0,o=i.pingpong?2202:a===1?2200:2201;this[st].playAnimation(this.animationName,this.animationCrossfadeDuration/1e3,o,a),this[ti]&&(this[st].updateAnimation(0),this[Oe]())}}return Wc([wt({type:Boolean})],e.prototype,"autoplay",void 0),Wc([wt({type:String,attribute:"animation-name"})],e.prototype,"animationName",void 0),Wc([wt({type:Number,attribute:"animation-crossfade-duration"})],e.prototype,"animationCrossfadeDuration",void 0),e})(zr))))))));customElements.define("model-viewer",lI);export{kf as CanvasTexture,oi as FileLoader,Gn as Loader,lI as ModelViewerElement,cI as NearestFilter};
