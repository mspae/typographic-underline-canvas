!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.TypographicUnderline=t()}}(function(){var t;return function e(t,n,i){function o(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return o(n?n:e)},l,l.exports,e,t,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(e,n,i){!function(e,i,o){"use strict";"undefined"!=typeof n&&n.exports?n.exports=o(i,e):"function"==typeof t&&t.amd?t(function(){return o(i,e)}):e[i]=o(i,e)}(window,"detectZoom",function(){var t=function(){return window.devicePixelRatio||1},e=function(){return{zoom:1,devicePxPerCssPx:1}},n=function(){var e=Math.round(screen.deviceXDPI/screen.logicalXDPI*100)/100;return{zoom:e,devicePxPerCssPx:e*t()}},i=function(){var e=Math.round(document.documentElement.offsetHeight/window.innerHeight*100)/100;return{zoom:e,devicePxPerCssPx:e*t()}},o=function(){var e=90==Math.abs(window.orientation)?screen.height:screen.width,n=e/window.innerWidth;return{zoom:n,devicePxPerCssPx:n*t()}},r=function(){var e=function(t){return t.replace(/;/g," !important;")},n=document.createElement("div");n.innerHTML="1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0",n.setAttribute("style",e("font: 100px/1em sans-serif; -webkit-text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;"));var i=document.createElement("div");i.setAttribute("style",e("width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;")),i.appendChild(n),document.body.appendChild(i);var o=1e3/n.clientHeight;return o=Math.round(100*o)/100,document.body.removeChild(i),{zoom:o,devicePxPerCssPx:o*t()}},s=function(){var t=c("min--moz-device-pixel-ratio","",0,10,20,1e-4);return t=Math.round(100*t)/100,{zoom:t,devicePxPerCssPx:t}},a=function(){return{zoom:s().zoom,devicePxPerCssPx:t()}},u=function(){var e=window.top.outerWidth/window.top.innerWidth;return e=Math.round(100*e)/100,{zoom:e,devicePxPerCssPx:e*t()}},c=function(t,e,n,i,o,r){function s(n,i,o){var u=(n+i)/2;if(0>=o||r>i-n)return u;var c="("+t+":"+u+e+")";return a(c).matches?s(u,i,o-1):s(n,u,o-1)}var a,u,c,l;window.matchMedia?a=window.matchMedia:(u=document.getElementsByTagName("head")[0],c=document.createElement("style"),u.appendChild(c),l=document.createElement("div"),l.className="mediaQueryBinarySearch",l.style.display="none",document.body.appendChild(l),a=function(t){c.sheet.insertRule("@media "+t+"{.mediaQueryBinarySearch {text-decoration: underline} }",0);var e="underline"==getComputedStyle(l,null).textDecoration;return c.sheet.deleteRule(0),{matches:e}});var d=s(n,i,o);return l&&(u.removeChild(c),document.body.removeChild(l)),d},l=function(){var t=e;return isNaN(screen.logicalXDPI)||isNaN(screen.systemXDPI)?window.navigator.msMaxTouchPoints?t=i:"ontouchstart"in window&&"string"==typeof document.body.style.webkitTextSizeAdjust?t=o:"string"==typeof document.body.style.webkitTextSizeAdjust?t=r:navigator.userAgent.indexOf("Opera")>=0?t=u:window.devicePixelRatio?t=a:s().zoom>.001&&(t=s):t=n,t}();return{zoom:function(){return l().zoom},device:function(){return l().devicePxPerCssPx}}})},{}],2:[function(e,n,i){!function(t){t(function(t,e,n){function i(t){var e,n,i,o,r=document.createElement("div"),s=document.createElement("style"),a=document.createElement("span");return t=t||document.body,a.innerText="T",s.innerText=".font-baseline{visibility:hidden;height:100px;}.font-baseline span:after{content:'';height:100%;display:inline-block;}",r.appendChild(a),r.appendChild(s),r.classList.add("font-baseline"),t.appendChild(r),e=window.getComputedStyle(a),o=parseInt(e.fontSize,10),lineHeight=parseInt(e.lineHeight,10),a.style.lineHeight=0,i=a.offsetHeight,n=a.offsetTop+i-r.offsetHeight-r.offsetTop,lineHeight=lineHeight||i,r.parentNode.removeChild(r),{baseline:n,content:i,font:o,line:lineHeight,multiplier:o/i,offset:(lineHeight-i)/2+n}}n.exports=i})}("function"==typeof t&&t.amd?t:function(t,o){"use strict";return"object"==typeof n?function(t){t(e,i,n)}:function(e){var n={exports:{}};e(function(t){return o[t]},n.exports,n),o[t]=n.exports}}("font-baseline",this))},{}],3:[function(t,e,n){function i(t,e){return t="number"==typeof t||x.test(t)?+t:-1,e=null==e?y:e,t>-1&&t%1==0&&e>t}function o(t,e,n){var i=t[e];(!l(i,n)||l(i,w[e])&&!C.call(t,e)||void 0===n&&!(e in t))&&(t[e]=n)}function r(t){return function(e){return null==e?void 0:e[t]}}function s(t,e,n){return a(t,e,n)}function a(t,e,n,i){n||(n={});for(var r=-1,s=e.length;++r<s;){var a=e[r],u=i?i(n[a],t[a],a,n,t):t[a];o(n,a,u)}return n}function u(t){return m(function(e,n){var i=-1,o=n.length,r=o>1?n[o-1]:void 0,s=o>2?n[2]:void 0;for(r="function"==typeof r?(o--,r):void 0,s&&c(n[0],n[1],s)&&(r=3>o?void 0:r,o=1),e=Object(e);++i<o;){var a=n[i];a&&t(e,a,i,r)}return e})}function c(t,e,n){if(!p(n))return!1;var o=typeof e;return("number"==o?d(n)&&i(e,n.length):"string"==o&&e in n)?l(n[e],t):!1}function l(t,e){return t===e||t!==t&&e!==e}function d(t){return null!=t&&!("function"==typeof t&&f(t))&&h(z(t))}function f(t){var e=p(t)?P.call(t):"";return e==g||e==b}function h(t){return"number"==typeof t&&t>-1&&t%1==0&&y>=t}function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var v=t("lodash.keys"),m=t("lodash.rest"),y=9007199254740991,g="[object Function]",b="[object GeneratorFunction]",x=/^(?:0|[1-9]\d*)$/,w=Object.prototype,C=w.hasOwnProperty,P=w.toString,z=r("length"),j=u(function(t,e){s(e,v(e),t)});e.exports=j},{"lodash.keys":4,"lodash.rest":5}],4:[function(t,e,n){function i(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i}function o(t,e){return t="number"==typeof t||z.test(t)?+t:-1,e=null==e?b:e,t>-1&&t%1==0&&e>t}function r(t,e){return S.call(t,e)||"object"==typeof t&&e in t&&null===O(t)}function s(t){return E(Object(t))}function a(t){return function(e){return null==e?void 0:e[t]}}function u(t){var e=t?t.length:void 0;return p(e)&&(M(t)||y(t)||l(t))?i(e,String):null}function c(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||j;return t===n}function l(t){return f(t)&&S.call(t,"callee")&&(!k.call(t,"callee")||T.call(t)==x)}function d(t){return null!=t&&!("function"==typeof t&&h(t))&&p(I(t))}function f(t){return m(t)&&d(t)}function h(t){var e=v(t)?T.call(t):"";return e==w||e==C}function p(t){return"number"==typeof t&&t>-1&&t%1==0&&b>=t}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){return!!t&&"object"==typeof t}function y(t){return"string"==typeof t||!M(t)&&m(t)&&T.call(t)==P}function g(t){var e=c(t);if(!e&&!d(t))return s(t);var n=u(t),i=!!n,a=n||[],l=a.length;for(var f in t)!r(t,f)||i&&("length"==f||o(f,l))||e&&"constructor"==f||a.push(f);return a}var b=9007199254740991,x="[object Arguments]",w="[object Function]",C="[object GeneratorFunction]",P="[object String]",z=/^(?:0|[1-9]\d*)$/,j=Object.prototype,S=j.hasOwnProperty,T=j.toString,O=Object.getPrototypeOf,k=j.propertyIsEnumerable,E=Object.keys,I=a("length"),M=Array.isArray;e.exports=g},{}],5:[function(t,e,n){function i(t,e,n){var i=n.length;switch(i){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function o(t,e){if("function"!=typeof t)throw new TypeError(c);return e=C(void 0===e?t.length-1:a(e),0),function(){for(var n=arguments,o=-1,r=C(n.length-e,0),s=Array(r);++o<r;)s[o]=n[e+o];switch(e){case 0:return t.call(this,s);case 1:return t.call(this,n[0],s);case 2:return t.call(this,n[0],n[1],s)}var a=Array(e+1);for(o=-1;++o<e;)a[o]=n[o];return a[e]=s,i(t,this,a)}}function r(t){var e=s(t)?w.call(t):"";return e==h||e==p}function s(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function a(t){if(!t)return 0===t?t:0;if(t=u(t),t===l||t===-l){var e=0>t?-1:1;return e*d}var n=t%1;return t===t?n?t-n:t:0}function u(t){if(s(t)){var e=r(t.valueOf)?t.valueOf():t;t=s(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(v,"");var n=y.test(t);return n||g.test(t)?b(t.slice(2),n?2:8):m.test(t)?f:+t}var c="Expected a function",l=1/0,d=1.7976931348623157e308,f=NaN,h="[object Function]",p="[object GeneratorFunction]",v=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,g=/^0o[0-7]+$/i,b=parseInt,x=Object.prototype,w=x.toString,C=Math.max;e.exports=o},{}],6:[function(t,e,n){"use strict";function i(t,e){var n=this;t||console.error("No element parameter defined");var i="string"==typeof t?document.querySelectorAll(t):t;i.length||console.error("No element found",t),e=o({},{strokeStyle:"auto",position:"auto",masking:"auto",width:"auto",strokeWidth:"auto"},e),this.lines=[],Array.from(i).map(function(t){n.lines.push(new r(t,e))}),window.addEventListener("resize",this.resize.bind(this))}var o=t("lodash.assign"),r=t("./renderers/canvas");i.prototype.resize=function(){this.lines.map(function(t){t.resize()})},i.prototype.update=function(){this.lines.map(function(t){t.update()})},i.prototype.destroy=function(){this.lines.map(function(t){t.destroy()})},e.exports=i},{"./renderers/canvas":7,"lodash.assign":3}],7:[function(t,e,n){"use strict";function i(t,e){var n=window.getComputedStyle(t,null);this.el=t,this.fontMetrics=o(t),this.options=e,this.canvas=document.createElement("canvas"),this.canvas.className="underline-canvas",this.ctx=this.canvas.getContext("2d"),this.ratio=r.device(),this.canvas.width=n.width*this.ratio,this.canvas.height=n.height*this.ratio,this.canvas.style.position="absolute",this.el.appendChild(this.canvas),this.updateText(),this.resize()}var o=t("font-baseline"),r=t("detect-zoom");i.prototype.measureOffset=function(){this.offsetTop=this.el.children[0].getBoundingClientRect().top+window.scrollY},i.prototype.resizeCanvas=function(){var t=this.el.getBoundingClientRect();this.canvas.width=t.width*this.ratio,this.canvas.height=t.height*this.ratio,this.ctx.scale(this.ratio,this.ratio),this.ctx.lineJoin="round",this.canvas.style.left="0px",this.canvas.style.width=t.width+"px",this.canvas.style.height=t.height+"px",this.canvas.style.top=this.offsetTop+"px",this.canvas.style.left=t.left+"px",this.canvas.style.zIndex="-2",this.canvasOffset=t.left},i.prototype.resize=function(){this.measureSpace(),this.measureOffset(),this.resizeCanvas(),this.updateLines(),this.render()},i.prototype.updateText=function(){var t=this.el.textContent.split(/\s/).map(function(t){return'<span class="underline-word">'+t+"</span> "}),e=this.el.querySelector(".underline-canvas");this.el.innerHTML="",this.el.innerHTML=t.join(" "),e&&this.el.appendChild(e)},i.prototype.measureSpace=function(){var t=document.createElement("span");t.innerHTML="&nbsp;",this.el.appendChild(t),this.spaceWidth=t.getBoundingClientRect().width,t.remove()},i.prototype.updateLines=function(){var t=this,e=[],n={text:"",begin:null,end:0};Array.from(this.el.children).map(function(i,o){-1!==i.className.indexOf("underline-word")&&(n.begin=null===n.begin?i.getBoundingClientRect().left-t.canvasOffset:n.begin,n.end+=i.getBoundingClientRect().width,n.text+=i.textContent,!t.el.children[o+2]||t.el.children[o+1].getBoundingClientRect().top>i.getBoundingClientRect().top?(n.top=i.getBoundingClientRect().top+window.scrollY,n.end+=n.begin,e.push({begin:n.begin,end:n.end,top:n.top,text:n.text}),n.text="",n.begin=null,n.end=0):(n.end+=t.spaceWidth,n.text+=" "))}),this.lines=e},i.prototype.render=function(){function t(t,e){var u=n.line*e,c=(e+1)*n.line-n.offset-n.baseline,l="auto"===this.options.position?c+.6180339887*n.baseline:c+this.options.position/this.ratio;console.log(t.text,n),i.lineWidth=1>r?1:parseInt(r,10),i.strokeStyle=s,i.beginPath(),i.moveTo(t.begin,parseInt(l,10)),i.lineTo(t.end,parseInt(l,10)),i.globalCompositeOperation="source-over",i.stroke(),i.closePath(),a&&(i.globalCompositeOperation="destination-out",i.font=o,i.fillStyle="green",i.textBaseline="top",i.fillText(t.text,parseInt(t.begin,10),parseInt(u,10)),i.lineWidth=parseInt(a,10),i.strokeStyle="blue",i.strokeText(t.text,parseInt(t.begin,10),parseInt(u,10)))}var e=(this.el.getBoundingClientRect(),window.getComputedStyle(this.el,null)),n=this.fontMetrics,i=this.ctx,o=i.font=e.fontStyle+" "+e.fontSize+" "+e.fontFamily,r="auto"===this.options.strokeWidth?this.ctx.measureText(".").width/6:this.options.strokeWidth*this.ratio,s="auto"===this.options.strokeStyle?e.color:this.options.strokeStyle,a=null!==this.options.masking?"auto"===this.options.masking?this.ctx.measureText(".").width/2:this.ratio*this.options.masking:!1;this.lines.map(t.bind(this))},e.exports=i},{"detect-zoom":1,"font-baseline":2}]},{},[6])(6)});
//# sourceMappingURL=bundle.js.map
