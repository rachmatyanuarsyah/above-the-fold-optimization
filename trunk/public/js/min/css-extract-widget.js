!function(){function e(e){var t=Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,t)).toFixed(2)+" "+["B","kB","MB"][t]}var t=function(t,n,o){var r=o||{},i={},a=0,s=function(e){var t=e.parentStyleSheet.href;t?t=t:(a++,t="inline"),!1==!!i[t]&&(i[t]={media:e.parentStyleSheet.media,css:{}}),!1==!!i[t].css[e.selectorText]&&(i[t].css[e.selectorText]={});for(var n=e.style.cssText.split(/;(?![A-Za-z0-9])/),o=0;o<n.length;o++)if(!1!=!!n[o]){var r=n[o].split(": ");r[0]=r[0].trim(),r[1]=r[1].trim(),i[t].css[e.selectorText][r[0]]=r[1]}};this.generateCSS=function(){var t,n,o,r="",a=console&&console.groupCollapsed;console.clear&&console.clear(),a&&(console.log("%cSimple Critical CSS Extraction","font-size:24px;font-weight:bold"),console.log("For professional Critical CSS generators, see https://github.com/addyosmani/critical-path-css-tools"));for(var s in i){if(a&&(o="inline"===s?"Inline":"File: "+s,console.groupCollapsed(o),t=""),r+="/**\n * @file "+s,i[s].media&&(i[s].media.length>1||"all"!==i[s].media[0])){for(var l=[],c=0;c<i[s].media.length;c++)i[s].media[c]&&l.push(i[s].media[c]);l.length>0&&(r+="\n * @media "+(l=l.join(" ")))}r+="\n */\n";for(k in i[s].css){n=k+" { ";for(var u in i[s].css[k])n+=u+": "+i[s].css[k][u]+"; ";r+=n+="}\n",a&&(t+=n)}r+="\n",a&&(console.log(t),console.groupEnd())}return a?console.groupCollapsed("All Extracted Critical CSS ("+e(r.length)+")"):console.log("%cAll:","font-weight:bold"),console.log(r),a&&console.groupEnd(),r},function(){for(var e=t.innerHeight,o=n.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,function(e){return NodeFilter.FILTER_ACCEPT},!0);o.nextNode();){var i=o.currentNode;if(i.getBoundingClientRect().top<e||r.scanFullPage){var a=t.getMatchedCSSRules(i);if(a)for(var l=0;l<a.length;l++)s(a[l])}}}()},n=function(){var e=[document.body],t=function(e,t){var n,o=[];for(n=0;n<e.length;n++)t&&!e[n]||(o[n]=e[n]);return o},n=function(e){var t,n=document.styleSheets,o=[];e.matches=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector;for(var r in n){var i=n[r].rules||n[r].cssRules;for(var a in i){t=!!i[a].selectorText&&i[a].selectorText.split(" ").map(function(e){return!!e&&e.split(/(:|::)/)[0]}).join(" ");try{e.matches(t)&&o.push(i[a])}catch(e){}}}return o},o=function(e){return e.reduce(function(e,r){return e.push(n(r)),e=e.concat(o(t(r.children)))},[])};return e.outerHTML,function(e){var t=function(e,t){return t.filter(function(t){return t.selector===e})},n=function(e,n){var o=t(e,n);return o.length>0?o[0]:{selector:e,styles:{}}},o=function(e,n){0===t(e.selector,n).length&&n.push(e)},r=[];return e.forEach(function(e){e.forEach(function(e){for(var t=n(e.selectorText,r),i=0;i<e.style.length;i++){var a=e.style[i];t.styles[a]=e.style.getPropertyValue(a)}o(t,r)})}),r}(o(e)).reduce(function(e,t){return e+=t.selector+" {\n",e+=Object.keys(t.styles).reduce(function(e,n){return e.push("  "+n+": "+t.styles[n]+";"),e},[]).join("\n"),e+="\n}\n"},"")};!function(e,t){t.getMatchedCSSRules=e()}(function(e){function t(t){return e.matchMedia(t.media.mediaText).matches}function n(e,t){var n=e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;if(n)try{return n.call(e,t)}catch(e){return!1}else for(var o=e.ownerDocument.querySelectorAll(t),r=o.length;r&&r--;)if(o[r]===e)return!0;return!1}function o(e){var o,r,i,a,s,l=[],c=e.ownerDocument.styleSheets,u=c.length;if(1===e.nodeType)for(;u&&u--;)for(o=(r=c[u].cssRules||c[u].rules).length;o&&o--;)if((s=r[o])instanceof CSSStyleRule&&n(e,s.selectorText))l.push(s);else if(s instanceof CSSMediaRule&&t(s))for(a=(i=s.cssRules||s.rules).length;a&&a--;)(s=i[a])instanceof CSSStyleRule&&n(e,s.selectorText)&&l.push(s);return l}return function(){return e.getMatchedCSSRules?e.getMatchedCSSRules:o}}(window),this);var o=o||function(e){"use strict";if(!(void 0===e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=function(){return e.URL||e.webkitURL||e},n=e.document.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in n,r=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent),s=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},l=function(e){setTimeout(function(){"string"==typeof e?t().revokeObjectURL(e):e.remove()},4e4)},c=function(e,t,n){for(var o=(t=[].concat(t)).length;o--;){var r=e["on"+t[o]];if("function"==typeof r)try{r.call(e,n||e)}catch(e){s(e)}}},u=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},d=function(s,d,f){f||(s=u(s));var p,h=this,g="application/octet-stream"===s.type,m=function(){c(h,"writestart progress write writeend".split(" "))};if(h.readyState=h.INIT,o)return p=t().createObjectURL(s),void setTimeout(function(){n.href=p,n.download=d,r(n),m(),l(p),h.readyState=h.DONE});!function(){if((a||g&&i)&&e.FileReader){var n=new FileReader;return n.onloadend=function(){var t=a?n.result:n.result.replace(/^data:[^;]*;/,"data:attachment/file;");e.open(t,"_blank")||(e.location.href=t),t=void 0,h.readyState=h.DONE,m()},n.readAsDataURL(s),void(h.readyState=h.INIT)}p||(p=t().createObjectURL(s)),g?e.location.href=p:e.open(p,"_blank")||(e.location.href=p),h.readyState=h.DONE,m(),l(p)}()},f=d.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return t=t||e.name||"download",n||(e=u(e)),navigator.msSaveOrOpenBlob(e,t)}:(f.abort=function(){},f.readyState=f.INIT=0,f.WRITING=1,f.DONE=2,f.error=f.onwritestart=f.onprogress=f.onwrite=f.onabort=f.onerror=f.onwriteend=null,function(e,t,n){return new d(e,t||e.name||"download",n)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this);window.extractCriticalCSS=function(){var e=new t(window,document).generateCSS();try{var n=!!new Blob}catch(e){}if(n){var r=new Blob(["/**\n * Simple Critical CSS extracted using the Page Speed Optimization widget\n *\n * @link https://wordpress.org/plugins/above-the-fold-optimization/\n * @source https://github.com/optimalisatie/above-the-fold-optimization/blob/master/trunk/admin/js/css-extract-widget.js\n * @minified https://github.com/optimalisatie/above-the-fold-optimization/blob/master/trunk/admin/js/css-extract-widget.min.js\n *\n * Note: this critical CSS is extracted using the browser viewport. For professional Critical CSS generators @see https://github.com/addyosmani/critical-path-css-tools\n */\n\n"+e],{type:"text/css;charset=utf-8"}),i=window.location.pathname;i=i&&"/"!==i&&-1!==i.indexOf("/")?"-"+i.replace(/\/$/,"").split("/").pop():"-front-page",o(r,"critical-css"+i+".css")}else alert("Your browser does not support javascript based file download. The critical CSS is printed in the console.")},window.extractFullCSS=function(){var t=n();try{var r=!!new Blob}catch(e){}if(console.clear&&console.clear(),console.log("%cFull CSS Extraction","font-size:24px;font-weight:bold"),console.groupCollapsed&&console.groupCollapsed("Extracted Full CSS ("+e(t.length)+")"),console.log(t),console.groupCollapsed&&console.groupEnd(),r){var i=new Blob(["/**\n * Full CSS extracted using the Page Speed Optimization widget\n *\n * @link https://wordpress.org/plugins/above-the-fold-optimization/\n * @source https://github.com/optimalisatie/above-the-fold-optimization/blob/master/trunk/admin/js/css-extract-widget.js\n * @minified https://github.com/optimalisatie/above-the-fold-optimization/blob/master/trunk/admin/js/css-extract-widget.min.js\n */\n\n"+t],{type:"text/css;charset=utf-8"}),a=window.location.pathname;a=a&&"/"!==a&&-1!==a.indexOf("/")?"-"+a.replace(/\/$/,"").split("/").pop():"-front-page",o(i,"full-css"+a+".css")}else alert("Your browser does not support javascript based file download. The full CSS is printed in the console.")}}();