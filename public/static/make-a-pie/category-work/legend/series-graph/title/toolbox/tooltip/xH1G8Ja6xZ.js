var uploadedDataURL="/asset/get/s/data-1495285435151-S1mpA2TlZ.json";$.getJSON(uploadedDataURL,function(t){var o=t[0],a=t[1],e=t[2];option={title:{text:"",top:"top",left:"center"},tooltip:{},legend:[{data:e.map(function(r){return r.name})}],toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!0},restore:{show:!0},saveAsImage:{show:!0}}},animationDuration:1500,animationEasingUpdate:"quinticInOut",series:[{name:"TAZ",type:"graph",symbol:"circle",data:o,edges:a,categories:e,focusNodeAdjacency:!0,roam:!0,label:{normal:{position:"right",formatter:"{b}"}},lineStyle:{normal:{curveness:0}}}]},option&&typeof option=="object"&&myChart.setOption(option,!0)});
