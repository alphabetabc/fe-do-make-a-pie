option={backgroundColor:"black",tooltip:{trigger:"axis",axisPointer:{type:"cross"}},grid:{},xAxis:[{type:"category",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},data:["1月","2月","3月","4月","5月","6月","7月","8月"]}],yAxis:[{type:"value",min:0,max:50,interval:10,position:"left",axisTick:{show:!1},splitLine:{show:!1},axisLine:{show:!1},axisLabel:{formatter:function(e){return e<50?e:""},color:"#96F5F6"}},{type:"value",min:0,max:125,interval:25,position:"right",axisTick:{show:!1},splitLine:{show:!1},axisLine:{show:!1},axisLabel:{formatter:function(e){return e<125?e+"%":""},color:"#96F5F6"}}],series:[{type:"bar",yAxisIndex:0,data:[35,28,23,27,20,32,28,28],itemStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#3CEFCA"},{offset:1,color:"#3CB2DB"}])}},{type:"bar",yAxisIndex:1,data:[45,20,28,30,35,50,22,25],itemStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#ED7554"},{offset:1,color:"#EEA46A"}])}},{type:"line",yAxisIndex:0,data:[35,28,23,50,20,32,28,28],itemStyle:{color:"#52FEC1"},symbol:"circle",symbolSize:7}]};
