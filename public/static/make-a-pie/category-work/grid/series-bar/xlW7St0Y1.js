var data=[88,58,30,35],titlename=["正常","违章","漏气","软管老化"],valdata=[583,334,234,263],myColor=["#1089E7","#F57474","#56D0E3","#F8B448"];option={backgroundColor:"#fff",xAxis:{show:!1},yAxis:[{show:!0,data:titlename,inverse:!0,axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:function(a,e){var t=myColor.length;return myColor[e%t]}},formatter:function(a,e){return["{title|"+a+"} "].join(`
`)},rich:{}}},{show:!0,inverse:!0,data:valdata,axisLabel:{textStyle:{color:function(a,e){var t=myColor.length;return myColor[e%t]}}},axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1}}],series:[{name:"条",type:"bar",yAxisIndex:0,data,barWidth:30,itemStyle:{normal:{barBorderRadius:30,color:function(a){var e=myColor.length;return myColor[a.dataIndex%e]}}},label:{normal:{show:!0,position:"inside",formatter:"{c}%"}}}]};
