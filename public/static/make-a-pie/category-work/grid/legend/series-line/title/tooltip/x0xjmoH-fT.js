var data1=[281.55,398.35,214.02,219.55,289.57,296.14,164.18,322.69,306.08,552.84,205.97,332.79],data2=[306.08,552.84,205.97,332.79,281.55,398.35,214.02,219.55,289.57,296.14,164.18,322.69],xdata=function(){for(var t=[],e=0;e<data1.length;e++)t[e]=e;return t};option={backgroundColor:"#fff",title:{text:"学生成绩实时跟踪分析",subtext:"全面把控复习进度和易错题型",textStyle:{color:"#666",fontSize:"14"},subtextStyle:{color:"#666",fontSize:"14"},left:"center",bottom:"15"},tooltip:{trigger:"axis",axisPointer:{type:"line",textStyle:{color:"#fff"},lineStyle:{color:"#ccc"}}},grid:{borderWidth:0,top:110,bottom:95,textStyle:{color:"#fff"}},legend:{x:"4%",top:"11%",textStyle:{color:"#90979c"},data:["1","2"]},calculable:!0,xAxis:[{name:"用时",type:"category",axisLine:{lineStyle:{color:"#ccc"}},splitLine:{show:!0,lineStyle:{color:"#e7e7e7"}},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0,show:!1},data:xdata()}],yAxis:[{name:"试卷数量",type:"value",splitLine:{show:!0,lineStyle:{color:"#e6e6e6",type:"dashed"}},axisLine:{lineStyle:{color:"#ccc"}},axisTick:{show:!1},axisLabel:{interval:0,show:!1},splitArea:{show:!1}}],series:[{name:"总",type:"line",stack:"总量",symbolSize:20,symbol:"circle",itemStyle:{normal:{color:"#008aff",barBorderRadius:0}},data:data1},{name:"总",type:"line",stack:"总量",symbolSize:20,symbol:"circle",itemStyle:{normal:{color:"#2aba3f",barBorderRadius:0}},data:data2}]};