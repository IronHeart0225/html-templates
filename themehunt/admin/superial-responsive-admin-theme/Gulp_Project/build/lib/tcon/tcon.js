(function(a,b){if(typeof define==="function"&&define.amd){define(b)}else{if(typeof exports==="object"){module.exports=b()}else{a.transformicons=b()}}}(this||window,function(){var d={},c="tcon-transform",f={transform:["click"],revert:["click"]};var e=function(h){if(typeof h==="string"){return Array.prototype.slice.call(document.querySelectorAll(h))}else{if(typeof h==="undefined"||h instanceof Array){return h}else{return[h]}}};var b=function(h){if(typeof h==="string"){return h.toLowerCase().split(" ")}else{return h}};var g=function(i,q,n){var h=(n?"remove":"add")+"EventListener",o=e(i),p=o.length,m={};for(var j in f){m[j]=(q&&q[j])?b(q[j]):f[j]}while(p--){for(var l in m){var k=m[l].length;while(k--){o[p][h](m[l][k],a)}}}};var a=function(h){d.toggle(h.currentTarget)};d.add=function(i,h){g(i,h);return d};d.remove=function(i,h){g(i,h,true);return d};d.transform=function(h){e(h).forEach(function(i){i.classList.add(c)});return d};d.revert=function(h){e(h).forEach(function(i){i.classList.remove(c)});return d};d.toggle=function(h){e(h).forEach(function(i){d[i.classList.contains(c)?"revert":"transform"](i)});return d};return d}));window.addEventListener("load",function(a){transformicons.add(".tcon")},true);