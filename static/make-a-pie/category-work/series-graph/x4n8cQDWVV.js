let min=8,max=40,data=(()=>{let t=50,l=new Set;for(;t--;)l.add(Math.floor(Math.random()*(max-min))+min);return[...l].map(e=>({value:e,name:`${e}`}))})();function getScale([t,l],[e,o]){return function(a){return(a-t)/(l-t)*(o-e)+e}}let scale=getScale([min,max],[32,80]),scaleFontSize=getScale([min,max],[20,38]),scaleCategory=getScale([min,max],[0,4.99]);data=data.map((t,l)=>{let{value:e}=t;return Object.assign(t,{symbolSize:scale(e),category:Math.floor(scaleCategory(e)),label:{fontSize:parseInt(scaleFontSize(e))}})}),option={series:[{type:"graph",layout:"force",legendHoverLink:!1,force:{repulsion:160,edgeLength:70},categories:[{itemStyle:{color:"#409EFF"}},{itemStyle:{color:"#67C23A"}},{itemStyle:{color:"#E6A23C"}},{itemStyle:{color:"#F56C6C"}},{itemStyle:{color:"#ff7edb"}}],label:{normal:{show:!0}},data}]};
