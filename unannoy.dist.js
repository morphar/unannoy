(function(){function k(a){var c=document.getElementsByClassName(a);a=new RegExp(a,"gi");for(var e=c.length-1;0<=e;e--){var b=c[e];b.className=b.className.replace(a,"")}}function l(a,c){for(var e=new RegExp(c,"gi"),b=document.querySelectorAll(a),f=b.length-1;0<=f;f--){var d=b[f];d.className=d.className.replace(e,"")}}function g(a){a&&"undefined"!==typeof a&&"undefined"!==typeof a.parentNode&&a.parentNode.removeChild(a)}function h(a){a=document.getElementsByClassName(a);for(var c=a.length-1;0<=c;c--)g(a[c])}
function m(a,c,e){a=document.querySelectorAll(a+"["+c+"='"+e+"']");for(c=a.length-1;0<=c;c--)g(a[c])}document.getElementsByTagName("html")[0].style.overflow="unset";document.body.style.overflow="unset";h("fc-ab-root");m("iframe","name","googlefcInactive");m("iframe","name","googlefcPresent");k("qc-cmp-showing");k("qc-cmp-ui-showing");h("qc-cmp-ui-container");h("overlay");k("u-overflowHidden");h("butterBar--privacy");g(document.getElementById("CybotCookiebotDialog"));g(document.getElementById("CybotCookiebotDialogBodyUnderlay"));
h("as-oil");k("as-oil-js-active");l("html","locked");l("body","locked");l("html","noScroll");l("body","noScroll");(function(){for(var a=document.getElementsByTagName("*"),c=window.innerWidth,e=window.innerHeight,b=a.length-1;0<=b;b--)if(a[b]instanceof Element)if(a[b].className&&a[b].className.indexOf&&-1!==a[b].className.indexOf("overlay"))g(a[b]);else{var f=a[b].offsetWidth,d=a[b].offsetHeight;f==c&&d==e?g(a[b]):(d=getComputedStyle(a[b],":before"),f=d.width,f=parseInt(f.substr(0,f.length-2)),d=d.height,
d=parseInt(d.substr(0,d.length-2)),f>=c&&d>=e&&g(a[b]))}})()})();