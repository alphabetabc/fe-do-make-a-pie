var demoData={name:"时钟",value:90,pos:["50%","50%"]};option={backgroundColor:"#212121",series:[{name:demoData.name,type:"gauge",center:demoData.pos,radius:"60%",startAngle:225,endAngle:-45,min:0,max:100,axisLine:{show:!0,lineStyle:{width:2,color:[[demoData.value/100,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(255,255,255,0)"},{offset:1,color:"#0CD7F0"}])],[1,"rgba(255,255,255,0)"]]}},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},pointer:{show:0},detail:{show:0},data:[{value:demoData.value}]},{name:"内圆",type:"pie",hoverAnimation:!1,legendHoverLink:!1,radius:"30%",z:0,labelLine:{normal:{show:!1}},data:[{value:0},{value:10,itemStyle:{normal:{color:"rgba(110,182,255,0.22)"},emphasis:{color:"rgba(110,182,255,0.22)"}}}]},{name:"小圆形",type:"pie",hoverAnimation:!1,legendHoverLink:!1,radius:["5%","6%"],z:0,labelLine:{normal:{show:!1}},data:[{value:0},{value:10,itemStyle:{normal:{color:"#0BD9F6"},emphasis:{color:"#0BD9F6"}}}]},{name:demoData.name,type:"gauge",center:demoData.pos,radius:"54%",startAngle:226,endAngle:-46,min:0,max:100,axisLine:{show:!0,lineStyle:{width:30,color:[[1,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(38, 211, 166, 1)"},{offset:.333,color:"rgba(38, 211, 166, 1)"},{offset:.666,color:"rgba(24, 179, 254, 1)"},{offset:1,color:"rgba(255, 54, 162, 1)"}])]]}},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!0,length:"102%",width:3},title:{show:!0,offsetCenter:[0,"65%"],color:"white",fontSize:20,borderRadius:21,padding:5},detail:{show:!0,offsetCenter:[0,60],textStyle:{fontSize:25,color:"#fff"},formatter:["{value}"].join(`
`),rich:{name:{fontSize:20,lineHeight:10,color:"#ddd",padding:[30,0,0,0]}}},itemStyle:{normal:{color:"#FFED8B"}},data:[{value:demoData.value,name:demoData.name}]},{type:"gauge",center:demoData.pos,radius:"50%",splitNumber:10,min:0,max:100,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:1,color:[[1,"rgba(0,0,0,0)"]]}},splitLine:{show:!0,length:6,lineStyle:{width:1}},axisLabel:{show:!1,distance:10,textStyle:{color:"#fff",fontSize:"12",fontWeight:"bold"}},pointer:{show:0},detail:{show:0}}]};