const timeData=["2020-06-21","2020-06-22","2020-06-23","2020-06-24","2020-06-25","2020-06-26","2020-06-27"],valueData=[4,7,5,4,3,5,18];option={backgroundColor:"rgba(1, 88, 118, 1)",tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0, 255, 232,0.5)"},{offset:.5,color:"rgba(255, 255, 255,1)"},{offset:1,color:"rgba(0, 255, 232,0.5)"}],global:!1}}}},grid:{top:"15%",left:"10%",right:"5%",bottom:"15%"},xAxis:[{type:"category",axisLine:{show:!1,color:"#A582EA"},axisLabel:{color:"#fff",width:100},splitLine:{show:!1},boundaryGap:!1,data:timeData}],yAxis:[{type:"value",min:0,splitNumber:4,splitLine:{show:!0,lineStyle:{color:"#00BFF3",opacity:.23}},axisLine:{show:!1},axisLabel:{show:!0,margin:20,textStyle:{color:"#fff"}},axisTick:{show:!1}}],series:[{name:"液压异常报警",type:"line",smooth:!0,showAllSymbol:!0,symbol:"circle",symbolSize:10,lineStyle:{normal:{color:"#A582EA"}},label:{show:!0,position:"top",textStyle:{color:"#fff"}},itemStyle:{color:"#A582EA",borderColor:"#A582EA",borderWidth:2},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(43,193,145,0.3)"},{offset:1,color:"rgba(43,193,145,0)"}],!1)}},data:valueData,markPoint:{label:{normal:{textStyle:{color:"#fff"}}},data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]}}]};
