option={tooltip:{trigger:"axis",formatter:"{b0}: {c0}%"},grid:{top:"15%",left:"5%",right:"5%",bottom:"15%",containLabel:!0},yAxis:{axisLine:{show:!1,color:"#000"},axisLabel:{textStyle:{color:"#000",fontSize:"12"}},axisTick:{show:!0,lineStyle:{color:"#000"}},splitLine:{show:!1}},xAxis:[{axisTick:"none",axisLine:"none",offset:"27",data:["1.5km","3km","5km","8km","8km以上"],axisLabel:{show:!0,textStyle:{color:"#000",fontSize:"12"},lineHeight:55}},{axisTick:"none",axisLine:"none",axisLabel:{show:!1},data:[0,0,0,0,0]},{name:"单位：%",nameGap:"50",data:[]}],series:[{name:"℃",type:"bar",xAxisIndex:0,data:[49.16,10.8,11.3,8.16,20.58],barWidth:15,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#93FE94"},{offset:.5,color:"#E4D225"},{offset:1,color:"#E01F28"}])}},z:2},{name:"℃",type:"line",label:{show:!0,position:"top",textStyle:{color:"#000",fontSize:16,fontWeight:"bold"}},xAxisIndex:0,data:[49.16,59.96,71.26,79.42,100],barWidth:20,smooth:!0,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#93FE94"},{offset:.5,color:"#E4D225"},{offset:1,color:"#E01F28"}])}},z:2,areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"rgba(147,254,148,0.4)"},{offset:.5,color:"rgba(228,210,37,0.4)"},{offset:1,color:"rgba(224,31,40,0.4)"}])}}},{name:"温度背景框",type:"bar",xAxisIndex:1,barGap:"-100%",data:[100,100,100,100,100],barWidth:20,itemStyle:{normal:{color:"rgba(0,0,0,0.05)",barBorderRadius:5}},z:1},{name:"外框",type:"bar",xAxisIndex:2,barGap:"-100%",data:[100,100,100,100,100],barWidth:16,itemStyle:{normal:{color:"rgba(0,0,0,0.05)",barBorderRadius:50}},z:0},{name:"外圆",type:"scatter",hoverAnimation:!1,data:[0,0,0,0,0],xAxisIndex:2,symbolSize:5,itemStyle:{normal:{color:"#93FE94",opacity:1}},z:2},{name:"白圆",type:"scatter",hoverAnimation:!1,data:[0,0,0,0,0],xAxisIndex:1,symbolSize:5,itemStyle:{normal:{color:"#0C2E6D",opacity:1}},z:1},{name:"外圆",type:"scatter",hoverAnimation:!1,data:[0,0,0,0,0],xAxisIndex:2,symbolSize:5,itemStyle:{normal:{color:"#4577BA",opacity:1}},z:0}]};
