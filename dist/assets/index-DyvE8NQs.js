(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const w of p.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&a(w)}).observe(document,{childList:!0,subtree:!0});function l(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function a(c){if(c.ep)return;c.ep=!0;const p=l(c);fetch(c.href,p)}})();function It(D){return D&&D.__esModule&&Object.prototype.hasOwnProperty.call(D,"default")?D.default:D}var Ct={exports:{}},jt=Ct.exports,Et;function Vt(){return Et||(Et=1,function(D,s){(function(l,a){D.exports=a()})(jt,()=>(()=>{var l={873:(w,x)=>{var S,q,T=function(){var N=function(t,o){var i=t,e=et[o],r=null,d=0,h=null,m=[],f={},C=function(u,y){r=function(g){for(var b=new Array(g),v=0;v<g;v+=1){b[v]=new Array(g);for(var M=0;M<g;M+=1)b[v][M]=null}return b}(d=4*i+17),_(0,0),_(d-7,0),_(0,d-7),$(),k(),L(u,y),i>=7&&F(u),h==null&&(h=j(i,e,m)),U(h,y)},_=function(u,y){for(var g=-1;g<=7;g+=1)if(!(u+g<=-1||d<=u+g))for(var b=-1;b<=7;b+=1)y+b<=-1||d<=y+b||(r[u+g][y+b]=0<=g&&g<=6&&(b==0||b==6)||0<=b&&b<=6&&(g==0||g==6)||2<=g&&g<=4&&2<=b&&b<=4)},k=function(){for(var u=8;u<d-8;u+=1)r[u][6]==null&&(r[u][6]=u%2==0);for(var y=8;y<d-8;y+=1)r[6][y]==null&&(r[6][y]=y%2==0)},$=function(){for(var u=it.getPatternPosition(i),y=0;y<u.length;y+=1)for(var g=0;g<u.length;g+=1){var b=u[y],v=u[g];if(r[b][v]==null)for(var M=-2;M<=2;M+=1)for(var R=-2;R<=2;R+=1)r[b+M][v+R]=M==-2||M==2||R==-2||R==2||M==0&&R==0}},F=function(u){for(var y=it.getBCHTypeNumber(i),g=0;g<18;g+=1){var b=!u&&(y>>g&1)==1;r[Math.floor(g/3)][g%3+d-8-3]=b}for(g=0;g<18;g+=1)b=!u&&(y>>g&1)==1,r[g%3+d-8-3][Math.floor(g/3)]=b},L=function(u,y){for(var g=e<<3|y,b=it.getBCHTypeInfo(g),v=0;v<15;v+=1){var M=!u&&(b>>v&1)==1;v<6?r[v][8]=M:v<8?r[v+1][8]=M:r[d-15+v][8]=M}for(v=0;v<15;v+=1)M=!u&&(b>>v&1)==1,v<8?r[8][d-v-1]=M:v<9?r[8][15-v-1+1]=M:r[8][15-v-1]=M;r[d-8][8]=!u},U=function(u,y){for(var g=-1,b=d-1,v=7,M=0,R=it.getMaskFunction(y),B=d-1;B>0;B-=2)for(B==6&&(B-=1);;){for(var V=0;V<2;V+=1)if(r[b][B-V]==null){var I=!1;M<u.length&&(I=(u[M]>>>v&1)==1),R(b,B-V)&&(I=!I),r[b][B-V]=I,(v-=1)==-1&&(M+=1,v=7)}if((b+=g)<0||d<=b){b-=g,g=-g;break}}},j=function(u,y,g){for(var b=dt.getRSBlocks(u,y),v=gt(),M=0;M<g.length;M+=1){var R=g[M];v.put(R.getMode(),4),v.put(R.getLength(),it.getLengthInBits(R.getMode(),u)),R.write(v)}var B=0;for(M=0;M<b.length;M+=1)B+=b[M].dataCount;if(v.getLengthInBits()>8*B)throw"code length overflow. ("+v.getLengthInBits()+">"+8*B+")";for(v.getLengthInBits()+4<=8*B&&v.put(0,4);v.getLengthInBits()%8!=0;)v.putBit(!1);for(;!(v.getLengthInBits()>=8*B||(v.put(236,8),v.getLengthInBits()>=8*B));)v.put(17,8);return function(V,I){for(var P=0,Z=0,Q=0,J=new Array(I.length),W=new Array(I.length),E=0;E<I.length;E+=1){var ct=I[E].dataCount,ft=I[E].totalCount-ct;Z=Math.max(Z,ct),Q=Math.max(Q,ft),J[E]=new Array(ct);for(var X=0;X<J[E].length;X+=1)J[E][X]=255&V.getBuffer()[X+P];P+=ct;var rt=it.getErrorCorrectPolynomial(ft),st=at(J[E],rt.getLength()-1).mod(rt);for(W[E]=new Array(rt.getLength()-1),X=0;X<W[E].length;X+=1){var lt=X+st.getLength()-W[E].length;W[E][X]=lt>=0?st.getAt(lt):0}}var vt=0;for(X=0;X<I.length;X+=1)vt+=I[X].totalCount;var wt=new Array(vt),nt=0;for(X=0;X<Z;X+=1)for(E=0;E<I.length;E+=1)X<J[E].length&&(wt[nt]=J[E][X],nt+=1);for(X=0;X<Q;X+=1)for(E=0;E<I.length;E+=1)X<W[E].length&&(wt[nt]=W[E][X],nt+=1);return wt}(v,b)};f.addData=function(u,y){var g=null;switch(y=y||"Byte"){case"Numeric":g=kt(u);break;case"Alphanumeric":g=Mt(u);break;case"Byte":g=ut(u);break;case"Kanji":g=mt(u);break;default:throw"mode:"+y}m.push(g),h=null},f.isDark=function(u,y){if(u<0||d<=u||y<0||d<=y)throw u+","+y;return r[u][y]},f.getModuleCount=function(){return d},f.make=function(){if(i<1){for(var u=1;u<40;u++){for(var y=dt.getRSBlocks(u,e),g=gt(),b=0;b<m.length;b++){var v=m[b];g.put(v.getMode(),4),g.put(v.getLength(),it.getLengthInBits(v.getMode(),u)),v.write(g)}var M=0;for(b=0;b<y.length;b++)M+=y[b].dataCount;if(g.getLengthInBits()<=8*M)break}i=u}C(!1,function(){for(var R=0,B=0,V=0;V<8;V+=1){C(!0,V);var I=it.getLostPoint(f);(V==0||R>I)&&(R=I,B=V)}return B}())},f.createTableTag=function(u,y){u=u||2;var g="";g+='<table style="',g+=" border-width: 0px; border-style: none;",g+=" border-collapse: collapse;",g+=" padding: 0px; margin: "+(y=y===void 0?4*u:y)+"px;",g+='">',g+="<tbody>";for(var b=0;b<f.getModuleCount();b+=1){g+="<tr>";for(var v=0;v<f.getModuleCount();v+=1)g+='<td style="',g+=" border-width: 0px; border-style: none;",g+=" border-collapse: collapse;",g+=" padding: 0px; margin: 0px;",g+=" width: "+u+"px;",g+=" height: "+u+"px;",g+=" background-color: ",g+=f.isDark(b,v)?"#000000":"#ffffff",g+=";",g+='"/>';g+="</tr>"}return(g+="</tbody>")+"</table>"},f.createSvgTag=function(u,y,g,b){var v={};typeof arguments[0]=="object"&&(u=(v=arguments[0]).cellSize,y=v.margin,g=v.alt,b=v.title),u=u||2,y=y===void 0?4*u:y,(g=typeof g=="string"?{text:g}:g||{}).text=g.text||null,g.id=g.text?g.id||"qrcode-description":null,(b=typeof b=="string"?{text:b}:b||{}).text=b.text||null,b.id=b.text?b.id||"qrcode-title":null;var M,R,B,V,I=f.getModuleCount()*u+2*y,P="";for(V="l"+u+",0 0,"+u+" -"+u+",0 0,-"+u+"z ",P+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',P+=v.scalable?"":' width="'+I+'px" height="'+I+'px"',P+=' viewBox="0 0 '+I+" "+I+'" ',P+=' preserveAspectRatio="xMinYMin meet"',P+=b.text||g.text?' role="img" aria-labelledby="'+A([b.id,g.id].join(" ").trim())+'"':"",P+=">",P+=b.text?'<title id="'+A(b.id)+'">'+A(b.text)+"</title>":"",P+=g.text?'<description id="'+A(g.id)+'">'+A(g.text)+"</description>":"",P+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',P+='<path d="',R=0;R<f.getModuleCount();R+=1)for(B=R*u+y,M=0;M<f.getModuleCount();M+=1)f.isDark(R,M)&&(P+="M"+(M*u+y)+","+B+V);return(P+='" stroke="transparent" fill="black"/>')+"</svg>"},f.createDataURL=function(u,y){u=u||2,y=y===void 0?4*u:y;var g=f.getModuleCount()*u+2*y,b=y,v=g-y;return n(g,g,function(M,R){if(b<=M&&M<v&&b<=R&&R<v){var B=Math.floor((M-b)/u),V=Math.floor((R-b)/u);return f.isDark(V,B)?0:1}return 1})},f.createImgTag=function(u,y,g){u=u||2,y=y===void 0?4*u:y;var b=f.getModuleCount()*u+2*y,v="";return v+="<img",v+=' src="',v+=f.createDataURL(u,y),v+='"',v+=' width="',v+=b,v+='"',v+=' height="',v+=b,v+='"',g&&(v+=' alt="',v+=A(g),v+='"'),v+"/>"};var A=function(u){for(var y="",g=0;g<u.length;g+=1){var b=u.charAt(g);switch(b){case"<":y+="&lt;";break;case">":y+="&gt;";break;case"&":y+="&amp;";break;case'"':y+="&quot;";break;default:y+=b}}return y};return f.createASCII=function(u,y){if((u=u||1)<2)return function(J){J=J===void 0?2:J;var W,E,ct,ft,X,rt=1*f.getModuleCount()+2*J,st=J,lt=rt-J,vt={"██":"█","█ ":"▀"," █":"▄","  ":" "},wt={"██":"▀","█ ":"▀"," █":" ","  ":" "},nt="";for(W=0;W<rt;W+=2){for(ct=Math.floor((W-st)/1),ft=Math.floor((W+1-st)/1),E=0;E<rt;E+=1)X="█",st<=E&&E<lt&&st<=W&&W<lt&&f.isDark(ct,Math.floor((E-st)/1))&&(X=" "),st<=E&&E<lt&&st<=W+1&&W+1<lt&&f.isDark(ft,Math.floor((E-st)/1))?X+=" ":X+="█",nt+=J<1&&W+1>=lt?wt[X]:vt[X];nt+=`
`}return rt%2&&J>0?nt.substring(0,nt.length-rt-1)+Array(rt+1).join("▀"):nt.substring(0,nt.length-1)}(y);u-=1,y=y===void 0?2*u:y;var g,b,v,M,R=f.getModuleCount()*u+2*y,B=y,V=R-y,I=Array(u+1).join("██"),P=Array(u+1).join("  "),Z="",Q="";for(g=0;g<R;g+=1){for(v=Math.floor((g-B)/u),Q="",b=0;b<R;b+=1)M=1,B<=b&&b<V&&B<=g&&g<V&&f.isDark(v,Math.floor((b-B)/u))&&(M=0),Q+=M?I:P;for(v=0;v<u;v+=1)Z+=Q+`
`}return Z.substring(0,Z.length-1)},f.renderTo2dContext=function(u,y){y=y||2;for(var g=f.getModuleCount(),b=0;b<g;b++)for(var v=0;v<g;v++)u.fillStyle=f.isDark(b,v)?"black":"white",u.fillRect(b*y,v*y,y,y)},f};N.stringToBytes=(N.stringToBytesFuncs={default:function(t){for(var o=[],i=0;i<t.length;i+=1){var e=t.charCodeAt(i);o.push(255&e)}return o}}).default,N.createStringToBytes=function(t,o){var i=function(){for(var r=O(t),d=function(){var k=r.read();if(k==-1)throw"eof";return k},h=0,m={};;){var f=r.read();if(f==-1)break;var C=d(),_=d()<<8|d();m[String.fromCharCode(f<<8|C)]=_,h+=1}if(h!=o)throw h+" != "+o;return m}(),e=63;return function(r){for(var d=[],h=0;h<r.length;h+=1){var m=r.charCodeAt(h);if(m<128)d.push(m);else{var f=i[r.charAt(h)];typeof f=="number"?(255&f)==f?d.push(f):(d.push(f>>>8),d.push(255&f)):d.push(e)}}return d}};var K,H,G,z,Y,et={L:1,M:0,Q:3,H:2},it=(K=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],H=1335,G=7973,Y=function(t){for(var o=0;t!=0;)o+=1,t>>>=1;return o},(z={}).getBCHTypeInfo=function(t){for(var o=t<<10;Y(o)-Y(H)>=0;)o^=H<<Y(o)-Y(H);return 21522^(t<<10|o)},z.getBCHTypeNumber=function(t){for(var o=t<<12;Y(o)-Y(G)>=0;)o^=G<<Y(o)-Y(G);return t<<12|o},z.getPatternPosition=function(t){return K[t-1]},z.getMaskFunction=function(t){switch(t){case 0:return function(o,i){return(o+i)%2==0};case 1:return function(o,i){return o%2==0};case 2:return function(o,i){return i%3==0};case 3:return function(o,i){return(o+i)%3==0};case 4:return function(o,i){return(Math.floor(o/2)+Math.floor(i/3))%2==0};case 5:return function(o,i){return o*i%2+o*i%3==0};case 6:return function(o,i){return(o*i%2+o*i%3)%2==0};case 7:return function(o,i){return(o*i%3+(o+i)%2)%2==0};default:throw"bad maskPattern:"+t}},z.getErrorCorrectPolynomial=function(t){for(var o=at([1],0),i=0;i<t;i+=1)o=o.multiply(at([1,ot.gexp(i)],0));return o},z.getLengthInBits=function(t,o){if(1<=o&&o<10)switch(t){case 1:return 10;case 2:return 9;case 4:case 8:return 8;default:throw"mode:"+t}else if(o<27)switch(t){case 1:return 12;case 2:return 11;case 4:return 16;case 8:return 10;default:throw"mode:"+t}else{if(!(o<41))throw"type:"+o;switch(t){case 1:return 14;case 2:return 13;case 4:return 16;case 8:return 12;default:throw"mode:"+t}}},z.getLostPoint=function(t){for(var o=t.getModuleCount(),i=0,e=0;e<o;e+=1)for(var r=0;r<o;r+=1){for(var d=0,h=t.isDark(e,r),m=-1;m<=1;m+=1)if(!(e+m<0||o<=e+m))for(var f=-1;f<=1;f+=1)r+f<0||o<=r+f||m==0&&f==0||h==t.isDark(e+m,r+f)&&(d+=1);d>5&&(i+=3+d-5)}for(e=0;e<o-1;e+=1)for(r=0;r<o-1;r+=1){var C=0;t.isDark(e,r)&&(C+=1),t.isDark(e+1,r)&&(C+=1),t.isDark(e,r+1)&&(C+=1),t.isDark(e+1,r+1)&&(C+=1),C!=0&&C!=4||(i+=3)}for(e=0;e<o;e+=1)for(r=0;r<o-6;r+=1)t.isDark(e,r)&&!t.isDark(e,r+1)&&t.isDark(e,r+2)&&t.isDark(e,r+3)&&t.isDark(e,r+4)&&!t.isDark(e,r+5)&&t.isDark(e,r+6)&&(i+=40);for(r=0;r<o;r+=1)for(e=0;e<o-6;e+=1)t.isDark(e,r)&&!t.isDark(e+1,r)&&t.isDark(e+2,r)&&t.isDark(e+3,r)&&t.isDark(e+4,r)&&!t.isDark(e+5,r)&&t.isDark(e+6,r)&&(i+=40);var _=0;for(r=0;r<o;r+=1)for(e=0;e<o;e+=1)t.isDark(e,r)&&(_+=1);return i+Math.abs(100*_/o/o-50)/5*10},z),ot=function(){for(var t=new Array(256),o=new Array(256),i=0;i<8;i+=1)t[i]=1<<i;for(i=8;i<256;i+=1)t[i]=t[i-4]^t[i-5]^t[i-6]^t[i-8];for(i=0;i<255;i+=1)o[t[i]]=i;return{glog:function(e){if(e<1)throw"glog("+e+")";return o[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return t[e]}}}();function at(t,o){if(t.length===void 0)throw t.length+"/"+o;var i=function(){for(var r=0;r<t.length&&t[r]==0;)r+=1;for(var d=new Array(t.length-r+o),h=0;h<t.length-r;h+=1)d[h]=t[h+r];return d}(),e={getAt:function(r){return i[r]},getLength:function(){return i.length},multiply:function(r){for(var d=new Array(e.getLength()+r.getLength()-1),h=0;h<e.getLength();h+=1)for(var m=0;m<r.getLength();m+=1)d[h+m]^=ot.gexp(ot.glog(e.getAt(h))+ot.glog(r.getAt(m)));return at(d,0)},mod:function(r){if(e.getLength()-r.getLength()<0)return e;for(var d=ot.glog(e.getAt(0))-ot.glog(r.getAt(0)),h=new Array(e.getLength()),m=0;m<e.getLength();m+=1)h[m]=e.getAt(m);for(m=0;m<r.getLength();m+=1)h[m]^=ot.gexp(ot.glog(r.getAt(m))+d);return at(h,0).mod(r)}};return e}var dt=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o=function(e,r){var d={};return d.totalCount=e,d.dataCount=r,d},i={getRSBlocks:function(e,r){var d=function(F,L){switch(L){case et.L:return t[4*(F-1)+0];case et.M:return t[4*(F-1)+1];case et.Q:return t[4*(F-1)+2];case et.H:return t[4*(F-1)+3];default:return}}(e,r);if(d===void 0)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+r;for(var h=d.length/3,m=[],f=0;f<h;f+=1)for(var C=d[3*f+0],_=d[3*f+1],k=d[3*f+2],$=0;$<C;$+=1)m.push(o(_,k));return m}};return i}(),gt=function(){var t=[],o=0,i={getBuffer:function(){return t},getAt:function(e){var r=Math.floor(e/8);return(t[r]>>>7-e%8&1)==1},put:function(e,r){for(var d=0;d<r;d+=1)i.putBit((e>>>r-d-1&1)==1)},getLengthInBits:function(){return o},putBit:function(e){var r=Math.floor(o/8);t.length<=r&&t.push(0),e&&(t[r]|=128>>>o%8),o+=1}};return i},kt=function(t){var o=t,i={getMode:function(){return 1},getLength:function(d){return o.length},write:function(d){for(var h=o,m=0;m+2<h.length;)d.put(e(h.substring(m,m+3)),10),m+=3;m<h.length&&(h.length-m==1?d.put(e(h.substring(m,m+1)),4):h.length-m==2&&d.put(e(h.substring(m,m+2)),7))}},e=function(d){for(var h=0,m=0;m<d.length;m+=1)h=10*h+r(d.charAt(m));return h},r=function(d){if("0"<=d&&d<="9")return d.charCodeAt(0)-48;throw"illegal char :"+d};return i},Mt=function(t){var o=t,i={getMode:function(){return 2},getLength:function(r){return o.length},write:function(r){for(var d=o,h=0;h+1<d.length;)r.put(45*e(d.charAt(h))+e(d.charAt(h+1)),11),h+=2;h<d.length&&r.put(e(d.charAt(h)),6)}},e=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-48;if("A"<=r&&r<="Z")return r.charCodeAt(0)-65+10;switch(r){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+r}};return i},ut=function(t){var o=N.stringToBytes(t);return{getMode:function(){return 4},getLength:function(i){return o.length},write:function(i){for(var e=0;e<o.length;e+=1)i.put(o[e],8)}}},mt=function(t){var o=N.stringToBytesFuncs.SJIS;if(!o)throw"sjis not supported.";(function(){var r=o("友");if(r.length!=2||(r[0]<<8|r[1])!=38726)throw"sjis not supported."})();var i=o(t),e={getMode:function(){return 8},getLength:function(r){return~~(i.length/2)},write:function(r){for(var d=i,h=0;h+1<d.length;){var m=(255&d[h])<<8|255&d[h+1];if(33088<=m&&m<=40956)m-=33088;else{if(!(57408<=m&&m<=60351))throw"illegal char at "+(h+1)+"/"+m;m-=49472}m=192*(m>>>8&255)+(255&m),r.put(m,13),h+=2}if(h<d.length)throw"illegal char at "+(h+1)}};return e},bt=function(){var t=[],o={writeByte:function(i){t.push(255&i)},writeShort:function(i){o.writeByte(i),o.writeByte(i>>>8)},writeBytes:function(i,e,r){e=e||0,r=r||i.length;for(var d=0;d<r;d+=1)o.writeByte(i[d+e])},writeString:function(i){for(var e=0;e<i.length;e+=1)o.writeByte(i.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var i="";i+="[";for(var e=0;e<t.length;e+=1)e>0&&(i+=","),i+=t[e];return i+"]"}};return o},O=function(t){var o=t,i=0,e=0,r=0,d={read:function(){for(;r<8;){if(i>=o.length){if(r==0)return-1;throw"unexpected end of file./"+r}var m=o.charAt(i);if(i+=1,m=="=")return r=0,-1;m.match(/^\s$/)||(e=e<<6|h(m.charCodeAt(0)),r+=6)}var f=e>>>r-8&255;return r-=8,f}},h=function(m){if(65<=m&&m<=90)return m-65;if(97<=m&&m<=122)return m-97+26;if(48<=m&&m<=57)return m-48+52;if(m==43)return 62;if(m==47)return 63;throw"c:"+m};return d},n=function(t,o,i){for(var e=function(_,k){var $=_,F=k,L=new Array(_*k),U={setPixel:function(u,y,g){L[y*$+u]=g},write:function(u){u.writeString("GIF87a"),u.writeShort($),u.writeShort(F),u.writeByte(128),u.writeByte(0),u.writeByte(0),u.writeByte(0),u.writeByte(0),u.writeByte(0),u.writeByte(255),u.writeByte(255),u.writeByte(255),u.writeString(","),u.writeShort(0),u.writeShort(0),u.writeShort($),u.writeShort(F),u.writeByte(0);var y=j(2);u.writeByte(2);for(var g=0;y.length-g>255;)u.writeByte(255),u.writeBytes(y,g,255),g+=255;u.writeByte(y.length-g),u.writeBytes(y,g,y.length-g),u.writeByte(0),u.writeString(";")}},j=function(u){for(var y=1<<u,g=1+(1<<u),b=u+1,v=A(),M=0;M<y;M+=1)v.add(String.fromCharCode(M));v.add(String.fromCharCode(y)),v.add(String.fromCharCode(g));var R,B,V,I=bt(),P=(R=I,B=0,V=0,{write:function(W,E){if(W>>>E)throw"length over";for(;B+E>=8;)R.writeByte(255&(W<<B|V)),E-=8-B,W>>>=8-B,V=0,B=0;V|=W<<B,B+=E},flush:function(){B>0&&R.writeByte(V)}});P.write(y,b);var Z=0,Q=String.fromCharCode(L[Z]);for(Z+=1;Z<L.length;){var J=String.fromCharCode(L[Z]);Z+=1,v.contains(Q+J)?Q+=J:(P.write(v.indexOf(Q),b),v.size()<4095&&(v.size()==1<<b&&(b+=1),v.add(Q+J)),Q=J)}return P.write(v.indexOf(Q),b),P.write(g,b),P.flush(),I.toByteArray()},A=function(){var u={},y=0,g={add:function(b){if(g.contains(b))throw"dup key:"+b;u[b]=y,y+=1},size:function(){return y},indexOf:function(b){return u[b]},contains:function(b){return u[b]!==void 0}};return g};return U}(t,o),r=0;r<o;r+=1)for(var d=0;d<t;d+=1)e.setPixel(d,r,i(d,r));var h=bt();e.write(h);for(var m=function(){var _=0,k=0,$=0,F="",L={},U=function(A){F+=String.fromCharCode(j(63&A))},j=function(A){if(!(A<0)){if(A<26)return 65+A;if(A<52)return A-26+97;if(A<62)return A-52+48;if(A==62)return 43;if(A==63)return 47}throw"n:"+A};return L.writeByte=function(A){for(_=_<<8|255&A,k+=8,$+=1;k>=6;)U(_>>>k-6),k-=6},L.flush=function(){if(k>0&&(U(_<<6-k),_=0,k=0),$%3!=0)for(var A=3-$%3,u=0;u<A;u+=1)F+="="},L.toString=function(){return F},L}(),f=h.toByteArray(),C=0;C<f.length;C+=1)m.writeByte(f[C]);return m.flush(),"data:image/gif;base64,"+m};return N}();T.stringToBytesFuncs["UTF-8"]=function(N){return function(K){for(var H=[],G=0;G<K.length;G++){var z=K.charCodeAt(G);z<128?H.push(z):z<2048?H.push(192|z>>6,128|63&z):z<55296||z>=57344?H.push(224|z>>12,128|z>>6&63,128|63&z):(G++,z=65536+((1023&z)<<10|1023&K.charCodeAt(G)),H.push(240|z>>18,128|z>>12&63,128|z>>6&63,128|63&z))}return H}(N)},(q=typeof(S=function(){return T})=="function"?S.apply(x,[]):S)===void 0||(w.exports=q)}},a={};function c(w){var x=a[w];if(x!==void 0)return x.exports;var S=a[w]={exports:{}};return l[w](S,S.exports,c),S.exports}c.n=w=>{var x=w&&w.__esModule?()=>w.default:()=>w;return c.d(x,{a:x}),x},c.d=(w,x)=>{for(var S in x)c.o(x,S)&&!c.o(w,S)&&Object.defineProperty(w,S,{enumerable:!0,get:x[S]})},c.o=(w,x)=>Object.prototype.hasOwnProperty.call(w,x);var p={};return(()=>{c.d(p,{default:()=>bt});const w=O=>!!O&&typeof O=="object"&&!Array.isArray(O);function x(O,...n){if(!n.length)return O;const t=n.shift();return t!==void 0&&w(O)&&w(t)?(O=Object.assign({},O),Object.keys(t).forEach(o=>{const i=O[o],e=t[o];Array.isArray(i)&&Array.isArray(e)?O[o]=e:w(i)&&w(e)?O[o]=x(Object.assign({},i),e):O[o]=e}),x(O,...n)):O}function S(O,n){const t=document.createElement("a");t.download=n,t.href=O,document.body.appendChild(t),t.click(),document.body.removeChild(t)}const q={L:.07,M:.15,Q:.25,H:.3};class T{constructor({svg:n,type:t,window:o}){this._svg=n,this._type=t,this._window=o}draw(n,t,o,i){let e;switch(this._type){case"dots":e=this._drawDot;break;case"classy":e=this._drawClassy;break;case"classy-rounded":e=this._drawClassyRounded;break;case"rounded":e=this._drawRounded;break;case"extra-rounded":e=this._drawExtraRounded;break;default:e=this._drawSquare}e.call(this,{x:n,y:t,size:o,getNeighbor:i})}_rotateFigure({x:n,y:t,size:o,rotation:i=0,draw:e}){var r;const d=n+o/2,h=t+o/2;e(),(r=this._element)===null||r===void 0||r.setAttribute("transform",`rotate(${180*i/Math.PI},${d},${h})`)}_basicDot(n){const{size:t,x:o,y:i}=n;this._rotateFigure(Object.assign(Object.assign({},n),{draw:()=>{this._element=this._window.document.createElementNS("http://www.w3.org/2000/svg","circle"),this._element.setAttribute("cx",String(o+t/2)),this._element.setAttribute("cy",String(i+t/2)),this._element.setAttribute("r",String(t/2))}}))}_basicSquare(n){const{size:t,x:o,y:i}=n;this._rotateFigure(Object.assign(Object.assign({},n),{draw:()=>{this._element=this._window.document.createElementNS("http://www.w3.org/2000/svg","rect"),this._element.setAttribute("x",String(o)),this._element.setAttribute("y",String(i)),this._element.setAttribute("width",String(t)),this._element.setAttribute("height",String(t))}}))}_basicSideRounded(n){const{size:t,x:o,y:i}=n;this._rotateFigure(Object.assign(Object.assign({},n),{draw:()=>{this._element=this._window.document.createElementNS("http://www.w3.org/2000/svg","path"),this._element.setAttribute("d",`M ${o} ${i}v ${t}h `+t/2+`a ${t/2} ${t/2}, 0, 0, 0, 0 ${-t}`)}}))}_basicCornerRounded(n){const{size:t,x:o,y:i}=n;this._rotateFigure(Object.assign(Object.assign({},n),{draw:()=>{this._element=this._window.document.createElementNS("http://www.w3.org/2000/svg","path"),this._element.setAttribute("d",`M ${o} ${i}v ${t}h ${t}v `+-t/2+`a ${t/2} ${t/2}, 0, 0, 0, ${-t/2} ${-t/2}`)}}))}_basicCornerExtraRounded(n){const{size:t,x:o,y:i}=n;this._rotateFigure(Object.assign(Object.assign({},n),{draw:()=>{this._element=this._window.document.createElementNS("http://www.w3.org/2000/svg","path"),this._element.setAttribute("d",`M ${o} ${i}v ${t}h ${t}a ${t} ${t}, 0, 0, 0, ${-t} ${-t}`)}}))}_basicCornersRounded(n){const{size:t,x:o,y:i}=n;this._rotateFigure(Object.assign(Object.assign({},n),{draw:()=>{this._element=this._window.document.createElementNS("http://www.w3.org/2000/svg","path"),this._element.setAttribute("d",`M ${o} ${i}v `+t/2+`a ${t/2} ${t/2}, 0, 0, 0, ${t/2} ${t/2}h `+t/2+"v "+-t/2+`a ${t/2} ${t/2}, 0, 0, 0, ${-t/2} ${-t/2}`)}}))}_drawDot({x:n,y:t,size:o}){this._basicDot({x:n,y:t,size:o,rotation:0})}_drawSquare({x:n,y:t,size:o}){this._basicSquare({x:n,y:t,size:o,rotation:0})}_drawRounded({x:n,y:t,size:o,getNeighbor:i}){const e=i?+i(-1,0):0,r=i?+i(1,0):0,d=i?+i(0,-1):0,h=i?+i(0,1):0,m=e+r+d+h;if(m!==0)if(m>2||e&&r||d&&h)this._basicSquare({x:n,y:t,size:o,rotation:0});else{if(m===2){let f=0;return e&&d?f=Math.PI/2:d&&r?f=Math.PI:r&&h&&(f=-Math.PI/2),void this._basicCornerRounded({x:n,y:t,size:o,rotation:f})}if(m===1){let f=0;return d?f=Math.PI/2:r?f=Math.PI:h&&(f=-Math.PI/2),void this._basicSideRounded({x:n,y:t,size:o,rotation:f})}}else this._basicDot({x:n,y:t,size:o,rotation:0})}_drawExtraRounded({x:n,y:t,size:o,getNeighbor:i}){const e=i?+i(-1,0):0,r=i?+i(1,0):0,d=i?+i(0,-1):0,h=i?+i(0,1):0,m=e+r+d+h;if(m!==0)if(m>2||e&&r||d&&h)this._basicSquare({x:n,y:t,size:o,rotation:0});else{if(m===2){let f=0;return e&&d?f=Math.PI/2:d&&r?f=Math.PI:r&&h&&(f=-Math.PI/2),void this._basicCornerExtraRounded({x:n,y:t,size:o,rotation:f})}if(m===1){let f=0;return d?f=Math.PI/2:r?f=Math.PI:h&&(f=-Math.PI/2),void this._basicSideRounded({x:n,y:t,size:o,rotation:f})}}else this._basicDot({x:n,y:t,size:o,rotation:0})}_drawClassy({x:n,y:t,size:o,getNeighbor:i}){const e=i?+i(-1,0):0,r=i?+i(1,0):0,d=i?+i(0,-1):0,h=i?+i(0,1):0;e+r+d+h!==0?e||d?r||h?this._basicSquare({x:n,y:t,size:o,rotation:0}):this._basicCornerRounded({x:n,y:t,size:o,rotation:Math.PI/2}):this._basicCornerRounded({x:n,y:t,size:o,rotation:-Math.PI/2}):this._basicCornersRounded({x:n,y:t,size:o,rotation:Math.PI/2})}_drawClassyRounded({x:n,y:t,size:o,getNeighbor:i}){const e=i?+i(-1,0):0,r=i?+i(1,0):0,d=i?+i(0,-1):0,h=i?+i(0,1):0;e+r+d+h!==0?e||d?r||h?this._basicSquare({x:n,y:t,size:o,rotation:0}):this._basicCornerExtraRounded({x:n,y:t,size:o,rotation:Math.PI/2}):this._basicCornerExtraRounded({x:n,y:t,size:o,rotation:-Math.PI/2}):this._basicCornersRounded({x:n,y:t,size:o,rotation:Math.PI/2})}}class N{constructor({svg:n,type:t,window:o}){this._svg=n,this._type=t,this._window=o}draw(n,t,o,i){let e;switch(this._type){case"square":e=this._drawSquare;break;case"extra-rounded":e=this._drawExtraRounded;break;default:e=this._drawDot}e.call(this,{x:n,y:t,size:o,rotation:i})}_rotateFigure({x:n,y:t,size:o,rotation:i=0,draw:e}){var r;const d=n+o/2,h=t+o/2;e(),(r=this._element)===null||r===void 0||r.setAttribute("transform",`rotate(${180*i/Math.PI},${d},${h})`)}_basicDot(n){const{size:t,x:o,y:i}=n,e=t/7;this._rotateFigure(Object.assign(Object.assign({},n),{draw:()=>{this._element=this._window.document.createElementNS("http://www.w3.org/2000/svg","path"),this._element.setAttribute("clip-rule","evenodd"),this._element.setAttribute("d",`M ${o+t/2} ${i}a ${t/2} ${t/2} 0 1 0 0.1 0zm 0 ${e}a ${t/2-e} ${t/2-e} 0 1 1 -0.1 0Z`)}}))}_basicSquare(n){const{size:t,x:o,y:i}=n,e=t/7;this._rotateFigure(Object.assign(Object.assign({},n),{draw:()=>{this._element=this._window.document.createElementNS("http://www.w3.org/2000/svg","path"),this._element.setAttribute("clip-rule","evenodd"),this._element.setAttribute("d",`M ${o} ${i}v ${t}h ${t}v `+-t+`zM ${o+e} ${i+e}h `+(t-2*e)+"v "+(t-2*e)+"h "+(2*e-t)+"z")}}))}_basicExtraRounded(n){const{size:t,x:o,y:i}=n,e=t/7;this._rotateFigure(Object.assign(Object.assign({},n),{draw:()=>{this._element=this._window.document.createElementNS("http://www.w3.org/2000/svg","path"),this._element.setAttribute("clip-rule","evenodd"),this._element.setAttribute("d",`M ${o} ${i+2.5*e}v `+2*e+`a ${2.5*e} ${2.5*e}, 0, 0, 0, ${2.5*e} ${2.5*e}h `+2*e+`a ${2.5*e} ${2.5*e}, 0, 0, 0, ${2.5*e} ${2.5*-e}v `+-2*e+`a ${2.5*e} ${2.5*e}, 0, 0, 0, ${2.5*-e} ${2.5*-e}h `+-2*e+`a ${2.5*e} ${2.5*e}, 0, 0, 0, ${2.5*-e} ${2.5*e}M ${o+2.5*e} ${i+e}h `+2*e+`a ${1.5*e} ${1.5*e}, 0, 0, 1, ${1.5*e} ${1.5*e}v `+2*e+`a ${1.5*e} ${1.5*e}, 0, 0, 1, ${1.5*-e} ${1.5*e}h `+-2*e+`a ${1.5*e} ${1.5*e}, 0, 0, 1, ${1.5*-e} ${1.5*-e}v `+-2*e+`a ${1.5*e} ${1.5*e}, 0, 0, 1, ${1.5*e} ${1.5*-e}`)}}))}_drawDot({x:n,y:t,size:o,rotation:i}){this._basicDot({x:n,y:t,size:o,rotation:i})}_drawSquare({x:n,y:t,size:o,rotation:i}){this._basicSquare({x:n,y:t,size:o,rotation:i})}_drawExtraRounded({x:n,y:t,size:o,rotation:i}){this._basicExtraRounded({x:n,y:t,size:o,rotation:i})}}class K{constructor({svg:n,type:t,window:o}){this._svg=n,this._type=t,this._window=o}draw(n,t,o,i){let e;e=this._type==="square"?this._drawSquare:this._drawDot,e.call(this,{x:n,y:t,size:o,rotation:i})}_rotateFigure({x:n,y:t,size:o,rotation:i=0,draw:e}){var r;const d=n+o/2,h=t+o/2;e(),(r=this._element)===null||r===void 0||r.setAttribute("transform",`rotate(${180*i/Math.PI},${d},${h})`)}_basicDot(n){const{size:t,x:o,y:i}=n;this._rotateFigure(Object.assign(Object.assign({},n),{draw:()=>{this._element=this._window.document.createElementNS("http://www.w3.org/2000/svg","circle"),this._element.setAttribute("cx",String(o+t/2)),this._element.setAttribute("cy",String(i+t/2)),this._element.setAttribute("r",String(t/2))}}))}_basicSquare(n){const{size:t,x:o,y:i}=n;this._rotateFigure(Object.assign(Object.assign({},n),{draw:()=>{this._element=this._window.document.createElementNS("http://www.w3.org/2000/svg","rect"),this._element.setAttribute("x",String(o)),this._element.setAttribute("y",String(i)),this._element.setAttribute("width",String(t)),this._element.setAttribute("height",String(t))}}))}_drawDot({x:n,y:t,size:o,rotation:i}){this._basicDot({x:n,y:t,size:o,rotation:i})}_drawSquare({x:n,y:t,size:o,rotation:i}){this._basicSquare({x:n,y:t,size:o,rotation:i})}}const H="circle",G=[[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]],z=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];class Y{constructor(n,t){this._roundSize=o=>this._options.dotsOptions.roundSize?Math.floor(o):o,this._window=t,this._element=this._window.document.createElementNS("http://www.w3.org/2000/svg","svg"),this._element.setAttribute("width",String(n.width)),this._element.setAttribute("height",String(n.height)),this._element.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),n.dotsOptions.roundSize||this._element.setAttribute("shape-rendering","crispEdges"),this._element.setAttribute("viewBox",`0 0 ${n.width} ${n.height}`),this._defs=this._window.document.createElementNS("http://www.w3.org/2000/svg","defs"),this._element.appendChild(this._defs),this._imageUri=n.image,this._instanceId=Y.instanceCount++,this._options=n}get width(){return this._options.width}get height(){return this._options.height}getElement(){return this._element}async drawQR(n){const t=n.getModuleCount(),o=Math.min(this._options.width,this._options.height)-2*this._options.margin,i=this._options.shape===H?o/Math.sqrt(2):o,e=this._roundSize(i/t);let r={hideXDots:0,hideYDots:0,width:0,height:0};if(this._qr=n,this._options.image){if(await this.loadImage(),!this._image)return;const{imageOptions:d,qrOptions:h}=this._options,m=d.imageSize*q[h.errorCorrectionLevel],f=Math.floor(m*t*t);r=function({originalHeight:C,originalWidth:_,maxHiddenDots:k,maxHiddenAxisDots:$,dotSize:F}){const L={x:0,y:0},U={x:0,y:0};if(C<=0||_<=0||k<=0||F<=0)return{height:0,width:0,hideYDots:0,hideXDots:0};const j=C/_;return L.x=Math.floor(Math.sqrt(k/j)),L.x<=0&&(L.x=1),$&&$<L.x&&(L.x=$),L.x%2==0&&L.x--,U.x=L.x*F,L.y=1+2*Math.ceil((L.x*j-1)/2),U.y=Math.round(U.x*j),(L.y*L.x>k||$&&$<L.y)&&($&&$<L.y?(L.y=$,L.y%2==0&&L.x--):L.y-=2,U.y=L.y*F,L.x=1+2*Math.ceil((L.y/j-1)/2),U.x=Math.round(U.y/j)),{height:U.y,width:U.x,hideYDots:L.y,hideXDots:L.x}}({originalWidth:this._image.width,originalHeight:this._image.height,maxHiddenDots:f,maxHiddenAxisDots:t-14,dotSize:e})}this.drawBackground(),this.drawDots((d,h)=>{var m,f,C,_,k,$;return!(this._options.imageOptions.hideBackgroundDots&&d>=(t-r.hideYDots)/2&&d<(t+r.hideYDots)/2&&h>=(t-r.hideXDots)/2&&h<(t+r.hideXDots)/2||!((m=G[d])===null||m===void 0)&&m[h]||!((f=G[d-t+7])===null||f===void 0)&&f[h]||!((C=G[d])===null||C===void 0)&&C[h-t+7]||!((_=z[d])===null||_===void 0)&&_[h]||!((k=z[d-t+7])===null||k===void 0)&&k[h]||!(($=z[d])===null||$===void 0)&&$[h-t+7])}),this.drawCorners(),this._options.image&&await this.drawImage({width:r.width,height:r.height,count:t,dotSize:e})}drawBackground(){var n,t,o;const i=this._element,e=this._options;if(i){const r=(n=e.backgroundOptions)===null||n===void 0?void 0:n.gradient,d=(t=e.backgroundOptions)===null||t===void 0?void 0:t.color;let h=e.height,m=e.width;if(r||d){const f=this._window.document.createElementNS("http://www.w3.org/2000/svg","rect");this._backgroundClipPath=this._window.document.createElementNS("http://www.w3.org/2000/svg","clipPath"),this._backgroundClipPath.setAttribute("id",`clip-path-background-color-${this._instanceId}`),this._defs.appendChild(this._backgroundClipPath),!((o=e.backgroundOptions)===null||o===void 0)&&o.round&&(h=m=Math.min(e.width,e.height),f.setAttribute("rx",String(h/2*e.backgroundOptions.round))),f.setAttribute("x",String(this._roundSize((e.width-m)/2))),f.setAttribute("y",String(this._roundSize((e.height-h)/2))),f.setAttribute("width",String(m)),f.setAttribute("height",String(h)),this._backgroundClipPath.appendChild(f),this._createColor({options:r,color:d,additionalRotation:0,x:0,y:0,height:e.height,width:e.width,name:`background-color-${this._instanceId}`})}}}drawDots(n){var t,o;if(!this._qr)throw"QR code is not defined";const i=this._options,e=this._qr.getModuleCount();if(e>i.width||e>i.height)throw"The canvas is too small.";const r=Math.min(i.width,i.height)-2*i.margin,d=i.shape===H?r/Math.sqrt(2):r,h=this._roundSize(d/e),m=this._roundSize((i.width-e*h)/2),f=this._roundSize((i.height-e*h)/2),C=new T({svg:this._element,type:i.dotsOptions.type,window:this._window});this._dotsClipPath=this._window.document.createElementNS("http://www.w3.org/2000/svg","clipPath"),this._dotsClipPath.setAttribute("id",`clip-path-dot-color-${this._instanceId}`),this._defs.appendChild(this._dotsClipPath),this._createColor({options:(t=i.dotsOptions)===null||t===void 0?void 0:t.gradient,color:i.dotsOptions.color,additionalRotation:0,x:0,y:0,height:i.height,width:i.width,name:`dot-color-${this._instanceId}`});for(let _=0;_<e;_++)for(let k=0;k<e;k++)n&&!n(_,k)||!((o=this._qr)===null||o===void 0)&&o.isDark(_,k)&&(C.draw(m+k*h,f+_*h,h,($,F)=>!(k+$<0||_+F<0||k+$>=e||_+F>=e)&&!(n&&!n(_+F,k+$))&&!!this._qr&&this._qr.isDark(_+F,k+$)),C._element&&this._dotsClipPath&&this._dotsClipPath.appendChild(C._element));if(i.shape===H){const _=this._roundSize((r/h-e)/2),k=e+2*_,$=m-_*h,F=f-_*h,L=[],U=this._roundSize(k/2);for(let j=0;j<k;j++){L[j]=[];for(let A=0;A<k;A++)j>=_-1&&j<=k-_&&A>=_-1&&A<=k-_||Math.sqrt((j-U)*(j-U)+(A-U)*(A-U))>U?L[j][A]=0:L[j][A]=this._qr.isDark(A-2*_<0?A:A>=e?A-2*_:A-_,j-2*_<0?j:j>=e?j-2*_:j-_)?1:0}for(let j=0;j<k;j++)for(let A=0;A<k;A++)L[j][A]&&(C.draw($+A*h,F+j*h,h,(u,y)=>{var g;return!!(!((g=L[j+y])===null||g===void 0)&&g[A+u])}),C._element&&this._dotsClipPath&&this._dotsClipPath.appendChild(C._element))}}drawCorners(){if(!this._qr)throw"QR code is not defined";const n=this._element,t=this._options;if(!n)throw"Element code is not defined";const o=this._qr.getModuleCount(),i=Math.min(t.width,t.height)-2*t.margin,e=t.shape===H?i/Math.sqrt(2):i,r=this._roundSize(e/o),d=7*r,h=3*r,m=this._roundSize((t.width-o*r)/2),f=this._roundSize((t.height-o*r)/2);[[0,0,0],[1,0,Math.PI/2],[0,1,-Math.PI/2]].forEach(([C,_,k])=>{var $,F,L,U,j,A,u,y,g,b,v,M;const R=m+C*r*(o-7),B=f+_*r*(o-7);let V=this._dotsClipPath,I=this._dotsClipPath;if((!(($=t.cornersSquareOptions)===null||$===void 0)&&$.gradient||!((F=t.cornersSquareOptions)===null||F===void 0)&&F.color)&&(V=this._window.document.createElementNS("http://www.w3.org/2000/svg","clipPath"),V.setAttribute("id",`clip-path-corners-square-color-${C}-${_}-${this._instanceId}`),this._defs.appendChild(V),this._cornersSquareClipPath=this._cornersDotClipPath=I=V,this._createColor({options:(L=t.cornersSquareOptions)===null||L===void 0?void 0:L.gradient,color:(U=t.cornersSquareOptions)===null||U===void 0?void 0:U.color,additionalRotation:k,x:R,y:B,height:d,width:d,name:`corners-square-color-${C}-${_}-${this._instanceId}`})),(j=t.cornersSquareOptions)===null||j===void 0?void 0:j.type){const P=new N({svg:this._element,type:t.cornersSquareOptions.type,window:this._window});P.draw(R,B,d,k),P._element&&V&&V.appendChild(P._element)}else{const P=new T({svg:this._element,type:t.dotsOptions.type,window:this._window});for(let Z=0;Z<G.length;Z++)for(let Q=0;Q<G[Z].length;Q++)!((A=G[Z])===null||A===void 0)&&A[Q]&&(P.draw(R+Q*r,B+Z*r,r,(J,W)=>{var E;return!!(!((E=G[Z+W])===null||E===void 0)&&E[Q+J])}),P._element&&V&&V.appendChild(P._element))}if((!((u=t.cornersDotOptions)===null||u===void 0)&&u.gradient||!((y=t.cornersDotOptions)===null||y===void 0)&&y.color)&&(I=this._window.document.createElementNS("http://www.w3.org/2000/svg","clipPath"),I.setAttribute("id",`clip-path-corners-dot-color-${C}-${_}-${this._instanceId}`),this._defs.appendChild(I),this._cornersDotClipPath=I,this._createColor({options:(g=t.cornersDotOptions)===null||g===void 0?void 0:g.gradient,color:(b=t.cornersDotOptions)===null||b===void 0?void 0:b.color,additionalRotation:k,x:R+2*r,y:B+2*r,height:h,width:h,name:`corners-dot-color-${C}-${_}-${this._instanceId}`})),(v=t.cornersDotOptions)===null||v===void 0?void 0:v.type){const P=new K({svg:this._element,type:t.cornersDotOptions.type,window:this._window});P.draw(R+2*r,B+2*r,h,k),P._element&&I&&I.appendChild(P._element)}else{const P=new T({svg:this._element,type:t.dotsOptions.type,window:this._window});for(let Z=0;Z<z.length;Z++)for(let Q=0;Q<z[Z].length;Q++)!((M=z[Z])===null||M===void 0)&&M[Q]&&(P.draw(R+Q*r,B+Z*r,r,(J,W)=>{var E;return!!(!((E=z[Z+W])===null||E===void 0)&&E[Q+J])}),P._element&&I&&I.appendChild(P._element))}})}loadImage(){return new Promise((n,t)=>{var o;const i=this._options;if(!i.image)return t("Image is not defined");if(!((o=i.nodeCanvas)===null||o===void 0)&&o.loadImage)i.nodeCanvas.loadImage(i.image).then(e=>{var r,d;if(this._image=e,this._options.imageOptions.saveAsBlob){const h=(r=i.nodeCanvas)===null||r===void 0?void 0:r.createCanvas(this._image.width,this._image.height);(d=h==null?void 0:h.getContext("2d"))===null||d===void 0||d.drawImage(e,0,0),this._imageUri=h==null?void 0:h.toDataURL()}n()}).catch(t);else{const e=new this._window.Image;typeof i.imageOptions.crossOrigin=="string"&&(e.crossOrigin=i.imageOptions.crossOrigin),this._image=e,e.onload=async()=>{this._options.imageOptions.saveAsBlob&&(this._imageUri=await async function(r,d){return new Promise(h=>{const m=new d.XMLHttpRequest;m.onload=function(){const f=new d.FileReader;f.onloadend=function(){h(f.result)},f.readAsDataURL(m.response)},m.open("GET",r),m.responseType="blob",m.send()})}(i.image||"",this._window)),n()},e.src=i.image}})}async drawImage({width:n,height:t,count:o,dotSize:i}){const e=this._options,r=this._roundSize((e.width-o*i)/2),d=this._roundSize((e.height-o*i)/2),h=r+this._roundSize(e.imageOptions.margin+(o*i-n)/2),m=d+this._roundSize(e.imageOptions.margin+(o*i-t)/2),f=n-2*e.imageOptions.margin,C=t-2*e.imageOptions.margin,_=this._window.document.createElementNS("http://www.w3.org/2000/svg","image");_.setAttribute("href",this._imageUri||""),_.setAttribute("x",String(h)),_.setAttribute("y",String(m)),_.setAttribute("width",`${f}px`),_.setAttribute("height",`${C}px`),this._element.appendChild(_)}_createColor({options:n,color:t,additionalRotation:o,x:i,y:e,height:r,width:d,name:h}){const m=d>r?d:r,f=this._window.document.createElementNS("http://www.w3.org/2000/svg","rect");if(f.setAttribute("x",String(i)),f.setAttribute("y",String(e)),f.setAttribute("height",String(r)),f.setAttribute("width",String(d)),f.setAttribute("clip-path",`url('#clip-path-${h}')`),n){let C;if(n.type==="radial")C=this._window.document.createElementNS("http://www.w3.org/2000/svg","radialGradient"),C.setAttribute("id",h),C.setAttribute("gradientUnits","userSpaceOnUse"),C.setAttribute("fx",String(i+d/2)),C.setAttribute("fy",String(e+r/2)),C.setAttribute("cx",String(i+d/2)),C.setAttribute("cy",String(e+r/2)),C.setAttribute("r",String(m/2));else{const _=((n.rotation||0)+o)%(2*Math.PI),k=(_+2*Math.PI)%(2*Math.PI);let $=i+d/2,F=e+r/2,L=i+d/2,U=e+r/2;k>=0&&k<=.25*Math.PI||k>1.75*Math.PI&&k<=2*Math.PI?($-=d/2,F-=r/2*Math.tan(_),L+=d/2,U+=r/2*Math.tan(_)):k>.25*Math.PI&&k<=.75*Math.PI?(F-=r/2,$-=d/2/Math.tan(_),U+=r/2,L+=d/2/Math.tan(_)):k>.75*Math.PI&&k<=1.25*Math.PI?($+=d/2,F+=r/2*Math.tan(_),L-=d/2,U-=r/2*Math.tan(_)):k>1.25*Math.PI&&k<=1.75*Math.PI&&(F+=r/2,$+=d/2/Math.tan(_),U-=r/2,L-=d/2/Math.tan(_)),C=this._window.document.createElementNS("http://www.w3.org/2000/svg","linearGradient"),C.setAttribute("id",h),C.setAttribute("gradientUnits","userSpaceOnUse"),C.setAttribute("x1",String(Math.round($))),C.setAttribute("y1",String(Math.round(F))),C.setAttribute("x2",String(Math.round(L))),C.setAttribute("y2",String(Math.round(U)))}n.colorStops.forEach(({offset:_,color:k})=>{const $=this._window.document.createElementNS("http://www.w3.org/2000/svg","stop");$.setAttribute("offset",100*_+"%"),$.setAttribute("stop-color",k),C.appendChild($)}),f.setAttribute("fill",`url('#${h}')`),this._defs.appendChild(C)}else t&&f.setAttribute("fill",t);this._element.appendChild(f)}}Y.instanceCount=0;const et=Y,it="canvas",ot={};for(let O=0;O<=40;O++)ot[O]=O;const at={type:it,shape:"square",width:300,height:300,data:"",margin:0,qrOptions:{typeNumber:ot[0],mode:void 0,errorCorrectionLevel:"Q"},imageOptions:{saveAsBlob:!0,hideBackgroundDots:!0,imageSize:.4,crossOrigin:void 0,margin:0},dotsOptions:{type:"square",color:"#000",roundSize:!0},backgroundOptions:{round:0,color:"#fff"}};function dt(O){const n=Object.assign({},O);if(!n.colorStops||!n.colorStops.length)throw"Field 'colorStops' is required in gradient";return n.rotation?n.rotation=Number(n.rotation):n.rotation=0,n.colorStops=n.colorStops.map(t=>Object.assign(Object.assign({},t),{offset:Number(t.offset)})),n}function gt(O){const n=Object.assign({},O);return n.width=Number(n.width),n.height=Number(n.height),n.margin=Number(n.margin),n.imageOptions=Object.assign(Object.assign({},n.imageOptions),{hideBackgroundDots:!!n.imageOptions.hideBackgroundDots,imageSize:Number(n.imageOptions.imageSize),margin:Number(n.imageOptions.margin)}),n.margin>Math.min(n.width,n.height)&&(n.margin=Math.min(n.width,n.height)),n.dotsOptions=Object.assign({},n.dotsOptions),n.dotsOptions.gradient&&(n.dotsOptions.gradient=dt(n.dotsOptions.gradient)),n.cornersSquareOptions&&(n.cornersSquareOptions=Object.assign({},n.cornersSquareOptions),n.cornersSquareOptions.gradient&&(n.cornersSquareOptions.gradient=dt(n.cornersSquareOptions.gradient))),n.cornersDotOptions&&(n.cornersDotOptions=Object.assign({},n.cornersDotOptions),n.cornersDotOptions.gradient&&(n.cornersDotOptions.gradient=dt(n.cornersDotOptions.gradient))),n.backgroundOptions&&(n.backgroundOptions=Object.assign({},n.backgroundOptions),n.backgroundOptions.gradient&&(n.backgroundOptions.gradient=dt(n.backgroundOptions.gradient))),n}var kt=c(873),Mt=c.n(kt);function ut(O){if(!O)throw new Error("Extension must be defined");O[0]==="."&&(O=O.substring(1));const n={bmp:"image/bmp",gif:"image/gif",ico:"image/vnd.microsoft.icon",jpeg:"image/jpeg",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",webp:"image/webp",pdf:"application/pdf"}[O.toLowerCase()];if(!n)throw new Error(`Extension "${O}" is not supported`);return n}class mt{constructor(n){n!=null&&n.jsdom?this._window=new n.jsdom("",{resources:"usable"}).window:this._window=window,this._options=n?gt(x(at,n)):at,this.update()}static _clearContainer(n){n&&(n.innerHTML="")}_setupSvg(){if(!this._qr)return;const n=new et(this._options,this._window);this._svg=n.getElement(),this._svgDrawingPromise=n.drawQR(this._qr).then(()=>{var t;this._svg&&((t=this._extension)===null||t===void 0||t.call(this,n.getElement(),this._options))})}_setupCanvas(){var n,t;this._qr&&(!((n=this._options.nodeCanvas)===null||n===void 0)&&n.createCanvas?(this._nodeCanvas=this._options.nodeCanvas.createCanvas(this._options.width,this._options.height),this._nodeCanvas.width=this._options.width,this._nodeCanvas.height=this._options.height):(this._domCanvas=document.createElement("canvas"),this._domCanvas.width=this._options.width,this._domCanvas.height=this._options.height),this._setupSvg(),this._canvasDrawingPromise=(t=this._svgDrawingPromise)===null||t===void 0?void 0:t.then(()=>{var o;if(!this._svg)return;const i=this._svg,e=new this._window.XMLSerializer().serializeToString(i),r=btoa(e),d=`data:${ut("svg")};base64,${r}`;if(!((o=this._options.nodeCanvas)===null||o===void 0)&&o.loadImage)return this._options.nodeCanvas.loadImage(d).then(h=>{var m,f;h.width=this._options.width,h.height=this._options.height,(f=(m=this._nodeCanvas)===null||m===void 0?void 0:m.getContext("2d"))===null||f===void 0||f.drawImage(h,0,0)});{const h=new this._window.Image;return new Promise(m=>{h.onload=()=>{var f,C;(C=(f=this._domCanvas)===null||f===void 0?void 0:f.getContext("2d"))===null||C===void 0||C.drawImage(h,0,0),m()},h.src=d})}}))}async _getElement(n="png"){if(!this._qr)throw"QR code is empty";return n.toLowerCase()==="svg"?(this._svg&&this._svgDrawingPromise||this._setupSvg(),await this._svgDrawingPromise,this._svg):((this._domCanvas||this._nodeCanvas)&&this._canvasDrawingPromise||this._setupCanvas(),await this._canvasDrawingPromise,this._domCanvas||this._nodeCanvas)}update(n){mt._clearContainer(this._container),this._options=n?gt(x(this._options,n)):this._options,this._options.data&&(this._qr=Mt()(this._options.qrOptions.typeNumber,this._options.qrOptions.errorCorrectionLevel),this._qr.addData(this._options.data,this._options.qrOptions.mode||function(t){switch(!0){case/^[0-9]*$/.test(t):return"Numeric";case/^[0-9A-Z $%*+\-./:]*$/.test(t):return"Alphanumeric";default:return"Byte"}}(this._options.data)),this._qr.make(),this._options.type===it?this._setupCanvas():this._setupSvg(),this.append(this._container))}append(n){if(n){if(typeof n.appendChild!="function")throw"Container should be a single DOM node";this._options.type===it?this._domCanvas&&n.appendChild(this._domCanvas):this._svg&&n.appendChild(this._svg),this._container=n}}applyExtension(n){if(!n)throw"Extension function should be defined.";this._extension=n,this.update()}deleteExtension(){this._extension=void 0,this.update()}async getRawData(n="png"){if(!this._qr)throw"QR code is empty";const t=await this._getElement(n),o=ut(n);if(!t)return null;if(n.toLowerCase()==="svg"){const i=`<?xml version="1.0" standalone="no"?>\r
${new this._window.XMLSerializer().serializeToString(t)}`;return typeof Blob>"u"||this._options.jsdom?Buffer.from(i):new Blob([i],{type:o})}return new Promise(i=>{const e=t;if("toBuffer"in e)if(o==="image/png")i(e.toBuffer(o));else if(o==="image/jpeg")i(e.toBuffer(o));else{if(o!=="application/pdf")throw Error("Unsupported extension");i(e.toBuffer(o))}else"toBlob"in e&&e.toBlob(i,o,1)})}async download(n){if(!this._qr)throw"QR code is empty";if(typeof Blob>"u")throw"Cannot download in Node.js, call getRawData instead.";let t="png",o="qr";typeof n=="string"?(t=n,console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")):typeof n=="object"&&n!==null&&(n.name&&(o=n.name),n.extension&&(t=n.extension));const i=await this._getElement(t);if(i)if(t.toLowerCase()==="svg"){let e=new XMLSerializer().serializeToString(i);e=`<?xml version="1.0" standalone="no"?>\r
`+e,S(`data:${ut(t)};charset=utf-8,${encodeURIComponent(e)}`,`${o}.svg`)}else S(i.toDataURL(ut(t)),`${o}.${t}`)}}const bt=mt})(),p.default})())}(Ct)),Ct.exports}var Tt=Vt();const Ht=It(Tt),qt=()=>`
        <!-- Template for hotspots -->
        <button data-hotspot slot="hotspot-dot+X-Y+Z" class="dot" data-position="1 -1 1" data-normal="1 0 0"></button>
        <button data-hotspot slot="hotspot-dim+X-Y" class="dim" data-position="1 -1 0" data-normal="1 0 0"></button>
        <button data-hotspot slot="hotspot-dot+X-Y-Z" class="dot" data-position="1 -1 -1" data-normal="1 0 0"></button>
        <button data-hotspot slot="hotspot-dim+X-Z" class="dim" data-position="1 0 -1" data-normal="1 0 0"></button>
        <button data-hotspot slot="hotspot-dot+X+Y-Z" class="dot" data-position="1 1 -1" data-normal="0 1 0"></button>
        <button data-hotspot slot="hotspot-dim+Y-Z" class="dim" data-position="0 -1 -1" data-normal="0 1 0"></button>
        <button data-hotspot slot="hotspot-dot-X+Y-Z" class="dot" data-position="-1 1 -1" data-normal="0 1 0"></button>
        <button data-hotspot slot="hotspot-dim-X-Z" class="dim" data-position="-1 0 -1" data-normal="-1 0 0"></button>
        <button data-hotspot slot="hotspot-dot-X-Y-Z" class="dot" data-position="-1 -1 -1" data-normal="-1 0 0"></button>
        <button data-hotspot slot="hotspot-dim-X-Y" class="dim" data-position="-1 -1 0" data-normal="-1 0 0"></button>
        <button data-hotspot slot="hotspot-dot-X-Y+Z" class="dot" data-position="-1 -1 1" data-normal="-1 0 0"></button>
        <svg id="dimLines" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="dimensionLineContainer">
            <line class="dimensionLine"></line>
            <line class="dimensionLine"></line>
            <line class="dimensionLine"></line>
            <line class="dimensionLine"></line>
            <line class="dimensionLine"></line>
        </svg>
    `;function $t(D){let s="";function l(p){return p.trim().startsWith("@media")}function a(p){return p.replace(/([A-Z])/g,"-$1").toLowerCase()}function c(p,w){let x="";const S="  ".repeat(w);for(const q in p)if(Object.prototype.hasOwnProperty.call(p,q)){const T=p[q];if(typeof T=="object"&&!Array.isArray(T))x+=`
${S}${q} {`,x+=c(T,w+1),x+=`
${S}}`;else{const N=a(q);x+=`
${S}${N}: ${T};`}}return x}for(const p in D)if(Object.prototype.hasOwnProperty.call(D,p)){const w=D[p];typeof w=="object"?(s+=`${p} {`,l(p),s+=c(w,1),s+=`
}
`):typeof w=="string"&&(s+=`${p} {
  ${w}
}
`)}return s}const Lt="https://cdn.statically.io/gh/ardisplaycorp/bridge/v1.7.0/build",xt="https://ardisplaybridge.vercel.app",Ft={".normal-view-container":{width:"100%",height:"100%",display:"block",fontFamily:"sans-serif",position:"relative"},".ardisplay-qr-code-button":{all:"unset",position:"absolute",top:"10px",right:"50%",transform:"translateX(50%)",background:"white",cursor:"pointer",padding:"10px",zIndex:"1000",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}},Nt=(D,s,l,a,c,p)=>{const w=$t(Ft),x=qt();return`
        <!-- Template for modal view -->
        <style>${w}</style>
        <div class="normal-view-container" style="direction: ltr;">
            <model-viewer
                ar="${D}"
                shadow-intensity="${p.shadow}"
                ar-placement="${p.placement}"
                ar-modes="webxr scene-viewer quick-look"
                ar-scale="fixed"
                camera-controls="true"
                disable-pan="true"
                disable-tap="true"
                interaction-prompt="none"
                interpolation-decay="40"
                touch-action="none"
                max-field-of-view="auto"
                field-of-view="auto"
                camera-orbit="0deg 75deg 105%"
                ar-status="not-presenting"
            >
                ${x}
                <button class="ardisplay-qr-code-button" style="background-color: ${p.arBtn.btnBgColor};color: ${p.arBtn.btnTextColor};border-radius: ${p.arBtn.cornerRadius}px;font-size: ${p.arBtn.btnSize-6}px;text-wrap: nowrap;">
                    ${p.arBtn.btnIcon?`<i data-lucide="${p.arBtn.btnIcon}" style="width: 24px; height: 24px;color: inherit;"></i>`:""}
                    ${p.arBtn.btnText}
                </button>
            </model-viewer>
        </div>
    `},Ut={".ardisplay-custom-model-viewer-container":{position:"relative",width:"100%",height:"100%",display:"block",fontFamily:"sans-serif"},".ardisplay-preview-image":{width:"100%",height:"100%",objectFit:"cover",display:"block"},".ardisplay-view-3d-button":{bottom:"10px",right:"10px",padding:"10px 20px",backgroundColor:"rgba(0, 0, 0, 0.75)",color:"white",border:"none",borderRadius:"50px",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"10px"},".ardisplay-view-3d-button svg":{fill:"white"}},Xt=(D,s,l,a,c,p)=>`
        <!-- Template for modal view -->
        <style>${$t(Ut)}</style>
        <div class="ardisplay-custom-model-viewer-container" style="direction: ltr;">
            <button class="ardisplay-view-3d-button" style="background-color: ${p.arBtn.btnBgColor};color: ${p.arBtn.btnTextColor};border-radius: ${p.arBtn.cornerRadius}px;font-size: ${p.arBtn.btnSize-6}px;">
                <svg viewBox="0 0 24 24" focusable="false" width="24" height="24" aria-hidden="true" class="pip-svg-icon pip-btn__icon"><path d="M11 16.9766c.3294.0154.663.0233 1 .0233 2.2351 0 4.3234-.3458 6-.9495 1.7881-.6438 4-1.8975 4-4.0505 0-1.9568-1.8939-3.1985-3.5147-3.864l-1.5605 1.5606C17.8623 9.9943 20 10.7292 20 11.9999c0 .9329-1.2789 1.5728-2 1.8958-1.8614.8335-3.9768 1.1042-6 1.1042-.3392 0-.6729-.0088-1-.0257v-1.9743l-3 3 3 3v2.0233zm2-9.9532A21.3903 21.3903 0 0 0 12.0001 7c-2.235 0-4.3234.3457-6 .9494-1.7881.6438-4 1.8976-4 4.0506 0 1.9568 1.894 3.1984 3.5146 3.8639l1.5606-1.5605C6.1378 14.0057 4 13.2707 4 12.0001c0-.9329 1.2789-1.5729 2-1.8958 1.8614-.8336 3.9767-1.1042 6-1.1042.3392 0 .6729.0087.9999.0257V11l3-3-3-3v2.0234z"></path></svg>
                View in 3D
            </button>
        </div>
    `,Yt={"model-viewer":{top:0,left:0,opacity:0,zIndex:-100,position:"absolute"},".ardisplay-qr-code-button":{all:"unset",background:"white",cursor:"pointer",padding:"10px",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}},Bt=(D,s,l,a,c,p)=>{const w=$t(Yt),x=qt();return`
        <!-- Template for modal view -->
        <style>${w}</style>
        <button class="ardisplay-qr-code-button" style="background-color: ${p.arBtn.btnBgColor};color: ${p.arBtn.btnTextColor};border-radius: ${p.arBtn.cornerRadius}px;font-size: ${p.arBtn.btnSize-6}px;text-wrap: nowrap;direction: ltr;">
            ${p.arBtn.btnIcon?`<i data-lucide="${p.arBtn.btnIcon}" style="width: 24px; height: 24px;color: inherit;"></i>`:""}
            ${p.arBtn.btnText}
        </button>
        <model-viewer
            ar="${D}"
            shadow-intensity="${p.shadow}"
            ar-placement="${p.placement}"
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="fixed"
            camera-controls="true"
            disable-pan="true"
            disable-tap="true"
            interaction-prompt="none"
            interpolation-decay="40"
            touch-action="none"
            max-field-of-view="auto"
            field-of-view="auto"
            camera-orbit="0deg 75deg 105%"
            ar-status="not-presenting"
        >
            ${x}
        </model-viewer>
    `};/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=["svg",pt,[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=["svg",pt,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=["svg",pt,[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=["svg",pt,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 18 4-4"}],["path",{d:"M8 10v8h8"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=["svg",pt,[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=["svg",pt,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]],te="modulepreload",ee=function(D){return"/"+D},Dt={},ie=function(s,l,a){let c=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const w=document.querySelector("meta[property=csp-nonce]"),x=(w==null?void 0:w.nonce)||(w==null?void 0:w.getAttribute("nonce"));c=Promise.allSettled(l.map(S=>{if(S=ee(S),S in Dt)return;Dt[S]=!0;const q=S.endsWith(".css"),T=q?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${S}"]${T}`))return;const N=document.createElement("link");if(N.rel=q?"stylesheet":te,q||(N.as="script"),N.crossOrigin="",N.href=S,x&&N.setAttribute("nonce",x),document.head.appendChild(N),q)return new Promise((K,H)=>{N.addEventListener("load",K),N.addEventListener("error",()=>H(new Error(`Unable to preload CSS for ${S}`)))})}))}function p(w){const x=new Event("vite:preloadError",{cancelable:!0});if(x.payload=w,window.dispatchEvent(x),!x.defaultPrevented)throw w}return c.then(w=>{for(const x of w||[])x.status==="rejected"&&p(x.reason);return s().catch(p)})};async function yt(){if(!window.customElements.get("model-viewer"))try{return await ie(()=>import("./model-viewer-module.min-CGeqHweS.js"),[]),!0}catch(D){return console.error("Failed to load model-viewer:",D),!1}return!0}const oe=D=>btoa(D),tt=(D,s={})=>{const l=document.createElement(D);return s.classList&&s.classList.forEach(a=>l.classList.add(a)),s.textContent&&(l.textContent=s.textContent),s.attributes&&Object.entries(s.attributes).forEach(([a,c])=>{l.setAttribute(a,c)}),l};function _t(D,s=document.body){return s.appendChild(D),D}const St={debug:(...D)=>{},error:(...D)=>{},warn:(...D)=>{}};async function At(D,s){if(s[D])return s[D];try{const l=fetch(D).then(a=>{if(!a.ok)throw new Error("Network response was not ok");return a.blob()}).then(a=>{const c=URL.createObjectURL(a);return s[D]=c,c});return s[D]=l,await l}catch(l){return console.error("Failed to load poster:",l),delete s[D],D}}class zt{constructor(s,l){this.container=s,this.modelData=l,this.qrCode=null}async loadImage(s){return new Promise((l,a)=>{const c=new Image;c.onload=()=>l(),c.onerror=c.onabort=()=>a(new Error("Image failed to load")),c.src=s})}async updateQrCode(s){var p;this.container.innerHTML="";const l=(p=this.modelData)==null?void 0:p.qrCode;let a=l==null?void 0:l.faviconUrl;if(a)try{await this.loadImage(a)}catch{a=null}const c={width:parseInt(l.QRsize)||240,height:parseInt(l.QRsize)||240,data:s,dotsOptions:{color:l.dotColor||"#000000",type:l.dotStyle||"square"},cornersSquareOptions:{color:l.cornerColor||"#000000",type:l.cornerStyle||"square"},cornersDotOptions:{color:l.cornerDotColor||"#000000",type:l.cornerDotStyle||"square"},backgroundOptions:{color:l.backgroundColor||"#ffffff"}};a&&(c.image=a,c.imageOptions={margin:parseInt(l.faviconMargin)||0}),this.qrCode=new Ht(c),this.qrCode.append(this.container)}}const Pt=document.createElement("template");Pt.innerHTML=`
  <div class="ardisplay-progress-modal" id="ardisplayProgressModal" style="display: none;direction: ltr;">
    <div class="ardisplay-progress-content">
      <button class="ardisplay-progress-close-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg></button>
      <h3 class="ardisplay-progress-text">Loading...</h3>
      <div class="ardisplay-progress-bar">
        <div class="ardisplay-progress-bar-fill" id="ardisplayProgressBarFill"></div>
      </div>
    </div>
  </div>
  <style>
    .ardisplay-progress-modal {
      position: fixed;
      z-index: 9999;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0,0,0,0.6);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
    .ardisplay-progress-content {
      position: relative;
      text-align: center;
      font-family: sans-serif;
    }
    .ardisplay-progress-text {
      color:white;
    }
    .ardisplay-progress-bar {
      width: 200px;
      background: transparent;
      border: 2px solid white;
      border-radius: 4px;
      margin-top: 16px;
      overflow: hidden;
    }
    .ardisplay-progress-bar-fill {
      width: 0;
      height: 8px;
      background: white;
      transition: width 0.2s linear;
    }
    .ar-button {
      margin-top: 16px;
      padding: 8px 16px;
      background: #0072f5;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      display: none;
    }
    .ar-button:hover {
      background: #0058bc;
    }
    .ardisplay-progress-close-button {
      position: fixed;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
        color: white;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        border: none;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        background: transparent;
    }
    .ardisplay-progress-close-button:hover {
      color: #ccc;
    }
    .ardisplay-progress-close-button svg{
      width:30px;
      height:30px;
    }
  </style>
`;const ht=[{title:"Scanning",description:"Stand several feet back. With camera facing wall, make sweeping motion side to side, up and down."},{title:"Ready to view",description:"Get started with AR view"}],Ot=document.createElement("template");Ot.innerHTML=`
  <div class="ardisplay-multi-steps-overlay" style="display: none;direction: ltr;">
    <div class="ardisplay-overlay-bg" style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.6);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      z-index: 9998;
    ">
      <div class="ardisplay-steps-close-button" style="
        position: fixed;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
        color: white;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        border: none;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      ">
        <svg xmlns="http://www.w3.org/2000/svg" style="width:30px;height:30px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
    <div class="ardisplay-multi-steps-modal" style="
      position: fixed;
      bottom: .5rem;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 1rem);
      height: auto;
      max-height: 90vh;
      background-color: rgba(255, 255, 255, 0.85);
      -webkit-backdrop-filter: blur(15px);
      backdrop-filter: blur(15px);
      z-index: 9999;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      padding: 15px;
    ">
      <div class="ardisplay-steps-content" style="padding: 1rem; flex: 1;padding-top: 0;">
        <h3 class="ardisplay-translate-lang instructions-title">Scanning</h3>
        <img id="instructionGif" src="" class="ardisplay-steps-gif" alt="Computer man">
        <div class="ardisplay-instructions-body translate-lang" data-id="space-info">Stand several feet back. With camera facing wall, make sweeping motion side to side, up and down.</div>
      </div>
      <div class="ardisplay-steps-footer" style="
        display: flex; 
        justify-content: flex-end; 
        flex-direction:column;
        gap: 0.5rem; 
        border-top: 1px solid #ccc; 
        font-size: 16px;
        font-weight: bold;
        line-height: 1.5;
        padding: 8px;
        width: 75%;
        max-width: 100%;
        margin: 10px auto;
      ">
        <button class="ardisplay-next-button ardisplay-multi-button">Next</button>
      </div>
    </div>
  </div>
  <style>
    /* You can customize these classes as well */
    .ardisplay-multi-steps-overlay.show {
      display: block;
    }

    .ardisplay-steps-gif{
      width:100%;
      height:auto;
      border-radius: 20px;
    }

    .ardisplay-view-wall-button{
      width: 100%;
    }

    .ardisplay-view-wall-button svg{
      width: 24px;
      height: 24px;
      margin-right: 8px;
      fill: white;
      stroke: white;
    }

    .ardisplay-instructions-body {
        display:flex;
        align-items:center;
        font-size: 16px;
        line-height: 1.5;
        color: #272727;
        margin: 10px 0 10px 0;
        text-align: justify;
        font-family:sans-serif;
    }

    h3 {
        font-size: 20px;
        font-weight: bold;
        font-family:sans-serif;
        line-height: 1.5;
        margin: 5px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 10px 10px 10px 10px;
    }

    .ardisplay-steps-header{
      display:flex;
      flex-direction:row;
      width:80%;
      gap:12px;
      margin:auto;
    }

    .ardisplay-steps-content{
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      overflow:hidden;
    }

    .ardisplay-step-indicator{
      height:6px;
      background:#bbbbbb;
      flex:1;
    }

    .ardisplay-step-indicator.active{
      background:black;
    }

    .ardisplay-multi-button{
      padding-block: .5rem;
      cursor:pointer;
      height:45px;
      border-radius:10px;
      flex-shrink:0;
      font-weight:bold;
    }

    .ardisplay-next-button{
      background:black!important;
      color:white;
    }

    .ardisplay-skip-button{
      border:none;
      color:gray;
      text-decoration:underline;
    }
  </style>
`;class se extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.selectedIndex=0,this.calculatedScale=null,this.modelData=null,this.originalSize=null,this.variants=[],this.variantSizes=[],this.scaleEvent=new Event("scale",{bubbles:!0,composed:!0}),this.isModelLoaded=!1,this.userClickedAR=!1,this.currentStep=1,this.totalSteps=2,this.qrCodeManager=null,this.qrModal=null,this.posters={},this.modelViewer=null,this.debouncedRenderSVG=this.animationFrameDebounce(this._renderSVG),this.debouncedUpdateDimensionHotspots=this.animationFrameDebounce(this._updateDimensionHotspots),this.GIF_URLS=[],this.gifCache={},this.preloadImage=async s=>{if(this.gifCache[s])return this.gifCache[s];const l=fetch(s).then(a=>a.blob()).then(a=>{const c=URL.createObjectURL(a);return this.gifCache[s]=c,c}).catch(a=>(delete this.gifCache[s],s));return this.gifCache[s]=l,l},this.setupPreloaderForStep=(s,l)=>{if(s+1<this.GIF_URLS.length&&!this.gifCache[this.GIF_URLS[s+1]]){const a=this.GIF_URLS[s+1],c=l.querySelector(".ardisplay-steps-gif");if(!c)return;const p=c.getBoundingClientRect();if(p.top>=0&&p.bottom<=window.innerHeight){this.preloadImage(a);return}new IntersectionObserver((S,q)=>{S.forEach(T=>{T.isIntersecting&&(this.preloadImage(a),q.disconnect())})},{threshold:.5}).observe(c)}}}animationFrameDebounce(s){let l=!1;return(...a)=>{l||(l=!0,requestAnimationFrame(()=>{s.apply(this,a),l=!1}))}}debounce(s,l){let a;return function(...c){const p=this;clearTimeout(a),a=setTimeout(()=>s.apply(p,c),l)}}_sendShortStatsEvent(s,l=""){var c;St.debug(this.modelData);const a={dmodelId:((c=this.modelData)==null?void 0:c.modelId)||"no-model-id",action:s,browser:navigator.userAgent,message:l||void 0};fetch("https://www.ardisplay.io/api/stats",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(p=>{p.ok||St.error("Error sending stats:",p.status)}).catch(p=>{})}async connectedCallback(){this._getAttributes(),await this._getModelData(),this.modelData.placement==="wall"?this.GIF_URLS.push(`${Lt}/wall.webp`):this.GIF_URLS.push(`${Lt}/floor.gif`),this.styles=this._consolidateStyles(),this.modelData.mode!=="popup"?this.shadowRoot.appendChild(this.styles):document.body.appendChild(this.styles);const s=document.createElement("template");s.innerHTML=`
      <!-- QR Code Modal -->
      <style>
        #qrModal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          display: none;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .qr-modal-content {
          background: white;
          border-radius: 8px;
          position: relative;
          background-color: #fefefe;
          border: 1px solid #888;
          width: 820px;
          height: 418px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .qr-close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 30px;
          height: 30px;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
          border: none;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .qr-modal-content h2 {
          margin-top: 0;
          color: #333;
          text-align: center;
        }
        .qr-code-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20px 0;
        }
        #qr-code {
          margin: 20px auto;
        }
      </style>
      <div id="qrModal" class="qr-modal" style="direction: ltr;">
          <div class="qr-modal-content" style="display: flex; flex-direction: row;text-align: center;overflow: hidden;">
          <button class="qr-close-button">×</button>
          <div style="width: 50%; height:100%;flex-grow: 0; flex-shrink: 0;display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px;">
              <h2>
                  <p id="btn-text" style="margin: 0">${this.modelData.title}</p>
              </h2>
              <p data-id="qrcode-info" class="translate-lang" style="margin:0">${this.modelData.description}</p>
              <div class="qr-code-container">
                  <div id="qr-code"></div>
              </div>
          </div>
          <div style="width: 50%; height:100%; flex-grow: 0; flex-shrink: 0;">
              <img src="${this.modelData.options[0].posterFileUrl}" alt="Artwork" style="width: 100%; height: 100%; object-fit: contain; object-position: center;">
          </div>
          </div>
      </div>
    `;const l=qt(),a=document.createElement("template");a.innerHTML=`
      <style>
      .model-viewer-container{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% - 96px);
        height: calc(100% - 96px);
        display: none;
        background-color: white;
        flex-direction: row;
        z-index: 999;
      }

      /* Consolidated Styles */
      model-viewer {
        width: 100%;
        height: 100%;
        --min-hotspot-opacity: 0;
        position: relative;
      }
        
      .ardisplay-close-button{
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
      }
      .ardisplay-close-button svg{
        width: 24px;
        height: 24px;
        fill: black;
      }
      .ardisplay-model-viewer-overlay{
        content: '';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 10;
        display: none;
      }
      .ardisplay-details-panel{
        width: 400px;
        height: 100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        padding-block: 1rem;
        padding-top: 50px; // added padding
      }
      @media only screen and (max-width: 900px){
        .model-viewer-container{
          width: 100%;
          height: calc(100% - 48px);
          transform: translate(-50%, 0);
          top: 48px;
        }
        .ardisplay-details-panel{
          display: none!important;
        }

        .ardisplay-model-viewer-overlay{
          top: -48px;
        }

        .ardisplay-qr-code-button{
          display:flex!important;
        }
      }
      .ardisplay-details-panel{
        display:flex;
      }
      .ardisplay-qr-code-button{
        all: unset;
        position: absolute;
        display:none;
        top: 10px;
        right: 50%;
        transform: translateX(50%);
        background: white;
        cursor: pointer;
        padding: 10px;
        z-index: 1000;
        align-items: center;
        justify-content: center;
        gap: 10px;
        white-space: nowrap;
      }
      .ardisplay-show{
        display:flex!important;
      }
      </style>
      <div class="model-viewer-container" style="direction: ltr;">
                <model-viewer  
                    ar
                    shadow-intensity="${this.modelData.shadow}"
                    ar-placement="${this.modelData.placement}"
                    ar-modes="webxr scene-viewer quick-look"
                    ar-scale="fixed"
                    camera-controls="true"
                    disable-pan="true"
                    disable-tap="true"
                    interaction-prompt="none"
                    interpolation-decay="40"
                    touch-action="none"
                    max-field-of-view="auto"
                    field-of-view="auto"
                    camera-orbit="0deg 75deg 105%"
                    ar-status="not-presenting"
                >
                    ${l}
                    <button class="ardisplay-qr-code-button" style="background-color: ${this.modelData.arBtn.btnBgColor};color: ${this.modelData.arBtn.btnTextColor};border-radius: ${this.modelData.arBtn.cornerRadius}px;font-size: ${this.modelData.arBtn.btnSize-6}px;text-wrap: nowrap;">
                        ${this.modelData.arBtn.btnIcon?`<i data-lucide="${this.modelData.arBtn.btnIcon}" style="width: 24px; height: 24px;color: inherit;"></i>`:""}
                        ${this.modelData.arBtn.btnText}
                    </button>
                </model-viewer>
                <button class="ardisplay-close-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                </button>
                <div class="ardisplay-details-panel" style="flex-direction:column;">
                    <div class="ar-display-custom-panel" style="flex:1;display:block;"></div>
                    <button id="showQRButton" style="margin-top: 16px; margin-right: 16px; padding: 8px 16px; color: black; border: none; border-radius: 4px; cursor: pointer;display:flex;flex-direction:row;align-items:center;gap:16px;font-weight:700;">
                      <svg viewBox="0 0 24 24" focusable="false" width="24" height="24" aria-hidden="true" class="rotera-svg-icon"><path d="M2 2h7v2H4v5H2V2zm18 2h-5V2h7v7h-2V4zM4 15H2v7h7v-2H4v-5zm18 0h-2v5h-5v2h7v-7z"></path><path d="M11 6h2v5h5v7h-7v-5H6v-2h5V6z"></path><path d="M9 6H6v3h3V6zm6 0h3v3h-3V6zm-6 9H6v3h3v-3z"></path></svg>
                      Try it in your home
                    </button>
                    <div id="inline-qr-container" style="display: none; margin-top: 16px;justify-content:center;align-items:center;"></div>
                </div>
            </div>
            <div class="ardisplay-model-viewer-overlay"></div>
        </div>
    `,this.styles=this._consolidateStyles(),this.shadowRoot.appendChild(this.styles),await this._loadTemplate(this.modelData.mode),this._moveSlottedContent(),_t(Pt.content.cloneNode(!0)),_t(Ot.content.cloneNode(!0));const c=this.modelData.placement==="wall"?"wall.webp":"floor.gif",p=document.querySelector("#instructionGif");p&&(p.src=`${Lt}/${c}`);const w=this.modelData.placement==="wall"?"wall":"floor",x=document.querySelector(".ardisplay-instructions-body");x.innerHTML=`Stand several feet back. With camera facing ${w}, make sweeping motion side to side, up and down.`,this.modelData.mode!=="popup"&&_t(s.content.cloneNode(!0)),this.modelData.mode==="popup"&&_t(a.content.cloneNode(!0)),this.modelViewer=this.modelData.mode==="popup"?document.querySelector("model-viewer"):this.shadowRoot.querySelector("model-viewer");const S=document.querySelector("#showQRButton");S&&S.addEventListener("click",()=>{const et=document.querySelector("#inline-qr-container");if(et){et.classList.toggle("ardisplay-show");const it=`${xt}/${this.modelData.modelId}`;this.qrCodeManager&&this.qrCodeManager.updateQrCode(it)}}),this.modelData.mode==="popup"&&this._processLucideIcons(document.querySelector(".ardisplay-qr-code-button"));const q=this.shadowRoot.querySelector(".ardisplay-qr-code-button"),T=document.querySelector("#qr-code");if(q&&T&&this.modelData.mode!=="popup"&&(this.qrCodeManager=new zt(T,this.modelData),this._setupQRCodeListeners()),this.modelData.mode==="popup"){const et=document.querySelector("#inline-qr-container");et&&(this.qrCodeManager=new zt(et,this.modelData))}const N=document.querySelector(".ardisplay-next-button"),K=document.querySelector(".ardisplay-steps-close-button");N==null||N.addEventListener("click",this._goToNextStep.bind(this)),K==null||K.addEventListener("click",()=>{const et=document.querySelector(".ardisplay-multi-steps-overlay");et&&(et.style.display="none")});const H=document.querySelector("#ardisplayProgressModal"),G=document.querySelector(".ardisplay-progress-content"),z=document.querySelector(".ardisplay-progress-close-button");H&&z&&(z.addEventListener("click",()=>{H.style.display="none"}),H.addEventListener("click",et=>{G.contains(et.target)||(H.style.display="none")})),this._setupEventListeners(),this._sendShortStatsEvent("View");const Y=tt("div",{classList:["bottom-container"]});Y.style.direction="ltr",this.modelViewer.appendChild(Y),this._setupCartButton(Y),this._setupBottomNavBar(Y)}_showStepsModal(){const s=document.querySelector(".ardisplay-multi-steps-overlay");if(s){s.style.display="block";const l=this.GIF_URLS[0];this.preloadImage(l),this.setupPreloaderForStep(0,document),this._setupSwipeListeners()}}_skipToLast(){this.currentStep=this.totalSteps;const s=document.querySelector(".ardisplay-steps-content"),l=document.querySelector(".ardisplay-next-button"),a=document.querySelector(".ardisplay-skip-button");document.querySelectorAll(".ardisplay-step-indicator").forEach((p,w)=>{p.classList.toggle("active",w<this.currentStep)}),s.innerHTML=`
      <h3 class="ardisplay-instructions-title">${ht[this.currentStep-1].title}</h3>
      <img src="${this.GIF_URLS[this.GIF_URLS.length-1]}"
           class="ardisplay-steps-gif"
           alt="Product preview"
           style="width: 100%;">
      <div class="ardisplay-instructions-body">${ht[this.currentStep-1].description}</div>
      <button class="ardisplay-view-wall-button" style="
        background: black;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 8px;
        margin-top: 16px;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        ">
        <svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
        <g>
          <path fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
            M33.002,49H44c2.762,0,5-2.239,5-5V32.626"/>
          <path fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
            M1,33v10.999c0,2.763,2.24,5,5,5h11"/>
          <path fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
            M17,1H6C3.238,1,1,3.238,1,6v11"/>
          <path fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
            M49,16.625V6c0-2.762-2.238-5-5-5H33.002"/>
          <g>
            <path d="M39,39c0,1.104-1.116,2-2.22,2L14.89,35C13.785,35,13,34.104,13,33V17c0-1.104,0.676-2,1.78-2l22.11-6
              C37.994,9,39,9.896,39,11V39z M23.686,29.171c-0.59,0.588-0.59,1.541,0,2.129c0.293,0.295,0.678,0.441,1.064,0.441
              c0.385,0,0.77-0.146,1.064-0.441l4.377-4.376l4.199,4.198c0.588,0.59,1.541,0.59,2.129,0c0.588-0.588,0.588-1.541,0-2.129
              l-5.264-5.264c-0.588-0.59-1.541-0.59-2.129,0l-1.697,1.697l-3.76-3.758c-0.586-0.586-1.535-0.586-2.121,0l-6.943,6.943
              c-0.586,0.586-0.586,1.535,0,2.121c0.293,0.293,0.676,0.439,1.061,0.439c0.383,0,0.768-0.146,1.061-0.439l5.883-5.883l2.699,2.697
              L23.686,29.171z M29.119,19.571c0-0.998-0.809-1.807-1.807-1.807c-0.996,0-1.805,0.809-1.805,1.807
              c0,0.996,0.809,1.805,1.805,1.805C28.311,21.376,29.119,20.567,29.119,19.571"/>
          </g>
        </g>
        </svg>
        View on your wall
      </button>
    `,l&&requestAnimationFrame(()=>{l.parentElement.style.display="none"}),a&&requestAnimationFrame(()=>{a.style.display="none"});const c=s.querySelector(".ardisplay-view-wall-button");c&&c.addEventListener("click",()=>{this.handleActivateAR();const p=document.querySelector(".ardisplay-multi-steps-overlay");p&&(p.style.display="none")})}async _goToNextStep(){if(this.currentStep<this.totalSteps)if(this.currentStep++,document.querySelectorAll(".ardisplay-step-indicator").forEach((s,l)=>{s.classList.remove("active"),l<=this.currentStep-1&&s.classList.add("active")}),this.currentStep===this.totalSteps){const s=document.querySelector(".ardisplay-steps-content"),l=document.querySelector(".ardisplay-next-button"),a=document.querySelector(".ardisplay-skip-button");s.innerHTML=`
          <h3 class="ardisplay-instructions-title">${ht[this.currentStep-1].title}</h3>
          <img src="${this.GIF_URLS[this.GIF_URLS.length-1]}"
               class="ardisplay-steps-gif"
               alt="Product preview"
               style="object-fit: cover;width: 100%;">
          <div class="ardisplay-instructions-body">${ht[this.currentStep-1].description}</div>
          <button class="ardisplay-view-wall-button" style="
            background: black;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            margin-top: 16px;
            font-weight: bold;
            cursor: pointer;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            ">
              <svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
              <g>
                <path fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                  M33.002,49H44c2.762,0,5-2.239,5-5V32.626"/>
                <path fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                  M1,33v10.999c0,2.763,2.24,5,5,5h11"/>
                <path fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                  M17,1H6C3.238,1,1,3.238,1,6v11"/>
                <path fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                  M49,16.625V6c0-2.762-2.238-5-5-5H33.002"/>
                <g>
                  <path d="M39,39c0,1.104-1.116,2-2.22,2L14.89,35C13.785,35,13,34.104,13,33V17c0-1.104,0.676-2,1.78-2l22.11-6
                    C37.994,9,39,9.896,39,11V39z M23.686,29.171c-0.59,0.588-0.59,1.541,0,2.129c0.293,0.295,0.678,0.441,1.064,0.441
                    c0.385,0,0.77-0.146,1.064-0.441l4.377-4.376l4.199,4.198c0.588,0.59,1.541,0.59,2.129,0c0.588-0.588,0.588-1.541,0-2.129
                    l-5.264-5.264c-0.588-0.59-1.541-0.59-2.129,0l-1.697,1.697l-3.76-3.758c-0.586-0.586-1.535-0.586-2.121,0l-6.943,6.943
                    c-0.586,0.586-0.586,1.535,0,2.121c0.293,0.293,0.676,0.439,1.061,0.439c0.383,0,0.768-0.146,1.061-0.439l5.883-5.883l2.699,2.697
                    L23.686,29.171z M29.119,19.571c0-0.998-0.809-1.807-1.807-1.807c-0.996,0-1.805,0.809-1.805,1.807
                    c0,0.996,0.809,1.805,1.805,1.805C28.311,21.376,29.119,20.567,29.119,19.571"/>
                </g>
              </g>
              </svg>
              View on your wall
          </button>
        `;const c=s.querySelector(".ardisplay-steps-gif"),p=this.GIF_URLS[this.GIF_URLS.length-1];l&&requestAnimationFrame(()=>{l.parentElement.style.display="none"}),a&&requestAnimationFrame(()=>{a.style.display="none"});try{const x=await this.preloadImage(p);c.src=x,c.setAttribute("loading","eager")}catch{c.src=p}const w=s.querySelector(".ardisplay-view-wall-button");w&&w.addEventListener("click",()=>{this.handleActivateAR();const x=document.querySelector(".ardisplay-multi-steps-overlay");x&&(x.style.display="none")})}else{const s=document.querySelector(".ardisplay-steps-gif"),l=this.GIF_URLS[this.currentStep-1];try{const a=await this.preloadImage(l);s.src=a,s.setAttribute("loading","eager")}catch{s.src=l}document.querySelector(".ardisplay-instructions-title").innerHTML=ht[this.currentStep-1].title,document.querySelector(".ardisplay-instructions-body").innerHTML=ht[this.currentStep-1].description,this.setupPreloaderForStep(this.currentStep-1,document)}}async _goToPreviousStep(){if(this.currentStep>1){this.currentStep--,document.querySelectorAll(".ardisplay-step-indicator").forEach((a,c)=>{a.classList.remove("active"),c<this.currentStep&&a.classList.add("active")});const s=document.querySelector(".ardisplay-steps-content");s.innerHTML=`
        <h3 class="ardisplay-instructions-title">${ht[this.currentStep-1].title}</h3>
        <img src="${this.GIF_URLS[this.currentStep-1]}"
             class="ardisplay-steps-gif"
             alt="Product preview"
             style="width: 100%;">
        <div class="ardisplay-instructions-body">
          Stand several feet back. With camera facing ${this.modelData.placement}, make sweeping motion side to side, up and down.
        </div>
      `;const l=document.querySelector(".ardisplay-next-button");l&&l.parentElement&&(l.parentElement.style.display="flex")}}_setupSwipeListeners(){const s=document.querySelector(".ardisplay-steps-content");if(!s)return;let l=0,a=0;const c=50,p=x=>{l=x.changedTouches[0].screenX},w=x=>{a=x.changedTouches[0].screenX,this._handleSwipeGesture(l,a,c)};s.addEventListener("touchstart",p),s.addEventListener("touchend",w),this._swipeHandlers={start:p,end:w,element:s}}_handleSwipeGesture(s,l,a){const c=l-s;Math.abs(c)>a&&(c<0?this._goToNextStep():this._goToPreviousStep())}disconnectedCallback(){if(document.removeEventListener("mousedown",this.boundHandleDocumentMouseDown),document.removeEventListener("scale",this.boundHandleScale),this.modelViewer&&(this.modelViewer.removeEventListener("model-visibility",this.boundHandleModelVisibility),this.modelViewer.removeEventListener("ar-status",this.boundHandleArStatus),this.modelViewer.removeEventListener("camera-change",this.boundHandleCameraChange),this.modelViewer.removeEventListener("scene-graph-ready",this.boundHandleSceneGraphReady),this.modelViewer.removeEventListener("load",this.boundHandleLoad)),this.cleanupBlobUrls(),this._swipeHandlers){const{start:s,end:l,element:a}=this._swipeHandlers;a.removeEventListener("touchstart",s),a.removeEventListener("touchend",l),this._swipeHandlers=null}}async _getModelData(){var l;let s=window.location.href;try{let a;if(this.getAttribute("src")?a=await fetch(`https://www.www.ardisplay.io/api/3d-model?id=${this.getAttribute("src")}`):(s&&s.endsWith("/")&&(s=s.slice(0,-1)),a=await fetch(`https://www.ardisplay.io/api/3d-model?url=${oe(s)}`)),!a.ok)throw new Error(`Response status: ${a.status}`);const c=await a.json();this.modelData=c,this.getAttribute("src")&&(this.modelData.mode="none"),(l=this.modelData)!=null&&l.options||St.warn("Missing model options. Skipping variant initialization."),this._setupVariantsSizes()}catch(a){St.error(a.message)}}_setupVariantsSizes(){var s;this.variants=((s=this.modelData)==null?void 0:s.options)||[],this.variantSizes=[],this.variants.forEach(l=>{const a={};l.sizes.forEach(c=>{const p=c.label.toLowerCase();a[p]={width:c.width,height:c.height,depth:c.depth||""}}),this.variantSizes.push(a)})}_getAttributes(){return{modelSrc:this.getAttribute("src")||"",modelPoster:this.getAttribute("poster")||"",ar:this.hasAttribute("ar"),cameraControls:this.hasAttribute("camera-controls"),touchAction:this.getAttribute("touch-action")||"none",viewMode:this.getAttribute("view-mode")||"normal",arPlacement:this.getAttribute("ar-placement")||"floor"}}_consolidateStyles(){const s=document.createElement("style");return this.modelData.mode!=="none"&&!this.getAttribute("src")&&this.modelData.mode!=="popup"?s.textContent=`
        :host {
          display: block;
          width: 100%;
          height: 600px;
          transform: scale(1);
        }
      `:s.textContent=`
        :host {
          display: block;
          width: fit-content;
          height: fit-content;
          transform: scale(1);
        }
      `,s.textContent+=` 
      *,*::before,*::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      /* Consolidated Styles */
      model-viewer {
        width: 100%;
        height: 100%;
        --min-hotspot-opacity: 0;
        position: relative;
        display: block;
      }

      model-viewer[ar-status="session-started"] .ardisplay-qr-code-button,
      model-viewer[ar-status="object-placed"] .ardisplay-qr-code-button {
        display: none;
      }



      model-viewer[ar-status="session-started"] .ardisplay-nav-icon-button:last-child,
      model-viewer[ar-status="object-placed"] .ardisplay-nav-icon-button:last-child {
        display: flex;
      }

      model-viewer[ar-status="session-started"] .dim,
      model-viewer[ar-status="object-placed"] .dim{
        display: none!important;
      }

      model-viewer[ar-status="session-started"] #dimLines,
      model-viewer[ar-status="object-placed"] #dimLines{
        display: none!important;
      }

      .ardisplay-nav-icon-button:last-child {
        display: none;
      }

      .dimensionLineContainer {
        pointer-events: none;
        display: block;
      }

      .dimensionLine {
        display: none;
        stroke: #16a5e6;
        stroke-width: 2;
      }

      .hide {
        display: none;
      }

      .dot {
        display: none;
      }

      .dim {
        display: none;
        border-radius: 20px;
        color: #1185bb;
        padding: 4px 8px;
        border: 1px solid #1185bb;
      }

      /* Bottom Nav Bar */
      .bottom-container{
        position: absolute;
        width: 100%;
        bottom: 0px;
        height: auto;
      }

      .ardisplay-bottom-nav-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.8);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px;
        z-index: 10;
      }

      .cart-button-wrapper{
        display: none;
      }

      model-viewer[ar-status="session-started"] .cart-button-wrapper,
      model-viewer[ar-status="object-placed"] .cart-button-wrapper{
        display: flex;
      }

      .nav-btn {
        background-color: #f0f0f0;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 8px 12px;
        border-radius: 4px;
        margin-right: 8px;
        font-weight: 500;
        transition: background-color 0.2s ease;
        flex: 1;
      }
      .nav-btn:hover {
        background-color: #ddd;
      }

      /* Sub-panels */
      .hidden {
        display: none;
      }

      /* Color Slider */
      .slider {
        width: 100%;
        text-align: center;
        overflow: hidden;
        margin: 0 auto;
      }
      .slides {
        display: flex;
        justify-content: center;
        padding: 10px;
        flex-direction: row-reverse;
        gap: 10px; /* spacing between slides */
      }
      .slide {
        scroll-snap-align: start;
        flex-shrink: 0;
        width: 80px;
        height: 80px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 10px;
        cursor: pointer;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        outline: none;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .slide.selected {
        border-color: #4285f4;
        box-shadow: 0 0 0 2px rgba(66,133,244,0.3);
      }

      .size-panel {
      /* Similar to 'flex flex-wrap gap-2' in Tailwind */
      display: flex;
      flex-wrap: wrap;
      gap: 8px; /* ~ Tailwind gap-2 */
      padding: 16px; /* for some breathing room */
      padding-top: 0;
      background-color: transparent;
      z-index: 100;
    }

    .size-buttons-wrapper {
      /* If you need an extra wrapper, adjust accordingly */
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex: 1;
      padding: 0;
    }

    .size-button {
      /* Mimicking "border-2 border-gray-300 rounded-lg px-4 py-2" */
      border: 2px solid #ccc;
      border-radius: 8px; /* ~ Tailwind rounded-lg */
      padding: 8px 16px; /* ~ px-4 py-2 in Tailwind */
      background-color: rgba(255, 255, 255, 0.8); /* ~ bg-white/80 */
      font-weight: 500;
      cursor: pointer;
      color: black;

      /* Tailwind “transition-colors” is basically short for smooth border/color transitions */
      transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;
    }

    /* Hover effect: "hover:border-blue-600 hover:text-blue-600" */
    .size-button:hover:not(:disabled) {
      border-color: #2563EB;
      color: #2563EB;
    }

    /* Active/selected state similar to your existing .selected logic */
    .size-button.selected {
      color: #4285f4;
      border-color: #4285f4;
      opacity: 1;
    }

      /* Floating Add to Cart button */
      .cart-button-wrapper {
        position: absolute;
        top: -64px; /* similar to -top-16 from Tailwind */
        left: 0;
        right: 0;
        justify-content: center;
      }
      .cart-btn {
        background-color: #2563EB; /* Tailwind blue-600 */
        color: #fff;
        border: none;
        border-radius: 9999px; /* fully rounded */
        padding: 12px 32px; /* ~py-3 px-8 */
        font-weight: 600;
        font-family: sans-serif;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        cursor: pointer;
        transition: background-color 0.2s ease;
      }
      .cart-btn:hover {
        background-color: #1D4ED8; /* Tailwind blue-700 */
      }
      .cart-btn svg {
        height: 20px; /* h-5 in Tailwind ~ 20px */
        width: 20px;
      }

      /* Bottom Nav Bar (matching the React code style) */
      .ardisplay-bottom-nav {
        height: fit-content; /* h-16 in Tailwind */
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        position: relative;
        z-index: 100;
        margin-bottom: 16px;
      }
      .ardisplay-nav-icon-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 120px;
        padding: 8px 16px;
        color: black; /* text-gray-600 */
        background: #ccc;
        border-radius:40px;
        gap:10px;
        border: none;
        cursor: pointer;
        transition: color 0.2s ease;
      }
      .ardisplay-nav-icon-button svg {
        height: 24px; /* h-6 */
        width: 24px;
      }
      .ardisplay-nav-icon-button span {
        font-size: 12px; /* text-xs ~12px */
        font-weight: bold;
      }
      /* ------------------------------------------------------------------ */
      .sub-panel{
      position: absolute;
      bottom: 0; /* ensure it sits over the nav bar */
      height: auto;
      width: 100%;
      z-index: 10000;
      background: white;
      padding-top: 50px; // added padding for close button
    }
      .sub-panel .sub-panel-close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
}
    `,s}async checkWebXRSupport(){try{return"xr"in navigator?await navigator.xr.isSessionSupported("immersive-ar"):!1}catch{return!1}}async _loadTemplate(s){let l=s==="popup"?Xt:s==="inpage"?Nt:Bt;this.getAttribute("src")&&(l=Bt);const a=this._getAttributes(),c=l(a.ar,a.cameraControls,a.touchAction,a.modelPoster,a.arPlacement,this.modelData),p=document.createRange().createContextualFragment(c);if(this._processLucideIcons(p),this.shadowRoot.appendChild(p),s==="inpage"&&!this.getAttribute("src")){const w=document.createElement("img");w.src=await At(this.modelData.options[0].posterFileUrl,this.posters),w.style.position="absolute",w.style.top="0",w.style.left="0",w.style.width="100%",w.style.height="100%",w.style.objectFit="contain",w.style.zIndex="10",this.shadowRoot.querySelector("model-viewer").appendChild(w),this.addEventListener("click",async()=>{const x=this.shadowRoot.querySelector("model-viewer img");x&&this.shadowRoot.querySelector("model-viewer").removeChild(x),await yt();const S=document.createElement("style");S.textContent=".container { direction: ltr; }",this.modelViewer.shadowRoot.appendChild(S)}),this.addEventListener("mouseenter",async()=>{const x=this.shadowRoot.querySelector("model-viewer img");x&&this.shadowRoot.querySelector("model-viewer").removeChild(x),await yt();const S=document.createElement("style");S.textContent=".container { direction: ltr; }",this.modelViewer.shadowRoot.appendChild(S)})}}_updateSizePanel(s){const l=this.modelData.mode!=="popup"?this.shadowRoot.querySelector(".size-panel"):document.querySelector(".size-panel");if(!l)return;l.innerHTML="";const a=tt("div",{classList:["size-buttons-wrapper"]}),c=this.variantSizes[s];c&&Object.entries(c).forEach(([p,w])=>{const x=tt("button",{classList:["size-button"],attributes:{"data-size-key":p},disabled:!1});x.innerHTML=`
          <span class="size-label">${p}</span>
          <span class="size-description">
            (${w.width} X ${w.height} X ${w.depth?w.depth+"":""})
          </span>
        `,x.addEventListener("click",S=>{if(!this.modelViewer)return;this.modelData.mode==="popup"?document.querySelectorAll(".size-button").forEach(T=>T.classList.remove("selected")):this.shadowRoot.querySelectorAll(".size-button").forEach(T=>T.classList.remove("selected")),S.currentTarget.classList.add("selected");const q=this.variantSizes[s][p];this.calculateAndApplyScale(q)}),a.appendChild(x)}),l.appendChild(a)}_processLucideIcons(s){const l={eye:Qt,blocks:Zt,rotate3d:Kt,box:Gt,fileaxis3d:Wt,scan:Jt};s.querySelectorAll("[data-lucide]").forEach(c=>{const p=c.getAttribute("data-lucide").toLowerCase(),w=l[p];if(w){const x=c.getAttribute("width")||24,S=c.getAttribute("color")||"currentColor",q=document.createElementNS("http://www.w3.org/2000/svg","svg");q.setAttribute("width",x),q.setAttribute("height",x),q.setAttribute("viewBox","0 0 24 24"),q.setAttribute("fill","none"),q.setAttribute("stroke",S),q.setAttribute("stroke-width","2"),q.setAttribute("stroke-linecap","round"),q.setAttribute("stroke-linejoin","round"),w[2].forEach(T=>{const[N,K]=T,H=document.createElementNS("http://www.w3.org/2000/svg",N);Object.entries(K).forEach(([G,z])=>{H.setAttribute(G,z)}),q.appendChild(H)}),c.parentNode.replaceChild(q,c)}})}_moveSlottedContent(){const s=this.shadowRoot.querySelector(".ar-display-custom-panel"),l=this.querySelector('slot[name="custom-panel"]');s&&l&&s.appendChild(l)}_setupEventListeners(){this.modelData.mode==="popup"?this._setupModalEventListeners():this.modelData.mode==="inpage"&&this._setupNormalEventListeners(),this.boundHandleScale=()=>this._setupDimensions(this.modelViewer),this.boundHandleModelVisibility=()=>this._setupDimensions(this.modelViewer),this.boundHandleArStatus=s=>this._handleArStatusChange(s),this.boundHandleCameraChange=()=>{this.debouncedRenderSVG(),this.debouncedUpdateDimensionHotspots()},this.boundHandleSceneGraphReady=()=>{this.debouncedRenderSVG(),this.debouncedUpdateDimensionHotspots()},this.boundHandleLoad=()=>{this.isModelLoaded=!0,this.qrCodeButton&&(this.qrCodeButton.disabled=!1);const s=this.modelViewer.getDimensions(),l=this.modelViewer.scale.toString().split(" ").map(Number);if(this.originalSize={x:0,y:0,z:0},this.originalSize.x=s.x/l[0],this.originalSize.y=s.y/l[1],this.originalSize.z=s.z/l[2],this.variantSizes&&this.variantSizes[this.selectedIndex]){const p=this.variantSizes[this.selectedIndex],w=Object.keys(p)[0];if(w){const x=p[w];this.calculateAndApplyScale(x),requestAnimationFrame(()=>{(this.modelData.mode!=="popup"?this.shadowRoot.querySelectorAll(".size-button"):document.querySelectorAll(".size-button")).forEach((q,T)=>{T===0?q.classList.add("selected"):q.classList.remove("selected")})})}}this.shadowRoot.querySelector(".size-panel button")||this._updateSizePanel(0);const a=this.modelViewer.shadowRoot.querySelector(".slot.ar-button");a&&(a.style.display="none");const c=document.querySelector("#ardisplayProgressModal");c&&c.style.display!=="none"&&(c.style.display="none",this._showStepsModal())},document.addEventListener("scale",this.boundHandleScale),this.modelViewer.addEventListener("model-visibility",this.boundHandleModelVisibility),this.modelViewer.addEventListener("ar-status",this.boundHandleArStatus),this.modelViewer.addEventListener("camera-change",this.boundHandleCameraChange),this.modelViewer.addEventListener("scene-graph-ready",this.boundHandleSceneGraphReady),this.modelViewer.addEventListener("load",this.boundHandleLoad),this.modelViewer.addEventListener("progress",s=>{const l=Math.round(s.detail.totalProgress*100),a=document.querySelector("#ardisplayProgressBarFill");a&&(a.style.width=`${l}%`,a.style.display="block")}),this.modelViewer.addEventListener("load",()=>{this.isModelLoaded=!0,this.modelData.mode==="popup"?document.querySelectorAll(".dim").forEach(l=>{l.style.display="block"}):this.shadowRoot.querySelectorAll(".dim").forEach(l=>{l.style.display="block"});const s=document.querySelector("#activateAR");s&&(s.addEventListener("click",async l=>{if(l instanceof MouseEvent)try{await this.modelViewer.activateAR();const a=document.querySelector("#ardisplayProgressModal");a&&(a.style.display="none")}catch{}}),s.style.display="block")})}_isIOSDevice(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}_isMobileDevice(){return/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}async _setupQRCodeListeners(){const s=document.querySelector("#qrModal"),l=document.querySelector("#qr-code"),a=this.modelData.mode!=="popup"?this.shadowRoot.querySelector(".ardisplay-qr-code-button"):document.querySelector(".ardisplay-qr-code-button"),c=document.querySelector(".qr-close-button");this.qrCodeManager||(this.qrCodeManager=new zt(l,this.modelData)),a.addEventListener("click",async()=>{if(this.GIF_URLS.push(await At(this.modelData.options[0].posterFileUrl,this.posters)),this.modelData.mode==="none"&&this._isMobileDevice()){const p=document.querySelector("#ardisplayProgressModal");if(p){const x=document.querySelector("#ardisplayProgressBarFill");x&&(x.style.width="0%",x.style.display="block"),p.style.display="flex",this.userClickedAR=!0}await yt();const w=document.createElement("style");if(w.textContent=".container { direction: ltr; }",this.modelViewer.shadowRoot.appendChild(w),this.modelViewer&&this.modelViewer.addEventListener("progress",x=>{const S=Math.round(x.detail.totalProgress*100),q=document.querySelector("#ardisplayProgressBarFill");q&&(q.style.width=`${S}%`,q.style.display="block")}),this.isModelLoaded){this._resetSteps(),this._showStepsModal();return}}else if(this._isMobileDevice()){if(await this.checkWebXRSupport(),this.isModelLoaded){this._resetSteps(),this._showStepsModal();return}const p=document.querySelector("#ardisplayProgressModal");if(p){const x=document.querySelector("#ardisplayProgressBarFill");x&&(x.style.width="0%",x.style.display="block"),p.style.display="flex",this.userClickedAR=!0}await yt();const w=document.createElement("style");w.textContent=".container { direction: ltr; }",this.modelViewer.shadowRoot.appendChild(w)}else{const p=`${xt}/${this.modelData.modelId}`;this.qrCodeManager.updateQrCode(p),s.style.display="flex";return}}),c.addEventListener("click",()=>{s.style.display="none"}),s.addEventListener("click",p=>{p.target===s&&(s.style.display="none")})}_resetSteps(){this.currentStep=1,document.querySelectorAll(".ardisplay-step-indicator").forEach((c,p)=>{c.classList.toggle("active",p===0)});const s=document.querySelector(".ardisplay-steps-content");s&&(s.innerHTML=`
        <h3 class="ardisplay-instructions-title">Scanning</h3>
        <img src="${this.GIF_URLS[0]}" class="ardisplay-steps-gif" alt="Computer man">
        <div class="ardisplay-instructions-body">Stand several feet back. With camera facing ${this.modelData.placement}, make sweeping motion side to side, up and down.</div>
      `);const l=document.querySelector(".ardisplay-next-button"),a=document.querySelector(".ardisplay-skip-button");l&&(l.parentElement.style.display="flex"),a&&(a.style.display="block")}handleActivateAR(){if(this._sendShortStatsEvent("Click"),!this._isMobileDevice()){const s=`${xt}/${this.modelData.modelId}`;this.qrCodeManager&&this.qrModal&&(this.qrCodeManager.updateQrCode(s),this.qrModal.style.display="flex");return}if(this.modelViewer.canActivateAR)try{this._sendShortStatsEvent("Try"),this.modelViewer.activateAR()}catch(s){this._sendShortStatsEvent("Failed",s.message);const l=`${xt}/${this.modelData.modelId}`;this.qrCodeManager&&this.qrModal&&(this.qrCodeManager.updateQrCode(l),this.qrModal.style.display="flex")}}_setupVariantsColors(){if(!this.variants||this.variants.length===0)return null;const s=tt("div",{classList:["slider"]}),l=tt("div",{classList:["slides"]});return this.variants.forEach(async(a,c)=>{const p=tt("button",{classList:["slide"]});if(c===0&&(p.classList.add("selected"),this.modelViewer&&a.url)){let w=new URL(a.url);this.modelViewer.src=w.href,a.posterFileUrl?this.modelViewer.poster=await At(a.posterFileUrl,this.posters):this.modelViewer.removeAttribute("poster")}a.posterFileUrl&&(p.style.backgroundImage=`url('${a.posterFileUrl}')`),p.onclick=()=>{if(this.modelViewer){if(a.url){let w=new URL(a.url);this.modelViewer.src=w.href}this._updateSizePanel(c),a.posterFileUrl?this.modelViewer.poster=a.posterFileUrl:this.modelViewer.removeAttribute("poster"),!this.modelData.mode==="popup"?(this.shadowRoot.querySelectorAll(".slide").forEach(w=>w.classList.remove("selected")),p.classList.add("selected")):(document.querySelectorAll(".slide").forEach(w=>w.classList.remove("selected")),p.classList.add("selected")),this.selectedIndex=c,this._updateNavButtonsVisibility()}},l.appendChild(p)}),s.appendChild(l),s}_setupCartButton(s){const l=tt("div",{classList:["cart-button-wrapper"]}),a=tt("button",{classList:["cart-btn"]});a.innerHTML=`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293
               2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0
               100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Add to Cart
      `,l.appendChild(a),s.appendChild(l),l.addEventListener("click",async()=>{await this._sendShortStatsEvent("Cart"),window.location.href=this.modelData.addToCartUrl})}_setupBottomNavBar(s){const l=tt("div",{classList:["sub-panel","hidden"]}),a=tt("button",{classList:["sub-panel-close-button"],textContent:"×"});a.style.position="absolute",a.style.top="0px",a.style.right="10px",a.style.background="transparent",a.style.height="50px",a.style.border="none",a.style.fontSize="32px",a.style.cursor="pointer",a.addEventListener("click",()=>{l.classList.add("hidden")}),l.appendChild(a);const c=tt("div",{classList:["sub-panel-label"],textContent:"Size"});c.style.fontSize="16px",c.style.position="absolute",c.style.top="0",c.style.left="50%",c.style.height="50px",c.style.display="flex",c.style.alignItems="center",c.style.justifyContent="center",c.style.transform="translateX(-50%)",l.appendChild(c);const p=this._createSizeControls();p&&l.appendChild(p);const w=tt("div",{classList:["sub-panel","hidden"]}),x=tt("button",{classList:["sub-panel-close-button"],textContent:"×"});x.style.position="absolute",x.style.top="0px",x.style.right="10px",x.style.background="transparent",x.style.border="none",x.style.fontSize="32px",x.style.height="50px",x.style.cursor="pointer",x.addEventListener("click",()=>{w.classList.add("hidden")}),w.appendChild(x);const S=tt("div",{classList:["sub-panel-label"],textContent:"Variant"});S.style.fontSize="16px",S.style.position="absolute",S.style.top="0",S.style.left="50%",S.style.height="50px",S.style.display="flex",S.style.alignItems="center",S.style.justifyContent="center",S.style.transform="translateX(-50%)",w.appendChild(S);const q=this._setupVariantsColors();q&&w.appendChild(q);const T=tt("div",{classList:["ardisplay-bottom-nav"]}),N=z=>{const Y=z.classList.contains("hidden");l.classList.add("hidden"),w.classList.add("hidden"),Y&&z.classList.remove("hidden")},K=tt("button",{classList:["ardisplay-nav-icon-button","ardisplay-size-btn"]});K.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style="height:28px;width:28px;">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6V4H20V20H12V18H8V16H4V8H8V6H12ZM14 6H18V18H14V6ZM12 8H10V16H12V8ZM8 10V14H6V10H8Z" fill="#000000"/>
      </svg>
      <span>Size</span>
    `,K.addEventListener("click",()=>{N(l),K.classList.toggle("active",!l.classList.contains("hidden")),H.classList.remove("active")});const H=tt("button",{classList:["ardisplay-nav-icon-button","ardisplay-variant-btn"]});if(H.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="32px" height="32px" viewBox="0 0 32 32" version="1.1" style="height:24px;width:24px;">
        <path d="M1 9.431l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.04 0.474-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892s-0.216-0.711-0.547-0.88l-14.848-7.54c-0.283-0.143-0.617-0.144-0.902-0.002l-15.002 7.54c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895zM16.161 2.134l12.692 6.446-12.843 6.921-12.693-6.912zM31.292 15.01l-2.968-1.507-2.142 1.155 2.5 1.27-12.842 6.921-12.694-6.912 2.666-1.34-2.136-1.164-3.135 1.575c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.04 0.474-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892s-0.215-0.711-0.546-0.88zM31.292 22.01l-2.811-1.382-2.142 1.155 2.344 1.145-12.843 6.921-12.694-6.912 2.478-1.121-2.136-1.164-2.947 1.357c-0.332 0.167-0.545 0.505-0.551 0.877s0.196 0.717 0.521 0.895l14.847 8.085c0.149 0.081 0.313 0.122 0.479 0.122 0.163 0 0.326-0.04 0.475-0.12l15.003-8.085c0.327-0.176 0.53-0.52 0.525-0.892-0.005-0.373-0.215-0.712-0.546-0.88z"/>
      </svg>
      <span>Variant</span>
    `,H.addEventListener("click",()=>{N(w),H.classList.toggle("active",!w.classList.contains("hidden")),K.classList.remove("active")}),this.variants.length===1&&H&&(H.style.display="none"),this.variants.length>0){const z=this.variants[0].sizes;z&&z.length===1&&K&&(K.style.display="none")}const G=tt("button",{classList:["ardisplay-nav-icon-button"]});G.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
      </svg>
      <span>Share</span>
    `,G.addEventListener("click",async()=>{this._sendShortStatsEvent("Share");const z={title:document.title,text:"Check out this AR model!",url:window.location.href};try{await navigator.share(z)}catch(Y){console.warn("Share failed:",Y)}}),T.appendChild(K),T.appendChild(H),T.appendChild(G),this.boundHandleDocumentMouseDown=z=>{const Y=z.composedPath();!Y.includes(T)&&!Y.includes(l)&&!Y.includes(w)&&(l.classList.add("hidden"),w.classList.add("hidden"),K.classList.remove("active"),H.classList.remove("active"))},document.addEventListener("mousedown",this.boundHandleDocumentMouseDown),s.appendChild(T),s.appendChild(l),s.appendChild(w)}_updateNavButtonsVisibility(){var p;const s=this.modelData.mode!=="popup"?this.shadowRoot.querySelector(".ardisplay-bottom-nav .ardisplay-size-btn"):document.querySelector(".ardisplay-bottom-nav .ardisplay-size-btn"),l=this.modelData.mode!=="popup"?this.shadowRoot.querySelector(".ardisplay-bottom-nav .ardisplay-variant-btn"):document.querySelector(".ardisplay-bottom-nav .ardisplay-variant-btn");this.variants.length===1&&l?l.style.display="none":l&&(l.style.display="flex");const a=typeof this.selectedIndex=="number"?this.selectedIndex:0;console.log(a),console.log(s);const c=(p=this.variants[a])==null?void 0:p.sizes;c&&c.length===1&&s?s.style.display="none":s&&(s.style.display="flex")}async _setupModalEventListeners(){const s=this.shadowRoot.querySelector(".ardisplay-view-3d-button");this.shadowRoot.querySelector(".ardisplay-preview-image");const l=document.querySelector(".model-viewer-container"),a=document.querySelector(".ardisplay-close-button"),c=document.querySelector(".ardisplay-model-viewer-overlay");s&&l&&s.addEventListener("click",async()=>{await yt();const p=document.createElement("style");p.textContent=".container { direction: ltr; }",this.modelViewer.shadowRoot.appendChild(p),l.style.display="flex",c.style.display="block"}),a&&c&&(a.addEventListener("click",()=>{l.style.display="none",c.style.display="none"}),c.addEventListener("click",()=>{l.style.display="none",c.style.display="none"}))}_setupNormalEventListeners(){}_handleArStatusChange(s){const l=s.detail.status==="session-started",a=[...this.modelViewer.querySelectorAll("[data-hotspot]"),this.modelViewer.querySelector("#dimLines")].filter(Boolean);(p=>{a.forEach(w=>{w.classList.toggle("hide",!p)})})(!l)}_drawLine(s,l,a,c){!s||!l||!a||(s.setAttribute("x1",l.canvasPosition.x),s.setAttribute("y1",l.canvasPosition.y),s.setAttribute("x2",a.canvasPosition.x),s.setAttribute("y2",a.canvasPosition.y),c&&s.classList.toggle("hide",!c.facingCamera))}_renderSVG(){const s=this.modelViewer.querySelectorAll("line");if(s.length===0)return;[{line:s[0],start:"hotspot-dot+X-Y+Z",end:"hotspot-dot+X-Y+Z",dimension:"hotspot-dim+X-Y"},{line:s[1],start:"hotspot-dot+X-Y-Z",end:"hotspot-dot+X+Y-Z",dimension:"hotspot-dim+X-Z"},{line:s[2],start:"hotspot-dot+X+Y-Z",end:"hotspot-dot-X+Y-Z"},{line:s[3],start:"hotspot-dot-X+Y-Z",end:"hotspot-dot-X-Y-Z",dimension:"hotspot-dim-X-Z"},{line:s[4],start:"hotspot-dot-X-Y-Z",end:"hotspot-dot-X-Y+Z",dimension:"hotspot-dim-X-Y"}].forEach(({line:a,start:c,end:p,dimension:w})=>{this._drawLine(a,this.modelViewer.queryHotspot(c),this.modelViewer.queryHotspot(p),w?this.modelViewer.queryHotspot(w):null)})}_updateDimensionHotspots(){const s=this.modelViewer.getBoundingBoxCenter(),l=this.modelViewer.getDimensions(),a={x:l.x/2,y:l.y/2,z:l.z/2};[{name:"hotspot-dot+X-Y+Z",position:[s.x+a.x,s.y-a.y,s.z+a.z]},{name:"hotspot-dim+X-Y",position:[s.x+a.x*1.2,s.y-a.y*1.1,s.z],label:`${(l.z*100).toFixed(0)} cm`,labelSelector:'[slot="hotspot-dim+X-Y"]'},{name:"hotspot-dot+X-Y-Z",position:[s.x+a.x,s.y-a.y,s.z-a.z]},{name:"hotspot-dim+X-Z",position:[s.x+a.x*1.2,s.y,s.z-a.z*1.2],label:`${(l.y*100).toFixed(0)} cm`,labelSelector:'[slot="hotspot-dim+X-Z"]'},{name:"hotspot-dot+X+Y-Z",position:[s.x+a.x,s.y+a.y,s.z-a.z]},{name:"hotspot-dim+Y-Z",position:[s.x,s.y+a.y*1.1,s.z-a.z*1.1],label:`${(l.x*100).toFixed(0)} cm`,labelSelector:'[slot="hotspot-dim+Y-Z"]'},{name:"hotspot-dot-X+Y-Z",position:[s.x-a.x,s.y+a.y,s.z-a.z]},{name:"hotspot-dim-X-Z",position:[s.x-a.x*1.2,s.y,s.z-a.z*1.2],label:`${(l.y*100).toFixed(0)} cm`,labelSelector:'[slot="hotspot-dim-X-Z"]'},{name:"hotspot-dot-X-Y-Z",position:[s.x-a.x,s.y-a.y,s.z-a.z]},{name:"hotspot-dim-X-Y",position:[s.x-a.x*1.2,s.y-a.y*1.1,s.z],label:`${(l.z*100).toFixed(0)} cm`,labelSelector:'[slot="hotspot-dim-X-Y"]'},{name:"hotspot-dot-X-Y+Z",position:[s.x-a.x,s.y-a.y,s.z+a.z]}].forEach(({name:p,position:w,label:x,labelSelector:S})=>{if(this.modelViewer.updateHotspot({name:p,position:w.join(" ")}),x&&S){const q=this.modelViewer.querySelector(S);q&&(q.textContent=x)}})}_setupDimensions(){this.modelData.mode==="popup"?document.querySelectorAll(".dimensionLine").forEach(s=>{s.style.display="block"}):this.shadowRoot.querySelectorAll(".dimensionLine").forEach(s=>{s.style.display="block"}),this.debouncedRenderSVG(),this.debouncedUpdateDimensionHotspots()}_createSizeControls(){const s=tt("div",{classList:["size-panel"]}),l=tt("div",{classList:["size-buttons-wrapper"]});return s.appendChild(l),s}_handleSizeChange(s){if(s.target.classList.contains("size-button")){const l=s.target.getAttribute("data-size-key");if(this.variantSizes[this.selectedIndex][l]){this.shadowRoot.querySelectorAll(".size-button").forEach(c=>c.classList.remove("selected")),s.target.classList.add("selected");const a=this.variantSizes[this.selectedIndex][l];this.calculateAndApplyScale(a)}}}applyScale(){this.calculatedScale&&this.modelViewer&&(this.modelViewer.scale=`${this.calculatedScale.scaleX} ${this.calculatedScale.scaleY} ${this.calculatedScale.scaleZ}`,typeof this.modelViewer.updateFraming=="function"&&requestAnimationFrame(()=>{this.modelViewer.updateFraming(),document.dispatchEvent(this.scaleEvent)}))}async calculateAndApplyScale(s){if(s)try{const l=await this.calculateModelScale(s);this.calculatedScale=l,this.applyScale()}catch{}}cmToMeters(s){return parseFloat(s.replace("cm",""))/100}calculateModelScale(s){const l=this.originalSize||{x:1,y:1,z:1},a=l.x,c=l.y,p=l.z,w=this.cmToMeters(s.width),x=this.cmToMeters(s.height),S=s.depth?this.cmToMeters(s.depth):.05,q=w/a,T=x/c,N=S/p;return{scaleX:q,scaleY:T,scaleZ:N}}cleanupBlobUrls(){Object.values(this.gifCache).forEach(s=>{URL.revokeObjectURL(s)}),this.gifCache={}}}customElements.define("ardisplay-viewer",se);document.addEventListener("DOMContentLoaded",()=>{window.customElements.get("ardisplay-viewer")?Rt():window.customElements.whenDefined("ardisplay-viewer").then(Rt)});function Rt(){const l=document.evaluate("//*[normalize-space(text())='{%AR-DISPLAY-PLAYER%}']",document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,a=document.createElement("ardisplay-viewer");l.replaceWith(a)}
