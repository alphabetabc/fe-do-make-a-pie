option={title:{left:"left",text:"概率",show:!1},tooltip:{trigger:"axis",formatter:"{a}:{c}",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{show:!1,top:"30",bottom:"60",right:"60",left:"60"},legend:{show:!0,selectedMode:"single",bottom:10,left:50,textStyle:{color:"#666",fontSize:12},itemGap:20,data:["设备一","设备二","设备三"],inactiveColor:"#ccc"},xAxis:[{type:"category",data:["济南","青岛","烟台","威海","潍坊","东营","日照","滨州","莱芜","淄博","德州","聊城","临沂","泰安","菏泽","济宁","枣庄"],axisPointer:{type:"shadow"},axisTick:{show:!0,interval:0}}],yAxis:[{type:"value",name:"数量",show:!0,interval:50},{type:"value",name:"概率",min:0,max:100,interval:10,axisLabel:{formatter:"{value} %"}}],series:[{name:"设备一",type:"bar",data:[900,800,700,680,650,640,600,570,680,650,640,600,570,450,400,380,300],barWidth:"50%"},{name:"设备一",type:"line",yAxisIndex:1,data:[75,65,85,66,45,55,56,42,78,69,70,36,42,50,65,75,80],symbolSize:10,itemStyle:{normal:{color:"#DDA0DD"}}}]};