option={backgroundColor:"#FFFFFF",barWidth:15,tooltip:{trigger:"item",borderColor:"rgba(251, 212, 55, 1)",textStyle:{color:"rgba(255, 255, 255, 1)",fontSize:12,fontWeight:"bold",fontFamily:"PingFang SC"},backgroundColor:"rgba(251, 212, 55, 1)",formatter:function(e){return e.name+"："+e.value}},xAxis:{type:"value",splitLine:{lineStyle:{color:"rgba(224, 224, 226, 1)",type:"dashed"}},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{textStyle:{color:"rgba(153, 153, 153, 1)",fontSize:12,fontWeight:800}}},yAxis:{type:"category",data:["旅游","自然资源","滨海北","住建局","宣传","公安"],splitLine:{show:!1},axisTick:{show:!1},axisLine:{lineStyle:{color:"#E0E0E2"}},axisLabel:{textStyle:{color:"rgba(142, 142, 142, 1)",fontSize:12,fontWeight:500}}},series:[{type:"bar",name:"产出",barWidth:19,itemStyle:{normal:{label:{show:!1,position:"insideRight",textStyle:{color:"#FFFFFF",fontSize:16,fontWeight:600}},color:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"rgba(48, 187, 240, 1)"},{offset:1,color:"rgba(48, 187, 240, 1)"}]),barBorderRadius:4}},emphasis:{itemStyle:{color:"rgba(251, 212, 55, 1)"}},data:[19,29,39,81,29,39]}]};