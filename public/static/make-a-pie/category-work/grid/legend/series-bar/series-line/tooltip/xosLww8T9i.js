var a=15,b=18,xAxisTextColor="#FFFFFF",legendColor="#FFFFFF",option={backgroundColor:"#000000",tooltip:{trigger:"axis"},grid:{left:"20%"},legend:{data:[{name:"1",icon:"circle"},{name:"2",icon:"circle"},{name:"3",icon:"roundRect"}],orient:"vertical",x:"60",y:"70",textStyle:{fontSize:a,color:legendColor}},xAxis:{type:"category",data:[1,2,3,4,5,6,7],axisLabel:{textStyle:{fontSize:a,color:xAxisTextColor}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},yAxis:[{name:"条",nameTextStyle:{color:xAxisTextColor,fontSize:a},type:"value",splitLine:{show:!1,lineStyle:{type:"dotted"}},axisLabel:{formatter:"{value}",textStyle:{color:xAxisTextColor,fontSize:a}},axisTick:{show:!1},axisLine:{show:!1}},{name:"%",nameTextStyle:{color:xAxisTextColor,fontSize:a},type:"value",splitLine:{show:!1},axisLabel:{formatter:"{value}",textStyle:{color:xAxisTextColor,fontSize:a}},axisTick:{show:!1},axisLine:{show:!1}}],series:[{name:"1",type:"bar",yAxisIndex:0,barWidth:20,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#8ed877"},{offset:1,color:"#3ec0b3"}]),barBorderRadius:100,label:{show:!1,position:"top",textStyle:{color:"#fffff5",fontSize:b}}}},data:[1,2,3,4,5,6,7]},{name:"2",type:"bar",yAxisIndex:0,barWidth:20,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#3f96fb"},{offset:1,color:"#6b4aef"}]),barBorderRadius:100,label:{show:!1,position:"top",textStyle:{color:"#fffff5",fontSize:b}}}},data:[1,2,3,4,5,6,7]},{name:"3",type:"line",yAxisIndex:1,symbol:"emptyCircle",symbolSize:0,smooth:!0,itemStyle:{normal:{lineStyle:{width:3,type:"solid"},color:"#BF55C7",label:{show:!1,position:"top",textStyle:{color:"#fffff5",fontSize:b}}}},data:[1,2,3,4,4,3,2]}]};