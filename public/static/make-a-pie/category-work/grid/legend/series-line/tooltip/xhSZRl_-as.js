let xLabel=["3.26","3.27","3.28","3.29","3.30","3.31"],staff=["30","60","22","85","50","40"],newStaff=["50","50","12","65","30","60"];option={backgroundColor:"#111c44",tooltip:{trigger:"axis",backgroundColor:"",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(126,199,255,0)"},{offset:.5,color:"rgba(126,199,255,1)"},{offset:1,color:"rgba(126,199,255,0)"}],global:!1}}}},legend:{top:"4%",textStyle:{fontSize:14,color:"F1F1F3"},itemGap:50},grid:{top:"18%",left:"15%",right:"5%",bottom:"25%"},xAxis:[{type:"category",boundaryGap:!1,axisLine:{show:!0,lineStyle:{color:"#233653",type:"dashed"}},axisLabel:{textStyle:{color:"#7ec7ff",padding:16,fontSize:14},formatter:function(o){return o}},splitLine:{show:!1},axisTick:{show:!1},data:xLabel}],yAxis:[{name:"人数",nameTextStyle:{color:"#7ec7ff",fontSize:16,padding:10},min:0,splitLine:{show:!0,lineStyle:{color:"#143055",type:"dashed",width:2}},axisLine:{show:!1},axisLabel:{show:!0,textStyle:{color:"#7ec7ff",padding:16},formatter:function(o){return o}},axisTick:{show:!1}}],series:[{name:"员工数",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:0,smooth:!0,lineStyle:{normal:{width:5,color:"rgba(10,219,250,1)"},borderColor:"rgba(0,0,0,.4)"},itemStyle:{color:"rgba(10,219,250,1)",borderColor:"#646ace",borderWidth:2},tooltip:{show:!0},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(10,219,250,.3)"},{offset:1,color:"rgba(10,219,250, 0)"}],!1),shadowColor:"rgba(10,219,250, 0.5)",shadowBlur:20}},data:staff},{name:"新员工数",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:0,smooth:!0,lineStyle:{normal:{width:5,color:"#e1b238"},borderColor:"rgba(0,0,0,.4)"},itemStyle:{color:"#e1b238",borderColor:"#646ace",borderWidth:2},tooltip:{show:!0},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(39, 71, 74,0.8)"},{offset:1,color:"rgba(39, 71, 74,0.5)"}],!1),shadowColor:"#2b494a",shadowBlur:20}},data:newStaff}]};