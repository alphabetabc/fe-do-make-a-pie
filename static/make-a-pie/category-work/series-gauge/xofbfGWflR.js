var colorList=[{x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"#7BB2FF"},{offset:1,color:"#4186FF"}]},{x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"#00D0BF"},{offset:1,color:"#05C399"}]},{x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"#FFD18C"},{offset:1,color:"#FEAD5A"}]}];option={series:[{type:"gauge",splitNumber:3,radius:"93%",center:["50%","70%"],startAngle:180,endAngle:0,min:0,max:100,pointer:{show:!0,width:7,length:"60%"},axisLine:{show:!0,lineStyle:{width:35,color:[[.33,colorList[0]],[.67,colorList[1]],[1,colorList[2]]],borderColor:"#000",borderWidth:"10"}},axisLabel:{show:!0,color:"#666",fontSize:16,formatter:function(e){return e.toFixed(0)}},axisTick:{show:!1},splitLine:{show:!1,length:"28%",lineStyle:{color:"#fff",width:2}},detail:{show:!1},title:{show:!1},data:[{value:84,name:"决策层国际化导向"}]},{type:"gauge",splitNumber:10,radius:"100%",center:["50%","70%"],min:0,max:100,startAngle:180,endAngle:0,pointer:{show:!0,width:7,length:"60%"},axisLine:{show:!0,lineStyle:{width:35,color:[[.33,colorList[0]],[.67,colorList[1]],[1,colorList[2]]],opacity:.15,borderColor:"#000",borderWidth:"10"}},axisLabel:{show:!1},axisTick:{show:!1,splitNumber:5,lineStyle:{color:"#fff",width:2}},splitLine:{show:!1,length:"28%",lineStyle:{color:"#fff",width:2}},detail:{show:!1},title:{show:!1},data:[{value:84,name:"决策层国际化导向"}]}]};
