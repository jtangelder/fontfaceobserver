(function(){'use strict';function f(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.f=document.createElement("span");this.e=document.createElement("span");this.d=-1;this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";
this.e.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";this.f.style.cssText="display:inline-block;width:200%;height:200%;";this.b.appendChild(this.f);this.c.appendChild(this.e);this.a.appendChild(this.b);this.a.appendChild(this.c)}function h(a,b,c){a.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;visibility:hidden;position:absolute;width:auto;margin:0;padding:0;top:0;white-space:nowrap;font-size:300px;font-family:"+b+";"+c}
function r(a){var b=a.a.offsetWidth,c=b+100;a.e.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.d!==b?(a.d=b,!0):!1}function s(a,b){a.b.addEventListener("scroll",function(){r(a)&&null!==a.a.parentNode&&b(a.d)},!1);a.c.addEventListener("scroll",function(){r(a)&&null!==a.a.parentNode&&b(a.d)},!1);r(a)};function t(a,b){this.family=a;this.style=b.style||"normal";this.variant=b.variant||"normal";this.weight=b.weight||"normal";this.stretch=b.stretch||"stretch";this.featureSettings=b.featureSettings||"normal"}var u=null;
t.prototype.a=function(a){a=a||"BESbswy";var b="font-style:"+this.style+";font-variant:"+this.variant+";font-weight:"+this.weight+";font-stretch:"+this.stretch+";font-feature-settings:"+this.featureSettings+";-moz-font-feature-settings:"+this.featureSettings+";-webkit-font-feature-settings:"+this.featureSettings+";",c=document.createElement("div"),k=new f(a),l=new f(a),m=new f(a),d=-1,e=-1,g=-1,n=-1,p=-1,q=-1,v=this;h(k,"sans-serif",b);h(l,"serif",b);h(m,"monospace",b);c.appendChild(k.a);c.appendChild(l.a);
c.appendChild(m.a);document.body.appendChild(c);n=k.a.offsetWidth;p=l.a.offsetWidth;q=m.a.offsetWidth;return new Promise(function(a,x){function w(){if(-1!==d&&-1!==e&&-1!==g&&d===e&&e===g){if(null===u){var b=/AppleWeb[kK]it\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);u=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))}u?d===n&&e===n&&g===n&&d===p&&e===p&&g===p&&d===q&&e===q&&g===q||a(d):a(d)}}setTimeout(function(){document.body.removeChild(c);x(-1)},3E3);s(k,
function(a){d=a;w()});h(k,v.family+",sans-serif",b);s(l,function(a){e=a;w()});h(l,v.family+",serif",b);s(m,function(a){g=a;w()});h(m,v.family+",monospace",b)})};t.prototype.b=function(a){var b=this;return this.a(a).then(function(){return b},function(){throw b;})};window.FontFaceObserver=t;window.FontFaceObserver.prototype.check=t.prototype.b;window.FontFaceObserver.prototype.available=t.prototype.a;}());
