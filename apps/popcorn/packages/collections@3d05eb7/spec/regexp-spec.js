require("../shim-regexp"),describe("RegExp",function(){describe("escape",function(){["{","a-b","...","\\x","[a-b]","^foo$",".?","()","1..3","[^a-z]"].forEach(function(e){it("should escape "+JSON.stringify(e),function(){var t=new RegExp("^"+RegExp.escape(e)+"$");expect(t.test(e)).toBe(!0)}),it("should escape case-insensitively "+JSON.stringify(e),function(){var t=new RegExp("^"+RegExp.escape(e)+"$","i");expect(t.test(e.toUpperCase())).toBe(!0)})})})})