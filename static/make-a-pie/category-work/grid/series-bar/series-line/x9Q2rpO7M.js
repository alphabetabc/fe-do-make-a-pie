for(var dimensions=[],dataval=[],i=0;i<168;i++)dataval.push(Math.sin(i/5)*(i/6+15)+i+95+95);var option={backgroundColor:"#000",grid:{left:0,right:30,top:50,bottom:30,containLabel:!0},xAxis:{show:!1,boundaryGap:!1,data:dimensions},yAxis:{show:!1},series:[{data:dataval,type:"line",symbol:"circle",symbolSize:0,color:"#FEC201",lineStyle:{normal:{width:4,shadowColor:"rgba(155, 18, 184, .3)",shadowBlur:10,shadowOffsetY:20,shadowOffsetX:20,color:"#329dd3"}},label:{show:!1}},{type:"bar",animation:!1,barWidth:3,hoverAnimation:!1,data:dataval,tooltip:{show:!1},itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#329dd3"},{offset:.5,color:"#000"}],globalCoord:!1},label:{show:!1}}}}]};
