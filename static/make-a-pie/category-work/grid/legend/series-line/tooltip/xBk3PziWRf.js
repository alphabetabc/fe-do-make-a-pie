option={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}"},legend:{data:[{name:"当日账户下降",icon:"circle"},{name:"当日账户活跃",icon:"circle"},{name:"当日总消耗",icon:"circle"}],textStyle:{fontSize:16,color:"#999"},right:"10%",top:"5%",orient:"vertical"},grid:[{top:"20%"}],xAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:"#999",type:"dashed"}},boundaryGap:!1,data:["00:00","02:00","04:00","06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"]},yAxis:{type:"value",show:!1},series:[{name:"当日账户下降",data:[3,8,3,8,3,8,3,8,3,8,3,8],type:"line",smooth:!0,symbol:"image://image/circle.svg",symbolSize:8,showSymbol:!0,itemStyle:{normal:{color:"#16D9F0"}},lineStyle:{normal:{width:5}}},{name:"当日账户活跃",data:[13,18,13,18,13,18,13,18,13,18,13,18],type:"line",smooth:!0,symbol:"circle",symbolSize:8,showSymbol:!0,itemStyle:{normal:{color:"#BEB7FB"}},lineStyle:{normal:{width:5}}},{name:"当日总消耗",data:[23,28,23,28,23,28,23,28,23,28,23,28],type:"line",smooth:!0,symbol:"circle",symbolSize:8,showSymbol:!0,itemStyle:{normal:{color:"#F6E518"}},lineStyle:{normal:{width:5}}}]};
