option={cwl:"mmol/L",tooltip:{borderColor:"#f00",trigger:"item",formatter:function(e){return console.log(e,'============== // name: "mmHg",'),`<span>${(e.value[1]*1).toFixed(1)}${glu_option.cwl}<br>${e.seriesName}<span>`}},legend:{orient:"horizontal",left:"center",bottom:"10",itemHeight:6,itemWidth:6,data:[{name:`严重
过低`,icon:"circle",textStyle:{color:"#666"}},{name:`血糖
偏低`,icon:"circle",textStyle:{color:"#666"}},{name:`血糖
正常`,icon:"circle",textStyle:{color:"#666"}},{name:`轻度
偏高`,icon:"circle",textStyle:{color:"#666"}},{name:`血糖
偏高`,icon:"circle",textStyle:{color:"#666"}},{name:`严重
过高`,icon:"circle",textStyle:{color:"#666"}}],textStyle:{color:"rgba(0,0,0,.3)",fontSize:10,fontWeight:300,padding:[0,1]},selectedMode:!1},grid:{top:"2%",left:"1%",right:"4%",bottom:"20%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,offset:0,data:["","07/10","07/11","07/12","07/13","07/14","07/15","07/16"],axisLine:{lineStyle:{color:"#ccc"}},axisLabel:{interval:0,textStyle:{color:"#999999",fontSize:"10"}},splitLine:{show:!1,interval:"auto",lineStyle:{color:["#ccc"],width:1,type:"solid"}},axisTick:{show:!1}},yAxis:[{type:"value",splitArea:{show:!0},minInterval:1,axisLine:{lineStyle:{color:"#ccc"}},axisLabel:{formatter:"{value}",textStyle:{color:"#ccc",fontSize:"12"}},splitLine:{lineStyle:{color:"#ccc"}},axisTick:{show:!1}},{name:"降雨量(mm)",nameLocation:"start",max:5,type:"value",inverse:!0,axisLine:{lineStyle:{color:"#ccc"}},axisTick:{show:!1}}],series:[{type:"scatter",name:`严重
过低`,data:[[1,20],[1,60]],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#66CDFB"},itemStyle:{normal:{color:"#66CDFB"}}},{name:`血糖
偏低`,type:"scatter",data:[[5,60],[5,80]],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#01C7BE"},itemStyle:{normal:{color:"#01C7BE"}}},{name:`血糖
正常`,type:"scatter",data:[],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#90D049"},itemStyle:{normal:{color:"#90D049"}}},{name:`轻度
偏高`,type:"scatter",data:[],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#FCD70A"},itemStyle:{normal:{color:"#FCD70A"}}},{name:`血糖
偏高`,type:"scatter",data:[],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#FD961B"},itemStyle:{normal:{color:"#FD961B"}}},{name:`严重
过高`,type:"scatter",data:[],symbol:"circle",symbolSize:10,showAllSymbol:!0,lineStyle:{color:"#EB6700"},itemStyle:{normal:{color:"#EB6700"}}}]};
