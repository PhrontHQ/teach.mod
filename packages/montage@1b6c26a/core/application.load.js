montageDefine("1b6c26a","core/application",{dependencies:["core/core","core/target","window-loader/montage-window","core/dom","core/template"],factory:function(e,n){var t,a=(e("core/core").Montage,e("core/target").Target),s=e("window-loader/montage-window").MontageWindow;e("core/dom");var r=n.Application=a.specialize({eventManager:{value:null},parentApplication:{value:null},mainApplication:{get:function(){for(var e=this;e.parentApplication;)e=e.parentApplication;return e}},_windowsSortOrder:{value:"reverse-z-order"},windowsSortOrder:{get:function(){return null==this.parentApplication?this._windowsSortOrder:this.mainApplication.windowsSortOrder},set:function(e){null==this.parentApplication?-1!==["z-order","reverse-z-order","z-order","reverse-open-order"].indexOf(e)&&(this._windowsSortOrder=e):this.mainApplication.windowsSortOrder=e}},windows:{get:function(){var e;if(null==this.parentApplication){if(!this._windows){var e=new s;e.application=this,e.window=window,this.window=e,this._windows=[this.window],this._multipleWindow=!0}return this._windows}return this.mainApplication.windows}},_window:{value:null},window:{get:function(){if(!this._window&&this==this.mainApplication){var e=new s;e.application=this,e.window=window,this._window=e}return this._window},set:function(e){this._window||(this._window=e)}},attachedWindows:{value:[]},eventManagerForWindow:{value:function(e){return e.defaultEventMananger}},focusWindow:{get:function(){var e=this.windows,n=this.windowsSortOrder;if("z-order"==n)return e[0];if("reverse-z-order"==n)return e[e.length-1];for(var t in e)if(e[t].focused)return e[t]}},addEventListener:{value:function(e,n,t){Object.getPrototypeOf(r).addEventListener.call(this,e,n,t)}},removeEventListener:{value:function(e,n,t){Object.getPrototypeOf(r).removeEventListener.call(this,e,n,t)}},delegate:{value:null},nextTarget:{get:function(){return this.delegate}},openWindow:{value:function(e,n,t){var a,r,i=this,o=new s,l={location:!1,menubar:!1,resizable:!0,scrollbars:!0,status:!1,titlebar:!0,toolbar:!1},p={module:e,name:n,parent:window,callback:function(e,n){var t;a=e.document.application,o.window=e,o.application=a,o.component=n,a.window=o,i.attachedWindows.push(o),t=i.mainApplication.windowsSortOrder,"z-order"==t||"reverse-open-order"==t?i.windows.unshift(o):i.windows.push(o),r=document.createEvent("CustomEvent"),r.initCustomEvent("load",!0,!0,null),o.dispatchEvent(r)}};if(this!==this.mainApplication||this._multipleWindow||this.window,"object"==typeof t){var c,u,h="",d="";for(c in t)t.hasOwnProperty(c)&&(l[c]=t[c])}var m=["name"];for(c in l)-1==m.indexOf(c)&&(u=l[c],"boolean"==typeof u?u=u?"yes":"no":(u+="",u.match(/[ ,"]/)&&(u='"'+u.replace(/"/g,'\\"')+'"')),d+=h+c+"="+u,h=",");return window.require.loadPackage({name:"montage"}).then(function(e){var n=window.open(e.location+"window-loader/index.html","_blank",d);n.loadInfo=p}).done(),o}},attachWindow:{value:function(e){var n,t=e.application.parentApplication;return t!==this&&(t&&t.detachWindow(e),e.parentApplication=this,this.attachedWindows.push(e),n=this.mainApplication.windowsSortOrder,"z-order"==n||"reverse-open-order"==n?this.windows.unshift(e):this.windows.push(e),e.focus()),e}},detachWindow:{value:function(e){var n,t,a=this.windows;return void 0===e&&(e=this.window),t=e.application.parentApplication,t==this?(n=this.attachedWindows.indexOf(e),-1!==n&&this.attachedWindows.splice(n,1),n=a.indexOf(e),-1!==n&&a.splice(n,1),e.application.parentApplication=null):t&&t.detachWindow(e),e}},constructor:{value:function(){window.loadInfo&&!this.parentApplication&&(this.parentApplication=window.loadInfo.parent.document.application)}},_load:{value:function(t,a){var s,r=this;n.application=r,e.async("ui/component").then(function(n){return s=n.__root__,s.element=document,e("core/template").instantiateDocument(window.document,t).then(function(){r.callDelegateMethod("willFinishLoading",r),s.needsDraw=!0,a&&a(r)})}).done()}},_alertPopup:{value:null,enumerable:!1},_confirmPopup:{value:null,enumerable:!1},_notifyPopup:{value:null,enumerable:!1},_zIndex:{value:null},_isSystemPopup:{value:function(e){return"alert"===e||"confirm"===e||"notify"===e}},_createPopupSlot:{value:function(e){var n=document.createElement("div");document.body.appendChild(n),n.style.zIndex=e,n.style.position="absolute";var a=new t;return a.element=n,a.attachToParentComponent(),a}},getPopupSlot:{value:function(n,a,s){var r=this;e.async("ui/slot.reel/slot").then(function(e){t=t||e.Slot,n=n||"custom";var i,o,l=r._isSystemPopup(n);if(r.popupSlots=r.popupSlots||{},l)switch(n){case"alert":i=9004;break;case"confirm":i=9003;break;case"notify":i=9002}else r._zIndex=r._zIndex?r._zIndex+1:7e3,i=r._zIndex;o=r.popupSlots[n],o||(o=r.popupSlots[n]=r._createPopupSlot(i)),l||(o.element.style.zIndex=i),o.content=a,s.call(this,o)}).done()}},returnPopupSlot:{value:function(e){var n=this;if(n.popupSlots&&n.popupSlots[e]){var t=n.popupSlots[e];t.content=null}}},_getActivePopupSlots:{value:function(){var e=[];if(this.popupSlots){var n=Object.keys(this.popupSlots);if(n&&n.length>0){var t,a=0,s=n.length;for(a=0;s>a;a++)t=this.popupSlots[n[a]],t&&null!==t.content&&e.push(t)}}return e}}})}});