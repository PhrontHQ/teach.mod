montageDefine("87344ee","demo/sorted-set-demo",{dependencies:["../sorted-set","../iterator"],factory:function(e,t,n){var r=e("../sorted-set"),i=new r;i.add(1),i.add(2),i.add(3),i.add(-3),i.add(-1),i.add(-2),i.log(),i.toArray().sort(function(){return Math.random()-.5}).forEach(function(e){console.log("get",e),i.get(e),i.log()}),console.log("add",0),i.add(0),i.log(),console.log("add another",0),i.add(0),i.log(),console.log("delete",0),i.delete(0),i.log(),console.log("delete",0),i.delete(0),i.log(),console.log("delete",1),i.delete(1),i.log(),console.log("\nreducible methods"),console.log("min",i.min()),console.log("max",i.max()),console.log("sum",i.sum()),console.log("average",i.average()),console.log("\nconstrained greatest and least");var i=new r([1,3,5,7,10]);i.log(),console.log(i.findGreatestLessThan(7).value),console.log(i.findLeastGreaterThan(6).value),console.log("\nrange iterator");var s=e("../iterator"),o=new s(i.iterate(2,10));o.forEach(function(e){console.log(e)}),console.log("\nset length");var i=new r([1,3,3,5,7,10]);console.log(i.length)}})