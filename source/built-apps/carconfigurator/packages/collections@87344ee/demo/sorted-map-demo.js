var SortedMap=require("../sorted-map"),map=new SortedMap;console.log("set 1 a"),map.set(1,"a"),map.log(),console.log("set 2 b"),map.set(2,"b"),map.log(),console.log("set 0, z"),map.set(0,"z"),map.log(),console.log("set 0, y"),map.set(0,"y"),map.log(),map.forEach(function(e,t){console.log(t+": "+e)}),console.log("got",map.get(1)),map.log(),console.log("got",map.get(0)),map.delete(0),console.log("got",map.get(0))