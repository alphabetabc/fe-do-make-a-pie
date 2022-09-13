option={cwl:"mmHg",tooltip:{trigger:"item",formatter:function(e){return console.log(e,"param==="),`<span>${(e.value[1]*1).toFixed(0)}ss<br>${e.seriesName}<span>`}},legend:{orient:"horizontal",left:"center",bottom:"10",itemHeight:6,itemWidth:6,data:[{name:`严重
过低`,icon:"circle",textStyle:{color:"#666"}},{name:`低
血压`,icon:"circle",textStyle:{color:"#666"}},{name:`正常
血压`,icon:"circle",textStyle:{color:"#666"}},{name:`正常
高值`,icon:"circle",textStyle:{color:"#666"}},{name:`一级
血压`,icon:"circle",textStyle:{color:"#666"}},{name:`二级
血压`,icon:"circle",textStyle:{color:"#666"}},{name:`三级
血压`,icon:"circle",textStyle:{color:"#666"}}],textStyle:{color:"rgba(0,0,0,.3)",fontSize:10,fontWeight:300,padding:[0,1]},selectedMode:!1},grid:{top:"2%",left:"1%",right:"2%",bottom:"20%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,offset:0,data:["","07/10","07/11","07/12","07/13","07/14","07/15","07/16"],axisLine:{lineStyle:{color:"#ccc"}},axisLabel:{interval:0,textStyle:{color:"#999999",fontSize:"10"}},splitLine:{show:!0,interval:"auto",lineStyle:{color:["#ccc"],width:1,type:"solid"}},axisTick:{show:!1}},yAxis:{type:"value",minInterval:1,axisLine:{lineStyle:{color:"#ccc"}},axisLabel:{formatter:"{value}",textStyle:{color:"#999999",fontSize:"12"}},splitLine:{lineStyle:{color:"#ccc"}},axisTick:{show:!1}},series:[{name:`严重
过低`,type:"line",data:[[1,20],[1,60]],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#63CFFA"},itemStyle:{normal:{color:"#63CFFA"}}},{name:`低
血压`,type:"line",data:[[5,60],[5,80]],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#02C4C3"},itemStyle:{normal:{color:"#02C4C3"}}},{name:`正常
血压`,type:"line",data:[],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#91D049"},itemStyle:{normal:{color:"#91D049"}}},{name:`正常
高值`,type:"line",data:[],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#FFD900"},itemStyle:{normal:{color:"#FFD900"}}},{name:`一级
血压`,type:"line",data:[],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#FF9615"},itemStyle:{normal:{color:"#FF9615"}}},{name:`二级
血压`,type:"line",data:[],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#A30F04"},itemStyle:{normal:{color:"#A30F04"}}},{name:`三级
血压`,type:"line",data:[],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#A30F04"},itemStyle:{normal:{color:"#A30F04"}}}]};
