var xAxisData=["1","2","3","4","5","6"],emphasisStyle={itemStyle:{shadowBlur:10,shadowColor:"rgba(0,0,0,0.3)"}};option={backgroundColor:"rgba(3, 4, 24, 1)",color:["rgba(18, 48, 157, 1)","rgba(53, 93, 229, 1)","rgba(2, 165, 240, 1)","rgba(76, 255, 249, 1)"],dataZoom:{type:"slider",show:!0,start:0,end:100,height:6,bottom:16},grid:{top:"10",left:"10",right:"10",bottom:"26",containLabel:!0},xAxis:{data:xAxisData,boundaryGap:!0,axisLine:{show:!1},axisLabel:{textStyle:{color:"#959FA9",fontSize:14}},axisTick:{show:!1}},yAxis:{type:"value",axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:"rgba(39, 41, 58, 0.3)",width:1}},axisLine:{show:!1,lineStyle:{color:"rgb(2,185,208)"}},axisLabel:{textStyle:{color:"#959FA9",fontSize:14}}},series:[{name:"bar",type:"bar",stack:"stack",barWidth:30,label:{show:!0,color:"#FFFFFF",position:"inside"},emphasis:emphasisStyle,data:[60,80,100,83,29,30,30]},{name:"bar2",type:"bar",stack:"stack",barWidth:30,label:{show:!0,color:"#FFFFFF",position:"inside"},emphasis:emphasisStyle,data:[50,80,100,83,29,30,30]},{name:"bar3",type:"bar",stack:"stack",barWidth:30,label:{show:!0,color:"#FFFFFF",position:"inside"},emphasis:emphasisStyle,data:[30,80,100,83,29,30,30]},{name:"bar4",type:"bar",stack:"stack",barWidth:30,label:{show:!0,color:"#FFFFFF",position:"inside"},emphasis:emphasisStyle,data:[20,80,100,83,29,30,30]}]};