montageDefine("196fc31","test/simple/test-stream2-read-sync-stack",{dependencies:["../common","assert","../../readable"],factory:function(e){e("../common");var t=e("assert"),n=e("../../readable").Readable,a=new n,s=262144;process.maxTickDepth=s+2;var i=0;a._read=function(){var e=i++===s?null:new Buffer(1);a.push(e)},a.on("readable",function(){a._readableState.length%256||console.error("readable",a._readableState.length),a.read(2*s)});var r=!1;a.on("end",function(){r=!0}),a.read(0),process.on("exit",function(){t(r),console.log("ok")})}});