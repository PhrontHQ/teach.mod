var Montage=require("montage").Montage,Component=require("ui/component").Component,EditableText=exports.EditableText=Montage.create(Component,{hasTemplate:{value:!0},_hasFocus:{enumerable:!1,value:!1},_value:{enumerable:!1,value:null},_valueSyncedWithInputField:{enumerable:!1,value:!1},value:{get:function(){return this._value},set:function(e,t){this._value=e,t?this._valueSyncedWithInputField=!0:(this._valueSyncedWithInputField=!1,this.needsDraw=!0)}},_setValue:{value:function(){var e=this.element.value;if(e&&e.length>0&&this.converter){var t;try{t=this.converter.revert(e),this.error&&(this.error=null),Object.getPropertyDescriptor(this,"value").set.call(this,t,!0)}catch(n){this.error=n}}else Object.getPropertyDescriptor(this,"value").set.call(this,e,!0)}},converter:{value:null},_error:{value:!1},error:{get:function(){return this._error},set:function(e){this._error=e,this.needsDraw=!0}},_readOnly:{enumerable:!0,value:!1},readOnly:{get:function(){return this._readOnly},set:function(e){this._readOnly=e,this.needsDraw=!0}},_updateOnInput:{value:!0},updateOnInput:{get:function(){return!!this._updateOnInput},set:function(e){this._updateOnInput=e}},prepareForDraw:{enumerable:!1,value:function(){var e=this.element;e.value=this._inputValue,e.addEventListener("focus",this),e.addEventListener("input",this),e.addEventListener("change",this),e.addEventListener("blur",this)}},_setElementValue:{value:function(e){this.element.value=e}},draw:{enumerable:!1,value:function(){var e=this.element;this._valueSyncedWithInputField||this._setElementValue(this.converter?this.converter.convert(this._value):this._value),this._readOnly?e.setAttribute("readonly","readonly"):e.removeAttribute("readonly"),this.error?(e.classList.add("montage--invalidText"),e.title=this.error.message||""):(e.classList.remove("montage--invalidText"),e.title=""),this._drawSpecific()}},didDraw:{enumerable:!1,value:function(){if(this._hasFocus&&this._value!=null){var e=this._value.toString().length;this.element.setSelectionRange(e,e)}this._valueSyncedWithInputField=!0}},handleInput:{enumerable:!1,value:function(){this.converter?this.converter.allowPartialConversion===!0&&this.updateOnInput===!0&&this._setValue():this._setValue()}},handleChange:{enumerable:!1,value:function(e){this._setValue(),this._hasFocus=!1}},handleBlur:{enumerable:!1,value:function(e){this._hasFocus=!1}},handleFocus:{enumerable:!1,value:function(e){this._hasFocus=!0}}})