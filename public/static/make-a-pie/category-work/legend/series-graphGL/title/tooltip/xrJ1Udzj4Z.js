var uploadedDataURL="/asset/get/s/data-1499235712572-BkKKrbcNZ.gexf";myChart.showLoading(),$.get(uploadedDataURL,function(r){console.log(1111),myChart.hideLoading();for(var e=echarts.dataTool.gexf.parse(r),o=[],a=0;a<15;a++)o[a]={name:"类目"+a};e.nodes.forEach(function(t){t.itemStyle=null,t.value=t.symbolSize,t.symbolSize/=1.5,t.label={show:t.symbolSize>10,normal:{textStyle:{fontSize:12}}},t.category=t.attributes.modularity_class,t.draggable=!0}),option={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3","#fcd","#ccc"," #F0FFFF","blue"],title:{text:"天龙八部人物关系图",subtext:"Default layout",top:"bottom",left:"right"},tooltip:{},legend:[{data:o.map(function(t){return t.name})}],animationDuration:1500,animationEasingUpdate:"quinticInOut",series:[{name:"天龙八部人物",type:"graphGL",modularity:!0,data:e.nodes,links:e.links,categories:o,focusNodeAdjacency:!0,label:{normal:{position:"right",formatter:"{b}",textStyle:{fontSize:12}}},lineStyle:{normal:{color:"source",curveness:.3}}}]},myChart.setOption(option)},"xml");