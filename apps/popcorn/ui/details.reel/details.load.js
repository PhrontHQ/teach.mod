montageDefine("9cc26e9","ui/details.reel/details",{dependencies:["montage/core/core","montage/ui/component"],factory:function(e,t,n){var r=e("montage/core/core").Montage,i=e("montage/ui/component").Component;t.Details=r.create(i,{_data:{value:null},data:{set:function(e){this._data=e,this.needsDraw=!0},get:function(){return this._data}},draw:{value:function(){if(this.data){var e=this.data.ratings.audience_rating,t=this.data.ratings.critics_rating;e=="Fresh"?this.aImage.style.backgroundPosition="0px 0px":e=="Rotten"?this.aImage.style.backgroundPosition="0px -25px":e=="Certified Fresh"?this.aImage.style.backgroundPosition="0px -50px":e=="Upright"?this.aImage.style.backgroundPosition="0px -75px":e=="Spilled"?this.aImage.style.backgroundPosition="0px -125px":this.aImage.style.backgroundPosition="0px -100px",t=="Fresh"?this.cImage.style.backgroundPosition="0px 0px":t=="Rotten"?this.cImage.style.backgroundPosition="0px -25px":t=="Certified Fresh"?this.cImage.style.backgroundPosition="0px -50px":t=="Upright"?this.cImage.style.backgroundPosition="0px -75px":t=="Spilled"?this.cImage.style.backgroundPosition="0px -125px":this.cImage.style.backgroundPosition="0px -100px"}}},handleRentButtonAction:{value:function(){window.open(this.data.links.alternate)}},handleTrailerButtonAction:{value:function(){this.dispatchEventNamed("openTrailer",!0,!0,this.data.title)}}})}})