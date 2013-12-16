montageDefine("4e043c7","compile-binder",{dependencies:["./compile-observer","./observers","./binders","./algebra"],factory:function(e,t,n){function i(e){return i.semantics.compile(e)}var r=e("./compile-observer");e("./observers");var a=e("./binders"),o=e("./algebra"),s={type:"value"},l={type:"literal",value:!0};n.exports=i,i.semantics={compilers:{property:a.makePropertyBinder,get:a.makeGetBinder,has:a.makeHasBinder,only:a.makeOnlyBinder,one:a.makeOneBinder,rangeContent:a.makeRangeContentBinder,mapContent:a.makeMapContentBinder,reversed:a.makeReversedBinder,and:a.makeAndBinder,or:a.makeOrBinder},compile:function(e){var t=this.compilers;if("default"===e.type)return this.compile(e.args[0]);if("literal"===e.type){if(null==e.value)return Function.noop;throw Error("Can't bind to literal: "+e.value)}if("equals"===e.type){var n=this.compile(e.args[0]),i=r(e.args[1]);return a.makeEqualityBinder(n,i)}if("if"===e.type){var u=r(e.args[0]),c=this.compile(e.args[1]),h=this.compile(e.args[2]);return a.makeConditionalBinder(u,c,h)}if("and"===e.type||"or"===e.type){var d=o(e.args[0],s),p=o(e.args[1],s),n=this.compile(d[0]),f=this.compile(p[0]),m=r(d[1]),v=r(p[1]),g=r(e.args[0]),i=r(e.args[1]);return this.compilers[e.type](n,f,g,i,m,v)}if("everyBlock"===e.type){var _=r(e.args[0]),b=o(e.args[1],l),y=this.compile(b[0]),w=r(b[1]);return a.makeEveryBlockBinder(_,y,w)}if("rangeContent"===e.type){var E,C=r(e.args[0]);try{E=this.compile(e.args[0])}catch(S){E=Function.noop}return a.makeRangeContentBinder(C,E)}if("defined"===e.type){var E=this.compile(e.args[0]);return a.makeDefinedBinder(E)}if("parent"===e.type){var E=this.compile(e.args[0]);return a.makeParentBinder(E)}if("with"===e.type){var C=r(e.args[0]),E=this.compile(e.args[1]);return a.makeWithBinder(C,E)}if(t.hasOwnProperty(e.type)){var T=e.args.map(r,r.semantics);return t[e.type].apply(null,T)}throw Error("Can't compile binder for "+JSON.stringify(e.type))}}}});