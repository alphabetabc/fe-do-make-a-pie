var option={legend:{show:!1},grid:{show:!1},xAxis:{type:"value",scale:!0,min:0,max:100,splitNumber:10,boundaryGap:["20%","20%"],axisLabel:{show:!0,interval:0,margin:6,formatter:function(e,o){return o%5===0?e+"%":""}},axisTick:{show:!0,interval:10,lineStyle:{color:"#EBF6FE"}},axisLine:{show:!1,lineStyle:{color:"#EBF6FE"}},splitLine:{show:!1}},yAxis:[{type:"category",axisTick:{show:!1,lineStyle:{color:"blue"}},axisLine:{show:!1,lineStyle:{color:"blue"}},data:[""]},{show:!1,type:"category",axisTick:{show:!1},axisLine:{show:!1},data:[""]}],series:[{name:"异常名录",type:"bar",yAxisIndex:1,barWidth:150,silent:!0,itemStyle:{normal:{show:!0,color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#EBF6FE"},{offset:1,color:"#EBF6FE"}],globalCoord:!1},barBorderRadius:100,borderWidth:0,borderColor:"#333"}},barGap:"-100%",barCategoryGap:"1%",tooltip:{show:!0},data:[100]},{name:"异常名录",type:"bar",stack:"总量",silent:!1,barWidth:110,itemStyle:{normal:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"},emphasis:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}},barGap:"-100%",tooltip:{show:!0,trigger:"none"},data:[2]},{name:"违法处罚",type:"bar",barWidth:120,silent:!1,stack:"总量",itemStyle:{normal:{show:!0,color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#5471C4"},{offset:1,color:"#E51D81"}],globalCoord:!1},barBorderRadius:[180,0,0,180],borderWidth:0,borderColor:"#333"}},barGap:"-100%",barCategoryGap:"1%",data:[73],markPoint:{data:[{type:"max",name:"违法处罚",fontSize:100,symbolSize:[80,70],symbolOffset:[0,"-136%"],label:{name:"%",normal:{show:!0,fontSize:30,color:"#ffffff",offset:[0,-8],formatter:"{c}%"}}}]}}]};
