option={tooltip:{trigger:"item",formatter:function(e){return`<span>${(e.value[1]*1).toFixed(1)}℃<br>${e.seriesName}<span>`}},legend:{orient:"horizontal",left:"center",bottom:"10",itemHeight:6,itemWidth:6,data:[{name:"低体温",icon:"circle",textStyle:{color:"#666"}},{name:"低体温",icon:"circle",textStyle:{color:"#666"}},{name:"低体温",icon:"circle",textStyle:{color:"#666"}},{name:"正常",icon:"circle",textStyle:{color:"#666"}},{name:"低热",icon:"circle",textStyle:{color:"#666"}},{name:"中度发烧",icon:"circle",textStyle:{color:"#666"}},{name:"过高热",icon:"circle",textStyle:{color:"#666"}}],textStyle:{color:"rgba(0,0,0,.3)",fontSize:10,fontWeight:300,padding:[0,1]},selectedMode:!1},grid:{top:"2%",left:"1%",right:"4%",bottom:"20%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,offset:0,data:["","07/10","07/11","07/12","07/13","07/14","07/15","07/16"],axisLine:{lineStyle:{color:"#ccc"}},axisLabel:{interval:0,textStyle:{color:"#999999",fontSize:"10"}},splitLine:{show:!0,interval:"auto",lineStyle:{color:["#ccc"],width:1,type:"solid"}},axisTick:{show:!1}},yAxis:{type:"value",axisLine:{lineStyle:{color:"#ccc"}},axisLabel:{formatter:"{value}",textStyle:{color:"#999999",fontSize:"12"}},splitLine:{lineStyle:{color:"#ccc"}},axisTick:{show:!1},min:function(e){return console.log(e,"123"),30},max:function(e){return 45},minInterval:.1},series:[{name:"低体温",type:"scatter",dataType:"xx",data:[[1,38],[1,39]],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#8898F6"},itemStyle:{normal:{color:"#8898F6"}},emphasis:{label:{show:!0,formatter:function(e){return e.data[3]},position:"bottom"}},markLine:{lineStyle:{color:"#333"},data:[{yAxis:36.25},{yAxis:37.25},{yAxis:38.25},{yAxis:39.25}]}},{name:"低体温",type:"scatter",dataType:"xx",data:[[1,38],[1,39]],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#8898F6"},itemStyle:{normal:{color:"#8898F6"}}},{name:"低体温",type:"scatter",dataType:"xx",data:[],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#8898F6"},itemStyle:{normal:{color:"#8898F6"}}},{name:"正常",type:"scatter",data:[],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#77CEC1"},itemStyle:{normal:{color:"#77CEC1"}}},{name:"低热",type:"scatter",data:[],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#F5BC3F"},itemStyle:{normal:{color:"#F5BC3F"}}},{name:"中度发烧",type:"scatter",data:[],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#D36033"},itemStyle:{normal:{color:"#D36033"}}},{name:"高热",type:"scatter",data:[],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#B74320"},itemStyle:{normal:{color:"#B74320"}}},{name:"过高热",type:"scatter",data:[],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#8D3216"},itemStyle:{normal:{color:"#8D3216"}}}]};
