(function(f){var l=window.AmazonUIPageJS||window.P,g=l._namespace||l.attributeErrors,h=g?g("AudibleWebNavigationAssets",""):l;h.guardFatal?h.guardFatal(f)(h,window):h.execute(function(){f(h,window)})})(function(f,l,g){function h(a,c){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!c||"object"!==typeof c&&"function"!==typeof c?a:c}function p(a,c){if("function"!==typeof c&&null!==c)throw new TypeError("Super expression must either be null or a function, not "+
typeof c);a.prototype=Object.create(c&&c.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});c&&(Object.setPrototypeOf?Object.setPrototypeOf(a,c):a.__proto__=c)}var q="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r=function(){function a(a,e){for(var b=0;b<e.length;b++){var d=e[b];d.enumerable=d.enumerable||!1;d.configurable=
!0;"value"in d&&(d.writable=!0);Object.defineProperty(a,d.key,d)}}return function(c,e,b){e&&a(c.prototype,e);b&&a(c,b);return c}}();f.when("cookieUtility","refMarkers","AddToHomeScreenPopover","navigatorHelper","ready").execute(function(a,c,e,b){b.cookieEnabled&&/iP(hone|od).+Version\/[\d\.]+.*Safari/i.test(b.userAgent)&&("standalone"in b&&b.standalone?c.buildAndPost("iOS_home_screen_app"):(c=document.getElementById("navigation-add-to-home-screen-popover"))&&!a.get("addToHomeScreenDismissed")&&(e=
new e(c),e.on("close",function(){var d=new Date;d.setMonth(d.getMonth()+6);a.set("addToHomeScreenDismissed","true",{expires:d})}),e.open()))});f.register("navigatorHelper",function(){return navigator});f.when("StrictEvents","accessibleClick").register("AddToHomeScreenPopover",function(a,c){return function(a){function b(d){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");var a=h(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,["open","close"]));a.wrapperElement=
d;(d=a.wrapperElement.getElementsByClassName("navigation-add-to-home-screen-popover-close-button")[0])&&c.addEventListener(d,function(d){d.preventDefault();a.close()});return a}p(b,a);r(b,[{key:"open",value:function(){this.wrapperElement.classList.remove("bc-pub-hidden");this.emit("open")}},{key:"close",value:function(){this.wrapperElement.classList.add("bc-pub-hidden");this.emit("close")}}]);return b}(a)});f.when("ready").register("creditDataUtility",function(){var a=document.getElementById("audibleNavigation_creditInfo"),
c=null;if(a&&(a=a&&a.getAttribute("data-json")))try{c=JSON.parse(a)}catch(e){"console"in l&&"error"in console&&console.error("Error parsing credit info",e)}return{getCreditData:function(){return c&&Object.assign({},c)}}});f.when("cookieUtility","creditDataUtility","weblab.projectX").register("creditSummaryAutoOpenUtility",function(a,c,e){var b=new Date;b.setMonth(b.getMonth()+24);var d=(new Date).getTime(),n=!1,m=0;return{shouldAutoOpen:function(){if("T1"!==e||!navigator.cookieEnabled)return!1;var k=
c.getCreditData();if(!k||!k.autoShowCreditInfo)return!1;m=parseInt(a.get("creditInfo_closeCount"));if(isNaN(m))m=0;else if(4<=m)return!1;k=parseInt(a.get("creditInfo_lastVisitDate"));if(!isNaN(k)&&864E5>d-k)return a.set("creditInfo_lastVisitDate",d,{expires:b}),!1;a.set("creditInfo_lastVisitDate","",{expires:b});return n=!0},infoDismissed:function(){n&&(n=!1,m++,a.set("creditInfo_closeCount",m,{expires:b}),a.set("creditInfo_lastVisitDate",d,{expires:b}))}}});NodeList.prototype.forEach||(NodeList.prototype.forEach=
Array.prototype.forEach);f.register("transitionUtility",function(){var a=void 0,c=document.createElement("fakeelement"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},b;for(b in e)if(c.style[b]!==g){a=e[b];break}return{onTransitionEnd:function(d,b){if(a){var c=function(){var c=void 0,e=function(){return d.removeEventListener(a,c)},c=function(a){e();b()};d.addEventListener(a,c);return{v:e}}();if("object"===("undefined"===
typeof c?"undefined":q(c)))return c.v}setTimeout(b);return function(){}}}});f.when("creditSummaryAutoOpenUtility","popover","ready").register("creditPopover",function(a,c){var e=document.getElementsByClassName("navigation-header-credit-info-popover-trigger")[0],b=e&&c.getPopoverFromTriggerElement(e);b&&a.shouldAutoOpen()&&function(){b.show();var d=setTimeout(b.hide.bind(b,{origin:"creditSummaryAutoOpen"}),1E4),c=function k(){clearTimeout(d);b.off("show",k)};b.on("show",c);b.on("hide",function t(e,
f){"creditSummaryAutoOpen"!==f.origin&&(clearTimeout(d),a.infoDismissed(),b.off("show",c),b.off("hide",t))})}();return{open:function(){return b&&b.show()},close:function(){return b&&b.hide()},toggle:function(){return b&&b.toggle()}}});f.register("headerCart",function(){function a(a){l.console&&(console.error?console.error(a):console.log(a))}function c(){var d=document.getElementsByClassName("navigation-header-cart-count")[0];if(d)return d;a("headerCart._getCartCountElement failed: no cart element found!")}
function e(d){d=parseInt(d,10);d=isNaN(d)?0:d;var b=c();b&&(0<d?(b.textContent=String(d),b.classList.remove("bc-pub-hidden")):(b.classList.add("bc-pub-hidden"),b.innerHTML=""));b=document.getElementsByClassName("navigation-header-cart-link")[0];b||(a("headerCart._getCartLinkElement failed: no cart link element found!"),b=void 0);if(b){var e=b.getAttribute("data-cart-link-label-template");e&&(e=e.replace("{cartCount}",d),b.setAttribute("aria-label",e))}}function b(){var b=c(),b=b&&parseInt(b.textContent,
10);return isNaN(b)?0:b}return{setCartCount:e,getCartCount:b,incrementCartCount:function(a){a===g&&(a=1);e(b()+a)},decrementCartCount:function(a){a===g&&(a=1);e(Math.max(0,b()-a))}}});f.when("live","ready").execute(function(a){a("click",".navigation-check-link",function(a){if(a=g.querySelector("input"))a.checked=!0})});f.when("popover","ready").execute(function(){document.body.classList.add("navigation-initialized")});f.when("refMarkers","desktop","ready").execute(function(a){function c(){for(var a=
document.getElementById("skip-link-dropdown"),c=document.getElementsByClassName("bc-a11y-dynamic-skiplink-target"),d=0;d<c.length;d++){var e=c[d].getAttribute("data-bc-a11y-dynamic-skiplink-display-value");if(""!==e){var f=document.createElement("option");f.appendChild(document.createTextNode(e));f.value=e;a.appendChild(f)}b[e]=c[d]}}function e(c){var d=b[c.target.value];a.post(a.build(d.getAttribute("data-bc-a11y-dynamic-skiplink-feature"),c));c.target.value="default";d.focus()}var b={},d=document.getElementById("skip-link-dropdown");
d&&(c(),d.addEventListener("change",e))});f.declare("weblab.projectX","C")});