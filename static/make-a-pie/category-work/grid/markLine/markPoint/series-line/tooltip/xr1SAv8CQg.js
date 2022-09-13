var _data=[[3206,0,-5],[3428.2,89.4],[3439.6,100],[3654,210,5]],_origin=_data[2][1],_min=_data[0][0]-6,_max=_data[3][0],_seriesData_0=[[_data[0][0],_data[2][1]]],_seriesData_1=[_data[0],_data[1]],_seriesData_2=["-",_data[1],_data[2]],_seriesData_3=["-","-",_data[2],_data[3]],_seriesData_4=["-","-","-",[_data[3][0],0]],_maxLoss=_data[0][2],_maxProfit=_data[3][2],OPTION={color:["#3e8e7e","#3e8e7e","#9a2f10","#9a2f10"],tooltip:{show:!1},grid:{left:"10%",right:"10%",top:"20%",bottom:"15%"},xAxis:{name:"指数",scale:!0,min:_min,max:_max,type:"value",boundaryGap:!1,interval:70,nameTextStyle:{color:"transparent",fontWeight:"bold",fontSize:14},axisLine:{show:!1,lineStyle:{color:"#7f7f7f"}},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!0,interval:1}},yAxis:{name:"损益",nameTextStyle:{color:"transparent",fontWeight:"bold",fontSize:14},type:"value",boundaryGap:["0","10%"],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}},series:[{name:"净亏损",type:"line",symbol:"circle",symbolSize:2,lineStyle:{normal:{width:12}},markPoint:{symbolOffset:[0,40],data:[{type:"min",name:"最小值",label:{normal:{show:!0,formatter:function(t){return decimalDigits(t.data.coord[0])},textStyle:{color:"#7f7f7f",fontWeight:"400",fontSize:12}}}},{type:"min",name:"最小值2",label:{normal:{show:!0,formatter:`

下跌极限`,textStyle:{color:"#7f7f7f",fontWeight:"800",fontSize:14}}}},{type:"min",name:"最小值3",label:{normal:{show:!0,formatter:function(t){return`




`+decimalDigits(_maxLoss)+"%"},textStyle:{color:"#7f7f7f",fontWeight:"400",fontSize:12}}}}],itemStyle:{normal:{color:"transparent"}}},data:_seriesData_0},{name:"亏损",type:"line",symbol:"circle",symbolSize:12,lineStyle:{normal:{width:12}},markLine:{lineStyle:{normal:{type:"solid",color:"#7f7f7f",width:2,fontWeight:"bold",fontSize:14}},data:[{yAxis:_origin,symbol:"none",label:{normal:{show:!0,formatter:"指数",textStyle:{color:"#7f7f7f",fontWeight:"bold",fontSize:14}}}},{xAxis:_min,symbol:"none",label:{normal:{show:!0,formatter:"损益",textStyle:{color:"#7f7f7f",fontWeight:"bold",fontSize:14}}}}]},markPoint:{symbolOffset:[-10,-20],data:[{type:"max",name:"最大值",label:{normal:{show:!0,formatter:`
合约开仓点`,textStyle:{color:"#7f7f7f",fontWeight:"800",fontSize:14}}}},{type:"max",name:"最大值",label:{normal:{show:!0,formatter:function(t){return`



`+decimalDigits(t.data.coord[0])},textStyle:{color:"#7f7f7f",fontWeight:"400",fontSize:12}}}},{type:"min",name:"最小值",label:{normal:{show:!0,formatter:function(t){return decimalDigits(t.data.coord[1])},textStyle:{color:"#3e8e7e",fontWeight:"400",fontSize:12}}}},{type:"min",name:"最小值2",label:{normal:{show:!0,formatter:`

预计净值`,textStyle:{color:"#3e8e7e",fontWeight:"800",fontSize:14}}}}],itemStyle:{normal:{color:"transparent"}}},data:_seriesData_1},{name:"点差",type:"line",symbol:"circle",symbolSize:12,lineStyle:{normal:{width:12}},markPoint:{symbolOffset:[30,40],data:[{type:"max",name:"最大值",label:{normal:{show:!0,formatter:function(t){return decimalDigits(t.data.coord[0])},textStyle:{color:"#9a2f10",fontWeight:"400",fontSize:12}}}},{type:"max",name:"最大值",label:{normal:{show:!0,formatter:`

当前点位`,textStyle:{color:"#9a2f10",fontWeight:"bold",fontSize:14}}}}],itemStyle:{normal:{color:"transparent"}}},data:_seriesData_2},{name:"盈利",type:"line",symbol:"circle",symbolSize:12,lineStyle:{normal:{width:12}},markPoint:{symbolOffset:[0,0],data:[{type:"max",name:"最大值",label:{normal:{show:!0,formatter:"预计净值",textStyle:{color:"#9a2f10",fontWeight:"800",fontSize:14}}}},{type:"max",name:"最大值2",label:{normal:{show:!0,formatter:function(t){return`

`+decimalDigits(t.data.coord[1])},textStyle:{color:"#9a2f10",fontWeight:"400",fontSize:12}}}}],itemStyle:{normal:{color:"transparent"}}},data:_seriesData_3},{name:"净盈利",type:"line",symbol:"circle",symbolSize:0,lineStyle:{normal:{width:0}},markPoint:{symbolOffset:[0,-180],data:[{type:"max",name:"最大值",label:{normal:{show:!0,formatter:function(t){return decimalDigits(t.data.coord[0])},textStyle:{color:"#000",fontWeight:"400",fontSize:12}}}},{type:"max",name:"最大值2",label:{normal:{show:!0,formatter:`

上涨峰值`,textStyle:{color:"#000",fontWeight:"800",fontSize:14}}}},{type:"max",name:"最大值3",label:{normal:{show:!0,formatter:function(t){return`




`+decimalDigits(_maxProfit)+"%"},textStyle:{color:"#000",fontWeight:"400",fontSize:12}}}}],itemStyle:{normal:{color:"transparent"}}},data:_seriesData_4}]};function decimalDigits(t){if(typeof t!="number")return t;var e=1;t=parseFloat(t.toFixed(e)).toLocaleString();var a=t.split(".")[1];if(a===void 0){t+=".";for(var o=0;o<e;o++)t+="0"}return t}myChart.setOption(OPTION);
