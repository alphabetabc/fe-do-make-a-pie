var salvProName=[1,2,3,4],salvProValue1=[11,22,33,44],salvProValue2=[55,66,77,88];option={tooltip:{trigger:"axis",formatter:"{b}月份：{c}%"},grid:{height:"auto",left:"3%",right:"4%",bottom:"3%",containLabel:!0},legend:{top:"4%",right:"4%",itemHeight:18,itemWidth:18,data:[{name:"专用设备",type:"scroll"},{name:"通用设备",type:"scroll"}]},xAxis:[{type:"category",max:15,data:salvProName,axisLabel:{margin:20,interval:0,rotate:20,color:"#979797"},axisLine:{lineStyle:{color:"#cedbe9"}},axisTick:{show:!1}}],yAxis:[{type:"value",axisLabel:{color:"#999",textStyle:{fontSize:18}},axisLine:{lineStyle:{color:"#cedbe9"}},axisTick:{show:!1},splitLine:{lineStyle:{color:"#cedbe9",type:"dashed"}}}],series:[{name:"专用设备",type:"bar",barWidth:"20%",barCategoryGap:"85%",data:salvProValue1,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}]),barBorderRadius:[2,2,0,0]}}},{name:"通用设备",type:"bar",barWidth:"20%",barCategoryGap:"85%",data:salvProValue2,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#70F3C2"},{offset:.5,color:"#48D69E"},{offset:1,color:"#48D69E"}]),barBorderRadius:[2,2,0,0]}}}]};
