let max=100,value=50;option={grid:{left:0,right:0,top:0,containLabel:!0,bottom:0},xAxis:{type:"value",max,splitLine:{show:!1},axisLabel:{show:!1}},yAxis:{type:"category",axisLine:{show:!1}},series:[{type:"bar",data:[value],barWidth:8,borderRadius:[4,4,4,4],itemStyle:{borderRadius:[4,4,4,4],color:{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#5CCFFF"},{offset:1,color:"#4C8EFA"}]}}},{type:"bar",data:[max],barGap:"-100%",barWidth:8,itemStyle:{borderRadius:[4,4,4,4],opacity:.3,color:{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#5CCFFF"},{offset:1,color:"#4C8EFA"}]}}}]};