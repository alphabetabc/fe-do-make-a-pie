let xLabel=["3.26","3.27","3.28","3.29","3.30","3.31"],L0=["40","60","22","85","50","40"],L1=["50","30","72","35","80","60"],L3=["20","10","22","5","50","20"];option={backgroundColor:"#0b112a",tooltip:{trigger:"axis"},legend:{align:"left",right:"30px",type:"plain",top:"10px",textStyle:{color:"#7ec7ff",fontSize:12},itemGap:25,itemWidth:18},grid:{top:"50px",left:"80px",right:"40px",bottom:"15%"},xAxis:[{type:"category",boundaryGap:!1,axisLine:{show:!0,lineStyle:{color:"#233653"}},axisLabel:{textStyle:{color:"#7ec7ff",padding:10,fontSize:12},formatter:function(o){return o}},splitLine:{show:!0,lineStyle:{color:"#192a44"}},axisTick:{show:!1},data:xLabel}],yAxis:[{name:"利用率",nameTextStyle:{color:"#7ec7ff",fontSize:12,padding:10},min:0,splitLine:{show:!0,lineStyle:{color:"#192a44"}},axisLine:{show:!0,lineStyle:{color:"#233653"}},axisLabel:{show:!0,textStyle:{color:"#7ec7ff",padding:10},formatter:function(o){return o===0?o:o+"%"}},axisTick:{show:!1}}],series:[{name:"L0",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:0,smooth:!0,lineStyle:{normal:{width:2,color:"rgba(84,131,255,1)"},borderColor:"rgba(0,0,0,.4)"},itemStyle:{color:"rgba(84,131,255,1)"},tooltip:{show:!0},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(84,131,255,.3)"},{offset:1,color:"rgba(84,131,255, 0)"}],!1),shadowColor:"rgba(25,163,223, 0.5)",shadowBlur:20}},data:L0},{name:"L1",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:0,smooth:!0,lineStyle:{normal:{width:2,color:"rgba(77,192,36,1)"}},itemStyle:{color:"rgba(77,192,36,1)"},tooltip:{show:!0},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(77,192,36,.3)"},{offset:1,color:"rgba(77,192,36, 0)"}],!1),shadowColor:"rgba(10,219,250, 0.5)",shadowBlur:20}},data:L1},{name:"L3",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:0,smooth:!0,lineStyle:{normal:{width:2,color:"rgba(248,172,6,1)"}},itemStyle:{color:"rgba(248,172,6,1)"},tooltip:{show:!0},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(248,172,6,.3)"},{offset:1,color:"rgba(248,172,6, 0)"}],!1),shadowColor:"rgba(10,219,250, 0.5)",shadowBlur:20}},data:L3}]};