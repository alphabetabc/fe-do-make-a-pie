let max=400;value=[200,300,200],option={backgroundColor:"#000A2A",grid:{left:"20%",right:"20%"},xAxis:{type:"value",max,splitLine:{show:!1},axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1}},yAxis:[{type:"category",inverse:!0,data:["一产","二产","三产"],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:10,textStyle:{color:"#fff",fontSize:40}}},{type:"category",inverse:!0,data:["20%","30%","40%"],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:10,textStyle:{color:"#00F0FF",fontSize:60}}}],series:[{type:"bar",barWidth:40,legendHoverLink:!1,silent:!0,itemStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#0078FF"},{offset:1,color:"#00DEFF"}],globalCoord:!1}},data:value},{type:"bar",barWidth:50,barGap:"-110%",label:{normal:{show:!1,position:"right",textStyle:{color:"#000"}}},itemStyle:{normal:{color:"rgba(0,0,0,0)",borderWidth:2,borderColor:"#004E77"}},data:[max,max,max],z:1},{type:"pictorialBar",itemStyle:{color:"#000A2A"},symbolRepeat:"fixed",symbolMargin:"20",symbol:"rect",symbolClip:!0,symbolSize:[4,48],symbolPosition:"start",symbolOffset:[0,-2],symbolBoundingData:max,data:value}]};
