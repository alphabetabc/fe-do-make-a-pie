var xData=["枪支","警车","警摩","船只","电台","警务通","执法仪"],echartData=[434,254,134,734,411,456,456];option={tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}}},grid:{borderWidth:0,top:"5%",bottom:"5%",left:"5%",right:"5%",textStyle:{color:"#fff"}},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"rgba(193, 207, 220, 1)",width:1}},axisTick:{show:!1},axisLabel:{interval:0,textStyle:{color:"rgba(0, 0, 0, 0.72)",fontSize:14}},splitLine:{show:!1},splitArea:{show:!1},data:xData}],yAxis:[{type:"value",minInterval:200,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{textStyle:{color:"rgba(0, 0, 0, 0.72)",fontSize:15}},splitLine:{show:!0,lineStyle:{color:"rgba(193, 207, 220, 1)"}}}],series:[{name:"装备情况",type:"bar",barMaxWidth:26,barGap:"10%",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(123, 200, 255, 1)"},{offset:1,color:"#359DF5"}]),label:{show:!1},barBorderRadius:[30,30,0,0]}},data:echartData}]};
