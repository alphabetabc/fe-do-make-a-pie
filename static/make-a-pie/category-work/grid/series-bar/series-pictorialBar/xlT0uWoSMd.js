const grayBar=[100,100,100];option={backgroundColor:"black",grid:{left:"-50px",right:"31px",top:"7%",bottom:"1%",containLabel:!0},xAxis:[{type:"value",axisPointer:{type:"shadow"},axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisLabel:{show:!1}}],yAxis:[{type:"category",inverse:!0,axisLabel:{verticalAlign:"bottom",align:"left",padding:[0,10,10,6],textStyle:{fontSize:14,color:"white",fontFamily:"Source Han Sans CN"},formatter(a,e){return e+=1,`{rank${e}|No.${e}} {text1|${a}}`},rich:{rank1:{width:36,height:20,color:"#FD4844",align:"center"},rank2:{width:36,height:20,color:"#FBA13A",align:"center"},rank2:{width:36,height:20,color:"#56E7FD",align:"center"},rank4:{}}},data:["威锋网","当时的","是的"],yAxisIndex:0,axisTick:{show:!1},axisLine:{show:!1}},{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,inside:!1,verticalAlign:"bottom",padding:[0,10,2,-40],lineHeight:"40",textStyle:{fontSize:16,color:"white",fontFamily:"SourceHanSansCN-Regular"}},data:[61,6,8]}],series:[{show:!0,type:"pictorialBar",symbol:"fixed",symbolSize:[7,10],symbolMargin:5,symbolRepeat:"repeat",barWidth:6,itemStyle:{normal:{color:"black"}},z:3,data:[61,62,18]},{show:!0,type:"pictorialBar",symbol:"fixed",symbolSize:[10,10],symbolMargin:5,symbolRepeat:"repeat",barGap:"-100%",barWidth:6,itemStyle:{normal:{color:"#274882"}},z:1,data:grayBar},{show:!0,type:"bar",barGap:"-100%",barWidth:"10px",max:1,labelLine:{show:!1},z:2,itemStyle:{normal:{color:{colorStops:[{offset:0,color:"#57E9FF"},{offset:1,color:"#4BEBBB"}],globalCoord:!1}}},data:[61,62,18]}]};
