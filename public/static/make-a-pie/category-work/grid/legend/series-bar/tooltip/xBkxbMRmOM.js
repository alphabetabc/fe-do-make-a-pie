option={backgroundColor:"#142058",legend:{top:20,textStyle:{color:"#fff"},data:["男","女","111"]},grid:{left:"3%",right:"4%",bottom:"10%",containLabel:!0},tooltip:{show:"true",trigger:"item",backgroundColor:"rgba(0,0,0,0.7)",padding:[8,10],extraCssText:"box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);",formatter:function(e){if(e.seriesIndex=="3"||e.seriesIndex=="4"||e.seriesIndex=="5")return e.name+"<br>"+e.seriesName+" ： 第 "+e.value+" 名"}},yAxis:{type:"value",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#363e83"}},splitLine:{show:!0,lineStyle:{color:"#363e83 "}},axisLabel:{textStyle:{color:"#fff",fontWeight:"normal",fontSize:"12"}}},xAxis:[{type:"category",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#363e83"}},axisLabel:{inside:!1,textStyle:{color:"#fff",fontWeight:"normal",fontSize:"12"}},data:["会","不会","看情况"]},{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!1},splitLine:{show:!1},data:["会","不会","看情况"]}],series:[{type:"bar",xAxisIndex:1,zlevel:1,itemStyle:{normal:{color:"#121847",borderWidth:0,shadowBlur:{shadowColor:"rgba(255,255,255,0.31)",shadowBlur:10,shadowOffsetX:0,shadowOffsetY:2}}},barWidth:"10%",data:[30,30,30]},{type:"bar",xAxisIndex:1,barGap:"100%",data:[30,30,30],zlevel:1,barWidth:"10%",itemStyle:{normal:{color:"#121847",borderWidth:0,shadowBlur:{shadowColor:"rgba(255,255,255,0.31)",shadowBlur:10,shadowOffsetX:0,shadowOffsetY:2}}}},{type:"bar",xAxisIndex:1,barGap:"100%",data:[30,30,30],zlevel:1,barWidth:"10%",itemStyle:{normal:{color:"#121847",borderWidth:0,shadowBlur:{shadowColor:"rgba(255,255,255,0.31)",shadowBlur:10,shadowOffsetX:0,shadowOffsetY:2}}}},{name:"男",type:"bar",itemStyle:{normal:{show:!0,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#f7734e"},{offset:1,color:"#e12945"}]),barBorderRadius:50,borderWidth:0}},zlevel:2,barWidth:"10%",data:[8,15,10]},{name:"女",type:"bar",barWidth:"10%",itemStyle:{normal:{show:!0,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#96d668"},{offset:1,color:"#01babc"}]),barBorderRadius:50,borderWidth:0}},zlevel:2,barGap:"100%",data:[8,17,26]},{name:"111",type:"bar",barWidth:"10%",itemStyle:{normal:{show:!0,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1a98f8"},{offset:1,color:"#7049f0"}]),barBorderRadius:50,borderWidth:0}},zlevel:2,barGap:"100%",data:[8,17,26]}]};