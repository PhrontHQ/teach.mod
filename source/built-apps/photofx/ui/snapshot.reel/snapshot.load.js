montageDefine("a005228","ui/snapshot.reel/snapshot",{dependencies:["montage","montage/ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("montage/ui/component").Component;t.Snapshot=r.create(i,{supportsUserMedia:{value:null},didCreate:{value:function(){console.log("createdSnapshot")}}})}})