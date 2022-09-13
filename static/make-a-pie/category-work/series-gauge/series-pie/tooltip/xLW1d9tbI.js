const color=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#5CF9FE"},{offset:.17,color:"#468EFD"},{offset:.9,color:"#468EFD"},{offset:1,color:"#5CF9FE"}]),colorSet=[[1,color]],rich={white:{fontSize:50,color:"#fff",fontWeight:"500",padding:[-150,0,0,0]},bule:{fontSize:70,fontFamily:"DINBold",color:"#fff",fontWeight:"700",padding:[-120,0,0,0]},radius:{width:350,height:80,borderWidth:1,borderColor:"#0092F2",fontSize:50,color:"#fff",backgroundColor:"#1B215B",borderRadius:20,textAlign:"center"},size:{height:400,padding:[100,0,0,0]}};option={backgroundColor:"black",tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{type:"gauge",name:"外层辅助",radius:"94%",startAngle:"225",endAngle:"-45",splitNumber:"120",pointer:{show:!1},detail:{show:!1},data:[{value:1}],title:{show:!0,offsetCenter:[0,30],textStyle:{color:"#fff",fontStyle:"normal",fontWeight:"normal",fontFamily:"微软雅黑",fontSize:20}},axisLine:{show:!0,lineStyle:{color:[[1,"#00FFFF"]],width:2,opacity:1}},axisTick:{show:!1},splitLine:{show:!0,length:20,lineStyle:{color:"#051932",width:0,type:"solid"}},axisLabel:{show:!1,formatter:function(e){return e.toFixed(0)}}},{type:"gauge",radius:"90%",startAngle:"225",endAngle:"-45",pointer:{show:!0},detail:{formatter:function(e){var t=Math.round(e)},rich,offsetCenter:["0%","55%"]},data:[{name:"数值",value:99/200*100}],title:{show:!1},axisLine:{show:!0,lineStyle:{color:colorSet,width:10,shadowOffsetX:0,shadowOffsetY:0,opacity:1}},axisTick:{show:!1},splitLine:{show:!1,length:25,lineStyle:{color:"#00377a",width:2,type:"solid"}},axisLabel:{show:!1,formatter:function(e){return e.toFixed(0)}},animationDuration:4e3},{name:"灰色内圈",type:"gauge",z:2,radius:"80%",startAngle:"225",endAngle:"-45",axisLine:{lineStyle:{color:[[1,"#018DFF"]],fontSize:20,width:2,opacity:1}},splitLine:{show:!1},axisLabel:{show:!1,formatter:function(e){return e.toFixed(0)}},pointer:{show:!1},axisTick:{show:!1},detail:{show:0}},{name:"白色圈刻度",type:"gauge",radius:"80%",startAngle:225,endAngle:-45,min:0,max:200,splitNumber:7,z:4,axisTick:{show:!1},splitLine:{length:16,lineStyle:{width:2,color:"#018DFF"}},axisLabel:{color:"rgba(255,255,255,8)",fontSize:14,formatter:function(e){return e.toFixed(0)}},pointer:{show:!1},axisLine:{lineStyle:{opacity:0}},detail:{show:!1},data:[{value:0,name:""}]},{type:"pie",radius:"40%",center:["50%","50%"],z:1,itemStyle:{normal:{color:new echarts.graphic.RadialGradient(.5,.5,.8,[{offset:0,color:"#4978EC"},{offset:.5,color:"#1E2B57"},{offset:1,color:"#141F3D"}],!1),label:{show:!1},labelLine:{show:!1}}},hoverAnimation:!1,label:{show:!1},tooltip:{show:!1},data:[100],animationType:"scale"}]};