!function(e,t,n){var r,o,a,i=!1,c=!1,s=1e3,u=function(){var e=new URL(location);r=e.searchParams.get("path");var t=e.searchParams.get("config")||"abtf-pwa-config.json";o=r+t};e.addEventListener("install",function(t){u(),t.waitUntil(w().then(function(){e.skipWaiting()}).catch(function(){e.skipWaiting()}))}),e.addEventListener("activate",function(t){u(),t.waitUntil(e.clients.claim())}),n.prototype.add||(n.prototype.add=function(e){return this.addAll([e])}),n.prototype.addAll||(n.prototype.addAll=function(e){function n(e){this.name="NetworkError",this.code=19,this.message=e}var r=this;return n.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var r=new URL(e.url).protocol;if("http:"!==r&&"https:"!==r)throw new n("Invalid scheme");return t(e.clone()).catch(function(e){setTimeout(function(){throw e})})}))}).then(function(t){return Promise.all(t.map(function(t,n){return r.put(e[n],t)}))}).then(function(){})}),CacheStorage.prototype.match||(CacheStorage.prototype.match=function(e,t){var n=this;return this.keys().then(function(r){var o;return r.reduce(function(r,a){return r.then(function(){return o||n.open(a).then(function(n){return n.match(e,t)}).then(function(e){return o=e})})},Promise.resolve())})});var f,l=function(){function e(){this.value=[],this.leftBits=0}function t(e){for(var t="",n=e.byteLength,r=0;r<n;r++)t+=String.fromCharCode(e[r]);return btoa(t).replace(/=+$/,"")}function n(e){return e>0&&(e&1+~e)===e}function r(e,t){return e-t}function o(e,t,n){return new Promise(function(r,o){var i=a(e);crypto.subtle.digest("SHA-256",c.encode(i)).then(function(e){var o=new DataView(e).getUint32(0),a=Math.log2(t*n);if(a>31)throw Error("This implementation only supports up to 31 bit hash values");r(o=o>>32-a&(1<<a)-1)})})}function a(e){return e.replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})}function a(e){return e.replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})}function i(a,i){if(i>=Math.pow(2,32))throw Error('Invalid probability: "${p}" must be smaller than 2**32');if(!n(i))throw Error('Invalid probability: "${p}" must be a power of 2');var c,s=Math.min(Math.pow(2,Math.round(Math.log2(a.length))),Math.pow(2,31)),u=[];return new Promise(function(n,f){Promise.all(a.map(function(e){return o(e,s,i)})).then(function(o){u=u.concat().sort(r),c=Uint8Array.from((new e).addBits(Math.log2(s),5).addBits(Math.log2(i),5).gcsEncode(u,Math.log2(i)).value),n(t(c))})})}e.prototype.addBit=function(e){return 0==this.leftBits&&(this.value.push(0),this.leftBits=8),--this.leftBits,e&&(this.value[this.value.length-1]|=1<<this.leftBits),this},e.prototype.addBits=function(e,t){if(0!=t)do{--t,this.addBit(e&1<<t)}while(0!=t);return this},e.prototype.gcsEncode=function(e,t){for(var n=-1,r=0;r!=e.length;++r)if(n!=e[r]){for(var o=e[r]-n-1,a=o>>t;0!=a;--a)this.addBit(0);this.addBit(1),this.addBits(o,t),n=e[r]}return this};var c=new TextEncoder("utf-8");return function(e,t){return i(e,t)}}(),h=function(e){return e&&e.includes("text/html")?new Promise(function(e,t){caches.open(a+":push").then(function(t){t.keys().then(function(t){if(0===t.length)return e(null);var n=[];t.forEach(function(e){n.push(P(e))}),Promise.all(n).then(function(n){var r=[];t.forEach(function(e,t){"undefined"!==n[t]&&n[t]&&r.push(e.url)}),0===r.length?e(null):l(r,Math.pow(2,7)).then(function(t){e(t)})})})})}):Promise.resolve(null)},d=function(){var e={},t=0,n=[],r=function(t,o,a){var i=!1,c=Object.keys(e);if(c.length>0){var s=Date.now();c.forEach(function(t){if(!i)if(e[t][0]<s-e[t][1])try{delete e[t]}catch(e){}else i=!0})}if(i){if(0===o)return;var u;if(a){var f=!1;n.forEach(function(e,t){f||e[2]==a&&(f=t)}),f&&(n[f][1]&&clearTimeout(n[f][1]),u=f)}u||(u=n.push([])-1),n[u]=[t,setTimeout(function(e,t){delete n[e],t(),n.length>0&&r(null,0)},o,u,t),a]}else if(t&&n.push([t]),n.length>0)for(var l=n.shift();l;){if(l instanceof Array){l[1]&&clearTimeout(l[1]);try{l[0]()}catch(e){}}l=n.shift()}};return{start:function(n){var r=++t;return e[r]=[Date.now(),n],r},complete:function(t){try{delete e[t]}catch(e){}n.length>0&&r(null,0)},onIdle:r}}(),p=function(e){return new Promise(function(n,r){if(!i||!c||e&&e>c){var a=!i;w().then(function(){a&&n(i?i:!1)}).catch(function(){a&&n(!1)})}else if(!f&&c<v()-300){f=!0;var s=new Request(o+"?"+Math.round(Date.now()/1e3),{method:"HEAD",mode:"no-cors"});t(s).then(function(e){f=!1;var t=!0;if(e&&e.ok){var n=m(e.headers.get("last-modified"));n&&n<=c&&(t=!1)}t&&w()}).catch(function(e){f=!1,w()})}else n(i)}).catch(function(e){setTimeout(function(){throw e})})},w=function(){return f?Promise.resolve():(f=!0,t(o+"?"+Math.round(Date.now()/1e3),{mode:"no-cors"}).then(function(e){if(f=!1,e&&e.ok&&e.status<400)return e.json().then(function(e){if(console.info("Abtf.sw() ➤ config "+(i?"updated":"loaded"),e),e){e instanceof Array&&(e={policy:e}),e.policy&&(i=e.policy,c=v());var t=[];e.start_url&&t.push(e.start_url),e.policy&&e.policy.forEach(function(e){e.offline&&-1===t.indexOf(e.offline)&&t.push(e.offline)}),e.preload&&e.preload.forEach(function(e){-1===t.indexOf(e)&&t.push(e)}),preloadPromises=[],t.forEach(function(e){preloadPromises.push(N(e))})}});throw i=!1,new Error("service worker config not found: "+o)}).catch(function(e){f=!1,i=!1,setTimeout(function(){throw e})}))},v=function(){return Math.round(Date.now()/1e3)},m=function(e){if(e)return isNaN(parseInt(e))?(e=Date.parse(e),isNaN(e)?void 0:Math.round(e/1e3)):e},g=/^\/(.*)\/([gimuy]+)?$/,b=function(e){var t=e.match(g);if(t){try{var n=new RegExp(t[1],t[2])}catch(e){}return n||!1}},y=!1,A=!1,E=!1,x=function(){A||(!y||y<v()-10)&&(A=!0,y=v(),caches.keys().then(function(e){return e&&0!==e.length?Promise.all(e.map(function(e){if(0!==e.indexOf(a))return console.info("Abtf.sw() ➤ old cache deleted",e),caches.delete(e);caches.open(e).then(function(t){t.keys().then(function(n){if(console.info("Abtf.sw() ➤ prune cache",e,"size:",n.length,s),!(n.length<s)){var r=[],o=[],a=[];return n.forEach(function(e){o.push(e),a.push(t.match(e))}),Promise.all(a).then(function(e){var n=v();e.forEach(function(e,a){if(e&&e.headers){var i=e.headers.get("x-abtf-sw");if(i){var c=e.headers.get("x-abtf-sw-expire");if(c&&i&&i<v()-c)return console.info("Abtf.sw() ➤ cache ➤ expired",e.url),void t.delete(o[a])}else i=n;!1!==r&&r.push({t:i,r:o[a]})}}),r&&r.length>s&&(r.sort(function(e,t){return e.t>t.t?-1:e.t<t.t?1:0}),r.slice(s).forEach(function(e){t.delete(e.r)}))})}})})})).then(function(){A=!1}):Promise.resolve()}))},q=function(e,n,r){var o=d.start(1e3);return h(e.headers.get("accept")).then(function(i){var c=e;return i&&(c=new Request(c)).headers.set("cache-digest",i),t(c).then(function(e){var t=!1;if(e.ok&&e.status<400){var r=e.headers.get("link");r&&(r instanceof Array||(r=[r]),d.onIdle(function(){caches.open(a+":push").then(function(e){r.forEach(function(t){t.split(",").forEach(function(t){if(/rel=preload/.test(t)){var n=t.match(/<([^>]+)>/);n&&n[1]&&e.match(n[1]).then(function(t){t||e.put(n[1],new Response(null,{status:204}))})}})})})},1e3)),n&&(t=!0,n.conditions&&(n.conditions.forEach(function(n){if(t)switch(n.type){case"url":if(n.regex)if(o=b(n.pattern)){i=o.test(c.url);n.not?i&&(t=!1):i||(t=!1)}else t=!1;else{i=-1!==c.url.indexOf(n.pattern);n.not?i&&(t=!1):i||(t=!1)}break;case"header":var r=e.headers.get(n.name);if(r)if(n.regex){var o=b(n.pattern);if(o){i=o.test(r);n.not?i&&(t=!1):i||(t=!1)}else t=!1}else if("object"==typeof n.pattern)if(n.pattern.operator){r=parseFloat(r);var a=parseFloat(n.pattern.value);if(isNaN(r)||isNaN(a))t=!1;else{switch(n.pattern.operator){case"<":i=r<a;break;case">":i=r>a;break;case"=":var i=r===a;break;default:t=!1}t&&(n.not?i&&(t=!1):i||(t=!1))}}else t=!1;else-1===r.indexOf(n.pattern)&&(t=!1);else t=!1}}),t?console.info("Abtf.sw() ➤ cache condition ➤ cache",c.url,n.conditions):console.info("Abtf.sw() ➤ cache condition ➤ no cache",c.url,n.conditions)),t&&I(c,e.clone(),n).then(function(){d.complete(o)}))}return t||d.complete(o),e}).catch(function(e){return d.complete(o),r?r(c,null,e):null})})},k=function(e,n,r,o){var a=r.headers.get("etag"),i=m(r.headers.get("last-modified"));if(!a&&!i){console.warn("Abtf.sw() ➤ HEAD ➤ no etag or last-modified",e.url);var c=q(e,n);return o&&(c=c.then(o)),c}var s=d.start(1e3),u=new Request(e.url,{method:"HEAD",headers:e.headers,mode:"no-cors"});t(u).then(function(t){var r=!1,c=t.headers.get("etag"),u=m(t.headers.get("last-modified"));if(c&&c!==a?r=!0:u&&u!==i&&(r=!0),r){console.info("Abtf.sw() ➤ HEAD ➤ update",e.url);var f=q(e,n);return f=f.then(function(e){return d.complete(s),e}),o&&(f=f.then(o)),f}return d.complete(s),null}).catch(function(t){var r=q(e,n);return r=r.then(function(e){return d.complete(s),e}),o&&(r=r.then(o)),r})},T=function(e,n){return e=new Request(e),P(e).then(function(e){return e?e.blob().then(function(t){return new Response(t,{status:503,statusText:"Offline",headers:e.headers})}):t(n).catch(function(e){setTimeout(function(){throw e})})})},P=function(e){var t=d.start(1e3);return caches.open(a).then(function(n){return n.match(e).then(function(n){if(n){var r=n.headers.get("x-abtf-sw-expire");if(r)var o=n.headers.get("x-abtf-sw");var a=n.headers.get("expire");a&&(a=m(a)),r&&o<v()-r?(n=!1,console.info("Abtf.sw() ➤ cache expired by policy",e.url,"max age:",r)):a&&a<v()&&(n=!1,console.info("Abtf.sw() ➤ cache expired by HTTP expire",e.url,n.headers.get("expire")))}return d.complete(t),n})})},N=function(e){if(e)return"string"==typeof e&&(e=new Request(e,{mode:"no-cors"})),P(e).then(function(t){return t||(console.info("Abtf.sw() ➤ preload",e.url),q(e,{conditions:null}))})},I=function(e,t,n){return caches.open(a).then(function(r){var o={};return t.headers.forEach(function(e,t){o[t]=e}),o["x-abtf-sw"]=v(),n&&n.max_age&&(o["x-abtf-sw-expire"]=n.max_age),t.blob().then(function(n){var a=new Response(n,{status:t.status,statusText:t.statusText,headers:o});return r.put(e,a)})})};e.addEventListener("fetch",function(n){if("GET"===n.request.method){var r=!1;if(["wp-admin/","wp-login.php"].forEach(function(t){if(!r){var o=new RegExp("^([^/]+)?//"+e.location.host+"(:[0-9]+)?/"+t);(o.test(n.request.url)||n.request.referrer&&o.test(n.request.referrer))&&(r=!0)}}),!(r||n.request.url.match(/\&preview=true/)||n.request.url.match(/\&preview_nonce=/))&&(p(),i&&a)){var o=function(e,n){if(!n||0===n.length)return!1;var r=!1;if(n.forEach(function(t){if(!r&&t.match&&0!==t.match.length){var n=!0;t.match.forEach(function(t){if(n)switch(t.type){case"url":if(t.regex)(a=b(t.pattern))?(i=a.test(e.request.url),t.not?i&&(n=!1):i||(n=!1)):n=!1;else if(t.pattern instanceof Array){var r=!1;t.pattern.forEach(function(t){r||-1!==e.request.url.indexOf(t)&&(r=!0)}),t.not?r&&(n=!1):r||(n=!1)}else i=-1!==e.request.url.indexOf(t.pattern),t.not?i&&(n=!1):i||(n=!1);break;case"header":switch(t.name.toLowerCase()){case"referer":case"referrer":o=e.request.referrer;break;default:var o=e.request.headers.get(t.name)}if(o)if(t.regex){var a=b(t.pattern);a?(i=a.test(o),t.not?i&&(n=!1):i||(n=!1)):n=!1}else{var i=-1!==o.indexOf(t.pattern);t.not?i&&(n=!1):i||(n=!1)}else t.not||(n=!1)}}),n&&(r=t)}}),!r)return console.info("Abtf.sw() ➤ policy ➤ no match",e.request.url),!1;switch(console.info("Abtf.sw() ➤ policy ➤ match",e.request.url,r),E&&clearTimeout(E),E=setTimeout(function(){d.onIdle(x,1e4,"clean-cache"),E=!1},100),r.strategy){case"never":return!1;case"cache":return P().then(function(n){if(n){var o=!0;if(r.cache.update_interval)a=!isNaN(parseInt(r.cache.update_interval))&&parseInt(r.cache.update_interval);else var a=!1;if(a){var i=n.headers.get("x-abtf-sw");i&&parseInt(i)>v()-a&&(o=!1)}return o&&function(e,t){setTimeout(function(){var n;if(r.cache.notify&&(n=function(){clients.matchAll().then(function(t){t.forEach(function(t){t.postMessage([2,e.url])})})}),r.cache.head_update)console.info("Abtf.sw() ➤ HEAD ➤ verify",e.url),k(e,r.cache,t,n);else{console.info("Abtf.sw() ➤ update cache",e.url);var o=q(e,r.cache);n&&o.then(n)}},10)}(e.request.clone(),n.clone()),console.info("Abtf.sw() ➤ from cache",e.request.url),n}return q(e.request,r.cache,function(n,o,a){return r.offline?(console.warn("Abtf.sw() ➤ no cache ➤ network failed ➤ offline page",n.url),T(r.offline,n.clone())):(console.warn("Abtf.sw() ➤ no cache ➤ network failed ➤ empty 404 response",n.url,o,a),o||t(e.request.clone()).catch(function(e){setTimeout(function(){throw e})}))})});case"event":return P(e.request).then(function(n){return n?(console.info("Abtf.sw() ➤ from cache",e.request.url),n):q(e.request,null,function(n,o,a){return r.offline?(console.warn("Abtf.sw() ➤ no cache ➤ network failed ➤ offline page",n.url),T(r.offline,n.clone())):(console.warn("Abtf.sw() ➤ no cache ➤ network failed ➤ empty 404 response",n.url,o),o||t(e.request).catch(function(e){setTimeout(function(){throw e})}))})});case"network":default:return q(e.request,r.cache,function(n,o,a){return console.warn("Abtf.sw() ➤ network failed",n.url,o||a),P(n).then(function(a){return a?(console.info("Abtf.sw() ➤ fallback from cache",n.url),a):r.offline?(console.warn("Abtf.sw() ➤ no cache ➤ offline page",n.url),T(r.offline,n.clone())):(console.warn("Abtf.sw() ➤ no cache ➤ empty 404 response",n.url),o||t(e.request).catch(function(e){setTimeout(function(){throw e})}))})})}}(n,i);if(!1!==o)return n.respondWith(o)}}}),e.addEventListener("message",function(t){if(t&&t.data&&t.data instanceof Array){if(1===t.data[0]){t.data[1]&&!isNaN(parseInt(t.data[1]))&&p(parseInt(t.data[1])),t.data[3]&&!isNaN(parseInt(t.data[3]))&&(s=parseInt(t.data[3]));var n="abtf:"+(t.data[2]?t.data[2]+":":"");n!==a&&(a=n,console.info("Abtf.sw() ➤ cache prefix changed",a)),d.onIdle(x,1e4,"clean-cache")}if(2===t.data[0]||3===t.data[0])if(t.ports[0])r=function(e,n){t.ports[0].postMessage({error:e,status:n})};else var r=!1;if(2===t.data[0])if(t.data[1]){var o;if("string"==typeof t.data[1]||t.data[1]instanceof Request?o=[t.data[1]]:t.data[1]instanceof Array&&(o=t.data[1]),o){var i=[];o.forEach(function(e){i.push(N(e))}),r&&Promise.all(i).then(function(e){var t=[];e.forEach(function(e){var n={url:e.url,status:e.status,statusText:e.statusText},r=e.headers.get("content-length");n.size=isNaN(parseInt(r))?-1:parseInt(r),t.push(n)}),r(null,t)}).catch(function(e){console.error("Abtf.sw() ➤ preload",e)})}else r&&r("invalid-data")}else r&&r("no-urls");3===t.data[0]&&(e.registration.showNotification(t.data[1],t.data[2]),r&&r(null,"sent"))}})}(self,self.fetch,Cache);