var data_val=[80,43,35,54,76,51,36,66,55,46,82,36,16],xAxis_val=["5","10","15","20","25","30","35","40","45","50","55","60"],option={title:{text:"健康度指标",top:"1%",left:"2%",padding:[10,25],textStyle:{color:"#696a69"},borderColor:"#dedede",borderWidth:2},legend:{top:"1%",right:"2%",data:["健康度"],textStyle:{color:"#5c6076"}},grid:{left:10,top:"10%",bottom:40,right:20,containLabel:!0},tooltip:{show:!0,backgroundColor:"#384157",borderColor:"#384157",borderWidth:1,formatter:"{b}:{c}",extraCssText:"box-shadow: 0 0 5px rgba(0, 0, 0, 1)"},dataZoom:[{type:"inside",orient:"horizontal"},{type:"slider",orient:"horizontal",left:"8%",right:"5%"}],xAxis:{data:xAxis_val,boundaryGap:!1,axisLine:{show:!0,lineStyle:{color:"#a8b7c1",width:2}},axisTick:{show:!0,length:10,lineStyle:{color:"#a8b7c1",width:2}},axisLabel:{margin:12,textStyle:{color:"#7a8fa1"}}},yAxis:{max:100,axisLine:{show:!0,lineStyle:{color:"#a8b7c1",width:2}},axisTick:{show:!0,length:15,lineStyle:{color:"#a8b7c1",width:2}},axisLabel:{margin:17,textStyle:{color:"#7a8fa1"}},splitLine:{show:!1}},series:[{type:"line",name:"健康度",symbolSize:12,animation:!1,hoverAnimation:!1,data:data_val,symbol:"circle",label:{normal:{show:!0,position:"top",textStyle:{color:"#3EACFF"}}},lineStyle:{normal:{opacity:0}},itemStyle:{normal:{color:"#576f86",shadowColor:"#3EACFF",shadowBlur:10}},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#3EACFF"},{offset:1,color:"#ffffff"}],!1),opacity:.8}}}]};myChart.setOption(option);