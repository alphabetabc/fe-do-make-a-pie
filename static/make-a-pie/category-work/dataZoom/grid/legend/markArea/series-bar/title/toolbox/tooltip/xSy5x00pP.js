var xData=function(){for(var t=[],e=1;e<15;e++)t.push(e+"号店");return t}();option={title:{text:"人流环比图",subtext:"昨天 vs 前天",x:"center"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{borderWidth:0,y2:120},legend:{x:"right",data:[]},toolbox:{show:!0,feature:{restore:{},saveAsImage:{}}},calculable:!0,xAxis:[{type:"category",splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0,rotate:45,show:!0,splitNumber:15,textStyle:{fontFamily:"微软雅黑",fontSize:12}},data:xData}],yAxis:[{type:"value",splitLine:{show:!1},axisLine:{show:!0},axisTick:{show:!1},splitArea:{show:!1}}],dataZoom:[{show:!0,height:30,xAxisIndex:[0],bottom:40,start:0,end:80},{type:"inside",show:!0,height:15,xAxisIndex:[0],start:1,end:35}],series:[{name:"昨日",type:"bar",stack:"总量",barMaxWidth:50,barGap:"10%",itemStyle:{normal:{barBorderRadius:0,color:"rgba(60,169,196,0.5)",label:{show:!0,textStyle:{color:"rgba(0,0,0,1)"},position:"insideTop",formatter:function(t){return t.value>0?t.value:""}}}},data:[3709,2417,755,2610,1719,433,2544,4285,3372,2484,4078,1355,5208,1723]},{name:"人流减少",type:"bar",stack:"总量",itemStyle:{normal:{color:"rgba(51,204,112,1)",barBorderRadius:0,label:{show:!0,position:"top",formatter:function(t){return t.value>0?"▼"+t.value:""}}}},data:[386,0,0,122,261,171,0,40,246,0,815,275,570,159]},{name:"人流增长",type:"bar",stack:"总量",itemStyle:{normal:{color:"rgba(193,35,43,1)",barBorderRadius:0,label:{show:!0,position:"top",formatter:function(t){return t.value>0?"▲"+t.value:""}}}},data:[0,376,1727,0,0,0,220,0,0,1951,0,0,0,0]}]};
