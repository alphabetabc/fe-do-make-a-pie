var option={tooltip:{trigger:"item",axisPointer:{type:"shadow"}},grid:{left:"2%",right:"4%",bottom:"14%",top:"16%",containLabel:!0},legend:{data:["关停总数","复机数","复机率"],left:"7%",top:"5%",textStyle:{color:"#666666"},itemWidth:15,itemHeight:10,itemGap:25},xAxis:{type:"category",data:["TZ21","TZ22","TZ24","TZ25","TZ26","TZ27","TZ28","TZ29","TZ30","TZ31","TZ32","TZ33","SZX开头","其他TZ开头"],axisLine:{lineStyle:{color:"#cdd5e2"}},axisLabel:{interval:0,textStyle:{color:"#666666"}}},yAxis:[{type:"log",min:1,logBase:3,axisLine:{show:!1,lineStyle:{color:"#cdd5e2"}},splitLine:{show:!1},axisLabel:{textStyle:{color:"#666666"}},axisLine:{lineStyle:{color:"#cdd5e2"}}},{type:"value",name:"百分比",nameTextStyle:{color:"#666666"},position:"right",axisLine:{lineStyle:{color:"#cdd5e2"}},splitLine:{show:!1},axisLabel:{show:!0,formatter:"{value} %",textStyle:{color:"#666666"}}}],series:[{name:"关停总数",type:"bar",barWidth:"12px",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#29acff"},{offset:1,color:"#4bdfff"}]),barBorderRadius:6}},data:[11,14,133,4,0,14,116,12,12,58,15,12,69,2]},{name:"复机数",type:"bar",barWidth:"12px",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#01c871"},{offset:1,color:"#55f49c"}]),barBorderRadius:6}},data:[0,1,9,0,0,3,0,2,0,0,1,0,39,0]},{name:"复机率",type:"line",yAxisIndex:1,smooth:!1,symbol:"circle",symbolSize:8,itemStyle:{normal:{color:"#ffa43a",borderColor:"rgba(255, 234, 0, 0.5)",borderWidth:5}},lineStyle:{color:"#ffa43a"},data:[0,7.14,6.77,0,0,21.43,0,16.67,0,0,6.67,0,56.52,0]}]};