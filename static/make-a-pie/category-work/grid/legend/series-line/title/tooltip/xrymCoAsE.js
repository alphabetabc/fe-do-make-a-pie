option={backgroundColor:"#fff",title:{text:"堆叠区域图"},tooltip:{z:1,trigger:"axis",position:function(r,o,l){var a=myChart.getModel().getSeriesByIndex(0),t=a.getData(),s=o[0],e=t.getItemLayout(s.dataIndex);return[e[0]-40,e[1]+30]},axisPointer:{type:"shadow",shadowStyle:{color:"white",shadowBlur:50,shadowOffsetY:20,shadowColor:"rgba(112, 155, 233, 0.5)"}}},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},splitArea:{show:!0,areaStyle:{color:["#fff","#eee"]}}}],series:[{name:"邮件营销",type:"line",stack:"总量",showSymbol:!1,symbolSize:15,symbol:"circle",itemStyle:{normal:{color:"#709be9",borderColor:"#fff",borderWidth:3,shadowColor:"rgba(0, 0, 0, 0.3)",shadowBlur:5,shadowOffsetX:2,shadowOffsetY:5}},lineStyle:{normal:{width:4,shadowColor:"rgba(112, 155, 233, 0.5)",shadowBlur:4,shadowOffsetY:4}},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"transparent"},{offset:.3,color:"transparent"},{offset:1,color:"rgba(112, 155, 233, 0.4)"}])}},smooth:!0,data:[120,132,101,134,90,230,210]}]};
