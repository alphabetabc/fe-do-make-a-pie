option={backgroundColor:"blue",grid:{left:"4%",right:"4%",top:"5%",bottom:"3%"},xAxis:{type:"category",axisLabel:{formatter:"{value}",color:"#65F5FD",fontSize:14},axisLine:{lineStyle:{color:"rgba(255,255,255,0)"}},splitLine:{lineStyle:{type:"dashed",color:"#385B71"}},data:["1","2","3"]},yAxis:{type:"value",splitLine:{show:!0,lineStyle:{color:"#DBDBDB"}},axisLine:{show:!0,lineStyle:{color:"#DBDBDB"}},axisTick:{show:!1},axisLabel:{show:!1}},series:[{type:"bar",barWidth:"20%",itemStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#8EFED4"},{offset:1,color:"#306ADD"}])},data:[20,30,40]}]},myChart.setOption(option,!0);