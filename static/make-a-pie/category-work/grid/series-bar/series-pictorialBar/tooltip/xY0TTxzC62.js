let xLabel=["案件","纠纷","事件","调查"];option={tooltip:{},backgroundColor:"#0f375f",animation:!1,grid:{top:"25%",bottom:"10%"},xAxis:{data:xLabel,axisLine:{show:!0,lineStyle:{color:"#11417a",type:"dashed"}},axisTick:{show:!1},axisLabel:{show:!0,margin:14,fontSize:14,textStyle:{color:"#fff"}}},yAxis:[{type:"value",gridIndex:0,interval:50,splitLine:{show:!0,lineStyle:{color:"#2C4B86",width:1}},splitLine:{lineStyle:{color:["#11417a"],type:"dashed"}},axisTick:{show:!0,lineStyle:{color:"#1EF4FF"}},axisLine:{show:!1},axisLabel:{show:!0,margin:14,fontSize:14,textStyle:{color:"#1EF4FF"}}}],series:[{name:"主营业务",type:"bar",barWidth:40,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#8F5BF3"},{offset:1,color:"#48B0F8"}])}},data:[120,180,100,200],z:10,zlevel:0,label:{show:!0,position:"top",distance:10,fontSize:16,color:"#fff"}},{type:"pictorialBar",itemStyle:{normal:{color:"#0F375F"}},symbolRepeat:"fixed",symbolMargin:6,symbol:"rect",symbolClip:!0,symbolSize:[40,3],symbolPosition:"start",symbolOffset:[0,-1],data:[120,180,100,200],width:25,z:0,zlevel:1}]};
