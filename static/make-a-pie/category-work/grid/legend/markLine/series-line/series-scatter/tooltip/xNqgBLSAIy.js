option={backgroundColor:"#fff",grid:{top:"25%",left:"7%",right:"15%",bottom:"7%",containLabel:!0},tooltip:{trigger:"axis",textStyle:{color:"#FFF",fontSize:12,background:"rgba(255,255,255,0.1)",lineHeight:20},axisPointer:{type:"shadow",background:"rgba(255,255,255,0.1)"},position:"inside"},legend:{top:0,left:"center",itemWidth:6,itemHeight:6,data:[{name:"首客订单率目标",icon:"line"},{name:"客流目标达成"},{name:"客流目标未达成"}]},xAxis:{axisLine:{show:!0,lineStyle:{color:"#F0EFEF",type:"solid"}},axisTick:{show:!1},axisLabel:{textStyle:{color:"#A3A9AF",fontSize:12}},splitLine:{show:!1}},yAxis:{typpe:"dashed",nameTextStyle:{color:"#A3A9AF",padding:[0,25,0,0]},axisLine:{lineStyle:{color:"#F0EFEF"}},axisTick:{show:!1},axisLabel:{textStyle:{color:"#A3A9AF",fontSize:12}},splitLine:{show:!0,lineStyle:{color:"#E9E9E9",type:"dashed"}}},series:[{name:"首客订单率目标",type:"line",color:"#52AED0",symbol:"none",itemStyle:{normal:{lineStyle:{color:"#52AED0"}}},markLine:{animation:!1,label:{formatter:"23.5%",align:"right",color:"#252525",distance:15},lineStyle:{type:"solid",color:"#52AED0"},tooltip:{formatter:"23.5%"},data:[[{coord:[0,0],symbol:"none"},{coord:[14,14],symbol:"none"}]]}},{name:"客流目标达成",type:"scatter",itemStyle:{color:"#77C620"},symbolSize:6,data:[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]]},{name:"客流目标未达成",type:"scatter",itemStyle:{color:"#F03024"},symbolSize:6,data:[[9,5.04],[11,7.95],[12,8.58],[5,11.81],[7,12.33],[11,7.96],[7,9.24],[6,8.26],[10,11.84],[7,3.82],[6,4.68]]},{name:"",type:"line",markLine:{symbol:"none",silent:!0,lineStyle:{type:"solid",width:1,color:"#F03024"},label:{color:"#A3A9AF",distance:[-25,8,0,0],padding:[-15,2,2,3],formatter:function(e){return e.name}},data:[{name:"日均累客流量",yAxis:5},{name:"日均累订单量",xAxis:5}]}}]};