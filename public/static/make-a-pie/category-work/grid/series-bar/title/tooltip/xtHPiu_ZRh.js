var colors=["#f00","#00f","#ff0","#0ff","#f0f"];option={title:{text:"世界人口总量",subtext:"数据来自网络"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{show:!1},yAxis:[{show:!0,type:"category",data:["html5","css","js","vue","node"],axisTick:{show:!1},axisLabel:{color:"#000"},axisLine:{show:!1}},{show:!0,type:"category",data:[70,33,60,78,69],axisTick:{show:!1},axisLabel:{color:"#000",formatter:"{value}%"},axisLine:{show:!1}}],series:[{name:"条",z:1,yAxisIndex:0,type:"bar",data:[70,33,60,78,69],itemStyle:{normal:{barBorderRadius:20,color:function(a){var e=colors.length;return colors[a.dataIndex%e]}}},barCategoryGap:5,barWidth:20,label:{show:!1,position:"inside",formatter:"{c}%"}},{name:"框",z:0,yAxisIndex:1,type:"bar",data:[100,100,100,100,100],barCategoryGap:5,barWidth:20,itemStyle:{color:"#DBE4EB",borderColor:"#F1F4F7",borderWidth:1,barBorderRadius:15}}]};
