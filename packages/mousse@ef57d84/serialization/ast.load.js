montageDefine("ef57d84","serialization/ast",{dependencies:[],factory:function(e,t){(function(e){function t(){this.object=Object.create(null)}function n(e,t){this.root=e,this.value=t}function r(e,t){n.call(this,e,t)}function i(e,t){n.call(this,e,t)}function o(e,t){n.call(this,e,t)}function a(e){n.call(this,e,Object.create(null))}function s(e,t){n.call(this,e,t)}Object.defineProperties(t.prototype,{object:{value:null,writable:!0},setProperty:{value:function(e,t){null!=e&&(this.object[e]=t)}},getProperty:{value:function(e){return this.object[e]}},clearProperty:{value:function(e){delete this.object[e]}},hasProperty:{value:function(e){return e in this.object}},serialize:{value:function(e){return JSON.stringify(this,null,e)}},toJSON:{value:function(){var e,t=Object.create(null);for(var n in this.object)e=this.object[n],t[n]=e.toJSON?e.toJSON(n,1):e;return t}}}),Object.defineProperties(n.prototype,{root:{value:null,writable:!0},label:{value:null,writable:!0},value:{value:null,writable:!0},setLabel:{value:function(e){this.label&&this.root.clearProperty(this.label),this.label=e,this.root.setProperty(e,this)}},getLabel:{value:function(){return this.label}},clearLabel:{value:function(){this.root.clearProperty(this.label),this.label=null}},_getSerializationValue:{value:function(){return this.value}},toJSON:{value:function(e,t){var n=this._getSerializationValue();return 1===t?{value:n}:n}}}),r.prototype=Object.create(n.prototype,{constructor:{value:r},toJSON:{value:function(e,t){var n,r=this._getSerializationValue();return 1===t?{value:r}:this.label?(n=new s(this.root,this.label),n.toJSON()):r}}}),i.prototype=Object.create(r.prototype,{constructor:{value:i},setProperty:{value:function(e,t){null!=e&&(this.value[e]=t)}},getProperty:{value:function(e){return this.value[e]}},clearProperty:{value:function(e){delete this.value[e]}},getPropertyNames:{value:function(){return Object.keys(this.value)}}}),o.prototype=Object.create(r.prototype,{constructor:{value:o},_getSerializationValue:{value:function(){var e=this.value;return{"/":{source:e.source,flags:(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")}}}}}),a.prototype=Object.create(n.prototype,{constructor:{value:a},setProperty:{value:function(e,t){null!=e&&(this.value[e]=t)}},getProperty:{value:function(e){return this.value[e]}},clearProperty:{value:function(e){delete this.value[e]}},toJSON:{value:function(e,t){var n,r=this._getSerializationValue();return 1===t?r:(n=new s(this.root,this.label),n.toJSON())}}}),s.prototype=Object.create(n.prototype,{constructor:{value:s},_getSerializationValue:{value:function(){return{"@":this.value}}}}),e.Root=t,e.Value=n,e.ReferenceableValue=r,e.ObjectLiteral=i,e.RegExpObject=o,e.CustomObject=a,e.ObjectReference=s})(t)}});