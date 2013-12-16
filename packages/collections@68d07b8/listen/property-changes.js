function PropertyChanges(){throw Error("This is an abstract interface. Mix it. Don't construct it")}require("../shim");var WeakMap=require("weak-map"),object_owns=Object.prototype.hasOwnProperty,propertyChangeDescriptors=new WeakMap,overriddenObjectDescriptors=new WeakMap;module.exports=PropertyChanges,PropertyChanges.debug=!0,PropertyChanges.prototype.getOwnPropertyChangeDescriptor=function(e){propertyChangeDescriptors.has(this)||propertyChangeDescriptors.set(this,{});var t=propertyChangeDescriptors.get(this);return object_owns.call(t,e)||(t[e]={willChangeListeners:[],changeListeners:[]}),t[e]},PropertyChanges.prototype.hasOwnPropertyChangeDescriptor=function(e){if(!propertyChangeDescriptors.has(this))return!1;if(!e)return!0;var t=propertyChangeDescriptors.get(this);return object_owns.call(t,e)?!0:!1},PropertyChanges.prototype.addOwnPropertyChangeListener=function(e,t,n){this.makeObservable&&!this.isObservable&&this.makeObservable();var i,r=PropertyChanges.getOwnPropertyChangeDescriptor(this,e);i=n?r.willChangeListeners:r.changeListeners,PropertyChanges.makePropertyObservable(this,e),i.push(t);var a=this;return function(){PropertyChanges.removeOwnPropertyChangeListener(a,e,i,n),a=null}},PropertyChanges.prototype.addBeforeOwnPropertyChangeListener=function(e,t){return PropertyChanges.addOwnPropertyChangeListener(this,e,t,!0)},PropertyChanges.prototype.removeOwnPropertyChangeListener=function(e,t,n){var i,r=PropertyChanges.getOwnPropertyChangeDescriptor(this,e);i=n?r.willChangeListeners:r.changeListeners;var a=i.lastIndexOf(t);if(-1===a)throw Error("Can't remove listener: does not exist.");i.splice(a,1),0===r.changeListeners.length+r.willChangeListeners.length&&PropertyChanges.makePropertyUnobservable(this,e)},PropertyChanges.prototype.removeBeforeOwnPropertyChangeListener=function(e,t){return PropertyChanges.removeOwnPropertyChangeListener(this,e,t,!0)},PropertyChanges.prototype.dispatchOwnPropertyChange=function(e,t,n){var i=PropertyChanges.getOwnPropertyChangeDescriptor(this,e);if(!i.isActive){i.isActive=!0;var r;r=n?i.willChangeListeners:i.changeListeners;var a=(n?"Will":"")+"Change",o="handleProperty"+a,s=e+"";s=s&&s[0].toUpperCase()+s.slice(1);var l="handle"+s+a;try{r.forEach(function(n){var i=n;if(n=n[l]||n[o]||n,!n.call)throw Error("No event listener for "+l+" or "+o+" or call on "+n);n.call(i,t,e,this)},this)}finally{i.isActive=!1}}},PropertyChanges.prototype.dispatchBeforeOwnPropertyChange=function(e,t){return PropertyChanges.dispatchOwnPropertyChange(this,e,t,!0)},PropertyChanges.prototype.makePropertyObservable=function(e){if(!Array.isArray(this)){if(!Object.isExtensible(this,e))throw Error("Can't make property "+JSON.stringify(e)+" observable on "+this+" because object is not extensible");var t;"object"==typeof this.__state__?t=this.__state__:(t={},Object.isExtensible(this,"__state__")&&Object.defineProperty(this,"__state__",{value:t,writable:!0,enumerable:!1})),t[e]=this[e],overriddenObjectDescriptors.has(this)||(n={},overriddenObjectDescriptors.set(this,n));var n=overriddenObjectDescriptors.get(this);if(!object_owns.call(n,e)){var i,r=this;Object.getOwnPropertyDescriptor(r,e);do{if(i=Object.getOwnPropertyDescriptor(r,e))break;r=Object.getPrototypeOf(r)}while(r);if(i=i||{value:void 0,enumerable:!0,writable:!0,configurable:!0},!i.configurable)throw Error("Can't observe non-configurable properties");if(n[e]=i,i.writable||i.set){var a;a="value"in i?{get:function(){return i.value},set:function(n){return n===i.value?n:(PropertyChanges.dispatchBeforeOwnPropertyChange(this,e,i.value),i.value=n,t[e]=n,PropertyChanges.dispatchOwnPropertyChange(this,e,n),n)},enumerable:i.enumerable,configurable:!0}:{get:function(){return i.get?i.get.apply(this,arguments):void 0},set:function(n){var r;return i.get&&(r=i.get.apply(this,arguments)),i.set&&i.set.apply(this,arguments),i.get&&(n=i.get.apply(this,arguments),t[e]=n),n===r?n:(PropertyChanges.dispatchBeforeOwnPropertyChange(this,e,r),PropertyChanges.dispatchOwnPropertyChange(this,e,n),n)},enumerable:i.enumerable,configurable:!0},Object.defineProperty(this,e,a)}}}},PropertyChanges.prototype.makePropertyUnobservable=function(e){if(!Array.isArray(this)){if(!overriddenObjectDescriptors.has(this))throw Error("Can't uninstall observer on property");var t=overriddenObjectDescriptors.get(this);if(!t[e])throw Error("Can't uninstall observer on property");var n=t[e];delete t[e];var i;"object"==typeof this.__state__?i=this.__state__:(i={},Object.isExtensible(this,"__state__")&&Object.defineProperty(this,"__state__",{value:i,writable:!0,enumerable:!1})),delete i[e],Object.defineProperty(this,e,n)}},PropertyChanges.getOwnPropertyChangeDescriptor=function(e,t){return e.getOwnPropertyChangeDescriptor?e.getOwnPropertyChangeDescriptor(t):PropertyChanges.prototype.getOwnPropertyChangeDescriptor.call(e,t)},PropertyChanges.hasOwnPropertyChangeDescriptor=function(e,t){return e.hasOwnPropertyChangeDescriptor?e.hasOwnPropertyChangeDescriptor(t):PropertyChanges.prototype.hasOwnPropertyChangeDescriptor.call(e,t)},PropertyChanges.addOwnPropertyChangeListener=function(e,t,n,i){return Object.isObject(e)?e.addOwnPropertyChangeListener?e.addOwnPropertyChangeListener(t,n,i):PropertyChanges.prototype.addOwnPropertyChangeListener.call(e,t,n,i):void 0},PropertyChanges.removeOwnPropertyChangeListener=function(e,t,n,i){return Object.isObject(e)?e.removeOwnPropertyChangeListener?e.removeOwnPropertyChangeListener(t,n,i):PropertyChanges.prototype.removeOwnPropertyChangeListener.call(e,t,n,i):void 0},PropertyChanges.dispatchOwnPropertyChange=function(e,t,n,i){return Object.isObject(e)?e.dispatchOwnPropertyChange?e.dispatchOwnPropertyChange(t,n,i):PropertyChanges.prototype.dispatchOwnPropertyChange.call(e,t,n,i):void 0},PropertyChanges.addBeforeOwnPropertyChangeListener=function(e,t,n){return PropertyChanges.addOwnPropertyChangeListener(e,t,n,!0)},PropertyChanges.removeBeforeOwnPropertyChangeListener=function(e,t,n){return PropertyChanges.removeOwnPropertyChangeListener(e,t,n,!0)},PropertyChanges.dispatchBeforeOwnPropertyChange=function(e,t,n){return PropertyChanges.dispatchOwnPropertyChange(e,t,n,!0)},PropertyChanges.makePropertyObservable=function(e,t){return e.makePropertyObservable?e.makePropertyObservable(t):PropertyChanges.prototype.makePropertyObservable.call(e,t)},PropertyChanges.makePropertyUnobservable=function(e,t){return e.makePropertyUnobservable?e.makePropertyUnobservable(t):PropertyChanges.prototype.makePropertyUnobservable.call(e,t)};