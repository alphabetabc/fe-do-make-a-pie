var totalCost=[100,100,100,100,100],visits=[9.3,11.2,14.1,30,35],barcolor=["#3879d9","#3879d9","#bad040","#59d1ca","#e65151"],grade=["江铃牌","长安牌","五十铃牌","五菱牌","丰田"],data={grade,totalCost,visits};option={grid:{top:"5%",left:"30%",right:"20%",bottom:"5%"},tooltip:{show:!0},xAxis:{show:!1},yAxis:[{type:"category",axisTick:{show:!1},axisLine:{show:!1},axisLabel:{margin:10,textStyle:{align:"right",fontSize:40,color:"black"}},data:data.grade},{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{fontSize:40,color:"black"},formatter:function(t,a){return t+"%"}},splitArea:{show:!1},splitLine:{show:!1},data:data.visits}],series:[{type:"bar",yAxisIndex:1,itemStyle:{normal:{show:!0,color:"#111233",barBorderRadius:5,borderWidth:0,borderColor:"#333"}},barWidth:"35%",silent:!0,data:data.totalCost},{type:"bar",itemStyle:{normal:{show:!0,color:function(t){var a=barcolor.length;return barcolor[t.dataIndex%a]},barBorderRadius:5,borderWidth:0,borderColor:"#333"}},label:{normal:{show:!1}},barWidth:"35%",data:data.visits}]};
