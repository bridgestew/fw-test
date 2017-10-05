function Visitor(n){var t=this,r,e,i,u,f;t.version="1.1",r=window,r.s_c_in||(r.s_c_il=[],r.s_c_in=0),t._c="Visitor",t._il=r.s_c_il,t._in=r.s_c_in,t._il[t._in]=t,r.s_c_in++,e=r.document,i=r.z,i||(i=null),u=r.A,u||(u=!0),f=r.w,f||(f=!1),t.s=function(){var n;if(!n&&r.location&&(n=r.location.hostname),n)if(/^[0-9.]+$/.test(n))n="";else{var i=n.split("."),t=i.length-1,u=t-1;if(1<t&&2>=i[t].length&&0>",am,aq,ax,cc,cf,cg,ch,cv,cz,de,dj,dk,eu,fm,fo,ga,gd,gf,gl,gm,gq,gs,gw,hm,li,lu,md,mh,mp,mq,ms,ne,nl,nu,pm,si,sk,sm,sr,su,tc,td,tf,tg,tk,tv,va,vg,vu,wf,yt,".indexOf(","+i[t]+",")&&u--,0<u)for(n="";t>=u;)n=i[t]+(n?".":"")+n,t--}return n},t.cookieRead=function(n){var i=(";"+e.cookie).split(" ").join(";"),t=i.indexOf(";"+n+"="),r=0>t?t:i.indexOf(";",t+1);return 0>t?"":decodeURIComponent(i.substring(t+2+n.length,0>r?i.length:r))},t.cookieWrite=function(n,i,r){var u=t.cookieLifetime,f,i=""+i,u=u?(""+u).toUpperCase():"";return r&&"SESSION"!=u&&"NONE"!=u?(f=""!=i?parseInt(u?u:0):-60)?(r=new Date,r.setTime(r.getTime()+1e3*f)):1==r&&(r=new Date,f=r.getYear(),r.setYear(f+2+(1900>f?1900:0))):r=0,n&&"NONE"!=u?(e.cookie=n+"="+encodeURIComponent(i)+"; path=/;"+(r?" expires="+r.toGMTString()+";":"")+(t.k?" domain="+t.k+";":""),t.cookieRead(n)==i):0},t.b=i,t.j=function(n,t){try{"function"==typeof n?n.apply(r,t):n[1].apply(n[0],t)}catch(i){}},t.u=function(n,r){r&&(t.b==i&&(t.b={}),void 0==t.b[n]&&(t.b[n]=[]),t.b[n].push(r))},t.p=function(n,r){if(t.b!=i){var u=t.b[n];if(u)for(;0<u.length;)t.j(u.shift(),r)}},t.c=i,t.t=function(n,r,u){!r&&u&&u();var o=e.getElementsByTagName("HEAD")[0],f=e.createElement("SCRIPT");f.type="text/javascript",f.setAttribute("async","async"),f.src=r,o.firstChild?o.insertBefore(f,o.firstChild):o.appendChild(f),t.c==i&&(t.c={}),t.c[n]=setTimeout(u,t.loadTimeout)},t.q=function(n){t.c!=i&&t.c[n]&&(clearTimeout(t.c[n]),t.c[n]=0)},t.l=f,t.m=f,t.isAllowed=function(){return!t.l&&(t.l=u,t.cookieRead(t.cookieName)||t.cookieWrite(t.cookieName,"T",1))&&(t.m=u),t.m},t.a=i,t.n=f,t.i=function(){if(!t.n){t.n=u;var n=t.cookieRead(t.cookieName),f,r,e,i,o=new Date;if(n&&"T"!=n)for(n=n.split("|"),1==n.length%2&&n.pop(),f=0;f<n.length;f+=2)(r=n[f].split("-"),e=r[0],i=n[f+1],r=1<r.length?parseInt(r[1]):0,e&&i&&(!r||o.getTime()<1e3*r))&&(t.f(e,i,1),0<r&&(t.a["expire"+e]=r));!t.d("MCAID")&&(n=t.cookieRead("s_vi"))&&(n=n.split("|"),1<n.length&&0<=n[0].indexOf("v1")&&(i=n[1],f=i.indexOf("["),0<=f&&(i=i.substring(0,f)),i&&i.match(/^[0-9a-fA-F\-]+$/)&&t.f("MCAID",i)))}},t.v=function(){var i="",n,r;for(n in t.a)!Object.prototype[n]&&t.a[n]&&"expire"!=n.substring(0,6)&&(r=t.a[n],i+=(i?"|":"")+n+(t.a["expire"+n]?"-"+t.a["expire"+n]:"")+"|"+r);t.cookieWrite(t.cookieName,i,1)},t.d=function(n){return t.a!=i?t.a[n]:i},t.f=function(n,r,u){t.a==i&&(t.a={}),t.a[n]=r,u||t.v()},t.o=function(n,r){var u=new Date;u.setTime(u.getTime()+1e3*r),t.a==i&&(t.a={}),t.a["expire"+n]=Math.floor(u.getTime()/1e3)},t.r=function(n){return!n||("object"==typeof n&&(n=n.visitorID?n.visitorID:n.id?n.id:n.uuid?n.uuid:""+n),n&&(n=n.toUpperCase(),"NOTARGET"==n&&(n="NONE")),n&&("NONE"==n||n.match(/^[0-9a-fA-F\-]+$/)))||(n=""),n},t.g=function(n,i){var r,u;t.q(n),r=t.d(n),r||(r=t.r(i))&&t.f(n,r),"object"==typeof i&&(u=86400,"MCAAMID"==n&&(void 0!=i.id_sync_ttl&&i.id_sync_ttl&&(u=parseInt(i.id_sync_ttl)),t.o(n,u),t.o("MCAAMLH",u),i.dcs_region&&t.f("MCAAMLH",i.dcs_region))),t.p(n,["NONE"!=r?r:""])},t.e=i,t.h=function(n,r,f){if(t.isAllowed()){t.i();var e=t.d(n);if(e)return"NONE"==e&&t.j(f,[""]),"NONE"!=e?e:"";(t.e==i||void 0==t.e[n])&&(t.e==i&&(t.e={}),t.e[n]=u,t.t(n,r,function(){var r;if(!t.d(n)){if(r="","MCMID"==n){for(var f=r="",i,e=10,o=10,u=0;19>u;u++)i=Math.floor(Math.random()*e),r+="0123456789".substring(i,i+1),e=0==u&&9==i?3:10,i=Math.floor(Math.random()*o),f+="0123456789".substring(i,i+1),o=0==u&&9==i?3:10;r+=f}t.g(n,r)}})),t.u(n,f)}return""},t.setMarketingCloudVisitorID=function(n){t.g("MCMID",n)},t.getMarketingCloudVisitorID=function(n){var i=t.marketingCloudServer,r="";return t.loadSSL&&t.marketingCloudServerSecure&&(i=t.marketingCloudServerSecure),i&&(r="http"+(t.loadSSL?"s":"")+"://"+i+"/id?d_rtbd=json&d_cid="+encodeURIComponent(t.namespace)+"&d_cb=s_c_il%5B"+t._in+"%5D.setMarketingCloudVisitorID"),t.h("MCMID",r,n)},t.setAudienceManagerVisitorID=function(n){t.g("MCAAMID",n)},t.getAudienceManagerVisitorID=function(n){var i=t.audienceManagerServer,r="";return t.loadSSL&&t.audienceManagerServerSecure&&(i=t.audienceManagerServerSecure),i&&(r="http"+(t.loadSSL?"s":"")+"://"+i+"/id?d_rtbd=json&d_cb=s_c_il%5B"+t._in+"%5D.setAudienceManagerVisitorID"),t.h("MCAAMID",r,n)},t.getAudienceManagerLocationHint=function(){t.i();var n=t.d("MCAAMLH");return n?n:0},t.setAnalyticsVisitorID=function(n){t.i(),t.g("MCAID",n)},t.getAnalyticsVisitorID=function(n){var i=t.trackingServer,r="";return t.loadSSL&&t.trackingServerSecure&&(i=t.trackingServerSecure),i&&(r="http"+(t.loadSSL?"s":"")+"://"+i+"/id?callback=s_c_il%5B"+t._in+"%5D.setAnalyticsVisitorID"),t.h("MCAID",r,n)},t.getVisitorID=function(n){return t.getMarketingCloudVisitorID(n)},t.namespace=n,t.cookieName="AMCV_"+n,t.k=t.s(),t.loadSSL=0<=r.location.protocol.toLowerCase().indexOf("https"),t.loadTimeout=500,t.marketingCloudServer=t.audienceManagerServer="dpm.demdex.net"}var visitor=new Visitor("vitamix");visitor.trackingServer="metrics.vitamix.com",visitor.trackingServerSecure="smetrics.vitamix.com",Visitor.getInstance=function(n){var t,r=window.s_c_il,i;if(r)for(i=0;i<r.length;i++)if((t=r[i])&&"Visitor"==t._c&&t.namespace==n)return t;return new Visitor(n)}