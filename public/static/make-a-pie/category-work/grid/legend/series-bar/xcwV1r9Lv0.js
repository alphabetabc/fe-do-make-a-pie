var data1=[709,1999,709,2299,3299,2299,1999,2999,1999,709,1999,709],xData=function(){for(var s=[],a=1;a<13;a++)s.push(a+"月");return s}();option={legend:{show:!1},xAxis:[{type:"category",axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{show:!1},data:xData}],yAxis:[{type:"value",splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!1}}],series:[{name:"周转量",type:"bar",barMaxWidth:35,barGap:"10%",itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#299CE1"},{offset:.8,color:"#2168B2"},{offset:1,color:"#2168B2"}],global:!1}}},data:data1}]};