option={tooltip:{trigger:"axis",formatter:function(e,l,o){for(var a=e[0].name,t=0,i=e.length;t<i;t++)e[t].seriesType==="line"?a+="<br/>"+e[t].seriesName+" : "+(e[t].value?e[t].value:"-")+"h":a+="<br/>"+e[t].seriesName+" : "+(e[t].value?e[t].value:"-")+"个";return a}},grid:{containLabel:!0},legend:{data:["时间","人均个数","总体个数"]},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]}],dataZoom:[{type:"slider",xAxisIndex:0,filterMode:"empty",start:0,end:100},{type:"slider",yAxisIndex:0,filterMode:"empty",start:0,end:100},{type:"inside",xAxisIndex:0,filterMode:"empty",start:0,end:100},{type:"inside",yAxisIndex:0,filterMode:"empty",start:0,end:100}],yAxis:[{type:"value",name:"时间",min:0,position:"left",axisLabel:{formatter:"{value} h"}},{type:"value",name:"个数",min:0,position:"right",axisLabel:{formatter:"{value} 个"}}],series:[{name:"时间",type:"line",label:{normal:{show:!0,position:"top"}},lineStyle:{normal:{width:3,shadowColor:"rgba(0,0,0,0.4)",shadowBlur:10,shadowOffsetY:10}},data:[1,13,37,35,15,13,25,21,6,45,32,2]},{name:"人均个数",type:"bar",yAxisIndex:1,label:{normal:{show:!0,position:"top"}},data:[22,22,23,77,24,55,55,89,98,164,106,224]},{name:"总体个数",type:"bar",yAxisIndex:1,label:{normal:{show:!0,position:"top"}},data:[201,222,223,777,244,255,555,879,938,1364,1806,2324]}]};
