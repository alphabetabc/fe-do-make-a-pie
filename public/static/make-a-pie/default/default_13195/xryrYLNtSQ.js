var dataAll=[[30,14,28,49,60,9,44],[2,7,3,2,0,1,8]];option={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["bar","bar2"],align:"left"},grid:[{x:"7%",y:"7%",width:"78%",height:"38%"},{x:"7%",y2:"12.3%",width:"78%",height:"38%"}],xAxis:[{gridIndex:0,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{show:!1},nameGap:"50"},{gridIndex:1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisLabel:{show:!1},axisTick:{show:!1}}],yAxis:[{gridIndex:0,min:0,max:60,splitLine:{lineStyle:{type:"dashed"}}},{gridIndex:1,min:0,max:10,inverse:!0,splitLine:{lineStyle:{type:"dashed"}}}],series:[{name:"bar",type:"bar",xAxisIndex:0,yAxisIndex:0,data:dataAll[0],itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:1,color:"rgb(199,154,180)"},{offset:0,color:"rgb(143,139,209)"}])}},barWidth:20,label:{normal:{show:!0,position:"top"}}},{name:"bar2",type:"bar",xAxisIndex:1,yAxisIndex:1,data:dataAll[1],itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:1,color:"rgb(210,184,206)"},{offset:0,color:"rgb(230,176,176)"}])}},barWidth:20,label:{normal:{show:!0,position:"bottom"}}}]};