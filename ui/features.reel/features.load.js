montageDefine("01db155","ui/features.reel/features",{dependencies:["montage","montage/ui/component"],factory:function(n,s){var e=n("montage").Montage,a=n("montage/ui/component").Component;s.Features=e.create(a,{hasTemplate:{value:!0},convert:{value:function(n){return""+Number(Math.round(n))}},revert:{value:function(n){return""+Number(Math.round(n))}}})}});