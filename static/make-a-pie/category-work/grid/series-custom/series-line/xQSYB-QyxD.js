var data=[[1,2,33],[2,2,42],[3,7,43],[4,5,22],[5,3,14],[6,3,223]];option={grid:{top:160,bottom:125},xAxis:{type:"time",maxInterval:3600*1e3*24,splitLine:{lineStyle:{color:"#ddd"}}},yAxis:[{name:"风速（节）",nameLocation:"middle",nameGap:35,axisLine:{lineStyle:{color:"#666"}},splitLine:{lineStyle:{color:"#ddd"}}}],series:[{name:"风向",type:"custom",renderItem:function(a,e){var o=e.coord([e.value(0),e.value(1)]),t=18;return{type:"path",shape:{pathData:"M31 16l-15-15v9h-26v12h26v9z",x:-t/2,y:-t/2,width:t,height:t},rotation:e.value(2)/180*Math.PI,position:o,style:e.style({stroke:"#555",lineWidth:1})}},encode:{x:0,y:1},data},{name:"风力",type:"line",symbol:"none",encode:{x:0,y:1},lineStyle:{normal:{color:"#aaa",type:"dotted"}},data,z:1}]},myChart.setOption(option);