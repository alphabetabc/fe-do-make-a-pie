let yList=[20,20,20],xList=[10,55,44,55],xData=["学前","小学","初中"],color=["#0082FC","#8D67FF","#00FFFF","#48DE13","#FFC516","#DC3E14","#8E16F8"];dom=800,barWidth=dom/20;let colors=[];for(let o=0;o<4;o++)colors.push({type:"linear",x:0,x2:1,y:0,y2:0,colorStops:[{offset:0,color:"rgba(20,200,207,.5)"},{offset:.5,color:"rgba(1, 125, 191,.5)"},{offset:.5,color:"rgba(2, 68, 108,.5)"},{offset:1,color:"rgba(6, 94, 149,.5)"}]});option={backgroundColor:"#010d3a",tooltip:{trigger:"axis",formatter:"{b} : {c}",axisPointer:{type:"shadow"}},grid:{left:"10%",right:"10%",top:"10%",bottom:"10%"},xAxis:{data:xData,type:"category",axisLine:{show:!0,lineStyle:{color:"#033062",shadowColor:"rgba(255,255,255,1)"}},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:20,fontSize:15,color:"#fff"}},yAxis:{show:!0,splitNumber:4,axisLine:{show:!1},splitLine:{show:!1,lineStyle:{type:"dashed",color:"#075858"}},axisLabel:{show:!1,color:"#FFFFFF",margin:30,fontSize:15}},series:[{type:"bar",barWidth,itemStyle:{normal:{color:function(o){return colors[o.dataIndex%7]}}},label:{show:!0,position:[barWidth/2,-(barWidth+0)],color:"#ffffff",fontSize:14,align:"center"},data:yList},{z:2,type:"pictorialBar",data:yList,symbolOffset:[0,"50%"],symbolSize:[barWidth,barWidth*.5],itemStyle:{normal:{borderWidth:30,color:function(o){return colors[o.dataIndex%7]}}}},{z:3,type:"pictorialBar",symbolPosition:"end",data:yList,symbolOffset:[0,"-50%"],symbolSize:[barWidth,barWidth*.5],itemStyle:{normal:{borderWidth:0,color:function(o){return colors[o.dataIndex%7].colorStops[0].color}}}}]};