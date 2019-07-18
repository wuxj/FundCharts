/*!
 * 
 *   LineChart
 *   @version: 0.9.1
 *   @author: Micheal Wayne(michealwayne@163.com)
 *   @build time: 2018-11-22
 *   @update time: 2019-07-18
 * 
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e,n){"use strict";function r(t){return Object.prototype.toString.call(t).replace(/\[object\s|\]/g,"")}function i(t){return"Object"===r(t)}e.__esModule=!0,e.type=r,e.isArray=function(t){return"Array"===r(t)},e.isString=function(t){return"String"===r(t)},e.isObject=i,e.isFunction=function(t){return"Function"===r(t)},e.each=function(t,e){for(var n=0,r=t.length;n<r;n++)e(t[n],n)},e.cloneObjDeep=function t(e,n){if(!i(e)||!i(n))return!1;for(var r in e)!i(n[r])||o[r]?n[r]=n[r]||e[r]:t(e[r],n[r]);return n},e.isEmptyObj=o,e.getColorRgb=a,e.Lighting=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return a(t).map(function(t){return(t+=t*e)>255?255:t})};e.cloneArray=function(t,e){return t.map(function(t,n){e[n]=t}),e};function o(t){if(!t)return!1;for(var e in t)return!1;return!0}function a(t){var e=t.toLowerCase();if(e&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)){if(4===e.length){for(var n="#",r=1;r<4;r++)n+=e.slice(r,r+1).concat(e.slice(r,r+1));e=n}for(var i=[],o=1;o<7;o+=2)i.push(parseInt("0x"+e.slice(o,o+2)));return i}return e}},function(t,e,n){"use strict";e.__esModule=!0,e.drawLine=function(t,e,n,r,i){t.beginPath(),t.moveTo(e,n),t.lineTo(r,i),t.closePath(),t.stroke()},e.drawDashLine=function(t,e,n,r,i,o){o=o||5;var a=(c=r-e,h=i-n,Math.sqrt(Math.pow(c,2)+Math.pow(h,2))),s=Math.floor(a/o);var c,h;t.beginPath();for(var u=0;u<s;u++)t[u%2==0?"moveTo":"lineTo"](e+(r-e)/s*u,n+(i-n)/s*u);t.closePath(),t.stroke()},e.drawPoint=function(t,e,n,r,i,o,a){t.beginPath(),t.strokeStyle=i||"#fff",t.lineWidth=void 0!==a?a:1,t.arc(e,n,o,0,2*Math.PI,!0),t.closePath(),t.fillStyle=r,t.fill(),a&&t.stroke()},e.retinaScale=function(t,e){var n=window.devicePixelRatio||1;if(1===n)return!1;var r=t.height,i=t.width;return t.height=r*n,t.width=i*n,e.scale(n,n),t.style.width=i+"px",t.style.height=r+"px",n},e.setContext=function(t,e,n){if(!t||e?!t.$el:!t.opts.Canvas&&!n)throw new Error("Error!no chart object to set context.(FundCharts-setContext)");var i=void 0,o=t.opts.width||500,a=t.opts.height||500;if(e&&!n){var s=t.$el;if(s.style.webkitUserSelect="none",s.style.userSelect="none","function"==typeof s.getContext)i=s;else{(i=document.createElement("canvas")).id=t.opts.id+"Canvas";var c=t.opts.width||(0,r.getStyle)(s,"width"),h=t.opts.height||(0,r.getStyle)(s,"height");i.width=c,i.height=h,s.appendChild(i)}}else if(n){if(!wx||"function"!=typeof wx.createCanvasContext)throw new Error("Error! no param {Object} Ctx.(FundCharts-setContext, not find options)");var u=wx.createCanvasContext(t.opts.id);i={info:"Weapp native canvas",width:o,height:a,getContext:function(){return u},draw:function(e){if(e)return u.draw(!0);wx.drawCanvas({canvasId:t.opts.id,actions:t.ctx.getActions()})}}}else{var f=t.opts.Canvas;if(!t.opts.Canvas)throw new Error("Error! no param {Object} Canvas.(FundCharts-setContext, not find options)");i=f.createCanvas(o,a),t.opts.handleOut&&t.opts.handleOut(i)}t.canvas=i,t.ctx=i.getContext("2d"),t._chart={width:i.width,height:i.height}};var r=n(3)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n(1),o=n(4),a=function(){function t(t){this.$el=null,this.drawer=null,this.canvas=null,this.ctx=null;var e=t.id;if(!e)throw o.Errors.contain;o.Config.inBrowser&&!o.Config.inWeapp&&(this.$el=document.getElementById(e)),t.colors&&(t.colors=t.colors.concat(o.Config.colors)),(t=r.cloneObjDeep(o.Config,t)).data&&(t.datas=[t.data],delete t.data),this.opts=t}return t.prototype.update=function(t){if(!t)return!1;this.opts=r.cloneObjDeep(this.opts,t),this.drawer.draw(!0)},t.prototype._init=function(){i.setContext(this,o.Config.inBrowser,o.Config.inWeapp),o.Config.inBrowser&&!o.Config.inWeapp&&(this.pixelRatio=i.retinaScale(this.canvas,this.ctx))},t}();e.default=a},function(t,e,n){"use strict";e.__esModule=!0,e.getStyle=function(t,e){var n=t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?Number(r[1]):void 0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Errors={contain:function(){return new Error("Error!no container id in options.(FundChart)")}};var r="undefined"!=typeof wx&&void 0!==wx.getSystemInfo,i=r?2:1;e.Config={inBrowser:"undefined"!=typeof window,inWeapp:r,backgroundColor:"#fff",colors:["#fe5d4e","#43c2f7","#707ad9","#ffa61b","#64d290","#cf27bd"],events:["touchstart","touchmove"],hoverLineColor:"#999",hoverHighlight:1,bar:{margin:60/i},chartTop:0,chartLeft:50/i,chartRight:15,dash:{color:"#e2e2e2",length:3/i},font:{color:"#666",fontFamily:"Arial",fontSize:{x:"11px",y:"10px"}}}},function(t,e,n){"use strict";e.__esModule=!0,e.Animation=function(t){t.duration=t.duration||600;var e=23,n=i(),r=null;n(function i(o){if(null===o)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());null===r&&(r=o);if(o-r<t.duration){var a=(o-r)/t.duration;s=a,a=(s/=.5)<1?.5*Math.pow(s,3):.5*(Math.pow(s-2,3)+2),t.onProcess&&t.onProcess(a),n(i,e)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish();var s},e)};var r=void 0;"undefined"!=typeof window&&(r=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame);var i=function(){return void 0!==r?(i=function(){return r},r):function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n(1),o=function(){function t(t){this.yaxis={min:0,max:0,range:0,unit:0},this.xaxis={min:0,max:0,range:0,unit:0},this.xRate=0,this.xBasic=0,this.yRate=0,this.yBasic=0,this.drawPoint=i.drawPoint,this.chartjs=t}return t.prototype.getBasicData=function(t){var e,n,i=this.chartjs,o=i.opts,a=t||o.datas,s=o.range;if(a.length>1&&(i.multline=!0),s){if(void 0===s.min||void 0===s.max)throw new Error("Error! param range need min and max");e=s.min,n=s.max}else r.each(a,function(t){var r=Math.min.apply(null,t),i=Math.max.apply(null,t);e=e&&e<r?e:r,n=n&&n>i?n:i});return[e||0,n||0]},t.prototype.clearCtn=function(t){var e=this.chartjs,n=e.opts,r=e.ctx,i=e._chart.width,o=e._chart.height;r.beginPath(),t?r.rect(n.chartLeft-5,n.chartTop-5,i+1,o-16-n.chartTop):r.rect(0,0,1e5,1e5),r.fillStyle=n.backgroundColor,r.fill(),r.closePath()},t.prototype.drawDashs=function(t){var e=this.chartjs,n=e.opts;if(n.noDash)return!1;var r=e.ctx,o=e._chart.width-n.chartRight+2,a=(e._chart.height-n.chartTop-30)/4;r.lineWidth=0,r.strokeStyle=n.dash.color,r.beginPath(),r.lineWidth=1;for(var s=0;s<5;s++){var c=t||s*a+5+n.chartTop;i.drawDashLine(r,n.chartLeft,c,o,c,n.dash.length)}r.save()},t.prototype.drawTexts=function(t,e){var n=this.chartjs,r=n.opts,i=r.font,o=n.ctx,a=r.xaxis,s=n._chart.width,c=n._chart.height;r.handleTextX&&(t=r.handleTextX),r.handleTextY&&(e=r.handleTextY),o.lineWidth=1,o.textAlign="right",o.font=i.fontSize.x+" "+i.fontFamily,o.fillStyle=i.color,t?t(o,a):(o.fillText(a[a.length-1],s-r.chartRight,c-10),o.textAlign="left",o.fillText(a[0],r.chartLeft,c-10)),o.font=i.fontSize.y+" "+i.fontFamily,o.textAlign="right",o.textBaseline="middle";var h=this.yaxis;if(e)e(o,h);else for(var u=0;u<5;u++){var f=h.min+u*h.unit;o.fillText(r.yaxisfunc?r.yaxisfunc(f):f.toFixed(2),r.chartLeft-5,this.yRate*f+this.yBasic)}},t.prototype.drawHover=function(t,e){},t.prototype.setEvents=function(){var t=this,e=this.chartjs.canvas,n=this.chartjs.opts,r=n.events;if(!r||!n.inBrowser)return!1;r.forEach(function(n){e.addEventListener(n,function(e){var r=~n.indexOf("touch")?e.touches[0]:e,i=r.clientX,o=r.pageY-r.target.offsetTop;return t.drawHover(i,o),!1},!1)})},t}();e.default=o},,,,,,function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=n(13),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.init=function(){this._init(),this.drawer=new a.default(this),this.drawer.init()},e}(o.default);e.default=s},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),a=n(5),s=n(1),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.setDataset=function(){var t,e,n=this,r=this.chartjs,i=r.opts,a=i.data,s=i.datas,c=this.getBasicData(),h=c[0],u=c[1],f=i.range;f?(t=f.min,e=f.max-f.min):((e=u-h)||(e=1),e>2?e=4*Math.ceil(e/4):e*=1.2,(t=e>2?Math.floor(h):h)+e<u&&(t=h)),this.yaxis={min:t,max:t+e,range:e,unit:e/4},this.yRate=(30-r._chart.height+i.chartTop)/this.yaxis.range,this.yBasic=5-this.yaxis.max*this.yRate+i.chartTop;var l=a?a.length:s[0].length;l=l>1?l:2,this.xaxis={min:0,max:l-1,range:l,unit:1},this.xBasic=i.chartLeft,this.xRate=(r._chart.width-i.chartLeft-i.chartRight)/(l-1);var d=[];o.each(s,function(t){var e=[];1===t.length&&(t[1]=t[0]),o.each(t,function(t,r){e.push({x:Math.round(r*n.xRate+n.xBasic),y:t*n.yRate+n.yBasic,value:t})}),d.push(e)}),this.chartjs.datasets=d},e.prototype.drawLine=function(t){void 0===t&&(t=1);var e=this.chartjs,n=e.opts,r=e.ctx;r.lineWidth=1;var i=e._chart.height-24,a=function(e){var n=e.x,o=i*(1-t)+e.y*t;r.lineTo(n,o)},s=e.datasets;o.each(s,function(e,c){if(r.save(),n.allGradient||0===c){r.beginPath(),r.lineWidth=0,r.strokeStyle=n.backgroundColor,r.moveTo(n.chartLeft,i);var h=e.length;o.each(e,a),r.lineTo(e[h-1].x,i),r.closePath(),function(t){if(n.noGradient)return!1;var e=r.createLinearGradient(0,0,0,170),i=o.getColorRgb(t).join(",");e.addColorStop(0,"rgba("+i+", 0.3)"),e.addColorStop(.8,"rgba("+i+", 0.1)"),e.addColorStop(1,"rgba("+i+", 0.05)"),r.fillStyle=e,r.fill()}(n.colors[c]),r.stroke()}r.lineWidth=n.lineWidths&&n.lineWidths[c]||1,r.strokeStyle=n.colors[c],r.beginPath(),r.moveTo(s[c][0].x,i*(1-t)+s[c][0].y*t),o.each(s[c],a),r.stroke(),r.restore()}),r.save()},e.prototype.drawHover=function(t){var e=this,n=this.chartjs,r=n.opts;this.draw(r.inWeapp||null,!0);var i=n.ctx;if(t>n._chart.width-15||t<r.chartLeft)return!1;var a=Math.round((t-this.xBasic)/this.xRate),c=[],h=0,u=[],f=n.datasets;return o.each(f,function(t,n){var o=t[a];!r.hideHoverPoints&&o&&u.push(function(){e.drawPoint(i,o.x,o.y-1,r.colors[n],r.pointStyle,4,1)}),h=o.x,c.push(o.value)}),r.noHoverLine||(h+=.3,i.lineWidth=.5,i.strokeStyle=r.hoverLineColor,s.drawLine(i,h,6+r.chartTop,h,n._chart.height-25)),u.length&&o.each(u,function(t){return t()}),r.hover&&r.hover(a,c,r.xaxis[a],t),i.restore(),r.inWeapp&&n.canvas.draw(!0),a},e.prototype.draw=function(t,e){var n=this,r=this.chartjs.opts;this.clearCtn(!t),this.drawDashs(),t&&(this.setDataset(),this.drawTexts()),e||!r.inBrowser&&!r.inWeapp?this.drawLine():a.Animation({onProcess:function(t){n.clearCtn(!0),n.drawDashs(),n.drawLine(t),r.onAnimation&&r.onAnimation.call(n,t),r.inWeapp&&n.chartjs.ctx.draw(!0)},onAnimationFinish:r.onFinish})},e.prototype.init=function(){var t=this.chartjs.opts;this.draw(!0,t.noAnimation),this.setEvents(),t.inWeapp&&this.chartjs.canvas.draw()},e}(n(6).default);e.default=c}])});