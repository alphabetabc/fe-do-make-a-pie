option={title:{text:"测组结构编辑",left:"center",textStyle:{color:"#8c8c8c",align:"center"}},xAxis:{show:!1,type:"value",boundaryGap:!1,min:-10,max:110},yAxis:{show:!1,type:"value",min:-10,max:20},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:1,end:100,zoomLock:!0},{type:"inside",xAxisIndex:[0],start:1,end:100}],series:[{type:"graph",layout:"none",coordinateSystem:"cartesian2d",symbolSize:20,label:{normal:{show:!0,color:"#8c8c8c",position:"top",align:"center"}},edgeSymbol:["none","none"],edgeSymbolSize:[4,10],data:[{name:"基准点1",value:[0,5],parent:null,children:["1-1"],isNormal:!0,lv:1,itemStyle:{color:"#ffffff",borderColor:"#ff6d81",borderWidth:5}},{name:"1-1",value:[10,5],parent:"基准点1",children:["1-2"],isNormal:!0,lv:2},{name:"1-2",value:[20,5],parent:"1-1",children:["1-3"],isNormal:!0,lv:3}],links:[{source:"基准点1",target:"1-1"},{source:"1-1",target:"1-2"},{source:"1-2",target:"1-3"}],lineStyle:{color:"#8c8c8c",width:5},itemStyle:{color:"#ffffff",borderColor:"#00a8fe",borderWidth:5}}]};