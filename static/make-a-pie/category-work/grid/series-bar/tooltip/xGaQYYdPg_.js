app.title="Top 10",option={tooltip:{trigger:"axis",backgroundColor:"rgba(255,255,255,0.8)",axisPointer:{type:"shadow"},extraCssText:"box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);",textStyle:{color:"#6a717b"}},grid:{left:"3%",right:"4%",top:"1%",bottom:"1%",containLabel:!0},yAxis:[{type:"category",data:["OPPO R9s","OPPO A57","OPPO A59s","OPPO R9m","OPPO A37m"],inverse:!0,axisTick:{show:!1},axisLabel:{textStyle:{fontSize:12,color:"#53a8fa"}},axisLine:{show:!1},splitLine:{show:!1}}],xAxis:[{type:"value",axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1,lineStyle:{color:"#192469"}},splitLine:{show:!1,lineStyle:{color:"#17367c"}}}],series:[{type:"bar",barWidth:80,data:[8827896,7472072,7433391,7137253,6382192],label:{normal:{show:!0,position:"insideRight",textStyle:{color:"white"}}},itemStyle:{normal:{color:"#0590eb",barBorderRadius:15,shadowColor:"rgba(0,0,0,0.1)",shadowBlur:3,shadowOffsetY:3}}}]},myChart.on("click",function(e){console.log(e),console.log(e.seriesIndex),myChart.setOption(option,!0)});
