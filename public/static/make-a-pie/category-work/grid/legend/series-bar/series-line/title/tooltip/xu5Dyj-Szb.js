option={title:{text:"漏斗图",textStyle:{align:"center",color:"#fff",fontSize:20},top:"3%",left:"10%"},backgroundColor:"#fff",grid:{top:"25%",bottom:"10%"},tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0}}},legend:{data:["进入数","淘汰数"],top:"15%",textStyle:{color:"#111"}},xAxis:{data:["接收简历数","初筛","测评","小组面","HR面","专业面","offer","录用"],splitLine:{show:!0},axisLine:{show:!0},axisTick:{show:!0},axisLabel:{show:!0,textStyle:{color:"#111"}},axisLine:{lineStyle:{color:"#666"}}},yAxis:[{type:"value",name:"简历数",nameTextStyle:{color:"#111"},splitLine:{show:!1},splitLine:{show:!1},axisTick:{show:!0},axisLine:{show:!0},axisLabel:{show:!0,textStyle:{color:"#111"}},axisLine:{lineStyle:{color:"#666"}}},{show:!1,type:"value",name:"同比",nameTextStyle:{color:"#111"},position:"right",splitLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,formatter:"{value} %",textStyle:{color:"#111"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.0)","rgba(250,250,250,0.05)"]}}}],series:[{name:"销售水量",type:"line",yAxisIndex:1,smooth:!1,showAllSymbol:!0,symbol:"circle",symbolSize:10,itemStyle:{color:"#058cff"},lineStyle:{color:"#058cff"},areaStyle:{color:"rgba(5,140,255, 0.2)"},data:[420,380,280,250,190,180,130,50]},{name:"主营业务",type:"bar",barWidth:15,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00FFE3"},{offset:1,color:"#4693EC"}])}},data:[420,380,280,250,190,180,130,50]}]};
