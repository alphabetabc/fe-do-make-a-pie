var dataArr=[{value:91,name:"订单响应占比"}],color=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#5CF9FE"},{offset:.17,color:"#468EFD"},{offset:.9,color:"#468EFD"},{offset:1,color:"#5CF9FE"}]),colorSet=[[.91,color],[1,"#15337C"]],rich={white:{fontSize:50,color:"#fff",fontWeight:"500",padding:[-150,0,0,0]},bule:{fontSize:120,fontFamily:"DINBold",color:"#fff",fontWeight:"700",padding:[-120,0,0,0]},radius:{width:350,height:80,borderWidth:1,borderColor:"#0092F2",fontSize:50,color:"#fff",backgroundColor:"#1B215B",borderRadius:20,textAlign:"center"},size:{height:400,padding:[100,0,0,0]}};option={backgroundColor:"#0E1327",tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{type:"pie",radius:"85%",center:["50%","50%"],z:0,itemStyle:{normal:{color:new echarts.graphic.RadialGradient(.5,.5,1,[{offset:0,color:"rgba(17,24,43,0)"},{offset:.5,color:"rgba(28,42,91,.6)"},{offset:1,color:"#141C33"}],!1),label:{show:!1},labelLine:{show:!1}}},hoverAnimation:!1,label:{show:!1},tooltip:{show:!1},data:[100]},{type:"gauge",name:"外层辅助",radius:"74%",startAngle:"225",endAngle:"-45",min:0,max:100,splitNumber:4,pointer:{show:!1},detail:{show:!1},data:[{value:1}],title:{show:!0,offsetCenter:[0,30],textStyle:{color:"#fff",fontStyle:"normal",fontWeight:"normal",fontFamily:"微软雅黑",fontSize:20}},axisLine:{show:!0,lineStyle:{color:[[1,"#00FFFF"]],width:2,opacity:1}},axisTick:{show:!1},splitLine:{show:!0,length:-44,lineStyle:{color:"#051932",width:0,type:"solid"}},axisLabel:{show:!0,formatter:function(e){return e+"%"},fontSize:20}},{type:"gauge",radius:"70%",startAngle:"225",endAngle:"-45",pointer:{show:!1},detail:{formatter:function(e){var o=Math.round(e);return"{bule|"+o+"}{white|分}{size|}"},rich,offsetCenter:["0%","0%"]},data:dataArr,title:{show:!0,color:"#fff",fontStyle:"normal",fontWeight:"normal",fontFamily:"微软雅黑",fontSize:20},axisLine:{show:!0,lineStyle:{color:colorSet,width:25,shadowOffsetX:0,shadowOffsetY:0,opacity:1}},axisTick:{show:!1},splitLine:{show:!1,length:25,lineStyle:{color:"#00377a",width:2,type:"solid"}},axisLabel:{show:!1}},{name:"灰色内圈",type:"gauge",z:2,radius:"60%",startAngle:"225",endAngle:"-45",axisLine:{lineStyle:{color:[[1,"#018DFF"]],width:2,opacity:1}},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},axisTick:{show:!1},detail:{show:0}},{name:"白色圈刻度",type:"gauge",radius:"60%",startAngle:225,endAngle:-45,z:4,axisTick:{show:!1},splitLine:{length:16,lineStyle:{width:2,color:"rgba(1,244,255, 0.9)"}},axisLabel:{color:"rgba(255,255,255,0)",fontSize:66},pointer:{show:!1},axisLine:{lineStyle:{opacity:0}},detail:{show:!1},data:[{value:0,name:""}]},{type:"pie",radius:"56%",center:["50%","50%"],z:1,itemStyle:{normal:{color:new echarts.graphic.RadialGradient(.5,.5,.8,[{offset:0,color:"#4978EC"},{offset:.5,color:"#1E2B57"},{offset:1,color:"#141F3D"}],!1),label:{show:!1},labelLine:{show:!1}}},hoverAnimation:!1,label:{show:!1},tooltip:{show:!1},data:[100]}]};
