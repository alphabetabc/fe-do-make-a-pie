let ValueData=[{name:"工序1_1",value:[0,0],label:{normal:{show:!0}},workCellType:0,workCenterName:"激光落料中心",processName:"22"},{name:"工序1_2",value:[0,1],label:{normal:{show:!0}},workCellType:0,workCenterName:"激光落料中心",processName:"33fgz"},{name:"工序2_1",value:[120,0],label:{normal:{show:!0}},workCellType:0,workCenterName:"激光落料中心",processName:"ruler"},{name:"工序3_1",value:[240,0],label:{normal:{show:!0}},workCellType:0,workCenterName:"激光落料中心",processName:"测试修改"},{name:"工序3_2",value:[240,1],label:{normal:{show:!0}},workCellType:0,workCenterName:"激光落料中心",processName:"2A"},{name:"工序4_1",value:[360,0],label:{normal:{show:!0}},workCellType:2,workCenterName:"数冲中心",processName:"ruler"}],Ydata=[1,2],LinksData=[{source:"工序1_1",target:"工序1_2"},{source:"工序1_2",target:"工序1_1"},{source:"工序3_1",target:"工序3_2"},{source:"工序3_2",target:"工序3_1"},{source:"工序1_1",target:"工序2_1"},{source:"工序2_1",target:"工序3_1"},{source:"工序3_1",target:"工序4_1"}];option={grid:{top:120,bottom:120},yAxis:[{type:"category",boundaryGap:!1,show:!1,data:Ydata}],xAxis:{type:"category",show:!1,data:[]},series:[{type:"graph",layout:"none",coordinateSystem:"cartesian2d",symbolKeepAspect:!1,symbol:"rect",symbolSize:[130,120],label:{normal:{show:!0}},edgeSymbol:["circle","arrow"],edgeSymbolSize:[2,5],data:ValueData,links:LinksData,lineStyle:{normal:{color:"#2f4554"}}}]};