option={backgroundColor:"#FFFFFF",title:{text:"信息征集统计",left:"center",textStyle:{color:"#2F2F2F"}},legend:{show:!0,orient:"vertical",top:"bottom",left:"right",data:["地点","线路"],textStyle:{color:"#fff"}},geo:{map:mapName,label:{emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"#323c48",borderColor:"#404a59"},emphasis:{areaColor:"#2a333d"}}},series:[{name:"地点",type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{brushType:"stroke",period:7,scale:26},label:{emphasis:{show:!0,position:"right",formatter:"{b}"}},symbolSize:2,showEffectOn:"render",itemStyle:{normal:{color:"#46bee9"}},data:citys},{name:"市政府",type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{brushType:"fill",period:7,scale:0},label:{emphasis:{show:!0,position:"right",formatter:"{b}"}},symbolSize:25,showEffectOn:"emphasis",itemStyle:{normal:{color:"#46bee9"}},data:shizhengfuStr},{name:"线路",type:"lines",coordinateSystem:"geo",zlevel:2,large:!0,effect:{show:!0,constantSpeed:30,symbol:"arrow",symbolSize:6,trailLength:0},lineStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#58B3CC"},{offset:1,color:"#F58158"}],!1),width:1,opacity:.6,curveness:.2}},data:moveLines}]};