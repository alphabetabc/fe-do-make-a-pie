var highlight="#03b7c9",demoData=[{name:"a",value:160}];option={backgroundColor:"#222939",series:function(){var a=[];return demoData.forEach(function(e){a.push({type:"gauge",radius:"63.33%",splitNumber:8,min:400,max:0,axisLine:{show:!0,lineStyle:{color:[[1,highlight]],width:80}},axisLabel:{distance:6,textStyle:{color:"#fff",fontSize:"30"},padding:-58},pointer:{show:0},detail:{show:0},axisTick:{show:!1},splitLine:{length:80,lineStyle:{width:5,color:"rgba(14,15,20, 0.8)"}}},{name:e.name,type:"gauge",z:20,radius:"46.80%",startAngle:63,endAngle:-45,min:0,max:80,axisLine:{show:!0,lineStyle:{width:26,color:[[e.value/80,new echarts.graphic.LinearGradient(0,1,1,0,[{offset:0,color:"rgba(255,255,255,0)"},{offset:1,color:"#ff9f13 "}])],[1,"rgba(255,255,255,0)"]]}},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!1},detail:{show:!0,offsetCenter:[0,"3%"],textStyle:{fontSize:60,color:"#fff"},formatter:["{value}"+(e.unit||"")+"{company|}"].join(`
`),rich:{name:{fontSize:35,lineHeight:30,color:"#ffc300",fontWeight:"bold"},company:{fontSize:35,color:"#fff"}}},itemStyle:{normal:{color:highlight}},data:[{value:e.value}]},{name:"外层盘",type:"gauge",z:6,radius:"66.33%",startAngle:225,endAngle:-45,axisLine:{lineStyle:{color:[[1,"#33ffff"]],width:8,opacity:.9}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},data:[{show:!1,value:"10"}],detail:{show:0}},{name:"内层圈",type:"gauge",z:6,radius:"46.73%",startAngle:225,endAngle:-45,axisLine:{lineStyle:{color:[[1,"#33ffff"]],width:8,opacity:.9}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},data:[{show:!1,value:"10"}],detail:{show:0}})}),a}()};
