var xData=["2021年1月","2021年2月","2021年3月","2021年4月","2021年5月"];option={backgroundColor:"#232d36",tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0, 255, 233,0)"},{offset:.5,color:"rgba(255, 255, 255,1)"},{offset:1,color:"rgba(0, 255, 233,0)"}],global:!1}}}},grid:{top:"15%",left:"10%",right:"5%",bottom:"15%"},legend:{data:["转入","转出"],textStyle:{color:"#fff",align:"center",fontSize:16},x:"center"},xAxis:[{type:"category",axisLine:{show:!0,lineStyle:{color:"#85B1B4"}},axisTick:{show:!1},axisLabel:{color:"#fff",margin:6},splitLine:{show:!1},boundaryGap:["5%","5%"],data:xData}],yAxis:[{type:"value",min:0,splitNumber:4,splitLine:{show:!1},axisLine:{show:!0,lineStyle:{color:"#85B1B4"}},axisLabel:{show:!0,margin:10,textStyle:{color:"#fff"}},axisTick:{show:!1}}],series:[{name:"转入",type:"line",showAllSymbol:!0,symbol:"circle",symbolSize:4,lineStyle:{normal:{color:"#FF8736"}},label:{show:!1},itemStyle:{color:"#FF8736",borderColor:"#FF8736",borderWidth:2},data:[4,7,5,4,3,5,8]},{name:"转出",type:"line",showAllSymbol:!0,symbol:"circle",symbolSize:4,lineStyle:{normal:{color:"#13EFB7"}},label:{show:!1},itemStyle:{color:"#13EFB7",borderColor:"#13EFB7",borderWidth:2},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(81,150,164,0.3)"},{offset:1,color:"rgba(81,150,164,0)"}],!1)}},data:[3,5,4,2,1,7,6]}]};