const data=[20,82,91,34,90,30,10];option={backgroundColor:"#041730",tooltip:{trigger:"axis",formatter:"{b} : {c}",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(53, 72, 105, 1)",opacity:.3}}},xAxis:{data:["功能1","功能2","功能3","功能4","功能5","功能6","功能7"],axisLine:{show:!1},axisLabel:{show:!0,textStyle:{color:"#B3D6FF"},rotate:-90},axisTick:{show:!1}},yAxis:{axisLine:{show:!1},axisLabel:{show:!1},splitLine:{show:!1},axisTick:{show:!1}},series:[{name:"a",tooltip:{show:!1},type:"bar",barWidth:7,itemStyle:{color:"#8AA7D8",opacity:.6},emphasis:{label:{show:!0,position:"top",offset:[0,-5],color:"#FFB977"}},data,barGap:0},{name:"b",tooltip:{show:!1},type:"pictorialBar",itemStyle:{color:"#CCDEF6"},symbol:"rect",symbolSize:["7","3"],symbolOffset:["0","-5"],symbolPosition:"end",data}]};