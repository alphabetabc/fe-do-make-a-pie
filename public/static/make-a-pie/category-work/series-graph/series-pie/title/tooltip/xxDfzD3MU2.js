data=[{name:"Node 1",x:300,y:300},{name:"Node 2",x:800,y:300},{name:"Node 3",x:550,y:100},{name:"Node 4",x:550,y:500}],seriesData=[{type:"graph",layout:"none",symbolSize:60,roam:!1,zlevel:1,label:{show:!0,position:"left"},edgeSymbol:["circle","arrow"],edgeSymbolSize:[4,10],edgeLabel:{fontSize:20},data,links:[{source:0,target:1,symbolSize:[5,20],label:{show:!0},lineStyle:{width:5,curveness:.2}},{source:"Node 2",target:"Node 1",label:{show:!0},lineStyle:{curveness:.2}},{source:"Node 1",target:"Node 3"},{source:"Node 2",target:"Node 3"},{source:"Node 2",target:"Node 4"},{source:"Node 1",target:"Node 4"}],lineStyle:{opacity:.9,width:2,curveness:0}}],option={title:{text:"Basic Graph"},tooltip:{},animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",series:seriesData},myChart.setOption(option),seriesData0=getPieSeries(data,myChart);function getPieSeries(o,r){return o.map(function(e,a){var t=r.convertToPixel({seriesIndex:0},[e.x,e.y]);return console.log(e,a,t),{name:e.name,id:a+"pie",zlevel:2,type:"pie",center:t,label:{formatter:"{c}",position:"inside"},radius:30,data:[{name:"工作",value:Math.round(Math.random()*24)},{name:"娱乐",value:Math.round(Math.random()*24)},{name:"睡觉",value:Math.round(Math.random()*24)}]}})}series=[...seriesData,...seriesData0],option.series=series,myChart.setOption(option);