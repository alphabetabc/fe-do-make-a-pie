option={backgroundColor:"#00265f",tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:"15%",right:"3%",left:"5%",bottom:"12%"},xAxis:[{type:"category",data:["制造业","建筑业","农林牧渔"],axisLine:{show:!1,lineStyle:{color:"rgba(255,255,255,0.12)"}},axisLabel:{show:!0,margin:10,color:"#e2e9ff",textStyle:{fontSize:14}}},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,axisLabel:{textStyle:{color:"#ffffff",fontSize:"16"},formatter:function(e){return e+" %"}},data:[34,53,46]}],yAxis:[{type:"value",axisLabel:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},max:100}],series:[{type:"bar",data:[34,53,46],barWidth:"12px",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#6cc3a0",opacity:1},{offset:1,color:"rgba(94, 101, 108,0)"}],!1),barBorderRadius:6,shadowColor:"rgba(0,160,221,1)",shadowBlur:4}},showBackground:!0,backgroundStyle:{borderRadius:10},label:{normal:{show:!1}}}]};