option={backgroundColor:"#a5abb1",tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#57617B"}}},grid:{top:"10px",left:"5px",right:"15px",bottom:"10px",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,axisTick:{show:!1},axisLine:{lineStyle:{color:"#192c4f"}},axisLabel:{interval:0,show:!0,textStyle:{color:"#87b3cb"}},data:["机柜","服务器","网络设备","安全机","动环"]}],yAxis:[{type:"value",name:"单位/个",axisTick:{show:!1},axisLine:{lineStyle:{color:"#192c4f"}},axisLabel:{textStyle:{fontSize:12,color:"#87b3cb"}},splitLine:{show:!0,lineStyle:{color:["#060f2b"],width:1,type:"solid"}}}],visualMap:{type:"piecewise",top:10,right:10,pieces:[{gt:0,lte:10,color:"rgba(1,143,98,0.4)"},{gt:10,lte:20,color:"rgba(232,206,52,0.4)"},{gt:20,lte:30,color:"rgba(233,143,50,0.4)"},{gt:30,lte:40,color:"rgba(186,4,50,0.4)"},{gt:40,lte:50,color:"rgba(93,3,145,0.4)"},{gt:50,color:"rgba(114,4,36,0.4)"}],outOfRange:{color:"RGB(180,228,255)"}},series:[{name:"A",type:"line",symbol:"arrow",symbolSize:5,showSymbol:!0,lineStyle:{normal:{width:5}},areaStyle:{},itemStyle:{},data:[50,70,25,60,50]},{name:"C",type:"line",symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:1}},areaStyle:{},itemStyle:{},data:[40,90,45,80,30]}]};