var name_data=["项目副经理","机管员","施工员","资料员","安全员","其它工种"],vla_data=[2,1,1,0,0,0];option={grid:{show:!0},tooltip:{formatter:"{b}: {c}",trigger:"axis",axisPointer:{lineStyle:{color:"#ddd"}},backgroundColor:"rgba(255,255,255,1)",padding:[5,10],textStyle:{color:"#7588E4"},extraCssText:"box-shadow: 0 0 5px rgba(0,0,0,0.3)"},legend:{right:20,orient:"vertical",data:["工种人数"]},xAxis:{type:"category",data:name_data,boundaryGap:!1,splitLine:{show:!0,interval:"auto",lineStyle:{color:["#D4DFF5"]}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#609ee9"}},axisLabel:{margin:10,textStyle:{fontSize:14}}},yAxis:{type:"value",minInterval:1,splitLine:{lineStyle:{color:["#D4DFF5"]}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#609ee9"}},axisLabel:{margin:10,textStyle:{fontSize:14}}},series:[{name:"今日",type:"line",smooth:!0,showSymbol:!1,symbol:"circle",symbolSize:6,data:vla_data,areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(199, 237, 250,0.5)"},{offset:1,color:"rgba(199, 237, 250,0.2)"}],!1)}},itemStyle:{normal:{color:"#f7b851"}},lineStyle:{normal:{width:3}}}]};
