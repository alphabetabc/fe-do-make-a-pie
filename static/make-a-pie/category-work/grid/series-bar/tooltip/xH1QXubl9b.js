var data=[20,32,11,65,25,50,21],xMax=100,option={tooltip:{trigger:"item",formatter:"{a}<br />{b}: {c}%",axisPointer:{type:"none"}},yAxis:[{type:"value",show:!1}],xAxis:[{type:"category",data:["自驾车","公交","出租车","快车&专车","步行","自行车&电动车","摩托车"],splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{rotate:0,textStyle:{color:"#737373"}}}],series:[{name:"出行方式",type:"bar",stack:"总量",z:3,barWidth:"16%",data:[20,32,11,65,25,50,21],itemStyle:{normal:{barBorderRadius:20,color:function(t){var a=["#f44120","#fd7b09","#ffbf37","#f2ff36","#4fae36","#308cef","#4c41cc"];return a[t.dataIndex]},label:{show:!1,textStyle:{color:"rgba(0,0,0,1)"},position:"top",formatter:function(t){return t.value>0?t.value+"%":""}}}}},{name:"占位",type:"bar",barWidth:"25%",barGap:"-124%",silent:!0,itemStyle:{normal:{borderWidth:.3,color:"transparent",borderColor:"#49698f",barBorderRadius:50,label:{show:!0,textStyle:{color:"rgba(0,0,0,1)"},position:"top",formatter:function(t){return data[t.dataIndex]+"%"}}}},data:data.map(function(t){return xMax})}]};
