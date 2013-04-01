"use strict";function Iterator(e){if(!(this instanceof Iterator))return new Iterator(e);if(Array.isArray(e)||typeof e=="string")return Iterator.iterate(e);e=Object(e);if(e instanceof Iterator)return e;if(e.next)this.next=function(){return e.next()};else if(e.iterate){var t=e.iterate();this.next=function(){return t.next()}}else{if(Object.prototype.toString.call(e)!=="[object Function]")throw new TypeError("Can't iterate "+e);this.next=e}}module.exports=Iterator;var Object=require("./shim-object"),GenericCollection=require("./generic-collection");Iterator.prototype.forEach=GenericCollection.prototype.forEach,Iterator.prototype.map=GenericCollection.prototype.map,Iterator.prototype.filter=GenericCollection.prototype.filter,Iterator.prototype.every=GenericCollection.prototype.every,Iterator.prototype.some=GenericCollection.prototype.some,Iterator.prototype.any=GenericCollection.prototype.any,Iterator.prototype.all=GenericCollection.prototype.all,Iterator.prototype.min=GenericCollection.prototype.min,Iterator.prototype.max=GenericCollection.prototype.max,Iterator.prototype.sum=GenericCollection.prototype.sum,Iterator.prototype.average=GenericCollection.prototype.average,Iterator.prototype.flatten=GenericCollection.prototype.flatten,Iterator.prototype.zip=GenericCollection.prototype.zip,Iterator.prototype.enumerate=GenericCollection.prototype.enumerate,Iterator.prototype.sorted=GenericCollection.prototype.sorted,Iterator.prototype.group=GenericCollection.prototype.group,Iterator.prototype.reversed=GenericCollection.prototype.reversed,Iterator.prototype.toArray=GenericCollection.prototype.toArray,Iterator.prototype.toObject=GenericCollection.prototype.toObject,Iterator.prototype.iterator=GenericCollection.prototype.iterator,Iterator.prototype.constructClone=function(e){var t=[];return t.addEach(e),t},Iterator.prototype.mapIterator=function(e){var t=Iterator(this),n=arguments[1],r=0;if(Object.prototype.toString.call(e)!="[object Function]")throw new TypeError;return new t.constructor(function(){return e.call(n,t.next(),r++,t)})},Iterator.prototype.filterIterator=function(e){var t=Iterator(this),n=arguments[1],r=0;if(Object.prototype.toString.call(e)!="[object Function]")throw new TypeError;return new t.constructor(function(){var s;for(;;){s=t.next();if(e.call(n,s,r++,t))return s}})},Iterator.prototype.reduce=function(e){var t=Iterator(this),n=arguments[1],r=arguments[2],i=0,s;if(Object.prototype.toString.call(e)!="[object Function]")throw new TypeError;try{s=t.next(),arguments.length>1?n=e.call(r,n,s,i,t):n=s,i++}catch(o){if(isStopIteration(o)){if(arguments.length>1)return arguments[1];throw TypeError("cannot reduce a value from an empty iterator with no initial value")}throw o}try{for(;;)s=t.next(),n=e.call(r,n,s,i,t),i++}catch(o){if(isStopIteration(o))return n;throw o}},Iterator.prototype.concat=function(){return Iterator.concat(Array.prototype.concat.apply(this,arguments))},Iterator.prototype.dropWhile=function(e){var t=Iterator(this),n=arguments[1],r=!1,i;if(Object.prototype.toString.call(e)!="[object Function]")throw new TypeError;return t.forEach(function(s,o){if(!e.call(n,s,o,t))throw r=!0,i=s,StopIteration}),r?t.constructor([i]).concat(t):t.constructor([])},Iterator.prototype.takeWhile=function(e){var t=Iterator(this),n=arguments[1];if(Object.prototype.toString.call(e)!="[object Function]")throw new TypeError;return t.mapIterator(function(r,i){if(!e.call(n,r,i,t))throw StopIteration;return r})},Iterator.prototype.zipIterator=function(){return Iterator.unzip(Array.prototype.concat.apply(this,arguments))},Iterator.prototype.enumerateIterator=function(e){return Iterator.count(e).zipIterator(this)},Iterator.iterate=function(e){var t;return t=0,new Iterator(function(){if(typeof e=="object")while(!(t in e)){if(t>=e.length)throw StopIteration;t+=1}else if(t>=e.length)throw StopIteration;var n=e[t];return t+=1,n})},Iterator.cycle=function(e,t){arguments.length<2&&(t=Infinity);var n=function(){throw StopIteration};return new Iterator(function(){var r;try{return n()}catch(i){if(isStopIteration(i)){if(t<=0)throw i;return t--,r=Iterator.iterate(e),n=r.next.bind(r),n()}throw i}})},Iterator.concat=function(e){e=Iterator(e);var t=function(){throw StopIteration};return new Iterator(function(){var n;try{return t()}catch(r){if(isStopIteration(r))return n=Iterator(e.next()),t=n.next.bind(n),t();throw r}})},Iterator.unzip=function(e){return e=Iterator(e).map(Iterator),e.length===0?new Iterator([]):new Iterator(function(){var t,n=e.map(function(e){try{return e.next()}catch(n){if(!isStopIteration(n))throw n;t=!0}});if(t)throw StopIteration;return n})},Iterator.zip=function(){return Iterator.unzip(Array.prototype.slice.call(arguments))},Iterator.chain=function(){return Iterator.concat(Array.prototype.slice.call(arguments))},Iterator.range=function(e,t,n){return arguments.length<3&&(n=1),arguments.length<2&&(t=e,e=0),e=e||0,n=n||1,new Iterator(function(){if(e>=t)throw StopIteration;var r=e;return e+=n,r})},Iterator.count=function(e,t){return Iterator.range(e,Infinity,t)},Iterator.repeat=function(e,t){return(new Iterator.range(t)).mapIterator(function(){return e})},typeof isStopIteration=="undefined"&&(global.isStopIteration=function(e){return Object.prototype.toString.call(e)==="[object StopIteration]"}),typeof StopIteration=="undefined"&&(global.StopIteration={},Object.prototype.toString=function(e){return function(){return this===global.StopIteration||this instanceof global.ReturnValue?"[object StopIteration]":e.call(this,arguments)}}(Object.prototype.toString)),typeof ReturnValue=="undefined"&&(global.ReturnValue=function e(t){this.message="Iteration stopped with "+t,Error.captureStackTrace&&Error.captureStackTrace(this,e);if(!(this instanceof global.ReturnValue))return new global.ReturnValue(t);this.value=t},ReturnValue.prototype=Error.prototype)