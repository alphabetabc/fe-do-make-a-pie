option={backgroundColor:"#fff",grid:{top:"25%",bottom:"10%"},tooltip:{trigger:"axis",formatter:function(e){for(var o=e[0].name+"<br>",t=0;t<e.length;t++)o+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+e[t].color+';"></span>',option.series[e[t].seriesIndex].valueType=="percent"?o+=e[t].seriesName+":"+e[t].value+"%<br>":o+=e[t].seriesName+":"+e[t].value+"<br>";return o}},axisPointer:{type:"shadow",label:{show:!0}},legend:{data:["总变化","群转变化","单独成交变化","转介绍变化","环比增长率"],top:"10%",textStyle:{color:"#333"}},xAxis:{data:["3月第4期","3月第5期","4月第1期","4月第2期","4月第3期"],axisLine:{show:!0,lineStyle:{color:"#333"}},axisTick:{show:!0},axisLabel:{show:!0,textStyle:{color:"#333"}}},yAxis:[{type:"value",name:"环比升降值",nameTextStyle:{color:"#333"},splitLine:{show:!1},axisTick:{show:!0},axisLine:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,textStyle:{color:"#333"}}},{type:"value",name:"环比增长率",nameTextStyle:{color:"#333"},position:"right",splitLine:{show:!0},axisTick:{show:!0},axisLine:{show:!0},axisLabel:{show:!0,formatter:"{value} %",textStyle:{color:"#333"}}},{type:"value",gridIndex:0,min:50,max:100,splitNumber:8,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.0)","rgba(250,250,250,0.05)"]}}}],series:[{name:"总变化",type:"bar",barWidth:15,itemStyle:{normal:{color:"#388BFF"}},data:[700,-300,600,-100,400]},{name:"群转变化",type:"bar",barWidth:15,itemStyle:{normal:{color:"#86D560"}},data:[400,-200,400,-50,250]},{name:"单独成交变化",type:"bar",barWidth:15,itemStyle:{normal:{color:"#AF89D6"}},data:[-50,50,100,50,50]},{name:"转介绍变化",type:"bar",barWidth:15,itemStyle:{normal:{color:"#F6931C"}},data:[350,150,100,-100,100]},{name:"环比增长率",type:"line",yAxisIndex:1,smooth:!0,showAllSymbol:!0,symbol:"circle",symbolSize:10,itemStyle:{color:"#FFCC67"},lineStyle:{color:"#FFCC67"},data:[6,-2.99,4.67,-1.92,3.58],valueType:"percent"}]};
