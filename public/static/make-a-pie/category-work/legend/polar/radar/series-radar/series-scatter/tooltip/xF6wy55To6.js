var{indicator,radarData,scatterData,name}={indicator:[{text:"从事政治理论教育",max:100,color:"#000"},{text:"警务实战技能",max:100,color:"#000"},{text:"边防检查",max:100,color:"#000"},{text:"从事舆情引导相关课程的教学",max:100,color:"#000"},{text:"政治理论教员",max:100,color:"#000"}],radarData:[85,96,85,50,65],scatterData:[{value:85,itemStyle:{normal:{color:{type:"linear",x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"#0FCABA"},{offset:1,color:"#4FFFF1"}],global:!1},borderWidth:0,borderColor:["#0FCABA","#4FFFF1"]}},areaStyle:{normal:{color:{type:"radial",x:.5,y:.5,r:.5,colorStops:[{offset:0,color:"rgba(46,203,255, 0.14)"},{offset:.15,color:"rgba(46,203,255, 0.14)"},{offset:.75,color:"#057FB3"},{offset:1,color:"#078DC6"}],global:!1}}}},{value:96,itemStyle:{normal:{color:{type:"linear",x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"#0FCABA"},{offset:1,color:"#4FFFF1"}],global:!1},borderWidth:0,borderColor:["#0FCABA","#4FFFF1"]}}},{value:85,itemStyle:{normal:{color:{type:"linear",x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"#0FCABA"},{offset:1,color:"#4FFFF1"}],global:!1},borderWidth:0,borderColor:["#0FCABA","#4FFFF1"]}}},{value:50,itemStyle:{normal:{color:{type:"linear",x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"#0FCABA"},{offset:1,color:"#4FFFF1"}],global:!1},borderWidth:0,borderColor:["#0FCABA","#4FFFF1"]}}},{value:65,itemStyle:{normal:{color:{global:!1,type:"linear",x:0,x2:0,y:0,y2:.7,colorStops:[{offset:0,color:"#0FCABA"},{offset:1,color:"#4FFFF1"}]},borderWidth:0,borderColor:["#0FCABA","#4FFFF1"]}}}],name:["从事政治理论教育","警务实战技能","边防检查","从事舆情引导相关课程的教学","政治理论教员"]};option={backgroundColor:"transparent",tooltip:{trigger:"axis"},legend:{data:name},radar:[{indicator,name:{show:!0,textStyle:{fontSize:20}},center:["50%","50%"],radius:"70%",shape:"circle",axisLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},splitLine:{show:!0,lineStyle:{opacity:1,color:"#DCA9FD",width:3}}}],polar:{radius:"70%"},angleAxis:{type:"category",data:name,boundaryGap:!1,clockwise:!1,axisTick:{show:!1},axisLabel:{show:!1},axisLine:{show:!1},splitLine:{show:!1}},radiusAxis:{show:!1},series:[{name:"",type:"radar",tooltip:{trigger:"item"},symbol:"none",symbolSize:6,lineStyle:{width:0},data:[{value:radarData,name:"111",areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"rgba(112, 117, 245, 1)"},{offset:0,color:"rgba(238, 156, 255, 1)"}])}}}]},{name:"",type:"scatter",coordinateSystem:"polar",symbolSize:20,data:scatterData}]};
