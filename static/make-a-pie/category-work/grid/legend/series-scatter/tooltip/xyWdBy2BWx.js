option={cwl:"mmol/L",tooltip:{trigger:"item",formatter:function(e){return console.log(e,"param==="),`<span>${(e.value[1]*1).toFixed(2)}ss<br>${e.seriesName}<span>`}},legend:{orient:"horizontal",left:"center",bottom:"10",itemHeight:6,itemWidth:6,data:[{name:`严重
偏低`,icon:"circle",textStyle:{color:"#666"}},{name:"正常",icon:"circle",textStyle:{color:"#666"}},{name:"偏高",icon:"circle",textStyle:{color:"#666"}},{name:`严重
偏高`,icon:"circle",textStyle:{color:"#666"}}],textStyle:{color:"rgba(0,0,0,.3)",fontSize:10,fontWeight:300,padding:[0,1]},selectedMode:!1},grid:{top:"2%",left:"1%",right:"4%",bottom:"20%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,offset:0,data:["","07/10","07/11","07/12","07/13","07/14","07/15","07/16"],axisLine:{lineStyle:{color:"#ccc"}},axisLabel:{interval:0,textStyle:{color:"#999999",fontSize:"10"}},splitLine:{show:!0,interval:"auto",lineStyle:{color:["#ccc"],width:1,type:"solid"}},axisTick:{show:!1}},yAxis:{type:"value",minInterval:1,axisLine:{lineStyle:{color:"#ccc"}},axisLabel:{formatter:"{value}",textStyle:{color:"#999999",fontSize:"12"}},splitLine:{lineStyle:{color:"#ccc"}},axisTick:{show:!1}},series:[{name:"偏低",type:"scatter",data:[[1,20]],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#0BBFC6"},itemStyle:{normal:{color:"#0BBFC6"}}},{name:"正常",type:"scatter",data:[[5,60]],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#91D143"},itemStyle:{normal:{color:"#91D143"}}},{name:"偏高",type:"scatter",data:[],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#FFD700"},itemStyle:{normal:{color:"#FFD700"}}},{name:`严重
偏高`,type:"scatter",data:[],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#EC6700"},itemStyle:{normal:{color:"#EC6700"}}}]};
