option={backgroundColor:"rgba(37, 62, 38, .5)",tooltip:{trigger:"axis",backgroundColor:"#ccc",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0, 255, 233,0)"},{offset:.5,color:"rgba(255, 255, 255,1)"},{offset:1,color:"rgba(0, 255, 233,0)"}],global:!1}}}},grid:{top:"17%",left:"5%",right:"3%",bottom:"15%"},xAxis:[{type:"category",name:"",nameTextStyle:{fontSize:16,padding:[0,0,0,-10],color:"#fff"},axisLine:{show:!0},axisLabel:{color:"#fff",fontSize:"100%"},axisTick:{show:!1},splitLine:{show:!1},boundaryGap:!0,data:["重大事件","特大事件","较大事件","一般事件"]}],yAxis:[{type:"value",name:"个",nameTextStyle:{fontSize:16,color:"#fff"},min:0,max:100,splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,0.1)"}},axisLine:{show:!1},axisLabel:{show:!0,textStyle:{color:"#fff",fontSize:"100%"}},axisTick:{show:!1}}],series:[{name:"",type:"bar",barWidth:20,lineStyle:{normal:{color:"#00b3f4"}},itemStyle:{normal:{show:!0,color:function(o){var e=[{type:"linear",x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"rgba(255, 255, 255, 0)"},{offset:1,color:"rgba(255, 255, 255, .7)"}],global:!1},{type:"linear",x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"rgba(3, 252, 150, 0)"},{offset:1,color:"rgba(3, 252, 150, 1)"}],global:!1},{type:"linear",x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"rgba(116, 152, 255, 0)"},{offset:1,color:"rgba(116, 152, 255, 1)"}],global:!1},{type:"linear",x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"rgba(187, 133, 234, 0)"},{offset:1,color:"rgba(187, 133, 234, 1)"}],global:!1}];return e[o.dataIndex]},label:{show:!0,position:"top",formatter:function(){return""},textStyle:{fontSize:0,color:"transparent",backgroundColor:"inherit",padding:[3,10,3,11]}}}},data:[50,40,20,30,70,80,60,78]}]};