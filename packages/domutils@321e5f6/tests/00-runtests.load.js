montageDefine("321e5f6","tests/00-runtests",{dependencies:["fs","assert"],factory:function(e){function t(e,n){if(typeof e!=typeof n)throw Error("types didn't match");if("object"==typeof e&&null!==e)for(var a in e){if(!(a in n))throw Error("result didn't contain property "+a);t(e[a],n[a])}else if(e!==n)throw Error("result doesn't equal expected")}function n(n){a.readdirSync(__dirname+n.dir).map(function(t){return"."===t[0]?!1:".json"===t.substr(-5)?JSON.parse(a.readFileSync(__dirname+n.dir+t)):e(__dirname+n.dir+t)}).forEach(function(e){if(e){var a=!1;i++,console.log("Testing:",e.name),n.test(e,function(n,o){s.ifError(n),t(e.expected,o),a?(i--,r++):a=!0})}}),console.log("->",n.dir.slice(1,-1),"started")}var a=e("fs"),s=e("assert"),i=0,r=0;["./02-dom_utils.js"].map(e).forEach(n),function o(){return 0!==i?process.nextTick(o):(console.log("Total tests:",r),void 0)}()}});