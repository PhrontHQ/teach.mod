var SortedArray=require("../sorted-array"),describeCollection=require("./collection"),describeDequeue=require("./dequeue"),describeOrder=require("./order");describe("SortedArray",function(){function e(e){return new SortedArray(e)}[SortedArray,e].forEach(function(e){describeDequeue(e),describeCollection(e,[1,2,3,4]),describeOrder(e)}),describe("non-uniqueness",function(){var e=SortedArray([1,2,3,1,2,3]);expect(e.slice()).toEqual([1,1,2,2,3,3])})})