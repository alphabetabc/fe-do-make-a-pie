var Xdata=["2020-01","2020-02","2020-03","2020-04","2020-05","2020-06","2020-07"],Ydata=[0,2,4,6,8,10],LineYdata=[1.5,1.5,1.5,1.5,1.5,1.5,1.5],ydata=[.1,1.05,.34,.71,.04,.47,.15],option={grid:{left:"15%"},legend:{show:!0,left:"right",margin:[0,40],selectedMode:!1,y:"top",data:["氨氮标准值","氨氮"],textStyle:{fontSize:16,color:"#fff"}},xAxis:[{type:"category",data:Xdata,axisLine:{lineStyle:{color:"rgba(0, 255, 234, 0.1)"}},axisLabel:{fontSize:14,color:"#eee"}}],yAxis:[{type:"value",axisTick:{show:!1},nameTextStyle:{fontSize:16,margin:[20,10]},splitLine:{show:!1},axisLine:{show:!1,lineStyle:{color:"#eee"}},axisLabel:{fontSize:20}},{type:"value",axisTick:{show:!1},nameTextStyle:{fontSize:20},splitLine:{lineStyle:{color:"rgba(0, 255, 234, 0.3)"}},axisLabel:{fontSize:20},axisLine:{show:!1,lineStyle:{color:"#eee"}}}],series:[{name:"氨氮",type:"bar",data:ydata,barWidth:20,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0, 255, 234, 0.6)"},{offset:1,color:"rgba(0, 255, 234, 0.2)"}])}}},{name:"氨氮标准值",type:"line",yAxisIndex:1,data:LineYdata,barWidth:10,symbol:"circle",itemStyle:{normal:{color:"rgba(0, 255, 234, 0.8)",background:"rgba(0, 255, 234, 0.8)",barBorderRadius:9,lineStyle:{type:"dotted",color:"rgba(0, 255, 234, 0.8)"}}}}]};
