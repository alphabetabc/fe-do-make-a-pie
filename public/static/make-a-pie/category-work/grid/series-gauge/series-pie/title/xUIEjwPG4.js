var value=80;option={backgroundColor:"000",title:{text:`${value}分`,subtext:"综合评分",left:"center",top:"center",textStyle:{color:"#fff",fontSize:50,fontFamily:"DINAlternate-Bold"},subtextStyle:{color:"#ff",fontSize:30,fontFamily:"PingFangSC-Regular",top:"center"},itemGap:-4},xAxis:{splitLine:{show:!1},axisLabel:{show:!1},axisLine:{show:!1}},yAxis:{splitLine:{show:!1},axisLabel:{show:!1},axisLine:{show:!1}},series:[{type:"pie",radius:["0","50%"],center:["50%","50%"],hoverAnimation:!1,z:0,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#FFC600"},{offset:.5,color:"#30D27C"},{offset:1,color:"#0B95FF"}]),label:{show:!1},labelLine:{show:!1}}},label:{normal:{position:"center"}},data:[100]},{type:"pie",clockWise:!0,radius:["60%","55%"],hoverAnimation:!1,data:[{value,itemStyle:{normal:{borderWidth:10,borderColor:{colorStops:[{offset:0,color:"#FFC600"},{offset:1,color:"#0B95FF"}]},color:{colorStops:[{offset:0,color:"#FFC600"},{offset:1,color:"#0B95FF"}]},label:{show:!1},labelLine:{show:!1}}}},{name:"gap",value:100-value,itemStyle:{normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}}}]},{type:"gauge",radius:"67%",startAngle:225,endAngle:-134.8,z:4,axisTick:{show:!0,lineStyle:{width:2,color:"rgba(1,244,255, 0.9)"}},splitLine:{length:16,lineStyle:{width:2,color:"rgba(1,244,255, 0.9)"}},axisLabel:{color:"rgba(255,255,255,0)",fontSize:12},pointer:{show:!1},axisLine:{lineStyle:{opacity:0}},detail:{show:!1},data:[{value:0,name:""}]}]};