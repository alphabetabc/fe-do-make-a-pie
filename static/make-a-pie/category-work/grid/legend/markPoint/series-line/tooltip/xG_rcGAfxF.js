let dataC1=[20,30,60,40,50,30],dataC2=[20,30,60,40,50,30],dataC3=[20,30,60,40,50,30],xData=["-1F","1F","2F","3F","4F","5F"];var fontColor="#30eee9";option={backgroundColor:"transparent",grid:{left:"5%",right:"2%",top:"10%",bottom:"15%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:[{type:"category",boundaryGap:!1,axisLabel:{color:"rgba(67, 121, 253, 1)"},axisLine:{show:!0,lineStyle:{color:"rgba(17, 52, 131, 1)",width:1}},data:xData}],yAxis:[{show:!1,type:"value",axisLabel:{formatter:"{value}"},axisTick:{show:!1},splitLine:{show:!1},splitLine:{show:!1,lineStyle:{color:"#0a2b52",width:1,type:"solid"}}}],series:[{name:"",type:"line",stack:"总量",symbol:"circle",showSymbol:!1,symbolSize:8,itemStyle:{normal:{color:"#0092f6",lineStyle:{color:"#0092f6",width:1},areaStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:.4,color:"rgba(60, 70, 255, 0)"},{offset:1,color:"rgba(25, 125, 240, 1)"}])}}},markPoint:{itemStyle:{normal:{color:"red"}}},data:dataC1}]};
