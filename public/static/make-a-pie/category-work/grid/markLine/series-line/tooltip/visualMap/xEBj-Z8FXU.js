option={tooltip:{trigger:"axis"},xAxis:[{type:"category",boundaryGap:!1,axisTick:{alignWithLabel:!0},axisLabel:{textStyle:{fontSize:20,fontWeight:"bold"},formatter:function(o,e){return e==0?"":o+"月"}},axisLine:{lineStyle:{color:"#2E75B6",shadowColor:"#2E75B6",shadowOffsetX:"24",width:5},symbol:["none","arrow"],symbolSize:[13,20],symbolOffset:[0,40]}}],yAxis:{type:"value",splitNumber:5,max:150,splitLine:{lineStyle:{type:"dashed",color:"#DDD"}},axisLabel:{show:!1,textStyle:{fontSize:20,fontWeight:"bold"}},axisLine:{lineStyle:{color:"#2E75B6",shadowColor:"#2E75B6",shadowOffsetY:"-24",width:5},symbol:["none","arrow"],symbolSize:[13,20],symbolOffset:[0,40]},nameTextStyle:{color:"#999"},splitArea:{show:!1}},visualMap:{type:"piecewise",text:["High","Low"],show:!1,dimension:0,seriesIndex:0,pieces:[{gt:0,lte:1,color:"#9DD3E8"},{gt:1,lte:2,color:"#F39494"},{gt:2,lte:3,color:"rgba(178,219,158,0.5)"},{gt:3,lte:4,color:"rgba(178,219,158,0.7)",formatter:"444444444"},{gt:4,lte:5,color:"rgba(178,219,158,1)"},{gt:5,lte:6,color:"rgba(135,155,215,0.7)"},{gt:6,lte:7,color:"rgba(135,155,215,1)"}]},series:[{name:"成长阶段",type:"line",symbol:"emptyCircle",showAllSymbol:!0,symbolSize:12,hoverAnimation:!1,data:[[0,0],[1,0],[12,30],[24,75],[36,95],[48,104],[60,110],[72,116],[84,120]],areaStyle:{},lineStyle:{normal:{width:5,color:"#f26264"}},itemStyle:{normal:{color:"#fff",borderColor:"#f26264"}},smooth:!0,markLine:{symbol:"none",data:[[{name:"筹备期",coord:[0,25],symbol:"arrow",label:{fontSize:18,formatter:["{a|第1阶段：}","{b|筹备期}"].join(`
`),rich:{a:{color:"#333",lineHeight:28,fontSize:18},b:{color:"#10243F",fontWeight:"bold",fontSize:18}},position:"insideMiddleTop"},lineStyle:{normal:{color:"#708AB7",width:2,type:"solid"}}},{coord:[1,25],symbol:"arrow"}],[{name:"培育期",coord:[1,60],symbol:"arrow",label:{fontSize:18,formatter:["{a|第2阶段：}","{b|培育期}"].join(`
`),rich:{a:{color:"#333",lineHeight:28,fontSize:18},b:{color:"#632523",fontWeight:"bold",fontSize:18}},position:"insideMiddleTop"},lineStyle:{normal:{color:"#708AB7",width:2,type:"solid"}}},{coord:[2,60],symbol:"arrow"}],[{name:"成长期",coord:[2,120],symbol:"arrow",label:{fontSize:18,formatter:"{a|第3阶段：}{b|成长期}",rich:{a:{color:"#333",lineHeight:28,fontSize:18},b:{color:"#E87A0A",fontWeight:"bold",fontSize:18}},position:"insideMiddleTop"},lineStyle:{normal:{color:"#708AB7",width:2,type:"solid"}}},{coord:[5,120],symbol:"arrow"}],[{name:"成熟期",coord:[5,130],symbol:"arrow",label:{fontSize:18,formatter:"{a|第4阶段：}{b|成熟期}",rich:{a:{color:"#333",lineHeight:28,fontSize:18},b:{color:"#C2524D",fontWeight:"bold",fontSize:18}},position:"insideMiddleTop"},lineStyle:{normal:{color:"#708AB7",width:2,type:"solid"}}},{coord:[7,130],symbol:"arrow"}],[{name:"成长期I",coord:[2,20],label:{fontSize:16,formatter:"{a|成长期I}",rich:{a:{color:"#E87A0A",fontWeight:"bold",fontSize:18}},position:"insideMiddleTop"},lineStyle:{normal:{width:0,color:"#708AB7"}}},{coord:[3,20]}],[{name:"成长期II",coord:[3,40],label:{fontSize:16,formatter:"{a|成长期II}",rich:{a:{color:"#E87A0A",fontWeight:"bold",fontSize:18}},position:"insideMiddleTop"},lineStyle:{normal:{width:0,color:"#708AB7"}}},{coord:[4,40]}],[{name:"成长期III",coord:[4,60],label:{fontSize:16,formatter:"{a|成长期III}",rich:{a:{color:"#E87A0A",fontWeight:"bold",fontSize:18}},position:"insideMiddleTop"},lineStyle:{normal:{width:0,color:"#708AB7"}}},{coord:[5,60]}],[{name:"成熟期I",coord:[5,70],label:{fontSize:16,formatter:"{a|成熟期I}",rich:{a:{color:"#C2524D",fontWeight:"bold",fontSize:18}},position:"insideMiddleTop"},lineStyle:{normal:{width:0,color:"#708AB7"}}},{coord:[6,70]}],[{name:"成熟期II",coord:[6,85],label:{fontSize:16,formatter:"{a|成熟期II}",rich:{a:{color:"#C2524D",fontWeight:"bold",fontSize:18}},position:"insideMiddleTop"},lineStyle:{normal:{width:0,color:"#708AB7"}}},{coord:[7,85]}],{name:"",xAxis:"1",label:{show:!1},lineStyle:{normal:{color:"#708AB7",width:2,type:"solid"}}},{name:"",xAxis:"12",label:{show:!1},lineStyle:{normal:{color:"#708AB7",width:2,type:"solid"}}},{name:"",xAxis:"48",label:{show:!1},lineStyle:{normal:{color:"#708AB7",width:2,type:"solid"}}},{name:"",xAxis:"72",label:{show:!1},lineStyle:{normal:{color:"#708AB7",width:2,type:"solid"}}}]}}]};