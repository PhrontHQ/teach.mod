montageDefine("196fc31","test/simple/test-stream2-compatibility",{dependencies:["../common.js","../../lib/_stream_readable","assert","util","events"],factory:function(e){function t(){n.apply(this),this._buffer=new Buffer(100),this._buffer.fill("x"),this.on("data",function(){i++})}e("../common.js");var n=e("../../lib/_stream_readable"),a=e("assert"),s=e("util");e("events").EventEmitter;var i=0;s.inherits(t,n),t.prototype._read=function(){this.push(this._buffer),this._buffer=new Buffer(0)},new t,a.equal(i,1)}});