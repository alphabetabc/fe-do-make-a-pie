var dom=document.getElementById("chart-panel");dom.style.width=780+"px",dom.style.height=600+"px",option={tooltip:{show:!1},legend:{x:"center",data:["家人","朋友"]},animation:!1,series:[{categories:[{name:"家人",itemStyle:{normal:{color:"#009800"}}},{name:"朋友",itemStyle:{normal:{color:"#4592FF"}}}],type:"graph",layout:"force",symbol:"circle",symbolSize:50,roam:!0,edgeSymbol:["circle","arrow"],edgeSymbolSize:[0,10],focusNodeAdjacency:!0,edgeLabel:{normal:{show:!0,textStyle:{fontSize:20},formatter:"{c}"}},categories:[{name:"家人",itemStyle:{normal:{color:"#009800"}}},{name:"朋友",itemStyle:{normal:{color:"#4592FF"}}}],lineStyle:{normal:{opacity:1,width:2,curveness:0}},label:{normal:{show:!0}},force:{repulsion:5e3},data:[{name:"节点1",symbol:"image://http://www.damndigital.com/wp-content/uploads/2010/12/steve-jobs.jpg",itemStyle:{normal:{color:"#f90",label:{position:"bottom",textStyle:{color:"#f90"}}}}},{name:"节点2",category:1,itemStyle:{normal:{color:"#090"},emphasis:{color:"#000"}}},{name:"节点3",category:1,draggable:!0},{name:"节点4",category:0,draggable:!0},{name:"节点5",category:0,draggable:!0},{name:"节点6",category:0,draggable:!0}],links:[{source:"节点1",target:"节点2",value:"朋友",lineStyle:{normal:{color:"#38f",curveness:0}},label:{normal:{textStyle:{color:"#07ac72"}}}},{source:"节点1",target:"节点3",value:"朋友"},{source:"节点1",target:"节点4",value:"家人"},{source:"节点1",target:"节点5",value:"家人"},{source:"节点1",target:"节点6",value:"家人"}]}]};